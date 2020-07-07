import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import './common/style/index.scss'
import { Provider } from 'react-redux'
import store from './store'
// require('@babel/polyfill')

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)