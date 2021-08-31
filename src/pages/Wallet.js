import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Formulario from '../components/formulario';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      moeda: 'BRL',
    };
  }

  render() {
    const { total, moeda } = this.state;
    const { email } = this.props;
    return (
      <>
        <header>
          <div>
            <span data-testid="email-field">{ email }</span>
            <span data-testid="total-field">{ total }</span>
            <span data-testid="header-currency-field">{ moeda }</span>
          </div>
        </header>
        <section>
          <Formulario />
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
