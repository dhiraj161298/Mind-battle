import React, { Component } from 'react';
import './css/homepage.css';
import logo from '../images/logo.png';

export default class Homepage extends Component {

  componentDidMount() {
    var bg = document.querySelector(".homeWrapper");
    var pos = 0;
    window.setInterval(function moveBg() {
      pos++;
      bg.style.backgroundPosition = `${pos}px 100%`;
    }, 70)
  }

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
          <span><strong>Mind Battle</strong> is a platform <strong>beautifully</strong> crafted for intermediate
            and professional <strong>quizzers</strong>.
          </span>
          <div className='buttonContainer'>
            <a href='http://localhost:3000/'>single player</a>
            <a href='http://localhost:3000/'>multi player</a>
          </div>
        </div>
      </div>
    );
  }
}
