import React from 'react';

class TagType extends React.Component {
  render() {
    return (
      <label htmlFor="input-tag-type">
        Tag:
        <select id="input-tag-type">
          <option name="food" id="food">
            Alimentação
          </option>
          <option name="lazer" id="lazer">
            Lazer
          </option>
          <option name="work" id="work">
            Trabalho
          </option>
          <option name="transport" id="transport">
            Transporte
          </option>
          <option name="health" id="health">
            Saúde
          </option>
        </select>
      </label>
    );
  }
}

export default TagType;
