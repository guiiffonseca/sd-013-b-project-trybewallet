import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeValor as removeValorEvent } from '../actions/index';
import TableHeader from './TableHeader';

class TableWallet extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, atualField) {
    const { target } = event;
    const { removeValor, setFieldState } = this.props;
    console.log(target);
    const expenses = {
      id: target.id,
    };
    removeValor({ expenses });
    setFieldState(atualField);
  }

  render() {
    const { expenses, moedaConvertida } = this.props;
    if (expenses === []) return <p>Loading...</p>;
    return (
      <table>
        <caption>
          <TableHeader />
          <tbody>
            {expenses.map((result) => {
              const {
                id,
                description,
                tag,
                method,
                value,
                currency,
                exchangeRates,
              } = result;
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{value}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>{value * Number(exchangeRates[currency].ask)}</td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      id={ id }
                      onClick={ (event) => this.handleClick(event, moedaConvertida[id]) }
                      data-testid="delete-btn"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </caption>
      </table>
    );
  }
}

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  moedaConvertida: PropTypes.number.isRequired,
  removeValor: PropTypes.func.isRequired,
  setFieldState: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => {
  const { expenses } = wallet;
  return {
    expenses,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeValor: (payload) => dispatch(removeValorEvent(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);
