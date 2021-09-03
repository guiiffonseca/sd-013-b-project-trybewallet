import React from 'react';
import { connect } from 'react-redux';
import '../index.css';
import PropTypes from 'prop-types';

class TableExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { propArrayDespesas } = this.props;
    return (
      <div>
        <h3>Tabela de Desepesa</h3>
        <table>
          <tr>
            <th className="tabelaTH"> Descrição </th>
            <th className="tabelaTH"> Tag </th>
            <th className="tabelaTH"> Método de pagamento </th>
            <th className="tabelaTH"> Valor </th>
            <th className="tabelaTH"> Moeda </th>
            <th className="tabelaTH"> Câmbio utilizado </th>
            <th className="tabelaTH"> Valor convertido </th>
            <th className="tabelaTH"> Moeda de conversão </th>
            <th className="tabelaTH"> Editar/Excluir </th>
          </tr>
          {
            propArrayDespesas.map((item) => (
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
                <td className="tabelaTD">x</td>
              </tr>
            ))
          }
        </table>
      </div>
    );
  }
}

TableExpenses.propTypes = {
  propArrayDespesas: PropTypes.objectOf.isRequired,
};

const mapStateToProps = (state) => ({
  propArrayDespesas: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(TableExpenses);
