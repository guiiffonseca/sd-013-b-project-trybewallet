import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    let total = 0;
    const titulos = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <tr>{ titulos.map((header) => (<th key={ header }>{header}</th>)) }</tr>
        {expenses
          .map(({ description, tag, method, value, currency, exchangeRates, id }) => {
            const moeda = exchangeRates[currency];
            const fixo = parseFloat(moeda.ask).toFixed(2);
            total = (parseFloat(value) * parseFloat(moeda.ask)).toFixed(2);
              return (<tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ currency }</td>
                <td>{ moeda.name }</td>
                <td>{ `${fixo}` }</td>
                <td>{ `${total}` }</td>
                <td>Real</td>
              </tr>)
            })}
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// // Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir

// class Table extends Component {
//   headerTable() {
//     const headers = [
//       'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
//       'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
//     return headers.map((header) => (<th key={ header }>{header}</th>));
//   }

//   infoTable() {
//     const { expenses } = this.props;
//     return expenses
//       .map(({ description, tag, method, value, currency, exchangeRates, id }) => {
//         const fixValue = Number(exchangeRates[currency].ask).toFixed(2);
//         const total = (Number(value) * Number(exchangeRates[currency].ask)).toFixed(2);
//         return (
//           <tr key={ id }>
//             <td>{ description }</td>
//             <td>{ tag }</td>
//             <td>{ method }</td>
//             <td>{ value }</td>
//             <td>{ currency }</td>
//             <td>{ exchangeRates[currency].name }</td>
//             <td>{ `${fixValue}` }</td>
//             <td>{ `${total}` }</td>
//             <td>Real</td>
//           </tr>
//         );
//       });
//   }

//   render() {
//     return (
//       <table>
//         <tr>{ this.headerTable() }</tr>
//         {this.infoTable()}
//       </table>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   expenses: state.wallet.expenses,
// });

// Table.propTypes = {
//   expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default connect(mapStateToProps)(Table);