import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div id="404-error">
        <h1>Page Not Found</h1>
        <img src="images/chucknorris.png" alt="Not Found" />
        Image by
        {' '}
        <a
          href="https://dribbble.com/kunchevsky"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alex Kunchevsky
        </a>
      </div>
    );
  }
}

export default NotFound;
