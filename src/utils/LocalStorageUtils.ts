class LocalStorageUtils {
    private static locale = 'locale';
    private static userTheme = 'user-theme';

    public static getLocale() {
        return localStorage.getItem(this.locale) ?? window.navigator.language;
    }

    public static setLocale(string: string): void {
        localStorage.setItem(this.locale, string);
    }

    public static getUserTheme() {
        const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
        let getPreferenceTheme = 'light-theme';
        if (hasDarkPreference) {
            getPreferenceTheme = 'dark-theme';
        }
        return localStorage.getItem(this.userTheme) ?? getPreferenceTheme;
    }

    public static setUserTheme(string: string): void {
        localStorage.setItem(this.userTheme, string);
    }
}

export default LocalStorageUtils;