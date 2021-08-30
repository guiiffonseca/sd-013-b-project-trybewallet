import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <label htmlFor={ name }>
        { name }
        <select name={ name } id={ name }>
          <option value={ name }>a</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Select;
