import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        <header>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">TOTAL: 0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <section>
          <form>
            <label htmlFor="valor">
              Valor
              <input type="text" name="valor" />
            </label>
            <label htmlFor="descricao">
              Descrição
              <input type="text" name="descricao" />
            </label>
            <label htmlFor="moeda">
              Moeda
              <select name="moeda" id="moeda"> select </select>
            </label>
          </form>
        </section>
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
