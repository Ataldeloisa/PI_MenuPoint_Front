import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import WelcomePage from "../pages/ClienteLocal/WelcomePage/WelcomePage";
import HomeRestaurante from "../pages/Restaurante/Home/HomeRestaurante";
import DWelcomePage from "../pages/cliente/Welcome/DWelcomePage";
import MenuCliente from "../pages/cliente/Menu/MenuCliente";
import Pedido from "../pages/Restaurante/Cadastros/Pedidos/Pedido";

/**
 * Novas telas = Novas rotas aqui (Obrigatorio)
 */
const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/restaurante/home" element={<HomeRestaurante /> } />
        <Route path="/dwelcome" element={<DWelcomePage />} />
        <Route path="menu" element={<MenuCliente />} />
        <Route path="/restaurante/pedido" element={<Pedido />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
