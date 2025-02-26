// src/pages/Cadastro.tsx
import React, { useState } from "react";
import "./Cadastro.css"; // Importando o CSS da página

const Cadastro = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  // Manipula a mudança nos campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submissão do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados cadastrados:", formData);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Telefone:</label>
        <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} required />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
