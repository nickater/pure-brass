import { NextFunction, Request, Response } from 'express';
import User from '../models/user';

export class UserController {
  async all(request: Request, response: Response, next: NextFunction) {
    return User.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return User.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const user = new User();
    return await User.save(user);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    return await null;
  }
}
