import Axios from 'axios'
const CancelToken = Axios.CancelToken
const pending = []
// 取消请求
function cancel(config) {
	pending.forEach((item, index) => {
		if (item.p + item.m === config.url + config.method) {
			item.c('取消请求', item.toString()) // 取消请求
			pending.splice(index, 1) // 在队列中删除本次请求
		}
	})
}

// 创建请求
const request = Axios.create({
	timeout: 5000,
	baseURL: 'https://server.wlittleyang.com'
})

// 请求拦截
request.interceptors.request.use(
	req => {
		// 取消上一次请求
		cancel(req) // 确保本次请求不会受到上传请求而阻塞
		// 将每次请求的标识放如正在请求的队列里面
		req.cancelToken = new CancelToken(c => {
			pending.push({
				p: req.url,
				m: req.method,
				c
			})
		})
		return req
	},
	error => { // 请求错误处理
		console.log(error)
	}
)
// 返回拦截
request.interceptors.response.use(
	res => {
		// 取消已完成的请求
		cancel(res)
		return res.data
	},
	error => { // 返回错误处理
		console.log(error)
	}
)

export default request