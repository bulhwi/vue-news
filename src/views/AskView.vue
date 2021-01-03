<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
// import {mapGetters} from 'vuex';
export default {
  name: "AskView",
  components:{
    ListItem
  },
  computed: {
    // todo store.state의 데이터바인딩 방식
    // # 1
    // ask() {
    //   return this.$store.state;
    // }

    //# 2
    // ...mapState({
    //   ask: state => state.ask
    // }),

    // # 3
    // ...mapGetters([
    //    'fetchedAsk'
    // ]),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>
</style>