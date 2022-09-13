import { ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/productInterface';
import connection from './connection';

async function getAll(): Promise<Product[]> {
  const result = await connection
    .execute('SELECT * FROM Trybesmith.Products');
  const [rows] = result;
  return rows as Product[];
}

async function create(product: Product): Promise<Product> {
  const { name, amount } = product;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, name, amount };
}

export default { create, getAll };