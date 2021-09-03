import React from 'react';
import { connect } from 'react-redux';
import '../index.css';
import PropTypes from 'prop-types';
import TableExpenses2 from './TableExpenses2';
import { removeList } from '../actions';

class TableExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.HandleOnClick = this.HandleOnClick.bind(this);
  }

  HandleOnClick(id) {
    const { remove } = this.props;
    remove(id);
  }

  render() {
    const { propArrayDespesas } = this.props;
    return (
      <div>
        <h3>Tabela de Desepesa</h3>
        <table>
          <thead>
            <TableExpenses2 />
          </thead>
          { propArrayDespesas.map((item) => (
            <tr key={ item.id }>
              <td className="tabelaTD">{ item.description }</td>
              <td className="tabelaTD">{ item.tag }</td>
              <td className="tabelaTD">{ item.method }</td>
              <td className="tabelaTD">{ item.value }</td>
              <td className="tabelaTD">
                {
                  item.exchangeRates[item.currency]
                    .name === /Dólar Americano/i ? 'Dólar Comercial'
                    : item.exchangeRates[item.currency].name.split('/', 1)
                }
              </td>
              <td className="tabelaTD">
                {
                  Number(item.exchangeRates[item.currency].ask).toFixed(2)
                }
              </td>
              <td className="tabelaTD">
                {
                  Number(item.exchangeRates[item.currency].ask * item.value).toFixed(2)
                }
              </td>
              <td className="tabelaTD"> Real </td>
              <td className="tabelaTD">
                <button
                  type="button"
                  onClick={ () => this.HandleOnClick(item.id) }
                  data-testid="delete-btn"
                >
                  X
                </button>
              </td>
            </tr>
          )) }
        </table>
      </div>
    );
  }
}

TableExpenses.propTypes = {
  propArrayDespesas: PropTypes.objectOf.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  propArrayDespesas: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (payload) => dispatch(removeList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
