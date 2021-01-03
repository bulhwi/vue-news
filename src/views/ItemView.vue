<template>
  <div>
    <section>
      <!--질문 상세 정보-->
      <UserProfile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{fetchedItem.user}}
        </router-link>
        <template slot="time">{{'Posted ' + fetchedItem.time_ago}}</template>
      </UserProfile>
    </section>
    <section>
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
import UserProfile from "@/components/UserProfile";
export default {
  name: "ItemView",
  components:{
    UserProfile
  },
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