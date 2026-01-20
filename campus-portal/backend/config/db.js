import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",          // your MySQL username
  password: "03032004",
  database: "campus_portal",
});

db.connect((err) => {
  if (err) {
    console.log("MySQL Connection Failed", err);
  } else {
    console.log("MySQL Connected Successfully");
  }
});

export default db;
