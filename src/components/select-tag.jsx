import React, { Component } from 'react';

class SelectTag extends Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
        >
          <option value="">Selecione</option>
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }
}

SelectTag.propTypes = ({
  // email: PropTypes.string,
}).isRequired;

// const mapStateToProps = ({ user: { email } }) => ({ email });

// export default connect(mapStateToProps)(Header);

export default SelectTag;
