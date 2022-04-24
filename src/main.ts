import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

library.add(faUser);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
    router, render: h => h(App), mounted() {
        AOS.init()
    },
}).$mount('#app');
