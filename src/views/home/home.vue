<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <!--    :hot-suggests="hotSuggests"-->
    <HomeSearchBox></HomeSearchBox>
    <home-categories></home-categories>
    <!--    <button @click="moreBtnclick">加载更多</button>-->
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'07.23'" :end-date="'07.12'"></search-bar>
    </div>
    <home-content></home-content>

  </div>
</template>

<script setup>
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import useHomeStore from '@/stores/modules/home'
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue'
import SearchBar from '@/components/search-bar/searchBar.vue'
import useScroll from '@/hooks/useScroll.js'
import {computed, watch} from 'vue'
import {ref} from 'vue'
//发送网络请求
// 热门建议
// const hotSuggests=ref([])
// hyRequest.get({
//   url:'/home/hotSuggests'
// }).then(res=>{
//   hotSuggests.value=res.data
// })
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

// const moreBtnclick = () => {
//   console.log('加载更深的')
//   homeStore.fetchHouselistData()
// }

//监听window窗口的滚动
// 当我们离开页面时，我们移除监听
// 如果别的页面也进行类似的监听，会编写重复代码


// useScroll(()=>{
//   homeStore.fetchHouselistData()
// })
const {isReachBottom,scrollTop} = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
     isReachBottom.value = false
    })
  }
})


//搜索框显示的控制
// const isShowSearchBar=ref(false)
// watch(scrollTop,(newTop)=>{
//   isShowSearchBar.value=newTop>100
// })

//定义的可响应式数据，依赖另一个可响应式数据 那么就可以使用计算属性（computed）
const isShowSearchBar=computed(()=>{
  return scrollTop.value>=350
})

</script>

<style scoped lang="less">
.banner {
  img {
    width: 100%;
  }
}

.home {
  padding-bottom: 60px;
}
.search-bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
  z-index: 9;

}
</style>
