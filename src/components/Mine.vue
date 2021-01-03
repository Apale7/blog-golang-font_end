<template>
  <div class="text-center">
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            v-bind="attrs"
            v-on="on"
            text
        >
        {{user.username}}
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
        >
          <v-list-item-title><v-btn @click="click(item)">{{ item.title }}</v-btn></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: "Mine",
  data: () => ({
    user: {},
    items: [
      { title: "Logout" }
      // { title: 'Click Me' },
      // { title: 'Click Me' },
      // { title: 'Click Me 2' },
    ]
  }),
  mounted() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
  },
  methods: {
    click(item) {
      if (item.title === 'Logout') {
        Axios.post('/api/user/logout').then(res=>{
          if (res.code===200) {
            this.dialog = true;
            this.$store.state.logged = false;
            sessionStorage.clear();
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
