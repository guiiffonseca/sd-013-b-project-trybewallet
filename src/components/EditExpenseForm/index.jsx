import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { editExpense } from '../../actions';
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

class EditExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.expenseToEdit,
    };

    this.onChange = this.onChange.bind(this);
    this.renderHandler = this.renderHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          Editar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submit: (data) => dispatch(editExpense(data)),
});

const mapStateToProps = ({ wallet: { currencies, expenses, idToEdit } }) => ({
  expenseToEdit: expenses.find(({ id }) => id === idToEdit),
  currencies,
});

EditExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenseToEdit: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
  submit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpenseForm);
