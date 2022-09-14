import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import userService from '../services/userService';
import User from '../interfaces/userInterface';

const secret = 'mysecretpassword';

async function create(req: Request, res: Response) {
  const { code, message } = await userService.create(req.body);
  if (message) return res.status(code).json({ message });
  const { username } = req.body as User;
  const token = jwt.sign({ username }, secret, { expiresIn: '7d', algorithm: 'HS256' }); 
  return res.status(201).json({ token });
}

export default { create };