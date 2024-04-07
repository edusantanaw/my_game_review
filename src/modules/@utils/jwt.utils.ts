export abstract class GenerateAccessToken<T> {
  abstract generate(payload: T): Promise<string>;
}
