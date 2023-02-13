<template>
  <div class="detail top-page" ref="detailRef">
    <tab-control   v-if="showTabControl"
                   :titles="titles"
                   @tabItemClick="tabClick"
                   class="tabs"></tab-control>
  <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft"></van-nav-bar>
   <div class="main" v-if="mainPart"  v-memo="[mainPart]">
     <DetailSwipe   :swipe-data="mainPart.topModule.housePicture.housePics"></DetailSwipe>
     <detail-infos  name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule"></detail-infos>
     <DetailFacility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"></DetailFacility>
     <DetailLandlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"></DetailLandlord>
     <DetailComment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"></DetailComment>
     <DetailNotice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"></DetailNotice>
     <DetailMap name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"></DetailMap>
     <DetailIntro :price-intro="mainPart.introductionModule"></DetailIntro>
   </div>
    <div class="footer" >
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">杪白旅途, 永无止境!</div>
    </div>

  </div>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router'
import {getDetailInfos} from '@/services'
import {computed, ref} from 'vue'
import TabControl from '@/components/tab-control/tab-control.vue'
import DetailSwipe from './cpns/detail-swipe.vue'
import DetailInfos from './cpns/detail-infos.vue'
import DetailFacility from './cpns/detail-facility.vue'
import DetailLandlord from './cpns/detail-landlord.vue'
import DetailComment from './cpns/detail-comment.vue'
import DetailNotice from './cpns/detail-notice.vue'
import DetailMap from './cpns/detail-map.vue'
import DetailIntro from './cpns/detail-intro.vue'
import useScroll from '@/hooks/useScroll'
const route=useRoute()
const router=useRouter()
// 监听返回按钮的点击
const onClickLeft = () => {
  router.back()
}
// 发送网络请求获取数据
const  houseId=route.params.id
const detailInfos=ref({})
const mainPart=computed(()=>detailInfos.value.mainPart)
getDetailInfos(houseId).then(res=>{
 detailInfos.value=res.data
})

// tabControl相关操作
const detailRef = ref()
console.log(detailRef.value)
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})

const sectionEls =ref({})
const titles=computed(()=>{
  return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
  const name=value.$el.getAttribute("name")
  sectionEls.value[name]=value.$el
}

const tabClick=(index)=>{
  const key=Object.keys(sectionEls.value)[index]
  const el=sectionEls.value[key]
  let instance=el.offsetTop
  if (index!==0){
    instance=instance-44
  }
  detailRef.value.scrollTo({
    top:instance,
    behavior:"smooth"
  })
}

</script>

<style scoped lang="less">
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
