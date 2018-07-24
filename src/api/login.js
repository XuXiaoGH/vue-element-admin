import request from '@/utils/request'

export function loginByUsername(username, password) {
  let data = {
    username,
    password
  }
  data = 'username=' + username + '&password=' + password
  return request({
    url: '/api/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

