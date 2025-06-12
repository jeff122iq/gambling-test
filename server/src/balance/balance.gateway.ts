import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class BalanceGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Balance get successfully.';
  }
}
