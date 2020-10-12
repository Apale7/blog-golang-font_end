<template>
  <v-app :style="{backgroundColor: this.$vuetify.theme.dark?'':'aliceblue'}">
    <header></header>
    <v-app-bar app :color="this.$vuetify.theme.dark?'': 'white'">
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

      <v-btn target="_self" text style="font-size: 22px" to="/create">写文章</v-btn>

      <v-btn target="_self" text style="font-size: 22px" to="/manage">管理</v-btn>
      <v-spacer></v-spacer>
      <v-text-field
          label="Search"
          placeholder="输入标题或作者"
          outlined
          height="50px"
          dense
          style="margin-top: 30px"
      ></v-text-field>
      <v-btn
          text
          height="52px"
          style="margin-top: 2px"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text fab small @click="themeHandler">
        <v-icon>{{this.$vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'}}</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <Login v-if="!this.$store.state.logged"></Login>
      <Mine v-else></Mine>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="main">
      <router-view :width="width"
                   :maxWidth="maxWidth"
                   :maxHeight="maxHeight"/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

// import router from "@/router";
import Login from "@/components/LoginButton";
import Mine from "@/components/Mine";

export default {
  name: "App",

  components: {
    Mine,
    // HelloWorld
    Login
  },

  data: () => ({
    maxWidth: window.screen.width,
    maxHeight: window.screen.height,
    width: document.body.clientWidth * 1920 / window.screen.width,
    // logged: false,
    // show: false
  }),
  methods: {
    login() {
      this.show = true;
    },
    themeHandler() {
      this.$vuetify.theme.dark ^= 1;
    }
  },
  computed: {
  },
  mounted() {
    const that = this;
    window.onresize = () => (() => {
      window.clientWidth = document.body.clientWidth;
      that.width = window.clientWidth * 1920 / this.maxWidth;
    })();
  },
  watch: {
    width() {
    },
  },
};
</script>

<style scoped>
.main {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 60px;
}
</style>
