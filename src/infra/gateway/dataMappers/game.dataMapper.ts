import { GameEntity } from 'src/modules/game/entity/game.entity';
import { IDataMapper } from './dataMapper';
import GamePersistenceEntity from 'src/infra/entities/game.entity';

export class GameDataMapper
  implements IDataMapper<GameEntity, GamePersistenceEntity>
{
  toPersistence(data: GameEntity): GamePersistenceEntity {
    return {
      id: data.id,
      categories: JSON.stringify(data.categories),
      deleted: data.deleted ? 1 : 0,
      createdAt: data.createdAt,
      name: data.name,
      publisher: data.publisher,
      updatedAt: data.updatedAt,
      release: data.release,
    };
  }
  toEntity(data: GamePersistenceEntity): GameEntity {
    return {
      id: data.id,
      categories: JSON.parse(data.categories) as string[],
      deleted: data.deleted === 1,
      createdAt: data.createdAt,
      name: data.name,
      publisher: data.publisher,
      updatedAt: data.updatedAt,
      release: data.release,
    };
  }
}
