import express from "express";
import mysql2 from "mysql2";

const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.log("서버 시작!");
});

const db = mysql2.createConnection({
  host: "127.0.0.1",
  user: "user_ex",
  password: "1234",
  port: "3306",
  database: "db_ex",
});

db.connect((err) => {
  console.log("db 연결 성공!");
  console.log("err", err);
});

app.get("/", () => {
  console.log("기본주소 요청");
});
