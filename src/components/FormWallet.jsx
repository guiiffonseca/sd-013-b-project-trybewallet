import React from 'react';
import { connect } from 'react-redux';
import { actionFunctionThunk2 } from '../actions';

class FormWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0 ,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer' || 'Trabalho',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleContadorDespesas = this.handleContadorDespesas.bind(this);
  }

  handleContadorDespesas() {
    const { id } = this.state;
    this.setState({id: id + 1})
  }

  handleOnClick() {
    const { functionThunk } = this.props;
    this.handleContadorDespesas();
    functionThunk(this.state);
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { respostaAPI } = this.props;
    const { valor, descricao, moeda, method: metodoPag, tag } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input
              type="number"
              id="valor"
              name="value"
              value={ valor }
              onChange={ (e) => this.handleOnChange(e) }
            />
          </label>
          <br />
          <label htmlFor="descricao">
            Descrição :
            <input
              type="text"
              id="descricao"
              name="description"
              value={ descricao }
              onChange={ this.handleOnChange }
            />
          </label>
          <label htmlFor="selectMoeda">
            Moeda
            <select
              name="currency"
              id="selectMoeda"
              value={ moeda }
              onChange={ this.handleOnChange }
            >
              { respostaAPI ?
                  respostaAPI
                    .map((item)=> item[0] !== 'USDT' ? <option key={ item[0] }> { item[0] } </option> : '') : ''
              }
            </select>
          </label>
          <br />
          <label htmlFor="selectMetodo">
            Método de Pagamento
            <select
              name="method"
              id="selectMetodo"
              value={ metodoPag }
              onChange={ this.handleOnChange }
            >
              <option value="Dinheiro" selected>Dinheiro</option>
              <option value="Cartão de crédito" selected>Cartão de crédito</option>
              <option value="Cartão de débito" selected>Cartão de débito</option>
            </select>
          </label>
          <br />
          <label htmlFor="selectMetodo">
            Tag :
            <select
              name="tag"
              id="selectMetodo"
              value={ tag }
              onChange={ this.handleOnChange }
            >
              <option value="Alimentacao">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saude">Saúde</option>
            </select>
          </label>
          </form>
          <button
            type="button"
            onClick={ () => this.handleOnClick() }
          >
            Adicionar Despesa
          </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // dispatchAction: (stateComponent) => dispatch(ActionAddDespesa(stateComponent)),
  functionThunk: (payload) => dispatch(actionFunctionThunk2(payload)),
});

export default connect(null, mapDispatchToProps)(FormWallet);
