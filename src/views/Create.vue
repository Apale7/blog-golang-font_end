<template>
  <v-container id="container">
    <mavon-editor
        class="edit"
        v-model="value"
        fontSize="16px"
        @change="change"
    />
  </v-container>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: "Create",
  data() {
    return {
      value: ''
    }
  },
  components: {
    mavonEditor,
  },
  methods: {
    change(value, render){
      this.html = render;
    },
  },
  mounted() {

  }
}
</script>

<style scoped>
.preview {
  padding: 5px 5px 5px 5px;
  margin: 0 0 0 0;
  width: 50%;
  /*height: 800px;*/
  background-color: white;
  color: black;
}

.edit {
  width: 100%;
  /*height: 900px;*/
  padding: 5px 5px 5px 5px;
  margin: 0 5px 0 0;
  background-color: white;
  z-index: 0;
}

#container {
  height: 700px;
  display: flex;
  flex-direction: row;
}
</style>
