import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getInitial } = this.props;
    getInitial();
  }

  render() {
    const { initial } = this.props;
    console.log(initial);
    return (
      <form>
        <label htmlFor="valor">
          valor
          <input
            type="text"
            name="valor"
            id="valor"
          />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <textarea
            name="description"
            id="Descrição"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            <option value="usd">USD</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method">
            <option value="D">Dinheiro</option>
            <option value="CDC">Cartão de crédito</option>
            <option value="CDD">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="categoria" id="categoria">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

AddExpense.propTypes = {
  getInitial: PropTypes.func.isRequired,
  initial: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  initial: wallet.initial,
});

const mapDispatchToProps = (dispatch) => ({
  getInitial: (value) => dispatch(fetchApi(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
