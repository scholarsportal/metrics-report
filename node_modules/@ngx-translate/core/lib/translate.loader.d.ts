import { Observable } from "rxjs";
import { TranslationObject } from "./translate.service";
import * as i0 from "@angular/core";
export declare abstract class TranslateLoader {
    abstract getTranslation(lang: string): Observable<TranslationObject>;
}
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
export declare class TranslateFakeLoader extends TranslateLoader {
    getTranslation(lang: string): Observable<TranslationObject>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateFakeLoader, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslateFakeLoader>;
}
