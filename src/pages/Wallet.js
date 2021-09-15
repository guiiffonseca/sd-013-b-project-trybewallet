import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForms from '../components/ExpensesForm';
import { fetchMoedas } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchMoedasAction } = this.props;
    fetchMoedasAction();
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">
            0
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        <ExpenseForms />
      </>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedasAction: () => dispatch(fetchMoedas()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchMoedasAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
