<template>
  <div>
    <p v-for="(item, index) in this.$store.state.jobs">
      <a :href="item.url">{{item.title}}</a>
      <small>{{item.time_ago}} by {{item.domain}}</small>
    </p>
  </div>
</template>

<script>
export default {
  name: "JobsView",
  created() {
    // fetchJobsList()
    //   .then(response => this.jobs = response.data)
    //   .catch(error => console.log(error));
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

</style>