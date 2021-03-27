<!-- vue default.vue-->
<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
    class="pa-3"
    outlined
    label="Add Task"
    append-icon="mdi-comment-plus"
    hide-details
    clearable
  >
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    addTask() {
      this.$store.dispatch("addTask", this.newTaskTitle); //store action
      this.newTaskTitle = "";
    },
  },
};
</script>
