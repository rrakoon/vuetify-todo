<template>
  <div class="home">
    <field-add-task></field-add-task>
    <list-tasks v-if="$store.state.tasks.length"></list-tasks>
    <no-tasks v-else></no-tasks>
    <button-done-sorting v-if="$store.state.sorting"></button-done-sorting>
  </div>
</template>

<script>
import ButtonDoneSorting from '../components/Todo/ButtonDoneSorting.vue';
import ListTasks from "../components/Todo/ListTasks.vue";
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

//child Component add solution 1
// import FieldAddTask from '@/components/Todo/FieldAddTask.vue'

export default {
  name: "Todo",

  //child Component add solution 2
  components: {
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,
    "no-tasks": require("@/components/Todo/NoTask.vue").default,
    "button-done-sorting": require("@/components/Todo/ButtonDoneSorting.vue").default
  },
};
</script>


