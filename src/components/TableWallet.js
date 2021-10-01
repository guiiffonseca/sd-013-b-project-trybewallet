import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';

class TableWallet extends React.Component {
  render() {
    const { expenses, atualField } = this.props;
    if (expenses === []) return <p>Loading...</p>;
    console.log(expenses);
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
                  <td role="cell">{atualField[id]}</td>
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
