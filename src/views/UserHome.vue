<template>
  <div
      style="
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
    "
  >
    <Aside :user-info="{ name: '' }" v-if="width > 0.7 * maxWidth"></Aside>
    <v-list
        flat
        three-line
        :style="{
        padding: '0 0 0 0',
        width:
          maxWidth > maxHeight ? 0.5 * maxWidth + 'px' : 0.9 * maxWidth + 'px',
      }"
    >
      <v-list-item-group color="blue">
        <v-list-item
            to="/"
            v-for="(item, i) in items"
            :key="i"
            style="display: -webkit-box; -webkit-box-orient: vertical"
            @click="clickHandler(item)"
        >
          <BlogListItem
              :blog="item"
              :width="width"
              :maxWidth="maxWidth"
              :maxHeight="maxHeight"
          >
          </BlogListItem>
          <v-divider class="mx-0" v-if="i !== items.length - 1"></v-divider>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import BlogListItem from "@/components/BlogListItem";
import Aside from "@/components/Aside";
import Axios from "axios";

export default {
  name: "UserHome",
  data: function () {
    return {
      items: [
      ]
    };
  },
  props: ["width", "maxWidth", "maxHeight"],
  components: {
    Aside,
    BlogListItem
  },
  methods: {
    clickHandler(blog) {
      this.$router.push({
        name: "Content",
        params: blog
      });
    }
  },
  mounted() {
    Axios.get("/api/blog/list", {
          params: {
            // userid: JSON.parse(sessionStorage.getItem("user"))["id"]
          }
        }
    ).then(res => {
      this.items = res.data.data.blogs;
      console.log(res.data.data)
    });
  }
};
</script>

<style scoped>
</style>
