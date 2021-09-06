import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Select from '../components/Select';
import { categoriesObject, paymentMethodObject } from '../utils';
import { fetchCurrenciesThunk } from '../actions';

class FormSelects extends React.Component {
  componentDidMount() {
    const { retrieveCurrencies } = this.props;
    retrieveCurrencies();
  }

  render() {
    const { currencies, onChange } = this.props;
    return (
      <>
        <Select
          id="currency"
          name="currency"
          items={ currencies }
          label="Moeda"
          onChange={ onChange }
        />

        <Select
          id="method"
          name="method"
          items={ paymentMethodObject }
          label="Método de pagamento"
          onChange={ onChange }
        />

        <Select
          id="tag"
          name="tag"
          items={ categoriesObject }
          label="Tag"
          onChange={ onChange }
        />
      </>
    );
  }
}

FormSelects.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  retrieveCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  retrieveCurrencies: () => dispatch(fetchCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSelects);
