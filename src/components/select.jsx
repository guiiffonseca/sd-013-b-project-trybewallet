import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, item, text, handleChange } = this.props;

    return (
      <label htmlFor={ name }>
        { `${text}: ` }
        <select name={ name } id={ name } onChange={ handleChange }>
          { item.map((currency) => (
            <option key={ currency } value={ currency }>{currency}</option>)) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  item: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
