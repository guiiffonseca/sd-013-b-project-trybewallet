import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    const { options } = this.props;

    return (
      <>
        {
          options.map(
            ({ code }) => <option key={ code } value={ code }>{code}</option>,
          )
        }
      </>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
