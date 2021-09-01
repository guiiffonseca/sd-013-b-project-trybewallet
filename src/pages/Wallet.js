import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/input';
import SelectCurrency from '../components/selectCurrency';
import SelectPaymentMethod from '../components/selectPaymentMethod';
import SelectTag from '../components/selectTag';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <Input name="value" label="Valor" />
          <Input name="description" label="Descrição" />
          <SelectCurrency />
          <SelectPaymentMethod />
          <SelectTag />
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
