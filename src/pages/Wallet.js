import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cambio: 'BRL',
      gastoTotal: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { cambio, gastoTotal } = this.state;
    return (
      <>
        <div>
          Trybe Wallet
        </div>
        <p data-testid="email-field">{ `Usuario: ${email}` }</p>
        <p data-testid="header-currency-field">{ `Cambio: ${cambio}` }</p>
        <p data-testid="total-field">{ `Gasto Total: ${gastoTotal}` }</p>
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
