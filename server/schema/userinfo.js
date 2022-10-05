const joi = require('joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */



// 定义 id, nickname, emial 的验证规则
const user_pic = joi.string().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()


// 定义密码的验证规则
const newpassword = joi.string().pattern(/^[\S]{6,12}$/).required()
const oldpassword = joi.string().pattern(/^[\S]{6,12}$/).required()
const newpassword2 = joi.string().pattern(/^[\S]{6,12}$/).required()

// 验证规则对象 - 更新用户基本信息
exports.update_userinfo_schema = {
    body: {
        user_pic,
      nickname,
      email,
    },
  }

  exports.update_password_schema = {
    body: {
      oldpassword,
      newpassword,
      newpassword2
    },
  }