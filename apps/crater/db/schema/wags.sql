CREATE TABLE Wags (
    wag_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    is_pinned BOOLEAN DEFAULT FALSE,
    media_url TEXT,
    in_reply_to_wag_id INTEGER,
    is_edited BOOLEAN DEFAULT FALSE,
    visibility VARCHAR(50) DEFAULT 'public'
);