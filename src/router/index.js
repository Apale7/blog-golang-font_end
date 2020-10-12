import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/UserHome")
  },
  {
    path: "/home",
    name: "Userhome",
    component: () => import("../views/UserHome")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/LoginButton")
  },
  {
    path: "/manage",
    name: "Manage",
    component: () => import("../views/Manage")
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/Create")
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
