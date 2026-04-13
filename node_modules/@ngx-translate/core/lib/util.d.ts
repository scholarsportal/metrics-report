/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param o1 Object or value to compare.
 * @param o2 Object or value to compare.
 * @returns true if arguments are equal.
 */
export declare function equals(o1: any, o2: any): boolean;
export declare function isDefined(value: any): boolean;
export declare function isDict(value: any): boolean;
export declare function isObject(value: any): boolean;
export declare function isArray(value: any): boolean;
export declare function isString(value: any): boolean;
export declare function isFunction(value: any): boolean;
export declare function mergeDeep(target: any, source: any): any;
/**
 * Gets a value from an object by composed key
 * getValue({ key1: { keyA: 'valueI' }}, 'key1.keyA') ==> 'valueI'
 * @param target
 * @param key
 */
export declare function getValue(target: any, key: string): any;
/**
 * Gets a value from an object by composed key
 * parser.setValue({a:{b:{c: "test"}}}, 'a.b.c', "test2") ==> {a:{b:{c: "test2"}}}
 * @param target an object
 * @param key E.g. "a.b.c"
 * @param value to set
 */
export declare function setValue(target: any, key: string, value: any): void;
