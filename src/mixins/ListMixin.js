import bus from "@/utils/bus";

export default  {
  // 재사용할 컴포넌트 옵션 & 로직
  created() {
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        bus.$emit('end:spinner');
      })
      .catch((error => {
        console.log(error);
      }));
  }
}