<template>
  <div class="favor" ref="favorRef">
      <h2>favor</h2>
    <template v-for="(item) in 100">
      <div>列表数据:{{item}}</div>
    </template>
  </div>
</template>

<script setup>
import useScroll from '@/hooks/useScroll'
import {ref} from 'vue'

const favorRef=ref(null)
useScroll(favorRef)
</script>

<style scoped lang="less">
.favor{

}
</style>
