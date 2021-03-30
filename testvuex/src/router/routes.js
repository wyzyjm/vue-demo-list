import Home from '../views/Home.vue'
import stateCom from '@/views/store/State'
import storeCom from '@/views/store/Store'
import getterCom from '@/views/store/Getters'
import actionCom from '@/views/store/Action'

// 购物车
import Cart from '@/views/Cart'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/store',
        name: 'stroe',
        component: storeCom,
        children: [
            {
                path: 'state',
                name: 'state',
                component: stateCom
            },
            {
                path: 'getter',
                name: 'getter',
                component: getterCom
            },
            {
                path: 'action',
                name: 'action',
                component: actionCom
            }
        ]
    },
    {
        path:'/cart',
        name:'cart',
        component :Cart
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]
export default routes