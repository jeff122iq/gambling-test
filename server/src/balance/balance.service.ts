import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { BalanceGateway } from './balance.gateway';

@Injectable()
export class BalanceService {
  private redis = new Redis();

  constructor(private readonly gateway: BalanceGateway) {}

  async getBalance(userId: string): Promise<number> {
    const balance = await this.redis.get(`balance:${userId}`);
    return Number(balance) || 0;
  }

  async updateBalance(userId: string, delta: number): Promise<number> {
    const newBalance = await this.redis.incrby(`balance:${userId}`, delta);
    await this.logTransaction(userId, delta);
    return newBalance;
  }

  async logTransaction(userId: string, amount: number) {
    const tx = JSON.stringify({ userId, amount, timestamp: Date.now() });
    await this.redis.lpush(`tx:${userId}`, tx);
  }

  async getTransactions(userId: string) {
    const txs = await this.redis.lrange(`tx:${userId}`, 0, -1);
    return txs.map((tx) => JSON.parse(tx));
  }
}
