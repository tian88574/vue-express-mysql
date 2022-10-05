<template>
  <div>
    <el-card style="width:95%;">
      <div class="xiu_gao_mi_ma">
        <el-button type="warning " @click="xiu_gao_mi_ma(ruleFormRef2)">修改密码</el-button>
      </div>
      <!-- 头部栏 -->
      <div class="header" v-if="!store.userlist.avatar"><img src="../../../assets/老婆.jpg" alt="" class="img"/>
        <h5>{{store.userlist.nickname}}</h5>
      </div>
      <div class="header" v-else><img src="store.userlist.avatar" alt="" class="img"/>
        <h5>{{store.userlist.nickname}}</h5>
      </div>
      <!-- 分为三个模块 -->
      <div class="main">
        <el-card>
          <div class="box1">
            <h5>
              个人描述
            </h5>
            <h5>
              {{store.userlist.user_pic}}
            </h5>
          </div>
        </el-card>
        <el-card>
          <div class="box2">
            <h5>
              喜好
            </h5>
            <p>后即可观看吉萨恢复可见当时空间</p>
          </div>
        </el-card>
        <el-card>
          <div class="box3">
            <h5>
              联系方式
            </h5>
            <h5>{{store.userlist.email}}</h5>
          </div>
        </el-card>
      </div>
      <div class="folat">
      </div>
      <!-- 这里调用弹框发送修改后的表单数据 -->
      <el-dialog v-model="dialogVisible" title="修改个人信息" width="30%" draggable>
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
          class="demo-ruleForm">
          <el-form-item label="昵称" prop="nickname">
            <el-input v-model="ruleForm.nickname" />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" />
          </el-form-item>
          <el-form-item label="个人介绍" prop="user_pic">
            <el-input v-model="ruleForm.user_pic" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </span>
        </template>
      </el-dialog>
      <div class="button">
        <el-button type="primary" @click="xiu_gai(ruleFormRef)">修改</el-button>
      </div>
      <el-dialog v-model="dialogVisible2" title="修改密码" width="30%" draggable>
        <el-form ref="ruleFormRef2" :model="ruleForm2" status-icon :rules="rules2" label-width="120px"
          class="demo-ruleForm">
          <el-form-item label="旧密码" prop="oldpassword">
            <el-input type="password" v-model="ruleForm2.oldpassword" />
          </el-form-item>
          <el-form-item label="新密码" prop="newpassword">
            <el-input type="password" v-model="ruleForm2.newpassword" />
          </el-form-item>
          <el-form-item label="确定密码" prop="newpassword2">
            <el-input type="password" v-model="ruleForm2.newpassword2" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible2 = false">取消</el-button>
            <el-button type="primary" @click="submitForm2(ruleFormRef2)">确定修改</el-button>
            <el-button @click="resetForm2(ruleFormRef2)">重置</el-button>
          </span>
        </template>
      </el-dialog>
    </el-card>

  </div>
</template>

<script setup>
import { store } from '../../../store/index'
import api from '../../../api/index'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

import { reactive, ref } from 'vue'
const router = useRouter()


const dialogVisible = ref(false)
const dialogVisible2 = ref(false)

var validateEmail = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请正确填写邮箱'));
  } else {
    if (value !== '') {
      var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!reg.test(value)) {
        callback(new Error('请输入有效的邮箱'));
      }
    }
    callback();
  }
}

const validatepassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== ruleForm2.newpassword) {
    callback(new Error("两次密码不一致!"))
  } else {
    callback()
  }
}

const ruleFormRef = ref()
const ruleFormRef2 = ref()



const ruleForm2 = reactive({
  oldpassword: '',
  newpassword: '',
  newpassword2: '',
})
const ruleForm = reactive({
  nickname: '',
  email: '',
  user_pic: '',
})

const rules = reactive({
  nickname: [{ min: 1, max: 10, message: '长度在1到10之间', trigger: 'blur' }, { required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [{ validator: validateEmail, trigger: 'blur' }, { min: 1, message: '最少一个', trigger: 'blur' }, { required: true, message: '请输入邮箱', trigger: 'blur' }],
  user_pic: [{ min: 1, max: 1000, message: '长度在1到1000之间', trigger: 'blur' }, { required: true, message: '请输入', trigger: 'blur' }],
})

const rules2 = reactive({
  oldpassword: [{ min: 6, max: 12, message: '长度在6到12之间', trigger: 'blur' }, { required: true, message: '请输入密码', trigger: 'blur' }],
  newpassword: [{ min: 6, max: 12, message: '长度在6到12之间', trigger: 'blur' }, { min: 1, message: '最少一个', trigger: 'blur' }, { required: true, message: '请输入密码', trigger: 'blur' }],
  newpassword2: [{ validator: validatepassword, trigger: 'blur' }, { min: 6, max: 12, message: '长度在6到12之间', trigger: 'blur' }, { required: true, message: '请输入密码', trigger: 'blur' }],
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      // 更新用户请求
      api.user.updateuserinfo_api(ruleForm).then(res => {
        if (res.data.status === 0) {
          ElMessage.success(res.data.message)
          dialogVisible.value = false
          // 更新成功后立马获取最新数据，存入vuex后渲染
          api.user.userinfo_api().then(res => {
            if (res.data.status === 0) {
              store.userlist = res.data.data
            } else {
              // 如果身份过期，退回登录
              ElMessage.error(res.data.message)
              if (res.data.message === '身份认证失败！请重新登录') {
                router.push('login')
              }
            }
          }).catch(err => {
            ElMessage.error('服务器问题' + err)
          })
        } else {
          // 如果身份过期，退回登录
          ElMessage.error(res.data.message)
          router.push('login')
        }
      }).catch(err => {
        ElMessage.error('服务器问题' + err)
      })
    } else {
      ElMessage.error('验证未通过')
      return false
    }
  })
}

const submitForm2 = (formE2) => {
  if (!formE2) return
  formE2.validate((valid) => {
    if (valid) {
      // 修改用户密码
      api.user.updatepassword_api(ruleForm2).then(res => {
        if (res.data.status === 0) {
          ElMessage.success(res.data.message)
          dialogVisible2.value = false
          router.push('login')
        } else {
          // 如果身份过期，退回登录
          ElMessage.error(res.data.message)
          if (res.data.message === '身份认证失败！请重新登录') {
            router.push('login')
          }
        }
      }).catch(err => {
        ElMessage.error('服务器问题' + err)
      })
    } else {
      ElMessage.error('验证未通过')
      return false
    }
  })
}

// 重置按钮的函数，将表单中的数据清空，这里调用的是resetFields函数，前提是表单里必须有prop
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

// 重置按钮的函数，将表单中的数据清空，这里调用的是resetFields函数，前提是表单里必须有prop
const resetForm2 = (formE2) => {
  if (!formE2) return
  formE2.resetFields()
}


const xiu_gai = (formEl) => {
  dialogVisible.value = true
  if (!formEl) return
  formEl.resetFields()
}
const xiu_gao_mi_ma = (formE2) => {
  dialogVisible2.value = true
  if (!formE2) return
  formE2.resetFields()
}
</script>
  

<style scoped>
@media screen and (min-width: 720px) {
  .xiu_gao_mi_ma {
    float: right;
  }

  .header {
    width: 50px;
    text-align: center;
    margin: 0px auto;
  }

  .img {
    display: flex;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .mian {}

  .el-card {
    margin-top: 20px;
    width: 32%;
    float: left;
    margin-left: 1%;
  }

  .box1 {
    height: 400px;
  }

  .box2 {
    height: 300px;
  }

  .box3 {
    height: 200px;
  }

  .folat {
    clear: left;
  }

  .button {
    width: 60px;
    margin: 20px auto;
  }
}

@media screen and (max-width: 720px) {
  .xiu_gao_mi_ma {
    float: right;
  }

  .header {
    text-align: center;
    width: 50px;
    margin: 0px auto;
  }

  .img {
    display: flex;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 0px auto;
  }

  .el-card {
    width: 90%;
    margin: 20px auto;
  }

  .button {
    width: 60px;
    margin: 20px auto;
  }
}
</style>