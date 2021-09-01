import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletHeader from './WalletHeader';
import { fetchCoins, setExpenses } from '../actions';
import WalletForm from './WalletForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: {
        value: 0,
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
      moeda: 'BRL',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    const { sendCoin } = this.props;
    sendCoin();
  }

  handleChange({ target: { name, value } }) {
    const { wallet: { expenses } } = this.props;
    this.setState((prevState) => ({
      expense: {
        ...prevState.expense,
        [name]: value,
        id: expenses.length,
      },
    }));
  }

  handleButton() {
    const { sendExpenses } = this.props;
    const { expense } = this.state;
    sendExpenses(expense);
  }

  render() {
    const { user, wallet } = this.props;
    const { moeda } = this.state;
    return (
      <div>
        <WalletHeader total={ wallet.total } moeda={ moeda } user={ user } />
        <br />
        <WalletForm
          wallet={ wallet }
          onChange={ this.handleChange }
          onClick={ this.handleButton }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  sendCoin: () => dispatch(fetchCoins()),
  sendExpenses: (expense) => dispatch(setExpenses(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  sendCoin: PropTypes.func.isRequired,
  sendExpenses: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
    expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
    total: PropTypes.number,
  }),
};

Wallet.defaultProps = {
  wallet: {
    total: 0,
  },
};
