import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moedas from '../api';
import { ClickButtonDespesasThunk } from '../actions';

class FormWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedas: [],
      valor: 0,
      descricao: '',
      moeda: 'USD',
      metodoPagamento: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.StateChange = this.StateChange.bind(this);
    this.ClickButton = this.ClickButton.bind(this);
  }

  componentDidMount() {
    this.PegaMoedas();
  }

  ClickButton() {
    const { valor, tag, descricao, metodoPagamento, moeda } = this.state;
    const { ClickWallet, DespesasSoma } = this.props;
    const novoValor = Number(valor);
    DespesasSoma(novoValor);
    const Info = {
      valor,
      tag,
      moeda,
      descricao,
      metodo: metodoPagamento,
    };
    ClickWallet(Info);
  }

  StateChange(event) {
    const { name } = event.target;
    const { value } = event.target;

    this.setState(({
      [name]: value,
    }));
  }

  async PegaMoedas() {
    const valor = await Moedas();
    const moedas = Object.keys(valor);

    this.setState(({
      moedas,
    }));
  }

  render() {
    const { moedas } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" name="valor" id="valor" onChange={ this.StateChange } />
        </label>
        <label htmlFor="desc">
          Descrição
          <input type="text" id="desc" name="descricao" onChange={ this.StateChange } />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda" onChange={ this.StateChange }>
            {moedas.map((name) => {
              if (name !== 'USDT') {
                return (<option key={ name } value={ name }>{name}</option>);
              }
              return '';
            })}
          </select>
        </label>
        <label htmlFor="Mpagamento">
          Método de pagamento
          <select name="metodoPagamento" id="Mpagamento" onChange={ this.StateChange }>
            <option value="dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" onChange={ this.StateChange } id="tag">
            <option value="Alimentacao">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.ClickButton }>Adicionar despesa</button>
      </form>
    );
  }
}

function MapDispatchToProps(dispatch) {
  return {
    ClickWallet: (info) => dispatch(ClickButtonDespesasThunk(info)),
  };
}

FormWallet.propTypes = {
  ClickWallet: PropTypes.func.isRequired,
  DespesasSoma: PropTypes.func.isRequired,

};

export default connect(null, MapDispatchToProps)(FormWallet);
