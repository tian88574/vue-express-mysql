<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-container class="layout-container-demo">
    <el-header style="text-align: right; font-size: 12px">
      <div class="logo">
        <img src="../../assets/人文文字logo.png" alt="" style="width:250px;height:65px">
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

        <span>{{data.list.nickname}}</span>
      </div>
    </el-header>
    <el-container class="layout-container-demo1">
      <el-aside width="200px">
        <el-menu router>
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <IconMenu />
              </el-icon>首页
            </template>
            <el-menu-item index="home">首页</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <message />
              </el-icon>用户管理
            </template>
            <el-menu-item index="2-1">学生管理</el-menu-item>
            <el-menu-item index="2-2">教师管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <IconMenu />
              </el-icon>个人信息
            </template>
            <el-menu-item index="user">个人信息</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { onMounted, reactive } from 'vue'
import api from '../../api/index'
import { ElMessage } from 'element-plus'
import { store  } from '../../store/index'
const router = useRouter()
const data = reactive({
  list: {}
})

onMounted(() => {
  api.user.userinfo_api().then(res => {
    if (res.data.status === 0) {
      ElMessage.success(res.data.message)
      data.list = res.data.data
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
</style>

