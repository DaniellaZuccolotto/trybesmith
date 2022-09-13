import { RowDataPacket } from 'mysql2/promise';

export interface Order {
  id?: number;
  userId: number;
  productsIds: number[];
}

export interface OrderSQL extends RowDataPacket {
  id?: any;
  userId: any;
  productsIds: any;
}
