const data = {
  name: "Sản phẩm 1",
  description: "Sản phẩm đẹp",
  price: 1000,
};
export const insertData = (data, tableName) => {
  const keys = Object.keys(data).join();
  const values = Object.values(data);
  const ans = values.map((value) => "?").join();
  return `INSERT INTO ${tableName} (${keys})
   values (${ans})`;
};
