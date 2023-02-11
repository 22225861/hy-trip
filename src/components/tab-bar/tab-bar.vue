<template>
  <div class="tab-bar">

    <template v-for="(item,index) in tabbarData">
<!--      <div class="tab-bar-item" @click="itemClick(index,item)"-->
<!--           :class="{active: currentIndex === index}">-->
<!--        <img v-if="currentIndex!==index" :src="getAssetUrl(item.image)" alt="">-->
<!--        <img v-else :src="getAssetUrl(item.imageActive)" alt="">-->
<!--        <span class="text">{{item.text}}</span>-->
<!--      </div>-->
      <van-tabbar route active-color="#ff9645">
        <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/favor" icon="like-o">收藏</van-tabbar-item>
        <van-tabbar-item to="/order" icon="orders-o">订单</van-tabbar-item>
        <van-tabbar-item to="/message" icon="chat-o">消息</van-tabbar-item>
      </van-tabbar>
    </template>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar'
import { getAssetUrl} from '@/utils/load_assets_img'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router=useRouter()
const currentIndex=ref(0)
const itemClick = (index,item) => {
  currentIndex.value=index
  router.push(item.path)
}
</script>

<style scoped lang="less">
.tab-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border: 1px solid #f3f3f3;
}
  .tab-bar-item{
  flex: 1;
  display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  }
   &.active{
    color: var(--primary-color);
   }
   img{
     width: 36px;
   }
   text{
     margin-top: 2px;
   }
</style>
