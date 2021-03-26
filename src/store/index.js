import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//global
export default new Vuex.Store({
  state: {
    //vue == data  상태 데이터
    tasks: [
      {
        id: 1,
        title: "오늘 할 일을 등록하세요",
        done: false,
      },
      {
        id: 2,
        title: "디폴트 리스트는 삭제하세요.",
        done: false,
      },
    ],
  },
  mutations: {
    //vuex만 존재 state변화
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {
    //vue == methods 함수.
  },
  modules: {
    //vue == computed 계산값.
  },
});
