import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../components/FormWallet';

let retorno = 0;

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      despesas: 0,
    };
    this.despesas = this.despesas.bind(this);
  }

  despesas(Valor) {
    retorno += Valor;
    this.setState(({
      despesas: retorno,
    }));
  }

  render() {
    const { email } = this.props;
    const { user } = email;
    const { despesas } = this.state;
    return (
      <div>

        <header>
          <p data-testid="email-field">{user.email}</p>
          <p data-testid="total-field">
            Despesa total:
            {despesas}

          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <FormWallet DespesasSoma={ this.despesas } />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    email: state,
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,

};

export default connect(mapStateToProps, null)(Wallet);
