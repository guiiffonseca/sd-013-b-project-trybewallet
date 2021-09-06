import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import trybe from '../images/trybe.png';
import '../images/images.css';
import fetchAPI from '../api/fetchData';

class Wallet extends React.Component {
  constructor() {
    super();
    this.calculateExpenses = this.calculateExpenses.bind(this);
    this.state = {
      isCalculating: true,
      data: {},
    };
  }

  componentDidMount() {
    let { data } = this.state;
    data = fetchAPI();
    console.log(data);
  }

  calculateExpenses() {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce((acc, cv) => acc + cv);
    this.setState({
      isCalculating: false,
    });
    return totalExpenses;
  }

  render() {
    const { isCalculating } = this.state;
    const { email } = this.props;
    return (
      <header className="flexbox-container">
        <img className="main-logo" src={ trybe } alt="Trybe logo" />
        <div data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          { isCalculating
            ? 0
            : this.calculateExpenses }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number),
};

Wallet.defaultProps = {
  expenses: [0],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
