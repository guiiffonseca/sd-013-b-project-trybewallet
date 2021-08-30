import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelWithInput from './labelWithInput';
import LabelWithselect from './labelWithselect';

class AddExpense extends Component {
  constructor() {
    super();

    this.state = {
      valor: '',
      desc: '',
      moeda: '',
      pagamento: '',
      categoria: '',
    };

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { valor, desc, moeda, pagamento, categoria } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <LabelWithInput
          name="valor"
          valueLabel="Valor"
          value={ valor }
          type="text"
          id="valor-input"
          onChange={ this.handleChanges }
        />
        <LabelWithInput
          name="desc"
          valueLabel="Descrição"
          value={ desc }
          type="text"
          id="desc-input"
          onChange={ this.handleChanges }
        />
        <LabelWithselect
          id="moeda-input"
          valueLabel="Moeda"
          value={ moeda }
          name="moeda"
          options={ currencies }
          onChange={ this.handleChanges }
        />
        <LabelWithselect
          id="pagamento-input"
          valueLabel="Método de pagamento"
          value={ pagamento }
          name="pagamento"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChanges }
        />
        <LabelWithselect
          id="categoria-input"
          valueLabel="Tag"
          value={ categoria }
          name="categoria"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ this.handleChanges }
        />
      </form>
    );
  }
}

AddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddExpense;
