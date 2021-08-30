import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLoginSubmit as getLoginAction } from '../actions/index';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      buttonActive: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  onSubmitClick() {
    const { history, getLoginSubmit } = this.props;
    const { email } = this.state;

    getLoginSubmit(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    console.log(target);
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.enableButton();
    });
  }

  enableButton() {
    // Learned this in this page: https://ui.dev/validate-email-address-javascript/
    const { email, password } = this.state;
    const validPassword = 6;
    const validEmail = /\S+@\S+\.\S+/i;
    const isValid = !(validEmail.test(email) && password.length >= validPassword);
    this.setState({
      buttonActive: isValid,
    });
  }

  render() {
    const { buttonActive, email, password } = this.state;
    return (
      <div>
        <div>
          <h2>TELA DE LOGIN</h2>
        </div>
        <div>
          <form>
            <Input
              onChange={ this.handleChange }
              name="email"
              dataText="email-input"
              type="email"
              minLength="3"
              holderText="Email"
              value={ email }
              required
            />
            <Input
              onChange={ this.handleChange }
              name="password"
              dataText="password-input"
              minLength="6"
              type="password"
              holderText="Password"
              value={ password }
              required
            />
            <Button
              onClick={ this.onSubmitClick }
              text="Entrar"
              active={ buttonActive }
            />
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  getLoginSubmit: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({

  getLoginSubmit: (email) => dispatch(getLoginAction(email)),
}
);

export default connect(null, mapDispatchToProps)(Login);
