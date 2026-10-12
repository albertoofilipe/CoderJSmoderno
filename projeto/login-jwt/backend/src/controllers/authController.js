import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import { createUser } from "../models/userModel.js"
import { findUserByEmail } from "../models/userModel.js"

export async function register(req, res) {
  try {
    const { name, email, password } = req.body

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Nome, email e senha são obrigatórios.",
      })
    }

    const normalizedEmail = email.trim().toLowerCase()

    if (password.length < 8) {
      return res.status(400).json({
        message: "A senha deve ter pelo menos 8 caracteres.",
      })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    await createUser(name.trim(), normalizedEmail, passwordHash)

    return res.status(201).json({
      message: "Utilizador registado com sucesso!",
    })
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        message: "Este email já está registado.",
      })
    }

    console.error("Erro ao registar utilizador:", error.message)

    return res.status(500).json({
      message: "Erro interno do servidor.",
    })
  }
}


export async function login(req, res) {
  try {
    const { email, password } = req.body

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Email e senha são obrigatórios.",
      })
    }

    const normalizedEmail = email.trim().toLowerCase()

    const user = await findUserByEmail(normalizedEmail)

    if (!user) {
      return res.status(401).json({
        message: "Email ou senha incorretos.",
      })
    }

    const passwordIsValid = await bcrypt.compare(
      password,
      user.password
    )

    if (!passwordIsValid) {
      return res.status(401).json({
        message: "Email ou senha incorretos.",
      })
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1h",
      }
    )

    return res.status(200).json({
      message: "Login efetuado com sucesso!",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error("Erro ao efetuar login:", error.message)

    return res.status(500).json({
      message: "Erro interno do servidor.",
    })
  }
}


export function getProfile(req, res) {
  return res.status(200).json({
    message: "Perfil obtido com sucesso!",
    user: req.user,
  })
}