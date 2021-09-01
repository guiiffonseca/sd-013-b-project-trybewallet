import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    return (
      <div>
        <Header />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchApi()),
});

Wallet.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
