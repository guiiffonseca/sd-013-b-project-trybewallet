import React from 'react';

export default function Login() {
  return (
    <div>
      <form action="">
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" data-testid="email-input" />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" name="password" id="password" data-testid="password-input" />
        </label>
        <input type="button" value="Entrar" />
      </form>
    </div>
  );
}
