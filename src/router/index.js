import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
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