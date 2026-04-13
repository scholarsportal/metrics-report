import { NgModule, makeEnvironmentProviders } from "@angular/core";
import { TranslateLoader, TranslateFakeLoader } from "./lib/translate.loader";
import { MissingTranslationHandler, FakeMissingTranslationHandler } from "./lib/missing-translation-handler";
import { TranslateParser, TranslateDefaultParser } from "./lib/translate.parser";
import { TranslateCompiler, TranslateFakeCompiler } from "./lib/translate.compiler";
import { TranslateDirective } from "./lib/translate.directive";
import { TranslatePipe } from "./lib/translate.pipe";
import { TranslateStore } from "./lib/translate.store";
import { USE_DEFAULT_LANG, DEFAULT_LANGUAGE, USE_EXTEND, ISOALTE_TRANSLATE_SERVICE, TranslateService } from "./lib/translate.service";
import * as i0 from "@angular/core";
export * from "./lib/translate.loader";
export * from "./lib/translate.service";
export * from "./lib/missing-translation-handler";
export * from "./lib/translate.parser";
export * from "./lib/translate.compiler";
export * from "./lib/translate.directive";
export * from "./lib/translate.pipe";
export * from "./lib/translate.store";
export * from "./lib/extraction-marker";
export * from "./lib/util";
export const provideTranslateService = (config = {}) => {
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
export class TranslateModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL25neC10cmFuc2xhdGUvc3JjL3B1YmxpYy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBdUQsd0JBQXdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEgsT0FBTyxFQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzVFLE9BQU8sRUFBQyx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzNHLE9BQU8sRUFBQyxlQUFlLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVix5QkFBeUIsRUFDekIsZ0JBQWdCLEVBQ2pCLE1BQU0seUJBQXlCLENBQUM7O0FBRWpDLGNBQWMsd0JBQXdCLENBQUM7QUFDdkMsY0FBYyx5QkFBeUIsQ0FBQztBQUN4QyxjQUFjLG1DQUFtQyxDQUFDO0FBQ2xELGNBQWMsd0JBQXdCLENBQUM7QUFDdkMsY0FBYywwQkFBMEIsQ0FBQztBQUN6QyxjQUFjLDJCQUEyQixDQUFDO0FBQzFDLGNBQWMsc0JBQXNCLENBQUM7QUFDckMsY0FBYyx1QkFBdUIsQ0FBQztBQUN0QyxjQUFjLHlCQUF5QixDQUFDO0FBQ3hDLGNBQWMsWUFBWSxDQUFBO0FBZTFCLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixH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LEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUM7Z0JBQzlELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYyxFQUFDO2dCQUM1RCxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUM7Z0JBQzlDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsZUFBZSxFQUFDO2dCQUM3RCxnQkFBZ0I7YUFDakI7U0FDRixDQUFDO0lBQ0osQ0FBQzt3R0F4Q1UsZUFBZTt5R0FBZixlQUFlLFlBUnhCLGFBQWE7WUFDYixrQkFBa0IsYUFHbEIsYUFBYTtZQUNiLGtCQUFrQjt5R0FHVCxlQUFlOzs0RkFBZixlQUFlO2tCQVYzQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isa0JBQWtCO3FCQUNuQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFByb3ZpZGVyLCBFbnZpcm9ubWVudFByb3ZpZGVycywgbWFrZUVudmlyb25tZW50UHJvdmlkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZUZha2VMb2FkZXJ9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUubG9hZGVyXCI7XG5pbXBvcnQge01pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyfSBmcm9tIFwiLi9saWIvbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVBhcnNlciwgVHJhbnNsYXRlRGVmYXVsdFBhcnNlcn0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5wYXJzZXJcIjtcbmltcG9ydCB7VHJhbnNsYXRlQ29tcGlsZXIsIFRyYW5zbGF0ZUZha2VDb21waWxlcn0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5jb21waWxlclwiO1xuaW1wb3J0IHtUcmFuc2xhdGVEaXJlY3RpdmV9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUuZGlyZWN0aXZlXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUucGlwZVwiO1xuaW1wb3J0IHtUcmFuc2xhdGVTdG9yZX0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHtcbiAgVVNFX0RFRkFVTFRfTEFORyxcbiAgREVGQVVMVF9MQU5HVUFHRSxcbiAgVVNFX0VYVEVORCxcbiAgSVNPQUxURV9UUkFOU0xBVEVfU0VSVklDRSxcbiAgVHJhbnNsYXRlU2VydmljZVxufSBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnNlcnZpY2VcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5sb2FkZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuc2VydmljZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL21pc3NpbmctdHJhbnNsYXRpb24taGFuZGxlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5wYXJzZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuY29tcGlsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuZGlyZWN0aXZlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnBpcGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuc3RvcmVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi9leHRyYWN0aW9uLW1hcmtlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL3V0aWxcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0ZU1vZHVsZUNvbmZpZyB7XG4gIGxvYWRlcj86IFByb3ZpZGVyO1xuICBjb21waWxlcj86IFByb3ZpZGVyO1xuICBwYXJzZXI/OiBQcm92aWRlcjtcbiAgbWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcj86IFByb3ZpZGVyO1xuICAvLyBpc29sYXRlIHRoZSBzZXJ2aWNlIGluc3RhbmNlLCBvbmx5IHdvcmtzIGZvciBsYXp5IGxvYWRlZCBtb2R1bGVzIG9yIGNvbXBvbmVudHMgd2l0aCB0aGUgXCJwcm92aWRlcnNcIiBwcm9wZXJ0eVxuICBpc29sYXRlPzogYm9vbGVhbjtcbiAgLy8gZXh0ZW5kcyB0cmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2UgaW5zdGVhZCBvZiBpZ25vcmluZyB0aGVtIGlmIHByZXNlbnRcbiAgZXh0ZW5kPzogYm9vbGVhbjtcbiAgdXNlRGVmYXVsdExhbmc/OiBib29sZWFuO1xuICBkZWZhdWx0TGFuZ3VhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBwcm92aWRlVHJhbnNsYXRlU2VydmljZSA9IChjb25maWc6IFRyYW5zbGF0ZU1vZHVsZUNvbmZpZyA9IHt9KTogRW52aXJvbm1lbnRQcm92aWRlcnMgPT5cbntcbiAgcmV0dXJuIG1ha2VFbnZpcm9ubWVudFByb3ZpZGVycyhbXG4gICAgY29uZmlnLmxvYWRlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUxvYWRlcn0sXG4gICAgY29uZmlnLmNvbXBpbGVyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVDb21waWxlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VDb21waWxlcn0sXG4gICAgY29uZmlnLnBhcnNlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlUGFyc2VyLCB1c2VDbGFzczogVHJhbnNsYXRlRGVmYXVsdFBhcnNlcn0sXG4gICAgY29uZmlnLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfHwge3Byb3ZpZGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZUNsYXNzOiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcn0sXG4gICAgVHJhbnNsYXRlU3RvcmUsXG4gICAge3Byb3ZpZGU6IElTT0FMVEVfVFJBTlNMQVRFX1NFUlZJQ0UsIHVzZVZhbHVlOiBjb25maWcuaXNvbGF0ZX0sXG4gICAge3Byb3ZpZGU6IFVTRV9ERUZBVUxUX0xBTkcsIHVzZVZhbHVlOiBjb25maWcudXNlRGVmYXVsdExhbmd9LFxuICAgIHtwcm92aWRlOiBVU0VfRVhURU5ELCB1c2VWYWx1ZTogY29uZmlnLmV4dGVuZH0sXG4gICAge3Byb3ZpZGU6IERFRkFVTFRfTEFOR1VBR0UsIHVzZVZhbHVlOiBjb25maWcuZGVmYXVsdExhbmd1YWdlfSxcbiAgICBUcmFuc2xhdGVTZXJ2aWNlXG4gIF0pO1xufVxuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIFRyYW5zbGF0ZURpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVNb2R1bGUge1xuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgcm9vdCBtb2R1bGUgdG8gcHJvdmlkZSB0aGUgVHJhbnNsYXRlU2VydmljZVxuICAgKi9cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBUcmFuc2xhdGVNb2R1bGVDb25maWcgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VHJhbnNsYXRlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUcmFuc2xhdGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgY29uZmlnLmxvYWRlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUxvYWRlcn0sXG4gICAgICAgIGNvbmZpZy5jb21waWxlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlQ29tcGlsZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVGYWtlQ29tcGlsZXJ9LFxuICAgICAgICBjb25maWcucGFyc2VyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVQYXJzZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyfSxcbiAgICAgICAgY29uZmlnLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfHwge3Byb3ZpZGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZUNsYXNzOiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcn0sXG4gICAgICAgIFRyYW5zbGF0ZVN0b3JlLFxuICAgICAgICB7cHJvdmlkZTogSVNPQUxURV9UUkFOU0xBVEVfU0VSVklDRSwgdXNlVmFsdWU6IGNvbmZpZy5pc29sYXRlfSxcbiAgICAgICAge3Byb3ZpZGU6IFVTRV9ERUZBVUxUX0xBTkcsIHVzZVZhbHVlOiBjb25maWcudXNlRGVmYXVsdExhbmd9LFxuICAgICAgICB7cHJvdmlkZTogVVNFX0VYVEVORCwgdXNlVmFsdWU6IGNvbmZpZy5leHRlbmR9LFxuICAgICAgICB7cHJvdmlkZTogREVGQVVMVF9MQU5HVUFHRSwgdXNlVmFsdWU6IGNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2V9LFxuICAgICAgICBUcmFuc2xhdGVTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciBvdGhlciAobm9uIHJvb3QpIG1vZHVsZXMgdG8gaW1wb3J0IHRoZSBkaXJlY3RpdmUvcGlwZVxuICAgKi9cbiAgc3RhdGljIGZvckNoaWxkKGNvbmZpZzogVHJhbnNsYXRlTW9kdWxlQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRyYW5zbGF0ZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVHJhbnNsYXRlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGNvbmZpZy5sb2FkZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VMb2FkZXJ9LFxuICAgICAgICBjb25maWcuY29tcGlsZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZUNvbXBpbGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUNvbXBpbGVyfSxcbiAgICAgICAgY29uZmlnLnBhcnNlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlUGFyc2VyLCB1c2VDbGFzczogVHJhbnNsYXRlRGVmYXVsdFBhcnNlcn0sXG4gICAgICAgIGNvbmZpZy5taXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHx8IHtwcm92aWRlOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCB1c2VDbGFzczogRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJ9LFxuICAgICAgICB7cHJvdmlkZTogSVNPQUxURV9UUkFOU0xBVEVfU0VSVklDRSwgdXNlVmFsdWU6IGNvbmZpZy5pc29sYXRlfSxcbiAgICAgICAge3Byb3ZpZGU6IFVTRV9ERUZBVUxUX0xBTkcsIHVzZVZhbHVlOiBjb25maWcudXNlRGVmYXVsdExhbmd9LFxuICAgICAgICB7cHJvdmlkZTogVVNFX0VYVEVORCwgdXNlVmFsdWU6IGNvbmZpZy5leHRlbmR9LFxuICAgICAgICB7cHJvdmlkZTogREVGQVVMVF9MQU5HVUFHRSwgdXNlVmFsdWU6IGNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2V9LFxuICAgICAgICBUcmFuc2xhdGVTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19