import fs from "fs";

// dùng readFile --> đọc file
// writeFile --> ghi đè file

function getData(pathFile) {
  const data = fs.readFileSync(pathFile, "utf-8");
  return data;
}

// get --> dùng fs đọc --> trả về json
//url file

// insert --> đưa dữ liệu vào --> id
//url file, id --> push --> id mới

// update --> thay đổi dữ liệu --> data update
// url file

// delete --> true/false

export function getAllItems(pathFile) {
  const entities = fs.readFileSync(pathFile, "utf-8");
  return entities;
}

export function insertItem(tableName, entity) {
  try {
    if (!entity.id) {
      const entities = JSON.parse(localStorage.getItem(tableName));

      let id = entities[entities.length - 1].id + 1;
      entities.push(entity);
      localStorage.setItem(tableName, JSON.stringify(entities));
      return entity.id;
    }
    return 0;
  } catch (error) {
    return 0;
  }
}

export function updateItem(tableName, entity) {
  try {
    if (entity.id) {
      const entitie = JSON.parse(localStorage.getItem(tableName));

      for (let _entity of entities) {
        if (_entity.id === entity.id) {
          _entity = entity;
          break;
        }
      }

      localStorage.setItem(tableName, JSON.stringify(entities));

      return entity.id;
    }

    return 0;
  } catch (error) {
    return 0;
  }
}

export function deleteItemById(tableName, id) {
  try {
    const entities = JSON.parse(localStorage.getItem(tableName));

    let delIndex = -1;
    for (let i = 0; i < entities.length; i++) {
      const _entity = entities[i];
      if (_entity.id === id) {
        delIndex = i;
      }
    }

    if (delIndex !== -1) {
      entities.splice(delIndex, 1);
      localStorage.setItem(tableName, JSON.stringify(entities));
    }

    return true;
  } catch (error) {
    return false;
  }
}

export { getData };
