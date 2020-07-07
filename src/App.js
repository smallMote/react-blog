import React from 'react'
import Markdown from './components/Markdown'
import CodeTheme from './components/CodeTheme'

function App() {
	return (
		<>
			<div className="container">
				<CodeTheme />
				<div className='app'>Hello React 2</div>
				<Markdown />
			</div>
		</>
	)
}

export default App