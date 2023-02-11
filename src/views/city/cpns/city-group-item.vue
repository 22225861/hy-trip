<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city,index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{city.cityName}}</div>
        </template>
      </div>


      <template v-for="(group,index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city,indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)"></van-cell>
        </template>
      </template>
    </van-index-bar>

  </div>
</template>

<script setup>
import {computed} from 'vue'
import {useRouter} from 'vue-router'
import useCityStore from '@/stores/modules/city'

const props=defineProps({
  groupData:{
    type:Object,
    default:()=>({})
  }
})
// 动态的索引
const indexList=computed(()=>{
  const list=props.groupData.cities.map(item=>item.group)
  list.unshift('#')
  return list
})
// 监听用户的点击
const router=useRouter()
const cityStore=useCityStore()
const cityClick = (city) => {
  console.log(city)
  // 选中当前城市
  cityStore.currentCity=city
  // 返回上一级
  router.back()
}
</script>

<style scoped lang="less">
.list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 25px 10px 10px;

  .city{
    width: 70px;
    height: 28px;
    border-radius: 14px;
    background-color: #fff4ec;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    margin:6px 0;
  }
}
</style>
