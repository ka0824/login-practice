const express = require('express');
const userRouter = require('./routers/userRouter');


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send({message: "success!"})
});

app.use("/user", userRouter);

const server = app.listen('3001', () => {
    console.log("서버 생성 완료");
});
