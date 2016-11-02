<template lang="html">
  <div class="">
    <h2>Recommend a Spot!</h2>

    <form @submit.prevent="saveForm">
      <label for="spot-name">Name</label>
      <input id= "spot-name" type="text" placeholder="Name" v-model="formValues.name">

      <label for="spot-street">Street Address</label>
      <input id= "spot-street" type="text" placeholder="Street Address" v-model="formValues.street">

      <label for="spot-city">City</label>
      <select v-model="formValues.city">
        <option value="">Select a City</option>
        <option value="Nashville">Nashville</option>
        <option value="Franklin">Franklin</option>
        <option value="M-Boro">M-Boro</option>
      </select>

      <label for="spot-zip">Zip Code</label>
      <input id= "spot-zip" type="text" placeholder="Zip Code" v-model="formValues.zip">

      <div class="flex flex-between">
        <router-link
          :to="{ name: 'index' }"
          class="button button-clear">
          Back
        </router-link>

        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: '',
        street: '',
        city: '',
        zip: '',
      },
    };
  },

  methods: {
    saveForm() {
      // Tell the application to save a new lunch spot
      // Similar to in DIY MVC `this.controller.addSpot(this.formValues);`
      this.$emit('addSpot', this.formValues);
    },
  },
};
</script>
