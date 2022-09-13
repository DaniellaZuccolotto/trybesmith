import { Request, Response } from 'express';
import orderService from '../services/orderService';

// async function create(req: Request, res: Response) {
//   const { name, amount } = req.body as Product;
//   const product = await productService.create({ name, amount });
//   res.status(201).json(product);
// }

async function getAll(req: Request, res: Response) {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
}

export default { getAll };