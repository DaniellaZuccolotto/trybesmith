import userModel from '../models/userModel';
import User from '../interfaces/userInterface';

async function create(user: User): Promise<void> {
  await userModel.create(user);
}

export default { create };