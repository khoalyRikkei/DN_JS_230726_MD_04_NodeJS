import fs from "fs";

export default function writeFile(resoure, data) {
  const dataJSON = JSON.stringify(data);
  fs.writeFileSync(`./src/models/${resoure}.json`, dataJSON);
}
