import * as i0 from '@angular/core';
import { Injectable, EventEmitter, InjectionToken, Inject, Directive, Input, Pipe, makeEnvironmentProviders, NgModule } from '@angular/core';
import { of, isObservable, forkJoin, concat, defer } from 'rxjs';
import { take, shareReplay, map, concatMap, switchMap } from 'rxjs/operators';

class TranslateLoader {
}
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
class TranslateFakeLoader extends TranslateLoader {
    getTranslation(lang) {
        void lang;
        return of({});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateFakeLoader, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateFakeLoader });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateFakeLoader, decorators: [{
            type: Injectable
        }] });

class MissingTranslationHandler {
}
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
class FakeMissingTranslationHandler {
    handle(params) {
        return params.key;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: FakeMissingTranslationHandler, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: FakeMissingTranslationHandler });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: FakeMissingTranslationHandler, decorators: [{
            type: Injectable
        }] });

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param o1 Object or value to compare.
 * @param o2 Object or value to compare.
 * @returns true if arguments are equal.
 */
function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    const t1 = typeof o1, t2 = typeof o2;
    let length, key, keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
function isDict(value) {
    return isObject(value) && !isArray(value);
}
function isObject(value) {
    return typeof value === 'object';
}
function isArray(value) {
    return Array.isArray(value);
}
function isString(value) {
    return typeof value === 'string';
}
function isFunction(value) {
    return typeof value === "function";
}
function mergeDeep(target, source) {
    const output = Object.assign({}, target);
    if (!isObject(target)) {
        return mergeDeep({}, source);
    }
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (isDict(source[key])) {
                if (key in target) {
                    output[key] = mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(output, { [key]: source[key] });
                }
            }
            else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}
/**
 * Gets a value from an object by composed key
 * getValue({ key1: { keyA: 'valueI' }}, 'key1.keyA') ==> 'valueI'
 * @param target
 * @param key
 */
function getValue(target, key) {
    const keys = key.split(".");
    key = "";
    do {
        key += keys.shift();
        if (isDefined(target) && isDefined(target[key]) && (isDict(target[key]) || isArray(target[key]) || !keys.length)) {
            target = target[key];
            key = "";
        }
        else if (!keys.length) {
            target = undefined;
        }
        else {
            key += ".";
        }
    } while (keys.length);
    return target;
}
/**
 * Gets a value from an object by composed key
 * parser.setValue({a:{b:{c: "test"}}}, 'a.b.c', "test2") ==> {a:{b:{c: "test2"}}}
 * @param target an object
 * @param key E.g. "a.b.c"
 * @param value to set
 */
function setValue(target, key, value) {
    const keys = key.split('.');
    let current = target;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        // If we're at the last key, set the value
        if (i === keys.length - 1) {
            current[key] = value;
        }
        else {
            // If the key doesn't exist or isn't an object, create an empty object
            if (!current[key] || !isDict(current[key])) {
                current[key] = {};
            }
            current = current[key];
        }
    }
}

class TranslateParser {
}
class TranslateDefaultParser extends TranslateParser {
    templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    interpolate(expr, params) {
        if (isString(expr)) {
            return this.interpolateString(expr, params);
        }
        else if (isFunction(expr)) {
            return this.interpolateFunction(expr, params);
        }
        return undefined;
    }
    interpolateFunction(fn, params) {
        return fn(params);
    }
    interpolateString(expr, params) {
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, (substring, b) => {
            const r = getValue(params, b);
            return isDefined(r)
                ? r
                : substring;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateDefaultParser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateDefaultParser });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateDefaultParser, decorators: [{
            type: Injectable
        }] });

class TranslateCompiler {
}
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
class TranslateFakeCompiler extends TranslateCompiler {
    compile(value, lang) {
        void lang;
        return value;
    }
    compileTranslations(translations, lang) {
        void lang;
        return translations;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateFakeCompiler, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateFakeCompiler });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateFakeCompiler, decorators: [{
            type: Injectable
        }] });

class TranslateStore {
    /**
     * The default lang to fallback when translations are missing on the current lang
     */
    defaultLang;
    /**
     * The lang currently used
     */
    currentLang = this.defaultLang;
    /**
     * a list of translations per lang
     */
    translations = {};
    /**
     * an array of langs
     */
    langs = [];
    /**
     * An EventEmitter to listen to translation change events
     * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
       *     // do something
       * });
     */
    onTranslationChange = new EventEmitter();
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
       *     // do something
       * });
     */
    onLangChange = new EventEmitter();
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
       *     // do something
       * });
     */
    onDefaultLangChange = new EventEmitter();
}

const ISOALTE_TRANSLATE_SERVICE = new InjectionToken('ISOALTE_TRANSLATE_SERVICE');
const USE_DEFAULT_LANG = new InjectionToken('USE_DEFAULT_LANG');
const DEFAULT_LANGUAGE = new InjectionToken('DEFAULT_LANGUAGE');
const USE_EXTEND = new InjectionToken('USE_EXTEND');
const makeObservable = (value) => {
    return isObservable(value) ? value : of(value);
};
class TranslateService {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateService, deps: [{ token: TranslateStore }, { token: TranslateLoader }, { token: TranslateCompiler }, { token: TranslateParser }, { token: MissingTranslationHandler }, { token: USE_DEFAULT_LANG }, { token: ISOALTE_TRANSLATE_SERVICE }, { token: USE_EXTEND }, { token: DEFAULT_LANGUAGE }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: TranslateStore }, { type: TranslateLoader }, { type: TranslateCompiler }, { type: TranslateParser }, { type: MissingTranslationHandler }, { type: undefined, decorators: [{
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

class TranslateDirective {
    translateService;
    element;
    _ref;
    key;
    lastParams;
    currentParams;
    onLangChangeSub;
    onDefaultLangChangeSub;
    onTranslationChangeSub;
    set translate(key) {
        if (key) {
            this.key = key;
            this.checkNodes();
        }
    }
    set translateParams(params) {
        if (!equals(this.currentParams, params)) {
            this.currentParams = params;
            this.checkNodes(true);
        }
    }
    constructor(translateService, element, _ref) {
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe((event) => {
                if (event.lang === this.translateService.currentLang) {
                    this.checkNodes(true, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe((event) => {
                this.checkNodes(true, event.translations);
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe((event) => {
                void event;
                this.checkNodes(true);
            });
        }
    }
    ngAfterViewChecked() {
        this.checkNodes();
    }
    checkNodes(forceUpdate = false, translations) {
        let nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        nodes.forEach((n) => {
            const node = n;
            if (node.nodeType === 3) { // node type 3 is a text node
                let key;
                if (forceUpdate) {
                    node.lastKey = null;
                }
                if (isDefined(node.lookupKey)) {
                    key = node.lookupKey;
                }
                else if (this.key) {
                    key = this.key;
                }
                else {
                    const content = this.getContent(node);
                    const trimmedContent = content.trim();
                    if (trimmedContent.length) {
                        node.lookupKey = trimmedContent;
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = trimmedContent;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = content || node.originalContent;
                        }
                        else if (node.originalContent) { // the content seems ok, but the lang has changed
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        });
    }
    updateValue(key, node, translations) {
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            const onTranslation = (res) => {
                if (res !== key || !node.lastKey) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = this.getContent(node);
                }
                node.currentValue = isDefined(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                this.setContent(node, this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                this._ref.markForCheck();
            };
            if (isDefined(translations)) {
                const res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (isObservable(res)) {
                    res.subscribe({ next: onTranslation });
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    }
    getContent(node) {
        return (isDefined(node.textContent) ? node.textContent : node.data);
    }
    setContent(node, content) {
        if (isDefined(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    }
    ngOnDestroy() {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateDirective, deps: [{ token: TranslateService }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.10", type: TranslateDirective, isStandalone: true, selector: "[translate],[ngx-translate]", inputs: { translate: "translate", translateParams: "translateParams" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[translate],[ngx-translate]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: TranslateService }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }], propDecorators: { translate: [{
                type: Input
            }], translateParams: [{
                type: Input
            }] } });

class TranslatePipe {
    translate;
    _ref;
    value = '';
    lastKey = null;
    lastParams = [];
    onTranslationChange;
    onLangChange;
    onDefaultLangChange;
    constructor(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
    }
    updateValue(key, interpolateParams, translations) {
        const onTranslation = (res) => {
            this.value = res !== undefined ? res : key;
            this.lastKey = key;
            this._ref.markForCheck();
        };
        if (translations) {
            const res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (isObservable(res)) {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    }
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    transform(query, ...args) {
        if (!query || !query.length) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
            return this.value;
        }
        let interpolateParams = undefined;
        if (isDefined(args[0]) && args.length) {
            if (isString(args[0]) && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                const validArgs = args[0]
                    .replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    void e;
                    throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`);
                }
            }
            else if (isDict(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe((event) => {
                if (this.lastKey && event.lang === this.translate.currentLang) {
                    this.lastKey = null;
                    this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe((event) => {
                if (this.lastKey) {
                    this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(() => {
                if (this.lastKey) {
                    this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    this.updateValue(query, interpolateParams);
                }
            });
        }
        return this.value;
    }
    /**
     * Clean any existing subscription to change events
     */
    _dispose() {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    }
    ngOnDestroy() {
        this._dispose();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslatePipe, deps: [{ token: TranslateService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: TranslatePipe, isStandalone: true, name: "translate", pure: false });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslatePipe });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslatePipe, decorators: [{
            type: Injectable
        }, {
            type: Pipe,
            args: [{
                    name: 'translate',
                    standalone: true,
                    pure: false // required to update the value when the promise is resolved
                }]
        }], ctorParameters: () => [{ type: TranslateService }, { type: i0.ChangeDetectorRef }] });

function _(key) {
    return key;
}

const provideTranslateService = (config = {}) => {
    return makeEnvironmentProviders([
        config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
        config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
        config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
        config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
        TranslateStore,
        { provide: ISOALTE_TRANSLATE_SERVICE, useValue: config.isolate },
        { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
        { provide: USE_EXTEND, useValue: config.extend },
        { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
        TranslateService
    ]);
};
class TranslateModule {
    /**
     * Use this method in your root module to provide the TranslateService
     */
    static forRoot(config = {}) {
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                TranslateStore,
                { provide: ISOALTE_TRANSLATE_SERVICE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    }
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     */
    static forChild(config = {}) {
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                { provide: ISOALTE_TRANSLATE_SERVICE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: TranslateModule, imports: [TranslatePipe,
            TranslateDirective], exports: [TranslatePipe,
            TranslateDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        TranslatePipe,
                        TranslateDirective
                    ],
                    exports: [
                        TranslatePipe,
                        TranslateDirective
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_LANGUAGE, FakeMissingTranslationHandler, ISOALTE_TRANSLATE_SERVICE, MissingTranslationHandler, TranslateCompiler, TranslateDefaultParser, TranslateDirective, TranslateFakeCompiler, TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateParser, TranslatePipe, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND, _, equals, getValue, isArray, isDefined, isDict, isFunction, isObject, isString, mergeDeep, provideTranslateService, setValue };
//# sourceMappingURL=ngx-translate-core.mjs.map
