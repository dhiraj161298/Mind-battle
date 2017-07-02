import React from 'react';
import Header from './header';
import './css/wrapper.css';

const Wrapper = (props) => {
  return (
    <div className='wrapper'>
      <Header />
      {props.children}
    </div>
  );
}

export default Wrapper;
