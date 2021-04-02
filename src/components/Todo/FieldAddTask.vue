<!-- vue default.vue-->
<template>
  <v-text-field
    v-model="newTaskTitle"
    @keyup.enter="addTask"
    class="field-add-task pa-3"
    outlined
    label="Add Task"
    hide-details
    clearable
  >
    <template v-slot:append>
      <v-fade-transition leave-absolute>
        <v-icon @click="addTask" color="white" :disabled="newTaskTitleInvalid">
          mdi-comment-plus
        </v-icon>
      </v-fade-transition>
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle;
    },
  },
  methods: {
    addTask() {
      if (!this.newTaskTitleInvalid) {
        this.$store.dispatch("addTask", this.newTaskTitle); //store action
        this.newTaskTitle = "";
      }
    },
  },
};
</script>
<style lang="sass">
.field-add-task.v-input--is-focused
  .v-input__slot
    background: #3d5e7b73 !important
</style>