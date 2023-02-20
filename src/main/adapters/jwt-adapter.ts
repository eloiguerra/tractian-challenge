import { Decrypter } from "@shared/protocols/criptography/decrypter";
import { Encrypter } from "@shared/protocols/criptography/encrypter";
import { sign, verify } from "jsonwebtoken";

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(private readonly secret: string) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async decrypt(value: string): Promise<string | Record<string, any> | null> {
    try {
      const decoded = verify(value, this.secret);

      return decoded;
    } catch (error) {
      return null;
    }
  }

  async encrypt(
    value: Record<string, unknown>,
    expiresIn = "1d",
  ): Promise<string> {
    console.log(value);
    const accessToken = sign(value, this.secret, {
      expiresIn,
    });
    return accessToken;
  }
}
