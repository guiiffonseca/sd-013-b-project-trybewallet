import React from 'react';
import FormDespesas from '../components/FormDespesas';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: {},
    };
  }

  componentDidMount() {
    this.getMoedas();
  }

  getMoedas() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    fetch(url)
      .then((response) => response.json())
      .then((json) => this.setState({ moedas: json }));
  }

  render() {
    const { moedas } = this.state;
    // console.log(moedas);
    return (
      <main>
        <Header />
        <FormDespesas moedas={ moedas } />
      </main>
    );
  }
}

export default Wallet;
