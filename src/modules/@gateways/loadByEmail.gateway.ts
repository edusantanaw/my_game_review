export abstract class LoadByEmailRepository<T> {
  abstract loadByEmail(email: string): Promise<T | null>;
}
