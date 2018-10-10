import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        title: '首页',
        component: (resolve) => { require(['../pages/Index.vue'], resolve) }
    }, {
        path: '/map/index',
        name: 'map',
        title: '地图首页',
        component: (resolve) => { require(['../pages/Map/MapIndex.vue'], resolve) }
    }, {
        path: '/home',
        component: BlankLayout,
        children: [{
            path: '/home',
            name: 'home',
            title: '',
            component: (resolve) => { require(['../pages/Home.vue'], resolve) }
        }]
    }, {
        path: '/login',
        component: BlankLayout,
        　　children: [{
                path: '/login',
                name: 'login',
                title: '登陆-Cookie',
                component: (resolve) => { require(['../pages/Login.vue'], resolve) }
            }]
            // {
            //     path: '/news/index',
            //     name: 'news',
            //     title: '新闻列表',
            //     component: (resolve) => { require(['../components/HelloWorld.vue'], resolve) }
            // }

    }]
})