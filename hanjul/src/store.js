import { createStore } from 'vuex'



const store = createStore({
    state(){
         return {
            currentCategory : 'Home',
          } 
        }, 
    mutations : {
        changeCategory(state, category){
            state.currentCategory = category
        }
    }
}) 

export default store