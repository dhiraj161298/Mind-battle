import React from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import './css/header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="Mind Battle" />
      </div>
      <ul className='menu'>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/singleplayer'>single player</Link></li>
        <li>multi player</li>
        <li>leaderboard</li>
      </ul>
    </div>
  );
}

export default Header;
