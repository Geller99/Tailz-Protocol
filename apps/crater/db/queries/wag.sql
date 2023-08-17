-- Get all wagz
SELECT * FROM "Wagz";

-- Get wag by ID
SELECT * FROM "Wagz" WHERE "wag_id" = $1;

-- Get wagz by user ID
SELECT * FROM "Wagz" WHERE "user_id" = $1;

-- Update wag information
UPDATE "Wagz"
SET "content" = $2
WHERE "wag_id" = $1;

-- Delete wag by ID
DELETE FROM "Wagz" WHERE "wag_id" = $1;