<template>
  <div class="city top-page">
    <div class="top">
      <!--    搜索框-->
      <van-search v-model="searchValue"
                  placeholder="城市/区域/位置"
                  show-action
                  shape="round"
                  @cancel="cancelClick"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value,key,index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <city-group :group-data="currentGroup" />
    <city-group :group-data="currentGroup" /> -->
      <template v-for="(value,key,index) in allCities">
        <city-group :group-data="value" v-show="tabActive === key"></city-group>
      </template>
    </div>

  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useRouter} from 'vue-router'
import useCityStore from '@/stores/modules/city'
import {storeToRefs} from 'pinia/dist/pinia'
import cityGroup from './cpns/city-group-item.vue'

const router = useRouter()
//搜索框功能
const searchValue = ref("")
const cancelClick = () => {
  router.back()
}
//tab的切换
const tabActive = ref("")

// 网络请求 请求城市数据
// const allcity=ref({})
// getCityAll().then(res=>{
//   allcity.value=res.data
// })

// 从store获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const {allCities} = storeToRefs(cityStore)
//获取选中标签的数据
// 获取正确的key 将tabs中绑定的tabAction正确绑定
// 根据key从allcities获取数据 默认直接获取的数据不是响应式的所以需要包裹computed
const currentGroup=computed(()=>allCities.value[tabActive.value])

</script>

<style scoped lang="less">
.city {
  //top固定定位
  //.top{
  //  position: fixed;
  //  top: 0;
  //  left: 0;
  //  right: 0;
  //}
  //.content{
  //  margin-top: 98px;
  //}
  .top{
    position: relative;
    z-index: 9;
  }
  // 布局滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}

</style>
