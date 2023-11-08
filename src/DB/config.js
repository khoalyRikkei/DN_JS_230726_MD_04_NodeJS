import mysql from "mysql2";
import "dotenv/config";

const database = process.env.SQL_DATABASE;
const password = process.env.SQL_PASSWORD;

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: database,
  password: password,
});
