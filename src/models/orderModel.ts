// import { RowDataPacket } from 'mysql2/promise';
import { OrderSQL } from '../interfaces/orderInterface';
import connection from './connection';

// interface OrderSQL extends RowDataPacket {
//   id?: number;
//   userId: number;
//   productsIds: number[] | number;
// }

async function getAll(): Promise<OrderSQL[]> {
  const result = await connection
    .execute<OrderSQL[]>(`SELECT o.id, o.userId, p.id as productsIds FROM 
    Trybesmith.Orders as o 
    JOIN Trybesmith.Products as p ON o.id = p.orderId;`);
  const [rows] = result;
  const newArray: any = [];
  rows.forEach((row) => {
    const { id, productsIds, userId } = row;
    const order = newArray.find((orde: any) => orde.id === id);
    if (order) {
      order.productsIds = [...order.productsIds, productsIds];              
    } else {
      newArray.push({ id, userId, productsIds: [productsIds] });
    }
  });
  return newArray;
}

// async function create(product: Product): Promise<Product> {
//   const { name, amount } = product;
//   const result = await connection.execute<ResultSetHeader>(
//     'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
//     [name, amount],
//   );
//   const [dataInserted] = result;
//   const { insertId } = dataInserted;
//   return { id: insertId, name, amount };
// }

export default { getAll };