import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: BasicLayout,
        　　children: [{
            path: '/',
            name: 'login',
            title: '登陆-Cookie',
            component: (resolve) => { require(['../pages/LoginCheck.vue'], resolve) }
        }]
    }]
})