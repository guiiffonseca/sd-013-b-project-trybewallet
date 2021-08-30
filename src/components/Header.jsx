import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Inputs';
import Select from './select';

class Header extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <h1>TrybeWallet</h1>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
        <form>
          <Input
            labelText="Valor"
            type="number"
            name="valor"
          />
          <Input
            labelText="Descrição"
            type="text"
            name="description"
          />
          <Select
            name="Moeda"
          />
          <Select
            name="Método de pagamento"
          />
          <Select
            name="Tag"
          />
        </form>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
