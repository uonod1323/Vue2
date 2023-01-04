import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state(){
    return {
      name : 'kim',
      age  : 20,
      likes : 30,
      좋아요눌렀니 : false,
      more : {},
    }
  },
  mutations : {
    나이증가(state, data){
        state.age += data;
    },
    좋아요(state){
        if(state.좋아요눌렀니 == false){
            state.likes++;
            state.좋아요눌렀니 = true;
        }else{
            state.likes--;
            state.좋아요눌렀니 = false;
        }
    },
    setMore(state, data){
      state.more = {data}
    },
  },
  actions : {
    getData(context){
        axios.get(`https://codingapple1.github.io/vue/more0.json`).then((result)=>{
        //요청성공시에 실행할 코드
        console.log(result.data);
        context.commit('setMore', result.data);
        });
    },
  }
})

export default store