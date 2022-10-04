import request from '../../utils/index'
export const login_api = (data) => request({ url: `/api/login`, method: 'post', data:data})
export const reguser_api = (data) => request({ url: `/api/reguser`, method: 'post', data:data})