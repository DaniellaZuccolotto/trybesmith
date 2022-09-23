import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import loginService from '../services/loginService';

const secret = 'mysecretpassword';

interface UserLogin {
  username: string;
  id: string;
}

interface NewRequest extends Request {
  userId?: number;
}

export default async (req: NewRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization as string;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const { username } = jwt.verify(token, secret) as UserLogin;
    const user = await loginService.getUserName(username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = user.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};