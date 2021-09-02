import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import SelectMethod from '../components/SelectMethod';
import SelectTag from '../components/SelectTag';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: [],
    };

    this.attStateWithCurrencies = this.attStateWithCurrencies.bind(this);
    this.createCurrencieOptions = this.createCurrencieOptions.bind(this);
  }

  async componentDidMount() {
    const requestResponse = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesArr = await requestResponse.json();
    const Arr = Object.keys(currenciesArr);
    const filteredCurrencies = Arr.filter((coins) => coins !== 'USDT');

    this.attStateWithCurrencies(filteredCurrencies);
  }

  attStateWithCurrencies(response) {
    this.setState({
      coins: response,
    });
  }

  createCurrencieOptions() {
    const { coins } = this.state;
    return (
      coins.map((coin) => (
        <option
          key={ coin }
          value={ coin }
        >
          { coin }
        </option>
      ))
    );
  }

  render() {
    const { user } = this.props;
    return (
      <main>
        <div>
          <h1>TrybeWallet</h1>
          <h3>Seja bem vindo</h3>
          <h3 data-testid="email-field">{ user.email }</h3>
          <h3 data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </div>
        <div>
          <form>
            <Input
              htmlId="value-input"
              labelText="Valor"
              type="number"
            />
            <TextArea
              htmlId="description-textarea"
              labelText="Descrição"
            />
            <Select
              htmlId="currencie-select"
              createOptions={ this.createCurrencieOptions }
            />
            <SelectMethod
              htmlId="paymentMethod-select"
            />
            <SelectTag
              htmlId="expenseTag-select"
            />
          </form>
        </div>
      </main>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
}
);

export default connect(mapStateToProps)(Wallet);
