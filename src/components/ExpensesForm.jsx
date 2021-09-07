import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { getCurrenciesThunk } from '../actions/index';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: '',
      description: '',
      currency: 'BRL',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { expenses, description, currency } = this.state;
    const { currencies } = this.props;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
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
          value={ paymentMethods }
          onChange={ this.handleOnChange }
        />
        <Select
          label="Tag"
          name="tag"
          options={ category }
          value={ category }
          onChange={ this.handleOnChange }
        />
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
