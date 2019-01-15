import Vue from 'vue';
import Loading from '../src/index';
// import Loading from '../dist/vuejs-loading.min';
import App from './App.vue';

Vue.use(Loading);

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
});