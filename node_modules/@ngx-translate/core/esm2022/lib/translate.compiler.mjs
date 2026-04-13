import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class TranslateCompiler {
}
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
export class TranslateFakeCompiler extends TranslateCompiler {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyYW5zbGF0ZS9zcmMvbGliL3RyYW5zbGF0ZS5jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUl6QyxNQUFNLE9BQWdCLGlCQUFpQjtDQUl0QztBQUVEOztHQUVHO0FBRUgsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGlCQUFpQjtJQUMxRCxPQUFPLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDakMsS0FBSyxJQUFJLENBQUM7UUFDVixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxZQUE2QyxFQUFFLElBQVk7UUFDN0UsS0FBSyxJQUFJLENBQUM7UUFDVixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO3dHQVRVLHFCQUFxQjs0R0FBckIscUJBQXFCOzs0RkFBckIscUJBQXFCO2tCQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJbnRlcnBvbGF0ZUZ1bmN0aW9ufSBmcm9tIFwiLi90cmFuc2xhdGUucGFyc2VyXCI7XG5pbXBvcnQge0ludGVycG9sYXRhYmxlVHJhbnNsYXRpb24sIEludGVycG9sYXRhYmxlVHJhbnNsYXRpb25PYmplY3QsIFRyYW5zbGF0aW9ufSBmcm9tIFwiLi90cmFuc2xhdGUuc2VydmljZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRlQ29tcGlsZXIge1xuICBhYnN0cmFjdCBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IEludGVycG9sYXRhYmxlVHJhbnNsYXRpb247XG5cbiAgYWJzdHJhY3QgY29tcGlsZVRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnM6IFRyYW5zbGF0aW9uLCBsYW5nOiBzdHJpbmcpOiBJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uT2JqZWN0O1xufVxuXG4vKipcbiAqIFRoaXMgY29tcGlsZXIgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRoYXQgZG9lcyBub3RoaW5nLCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIGEgY29tcGlsZXIgYXQgYWxsXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVGYWtlQ29tcGlsZXIgZXh0ZW5kcyBUcmFuc2xhdGVDb21waWxlciB7XG4gIGNvbXBpbGUodmFsdWU6IHN0cmluZywgbGFuZzogc3RyaW5nKTogc3RyaW5nIHwgSW50ZXJwb2xhdGVGdW5jdGlvbiB7XG4gICAgdm9pZCBsYW5nO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbXBpbGVUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiBJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uT2JqZWN0LCBsYW5nOiBzdHJpbmcpOiBJbnRlcnBvbGF0YWJsZVRyYW5zbGF0aW9uT2JqZWN0IHtcbiAgICB2b2lkIGxhbmc7XG4gICAgcmV0dXJuIHRyYW5zbGF0aW9ucztcbiAgfVxufVxuIl19