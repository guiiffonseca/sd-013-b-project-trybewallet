import React from 'react';

class Coin extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="moeda">
          Moeda
          <select
            name="moeda"
            id="moeda"
          >
            Moeda
          </select>
        </label>
      </div>
    );
  }
}

export default Coin;
