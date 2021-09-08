import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses as setExpansesAction } from '../actions/index';

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      expense: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   this.currencyFetch();
  // }

  async handleClick() {
    await this.currencyFetch();
    const { setExpenses } = this.props;
    const { expense: { exchangeRates } } = this.state;
    let { counter } = this.state;
    this.setState({
      Newexpense: {
        id: counter,
        value: document.querySelector('#value').value,
        description: document.querySelector('#description').value,
        currency: document.querySelector('#currency').value,
        method: document.querySelector('#payment-method').value,
        tag: document.querySelector('#tag').value,
        exchangeRates,
      },
    },
    () => {
      const { Newexpense } = this.state;
      setExpenses(Newexpense);
      this.setState({
        counter: counter += 1,
      });
    });
  }

  async currencyFetch() {
    const { expense } = this.state;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    // Fonte: https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
    const denied = ['USDT', 'DOGE'];
    Object.keys(data)
      .filter((key) => denied.includes(key))
      .forEach((key) => delete data[key]);
    //-------------------------------------------
    this.setState({
      expense: {
        exchangeRates: data,
      },
    });
    console.log(expense);
  }

  render() {
    return (
      <button type="submit" onClick={ this.handleClick }>
        Adicionar Despesa
      </button>
    );
  }
}

AddButton.propTypes = {
  setExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (payload) => dispatch(setExpansesAction(payload)),
});

export default connect(null, mapDispatchToProps)(AddButton);
