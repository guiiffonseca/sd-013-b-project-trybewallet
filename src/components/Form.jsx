import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense, expense, fetchApi, edit } from '../actions';
import Input from './Inputs';
import Select from './select';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    const { expenseToEdit: { value, description, currency, method, tag } } = props;

    this.state = {
      value,
      description,
      currency,
      method,
      tag,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  getExchange() {
    const { allCurrency } = this.props;
    const initials = Object.keys(allCurrency);

    return initials.reduce((acc, currency) => {
      acc[currency] = allCurrency[currency];
      return acc;
    }, {});
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { addExpense, fetchCurrency, expenses } = this.props;
    fetchCurrency();
    const exchangeRates = this.getExchange();
    const infos = { id: expenses.length, ...this.state, exchangeRates };
    addExpense(infos);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
    });
  }

  handleEditClick() {
    const {
      expenseToEdit: { id, exchangeRates },
      expenses,
      remove,
      editExpense } = this.props;
    const newExpenses = expenses.filter((item) => item.id !== id);
    const expensesWithEdit = [{ id, ...this.state, exchangeRates }, ...newExpenses];
    expensesWithEdit.sort((a, b) => a.id - b.id);
    remove(expensesWithEdit);
    editExpense();
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { allCurrency, edit: boolEdit } = this.props;
    const initials = Object.keys(allCurrency);
    const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const motivo = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <>
        <Input
          labelText="Valor"
          type="number"
          name="value"
          handleChange={ this.handleChange }
          value={ value }
        />
        <Input
          labelText="Descrição"
          type="text"
          name="description"
          handleChange={ this.handleChange }
          value={ description }
        />
        <Select
          text="Moeda"
          name="currency"
          item={ initials }
          handleChange={ this.handleChange }
          value={ currency }
        />
        <Select
          text="Método de pagamento"
          name="method"
          item={ pagamento }
          handleChange={ this.handleChange }
          value={ method }
        />
        <Select
          text="Tag"
          name="tag"
          item={ motivo }
          handleChange={ this.handleChange }
          value={ tag }
        />
        { !boolEdit ? <Button text="Adicionar despesa" handleClick={ this.handleClick } />
          : <Button text="Editar despesa" handleClick={ this.handleEditClick } /> }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  allCurrency: state.wallet.currencies[0],
  expenses: state.wallet.expenses,
  edit: state.editExpense.edit,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (infos) => dispatch(expense(infos)),
  fetchCurrency: () => dispatch(fetchApi()),
  remove: (expenses) => dispatch(deleteExpense(expenses)),
  editExpense: (item) => dispatch(edit(item)),
});

Form.defaultProps = {
  allCurrency: {},
  expenseToEdit: {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Cartão de crédito',
    tag: 'Alimentação',
  },
};

Form.propTypes = {
  allCurrency: PropTypes.objectOf(PropTypes.object),
  addExpense: PropTypes.func.isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenseToEdit: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    id: PropTypes.number,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }),
  edit: PropTypes.bool.isRequired,
  remove: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
