"use strict";

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();
// 협업 시 개발자 별 운영체제가 다를 때 dotenv모듈로 동일하게 사용가능

const app = express();

// URL을 통해 전달되는 데이터에 한글, 공백 등의 문자 인식 오류 문제 방지,해결
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import db from "./src/config/db.js";

// Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./src/public/images/"); // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({
  storage: storage,
});

//! Routes start

//route for Home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//@type   POST
//route for post data
app.post("/post", upload.single("image"), (req, res) => {
  if (!req.file) {
    console.log("No file upload");
  } else {
    console.log(req.file.filename);
    var imgsrc = "http://127.0.0.1:3000/images/" + req.file.filename;
    var insertData = "INSERT INTO users_file(file_src)VALUES(?)";
    db.query(insertData, [imgsrc], (err, result) => {
      if (err) throw err;
      console.log("file uploaded");
    });
  }
});

// port number
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running port ${port}`);
});
