import { AfterViewChecked, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { InterpolatableTranslation, TranslateService, Translation, InterpolationParameters } from "./translate.service";
import * as i0 from "@angular/core";
interface ExtendedNode extends Text {
    originalContent: string;
    currentValue: Translation;
    lookupKey: string;
    lastKey: string | null;
    data: string;
}
export declare class TranslateDirective implements AfterViewChecked, OnDestroy {
    private translateService;
    private element;
    private _ref;
    key: string;
    lastParams?: InterpolationParameters;
    currentParams?: InterpolationParameters;
    onLangChangeSub: Subscription;
    onDefaultLangChangeSub: Subscription;
    onTranslationChangeSub: Subscription;
    set translate(key: string);
    set translateParams(params: InterpolationParameters);
    constructor(translateService: TranslateService, element: ElementRef, _ref: ChangeDetectorRef);
    ngAfterViewChecked(): void;
    checkNodes(forceUpdate?: boolean, translations?: InterpolatableTranslation): void;
    updateValue(key: string, node: ExtendedNode, translations?: InterpolatableTranslation): void;
    getContent(node: ExtendedNode): string;
    setContent(node: ExtendedNode, content: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TranslateDirective, "[translate],[ngx-translate]", never, { "translate": { "alias": "translate"; "required": false; }; "translateParams": { "alias": "translateParams"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
