CREATE TABLE User_Settings (
    user_id INTEGER PRIMARY KEY REFERENCES Users(user_id),
    privacy_setting VARCHAR(50) DEFAULT 'public',
    email_notifications_enabled BOOLEAN DEFAULT TRUE,
    push_notifications_enabled BOOLEAN DEFAULT TRUE,
    dark_mode_enabled BOOLEAN DEFAULT FALSE,
    language_preference VARCHAR(50) DEFAULT 'en',
    additional_preferences JSON
);
