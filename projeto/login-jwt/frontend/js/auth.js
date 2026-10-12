import { apiRequest } from "./api.js"

const loginForm = document.querySelector("#login-form")
const message = document.querySelector("#message")
const submitButton = loginForm.querySelector('button[type="submit"]')

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault()

  const email = loginForm.email.value.trim()
  const password = loginForm.password.value

  message.textContent = ""
  submitButton.disabled = true
  submitButton.textContent = "A entrar..."

  try {
    const data = await apiRequest("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })

    sessionStorage.setItem("token", data.token)
    sessionStorage.setItem("user", JSON.stringify(data.user))

    message.textContent = data.message || "Login efetuado com sucesso!"
    message.style.color = "green"

    window.location.href = "./profile.html"
  } catch (error) {
    message.textContent = error.message
    message.style.color = "red"
  } finally {
    submitButton.disabled = false
    submitButton.textContent = "Entrar"
  }
})
