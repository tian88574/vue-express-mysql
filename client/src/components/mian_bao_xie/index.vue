<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-for="(item, i) in data_array.breadArr"
        :key="i"
        :to="{ path: item.path }"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { watch,ref } from 'vue';
import { useRoute } from 'vue-router'

const route =useRoute()

const data_array=ref({
      breadArr: [
        // {path:"/",title:"首页"}
      ]
    })
    const getBreadCom = () => {
    let mached = route.matched.filter(item => item.meta.title)
    // 第一个路径如果不是首页，需要在匹配路径前面拼接一个首页
    const first = mached[0]
    if(first.path != "/zhuye") {
        mached = [{ path: '/zhuye',meta: {title: '首页'}}].concat(mached)
    }
    data_array.value.breadArr = mached
   }
   
    getBreadCom()
    // 监听路径的改变,如果发生变化了，执行方法
    watch(() =>route.path,() => getBreadCom())
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  height: 30px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 12px;
  color: #333;
  cursor: pointer;
}
</style>

