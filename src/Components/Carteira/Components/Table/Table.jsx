import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cabeçalho from './Cabeçalho';
import TableBody from './TableBody';
import { setRemoveExpensive } from '../../../../actions';

// Link referencia Estrutura de tables https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody

function Table({ expenses, removeItem }) {
  function hadlerClick({ target }) {
    const { id } = target.parentElement.parentElement;
    const newExpenses = expenses.filter((expense) => parseInt(id, 10) !== expense.id);
    removeItem(newExpenses);
  }

  return (
    <table>
      <thead>
        <Cabeçalho />
      </thead>
      <tbody>
        <TableBody expenses={ expenses } hadlerClick={ hadlerClick } />
      </tbody>
    </table>
  );
}

const mapStateToProps = ({ wallet: { expenses } }) => ({ expenses });
const mapDispatchToProps = (dispatch) => ({
  removeItem: (payload) => dispatch(setRemoveExpensive(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired,
};
