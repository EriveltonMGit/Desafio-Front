const API_URL = "http://localhost:3001";

export const saveFuncionario = async (funcionario) => {
  const response = await fetch(`${API_URL}/funcionarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(funcionario),
  });

  if (!response.ok) {
    throw new Error("Erro ao salvar o funcionário.");
  }

  return await response.json();
};
