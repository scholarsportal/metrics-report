import { InterpolateFunction } from "./translate.parser";
import { InterpolatableTranslation, InterpolatableTranslationObject, Translation } from "./translate.service";
import * as i0 from "@angular/core";
export declare abstract class TranslateCompiler {
    abstract compile(value: string, lang: string): InterpolatableTranslation;
    abstract compileTranslations(translations: Translation, lang: string): InterpolatableTranslationObject;
}
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
export declare class TranslateFakeCompiler extends TranslateCompiler {
    compile(value: string, lang: string): string | InterpolateFunction;
    compileTranslations(translations: InterpolatableTranslationObject, lang: string): InterpolatableTranslationObject;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateFakeCompiler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslateFakeCompiler>;
}
