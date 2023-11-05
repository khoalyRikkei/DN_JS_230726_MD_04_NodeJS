import fs from "fs";
import { InternalServerException } from "../exceptions/index.js";
import { MSG_COMMON } from "../messages/index.js";

export default function readFile(resoure) {
  try {
    const data = fs.readFileSync(`./src/models/${resoure}.json`, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    throw new InternalServerException(
      MSG_COMMON.MSG_ERROR.InternalServerException
    );
  }
}
