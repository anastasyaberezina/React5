import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import Root from './root'
import store from './store'

import './index.scss'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
)