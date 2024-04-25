export interface IDataMapper<Entity, Persistence> {
  toPersistence: (data: Entity) => Persistence;
  toEntity: (data: Persistence) => Entity;
}
