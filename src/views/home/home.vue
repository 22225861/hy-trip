<template>
  <div class="home">
   <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
  <HomeSearchBox :hot-suggests="hotSuggests"></HomeSearchBox>
  </div>
</template>

<script setup>
  import HomeNavBar from './cpns/home-nav-bar.vue'
  import HomeSearchBox from './cpns/home-search-box.vue'
  import useHomeStore from '@/stores/modules/home'
  import {ref} from 'vue'
  //发送网络请求
  // 热门建议
  // const hotSuggests=ref([])
  // hyRequest.get({
  //   url:'/home/hotSuggests'
  // }).then(res=>{
  //   hotSuggests.value=res.data
  // })
  const homeStore=useHomeStore()
  homeStore.fetchHotSuggestData()
</script>

<style scoped lang="less">
.banner{
  img{
    width: 100%;
  }
}

</style>
