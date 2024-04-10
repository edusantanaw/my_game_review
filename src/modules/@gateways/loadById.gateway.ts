export abstract class LoadByIdRepository<E> {
  abstract loadById(id: string): Promise<E | null>;
}
