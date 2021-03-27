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
    snackbar: {
      show: false,
      text: "",
    },
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
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
    showSnackBar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackBar(state) {
      state.snackbar.show = false;
    },
  },
  actions: {
    //vue == methods 함수.
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackBar", "Task가 추가 되었습니다.");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackBar", "Task가 삭제 되었습니다.");
    },
    updateTaskTitle({ commit }, payload) {
      commit("updateTaskTitle", payload);
      commit("showSnackBar", "Task가 수정 되었습니다.");
    },
  },
  modules: {
    //vue == computed 계산값.
  },
});
