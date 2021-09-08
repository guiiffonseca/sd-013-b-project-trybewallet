import React from 'react';

class WalletTable extends React.Component {
  render() {
    return (
      <table>
        Tabela de Gastos
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <tr>
          <td>Company</td>
          <td>Contact</td>
          <td>Country</td>
        </tr>
      </table>
    );
  }
}

export default WalletTable;
