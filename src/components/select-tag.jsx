import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class SelectTag extends Component {
  render() {
    const { tag, onChange } = this.props;

    return (
      <label htmlFor="tag">
        Tag:
        {' '}
        <select
          id="tag"
          className="expensives-form-long-inputs"
          name="tag"
          value={ tag }
          onChange={ onChange }
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
  handleChange: PropTypes.func,
}).isRequired;

// const mapStateToProps = ({ user: { email } }) => ({ email });

// export default connect(mapStateToProps)(Header);

export default SelectTag;
