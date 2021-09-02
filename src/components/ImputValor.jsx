import React from 'react';
import PropTypes from 'prop-types';

class ImputValor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, func } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            id="valor"
            name="value"
            value={ value }
            onChange={ (e) => func(e) }
          />
        </label>
      </div>

    );
  }
}

ImputValor.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default ImputValor;
