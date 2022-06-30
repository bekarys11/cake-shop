import { Injectable } from '@nestjs/common';
import { User } from '../entity/User';
import { AppDataSource } from '../data-source';

@Injectable()
export class UsersService {
  async getAll(): Promise<User[]> {
    return await AppDataSource.manager.find(User);
  }
}
