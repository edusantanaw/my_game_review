export abstract class EncrypterCompare {
  abstract compare(encrypted: string, value: string): Promise<boolean>;
}

export abstract class GenerateHashAbs {
  abstract generate(value: string): Promise<string>;
}
