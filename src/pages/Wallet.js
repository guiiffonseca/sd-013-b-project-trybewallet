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
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.props;
    const coins = ['Moeda'];
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagSelect = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    const { value } = this.state;
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
