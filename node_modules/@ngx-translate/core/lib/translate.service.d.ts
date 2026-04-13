import { EventEmitter, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { MissingTranslationHandler } from "./missing-translation-handler";
import { TranslateCompiler } from "./translate.compiler";
import { TranslateLoader } from "./translate.loader";
import { InterpolateFunction, TranslateParser } from "./translate.parser";
import { TranslateStore } from "./translate.store";
import * as i0 from "@angular/core";
export declare const ISOALTE_TRANSLATE_SERVICE: InjectionToken<string>;
export declare const USE_DEFAULT_LANG: InjectionToken<string>;
export declare const DEFAULT_LANGUAGE: InjectionToken<string>;
export declare const USE_EXTEND: InjectionToken<string>;
export type InterpolationParameters = Record<string, any>;
export type Translation = string | Translation[] | TranslationObject | any;
export interface TranslationObject {
    [key: string]: Translation;
}
export type InterpolatableTranslation = string | InterpolatableTranslation[] | InterpolateFunction | InterpolatableTranslationObject | any;
export interface InterpolatableTranslationObject {
    [key: string]: InterpolatableTranslation;
}
export type Language = string;
export interface TranslationChangeEvent {
    translations: InterpolatableTranslationObject;
    lang: string;
}
export interface LangChangeEvent {
    lang: string;
    translations: InterpolatableTranslationObject;
}
export interface DefaultLangChangeEvent {
    lang: string;
    translations: InterpolatableTranslationObject;
}
export declare class TranslateService {
    store: TranslateStore;
    currentLoader: TranslateLoader;
    compiler: TranslateCompiler;
    parser: TranslateParser;
    missingTranslationHandler: MissingTranslationHandler;
    private useDefaultLang;
    private isolate;
    private extend;
    private loadingTranslations;
    private pending;
    private _onTranslationChange;
    private _onLangChange;
    private _onDefaultLangChange;
    private _defaultLang;
    private _currentLang;
    private _langs;
    private _translations;
    private _translationRequests;
    private lastUseLanguage;
    /**
     * An EventEmitter to listen to translation change events
     * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
       *     // do something
       * });
     */
    get onTranslationChange(): EventEmitter<TranslationChangeEvent>;
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
       *     // do something
       * });
     */
    get onLangChange(): EventEmitter<LangChangeEvent>;
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
       *     // do something
       * });
     */
    get onDefaultLangChange(): EventEmitter<DefaultLangChangeEvent>;
    /**
     * The default lang to fallback when translations are missing on the current lang
     */
    get defaultLang(): string;
    set defaultLang(defaultLang: string);
    /**
     * The lang currently used
     */
    get currentLang(): string;
    set currentLang(currentLang: string);
    /**
     * an array of langs
     */
    get langs(): string[];
    set langs(langs: string[]);
    /**
     * a list of translations per lang
     */
    get translations(): Record<string, InterpolatableTranslationObject>;
    set translations(translations: Record<string, InterpolatableTranslationObject>);
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
    constructor(store: TranslateStore, currentLoader: TranslateLoader, compiler: TranslateCompiler, parser: TranslateParser, missingTranslationHandler: MissingTranslationHandler, useDefaultLang: boolean, isolate: boolean, extend: boolean, defaultLanguage: string);
    /**
     * Sets the default language to use as a fallback
     */
    setDefaultLang(lang: string): void;
    /**
     * Gets the default language used
     */
    getDefaultLang(): string;
    /**
     * Changes the lang currently used
     */
    use(lang: string): Observable<InterpolatableTranslationObject>;
    /**
     * Changes the current lang
     */
    private changeLang;
    /**
     * Retrieves the given translations
     */
    private retrieveTranslations;
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     *
     * @deprecated This function is meant for internal use. There should
     * be no reason to use outside this service. You can plug into this
     * functionality by using a customer TranslateLoader or TranslateCompiler.
     * To load a new language use setDefaultLang() and/or use()
     */
    getTranslation(lang: string): Observable<InterpolatableTranslationObject>;
    private loadAndCompileTranslations;
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     */
    setTranslation(lang: string, translations: InterpolatableTranslationObject, shouldMerge?: boolean): void;
    /**
     * Returns an array of currently available langs
     */
    getLangs(): string[];
    /**
     * Add available languages
     */
    addLangs(langs: string[]): void;
    /**
     * Update the list of available languages
     */
    private updateLangs;
    private getParsedResultForKey;
    private runInterpolation;
    /**
     * Returns the parsed result of the translations
     */
    getParsedResult(translations: InterpolatableTranslation, key: string | string[], interpolateParams?: InterpolationParameters): Translation | TranslationObject | Observable<Translation | TranslationObject>;
    /**
     * Gets the translated value of a key (or an array of keys)
     * @returns the translated key, or an object of translated keys
     */
    get(key: string | string[], interpolateParams?: InterpolationParameters): Observable<Translation | TranslationObject>;
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the translation changes.
     * @returns A stream of the translated key, or an object of translated keys
     */
    getStreamOnTranslationChange(key: string | string[], interpolateParams?: InterpolationParameters): Observable<Translation | TranslationObject>;
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @returns A stream of the translated key, or an object of translated keys
     */
    stream(key: string | string[], interpolateParams?: InterpolationParameters): Observable<Translation | TranslationObject>;
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages
     * will be used except any promise handling.
     */
    instant(key: string | string[], interpolateParams?: InterpolationParameters): Translation | TranslationObject;
    /**
     * Sets the translated value of a key, after compiling it
     */
    set(key: string, translation: Translation, lang?: string): void;
    /**
     * Changes the default lang
     */
    private changeDefaultLang;
    /**
     * Allows to reload the lang file from the file
     */
    reloadLang(lang: string): Observable<InterpolatableTranslationObject>;
    /**
     * Deletes inner translation
     */
    resetLang(lang: string): void;
    /**
     * Returns the language code name from the browser, e.g. "de"
     */
    getBrowserLang(): string | undefined;
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     */
    getBrowserCultureLang(): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslateService>;
}
