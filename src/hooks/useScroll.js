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
export default function useScroll() {
    const isReachBottom=ref(false)
    const scrollTop=ref(0)
    const clientHeight=ref(0)
    const scrollHeight=ref(0)
    const scrollListenerHandler= throttle(()=> {
         clientHeight.value = document.documentElement.clientHeight
        scrollTop.value = document.documentElement.scrollTop
        scrollHeight.value = document.documentElement.scrollHeight

        if (clientHeight.value + scrollTop.value >= scrollHeight.value-10) {
             console.log('在底部')
            // homeStore.fetchHouselistData()
            isReachBottom.value=true
            // if (reachBottomCB) reachBottomCB()
        }
    },100)

    onMounted(()=>{
        window.addEventListener('scroll',scrollListenerHandler)
    })
    onUnmounted(()=>{
        window.removeEventListener('scroll',scrollListenerHandler)
    })
    return {isReachBottom,clientHeight,scrollTop,scrollHeight}
}
