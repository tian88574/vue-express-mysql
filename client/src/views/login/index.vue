<template>
  <div>
    <div class="header">
      <h1>我的测试系统</h1>
    </div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <div class="footer">
      <el-button type="primary" @click="submitForm">登录</el-button>
      <el-button type="primary" @click="zhuce">注册</el-button>
      <el-button type="warning " @click="chonzhi">重置</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import api from '../../api/index'
import { useRouter } from 'vue-router'


const formJson = reactive({"widgetList":[{"key":99415,"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[],"options":{"name":"gridCol70402","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":8,"sm":8,"xs":12,"customClass":[]},"id":"grid-col-70402"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":27312,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"username","label":"用户名","labelAlign":"label-center-align","type":"text","defaultValue":"","placeholder":"请输入用户名","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":1,"maxLength":10,"showWordLimit":true,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input59879"}],"options":{"name":"gridCol46291","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":true,"md":8,"sm":12,"xs":24,"customClass":""},"id":"grid-col-46291"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[],"options":{"name":"gridCol101821","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":8,"sm":8,"xs":24,"customClass":""},"id":"grid-col-101821"}],"options":{"name":"grid19769","hidden":false,"gutter":12,"colHeight":null,"customClass":[]},"id":"grid19769"},{"key":99415,"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[],"options":{"name":"gridCol23279","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":[]},"id":"grid-col-23279"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":27312,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"password","label":"密码","labelAlign":"label-center-align","type":"password","defaultValue":"","placeholder":"请输入密码","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":true,"required":true,"requiredHint":"","validation":"noChinese","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":6,"maxLength":12,"showWordLimit":true,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input43992"}],"options":{"name":"gridCol93132","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":true,"md":8,"sm":12,"xs":24,"customClass":[]},"id":"grid-col-93132"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[],"options":{"name":"gridCol85278","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-85278"}],"options":{"name":"grid58883","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid58883"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":"","onFormValidate":""}})
const formData = reactive({})
const optionData = reactive({})
const vFormRef = ref(null)
const router = useRouter()

const submitForm = () => {
  vFormRef.value.getFormData().then(formData => {
    // Form Validation OK
    api.login.login_api(formData).then((res) => {
      if (res.data.status === 0) {
        ElMessage.success(res.data.message)
        const token = res.data.token
        sessionStorage.setItem('token', token)
        router.push('zhuye')
      }else{
        ElMessage.error(res.data.message)
      }
    }).catch(err => {
      ElMessage.error('服务器问题'+err)
    })
  }).catch(error => {
    // Form Validation failed
    ElMessage.error(error)
  })
}
const zhuce = () => {
  router.push('regUser')
}
const chonzhi = () => {
  vFormRef.value.onFormValidate()
}
</script>
<style scoped>
.header {
  margin-top: 10%;
  text-align: center;
  margin-bottom: 20px;
}

.footer {
  width: 300px;
  margin: 20px auto;
}
</style>