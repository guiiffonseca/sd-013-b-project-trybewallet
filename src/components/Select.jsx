import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, label, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select name={ name } onChange={ onChange }>
          <option>{ name }</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  label: '',
  name: '',
  onChange: null,
};

export default Select;