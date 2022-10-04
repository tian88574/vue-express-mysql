<template>
  <div>
    <div class="header"><img src="../../../assets/R.jpg" alt="" class="img">
      <h5>{{store.userlist.nickname}}</h5>
    </div>
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
  </div>
</template>

<script setup>
import { store } from '../../../store/index'
</script>
  

<style scoped>
.header {
  text-align: center;
}

.img {
  display: flex;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 20px auto;
}
.mian{

}
.el-card{
  margin-top: 20px;
  width: 32%;
  float: left;
  margin-left: 1%;
}
.box1{
  height: 400px;
}
.box2{
  height: 300px;
}
.box3{
  height: 200px;
}
</style>