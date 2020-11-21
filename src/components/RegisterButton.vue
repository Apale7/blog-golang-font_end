<template>
  <!--  <v-row justify="center" style="width: 100px">-->
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue darken-1" text v-bind="attrs" v-on="on">
        注册
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                  label="用户名*"
                  required
                  v-model="username"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  label="昵称(默认与用户名相同)"
                  required
                  v-model="nickname"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  label="密码*"
                  type="password"
                  required
                  v-model="password"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age"
                  required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                  :items="[
                  'Skiing',
                  'Ice hockey',
                  'Soccer',
                  'Basketball',
                  'Hockey',
                  'Reading',
                  'Writing',
                  'Coding',
                  'Basejump'
                ]"
                  label="Interests"
                  multiple
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*为必填项</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">关闭</v-btn>
        <v-btn color="blue darken-1" text @click="commit">提交</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!--  </v-row>-->
</template>

<script>
import axios from 'axios'

export default {
  name: "Register",
  data(){
    return {
      dialog: false,
      username: '',
      password: '',
      nickname: ''
    }
  },
  methods: {
    commit(){
      // console.log(this.username)
      let data = {
        username: this.username,
        password: this.password,
        nickname: this.nickname
      }
      // console.log(data)
      console.log(this.username)
      axios.post('/api/user/register', data).then(res => {
        console.log(res.data)
      })
      this.dialog = false
    }
  }
};
</script>

<style scoped></style>
