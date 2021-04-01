<template>
  <v-list class="pt-0" flat>
    <draggable 
    v-model="tasks"
     handle=".handle"
     >
      <transition-group type="transition" name="flip-list">
        <task
          v-for="task in tasks"
          :key="task.id"
          :task="task"
        >
        </task>
      </transition-group>
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
export default {
  computed:{
     tasks: {
        get() {
            return this.$store.getters.tasksFiltered
        },
        set(value) {
            this.$store.commit('setTasks', value)
        }
    }
  },
  components: {
    task: require("@/components/Todo/Task.vue").default,
    draggable,
  },
};
</script>
<style lang="sass">
.flip-list-move
  transition: transform 0.3s
</style>
