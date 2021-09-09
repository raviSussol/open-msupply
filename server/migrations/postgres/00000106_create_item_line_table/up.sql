-- Create item_line table.

CREATE TABLE item_line (
    id TEXT NOT NULL PRIMARY KEY,
    item_id TEXT NOT NULL,
    store_id TEXT NOT NULL,
    batch text NOT NULL,
    quantity DOUBLE PRECISION NOT NULL,
    FOREIGN KEY(item_id) REFERENCES item(id),
    FOREIGN KEY(store_id) REFERENCES store(id)
)
