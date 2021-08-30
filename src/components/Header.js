import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { currency } = this.state;

    return (
      <header>
        <p data-testid="email-field">{`email: ${email}`}</p>
        <div>
          <p data-testid="total-field">{`despesa total: ${this.state.total} `}</p>
          <p
            data-testid="header-currency-field"
          >
            {`cambio usado:${currency}`}
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
