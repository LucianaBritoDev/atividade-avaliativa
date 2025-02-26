// src/Routes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/account/Home";
import Login from "./pages/account/Login";
import Cadastro from "./pages/cadastro";
import Sidebar from "./components/Sidebar";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/intranet"> {/* Define o diretório base */}
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
