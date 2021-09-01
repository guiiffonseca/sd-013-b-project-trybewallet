import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueinitial: 0,
      coinInitial: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { valueinitial, coinInitial } = this.state;
    return (
      <header>
        <div
          data-testid="email-field"
        >
          { email }

        </div>
        <div
          data-testid="total-field"
        >
          { valueinitial }

        </div>
        <div
          data-testid="header-currency-field"
        >
          { coinInitial }

        </div>
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

export default connect(mapStateToProps, null)(Header); // mapState primeiro depois mapDispath segundo, caso n tenha colque null
