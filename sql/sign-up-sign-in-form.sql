DROP TABLE IF EXISTS admin;

CREATE TABLE admin (
                       admin_id UUID NOT NULL PRIMARY KEY,
                       admin_name VARCHAR(64) NOT NULL,
                       admin_phone VARCHAR(32) NOT NULL,
                       admin_email VARCHAR(64) NOT NULL UNIQUE,
                       admin_hash CHAR(97) NOT NULL,
                       admin_activation_token CHAR(32)
);