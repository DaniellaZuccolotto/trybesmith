import userModel from '../models/userModel';
import User from '../interfaces/userInterface';

const validateName = (name: string) => {
  if (!name || name === '') {
    return { code: 400, message: '"username" is required' };
  }
  if (typeof name !== 'string') {
    return { code: 422, message: '"username" must be a string' };
  }
  if (name.length < 3) {
    return { code: 422, message: '"username" length must be at least 3 characters long' };
  }
  return true;
};
const validateClasse = (classe: string) => {
  if (!classe || classe === '') {
    return { code: 400, message: '"classe" is required' };
  }
  if (typeof classe !== 'string') {
    return { code: 422, message: '"classe" must be a string' };
  }
  if (classe.length < 3) {
    return { code: 422, message: '"classe" length must be at least 3 characters long' };
  }
  return true;
};

const validateLevel = (level: number) => {
  if (level < 1) {
    return { code: 422, message: '"level" must be greater than or equal to 1' };
  }
  if (!level) {
    return { code: 400, message: '"level" is required' };
  }
  if (typeof level !== 'number') {
    return { code: 422, message: '"level" must be a number' };
  }
  return true;
};

const validatePassword = (password: string) => {
  if (!password || password === '') {
    return { code: 400, message: '"password" is required' };
  }
  if (typeof password !== 'string') {
    return { code: 422, message: '"password" must be a string' };
  }
  if (password.length < 8) {
    return { code: 422, message: '"password" length must be at least 8 characters long' };
  }
  return true;
};

async function create(user: User): Promise<any> {
  const validateNameResult = validateName(user.username);
  if (validateNameResult !== true) return validateNameResult;
  const validateClasseResult = validateClasse(user.classe);
  if (validateClasseResult !== true) return validateClasseResult;
  const validateLevelResult = validateLevel(user.level);
  if (validateLevelResult !== true) return validateLevelResult;
  const validatePasswordResult = validatePassword(user.password);
  if (validatePasswordResult !== true) return validatePasswordResult;
  await userModel.create(user);
  return { code: 201 };
}

export default { create };