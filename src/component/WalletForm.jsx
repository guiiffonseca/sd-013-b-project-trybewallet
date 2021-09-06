import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import { getCurrencie, getAddExpense } from '../actions';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      valor: 0,
      descricao: '',
      moeda: 'USD',
      pagamento: '',
      categoria: '',
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handelChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: name === 'valor' ? parseFloat(value) : value,
    });
  }

  handelSubmit() {
    const { setExpenses } = this.props;
    const forms = this.state;
    setExpenses(forms);
    this.setState((previous) => ({
      id: previous.id + 1,
    }));
  }

  render() {
    const { currencies } = this.props;
    const { valor, descricao, moeda, pagamento, categoria } = this.state;
    return (
      <form>
        <Inputs
          valor={ valor }
          descricao={ descricao }
          handelChange={ this.handelChange }
        />
        <label htmlFor="moeda">
          Moeda :
          <select name="moeda" id="moeda" onChange={ this.handelChange } value={ moeda }>
            {currencies.map((curr, i) => (
              <option key={ i } value={ curr.code }>{ curr.code }</option>))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento :
          <select
            name="pagamento"
            id="pagamento"
            value={ pagamento }
            onChange={ this.handelChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag :
          <select
            name="categoria"
            id="categoria"
            value={ categoria }
            onChange={ this.handelChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handelSubmit }>Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({ map: PropTypes.func })).isRequired,
  setCurrencies: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrencie()),
  setExpenses: (value) => dispatch(getAddExpense(value)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
