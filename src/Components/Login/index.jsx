import React, { useEffect, useState } from 'react';
import Input from './Components/Input';
import validateEmail from './Helper/ValidaçãoEmail';

export default function Login() {
  // Obs estou usando Funcionais, pois estou praticando (não entendo Muito, porém o codigo é 100% meu com consulta a Documentação, link https://pt-br.reactjs.org/docs/hooks-state.html)
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [button, setButton] = useState(true);

  function hadlerChange({ target: { name, value } }) {
    // Object Literal: https://blog.rocketseat.com.br/substituindo-a-instrucao-switch-por-object-literal/
    const actions = {
      email() {
        if (validateEmail(value)) { setEmail(true); } else { setEmail(false); }
      },
      password() {
        const minCaracter = 5;
        if (value.length > minCaracter) {
          setPassword(true);
        } else { setPassword(false); }
      },
    };
    actions[name]();
  }

  useEffect(() => {
    if (email && password) { setButton(false); } else { setButton(true); }
  }, [email, password]);

  return (
    <div>
      <form action="">
        <Input
          title="Email"
          id="email"
          type="email"
          data="email-input"
          hadlerChange={ hadlerChange }
        />
        <Input
          title="Senha"
          id="password"
          type="password"
          data="password-input"
          hadlerChange={ hadlerChange }
        />
        <input type="button" value="Entrar" disabled={ button } />
      </form>
    </div>
  );
}
