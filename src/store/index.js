import Vue from "vue";
import Vuex from "vuex";
import Constant from "../constans/todoFunc";
import axios from "axios";

// Todo: Vue.use는 언제 쓰는 지 다시 보기
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // data
    todoList: [],
  },
  mutations: {
    // methods =state를 조작하는 함수
    [Constant.SHOW_LIST]: (state, payload) => {
      state.todoList = payload.sort((a, b) => b.id - a.id);
    },
    [Constant.ADD_TODO]: (state, payload) => {
      state.todoList = [payload, ...state.todoList];
    },
    [Constant.DELETE_TODO]: (state, payload) => {
      state.todoList = state.todoList.filter((data) => data.id !== payload);
    },
  },
  getters: {
    //computed
  },
  actions: {
    // 비동기로 처리된다.
    async loadTodoList({ commit }) {
      const loadRes = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (loadRes.status !== 200) throw loadRes;
      const { data } = loadRes;
      return commit(Constant.SHOW_LIST, data);
    },
    async addTodo({ commit }, payload) {
      const addRes = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        { title: payload.todo, completed: payload.isDone }
      );
      const { data } = addRes;
      return commit(Constant.ADD_TODO, data);
    },
    async removeTodo({ commit }, payload) {
      const delRes = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${payload}`
      );
      if (delRes.status === 200) {
        return commit(Constant.DELETE_TODO, payload);
      }
    },
  },
});

export default store;
