/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IValidation {
  validate: (input: any) => Error | null;
}

export interface IValidatorScheme {
  string?: string[];
  number?: string[];
  boolean?: string[];
  required?: string[];
  custom?: IValidation[];
}
