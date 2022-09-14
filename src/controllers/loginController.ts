import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import loginService from '../services/loginService';

const secret = 'mysecretpassword';

async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  const { code, message, data } = await loginService.getUser(username, password);
  if (code !== 200) return res.status(code).json({ message });
  const token = jwt.sign(
    { username, id: data.id },
    secret,

    { expiresIn: '7d', algorithm: 'HS256' },
  ); 
  return res.status(200).json({ token });
}

export default { login };