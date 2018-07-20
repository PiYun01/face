<template>
<div class="bg">
  <div class="login-wrap">
    <h3>Auto View</h3>
    <h3>欢迎使用自动化装逼系统</h3>
    <el-form ref="form" :model="account" :rules="rules" label-width="0px">
        <el-form-item prop="name">
          <el-input :placeholder="用户名" v-model="account.name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input :placeholder="密码"  v-model="account.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row type="flex" justify="space-between">
              <el-checkbox v-model="isMemery" style="color:#eee">记住密码</el-checkbox>
              <a href="" @click.prevent="openMsg" style="color:#eee">忘记密码</a>
          </el-row>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="Login('form')">登录</el-button>
        </el-form-item>
    </el-form>
  </div>

</div>
   
</template>

<script>
export default {
    name:'Login',
    data () {
    return  {
        account: {
          name: '',
          pwd: ''
        },
        isMemery: false,
        rules: {
          name: [
            {
              required: true,
              message: '请输入账号',
              trigger: 'blur'
              // validator: checkone
            }
          ],
          password: [
            {
              required: true, 
              message: '请输入密码', 
              trigger: 'blur'
            }
          ]
        }
    };
  },
  methods:{
    openMsg(){
      this.$message.warning("密码是695109751！");
    },
    Login(form){
      this.$refs[form].validate(valid =>{
        if(valid){
          this.$message.success("登录成功");
        }else{
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.bg {
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../static/img/sky.jpg");
  background-position: -20% 10%;
  background-size: contain;
}
.login-wrap {
  width: 330px;
  border-radius: 5px;
  padding: 20px;
  z-index: 3;
  margin-right: -37%;
  background: rgba(216, 220, 229, 0.5);
}
.el-form-item {
  margin-bottom: 25px !important;
}
h3 {
  text-align: center;
  margin-top: 0px;
  margin-bottom: 20px;
}
a {
  text-decoration: none;
  color: #1f2d3d;
}
button {
  width: 100%;
  font-weight: 600;
}
</style>


