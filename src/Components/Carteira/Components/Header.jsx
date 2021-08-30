import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import { filterCoins } from '../../../Service/Coins';

function Header({ email }) {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    filterCoins().then((r) => setCoins(r));
  }, []);

  return (
    <div>
      <h3 data-testid="email-field">{email}</h3>
      <h3 data-testid="total-field">0</h3>
      <h3 data-testid="header-currency-field">BRL</h3>
      <Form coins={ coins } />
    </div>
  );
}

const mapStateToProps = ({ user: { email } }) => ({ email });

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
