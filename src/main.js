// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/fonts/iconfont.css";
// 在入口处引入模拟的假数据
import "@/mock";

// Vue 的全局配置
Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.use(ElementUI);

// 上线全局请求配置
const host1 = "http://119.28.5.126:80/";
const host2 = "https://elm.cangdu.org/";
axios.defaults.baseURL = host2;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 如果本地存储中有token字段， 就为所有请求加上Authorization请求头
    if (localStorage.token) {
      config.headers["Authorization"] = `Bearer ${localStorage.token}`;
    }
    return config;
  },
  error => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        // 如果后端返回没有权限
        case 401:
          // 清除token信息并跳转到登录页面
          localStorage.clear();
          router.replace("/signin");
      }
    }
    return Promise.reject(error.response.data); // 返回接口返回的错误信息
  }
);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
