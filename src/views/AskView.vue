<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
import bus from "@/utils/bus";
import ListMixin from "@/mixins/ListMixin";
// import {mapGetters} from 'vuex';
export default {
  name: "AskView",
  components:{
    ListItem
  },
  mixins:[ListMixin],
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
  // created() {
  //   bus.$emit('start:spinner');
  //   this.$store.dispatch('FETCH_ASK')
  //       .then(() => {
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  // }
}
</script>

<style scoped>
</style>