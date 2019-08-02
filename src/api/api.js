import axios from '@/libs/api.request'

const apiPreFix = '/api'
const get = (url, params) => {
    return axios.request({
        url: apiPreFix + url,
        params,
        method: 'get'
    })
}
const post = (url, data) => {
    return axios.request({
        url: apiPreFix + url,
        data,
        method: 'post'
    })
}

export default {
    get,
    post
}
