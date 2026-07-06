import pool from "../config/db.js";

export async function createUser(userData) {
  const { full_name, email, password } = userData;

  const query = `
    INSERT INTO users (full_name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id, full_name, email, role, is_verified, created_at;
  `;

  const values = [full_name, email, password];

  const result = await pool.query(query, values);

  return result.rows[0];
}