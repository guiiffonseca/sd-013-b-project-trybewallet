import React from 'react';
import PropTypes from 'prop-types';

class ButtonDel extends React.Component {
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
        data-testid="delete-btn"
      >
        Deletar
      </button>
    );
  }
}

const { func } = PropTypes;
ButtonDel.propTypes = {
  handleClick: func.isRequired,
};

export default ButtonDel;
