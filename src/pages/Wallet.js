import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: 'BRL',
      totalExpenses: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpenses, currency } = this.state;
    return (
      <section className="wallet-header">
        <header>
          <p data-testid="email-field">
            E-mail:
            { email }
          </p>
          <p data-testid="total-field">
            Despesa Total:
            { totalExpenses }
            <p data-testid="header-currency-field">
              { currency }
            </p>
          </p>
        </header>
        <Form />
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});
Wallet.propTypes = {
  email: string.isRequired,
};
export default connect(mapStateToProps, null)(Wallet);
