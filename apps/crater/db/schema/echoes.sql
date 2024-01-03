CREATE TABLE Echoes (
    echo_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    wag_id INTEGER REFERENCES Wags(wag_id),
    counter INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
