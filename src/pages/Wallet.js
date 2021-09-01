import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../components/Input';
import Select from '../components/Select';

const tags = {
  tagCodes: [
    {
      code: 'Alimentação',
    },
    {
      code: 'Lazer',
    },
    {
      code: 'Trabalho',
    },
    {
      code: 'Transporte',
    },
    {
      code: 'Saúde',
    },
  ],
};

const methods = {
  methodCodes: [
    {
      code: 'Dinheiro',
    },
    {
      code: 'Cartão de crédito',
    },
    {
      code: 'Cartão de débito',
    },
  ],
};

const placeholder = {
  placeholderCodes: [
    {
      code: 'teste',
    },
    {
      code: 'teste1',
    },
  ],
};

class Wallet extends React.Component {
  render() {
    const { user: { email } } = this.props;
    const { tagCodes } = tags;
    const { methodCodes } = methods;
    const { placeholderCodes } = placeholder;

    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form onSubmit={ (event) => event.preventDefault() }>
          <Input type="number" label="Valor" id="value" />
          <Input type="text" label="Descrição" id="description" />
          <Select label="Moeda" id="exchange" options={ placeholderCodes } />
          <Select label="Método de Pagamento" id="method" options={ methodCodes } />
          <Select label="Tag" id="tags" options={ tagCodes } />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Wallet);
