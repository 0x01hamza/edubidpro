// utils/hash.js
const bcrypt = require('bcryptjs');

async function hashPassword(password) {
  try {
    return await bcrypt.hash(password, 10);
  } catch (err) {
    console.error('[Hashing Error]', err);
    throw err;
  }
}

async function comparePasswords(raw, hashed) {
  try {
    return await bcrypt.compare(raw, hashed);
  } catch (err) {
    console.error('[Compare Error]', err);
    throw err;
  }
}

module.exports = { hashPassword, comparePasswords };
