import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TagSelect from './TagSelect';

class BuyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      form: {
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Comida',
      },
      editingState: false,
    };
    this.handleData = this.handleData.bind(this);
    this.actB = this.actB.bind(this);
    this.actE = this.actE.bind(this);
    this.updateStateEditing = this.updateStateEditing.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    let currencies = await data.json();
    currencies = Object.keys(currencies);
    currencies = currencies.filter((currency) => currency !== 'USDT');
    this.setState({
      currencies,
    });
  }

  handleData(event) {
    const { value, name } = event.target;
    this.setState((prevState) => ({
      currencies: prevState.currencies,
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  }

  actB(form) {
    const { act } = this.props;
    act(form);
    this.setState({
      form: {
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Comida',
      },
    });
  }

  async actE(form) {
    const { actE } = this.props;
    const oi = await actE(form);
    this.setState({
      form: {
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Comida',
      },
      editingState: false,
    });
  }

  updateStateEditing(obj) {
    const { value, description, currency, method, tag } = obj;
    this.setState({
      form: { value, description, currency, method, tag },
      editingState: true,
    });
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { currencies, form, editingState } = this.state;
    const { value, description, currency, method, tag } = form;
    const { actB, actE } = this;
    const hand = this.handleData;
    const d = 'description';
    const { editing } = this.props;
    const { isEditing, editingObject } = editing;
    console.log(editing);
    console.log(editingObject);
    console.log(isEditing);
    if (editing.isEditing && !editingState) { this.updateStateEditing(editingObject); }
    return (
      currencies.length > 1
        ? (
          <form action="GET">
            <label htmlFor="value">
              Valor
              <input id="value" name="value" value={ value } onChange={ hand } />
            </label>
            <label htmlFor={ d }>
              Descrição:
              <textarea name={ d } id={ d } value={ description } onChange={ hand } />
            </label>
            <label htmlFor="currency">
              Moeda:
              <select name="currency" id="currency" value={ currency } onChange={ hand }>
                {currencies.map((sCurrency) => (
                  <option value={ sCurrency } key={ sCurrency }>
                    {sCurrency}
                  </option>))}
              </select>
            </label>
            <label htmlFor="method">
              método de pagamento
              <select name="method" id="method" value={ method } onChange={ hand }>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cartão de crédito">Cartão de crédito</option>
                <option value="Cartão de débito">Cartão de débito</option>
              </select>
            </label>
            <TagSelect value={ tag } onChange={ hand } />

            <button type="button" onClick={ () => actB(form) }>Adicionar despesa</button>
            <button
              type="button"
              onClick={ () => actE(form) }
            >
              Editar despesa

            </button>
          </form>)
        : <p>Loading...</p>
    );
  }
}

const mapStateToProps = (state) => ({
  editing: state.wallet.editing,
});

BuyForm.propTypes = {
  act: PropTypes.func.isRequired,
  actE: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(BuyForm);
