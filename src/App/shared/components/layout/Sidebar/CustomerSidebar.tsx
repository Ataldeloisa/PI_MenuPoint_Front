import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiHome, HiClipboardList, HiViewList } from 'react-icons/hi';
import { MdTableRestaurant } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import './CustomerSidebar.css';

/**
 * Define os itens disponíveis na sidebar do cliente.
 * Cada valor corresponde a um ícone e uma rota.
 */
export type CustomerSidebarItem = 'home' | 'orders' | 'tables' | 'profile' | 'menu';

interface CustomerSidebarProps {
  /**
   * Lista de itens a exibir na sidebar.
   * Cliente público recebe menos itens que o cliente logado.
   */
  items: CustomerSidebarItem[];
}

/**
 * Mapa de configuração de cada item da sidebar.
 * Centraliza ícone, rota e acessibilidade em um só lugar.
 * Para adicionar um novo item, basta incluir aqui — sem tocar no JSX.
 */
const SIDEBAR_CONFIG: Record<CustomerSidebarItem, { to: string; icon: React.ReactNode; label: string }> = {
  home:    { to: '/dwelcome',    icon: <HiHome />,            label: 'Início'   },
  orders:  { to: '/customer/orders',  icon: <HiClipboardList />,   label: 'Pedidos'  },
  tables:  { to: '/customer/tables',  icon: <MdTableRestaurant />, label: 'Mesas'    },
  profile: { to: '/customer/profile', icon: <FaUserCircle />,      label: 'Perfil'   },
  menu:    { to: '/customer/menu',    icon: <HiViewList />,        label: 'Cardápio' },
};

const CustomerSidebar: React.FC<CustomerSidebarProps> = ({ items }) => {
  return (
    <aside className="customer-sidebar">
      <nav className="customer-sidebar__nav">
        {items.map((item) => {
          const { to, icon, label } = SIDEBAR_CONFIG[item];
          return (
            <NavLink key={item} to={to} className="customer-sidebar__item" aria-label={label}>
              <span className="customer-sidebar__icon">{icon}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default CustomerSidebar;