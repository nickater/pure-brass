import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import User from './user';
import { IInstrument } from '@pure-brass/interfaces';
@Entity()
export default class Instrument extends BaseEntity implements IInstrument {
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

  @ManyToOne(() => User, (user) => user.instruments)
  owner: User;
}

export type Finish = 'raw' | 'lacquer' | 'silver';
