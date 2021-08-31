import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Inputs';
import Select from './select';
import Button from './Button';
import { expense } from '../actions';

class HeaderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'USD',
      payment: 'Cartão de crédito',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { addExpense } = this.props;
    const test = this.state;
    addExpense(test);
  }

  displayForm() {
    const { currency, payment, tag } = this.state;
    const { allCurrency } = this.props;
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
        />
        <Input
          labelText="Descrição"
          type="text"
          name="description"
          handleChange={ this.handleChange }
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
          name="payment"
          item={ pagamento }
          handleChange={ this.handleChange }
          value={ payment }
        />
        <Select
          text="Tag"
          name="tag"
          item={ motivo }
          handleChange={ this.handleChange }
          value={ tag }
        />
        <Button text="Adicionar despesa" handleClick={ this.handleClick } />
      </>
    );
  }

  render() {
    const { loading } = this.props;
    return (
      <form>
        { !loading && this.displayForm() }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  allCurrency: state.wallet.currencies[0],
  loading: state.loading.isFatching,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (infos) => dispatch(expense(infos)),
});

HeaderForm.defaultProps = {
  allCurrency: {},
};

HeaderForm.propTypes = {
  allCurrency: PropTypes.objectOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForm);
