import { Controller, Get, Post, Body } from '@nestjs/common';
import { GameDto } from './dto/games.dto';

@Controller('games')
export class GamesController {
  @Get()
  getGames() {
    return 'Отримати список ігор (заглушка)';
  }

  @Post()
  startGame(@Body() dto: GameDto) {
    return {
      message: 'Гра запущена (заглушка)',
      data: dto,
    };
  }
}
