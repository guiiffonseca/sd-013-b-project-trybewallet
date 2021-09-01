import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="form-content">
        <div className="icon-trybe">Login</div>
        <form>
          <label htmlFor="email-input">
            <input
              data-test-id="email-input"
              type="text"
              name="email"
              id="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            <input
              data-test-id="password-input"
              type="password"
              name="password"
              id="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>

    );
  }
}

export default Login;
