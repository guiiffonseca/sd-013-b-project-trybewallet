import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      despesaTotal: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { despesaTotal, cambio } = this.state;
    const { getEmail } = this.props;
    return (
      <>
        <header>
          <div>
            <span data-testid="email-field">{ getEmail }</span>
            <span data-testid="total-field">{ despesaTotal }</span>
            <span data-testid="header-currency-field">{ cambio }</span>
          </div>
        </header>
        <section>
          <Form />
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};
