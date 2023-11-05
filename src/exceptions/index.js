class BadRequestException extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.name = "BadRequestException";
    this.statusCode = statusCode;
  }
}

class UnauthorizedException extends Error {
  constructor(message, statusCode = 401) {
    super(message);
    this.name = "UnauthorizedException";
    this.statusCode = statusCode;
  }
}
class NotFoundException extends Error {
  constructor(message, statusCode = 404) {
    super(message);
    this.name = "NotFoundException";
    this.statusCode = statusCode;
  }
}
class ValidationException extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.name = "ValidationException";
    this.statusCode = statusCode;
    this.field = this.field;
  }
}
class InternalServerErrorException extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = "InternalServerErrorException";
    this.statusCode = statusCode;
  }
}
export {
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  ValidationException,
  InternalServerErrorException,
};
