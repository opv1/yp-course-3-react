import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { AppState } from './contexts/app/AppState'
import { ModalState } from './contexts/modal/ModalState'
import * as serviceWorker from './serviceWorker'

const Application = (
  <AppState>
    <ModalState>
      <App />
    </ModalState>
  </AppState>
)

ReactDOM.render(Application, document.getElementById('root'))

serviceWorker.unregister()
