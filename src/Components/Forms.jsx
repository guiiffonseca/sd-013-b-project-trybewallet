import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMoedas, fecthDespesas } from '../actions';
import Selects from './Selects';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
      value: 0,
      description: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { apiFetchMoedasProps } = this.props;
    apiFetchMoedasProps();
  }

  handleClick() {
    const { fecthDespesasProps } = this.props;
    fecthDespesasProps({ ...this.state });
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, tag, method } = this.state;
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            onChange={ this.handleChange }
            type="number"
            id="valor"
            name="value"
            value={ value }
          />
        </label>
        <label htmlFor="despesa">
          Descrição
          <input
            onChange={ this.handleChange }
            type="text"
            id="despesa"
            name="description"
            value={ description }
          />
        </label>
        <Selects
          handleChange={ this.handleChange }
          currency={ currency }
          tag={ tag }
          method={ method }
        />
        <button type="button" onClick={ this.handleClick }>Adicionar despesas</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  apiFetchMoedasProps: () => dispatch(fetchMoedas()),
  fecthDespesasProps: (expenses) => dispatch(fecthDespesas(expenses)),
});

Forms.propTypes = {
  apiFetchMoedasProps: PropTypes.func,
  fecthDespesasProps: PropTypes.func.isRequired,
}.isRequired;

export default connect(null, mapDispatchToProps)(Forms);
