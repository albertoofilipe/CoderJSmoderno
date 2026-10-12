
import { API_URL } from "./config.js";

export async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  let data = {};

  try {
    data = await response.json();
  } catch {
    if (response.ok) {
      throw new Error("A API devolveu uma resposta inválida.");
    }
  }

  if (!response.ok) {
    const error = new Error(
      data.message || `Erro na API: HTTP ${response.status}`
    );

    error.status = response.status;

    throw error;
  }

  return data;
}
