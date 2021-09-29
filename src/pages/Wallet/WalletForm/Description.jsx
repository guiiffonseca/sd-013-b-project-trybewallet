import React from 'react';

class Description extends React.Component {
  render() {
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          name="description"
        />
      </label>
    );
  }
}

export default Description;
