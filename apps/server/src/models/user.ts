import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
} from 'typeorm';
import Auth from './auth';
import Instrument from './instrument';

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fisrtName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  displayName: string;

  @Column()
  profilePictureURL: string;

  @OneToMany(() => Instrument, (instrument) => instrument.owner)
  instruments: Instrument[];

  @OneToOne(() => Auth, (auth) => auth.user)
  auth: Auth;
}

export type Finish = 'raw' | 'lacquer' | 'silver';
