DROP TABLE IF EXISTS bank5 ;

CREATE TABLE bank5 (
id serial PRIMARY KEY,name VARCHAR(90) NOT NULL,
dept VARCHAR(90) NOT NULL,
post VARCHAR(90)NOT NULL,
salary int NOT NULL,
status VARCHAR(90) default 'Part-time',
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO bank5 ( name,dept,post,salary )

VALUES
   ( 'Bank Five', 'Administration','DB Testing', 10000 ),
   ( 'Leon Mavin', 'Enginering','Director', 12000 ),
   ( 'Lorena Marvin', 'Management','Administrator', 18500 ),
   ( 'Nikolas Marvin', 'Engineering','Manager', 22500 ),
   ( 'Wendy Marvin', 'Business','C.E. Officer', 29500 );
   
SELECT * FROM bank5