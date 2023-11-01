import express from "express";
import "dotenv/config";
import fs from "fs";

const app = express();

// lựa chọn template sử dụng
app.set("view engine", "ejs"); //--> mặc định folder views nằm cùng cấp source
app.set("views", "src/views"); // --> set lại đường dẫn thực tế của folder views

// routing

app.get("/", (req, res) => {
  res.render("index", {
    content: "Hello world",
    students: ["Quyết", "Hạnh", "Thái"],
  });
});

app.get("/users", (req, res) => {
  const dataJSON = fs.readFileSync("./src/model/users.json", "utf8");

  const dataArray = JSON.parse(dataJSON);

  res.render("user", {
    data: dataArray,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`connecting to http://localhost:${port}`);
});
