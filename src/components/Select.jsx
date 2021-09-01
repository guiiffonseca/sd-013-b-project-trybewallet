import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { id, name, value, onChange, items, label } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <select id={ id } name={ name } value={ value } onChange={ onChange }>
          {/* vai dar ruim */}
          <option value="0">Choose:</option>
          {items.map((item) => (
            <option value={ item } key={ item }>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.objectOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
