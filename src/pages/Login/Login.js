import React from 'react';
import LoginLeftContainer from './LoginLeftContainer';
import LoginRightContainer from './LoginRightContainer';
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-header">
          <img src="https://web.mobills.com.br/static/media/logo.982a0821.svg" alt="logo Trybells" />
          <p>Trybells</p>
        </div>

        <div className="main-container">
          <LoginLeftContainer />
          <LoginRightContainer />
        </div>
      </div>
    );
  }
}

export default Login;

/*
Lembretes:
verificar quebra de linha do h1 e do p,
verificar img src no asset,
*/

// class Login extends React.Component {
//   render() {
//     return (
//       <div className="login-page">
//         <div className="login-header">
//           <img src="https://web.mobills.com.br/static/media/logo.982a0821.svg" alt="logo Trybells" />
//           <p>Trybells</p>
//         </div>

//         <div className="main-container">
//           <div className="left-container">
//             <h1>Hora de transformar suas finanças</h1>
//             <img src="https://web.mobills.com.br/static/media/mobills-path.4047fe93.png" alt="rocket" />
//             <p>
//               O caminho está a sua frente. Você já deu seu primeiro passo rumo à
//               transformação financeira e nós te guiaremos nessa jornada.
//             </p>
//           </div>

//           <div className="right-container">

//             <form>
//               <InputField
//                 className=""
//                 testid="email-input"
//                 onchange=""
//                 placeholder="email@email.com"
//                 name="email"
//                 type="email"
//               />

//               <InputField
//                 className=""
//                 testid="password-input"
//                 onchange=""
//                 placeholder=""
//                 name="password"
//                 type="password"
//               />

//               <Button
//                 className=""
//                 onclick=""
//                 textButton="Entrar"
//               />
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
