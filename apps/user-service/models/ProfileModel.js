// models/ProfileModel.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function getUserProfile(id) {
  const res = await pool.query(`SELECT id, email, name, role, bio FROM users WHERE id = $1`, [id]);
  return res.rows[0];
}

async function updateUserProfile(id, { name, bio }) {
  const res = await pool.query(
    `UPDATE users SET name = $1, bio = $2 WHERE id = $3 RETURNING id, email, name, role, bio`,
    [name, bio, id]
  );
  return res.rows[0];
}

module.exports = { getUserProfile, updateUserProfile };
