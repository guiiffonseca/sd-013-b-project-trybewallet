import React from 'react';
import Header from '../Componente/Header';
import InputSelectMoed from '../Componente/InputSelectMoed';
import InputDespSelect from '../Componente/InputDespSelect';
import InputPagtSelect from '../Componente/InputPagtSelect';
import InputTextDesc from '../Componente/InputTextDesc';
import InputValor from '../Componente/InputValor';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: '',
      formPagto: '',
      despesa: '',
    };

    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { valor, descricao, moeda, formPagto, despesa } = this.state;
    return (
      <div>
        <Header />

        <form className="formValue">
          <InputValor value={ valor } onChange={ this.handlerChange } />
          <InputTextDesc value={ descricao } onChange={ this.handlerChange } />
          <InputSelectMoed value={ moeda } onChange={ this.handlerChange } />
          <InputPagtSelect value={ formPagto } onChange={ this.handlerChange } />
          <InputDespSelect value={ despesa } onChange={ this.handlerChange } />

        </form>
      </div>
    );
  }
}

export default Wallet;
