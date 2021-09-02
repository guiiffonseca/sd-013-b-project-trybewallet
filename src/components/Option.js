import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    const { options } = this.props;

    return (
      <>
        {
          options.map(
            (item) => <option key={ item } value={ item }>{item}</option>,
          )
        }
      </>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
