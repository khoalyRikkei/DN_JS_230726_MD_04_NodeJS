//  CREATE TABLE

export const createTable = (tableName, attributes) => {
  let values = [];
  for (const key in attributes) {
    values.push(key + " " + attributes[key]);
  }

  return ` CREATE TABLE ${tableName} (${values.join()})`;
};

// INSERT DATA

export const insertData = (tableName, data) => {
  // data laf mangr
  const keys = Object.keys(data[0]).join();
  const newData = data
    .map((obj) => {
      const value = Object.values(obj);
      const newValue = value.map((val) =>
        typeof val === "string" ? "'" + val + "'" : val
      );
      return `(${Object.values(newValue).join()})`;
    })
    .join();
  return `
    INSERT INTO ${tableName} (${keys}) 
VALUES ${newData};
    `;
};



// ADD NEW FORERIGN KEY
/**
 * 
 * @param {*} tableNameOfForeignKey  bảng có khóa ngoại
 * @param {*} tableNameOfPrimaryKey bảng liên kết
 * @param {*} attributeForeignKey cột của bảng có khóa ngoại
 * @param {*} attributePrimaryKey cột của bảng liên kết
 * @returns string
 */
export const addForeignKey = (
  tableNameOfForeignKey,
  tableNameOfPrimaryKey,
  attributeForeignKey,
  attributePrimaryKey
) => {

    return `ALTER TABLE ${tableNameOfForeignKey}
    ADD FOREIGN KEY (${attributeForeignKey}) REFERENCES ${tableNameOfPrimaryKey}(${attributePrimaryKey});`
};
