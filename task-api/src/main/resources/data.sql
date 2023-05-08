DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
       id INT AUTO_INCREMENT  PRIMARY KEY,
       label VARCHAR(250) NOT NULL,
       complete BOOLEAN NOT NULL
);

INSERT INTO tasks (label, complete) VALUES
            ('Ranger la chambre', false),
            ('Faire la lessive', true),
            ('Finir le projet de maths algo', true),
            ('Aller à la salle', false);