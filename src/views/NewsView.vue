<template>
  <div>
    <div v-for="(item, index) in news">{{ item.title }}</div>
  </div>
</template>

<script>
import {fetchNewsList} from "../api/index"

export default {
  name: "NewsView",
  data() {
    return {
      news: []
    }
  },
  created() {
    /*axios.get("https://api.hnpwa.com/v0/news/1.json")
        .then((res) => {
          console.log(res);
          this.news = res.data;
        })
        .catch((error) => {
          console.log(error);
        });*/
    fetchNewsList()
      .then(response => this.news = response.data)
      .catch(error => console.log(error));
  }
}
</script>

<style scoped>

</style>