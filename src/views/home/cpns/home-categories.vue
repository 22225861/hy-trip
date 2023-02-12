<template>
  <div class="categories">
 <template v-for="(item,index) in categories" :key="item.id">
   <div class="item">
     <img :src="item.pictureUrl" alt="">
     <div class="text">{{item.title}}</div>
   </div>
 </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import {storeToRefs} from 'pinia'
const homeStore=useHomeStore()
const {categories } = storeToRefs(homeStore)
</script>

<style scoped lang="less">
.categories{
  display: flex;
  height: 80px;
  overflow-x:auto;
  padding:0 10px;
  margin-top: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
  .item{
    width: 70px;
    flex-shrink: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
      width: 32px;
      height: 32px;
    }
    .text{
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>
