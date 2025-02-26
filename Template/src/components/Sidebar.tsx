// src/components/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Importa os estilos do Sidebar

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li> {/* Link para Cadastro */}
        <li><Link to="/login">Sair</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;

