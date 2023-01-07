<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="?" @keyup="search($event.target.value)" id="input"/>
        <div class="post-header" v-for = "(a,i) in follower" :key="i">
            <div class="profile" :style="`background-image:url(${a.image})`"></div>
            <span class="profile-name">{{ a.name }}</span>
        </div>
    </div>
</template>

<script>
import {onMounted, ref, computed} from 'vue';
import axios from 'axios';
import {useStore} from 'vuex'

export default {
    name : 'MyPage',

    data(){
        return{
        searchData : '',
        }
    },
    setup(){
        let follower = ref([]);
        let followerOriginal = ref([]);

        function search(검색어){
        let newFollower = followerOriginal.value.filter((a)=>{
            return a.name.indexOf(검색어) != -1
        });
        follower.value = [...newFollower]
        }



        

        //데이터 연산 결과
        let 결과 = computed(()=>{
            return follower.value.length;
        })
        console.log(결과.value);

        let store = useStore();
        console.log(store.state.name)

        onMounted(()=>{
        axios.get('/follower.json').then((a)=>{
            follower.value = a.data;
            followerOriginal.value = [...a.data];
        })
        });

       
        return {follower, search}
    },
}
</script>

<style scoped>

</style>