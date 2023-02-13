import axios from 'axios'
import { TIMEOUT,BASE_URL } from '@/services/request/config'
import useMainStore from '@/stores/modules/main'
const mainStore=useMainStore()
class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.request.use(config=>{
      mainStore.isLoading=true
      return config
    },err=>{
      return err
    })
    this.instance.interceptors.response.use(res=>{
      mainStore.isLoading=false
      return res
    },err=>{
      mainStore.isLoading=false
      return err
    })
  }

  request(config) {
    // mainStore.isLoading=true
    return new Promise((resolve, reject) => {
      //  this.instance.request非构造函数HYRequest里面的request
      this.instance.request(config).then(res => {
        resolve(res.data)
        // mainStore.isLoading=false
      }).catch(err => {
        reject(err)
       // mainStore.isLoading=false
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new HYRequest(BASE_URL,TIMEOUT)

