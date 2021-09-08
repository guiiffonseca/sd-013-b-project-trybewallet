import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrenciesThunk, setExpensesThunk } from '../../actions';
import Input from '../Input';
import Select from '../Select';

const optionsPaymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const categoryOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class FormAddExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { setExpenses } = this.props;
    const { id } = this.state;
    const newId = id + 1;
    setExpenses({ ...this.state });
    this.setState({ id: newId });
  }

  renderButton() {
    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <Input
          labelText="Valor"
          type="text"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChanges }
        />
        <Input
          labelText="Descrição"
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChanges }
        />
        <Select
          labelText="Moeda"
          value={ currency }
          name="currency"
          id="currency"
          onChange={ this.handleChanges }
          options={ currencies }
        />
        <Select
          labelText="Método de pagamento"
          value={ method }
          name="method"
          id="method"
          onChange={ this.handleChanges }
          options={ optionsPaymentMethod }
        />
        <Select
          labelText="Tag"
          value={ tag }
          name="tag"
          id="tag"
          onChange={ this.handleChanges }
          options={ categoryOptions }
        />
        {this.renderButton()}
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrenciesThunk()),
  setExpenses: (payload) => dispatch(setExpensesThunk(payload)),
});

FormAddExpenses.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf,
};

FormAddExpenses.defaultProps = {
  currencies: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddExpenses);
