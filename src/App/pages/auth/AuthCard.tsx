import React from 'react';
import './AuthCard.css';

/**
 * AuthCard exibe a imagem com gradiente e o logo.
 */
const AuthCard: React.FC = () => {
  return (
    <div className="auth-card">

      {/* esse div é o gradiente de fundo */}
      <div className="auth-card__gradient">

        {/* a ilustração centralizada dentro do gradiente */}
        <img
          src="/images/Logo-Grande.png"
          alt="MenuPoint - Garfo, prato e faca ilustrados"
          className="auth-card__image"
        />

      </div>

    </div>
  );
};

export default AuthCard;