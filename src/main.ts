import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faArrowUp, faCircleExclamation, faUserNinja} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueI18n from 'vue-i18n';
import {defaultLocale, messages} from '@/i18n';
import LocalStorageUtils from '@/utils/LocalStorageUtils';


library.add(faUser, faArrowUp, faUserNinja, faCircleExclamation);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Buefy);
Vue.use(VueI18n);
Vue.config.productionTip = false;

const userLanguage = LocalStorageUtils.getLocale();

const i18n = new VueI18n({
    messages,
    locale: userLanguage,
    fallbackLocale: defaultLocale
});

new Vue({
    router, i18n, render: h => h(App), mounted() {
        AOS.init({
            disable: 'mobile'
        })
    },
}).$mount('#app');
