<template lang="html">
  <div class="">
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
          <td>
            <router-link :to="{ name: 'detail', params: { id: item.id } }">
              MORE!!!
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['lunchSpots'],

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
