CREATE TABLE Follows (
    follower_id INTEGER REFERENCES Users(user_id),
    following_id INTEGER REFERENCES Users(user_id),
    followed_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (follower_id, following_id)
);
