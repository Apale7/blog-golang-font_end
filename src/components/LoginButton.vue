<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-if="!logged" v-bind="attrs" v-on="on">
        登 录
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="用户名" required v-model="username"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="密码"
                type="password"
                v-model="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">关闭</v-btn>
        <Register></Register>
        <v-btn color="blue darken-1" text @click="login">登录</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Register from "@/components/RegisterButton";
import store from "../store";
import axios from 'axios'
export default {
  name: "Login",
  data: () => ({
    dialog: false,
    logged: store.state.logged,
    username: "",
    password: ""
  }),
  mounted() {
    if (!this.$store.state.logged) {
      axios.get("/api/user/whoami").then(res => {
        if (res.data.code === 200) {
          this.dialog = false;
          this.$store.state.logged = true;
          sessionStorage.setItem("user", JSON.stringify(res.data.data));
          console.log(JSON.stringify(res.data.data));
        }
      });
    }
  },
  methods: {
    login() {
      let data = { username: this.username, password: this.password };
      axios.post(`/api/user/login`, data).then(res=>{
        if (res.data.code === 200) {
          this.dialog = false;
          this.$store.state.logged = true;
          sessionStorage.setItem("user", JSON.stringify(res.data.data));
          console.log(JSON.stringify(res.data.data));
        }
      })
      // this.dialog = false;
    }
  },
  components: {
    Register
  }
};
</script>

<style scoped></style>
