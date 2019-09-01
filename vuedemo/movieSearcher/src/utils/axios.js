//引入axios
import axios from 'axios'
import qs from 'qs';
import Cookies from 'js-cookie'

axios.defaults.withCredentials = true

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    if(response.data.error == 2) {
      Cookies.remove('Admin-Token');
      window.location.href = window.location.origin + '/#/login';
    }
    return response;
}, error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break;
        case 401:
          error.message = '未授权，请重新登录'
          break;
        case 403:
          error.message = '拒绝访问'
          break;
        case 404:
          error.message = '请求错误,未找到该资源'
          break;
        case 405:
          error.message = '请求方法未允许'
          break;
        case 408:
          error.message = '请求超时'
          break;
        case 500:
          error.message = '服务器端出错'
          break;
        case 501:
          error.message = '网络未实现'
          break;
        case 502:
          error.message = '网络错误'
          break;
        case 503:
          error.message = '服务不可用'
          break;
        case 504:
          error.message = '网络超时'
          break;
        case 505:
          error.message = 'http版本不支持该请求'
          break;
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      error.message = "连接到服务器失败"
    }
    //message.error(error)
  	return Promise.resolve(error.response)
})

//设置默认请求头
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded'
}
axios.defaults.timeout = 10000

export default {
  //get请求
    get (url,param) {
      return new Promise((resolve,reject) => {
        axios({
          method: 'get',
          url,
          params: param,
        }).then(res => {
          resolve(res.data)
        })
      })
    },
  //post请求
    post (url,param) {
      return new Promise((resolve,reject) => {
        axios({
          method: 'post',
          withCredentials: true,
          mode: 'cors',
          url,
          data: qs.stringify(param),
        }).then(res => {
          resolve(res.data)
        })
      })
     }
  }
