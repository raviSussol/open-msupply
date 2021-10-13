use crate::{
    database::repository::{
        InvoiceRepository, RepositoryError, StorageConnectionManager, TransactionError,
    },
    domain::customer_invoice::InsertCustomerInvoice,
    util::uuid::uuid,
};

pub mod generate;
pub mod validate;

use generate::generate;
use validate::validate;

pub enum InsertCustomerInvoiceError {
    OtherPartyCannotBeThisStore,
    OtherPartyIdNotFound(String),
    OtherPartyNotACustomerOfThisStore(String),
    InvoiceAlreadyExists,
    DatabaseError(RepositoryError),
}

impl From<RepositoryError> for InsertCustomerInvoiceError {
    fn from(error: RepositoryError) -> Self {
        InsertCustomerInvoiceError::DatabaseError(error)
    }
}

impl From<TransactionError<InsertCustomerInvoiceError>> for InsertCustomerInvoiceError {
    fn from(error: TransactionError<InsertCustomerInvoiceError>) -> Self {
        match error {
            TransactionError::Transaction { msg } => {
                InsertCustomerInvoiceError::DatabaseError(RepositoryError::DBError { msg })
            }
            TransactionError::Inner(e) => e,
        }
    }
}

/// Insert a new customer invoice and returns the invoice id when successful.
pub fn insert_customer_invoice(
    connection_manager: &StorageConnectionManager,
    input: InsertCustomerInvoice,
) -> Result<String, InsertCustomerInvoiceError> {
    let connection = connection_manager.connection()?;

    let new_invoice_id = connection.transaction_sync(|connection| {
        let id = uuid();
        validate(&id, &input, &connection)?;
        let new_invoice = generate(id, input, &connection)?;
        InvoiceRepository::new(&connection).upsert_one(&new_invoice)?;

        Ok(new_invoice.id)
    })?;

    Ok(new_invoice_id)
}
