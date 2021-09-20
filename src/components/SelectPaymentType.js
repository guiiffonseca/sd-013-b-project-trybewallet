import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPayment } from '../actions';

const options = {
  cash: 'Dinheiro',
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
};

class SelectPaymentType extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.updatePayment = this.updatePayment.bind(this);
  }

  updatePayment(payment) {
    const { setPayment: setPaymentFunc } = this.props;

    setPaymentFunc(payment);
  }

  handleChange({ target }) {
    this.updatePayment(target.value);
  }

  render() {
    const { value } = this.props;

    return (
      <label htmlFor="input-payment-type">
        Método de pagamento:
        <select id="input-payment-type" onChange={ this.handleChange }>
          {Object.entries(options).map(([optionKey, optionValue]) => {
            if (value === optionValue) {
              return (
                <option name={ optionKey } id={ optionKey } selected>
                  {optionValue}
                </option>
              );
            }
            return (
              <option key={ optionKey } name={ optionKey } id={ optionKey }>
                {optionValue}
              </option>
            );
          })}
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
