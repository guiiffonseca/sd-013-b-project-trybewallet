import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { setEmail } from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        Email:
        {' '}
        <span data-testid="email-field">{email}</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.func.isRequired,
  // userState: PropTypes.func.isRequired,
};
