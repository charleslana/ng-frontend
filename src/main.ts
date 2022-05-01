import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faArrowUp, faCircleExclamation, faMoon, faSun, faUserNinja} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18n from '@/i18n';

library.add(faUser, faArrowUp, faUserNinja, faCircleExclamation, faSun, faMoon);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
    router, i18n, render: h => h(App), mounted() {
        AOS.init({
            disable: 'mobile'
        });
    },
}).$mount('#app');
