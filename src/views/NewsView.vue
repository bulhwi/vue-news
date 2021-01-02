<template>
  <div>
    <p v-for="(item, index) in this.$store.state.news">
      <a :href="item.url">
        {{item.title}}
      </a>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
</template>

<script>
// import {fetchNewsList} from "../api/index"

export default {
  name: "NewsView",
  // data() {
  //   return {
  //     news: []
  //   }
  // },
  created() {
    // todo 1. axios 비동기 통신 기본코드
    // axios.get("https://api.hnpwa.com/v0/news/1.json")
    //     .then((res) => {
    //       console.log(res);
    //       this.news = res.data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

    // todo 2. api를 분리하여 개선한 코드
    // fetchNewsList()
    //   .then(response => this.news = response.data)
    //   .catch(error => console.log(error));

    // todo 3. 분리된 api를 vuex actions를 통하여 호출하고 vuex store.state 를 통한 상태관리 패턴으로 개선함.
    this.$store.dispatch('FETCH_NEWS');

  }
}
</script>

<style scoped>

</style>