import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    let total = 0;
    if (expenses.length !== 0) {
      expenses.forEach((element) => {
        total += Number(element.value * element.exchangeRates[element.currency].ask);
      });
    }
    return (
      <div>
        <header>
          <h4 data-testid="email-field">
            {`Email: ${email}`}
          </h4>
          <h4 data-testid="total-field">
            {`Despesa Total: ${total}`}
          </h4>
          <h4 data-testid="header-currency-field">
            Câmbio Utilizado: BRL
          </h4>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);

// Com a Ajuda do colega de turma Diego Demonttier, consegui realizar o Requisito 8 :D
