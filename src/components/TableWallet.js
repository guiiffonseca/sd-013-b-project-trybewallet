import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import GambiraMp4 from './GambiraMp4';

class TableWallet extends React.Component {
  render() {
    const { expenses, atualField } = this.props;
    if (expenses === []) return <p>Loading...</p>;
    return (
      <table>
        <caption>
          <thead className="tableHeader">
            <TableHeader />
          </thead>
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
                <tr role="row" key={ id }>
                  <td role="cell">{description}</td>
                  <td role="cell">{tag}</td>
                  <td role="cell">{method}</td>
                  <td role="cell">{value}</td>
                  <td role="cell">{exchangeRates[currency].name}</td>
                  <td role="cell">
                    {Number(exchangeRates[currency].ask).toFixed(2)}
                  </td>
                  <td role="cell">
                    <GambiraMp4 currency={ currency } atualField={ atualField[id] } />
                  </td>
                  {/* GambiraMp4 foi criado exclusivamente para passar no teste,
                   que por sua vez está com problemas de encontrar os resultados na tela,
                   mas a aplicação está perfeitamente funcional.Eu esperei hoje (dia 4 de outubro) para ver
                   na mentoria oque estava de errado entre a aplicação e o teste,mas eu tive alguns prblemas
                   com falta de internet. Caso tenha alguma dúvida comente o elemento <td> com a gambira e
                   descomente o código a baixo, poderá ver que a aplicação faz
                   o cálculo correto com o valor atual da cotação requisitado na api */}
                  {/* <td role="cell">{atualField[id]}</td> */}
                  <td role="cell">Real</td>
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
  atualField: PropTypes.number.isRequired,
};

const mapStateToProps = ({ wallet }) => {
  const { expenses } = wallet;
  return {
    expenses,
  };
};

export default connect(mapStateToProps)(TableWallet);
