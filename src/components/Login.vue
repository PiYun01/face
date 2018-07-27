<template>
<div class="bg">
  <div class="login-wrap">
    <h3>Auto View</h3>
    <h3>欢迎使用自动化装逼系统</h3>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="0px">
        <el-form-item prop="name">
          <el-input placeholder="请输入账号" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input placeholder="请输入密码"  v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row type="flex" justify="space-between">
              <el-checkbox v-model="isMemery" style="color:#eee">记住密码</el-checkbox>
              <a href="" @click.prevent="openMsg" style="color:#eee">忘记密码</a>
          </el-row>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="Login('ruleForm')">登录</el-button>
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
        ruleForm: {
          name: localStorage.userInfo,
          password: localStorage.passwordInfo
        },
        isMemery: localStorage.userInfo ? true : false,
        rules: {
          name: [
            {
              required: true,
              message: '请输入账号',
              trigger: 'blur'
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
      var self=this;
      this.$refs[form].validate(valid =>{
        if(valid){
         this.$axios({
            url: "admin/login",
            method: "POST",
            data: {
              user_name: this.ruleForm.name,
              password: this.ruleForm.password
            }
         }).then(res =>{
            if(res.data.status == 1){
              localStorage.userName = this.ruleForm.name;
              this.$message({
                message: '登录成功！',
                type: 'success',
                duration: 500,
                onClose: function () {
                self.$router.push('device_list');
                }
              })
            }else{
              this.$message({
                  type: 'error',
                  message: res.data.message
              });
            }
          })
        }else{
          console.log('error submit!!')
          return false
        }
      });
    }
  },  
  watch: {
    isMemery(n, o) {
      if (n) {
        localStorage.userInfo = this.ruleForm.name;
        localStorage.passwordInfo = this.ruleForm.password;
      } else {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("passwordInfo");
      }
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


