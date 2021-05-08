import { BaseEntity, OneToOne } from 'typeorm';
import User from './user';

export default class Auth extends BaseEntity {
  id: string;
  password: string;
  role: Role;

  @OneToOne(() => User, (user: User) => user.auth)
  user: User;
}

export type Role = 'admin' | 'user' | 'anon';
