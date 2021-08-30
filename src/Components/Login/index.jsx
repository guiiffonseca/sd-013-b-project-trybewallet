import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Components/Input';
import validateEmail from './Helper/ValidaçãoEmail';
import { setUser } from '../../actions';
import Button from './Components/button';

function LoginComponent({ setEmailAction }) {
  const [email, setEmail] = useState('');
  const [emailVerific, setEmailVerific] = useState(false);
  const [passwordVerific, setPasswordVerific] = useState(false);
  const [button, setButton] = useState(true);

  function hadlerChange({ target: { name, value } }) {
    const actions = {
      email() {
        setEmail(value);
        if (validateEmail(value)) {
          setEmailVerific(true);
        } else { setEmailVerific(false); }
      },
      password() {
        const minCaracter = 5;
        if (value.length > minCaracter) {
          setPasswordVerific(true);
        } else { setPasswordVerific(false); }
      },
    };
    actions[name]();
  }

  useEffect(() => {
    if (passwordVerific && emailVerific) { setButton(false); } else { setButton(true); }
  }, [passwordVerific, emailVerific]);

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
        <Button click={ setEmailAction } email={ email } button={ button } />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setEmailAction: (payload) => dispatch(setUser(payload)),
});

export default connect(null, mapDispatchToProps)(LoginComponent);

LoginComponent.propTypes = {
  setEmailAction: PropTypes.func.isRequired,
};
