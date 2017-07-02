import React, {Component} from 'react';
import Wrapper from './wrapper';

export default class SinglePlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      question: `When Zach Shields and X met in 2005, the both realised that they
      both obsessed with the haunted Mansion ride in Disneyland. During childhood,
      Zach had to be put into therapy because of his obsession with ghosts. X's
      family had to move out of his childhood home because they believed it was
      haunted. Both of them were still obsessed with graveyards and the
      supernatural, so they decided to write love stories about ghosts and monsters.
      The duo named themeselves Dead Man's Bones. Their first song, In The Room
      Where You Sleep, was featured in the movie, The Conjuring. Indentify X.`,
    }
  }

  render() {
    return (
      <Wrapper>
        <div className="game">
          Testing Things out.
          {this.state.question}
        </div>
      </Wrapper>
    );
  }
}
