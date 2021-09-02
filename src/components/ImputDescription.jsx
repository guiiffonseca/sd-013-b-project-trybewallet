import React from 'react';

class ImputDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { description, func  } = this.props;
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

export default ImputDescription;
