import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../views/Todo.vue";
import PageNotFound from "../views/PageNotFound.vue";
import goTo from "vuetify/es5/services/goto";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
  },
  {
    path: "*",
    name: "pagenotfound",
    redirect: "/404",
  },
  {
    path: "/404",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});
// https://router.vuejs.org/kr/
router.beforeEach((to, from, next) => {
  // console.log("beforeEach");
  // console.log(to);
  document.title = `${process.env.VUE_APP_TITLE}-${to.name}`;
  //route title
  next();
});

router.afterEach((to, from) => {
  // console.log("afterEach");
  goTo(0, { duration: 0 });
});

export default router;
