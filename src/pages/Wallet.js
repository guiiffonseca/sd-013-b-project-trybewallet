import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{ `Email: ${email}` }</p>
          <p data-testid="total-field">Despesa: 0</p>
          <p data-testid="header-currency-field">Câmbio: BRL</p>
        </header>
        <Form />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
