<template>
  <v-container class="asideContainer">
    <v-container :class="{'topDark': this.$vuetify.theme.dark, 'topLight': !this.$vuetify.theme.dark}">
      <v-row>
        <v-col cols="4">
          <v-avatar size="62" color="primary">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
        </v-col>
        <v-col cols="2">{{ userInfo.name }}</v-col>
      </v-row>
    </v-container>
    <v-container :class="{'othersDark': this.$vuetify.theme.dark, 'othersLight': !this.$vuetify.theme.dark}">
      <h2>广告位</h2>
    </v-container>

  </v-container>
</template>

<script>
export default {
  name: "Aside",
  props: {
    userInfo: {
      name: String
    }
  }
}
</script>

<style scoped>
.asideContainer {
  margin: 0 10px 0 0;
  padding: 0 0 0 0;
  width: 250px;
  /*background-color: #fff;*/
}

.topLight {
  background-color: #fff;
}

.topDark {
  background-color: #1e1e1e;
}

.othersLight{
  margin-top: 10px;
  text-align: center;
  height: 300px;
  background-color: #fff;
}
.othersDark {
  margin-top: 10px;
  text-align: center;
  height: 300px;
  background-color: #1e1e1e;
}
</style>
