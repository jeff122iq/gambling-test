import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { HttpService } from '@nestjs/axios';
import { StartGameDto } from './dto/startGame.dto';

@Injectable()
export class GamesService {
  private redis = new Redis({ host: 'localhost', port: 6379 });
  private readonly API_URL = 'https://some-url.com/api/games';

  constructor(private readonly httpService: HttpService) {}

  async getGames() {
    const cache = await this.redis.get('games');
    if (cache) return JSON.parse(cache);

    const { data } = await this.httpService.get(this.API_URL).toPromise();
    await this.redis.set('games', JSON.stringify(data), 'EX', 3600);
    return data;
  }

  async startGame(dto: StartGameDto) {
    return {
      sessionId: `session-${Date.now()}`,
      gameId: dto.gameId,
      status: 'started',
    };
  }
}
