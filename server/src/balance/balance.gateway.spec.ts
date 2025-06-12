import { Test, TestingModule } from '@nestjs/testing';
import { BalanceGateway } from './balance.gateway';

describe('BalanceGateway', () => {
  let gateway: BalanceGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalanceGateway],
    }).compile();

    gateway = module.get<BalanceGateway>(BalanceGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
