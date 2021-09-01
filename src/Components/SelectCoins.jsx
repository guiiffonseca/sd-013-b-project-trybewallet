import React from 'react';

class SelectCoins extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.getCoins();
  }

  // Pega da API;
  async getCoins() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    const coin = Object.keys(data);
    this.setState({ coins: coin });
  }

  render() {
    const { coins } = this.state;
    return (
      <label htmlFor="moeda">
        Moeda:
        <select aria-label="moeda" name="moeda" id="moeda">
          { coins.map((coin) => (
            <option key={ coin } value={ coin }>{ coin }</option>
          ))}
        </select>
      </label>
    );
  }
}

export default SelectCoins;
