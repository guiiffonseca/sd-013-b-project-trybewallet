import React from 'react';

class CoinApiFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((object) => {
        this.setState({
          coin: object,
        });
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { coin } = this.state;
    const options = Object.keys(coin);
    const filterOptions = options.filter(
      (option) => option !== 'USDT',
    ).map((option) => <option key={ option } value={ option }>{ option }</option>);

    return (
      <label htmlFor="coin">
        Moeda:
        <select id="coin" onChange={ this.handleChange }>
          { filterOptions }
        </select>
      </label>
    );
  }
}

export default CoinApiFilter;
