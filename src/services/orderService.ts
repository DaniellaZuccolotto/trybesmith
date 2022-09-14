import orderModel from '../models/orderModel';
import { OrderSQL } from '../interfaces/orderInterface';

interface Objeto {
  code: number;
  message?: string;
  data?: OrderSQL[];
}

function validateProducts(produts: number[]) {
  if (!produts) {
    return { code: 400, message: '"productsIds" is required' };
  }
  if (!Array.isArray(produts)) {
    return { code: 422, message: '"productsIds" must be an array' };
  }
  if (produts.length === 0) {
    return { code: 422, message: '"productsIds" must include only numbers' };
  }
  return true;
}

async function create(productsIds: number[], userId: number): Promise<Objeto> {
  const validateProductsResult = validateProducts(productsIds);
  if (validateProductsResult !== true) return validateProductsResult;
  const newOrder = await orderModel.create(productsIds, userId);
  return { code: 201, data: newOrder };
}

async function getAll() {
  const orders = await orderModel.getAll();
  return orders;
}
  
export default { getAll, create };