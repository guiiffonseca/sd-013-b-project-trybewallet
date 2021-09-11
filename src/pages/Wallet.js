import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from '../components/HeaderWallet';
import FormWallet from '../components/FormWallet';
import { requestCurrenciesApi, requestApi } from '../actions/index';
import '../styles/wallet.css';
import TableExpense from '../components/TableExpense';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.holdChange = this.holdChange.bind(this);
    this.updateId = this.updateId.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    const { saveCurrencies } = this.props;
    saveCurrencies();
  }

  holdChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  async updateId() {
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  async addExpense() {
    const { saveExpense } = this.props;
    await this.updateId();
    saveExpense(this.state);
  }

  renderCurrencies(arrayOfCurrencies) {
    const filteredCurrencies = arrayOfCurrencies
      .filter((currency) => currency !== 'USDT');
    return filteredCurrencies.map((currency, index) => (
      <option key={ `currency${index}` } value={ currency }>{ currency }</option>
    ));
  }

  render() {
    const { currencies } = this.props;
    const { email } = this.props;
    return (
      <main>
        <HeaderWallet email={ email } />
        <FormWallet
          currencies={ currencies }
          renderCurrencies={ this.renderCurrencies }
          holdChange={ this.holdChange }
          addExpense={ this.addExpense }
          formInfo={ this.state }
        />
        <TableExpense />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  saveCurrencies: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrencies: () => dispatch(requestCurrenciesApi()),
  saveExpense: (state) => dispatch(requestApi(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
