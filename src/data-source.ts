import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { City } from './entity/City';
import { Product } from './entity/Product';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  password: 'password',
  username: 'root',
  database: 'shortener',
  synchronize: true,
  dropSchema: true,
  logging: false,
  entities: [User, City, Product],
  migrations: [],
  subscribers: [],
});
