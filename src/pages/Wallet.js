import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css';
import Header from '../Componente/Header';
import Table from '../Componente/Table';
import InputSelectMoed from '../Componente/InputSelectMoed';
import InputDespSelect from '../Componente/InputDespSelect';
import InputPagtSelect from '../Componente/InputPagtSelect';
import InputTextDesc from '../Componente/InputTextDesc';
import InputValor from '../Componente/InputValor';
import { getDespesasThunk } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 10,
      description: 'Dez Dólares',
      method: 'Cartão de crédito',
      currency: 'USD',
      tag: 'Lazer',
      exchangeRates: {},
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.addDespesas = this.addDespesas.bind(this);
  }

  handlerChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addDespesas() {
    const { getDespesasThunks } = this.props;
    getDespesasThunks(this.state);
    const { id } = this.state;
    this.setState({ id: id + 1 });
  }

  render() {
    const { value, description, method, currency, tag } = this.state;
    return (
      <div>
        <Header />

        <form className="formValue">
          <InputValor value={ value } onChange={ this.handlerChange } />
          <InputTextDesc value={ description } onChange={ this.handlerChange } />
          <InputSelectMoed value={ currency } onChange={ this.handlerChange } />
          <InputPagtSelect value={ method } onChange={ this.handlerChange } />
          <InputDespSelect value={ tag } onChange={ this.handlerChange } />

          <button
            className="buttonAdd"
            type="button"
            onClick={ this.addDespesas }
          >
            Adicionar despesa
          </button>

        </form>
        <Table />

      </div>
    );
  }
}

Wallet.propTypes = {
  getDespesasThunks: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getDespesasThunks: (payload) => dispatch(getDespesasThunk(payload)),
});

export default connect(null, mapDispatchToProps)(Wallet);
