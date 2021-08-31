import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <select name="Select" value={ value } onChange={ onChange }>
        <option value="0">Choose:</option>
        {/*  {Object.entries(states).map((state) => (
          <option value={ state[1] } key={ state[1] }>
            {state[0]}
          </option>
        ))} */}
      </select>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
