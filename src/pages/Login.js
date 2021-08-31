import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      pass: '',
      btnDisable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.enableComeInButton = this.enableComeInButton.bind(this);
  }

  // event.target.name / value 
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });

    this.enableComeInButton();
  }

  // baseada no CR de @raugusto96
  enableComeInButton() {
    const { email, pass } = this.state;
    const emailRegExValidation = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    const passValidationLength = 5; // o pass.value começa em [0]
    
    const emailIsValid = emailRegExValidation.test(email) && pass.length >= passValidationLength;
    this.setState({ btnDisable: !emailIsValid });
  }

  render() {
    const { email, pass, btnDisable } = this.state;

    return (
      <div>
        <h2>Login</h2>
          <form>

            <div>
              <label htmlFor="email-input">
                E-mail:
                <input
                  type="email"
                  data-testid="email-input"
                  name="email"
                  value={ email }
                  onChange= { this.handleChange }
                />
              </label>
            </div>

            <div>
              <label htmlFor="password-input">
                Senha:
                <input
                id="password-input"
                  type="password"
                  data-testid="password-input"
                  name="pass"
                  value={ pass }
                  onChange= { this.handleChange }
                />
              </label>
            </div>

            <div>
              <input
                type="button"
                value="Entrar"
                disabled={ btnDisable }
              />
            </div>

        </form>
      </div>
    );
  }
}

export default Login;
