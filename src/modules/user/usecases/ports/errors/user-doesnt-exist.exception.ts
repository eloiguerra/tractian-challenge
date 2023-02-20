export class UserDoesntExistException extends Error {
  constructor() {
    super("Account doesn't exist.");
    this.name = "AccountDoesntExist";
  }
}
