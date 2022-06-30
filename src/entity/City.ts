import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  @OneToMany((type) => User, (user) => user.city)
  id: number;

  @Column()
  name: string;
}
