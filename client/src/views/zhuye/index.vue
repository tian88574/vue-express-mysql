<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-container class="layout-container-demo">
    <el-header style="text-align: right; font-size: 12px">
      <div class="logo">
        <img src="../../assets/老婆.jpg" alt="" style="width:40px;height:40px;border-radius: 50%;margin-top: 9px;">
        <span>小野猫</span>
      </div>
      <div class="toolbar">
        <el-dropdown>
          <el-icon style="margin-right: 8px; margin-top: 1px">
            <setting />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>
                <el-button type="primary" @click="tui_chu">退出登录</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <span>{{store.userlist.nickname}}</span>
      </div>
    </el-header>
    <el-container class="layout-container-demo1">
      <el-aside :width="iscollapse?'60px':'200px'">
        <div class="toggle" @click="toggle">
          |||
        </div>
        <el-menu router unique-opened :collapse="iscollapse" :collapse-transition="false">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <IconMenu />
              </el-icon><span>首页</span>
            </template>
            <el-menu-item index="home">首页</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <message />
              </el-icon><span>用户管理</span>
            </template>
            <el-menu-item index="2-1">学生管理</el-menu-item>
            <el-menu-item index="2-2">教师管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <IconMenu />
              </el-icon><span>个人信息</span>
            </template>
            <el-menu-item index="user">个人信息</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <el-main>
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>首页</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import api from '../../api/index'
import { ElMessage } from 'element-plus'
import { store } from '../../store/index'
const router = useRouter()

const iscollapse = ref(false)

onMounted(() => {
  api.user.userinfo_api().then(res => {
    if (res.data.status === 0) {
      ElMessage.success(res.data.message)
      store.userlist = res.data.data
    } else {
      ElMessage.error(res.data.message)
      router.push('login')
    }
  }).catch(err => {
    ElMessage.error('服务器问题' + err)
  })
})


const tui_chu = () => {
  sessionStorage.clear()
  router.push('login')
}

const toggle = () => {
  iscollapse.value = !iscollapse.value
}

</script>

<style scoped>
.layout-container-demo1 {
  height: 100%;
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  background: #f7f7f7;
  border-right: none;
}

.layout-container-demo .el-menu .el-menu-item {
  background: #8b88860d;
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.logo {
  float: left;
}

.logo span {
  float: right;
  font-size: 30px;
  margin-top: 7px;
  margin-left: 10px;
}

.toggle {
  background-color: #d9ecff;
  font-size: 10px;
  line-height: 24px;
  color: #000;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>

