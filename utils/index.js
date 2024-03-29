import Request from './request'

const test = new Request()

test.setConfig((config) => { /* 设置全局配置 */
  config.baseUrl = 'https://cscbnew.kelinteng.com/api/'
  // #ifdef H5
  config.baseUrl = 'https://cscbnew.kelinteng.com/api/'
  // #endif
  config.header = {
    ...config.header,
    'content-type':'application/json;charset=UTF-8',
    'content-type':'application/x-www-form-urlencoded',
  }
  return config
})

test.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
  config.header = {
    ...config.header
  }
  /*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
  return config
})

test.interceptor.response((response) => { /* 请求之后拦截器 */
  return response
}, (response) => { // 请求错误做点什么
  return response
})

const http = new Request()

http.setConfig((config) => { /* 设置全局配置 */
  config.baseUrl = 'http://www.bbb.cn' /* 根域名不同 */
  return config
})

http.validateStatus = (response) => {
  return response.statusCode === 200
}

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
  config.header = {
    ...config.header,
    a: 1
  }
  /*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
  return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
  return response
}, (response) => { // 请求错误做点什么
  return response
})

export {
  http,
  test
}
