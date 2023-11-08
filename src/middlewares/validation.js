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

// CREATE TABLE `project`.`users` (
//     `id` INT NOT NULL,
//     `name` VARCHAR(20) NOT NULL,
//     `email` VARCHAR(20) NOT NULL,
//     `gender` BIT NULL,
//     `doB` TIMESTAMP NULL,
//     `create_at` TIMESTAMP NOT NULL,
//     PRIMARY KEY (`id`),
//     UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

const validationFormRegister = (req, res, next) => {
  const { name, email, gender, doB } = req.body;

  let isError = false;
  const errors = {};

  if (!name) {
    isError = true;
    errors.msg_name_user = "Tên không được để trống";
  }

  if (name.length > 20) {
    isError = true;
    errors.msg_name_user = "Tên không được quá 20 ký tự";
  }

  if (!isError) {
    next(errors);
  } else {
    next();
  }
};
