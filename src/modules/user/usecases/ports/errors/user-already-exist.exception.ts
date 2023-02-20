export class UserAlreadyExistException extends Error {
  constructor() {
    super("Account already exist.");
    this.name = "AccountAlreadyExist";
  }
}
