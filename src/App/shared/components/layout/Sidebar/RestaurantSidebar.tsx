import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiHome,
  HiClipboardList,
  HiViewList,
  HiUserGroup,
  HiChartBar,
  HiCog,
} from 'react-icons/hi';
import { MdTableRestaurant } from 'react-icons/md';
import './RestaurantSidebar.css';

/**
 * Sidebar exclusiva do perfil restaurante.
 * Usa NavLink do React Router — ele aplica automaticamente
 * a classe "active" no item da rota atual, sem lógica manual.
 */
const RestaurantSidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">

        <NavLink to="/restaurant/home" className="sidebar__item">
          <HiHome className="sidebar__icon" />
          <span className="sidebar__item-label">Início</span>
        </NavLink>

        <div className="sidebar__group">
          <NavLink to="/restaurant/orders" className="sidebar__item">
            <HiClipboardList className="sidebar__icon" />
            <span className="sidebar__item-label">Pedidos</span>
          </NavLink>
          <div className="sidebar__subitems">
            <NavLink to="/restaurant/orders/history" className="sidebar__subitem">
              • Histórico
            </NavLink>
          </div>
        </div>

        <div className="sidebar__group">
          <NavLink to="/restaurant/menu" className="sidebar__item">
            <HiViewList className="sidebar__icon" />
            <span className="sidebar__item-label">Cardápio</span>
          </NavLink>
          <div className="sidebar__subitems">
            <NavLink to="/restaurant/menu/products" className="sidebar__subitem">
              • Produtos
            </NavLink>
            <NavLink to="/restaurant/menu/categories" className="sidebar__subitem">
              • Categorias
            </NavLink>
          </div>
        </div>

        <NavLink to="/restaurant/tables" className="sidebar__item">
          <MdTableRestaurant className="sidebar__icon" />
          <span className="sidebar__item-label">Mesas</span>
        </NavLink>

        <NavLink to="/restaurant/queue" className="sidebar__item">
          <HiUserGroup className="sidebar__icon" />
          <span className="sidebar__item-label">Fila</span>
        </NavLink>

        <NavLink to="/restaurant/reports" className="sidebar__item">
          <HiChartBar className="sidebar__icon" />
          <span className="sidebar__item-label">Relatórios</span>
        </NavLink>

        <NavLink to="/restaurant/settings" className="sidebar__item sidebar__item--bottom">
          <HiCog className="sidebar__icon" />
          <span className="sidebar__item-label">Configurações</span>
        </NavLink>

      </nav>
    </aside>
  );
};

export default RestaurantSidebar;