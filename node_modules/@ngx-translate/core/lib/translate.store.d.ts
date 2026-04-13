import { EventEmitter } from "@angular/core";
import { InterpolatableTranslationObject, DefaultLangChangeEvent, LangChangeEvent, TranslationChangeEvent } from "./translate.service";
export declare class TranslateStore {
    /**
     * The default lang to fallback when translations are missing on the current lang
     */
    defaultLang: string;
    /**
     * The lang currently used
     */
    currentLang: string;
    /**
     * a list of translations per lang
     */
    translations: Record<string, InterpolatableTranslationObject>;
    /**
     * an array of langs
     */
    langs: string[];
    /**
     * An EventEmitter to listen to translation change events
     * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
       *     // do something
       * });
     */
    onTranslationChange: EventEmitter<TranslationChangeEvent>;
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
       *     // do something
       * });
     */
    onLangChange: EventEmitter<LangChangeEvent>;
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
       *     // do something
       * });
     */
    onDefaultLangChange: EventEmitter<DefaultLangChangeEvent>;
}
