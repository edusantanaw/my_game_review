export class CreateGateway<T> {
  create: (data: T) => Promise<T>;
}
