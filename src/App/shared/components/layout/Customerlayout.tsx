import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import CustomerSidebar, { CustomerSidebarItem } from './Sidebar/CustomerSidebar';
import './Customerlayout.css';

interface CustomerLayoutProps {
  children: React.ReactNode;
  /**
   * Define o modo do layout:
   * - 'welcome' → tela de entrada (após QR code), só navbar e footer, sem sidebar
   * - 'guest'   → cliente público, carrinho na navbar e sidebar reduzida
   * - 'logged'  → cliente logado, avatar na navbar e sidebar completa
   */
  mode?: 'welcome' | 'guest' | 'logged';
  cartCount?: number;
  /** Chamado ao clicar no ícone do carrinho — abre o painel Carrinho */
  onCartClick?: () => void;
}

/** Itens exibidos para o cliente público — só o essencial */
const GUEST_ITEMS: CustomerSidebarItem[] = ['home', 'orders'];

/** Itens exibidos para o cliente logado — acesso completo */
const LOGGED_ITEMS: CustomerSidebarItem[] = ['home', 'orders', 'tables', 'menu'];

const CustomerLayout: React.FC<CustomerLayoutProps> = ({
  children,
  mode = 'logged',
  cartCount = 0,
  onCartClick,
}) => {

  const rightIcon = mode === 'guest' ? (
    <div className="cart-icon" onClick={onCartClick} style={{ cursor: onCartClick ? 'pointer' : 'default' }}>
      <FaShoppingCart className="cart-icon__svg" />
      {cartCount > 0 && (
        <span className="cart-icon__badge">{cartCount}</span>
      )}
    </div>
  ) : mode === 'welcome' ? (
    <img src="/icons/customer-avatar.png" alt="Perfil do cliente" />
  ) : (
    <img src="/icons/customer-avatar.png" alt="Perfil do cliente" />
  );

  const leftIcon = (
    <img src="/icons/restaurant-logo.png" alt="Logo do restaurante" />
  );

  const subtitle = mode === 'guest' ? 'MenuPoint' : '(Cliente)';

  const showSidebar = mode !== 'welcome';
  const sidebarItems = mode === 'guest' ? GUEST_ITEMS : LOGGED_ITEMS;

  return (
    <div className="customer-layout">
      <Navbar subtitle={subtitle} rightIcon={rightIcon} leftIcon={leftIcon} />

      <div className="customer-layout__body">
        {showSidebar && <CustomerSidebar items={sidebarItems} />}
        <main className="customer-layout__content">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerLayout;