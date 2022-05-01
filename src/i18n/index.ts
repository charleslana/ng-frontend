import {Locales} from './locales';

import en from './translation/en.json'
import pt from './translation/pt.json';

export const messages = {
    [Locales.EN]: en, [Locales.PT]: pt
};

export const defaultLocale = Locales.EN;