const { createUser, findUserByEmail } = require('../models/UserModel');
const { hashPassword, comparePasswords } = require('../utils/hash');
const { generateToken } = require('../utils/jwt');

async function register(email, password) {
  const existing = await findUserByEmail(email);
  if (existing) throw new Error('Email already exists');

  const passwordHash = await hashPassword(password);
  return await createUser(email, passwordHash);
}

async function login(email, password) {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  const valid = await comparePasswords(password, user.password);
  if (!valid) throw new Error('Invalid credentials');

  const token = generateToken({ id: user.id, role: user.role });
  return token;
}

module.exports = { register, login };
