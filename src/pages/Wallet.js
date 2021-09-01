import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import { getCurrencyThunk } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.getCurr = this.getCurr.bind(this);
  }

  componentDidMount() {
    this.getCurr();
  }

  getCurr() {
    const { getCurrReq } = this.props;
    getCurrReq();
  }

  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrReq: () => dispatch(getCurrencyThunk()),
});

Wallet.propTypes = {
  getCurrReq: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
