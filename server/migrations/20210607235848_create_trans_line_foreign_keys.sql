-- Create trans_line foreign key constraints.

BEGIN;
ALTER TABLE trans_line ADD CONSTRAINT fk_transact FOREIGN KEY(transaction_id) REFERENCES transact(id);
ALTER TABLE trans_line ADD CONSTRAINT fk_item FOREIGN KEY(item_id) REFERENCES item(id);
ALTER TABLE trans_line ADD CONSTRAINT fk_item_line FOREIGN KEY(item_line_id) REFERENCES item_line(id);
COMMIT;

