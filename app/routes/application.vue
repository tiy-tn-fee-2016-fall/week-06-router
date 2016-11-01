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
        <template v-if="path === '/'">
          <index-page :lunchSpots="lunchSpots"></index-page>
        </template>
        <template v-else>
          <h2>NEW PAGE</h2>
        </template>
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
