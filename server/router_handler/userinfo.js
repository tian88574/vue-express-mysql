// 导入数据库操作模块
const db = require('../db/index')
// 导入加密
const bcrypt = require('bcryptjs')


// 获取用户基本信息的处理函数
exports.getUserInfo = (req, res) => {
  // 根据用户的 id，查询用户的基本信息
  // 注意：为了防止用户的密码泄露，需要排除 password 字段
  const sql = `select id, username, nickname, email, user_pic ,avatar from users where id=?`
  // 注意：req 对象上的 user 属性，是 Token 解析成功，express-jwt 中间件帮我们挂载上去的
  db.query(sql, req.user.id, (err, results) => {
    // 1. 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 2. 执行 SQL 语句成功，但是查询到的数据条数不等于 1
    if (results.length !== 1) return res.cc('获取用户信息失败！')

    // 3. 将用户信息响应给客户端
    res.send({
      status: 0,
      message: '获取用户基本信息成功！',
      data: results[0],
    })
  })
}



// 更新用户基本信息的处理函数
exports.updateUserInfo = (req, res) => {
  const sql = `update users set ? where id=?`
  db.query(sql, [req.body, req.user.id], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 执行 SQL 语句成功，但影响行数不为 1
    if (results.affectedRows !== 1) return res.cc('修改用户基本信息失败！')

    // 修改用户信息成功
    return res.cc('修改用户基本信息成功！', 0)
  })
}

// 修改密码的处理函数
exports.updatePassword = (req, res) => {
  const userinfo = req.body
  const sqlstr = `select * from users where id=?`
  db.query(sqlstr, [req.user.id], (err, results) => {
    if (err) return res.cc(err)
    const compareResult1 = bcrypt.compareSync(userinfo.oldpassword, results[0].password)
    if (!compareResult1) {
      return res.cc('原密码错误')
    }
    if (userinfo.newpassword !== userinfo.newpassword2) {
      return res.cc('新密码不一致')
    }
    const compareResult = bcrypt.compareSync(userinfo.newpassword2, results[0].password)
    if (compareResult) {
      return res.cc('密码重复，请重新输入')
    }
    jia_mi_password = bcrypt.hashSync(userinfo.newpassword2, 10)

    const sql = 'update users set ? where id=?'
    db.query(sql, [{ password: jia_mi_password }, req.user.id], (err, results) => {
      if (err) return res.cc(err)
      // 执行 SQL 语句成功，但影响行数不为 1
      if (results.affectedRows !== 1) return res.cc('修改密码失败！请稍后重试')
      // 修改用户信息成功
      return res.cc('修改密码成功！', 0)
    })
  })
}