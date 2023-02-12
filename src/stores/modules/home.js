import {defineStore} from 'pinia'
import {getHomeCategories, getHomelist, getHomeSuggests} from '@/services'
const useHomeStore=defineStore('home',{
    state:()=>({
        hotSuggests:[],
        categories:[],
        houseList:[],
        currentPage:1
    }),
    actions:{
        async fetchHotSuggestData(){
           const res= await getHomeSuggests()
            this.hotSuggests=res.data
        },
        async fetchCategoriesData(){
            const res=await getHomeCategories()
           this.categories=res.data
        },
        async fetchHouselistData(){
            const res =await getHomelist(this.currentPage)
            this.houseList.push(...res.data)
            this.currentPage++
        }
    }
})
export default  useHomeStore
