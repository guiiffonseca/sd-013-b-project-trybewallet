import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      expenses: [],
    };
    console.log(this.state);
    this.handleChange = this.handleChange.bind(this);
    // this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { user } = this.props;
    const { email } = user;
    const zero = 0;
    return (
      <div className="wallet">
        <header className="header">
          <div className="left-header">
            <h1 className="left-header">TRYBE</h1>
          </div>
          <div className="right-header">
            <span className="span" data-testid="email-field">
              { `Email: ${email}` }
            </span>
            <span className="span" data-testid="total-field">
              { `Despesa Total: R$ ${zero}` }
            </span>
            <span className="span" data-testid="header-currency-field">
              BRL
            </span>
          </div>
        </header>
        <form className="form">
          <Input
            label="Valor"
            name="valor"
            onChange={ this.handleChange }
          />
          <Input
            label="Descrição"
            name="descricao"
            onChange={ this.handleChange }
          />
          <Select label="Moeda" name="moeda" onChange={ this.handleChange } />
          <Select label="Método de pagamento" name="pg" onChange={ this.handleChange } />
          <Select label="Tag" name="tag" onChange={ this.handleChange } />
        </form>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  // wallet: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.reducerUser.user,
  wallet: state.reducerWallet.Wallet,
});

export default connect(mapStateToProps)(Wallet);
