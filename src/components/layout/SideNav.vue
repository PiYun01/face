<template>
<div id="nav">
    <div id="sidebar-wrap">
        <h3 class="logo">{{isCollapse?'VUE':'AUTO VUE'}}</h3>
        <el-menu default-active="1-1" background-color="#324157" text-color="#ddd" @open="handleOpen" @close="hadnleClose" :collapse="isCollapse">
            <el-submenu index="1"> 
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航一</span>
                 </template> 
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-document"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
             <el-menu-item index="4">
                <i class="el-icon-location"></i>
                <span slot="title">关于作者</span>
            </el-menu-item>
        </el-menu>
    </div>
    <div class="toolbar">
        <el-container>
            <el-header>
               <el-menu mode="horizontal">
                   <el-menu-item index="1">
                     <i class="iconfont" :class="[isCollapse ? 'icon-zhankaicaidan' : 'icon-shouqicaidan']" ></i>
                   </el-menu-item>
                    <el-submenu index="2" class="header-user-logo">
                        <template slot="title">
                            <img src="../../assets/images/photo.png" style="width: 25px; height: 25px; display: inline-block; vertical-align: middle;">
                            <span> 蒙奇·D·路飞</span>
                        </template>
                        <el-menu-item index="2-1">个人中心</el-menu-item>
                        <el-menu-item index="2-2">设置</el-menu-item>
                        <el-menu-item index="2-3">退出登录</el-menu-item>
                    </el-submenu>              
                </el-menu>
            </el-header>

            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            isCollapse:false
        }
    },
    methods:{
        handleOpen(){

        },
        hadnleClose(){

        }
    }
    
}
</script>

<style scoped>
#sidebar-wrap {
  width: 160px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
}

#sidebar-wrap .logo {
  text-align: center;
  background: #324157;
  padding: 18px 0;
  margin: 0;
  color: #fff;
}
.el-menu {
  width: 100%;
  height: 100%;
}
/* 美化左侧导航的留白 */
.el-submenu .el-menu-item {
  padding: 0 20px;
  min-width: 160px;
  padding-left: 20px !important;
}

.toolbar {
  padding-left: 160px;
}
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.iconfont {
  font-size: 24px;
  width: 24px;
  text-align: center;
  vertical-align: middle;
  margin-right: 5px;
}
.header-user-logo {
  float: right;
}
</style>


