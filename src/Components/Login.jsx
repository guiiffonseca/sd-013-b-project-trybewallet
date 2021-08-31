import React from 'react';
import { useHistory } from 'react-router-dom';
import '../CSS/login.css';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
          buttonIsDisabled: true,
          email: '',
          password: '',
          logged: false,
        }

        this.handleChange =  this.handleChange.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.handleClick =  this.handleClick.bind(this);
    }
  
  handleChange(event) {
   this.setState({ [event.target.name]: event.target.value, });
   this.enableButton();
  }
  
  handleClick() { // exemplo retirado daqui https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
   const history = useHistory();
   history.push('/carteira');
   this.setState({ logged: true });
  }

  enableButton() {
    const { email, password } = this.state;
    const emailIsValid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i; //expresao pesquisada aqui https://stackoverflow.com/questions/22683358/email-validation-expression-w-w-w-w-w-w-allows
    const passwordLength = 5;
    const enableButton = emailIsValid.test(email) && password.length >= passwordLength;
    this.setState({ buttonIsDisabled: !enableButton });
   }

  render() {
      const { buttonIsDisabled } = this.state;
      return (
        <form className='login-page'>
          <div className='login'>
              E-mail:<input 
              type="email" 
              name= 'email'
              placeholder='example@example.com'
              data-testid="email-input"
              onChange={ this.handleChange } 
              />
              Senha:<input 
              type="password" 
              name= 'password'
              data-testid="password-input" 
              onChange={ this.handleChange }
              />
              <button 
              disabled= { buttonIsDisabled } 
              onChange={ this.handleChange }
              onClick= { this.handleClick }
              > 
                Entrar
              </button>
          </div>
        </form>
      )
  }
}

export default Login;
