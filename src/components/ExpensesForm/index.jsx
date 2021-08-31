import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrencies } from '../../actions';
import FormHandler from '../FormHandler';

const PAYMENT_METHODS = {
  money: 'Dinheiro',
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
};

const TAGS = {
  food: 'Alimentação',
  fun: 'Lazer',
  job: 'Trabalho',
  transport: 'Transporte',
  health: 'Saúde',
};

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: '0',
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };

    this.onChange = this.onChange.bind(this);
    this.renderHandler = this.renderHandler.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;

    fetchCurrencies();
  }

  onChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  renderHandler({ label, name, value, type, options = {}, ...rest }) {
    return (<FormHandler
      label={ label }
      name={ name }
      type={ type }
      value={ value }
      onChange={ this.onChange }
      options={ options }
      { ...rest }
    />);
  }

  render() {
    const { price, description, currency, payment, tag } = this.state;
    const { currencies } = this.props;

    return (
      <form>
        { this.renderHandler({
          label: 'Valor', type: 'number', name: 'price', value: price,
        })}
        { this.renderHandler({
          label: 'Descrição:', name: 'description', value: description,
        })}
        <FormHandler
          label="Moeda:"
          type="select"
          name="currency"
          options={ currencies.reduce((acc, { code }) => ({
            ...acc,
            [code]: code,
          }), {}) }
          value={ currency }
          onChange={ this.onChange }
        />
        <FormHandler
          label="Método de pagamento:"
          type="select"
          name="payment"
          role="combobox"
          value={ payment }
          onChange={ this.onChange }
          options={ PAYMENT_METHODS }
        />
        <FormHandler
          label="Tag:"
          type="select"
          name="tag"
          value={ tag }
          onChange={ this.onChange }
          options={ TAGS }
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
});

const mapStateToProps = ({ wallet: currencies }) => currencies;

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
