
<template>

 <div class="app">
   <router-view></router-view>
   <Tabbar v-if="!route.meta.hideTabBar"></Tabbar>
  <Loading></Loading>
 </div>
</template>
<script setup>
import Tabbar from '@/components/tab-bar/tab-bar.vue'
import Loading from '@/components/loading/Loading.vue'
import {useRoute} from 'vue-router/dist/vue-router'
const route=useRoute()
</script>
<style scoped>

</style>
