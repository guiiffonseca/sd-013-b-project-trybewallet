import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrencies, createExpense } from '../../actions';
import FormHandler from '../FormHandler';

const PAYMENT_METHODS = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

const TAGS = [
  'Alimentação',
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde',
];

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.onChange = this.onChange.bind(this);
    this.renderHandler = this.renderHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    e.target.reportValidity();

    const { submit } = this.props;

    submit(this.state);
  }

  renderHandler({ label, name, value, type, required = true, options = [], ...rest }) {
    return (<FormHandler
      label={ label }
      name={ name }
      type={ type }
      value={ value }
      onChange={ this.onChange }
      options={ options }
      required={ required }
      { ...rest }
    />);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <form onSubmit={ this.handleSubmit }>
        { this.renderHandler({
          label: 'Valor:', type: 'number', name: 'value', value, min: 0, step: 0.01,
        })}
        { this.renderHandler({
          label: 'Descrição:', name: 'description', value: description,
        })}
        { this.renderHandler({
          label: 'Moeda:',
          type: 'select',
          name: 'currency',
          value: currency,
          options: currencies })}
        { this.renderHandler({
          label: 'Método de pagamento:',
          type: 'select',
          name: 'method',
          value: method,
          options: PAYMENT_METHODS })}
        { this.renderHandler({
          label: 'Tag:', type: 'select', name: 'tag', value: tag, options: TAGS })}
        <button type="submit">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
  submit: (data) => dispatch(createExpense(data)),
});

const mapStateToProps = ({ wallet: currencies }) => currencies;

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
