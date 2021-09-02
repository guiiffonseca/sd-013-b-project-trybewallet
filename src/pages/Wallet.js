import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const despesa = expenses.reduce((acc, curr) => acc + Number(curr.valor), 0);
    return (
      <>
        <header>
          <p data-testid="email-field">{ `Email: ${email}` }</p>
          <p data-testid="total-field">{ `Despesa: ${despesa}` }</p>
          <p data-testid="header-currency-field">Câmbio: BRL</p>
        </header>
        <Form />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
