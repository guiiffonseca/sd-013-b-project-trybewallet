import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div>
          TRYBE
        </div>

        <div className="header-infos">
          <div>
            <span>Email: </span>
            <span data-testid="email-field"> email@email.com</span>
          </div>

          <div>
            <span>Despesa Total: </span>
            <span data-testid="total-field">0</span>
          </div>
        </div>
      </header>
    );
  }
}
