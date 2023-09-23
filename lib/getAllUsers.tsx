import mysql, { RowDataPacket } from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "123",
  database: "Fenix_Agent",
});

export async function getAllUsers() {
  return new Promise<RowDataPacket[]>((res, rej) => {
    db.connect((err) => {
      if (err) throw new Error("FAILED DB CONNECTION-----");
      db.query<RowDataPacket[]>("SELECT * FROM users", (rows, fields) => {
        res(fields);
        console.log("ROWS HERE", rows);
      });
    });
  });
}
