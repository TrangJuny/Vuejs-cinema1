<template>
  <div id="movie-filter">
    <h2>Filter Time</h2>
    <div class="filter-group">
<<<<<<< HEAD
      <check-filter v-for="item in times" 
      v-bind:title="item" category="time" v-bind:key="item.id" 
      
      ></check-filter>
    </div>
    <h2>Filter results</h2>
    <div class="filter-group">
      <check-filter v-for="genre in genres" v-bind:title="genre" category="genre"
       v-bind:key="genre.id"        
       ></check-filter>
=======
      <check-filter v-for="item in times" v-bind:title="item" category="time" v-bind:key="item.id" v-on:check-filter="checkFilter"></check-filter>
    </div>
    <h2>Filter results</h2>
    <div class="filter-group">
      <check-filter v-for="genre in genres" v-bind:title="genre" category="genre" v-bind:key="genre.id" v-on:check-filter="checkFilter"></check-filter>
>>>>>>> a0a8add60118464ff61c8b1bd43d2b4270d38126
    </div>
  </div>
</template>

<script>

import genres from '../util/genres';
import times from '../util/times';
import CheckFilter from './CheckFilter.vue';

export default {
  data() {
    return {
      genres,
      times
    };
  },
<<<<<<< HEAD
  // methods: {
  //   checkFilter(category, title, checked) {
  //     this.$emit("check-filter", category, title, checked);
  //   }
  // },
=======
  methods: {
    checkFilter(category, title, checked) {
      this.$emit("check-filter", category, title, checked);
    }
  },
>>>>>>> a0a8add60118464ff61c8b1bd43d2b4270d38126
  components: {
    CheckFilter    
  }
};
</script>

<style>
</style>
