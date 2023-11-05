import readFile from "../utils/readFile.js";
import writeFile from "../utils/writeFile.js";

const getReceipt = (req, res) => {
  const dataProduct = readFile("products");
  const dataReceipt = readFile("receipt");
  if (!dataProduct) {
    res.status(500).send("Internal Server Error");
  }
  if (!dataReceipt) {
    const newRecept = dataProduct.map((product) => {
      product.quantity = 0;
      return product;
    });
    writeFile("receipt", newRecept);

    return res.status(200).json(newRecept);
  }

  const newReceipt = dataProduct.map((product) => {
    const receipt = dataReceipt.find((data) => product.id === data.id);
    if (receipt) {
      // Cập nhật lại thông tin product nếu product thay đổi nhưng không làm mất số lượng của receipt
      return { ...receipt, ...product };
    }
    // Đây là những trường hợp sản phẩm mới
    return { ...product, quantity: 0 };
  });
  writeFile("receipt", newReceipt);
  return res.status(200).json(newReceipt);
};

export default {
  getReceipt,
};
