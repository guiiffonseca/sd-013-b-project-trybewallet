import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      despesa: '0',
      moeda: 'BRL',
    };
  }

  render() {
    const { userState } = this.props;
    const { despesa, moeda } = this.state;
    return (
      <header>
        <div>
          <li data-testid="email-field">{userState}</li>
          <li>
            Despesa total: R$
            <span data-testid="total-field">
              {' '}
              {despesa}
            </span>
          </li>
          <li data-testid="header-currency-field">{moeda}</li>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ userState: state.user.email });

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  userState: PropTypes.string.isRequired,
};
