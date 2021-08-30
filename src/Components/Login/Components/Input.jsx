import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ title, id, type, data, hadlerChange }) {
  return (
    <label htmlFor={ id }>
      {`${title}:`}
      <input
        type={ type }
        name={ id }
        id={ id }
        data-testid={ data }
        onChange={ hadlerChange }
      />
    </label>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  hadlerChange: PropTypes.func.isRequired,
};
