import React from 'react';
import { connect } from 'react-redux';
import { actionFunctionThunk } from '../actions';
import Header from '../components/Header';

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
    return (
      <div>
        <div>Wallet</div>
        <Header />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  functionThunk: () => dispatch(actionFunctionThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
