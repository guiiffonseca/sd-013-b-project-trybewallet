import React from 'react';

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

export default ImputValor;
