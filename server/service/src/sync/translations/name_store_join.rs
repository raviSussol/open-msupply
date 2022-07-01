use repository::{NameRowRepository, NameStoreJoinRow, StorageConnection, SyncBufferRow};

use serde::{Deserialize, Serialize};

use super::{IntegrationRecords, LegacyTableName, PullUpsertRecord, SyncTranslation};

#[allow(non_snake_case)]
#[derive(Deserialize, Serialize)]
pub struct LegacyNameStoreJoinRow {
    pub ID: String,
    pub store_ID: String,
    pub name_ID: String,
    #[serde(rename = "om_name_is_customer")]
    pub name_is_customer: Option<bool>,
    #[serde(rename = "om_name_is_supplier")]
    pub name_is_supplier: Option<bool>,
}

pub(crate) struct NameStoreJoinTranslation {}
impl SyncTranslation for NameStoreJoinTranslation {
    fn try_translate_pull(
        &self,
        connection: &StorageConnection,
        sync_record: &SyncBufferRow,
    ) -> Result<Option<IntegrationRecords>, anyhow::Error> {
        let table_name = LegacyTableName::NAME_STORE_JOIN;

        if sync_record.table_name != table_name {
            return Ok(None);
        }

        let data = serde_json::from_str::<LegacyNameStoreJoinRow>(&sync_record.data)?;

        let name = match NameRowRepository::new(connection).find_one_by_id(&data.name_ID)? {
            Some(name) => name,
            None => {
                return Err(anyhow::anyhow!(
                    "Failed to get name '{}' for name_store_join '{}'",
                    data.name_ID,
                    data.ID
                ))
            }
        };

        let result = NameStoreJoinRow {
            id: data.ID,
            name_id: data.name_ID,
            store_id: data.store_ID,
            name_is_customer: data.name_is_customer.unwrap_or(name.is_customer),
            name_is_supplier: data.name_is_supplier.unwrap_or(name.is_supplier),
        };

        Ok(Some(IntegrationRecords::from_upsert(
            PullUpsertRecord::NameStoreJoin(result),
        )))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use repository::{mock::MockDataInserts, test_db::setup_all};

    #[actix_rt::test]
    async fn test_name_store_join_translation() {
        use crate::sync::test::test_data::name_store_join as test_data;
        let translator = NameStoreJoinTranslation {};

        let (_, connection, _, _) = setup_all(
            "test_name_store_join_translation",
            MockDataInserts::none().names(),
        )
        .await;

        for record in test_data::test_pull_records() {
            let translation_result = translator
                .try_translate_pull(&connection, &record.sync_buffer_row)
                .unwrap();

            assert_eq!(translation_result, record.translated_record);
        }
    }
}