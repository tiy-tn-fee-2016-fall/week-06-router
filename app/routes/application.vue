<template lang="html">
  <div class="">
    <div class="top-nav">
      <div class="container">
        <router-link to="/" class="button button-outline">All Lunch Spots</router-link>
        <router-link to="/new" class="button button-outline">Recommend a New Spot!</router-link>
      </div>
    </div>

    <div class="main">
      <div class="container">
        <router-view
          :lunch-spots="lunchSpots"
          @addSpot="addSpot">
        </router-view>
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

    addSpot(input) {
      // Post our input data
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      })
        .then((r) => r.json())
        .then((lunchSpot) => {
          // Then Add new lunchSpot to the list of lunchSpots
          this.lunchSpots = [lunchSpot, ...this.lunchSpots];

          // Redirect to the "index" named route
          this.$router.push({ name: 'index' });
        });
    },
  },
};
</script>
