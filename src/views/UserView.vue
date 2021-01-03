<template>
  <div>
    <UserProfile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{'Joined ' + userInfo.created}}, </span>
      <span slot="karma">{{userInfo.karma}}</span>
    </UserProfile>
<!--    <p>name : {{userInfo.id}}</p>-->
<!--    <p>karma : {{userInfo.karma}}</p>-->
<!--    <p>created : {{userInfo.created}}</p>-->
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile";
export default {
  name: "UserView",
  components:{
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  }
}
</script>

<style scoped>

</style>