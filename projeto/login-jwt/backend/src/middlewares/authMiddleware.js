import jwt from "jsonwebtoken"

export function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization

  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null

  if (!token) {
    return res.status(401).json({
      message: "Token de autenticação não fornecido.",
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded

    next()
  } catch {
    return res.status(401).json({
      message: "Token inválido ou expirado.",
    })
  }
}