import productModel from '../models/productModel';
import Product from '../interfaces/productInterface';

const validateName = (name: string) => {
  if (!name || name === '') {
    return { code: 400, message: '"name" is required' };
  }
  if (typeof name !== 'string') {
    return { code: 422, message: '"name" must be a string' };
  }
  if (name.length < 3) {
    return { code: 422, message: '"name" length must be at least 3 characters long' };
  }
  return true;
};
const validateAmount = (amount: string) => {
  if (!amount || amount === '') {
    return { code: 400, message: '"amount" is required' };
  }
  if (typeof amount !== 'string') {
    return { code: 422, message: '"amount" must be a string' };
  }
  if (amount.length < 3) {
    return { code: 422, message: '"amount" length must be at least 3 characters long' };
  }
  return true;
};

async function create(product: Product): Promise<any> {
  const validateNameResult = validateName(product.name);
  if (validateNameResult !== true) return validateNameResult;
  const validateAmountResult = validateAmount(product.amount);
  if (validateAmountResult !== true) return validateAmountResult;
  const newProduct = await productModel.create(product);
  return { code: 201, data: newProduct };
}

async function getAll(): Promise<Product[]> {
  const products = await productModel.getAll();
  return products;
}
  
export default { create, getAll };