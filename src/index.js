/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import 'purecss/build/pure-min.css'

import './initializers/font-awesome'

import './index.scss'
import App from './app'

const appRoot = document.getElementById('app')
if (appRoot !== null) {
  ReactDOM.render(
    <HashRouter basename="/">
      <App />
    </HashRouter>,
    appRoot
  )
}
