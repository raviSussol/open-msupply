use chrono::Utc;
use repository::{
    EqualFilter, InvoiceLine, InvoiceLineFilter, InvoiceLineRepository, InvoiceRowRepository,
    LogType, RepositoryError, TransactionError,
};

pub mod validate;

use validate::validate;

use crate::{
    invoice_line::outbound_shipment_line::{
        delete_outbound_shipment_line, DeleteOutboundShipmentLine, DeleteOutboundShipmentLineError,
    },
    log::log_entry,
    service_provider::ServiceContext,
    WithDBError,
};

type OutError = DeleteOutboundShipmentError;

pub fn delete_outbound_shipment(
    ctx: &ServiceContext,
    id: String,
) -> Result<String, DeleteOutboundShipmentError> {
    let invoice_id = ctx
        .connection
        .transaction_sync(|connection| {
            validate(&id, &ctx.store_id, &connection)?;

            // TODO https://github.com/openmsupply/remote-server/issues/839
            let lines = InvoiceLineRepository::new(&connection)
                .query_by_filter(InvoiceLineFilter::new().invoice_id(EqualFilter::equal_to(&id)))?;
            for line in lines {
                delete_outbound_shipment_line(
                    ctx,
                    DeleteOutboundShipmentLine {
                        id: line.invoice_line_row.id.clone(),
                    },
                )
                .map_err(|error| DeleteOutboundShipmentError::LineDeleteError {
                    line_id: line.invoice_line_row.id,
                    error,
                })?;
            }
            // End TODO

            match InvoiceRowRepository::new(&connection).delete(&id) {
                Ok(_) => Ok(id.clone()),
                Err(error) => Err(OutError::DatabaseError(error)),
            }
        })
        .map_err(|error| error.to_inner_error())?;

    log_entry(
        &ctx,
        LogType::InvoiceDeleted,
        Some(id),
        Utc::now().naive_utc(),
    )?;

    Ok(invoice_id)
}

#[derive(Debug, PartialEq, Clone)]

pub enum DeleteOutboundShipmentError {
    InvoiceDoesNotExist,
    DatabaseError(RepositoryError),
    NotThisStoreInvoice,
    CannotEditFinalised,
    InvoiceLinesExists(Vec<InvoiceLine>),
    LineDeleteError {
        line_id: String,
        error: DeleteOutboundShipmentLineError,
    },
    NotAnOutboundShipment,
}

impl From<RepositoryError> for DeleteOutboundShipmentError {
    fn from(error: RepositoryError) -> Self {
        DeleteOutboundShipmentError::DatabaseError(error)
    }
}

impl From<TransactionError<DeleteOutboundShipmentError>> for DeleteOutboundShipmentError {
    fn from(error: TransactionError<DeleteOutboundShipmentError>) -> Self {
        match error {
            TransactionError::Transaction { msg, level } => {
                DeleteOutboundShipmentError::DatabaseError(RepositoryError::TransactionError {
                    msg,
                    level,
                })
            }
            TransactionError::Inner(e) => e,
        }
    }
}

impl<ERR> From<WithDBError<ERR>> for DeleteOutboundShipmentError
where
    ERR: Into<DeleteOutboundShipmentError>,
{
    fn from(result: WithDBError<ERR>) -> Self {
        match result {
            WithDBError::DatabaseError(error) => error.into(),
            WithDBError::Error(error) => error.into(),
        }
    }
}

#[cfg(test)]
mod test {
    use repository::{
        mock::{
            mock_inbound_shipment_c, mock_outbound_shipment_b, mock_outbound_shipment_c,
            mock_store_a, mock_store_c, MockDataInserts,
        },
        test_db::setup_all,
        InvoiceRowRepository,
    };

    use crate::{
        invoice::outbound_shipment::DeleteOutboundShipmentError as ServiceError,
        service_provider::ServiceProvider,
    };

    #[actix_rt::test]
    async fn delete_outbound_shipment_errors() {
        let (_, _, connection_manager, _) =
            setup_all("delete_outbound_shipment_errors", MockDataInserts::all()).await;

        let service_provider = ServiceProvider::new(connection_manager, "app_data");
        let mut context = service_provider
            .context(mock_store_a().id, "".to_string())
            .unwrap();
        let service = service_provider.invoice_service;

        // InvoiceDoesNotExist
        assert_eq!(
            service.delete_outbound_shipment(&context, "invalid".to_string()),
            Err(ServiceError::InvoiceDoesNotExist)
        );

        //NotAnOutboundShipment
        assert_eq!(
            service.delete_outbound_shipment(&context, mock_inbound_shipment_c().id),
            Err(ServiceError::NotAnOutboundShipment)
        );

        //NotThisStoreInvoice
        assert_eq!(
            service.delete_outbound_shipment(&context, mock_outbound_shipment_b().id),
            Err(ServiceError::NotThisStoreInvoice)
        );

        //CannotEditFinalised
        context.store_id = mock_store_c().id;
        assert_eq!(
            service.delete_outbound_shipment(&context, mock_outbound_shipment_b().id),
            Err(ServiceError::CannotEditFinalised)
        );
    }

    #[actix_rt::test]
    async fn delete_outbound_shipment_success() {
        let (_, connection, connection_manager, _) =
            setup_all("delete_outbound_shipment_success", MockDataInserts::all()).await;

        let service_provider = ServiceProvider::new(connection_manager, "app_data");
        let context = service_provider
            .context(mock_store_c().id, "".to_string())
            .unwrap();
        let service = service_provider.invoice_service;

        let invoice_id = service
            .delete_outbound_shipment(&context, mock_outbound_shipment_c().id)
            .unwrap();

        //test entry has been deleted
        assert_eq!(
            InvoiceRowRepository::new(&connection)
                .find_one_by_id_option(&invoice_id)
                .unwrap(),
            None
        );
    }
}
