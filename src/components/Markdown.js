import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from "./CodeBlock";
import TestMd from './TEST.md'

class Markdown extends Component {
	state = {
		source: TestMd
	}

	render() {
		return (
			<ReactMarkdown
				source={this.state.source}
				escapeHtml={false}
				renderers={{
					code: CodeBlock
				}}
			/>
		)
	}
}

export default Markdown