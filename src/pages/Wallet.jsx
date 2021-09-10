import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getApiThunk } from '../actions/index';
import Header from '../components/Header';
import Forms from '../components/formulario/Forms';
import Table from '../components/Table';

class Wallet extends React.Component {
  async componentDidMount() {
    const { getApi } = this.props;
    await getApi();
  }

  render() {
    return (
      <div className="wallet">
        <Header />
        <Forms />
        <Table />
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

Wallet.propTypes = {
  getApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getApi: () => dispatch(getApiThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
