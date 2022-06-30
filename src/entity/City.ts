import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from '../users/users.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  @OneToMany((type) => Users, (user) => user.city)
  id: number;

  @Column()
  name: string;
}
