import React from 'react';
import PropTypes from 'prop-types';
import Input from '../std/Input';

class InputValue extends React.Component {
  render() {
    const {
      props: {
        value,
        handleChange,
      },
    } = this;

    return (
      <Input
        name="value"
        labelText="Valor:"
        type="number"
        value={ value }
        handleChange={ handleChange }
        placeholder="Digite o Valor"
      />
    );
  }
}

const { string, func, number, oneOfType } = PropTypes;
InputValue.propTypes = {
  value: oneOfType([
    number,
    string,
  ]).isRequired,
  handleChange: func.isRequired,
};

export default InputValue;
