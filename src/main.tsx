import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import GeneralProvider from './contexts/generalContext'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralProvider>
        <App/>
      </GeneralProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
