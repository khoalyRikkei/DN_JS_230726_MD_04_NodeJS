import mysql from "mysql2";
export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "project",
  password: "123456",
});


