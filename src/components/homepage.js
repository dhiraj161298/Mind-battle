import React, { Component } from 'react';
import './css/homepage.css';
import logo from '../images/logo.png';

export default class Homepage extends Component {
  render() {
    return (
      <div className='homeWrapper'>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt="Mind Battle" />
          </div>
          <ul className='menu'>
            <li>home</li>
            <li>single player</li>
            <li>multi player</li>
            <li>leaderboard</li>
          </ul>
        </div>
        <div className='intro'>
          <h2>Let the battle begin</h2>
          <span>Mind Battle is a platform beautifully crafted for intermediate
            and professional quizzers.
          </span>
        </div>
      </div>
    );
  }
}
