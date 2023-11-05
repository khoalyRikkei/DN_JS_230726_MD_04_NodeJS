const validationFormProduct = (req, res, next) => {
  let isError = false;
  const errors = {};
  const { name, description, price } = req.body;

  if (!name) {
    isError = true;
    errors.msg_name_product = "Tên Không được để trống";
  }

  if (!description) {
    isError = true;
    errors.msg_name_description = "Mô tả Không được để trống";
  }
  if (!price) {
    isError = true;
    errors.msg_name_price = "Giá Không được để trống";
  }

  if (isError) {
    // Xử lý lỗi

    // Hoặc có middleware bắt lỗi
    next(errors);
  } else {
    next();
  }
};
