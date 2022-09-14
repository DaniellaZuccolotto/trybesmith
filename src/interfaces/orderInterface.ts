import { RowDataPacket } from 'mysql2/promise';

export interface OrderSQL extends RowDataPacket {
  id?: number;
  userId: number;
  productsIds: number[];
}
