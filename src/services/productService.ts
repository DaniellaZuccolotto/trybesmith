import productModel from '../models/productModel';
import Product from '../interfaces/productInterface';

async function create(product: Product): Promise<Product> {
  const newProduct = await productModel.create(product);
  return newProduct;
}

async function getAll(): Promise<Product[]> {
  const products = await productModel.getAll();
  return products;
}
  
export default { create, getAll };