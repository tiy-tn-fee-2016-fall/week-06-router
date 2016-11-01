import 'whatwg-fetch';

// Import library deps
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import OUR routes
import  Application from './routes/application.vue';

// Hooked in the Router to Vue.js
Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'index',
  //   component: Index,
  // },
];


// Kinda the same as saying
// const app = new Application({ el: '.app' });
const app = new Vue({ ...Application }).$mount('.app');
