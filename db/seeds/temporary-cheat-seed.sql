\c neuroshima;

CREATE TABLE professions (
    profession_id SERIAL PRIMARY KEY,
    profession_name VARCHAR,
    catch_phrase VARCHAR,
    profession_description VARCHAR,
    trait_1_name VARCHAR,
    trait_2_name VARCHAR
    );

INSERT INTO professions 
    (profession_name, catch_phrase, profession_description, trait_1_name, trait_2_name)
VALUES
    ('Chemist', 'Plug your ears, after mixing these substances there may be a little bang.', 'Second to the mechanic, they are the most valued proffession these days.', 'It tastes like arsenic', 'Pharmacist'),
    ('Ganger', 'This is a gun. And these are my buddies. Say hello ...', 'Ganger is the guy on the bike who is talked about at every turn.', 'One of them', 'Brave or stupid');
   

SELECT * FROM professions
