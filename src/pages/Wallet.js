import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionFunctionThunk } from '../actions';
import FormWallet from '../components/FormWallet';
import Header from '../components/Header';
import TableExpenses from '../components/TableExpenses';


class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { functionThunk } = this.props;
    functionThunk();
  }

  render() {
    const { respostaAPI } = this.props;
    return (
      <div>
        <Header />
        <FormWallet respostaAPI={ respostaAPI } />
        {/* <TableExpenses /> */}
      </div>
    );
  }
}

Wallet.propTypes = {
  respostaAPI: PropTypes.shape({}).isRequired,
  functionThunk: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  functionThunk: () => dispatch(actionFunctionThunk()),
});

const mapStateToProps = (state) => ({
  respostaAPI: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
