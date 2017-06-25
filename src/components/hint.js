import React from 'react';

const Hint = (props) => {
  return (
    <div className='hintBox'>
      <div className='meaning'>
        <span>Meaning</span>
        {props.wordDetail.meaning}
      </div>
      <div className='usage'>
        <span>Usage</span>
        {props.wordDetail.usage}
      </div>
    </div>
  )
}

export default Hint;
