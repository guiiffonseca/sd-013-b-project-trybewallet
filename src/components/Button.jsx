import React from 'react';

class Button extends React.Component {
  render() {
    const onClick = () => {
      console.log('clicou');
    };

    return (
      <button
        type="button"
        onClick={ onClick }
      >
        Entrar
      </button>
    );
  }
}

export default Button;
