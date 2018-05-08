import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <section>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>RSVP</li>
        </ul>
      </section>
    );
  }
}

export default Header;
