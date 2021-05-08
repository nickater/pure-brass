import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import Auth from './Auth';
import Instrument from './Instrument';

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

  @OneToOne((type) => Auth, (auth) => auth.user)
  auth: Auth;
}

export type Finish = 'raw' | 'lacquer' | 'silver';
