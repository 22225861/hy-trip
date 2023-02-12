import hyRequest from '@/services/request/index'
export function getHomeSuggests() {
    return hyRequest.get({
        url:'/home/hotSuggests'
    })
}
export function getHomeCategories() {
    return hyRequest.get({
        url:'/home/categories'
    })
}
export function getHomelist(currentPage) {
    return hyRequest.get({
        url:'/home/houselist',
        params:{
            page:currentPage

        }
    })
}
