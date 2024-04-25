import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config/databases/postgres.database';
import { GameModule } from './modules/game/game.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    GameModule,
    TypeOrmModule.forRoot(DatabaseConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
