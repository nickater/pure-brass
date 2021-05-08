import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { UserController } from '../controllers/user.controller';
import User from './User';

@Entity()
export default class Instrument extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  brand: string;
  @Column()
  model: string;
  @Column()
  price: number;
  @Column()
  boreSize: number;
  @Column()
  isForSale: boolean;
  @Column()
  isCaseIncluded: boolean;
  @Column()
  isShippingAvailable: boolean;
  @Column()
  isSold: boolean;
  @Column()
  key: string;
  @Column()
  finish: Finish;
  @Column()
  description: string;
  @Column()
  dateCreated: Date;
  @Column()
  dateUpdated: Date;

  @ManyToOne((type) => User, (user) => user.instruments)
  owner: User;
}

export type Finish = 'raw' | 'lacquer' | 'silver';
