"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
// const morgan = require("morgan");
// const logger = require("./src/config/logger");
const dotenv = require("dotenv");
dotenv.config();
// 협업 시 개발자 별 운영체제가 다를 때 dotenv모듈로 동일하게 사용가능

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// use -> 미들웨어를 등록해주는 메서드
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등의 문자 인식 오류 문제 방지,해결
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(morgan("tiny", { stream: logger.stream }));

app.use("/", home);

// port number
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running port ${port}`);
});
