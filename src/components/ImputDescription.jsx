import React from 'react';
import PropTypes from 'prop-types';

class ImputDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { description, func } = this.props;
    return (
      <div>
        <label htmlFor="descricao">
          Descrição :
          <input
            type="text"
            id="descricao"
            name="description"
            value={ description }
            onChange={ (e) => func(e) }
          />
        </label>
      </div>

    );
  }
}

ImputDescription.propTypes = {
  description: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default ImputDescription;
