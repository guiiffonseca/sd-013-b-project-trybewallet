import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { fetchCurrencies as fetchCurrenciesAction } from '../actions/index';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, payment, tag } = this.state;
    return (
      <div>
        <form>
          <Input
            onChange={ this.handleChange }
            description={ description }
            value={ value }
          />
          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              { currencies.map((currencyType, index) => (
                <option
                  key={ index }
                >
                  { currencyType }
                </option>))}
            </select>
          </label>
          <Select
            onChange={ this.handleChange }
            payment={ payment }
            tag={ tag }
          />
          <button
            type="button"
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
