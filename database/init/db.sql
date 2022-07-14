/* 
 *  Create & init site content
 */

-- PEOPLE --

CREATE TABLE IF NOT EXISTS people (
  id INTEGER PRIMARY KEY,
  fname TEXT DEFAULT "",
  lname TEXT DEFAULT "",
  age TEXT DEFAULT "",
  desc TEXT DEFAULT ""
);

INSERT INTO people
  (fname, lname, age, desc) 
VALUES 
  ("Daniel", "Markusson", 15, "Plays basketball and makes websites");