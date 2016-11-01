import 'whatwg-fetch';

// Import library deps
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import OUR routes
import Application from './routes/application.vue';
import Index from './routes/index.vue';

// Hooked in the Router to Vue.js
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// Kinda the same as saying
// const app = new Application({ el: '.app' });
const app = new Vue({ ...Application, router }).$mount('.app');
