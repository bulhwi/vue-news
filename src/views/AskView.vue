<template>
  <div>
    <p v-for="(item, index) in fetchedAsk">
      <a :href="item.url">{{item.title}}</a>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default {
  name: "AskView",
  computed: {
    // # 1
    // ask() {
    //   return this.$store.state;
    // }

    //# 2
    // ...mapState({
    //   ask: state => state.ask
    // }),

    // # 3
    ...mapGetters([
       'fetchedAsk'
    ]),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>

</style>