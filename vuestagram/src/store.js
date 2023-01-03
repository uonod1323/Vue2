import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age  : 20,
      likes : 30,
    }
  },
  mutations : {
    나이증가(state, data){
        state.age += data;
    },
    좋아요(state){
        state.likes++;
    }
  }
})

export default store