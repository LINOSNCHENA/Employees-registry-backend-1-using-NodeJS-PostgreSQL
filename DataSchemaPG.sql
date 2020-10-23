DROP TABLE IF EXISTS xFAMILY;
DROP TABLE IF EXISTS XCONTACTS;
DROP TABLE IF EXISTS XWORKERS;

CREATE TABLE XWORKERS
(
  id1 serial PRIMARY KEY,
  name VARCHAR(90) NOT NULL,
  office VARCHAR(90) default 'HUMAN-RESOURCE',
  mobile int default 62005,
  stars VARCHAR(90) default 'PART-TIME',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE XCONTACTS
(
  id2 serial PRIMARY KEY,
  email VARCHAR(90) NOT NULL,
  mobile VARCHAR(90) NOT NULL,
  retirement VARCHAR(90) default 'CONTRATOR',
  UNIQUE(email,mobile),
  FOREIGN KEY (id2) REFERENCES XWORKERS on delete cascade
);

CREATE TABLE xFAMILY
(
  id3 serial PRIMARY KEY,
  mother VARCHAR(90) NOT NULL,
  father VARCHAR(90) NOT NULL,
  UNIQUE(mother,father),
  FOREIGN KEY (id3) REFERENCES XWORKERS on delete cascade
);

INSERT INTO XWORKERS
  ( name,mobile, office)
VALUES
  ( 'Nikolas Nchena1', 1230112, 450004),
  ( 'Lorena Nchena2', 7010112, 454007),
  ( 'Leon Nchena3', 5201112, 4540009),
  ( 'Catherine Marvin4', 1220112, 4545904),
  ( 'Kristina Marvin5', 7221112, 4545004),
  ( 'Irene Nchena6', 5223112, 45450004);


INSERT INTO XCONTACTS
  (id2,email, mobile)
VALUES
  (1, 'nikolasnchena@yahoo.com', '+230775263158'),
  (2, 'Lorenanchena@yahoo.com', '+230775263158'),
  (3, 'Leonchena@yahoo.com', '+230775263158'),
  (4, 'catherineMarvin@yahoo.com', '+230775263158');

  
INSERT INTO xFAMILY
  (id3, father,mother)
VALUES
  (1, 'LINOS NCHENA1', 'KRISTINA1 NCHENA'),
  (2, 'PRESLY NCHENA2', 'CATHY2 NCHENA'),
  (3, 'NELSON SIMWEMBA3', 'NORIA3 SIMWEMBA');

SELECT *
from XWORKERS, XCONTACTS, xFAMILY;