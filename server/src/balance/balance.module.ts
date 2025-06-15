import { Module } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';
import { BalanceGateway } from './balance.gateway';

@Module({
  providers: [BalanceService, BalanceGateway],
  controllers: [BalanceController],
  exports: [BalanceService],
})
export class BalanceModule {}
