import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import SelectForm from './SelectForm';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueExpense: '',
      descriptionExpense: '',
      currencyOption: 'BRL',
      payTypeOption: 'Dinheiro',
      tagOption: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { valueExpense,
      descriptionExpense, currencyOption,
      tagOption, payTypeOption } = this.state;

    const payType = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const typeExpense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currency } = this.props;
    return (
      <form>
        <InputForm
          labelText="Valor: "
          name="valueExpense"
          value={ valueExpense }
          handleChange={ this.handleChange }
        />
        <InputForm
          labelText="Descrição: "
          name="descriptionExpense"
          value={ descriptionExpense }
          handleChange={ this.handleChange }
        />
        <SelectForm
          options={ currency.currencies }
          name="currencyOption"
          value={ currencyOption }
          labelText="Moeda"
          id="currency"
        />
        <SelectForm
          options={ payType }
          name="payTypeOption"
          value={ payTypeOption }
          labelText="Método de pagamento"
          id="payType"
          handleChange={ this.handleChange }
        />
        <SelectForm
          options={ typeExpense }
          name="tagOption"
          value={ tagOption }
          labelText="Tag"
          id="typeExpense"
          handleChange={ this.handleChange }
        />
        <button type="button" onClick>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet,
});

export default connect(mapStateToProps, null)(ExpenseForm);

ExpenseForm.propTypes = {
  currency: PropTypes.objectOf().isRequired,
};
