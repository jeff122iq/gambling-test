import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class BalanceGateway {
  @WebSocketServer()
  server: Server;

  notifyBalanceUpdate(userId: string, balance: number) {
    this.server.emit('balanceUpdate', { userId, balance });
  }

  @SubscribeMessage('get-balance')
  handleGetBalance(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    client.emit('balanceResponse', { message: 'Balance fetched!' });
  }
}
