import { Request, Response } from 'express';
import productService from '../services/productService';
import Product from '../interfaces/productInterface';

async function create(req: Request, res: Response) {
  const { name, amount } = req.body as Product;
  const { message, code, data } = await productService.create({ name, amount });
  if (message) return res.status(code).json({ message });
  res.status(code).json(data);
}

async function getAll(req: Request, res: Response) {
  const products = await productService.getAll();
  res.status(200).json(products);
}

export default { create, getAll };