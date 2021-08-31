import React from 'react';
import { connect } from 'react-redux';
// import { userInformation as userInformationAction } from '../actions';
import { PropTypes } from 'prop-types';
import InputComponent from '../components/InputComponent';
import SelectOptionComponent from '../components/SelectOptionComponent';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.coinsFatch();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async coinsFatch() {
    const linkApi = 'https://economia.awesomeapi.com.br/json/all';
    const response = await (await fetch(linkApi)).json();
    const currencyLength = 3;
    const filterCoins = Object.keys(response)
      .filter((currency) => currency.length === currencyLength);
    this.setState({
      coins: filterCoins,
    });
  }

  render() {
    const { email } = this.props;
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagSelect = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    const { value, coins } = this.state;
    return (
      <>
        <Header email={ email } />
        <form action="">
          <InputComponent
            label="Valor"
            type="number"
            name="valor"
            value={ value }
            onChange={ this.handleChange }
          />
          <InputComponent
            label="Descrição"
            type="text"
            name="descricao"
            value={ value }
            onChange={ this.handleChange }
          />
          <SelectOptionComponent
            textCoin="Moeda"
            name="coin"
            value={ value }
            onChange={ this.handleChange }
            mapValue={ coins }
          />
          <SelectOptionComponent
            textCoin="Método de pagamento"
            name="paymentMethod"
            value={ value }
            mapValue={ paymentMethod }
            onChange={ this.handleChange }
          />
          <SelectOptionComponent
            textCoin="Tag"
            name="tagSelect"
            value={ value }
            mapValue={ tagSelect }
            onChange={ this.handleChange }
          />
        </form>
      </>
    );
  }
}

Wallet.propTypes = ({
  email: PropTypes.string,
}.isRequired);

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Wallet);
