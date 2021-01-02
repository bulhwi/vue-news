<template>
  <div>
    <section>
      <!--질문 상세 정보-->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{fetchedItem.title}}</h2>
    </section>
    <section>
      <!--질문 댓글-->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: "ItemView",
  computed:{
   ...mapGetters(['fetchedItem'])
  },
  created() {
    const id = this.$route.params.id;
    this.FETCH_ITEM(id);
  },
  methods: {
    ...mapActions(['FETCH_ITEM']),
  }
}
</script>

<style scoped>
.user-container {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>