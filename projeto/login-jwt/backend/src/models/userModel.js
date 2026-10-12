import pool from "../config/db.js"

export async function createUser(name, email, passwordHash) {
  const sql = `
    INSERT INTO users (name, email, password)
    VALUES (?, ?, ?)
  `

  const [result] = await pool.execute(sql, [
    name,
    email,
    passwordHash,
  ])

  return result
}

export async function findUserByEmail(email) {
  const sql = `
    SELECT id, name, email, password
    FROM users
    WHERE email = ?
  `

  const [rows] = await pool.execute(sql, [email])

  return rows[0]
}