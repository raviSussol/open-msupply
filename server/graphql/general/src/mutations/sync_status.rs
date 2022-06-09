pub use async_graphql::*;
use chrono::NaiveDateTime;

// Initialisation Status
#[derive(Union)]
pub enum SyncStatus {
    SyncStatusStarted(SyncStatusStarted),
    SyncStatusCompleted(SyncStatusCompleted),
    SyncStatusError(SyncStatusError),
}

// Sync Status Node
#[derive(SimpleObject)]
pub struct SyncStatusNode {
    status: SyncStatus,
    total_progress: Option<u32>,
    done_progress: Option<u32>,
}

// Sync Status Node
#[derive(SimpleObject)]
pub struct InitialisationStatusNode {
    initialisation_status: Option<SyncStatusNode>,
    preparing_records_status: Option<SyncStatusNode>,
    latest_central_pull: Option<SyncStatusNode>,
    latest_remote_pull: Option<SyncStatusNode>,
}

// Sync Status Node
#[derive(SimpleObject)]
pub struct OperationalSyncStatusNode {
    is_syncing: bool,
    operational_status: Option<SyncStatusNode>,
    previous_central_pull: SyncStatusNode,
    previous_remote_pull: SyncStatusNode,
    previous_remote_push: Option<SyncStatusNode>,
    latest_central_pull: Option<SyncStatusNode>,
    latest_remote_pull: Option<SyncStatusNode>,
    latest_remote_push: Option<SyncStatusNode>,
}

#[derive(Default, Clone)]
pub struct SyncInfoQueries;

#[Object]
impl SyncInfoQueries {
    pub async fn initialisation_status(&self) -> InitialisationStatusNode {
        todo!()
    }
    pub async fn operational_sync_status(&self) -> OperationalSyncStatusNode {
        todo!()
    }
    pub async fn number_of_records_in_queue(&self) -> u32 {
        todo!()
    }
}

#[derive(SimpleObject)]
pub struct SyncStatusStarted {
    started_datetime: NaiveDateTime,
}

#[derive(SimpleObject)]
pub struct SyncStatusCompleted {
    started_datetime: NaiveDateTime,
    completed_datetime: NaiveDateTime,
}

#[derive(Enum, PartialEq, Eq, Clone, Copy)]
pub enum SyncStatusErrorCode {
    Connection,
    Server,
    Integration,
}

#[derive(SimpleObject)]
pub struct SyncStatusError {
    started_datetime: NaiveDateTime,
    error_datetime: NaiveDateTime,
    error_code: SyncStatusErrorCode,
    error_message: String,
}
