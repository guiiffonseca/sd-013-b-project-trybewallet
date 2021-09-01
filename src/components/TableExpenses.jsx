import React from 'react';
import { connect } from 'react-redux';
import '../index.css'

class TableExpenses extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  render() {
    const { propArrayDespesas } = this.props;
    const description = propArrayDespesas.forEach(despesa => despesa.description);
    return(
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
          <tr>
            <td className="tabelaTD">Ae</td>
            <td className="tabelaTD">Ae</td>
            <td className="tabelaTD">Ae</td>
            <td className="tabelaTD">Ae</td>
            <td className="tabelaTD">Ae</td>
            <td className="tabelaTD">Ae</td>
            <td className="tabelaTD">Ae</td>
            <td className="tabelaTD">Ae</td>
            <td className="tabelaTD">Ae</td>
          </tr>
          <tr>
            <td className="tabelaTD">Cm</td>
            <td className="tabelaTD">Cm</td>
            <td className="tabelaTD">Cm</td>
            <td className="tabelaTD">Cm</td>
            <td className="tabelaTD">Cm</td>
            <td className="tabelaTD">Cm</td>
            <td className="tabelaTD">Cm</td>
            <td className="tabelaTD">Cm</td>
            <td className="tabelaTD">Cm</td>
          </tr>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  propArrayDespesas: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(TableExpenses);
