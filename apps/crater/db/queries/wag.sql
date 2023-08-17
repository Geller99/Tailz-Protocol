-- name: GetAllWags :many
SELECT * FROM "Wagz";

-- name: GetWagById :one
SELECT * FROM "Wagz" WHERE "wag_id" = $1;

-- name: GetWagzByUserId :many
SELECT * FROM "Wagz" WHERE "user_id" = $1;

-- name: UpdateWagInfo :one
UPDATE "Wagz"
SET "content" = $2
WHERE "wag_id" = $1
RETURNING *;

-- name: DeleteWagById :one
DELETE FROM "Wagz" WHERE "wag_id" = $1
RETURNING *;
