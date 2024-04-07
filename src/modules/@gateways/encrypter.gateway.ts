export abstract class EncrypterCompare {
  abstract compare(encrypted: string, value: string): Promise<boolean>;
}
