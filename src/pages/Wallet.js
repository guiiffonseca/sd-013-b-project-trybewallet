import React from 'react';
import Formulario from '../Components/Formulario';
import Header from '../Components/Header';
import Table from '../Components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Formulario />
        <Table />
      </div>
    );
  }
}

export default Wallet;
