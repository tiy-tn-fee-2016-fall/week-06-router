import 'whatwg-fetch';

// Import library deps
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import OUR routes
import Application from './routes/application.vue';
import Index from './routes/index.vue';
import New from './routes/new.vue';
import Detail from './routes/detail.vue';

// Hooked in the Router to Vue.js
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/new',
    name: 'new',
    component: New,
  },
  {
    path: '/lunch-spots/:id',
    name: 'detail',
    component: Detail,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// Kinda the same as saying
// const app = new Application({ el: '.app' });
const app = new Vue({ ...Application, router }).$mount('.app');
