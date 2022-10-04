<template>
  <div class="body">
    <div class="header">
      <span class="header_h1">注册账号</span>
    </div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <div class="footer">
      <el-button type="primary" @click="submitForm">注册</el-button>
      <el-button type="primary" @click="deng_lu">返回登录</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import api from '../../api/index'

const formJson = reactive({ "widgetList": [{ "key": 99415, "type": "grid", "category": "container", "icon": "grid", "cols": [{ "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol70402", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 8, "sm": 8, "xs": 12, "customClass": [] }, "id": "grid-col-70402" }, { "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [{ "key": 27312, "type": "input", "icon": "text-field", "formItemFlag": true, "options": { "name": "username", "label": "用户名", "labelAlign": "label-center-align", "type": "text", "defaultValue": "", "placeholder": "请输入用户名", "columnWidth": "200px", "size": "", "labelWidth": null, "labelHidden": false, "readonly": false, "disabled": false, "hidden": false, "clearable": true, "showPassword": false, "required": true, "requiredHint": "", "validation": "", "validationHint": "", "customClass": [], "labelIconClass": null, "labelIconPosition": "rear", "labelTooltip": null, "minLength": 1, "maxLength": 10, "showWordLimit": true, "prefixIcon": "", "suffixIcon": "", "appendButton": false, "appendButtonDisabled": false, "buttonIcon": "custom-search", "onCreated": "", "onMounted": "", "onInput": "", "onChange": "", "onFocus": "", "onBlur": "", "onValidate": "" }, "id": "input59879" }], "options": { "name": "gridCol46291", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": true, "md": 8, "sm": 12, "xs": 24, "customClass": "" }, "id": "grid-col-46291" }, { "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol101821", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 8, "sm": 8, "xs": 24, "customClass": "" }, "id": "grid-col-101821" }], "options": { "name": "grid19769", "hidden": false, "gutter": 12, "colHeight": null, "customClass": [] }, "id": "grid19769" }, { "key": 99415, "type": "grid", "category": "container", "icon": "grid", "cols": [{ "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol23279", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 12, "sm": 12, "xs": 12, "customClass": [] }, "id": "grid-col-23279" }, { "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [{ "key": 27312, "type": "input", "icon": "text-field", "formItemFlag": true, "options": { "name": "password", "label": "密码", "labelAlign": "label-center-align", "type": "password", "defaultValue": "", "placeholder": "请输入密码", "columnWidth": "200px", "size": "", "labelWidth": null, "labelHidden": false, "readonly": false, "disabled": false, "hidden": false, "clearable": true, "showPassword": true, "required": true, "requiredHint": "", "validation": "noChinese", "validationHint": "", "customClass": [], "labelIconClass": null, "labelIconPosition": "rear", "labelTooltip": null, "minLength": 6, "maxLength": 12, "showWordLimit": true, "prefixIcon": "", "suffixIcon": "", "appendButton": false, "appendButtonDisabled": false, "buttonIcon": "custom-search", "onCreated": "", "onMounted": "", "onInput": "", "onChange": "", "onFocus": "", "onBlur": "", "onValidate": "" }, "id": "input43992" }], "options": { "name": "gridCol93132", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": true, "md": 8, "sm": 12, "xs": 24, "customClass": [] }, "id": "grid-col-93132" }, { "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol85278", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 12, "sm": 12, "xs": 12, "customClass": "" }, "id": "grid-col-85278" }], "options": { "name": "grid58883", "hidden": false, "gutter": 12, "colHeight": null, "customClass": "" }, "id": "grid58883" }, { "type": "grid", "category": "container", "icon": "grid", "cols": [{ "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol96383", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 12, "sm": 12, "xs": 12, "customClass": "" }, "id": "grid-col-96383" }, { "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [{ "key": 14309, "type": "input", "icon": "text-field", "formItemFlag": true, "options": { "name": "nickname", "label": "昵称", "labelAlign": "label-center-align", "type": "text", "defaultValue": "", "placeholder": "昵称", "columnWidth": "200px", "size": "", "labelWidth": null, "labelHidden": false, "readonly": false, "disabled": false, "hidden": false, "clearable": true, "showPassword": false, "required": false, "requiredHint": "", "validation": "", "validationHint": "", "customClass": [], "labelIconClass": null, "labelIconPosition": "rear", "labelTooltip": null, "minLength": 1, "maxLength": 10, "showWordLimit": true, "prefixIcon": "", "suffixIcon": "", "appendButton": false, "appendButtonDisabled": false, "buttonIcon": "custom-search", "onCreated": "", "onMounted": "", "onInput": "", "onChange": "", "onFocus": "", "onBlur": "", "onValidate": "" }, "id": "input42344" }], "options": { "name": "gridCol51979", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": true, "md": 8, "sm": 12, "xs": 24, "customClass": "" }, "id": "grid-col-51979" }, { "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol95037", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 12, "sm": 12, "xs": 12, "customClass": "" }, "id": "grid-col-95037" }], "options": { "name": "grid89620", "hidden": false, "gutter": 12, "colHeight": null, "customClass": "" }, "id": "grid89620" }, { "type": "grid", "category": "container", "icon": "grid", "cols": [{ "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol41038", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 12, "sm": 12, "xs": 12, "customClass": "" }, "id": "grid-col-41038" }, { "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [{ "key": 14309, "type": "input", "icon": "text-field", "formItemFlag": true, "options": { "name": "email", "label": "邮箱", "labelAlign": "label-center-align", "type": "text", "defaultValue": "", "placeholder": "邮箱", "columnWidth": "200px", "size": "", "labelWidth": null, "labelHidden": false, "readonly": false, "disabled": false, "hidden": false, "clearable": true, "showPassword": false, "required": false, "requiredHint": "", "validation": "email", "validationHint": "", "customClass": "", "labelIconClass": null, "labelIconPosition": "rear", "labelTooltip": null, "minLength": null, "maxLength": null, "showWordLimit": false, "prefixIcon": "", "suffixIcon": "", "appendButton": false, "appendButtonDisabled": false, "buttonIcon": "custom-search", "onCreated": "", "onMounted": "", "onInput": "", "onChange": "", "onFocus": "", "onBlur": "", "onValidate": "" }, "id": "input111171" }], "options": { "name": "gridCol2701", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": true, "md": 8, "sm": 12, "xs": 24, "customClass": "" }, "id": "grid-col-2701" }, { "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol17087", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 12, "sm": 12, "xs": 12, "customClass": "" }, "id": "grid-col-17087" }], "options": { "name": "grid85392", "hidden": false, "gutter": 12, "colHeight": null, "customClass": "" }, "id": "grid85392" }, { "type": "grid", "category": "container", "icon": "grid", "cols": [{ "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol40995", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 12, "sm": 12, "xs": 12, "customClass": "" }, "id": "grid-col-40995" }, { "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [{ "key": 16058, "type": "textarea", "icon": "textarea-field", "formItemFlag": true, "options": { "name": "user_pic", "label": "描述", "labelAlign": "label-center-align", "rows": 3, "defaultValue": "", "placeholder": "描述", "columnWidth": "200px", "size": "", "labelWidth": null, "labelHidden": false, "readonly": false, "disabled": false, "hidden": false, "required": false, "requiredHint": "", "validation": "chinese", "validationHint": "", "customClass": [], "labelIconClass": null, "labelIconPosition": "rear", "labelTooltip": null, "minLength": 1, "maxLength": 1000, "showWordLimit": true, "onCreated": "", "onMounted": "", "onInput": "", "onChange": "", "onFocus": "", "onBlur": "", "onValidate": "" }, "id": "textarea59968" }], "options": { "name": "gridCol70981", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": true, "md": 8, "sm": 12, "xs": 24, "customClass": [] }, "id": "grid-col-70981" }, { "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol109635", "hidden": false, "span": 8, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 12, "sm": 12, "xs": 12, "customClass": "" }, "id": "grid-col-109635" }], "options": { "name": "grid32459", "hidden": false, "gutter": 12, "colHeight": null, "customClass": "" }, "id": "grid32459" }], "formConfig": { "modelName": "formData", "refName": "vForm", "rulesName": "rules", "labelWidth": 80, "labelPosition": "left", "size": "", "labelAlign": "label-left-align", "cssCode": "", "customClass": [], "functions": "", "layoutType": "H5", "jsonVersion": 3, "onFormCreated": "", "onFormMounted": "", "onFormDataChange": "", "onFormValidate": "" } })
const formData = reactive({})
const optionData = reactive({})
const vFormRef = ref(null)
const router = useRouter()

const submitForm = () => {
  vFormRef.value.getFormData().then(formData => {
    // Form Validation OK
    api.login.reguser_api(formData).then((res) => {
      if (res.data.status === 0) {
        ElMessage.success(res.data.message)
        router.push('login')
      } else {
        ElMessage.error(res.data.message)
      }
    }).catch(err => {
      ElMessage.error('服务器问题' + err)
    })
  }).catch(error => {
    // Form Validation failed
    ElMessage.error(error)
  })
}
const deng_lu = () => {
  router.push('login')
}
</script>
<style scoped>
.body {
  margin-top: 10%;
  background: url('../../assets/R.jpg') no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}


.header {
  margin-top: 0px;
  text-align: center;
  margin-bottom: 20px;
}

.header_h1 {
  font-family: '方正舒体', 'Courier New', Courier, monospace;
  color: #606266;
  font-size: 25px;
}

.footer {
  width: 160px;
  margin: 20px auto;
}
</style>