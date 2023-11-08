// Create user

// CREATE TABLE `project`.`users` (
//     `id` INT NOT NULL,
//     `name` VARCHAR(20) NOT NULL,
//     `email` VARCHAR(20) NOT NULL,
//     `gender` BIT NULL,
//     `doB` TIMESTAMP NULL,
//     `create_at` TIMESTAMP NOT NULL,
//     PRIMARY KEY (`id`),
//     UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);


// Create products
// CREATE TABLE `project`.`products` (
//     `id` INT NOT NULL,
//     `name` NVARCHAR(50) NOT NULL,
//     `price` INT NOT NULL,
//     `status` TINYINT NOT NULL DEFAULT 0,
//     `create_at` TIMESTAMP NOT NULL,
//     PRIMARY KEY (`id`));