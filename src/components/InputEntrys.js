import PropTypes from 'prop-types';
import React from 'react';

class InputEntrys extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            id="valor"
            type="text"
            name="value"
            onChange={ onChange }
          />
        </label>

        <label htmlFor="descrição">
          Descrição
          <input
            id="descrição"
            type="text"
            name="description"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

InputEntrys.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputEntrys;
