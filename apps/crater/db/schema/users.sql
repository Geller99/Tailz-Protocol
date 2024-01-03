CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    followers INTEGER DEFAULT 0,
    following INTEGER DEFAULT 0,
    profile_picture_url TEXT,
    bio TEXT,
    location TEXT,
    website_url TEXT,
    birth_date DATE,
    account_status VARCHAR(50) DEFAULT 'active',
    is_private BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    last_login TIMESTAMP,
    login_attempts INTEGER DEFAULT 0
);

CREATE INDEX idx_username ON Users(username);
