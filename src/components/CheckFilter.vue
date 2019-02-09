<template>
  <div v-bind:class="{'check-filter':true , active : checked }" v-on:click="checkFilter">
    <span class="checkbox"></span>
    <span class="check-filter-title">{{title}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  props: ["title","category"],
  methods: {
    checkFilter() {
      this.checked = !this.checked;
<<<<<<< HEAD
      this.$bus.$emit("check-filter", this.category, this.title, this.checked);
=======
      this.$emit("check-filter", this.category, this.title, this.checked);
>>>>>>> a0a8add60118464ff61c8b1bd43d2b4270d38126
    }
  }
};
</script>

<style>
</style>
