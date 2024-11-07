import express from "express";
import mysql from "mysql";
import mysql2 from "mysql2";

const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.log("서버시작");
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

app.get("/hello", () => {
  console.log("hello 주소 요청");
});

app.get("/qs", (req) => {
  console.log(req.query);
  const { p1, p2 } = req.query;
  console.log(`p1: ${p1}, p2: ${p2}`);
});

//board/10, product/6
app.get("/:id", (req) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
});

app.post("/hello", () => {
  console.log("hello post 요청");
});

app.post("/post-req", (req) => {
  console.log(req.body);
  console.log(req.body.name);
  const { name, age } = req.body;
  console.log(`name: ${name}, age:${age}`);
});

//목록조회
app.get("/nations/list", (req, res) => {
  const sql = "select * from nations_table";
  db.query(sql, (err, results, fields) => {
    console.log("err", err);
    console.log("results", results);
    console.log("fields", fields);
    res.json(results);
  });
});
