import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = new Map<string, { id: string; name: string }>();

  createUser(id: string, name: string) {
    this.users.set(id, { id, name });
  }

  getUser(id: string) {
    return this.users.get(id);
  }
}
