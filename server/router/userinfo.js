// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()

const userinfo_handler = require('../router_handler/userinfo')
const expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象
const { update_userinfo_schema,update_password_schema } = require('../schema/userinfo')

// 获取用户的基本信息
router.get('/userinfo', userinfo_handler.getUserInfo)

// 更新用户的基本信息
router.post('/userinfo',expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)

// 修改密码
router.post('/updatepassword',expressJoi(update_password_schema), userinfo_handler.updatePassword)

// 向外共享路由对象
module.exports = router