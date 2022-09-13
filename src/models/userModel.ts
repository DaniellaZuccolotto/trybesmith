// import { ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/userInterface';
import connection from './connection';

// async function getAll(): Promise<Product[]> {
//   const result = await connection
//     .execute('SELECT * FROM Trybesmith.Products');
//   const [rows] = result;
//   return rows as Product[];
// }

async function create(product: User): Promise<void> {
  const { username, classe, level, password } = product;
  await connection.execute(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
}

export default { create };