CREATE TABLE "Users" (
  "user_id" SERIAL PRIMARY KEY,
  "username" VARCHAR(50) UNIQUE NOT NULL,
  "email" VARCHAR(100) UNIQUE NOT NULL,
  "password_hash" VARCHAR(100) NOT NULL,
  "follower_count" INT,
  "follow_count" INT,
  "profile_picture" VARCHAR(200),
  "bio" TEXT,
  "join_date" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "last_login" TIMESTAMP
);

CREATE TABLE "Wagz" (
  "wag_id" SERIAL PRIMARY KEY,
  "user_id" INT,
  "rewagz_count" INT DEFAULT 0,
  "likes" INT DEFAULT 0,
  "content" TEXT NOT NULL,
  "timestamp" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "ReWagz" (
  "rewagz_id" SERIAL PRIMARY KEY,
  "user_id" INT,
  "owner_wag_id" INT,
  "timestamp" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "DirectMessages" (
  "message_id" SERIAL PRIMARY KEY,
  "sender_id" VARCHAR(50),
  "recipient_id" VARCHAR(50),
  "content" TEXT,
  "timestamp" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "is_read" BOOLEAN DEFAULT false
);

-- ALTER TABLE "Wagz" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id");

-- ALTER TABLE "ReWagz" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id");

-- ALTER TABLE "ReWagz" ADD FOREIGN KEY ("owner_wag_id") REFERENCES "Wagz" ("wag_id");

-- ALTER TABLE "DirectMessages" ADD FOREIGN KEY ("sender_id") REFERENCES "Users" ("user_id");

-- ALTER TABLE "DirectMessages" ADD FOREIGN KEY ("recipient_id") REFERENCES "Users" ("user_id");
