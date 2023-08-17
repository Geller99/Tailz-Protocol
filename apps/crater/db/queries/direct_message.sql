-- name: CreateDirectMessage :one
INSERT INTO "DirectMessages" ("sender_id", "recipient_id", "content") 
VALUES ($1, $2, $3)
RETURNING "message_id";

-- name: GetAllDirectMessages :many
SELECT * FROM "DirectMessages";

-- name: GetDirectMessageById :one
SELECT * FROM "DirectMessages" WHERE "message_id" = $1;

-- name: GetDirectMessagesBySenderId :many
SELECT * FROM "DirectMessages" WHERE "sender_id" = $1;

-- name: GetDirectMessagesByRecipientId :many
SELECT * FROM "DirectMessages" WHERE "recipient_id" = $1;

-- name: UpdateDirectMessageInfo :one
UPDATE "DirectMessages"
SET "content" = $2, "is_read" = $3
WHERE "message_id" = $1
RETURNING *;

-- name: DeleteDirectMessageById :one
DELETE FROM "DirectMessages" WHERE "message_id" = $1
RETURNING *;
