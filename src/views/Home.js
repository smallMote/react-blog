import React, {Component} from 'react'
import {connect} from 'react-redux'
import ArticleController from '../api/article'
const articleController = new ArticleController()

function mapStateToProps(state) {
	return {}
}

class Home extends Component {

	componentDidMount() {
		this.getArticles()
	}

	getArticles = async () => {
		const result = await articleController.getList()
		console.log(result)
	}
	render() {
		return (
			<div>
				
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
)(Home)