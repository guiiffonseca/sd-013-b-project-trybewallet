import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenditure, requestWalletCoinsThunk } from '../actions';
import Input from './Input';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentação',
      description: '',
      exchangeRates: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    const { expendituresAction, getExchange } = this.props;
    getExchange();
    expendituresAction({
      ...this.state,
    });
  }

  renderInput(type, name, id, func) {
    return (<Input type={ type } name={ name } id={ id } func={ func } />);
  }

  render() {
    const { currencies } = this.props;
    delete currencies.USDT;
    const arrayObjctCurrencies = Object.values(currencies);
    return (
      <form>
        <label htmlFor="Valor">
          Valor
          { this.renderInput('number', 'value', 'Valor', this.handleChange) }
        </label>
        <label htmlFor="Descrição">
          Descrição
          { this.renderInput('text', 'description', 'Descrição', this.handleChange) }
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select onChange={ this.handleChange } name="currency" id="Moeda">
            { arrayObjctCurrencies.map((currency, index) => (
              <option
                key={ index }
              >
                {currency.code}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento
          <select onChange={ this.handleChange } name="method" id="Método de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select onChange={ this.handleChange } name="tag" id="Tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expendituresAction: (payload) => dispatch(addExpenditure(payload)), // recupera as informaçoes do dom pra passar por payload para action creator usar como informação para o reducer
  getExchange: () => dispatch(requestWalletCoinsThunk()),
});

Form.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  expendituresAction: PropTypes.func.isRequired,
  getExchange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
