import ListView from "@/views/ListView";
import bus from "@/utils/bus";

// NewsView, JobsView, AskView에서 사용하는 HOC
export default function createListView(name) {
  return {
    // 재사용할 인스턴스 옵션들;
    name: name,
    created() {
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          bus.$emit('end:spinner');
        })
        .catch((error => {
          console.log(error);
        }));
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}