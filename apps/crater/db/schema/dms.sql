CREATE TABLE Direct_Messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INTEGER REFERENCES Users(user_id),
    receiver_id INTEGER REFERENCES Users(user_id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);