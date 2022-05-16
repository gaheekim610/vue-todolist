import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/Main";
import TodoDetail from "../views/TodoDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/detail/:id",
    // param이 넘어오기 때문에 path가 아닌 name으로 연결해야해서 named router로 연결
    name: "TodoDetail",
    component: TodoDetail,
    // param으로 넘어온걸 prop로 사용한다는 의미. false일 경우 this.$route.params.id로 사용
    props: true,
  },
];

const router = new VueRouter({
  // URL의 해쉬 값 제거 속성 (URL에 #해쉬 값 제거)
  mode: "history",
  routes,
});

export default router;
