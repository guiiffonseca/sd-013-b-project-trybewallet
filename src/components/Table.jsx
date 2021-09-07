import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tr from './Tr';

class Table extends React.Component {
  render() {
    const { wallet: { expenses } } = this.props;
    console.log(expenses);
    const tabelaDespesas = expenses.map((element, i) => {
      const {
        descricao, pagamento, moeda,
        tag, valor } = element;
      console.log(element);
      return (
        <tr key={ i }>
          <td>{ descricao }</td>
          <td>{ tag }</td>
          <td>{ pagamento }</td>
          <td>{ valor }</td>
          <td>{ moeda }</td>
        </tr>
      );
    });
    if (expenses.length > 0) {
      return (
        <table>
          ca
          <colgroup span="4" />
          <Tr />
          {tabelaDespesas}
        </table>
      );
    }
    return (
      <table>
        <colgroup span="4" />
        <Tr />
      </table>
    );
  }
}

Table.propTypes = {
  wallet: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.reducerWallet.wallet,
});

export default connect(mapStateToProps, null)(Table);
