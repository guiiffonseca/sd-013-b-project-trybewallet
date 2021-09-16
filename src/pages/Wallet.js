import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Wallet/Form';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: {},
    };
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  getCurrencies() {
    const linkAPI = 'https://economia.awesomeapi.com.br/json/all';
    fetch(linkAPI)
      .then((value) => value.json())
      .then((value) => this.setState({ currencies: value }));
  }

  render() {
    const { email } = this.props;
    const { currencies } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field"> BRL</span>
        <br />
        <Form currencies={ currencies } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
