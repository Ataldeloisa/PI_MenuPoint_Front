import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import AuthCard from './AuthCard';
import './LoginPage.css';

/**
 * email e password: controlam os valores dos inputs (controlled inputs)
 * showPassword: alterna a visibilidade da senha
 *
 * UseStates têm seu valor sempre sincronizado com o estado. Controle total para validar,
 * formatar ou enviar os dados.
 */
const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Quando a API estiver pronta, aqui chamará o authService. Por hora é só um placeholder para teste
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: 'url(/images/Register-Back.png)' }}
    >
      <div className="login-page__container">

        {/*Imagem compartilhada */}
        <AuthCard />

        {/*Formulário */}
        <div className="login-page__form-side">
          <h1 className="login-page__title">ENTRAR</h1>

          <form className="login-page__form" onSubmit={handleSubmit}>

            {/* Campo Email */}
            <div className="login-page__field">
              <label className="login-page__label" htmlFor="email">
                Email
              </label>
              <div className="login-page__input-wrapper">
                <MdEmail className="login-page__input-icon" />
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="login-page__input login-page__input--with-icon"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div className="login-page__field">
              <label className="login-page__label" htmlFor="password">
                Senha
              </label>
              <div className="login-page__input-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  className="login-page__input login-page__input--with-toggle"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/**
                 * Botão de toggle da senha — alterna entre mostrar e ocultar.
                 * type="button" é obrigatório para não submeter o form ao clicar.
                 */}
                <button
                  type="button"
                  className="login-page__toggle-password"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </button>
              </div>
            </div>

            <button className="login-page__submit"onClick={() => navigate("/restaurante/home")}>
              Entrar
            </button>

          </form>

          <button className="login-page__forgot">
            Esqueceu sua senha?
          </button>

          <div className="login-page__divider" />

          <p className="login-page__redirect">
            Não possui uma conta?{' '}
            <button
              className="login-page__redirect-link"
              onClick={() => navigate('/register')}
            >
              Criar conta
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;