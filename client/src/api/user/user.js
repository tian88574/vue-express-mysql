import request from '../../utils/index'
export const userinfo_api = () => request({ url: `/my/userinfo`, method: 'get'})