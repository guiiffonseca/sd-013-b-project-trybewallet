import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormsElements extends Component {
  render() {
    const { onChange, moedas } = this.props;
    return (
      <>
        <label htmlFor="valor">
          <input
            id="valor"
            type="text"
            name="value"
            onChange={ onChange }
          />
          Valor
        </label>
        <label htmlFor="description">
          <input
            id="description"
            type="text"
            name="description"
            onChange={ onChange }
          />
          Descrição
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="currency" onChange={ onChange }>
            {moedas
              .map((money) => (
                <option id="moeda" key={ `${money}` }>{money}</option>))}
          </select>
        </label>

      </>
    );
  }
}

FormsElements.propTypes = {
  onChange: PropTypes.func.isRequired,
  moedas: PropTypes.arrayOf(Array).isRequired,
};

export default FormsElements;
