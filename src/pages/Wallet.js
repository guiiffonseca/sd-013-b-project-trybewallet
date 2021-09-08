import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/input';
import SelectCurrency from '../components/selectCurrency';
import SelectPaymentMethod from '../components/selectPaymentMethod';
import SelectTag from '../components/selectTag';
import AddButton from '../components/addButton';

class Wallet extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.updadeValue = this.updateValue.bind(this);
  // }

  updateValue(expenses) {
    const updatedValue = expenses
      .reduce((accumulator, {
        value,
        currency,
        exchangeRates,
      }) => accumulator + value * parseFloat(exchangeRates[currency].ask), 0);
    return updatedValue;
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">{ email }</div>
          <div
            data-testid="total-field"
          >
            {expenses.length > 0 ? this.updateValue(expenses) : 0 }
          </div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <Input name="value" label="Valor" />
          <Input name="description" label="Descrição" />
          <SelectCurrency />
          <SelectPaymentMethod />
          <SelectTag />
        </form>
        <AddButton />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
