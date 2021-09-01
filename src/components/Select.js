import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { name, text, value, change, options } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <select
          name={ name }
          id={ name }
          value={ value }
          onChange={ change }
        >
          { options.map((eachOne) => <option key={ eachOne }>{ eachOne }</option>) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  options: PropTypes.arrayOf().isRequired,
};
