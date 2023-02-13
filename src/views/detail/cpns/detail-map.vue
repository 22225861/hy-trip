<template>
  <div class="home">
    <detail-section title="位置周边" more-text="查看周边更多信息">
      <div class="baidu" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue"
import {onMounted, ref} from 'vue'
const props=defineProps({
  position:{
    type:Object,
    default: () => ({})
  }
})
const mapRef=ref()
onMounted(()=>{
  const map = new BMapGL.Map(mapRef.value);          // 创建地图实例
  const point = new BMapGL.Point(props.position.longitude,props.position.latitude);  // 创建点坐标
  map.centerAndZoom(point, 15);
  const marker = new BMapGL.Marker(point);
  map.addOverlay(marker)
})
</script>

<style scoped lang="less">
.baidu{
  height: 250px;

}
</style>
