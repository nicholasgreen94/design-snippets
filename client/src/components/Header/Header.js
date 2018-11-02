import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <span className='logo'>designsnippets.com</span>
        </div>
      </div>
    );
  }
}

export default Header;
