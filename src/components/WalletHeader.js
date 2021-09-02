import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { user, totalValue } = this.props;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <h3>Seja bem vindo</h3>
        <h3 data-testid="email-field">{ user }</h3>
        <h3 data-testid="total-field">{`R$ ${totalValue()} `}</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
    );
  }
}

WalletHeader.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  totalValue: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  user: user.email,
  expenses: wallet.expenses,
}
);

export default connect(mapStateToProps, null)(WalletHeader);
