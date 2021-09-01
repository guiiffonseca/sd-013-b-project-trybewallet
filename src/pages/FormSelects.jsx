import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Select from '../components/Select';
import { categoriesObject, paymentMethodObject } from '../utils';
import { fetchAwesomeAPI } from '../actions';

class FormSelects extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: '',
      paymentMethod: '',
      categories: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { retrieveCurrencies } = this.props;
    retrieveCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currency, paymentMethod, categories } = this.state;
    const { currencies } = this.props;
    console.log(this.props);
    return (
      <>
        <Select
          id="currency"
          name="currency"
          items={ currencies }
          label="Moeda"
          value={ currency }
          onChange={ this.handleChange }
        />

        <Select
          id="paymentMethod"
          name="paymentMethod"
          items={ paymentMethodObject }
          label="Método de pagamento"
          value={ paymentMethod }
          onChange={ this.handleChange }
        />

        <Select
          id="categories"
          name="categories"
          items={ categoriesObject }
          label="Tag"
          value={ categories }
          onChange={ this.handleChange }
        />
      </>
    );
  }
}

FormSelects.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  retrieveCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  retrieveCurrencies: () => dispatch(fetchAwesomeAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSelects);
