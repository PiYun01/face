<template>
<div class="school-edit">
  <div class="breadcrumb-div" style="">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/device_list' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>列表表单</el-breadcrumb-item>
      <el-breadcrumb-item>基础表单</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
   
  <div style="background: #fff; padding: 24px 32px;">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px" style="width: 480px;">
          <el-form-item label="人脸库名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="人脸库类型" prop="type">
            <el-select v-model="form.type" placeholder="请选择库类型">
              <el-option label="VIP" value="1"></el-option>
              <el-option label="员工" value="2"></el-option>
              <el-option label="黑名单" value="3"></el-option>
              <el-option label="其他  " value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="库描述">
            <el-input type="textarea" :autosize="{minRows: 10,maxRows:10}" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
      </el-form>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        type: '',
        desc: ''
      },
      rules:{
        name:[
          { required: true, message: '请输入人脸库名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        type:[
            { required: true, message: '请选择库类型', trigger: 'change' }
        ],
      }
    };
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
      });
    }
  }
}
</script>
<style>
.school-edit .el-select .el-input {
  width: 380px !important;
}
.ql-editor {
  height: 400px !important;
}
</style>

<style scoped>
.el-checkbox-group .el-checkbox {
  float: left;
  width: 160px;
  padding-right: 20px;
  margin: 0;
  padding: 0;
}
</style>
