DROP TABLE IF EXISTS bank5 ;

CREATE TABLE bank5 (
id serial PRIMARY KEY,name VARCHAR(50) NOT NULL,
dept VARCHAR(50) NOT NULL,post VARCHAR(50)NOT NULL,salary int NOT NULL,

status VARCHAR(50) default 'zambia',
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

INSERT INTO bank5 ( name,dept,post,salary )
   VALUES
   ( 'Bank Five', 'Administration','DB Testing', 21200 ),
   ( 'Leon Mavin', 'Enginering','Director', 21200 ),
   ( 'Lorena Marvin', 'Management','Administrator', 18500 ),
   ( 'Nikolas Marvin', 'Engineering','Manager', 18500 ),
   ( 'Wendy Marvin', 'Business','C.E. Officer', 32500 );
   
SELECT * FROM bank5