#[cfg(test)]
mod query {
    use domain::location::{InsertLocation, Location, LocationFilter};
    use repository::{mock::MockDataInserts, test_db::setup_all, LocationRepository};

    use crate::{
        current_store_id,
        location::insert::{
            InsertLocationError, InsertLocationService, InsertLocationServiceTrait,
        },
        service_provider::ServiceConnection,
    };

    #[actix_rt::test]
    async fn insert_location_service_errors() {
        let (mock_data, _, connection_manager, _) =
            setup_all("insert_location_service_errors", MockDataInserts::all()).await;

        let connection = connection_manager.connection().unwrap();
        let location_repository = LocationRepository::new(&connection);
        let service = InsertLocationService(ServiceConnection::Connection(
            connection_manager.connection().unwrap(),
        ));

        let locations_in_store = location_repository
            .query_by_filter(LocationFilter::new().store_id(|f| f.equal_to(&current_store_id())))
            .unwrap();

        assert_eq!(
            service.insert_location(InsertLocation {
                id: mock_data.locations[0].id.clone(),
                code: "invalid".to_owned(),
                name: None,
                on_hold: None
            }),
            Err(InsertLocationError::LocationAlreadyExists)
        );

        assert_eq!(
            service.insert_location(InsertLocation {
                id: "new_id".to_owned(),
                code: locations_in_store[0].code.clone(),
                name: None,
                on_hold: None
            }),
            Err(InsertLocationError::LocationWithCodeAlreadyExists)
        );
    }

    #[actix_rt::test]
    async fn insert_location_service_success() {
        let (_, _, connection_manager, _) =
            setup_all("insert_location_service_success", MockDataInserts::all()).await;

        let connection = connection_manager.connection().unwrap();
        let location_repository = LocationRepository::new(&connection);
        let service = InsertLocationService(ServiceConnection::Connection(
            connection_manager.connection().unwrap(),
        ));

        let result_location = Location {
            id: "new_id".to_owned(),
            name: "new_code".to_owned(),
            code: "new_code".to_owned(),
            on_hold: false,
        };

        assert_eq!(
            service.insert_location(InsertLocation {
                id: "new_id".to_owned(),
                code: "new_code".to_owned(),
                name: None,
                on_hold: None
            }),
            Ok(result_location.clone())
        );

        assert_eq!(
            location_repository
                .query_by_filter(
                    LocationFilter::new()
                        .id(|f| f.equal_to(&"new_id".to_owned()))
                        .store_id(|f| f.equal_to(&current_store_id()))
                )
                .unwrap(),
            vec![result_location]
        );

        // Insert location with code that appears in location in another store
        assert_eq!(
            service.insert_location(InsertLocation {
                id: "new_id2".to_owned(),
                code: "store_b_location_code".to_owned(),
                name: Some("new_location_name".to_owned()),
                on_hold: Some(true)
            }),
            Ok(Location {
                id: "new_id2".to_owned(),
                name: "new_location_name".to_owned(),
                code: "store_b_location_code".to_owned(),
                on_hold: true
            })
        );
    }
}
