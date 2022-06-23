use repository::{PaginationOption, RepositoryError};

use crate::service_provider::ServiceContext;
use crate::service_provider::ServiceProvider;

pub use self::query::*;
mod query;
pub use self::update::*;
pub mod patient_document_update;
pub mod patient_schema;
mod update;

/// The default document type for a patient
pub const PATIENT_TYPE: &str = "Patient";

pub fn patient_doc_name(patient_id: &str) -> String {
    format!("patients/{}", patient_id)
}

pub trait PatientServiceTrait: Sync + Send {
    fn get_patients(
        &self,
        ctx: &ServiceContext,
        store_id: &str,
        pagination: Option<PaginationOption>,
        filter: Option<PatientFilter>,
        sort: Option<PatientSort>,
    ) -> Result<Vec<Patient>, RepositoryError> {
        get_patients(ctx, store_id, pagination, filter, sort)
    }

    fn update_patient(
        &self,
        ctx: &ServiceContext,
        service_provider: &ServiceProvider,
        store_id: String,
        user_id: &str,
        input: UpdatePatient,
    ) -> Result<Patient, UpdatePatientError> {
        update_patient(ctx, service_provider, store_id, user_id, input)
    }
}

pub struct PatientService {}
impl PatientServiceTrait for PatientService {}
