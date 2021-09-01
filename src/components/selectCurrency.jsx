import React from 'react';
// import PropTypes from 'prop-types';

class SelectCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currenciesKeys: [],
    };
    // this.currencyFetch = this.currencyFetch.bind(this);
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

// Input.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
// };

export default SelectCurrency;
