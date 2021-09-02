import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { walletAction } from '../actions/index';

class FormWallet extends React.Component {
  constructor() {
    super();

    this.state = {
      expensesX: {
        id: 0,
        exchangeRates: { },
        total: 0,
      },
    };

    this.getV = this.getV.bind(this);
    this.setExpenses = this.setExpenses.bind(this);
  }

  getV({ target: { name, value } }) {
    const { expensesX } = this.state;
    const { infoApi } = this.props;

    this.setState({
      expensesX: {
        ...expensesX,
        [name]: value,
        exchangeRates: infoApi,
      },
    });
  }

  async setExpenses() {
    const { expensesX: { id } } = this.state;
    const { expensesX } = this.state;
    const { setExpensesToState } = this.props;

    await this.setState({
      expensesX: {
        id: id + 1,
      },
    });

    setExpensesToState(expensesX);
  }

  render() {
    const { infoApi } = this.props;
    const { total } = this.state;
    console.log(total);
    console.log(infoApi);
    return (
      <form>
        <label htmlFor="value">
          Valor :
          <input type="number" name="value" id="value" onChange={ this.getV } />
        </label>
        <label htmlFor="description">
          Descrição :
          <input type="text" name="description" id="description" onChange={ this.getV } />
        </label>

        <label htmlFor="currency">
          Moeda :
          <select name="currency" id="currency" onChange={ this.getV }>
            {
              Object.keys(infoApi).map((e) => (
                e !== 'USDT' ? <option key={ e }>{ e }</option> : console.log('no')
              ))
            }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento :
          <select name="method" id="method" onChange={ this.getV }>
            <option value="vazio">.</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="cartaoCredito">Cartão de crédito</option>
            <option value="cartaoDebito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag :
          <select name="tag" id="tag" onChange={ this.getV }>
            <option value="vazio">.</option>
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.setExpenses }>Adicionar despesa</button>
      </form>
    );
  }
}

FormWallet.propTypes = {
  infoApi: PropTypes.shape.isRequired,
  setExpensesToState: PropTypes.func.isRequired,
  // expenses: PropTypes.objectOf(
  //   PropTypes.string,
  //   PropTypes.array,
  //   PropTypes.object,
  // ).isRequired,
};

// pegar as despesas do state:
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setExpensesToState: (value) => dispatch(walletAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
