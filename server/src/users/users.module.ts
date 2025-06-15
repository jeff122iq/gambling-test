import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { BalanceService } from '../balance/balance.service';
import { BalanceModule } from '../balance/balance.module';
import { BalanceGateway } from '../balance/balance.gateway';

@Module({
  providers: [UsersService, BalanceService, BalanceGateway],
  controllers: [UsersController],
  imports: [BalanceModule],
})
export class UsersModule {}
