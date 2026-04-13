import { EventEmitter, Inject, Injectable, InjectionToken } from "@angular/core";
import { concat, forkJoin, isObservable, of, defer } from "rxjs";
import { concatMap, map, shareReplay, switchMap, take } from "rxjs/operators";
import { getValue, isDefined, isArray, isString, mergeDeep, setValue, isDict } from "./util";
import * as i0 from "@angular/core";
import * as i1 from "./translate.store";
import * as i2 from "./translate.loader";
import * as i3 from "./translate.compiler";
import * as i4 from "./translate.parser";
import * as i5 from "./missing-translation-handler";
export const ISOALTE_TRANSLATE_SERVICE = new InjectionToken('ISOALTE_TRANSLATE_SERVICE');
export const USE_DEFAULT_LANG = new InjectionToken('USE_DEFAULT_LANG');
export const DEFAULT_LANGUAGE = new InjectionToken('DEFAULT_LANGUAGE');
export const USE_EXTEND = new InjectionToken('USE_EXTEND');
const makeObservable = (value) => {
    return isObservable(value) ? value : of(value);
};
export class TranslateService {
    store;
    currentLoader;
    compiler;
    parser;
    missingTranslationHandler;
    useDefaultLang;
    isolate;
    extend;
    loadingTranslations;
    pending = false;
    _onTranslationChange = new EventEmitter();
    _onLangChange = new EventEmitter();
    _onDefaultLangChange = new EventEmitter();
    _defaultLang;
    _currentLang;
    _langs = [];
    _translations = {};
    _translationRequests = {};
    lastUseLanguage = null;
    /**
     * An EventEmitter to listen to translation change events
     * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
       *     // do something
       * });
     */
    get onTranslationChange() {
        return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
    }
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
       *     // do something
       * });
     */
    get onLangChange() {
        return this.isolate ? this._onLangChange : this.store.onLangChange;
    }
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
       *     // do something
       * });
     */
    get onDefaultLangChange() {
        return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
    }
    /**
     * The default lang to fallback when translations are missing on the current lang
     */
    get defaultLang() {
        return this.isolate ? this._defaultLang : this.store.defaultLang;
    }
    set defaultLang(defaultLang) {
        if (this.isolate) {
            this._defaultLang = defaultLang;
        }
        else {
            this.store.defaultLang = defaultLang;
        }
    }
    /**
     * The lang currently used
     */
    get currentLang() {
        return this.isolate ? this._currentLang : this.store.currentLang;
    }
    set currentLang(currentLang) {
        if (this.isolate) {
            this._currentLang = currentLang;
        }
        else {
            this.store.currentLang = currentLang;
        }
    }
    /**
     * an array of langs
     */
    get langs() {
        return this.isolate ? this._langs : this.store.langs;
    }
    set langs(langs) {
        if (this.isolate) {
            this._langs = langs;
        }
        else {
            this.store.langs = langs;
        }
    }
    /**
     * a list of translations per lang
     */
    get translations() {
        return this.isolate ? this._translations : this.store.translations;
    }
    set translations(translations) {
        if (this.isolate) {
            this._translations = translations;
        }
        else {
            this.store.translations = translations;
        }
    }
    /**
     *
     * @param store an instance of the store (that is supposed to be unique)
     * @param currentLoader An instance of the loader currently used
     * @param compiler An instance of the compiler currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     * @param useDefaultLang whether we should use default language translation when current language translation is missing.
     * @param isolate whether this service should use the store or not
     * @param extend To make a child module extend (and use) translations from parent modules.
     * @param defaultLanguage Set the default language using configuration
     */
    constructor(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang = true, isolate = false, extend = false, defaultLanguage) {
        this.store = store;
        this.currentLoader = currentLoader;
        this.compiler = compiler;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.useDefaultLang = useDefaultLang;
        this.isolate = isolate;
        this.extend = extend;
        /** set the default language from configuration */
        if (defaultLanguage) {
            this.setDefaultLang(defaultLanguage);
        }
    }
    /**
     * Sets the default language to use as a fallback
     */
    setDefaultLang(lang) {
        if (lang === this.defaultLang) {
            return;
        }
        const pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (this.defaultLang == null) {
                this.defaultLang = lang;
            }
            pending.pipe(take(1))
                .subscribe(() => {
                this.changeDefaultLang(lang);
            });
        }
        else { // we already have this language
            this.changeDefaultLang(lang);
        }
    }
    /**
     * Gets the default language used
     */
    getDefaultLang() {
        return this.defaultLang;
    }
    /**
     * Changes the lang currently used
     */
    use(lang) {
        // remember the language that was called
        // we need this with multiple fast calls to use()
        // where translation loads might complete in random order
        this.lastUseLanguage = lang;
        // don't change the language if the language given is already selected
        if (lang === this.currentLang) {
            return of(this.translations[lang]);
        }
        // on init set the currentLang immediately
        if (!this.currentLang) {
            this.currentLang = lang;
        }
        const pending = this.retrieveTranslations(lang);
        if (isObservable(pending)) {
            pending.pipe(take(1))
                .subscribe(() => {
                this.changeLang(lang);
            });
            return pending;
        }
        else {
            // we have this language, return an Observable
            this.changeLang(lang);
            return of(this.translations[lang]);
        }
    }
    /**
     * Changes the current lang
     */
    changeLang(lang) {
        // received a new language file
        // but this was not the one requested last
        if (lang !== this.lastUseLanguage) {
            return;
        }
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (this.defaultLang == null) {
            this.changeDefaultLang(lang);
        }
    }
    /**
     * Retrieves the given translations
     */
    retrieveTranslations(lang) {
        // if this language is unavailable or extend is true, ask for it
        if (typeof this.translations[lang] === "undefined" || this.extend) {
            this._translationRequests[lang] = this._translationRequests[lang] || this.loadAndCompileTranslations(lang);
            return this._translationRequests[lang];
        }
        return undefined;
    }
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     *
     * @deprecated This function is meant for internal use. There should
     * be no reason to use outside this service. You can plug into this
     * functionality by using a customer TranslateLoader or TranslateCompiler.
     * To load a new language use setDefaultLang() and/or use()
     */
    getTranslation(lang) {
        return this.loadAndCompileTranslations(lang);
    }
    loadAndCompileTranslations(lang) {
        this.pending = true;
        const loadingTranslations = this.currentLoader.getTranslation(lang).pipe(shareReplay(1), take(1));
        this.loadingTranslations = loadingTranslations.pipe(map((res) => this.compiler.compileTranslations(res, lang)), shareReplay(1), take(1));
        this.loadingTranslations
            .subscribe({
            next: (res) => {
                this.translations[lang] = this.extend && this.translations[lang] ? { ...res, ...this.translations[lang] } : res;
                this.updateLangs();
                this.pending = false;
            },
            error: (err) => {
                void err;
                this.pending = false;
            }
        });
        return loadingTranslations;
    }
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     */
    setTranslation(lang, translations, shouldMerge = false) {
        const interpolatableTranslations = this.compiler.compileTranslations(translations, lang);
        if ((shouldMerge || this.extend) && this.translations[lang]) {
            this.translations[lang] = mergeDeep(this.translations[lang], interpolatableTranslations);
        }
        else {
            this.translations[lang] = interpolatableTranslations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Returns an array of currently available langs
     */
    getLangs() {
        return this.langs;
    }
    /**
     * Add available languages
     */
    addLangs(langs) {
        langs.forEach((lang) => {
            if (this.langs.indexOf(lang) === -1) {
                this.langs.push(lang);
            }
        });
    }
    /**
     * Update the list of available languages
     */
    updateLangs() {
        this.addLangs(Object.keys(this.translations));
    }
    getParsedResultForKey(translations, key, interpolateParams) {
        let res;
        if (translations) {
            res = this.runInterpolation(getValue(translations, key), interpolateParams);
        }
        if (res === undefined && this.defaultLang != null && this.defaultLang !== this.currentLang && this.useDefaultLang) {
            res = this.runInterpolation(getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (res === undefined) {
            const params = { key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return res !== undefined ? res : key;
    }
    runInterpolation(translations, interpolateParams) {
        if (isArray(translations)) {
            return translations.map((translation) => this.runInterpolation(translation, interpolateParams));
        }
        else if (isDict(translations)) {
            const result = {};
            for (const key in translations) {
                result[key] = this.runInterpolation(translations[key], interpolateParams);
            }
            return result;
        }
        else {
            return this.parser.interpolate(translations, interpolateParams);
        }
    }
    /**
     * Returns the parsed result of the translations
     */
    getParsedResult(translations, key, interpolateParams) {
        // handle a bunch of keys
        if (key instanceof Array) {
            const result = {};
            let observables = false;
            for (const k of key) {
                result[k] = this.getParsedResultForKey(translations, k, interpolateParams);
                observables = observables || isObservable(result[k]);
            }
            if (!observables) {
                return result;
            }
            const sources = key.map(k => makeObservable(result[k]));
            return forkJoin(sources).pipe(map((arr) => {
                const obj = {};
                arr.forEach((value, index) => {
                    obj[key[index]] = value;
                });
                return obj;
            }));
        }
        return this.getParsedResultForKey(translations, key, interpolateParams);
    }
    /**
     * Gets the translated value of a key (or an array of keys)
     * @returns the translated key, or an object of translated keys
     */
    get(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" is required and cannot be empty`);
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return this.loadingTranslations.pipe(concatMap((res) => {
                return makeObservable(this.getParsedResult(res, key, interpolateParams));
            }));
        }
        return makeObservable(this.getParsedResult(this.translations[this.currentLang], key, interpolateParams));
    }
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the translation changes.
     * @returns A stream of the translated key, or an object of translated keys
     */
    getStreamOnTranslationChange(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" is required and cannot be empty`);
        }
        return concat(defer(() => this.get(key, interpolateParams)), this.onTranslationChange.pipe(switchMap((event) => {
            const res = this.getParsedResult(event.translations, key, interpolateParams);
            return makeObservable(res);
        })));
    }
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @returns A stream of the translated key, or an object of translated keys
     */
    stream(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        return concat(defer(() => this.get(key, interpolateParams)), this.onLangChange.pipe(switchMap((event) => {
            const res = this.getParsedResult(event.translations, key, interpolateParams);
            return makeObservable(res);
        })));
    }
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages
     * will be used except any promise handling.
     */
    instant(key, interpolateParams) {
        if (!isDefined(key) || key.length === 0) {
            throw new Error('Parameter "key" is required and cannot be empty');
        }
        const result = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (isObservable(result)) {
            if (Array.isArray(key)) {
                return key.reduce((acc, currKey) => {
                    acc[currKey] = currKey;
                    return acc;
                }, {});
            }
            return key;
        }
        return result;
    }
    /**
     * Sets the translated value of a key, after compiling it
     */
    set(key, translation, lang = this.currentLang) {
        setValue(this.translations[lang], key, isString(translation)
            ? this.compiler.compile(translation, lang)
            : this.compiler.compileTranslations(translation, lang));
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Changes the default lang
     */
    changeDefaultLang(lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Allows to reload the lang file from the file
     */
    reloadLang(lang) {
        this.resetLang(lang);
        return this.loadAndCompileTranslations(lang);
    }
    /**
     * Deletes inner translation
     */
    resetLang(lang) {
        delete this._translationRequests[lang];
        delete this.translations[lang];
    }
    /**
     * Returns the language code name from the browser, e.g. "de"
     */
    getBrowserLang() {
        if (typeof window === 'undefined' || !window.navigator) {
            return undefined;
        }
        const browserLang = this.getBrowserCultureLang();
        return browserLang ? browserLang.split(/[-_]/)[0] : undefined;
    }
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     */
    getBrowserCultureLang() {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        return window.navigator.languages
            ? window.navigator.languages[0]
            : (window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateService, deps: [{ token: i1.TranslateStore }, { token: i2.TranslateLoader }, { token: i3.TranslateCompiler }, { token: i4.TranslateParser }, { token: i5.MissingTranslationHandler }, { token: USE_DEFAULT_LANG }, { token: ISOALTE_TRANSLATE_SERVICE }, { token: USE_EXTEND }, { token: DEFAULT_LANGUAGE }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.TranslateStore }, { type: i2.TranslateLoader }, { type: i3.TranslateCompiler }, { type: i4.TranslateParser }, { type: i5.MissingTranslationHandler }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [USE_DEFAULT_LANG]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ISOALTE_TRANSLATE_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [USE_EXTEND]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DEFAULT_LANGUAGE]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJhbnNsYXRlL3NyYy9saWIvdHJhbnNsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTTVFLE9BQU8sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7QUFFM0YsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsSUFBSSxjQUFjLENBQVMsMkJBQTJCLENBQUMsQ0FBQztBQUNqRyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBUyxrQkFBa0IsQ0FBQyxDQUFDO0FBQy9FLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFTLGtCQUFrQixDQUFDLENBQUM7QUFDL0UsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLElBQUksY0FBYyxDQUFTLFlBQVksQ0FBQyxDQUFDO0FBc0VuRSxNQUFNLGNBQWMsR0FBRyxDQUFJLEtBQXdCLEVBQWlCLEVBQUU7SUFDcEUsT0FBTyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pELENB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QUM7SUFDOUcsQ0FBQzt3R0F2aUJVLGdCQUFnQix3TEF5SFAsZ0JBQWdCLGFBQ2hCLHlCQUF5QixhQUN6QixVQUFVLGFBQ1YsZ0JBQWdCOzRHQTVIekIsZ0JBQWdCLGNBRmYsTUFBTTs7NEZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBMEhjLE1BQU07MkJBQUMsZ0JBQWdCOzswQkFDdkIsTUFBTTsyQkFBQyx5QkFBeUI7OzBCQUNoQyxNQUFNOzJCQUFDLFVBQVU7OzBCQUNqQixNQUFNOzJCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtjb25jYXQsIGZvcmtKb2luLCBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mLCBkZWZlcn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Y29uY2F0TWFwLCBtYXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAsIHRha2V9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zfSBmcm9tIFwiLi9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXJcIjtcbmltcG9ydCB7VHJhbnNsYXRlQ29tcGlsZXJ9IGZyb20gXCIuL3RyYW5zbGF0ZS5jb21waWxlclwiO1xuaW1wb3J0IHtUcmFuc2xhdGVMb2FkZXJ9IGZyb20gXCIuL3RyYW5zbGF0ZS5sb2FkZXJcIjtcbmltcG9ydCB7SW50ZXJwb2xhdGVGdW5jdGlvbiwgVHJhbnNsYXRlUGFyc2VyfSBmcm9tIFwiLi90cmFuc2xhdGUucGFyc2VyXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVN0b3JlfSBmcm9tIFwiLi90cmFuc2xhdGUuc3RvcmVcIjtcbmltcG9ydCB7Z2V0VmFsdWUsIGlzRGVmaW5lZCwgaXNBcnJheSwgaXNTdHJpbmcsIG1lcmdlRGVlcCwgc2V0VmFsdWUsIGlzRGljdH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgY29uc3QgSVNPQUxURV9UUkFOU0xBVEVfU0VSVklDRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdJU09BTFRFX1RSQU5TTEFURV9TRVJWSUNFJyk7XG5leHBvcnQgY29uc3QgVVNFX0RFRkFVTFRfTEFORyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdVU0VfREVGQVVMVF9MQU5HJyk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9MQU5HVUFHRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdERUZBVUxUX0xBTkdVQUdFJyk7XG5leHBvcnQgY29uc3QgVVNFX0VYVEVORCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdVU0VfRVhURU5EJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgdHlwZSBJbnRlcnBvbGF0aW9uUGFyYW1ldGVycyA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmV4cG9ydCB0eXBlIFRyYW5zbGF0aW9uID1cbiAgc3RyaW5nIHxcbiAgVHJhbnNsYXRpb25bXSB8XG4gIFRyYW5zbGF0aW9uT2JqZWN0IHxcblxuICAvLyByZXF1aXJlZCB0byBwcmV2ZW50IGVycm9yIFwiVHlwZSBpbnN0YW50aWF0aW9uIGlzIGV4Y2Vzc2l2ZWx5IGRlZXAgYW5kIHBvc3NpYmx5IGluZmluaXRlLlwiXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIGFueVxuICA7XG5cblxuLy8gdXNpbmcgUmVjb3JkPD4gZG9lcyBub3Qgd29yayBiZWNhdXNlIFRTIGRvZXMgbm90IHN1cHBvcnQgcmVjdXJzaXZlIGRlZmluaXRpb25zXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2NvbnNpc3RlbnQtaW5kZXhlZC1vYmplY3Qtc3R5bGVcbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25PYmplY3Qge1xuICBba2V5OiBzdHJpbmddOiBUcmFuc2xhdGlvblxufVxuXG5cbmV4cG9ydCB0eXBlIEludGVycG9sYXRhYmxlVHJhbnNsYXRpb24gPVxuICBzdHJpbmcgfFxuICBJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uW10gfFxuICBJbnRlcnBvbGF0ZUZ1bmN0aW9uIHxcbiAgSW50ZXJwb2xhdGFibGVUcmFuc2xhdGlvbk9iamVjdCB8XG5cbiAgLy8gcmVxdWlyZWQgdG8gcHJldmVudCBlcnJvciBcIlR5cGUgaW5zdGFudGlhdGlvbiBpcyBleGNlc3NpdmVseSBkZWVwIGFuZCBwb3NzaWJseSBpbmZpbml0ZS5cIlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBhbnlcbiAgO1xuXG5cbi8vIHVzaW5nIFJlY29yZDw+IGRvZXMgbm90IHdvcmsgYmVjYXVzZSBUUyBkb2VzIG5vdCBzdXBwb3J0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9jb25zaXN0ZW50LWluZGV4ZWQtb2JqZWN0LXN0eWxlXG5leHBvcnQgaW50ZXJmYWNlIEludGVycG9sYXRhYmxlVHJhbnNsYXRpb25PYmplY3Qge1xuICBba2V5OiBzdHJpbmddOiBJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uXG59XG5cblxuZXhwb3J0IHR5cGUgTGFuZ3VhZ2UgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25DaGFuZ2VFdmVudCB7XG4gIHRyYW5zbGF0aW9uczogSW50ZXJwb2xhdGFibGVUcmFuc2xhdGlvbk9iamVjdDtcbiAgbGFuZzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbmdDaGFuZ2VFdmVudCB7XG4gIGxhbmc6IHN0cmluZztcbiAgdHJhbnNsYXRpb25zOiBJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uT2JqZWN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQge1xuICBsYW5nOiBzdHJpbmc7XG4gIHRyYW5zbGF0aW9uczogSW50ZXJwb2xhdGFibGVUcmFuc2xhdGlvbk9iamVjdDtcbn1cblxuZGVjbGFyZSBpbnRlcmZhY2UgV2luZG93IHtcbiAgbmF2aWdhdG9yOiB7XG4gICAgbGFuZ3VhZ2VzPzogc3RyaW5nW10sXG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmcsXG4gICAgYnJvd3Nlckxhbmd1YWdlPzogc3RyaW5nLFxuICAgIHVzZXJMYW5ndWFnZT86IHN0cmluZyxcbiAgfTtcbn1cblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdztcblxuY29uc3QgbWFrZU9ic2VydmFibGUgPSA8VD4odmFsdWU6IFQgfCBPYnNlcnZhYmxlPFQ+KTogT2JzZXJ2YWJsZTxUPiA9PiB7XG4gIHJldHVybiBpc09ic2VydmFibGUodmFsdWUpID8gdmFsdWUgOiBvZih2YWx1ZSk7XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsb2FkaW5nVHJhbnNsYXRpb25zITogT2JzZXJ2YWJsZTxJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uT2JqZWN0PjtcbiAgcHJpdmF0ZSBwZW5kaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX29uVHJhbnNsYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD4oKTtcbiAgcHJpdmF0ZSBfb25MYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PigpO1xuICBwcml2YXRlIF9vbkRlZmF1bHRMYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+KCk7XG4gIHByaXZhdGUgX2RlZmF1bHRMYW5nITogc3RyaW5nO1xuICBwcml2YXRlIF9jdXJyZW50TGFuZyE6IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3M6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgX3RyYW5zbGF0aW9uczogUmVjb3JkPHN0cmluZywgSW50ZXJwb2xhdGFibGVUcmFuc2xhdGlvbk9iamVjdD4gPSB7fTtcbiAgcHJpdmF0ZSBfdHJhbnNsYXRpb25SZXF1ZXN0czogUmVjb3JkPHN0cmluZywgT2JzZXJ2YWJsZTxUcmFuc2xhdGlvbk9iamVjdD4+ID0ge307XG4gIHByaXZhdGUgbGFzdFVzZUxhbmd1YWdlOiBzdHJpbmd8bnVsbCA9IG51bGw7XG5cblxuICAvKipcbiAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byB0cmFuc2xhdGlvbiBjaGFuZ2UgZXZlbnRzXG4gICAqIG9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICogfSk7XG4gICAqL1xuICBnZXQgb25UcmFuc2xhdGlvbkNoYW5nZSgpOiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9vblRyYW5zbGF0aW9uQ2hhbmdlIDogdGhpcy5zdG9yZS5vblRyYW5zbGF0aW9uQ2hhbmdlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gbGFuZyBjaGFuZ2UgZXZlbnRzXG4gICAqIG9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAqIH0pO1xuICAgKi9cbiAgZ2V0IG9uTGFuZ0NoYW5nZSgpOiBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uTGFuZ0NoYW5nZSA6IHRoaXMuc3RvcmUub25MYW5nQ2hhbmdlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gZGVmYXVsdCBsYW5nIGNoYW5nZSBldmVudHNcbiAgICogb25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogRGVmYXVsdExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgKiB9KTtcbiAgICovXG4gIGdldCBvbkRlZmF1bHRMYW5nQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9vbkRlZmF1bHRMYW5nQ2hhbmdlIDogdGhpcy5zdG9yZS5vbkRlZmF1bHRMYW5nQ2hhbmdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGxhbmcgdG8gZmFsbGJhY2sgd2hlbiB0cmFuc2xhdGlvbnMgYXJlIG1pc3Npbmcgb24gdGhlIGN1cnJlbnQgbGFuZ1xuICAgKi9cbiAgZ2V0IGRlZmF1bHRMYW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX2RlZmF1bHRMYW5nIDogdGhpcy5zdG9yZS5kZWZhdWx0TGFuZztcbiAgfVxuXG4gIHNldCBkZWZhdWx0TGFuZyhkZWZhdWx0TGFuZzogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgdGhpcy5fZGVmYXVsdExhbmcgPSBkZWZhdWx0TGFuZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kZWZhdWx0TGFuZyA9IGRlZmF1bHRMYW5nO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbGFuZyBjdXJyZW50bHkgdXNlZFxuICAgKi9cbiAgZ2V0IGN1cnJlbnRMYW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX2N1cnJlbnRMYW5nIDogdGhpcy5zdG9yZS5jdXJyZW50TGFuZztcbiAgfVxuXG4gIHNldCBjdXJyZW50TGFuZyhjdXJyZW50TGFuZzogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgdGhpcy5fY3VycmVudExhbmcgPSBjdXJyZW50TGFuZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5jdXJyZW50TGFuZyA9IGN1cnJlbnRMYW5nO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhbiBhcnJheSBvZiBsYW5nc1xuICAgKi9cbiAgZ2V0IGxhbmdzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fbGFuZ3MgOiB0aGlzLnN0b3JlLmxhbmdzO1xuICB9XG5cbiAgc2V0IGxhbmdzKGxhbmdzOiBzdHJpbmdbXSkge1xuICAgIGlmICh0aGlzLmlzb2xhdGUpIHtcbiAgICAgIHRoaXMuX2xhbmdzID0gbGFuZ3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUubGFuZ3MgPSBsYW5ncztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYSBsaXN0IG9mIHRyYW5zbGF0aW9ucyBwZXIgbGFuZ1xuICAgKi9cbiAgZ2V0IHRyYW5zbGF0aW9ucygpOiBSZWNvcmQ8c3RyaW5nLCBJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uT2JqZWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX3RyYW5zbGF0aW9ucyA6IHRoaXMuc3RvcmUudHJhbnNsYXRpb25zO1xuICB9XG5cbiAgc2V0IHRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnM6IFJlY29yZDxzdHJpbmcsIEludGVycG9sYXRhYmxlVHJhbnNsYXRpb25PYmplY3Q+KSB7XG4gICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgdGhpcy5fdHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHN0b3JlIGFuIGluc3RhbmNlIG9mIHRoZSBzdG9yZSAodGhhdCBpcyBzdXBwb3NlZCB0byBiZSB1bmlxdWUpXG4gICAqIEBwYXJhbSBjdXJyZW50TG9hZGVyIEFuIGluc3RhbmNlIG9mIHRoZSBsb2FkZXIgY3VycmVudGx5IHVzZWRcbiAgICogQHBhcmFtIGNvbXBpbGVyIEFuIGluc3RhbmNlIG9mIHRoZSBjb21waWxlciBjdXJyZW50bHkgdXNlZFxuICAgKiBAcGFyYW0gcGFyc2VyIEFuIGluc3RhbmNlIG9mIHRoZSBwYXJzZXIgY3VycmVudGx5IHVzZWRcbiAgICogQHBhcmFtIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgQSBoYW5kbGVyIGZvciBtaXNzaW5nIHRyYW5zbGF0aW9ucy5cbiAgICogQHBhcmFtIHVzZURlZmF1bHRMYW5nIHdoZXRoZXIgd2Ugc2hvdWxkIHVzZSBkZWZhdWx0IGxhbmd1YWdlIHRyYW5zbGF0aW9uIHdoZW4gY3VycmVudCBsYW5ndWFnZSB0cmFuc2xhdGlvbiBpcyBtaXNzaW5nLlxuICAgKiBAcGFyYW0gaXNvbGF0ZSB3aGV0aGVyIHRoaXMgc2VydmljZSBzaG91bGQgdXNlIHRoZSBzdG9yZSBvciBub3RcbiAgICogQHBhcmFtIGV4dGVuZCBUbyBtYWtlIGEgY2hpbGQgbW9kdWxlIGV4dGVuZCAoYW5kIHVzZSkgdHJhbnNsYXRpb25zIGZyb20gcGFyZW50IG1vZHVsZXMuXG4gICAqIEBwYXJhbSBkZWZhdWx0TGFuZ3VhZ2UgU2V0IHRoZSBkZWZhdWx0IGxhbmd1YWdlIHVzaW5nIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogVHJhbnNsYXRlU3RvcmUsXG4gICAgICAgICAgICAgIHB1YmxpYyBjdXJyZW50TG9hZGVyOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBjb21waWxlcjogVHJhbnNsYXRlQ29tcGlsZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBwYXJzZXI6IFRyYW5zbGF0ZVBhcnNlcixcbiAgICAgICAgICAgICAgcHVibGljIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsXG4gICAgICAgICAgICAgIEBJbmplY3QoVVNFX0RFRkFVTFRfTEFORykgcHJpdmF0ZSB1c2VEZWZhdWx0TGFuZyA9IHRydWUsXG4gICAgICAgICAgICAgIEBJbmplY3QoSVNPQUxURV9UUkFOU0xBVEVfU0VSVklDRSkgcHJpdmF0ZSBpc29sYXRlID0gZmFsc2UsXG4gICAgICAgICAgICAgIEBJbmplY3QoVVNFX0VYVEVORCkgcHJpdmF0ZSBleHRlbmQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgQEluamVjdChERUZBVUxUX0xBTkdVQUdFKSBkZWZhdWx0TGFuZ3VhZ2U6IHN0cmluZykge1xuICAgIC8qKiBzZXQgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgZnJvbSBjb25maWd1cmF0aW9uICovXG4gICAgaWYgKGRlZmF1bHRMYW5ndWFnZSkge1xuICAgICAgdGhpcy5zZXREZWZhdWx0TGFuZyhkZWZhdWx0TGFuZ3VhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRvIHVzZSBhcyBhIGZhbGxiYWNrXG4gICAqL1xuICBwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGxhbmcgPT09IHRoaXMuZGVmYXVsdExhbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwZW5kaW5nID0gdGhpcy5yZXRyaWV2ZVRyYW5zbGF0aW9ucyhsYW5nKTtcblxuICAgIGlmICh0eXBlb2YgcGVuZGluZyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gb24gaW5pdCBzZXQgdGhlIGRlZmF1bHRMYW5nIGltbWVkaWF0ZWx5XG4gICAgICBpZiAodGhpcy5kZWZhdWx0TGFuZyA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdExhbmcgPSBsYW5nO1xuICAgICAgfVxuXG4gICAgICBwZW5kaW5nLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZWZhdWx0TGFuZyhsYW5nKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHsgLy8gd2UgYWxyZWFkeSBoYXZlIHRoaXMgbGFuZ3VhZ2VcbiAgICAgIHRoaXMuY2hhbmdlRGVmYXVsdExhbmcobGFuZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgdXNlZFxuICAgKi9cbiAgcHVibGljIGdldERlZmF1bHRMYW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExhbmc7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgbGFuZyBjdXJyZW50bHkgdXNlZFxuICAgKi9cbiAgcHVibGljIHVzZShsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEludGVycG9sYXRhYmxlVHJhbnNsYXRpb25PYmplY3Q+IHtcblxuICAgIC8vIHJlbWVtYmVyIHRoZSBsYW5ndWFnZSB0aGF0IHdhcyBjYWxsZWRcbiAgICAvLyB3ZSBuZWVkIHRoaXMgd2l0aCBtdWx0aXBsZSBmYXN0IGNhbGxzIHRvIHVzZSgpXG4gICAgLy8gd2hlcmUgdHJhbnNsYXRpb24gbG9hZHMgbWlnaHQgY29tcGxldGUgaW4gcmFuZG9tIG9yZGVyXG4gICAgdGhpcy5sYXN0VXNlTGFuZ3VhZ2UgPSBsYW5nO1xuXG4gICAgLy8gZG9uJ3QgY2hhbmdlIHRoZSBsYW5ndWFnZSBpZiB0aGUgbGFuZ3VhZ2UgZ2l2ZW4gaXMgYWxyZWFkeSBzZWxlY3RlZFxuICAgIGlmIChsYW5nID09PSB0aGlzLmN1cnJlbnRMYW5nKSB7XG4gICAgICByZXR1cm4gb2YodGhpcy50cmFuc2xhdGlvbnNbbGFuZ10pO1xuICAgIH1cblxuICAgIC8vIG9uIGluaXQgc2V0IHRoZSBjdXJyZW50TGFuZyBpbW1lZGlhdGVseVxuICAgIGlmICghdGhpcy5jdXJyZW50TGFuZykge1xuICAgICAgdGhpcy5jdXJyZW50TGFuZyA9IGxhbmc7XG4gICAgfVxuXG4gICAgY29uc3QgcGVuZGluZyA9IHRoaXMucmV0cmlldmVUcmFuc2xhdGlvbnMobGFuZyk7XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlKHBlbmRpbmcpKSB7XG5cbiAgICAgIHBlbmRpbmcucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYW5nZUxhbmcobGFuZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcGVuZGluZztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyB3ZSBoYXZlIHRoaXMgbGFuZ3VhZ2UsIHJldHVybiBhbiBPYnNlcnZhYmxlXG4gICAgICB0aGlzLmNoYW5nZUxhbmcobGFuZyk7XG4gICAgICByZXR1cm4gb2YodGhpcy50cmFuc2xhdGlvbnNbbGFuZ10pO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGN1cnJlbnQgbGFuZ1xuICAgKi9cbiAgcHJpdmF0ZSBjaGFuZ2VMYW5nKGxhbmc6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgLy8gcmVjZWl2ZWQgYSBuZXcgbGFuZ3VhZ2UgZmlsZVxuICAgIC8vIGJ1dCB0aGlzIHdhcyBub3QgdGhlIG9uZSByZXF1ZXN0ZWQgbGFzdFxuICAgIGlmKGxhbmcgIT09IHRoaXMubGFzdFVzZUxhbmd1YWdlKVxuICAgIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRMYW5nID0gbGFuZztcblxuICAgIHRoaXMub25MYW5nQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGRlZmF1bHQgbGFuZywgdXNlIHRoZSBvbmUgdGhhdCB3ZSBqdXN0IHNldFxuICAgIGlmICh0aGlzLmRlZmF1bHRMYW5nID09IG51bGwpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGVmYXVsdExhbmcobGFuZyk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBnaXZlbiB0cmFuc2xhdGlvbnNcbiAgICovXG4gIHByaXZhdGUgcmV0cmlldmVUcmFuc2xhdGlvbnMobGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUcmFuc2xhdGlvbk9iamVjdD4gfCB1bmRlZmluZWQge1xuXG4gICAgLy8gaWYgdGhpcyBsYW5ndWFnZSBpcyB1bmF2YWlsYWJsZSBvciBleHRlbmQgaXMgdHJ1ZSwgYXNrIGZvciBpdFxuICAgIGlmICh0eXBlb2YgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPT09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy5leHRlbmQpIHtcbiAgICAgIHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHNbbGFuZ10gPSB0aGlzLl90cmFuc2xhdGlvblJlcXVlc3RzW2xhbmddIHx8IHRoaXMubG9hZEFuZENvbXBpbGVUcmFuc2xhdGlvbnMobGFuZyk7XG4gICAgICByZXR1cm4gdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cblxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIG9iamVjdCBvZiB0cmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2Ugd2l0aCB0aGUgY3VycmVudCBsb2FkZXJcbiAgICogYW5kIHBhc3NlcyBpdCB0aHJvdWdoIHRoZSBjb21waWxlclxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBUaGlzIGZ1bmN0aW9uIGlzIG1lYW50IGZvciBpbnRlcm5hbCB1c2UuIFRoZXJlIHNob3VsZFxuICAgKiBiZSBubyByZWFzb24gdG8gdXNlIG91dHNpZGUgdGhpcyBzZXJ2aWNlLiBZb3UgY2FuIHBsdWcgaW50byB0aGlzXG4gICAqIGZ1bmN0aW9uYWxpdHkgYnkgdXNpbmcgYSBjdXN0b21lciBUcmFuc2xhdGVMb2FkZXIgb3IgVHJhbnNsYXRlQ29tcGlsZXIuXG4gICAqIFRvIGxvYWQgYSBuZXcgbGFuZ3VhZ2UgdXNlIHNldERlZmF1bHRMYW5nKCkgYW5kL29yIHVzZSgpXG4gICAqL1xuICBwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uT2JqZWN0PlxuICB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkQW5kQ29tcGlsZVRyYW5zbGF0aW9ucyhsYW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFuZENvbXBpbGVUcmFuc2xhdGlvbnMobGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uT2JqZWN0PiB7XG5cbiAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgbG9hZGluZ1RyYW5zbGF0aW9ucyA9IHRoaXMuY3VycmVudExvYWRlci5nZXRUcmFuc2xhdGlvbihsYW5nKS5waXBlKFxuICAgICAgc2hhcmVSZXBsYXkoMSksXG4gICAgICB0YWtlKDEpLFxuICAgICk7XG5cbiAgICB0aGlzLmxvYWRpbmdUcmFuc2xhdGlvbnMgPSBsb2FkaW5nVHJhbnNsYXRpb25zLnBpcGUoXG4gICAgICBtYXAoKHJlczpUcmFuc2xhdGlvbk9iamVjdCkgPT4gdGhpcy5jb21waWxlci5jb21waWxlVHJhbnNsYXRpb25zKHJlcywgbGFuZykpLFxuICAgICAgc2hhcmVSZXBsYXkoMSksXG4gICAgICB0YWtlKDEpLFxuICAgICk7XG5cbiAgICB0aGlzLmxvYWRpbmdUcmFuc2xhdGlvbnNcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAocmVzOiBJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uT2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSB0aGlzLmV4dGVuZCAmJiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA/IHsgLi4ucmVzLCAuLi50aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSB9IDogcmVzO1xuICAgICAgICAgIHRoaXMudXBkYXRlTGFuZ3MoKTtcbiAgICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICB2b2lkIGVycjtcbiAgICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gbG9hZGluZ1RyYW5zbGF0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW51YWxseSBzZXRzIGFuIG9iamVjdCBvZiB0cmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2VcbiAgICogYWZ0ZXIgcGFzc2luZyBpdCB0aHJvdWdoIHRoZSBjb21waWxlclxuICAgKi9cbiAgcHVibGljIHNldFRyYW5zbGF0aW9uKGxhbmc6IHN0cmluZywgdHJhbnNsYXRpb25zOiBJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uT2JqZWN0LCBzaG91bGRNZXJnZSA9IGZhbHNlKTogdm9pZCB7XG4gICAgY29uc3QgaW50ZXJwb2xhdGFibGVUcmFuc2xhdGlvbnMgPSB0aGlzLmNvbXBpbGVyLmNvbXBpbGVUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zLCBsYW5nKTtcbiAgICBpZiAoKHNob3VsZE1lcmdlIHx8IHRoaXMuZXh0ZW5kKSAmJiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSkge1xuICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSBtZXJnZURlZXAodGhpcy50cmFuc2xhdGlvbnNbbGFuZ10sIGludGVycG9sYXRhYmxlVHJhbnNsYXRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSBpbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9ucztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVMYW5ncygpO1xuICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZS5lbWl0KHtsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgYXZhaWxhYmxlIGxhbmdzXG4gICAqL1xuICBwdWJsaWMgZ2V0TGFuZ3MoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmxhbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhdmFpbGFibGUgbGFuZ3VhZ2VzXG4gICAqL1xuICBwdWJsaWMgYWRkTGFuZ3MobGFuZ3M6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgbGFuZ3MuZm9yRWFjaCgobGFuZzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGhpcy5sYW5ncy5pbmRleE9mKGxhbmcpID09PSAtMSkge1xuICAgICAgICB0aGlzLmxhbmdzLnB1c2gobGFuZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBsYW5ndWFnZXNcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlTGFuZ3MoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRMYW5ncyhPYmplY3Qua2V5cyh0aGlzLnRyYW5zbGF0aW9ucykpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJzZWRSZXN1bHRGb3JLZXkodHJhbnNsYXRpb25zOiBJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uLCBrZXk6IHN0cmluZywgaW50ZXJwb2xhdGVQYXJhbXM/OiBJbnRlcnBvbGF0aW9uUGFyYW1ldGVycyk6IFRyYW5zbGF0aW9ufE9ic2VydmFibGU8VHJhbnNsYXRpb24+XG4gIHtcbiAgICAgIGxldCByZXM6IFRyYW5zbGF0aW9uIHwgT2JzZXJ2YWJsZTxUcmFuc2xhdGlvbj4gfCB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgcmVzID0gdGhpcy5ydW5JbnRlcnBvbGF0aW9uKGdldFZhbHVlKHRyYW5zbGF0aW9ucywga2V5KSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzID09PSB1bmRlZmluZWQgJiYgdGhpcy5kZWZhdWx0TGFuZyAhPSBudWxsICYmIHRoaXMuZGVmYXVsdExhbmcgIT09IHRoaXMuY3VycmVudExhbmcgJiYgdGhpcy51c2VEZWZhdWx0TGFuZykge1xuICAgICAgICByZXMgPSB0aGlzLnJ1bkludGVycG9sYXRpb24oZ2V0VmFsdWUodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5kZWZhdWx0TGFuZ10sIGtleSksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyA9IHtrZXksIHRyYW5zbGF0ZVNlcnZpY2U6IHRoaXN9O1xuICAgICAgICBpZiAodHlwZW9mIGludGVycG9sYXRlUGFyYW1zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHBhcmFtcy5pbnRlcnBvbGF0ZVBhcmFtcyA9IGludGVycG9sYXRlUGFyYW1zO1xuICAgICAgICB9XG4gICAgICAgIHJlcyA9IHRoaXMubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlci5oYW5kbGUocGFyYW1zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcyAhPT0gdW5kZWZpbmVkID8gcmVzIDoga2V5O1xuICB9XG5cbiAgcHJpdmF0ZSBydW5JbnRlcnBvbGF0aW9uKHRyYW5zbGF0aW9uczogSW50ZXJwb2xhdGFibGVUcmFuc2xhdGlvbiwgaW50ZXJwb2xhdGVQYXJhbXM/OiBJbnRlcnBvbGF0aW9uUGFyYW1ldGVycyk6IFRyYW5zbGF0aW9uXG4gIHtcbiAgICBpZihpc0FycmF5KHRyYW5zbGF0aW9ucykpXG4gICAge1xuICAgICAgcmV0dXJuICh0cmFuc2xhdGlvbnMgYXMgVHJhbnNsYXRpb25bXSkubWFwKCh0cmFuc2xhdGlvbikgPT4gdGhpcy5ydW5JbnRlcnBvbGF0aW9uKHRyYW5zbGF0aW9uLCBpbnRlcnBvbGF0ZVBhcmFtcykpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0RpY3QodHJhbnNsYXRpb25zKSlcbiAgICB7XG4gICAgICBjb25zdCByZXN1bHQ6IFRyYW5zbGF0aW9uT2JqZWN0ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHRoaXMucnVuSW50ZXJwb2xhdGlvbih0cmFuc2xhdGlvbnNba2V5XSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlci5pbnRlcnBvbGF0ZSh0cmFuc2xhdGlvbnMsIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGFyc2VkIHJlc3VsdCBvZiB0aGUgdHJhbnNsYXRpb25zXG4gICAqL1xuICBwdWJsaWMgZ2V0UGFyc2VkUmVzdWx0KHRyYW5zbGF0aW9uczogSW50ZXJwb2xhdGFibGVUcmFuc2xhdGlvbiwga2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgaW50ZXJwb2xhdGVQYXJhbXM/OiBJbnRlcnBvbGF0aW9uUGFyYW1ldGVycyk6IFRyYW5zbGF0aW9ufFRyYW5zbGF0aW9uT2JqZWN0fE9ic2VydmFibGU8VHJhbnNsYXRpb258VHJhbnNsYXRpb25PYmplY3Q+IHtcblxuICAgIC8vIGhhbmRsZSBhIGJ1bmNoIG9mIGtleXNcbiAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgVHJhbnNsYXRpb258T2JzZXJ2YWJsZTxUcmFuc2xhdGlvbj4+ID0ge307XG5cbiAgICAgIGxldCBvYnNlcnZhYmxlcyA9IGZhbHNlO1xuICAgICAgZm9yIChjb25zdCBrIG9mIGtleSkge1xuICAgICAgICByZXN1bHRba10gPSB0aGlzLmdldFBhcnNlZFJlc3VsdEZvcktleSh0cmFuc2xhdGlvbnMsIGssIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgb2JzZXJ2YWJsZXMgPSBvYnNlcnZhYmxlcyB8fCBpc09ic2VydmFibGUocmVzdWx0W2tdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYnNlcnZhYmxlcykge1xuICAgICAgICByZXR1cm4gcmVzdWx0IGFzIFRyYW5zbGF0aW9uT2JqZWN0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzb3VyY2VzOiBPYnNlcnZhYmxlPFRyYW5zbGF0aW9uPltdID0ga2V5Lm1hcChrID0+IG1ha2VPYnNlcnZhYmxlKHJlc3VsdFtrXSkpO1xuICAgICAgcmV0dXJuIGZvcmtKb2luKHNvdXJjZXMpLnBpcGUoXG4gICAgICAgIG1hcCgoYXJyOiAoVHJhbnNsYXRpb24pW10pID0+IHtcbiAgICAgICAgICBjb25zdCBvYmo6IFRyYW5zbGF0aW9uT2JqZWN0ID0ge307XG4gICAgICAgICAgYXJyLmZvckVhY2goKHZhbHVlOlRyYW5zbGF0aW9uLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBvYmpba2V5W2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRQYXJzZWRSZXN1bHRGb3JLZXkodHJhbnNsYXRpb25zLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB0cmFuc2xhdGVkIHZhbHVlIG9mIGEga2V5IChvciBhbiBhcnJheSBvZiBrZXlzKVxuICAgKiBAcmV0dXJucyB0aGUgdHJhbnNsYXRlZCBrZXksIG9yIGFuIG9iamVjdCBvZiB0cmFuc2xhdGVkIGtleXNcbiAgICovXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgaW50ZXJwb2xhdGVQYXJhbXM/OiBJbnRlcnBvbGF0aW9uUGFyYW1ldGVycyk6IE9ic2VydmFibGU8VHJhbnNsYXRpb258VHJhbnNsYXRpb25PYmplY3Q+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChrZXkpIHx8ICFrZXkubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciBcImtleVwiIGlzIHJlcXVpcmVkIGFuZCBjYW5ub3QgYmUgZW1wdHlgKTtcbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgd2UgYXJlIGxvYWRpbmcgYSBuZXcgdHJhbnNsYXRpb24gdG8gdXNlXG4gICAgaWYgKHRoaXMucGVuZGluZykge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9ucy5waXBlKFxuICAgICAgICBjb25jYXRNYXAoKHJlczogSW50ZXJwb2xhdGFibGVUcmFuc2xhdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiBtYWtlT2JzZXJ2YWJsZSh0aGlzLmdldFBhcnNlZFJlc3VsdChyZXMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpKTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBtYWtlT2JzZXJ2YWJsZSh0aGlzLmdldFBhcnNlZFJlc3VsdCh0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXSwga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJlYW0gb2YgdHJhbnNsYXRlZCB2YWx1ZXMgb2YgYSBrZXkgKG9yIGFuIGFycmF5IG9mIGtleXMpIHdoaWNoIHVwZGF0ZXNcbiAgICogd2hlbmV2ZXIgdGhlIHRyYW5zbGF0aW9uIGNoYW5nZXMuXG4gICAqIEByZXR1cm5zIEEgc3RyZWFtIG9mIHRoZSB0cmFuc2xhdGVkIGtleSwgb3IgYW4gb2JqZWN0IG9mIHRyYW5zbGF0ZWQga2V5c1xuICAgKi9cbiAgcHVibGljIGdldFN0cmVhbU9uVHJhbnNsYXRpb25DaGFuZ2Uoa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgaW50ZXJwb2xhdGVQYXJhbXM/OiBJbnRlcnBvbGF0aW9uUGFyYW1ldGVycyk6IE9ic2VydmFibGU8VHJhbnNsYXRpb258VHJhbnNsYXRpb25PYmplY3Q+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChrZXkpIHx8ICFrZXkubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciBcImtleVwiIGlzIHJlcXVpcmVkIGFuZCBjYW5ub3QgYmUgZW1wdHlgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uY2F0KFxuICAgICAgZGVmZXIoKCkgPT4gdGhpcy5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykpLFxuICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoZXZlbnQ6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLmdldFBhcnNlZFJlc3VsdChldmVudC50cmFuc2xhdGlvbnMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgIHJldHVybiBtYWtlT2JzZXJ2YWJsZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmVhbSBvZiB0cmFuc2xhdGVkIHZhbHVlcyBvZiBhIGtleSAob3IgYW4gYXJyYXkgb2Yga2V5cykgd2hpY2ggdXBkYXRlc1xuICAgKiB3aGVuZXZlciB0aGUgbGFuZ3VhZ2UgY2hhbmdlcy5cbiAgICogQHJldHVybnMgQSBzdHJlYW0gb2YgdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXG4gICAqL1xuICBwdWJsaWMgc3RyZWFtKGtleTogc3RyaW5nIHwgc3RyaW5nW10sIGludGVycG9sYXRlUGFyYW1zPzogSW50ZXJwb2xhdGlvblBhcmFtZXRlcnMpOiBPYnNlcnZhYmxlPFRyYW5zbGF0aW9ufFRyYW5zbGF0aW9uT2JqZWN0PiB7XG4gICAgaWYgKCFpc0RlZmluZWQoa2V5KSB8fCAha2V5Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgXCJrZXlcIiByZXF1aXJlZGApO1xuICAgIH1cblxuICAgIHJldHVybiBjb25jYXQoXG4gICAgICBkZWZlcigoKSA9PiB0aGlzLmdldChrZXksIGludGVycG9sYXRlUGFyYW1zKSksXG4gICAgICB0aGlzLm9uTGFuZ0NoYW5nZS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLmdldFBhcnNlZFJlc3VsdChldmVudC50cmFuc2xhdGlvbnMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgIHJldHVybiBtYWtlT2JzZXJ2YWJsZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHRyYW5zbGF0aW9uIGluc3RhbnRseSBmcm9tIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiBsb2FkZWQgdHJhbnNsYXRpb24uXG4gICAqIEFsbCBydWxlcyByZWdhcmRpbmcgdGhlIGN1cnJlbnQgbGFuZ3VhZ2UsIHRoZSBwcmVmZXJyZWQgbGFuZ3VhZ2Ugb2YgZXZlbiBmYWxsYmFjayBsYW5ndWFnZXNcbiAgICogd2lsbCBiZSB1c2VkIGV4Y2VwdCBhbnkgcHJvbWlzZSBoYW5kbGluZy5cbiAgICovXG4gIHB1YmxpYyBpbnN0YW50KGtleTogc3RyaW5nIHwgc3RyaW5nW10sIGludGVycG9sYXRlUGFyYW1zPzogSW50ZXJwb2xhdGlvblBhcmFtZXRlcnMpOiBUcmFuc2xhdGlvbnxUcmFuc2xhdGlvbk9iamVjdFxuICB7XG4gICAgaWYgKCFpc0RlZmluZWQoa2V5KSB8fCBrZXkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcImtleVwiIGlzIHJlcXVpcmVkIGFuZCBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldFBhcnNlZFJlc3VsdCh0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXSwga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlKHJlc3VsdCkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGtleS5yZWR1Y2UoKGFjYzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiwgY3VycktleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgYWNjW2N1cnJLZXldID0gY3VycktleTtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgICB9XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdHJhbnNsYXRlZCB2YWx1ZSBvZiBhIGtleSwgYWZ0ZXIgY29tcGlsaW5nIGl0XG4gICAqL1xuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb24sIGxhbmc6IHN0cmluZyA9IHRoaXMuY3VycmVudExhbmcpOiB2b2lkIHtcbiAgICBzZXRWYWx1ZSh0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSwga2V5LFxuICAgICAgaXNTdHJpbmcodHJhbnNsYXRpb24pXG4gICAgICA/IHRoaXMuY29tcGlsZXIuY29tcGlsZSh0cmFuc2xhdGlvbiwgbGFuZylcbiAgICAgIDogdGhpcy5jb21waWxlci5jb21waWxlVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uLCBsYW5nKVxuICAgICk7XG4gICAgdGhpcy51cGRhdGVMYW5ncygpO1xuICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZS5lbWl0KHtsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgZGVmYXVsdCBsYW5nXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZURlZmF1bHRMYW5nKGxhbmc6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZGVmYXVsdExhbmcgPSBsYW5nO1xuICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZS5lbWl0KHtsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHRvIHJlbG9hZCB0aGUgbGFuZyBmaWxlIGZyb20gdGhlIGZpbGVcbiAgICovXG4gIHB1YmxpYyByZWxvYWRMYW5nKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8SW50ZXJwb2xhdGFibGVUcmFuc2xhdGlvbk9iamVjdD4ge1xuICAgIHRoaXMucmVzZXRMYW5nKGxhbmcpO1xuICAgIHJldHVybiB0aGlzLmxvYWRBbmRDb21waWxlVHJhbnNsYXRpb25zKGxhbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgaW5uZXIgdHJhbnNsYXRpb25cbiAgICovXG4gIHB1YmxpYyByZXNldExhbmcobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHNbbGFuZ107XG4gICAgZGVsZXRlIHRoaXMudHJhbnNsYXRpb25zW2xhbmddO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGVcIlxuICAgKi9cbiAgcHVibGljIGdldEJyb3dzZXJMYW5nKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICF3aW5kb3cubmF2aWdhdG9yKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IGJyb3dzZXJMYW5nID0gdGhpcy5nZXRCcm93c2VyQ3VsdHVyZUxhbmcoKTtcblxuICAgIHJldHVybiBicm93c2VyTGFuZyA/IGJyb3dzZXJMYW5nLnNwbGl0KC9bLV9dLylbMF0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VsdHVyZSBsYW5ndWFnZSBjb2RlIG5hbWUgZnJvbSB0aGUgYnJvd3NlciwgZS5nLiBcImRlLURFXCJcbiAgICovXG4gIHB1YmxpYyBnZXRCcm93c2VyQ3VsdHVyZUxhbmcoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlc1xuICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNbMF1cbiAgICAgICAgICAgICA6ICh3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IuYnJvd3Nlckxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlKTtcbiAgfVxufVxuIl19