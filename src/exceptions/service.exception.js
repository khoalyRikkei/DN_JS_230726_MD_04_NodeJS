export class ServiceException extends Error {
  nam = "ServiceException";
  constructor(code, message) {
    super();
    this.message = message;
    this.code = code;
  }
}
