import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("서버에 연결 되었습니다.")
})

app.listen(3001, () => {
    console.log("서버 연결 완료")
});