import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionFunctionThunk2 } from '../actions';
import ImputValor from './ImputValor';
import ImputDescription from './ImputDescription';
import ImputTag from './ImputTag';

class FormWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Trabalho',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleContadorDespesas = this.handleContadorDespesas.bind(this);
  }

  handleContadorDespesas() {
    const { id } = this.state;
    this.setState({ id: id + 1 });
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
    const { valor, description, moeda, method: metodoPag, tag } = this.state;
    return (
      <div>
        <form>
          <ImputValor value={ valor } func={ this.handleOnChange } />
          <ImputDescription description={ description } func={ this.handleOnChange } />
          <label htmlFor="selectMoeda">
            Moeda
            <select
              name="currency"
              id="selectMoeda"
              value={ moeda }
              onChange={ this.handleOnChange }
            >
              {
                respostaAPI ? respostaAPI
                  .map((i) => (
                    i[0] !== 'USDT' ? (
                      <option key={ i[0] }>
                        { i[0] }
                      </option>) : '')) : ''
              }
            </select>
          </label>
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
          <ImputTag tag={ tag } func={ this.handleOnChange } />
        </form>
        <button type="button" onClick={ () => this.handleOnClick() }>
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

FormWallet.propTypes = {
  respostaAPI: PropTypes.arrayOf(PropTypes.object).isRequired,
  functionThunk: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  functionThunk: (payload) => dispatch(actionFunctionThunk2(payload)),
});

export default connect(null, mapDispatchToProps)(FormWallet);
