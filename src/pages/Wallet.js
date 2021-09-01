import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      valor: 0,
      descDespesa: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };
  }

  render() {
    const { email } = this.props;
    const { valor, descDespesa, moeda, pagamento, tag } = this.state;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div>
            Total despesa: R$
            <span data-testid="total-field">0</span>
          </div>
          <div>
            Câmbio atual:
            <span data-testid="header-currency-field">{' BRL'}</span>
          </div>
        </header>

        <main>
          <form>
            <label htmlFor="input-valor">
              Valor:
              <input
                id="input-valor"
                type="number"
                name="valor"
                value={ valor }
              />
            </label>
            <br />
            <label htmlFor="input-descricao">
              Descrição:
              <input
                id="input-descricao"
                type="text"
                name="descDespesa"
                value={ descDespesa }
              />
            </label>
            <br />
            <label htmlFor="input-moeda">
              Moeda:
              <select
                id="input-moeda"
                value={ moeda }
              >
                <option>Escolha uma moeda</option>
              </select>
            </label>
            <br />
            <label htmlFor="input-pagamento">
              Método de pagamento:
              <select
                id="input-pagamento"
                value={ pagamento }
              >
                <option value="dinheiro">Dinheiro</option>
                <option value="credito">Cartão de crédito</option>
                <option value="debito">Cartão de débito</option>
              </select>
            </label>
            <br />
            <label htmlFor="input-tag">
              Tag:
              <select id="input-tag" value={ tag }>
                <option value="alimentacao">Alimentação</option>
                <option value="lazer">Lazer</option>
                <option value="trabalho">Trabalho</option>
                <option value="transporte">Transporte</option>
                <option value="saude">Saúde</option>
              </select>
            </label>
          </form>
        </main>
      </div>
    );
  }
}

// lendo os dados do estado global: state
const mapStateToProps = (state) => ({
  // essa propriedade email tem que ter o mesmo nome da props
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
