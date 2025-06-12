import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { UsersModule } from './users/users.module';
import { BalanceGateway } from './balance/balance.gateway';
import { BalanceModule } from './balance/balance.module';

@Module({
  imports: [GamesModule, UsersModule, BalanceModule],
  controllers: [AppController],
  providers: [AppService, BalanceGateway],
})
export class AppModule {}
