import request from '../../utils/index'
// 请求用户数据
export const userinfo_api = () => request({ url: `/my/userinfo`, method: 'get'})

// 更新用户数据
export const updateuserinfo_api = (data) => request({ url: `/my/userinfo`, method: 'post', data:data})


// 修改用户密码
export const updatepassword_api = (data) => request({ url: `/my/updatepassword`, method: 'post', data:data})