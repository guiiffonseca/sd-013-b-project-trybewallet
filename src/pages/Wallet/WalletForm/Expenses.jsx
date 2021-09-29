import React from 'react';

class Expenses extends React.Component {
  render() {
    return (
      <label htmlFor="expenses">
        Valor:
        <input
          type="text"
          id="expenses"
          name="expenses"
        />
      </label>
    );
  }
}

export default Expenses;
