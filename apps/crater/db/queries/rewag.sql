-- name: CreateReWag :one
INSERT INTO "ReWagz" ("user_id", "owner_wag_id")
VALUES ($1, $2)
RETURNING "rewagz_id";

-- name: GetAllReWagz :many
SELECT * FROM "ReWagz";

-- name: GetReWagById :one
SELECT * FROM "ReWagz" WHERE "rewagz_id" = $1;

-- name: GetReWagzByUserId :many
SELECT * FROM "ReWagz" WHERE "user_id" = $1;

-- name: GetReWagzByOwnerWagId :many
SELECT * FROM "ReWagz" WHERE "owner_wag_id" = $1;

-- name: DeleteReWagById :one
DELETE FROM "ReWagz" WHERE "rewagz_id" = $1
RETURNING *;
