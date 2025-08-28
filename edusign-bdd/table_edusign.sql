-- SQLite
PRAGMA foreign_keys = ON; -- activer les clés étrangères qui sont désactivées par défaut

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(100)  
);

CREATE TABLE edusign (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date_signature DATE,
    users_id INTEGER,
    FOREIGN KEY (users_id) REFERENCES users(id)
);

-- exemple de requêtes
INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');

-- requêtes niveau facile
SELECT * from users
select * from users where firstname = 'Ada';
SELECT * from users where firstname like 'B%'
select count(*) as nb_users_b from users where firstname like 'B%'
select firstname from users

-- requêtes niveau moyen
-- 1 Insérer une ligne dans la table edusign qui correspond à la user Ada avec comme date de signature le 2024-05-30 09:30:00
SELECT id, firstname, lastname FROM users WHERE firstname = 'Ada';
insert into edusign (date_signature, users_id) values ('2024-05-30 09:30:00', 1); -- insérer une signature à chaque utilisateur
select * from edusign; -- vérifier les signatures

SELECT e.id, e.date_signature, u.firstname, u.lastname
FROM edusign e
JOIN users u ON e.users_id = u.id; -- jointure interne qui va regarder chaque users_id de edusign et trouver le id correspondant dans users.

-- 2 Insérer une ligne dans la table edusign qui correspond à la user Bella avec comme date de signature le 2024-05-30 09:30:00
SELECT id, firstname, lastname FROM users WHERE firstname = 'Bella';
insert into edusign (date_signature, users_id) values ('2024-05-30 09:30:00', 3);
select * from edusign;

SELECT e.id AS signature_id, e.date_signature, u.firstname, u.lastname -- le as sert à renommer la colonne id en signature_id dans le résultat de la requête pour que ce soit plus lisible
FROM edusign e
JOIN users u ON e.users_id = u.id;

-- autre manière sans vérifier la valeur de l'ID de ADA ou BElla par exemple
--INSERT INTO edusign (date_signature, users_id)
--VALUES (
--    '2024-05-30 09:30:00',
--  (SELECT id FROM users WHERE firstname = 'Bella' AND lastname = 'Guerin')
--);


-- 3 Insérer toutes les lignes de la table users dans la table edusign avec pour date de signature le 2024-09-01 09:30:00
insert into edusign (date_signature, users_id)
SELECT '2024-09-01 09:30:00', id
FROM users;
-- donc : Chaque utilisateur de users va donc avoir une ligne correspondante dans edusign avec la date donnée.

-- ensuite on vérifie les insertions
select * 
from edusign
WHERE date_signature = '2024-09-01 09:30:00';

-- 4 Sélectionner toutes les lignes de la table edusign ordonnées par date de signature de la plus récente à la plus ancienne et par user_id ascendant. Résultat attendu 
select *
from edusign
order by date_signature DESC, users_id ASC

-- niveau moyen+ 
-- 1. Dans la table edusign, afficher le nombre d’apprenantes par date.
select count (*) 
from edusign 
order by date_signature
-- ci-dessus on a juste le nombre total de lignes dans la table, alors qu'on veut le nombre d'apprenantes par date donc il faut regrouper (GROUP BY) par date_signature

-- la bonne requête : 
SELECT date_signature, COUNT(*) AS nb_apprenantes
FROM edusign
GROUP BY date_signature
ORDER BY date_signature DESC;

-- 2. Compter le nombre de ligne au sein de la table edusign dont le prénom est Bella, le nom de la colonne finale doit être volume
select count(*) AS volume
from edusign e 
JOIN users u ON e.users_id = u.id -- JOIN sert à relier deux tables dans une requête / ON e.users_id = u.id : c’est la condition qui dit comment les deux tables sont reliées.
WHERE u.firstname = 'Bella';
-- donc : On relie edusign à users grâce à JOIN pour pouvoir accéder aux informations des utilisateurs.
--On filtre ensuite uniquement les lignes où le prénom est 'Bella'.

