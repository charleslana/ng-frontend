import {Locales} from './locales';
import en from './translation/en.json'
import pt from './translation/pt.json';
import LocalStorageUtils from '@/utils/LocalStorageUtils';
import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

const messages = {
    [Locales.EN]: en, [Locales.PT]: pt
};

export default new VueI18n({
    messages, locale: LocalStorageUtils.getLocale(), fallbackLocale: Locales.EN
});