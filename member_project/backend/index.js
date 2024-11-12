import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
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

app.post("/member/save", (req, res) => {
  const { memberEmail, memberPassword, memberName, memberMobile } =
    req.body.member;
  console.log(memberEmail, memberPassword, memberName, memberMobile);
  res.status(200).send("회원가입 성공!");
  const sql =
    "insert into member_table(member_email,member_password,member_name,member_mobile) values(?,?,?,?)";
  db.query(
    sql,
    [memberEmail, memberPassword, memberName, memberMobile],
    (err, results, fields) => {
      console.log("err", err);
    }
  );
});

app.get("/member/list", (req, res) => {
  const sql = "select * from member_table";
  db.query(sql, (err, results, fields) => {
    console.log("results", results);
    res.status(200).send(results);
  });
});
