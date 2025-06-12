import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { BalanceService } from '../balance/balance.service';

@Controller('me')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly balanceService: BalanceService,
  ) {}

  @Get(':id')
  async getUserInfo(@Param('id') id: string) {
    const user = this.usersService.getUser(id);
    const balance = await this.balanceService.getBalance(id);
    return { ...user, balance };
  }
}
