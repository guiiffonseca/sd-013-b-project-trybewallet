import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cabeçalho from './Cabeçalho';
import TableBody from './TableBody';

// Link referencia Estrutura de tables https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody

// eslint-disable-next-line max-lines-per-function
function Table({ expenses }) {
  return (
    <table>
      <thead>
        <Cabeçalho />
      </thead>
      <tbody>
        <TableBody expenses={ expenses } />
      </tbody>
    </table>
  );
}

const mapStateToProps = ({ wallet: { expenses } }) => ({ expenses });

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
