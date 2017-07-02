import React from 'react';
import Homepage from './components/homepage';
import SinglePlayer from './components/singleplayer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/singleplayer' component={SinglePlayer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
