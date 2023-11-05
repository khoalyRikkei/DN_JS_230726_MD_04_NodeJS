import {
  InternalServerException,
  ValidationException,
} from "../exceptions/index.js";

export default function handleException(error, req, res, next) {
  if (!error) {
    next();
  }
  if (
    error instanceof ValidationException ||
    error instanceof InternalServerException
  ) {
    return res
      .status(error.statusCode)
      .json({ message: error.message, errors: error.errors });
  }
}
