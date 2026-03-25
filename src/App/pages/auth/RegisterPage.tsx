import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import AuthCard from './AuthCard';
import './RegisterPage.css';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  /**
   * Máscara do CNPJ: formata enquanto o usuário digita.
   * Remove tudo que não é número e limita a 14 dígitos.
   */
  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 14);
    const formatted = digits
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2');
    setCnpj(formatted);
  };

  /**
   * Quando a API estiver pronta, aqui chamará o authService.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, cnpj, email, password, confirmPassword });
  };

  return (
    <div
      className="register-page"
      style= {{ backgroundImage: 'url(/images/Register-Back.png)' }}>
      <div className="register-page__container">

        {/* imagem compartilhada */}
        <AuthCard />

        {/*formulário */}
        <div className="register-page__form-side">
          <h1 className="register-page__title">Criar conta</h1>

          <form className="register-page__form" onSubmit={handleSubmit}>

            {/* Nome do restaurante */}
            <div className="register-page__field">
              <label className="register-page__label" htmlFor="name">
                Nome do restaurante
              </label>
              <input
                id="name"
                type="text"
                placeholder="Digite o nome do restaurante"
                className="register-page__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* CNPJ com máscara */}
            <div className="register-page__field">
              <label className="register-page__label" htmlFor="cnpj">
                CNPJ
              </label>
              <input
                id="cnpj"
                type="text"
                placeholder="00.000.000/0000-00"
                className="register-page__input"
                value={cnpj}
                onChange={handleCnpjChange}
              />
            </div>

            {/* Email */}
            <div className="register-page__field">
              <label className="register-page__label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="digite seu email"
                className="register-page__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Senhas*/}
            <div className="register-page__field-row">

              <div className="register-page__field">
                <label className="register-page__label" htmlFor="password">
                  Senha
                </label>
                <div className="register-page__input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    className="register-page__input register-page__input--with-toggle"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="register-page__toggle-password"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    {showPassword ? <HiEyeOff /> : <HiEye />}
                  </button>
                </div>
              </div>

              <div className="register-page__field">
                <label className="register-page__label" htmlFor="confirmPassword">
                  Confirmar senha
                </label>
                <div className="register-page__input-wrapper">
                  <input
                    id="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="Confirme sua senha"
                    className="register-page__input register-page__input--with-toggle"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="register-page__toggle-password"
                    onClick={() => setShowConfirm((prev) => !prev)}
                    aria-label={showConfirm ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    {showConfirm ? <HiEyeOff /> : <HiEye />}
                  </button>
                </div>
              </div>

            </div>

            <button type="submit" className="register-page__submit">
              Criar conta
            </button>

          </form>

          <p className="register-page__redirect">
            Já possui conta?{' '}
            <button
              className="register-page__redirect-link"
              onClick={() => navigate('/login')}
            >
              Entrar
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;