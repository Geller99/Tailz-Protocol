-- Insert a new user
INSERT INTO "Users" ("username", "email", "password_hash", "follower_count", "follow_count", "profile_picture", "bio") 
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING "user_id";

-- Get all users
SELECT * FROM "Users";

-- Get user by ID
SELECT * FROM "Users" WHERE "user_id" = $1;

-- Get user by username
SELECT * FROM "Users" WHERE "username" = $1;

-- Get user by email
SELECT * FROM "Users" WHERE "email" = $1;


-- Update user information
UPDATE "Users"
SET "username" = $2, "email" = $3, "follower_count" = $4, "follow_count" = $5,
    "profile_picture" = $6, "bio" = $7
WHERE "user_id" = $1;


-- Delete user by ID
DELETE FROM "Users" WHERE "user_id" = $1;