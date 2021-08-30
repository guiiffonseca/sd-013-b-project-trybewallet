import React from 'react';
import PropTypes from 'prop-types';
import Select from '../std/Select';

class SelectCategorie extends React.Component {
  render() {
    const {
      props: {
        value,
        handleChange,
      },
    } = this;

    const optionsArray = [
      { value: 'Alimentação', text: 'Alimentação' },
      { value: 'Lazer', text: 'Lazer' },
      { value: 'Trabalho', text: 'Trabalho' },
      { value: 'Transporte', text: 'Transporte' },
      { value: 'Saúde', text: 'Saúde' },
    ];

    return (
      <Select
        name="tag"
        labelText="Categoria(tag):"
        value={ value }
        handleChange={ handleChange }
        options={ optionsArray }
      />
    );
  }
}

const { string, func } = PropTypes;
SelectCategorie.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default SelectCategorie;
