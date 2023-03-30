DROP TABLE IF EXISTS tClients;
DROP TABLE IF EXISTS TEMPLOYEES;
DROP TABLE IF EXISTS TLOANS;

CREATE TABLE TLOANS
(
  id1 serial PRIMARY KEY,
  name VARCHAR(90) NOT NULL,
  office VARCHAR(90) default 'HUMAN-RESOURCE',
  mobile int default 62005,
  stars VARCHAR(90) default 'PART-TIME',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE TEMPLOYEES
(
  id2 serial PRIMARY KEY,
  email VARCHAR(90) NOT NULL,
  mobile VARCHAR(90) NOT NULL,
  retirement VARCHAR(90) default 'CONTRATOR',
  UNIQUE(email,mobile),
  FOREIGN KEY (id2) REFERENCES TLOANS on delete cascade
);

CREATE TABLE tClients
(
  id3 serial PRIMARY KEY,
  mother VARCHAR(90) NOT NULL,
  father VARCHAR(90) NOT NULL,
  UNIQUE(mother,father),
  FOREIGN KEY (id3) REFERENCES TLOANS on delete cascade
);

INSERT INTO TLOANS
  ( name,mobile, office)
VALUES
  ( 'Nikolas Nchena1', 1230112, 450004),
  ( 'Lorena Nchena2', 7010112, 454007),
  ( 'Leon Nchena3', 5201112, 4540009),
  ( 'Catherine Marvin4', 1220112, 4545904),
  ( 'Kristina Marvin5', 7221112, 4545004),
  ( 'Irene Nchena6', 5223112, 45450004);


INSERT INTO TEMPLOYEES
  (id2,email, mobile)
VALUES
  (1, 'nikolas.Marvin@yahoo.com', '+72305263158'),
  (2, 'Lorena.Marvin@gmail.com', '+8775263158'),
  (3, 'Leon.Marvin@gmail.com', '+230775263158'),
  (4, 'catherine.Marvin@yahoo.com', '+43175263158'),
    (5, 'thresa.Marvin@gmailahoo.com', '+260775263158');

  
INSERT INTO tClients
  (id3, father,mother)
VALUES
  (1, 'LINOS NCHENA1', 'KRISTINA1 NCHENA'),
  (2, 'PRESLY NCHENA2', 'CATHRINE2 NCHENA'),
  (3, 'NELSON SIMWEMBA3', 'NORIA3 SIMWEMBA');

SELECT *
from TLOANS, TEMPLOYEES, tClients;