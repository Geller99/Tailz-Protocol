## Crater Database Design
Entities include User, Wags(Posts), Echoes(Reposts), Settings, Likes, Follows, Notifications, Direct Messages


### Users Table
user_id (Primary Key)
username
email
password_hash
created_at
updated_at
followers
following
profile_picture_url
bio
location
website_url
birth_date
account_status    // default active
is_private
is_verified
last_login
login_attempts


### Wags Table
wag_id (Primary Key)
user_id (Foreign Key referencing Users)
content
created_at
updated_at
is_pinned
media_url
in_reply_to_wag_id
is_edited
visibility


### Likes
Description: this table tracks likes on a post, indicating who liked a post, what post it was and when it was liked 
like_id

user_id
wag_id
created_at


### Echoes
echo_id (primary key)
user_id (foreign key referencing who echoed )
wag_id  (foreign key referencing echoed wag)
counter
created_at


### Notifications
Description: This table stores notifications for each user, allowing users to know who triggered a notification, what post it was triggered on and when

Columns:
notification_id
    Type: INTEGER
    Description: The ID of the notification stored
    Primary Key
user_id
    Type: INTEGER
    Description: The ID of the User who's being notified
    Foreign Key: References Users(user_id)
type
    Type: VARCHAR or ENUM
    Description: The type of item the notification was triggered
originator_id
    Type: INTEGER
    Description: the user Id of the user who triggered notifications
wag_id
    Type: INTEGER
    Description: the Id of the 
created_at 
read_status 



### User Settings
Description:This table stores the individual settings for each user, allowing customization of their experience on the platform.
Columns:

user_id
    Type: INTEGER
    Description: The ID of the user to whom these settings apply.
    Primary Key
    Foreign Key: References Users(user_id)

privacy_setting
    Type: VARCHAR or ENUM
    Description: The user's privacy setting (e.g., 'public', 'private', 'friends_only').
    Note: The specific values will depend on the privacy options you want to offer.
    
email_notifications_enabled
    Type: BOOLEAN
    Description: Whether or not the user receives email notifications.
    Default: TRUE or FALSE, based on your platform's default setting.
    
push_notifications_enabled
    Type: BOOLEAN
    Description: Whether or not the user receives push notifications on their device.
    Default: TRUE or FALSE

dark_mode_enabled
    Type: BOOLEAN
    Description: Whether or not the user has enabled dark mode for the UI.
    Default: FALSE

language_preference
    Type: VARCHAR
    Description: The user's preferred language for the platform.
    Note: Store language codes (e.g., 'en', 'es') or full language names.
    
additional_preferences
    Type: JSON or TEXT
    Description: Any additional user preferences stored in a flexible format.
    Note: Useful for storing less structured data or preferences that might vary widely among users.




### Direct_Messages
Description: This table stores the direct messages sent between users.

Columns:
message_id
    Type: [appropriate data type, e.g., SERIAL or INTEGER]
    Description: A unique identifier for each message.
    Primary Key

sender_id
    Type: INTEGER
    Description: The ID of the user who sent the message.
    Foreign Key: References Users(user_id)

receiver_id
    Type: INTEGER
    Description: The ID of the user who received the message.
    Foreign Key: References Users(user_id)
    
content
    Type: TEXT
    Description: The text content of the message.
    
created_at
    Type: TIMESTAMP
    Default: CURRENT_TIMESTAMP
    Description: The date and time when the message was sent.



### Follows
Description: This table tracks the follow relationships between users, indicating who follows whom and when the follow action took place.

Columns:
follower_id
    Type: INTEGER
    Description: The ID of the user who is following.
    Foreign Key: References Users(user_id)
    Note: This column represents the user doing the following.

following_id
    Type: INTEGER
    Description: The ID of the user being followed.
    Foreign Key: References Users(user_id)
    Note: This column represents the user being followed.

followed_date
    Type: TIMESTAMP
    Default: CURRENT_TIMESTAMP
    Description: The date and time when the follow action occurred.