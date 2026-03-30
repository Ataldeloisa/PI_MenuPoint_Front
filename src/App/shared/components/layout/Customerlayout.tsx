import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import CustomerSidebar, { CustomerSidebarItem } from './Sidebar/CustomerSidebar';
import './Customerlayout.css';

// ── Tipos ──────────────────────────────────────────────
interface CustomerLayoutProps {
  children: React.ReactNode;
  /**
   * Define o modo do layout:
   * - 'welcome' → tela de entrada, só navbar e footer, sem sidebar
   * - 'guest'   → cliente público, carrinho na navbar e sidebar reduzida
   * - 'logged'  → cliente logado, avatar na navbar e sidebar completa
   */
  mode?: 'welcome' | 'guest' | 'logged';
  cartCount?: number;
  /** Abre o painel do carrinho ao clicar no ícone da navbar */
  onCartClick?: () => void;
  /** Abre o painel do histórico ao clicar no ícone de pedidos da sidebar */
  onOrdersClick?: () => void;
}

// ── Constantes ─────────────────────────────────────────
const GUEST_ITEMS:  CustomerSidebarItem[] = ['home', 'orders'];
const LOGGED_ITEMS: CustomerSidebarItem[] = ['home', 'orders', 'tables', 'menu'];

// ──────────────────────────────────────────────────────
const CustomerLayout: React.FC<CustomerLayoutProps> = ({
  children,
  mode = 'logged',
  cartCount = 0,
  onCartClick,
  onOrdersClick,
}) => {

  const rightIcon = mode === 'guest' ? (
    <div
      className="cart-icon"
      onClick={onCartClick}
      style={{ cursor: onCartClick ? 'pointer' : 'default' }}
    >
      <FaShoppingCart className="cart-icon__svg" />
      {cartCount > 0 && (
        <span className="cart-icon__badge">{cartCount}</span>
      )}
    </div>
  ) : (
    <img src="/icons/customer-avatar.png" alt="Perfil do cliente" />
  );

  const leftIcon = (
    <img src="/icons/restaurant-logo.png" alt="Logo do restaurante" />
  );

  const subtitle     = mode === 'guest' ? 'MenuPoint' : '(Cliente)';
  const showSidebar  = mode !== 'welcome';
  const sidebarItems = mode === 'guest' ? GUEST_ITEMS : LOGGED_ITEMS;

  // Passa o onClick de histórico apenas para o item 'orders'
  const sidebarClicks = onOrdersClick ? { orders: onOrdersClick } : undefined;

  return (
    <div className="customer-layout">
      <Navbar subtitle={subtitle} rightIcon={rightIcon} leftIcon={leftIcon} />

      <div className="customer-layout__body">
        {showSidebar && (
          <CustomerSidebar items={sidebarItems} onItemClick={sidebarClicks} />
        )}
        <main className="customer-layout__content">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerLayout;