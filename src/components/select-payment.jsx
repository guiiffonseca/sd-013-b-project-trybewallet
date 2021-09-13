import React, { Component } from 'react';

class SelectPayment extends Component {
  render() {
    return (
      <label htmlFor="metodo-pgto">
        Método de pagamento:
        {' '}
        <select
          id="metodo-pgto"
          className="expensives-form-long-inputs"
          name="metodo-pgto"
        >
          <option value="">Selecione</option>
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao-debito">Cartão de débito</option>
          <option value="cartao-credito">Cartão de crédito</option>
        </select>
      </label>
    );
  }
}

SelectPayment.propTypes = ({
  // email: PropTypes.string,
}).isRequired;

export default SelectPayment;
