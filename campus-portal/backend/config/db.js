import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "03032004",
  database: "campus_portal",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

export default db;
