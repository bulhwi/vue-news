import {fetchUserInfo, fetchItemInfo, fetchList} from "@/api";

export default {
  // todo: FETCH_LIST로 통합됨.
  // FETCH_NEWS(context) {
  //   fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  //
  // FETCH_ASK(context) {
  //   fetchAskList()
  //     .then(response => {
  //       context.commit('SET_ASK', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  //
  // FETCH_JOBS(context) {
  //   fetchJobsList()
  //     .then(response => {
  //       context.commit('SET_JOBS', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },

  async FETCH_USER({commit}, userName){
    try {
      const response = await fetchUserInfo(userName);
      commit('SET_USER', response.data);
      return response;
    }catch (error) {
      console.log(error);
    }
  },

  async FETCH_ITEM({commit}, id) {
    try{
      const response = await fetchItemInfo(id);
      commit('SET_ITEM', response.data);
      return response;
    }catch(error) {
      console.log(error);
    }
  },

async FETCH_LIST({commit}, pageName) {
    try {
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);
      return response;
    }catch(error) {
      console.log(error);
    }
  }
}