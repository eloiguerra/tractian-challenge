export class IsRequiredError extends Error {
  constructor(field: string) {
    super(`${field} is required`);
    this.name = "IsRequired";
  }
}
