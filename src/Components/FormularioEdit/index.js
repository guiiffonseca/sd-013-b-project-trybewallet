import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { saveEditedExpense } from '../../actions';

class FormularioEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
      loading: true,
      value: '',
      description: '',
      currency: 'USD',
      method: 'MONEY',
      tag: 'Alimentacao',
      id: '',
    };
    this.keyMap = this.keyMap.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveData = this.saveData.bind(this);
    this.salvarDespesa = this.salvarDespesa.bind(this);
  }

  componentDidMount() {
    this.saveData();
  }

  saveData() {
    const { data } = this.props;
    this.setState({
      moedas: data.exchangeRates,
      description: data.description,
      method: data.method,
      tag: data.tag,
      value: data.value,
      currency: data.currency,
      id: data.id,
      loading: false,
    });
  }

  inputRender() {
    const { value, description } = this.state;
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <label htmlFor="description">
          <br />
          Descrição
          <input
            type="text"
            id="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
      </>

    );
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  keyMap(chave) {
    const { currency } = this.state;
    if (chave === currency) {
      return (
        <option selected value={ chave } key={ chave }>{ chave }</option>
      );
    }
    return (
      <option value={ chave } key={ chave }>{ chave }</option>
    );
  }

  salvarDespesa() {
    const { saveEdit } = this.props;
    const { id, value, description, currency, method, tag, moedas } = this.state;
    const finalMessage = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: moedas,
    };
    saveEdit(id, finalMessage);
  }

  renderPayment() {
    const lista = [
      { value: 'Dinheiro', show: 'Dinheiro' },
      { value: 'Cartão de crédito', show: 'Cartão de crédito' },
      { value: 'Cartão de Débito', show: 'Cartão de Débito' },
    ];
    const { method } = this.state;

    return lista.map((option) => {
      if (option.value === method) {
        return (
          <option
            key={ option.value }
            value={ option.value }
            selected
          >
            { option.show }
          </option>
        );
      }
      return (
        <option
          key={ option.value }
          value={ option.value }
        >
          { option.show }
        </option>
      );
    });
  }

  renderTags() {
    const lista = [
      { value: 'Alimentacao', show: 'Alimentação' },
      { value: 'Lazer', show: 'Lazer' },
      { value: 'Trabalho', show: 'Trabalho' },
      { value: 'Transporte', show: 'Transporte' },
      { value: 'Saúde', show: 'Saúde' },
    ];

    const { tag } = this.state;

    return lista.map((option) => {
      if (option.value === tag) {
        return (
          <option
            value={ option.value }
            selected
          >
            { option.show }
          </option>
        );
      }

      return (
        <option
          key={ option.value }
          value={ option.value }
        >
          { option.show }
        </option>
      );
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) return <h1>Loading</h1>;
    const { moedas } = this.state;
    return (
      <form>
        { this.inputRender() }
        <label htmlFor="currency">
          <br />
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            { Object.keys(moedas).map(this.keyMap) }
          </select>
        </label>
        <label htmlFor="method">
          <br />
          Método de pagamento
          <select id="method" onChange={ this.handleChange }>
            {
              this.renderPayment()
            }
          </select>
        </label>
        <label htmlFor="tag">
          <br />
          Tag
          <select id="tag" onChange={ this.handleChange }>
            {
              this.renderTags()
            }
          </select>
        </label>
        <button type="button" onClick={ this.salvarDespesa }>Editar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  data: dispatch.wallet.selected,
});

const mapDispatchToProps = (dispatch) => ({
  saveEdit: (id, edited) => dispatch(saveEditedExpense(id, edited)),
});

FormularioEdit.propTypes = {
  saveEdit: propTypes.func.isRequired,
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormularioEdit);
