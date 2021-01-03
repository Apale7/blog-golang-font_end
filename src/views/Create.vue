<template>
  <v-container id="container">
    <v-row
    >
      <v-text-field
          placeholder="输入标题"
          outlined
          height="50px"
          dense
          style="margin-top: 30px"
          v-model="title"
      ></v-text-field>
    </v-row>
    <v-row
    >
      <mavon-editor
          class="edit"
          v-model="value"
          fontSize="16px"
          @change="change"
          @save="save"
      />
    </v-row>
  </v-container>
</template>

<script>
import {mavonEditor} from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import Axios from "axios";

export default {
  name: "Create",
  data() {
    return {
      title: "这里是标题",
      value: ""
    };
  },
  components: {
    mavonEditor
  },
  methods: {
    change(value, render) {
      this.html = render;
      // console.log(this.value);
    },
    save() {
      Axios.post("/api/blog/create", {
        title: this.title,
        content: this.value
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
/* .preview {
  padding: 5px 5px 5px 5px;
  margin: 0 0 0 0;
  width: 50%;
  background-color: white;
  color: black;
} */

.edit {
  width: 100%;
  height: 900px;
  padding: 5px 5px 5px 5px;
  margin: 0 5px 0 0;
  background-color: white;
  z-index: 0;
}

#container {
  height: 700px;
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap; */
}
</style>
