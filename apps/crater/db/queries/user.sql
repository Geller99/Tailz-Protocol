-- name: CreateUser :one
INSERT INTO "Users" ("username", "email", "password_hash", "follower_count", "follow_count", "profile_picture", "bio") 
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING "user_id";

-- name: GetAllUsers :many
SELECT * FROM "Users";

-- name: GetUserById :one
SELECT * FROM "Users" WHERE "user_id" = $1;

-- name: GetUserByUsername :one
SELECT * FROM "Users" WHERE "username" = $1;

-- name: GetUserByEmail :one
SELECT * FROM "Users" WHERE "email" = $1;

-- name: UpdateUserInfo :one
UPDATE "Users"
SET "username" = $2, "email" = $3, "follower_count" = $4, "follow_count" = $5,
    "profile_picture" = $6, "bio" = $7
WHERE "user_id" = $1
RETURNING *;

-- name: DeleteUserById :one
DELETE FROM "Users" WHERE "user_id" = $1
RETURNING *;
