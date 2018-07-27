<template>
<div class="sidebar-wrap">
    <el-container style="height:100vh;">
        <el-menu class="el-menu-vertical" background-color="#324157" text-color="#ddd" default-active="device_list"
                @open="handleOpen" @close="hadnleClose" :collapse="isCollapse" :unique-opened="isUnique" :router="isRouter">
            <div><h3 class="logo">{{isCollapse?'VUE':'AUTO VUE'}}</h3></div>    
            <el-menu-item index="device_list">
                <i class="el-icon-menu"></i>
                <span slot="title">终端管理</span>
            </el-menu-item>
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

        <el-container >
             <el-header>
               <el-menu mode="horizontal">
                   <el-menu-item index="1" style="border:none" @click="handleNav">
                     <i class="iconfont" :class="[isCollapse ? 'icon-zhankaicaidan' : 'icon-shouqicaidan']" ></i>
                   </el-menu-item>
                
                    <el-submenu index="2" class="header-user-logo">
                        <template slot="title">
                            <img src="../../assets/images/photo.png" style="width: 25px; height: 25px; display: inline-block; vertical-align: middle;">
                            <span>{{username}}</span>
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
    </el-container>
</div>
</template>

<script>
export default {
    data(){
        return{
            isUnique:true,
            isRouter:true,
            isCollapse:false,
            username:localStorage.userName || '蒙奇·D·路飞'
        }
    },
    computed:{
        defaultActive: function(){
			return this.$route.path.replace('/', 'device_list');
		}
    },
    methods:{
        handleOpen(key, keyPath){
            console.log(key, keyPath);
        },
        hadnleClose(key, keyPath){
            console.log(key, keyPath);
        },
        handleNav(){
           this.isCollapse=!this.isCollapse;
           console.log(this.isCollapse); 
        }
    }
}
</script>

<style scoped>
.sidebar-wrap {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
}
.el-menu-vertical .logo {
  text-align: center;
  padding: 18px 0;
  margin: 0;
  color: #fff;
  white-space: nowrap;
}

/* 美化左侧导航的留白 */
.el-submenu .el-menu-item {
  padding: 0 20px;
  min-width: 160px;
  padding-left: 20px !important;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 160px;
  min-height: 400px;
}
.toolbar {
  padding-left: 160px;
}
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  padding-left: 0;
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


