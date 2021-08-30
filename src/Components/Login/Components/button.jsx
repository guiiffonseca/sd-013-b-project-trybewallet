import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ click, email, button }) {
  return (
    <Link to="/carteira">
      <input
        type="button"
        value="Entrar"
        disabled={ button }
        onClick={ () => click(email) }
      />
    </Link>
  );
}
Button.propTypes = {
  click: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  button: PropTypes.bool.isRequired,
};
