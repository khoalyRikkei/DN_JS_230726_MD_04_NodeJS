import { createServer } from "http";
import url from "url";
import { matchRoute } from "./routes/index.js";

const server = createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  //   let html = "";
  //   if (pathname === "/about") {
  //     // res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  //     html = renderHTML("Đây là about");
  //   } else if (pathname === "/news") {
  //     html = renderHTML("Đây là about");
  //   } else if (pathname === "/") {
  //     html = renderHTML("Đây là Home");
  //   } else {
  //     html = renderHTML("Không tìm thấy trang");
  //   }

  res.write(matchRoute(pathname));
  return res.end();
});
console.log("Xin chào nodemon");

console.log("Hello NodeJS!");

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server running... at port http://khoale-rikkeiacademy:${PORT}`);
});
