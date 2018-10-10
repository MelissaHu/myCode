import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    logined: false,
    loginedInfo: {
        username: '',
        password: ''
    }
}

const mutations = {
    LOGIN(state) {
        state.logined = true
        state.loginedInfo.username = 'admin'
        state.loginedInfo.password = '000000'
    }
}


const actions = {
    login(context) {
        context.commit('LOGIN')
        console.log('dd');
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions
});