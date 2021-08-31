import React from 'react';
import PropTypes from 'prop-types';

class ButtonEdit extends React.Component {
  render() {
    const {
      props: {
        handleClick,
      },
    } = this;

    return (
      <button
        type="button"
        onClick={ handleClick }
        data-testid="edit-btn"
      >
        Editar
      </button>
    );
  }
}

const { func } = PropTypes;
ButtonEdit.propTypes = {
  handleClick: func.isRequired,
};

export default ButtonEdit;
