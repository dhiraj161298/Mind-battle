import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();