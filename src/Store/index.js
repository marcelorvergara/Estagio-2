import Vue from 'vue';
import Vuex from 'vuex';
import politics from './modules/politics'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        politics
    }
})