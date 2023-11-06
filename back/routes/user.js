const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  // POST /user/
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디 입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: req.body.password,
    });
    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    next(error); // status(500)  200번대:성공, 400번대: client err, 500번대: server err
  }
});

module.exports = router;

// CORS문제 해결하기 4분부터 시청
