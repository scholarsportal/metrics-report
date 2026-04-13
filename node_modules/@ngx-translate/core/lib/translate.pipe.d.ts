import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { InterpolatableTranslationObject, TranslateService, Translation, InterpolationParameters } from "./translate.service";
import * as i0 from "@angular/core";
export declare class TranslatePipe implements PipeTransform, OnDestroy {
    private translate;
    private _ref;
    value: Translation;
    lastKey: string | null;
    lastParams: InterpolationParameters[];
    onTranslationChange: Subscription | undefined;
    onLangChange: Subscription | undefined;
    onDefaultLangChange: Subscription | undefined;
    constructor(translate: TranslateService, _ref: ChangeDetectorRef);
    updateValue(key: string, interpolateParams?: object, translations?: InterpolatableTranslationObject): void;
    transform(query: string, ...args: any[]): any;
    /**
     * Clean any existing subscription to change events
     */
    private _dispose;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TranslatePipe, "translate", true>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslatePipe>;
}
