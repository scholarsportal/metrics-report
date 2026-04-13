import { InterpolationParameters } from "./translate.service";
import * as i0 from "@angular/core";
export type InterpolateFunction = (params?: InterpolationParameters) => string;
export declare abstract class TranslateParser {
    /**
     * Interpolates a string to replace parameters
     * "This is a {{ key }}" ==> "This is a value", with params = { key: "value" }
     * @param expr
     * @param params
     */
    abstract interpolate(expr: InterpolateFunction | string, params?: InterpolationParameters): string | undefined;
}
export declare class TranslateDefaultParser extends TranslateParser {
    templateMatcher: RegExp;
    interpolate(expr: InterpolateFunction | string, params?: InterpolationParameters): string | undefined;
    private interpolateFunction;
    private interpolateString;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateDefaultParser, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslateDefaultParser>;
}
