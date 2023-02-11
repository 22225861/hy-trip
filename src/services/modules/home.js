import hyRequest from '@/services/request/index'
export function getHomeSuggests() {
    return hyRequest.get({
        url:'/home/hotSuggests'
    })
}
