import React, {Component} from 'react';
import { PrismLight } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { jsx, javascript, haml } from 'react-syntax-highlighter/dist/esm/languages/prism'

class CodeBlock extends Component {
	UNSAFE_componentWillMount() {
		// 注册高亮语言
		PrismLight.registerLanguage('jsx', jsx)
		PrismLight.registerLanguage('haml', haml)
		PrismLight.registerLanguage('js ', javascript)
	}
	render() {
		const { language, value } = this.props
		return (
			<figure>
				<PrismLight
					language={language}
					style={coy}
				>
					{ value }
				</PrismLight>
			</figure>
		)
	}
}

export default CodeBlock