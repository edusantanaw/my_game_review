import { DataSource, Repository } from 'typeorm';
import GamePersistenceEntity from '../entities/game.entity';
import { GameEntity } from 'src/modules/game/entity/game.entity';
import { GameDataMapper } from './dataMappers/game.dataMapper';

export class GameGateway {
  readonly repository: Repository<GamePersistenceEntity>;
  readonly dataMapper = new GameDataMapper();
  constructor(dataSource: DataSource) {
    console.log(dataSource);
    // this.repository = dataSource.getRepository(GamePersistenceEntity);
  }

  async create(userEntity: GameEntity) {
    const userPersistence = await this.repository.save(
      this.dataMapper.toPersistence(userEntity),
    );
    return this.dataMapper.toEntity(userPersistence);
  }
}
