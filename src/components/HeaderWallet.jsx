import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class HeaderWallet extends Component {
  constructor() {
    super();

    this.sumArray = this.sumArray.bind(this);

    this.state = {
      sum: 0,
    };
  }

  componentDidMount() {
    const { expenses, dispatch } = this.props;
    if (expenses.length > 0) {
      this.sumArray();
    }
    dispatch(fetchCurrencies());
  }

  sumArray() {
    const { expenses } = this.props;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const result = expenses.reduce(reducer);

    this.setState({
      sum: result,
    });
  }

  render() {
    const { email, currentCurrency } = this.props;
    const { sum } = this.state;
    return (
      <div>
        <div>TrybeWallet</div>
        <div>
          <span data-testid="email-field">
            Email Logado:
            {` ${email}`}
          </span>
        </div>
        <div>
          <span data-testid="total-field">
            Despesa total:
            {` ${sum}`}
          </span>
        </div>
        <div>
          <span data-testid="header-currency-field">
            Moeda atual:
            {` ${currentCurrency}`}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
  currentCurrency: wallet.currentCurrency,
});

HeaderWallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.number),
  dispatch: PropTypes.func,
  fetchCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, null)(HeaderWallet);
