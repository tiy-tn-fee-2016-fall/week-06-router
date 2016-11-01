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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Street</th>
              <th>City</th>
              <th>Zip</th>
              <th>Popularity</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in lunchSpots">
              <td>{{ item.name }}</td>
              <td>{{ item.street }}</td>
              <td>{{ item.city }}</td>
              <td>{{ item.zip }}</td>
              <td>{{ item.votes }}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
const apiUrl = 'http://tiy-tn-class-api-fall-16.herokuapp.com/lunch-spots';

export default {
  data() {
    return {
      lunchSpots: [],
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
