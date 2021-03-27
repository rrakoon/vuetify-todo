<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-edit 
        v-if="dialogs.edit" 
        @close="dialogs.edit = false" 
        :task="task">
    </dialog-edit>
    <dialog-delete
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :task="task"
    >
    </dialog-delete>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data: () => ({
    dialogs: {
      edit: false,
      delete: false,
    },
    items: [
      {
        title: "수정",
        icon: "mdi-pencil-outline",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "마감일",
        icon: "mdi-calendar-month",
        click() {
          console.log("마감일");
        },
      },
      {
        title: "삭제",
        icon: "mdi-trash-can-outline",
        click() {
          this.dialogs.delete = true;
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
  components: {
    "dialog-delete": require("@/components/Todo/Dialogs/DialogDelete.vue")
      .default,
    "dialog-edit": require("@/components/Todo/Dialogs/DialogEdit.vue").default,
  },
};
</script>

<style>
</style>