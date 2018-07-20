import Vue from "vue";
import Router from "vue-router";

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(["@/components/Login"], resolve);

// 非登录页的包裹组件
const Layout = resolve => require(["@/components/layout/Layout"], resolve);

//关于作者
const About = resolve => require(["@/components/About"], resolve);

Vue.use(Router);

export default new Router({
  routes: [
    // 首先是登录页的路由
    {
      path: "/login",
      name: "Login",
      meta: {
        requireAuth: false
      },
      component: Login
    },
    // 然后就是嵌套路由了，也就是登陆后的各个页面
    {
      path: "/",
      meta: {
        requireAuth: false
      },
      component: Layout,
      children: [
        {
          path: "about",
          meta: { requireAuth: true },
          component: About
        }
      ]
    },
    // 最后是404页面
    {
      path: "*",
      meta: { requireAuth: false },
      component: Login
    }
  ]
});
