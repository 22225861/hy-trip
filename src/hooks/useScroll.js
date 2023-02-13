import {onMounted, onUnmounted, ref} from 'vue'
import {throttle } from 'underscore'
// export default function useScroll(reachBottomCB,callback2,callback3) {
//     const scrollListenerHandler=()=> {
//         console.log("12")
//         const clientHeight = document.documentElement.clientHeight
//         const scrollTop = document.documentElement.scrollTop
//         const scrollHeight = document.documentElement.scrollHeight
//         if (clientHeight + scrollTop >= scrollHeight) {
//             // console.log('在底部')
//            // homeStore.fetchHouselistData()
//             if (reachBottomCB) reachBottomCB()
//         }
//     }
//
//     onMounted(()=>{
//         window.addEventListener('scroll',scrollListenerHandler)
//     })
//     onUnmounted(()=>{
//         window.removeEventListener('scroll',scrollListenerHandler)
//     })
// }
export default function useScroll(elRef) {

    let el = window
    const isReachBottom = ref(false)
    const clientHeight = ref(0)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)

    // 防抖/节流
    const scrollListenerHandler = throttle(() => {
        if (el === window) {
            clientHeight.value = document.documentElement.clientHeight
            scrollTop.value = document.documentElement.scrollTop
            scrollHeight.value = document.documentElement.scrollHeight
        } else {
            clientHeight.value = el.clientHeight
            scrollTop.value = el.scrollTop
            scrollHeight.value = el.scrollHeight
        }
        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            console.log("滚动到底部了")
            isReachBottom.value = true
        }
    }, 100)

    onMounted(() => {
        console.log(elRef.value)
        if (elRef) el = elRef.value
        el.addEventListener("scroll", scrollListenerHandler)
    })

    onUnmounted(() => {
        el.removeEventListener("scroll", scrollListenerHandler)
    })

    return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
// export default function useScroll(elRef) {
//     console.log('正在滚动')
//     let el=window
//
//     const isReachBottom=ref(false)
//     const scrollTop=ref(0)
//     const clientHeight=ref(0)
//     const scrollHeight=ref(0)
//     const scrollListenerHandler= throttle(()=> {
//         if (el===window){
//             clientHeight.value = document.documentElement.clientHeight
//             scrollTop.value = document.documentElement.scrollTop
//             scrollHeight.value = document.documentElement.scrollHeight
//         }else {
//             clientHeight.value=el.offsetHeight
//             scrollTop.value = el.scrollTop
//             scrollHeight.value = el.scrollHeight
//         }
//
//         if (clientHeight.value + scrollTop.value >= scrollHeight.value-10) {
//              console.log('在底部')
//             // homeStore.fetchHouselistData()
//             isReachBottom.value=true
//             // if (reachBottomCB) reachBottomCB()
//         }
//     },100)
//
//     onMounted(()=>{
//         if (elRef) el = elRef.value
//         console.log("12")
//         el.addEventListener('scroll',scrollListenerHandler)
//     })
//     onUnmounted(()=>{
//         el.removeEventListener('scroll',scrollListenerHandler)
//     })
//     return {isReachBottom,clientHeight,scrollTop,scrollHeight}
// }
