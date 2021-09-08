import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { getCurrenciesThunk, addExpensesThunk } from '../actions/index';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: '',
      id: 0,
      description: '',
      currency: 'BRL',
      methods: paymentMethods[0],
      tags: category[0],
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleOnClick() {
    const { addExpenses } = this.props;
    addExpenses(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  render() {
    const { expenses, description, currency, methods, tags } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input
          type="text"
          label="Valor"
          name="expenses"
          id={ expenses }
          value={ expenses }
          onChange={ this.handleOnChange }
        />
        <Input
          type="text"
          label="Descrição"
          name="description"
          id={ description }
          value={ description }
          onChange={ this.handleOnChange }
        />
        <Select
          label="Moeda"
          name="currency"
          options={ currencies }
          value={ currency }
          onChange={ this.handleOnChange }
        />
        <Select
          label="Método de Pagamento"
          name="paymentMethod"
          options={ paymentMethods }
          value={ methods }
          onChange={ this.handleOnChange }
        />
        <Select
          label="Tag"
          name="tag"
          options={ category }
          value={ tags }
          onChange={ this.handleOnChange }
        />
        <button type="button" onClick={ this.handleOnClick }>Adicionar despesa</button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  addExpenses: (state) => dispatch(addExpensesThunk(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
