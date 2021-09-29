import React from 'react';

class PurchaseTable extends React.Component {
  render() {
    return (
      <div
        id="purchase-table"
      >
        <table>
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
        </table>
      </div>
    );
  }
}

export default PurchaseTable;
