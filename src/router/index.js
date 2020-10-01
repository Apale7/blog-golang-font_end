import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/UserHome")
  },
  {
    path: "/home",
    name: "Userhome",
    component: () => import("../components/UserHome")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login")
  },
  {
    path: "/manage",
    name: "Manage",
    component: () => import("../components/Manage")
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
