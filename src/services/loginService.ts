import loginModel from '../models/loginModel';
import User from '../interfaces/userInterface';

function verifyUser(user: User, password: string) {
  if (!user) {
    return { code: 401, message: 'Username or password invalid' };
  }
  if (user.password !== password) {
    return { code: 401, message: 'Username or password invalid' };
  }
  return true;
}

function validaty(username: string, password: string) {
  if (!username || username === '') {
    return { code: 400, message: '"username" is required' };
  }
  if (!password || password === '') {
    return { code: 400, message: '"password" is required' };
  }
  return true;
}

async function getUser(username: string, password: string): Promise<any> {
  const validatyUser = validaty(username, password);
  if (validatyUser !== true) return validatyUser;
  const user = await loginModel.getUser(username);
  const verifyUserExist = verifyUser(user, password);
  if (verifyUserExist !== true) return verifyUserExist;
  return { code: 200, data: user };
}

async function getUserName(username: string) {
  const users = await loginModel.getUser(username);
  return users;
}
  
export default { getUser, getUserName };