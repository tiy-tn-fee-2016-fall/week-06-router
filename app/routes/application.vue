<template lang="html">
  <div class="">
    <div class="top-nav">
      <div class="container">
        <a href="/">All Lunch Spots</a>
        <a href="/new">Recommend a New Spot!</a>
      </div>
    </div>

    <div class="main">
      <div class="container">
        <router-view :lunch-spots="lunchSpots"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import IndexPage from './index.vue';
const apiUrl = 'http://tiy-tn-class-api-fall-16.herokuapp.com/lunch-spots';


export default {
  components: {
    IndexPage,
  },

  data() {
    return {
      lunchSpots: [],
      path: window.location.pathname,
    };
  },

  mounted() {
    this.getLunchSpots();
  },

  methods: {
    getLunchSpots() {
      fetch(apiUrl)
        .then((r) => r.json())
        .then((lunchSpots) => {
          this.lunchSpots = lunchSpots;
        });
    },
  },
};
</script>
