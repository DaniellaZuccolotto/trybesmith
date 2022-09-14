// import { RowDataPacket } from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import User from '../interfaces/userInterface';
import connection from './connection';

async function getUser(username: string): Promise<User> {
  const [data] = await connection
    .execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Users WHERE username = ?', 
    [username],
  );
  const [user] = data as User[];    
  return user;
}

export default { getUser };