import React from 'react';
import './AuthCard.css';

/**
 * AuthCard exibe a imagem com gradiente e o logo.
 */
const AuthCard: React.FC = () => {
  return (
    <div className="auth-card">
      <img
        src="/images/Register-Image.png"
        alt="MenuPoint - Garfo, prato e faca ilustrados"
        className="auth-card__image"
      />
    </div>
  );
};

export default AuthCard;