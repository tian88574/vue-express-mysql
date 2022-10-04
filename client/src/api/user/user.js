import request from '../../utils/index'
// 请求用户数据
export const userinfo_api = () => request({ url: `/my/userinfo`, method: 'get'})

// 更新用户数据
export const updateuserinfo_api = (data) => request({ url: `/my/userinfo`, method: 'post', data:data})