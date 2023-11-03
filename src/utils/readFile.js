import fs from "fs";
import { RepositoryException } from "../exceptions/repository.exception.js";





export default function readFile(resoure) {
  try {
    const data = fs.readFileSync(`./src/models/${resoure}.json`, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    throw new RepositoryException(err);
  }
}
