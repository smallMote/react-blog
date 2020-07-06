import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import './common/style/index.scss'
require('@babel/polyfill')

ReactDom.render(<App />, document.getElementById('app'))