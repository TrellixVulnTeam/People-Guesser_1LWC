var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/db.sqlite');
var rand = require('random')
var fs = require('fs')

function insertPerson(fname, lname, age, desc) {
    let sql = `INSERT INTO people
                (fname, lname, age, desc) 
                VALUES
                ('${fname}', '${lname}', ${age}, '${desc}');`;
    db.run(sql, function(err) {
        if (err) {
            return console.log(err.message);
        }
        db.get(`SELECT * FROM people WHERE id = ${this.lastID}`, function(err, table) {
            console.log(table);
        });
    });

};

function getInfo() {
    db.get(`SELECT id FROM people ORDER BY id DESC LIMIT 1;`, function(err, table) {
        id = rand.int((min = 1), (max = table.id))
        db.get(`SELECT * FROM people WHERE id = ${id}`, function(err, table) {
            console.log(table)
            var info = JSON.stringify(table)
            fs.writeFile('./public/json/personinfo', info, function(err) {

            })
        })
    })
}

module.exports = {
    getInfo,
    insertPerson
}