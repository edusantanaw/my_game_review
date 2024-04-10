export abstract class CreateGateway<T> {
  abstract create(data: T): Promise<T>;
}
