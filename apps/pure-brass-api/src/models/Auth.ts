import { BaseEntity, OneToOne } from 'typeorm';
import User from './User';

export default class Auth extends BaseEntity {
  id: string;
  password: string;
  role: Role;

  @OneToOne((type) => User, (user) => user.auth)
  user: User;
}

export type Role = 'admin' | 'user' | 'anon';
