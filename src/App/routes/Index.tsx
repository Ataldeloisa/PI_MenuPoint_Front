import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import WelcomePage from '../pages/ClienteLocal/WelcomePage/WelcomePage';
import HomeRestaurante from '../pages/Restaurante/Home/HomeRestaurante';
import Restaurantlayout from '../shared/components/layout/Restaurantelayout';

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
        <Route path="/restaurante/home"element={ <Restaurantlayout><HomeRestaurante /></Restaurantlayout>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;