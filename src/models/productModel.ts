import { ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/productInterface';
import connection from './connection';

// public async getAll(): Promise<Book[]> {
//   const result = await this.connection
//     .execute('SELECT * FROM books');
//   const [rows] = result;
//   return rows as Book[];
// }

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

export default { create };