-- Insert a new direct message
INSERT INTO "DirectMessages" ("sender_id", "recipient_id", "content") 
VALUES ($1, $2, $3)
RETURNING "message_id";

-- Get all direct messages
SELECT * FROM "DirectMessages";

-- Get direct message by ID
SELECT * FROM "DirectMessages" WHERE "message_id" = $1;

-- Get direct messages sent by a user
SELECT * FROM "DirectMessages" WHERE "sender_id" = $1;

-- Get direct messages received by a user
SELECT * FROM "DirectMessages" WHERE "recipient_id" = $1;

-- Update direct message information
UPDATE "DirectMessages"
SET "content" = $2, "is_read" = $3
WHERE "message_id" = $1;

-- Delete direct message by ID
DELETE FROM "DirectMessages" WHERE "message_id" = $1;