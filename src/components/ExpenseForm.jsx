import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import { fetchCurrencies as fetchCurrenciesAction } from '../actions/index';

class ExpenseForm extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <Input />
          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
            >
              { currencies.map((currency, index) => (
                <option
                  key={ index }
                >
                  { currency }
                </option>))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select
              name="payment"
              id="payment"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              name="tag"
              id="tag"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte e Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
