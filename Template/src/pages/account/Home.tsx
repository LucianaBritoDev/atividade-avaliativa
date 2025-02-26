// src/pages/account/Home.tsx
import React from "react";
import "./Home.css"; // Importa os estilos da página Home

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo à Intranet</h1>
      <p>Esta é a página inicial.</p>

      {/* Área de Widgets */}
      <div className="widgets-container">
        <div className="widget">
          <h3>Usuários Cadastrados</h3>
          <p>120 usuários</p>
        </div>

        <div className="widget">
          <h3>Últimos Acessos</h3>
          <p>5 minutos atrás</p>
        </div>

        <div className="widget">
          <h3>Avisos</h3>
          <p>Manutenção agendada para amanhã.</p>
        </div>

        <div className="widget">
          <h3>Atalhos</h3>
          <button>Ir para Cadastro</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
