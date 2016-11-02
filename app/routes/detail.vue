<template lang="html">
  <div class="">
    <h2>{{ lunchSpot.name }}</h2>
  </div>
</template>

<script>
export default {
  props: ['apiUrl'],

  data() {
    return {
      id: this.$route.params.id,
      lunchSpot: {},
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      // Get the data for a lunch spot with the current url
      fetch(`${this.apiUrl}/${this.id}`)
        .then((r) => r.json())
        .then((lunchSpot) => {
          this.lunchSpot = lunchSpot;
        });
    },
  },
};
</script>
