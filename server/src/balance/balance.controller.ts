import { Controller, Get, Param } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller('transactions')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get(':id')
  async getUserTransactions(@Param('id') userId: string) {
    return this.balanceService.getTransactions(userId);
  }
}
