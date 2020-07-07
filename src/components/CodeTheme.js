import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {
		codeTheme: state.codeTheme
	}
}

function mapDispatchProps(dispatch) {
	return {
		changeCodeTheme(themeName) {
			dispatch({ type: 'CHANGE_CODE_THEME', themeName })
		}
	}
}

class CodeTheme extends Component {
	themes = [
		'coy', 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow',
		'twilight', 'prism', 'atomDark', 'base16AteliersulphurpoolLight',
		'cb', 'darcula', 'duotoneDark', 'duotoneEarth', 'duotoneForest',
		'duotoneLight', 'duotoneSea', 'duotoneSpace', 'ghcolors', 'hopscotch',
		'pojoaque', 'vs', 'xonokai'
	]
	render() {
		const { changeCodeTheme } = this.props
		return (
			<div>
				{
					this.themes.map(item =>
						<button
							key={item}
							className='btn'
							onClick={() => changeCodeTheme(item)}
						>
							{ item }
						</button>
					)
				}

			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchProps
)(CodeTheme);