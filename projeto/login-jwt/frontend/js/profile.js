
import { apiRequest } from "./api.js";

const profileContent = document.querySelector("#profile-content");
const message = document.querySelector("#message");
const logoutButton = document.querySelector("#logout-button");

const profileName = document.querySelector("#profile-name");
const headerName = document.querySelector("#header-name");

function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");

  window.location.replace("./index.html");
}

function showError(text) {
  message.textContent = text;
  message.style.color = "#dc2626";
}

function renderProfile(user) {
  profileName.textContent = user.name || "Utilizador";
  headerName.textContent = `Olá, ${user.name || "Utilizador"}`;

  message.remove();

  const details = [
    {
      label: "Nome",
      value: user.name,
      icon: "♙",
    },
    {
      label: "Email",
      value: user.email,
      icon: "✉",
    },
    {
      label: "ID do utilizador",
      value: user.id,
      icon: "▤",
    },
  ];

  for (const detail of details) {
    const item = document.createElement("div");
    item.className = "detail-item";

    const icon = document.createElement("span");
    icon.className = "detail-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = detail.icon;

    const text = document.createElement("div");
    text.className = "detail-text";

    const label = document.createElement("span");
    label.className = "detail-label";
    label.textContent = detail.label;

    const value = document.createElement("p");
    value.className = "detail-value";
    value.textContent = user[detail.label === "Nome"
      ? "name"
      : detail.label === "Email"
        ? "email"
        : "id"] ?? "Não disponível";

    text.append(label, value);
    item.append(icon, text);
    profileContent.append(item);
  }
}

async function loadProfile() {
  const token = sessionStorage.getItem("token");

  if (!token) {
    logout();
    return;
  }

  try {
    const data = await apiRequest("/api/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!data.user) {
      throw new Error("A API não devolveu os dados do utilizador.");
    }

    renderProfile(data.user);
  } catch (error) {
    if (error.status === 401) {
      logout();
      return;
    }

    showError(error.message || "Não foi possível carregar o perfil.");
  }
}

logoutButton.addEventListener("click", logout);

loadProfile();
