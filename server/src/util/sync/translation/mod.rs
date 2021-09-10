mod item;
mod name;
mod store;
mod test_data;

use crate::{
    database::repository::{
        repository::IntegrationUpsertRecord, IntegrationRecord, SyncRepository,
    },
    server::data::RepositoryRegistry,
};

use self::{item::LegacyItemRow, name::LegacyNameRow, store::LegacyStoreRow};

#[derive(Debug)]
pub enum SyncType {
    Delete,
    Update,
    Insert,
}

#[derive(Debug)]
pub struct SyncRecord {
    record_id: String,
    sync_type: SyncType,
    record_type: String,
    data: String,
}

/// Translates sync records into the local DB schema.
/// Translated records are added to integration_records.
fn do_translation(
    sync_record: &SyncRecord,
    integration_records: &mut IntegrationRecord,
) -> Result<(), String> {
    if let Some(row) = LegacyNameRow::try_translate(sync_record)? {
        integration_records
            .upserts
            .push(IntegrationUpsertRecord::Name(row));

        return Ok(());
    }
    if let Some(row) = LegacyItemRow::try_translate(sync_record)? {
        integration_records
            .upserts
            .push(IntegrationUpsertRecord::Item(row));

        return Ok(());
    }
    if let Some(row) = LegacyStoreRow::try_translate(sync_record)? {
        // TODO: move this check up when fetching/validating/reordering the sync records?
        // ignore stores without name
        if row.name_id == "" {
            return Ok(());
        }
        integration_records
            .upserts
            .push(IntegrationUpsertRecord::Store(row));

        return Ok(());
    }

    Ok(()) // At this point we are either ignoring records or record_types
}

/// Imports sync records and writes them to the DB
/// If needed data records are translated to the local DB schema.
pub async fn import_sync_records(
    registry: &RepositoryRegistry,
    records: &Vec<SyncRecord>,
) -> Result<(), String> {
    let mut integration_records = IntegrationRecord {
        upserts: Vec::new(),
    };
    for record in records {
        do_translation(&record, &mut integration_records)?;
    }

    let sync_repo = registry.get::<SyncRepository>();
    sync_repo
        .integrate_records(&integration_records)
        .await
        .map_err(|e| format!("Sync Error: {}", e))?;
    Ok(())
}

#[cfg(test)]
mod tests {
    use crate::{
        database::repository::{
            repository::get_repositories, ItemRepository, NameRepository, RepositoryError,
            StoreRepository,
        },
        server::data::RepositoryRegistry,
        util::{
            sync::translation::{
                import_sync_records,
                test_data::{store::get_test_store_records, TestSyncDataRecord},
                SyncRecord,
            },
            test_db,
        },
    };

    use super::test_data::{
        item::{get_test_item_records, get_test_item_upsert_records},
        name::{get_test_name_records, get_test_name_upsert_records},
        TestSyncRecord,
    };

    fn from_option_to_db_result<T>(option: Option<T>) -> Result<T, RepositoryError> {
        match option {
            Some(record) => Ok(record),
            None => Err(RepositoryError::NotFound),
        }
    }

    fn extract_sync_records(records: Vec<TestSyncRecord>) -> Vec<SyncRecord> {
        records
            .into_iter()
            .map(|test_record| test_record.sync_record)
            .collect()
    }

    #[actix_rt::test]
    async fn test_store_translation_insert() {
        let settings = test_db::get_test_settings("omsupply-database-translation-insert");

        test_db::setup(&settings.database).await;
        let registry = RepositoryRegistry {
            repositories: get_repositories(&settings).await,
        };

        import_sync_records(&registry, &extract_sync_records(get_test_name_records()))
            .await
            .unwrap();

        import_sync_records(&registry, &extract_sync_records(get_test_store_records()))
            .await
            .unwrap();

        import_sync_records(&registry, &extract_sync_records(get_test_item_records()))
            .await
            .unwrap();

        let mut records = Vec::new();
        records.append(&mut get_test_store_records());
        records.append(&mut get_test_name_records());
        records.append(&mut get_test_item_records());

        for record in records {
            match record.translated_record {
                TestSyncDataRecord::Store(comparison_record) => {
                    assert_eq!(
                        registry
                            .get::<StoreRepository>()
                            .find_one_by_id(&record.sync_record.record_id)
                            .await,
                        from_option_to_db_result(comparison_record)
                    )
                }
                TestSyncDataRecord::Name(comparison_record) => {
                    assert_eq!(
                        registry
                            .get::<NameRepository>()
                            .find_one_by_id(&record.sync_record.record_id)
                            .await,
                        from_option_to_db_result(comparison_record)
                    )
                }
                TestSyncDataRecord::Item(comparison_record) => {
                    assert_eq!(
                        registry
                            .get::<ItemRepository>()
                            .find_one_by_id(&record.sync_record.record_id)
                            .await,
                        from_option_to_db_result(comparison_record)
                    )
                }
            }
        }
    }

    #[actix_rt::test]
    async fn test_store_translation_upsert() {
        let settings = test_db::get_test_settings("omsupply-database-translation-upsert");

        test_db::setup(&settings.database).await;
        let registry = RepositoryRegistry {
            repositories: get_repositories(&settings).await,
        };

        import_sync_records(&registry, &extract_sync_records(get_test_name_records()))
            .await
            .unwrap();

        import_sync_records(&registry, &extract_sync_records(get_test_item_records()))
            .await
            .unwrap();

        import_sync_records(
            &registry,
            &extract_sync_records(get_test_name_upsert_records()),
        )
        .await
        .unwrap();

        import_sync_records(
            &registry,
            &extract_sync_records(get_test_item_upsert_records()),
        )
        .await
        .unwrap();

        let mut records = Vec::new();
        records.append(&mut get_test_item_upsert_records());
        records.append(&mut get_test_name_upsert_records());

        for record in records {
            match record.translated_record {
                TestSyncDataRecord::Name(comparison_record) => {
                    assert_eq!(
                        registry
                            .get::<NameRepository>()
                            .find_one_by_id(&record.sync_record.record_id)
                            .await,
                        from_option_to_db_result(comparison_record)
                    )
                }
                TestSyncDataRecord::Item(comparison_record) => {
                    assert_eq!(
                        registry
                            .get::<ItemRepository>()
                            .find_one_by_id(&record.sync_record.record_id)
                            .await,
                        from_option_to_db_result(comparison_record)
                    )
                }
                _ => panic!("not implemented"),
            }
        }
    }
}
