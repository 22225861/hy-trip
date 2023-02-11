import { defineStore} from 'pinia/dist/pinia'

const useCityStore= defineStore("city",{
    state: ()=>({
        cities:[]
    }),
    actions: {

    }
})
export default useCityStore
