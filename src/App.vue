<template>
  <v-app style="background-color: aliceblue">
    <header></header>
    <v-app-bar app color="blue" dark min>
      <div class="d-flex align-center justify-center">
        <!--        <v-img-->
        <!--          alt="Vuetify Logo"-->
        <!--          class="shrink mr-2"-->
        <!--          contain-->
        <!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
        <!--          transition="scale-transition"-->
        <!--          width="40"-->
        <!--        />-->
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn target="_self" text style="font-size: 22px" to="/">首页</v-btn>
      <v-btn target="_self" text style="font-size: 22px">写文章</v-btn>
      <v-btn target="_self" text style="font-size: 22px" to="/manage">管理</v-btn>
      <v-spacer></v-spacer>
      <v-text-field solo flat light style="margin-top: auto"></v-text-field>
      <v-spacer></v-spacer>
      <Login></Login>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

// import router from "@/router";
import Login from "@/components/Login";
export default {
  name: "App",

  components: {
    // HelloWorld
    Login
  },

  data: () => ({
    // logged: false,
    // show: false
  }),
  methods: {
    login() {
      this.show = true;
    }
  }
};
</script>
