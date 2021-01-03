<template>
  <v-data-table
      :headers="headers"
      :items="blogs"
      :sort-by="['created_at']"
      :sort-desc="[true]"
      class="elevation-1"
      style="max-width: 1200px; margin: 0 auto"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>管理博客</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
            >Are you sure you want to delete this item?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
              >Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
              >OK
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import Axios from "axios";

export default {
  name: "Manage",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Title",
        align: "start",
        sortable: false,
        value: "title"
      },
      {text: "Created at", value: "created_at", sortable: false},
      {text: "Actions", value: "actions", sortable: false}
    ],
    blogs: [],
    editedIndex: -1,
    defaultItem: {
      title: "",
      created_at: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  created() {
    this.initialize();
  },
  mounted() {
    let user = JSON.parse(sessionStorage.getItem("user"));

    console.log(user);
    Axios.get("/api/blog/list", {
      params: {
        userid: user.id
      }
    }).then(res => {
      this.blogs = res.data.data.blogs;
      for (let i = 0; i < this.blogs.length; ++i) {
        this.blogs[i].created_at = new Date(
            this.blogs[i].created_at * 1000
        ).toLocaleString();
      }
    });
  },
  methods: {
    toTime(n) {
      var offset_GMT = new Date().getTimezoneOffset();
      const t = new Date(
          n * 1000 + offset_GMT * 60 * 1000 + 8 * 60 * 60 * 1000
      );
      return t.toLocaleString();
    },
    initialize() {
      this.blogs = [];
      for (let blog of this.blogs) {
        blog["date"] = this.toTime(blog["created_at"]);
      }
    },

    editItem() {
      this.$router.push("/");
    },

    deleteItem(item) {
      this.editedIndex = this.blogs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      console.log(this.editedItem);
      Axios.post("/api/blog/delete", this.editedItem).then(res => {
        console.log(res)
      })
      this.blogs.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.blogs[this.editedIndex], this.editedItem);
      } else {
        this.blogs.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style scoped></style>
