import orderModel from '../models/orderModel';
import { OrderSQL } from '../interfaces/orderInterface';

// async function create(product: Product): Promise<Product> {
//   const newProduct = await productModel.create(product);
//   return newProduct;
// }

async function getAll(): Promise<OrderSQL[]> {
  const orders = await orderModel.getAll();
  return orders;
}
  
export default { getAll };