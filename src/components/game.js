import React, {Component} from 'react';
import Hint from './hint.js';
import Input from './input.js';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wordDetail: {
        word: "INCREDIBLE",
        meaning: "Difficult to believe; extraordinary.",
        usage: `An almost _________ tale of triumph and tragedy`,
        }
      }
    }

  render() {
    return (
      <div className="game">
        <Hint wordDetail = {this.state.wordDetail} />
        <Input answer = {this.state.wordDetail.word} />
      </div>
    );
  }
}

export default Game;
