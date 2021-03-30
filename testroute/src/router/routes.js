
// 首页
import Home from '../views/Home.vue'
// 登录
import Login from '@/views/Login'
// 新闻
import News from '@/views/News'
// 新闻 子路由 - 图片
import Imgs from '@/views/Imgs'
// 天气
import Weather from '@/views/Weather'
// 命名视图
import A from '@/views/A'
import B from '@/views/B'

// 路由配置
const routes = [
    // 登录
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    // 重定向
    // {
    //     path: '/',
    //     redirect: '/home',
    // },
    // 首页  命名视图, 不同路由页面显示不同
    {
        path: '/home',
        name: 'Home',
        meta: {
            needlogin: true,
            isAuthor: true,
            username:'小明'
        },
        components: {
            default: Home,
            A: A,
            B: B
        }
    },
    {
        path: '/news/:id',
        name: 'News',
        component: News,
        children: [
            {
                path: 'img',
                component: Imgs
            }
        ]
    },
    {
        path: '/weather/:city',
        name: 'Weather',
        component: Weather
    }

]

export default routes