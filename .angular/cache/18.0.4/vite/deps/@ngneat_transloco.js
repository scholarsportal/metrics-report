import {
  APP_INITIALIZER,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Optional,
  Pipe,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  inject,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵproperty,
  ɵɵsanitizeHtml
} from "./chunk-ZQVNVM3G.js";
import "./chunk-MJQNUHK2.js";
import {
  forkJoin
} from "./chunk-MOY5LPCH.js";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  catchError,
  combineLatest,
  from,
  map,
  of,
  retry,
  shareReplay,
  switchMap,
  take,
  tap
} from "./chunk-SAI3DHVA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XEBHCIPT.js";

// node_modules/@ngneat/transloco/node_modules/flat/index.js
function isBuffer(obj) {
  return obj && obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function keyIdentity(key) {
  return key;
}
function flatten(target, opts) {
  opts = opts || {};
  const delimiter = opts.delimiter || ".";
  const maxDepth = opts.maxDepth;
  const transformKey = opts.transformKey || keyIdentity;
  const output = {};
  function step(object, prev, currentDepth) {
    currentDepth = currentDepth || 1;
    Object.keys(object).forEach(function(key) {
      const value = object[key];
      const isarray = opts.safe && Array.isArray(value);
      const type = Object.prototype.toString.call(value);
      const isbuffer = isBuffer(value);
      const isobject = type === "[object Object]" || type === "[object Array]";
      const newKey = prev ? prev + delimiter + transformKey(key) : transformKey(key);
      if (!isarray && !isbuffer && isobject && Object.keys(value).length && (!opts.maxDepth || currentDepth < maxDepth)) {
        return step(value, newKey, currentDepth + 1);
      }
      output[newKey] = value;
    });
  }
  step(target);
  return output;
}
function unflatten(target, opts) {
  opts = opts || {};
  const delimiter = opts.delimiter || ".";
  const overwrite = opts.overwrite || false;
  const transformKey = opts.transformKey || keyIdentity;
  const result = {};
  const isbuffer = isBuffer(target);
  if (isbuffer || Object.prototype.toString.call(target) !== "[object Object]") {
    return target;
  }
  function getkey(key) {
    const parsedKey = Number(key);
    return isNaN(parsedKey) || key.indexOf(".") !== -1 || opts.object ? key : parsedKey;
  }
  function addKeys(keyPrefix, recipient, target2) {
    return Object.keys(target2).reduce(function(result2, key) {
      result2[keyPrefix + delimiter + key] = target2[key];
      return result2;
    }, recipient);
  }
  function isEmpty2(val) {
    const type = Object.prototype.toString.call(val);
    const isArray = type === "[object Array]";
    const isObject2 = type === "[object Object]";
    if (!val) {
      return true;
    } else if (isArray) {
      return !val.length;
    } else if (isObject2) {
      return !Object.keys(val).length;
    }
  }
  target = Object.keys(target).reduce(function(result2, key) {
    const type = Object.prototype.toString.call(target[key]);
    const isObject2 = type === "[object Object]" || type === "[object Array]";
    if (!isObject2 || isEmpty2(target[key])) {
      result2[key] = target[key];
      return result2;
    } else {
      return addKeys(
        key,
        result2,
        flatten(target[key], opts)
      );
    }
  }, {});
  Object.keys(target).forEach(function(key) {
    const split = key.split(delimiter).map(transformKey);
    let key1 = getkey(split.shift());
    let key2 = getkey(split[0]);
    let recipient = result;
    while (key2 !== void 0) {
      if (key1 === "__proto__") {
        return;
      }
      const type = Object.prototype.toString.call(recipient[key1]);
      const isobject = type === "[object Object]" || type === "[object Array]";
      if (!overwrite && !isobject && typeof recipient[key1] !== "undefined") {
        return;
      }
      if (overwrite && !isobject || !overwrite && recipient[key1] == null) {
        recipient[key1] = typeof key2 === "number" && !opts.object ? [] : {};
      }
      recipient = recipient[key1];
      if (split.length > 0) {
        key1 = getkey(split.shift());
        key2 = getkey(split[0]);
      }
    }
    recipient[key1] = unflatten(target[key], opts);
  });
  return result;
}

// node_modules/@ngneat/transloco/fesm2022/ngneat-transloco.mjs
var DefaultLoader = class {
  translations;
  constructor(translations) {
    this.translations = translations;
  }
  getTranslation(lang) {
    return of(this.translations.get(lang) || {});
  }
};
var TRANSLOCO_LOADER = new InjectionToken("TRANSLOCO_LOADER");
function getValue(obj, path) {
  if (!obj) {
    return obj;
  }
  if (Object.prototype.hasOwnProperty.call(obj, path)) {
    return obj[path];
  }
  return path.split(".").reduce((p, c) => p?.[c], obj);
}
function setValue(obj, prop, val) {
  obj = __spreadValues({}, obj);
  const split = prop.split(".");
  const lastIndex = split.length - 1;
  split.reduce((acc, part, index) => {
    if (index === lastIndex) {
      acc[part] = val;
    } else {
      acc[part] = Array.isArray(acc[part]) ? acc[part].slice() : __spreadValues({}, acc[part]);
    }
    return acc && acc[part];
  }, obj);
  return obj;
}
function size(collection) {
  if (!collection) {
    return 0;
  }
  if (Array.isArray(collection)) {
    return collection.length;
  }
  if (isObject(collection)) {
    return Object.keys(collection).length;
  }
  return collection ? collection.length : 0;
}
function isEmpty(collection) {
  return size(collection) === 0;
}
function isFunction(val) {
  return typeof val === "function";
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(item) {
  return !!item && typeof item === "object" && !Array.isArray(item);
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index == 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+|_|-|\//g, "");
}
function isBrowser() {
  return typeof window !== "undefined";
}
function isNil(value) {
  return value === null || value === void 0;
}
function isDefined(value) {
  return isNil(value) === false;
}
function toNumber(value) {
  if (isNumber(value))
    return value;
  if (isString(value) && !isNaN(Number(value) - parseFloat(value))) {
    return Number(value);
  }
  return null;
}
function isScopeObject(item) {
  return item && typeof item.scope === "string";
}
function isScopeArray(item) {
  return Array.isArray(item) && item.every(isScopeObject);
}
function hasInlineLoader(item) {
  return item && isObject(item.loader);
}
function unflatten2(obj) {
  return unflatten(obj);
}
function flatten2(obj) {
  return flatten(obj, {
    safe: true
  });
}
var TRANSLOCO_CONFIG = new InjectionToken("TRANSLOCO_CONFIG", {
  providedIn: "root",
  factory: () => defaultConfig
});
var defaultConfig = {
  defaultLang: "en",
  reRenderOnLangChange: false,
  prodMode: false,
  failedRetries: 2,
  fallbackLang: [],
  availableLangs: [],
  missingHandler: {
    logMissingKey: true,
    useFallbackTranslation: false,
    allowEmpty: false
  },
  flatten: {
    aot: false
  },
  interpolation: ["{{", "}}"]
};
function translocoConfig(config = {}) {
  return __spreadProps(__spreadValues(__spreadValues({}, defaultConfig), config), {
    missingHandler: __spreadValues(__spreadValues({}, defaultConfig.missingHandler), config.missingHandler),
    flatten: __spreadValues(__spreadValues({}, defaultConfig.flatten), config.flatten)
  });
}
var TRANSLOCO_TRANSPILER = new InjectionToken("TRANSLOCO_TRANSPILER");
var DefaultTranspiler = class _DefaultTranspiler {
  interpolationMatcher;
  // TODO use inject in Transloco v7
  constructor(config) {
    this.interpolationMatcher = resolveMatcher(config ?? defaultConfig);
  }
  transpile(value, params = {}, translation, key) {
    if (isString(value)) {
      return value.replace(this.interpolationMatcher, (_, match) => {
        match = match.trim();
        if (isDefined(params[match])) {
          return params[match];
        }
        return isDefined(translation[match]) ? this.transpile(translation[match], params, translation, key) : "";
      });
    } else if (params) {
      if (isObject(value)) {
        value = this.handleObject(value, params, translation, key);
      } else if (Array.isArray(value)) {
        value = this.handleArray(value, params, translation, key);
      }
    }
    return value;
  }
  /**
   *
   * @example
   *
   * const en = {
   *  a: {
   *    b: {
   *      c: "Hello {{ value }}"
   *    }
   *  }
   * }
   *
   * const params =  {
   *  "b.c": { value: "Transloco "}
   * }
   *
   * service.selectTranslate('a', params);
   *
   * // the first param will be the result of `en.a`.
   * // the second param will be `params`.
   * parser.transpile(value, params, {});
   *
   *
   */
  handleObject(value, params = {}, translation, key) {
    let result = value;
    Object.keys(params).forEach((p) => {
      const v = getValue(result, p);
      const getParams = getValue(params, p);
      const transpiled = this.transpile(v, getParams, translation, key);
      result = setValue(result, p, transpiled);
    });
    return result;
  }
  handleArray(value, params = {}, translation, key) {
    return value.map((v) => this.transpile(v, params, translation, key));
  }
  static ɵfac = function DefaultTranspiler_Factory(t) {
    return new (t || _DefaultTranspiler)(ɵɵinject(TRANSLOCO_CONFIG, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DefaultTranspiler,
    factory: _DefaultTranspiler.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTranspiler, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TRANSLOCO_CONFIG]
      }]
    }];
  }, null);
})();
function resolveMatcher(config) {
  const [start, end] = config.interpolation;
  return new RegExp(`${start}(.*?)${end}`, "g");
}
function getFunctionArgs(argsString) {
  const splitted = argsString ? argsString.split(",") : [];
  const args = [];
  for (let i = 0; i < splitted.length; i++) {
    let value = splitted[i].trim();
    while (value[value.length - 1] === "\\") {
      i++;
      value = value.replace("\\", ",") + splitted[i];
    }
    args.push(value);
  }
  return args;
}
var FunctionalTranspiler = class _FunctionalTranspiler extends DefaultTranspiler {
  injector = inject(Injector);
  transpile(value, params = {}, translation, key) {
    let transpiled = value;
    if (isString(value)) {
      transpiled = value.replace(/\[\[\s*(\w+)\((.*?)\)\s*]]/g, (match, functionName, args) => {
        try {
          const func = this.injector.get(functionName);
          return func.transpile(...getFunctionArgs(args));
        } catch (e) {
          let message = `There is an error in: '${value}'. 
                          Check that the you used the right syntax in your translation and that the implementation of ${functionName} is correct.`;
          if (e.message.includes("NullInjectorError")) {
            message = `You are using the '${functionName}' function in your translation but no provider was found!`;
          }
          throw new Error(message);
        }
      });
    }
    return super.transpile(transpiled, params, translation, key);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵFunctionalTranspiler_BaseFactory;
    return function FunctionalTranspiler_Factory(t) {
      return (ɵFunctionalTranspiler_BaseFactory || (ɵFunctionalTranspiler_BaseFactory = ɵɵgetInheritedFactory(_FunctionalTranspiler)))(t || _FunctionalTranspiler);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _FunctionalTranspiler,
    factory: _FunctionalTranspiler.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FunctionalTranspiler, [{
    type: Injectable
  }], null, null);
})();
var TRANSLOCO_MISSING_HANDLER = new InjectionToken("TRANSLOCO_MISSING_HANDLER");
var DefaultHandler = class _DefaultHandler {
  handle(key, config) {
    if (config.missingHandler.logMissingKey && !config.prodMode) {
      const msg = `Missing translation for '${key}'`;
      console.warn(`%c ${msg}`, "font-size: 12px; color: red");
    }
    return key;
  }
  static ɵfac = function DefaultHandler_Factory(t) {
    return new (t || _DefaultHandler)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DefaultHandler,
    factory: _DefaultHandler.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultHandler, [{
    type: Injectable
  }], null, null);
})();
var TRANSLOCO_INTERCEPTOR = new InjectionToken("TRANSLOCO_INTERCEPTOR");
var DefaultInterceptor = class _DefaultInterceptor {
  preSaveTranslation(translation) {
    return translation;
  }
  preSaveTranslationKey(_, value) {
    return value;
  }
  static ɵfac = function DefaultInterceptor_Factory(t) {
    return new (t || _DefaultInterceptor)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DefaultInterceptor,
    factory: _DefaultInterceptor.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultInterceptor, [{
    type: Injectable
  }], null, null);
})();
var TRANSLOCO_FALLBACK_STRATEGY = new InjectionToken("TRANSLOCO_FALLBACK_STRATEGY");
var DefaultFallbackStrategy = class _DefaultFallbackStrategy {
  userConfig;
  constructor(userConfig) {
    this.userConfig = userConfig;
  }
  getNextLangs() {
    const fallbackLang = this.userConfig.fallbackLang;
    if (!fallbackLang) {
      throw new Error("When using the default fallback, a fallback language must be provided in the config!");
    }
    return Array.isArray(fallbackLang) ? fallbackLang : [fallbackLang];
  }
  static ɵfac = function DefaultFallbackStrategy_Factory(t) {
    return new (t || _DefaultFallbackStrategy)(ɵɵinject(TRANSLOCO_CONFIG));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DefaultFallbackStrategy,
    factory: _DefaultFallbackStrategy.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultFallbackStrategy, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TRANSLOCO_CONFIG]
      }]
    }];
  }, null);
})();
function getScopeFromLang(lang) {
  if (!lang) {
    return "";
  }
  const split = lang.split("/");
  split.pop();
  return split.join("/");
}
function getLangFromScope(lang) {
  if (!lang) {
    return "";
  }
  return lang.split("/").pop();
}
function getPipeValue(str, value, char = "|") {
  if (isString(str)) {
    const splitted = str.split(char);
    const lastItem = splitted.pop();
    return lastItem === value ? [true, splitted.toString()] : [false, lastItem];
  }
  return [false, ""];
}
function shouldListenToLangChanges(service2, lang) {
  const [hasStatic] = getPipeValue(lang, "static");
  if (!hasStatic) {
    return !!service2.config.reRenderOnLangChange;
  }
  return false;
}
function listenOrNotOperator(listenToLangChange) {
  return listenToLangChange ? (source) => source : take(1);
}
function prependScope(inlineLoader, scope) {
  return Object.keys(inlineLoader).reduce((acc, lang) => {
    acc[`${scope}/${lang}`] = inlineLoader[lang];
    return acc;
  }, {});
}
function resolveInlineLoader(providerScope, scope) {
  return hasInlineLoader(providerScope) ? prependScope(providerScope.loader, scope) : void 0;
}
function getEventPayload(lang) {
  return {
    scope: getScopeFromLang(lang) || null,
    langName: getLangFromScope(lang)
  };
}
function resolveLoader(options) {
  const {
    path,
    inlineLoader,
    mainLoader,
    data
  } = options;
  if (inlineLoader) {
    const pathLoader = inlineLoader[path];
    if (isFunction(pathLoader) === false) {
      throw `You're using an inline loader but didn't provide a loader for ${path}`;
    }
    return inlineLoader[path]().then((res) => res.default ? res.default : res);
  }
  return mainLoader.getTranslation(path, data);
}
function getFallbacksLoaders({
  mainLoader,
  path,
  data,
  fallbackPath,
  inlineLoader
}) {
  const paths = fallbackPath ? [path, fallbackPath] : [path];
  return paths.map((path2) => {
    const loader = resolveLoader({
      path: path2,
      mainLoader,
      inlineLoader,
      data
    });
    return from(loader).pipe(map((translation) => ({
      translation,
      lang: path2
    })));
  });
}
var service;
function translate(key, params = {}, lang) {
  return service.translate(key, params, lang);
}
function translateObject(key, params = {}, lang) {
  return service.translateObject(key, params, lang);
}
var TranslocoService = class _TranslocoService {
  loader;
  parser;
  missingHandler;
  interceptor;
  fallbackStrategy;
  langChanges$;
  subscription = null;
  translations = /* @__PURE__ */ new Map();
  cache = /* @__PURE__ */ new Map();
  firstFallbackLang;
  defaultLang = "";
  availableLangs = [];
  isResolvedMissingOnce = false;
  lang;
  failedLangs = /* @__PURE__ */ new Set();
  events = new Subject();
  events$ = this.events.asObservable();
  config;
  constructor(loader, parser, missingHandler, interceptor, userConfig, fallbackStrategy) {
    this.loader = loader;
    this.parser = parser;
    this.missingHandler = missingHandler;
    this.interceptor = interceptor;
    this.fallbackStrategy = fallbackStrategy;
    if (!this.loader) {
      this.loader = new DefaultLoader(this.translations);
    }
    service = this;
    this.config = JSON.parse(JSON.stringify(userConfig));
    this.setAvailableLangs(this.config.availableLangs || []);
    this.setFallbackLangForMissingTranslation(this.config);
    this.setDefaultLang(this.config.defaultLang);
    this.lang = new BehaviorSubject(this.getDefaultLang());
    this.langChanges$ = this.lang.asObservable();
    this.subscription = this.events$.subscribe((e) => {
      if (e.type === "translationLoadSuccess" && e.wasFailure) {
        this.setActiveLang(e.payload.langName);
      }
    });
  }
  getDefaultLang() {
    return this.defaultLang;
  }
  setDefaultLang(lang) {
    this.defaultLang = lang;
  }
  getActiveLang() {
    return this.lang.getValue();
  }
  setActiveLang(lang) {
    this.parser.onLangChanged?.(lang);
    this.lang.next(lang);
    this.events.next({
      type: "langChanged",
      payload: getEventPayload(lang)
    });
    return this;
  }
  setAvailableLangs(langs) {
    this.availableLangs = langs;
  }
  /**
   * Gets the available languages.
   *
   * @returns
   * An array of the available languages. Can be either a `string[]` or a `{ id: string; label: string }[]`
   * depending on how the available languages are set in your module.
   */
  getAvailableLangs() {
    return this.availableLangs;
  }
  load(path, options = {}) {
    const cached = this.cache.get(path);
    if (cached) {
      return cached;
    }
    let loadTranslation;
    const isScope = this._isLangScoped(path);
    let scope;
    if (isScope) {
      scope = getScopeFromLang(path);
    }
    const loadersOptions = {
      path,
      mainLoader: this.loader,
      inlineLoader: options.inlineLoader,
      data: isScope ? {
        scope
      } : void 0
    };
    if (this.useFallbackTranslation(path)) {
      const fallback = isScope ? `${scope}/${this.firstFallbackLang}` : this.firstFallbackLang;
      const loaders = getFallbacksLoaders(__spreadProps(__spreadValues({}, loadersOptions), {
        fallbackPath: fallback
      }));
      loadTranslation = forkJoin(loaders);
    } else {
      const loader = resolveLoader(loadersOptions);
      loadTranslation = from(loader);
    }
    const load$ = loadTranslation.pipe(retry(this.config.failedRetries), tap((translation) => {
      if (Array.isArray(translation)) {
        translation.forEach((t) => {
          this.handleSuccess(t.lang, t.translation);
          if (t.lang !== path) {
            this.cache.set(t.lang, of({}));
          }
        });
        return;
      }
      this.handleSuccess(path, translation);
    }), catchError((error) => {
      if (!this.config.prodMode) {
        console.error(`Error while trying to load "${path}"`, error);
      }
      return this.handleFailure(path, options);
    }), shareReplay(1));
    this.cache.set(path, load$);
    return load$;
  }
  /**
   * Gets the instant translated value of a key
   *
   * @example
   *
   * translate<string>('hello')
   * translate('hello', { value: 'value' })
   * translate<string[]>(['hello', 'key'])
   * translate('hello', { }, 'en')
   * translate('scope.someKey', { }, 'en')
   */
  translate(key, params = {}, lang = this.getActiveLang()) {
    if (!key)
      return key;
    const {
      scope,
      resolveLang
    } = this.resolveLangAndScope(lang);
    if (Array.isArray(key)) {
      return key.map((k) => this.translate(scope ? `${scope}.${k}` : k, params, resolveLang));
    }
    key = scope ? `${scope}.${key}` : key;
    const translation = this.getTranslation(resolveLang);
    const value = translation[key];
    if (!value) {
      return this._handleMissingKey(key, value, params);
    }
    return this.parser.transpile(value, params, translation, key);
  }
  /**
   * Gets the translated value of a key as observable
   *
   * @example
   *
   * selectTranslate<string>('hello').subscribe(value => ...)
   * selectTranslate<string>('hello', {}, 'es').subscribe(value => ...)
   * selectTranslate<string>('hello', {}, 'todos').subscribe(value => ...)
   * selectTranslate<string>('hello', {}, { scope: 'todos' }).subscribe(value => ...)
   *
   */
  selectTranslate(key, params, lang, _isObject = false) {
    let inlineLoader;
    const load = (lang2, options) => this.load(lang2, options).pipe(map(() => _isObject ? this.translateObject(key, params, lang2) : this.translate(key, params, lang2)));
    if (isNil(lang)) {
      return this.langChanges$.pipe(switchMap((lang2) => load(lang2)));
    }
    if (isScopeArray(lang) || isScopeObject(lang)) {
      const providerScope = Array.isArray(lang) ? lang[0] : lang;
      lang = providerScope.scope;
      inlineLoader = resolveInlineLoader(providerScope, providerScope.scope);
    }
    lang = lang;
    if (this.isLang(lang) || this.isScopeWithLang(lang)) {
      return load(lang);
    }
    const scope = lang;
    return this.langChanges$.pipe(switchMap((lang2) => load(`${scope}/${lang2}`, {
      inlineLoader
    })));
  }
  /**
   * Whether the scope with lang
   *
   * @example
   *
   * todos/en => true
   * todos => false
   */
  isScopeWithLang(lang) {
    return this.isLang(getLangFromScope(lang));
  }
  translateObject(key, params = {}, lang = this.getActiveLang()) {
    if (isString(key) || Array.isArray(key)) {
      const {
        resolveLang,
        scope
      } = this.resolveLangAndScope(lang);
      if (Array.isArray(key)) {
        return key.map((k) => this.translateObject(scope ? `${scope}.${k}` : k, params, resolveLang));
      }
      const translation = this.getTranslation(resolveLang);
      key = scope ? `${scope}.${key}` : key;
      const value = unflatten2(this.getObjectByKey(translation, key));
      return isEmpty(value) ? this.translate(key, params, lang) : this.parser.transpile(value, params, translation, key);
    }
    const translations = [];
    for (const [_key, _params] of this.getEntries(key)) {
      translations.push(this.translateObject(_key, _params, lang));
    }
    return translations;
  }
  selectTranslateObject(key, params, lang) {
    if (isString(key) || Array.isArray(key)) {
      return this.selectTranslate(key, params, lang, true);
    }
    const [[firstKey, firstParams], ...rest] = this.getEntries(key);
    return this.selectTranslateObject(firstKey, firstParams, lang).pipe(map((value) => {
      const translations = [value];
      for (const [_key, _params] of rest) {
        translations.push(this.translateObject(_key, _params, lang));
      }
      return translations;
    }));
  }
  getTranslation(langOrScope) {
    if (langOrScope) {
      if (this.isLang(langOrScope)) {
        return this.translations.get(langOrScope) || {};
      } else {
        const {
          scope,
          resolveLang
        } = this.resolveLangAndScope(langOrScope);
        const translation = this.translations.get(resolveLang) || {};
        return this.getObjectByKey(translation, scope);
      }
    }
    return this.translations;
  }
  /**
   * Gets an object of translations for a given language
   *
   * @example
   *
   * selectTranslation().subscribe() - will return the current lang translation
   * selectTranslation('es').subscribe()
   * selectTranslation('admin-page').subscribe() - will return the current lang scope translation
   * selectTranslation('admin-page/es').subscribe()
   */
  selectTranslation(lang) {
    let language$ = this.langChanges$;
    if (lang) {
      const scopeLangSpecified = getLangFromScope(lang) !== lang;
      if (this.isLang(lang) || scopeLangSpecified) {
        language$ = of(lang);
      } else {
        language$ = this.langChanges$.pipe(map((currentLang) => `${lang}/${currentLang}`));
      }
    }
    return language$.pipe(switchMap((language) => this.load(language).pipe(map(() => this.getTranslation(language)))));
  }
  /**
   * Sets or merge a given translation object to current lang
   *
   * @example
   *
   * setTranslation({ ... })
   * setTranslation({ ... }, 'en')
   * setTranslation({ ... }, 'es', { merge: false } )
   * setTranslation({ ... }, 'todos/en', { merge: false } )
   */
  setTranslation(translation, lang = this.getActiveLang(), options = {}) {
    const defaults = {
      merge: true,
      emitChange: true
    };
    const mergedOptions = __spreadValues(__spreadValues({}, defaults), options);
    const scope = getScopeFromLang(lang);
    let flattenScopeOrTranslation = translation;
    if (scope) {
      const key = this.getMappedScope(scope);
      flattenScopeOrTranslation = flatten2({
        [key]: translation
      });
    }
    const currentLang = scope ? getLangFromScope(lang) : lang;
    const mergedTranslation = __spreadValues(__spreadValues({}, mergedOptions.merge && this.getTranslation(currentLang)), flattenScopeOrTranslation);
    const flattenTranslation = this.config.flatten.aot ? mergedTranslation : flatten2(mergedTranslation);
    const withHook = this.interceptor.preSaveTranslation(flattenTranslation, currentLang);
    this.translations.set(currentLang, withHook);
    mergedOptions.emitChange && this.setActiveLang(this.getActiveLang());
  }
  /**
   * Sets translation key with given value
   *
   * @example
   *
   * setTranslationKey('key', 'value')
   * setTranslationKey('key.nested', 'value')
   * setTranslationKey('key.nested', 'value', 'en')
   * setTranslationKey('key.nested', 'value', 'en', { emitChange: false } )
   */
  setTranslationKey(key, value, lang = this.getActiveLang(), options = {}) {
    const withHook = this.interceptor.preSaveTranslationKey(key, value, lang);
    const newValue = {
      [key]: withHook
    };
    this.setTranslation(newValue, lang, __spreadProps(__spreadValues({}, options), {
      merge: true
    }));
  }
  /**
   * Sets the fallback lang for the currently active language
   * @param fallbackLang
   */
  setFallbackLangForMissingTranslation({
    fallbackLang
  }) {
    const lang = Array.isArray(fallbackLang) ? fallbackLang[0] : fallbackLang;
    if (fallbackLang && this.useFallbackTranslation(lang)) {
      this.firstFallbackLang = lang;
    }
  }
  /**
   * @internal
   */
  _handleMissingKey(key, value, params) {
    if (this.config.missingHandler.allowEmpty && value === "") {
      return "";
    }
    if (!this.isResolvedMissingOnce && this.useFallbackTranslation()) {
      this.isResolvedMissingOnce = true;
      const fallbackValue = this.translate(key, params, this.firstFallbackLang);
      this.isResolvedMissingOnce = false;
      return fallbackValue;
    }
    return this.missingHandler.handle(key, this.getMissingHandlerData(), params);
  }
  /**
   * @internal
   */
  _isLangScoped(lang) {
    return this.getAvailableLangsIds().indexOf(lang) === -1;
  }
  /**
   * Checks if a given string is one of the specified available languages.
   * @returns
   * True if the given string is an available language.
   * False if the given string is not an available language.
   */
  isLang(lang) {
    return this.getAvailableLangsIds().indexOf(lang) !== -1;
  }
  /**
   * @internal
   *
   * We always want to make sure the global lang is loaded
   * before loading the scope since you can access both via the pipe/directive.
   */
  _loadDependencies(path, inlineLoader) {
    const mainLang = getLangFromScope(path);
    if (this._isLangScoped(path) && !this.isLoadedTranslation(mainLang)) {
      return combineLatest([this.load(mainLang), this.load(path, {
        inlineLoader
      })]);
    }
    return this.load(path, {
      inlineLoader
    });
  }
  /**
   * @internal
   */
  _completeScopeWithLang(langOrScope) {
    if (this._isLangScoped(langOrScope) && !this.isLang(getLangFromScope(langOrScope))) {
      return `${langOrScope}/${this.getActiveLang()}`;
    }
    return langOrScope;
  }
  /**
   * @internal
   */
  _setScopeAlias(scope, alias) {
    if (!this.config.scopeMapping) {
      this.config.scopeMapping = {};
    }
    this.config.scopeMapping[scope] = alias;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    this.cache.clear();
  }
  isLoadedTranslation(lang) {
    return size(this.getTranslation(lang));
  }
  getAvailableLangsIds() {
    const first = this.getAvailableLangs()[0];
    if (isString(first)) {
      return this.getAvailableLangs();
    }
    return this.getAvailableLangs().map((l) => l.id);
  }
  getMissingHandlerData() {
    return __spreadProps(__spreadValues({}, this.config), {
      activeLang: this.getActiveLang(),
      availableLangs: this.availableLangs,
      defaultLang: this.defaultLang
    });
  }
  /**
   * Use a fallback translation set for missing keys of the primary language
   * This is unrelated to the fallback language (which changes the active language)
   */
  useFallbackTranslation(lang) {
    return this.config.missingHandler.useFallbackTranslation && lang !== this.firstFallbackLang;
  }
  handleSuccess(lang, translation) {
    this.setTranslation(translation, lang, {
      emitChange: false
    });
    this.events.next({
      wasFailure: !!this.failedLangs.size,
      type: "translationLoadSuccess",
      payload: getEventPayload(lang)
    });
    this.failedLangs.forEach((l) => this.cache.delete(l));
    this.failedLangs.clear();
  }
  handleFailure(lang, loadOptions) {
    if (isNil(loadOptions.failedCounter)) {
      loadOptions.failedCounter = 0;
      if (!loadOptions.fallbackLangs) {
        loadOptions.fallbackLangs = this.fallbackStrategy.getNextLangs(lang);
      }
    }
    const splitted = lang.split("/");
    const fallbacks = loadOptions.fallbackLangs;
    const nextLang = fallbacks[loadOptions.failedCounter];
    this.failedLangs.add(lang);
    if (this.cache.has(nextLang)) {
      this.handleSuccess(nextLang, this.getTranslation(nextLang));
      return EMPTY;
    }
    const isFallbackLang = nextLang === splitted[splitted.length - 1];
    if (!nextLang || isFallbackLang) {
      let msg = `Unable to load translation and all the fallback languages`;
      if (splitted.length > 1) {
        msg += `, did you misspelled the scope name?`;
      }
      throw new Error(msg);
    }
    let resolveLang = nextLang;
    if (splitted.length > 1) {
      splitted[splitted.length - 1] = nextLang;
      resolveLang = splitted.join("/");
    }
    loadOptions.failedCounter++;
    this.events.next({
      type: "translationLoadFailure",
      payload: getEventPayload(lang)
    });
    return this.load(resolveLang, loadOptions);
  }
  getMappedScope(scope) {
    const {
      scopeMapping = {}
    } = this.config;
    return scopeMapping[scope] || toCamelCase(scope);
  }
  /**
   * If lang is scope we need to check the following cases:
   * todos/es => in this case we should take `es` as lang
   * todos => in this case we should set the active lang as lang
   */
  resolveLangAndScope(lang) {
    let resolveLang = lang;
    let scope;
    if (this._isLangScoped(lang)) {
      const langFromScope = getLangFromScope(lang);
      const hasLang = this.isLang(langFromScope);
      resolveLang = hasLang ? langFromScope : this.getActiveLang();
      scope = this.getMappedScope(hasLang ? getScopeFromLang(lang) : lang);
    }
    return {
      scope,
      resolveLang
    };
  }
  getObjectByKey(translation, key) {
    const result = {};
    const prefix = `${key}.`;
    for (const currentKey in translation) {
      if (currentKey.startsWith(prefix)) {
        result[currentKey.replace(prefix, "")] = translation[currentKey];
      }
    }
    return result;
  }
  getEntries(key) {
    return key instanceof Map ? key.entries() : Object.entries(key);
  }
  static ɵfac = function TranslocoService_Factory(t) {
    return new (t || _TranslocoService)(ɵɵinject(TRANSLOCO_LOADER, 8), ɵɵinject(TRANSLOCO_TRANSPILER), ɵɵinject(TRANSLOCO_MISSING_HANDLER), ɵɵinject(TRANSLOCO_INTERCEPTOR), ɵɵinject(TRANSLOCO_CONFIG), ɵɵinject(TRANSLOCO_FALLBACK_STRATEGY));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TranslocoService,
    factory: _TranslocoService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslocoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TRANSLOCO_LOADER]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TRANSLOCO_TRANSPILER]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TRANSLOCO_MISSING_HANDLER]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TRANSLOCO_INTERCEPTOR]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TRANSLOCO_CONFIG]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TRANSLOCO_FALLBACK_STRATEGY]
      }]
    }];
  }, null);
})();
var TranslocoLoaderComponent = class _TranslocoLoaderComponent {
  html;
  static ɵfac = function TranslocoLoaderComponent_Factory(t) {
    return new (t || _TranslocoLoaderComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TranslocoLoaderComponent,
    selectors: [["ng-component"]],
    inputs: {
      html: "html"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [[1, "transloco-loader-template", 3, "innerHTML"]],
    template: function TranslocoLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("innerHTML", ctx.html, ɵɵsanitizeHtml);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslocoLoaderComponent, [{
    type: Component,
    args: [{
      template: `
    <div class="transloco-loader-template" [innerHTML]="html"></div>
  `,
      standalone: true
    }]
  }], null, {
    html: [{
      type: Input
    }]
  });
})();
var TemplateHandler = class {
  view;
  vcr;
  constructor(view, vcr) {
    this.view = view;
    this.vcr = vcr;
  }
  attachView() {
    if (this.view instanceof TemplateRef) {
      this.vcr.createEmbeddedView(this.view);
    } else if (isString(this.view)) {
      const componentRef = this.vcr.createComponent(TranslocoLoaderComponent);
      componentRef.instance.html = this.view;
      componentRef.hostView.detectChanges();
    } else {
      this.vcr.createComponent(this.view);
    }
  }
  detachView() {
    this.vcr.clear();
  }
};
var TRANSLOCO_LANG = new InjectionToken("TRANSLOCO_LANG");
var TRANSLOCO_LOADING_TEMPLATE = new InjectionToken("TRANSLOCO_LOADING_TEMPLATE");
var TRANSLOCO_SCOPE = new InjectionToken("TRANSLOCO_SCOPE");
var LangResolver = class {
  initialized = false;
  // inline => provider => active
  resolve({
    inline,
    provider,
    active
  }) {
    let lang = active;
    if (this.initialized) {
      lang = active;
      return lang;
    }
    if (provider) {
      const [, extracted] = getPipeValue(provider, "static");
      lang = extracted;
    }
    if (inline) {
      const [, extracted] = getPipeValue(inline, "static");
      lang = extracted;
    }
    this.initialized = true;
    return lang;
  }
  /**
   *
   * Resolve the lang
   *
   * @example
   *
   * resolveLangBasedOnScope('todos/en') => en
   * resolveLangBasedOnScope('en') => en
   *
   */
  resolveLangBasedOnScope(lang) {
    const scope = getScopeFromLang(lang);
    return scope ? getLangFromScope(lang) : lang;
  }
  /**
   *
   * Resolve the lang path for loading
   *
   * @example
   *
   * resolveLangPath('todos', 'en') => todos/en
   * resolveLangPath('en') => en
   *
   */
  resolveLangPath(lang, scope) {
    return scope ? `${scope}/${lang}` : lang;
  }
};
var ScopeResolver = class {
  service;
  constructor(service2) {
    this.service = service2;
  }
  // inline => provider
  resolve(params) {
    const {
      inline,
      provider
    } = params;
    if (inline) {
      return inline;
    }
    if (provider) {
      if (isScopeObject(provider)) {
        const {
          scope,
          alias = toCamelCase(scope)
        } = provider;
        this.service._setScopeAlias(scope, alias);
        return scope;
      }
      return provider;
    }
    return void 0;
  }
};
var TranslocoDirective = class _TranslocoDirective {
  service = inject(TranslocoService);
  tpl = inject(TemplateRef, {
    optional: true
  });
  providerLang = inject(TRANSLOCO_LANG, {
    optional: true
  });
  providerScope = inject(TRANSLOCO_SCOPE, {
    optional: true
  });
  providedLoadingTpl = inject(TRANSLOCO_LOADING_TEMPLATE, {
    optional: true
  });
  cdr = inject(ChangeDetectorRef);
  host = inject(ElementRef);
  vcr = inject(ViewContainerRef);
  renderer = inject(Renderer2);
  subscription = null;
  view;
  translationMemo = {};
  key;
  params = {};
  inlineScope;
  inlineRead;
  inlineLang;
  inlineTpl;
  currentLang;
  loaderTplHandler;
  // Whether we already rendered the view once
  initialized = false;
  path;
  langResolver = new LangResolver();
  scopeResolver = new ScopeResolver(this.service);
  strategy = this.tpl === null ? "attribute" : "structural";
  static ngTemplateContextGuard(dir, ctx) {
    return true;
  }
  ngOnInit() {
    const listenToLangChange = shouldListenToLangChanges(this.service, this.providerLang || this.inlineLang);
    this.subscription = this.service.langChanges$.pipe(switchMap((activeLang) => {
      const lang = this.langResolver.resolve({
        inline: this.inlineLang,
        provider: this.providerLang,
        active: activeLang
      });
      return Array.isArray(this.providerScope) ? forkJoin(this.providerScope.map((providerScope) => this.resolveScope(lang, providerScope))) : this.resolveScope(lang, this.providerScope);
    }), listenOrNotOperator(listenToLangChange)).subscribe(() => {
      this.currentLang = this.langResolver.resolveLangBasedOnScope(this.path);
      this.strategy === "attribute" ? this.attributeStrategy() : this.structuralStrategy(this.currentLang, this.inlineRead);
      this.cdr.markForCheck();
      this.initialized = true;
    });
    if (!this.initialized) {
      const loadingContent = this.resolveLoadingContent();
      if (loadingContent) {
        this.loaderTplHandler = new TemplateHandler(loadingContent, this.vcr);
        this.loaderTplHandler.attachView();
      }
    }
  }
  ngOnChanges(changes) {
    if (this.strategy === "attribute") {
      const notInit = Object.keys(changes).some((v) => !changes[v].firstChange);
      notInit && this.attributeStrategy();
    }
  }
  attributeStrategy() {
    this.detachLoader();
    this.renderer.setProperty(this.host.nativeElement, "innerText", this.service.translate(this.key, this.params, this.currentLang));
  }
  structuralStrategy(lang, read) {
    this.translationMemo = {};
    if (this.view) {
      this.view.context["$implicit"] = this.getTranslateFn(lang, read);
      this.view.context["currentLang"] = this.currentLang;
    } else {
      this.detachLoader();
      this.view = this.vcr.createEmbeddedView(this.tpl, {
        $implicit: this.getTranslateFn(lang, read),
        currentLang: this.currentLang
      });
    }
  }
  getTranslateFn(lang, read) {
    return (key, params) => {
      const withRead = read ? `${read}.${key}` : key;
      const withParams = params ? `${withRead}${JSON.stringify(params)}` : withRead;
      if (Object.prototype.hasOwnProperty.call(this.translationMemo, withParams)) {
        return this.translationMemo[withParams].value;
      }
      this.translationMemo[withParams] = {
        params,
        value: this.service.translate(withRead, params, lang)
      };
      return this.translationMemo[withParams].value;
    };
  }
  resolveLoadingContent() {
    return this.inlineTpl || this.providedLoadingTpl;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  detachLoader() {
    this.loaderTplHandler?.detachView();
  }
  resolveScope(lang, providerScope) {
    const resolvedScope = this.scopeResolver.resolve({
      inline: this.inlineScope,
      provider: providerScope
    });
    this.path = this.langResolver.resolveLangPath(lang, resolvedScope);
    const inlineLoader = resolveInlineLoader(providerScope, resolvedScope);
    return this.service._loadDependencies(this.path, inlineLoader);
  }
  static ɵfac = function TranslocoDirective_Factory(t) {
    return new (t || _TranslocoDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TranslocoDirective,
    selectors: [["", "transloco", ""]],
    inputs: {
      key: [0, "transloco", "key"],
      params: [0, "translocoParams", "params"],
      inlineScope: [0, "translocoScope", "inlineScope"],
      inlineRead: [0, "translocoRead", "inlineRead"],
      inlineLang: [0, "translocoLang", "inlineLang"],
      inlineTpl: [0, "translocoLoadingTpl", "inlineTpl"]
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslocoDirective, [{
    type: Directive,
    args: [{
      selector: "[transloco]",
      standalone: true
    }]
  }], null, {
    key: [{
      type: Input,
      args: ["transloco"]
    }],
    params: [{
      type: Input,
      args: ["translocoParams"]
    }],
    inlineScope: [{
      type: Input,
      args: ["translocoScope"]
    }],
    inlineRead: [{
      type: Input,
      args: ["translocoRead"]
    }],
    inlineLang: [{
      type: Input,
      args: ["translocoLang"]
    }],
    inlineTpl: [{
      type: Input,
      args: ["translocoLoadingTpl"]
    }]
  });
})();
var TranslocoPipe = class _TranslocoPipe {
  service;
  providerScope;
  providerLang;
  cdr;
  subscription = null;
  lastValue = "";
  lastKey;
  path;
  langResolver = new LangResolver();
  scopeResolver;
  constructor(service2, providerScope, providerLang, cdr) {
    this.service = service2;
    this.providerScope = providerScope;
    this.providerLang = providerLang;
    this.cdr = cdr;
    this.scopeResolver = new ScopeResolver(this.service);
  }
  // null is for handling strict mode + async pipe types https://github.com/ngneat/transloco/issues/311
  // null is for handling strict mode + optional chaining types https://github.com/ngneat/transloco/issues/488
  transform(key, params, inlineLang) {
    if (!key) {
      return key;
    }
    const keyName = params ? `${key}${JSON.stringify(params)}` : key;
    if (keyName === this.lastKey) {
      return this.lastValue;
    }
    this.lastKey = keyName;
    this.subscription?.unsubscribe();
    const listenToLangChange = shouldListenToLangChanges(this.service, this.providerLang || inlineLang);
    this.subscription = this.service.langChanges$.pipe(switchMap((activeLang) => {
      const lang = this.langResolver.resolve({
        inline: inlineLang,
        provider: this.providerLang,
        active: activeLang
      });
      return Array.isArray(this.providerScope) ? forkJoin(this.providerScope.map((providerScope) => this.resolveScope(lang, providerScope))) : this.resolveScope(lang, this.providerScope);
    }), listenOrNotOperator(listenToLangChange)).subscribe(() => this.updateValue(key, params));
    return this.lastValue;
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
  updateValue(key, params) {
    const lang = this.langResolver.resolveLangBasedOnScope(this.path);
    this.lastValue = this.service.translate(key, params, lang);
    this.cdr.markForCheck();
  }
  resolveScope(lang, providerScope) {
    const resolvedScope = this.scopeResolver.resolve({
      inline: void 0,
      provider: providerScope
    });
    this.path = this.langResolver.resolveLangPath(lang, resolvedScope);
    const inlineLoader = resolveInlineLoader(providerScope, resolvedScope);
    return this.service._loadDependencies(this.path, inlineLoader);
  }
  static ɵfac = function TranslocoPipe_Factory(t) {
    return new (t || _TranslocoPipe)(ɵɵdirectiveInject(TranslocoService, 16), ɵɵdirectiveInject(TRANSLOCO_SCOPE, 24), ɵɵdirectiveInject(TRANSLOCO_LANG, 24), ɵɵdirectiveInject(ChangeDetectorRef, 16));
  };
  static ɵpipe = ɵɵdefinePipe({
    name: "transloco",
    type: _TranslocoPipe,
    pure: false,
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslocoPipe, [{
    type: Pipe,
    args: [{
      name: "transloco",
      pure: false,
      standalone: true
    }]
  }], function() {
    return [{
      type: TranslocoService
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TRANSLOCO_SCOPE]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TRANSLOCO_LANG]
      }]
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var decl = [TranslocoDirective, TranslocoPipe];
var TranslocoModule = class _TranslocoModule {
  static ɵfac = function TranslocoModule_Factory(t) {
    return new (t || _TranslocoModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TranslocoModule,
    imports: [TranslocoDirective, TranslocoPipe],
    exports: [TranslocoDirective, TranslocoPipe]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslocoModule, [{
    type: NgModule,
    args: [{
      imports: decl,
      exports: decl
    }]
  }], null, null);
})();
function provideTransloco(options) {
  const providers = [provideTranslocoTranspiler(DefaultTranspiler), provideTranslocoMissingHandler(DefaultHandler), provideTranslocoInterceptor(DefaultInterceptor), provideTranslocoFallbackStrategy(DefaultFallbackStrategy)];
  if (options.config) {
    providers.push(provideTranslocoConfig(options.config));
  }
  if (options.loader) {
    providers.push(provideTranslocoLoader(options.loader));
  }
  return providers;
}
function provideTranslocoConfig(config) {
  return makeEnvironmentProviders([{
    provide: TRANSLOCO_CONFIG,
    useValue: translocoConfig(config)
  }]);
}
function provideTranslocoLoader(loader) {
  return makeEnvironmentProviders([{
    provide: TRANSLOCO_LOADER,
    useClass: loader
  }]);
}
function provideTranslocoScope(scope) {
  return {
    provide: TRANSLOCO_SCOPE,
    useValue: scope,
    multi: true
  };
}
function provideTranslocoLoadingTpl(content) {
  return {
    provide: TRANSLOCO_LOADING_TEMPLATE,
    useValue: content
  };
}
function provideTranslocoTranspiler(transpiler) {
  return makeEnvironmentProviders([{
    provide: TRANSLOCO_TRANSPILER,
    useClass: transpiler,
    deps: [TRANSLOCO_CONFIG]
  }]);
}
function provideTranslocoFallbackStrategy(strategy) {
  return makeEnvironmentProviders([{
    provide: TRANSLOCO_FALLBACK_STRATEGY,
    useClass: strategy,
    deps: [TRANSLOCO_CONFIG]
  }]);
}
function provideTranslocoMissingHandler(handler) {
  return makeEnvironmentProviders([{
    provide: TRANSLOCO_MISSING_HANDLER,
    useClass: handler
  }]);
}
function provideTranslocoInterceptor(interceptor) {
  return makeEnvironmentProviders([{
    provide: TRANSLOCO_INTERCEPTOR,
    useClass: interceptor
  }]);
}
function provideTranslocoLang(lang) {
  return {
    provide: TRANSLOCO_LANG,
    useValue: lang
  };
}
var TRANSLOCO_TEST_LANGS = new InjectionToken("TRANSLOCO_TEST_LANGS - Available testing languages");
var TRANSLOCO_TEST_OPTIONS = new InjectionToken("TRANSLOCO_TEST_OPTIONS - Testing options");
var TestingLoader = class _TestingLoader {
  langs;
  constructor(langs) {
    this.langs = langs;
  }
  getTranslation(lang) {
    return of(this.langs[lang]);
  }
  static ɵfac = function TestingLoader_Factory(t) {
    return new (t || _TestingLoader)(ɵɵinject(TRANSLOCO_TEST_LANGS));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TestingLoader,
    factory: _TestingLoader.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestingLoader, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TRANSLOCO_TEST_LANGS]
      }]
    }];
  }, null);
})();
function initTranslocoService(service2, langs = {}, options) {
  const preloadAllLangs = () => options.preloadLangs ? Promise.all(Object.keys(langs).map((lang) => service2.load(lang).toPromise())) : Promise.resolve();
  return preloadAllLangs;
}
var TranslocoTestingModule = class _TranslocoTestingModule {
  static forRoot(options) {
    return {
      ngModule: _TranslocoTestingModule,
      providers: [provideTransloco({
        loader: TestingLoader,
        config: __spreadValues({
          prodMode: true,
          missingHandler: {
            logMissingKey: false
          }
        }, options.translocoConfig)
      }), {
        provide: TRANSLOCO_TEST_LANGS,
        useValue: options.langs
      }, {
        provide: TRANSLOCO_TEST_OPTIONS,
        useValue: options
      }, {
        provide: APP_INITIALIZER,
        useFactory: initTranslocoService,
        deps: [TranslocoService, TRANSLOCO_TEST_LANGS, TRANSLOCO_TEST_OPTIONS],
        multi: true
      }]
    };
  }
  static ɵfac = function TranslocoTestingModule_Factory(t) {
    return new (t || _TranslocoTestingModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TranslocoTestingModule,
    exports: [TranslocoModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [TranslocoModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslocoTestingModule, [{
    type: NgModule,
    args: [{
      exports: [TranslocoModule]
    }]
  }], null, null);
})();
function getBrowserLang() {
  let browserLang = getBrowserCultureLang();
  if (!browserLang || !isBrowser()) {
    return void 0;
  }
  if (browserLang.indexOf("-") !== -1) {
    browserLang = browserLang.split("-")[0];
  }
  if (browserLang.indexOf("_") !== -1) {
    browserLang = browserLang.split("_")[0];
  }
  return browserLang;
}
function getBrowserCultureLang() {
  if (!isBrowser()) {
    return "";
  }
  const navigator = window.navigator;
  return navigator.languages?.[0] ?? navigator.language;
}
export {
  DefaultFallbackStrategy,
  DefaultTranspiler,
  FunctionalTranspiler,
  TRANSLOCO_CONFIG,
  TRANSLOCO_FALLBACK_STRATEGY,
  TRANSLOCO_INTERCEPTOR,
  TRANSLOCO_LANG,
  TRANSLOCO_LOADER,
  TRANSLOCO_LOADING_TEMPLATE,
  TRANSLOCO_MISSING_HANDLER,
  TRANSLOCO_SCOPE,
  TRANSLOCO_TRANSPILER,
  TestingLoader,
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService,
  TranslocoTestingModule,
  coerceArray,
  defaultConfig,
  flatten2 as flatten,
  getBrowserCultureLang,
  getBrowserLang,
  getFunctionArgs,
  getLangFromScope,
  getPipeValue,
  getScopeFromLang,
  getValue,
  hasInlineLoader,
  isBrowser,
  isDefined,
  isEmpty,
  isFunction,
  isNil,
  isNumber,
  isObject,
  isScopeArray,
  isScopeObject,
  isString,
  provideTransloco,
  provideTranslocoConfig,
  provideTranslocoFallbackStrategy,
  provideTranslocoInterceptor,
  provideTranslocoLang,
  provideTranslocoLoader,
  provideTranslocoLoadingTpl,
  provideTranslocoMissingHandler,
  provideTranslocoScope,
  provideTranslocoTranspiler,
  setValue,
  size,
  toCamelCase,
  toNumber,
  translate,
  translateObject,
  translocoConfig,
  unflatten2 as unflatten
};
//# sourceMappingURL=@ngneat_transloco.js.map
