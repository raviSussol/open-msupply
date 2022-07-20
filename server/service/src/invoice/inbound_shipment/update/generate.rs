use chrono::Utc;

use repository::Name;
use repository::{
    InvoiceLineRow, InvoiceLineRowRepository, InvoiceRow, InvoiceRowStatus, StockLineRow,
    StorageConnection,
};
use util::uuid::uuid;

use super::{UpdateInboundShipment, UpdateInboundShipmentError, UpdateInboundShipmentStatus};

pub struct LineAndStockLine {
    pub stock_line: StockLineRow,
    pub line: InvoiceLineRow,
}

pub fn generate(
    connection: &StorageConnection,
    user_id: &str,
    existing_invoice: InvoiceRow,
    other_party_option: Option<Name>,
    patch: UpdateInboundShipment,
) -> Result<(Option<Vec<LineAndStockLine>>, InvoiceRow), UpdateInboundShipmentError> {
    let should_create_batches = should_create_batches(&patch);
    let mut update_invoice = existing_invoice;

    set_new_status_datetime(&mut update_invoice, &patch);

    update_invoice.user_id = Some(user_id.to_string());
    update_invoice.comment = patch.comment.or(update_invoice.comment);
    update_invoice.their_reference = patch.their_reference.or(update_invoice.their_reference);
    update_invoice.on_hold = patch.on_hold.unwrap_or(update_invoice.on_hold);
    update_invoice.colour = patch.colour.or(update_invoice.colour);

    if let Some(status) = patch.status {
        update_invoice.status = status.full_status().into()
    }

    if let Some(other_party) = other_party_option {
        update_invoice.name_store_id = other_party.store_id().map(|id| id.to_string());
        update_invoice.name_id = other_party.name_row.id;
    }

    if !should_create_batches {
        Ok((None, update_invoice))
    } else {
        Ok((
            Some(generate_lines_and_stock_lines(
                connection,
                &update_invoice.store_id,
                &update_invoice.id,
            )?),
            update_invoice,
        ))
    }
}

pub fn should_create_batches(patch: &UpdateInboundShipment) -> bool {
    match patch.status {
        Some(UpdateInboundShipmentStatus::Delivered) => true,
        Some(UpdateInboundShipmentStatus::Verified) => true,
        _ => false,
    }
}

fn set_new_status_datetime(invoice: &mut InvoiceRow, patch: &UpdateInboundShipment) {
    let new_status = match &patch.status {
        Some(new_status) if new_status.full_status() != invoice.status => new_status,
        _ => return,
    };

    let current_datetime = Utc::now().naive_utc();

    // Inbound Shipment status order New/Shipped, Delivered, Verified
    match (new_status, &invoice.status) {
        (_, InvoiceRowStatus::Verified) => {}
        (UpdateInboundShipmentStatus::Verified, InvoiceRowStatus::Delivered) => {
            invoice.verified_datetime = Some(current_datetime)
        }
        (UpdateInboundShipmentStatus::Delivered, _) => {
            invoice.delivered_datetime = Some(current_datetime)
        }
        (UpdateInboundShipmentStatus::Verified, _) => {
            invoice.delivered_datetime = Some(current_datetime.clone());
            invoice.verified_datetime = Some(current_datetime)
        }
    }
}

pub fn generate_lines_and_stock_lines(
    connection: &StorageConnection,
    store_id: &str,
    id: &str,
) -> Result<Vec<LineAndStockLine>, UpdateInboundShipmentError> {
    let lines = InvoiceLineRowRepository::new(connection).find_many_by_invoice_id(id)?;
    let mut result = Vec::new();

    for invoice_lines in lines.into_iter() {
        let mut line = invoice_lines.clone();
        let stock_line_id = line.stock_line_id.unwrap_or(uuid());
        line.stock_line_id = Some(stock_line_id.clone());

        let InvoiceLineRow {
            id: _,
            invoice_id: _,
            item_id,
            item_name: _,
            item_code: _,
            stock_line_id: _,
            location_id,
            batch,
            expiry_date,
            pack_size,
            cost_price_per_pack,
            sell_price_per_pack,
            total_before_tax: _,
            total_after_tax: _,
            tax: _,
            r#type: _,
            number_of_packs,
            note,
        }: InvoiceLineRow = invoice_lines;

        let stock_line = StockLineRow {
            id: stock_line_id,
            item_id,
            store_id: store_id.to_string(),
            location_id,
            batch,
            pack_size,
            cost_price_per_pack,
            sell_price_per_pack,
            available_number_of_packs: number_of_packs,
            total_number_of_packs: number_of_packs,
            expiry_date,
            on_hold: false,
            note,
        };

        result.push(LineAndStockLine { line, stock_line });
    }
    Ok(result)
}
