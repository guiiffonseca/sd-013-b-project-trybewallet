import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

export default function HeaderComponent(
  { email, total, coins, handlerChange, form, editInfos, handlerClick },
) {
  return (
    <header>
      <h3 data-testid="email-field">{email}</h3>
      <h3 data-testid="total-field">{total}</h3>
      <h3 data-testid="header-currency-field">BRL</h3>
      <Form
        coins={ coins }
        handlerChange={ handlerChange }
        form={ form }
      />
      <input
        type="button"
        value={ editInfos ? 'Editar Despesas' : 'Adicionar Despesas' }
        onClick={ handlerClick }
      />
    </header>
  );
}

HeaderComponent.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  coins: PropTypes.arrayOf(String).isRequired,
  handlerChange: PropTypes.func.isRequired,
  form: PropTypes.objectOf(String).isRequired,
  editInfos: PropTypes.bool.isRequired,
  handlerClick: PropTypes.func.isRequired,
};
