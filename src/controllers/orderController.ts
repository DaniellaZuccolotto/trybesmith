import { Request, Response } from 'express';
import orderService from '../services/orderService';

interface NewRequest extends Request {
  userId: number;
}

async function create(req: Request, res: Response) {
  const { productsIds } = req.body;
  const { userId } = req as NewRequest;
  const { code, message, data } = await orderService.create(productsIds, userId);
  if (message) return res.status(code).json({ message });
  res.status(201).json(data);
}

async function getAll(req: Request, res: Response) {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
}

export default { getAll, create };