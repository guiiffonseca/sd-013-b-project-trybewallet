import React from 'react';

class TableExpenses2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
    );
  }
}

export default TableExpenses2;
