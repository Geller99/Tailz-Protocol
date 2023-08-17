-- Down migration to drop tables in the exact reverse of the order they were created

-- Drop the "DirectMessages" table
DROP TABLE IF EXISTS "DirectMessages";

-- Drop the "ReWagz" table
DROP TABLE IF EXISTS "ReWagz";

-- Drop the "Wagz" table
DROP TABLE IF EXISTS "Wagz";

-- Drop the "Users" table
DROP TABLE IF EXISTS "Users";