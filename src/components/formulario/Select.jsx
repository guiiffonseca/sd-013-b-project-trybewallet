import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, label, onChange, ops } = this.props;
    if (!ops) {
      return (
        <>
        </>
      );
    }
    return (
      <label htmlFor={ name }>
        { label }
        <select id={ name } name={ name } onChange={ onChange }>
          { ops.map((op) => <option key={ op }>{ op }</option>) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  ops: PropTypes.arrayOf(),
}.isRequired;

export default Select;
