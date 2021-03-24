CREATE SEQUENCE stores_seq;
CREATE SEQUENCE sections_seq;
CREATE SEQUENCE legends_seq;
CREATE SEQUENCE receipts_seq;
CREATE SEQUENCE cartItems_seq;
CREATE SEQUENCE purchasedItems_seq;
CREATE SEQUENCE logs_seq;
CREATE SEQUENCE sessions_seq;

-- Stores(id, name, gst_percetage, hst_percentage, pst_percentage, address)

CREATE TABLE stores (
  id int NOT NULL DEFAULT NEXTVAL ('stores_seq'),
  name varchar(250) NOT NULL,
  address varchar(1000) NOT NULL,
  created_at timestamp without time zone default (now() at time zone 'utc'),
  updated_at timestamp,
  PRIMARY KEY (id)  
);

-- Legends(id, store_id, key, color)

CREATE TABLE legends (
  id int NOT NULL DEFAULT NEXTVAL ('legends_seq'),
  store_id int NOT NULL,
  key varchar(250) NOT NULL,
  colour int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (store_id) REFERENCES stores(id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE 
);

-- ALTER TABLE legends ADD CONSTRAINT legends_store_id_fk FOREIGN KEY (store_id) REFERENCES stores(id);

-- Sections(id, store_id, x, y, width, height, legend_id)

CREATE TABLE sections (
  id int NOT NULL DEFAULT NEXTVAL ('sections_seq'),
  legend_id int NOT NULL,
  x int NOT NULL,
  y int NOT NULL,
  width int NOT NULL,
  height int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (legend_id) REFERENCES legends(id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE 
);

-- ALTER TABLE sections ADD CONSTRAINT sections_legends_id_fk FOREIGN KEY (legend_id) REFERENCES legends(id);

-- Items(barcode, section_id, name, cost, weight, description, requires_weighing, x, y)

CREATE TABLE items (
  barcode varchar(50) NOT NULL,
  section_id int NOT NULL,
  name varchar(250) NOT NULL,
  cost double precision NOT NULL,
  description varchar(1000) NOT NULL,
  requires_weighing int NOT NULL,
  x int NOT NULL,
  y int NOT NULL,
  created_at timestamp without time zone default (now() at time zone 'utc'),
  updated_at timestamp,
  PRIMARY KEY (barcode),
  FOREIGN KEY (section_id) REFERENCES sections(id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE 
);

-- ALTER TABLE items ADD CONSTRAINT items_section_id_fk FOREIGN KEY (section_id) REFERENCES sections(id);


-- Users(google_id, name, email, phone_number)

CREATE TABLE users (
  google_id int NOT NULL,
  name varchar(250) NOT NULL,
  email varchar(250) NOT NULL,
  phone_number varchar(15) NOT NULL,
  created_at timestamp without time zone default (now() at time zone 'utc'),
  updated_at timestamp,
  PRIMARY KEY (google_id)
);

-- Receipts(id, google_id, session_id, subtotal, gst, pst, total, discount, is_paid, date)

CREATE TABLE receipts (
  id int NOT NULL DEFAULT NEXTVAL ('receipts_seq'),
  google_id int NOT NULL,
  session_id int NOT NULL,
  subtotal double precision NOT NULL,
  gst double precision NOT NULL,
  pst double precision NOT NULL,
  total double precision NOT NULL,
  discount double precision NOT NULL,
  is_paid int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (google_id) REFERENCES users(google_id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE 
);

-- ALTER TABLE receipts ADD CONSTRAINT receipts_google_id_fk FOREIGN KEY (google_id) REFERENCES users(google_id);

-- sessions(id, google_id, is_active, created_at)
CREATE TABLE sessions (
  id int NOT NULL DEFAULT NEXTVAL ('sessions_seq'),
  google_id int NOT NULL,
  is_active int NOT NULL,
  created_at timestamp without time zone default (now() at time zone 'utc'),
  PRIMARY KEY (id),
  FOREIGN KEY (google_id) REFERENCES users(google_id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE 
);

-- ALTER TABLE sessions ADD CONSTRAINT sessions_google_id_fk FOREIGN KEY (google_id) REFERENCES users(google_id);

-- CartItems(id, session_id, barcode, quantity, weight, cost)

CREATE TABLE cartItems (
  id int NOT NULL DEFAULT NEXTVAL ('cartItems_seq'),
  session_id int NOT NULL,
  barcode varchar(50) NOT NULL,
  quantity int NOT NULL,
  weight double precision NOT NULL,
  cost double precision NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (barcode) REFERENCES items(barcode)
    ON DELETE CASCADE 
    ON UPDATE CASCADE,
  FOREIGN KEY (session_id) REFERENCES sessions(id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE 
);

-- ALTER TABLE cartItems ADD CONSTRAINT cartItems_barcode_fk FOREIGN KEY (barcode) REFERENCES items(barcode);
-- ALTER TABLE cartItems ADD CONSTRAINT cartItems_session_id_fk FOREIGN KEY (session_id) REFERENCES sessions(id);



-- PurchasedItems(id, receipt_id, cart_item_id)

CREATE TABLE purchasedItems (
  id int NOT NULL DEFAULT NEXTVAL ('purchasedItems_seq'),
  receipt_id int NOT NULL,
  cart_item_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (receipt_id) REFERENCES receipts(id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE ,
  FOREIGN KEY (cart_item_id) REFERENCES cartItems(id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE 
);

-- ALTER TABLE purchasedItems ADD CONSTRAINT purchasedItems_cart_item_id_fk FOREIGN KEY (cart_item_id) REFERENCES cartItems(id);

-- Logs(id, google_id, session_id, barcode, measured_weight)

CREATE TABLE logs (
  id int NOT NULL DEFAULT NEXTVAL ('logs_seq'),
  session_id int NOT NULL,
  barcode varchar(50) NOT NULL,
  measured_weight double precision NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (session_id) REFERENCES sessions(id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE 
);

-- ALTER TABLE logs ADD CONSTRAINT logs_session_id_fk FOREIGN KEY (session_id) REFERENCES sessions(id);
