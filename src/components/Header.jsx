import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, despesa } = this.props;
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
            {`Despesa Total: R$ ${despesa}`}
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

export default Header;
