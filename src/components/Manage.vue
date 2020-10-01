<template>
  <v-data-table
      :headers="headers"
      :items="blogs"
      :sort-by="['created_at']"
      :sort-desc="[true]"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My CRUD</v-toolbar-title>
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
            </v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
              >Cancel
              </v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
              >OK
              </v-btn
              >
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
      {text: "Created at", value: "date"},
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

  methods: {
    toTime(n) {
      var offset_GMT = new Date().getTimezoneOffset();
      const t = new Date(
          n * 1000 + offset_GMT * 60 * 1000 + 8 * 60 * 60 * 1000
      );
      return t.toLocaleString();
    },
    initialize() {
      this.blogs = [
        {
          title: "Frozen Yogurt",
          created_at: 1601569000
        },
        {
          title: "Ice cream sandwich",
          created_at: 1600000084
        },
        {
          title: "Eclair",
          created_at: 1601560004
        },
        {
          title: "Cupcake",
          created_at: 1600069284
        },
        {
          title: "Gingerbread",
          created_at: 1601500284
        },
        {
          title: "Jelly bean",
          created_at: 1500569284
        },
        {
          title: "Lollipop",
          created_at: 1601569284
        },
        {
          title: "Honeycomb",
          created_at: 1601569285
        },
        {
          title: "Donut",
          created_at: 1601558684
        },
        {
          title: "KitKat",
          created_at: 1601569284
        }
      ];
      for (let blog of this.blogs) {
        blog['date'] = this.toTime(blog['created_at'])
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
