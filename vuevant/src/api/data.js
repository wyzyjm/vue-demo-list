//  所有的数据
import axios from '@/api/axios'


// banner
export const getBannerDate = () => {
    return axios.request({
        url: "banner",
        method: "get"
    })
}

// 用户
export const getUserDate = () => {
    return axios.request({
        url: 'user',
        method: 'get'
    })
}

// 地理位置
export const getPosirDate = () => {
    return axios.request({
        url: 'posi',
        method: 'get'
    })
}