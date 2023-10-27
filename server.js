import http from "http";
import { matchRoute } from "./routes/matchRoute.js";

const server = http.createServer((req, res) => {


  // const url = req.url;
  //   res.setHeader({ "Content-Type": "application/json" });
  // res.write(matchRoute(url));
  // res.end();
});

const PORT = 8888;
server.listen(PORT, () => {
  console.log(`Connected with http://localhost:${PORT}`);
});
