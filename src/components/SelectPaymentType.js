import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPayment } from '../actions';

class SelectPaymentType extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.updatePayment = this.updatePayment.bind(this);
  }

  componentDidMount() {
    this.updatePayment('Cartão de crédito');
  }

  updatePayment(payment) {
    const { setPayment: setPaymentFunc } = this.props;

    setPaymentFunc(payment);
  }

  handleChange({ target }) {
    this.updatePayment(target.value);
  }

  render() {
    return (
      <label htmlFor="input-payment-type">
        Método de pagamento:
        <select id="input-payment-type" onChange={ this.handleChange }>
          <option name="credit" id="credit">
            Cartão de crédito
          </option>
          <option name="cash" id="cash">
            Dinheiro
          </option>
          <option name="debit" id="debit">
            Cartão de débito
          </option>
        </select>
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPayment: (tag) => dispatch(setPayment(tag)),
});

SelectPaymentType.propTypes = {
  setPayment: PropTypes.string,
}.isRequired;

export default connect(null, mapDispatchToProps)(SelectPaymentType);
