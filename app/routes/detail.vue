<template lang="html">
  <div class="">
    <h2>{{ lunchSpot.name }}</h2>

    <button class="danger" @click="deleteSpot">
      Green is not a Creative Colour
    </button>
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
        })
        .catch(() => {
          this.$router.push({ name: 'index' });
        });
    },

    deleteSpot() {
      if (confirm('Are you sure')) {
        this.$emit('deleteSpot', this.lunchSpot);
      }
    },
  },
};
</script>
