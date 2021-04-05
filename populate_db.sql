

INSERT INTO stores(name,address,created_at,updated_at) VALUES
 ('walmart','1230 mark st','NOW()','NOW()')
,('save on foods','3570 crowe st, bc','NOW()','NOW()')
,('local market','1211 howe','NOW()','NOW()')
,('pyongang express','unknown','NOW()','NOW()');

INSERT INTO legends(store_id,key,colour) VALUES
 (3,'PUF',57716)
,(3,'HLC',20390)
,(1,'GFT',15792)
,(3,'IIM',71781)
,(2,'DBL',58234)
,(1,'ZBN',33709)
,(1,'IMT',88386)
,(2,'YSQ',60)
,(3,'KZV',97924)
,(2,'WOD',18228)
,(1,'YEE',91312)
,(1,'EFR',31317)
,(2,'POY',84201)
,(1,'XCC',17906)
,(1,'YHN',60656)
,(1,'DMP',60507)
,(2,'BRI',92392)
,(3,'ANR',52111)
,(3,'BFY',17071)
,(2,'HIR',28284);


INSERT INTO sections(x,y,width,height,legend_id) VALUES
 (166,35,9,42,4)
,(120,125,34,49,6)
,(286,284,42,37,9)
,(85,222,44,24,3)
,(28,278,11,19,1)
,(172,299,32,31,2)
,(134,212,30,4,10)
,(31,234,40,5,6)
,(266,184,6,42,7)
,(352,166,25,33,8)
,(77,122,19,40,8)
,(169,281,22,34,7)
,(112,57,9,40,2)
,(237,342,17,16,2)
,(368,5,13,1,3)
,(271,215,20,9,8)
,(188,82,15,22,7)
,(227,43,18,8,4)
,(75,115,10,16,3)
,(229,144,49,45,4);


INSERT INTO items(barcode,section_id,name,cost, weight, description,requires_weighing,x,y,created_at,updated_at) VALUES
 ('XEAQ5424','6','plum tomatoes',94.0,52.4,'Pharmacy',0,130,468,'NOW()','NOW()')
,('XGAO9797','5','oysters and their liquor',56.5,18.1'Snack',1,89,196,'NOW()','NOW()')
,('XNQV4914','9','butter',86.0,52.9'Drink',1,400,203,'NOW()','NOW()')
,('SCEU6683','1','bread crumbs',28.2,420'Frozen',1,156,389,'NOW()','NOW()')
,('THEY8635','5','Creole seasoning',60.6,9.11,'Snack',1,476,41,'NOW()','NOW()')
,('NTSN6378','7','chestnuts',72.1,16,'Dairy',0,336,444,'NOW()','NOW()')
,('GNLK7691','6','stock',57.8,99.9,'Drink',0,265,127,'NOW()','NOW()')
,('VUGQ0044','4','oysters and their liquor',71.9,10.0,'Snack',1,386,163,'NOW()','NOW()')
,('OOAZ7866','2','onions',10.1,1.25,'Drink',1,189,221,'NOW()','NOW()')
,('ZTZZ2398','7','oysters and their liquor',72.2,9.99,'Drink',1,54,390,'NOW()','NOW()')
,('VCRG1272','4','onion',95.5,6.0,'Deli',0,462,42,'NOW()','NOW()')
,('CXKC2105','3','black pepper',0.5,66.1,'Frozen',0,241,141,'NOW()','NOW()')
,('ORQA2700','8','Louisiana hot sauce',54.7,9.10,'Frozen',1,43,429,'NOW()','NOW()')
,('SNBN0794','10','stock',45.1,45,'Deli',1,479,4,'NOW()','NOW()')
,('RCJJ7746','1','butter',16.7,14.25,'Frozen',0,223,426,'NOW()','NOW()')
,('SFZH6877','2','Louisiana hot sauce',83.3,11,'Pharmacy',0,485,438,'NOW()','NOW()')
,('WAOQ1516','8','flour',21.8,1.61,'Snack',1,76,33,'NOW()','NOW()')
,('WBPG8611','10','onions',8.6,3.14,'Snack',0,415,259,'NOW()','NOW()')
,('VFDE4304','4','Salt',96.0,1.00,'Deli',1,127,83,'NOW()','NOW()')
,('KHYT1504','2','bay leaves',7.0,920.02,'Pharmacy',0,293,426,'NOW()','NOW()');

INSERT INTO users(google_id,name,email,phone_number,created_at,updated_at) VALUES
 ('1','Abbie, Abby','PSF@gmail.com',74034909,'NOW()','NOW()')
,('2','Addie, Addy','NSH@gmail.com',58699835,'NOW()','NOW()')
,('3','Allie','JRC@gmail.com',15952249,'NOW()','NOW()')
,('4','Bab, Babbie','VLJ@gmail.com',02058128,'NOW()','NOW()')
,('5','Becca, Becky','FLY@gmail.com',14819274,'NOW()','NOW()')
,('6','Bede','PKQ@gmail.com',04293992,'NOW()','NOW()')
,('7','Bella','HMZ@gmail.com',32767547,'NOW()','NOW()')
,('8','Bess, Bessie, Betsey','UKB@gmail.com',94969064,'NOW()','NOW()')
,('9','Beth','KTL@gmail.com',43829262,'NOW()','NOW()')
,('10','Betty','NJF@gmail.com',65080290,'NOW()','NOW()')
,('11','Biah','HRB@gmail.com',87986376,'NOW()','NOW()')
,('12','Adelaide, Adeline','AQC@gmail.com',05689706,'NOW()','NOW()')
,('13','Alice','GWE@gmail.com',02565186,'NOW()','NOW()')
,('14','Barbara','TXB@gmail.com',87022556,'NOW()','NOW()')
,('15','Rebecca','JFE@gmail.com',72668938,'NOW()','NOW()')
,('16','Obedience','FLI@gmail.com',55845387,'NOW()','NOW()')
,('17','Arabella','QHC@gmail.com',85287859,'NOW()','NOW()')
,('18','Elizabeth','RCE@gmail.com',59855575,'NOW()','NOW()')
,('19','Bartholomow','ERY@gmail.com',84575368,'NOW()','NOW()')
,('20','King George V','XVU@gmail.com',80405861,'NOW()','NOW()');

INSERT INTO receipts(google_id,session_id,subtotal,gst,pst,total,discount,is_paid) VALUES
 (6,1,55.7,27.2,37.5,32.7,87.6,0.0)
,(7,6,39.4,92.8,69.1,191.2,10.1,0.0)
,(2,4,58.0,2.4,39.4,9.3,90.5,1.0)
,(3,7,5.6,67.5,62.8,83.9,52.0,0.0)
,(4,6,92.5,65.6,97.9,205.0,51.0,0.0)
,(3,3,29.2,81.0,19.4,72.8,56.8,1.0)
,(10,7,49.4,91.8,9.1,137.2,13.0,0.0)
,(9,8,29.3,19.6,8.1,-38.7,95.7,0.0)
,(3,10,39.3,79.5,54.8,104.1,69.5,0.0)
,(2,9,40.5,64.6,78.7,182.9,0.9,0.0)
,(6,5,96.7,42.9,51.7,136.8,54.5,1.0)
,(8,7,75.6,24.4,43.2,45.9,97.3,1.0)
,(3,1,92.7,49.7,84.9,219.2,8.1,1.0)
,(6,6,58.2,55.6,64.3,173.7,4.3,1.0)
,(5,5,2.8,63.6,67.6,64.4,69.6,1.0)
,(8,5,12.7,68.2,39.5,56.5,64.0,1.0)
,(6,6,28.4,18.7,9.3,21.6,34.7,1.0)
,(4,5,50.5,35.2,82.2,135.7,32.1,0.0)
,(6,8,58.3,85.1,4.5,83.5,64.4,1.0)
,(1,10,29.2,28.7,33.9,67.8,23.9,0.0);


INSERT INTO sessions(google_id,is_active,created_at) VALUES
 (5,0,'NOW()')
,(4,0,'NOW()')
,(2,1,'NOW()')
,(2,0,'NOW()')
,(2,0,'NOW()')
,(10,1,'NOW()')
,(7,1,'NOW()')
,(10,1,'NOW()')
,(9,1,'NOW()')
,(9,0,'NOW()');


INSERT INTO cartItems(session_id,barcode,quantity,weight,cost) VALUES
 (4,'SCEU6683',9,66.5,21.4)
,(6,'SCEU6683',1,0.2,19.4)
,(8,'XGAO9797',2,87.3,27.6)
,(1,'OOAZ7866',10,76.9,88.8)
,(10,'XEAQ5424',5,71.7,64.4)
,(9,'ZTZZ2398',6,32.5,19.1)
,(5,'XNQV4914',7,57.7,69.2)
,(4,'XGAO9797',6,39.6,8.3)
,(4,'OOAZ7866',7,30.4,66.9)
,(8,'VUGQ0044',7,21.4,56.0)
,(5,'THEY8635',3,36.7,53.4)
,(2,'XEAQ5424',8,47.8,35.8)
,(8,'XNQV4914',4,74.6,64.4)
,(7,'ZTZZ2398',3,10.1,54.0)
,(7,'XEAQ5424',9,46.6,52.8)
,(4,'THEY8635',4,30.8,94.5)
,(6,'VUGQ0044',1,82.4,76.4)
,(8,'GNLK7691',3,37.6,22.3)
,(8,'VUGQ0044',3,17.6,90.2)
,(6,'XGAO9797',9,0.2,75.0);


INSERT INTO purchasedItems(receipt_id,cart_item_id) VALUES
 (9,14)
,(3,13)
,(10,19)
,(20,8)
,(13,13)
,(14,6)
,(1,17)
,(1,3)
,(11,20)
,(15,2)
,(12,2)
,(9,12)
,(14,13)
,(13,20)
,(12,11)
,(13,13)
,(11,5)
,(16,2)
,(1,11)
,(18,2);


INSERT INTO logs(session_id,barcode,measured_weight) VALUES
 (6,'SCEU6683',25.0)
,(6,'ZTZZ2398',77.5)
,(4,'XGAO9797',11.8)
,(9,'ZTZZ2398',18.8)
,(8,'NTSN6378',0.2)
,(5,'XGAO9797',69.5)
,(4,'OOAZ7866',0.9)
,(5,'ZTZZ2398',83.1)
,(1,'XEAQ5424',78.0)
,(2,'XNQV4914',72.5)
,(1,'XEAQ5424',87.9)
,(2,'VUGQ0044',26.7)
,(4,'XGAO9797',1.5)
,(4,'SCEU6683',37.2)
,(1,'OOAZ7866',15.4)
,(5,'ZTZZ2398',86.0)
,(8,'XNQV4914',4.5)
,(1,'XNQV4914',12.8)
,(9,'XNQV4914',4.2)
,(5,'OOAZ7866',93.4);



-- new DATA
insert into legends (store_id, key, colour) values (1, 'FROZEN FOOD', 15); 21
insert into legends (store_id, key, colour) values (1, 'FRUITS AND VEGETABLES', 46); 
insert into legends (store_id, key, colour) values (1, 'STAPLES', 30); 
insert into legends (store_id, key, colour) values (1, 'CONDIMENTS', 13);
insert into legends (store_id, key, colour) values (1, 'PHARMA AND SELF-CARE', 23);
insert into legends (store_id, key, colour) values (1, 'BAKERY', 63);
insert into legends (store_id, key, colour) values (1, 'BREAKFAST', 10);
insert into legends (store_id, key, colour) values (1, 'CHECKOUT COUNTERS', 9); 

insert into sections (legend_id, x, y, width, height) values (21, 319, 264, 12, 61);
insert into sections (legend_id, x, y, width, height) values (21, 319, 327, 12, 96);
insert into sections (legend_id, x, y, width, height) values (21, 287, 216, 98, 17);
insert into sections (legend_id, x, y, width, height) values (21, 34, 135, 59, 18);
insert into sections (legend_id, x, y, width, height) values (21, 34, 171, 59, 18);
insert into sections (legend_id, x, y, width, height) values (21, 34, 207, 59, 18);
insert into sections (legend_id, x, y, width, height) values (21, 34, 243, 98, 17);
insert into sections (legend_id, x, y, width, height) values (21, 34, 28, 59, 17);
insert into sections (legend_id, x, y, width, height) values (21, 34, 328, 98, 17);
insert into sections (legend_id, x, y, width, height) values (21, 319, 264, 12, 61);
insert into sections (legend_id, x, y, width, height) values (21, 34, 360, 79, 18);
insert into sections (legend_id, x, y, width, height) values (21, 34, 394, 79, 17);
insert into sections (legend_id, x, y, width, height) values (21, 34, 428, 79, 17);
insert into sections (legend_id, x, y, width, height) values (21, 34, 64, 59, 17);
insert into sections (legend_id, x, y, width, height) values (21, 34, 99, 59, 17);
insert into sections (legend_id, x, y, width, height) values (21, 45, 278, 19, 33);
insert into sections (legend_id, x, y, width, height) values (21, 429, 29, 21, 160);

insert into sections (legend_id, x, y, width, height) values (22, 347, 264, 13, 61);
insert into sections (legend_id, x, y, width, height) values (22, 347, 327, 13, 96);
insert into sections (legend_id, x, y, width, height) values (22, 381, 264, 21, 71);
insert into sections (legend_id, x, y, width, height) values (22, 381, 29, 21, 160);
insert into sections (legend_id, x, y, width, height) values (22, 381, 373, 21, 72);

insert into sections (legend_id, x, y, width, height) values (23, 151, 243, 62, 17);
insert into sections (legend_id, x, y, width, height) values (23, 151, 328, 62, 17);
insert into sections (legend_id, x, y, width, height) values (23, 151, 360, 62, 18);
insert into sections (legend_id, x, y, width, height) values (23, 151, 394, 62, 17);
insert into sections (legend_id, x, y, width, height) values (23, 151, 428, 62, 17);

insert into sections (legend_id, x, y, width, height) values (24, 431, 216, 98, 17);
insert into sections (legend_id, x, y, width, height) values (24, 431, 264, 19, 71);
insert into sections (legend_id, x, y, width, height) values (24, 24, 373, 19, 72);

insert into sections (legend_id, x, y, width, height) values (25, 527, 264, 19, 71);
insert into sections (legend_id, x, y, width, height) values (25, 527, 29, 19, 160);
insert into sections (legend_id, x, y, width, height) values (25, 527, 373, 19, 72);

insert into sections (legend_id, x, y, width, height) values (26, 478, 264, 20, 71); 
insert into sections (legend_id, x, y, width, height) values (26, 478, 29, 20, 160); 
insert into sections (legend_id, x, y, width, height) values (26, 478, 373, 20, 72); 

insert into sections (legend_id, x, y, width, height) values (27, 290, 264, 13, 61); 
insert into sections (legend_id, x, y, width, height) values (27, 290, 327, 13, 96); 
insert into sections (legend_id, x, y, width, height) values (27, 299, 123, 61, 18); 
insert into sections (legend_id, x, y, width, height) values (27, 299, 171, 61, 18); 
insert into sections (legend_id, x, y, width, height) values (27, 299, 29, 61, 17); 
insert into sections (legend_id, x, y, width, height) values (27, 299, 77, 61, 17); 

insert into sections (legend_id, x, y, width, height) values (28, 132, 135, 81, 18);
insert into sections (legend_id, x, y, width, height) values (28, 132, 171, 81, 18);
insert into sections (legend_id, x, y, width, height) values (28, 132, 207, 81, 18);
insert into sections (legend_id, x, y, width, height) values (28, 132, 28, 81, 17);
insert into sections (legend_id, x, y, width, height) values (28, 132, 64, 81, 17);
insert into sections (legend_id, x, y, width, height) values (28, 132, 99, 81, 17);
