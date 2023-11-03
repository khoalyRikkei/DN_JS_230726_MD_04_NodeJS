export class RepositoryException extends Error {
  nam = "RepositoryException";
  constructor(error, message) {
    super();
    this.message = message;
    this.error = error;
  }
}
