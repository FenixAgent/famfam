import mysql from "mysql2";

export default function getMyUsers() {
  const db = mysql.createConnection({
    host: "localhost",
    user: "newuser",
    password: "123",
    database: "Fenix_Agent",
  });

  const test = new Promise((res, rej) => {
    db.connect((err) => {
      if (err) throw new Error("FAILED DB CONNECTION-----");
      db.query("SELECT * FROM users", (rows, fields) => {
        res(fields);
      });
    });
  });

  return test;
}
