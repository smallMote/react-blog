import request from './index'
class ArticleController {
	getList(limit, offset) {
		return request.get('/article', {
			params: { limit, offset }
		})
	}
}

export default ArticleController