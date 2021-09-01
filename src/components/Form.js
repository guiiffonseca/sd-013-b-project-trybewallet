import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMoedas as fetchMoedasAction } from '../actions';

class Form extends React.Component {
  async componentDidMount() {
    const { fetchMoedas } = this.props;
    await fetchMoedas();
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input name="value" id="value" type="text" />
          </label>
          <label htmlFor="description">
            Descrição
            <input name="text" id="description" type="text" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              {(currencies).map((moeda) => (
                <option key="moeda">{moeda}</option>
              ))}
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento
            <select id="paymentMethod" name="paymentMethod">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: () => dispatch(fetchMoedasAction()),
});

Form.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchMoedas: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
