// src/App.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './routes';
import './App.css'; // Importa os estilos do layout (Sidebar e conteúdo)
import './index.css'; // Importa estilos globais (logo, animações)

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <AllRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

