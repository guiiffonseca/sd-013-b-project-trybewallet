import React from 'react';

class ImputTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tag, func } = this.props;
    return (
      <div>
        <label htmlFor="tag">
          Tag :
          <select
            name="tag"
            id="tag"
            value={ tag }
            onChange={ (e) => func(e) }
          >
            <option value="Alimentacao">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saude">Saúde</option>
          </select>
        </label>
      </div>

    );
  }
}

export default ImputTag;
