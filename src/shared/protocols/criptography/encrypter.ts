export interface Encrypter {
  encrypt: (
    data: string | Record<string, unknown>,
    expiresIn?: string,
  ) => Promise<string>;
}
