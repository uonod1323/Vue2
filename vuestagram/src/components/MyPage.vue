<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="?" @keyup="doThis" id="input"/>
        <div class="post-header" v-for = "(a,i) in follower" :key="i">
            <div class="profile" :style="`background-image:url(${a.image})`"></div>
            <span class="profile-name">{{ a.name }}</span>
        </div>
    </div>
</template>

<script>
import {onMounted, toRefs, watch, ref, computed} from 'vue';
import axios from 'axios';
import {useStore} from 'vuex'

export default {
    name : 'MyPage',
    props : {
        one : Number,
        two : Number,
    },
    data(){
        return{
        searchData : '',
        }
    },
    setup(props){
        let follower = ref([]);

        function doThis(){
        this.searchData = document.querySelector('#input').value;
        

         let names = [];
        for(let i=0; i<follower.value.length; i++){
             names.push(follower.value[i].name);
        }
        const matches = names.filter(name => name.toLowerCase().startsWith(this.searchData));
        console.log(matches);
        }

        let {one, two} = toRefs(props);
        console.log(one.value);
        console.log(two.value);

        

        //데이터 연산 결과
        let 결과 = computed(()=>{
            return follower.value.length;
        })
        console.log(결과.value);

        let store = useStore();
        console.log(store.state.name)

        watch(one, ()=>{

        })

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
                follower.value = a.data
            });
        })

       
        return {follower, doThis}
    },
}
</script>

<style scoped>

</style>