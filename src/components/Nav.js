import React, { Component } from 'react';
import '../styles/Nav.scss'
import '../styles/fresh-patterns.scss';

class Nav extends Component {
  render() {
    return (
      <div>
        <ul className='nav-ul'>
          <li className='nav-li'><a className="link" href='/'>Home</a></li>
          <li className='nav-li'><a className="link" href='#contact'>Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Nav;