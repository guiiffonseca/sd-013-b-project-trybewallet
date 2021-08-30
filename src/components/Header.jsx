import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { nome, sum } = this.props;
    return (
      <div>
        <h3 data-testid="email-field">{`Bem vindo a sua carteira digital ${nome}!`}</h3>
        <p data-testid="total-field">{sum}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  nome: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
};

const mapStateToProps = ({ user }) => ({ nome: user.email });

export default connect(mapStateToProps)(Header);
