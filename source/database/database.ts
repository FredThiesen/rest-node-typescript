//create sql database
const sqlite3 = require("sqlite3").verbose();
//create database
let db = new sqlite3.Database("database.db");
//create table
db.run(`CREATE TABLE IF NOT EXISTS 
users 
    (id INTEGER PRIMARY KEY AUTOINCREMENT, 
        username TEXT, 
        password TEXT, 
        email TEXT, 
        firstname TEXT, 
        lastname TEXT, 
        age INTEGER, 

        created_at DATETIME,
        updated_at DATETIME)`);

//insert data
db.run(`INSERT INTO users
    (username, password, email, firstname, lastname, age)
    VALUES
    ("admin", "admin", "


    ", "admin", "admin", "
    ")`);
//select data
db.all("SELECT * FROM users", function (err: any, rows: any[]) {
  rows.forEach(function (row: any) {
    console.log(row);
  });
});
//update data
db.run(`UPDATE users SET
    username = "admin",
    password = "admin",
    email = "
    ",
    firstname = "admin",
    lastname = "admin",
    age = "
    "
    WHERE id = 1`);
//delete data
