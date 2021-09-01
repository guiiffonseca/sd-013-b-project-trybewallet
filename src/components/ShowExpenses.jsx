import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddExpense from './AddExpense';

class ShowExpenses extends React.Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        <div>
          <p>Descrição</p>
          <p>Tag</p>
          <p>Método de pagamento</p>
          <p>Valor</p>
          <p>Moeda</p>
          <p>Câmbio utilizado</p>
          <p>Valor convertido</p>
          <p>Moeda de conversão</p>
          <p>Editar/Excluir</p>

        </div>
        <div>
          { expenses.map((item, index) => <AddExpense key={ index } expenses={ item } />)}
        </div>
      </div>
    );
  }
}

ShowExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(ShowExpenses);
