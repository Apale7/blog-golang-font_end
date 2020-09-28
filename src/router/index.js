import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/Login";
import UserHome from "@/components/UserHome";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: UserHome
  },
  {
    path: "/home",
    name: "Userhome",
    component: UserHome
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
