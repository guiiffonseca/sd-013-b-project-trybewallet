import React from 'react';

class SelectCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currenciesKeys: [],
    };
  }

  componentDidMount() {
    this.currencyFetch();
  }

  async currencyFetch() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currenciesKeysObj = Object.keys(data).filter(
      (currency) => currency !== 'USDT' && currency !== 'DOGE',
    );
    this.setState({
      currenciesKeys: currenciesKeysObj,
    });
  }

  render() {
    const { currenciesKeys } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency">
          { currenciesKeys.map(
            (currency) => <option key={ currency }>{ currency }</option>,
          ) }
        </select>
      </label>
    );
  }
}

export default SelectCurrency;
