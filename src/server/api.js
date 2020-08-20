import http from './axios'

export const testPost = data => http.get('/testapi/aaa', data)