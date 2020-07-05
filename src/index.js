import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppState } from './store/app/appState';
import { ModalState } from './store/modal/modalState';
import * as serviceWorker from './serviceWorker';

const Application = (
  <AppState>
    <ModalState>
      <App />
    </ModalState>
  </AppState>
);

ReactDOM.render(Application, document.getElementById('root'));

serviceWorker.unregister();
