import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user: { email }, wallet: { despesa } } = this.props;
    return (
      <header className="header">
        <div className="left-header">
          <h1 className="left-header">TRYBE</h1>
        </div>
        <div className="right-header">
          <span className="span" data-testid="email-field">
            { `Email: ${email}` }
          </span>
          <span className="span" data-testid="total-field">
            { `Despesa Total: R$ ${despesa || 0}`}
          </span>
          <span className="span" data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  despesa: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(Header);
