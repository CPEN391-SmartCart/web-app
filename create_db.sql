CREATE SEQUENCE stores_seq;
CREATE SEQUENCE sections_seq;
CREATE SEQUENCE legends_seq;
CREATE SEQUENCE receipts_seq;
CREATE SEQUENCE receiptsitems_seq;
CREATE SEQUENCE logs_seq;

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

-- Items(barcode, section_id, name, cost, weight, description, requires_weighing, x, y)

CREATE TABLE items (
  barcode varchar(50) NOT NULL,
  section_id int NOT NULL,
  name varchar(250) NOT NULL,
  cost double precision NOT NULL,
  weight double precision NOT NULL,
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

-- Users(google_id, name, email, phone_number)

CREATE TABLE users (
  google_id varchar(250) NOT NULL,
  name varchar(250) NOT NULL,
  email varchar(250) NOT NULL UNIQUE,
  created_at timestamp without time zone default (now() at time zone 'utc'),
  updated_at timestamp,
  PRIMARY KEY (google_id)
);

CREATE TABLE receipts (
  id int NOT NULL DEFAULT NEXTVAL ('receipts_seq'),
  google_id varchar(250) NOT NULL,
  subtotal double precision NOT NULL,
  gst double precision NOT NULL,
  pst double precision NOT NULL,
  total double precision NOT NULL,
  created_at timestamp without time zone default (now() at time zone 'utc'),
  PRIMARY KEY (id),
  FOREIGN KEY (google_id) REFERENCES users(google_id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE 
);

CREATE TABLE receiptsitems (
  id int NOT NULL DEFAULT NEXTVAL ('receiptsitems_seq'),
  receipt_id int NOT NULL,
  name varchar(250) NOT NULL,
  cost double precision NOT NULL,
  weight double precision NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (receipt_id) REFERENCES receipts(id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE 
);

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


create table itemNodes (
	barcode varchar(50) NOT NULL,
	node_id int NOT NULL,
	parent_node_id int NOT NULL,
	current_cost int NOT NULL,
	child_one_id int NOT NULL,
	distance_child_one int NOT NULL,
	child_two_id int NOT NULL,
	distance_child_two int NOT NULL,
	child_three_id int NOT NULL,
	distance_child_three int NOT NULL,
	child_four_id int NOT NULL,
	distance_child_four int NOT NULL,
	child_five_id int NOT NULL,
	distance_child_five int NOT NULL,
	child_six_id int NOT NULL,
	distance_child_six int NOT NULL,
	PRIMARY KEY (barcode),
	FOREIGN KEY (barcode) REFERENCES items(barcode)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);