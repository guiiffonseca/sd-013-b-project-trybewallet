import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelWithInput from './labelWithInput';
import LabelWithselect from './labelWithselect';

class AddExpense extends Component {
  render() {
    const { currencies,
      handleState, valor, desc, moeda, pagamento, categoria } = this.props;
    return (
      <form>
        <LabelWithInput
          name="value"
          valueLabel="Valor"
          value={ valor }
          type="text"
          id="valor-input"
          onChange={ handleState }
        />
        <LabelWithInput
          name="description"
          valueLabel="Descrição"
          value={ desc }
          type="text"
          id="desc-input"
          onChange={ handleState }
        />
        <LabelWithselect
          id="moeda-input"
          valueLabel="Moeda"
          value={ moeda }
          name="currency"
          options={ currencies }
          onChange={ handleState }
        />
        <LabelWithselect
          id="pagamento-input"
          valueLabel="Método de pagamento"
          value={ pagamento }
          name="method"
          options={ ['', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ handleState }
        />
        <LabelWithselect
          id="categoria-input"
          valueLabel="Tag"
          value={ categoria }
          name="tag"
          options={ ['', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ handleState }
        />
      </form>
    );
  }
}

AddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleState: PropTypes.func.isRequired,
  valor: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  moeda: PropTypes.string.isRequired,
  pagamento: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
};

export default AddExpense;
