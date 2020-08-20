import axios from 'axios'

const request = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://www.baidu.com/dev/xx' : 'http://www.baidu.com/prd/xx',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;text/html;'
  }
})

request.interceptors.request.use(config => {
  config.headers.Accept = 'application/json;charset=UTF-8;'
  return config
})
request.interceptors.response.use(response => {
  if (response.code === 200) {
    return response
  } else {
    alert('响应码!200')
  }
}, error => {
  if (error.code === 400) {/** */}
  else if (error.code === 401) {/** */}
  else {/** */}
  return error
})

function get(url, params) {
  return request.get(url, { params }).then(res => {
    return res.data
  }).catch(err => {
    return err
  })
}

function post(url, params) {
  return request.post(url, params).then(res => {
    return res.data
  }).catch(err => {
    return err
  })
}

// post请求方法封装(上传)
function upload(url, data) {
  return request.post(url, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(res => {
    return res.data
  }).catch(err => {
    return err
  });
}

export default {
  get,
  post,
  upload
}