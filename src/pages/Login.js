import React from 'react';
// import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pwdIsBad: true,
      emailIsBad: true,
      email: '',
    };
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPwd = this.verifyPwd.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  verifyEmail({ target: { value } }) {
    const emailRegex = /^(\S+)@((?:(?:(?!-)[a-z0-9-]{1,62}[a-z0-9])\.)+[a-z0-9]{2,12})$/;
    if (emailRegex.test(value)) {
      this.setState({
        emailIsBad: false,
        email: value,
      });
    } else this.setState({ emailIsBad: true });
  }

  verifyPwd({ target: { value } }) {
    const minimumPwdLength = 6;

    if (value.length >= minimumPwdLength) this.setState({ pwdIsBad: false });
    else this.setState({ pwdIsBad: true });
  }

  handleClick() {
    const { email } = this.state;
    console.log(email);
    // const { saveEmail } = this.props;

    // saveEmail(email);
  }

  render() {
    const { pwdIsBad, emailIsBad } = this.state;

    return (
      <form>
        <label
          htmlFor="email"
        >
          Email:
          <input
            type="email"
            name="email"
            onChange={ this.verifyEmail }
          />
        </label>
        <label
          htmlFor="password"
        >
          Password:
          <input
            type="password"
            name="password"
            onChange={ this.verifyPwd }
          />
        </label>
        <button
          type="button"
          disabled={ pwdIsBad || emailIsBad }
          // onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

// Login.propTypes = {
//   saveEmail: PropTypes.func.isRequired,
// };

export default Login;
