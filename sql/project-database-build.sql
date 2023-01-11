
DROP TABLE IF EXISTS favorite;
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS truck;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS owner;

CREATE TABLE owner (
                       owner_id UUID NOT NULL PRIMARY KEY,
                       owner_name VARCHAR(64) NOT NULL,
                       owner_phone VARCHAR(32) NOT NULL,
                       owner_email VARCHAR(64) NOT NULL UNIQUE,
                       owner_hash CHAR(97) NOT NULL,
                       owner_activation_token CHAR(32)
);


CREATE TABLE customer (
                          customer_id UUID NOT NULL PRIMARY KEY,
                          customer_name VARCHAR(20) NOT NULL UNIQUE,
                          customer_phone VARCHAR(32),
                          customer_email VARCHAR(64) NOT NULL UNIQUE,
                          customer_hash CHAR(97) NOT NULL,
                          customer_activation_token CHAR(32)
);


CREATE TABLE truck (
                       truck_id UUID NOT NULL PRIMARY KEY,
                       truck_owner_id UUID NOT NULL,
                       truck_name VARCHAR(32) NOT NULL,
                       truck_card_accepted VARCHAR(5) NOT NULL,
                       truck_food_type VARCHAR(32) NOT NULL,
                       truck_lat DECIMAL(8,5),
                       truck_lng DECIMAL(9,5),
                       FOREIGN KEY(truck_owner_id) REFERENCES owner(owner_id)
);
CREATE INDEX ON truck (truck_owner_id);


CREATE TABLE menu (
                      menu_id UUID NOT NULL PRIMARY KEY,
                      menu_truck_id UUID NOT NULL,
                      menu_name VARCHAR(128) NOT NULL,
                      menu_price DECIMAL NOT NULL,
                      menu_description VARCHAR(256),
                      menu_img_url VARCHAR(512),
                      FOREIGN KEY(menu_truck_id) REFERENCES truck (truck_id)
);
CREATE INDEX ON menu (menu_truck_id);


CREATE TABLE favorite (
                          favorite_truck_id UUID NOT NULL,
                          favorite_customer_id UUID NOT NULL,
                          PRIMARY KEY(favorite_truck_id, favorite_customer_id),
                          FOREIGN KEY (favorite_truck_id) REFERENCES truck (truck_id),
                          FOREIGN KEY (favorite_customer_id) REFERENCES customer (customer_id)

);
CREATE INDEX ON favorite (favorite_truck_id);
CREATE INDEX ON favorite (favorite_customer_id);