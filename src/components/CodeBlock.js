import React, {Component} from 'react';
import { connect } from 'react-redux'
import { PrismLight } from 'react-syntax-highlighter'
import { jsx, javascript, haml } from 'react-syntax-highlighter/dist/esm/languages/prism'

function mapStateToProps(state) {
	return {
		codeTheme: state.codeTheme
	}
}

class CodeBlock extends Component {
	UNSAFE_componentWillMount() {
		// 注册高亮语言
		PrismLight.registerLanguage('jsx', jsx)
		PrismLight.registerLanguage('haml', haml)
		PrismLight.registerLanguage('js ', javascript)
	}
	render() {
		const { language, value, codeTheme } = this.props
		return (
			<figure>
				<PrismLight
					language={language}
					style={codeTheme}
				>
					{ value }
				</PrismLight>
			</figure>
		)
	}
}

export default connect(mapStateToProps)(CodeBlock)