import React from 'react';
import PropTypes from 'prop-types';

class SelectOptions extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <option value={ info }>
        { info }
      </option>
    );
  }
}

SelectOptions.propTypes = {
  info: PropTypes.string.isRequired,
};

export default SelectOptions;
