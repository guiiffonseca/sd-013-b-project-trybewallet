import React from 'react';
import PropTypes from 'prop-types';
import Button from '../std/Button';

class ButtonEnter extends React.Component {
  render() {
    const {
      props: {
        handleClick,
        disabled,
      },
    } = this;

    return (
      <Button
        buttonText="Entrar"
        handleClick={ handleClick }
        disabled={ disabled }
      />
    );
  }
}

const { bool, func } = PropTypes;
ButtonEnter.propTypes = {
  handleClick: func.isRequired,
  disabled: bool,
};

ButtonEnter.defaultProps = {
  disabled: false,
};

export default ButtonEnter;
