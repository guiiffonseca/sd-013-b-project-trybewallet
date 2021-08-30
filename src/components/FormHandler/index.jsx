import React from 'react';
import PropTypes from 'prop-types';

const FormHandler = ({ label, name, value, type, onChange, options = {}, ...rest }) => {
  const handlers = {
    select: (
      <select id={ name } name={ name } value={ value } onChange={ onChange } { ...rest }>
        <option value="">Selecione uma opção</option>
        {
          Object.entries(options).map(([optionValue, optionName]) => (
            <option key={ optionName } value={ optionValue }>{ optionName }</option>
          ))
        }
      </select>),
    textarea: (
      <textarea
        id={ name }
        name={ name }
        value={ value }
        onChange={ onChange }
        { ...rest }
      />),
  };

  return (
    <label htmlFor={ name }>
      { label }
      { handlers[type] || <input
        id={ name }
        name={ name }
        type={ type }
        value={ value }
        onChange={ onChange }
        { ...rest }
      /> }
    </label>
  );
};

FormHandler.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.shape({
    [PropTypes.string]: PropTypes.isRequired,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
};

FormHandler.defaultProps = {
  label: '',
  name: '',
  onChange: () => {},
  options: {},
  type: 'text',
  value: '',
};

export default FormHandler;
