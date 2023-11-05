const express = require("express");
const postRouter = require("./routes/post");
const db = require("./models");
const app = express();
db.sequelize.sync().then(() => {
  console.log("DB연결 성공");
});

// app.get => 가져오다
// app.post => 생성하다 (가져오는것과 수정해야하는것 복합적이라 애매한것은 post사용)
// app.put => 전체수정
// app.delete => 제거
// app.patch => 부분수정
// app.options => 찔러보기????
// app.head => 헤더만 가져오기(헤더/바디)

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/", (req, res) => {
  res.send("hello API");
});

app.get("/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello1" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.use("/post", postRouter);

app.listen(3065, () => {
  console.log("서버 실행 중");
});
