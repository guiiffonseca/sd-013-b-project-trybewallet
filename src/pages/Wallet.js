import React from 'react';
import Formulario from '../Components/Formulario';
import Header from '../Components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
      loading: true,
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    this.setState({
      moedas: data,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <h1>Carregando</h1>;
    }
    const { moedas } = this.state;
    return (
      <div>
        <Header />
        <Formulario moedas={ moedas } />
      </div>
    );
  }
}

export default Wallet;
