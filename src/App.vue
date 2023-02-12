
<template>

 <div class="app">
   <router-view></router-view>
   <Tabbar v-if="!route.meta.hideTabBar"></Tabbar>
 </div>
</template>
<script setup>
import Tabbar from '@/components/tab-bar/tab-bar.vue'
import {useRoute} from 'vue-router/dist/vue-router'
const route=useRoute()
</script>
<style scoped>

</style>
