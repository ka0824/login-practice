import express from "express";
import mysql from "mysql";

const app = express();

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "login_server"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('connected');
})

app.get("/", (req, res) => {
    res.send("서버에 연결 되었습니다.")
});

app.listen(3001, () => {
    console.log("서버 연결 완료")
});