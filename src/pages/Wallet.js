import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../utils';
import FormSelects from './FormSelects';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      expense: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log(fetchCurrencies());
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { expense, description, value } = this.state;
    const { email } = this.props;
    return (
      <div>
        <header>
          TrybeWallet
          <p data-testid="email-input">{email}</p>
          <p data-testid="total-field">{value}</p>
          <p data-testid="header-currency-field">BRL</p>
          <p data-testid="password-input" />
        </header>
        <form>
          <fieldset>
            <legend>Welcome</legend>
            <input
              type="text"
              name="expense"
              id="expense"
              placeholder="expense"
              required
              label="Valor"
              value={ expense }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              name="description"
              id="description"
              placeholder="description"
              required
              label="Descrição"
              value={ description }
              onChange={ this.handleChange }
            />
            <FormSelects />
          </fieldset>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
