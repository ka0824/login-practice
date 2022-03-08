const express = require('express');
const userRouter = require('./routers/userRouter');
const cors = require('cors');


const app = express();
app.use(express.json());

app.use(
    cors({
        orgin: ['http://localhost:3000'],
        method:['GET', 'POST', 'DELETE', 'PUT', 'PATCH']
    })
)

app.get("/", (req, res) => {
    res.send({message: "success!"})
});

app.use("/user", userRouter);

const server = app.listen('3001', () => {
    console.log("서버 생성 완료");
});
