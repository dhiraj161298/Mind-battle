import React, { Component } from 'react';
import Wrapper from './wrapper';
import './css/homepage.css';
import {Link} from 'react-router-dom';

export default class Homepage extends Component {

  componentDidMount() {
    var bg = document.querySelector(".wrapper");
    var pos = 0;
    window.setInterval(function moveBg() {
      pos++;
      bg.style.backgroundPosition = `${pos}px 100%`;
    }, 65)
  }

  render() {
    return (
      <Wrapper>
        <div className='intro'>
          <h2>Let the battle begin</h2>
          <span><strong>Mind Battle</strong> is a platform <strong>beautifully
          </strong> crafted for intermediate and professional <strong>quizzers
          </strong>. Select a game mode and test your <strong>quizzing
          </strong> skills.
          </span>
          <div className='buttonContainer'>
            <Link to='/singleplayer'>single player</Link>
            <a href='http://localhost:3000/'>multi player</a>
          </div>
        </div>
      </Wrapper>
    );
  }
}
