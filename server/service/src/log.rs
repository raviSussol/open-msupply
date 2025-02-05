use chrono::NaiveDateTime;
use repository::{
    Log, LogFilter, LogRepository, LogRow, LogRowRepository, LogSort, LogType,
    StorageConnectionManager,
};
use repository::{PaginationOption, RepositoryError};
use util::uuid::uuid;

use crate::service_provider::ServiceContext;

use super::{get_default_pagination, i64_to_u32, ListError, ListResult};

pub const MAX_LIMIT: u32 = 1000;
pub const MIN_LIMIT: u32 = 1;

pub fn get_logs(
    connection_manager: &StorageConnectionManager,
    pagination: Option<PaginationOption>,
    filter: Option<LogFilter>,
    sort: Option<LogSort>,
) -> Result<ListResult<Log>, ListError> {
    let pagination = get_default_pagination(pagination, MAX_LIMIT, MIN_LIMIT)?;
    let connection = connection_manager.connection()?;
    let repository = LogRepository::new(&connection);

    Ok(ListResult {
        rows: repository.query(pagination, filter.clone(), sort)?,
        count: i64_to_u32(repository.count(filter)?),
    })
}

pub fn log_entry(
    ctx: &ServiceContext,
    log_type: LogType,
    record_id: Option<String>,
    datetime: NaiveDateTime,
) -> Result<(), RepositoryError> {
    let log = &LogRow {
        id: uuid(),
        r#type: log_type,
        user_id: if ctx.user_id != "" {
            Some(ctx.user_id.clone())
        } else {
            None
        },
        store_id: if ctx.store_id != "" {
            Some(ctx.store_id.clone())
        } else {
            None
        },
        record_id,
        datetime,
    };

    Ok(LogRowRepository::new(&ctx.connection).insert_one(log)?)
}
