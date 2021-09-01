import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header, ExpensesForm, EditExpenseForm, ExpensesTable } from '../components';

class Wallet extends React.Component {
  render() {
    const { editor } = this.props;

    return (
      <>
        <Header />
        <main>
          {
            editor
              ? <EditExpenseForm />
              : <ExpensesForm />
          }
          <ExpensesTable />
        </main>
      </>
    );
  }
}

const mapStateToProps = ({ wallet: { editor } }) => ({
  editor,
});

Wallet.propTypes = {
  editor: PropTypes.bool,
};

Wallet.defaultProps = {
  editor: false,
};

export default connect(mapStateToProps, null)(Wallet);
