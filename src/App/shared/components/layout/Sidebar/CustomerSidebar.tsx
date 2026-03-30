import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiHome, HiClipboardList, HiViewList } from 'react-icons/hi';
import { MdTableRestaurant } from 'react-icons/md';
import './CustomerSidebar.css';

// ── Tipos ──────────────────────────────────────────────
export type CustomerSidebarItem = 'home' | 'orders' | 'tables' | 'menu';

interface CustomerSidebarProps {
  items: CustomerSidebarItem[];
  /** onClick opcional por item — se fornecido, abre painel ao invés de navegar */
  onItemClick?: Partial<Record<CustomerSidebarItem, () => void>>;
}

/**
 * Mapa de configuração de cada item da sidebar.
 * Para adicionar um novo item, basta incluir aqui — sem tocar no JSX.
 */
const SIDEBAR_CONFIG: Record<CustomerSidebarItem, { to: string; icon: React.ReactNode; label: string }> = {
  home:   { to: '/dwelcome',         icon: <HiHome />,          label: 'Início'   },
  orders: { to: '/customer/orders',  icon: <HiClipboardList />, label: 'Pedidos'  },
  tables: { to: '/customer/tables',  icon: <MdTableRestaurant />,label: 'Mesas'   },
  menu:   { to: '/customer/menu',    icon: <HiViewList />,      label: 'Cardápio' },
};

// ──────────────────────────────────────────────────────
const CustomerSidebar: React.FC<CustomerSidebarProps> = ({ items, onItemClick }) => {
  return (
    <aside className="customer-sidebar">
      <nav className="customer-sidebar__nav">
        {items.map((item) => {
          const { to, icon, label } = SIDEBAR_CONFIG[item];
          const handleClick = onItemClick?.[item];

          // Se tiver onClick, vira botão — senão continua como NavLink
          if (handleClick) {
            return (
              <button
                key={item}
                className="customer-sidebar__item"
                onClick={handleClick}
                aria-label={label}
              >
                <span className="customer-sidebar__icon">{icon}</span>
              </button>
            );
          }

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