import http from "http";

import url from "url";
import queryString from "querystring";

const server = http.createServer((req, res) => {
  const urlParse = url.parse(req.url); // chuyển đổi url

  console.log("Kiểm tra method", req.method);

  console.log(1111, urlParse);

  //   Set phản hồi kiểu JSON

  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    const data = queryString.parse(urlParse.query); // chuyển đổi data từ url --? cắt những chữ & --> object

    console.log("username từ client", data.username);
    console.log("email từ client", data.email);

    res.write(JSON.stringify(data));
    res.end();
  }

  if (req.method == "POST") {
    //   Trong trường hợp method post --> truyền sang HTTP request body
    let data;
    req
      .on("error", (err) => {
        console.log("Lỗi", err);
      })
      .on("data", (chunk) => {
        data = chunk.toString();
      })
      .on("end", () => {
        const newData = queryString.parse(data);
        res.write(JSON.stringify(newData));
        res.end();
      });
  }
});

server.listen(8888, () => {
  console.log(`Connect to http://localhost:${8888}`);
});
