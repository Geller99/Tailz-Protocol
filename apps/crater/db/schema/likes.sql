CREATE TABLE Likes (
    like_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    wag_id INTEGER REFERENCES Wags(wag_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
