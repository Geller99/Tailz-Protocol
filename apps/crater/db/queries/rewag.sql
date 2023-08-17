-- Insert a new rewag
INSERT INTO "ReWagz" ("user_id", "owner_wag_id")
VALUES ($1, $2)
RETURNING "rewagz_id";

-- Get all rewagz
SELECT * FROM "ReWagz";

-- Get rewag by ID
SELECT * FROM "ReWagz" WHERE "rewagz_id" = $1;

-- Get rewagz by user ID
SELECT * FROM "ReWagz" WHERE "user_id" = $1;

-- Get rewagz by owner_wag_id
SELECT * FROM "ReWagz" WHERE "owner_wag_id" = $1;

-- Delete rewag by ID
DELETE FROM "ReWagz" WHERE "rewagz_id" = $1;