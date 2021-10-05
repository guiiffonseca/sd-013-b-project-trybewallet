import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { currenciesThunk, expenseThunk } from '../actions';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentação',
      description: '',
      id: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectForm = this.selectForm.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleClick() {
    const { value, currency, description, method, tag, id } = this.state;
    const { setExpense } = this.props;
    setExpense({
      value,
      currency,
      description,
      method,
      tag,
      id,
    });
    this.setState({ id: id + 1, value: '', description: '' });
  }

  selectForm() {
    const { currencies } = this.props;

    return (
      <>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency" onChange={ this.handleChange }>
            {
              currencies.map((currency) => (
                <option key={ currency }>{ currency }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select name="method" id="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        { this.selectForm() }
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button onClick={ this.handleClick } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

AddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  setExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(currenciesThunk()),
  setExpense: (expense) => dispatch(expenseThunk(expense)),
});

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
