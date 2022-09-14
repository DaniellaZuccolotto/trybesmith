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
    .execute<OrderSQL[]>(`SELECT o.id AS id, o.userId AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id ORDER BY userId ASC;`);
  const [orders] = result;
  // const newArray: any = [];
  // orders.forEach((orde) => {
  //   const { id, productsIds, userId } = orde;
  //   const order = newArray.find((orde: any) => orde.id === id);
  //   if (order) {
  //     order.productsIds = [...order.productsIds, productsIds];              
  //   } else {
  //     newArray.push({ id, userId, productsIds: [productsIds] });
  //   }
  // });
  return orders;
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