import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setExpensesThunk, thunkCurrencies } from '../actions/index';
import Value from './FormComponents/Value';
import Description from './FormComponents/Description';
import Currency from './FormComponents/Currency';
import Method from './FormComponents/Method';
import Tag from './FormComponents/Tag';
import Button from './FormComponents/Button';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick() {
    const { getExpenses } = this.props;

    getExpenses(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  render() {
    const { currencies, description, currency, method, tag } = this.props;
    const { value } = this.state;
    console.log(Object.keys(currencies));
    return (
      <div>
        <form>

          <Value value={ value } handleChange={ this.handleChange } />

          <Description description={ description } handleChange={ this.handleChange } />

          <Currency currencies={ currencies } currency={ currency } handleChange={ this.handleChange } />

          <Method mothod={ method } handleChange={ this.handleChange } />

          <Tag tag={ tag } handleChange={ this.handleChange } />

        </form>

        <Button handleClick={ this.handleClick } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(thunkCurrencies()),
  getExpenses: (data) => dispatch(setExpensesThunk(data)),
});

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
