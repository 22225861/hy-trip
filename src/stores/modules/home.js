import {defineStore} from 'pinia'
import {getHomeSuggests} from '@/services'
const useHomeStore=defineStore('home',{
    state:()=>({
        hotSuggests:[],
        categories:[]
    }),
    actions:{
        async fetchHotSuggestData(){
           const res= await getHomeSuggests()
            this.hotSuggests=res.data
        }
    }
})
export default  useHomeStore
