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

CREATE TABLE Likes (
    like_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    wag_id INTEGER REFERENCES Wags(wag_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Echoes (
    echo_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    wag_id INTEGER REFERENCES Wags(wag_id),
    counter INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    type VARCHAR(255),
    originator_id INTEGER REFERENCES Users(user_id),
    wag_id INTEGER REFERENCES Wags(wag_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_status BOOLEAN DEFAULT FALSE
);


CREATE TABLE User_Settings (
    user_id INTEGER PRIMARY KEY REFERENCES Users(user_id),
    privacy_setting VARCHAR(50) DEFAULT 'public',
    email_notifications_enabled BOOLEAN DEFAULT TRUE,
    push_notifications_enabled BOOLEAN DEFAULT TRUE,
    dark_mode_enabled BOOLEAN DEFAULT FALSE,
    language_preference VARCHAR(50) DEFAULT 'en',
    additional_preferences JSON
);


CREATE TABLE Direct_Messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INTEGER REFERENCES Users(user_id),
    receiver_id INTEGER REFERENCES Users(user_id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Follows (
    follower_id INTEGER REFERENCES Users(user_id),
    following_id INTEGER REFERENCES Users(user_id),
    followed_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (follower_id, following_id)
);
