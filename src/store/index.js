import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        username: 'admin',
        password: '123123'
    },
    mutations: {
        showPeople(state, msg) {
            state.name = msg
        }
    }
})

export default store;