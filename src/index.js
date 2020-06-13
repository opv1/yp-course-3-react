import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Applications = <App />;

ReactDOM.render(Applications, document.getElementById('root'));

serviceWorker.unregister();
