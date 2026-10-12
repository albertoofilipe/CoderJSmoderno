import express from "express"
import pool from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors({
  origin: "http://127.0.0.1:5500",
}))

app.use("/api/auth", authRoutes)

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando!",
  })
})

try {
  const connection = await pool.getConnection()

  console.log("MySQL conectado com sucesso!")

  connection.release()
} catch (error) {
  console.error("Erro ao conectar ao MySQL:", error.message)
}

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
})