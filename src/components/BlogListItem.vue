<template>
  <v-container>
    <h2>{{ blog.title }}</h2>
    <!--    <p v-html="blog.content.substring(0, 100)+'...'"></p>-->
    <v-list-item-content style="color: darkgray" v-html="blog.content.substring(0, 100)+'...'"></v-list-item-content>
    <v-row>
      <v-col><small>{{ toTime(blog.created_at) }}</small></v-col>
      <v-col cols="5"><small>阅读量: 100w</small></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BlogListItem",
  props: ['blog'],
  data() {
    return {}
  },
  methods: {
    toTime(n) {
      var offset_GMT = new Date().getTimezoneOffset();
      const t = new Date(
          n * 1000 + offset_GMT * 60 * 1000 + 8 * 60 * 60 * 1000
      );
      return t.toLocaleString();
    },
  },
  mounted() {

  },
}
</script>

<style scoped>
p {
  word-wrap: break-word;
  word-break: break-all;
  color: darkgray;
}

small {
  color: darkgray;
}

</style>