import React from 'react';
import PropTypes from 'prop-types';
import Button from '../std/Button';

class ButtonDesp extends React.Component {
  render() {
    const {
      props: {
        handleClick,
        disabled,
      },
    } = this;

    return (
      <Button
        buttonText="Adicionar despesa"
        handleClick={ handleClick }
        disabled={ disabled }
      />
    );
  }
}

const { bool, func } = PropTypes;
ButtonDesp.propTypes = {
  handleClick: func.isRequired,
  disabled: bool,
};

ButtonDesp.defaultProps = {
  disabled: false,
};

export default ButtonDesp;
