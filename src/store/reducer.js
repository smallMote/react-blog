import * as codeThemes from 'react-syntax-highlighter/dist/esm/styles/prism'

const defState = {
	codeTheme: codeThemes.dark
}

// 行为控制
export default (state = defState, action) => {
	switch (action.type) {
		case 'CHANGE_CODE_THEME':
			return {
				state,
				codeTheme: codeThemes[action['themeName']]
			}
		default:
			return state
	}
}
