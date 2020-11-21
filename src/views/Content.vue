<template>
  <v-container>
    <div style="margin: 0 auto">
      <h1>{{ blog.title }}</h1>
      <v-row
          style="margin: 0 0 0 5px;padding: 0 0 0 0">
        <v-col cols="1" style="padding: 0 0 0 0">
          <router-link to="" style="
  text-decoration: none;">apale
          </router-link>
        </v-col>
        <v-col cols="4" style="padding: 0 0 0 0"><small>创建于: {{ new Date(blog.created_at * 1000).toLocaleString() }}</small>
        </v-col>
        <v-col cols="2" style="padding: 0 0 0 0">
          <small>
            阅读量: {{blog.read_cnt}}
          </small>
        </v-col>
      </v-row>
      <mavon-editor
          :toolbarsFlag="false"
          :subfield="false"
          defaultOpen="preview"
          :value="blog.content"
          :class="[this.$vuetify.theme.dark? 'contentDark':'contentLight']"
          :previewBackground="this.$vuetify.theme.dark ? '#000000': '#ffffff'"
          :style="{}"
      />
    </div>
  </v-container>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: "Content",
  props: ['width', 'maxWidth', 'maxHeight'],
  components: {
    mavonEditor,
  },
  data() {
    return {
      blog: {
        id: -1,
        title: '',
        created_at: 0,
        content: '',
        user_id: -1
      }
    }
  },
  mounted() {
    let blog = this.$route.params
    if (!blog.id) {
      blog.id = JSON.parse(sessionStorage.getItem('id'))
    }
    console.log(blog.id)
    if (!blog.id) {
      //goto 404
    }
    if (!blog.content) {
      //没内容，发ajax请求获取
    }
    this.blog = blog
    sessionStorage.setItem('id', blog.id)
  }
}
</script>

<style scoped>
.contentLight {
  min-height: 700px;
  z-index: 0;
  color: black;
}

.contentDark {
  min-height: 700px;
  z-index: 0;
  color: white;
}
</style>
