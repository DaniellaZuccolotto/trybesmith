import { Request, Response } from 'express';
import productService from '../services/productService';
import Product from '../interfaces/productInterface';

async function create(req: Request, res: Response) {
  const { name, amount } = req.body as Product;
  const product = await productService.create({ name, amount });
  res.status(201).json(product);
}

export default { create };