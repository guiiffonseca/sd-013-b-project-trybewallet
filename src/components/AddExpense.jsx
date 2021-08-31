import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import { fetchApi } from '../actions';
import TextArea from './TextArea';
import Coins from './Coins';

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
    return (
      <form>
        <Input
          type="text"
          name="valor"
          id="valor"
          label="valor"
        />
        <TextArea name="description" id="Descrição" label="Descrição" />
        <Coins />
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
};

const mapDispatchToProps = (dispatch) => ({
  getInitial: (value) => dispatch(fetchApi(value)),
});

export default connect(null, mapDispatchToProps)(AddExpense);
