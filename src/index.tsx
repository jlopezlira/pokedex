import './assets/styles/GlobalStyles.css'

import * as serviceWorker from './serviceWorker'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root'),
)

serviceWorker.register(null)
reportWebVitals()
