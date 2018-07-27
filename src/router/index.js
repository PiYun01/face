import Vue from "vue";
import Router from "vue-router";

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(["@/components/Login"], resolve);

// 非登录页的包裹组件
const Layout = resolve => require(["@/components/layout/Layout"], resolve);

//终端列表
const Device = resolve => require(["@/components/list/devList"], resolve);

//人脸库列表
const List = resolve => require(["@/components/list/index"], resolve);

//新建人脸库
const addFaceForm = resolve => require(["@/components/form/index"], resolve);

//关于作者
const About = resolve => require(["@/components/About"], resolve);

// 404
const Notfound = resolve => require(["@/components/notfound"], resolve);

Vue.use(Router);

export default new Router({
  routes: [
    // 首先是登录页的路由
    {
      path: "/",
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
      redirect: "/device_list",
      children: [
        {
          path: "device_list",
          meta: { requireAuth: true },
          component: Device
        },
        {
          path: "face_list",
          meta: { requireAuth: true },
          component: List
        },
        {
          path: "add_face",
          meta: { requireAuth: true },
          component: addFaceForm
        },
        {
          path: "about",
          meta: { requireAuth: true },
          component: About
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        requireAuth: false
      },
      component: Login
    },
    // 最后是404页面
    {
      path: "*",
      meta: { requireAuth: false },
      component: Notfound
    }
  ]
});
