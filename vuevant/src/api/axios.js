import axios from 'axios'
import config from '@/config' // 配置

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.online;
console.log(baseUrl);
class Httprequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.queue = {}
    }
    getConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {}
        }
        return config
    }
    // 拦截器
    interceptors(instance, url) {
        instance.interceptors.request.use(config => {
            console.log('拦截请求');
            // console.log(config);
            return config
        })
        instance.interceptors.response.use(res => {
            console.log('处理响应');
            // console.log(res);
            return res
        }, err => {
            console.log('出错了', err);
        })
    }
    // 请求
    request(options) {
        const instance = axios.create() // 创建实例选项
        options = Object.assign(this.getConfig(), options) // options 覆盖之前的
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

// 实例化
const axiosObj = new Httprequest(baseUrl)

export default axiosObj