class LocalStorageUtils {
    private static locale = 'locale';

    public static getLocale() {
        return localStorage.getItem(this.locale) ?? window.navigator.language;
    }

    public static setLocale(string: string) {
        localStorage.setItem(this.locale, string);
    }
}

export default LocalStorageUtils;