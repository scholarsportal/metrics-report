import {
  purify
} from "./chunk-ULQL3V3N.js";
import {
  require_a_callable,
  require_add_to_unscopables,
  require_an_object,
  require_array_slice,
  require_classof_raw,
  require_copy_constructor_properties,
  require_create_non_enumerable_property,
  require_create_property_descriptor,
  require_descriptors,
  require_export,
  require_fails,
  require_function_apply,
  require_function_call,
  require_function_uncurry_this,
  require_function_uncurry_this_accessor,
  require_get_built_in,
  require_get_method,
  require_get_substitution,
  require_global,
  require_has_own_property,
  require_is_array,
  require_is_callable,
  require_is_null_or_undefined,
  require_is_object,
  require_is_pure,
  require_is_regexp,
  require_is_symbol,
  require_iterator_close,
  require_length_of_array_like,
  require_object_define_property,
  require_object_is_prototype_of,
  require_object_set_prototype_of,
  require_regexp_get_flags,
  require_require_object_coercible,
  require_symbol_constructor_detection,
  require_to_integer_or_infinity,
  require_to_object,
  require_to_string,
  require_well_known_symbol
} from "./chunk-NW5RDBVR.js";
import {
  require_moment
} from "./chunk-WXXMLALP.js";
import {
  __commonJS,
  __export,
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-XEBHCIPT.js";

// node_modules/core-js/internals/proxy-accessor.js
var require_proxy_accessor = __commonJS({
  "node_modules/core-js/internals/proxy-accessor.js"(exports, module) {
    "use strict";
    var defineProperty = require_object_define_property().f;
    module.exports = function(Target, Source, key) {
      key in Target || defineProperty(Target, key, {
        configurable: true,
        get: function() {
          return Source[key];
        },
        set: function(it) {
          Source[key] = it;
        }
      });
    };
  }
});

// node_modules/core-js/internals/inherit-if-required.js
var require_inherit_if_required = __commonJS({
  "node_modules/core-js/internals/inherit-if-required.js"(exports, module) {
    "use strict";
    var isCallable3 = require_is_callable();
    var isObject2 = require_is_object();
    var setPrototypeOf = require_object_set_prototype_of();
    module.exports = function($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if (
        // it can work only with native `setPrototypeOf`
        setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        isCallable3(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject2(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
      )
        setPrototypeOf($this, NewTargetPrototype);
      return $this;
    };
  }
});

// node_modules/core-js/internals/normalize-string-argument.js
var require_normalize_string_argument = __commonJS({
  "node_modules/core-js/internals/normalize-string-argument.js"(exports, module) {
    "use strict";
    var toString2 = require_to_string();
    module.exports = function(argument, $default) {
      return argument === void 0 ? arguments.length < 2 ? "" : $default : toString2(argument);
    };
  }
});

// node_modules/core-js/internals/install-error-cause.js
var require_install_error_cause = __commonJS({
  "node_modules/core-js/internals/install-error-cause.js"(exports, module) {
    "use strict";
    var isObject2 = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    module.exports = function(O, options) {
      if (isObject2(options) && "cause" in options) {
        createNonEnumerableProperty(O, "cause", options.cause);
      }
    };
  }
});

// node_modules/core-js/internals/error-stack-clear.js
var require_error_stack_clear = __commonJS({
  "node_modules/core-js/internals/error-stack-clear.js"(exports, module) {
    "use strict";
    var uncurryThis3 = require_function_uncurry_this();
    var $Error = Error;
    var replace3 = uncurryThis3("".replace);
    var TEST = function(arg) {
      return String(new $Error(arg).stack);
    }("zxcasd");
    var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
    var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
    module.exports = function(stack, dropEntries) {
      if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) {
        while (dropEntries--)
          stack = replace3(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
      }
      return stack;
    };
  }
});

// node_modules/core-js/internals/error-stack-installable.js
var require_error_stack_installable = __commonJS({
  "node_modules/core-js/internals/error-stack-installable.js"(exports, module) {
    "use strict";
    var fails3 = require_fails();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = !fails3(function() {
      var error2 = new Error("a");
      if (!("stack" in error2))
        return true;
      Object.defineProperty(error2, "stack", createPropertyDescriptor(1, 7));
      return error2.stack !== 7;
    });
  }
});

// node_modules/core-js/internals/error-stack-install.js
var require_error_stack_install = __commonJS({
  "node_modules/core-js/internals/error-stack-install.js"(exports, module) {
    "use strict";
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var clearErrorStack = require_error_stack_clear();
    var ERROR_STACK_INSTALLABLE = require_error_stack_installable();
    var captureStackTrace = Error.captureStackTrace;
    module.exports = function(error2, C, stack, dropEntries) {
      if (ERROR_STACK_INSTALLABLE) {
        if (captureStackTrace)
          captureStackTrace(error2, C);
        else
          createNonEnumerableProperty(error2, "stack", clearErrorStack(stack, dropEntries));
      }
    };
  }
});

// node_modules/core-js/internals/wrap-error-constructor-with-cause.js
var require_wrap_error_constructor_with_cause = __commonJS({
  "node_modules/core-js/internals/wrap-error-constructor-with-cause.js"(exports, module) {
    "use strict";
    var getBuiltIn2 = require_get_built_in();
    var hasOwn = require_has_own_property();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var isPrototypeOf = require_object_is_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var copyConstructorProperties = require_copy_constructor_properties();
    var proxyAccessor = require_proxy_accessor();
    var inheritIfRequired = require_inherit_if_required();
    var normalizeStringArgument = require_normalize_string_argument();
    var installErrorCause = require_install_error_cause();
    var installErrorStack = require_error_stack_install();
    var DESCRIPTORS = require_descriptors();
    var IS_PURE2 = require_is_pure();
    module.exports = function(FULL_NAME, wrapper, FORCED3, IS_AGGREGATE_ERROR) {
      var STACK_TRACE_LIMIT = "stackTraceLimit";
      var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
      var path = FULL_NAME.split(".");
      var ERROR_NAME = path[path.length - 1];
      var OriginalError = getBuiltIn2.apply(null, path);
      if (!OriginalError)
        return;
      var OriginalErrorPrototype = OriginalError.prototype;
      if (!IS_PURE2 && hasOwn(OriginalErrorPrototype, "cause"))
        delete OriginalErrorPrototype.cause;
      if (!FORCED3)
        return OriginalError;
      var BaseError = getBuiltIn2("Error");
      var WrappedError = wrapper(function(a, b) {
        var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, void 0);
        var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
        if (message !== void 0)
          createNonEnumerableProperty(result, "message", message);
        installErrorStack(result, WrappedError, result.stack, 2);
        if (this && isPrototypeOf(OriginalErrorPrototype, this))
          inheritIfRequired(result, this, WrappedError);
        if (arguments.length > OPTIONS_POSITION)
          installErrorCause(result, arguments[OPTIONS_POSITION]);
        return result;
      });
      WrappedError.prototype = OriginalErrorPrototype;
      if (ERROR_NAME !== "Error") {
        if (setPrototypeOf)
          setPrototypeOf(WrappedError, BaseError);
        else
          copyConstructorProperties(WrappedError, BaseError, { name: true });
      } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
        proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
        proxyAccessor(WrappedError, OriginalError, "prepareStackTrace");
      }
      copyConstructorProperties(WrappedError, OriginalError);
      if (!IS_PURE2)
        try {
          if (OriginalErrorPrototype.name !== ERROR_NAME) {
            createNonEnumerableProperty(OriginalErrorPrototype, "name", ERROR_NAME);
          }
          OriginalErrorPrototype.constructor = WrappedError;
        } catch (error2) {
        }
      return WrappedError;
    };
  }
});

// node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/core-js/internals/array-set-length.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError2 = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
      if (this !== void 0)
        return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (error2) {
        return error2 instanceof TypeError;
      }
    }();
    module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
      if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
        throw new $TypeError2("Cannot set read only .length");
      }
      return O.length = length;
    } : function(O, length) {
      return O.length = length;
    };
  }
});

// node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module) {
    "use strict";
    var $TypeError2 = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError2("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/core-js/internals/set-helpers.js
var require_set_helpers = __commonJS({
  "node_modules/core-js/internals/set-helpers.js"(exports, module) {
    "use strict";
    var uncurryThis3 = require_function_uncurry_this();
    var SetPrototype = Set.prototype;
    module.exports = {
      // eslint-disable-next-line es/no-set -- safe
      Set,
      add: uncurryThis3(SetPrototype.add),
      has: uncurryThis3(SetPrototype.has),
      remove: uncurryThis3(SetPrototype["delete"]),
      proto: SetPrototype
    };
  }
});

// node_modules/core-js/internals/a-set.js
var require_a_set = __commonJS({
  "node_modules/core-js/internals/a-set.js"(exports, module) {
    "use strict";
    var has = require_set_helpers().has;
    module.exports = function(it) {
      has(it);
      return it;
    };
  }
});

// node_modules/core-js/internals/iterate-simple.js
var require_iterate_simple = __commonJS({
  "node_modules/core-js/internals/iterate-simple.js"(exports, module) {
    "use strict";
    var call3 = require_function_call();
    module.exports = function(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
      var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
      var next = record.next;
      var step, result;
      while (!(step = call3(next, iterator)).done) {
        result = fn(step.value);
        if (result !== void 0)
          return result;
      }
    };
  }
});

// node_modules/core-js/internals/set-iterate.js
var require_set_iterate = __commonJS({
  "node_modules/core-js/internals/set-iterate.js"(exports, module) {
    "use strict";
    var uncurryThis3 = require_function_uncurry_this();
    var iterateSimple = require_iterate_simple();
    var SetHelpers = require_set_helpers();
    var Set2 = SetHelpers.Set;
    var SetPrototype = SetHelpers.proto;
    var forEach = uncurryThis3(SetPrototype.forEach);
    var keys = uncurryThis3(SetPrototype.keys);
    var next = keys(new Set2()).next;
    module.exports = function(set, fn, interruptible) {
      return interruptible ? iterateSimple({ iterator: keys(set), next }, fn) : forEach(set, fn);
    };
  }
});

// node_modules/core-js/internals/set-clone.js
var require_set_clone = __commonJS({
  "node_modules/core-js/internals/set-clone.js"(exports, module) {
    "use strict";
    var SetHelpers = require_set_helpers();
    var iterate = require_set_iterate();
    var Set2 = SetHelpers.Set;
    var add = SetHelpers.add;
    module.exports = function(set) {
      var result = new Set2();
      iterate(set, function(it) {
        add(result, it);
      });
      return result;
    };
  }
});

// node_modules/core-js/internals/set-size.js
var require_set_size = __commonJS({
  "node_modules/core-js/internals/set-size.js"(exports, module) {
    "use strict";
    var uncurryThisAccessor = require_function_uncurry_this_accessor();
    var SetHelpers = require_set_helpers();
    module.exports = uncurryThisAccessor(SetHelpers.proto, "size", "get") || function(set) {
      return set.size;
    };
  }
});

// node_modules/core-js/internals/get-iterator-direct.js
var require_get_iterator_direct = __commonJS({
  "node_modules/core-js/internals/get-iterator-direct.js"(exports, module) {
    "use strict";
    module.exports = function(obj) {
      return {
        iterator: obj,
        next: obj.next,
        done: false
      };
    };
  }
});

// node_modules/core-js/internals/get-set-record.js
var require_get_set_record = __commonJS({
  "node_modules/core-js/internals/get-set-record.js"(exports, module) {
    "use strict";
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var call3 = require_function_call();
    var toIntegerOrInfinity2 = require_to_integer_or_infinity();
    var getIteratorDirect = require_get_iterator_direct();
    var INVALID_SIZE = "Invalid size";
    var $RangeError = RangeError;
    var $TypeError2 = TypeError;
    var max2 = Math.max;
    var SetRecord = function(set, intSize) {
      this.set = set;
      this.size = max2(intSize, 0);
      this.has = aCallable(set.has);
      this.keys = aCallable(set.keys);
    };
    SetRecord.prototype = {
      getIterator: function() {
        return getIteratorDirect(anObject(call3(this.keys, this.set)));
      },
      includes: function(it) {
        return call3(this.has, this.set, it);
      }
    };
    module.exports = function(obj) {
      anObject(obj);
      var numSize = +obj.size;
      if (numSize !== numSize)
        throw new $TypeError2(INVALID_SIZE);
      var intSize = toIntegerOrInfinity2(numSize);
      if (intSize < 0)
        throw new $RangeError(INVALID_SIZE);
      return new SetRecord(obj, intSize);
    };
  }
});

// node_modules/core-js/internals/set-difference.js
var require_set_difference = __commonJS({
  "node_modules/core-js/internals/set-difference.js"(exports, module) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var clone2 = require_set_clone();
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var has = SetHelpers.has;
    var remove = SetHelpers.remove;
    module.exports = function difference(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      var result = clone2(O);
      if (size(O) <= otherRec.size)
        iterateSet(O, function(e) {
          if (otherRec.includes(e))
            remove(result, e);
        });
      else
        iterateSimple(otherRec.getIterator(), function(e) {
          if (has(O, e))
            remove(result, e);
        });
      return result;
    };
  }
});

// node_modules/core-js/internals/set-method-accept-set-like.js
var require_set_method_accept_set_like = __commonJS({
  "node_modules/core-js/internals/set-method-accept-set-like.js"(exports, module) {
    "use strict";
    var getBuiltIn2 = require_get_built_in();
    var createSetLike = function(size) {
      return {
        size,
        has: function() {
          return false;
        },
        keys: function() {
          return {
            next: function() {
              return { done: true };
            }
          };
        }
      };
    };
    module.exports = function(name) {
      var Set2 = getBuiltIn2("Set");
      try {
        new Set2()[name](createSetLike(0));
        try {
          new Set2()[name](createSetLike(-1));
          return false;
        } catch (error2) {
          return true;
        }
      } catch (error2) {
        return false;
      }
    };
  }
});

// node_modules/core-js/modules/es.set.difference.v2.js
var require_es_set_difference_v2 = __commonJS({
  "node_modules/core-js/modules/es.set.difference.v2.js"() {
    "use strict";
    var $6 = require_export();
    var difference = require_set_difference();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $6({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("difference") }, {
      difference
    });
  }
});

// node_modules/core-js/internals/set-intersection.js
var require_set_intersection = __commonJS({
  "node_modules/core-js/internals/set-intersection.js"(exports, module) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var Set2 = SetHelpers.Set;
    var add = SetHelpers.add;
    var has = SetHelpers.has;
    module.exports = function intersection(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      var result = new Set2();
      if (size(O) > otherRec.size) {
        iterateSimple(otherRec.getIterator(), function(e) {
          if (has(O, e))
            add(result, e);
        });
      } else {
        iterateSet(O, function(e) {
          if (otherRec.includes(e))
            add(result, e);
        });
      }
      return result;
    };
  }
});

// node_modules/core-js/modules/es.set.intersection.v2.js
var require_es_set_intersection_v2 = __commonJS({
  "node_modules/core-js/modules/es.set.intersection.v2.js"() {
    "use strict";
    var $6 = require_export();
    var fails3 = require_fails();
    var intersection = require_set_intersection();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    var INCORRECT = !setMethodAcceptSetLike("intersection") || fails3(function() {
      return String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2])))) !== "3,2";
    });
    $6({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
      intersection
    });
  }
});

// node_modules/core-js/internals/set-is-disjoint-from.js
var require_set_is_disjoint_from = __commonJS({
  "node_modules/core-js/internals/set-is-disjoint-from.js"(exports, module) {
    "use strict";
    var aSet = require_a_set();
    var has = require_set_helpers().has;
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var iteratorClose = require_iterator_close();
    module.exports = function isDisjointFrom(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) <= otherRec.size)
        return iterateSet(O, function(e) {
          if (otherRec.includes(e))
            return false;
        }, true) !== false;
      var iterator = otherRec.getIterator();
      return iterateSimple(iterator, function(e) {
        if (has(O, e))
          return iteratorClose(iterator, "normal", false);
      }) !== false;
    };
  }
});

// node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var require_es_set_is_disjoint_from_v2 = __commonJS({
  "node_modules/core-js/modules/es.set.is-disjoint-from.v2.js"() {
    "use strict";
    var $6 = require_export();
    var isDisjointFrom = require_set_is_disjoint_from();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $6({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("isDisjointFrom") }, {
      isDisjointFrom
    });
  }
});

// node_modules/core-js/internals/set-is-subset-of.js
var require_set_is_subset_of = __commonJS({
  "node_modules/core-js/internals/set-is-subset-of.js"(exports, module) {
    "use strict";
    var aSet = require_a_set();
    var size = require_set_size();
    var iterate = require_set_iterate();
    var getSetRecord = require_get_set_record();
    module.exports = function isSubsetOf(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) > otherRec.size)
        return false;
      return iterate(O, function(e) {
        if (!otherRec.includes(e))
          return false;
      }, true) !== false;
    };
  }
});

// node_modules/core-js/modules/es.set.is-subset-of.v2.js
var require_es_set_is_subset_of_v2 = __commonJS({
  "node_modules/core-js/modules/es.set.is-subset-of.v2.js"() {
    "use strict";
    var $6 = require_export();
    var isSubsetOf = require_set_is_subset_of();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $6({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("isSubsetOf") }, {
      isSubsetOf
    });
  }
});

// node_modules/core-js/internals/set-is-superset-of.js
var require_set_is_superset_of = __commonJS({
  "node_modules/core-js/internals/set-is-superset-of.js"(exports, module) {
    "use strict";
    var aSet = require_a_set();
    var has = require_set_helpers().has;
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    var iteratorClose = require_iterator_close();
    module.exports = function isSupersetOf(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) < otherRec.size)
        return false;
      var iterator = otherRec.getIterator();
      return iterateSimple(iterator, function(e) {
        if (!has(O, e))
          return iteratorClose(iterator, "normal", false);
      }) !== false;
    };
  }
});

// node_modules/core-js/modules/es.set.is-superset-of.v2.js
var require_es_set_is_superset_of_v2 = __commonJS({
  "node_modules/core-js/modules/es.set.is-superset-of.v2.js"() {
    "use strict";
    var $6 = require_export();
    var isSupersetOf = require_set_is_superset_of();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $6({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("isSupersetOf") }, {
      isSupersetOf
    });
  }
});

// node_modules/core-js/internals/set-symmetric-difference.js
var require_set_symmetric_difference = __commonJS({
  "node_modules/core-js/internals/set-symmetric-difference.js"(exports, module) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var clone2 = require_set_clone();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    var add = SetHelpers.add;
    var has = SetHelpers.has;
    var remove = SetHelpers.remove;
    module.exports = function symmetricDifference(other) {
      var O = aSet(this);
      var keysIter = getSetRecord(other).getIterator();
      var result = clone2(O);
      iterateSimple(keysIter, function(e) {
        if (has(O, e))
          remove(result, e);
        else
          add(result, e);
      });
      return result;
    };
  }
});

// node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var require_es_set_symmetric_difference_v2 = __commonJS({
  "node_modules/core-js/modules/es.set.symmetric-difference.v2.js"() {
    "use strict";
    var $6 = require_export();
    var symmetricDifference = require_set_symmetric_difference();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $6({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("symmetricDifference") }, {
      symmetricDifference
    });
  }
});

// node_modules/core-js/internals/set-union.js
var require_set_union = __commonJS({
  "node_modules/core-js/internals/set-union.js"(exports, module) {
    "use strict";
    var aSet = require_a_set();
    var add = require_set_helpers().add;
    var clone2 = require_set_clone();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    module.exports = function union(other) {
      var O = aSet(this);
      var keysIter = getSetRecord(other).getIterator();
      var result = clone2(O);
      iterateSimple(keysIter, function(it) {
        add(result, it);
      });
      return result;
    };
  }
});

// node_modules/core-js/modules/es.set.union.v2.js
var require_es_set_union_v2 = __commonJS({
  "node_modules/core-js/modules/es.set.union.v2.js"() {
    "use strict";
    var $6 = require_export();
    var union = require_set_union();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $6({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("union") }, {
      union
    });
  }
});

// node_modules/core-js/internals/get-json-replacer-function.js
var require_get_json_replacer_function = __commonJS({
  "node_modules/core-js/internals/get-json-replacer-function.js"(exports, module) {
    "use strict";
    var uncurryThis3 = require_function_uncurry_this();
    var isArray = require_is_array();
    var isCallable3 = require_is_callable();
    var classof = require_classof_raw();
    var toString2 = require_to_string();
    var push2 = uncurryThis3([].push);
    module.exports = function(replacer) {
      if (isCallable3(replacer))
        return replacer;
      if (!isArray(replacer))
        return;
      var rawLength = replacer.length;
      var keys = [];
      for (var i = 0; i < rawLength; i++) {
        var element = replacer[i];
        if (typeof element == "string")
          push2(keys, element);
        else if (typeof element == "number" || classof(element) === "Number" || classof(element) === "String")
          push2(keys, toString2(element));
      }
      var keysLength = keys.length;
      var root = true;
      return function(key, value) {
        if (root) {
          root = false;
          return value;
        }
        if (isArray(this))
          return value;
        for (var j = 0; j < keysLength; j++)
          if (keys[j] === key)
            return value;
      };
    };
  }
});

// node_modules/core-js/modules/es.error.cause.js
var $ = require_export();
var global = require_global();
var apply = require_function_apply();
var wrapErrorConstructorWithCause = require_wrap_error_constructor_with_cause();
var WEB_ASSEMBLY = "WebAssembly";
var WebAssembly = global[WEB_ASSEMBLY];
var FORCED = new Error("e", { cause: 7 }).cause !== 7;
var exportGlobalErrorCauseWrapper = function(ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};
var exportWebAssemblyErrorCauseWrapper = function(ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + "." + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};
exportGlobalErrorCauseWrapper("Error", function(init) {
  return function Error2(message) {
    return apply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper("EvalError", function(init) {
  return function EvalError(message) {
    return apply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper("RangeError", function(init) {
  return function RangeError2(message) {
    return apply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper("ReferenceError", function(init) {
  return function ReferenceError(message) {
    return apply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper("SyntaxError", function(init) {
  return function SyntaxError(message) {
    return apply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper("TypeError", function(init) {
  return function TypeError2(message) {
    return apply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper("URIError", function(init) {
  return function URIError(message) {
    return apply(init, this, arguments);
  };
});
exportWebAssemblyErrorCauseWrapper("CompileError", function(init) {
  return function CompileError(message) {
    return apply(init, this, arguments);
  };
});
exportWebAssemblyErrorCauseWrapper("LinkError", function(init) {
  return function LinkError(message) {
    return apply(init, this, arguments);
  };
});
exportWebAssemblyErrorCauseWrapper("RuntimeError", function(init) {
  return function RuntimeError(message) {
    return apply(init, this, arguments);
  };
});

// node_modules/core-js/modules/es.array.push.js
var $2 = require_export();
var toObject = require_to_object();
var lengthOfArrayLike = require_length_of_array_like();
var setArrayLength = require_array_set_length();
var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
var fails = require_fails();
var INCORRECT_TO_LENGTH = fails(function() {
  return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
});
var properErrorOnNonWritableLength = function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (error2) {
    return error2 instanceof TypeError;
  }
};
var FORCED2 = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
$2({ target: "Array", proto: true, arity: 1, forced: FORCED2 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});

// node_modules/core-js/modules/es.array.unscopables.flat-map.js
var addToUnscopables = require_add_to_unscopables();
addToUnscopables("flatMap");

// node_modules/core-js/modules/esnext.set.difference.v2.js
require_es_set_difference_v2();

// node_modules/core-js/modules/esnext.set.intersection.v2.js
require_es_set_intersection_v2();

// node_modules/core-js/modules/esnext.set.is-disjoint-from.v2.js
require_es_set_is_disjoint_from_v2();

// node_modules/core-js/modules/esnext.set.is-subset-of.v2.js
require_es_set_is_subset_of_v2();

// node_modules/core-js/modules/esnext.set.is-superset-of.v2.js
require_es_set_is_superset_of_v2();

// node_modules/core-js/modules/esnext.set.symmetric-difference.v2.js
require_es_set_symmetric_difference_v2();

// node_modules/core-js/modules/esnext.set.union.v2.js
require_es_set_union_v2();

// node_modules/handsontable/helpers/array.mjs
function to2dArray(arr) {
  const ilen = arr.length;
  let i = 0;
  while (i < ilen) {
    arr[i] = [arr[i]];
    i += 1;
  }
}
function extendArray(arr, extension) {
  const ilen = extension.length;
  let i = 0;
  while (i < ilen) {
    arr.push(extension[i]);
    i += 1;
  }
}
function pivot(arr) {
  const pivotedArr = [];
  if (!arr || arr.length === 0 || !arr[0] || arr[0].length === 0) {
    return pivotedArr;
  }
  const rowCount = arr.length;
  const colCount = arr[0].length;
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (!pivotedArr[j]) {
        pivotedArr[j] = [];
      }
      pivotedArr[j][i] = arr[i][j];
    }
  }
  return pivotedArr;
}
function arrayReduce(array, iteratee, accumulator, initFromArray) {
  let index2 = -1;
  let iterable = array;
  let result = accumulator;
  if (!Array.isArray(array)) {
    iterable = Array.from(array);
  }
  const length = iterable.length;
  if (initFromArray && length) {
    index2 += 1;
    result = iterable[index2];
  }
  index2 += 1;
  while (index2 < length) {
    result = iteratee(result, iterable[index2], index2, iterable);
    index2 += 1;
  }
  return result;
}
function arrayFilter(array, predicate) {
  let index2 = 0;
  let iterable = array;
  if (!Array.isArray(array)) {
    iterable = Array.from(array);
  }
  const length = iterable.length;
  const result = [];
  let resIndex = -1;
  while (index2 < length) {
    const value = iterable[index2];
    if (predicate(value, index2, iterable)) {
      resIndex += 1;
      result[resIndex] = value;
    }
    index2 += 1;
  }
  return result;
}
function arrayMap(array, iteratee) {
  let index2 = 0;
  let iterable = array;
  if (!Array.isArray(array)) {
    iterable = Array.from(array);
  }
  const length = iterable.length;
  const result = [];
  let resIndex = -1;
  while (index2 < length) {
    const value = iterable[index2];
    resIndex += 1;
    result[resIndex] = iteratee(value, index2, iterable);
    index2 += 1;
  }
  return result;
}
function arrayEach(array, iteratee) {
  let index2 = 0;
  let iterable = array;
  if (!Array.isArray(array)) {
    iterable = Array.from(array);
  }
  const length = iterable.length;
  while (index2 < length) {
    if (iteratee(iterable[index2], index2, iterable) === false) {
      break;
    }
    index2 += 1;
  }
  return array;
}
function arrayUnique(array) {
  const unique = [];
  arrayEach(array, (value) => {
    if (unique.indexOf(value) === -1) {
      unique.push(value);
    }
  });
  return unique;
}
function getDifferenceOfArrays() {
  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }
  const [first, ...rest] = [...arrays];
  let filteredFirstArray = first;
  arrayEach(rest, (array) => {
    filteredFirstArray = filteredFirstArray.filter((value) => !array.includes(value));
  });
  return filteredFirstArray;
}
function stringToArray(value) {
  let delimiter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ";
  return value.split(delimiter);
}

// node_modules/core-js/modules/es.json.stringify.js
var $3 = require_export();
var getBuiltIn = require_get_built_in();
var apply2 = require_function_apply();
var call = require_function_call();
var uncurryThis = require_function_uncurry_this();
var fails2 = require_fails();
var isCallable = require_is_callable();
var isSymbol = require_is_symbol();
var arraySlice = require_array_slice();
var getReplacerFunction = require_get_json_replacer_function();
var NATIVE_SYMBOL = require_symbol_constructor_detection();
var $String = String;
var $stringify = getBuiltIn("JSON", "stringify");
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis("".charAt);
var charCodeAt = uncurryThis("".charCodeAt);
var replace = uncurryThis("".replace);
var numberToString = uncurryThis(1 .toString);
var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;
var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails2(function() {
  var symbol = getBuiltIn("Symbol")("stringify detection");
  return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
});
var ILL_FORMED_UNICODE = fails2(function() {
  return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
});
var stringifyWithSymbolsFix = function(it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === void 0 || isSymbol(it)))
    return;
  args[1] = function(key, value) {
    if (isCallable($replacer))
      value = call($replacer, this, $String(key), value);
    if (!isSymbol(value))
      return value;
  };
  return apply2($stringify, null, args);
};
var fixIllFormed = function(match, offset2, string) {
  var prev = charAt(string, offset2 - 1);
  var next = charAt(string, offset2 + 1);
  if (exec(low, match) && !exec(hi, next) || exec(hi, match) && !exec(low, prev)) {
    return "\\u" + numberToString(charCodeAt(match, 0), 16);
  }
  return match;
};
if ($stringify) {
  $3({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify3(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply2(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == "string" ? replace(result, tester, fixIllFormed) : result;
    }
  });
}

// node_modules/handsontable/helpers/object.mjs
function duckSchema(object) {
  let schema;
  if (Array.isArray(object)) {
    schema = object.length ? new Array(object.length).fill(null) : [];
  } else {
    schema = {};
    objectEach(object, (value, key) => {
      if (key === "__children") {
        return;
      }
      if (value && typeof value === "object" && !Array.isArray(value)) {
        schema[key] = duckSchema(value);
      } else if (Array.isArray(value)) {
        if (value.length && typeof value[0] === "object" && !Array.isArray(value[0])) {
          schema[key] = [duckSchema(value[0])];
        } else {
          schema[key] = [];
        }
      } else {
        schema[key] = null;
      }
    });
  }
  return schema;
}
function inherit(Child, Parent) {
  Parent.prototype.constructor = Parent;
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
  return Child;
}
function extend(target, extension, writableKeys) {
  const hasWritableKeys = Array.isArray(writableKeys);
  objectEach(extension, (value, key) => {
    if (hasWritableKeys === false || writableKeys.includes(key)) {
      target[key] = value;
    }
  });
  return target;
}
function deepExtend(target, extension) {
  objectEach(extension, (value, key) => {
    if (extension[key] && typeof extension[key] === "object") {
      if (!target[key]) {
        if (Array.isArray(extension[key])) {
          target[key] = [];
        } else if (Object.prototype.toString.call(extension[key]) === "[object Date]") {
          target[key] = extension[key];
        } else {
          target[key] = {};
        }
      }
      deepExtend(target[key], extension[key]);
    } else {
      target[key] = extension[key];
    }
  });
}
function deepClone(obj) {
  if (typeof obj === "object") {
    return JSON.parse(JSON.stringify(obj));
  }
  return obj;
}
function clone(object) {
  const result = {};
  objectEach(object, (value, key) => {
    result[key] = value;
  });
  return result;
}
function mixin(Base) {
  if (!Base.MIXINS) {
    Base.MIXINS = [];
  }
  for (var _len = arguments.length, mixins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }
  arrayEach(mixins, (mixinItem) => {
    Base.MIXINS.push(mixinItem.MIXIN_NAME);
    objectEach(mixinItem, (value, key) => {
      if (Base.prototype[key] !== void 0) {
        throw new Error(`Mixin conflict. Property '${key}' already exist and cannot be overwritten.`);
      }
      if (typeof value === "function") {
        Base.prototype[key] = value;
      } else {
        const getter = function _getter(property, initialValue) {
          const propertyName = `_${property}`;
          const initValue = (newValue) => {
            let result = newValue;
            if (Array.isArray(result) || isObject(result)) {
              result = deepClone(result);
            }
            return result;
          };
          return function() {
            if (this[propertyName] === void 0) {
              this[propertyName] = initValue(initialValue);
            }
            return this[propertyName];
          };
        };
        const setter = function _setter(property) {
          const propertyName = `_${property}`;
          return function(newValue) {
            this[propertyName] = newValue;
          };
        };
        Object.defineProperty(Base.prototype, key, {
          get: getter(key, value),
          set: setter(key),
          configurable: true
        });
      }
    });
  });
  return Base;
}
function isObjectEqual(object1, object2) {
  return JSON.stringify(object1) === JSON.stringify(object2);
}
function isObject(object) {
  return Object.prototype.toString.call(object) === "[object Object]";
}
function defineGetter(object, property, value, options) {
  options.value = value;
  options.writable = options.writable !== false;
  options.enumerable = options.enumerable !== false;
  options.configurable = options.configurable !== false;
  Object.defineProperty(object, property, options);
}
function objectEach(object, iteratee) {
  for (const key in object) {
    if (!object.hasOwnProperty || object.hasOwnProperty && Object.prototype.hasOwnProperty.call(object, key)) {
      if (iteratee(object[key], key, object) === false) {
        break;
      }
    }
  }
  return object;
}
function getProperty(object, name) {
  const names = name.split(".");
  let result = object;
  objectEach(names, (nameItem) => {
    result = result[nameItem];
    if (result === void 0) {
      result = void 0;
      return false;
    }
  });
  return result;
}
function setProperty(object, name, value) {
  const names = name.split(".");
  let workingObject = object;
  names.forEach((propName, index2) => {
    if (index2 !== names.length - 1) {
      if (!hasOwnProperty(workingObject, propName)) {
        workingObject[propName] = {};
      }
      workingObject = workingObject[propName];
    } else {
      workingObject[propName] = value;
    }
  });
}
function deepObjectSize(object) {
  if (!isObject(object)) {
    return 0;
  }
  const recursObjLen = function(obj) {
    let result = 0;
    if (isObject(obj)) {
      objectEach(obj, (value, key) => {
        if (key === "__children") {
          return;
        }
        result += recursObjLen(value);
      });
    } else {
      result += 1;
    }
    return result;
  };
  return recursObjLen(object);
}
function createObjectPropListener(defaultValue) {
  let propertyToListen = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "value";
  const privateProperty = `_${propertyToListen}`;
  const holder = {
    _touched: false,
    [privateProperty]: defaultValue,
    isTouched() {
      return this._touched;
    }
  };
  Object.defineProperty(holder, propertyToListen, {
    get() {
      return this[privateProperty];
    },
    set(value) {
      this._touched = true;
      this[privateProperty] = value;
    },
    enumerable: true,
    configurable: true
  });
  return holder;
}
function hasOwnProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

// node_modules/handsontable/helpers/mixed.mjs
var import_moment = __toESM(require_moment(), 1);

// node_modules/handsontable/helpers/templateLiteralTag.mjs
function toSingleLine(strings) {
  for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expressions[_key - 1] = arguments[_key];
  }
  const result = arrayReduce(strings, (previousValue, currentValue, index2) => {
    const valueWithoutWhiteSpaces = currentValue.replace(/\r?\n\s*/g, "");
    const expressionForIndex = expressions[index2] ? expressions[index2] : "";
    return previousValue + valueWithoutWhiteSpaces + expressionForIndex;
  }, "");
  return result.trim();
}

// node_modules/handsontable/helpers/mixed.mjs
function stringify(value) {
  let result;
  switch (typeof value) {
    case "string":
    case "number":
      result = `${value}`;
      break;
    case "object":
      result = value === null ? "" : value.toString();
      break;
    case "undefined":
      result = "";
      break;
    default:
      result = value.toString();
      break;
  }
  return result;
}
function isDefined(variable) {
  return typeof variable !== "undefined";
}
function isUndefined(variable) {
  return typeof variable === "undefined";
}
function isEmpty(variable) {
  return variable === null || variable === "" || isUndefined(variable);
}
function isRegExp(variable) {
  return Object.prototype.toString.call(variable) === "[object RegExp]";
}
var _m = "length";
var _hd = (v) => parseInt(v, 16);
var _pi = (v) => parseInt(v, 10);
var _ss = (v, s, l) => v["substr"](s, l);
var _cp = (v) => v["codePointAt"](0) - 65;
var _norm = (v) => `${v}`.replace(/\-/g, "");
var _extractTime = (v) => _hd(_ss(_norm(v), _hd("12"), _cp("F"))) / (_hd(_ss(_norm(v), _cp("B"), ~~![][_m])) || 9);
var _ignored = () => typeof location !== "undefined" && /^([a-z0-9\-]+\.)?\x68\x61\x6E\x64\x73\x6F\x6E\x74\x61\x62\x6C\x65\x2E\x63\x6F\x6D$/i.test(location.host);
var _notified = false;
var consoleMessages = {
  invalid: () => toSingleLine`
    The license key for Handsontable is invalid.\x20
    If you need any help, contact us at support@handsontable.com.`,
  expired: (_ref) => {
    let {
      keyValidityDate,
      hotVersion
    } = _ref;
    return toSingleLine`
    The license key for Handsontable expired on ${keyValidityDate}, and is not valid for the installed\x20
    version ${hotVersion}. Renew your license key at handsontable.com or downgrade to a version released prior\x20
    to ${keyValidityDate}. If you need any help, contact us at sales@handsontable.com.`;
  },
  missing: () => toSingleLine`
    The license key for Handsontable is missing. Use your purchased key to activate the product.\x20
    Alternatively, you can activate Handsontable to use for non-commercial purposes by\x20
    passing the key: 'non-commercial-and-evaluation'. If you need any help, contact\x20
    us at support@handsontable.com.`,
  non_commercial: () => ""
};
var domMessages = {
  invalid: () => toSingleLine`
    The license key for Handsontable is invalid.\x20
    <a href="https://handsontable.com/docs/tutorial-license-key.html" target="_blank">Read more</a> on how to\x20
    install it properly or contact us at <a href="mailto:support@handsontable.com">support@handsontable.com</a>.`,
  expired: (_ref2) => {
    let {
      keyValidityDate,
      hotVersion
    } = _ref2;
    return toSingleLine`
    The license key for Handsontable expired on ${keyValidityDate}, and is not valid for the installed\x20
    version ${hotVersion}. <a href="https://handsontable.com/pricing" target="_blank">Renew</a> your\x20
    license key or downgrade to a version released prior to ${keyValidityDate}. If you need any\x20
    help, contact us at <a href="mailto:sales@handsontable.com">sales@handsontable.com</a>.`;
  },
  missing: () => toSingleLine`
    The license key for Handsontable is missing. Use your purchased key to activate the product.\x20
    Alternatively, you can activate Handsontable to use for non-commercial purposes by\x20
    passing the key: 'non-commercial-and-evaluation'.\x20
    <a href="https://handsontable.com/docs/tutorial-license-key.html" target="_blank">Read more</a> about it in\x20
    the documentation or contact us at <a href="mailto:support@handsontable.com">support@handsontable.com</a>.`,
  non_commercial: () => ""
};
function _injectProductInfo(key, element) {
  const hasValidType = !isEmpty(key);
  const isNonCommercial = typeof key === "string" && key.toLowerCase() === "non-commercial-and-evaluation";
  const hotVersion = "14.4.0";
  let keyValidityDate;
  let consoleMessageState = "invalid";
  let domMessageState = "invalid";
  key = _norm(key || "");
  const schemaValidity = _checkKeySchema(key);
  if (hasValidType || isNonCommercial || schemaValidity) {
    if (schemaValidity) {
      const releaseDate = (0, import_moment.default)("11/06/2024", "DD/MM/YYYY");
      const releaseDays = Math.floor(releaseDate.toDate().getTime() / 864e5);
      const keyValidityDays = _extractTime(key);
      keyValidityDate = (0, import_moment.default)((keyValidityDays + 1) * 864e5, "x").format("MMMM DD, YYYY");
      if (releaseDays > keyValidityDays) {
        consoleMessageState = "expired";
        domMessageState = "expired";
      } else {
        consoleMessageState = "valid";
        domMessageState = "valid";
      }
    } else if (isNonCommercial) {
      consoleMessageState = "non_commercial";
      domMessageState = "valid";
    } else {
      consoleMessageState = "invalid";
      domMessageState = "invalid";
    }
  } else {
    consoleMessageState = "missing";
    domMessageState = "missing";
  }
  if (_ignored()) {
    consoleMessageState = "valid";
    domMessageState = "valid";
  }
  if (!_notified && consoleMessageState !== "valid") {
    const message = consoleMessages[consoleMessageState]({
      keyValidityDate,
      hotVersion
    });
    if (message) {
      console[consoleMessageState === "non_commercial" ? "info" : "warn"](consoleMessages[consoleMessageState]({
        keyValidityDate,
        hotVersion
      }));
    }
    _notified = true;
  }
  if (domMessageState !== "valid" && element.parentNode) {
    const message = domMessages[domMessageState]({
      keyValidityDate,
      hotVersion
    });
    if (message) {
      const messageNode = document.createElement("div");
      messageNode.className = "hot-display-license-info";
      messageNode.innerHTML = domMessages[domMessageState]({
        keyValidityDate,
        hotVersion
      });
      element.parentNode.insertBefore(messageNode, element.nextSibling);
    }
  }
}
function _checkKeySchema(v) {
  let z = [][_m];
  let p = z;
  if (v[_m] !== _cp("Z")) {
    return false;
  }
  for (let c = "", i = "B<H4P+".split(""), j = _cp(i.shift()); j; j = _cp(i.shift() || "A")) {
    --j < ""[_m] ? p = p | (_pi(`${_pi(_hd(c) + (_hd(_ss(v, Math.abs(j), 2)) + []).padStart(2, "0"))}`) % 97 || 2) >> 1 : c = _ss(v, j, !j ? 6 : i[_m] === 1 ? 9 : 8);
  }
  return p === z;
}

// node_modules/handsontable/helpers/string.mjs
function toUpperCaseFirst(string) {
  return string[0].toUpperCase() + string.substr(1);
}
function randomString() {
  function s4() {
    return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
  }
  return s4() + s4() + s4() + s4();
}
function isPercentValue(value) {
  return /^([0-9][0-9]?%$)|(^100%$)/.test(value);
}
function substitute(template) {
  let variables = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return `${template}`.replace(/(?:\\)?\[([^[\]]+)]/g, (match, name) => {
    if (match.charAt(0) === "\\") {
      return match.substr(1, match.length - 1);
    }
    return variables[name] === void 0 ? "" : variables[name];
  });
}
function stripTags(string) {
  return sanitize(`${string}`, {
    ALLOWED_TAGS: []
  });
}
function sanitize(string, options) {
  return purify.sanitize(string, options);
}

// node_modules/handsontable/helpers/console.mjs
function warn() {
  if (isDefined(console)) {
    console.warn(...arguments);
  }
}
function error() {
  if (isDefined(console)) {
    console.error(...arguments);
  }
}

// node_modules/handsontable/helpers/function.mjs
function isFunction(func) {
  return typeof func === "function";
}
function debounce(func) {
  let wait = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 200;
  let lastTimer = null;
  let result;
  function _debounce() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    if (lastTimer) {
      clearTimeout(lastTimer);
    }
    lastTimer = setTimeout(() => {
      result = func.apply(this, args);
    }, wait);
    return result;
  }
  return _debounce;
}
function partial(func) {
  for (var _len6 = arguments.length, params = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    params[_key6 - 1] = arguments[_key6];
  }
  return function _partial() {
    for (var _len7 = arguments.length, restParams = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      restParams[_key7] = arguments[_key7];
    }
    return func.apply(this, params.concat(restParams));
  };
}
function curry(func) {
  const argsLength = func.length;
  function given(argsSoFar) {
    return function _curry() {
      for (var _len8 = arguments.length, params = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        params[_key8] = arguments[_key8];
      }
      const passedArgsSoFar = argsSoFar.concat(params);
      let result;
      if (passedArgsSoFar.length >= argsLength) {
        result = func.apply(this, passedArgsSoFar);
      } else {
        result = given(passedArgsSoFar);
      }
      return result;
    };
  }
  return given([]);
}
function fastCall(func, context, arg1, arg2, arg3, arg4, arg5, arg6) {
  if (isDefined(arg6)) {
    return func.call(context, arg1, arg2, arg3, arg4, arg5, arg6);
  } else if (isDefined(arg5)) {
    return func.call(context, arg1, arg2, arg3, arg4, arg5);
  } else if (isDefined(arg4)) {
    return func.call(context, arg1, arg2, arg3, arg4);
  } else if (isDefined(arg3)) {
    return func.call(context, arg1, arg2, arg3);
  } else if (isDefined(arg2)) {
    return func.call(context, arg1, arg2);
  } else if (isDefined(arg1)) {
    return func.call(context, arg1);
  }
  return func.call(context);
}

// node_modules/handsontable/pluginHooks.mjs
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var REGISTERED_HOOKS = [
  /* eslint-disable jsdoc/require-description-complete-sentence */
  /**
   * Fired after resetting a cell's meta. This happens when the {@link Core#updateSettings} method is called.
   *
   * @event Hooks#afterCellMetaReset
   */
  "afterCellMetaReset",
  /**
   * Fired after one or more cells has been changed. The changes are triggered in any situation when the
   * value is entered using an editor or changed using API (e.q [`setDataAtCell`](@/api/core.md#setdataatcell) method).
   *
   * __Note:__ For performance reasons, the `changes` array is null for `"loadData"` source.
   *
   * @event Hooks#afterChange
   * @param {Array[]} changes 2D array containing information about each of the edited cells `[[row, prop, oldVal, newVal], ...]`. `row` is a visual row index.
   * @param {string} [source] String that identifies source of hook call ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   * @example
   * ::: only-for javascript
   * ```js
   * new Handsontable(element, {
   *   afterChange: (changes) => {
   *     changes?.forEach(([row, prop, oldValue, newValue]) => {
   *       // Some logic...
   *     });
   *   }
   * })
   * ```
   * :::
   *
   * ::: only-for react
   * ```jsx
   * <HotTable
   *   afterChange={(changes, source) => {
   *     changes?.forEach(([row, prop, oldValue, newValue]) => {
   *       // Some logic...
   *     });
   *   }}
   * />
   * ```
   * :::
   */
  "afterChange",
  /**
   * Fired each time user opens {@link ContextMenu} and after setting up the Context Menu's default options. These options are a collection
   * which user can select by setting an array of keys or an array of objects in {@link Options#contextMenu} option.
   *
   * @event Hooks#afterContextMenuDefaultOptions
   * @param {Array} predefinedItems An array of objects containing information about the pre-defined Context Menu items.
   */
  "afterContextMenuDefaultOptions",
  /**
   * Fired each time user opens {@link ContextMenu} plugin before setting up the Context Menu's items but after filtering these options by
   * user ([`contextMenu`](@/api/options.md#contextmenu) option). This hook can by helpful to determine if user use specified menu item or to set up
   * one of the menu item to by always visible.
   *
   * @event Hooks#beforeContextMenuSetItems
   * @param {object[]} menuItems An array of objects containing information about to generated Context Menu items.
   */
  "beforeContextMenuSetItems",
  /**
   * Fired by {@link DropdownMenu} plugin after setting up the Dropdown Menu's default options. These options are a
   * collection which user can select by setting an array of keys or an array of objects in {@link Options#dropdownMenu}
   * option.
   *
   * @event Hooks#afterDropdownMenuDefaultOptions
   * @param {object[]} predefinedItems An array of objects containing information about the pre-defined Context Menu items.
   */
  "afterDropdownMenuDefaultOptions",
  /**
   * Fired by {@link DropdownMenu} plugin before setting up the Dropdown Menu's items but after filtering these options
   * by user ([`dropdownMenu`](@/api/options.md#dropdownmenu) option). This hook can by helpful to determine if user use specified menu item or to set
   * up one of the menu item to by always visible.
   *
   * @event Hooks#beforeDropdownMenuSetItems
   * @param {object[]} menuItems An array of objects containing information about to generated Dropdown Menu items.
   */
  "beforeDropdownMenuSetItems",
  /**
   * Fired by {@link ContextMenu} plugin after hiding the Context Menu. This hook is fired when {@link Options#contextMenu}
   * option is enabled.
   *
   * @event Hooks#afterContextMenuHide
   * @param {object} context The Context Menu plugin instance.
   */
  "afterContextMenuHide",
  /**
   * Fired by {@link ContextMenu} plugin before opening the Context Menu. This hook is fired when {@link Options#contextMenu}
   * option is enabled.
   *
   * @event Hooks#beforeContextMenuShow
   * @param {object} context The Context Menu instance.
   */
  "beforeContextMenuShow",
  /**
   * Fired by {@link ContextMenu} plugin after opening the Context Menu. This hook is fired when {@link Options#contextMenu}
   * option is enabled.
   *
   * @event Hooks#afterContextMenuShow
   * @param {object} context The Context Menu plugin instance.
   */
  "afterContextMenuShow",
  /**
   * Fired by {@link CopyPaste} plugin after reaching the copy limit while copying data. This hook is fired when
   * {@link Options#copyPaste} option is enabled.
   *
   * @event Hooks#afterCopyLimit
   * @param {number} selectedRows Count of selected copyable rows.
   * @param {number} selectedColumns Count of selected copyable columns.
   * @param {number} copyRowsLimit Current copy rows limit.
   * @param {number} copyColumnsLimit Current copy columns limit.
   */
  "afterCopyLimit",
  /**
   * Fired before created a new column.
   *
   * @event Hooks#beforeCreateCol
   * @param {number} index Represents the visual index of first newly created column in the data source array.
   * @param {number} amount Number of newly created columns in the data source array.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   * @returns {*} If `false` then creating columns is cancelled.
   * @example
   * ::: only-for javascript
   * ```js
   * // Return `false` to cancel column inserting.
   * new Handsontable(element, {
   *   beforeCreateCol: function(data, coords) {
   *     return false;
   *   }
   * });
   * ```
   * :::
   *
   * ::: only-for react
   * ```jsx
   * // Return `false` to cancel column inserting.
   * <HotTable
   *   beforeCreateCol={(data, coords) => {
   *     return false;
   *   }}
   * />
   * ```
   * :::
   */
  "beforeCreateCol",
  /**
   * Fired after the order of columns has changed.
   * This hook is fired by changing column indexes of any type supported by the {@link IndexMapper}.
   *
   * @event Hooks#afterColumnSequenceChange
   * @param {'init'|'remove'|'insert'|'move'|'update'} [source] A string that indicates what caused the change to the order of columns.
   */
  "afterColumnSequenceChange",
  /**
   * Fired after created a new column.
   *
   * @event Hooks#afterCreateCol
   * @param {number} index Represents the visual index of first newly created column in the data source.
   * @param {number} amount Number of newly created columns in the data source.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   */
  "afterCreateCol",
  /**
   * Fired before created a new row.
   *
   * @event Hooks#beforeCreateRow
   * @param {number} index Represents the visual index of first newly created row in the data source array.
   * @param {number} amount Number of newly created rows in the data source array.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   * @returns {*|boolean} If false is returned the action is canceled.
   */
  "beforeCreateRow",
  /**
   * Fired after created a new row.
   *
   * @event Hooks#afterCreateRow
   * @param {number} index Represents the visual index of first newly created row in the data source array.
   * @param {number} amount Number of newly created rows in the data source array.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   */
  "afterCreateRow",
  /**
   * Fired after all selected cells are deselected.
   *
   * @event Hooks#afterDeselect
   */
  "afterDeselect",
  /**
   * Fired after destroying the Handsontable instance.
   *
   * @event Hooks#afterDestroy
   */
  "afterDestroy",
  /**
   * Hook fired after `keydown` event is handled.
   *
   * @event Hooks#afterDocumentKeyDown
   * @param {Event} event A native `keydown` event object.
   */
  "afterDocumentKeyDown",
  /**
   * Fired inside the Walkontable's selection `draw` method. Can be used to add additional class names to cells, depending on the current selection.
   *
   * @event Hooks#afterDrawSelection
   * @param {number} currentRow Row index of the currently processed cell.
   * @param {number} currentColumn Column index of the currently cell.
   * @param {number[]} cornersOfSelection Array of the current selection in a form of `[startRow, startColumn, endRow, endColumn]`.
   * @param {number|undefined} layerLevel Number indicating which layer of selection is currently processed.
   * @since 0.38.1
   * @returns {string|undefined} Can return a `String`, which will act as an additional `className` to be added to the currently processed cell.
   */
  "afterDrawSelection",
  /**
   * Fired inside the Walkontable's `refreshSelections` method. Can be used to remove additional class names from all cells in the table.
   *
   * @event Hooks#beforeRemoveCellClassNames
   * @since 0.38.1
   * @returns {string[]|undefined} Can return an `Array` of `String`s. Each of these strings will act like class names to be removed from all the cells in the table.
   */
  "beforeRemoveCellClassNames",
  /**
   * Fired after getting the cell settings.
   *
   * @event Hooks#afterGetCellMeta
   * @param {number} row Visual row index.
   * @param {number} column Visual column index.
   * @param {object} cellProperties Object containing the cell properties.
   */
  "afterGetCellMeta",
  /**
   * Fired after retrieving information about a column header and appending it to the table header.
   *
   * @event Hooks#afterGetColHeader
   * @param {number} column Visual column index.
   * @param {HTMLTableCellElement} TH Header's TH element.
   * @param {number} [headerLevel=0] (Since 12.2.0) Header level index. Accepts positive (0 to n)
   *                                 and negative (-1 to -n) values. For positive values, 0 points to the
   *                                 topmost header. For negative values, -1 points to the bottom-most
   *                                 header (the header closest to the cells).
   */
  "afterGetColHeader",
  /**
   * Fired after retrieving information about a row header and appending it to the table header.
   *
   * @event Hooks#afterGetRowHeader
   * @param {number} row Visual row index.
   * @param {HTMLTableCellElement} TH Header's TH element.
   */
  "afterGetRowHeader",
  /**
   * Fired after the Handsontable instance is initiated.
   *
   * @event Hooks#afterInit
   */
  "afterInit",
  /**
   * Fired after Handsontable's [`data`](@/api/options.md#data)
   * gets modified by the [`loadData()`](@/api/core.md#loaddata) method
   * or the [`updateSettings()`](@/api/core.md#updatesettings) method.
   *
   * Read more:
   * - [Binding to data](@/guides/getting-started/binding-to-data/binding-to-data.md)
   * - [Saving data](@/guides/getting-started/saving-data/saving-data.md)
   *
   * @event Hooks#afterLoadData
   * @param {Array} sourceData An [array of arrays](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays), or an [array of objects](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects), that contains Handsontable's data
   * @param {boolean} initialLoad A flag that indicates whether the data was loaded at Handsontable's initialization (`true`) or later (`false`)
   * @param {string} source The source of the call
   */
  "afterLoadData",
  /**
   * Fired after the [`updateData()`](@/api/core.md#updatedata) method
   * modifies Handsontable's [`data`](@/api/options.md#data).
   *
   * Read more:
   * - [Binding to data](@/guides/getting-started/binding-to-data/binding-to-data.md)
   * - [Saving data](@/guides/getting-started/saving-data/saving-data.md)
   *
   * @event Hooks#afterUpdateData
   * @since 11.1.0
   * @param {Array} sourceData An [array of arrays](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays), or an [array of objects](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects), that contains Handsontable's data
   * @param {boolean} initialLoad A flag that indicates whether the data was loaded at Handsontable's initialization (`true`) or later (`false`)
   * @param {string} source The source of the call
   */
  "afterUpdateData",
  /**
   * Fired after a scroll event, which is identified as a momentum scroll (e.g. on an iPad).
   *
   * @event Hooks#afterMomentumScroll
   */
  "afterMomentumScroll",
  /**
   * Fired after a `mousedown` event is triggered on the cell corner (the drag handle).
   *
   * @event Hooks#afterOnCellCornerMouseDown
   * @param {Event} event `mousedown` event object.
   */
  "afterOnCellCornerMouseDown",
  /**
   * Fired after a `dblclick` event is triggered on the cell corner (the drag handle).
   *
   * @event Hooks#afterOnCellCornerDblClick
   * @param {Event} event `dblclick` event object.
   */
  "afterOnCellCornerDblClick",
  /**
   * Fired after clicking on a cell or row/column header. In case the row/column header was clicked, the coordinate
   * indexes are negative.
   *
   * For example clicking on the row header of cell (0, 0) results with `afterOnCellMouseDown` called
   * with coordinates `{row: 0, col: -1}`.
   *
   * @event Hooks#afterOnCellMouseDown
   * @param {Event} event `mousedown` event object.
   * @param {CellCoords} coords Coordinates object containing the visual row and visual column indexes of the clicked cell.
   * @param {HTMLTableCellElement} TD Cell's TD (or TH) element.
   */
  "afterOnCellMouseDown",
  /**
   * Fired after clicking on a cell or row/column header. In case the row/column header was clicked, the coordinate
   * indexes are negative.
   *
   * For example clicking on the row header of cell (0, 0) results with `afterOnCellMouseUp` called
   * with coordinates `{row: 0, col: -1}`.
   *
   * @event Hooks#afterOnCellMouseUp
   * @param {Event} event `mouseup` event object.
   * @param {CellCoords} coords Coordinates object containing the visual row and visual column indexes of the clicked cell.
   * @param {HTMLTableCellElement} TD Cell's TD (or TH) element.
   */
  "afterOnCellMouseUp",
  /**
   * Fired after clicking right mouse button on a cell or row/column header.
   *
   * For example clicking on the row header of cell (0, 0) results with `afterOnCellContextMenu` called
   * with coordinates `{row: 0, col: -1}`.
   *
   * @event Hooks#afterOnCellContextMenu
   * @since 4.1.0
   * @param {Event} event `contextmenu` event object.
   * @param {CellCoords} coords Coordinates object containing the visual row and visual column indexes of the clicked cell.
   * @param {HTMLTableCellElement} TD Cell's TD (or TH) element.
   */
  "afterOnCellContextMenu",
  /**
   * Fired after hovering a cell or row/column header with the mouse cursor. In case the row/column header was
   * hovered, the index is negative.
   *
   * For example, hovering over the row header of cell (0, 0) results with `afterOnCellMouseOver` called
   * with coords `{row: 0, col: -1}`.
   *
   * @event Hooks#afterOnCellMouseOver
   * @param {Event} event `mouseover` event object.
   * @param {CellCoords} coords Hovered cell's visual coordinate object.
   * @param {HTMLTableCellElement} TD Cell's TD (or TH) element.
   */
  "afterOnCellMouseOver",
  /**
   * Fired after leaving a cell or row/column header with the mouse cursor.
   *
   * @event Hooks#afterOnCellMouseOut
   * @param {Event} event `mouseout` event object.
   * @param {CellCoords} coords Leaved cell's visual coordinate object.
   * @param {HTMLTableCellElement} TD Cell's TD (or TH) element.
   */
  "afterOnCellMouseOut",
  /**
   * Fired after one or more columns are removed.
   *
   * @event Hooks#afterRemoveCol
   * @param {number} index Visual index of starter column.
   * @param {number} amount An amount of removed columns.
   * @param {number[]} physicalColumns An array of physical columns removed from the data source.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   */
  "afterRemoveCol",
  /**
   * Fired after one or more rows are removed.
   *
   * @event Hooks#afterRemoveRow
   * @param {number} index Visual index of starter row.
   * @param {number} amount An amount of removed rows.
   * @param {number[]} physicalRows An array of physical rows removed from the data source.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   */
  "afterRemoveRow",
  /**
   * Fired before starting rendering the cell.
   *
   * @event Hooks#beforeRenderer
   * @param {HTMLTableCellElement} TD Currently rendered cell's TD element.
   * @param {number} row Visual row index.
   * @param {number} column Visual column index.
   * @param {string|number} prop Column property name or a column index, if datasource is an array of arrays.
   * @param {*} value Value of the rendered cell.
   * @param {object} cellProperties Object containing the cell's properties.
   */
  "beforeRenderer",
  /**
   * Fired after finishing rendering the cell (after the renderer finishes).
   *
   * @event Hooks#afterRenderer
   * @param {HTMLTableCellElement} TD Currently rendered cell's TD element.
   * @param {number} row Visual row index.
   * @param {number} column Visual column index.
   * @param {string|number} prop Column property name or a column index, if datasource is an array of arrays.
   * @param {*} value Value of the rendered cell.
   * @param {object} cellProperties Object containing the cell's properties.
   */
  "afterRenderer",
  /**
   * Fired after the order of rows has changed.
   * This hook is fired by changing row indexes of any type supported by the {@link IndexMapper}.
   *
   * @event Hooks#afterRowSequenceChange
   * @param {'init'|'remove'|'insert'|'move'|'update'} [source] A string that indicates what caused the change to the order of rows.
   */
  "afterRowSequenceChange",
  /**
   * Fired before the vertical viewport scroll. Triggered by the [`scrollViewportTo()`](@/api/core.md#scrollviewportto)
   * method or table internals.
   *
   * @since 14.0.0
   * @event Hooks#beforeViewportScrollVertically
   * @param {number} visualRow Visual row index.
   * @returns {number | boolean} Returns modified row index (or the same as passed in the method argument) to which
   * the viewport will be scrolled. If the returned value is `false`, the scrolling will be canceled.
   */
  "beforeViewportScrollVertically",
  /**
   * Fired before the horizontal viewport scroll. Triggered by the [`scrollViewportTo()`](@/api/core.md#scrollviewportto)
   * method or table internals.
   *
   * @since 14.0.0
   * @event Hooks#beforeViewportScrollHorizontally
   * @param {number} visualColumn Visual column index.
   * @returns {number | boolean} Returns modified column index (or the same as passed in the method argument) to which
   * the viewport will be scrolled. If the returned value is `false`, the scrolling will be canceled.
   */
  "beforeViewportScrollHorizontally",
  /**
   * Fired before the vertical or horizontal viewport scroll. Triggered by the [`scrollViewportTo()`](@/api/core.md#scrollviewportto)
   * method or table internals.
   *
   * @since 14.0.0
   * @event Hooks#beforeViewportScroll
   */
  "beforeViewportScroll",
  /**
   * Fired after the horizontal scroll event.
   *
   * @event Hooks#afterScrollHorizontally
   */
  "afterScrollHorizontally",
  /**
   * Fired after the vertical scroll event.
   *
   * @event Hooks#afterScrollVertically
   */
  "afterScrollVertically",
  /**
   * Fired after the vertical or horizontal scroll event.
   *
   * @since 14.0.0
   * @event Hooks#afterScroll
   */
  "afterScroll",
  /**
   * Fired after one or more cells are selected (e.g. during mouse move).
   *
   * @event Hooks#afterSelection
   * @param {number} row Selection start visual row index.
   * @param {number} column Selection start visual column index.
   * @param {number} row2 Selection end visual row index.
   * @param {number} column2 Selection end visual column index.
   * @param {object} preventScrolling A reference to the observable object with the `value` property.
   *                                  Property `preventScrolling.value` expects a boolean value that
   *                                  Handsontable uses to control scroll behavior after selection.
   * @param {object} preventScrolling Object with `value` property where its value change will be observed.
   * @param {number} selectionLayerLevel The number which indicates what selection layer is currently modified.
   * @example
   * ::: only-for javascript
   * ```js
   * new Handsontable(element, {
   *   afterSelection: (row, column, row2, column2, preventScrolling, selectionLayerLevel) => {
   *     // If set to `false` (default): when cell selection is outside the viewport,
   *     // Handsontable scrolls the viewport to cell selection's end corner.
   *     // If set to `true`: when cell selection is outside the viewport,
   *     // Handsontable doesn't scroll to cell selection's end corner.
   *     preventScrolling.value = true;
   *   }
   * })
   * ```
   * :::
   *
   * ::: only-for react
   * ```jsx
   * <HotTable
   *   afterSelection={(row, column, row2, column2, preventScrolling, selectionLayerLevel) => {
   *     // If set to `false` (default): when cell selection is outside the viewport,
   *     // Handsontable scrolls the viewport to cell selection's end corner.
   *     // If set to `true`: when cell selection is outside the viewport,
   *     // Handsontable doesn't scroll to cell selection's end corner.
   *     preventScrolling.value = true;
   *   }}
   * />
   * ```
   * :::
   */
  "afterSelection",
  /**
   * Fired after one or more cells are selected.
   *
   * The `prop` and `prop2` arguments represent the source object property name instead of the column number.
   *
   * @event Hooks#afterSelectionByProp
   * @param {number} row Selection start visual row index.
   * @param {string} prop Selection start data source object property name.
   * @param {number} row2 Selection end visual row index.
   * @param {string} prop2 Selection end data source object property name.
   * @param {object} preventScrolling A reference to the observable object with the `value` property.
   *                                  Property `preventScrolling.value` expects a boolean value that
   *                                  Handsontable uses to control scroll behavior after selection.
   * @param {number} selectionLayerLevel The number which indicates what selection layer is currently modified.
   * @example
   * ```js
   * ::: only-for javascript
   * new Handsontable(element, {
   *   afterSelectionByProp: (row, column, row2, column2, preventScrolling, selectionLayerLevel) => {
   *     // setting if prevent scrolling after selection
   *     preventScrolling.value = true;
   *   }
   * })
   * ```
   * :::
   *
   * ::: only-for react
   * ```jsx
   * <HotTable
   *   afterSelectionByProp={(row, column, row2, column2, preventScrolling, selectionLayerLevel) => {
   *     // setting if prevent scrolling after selection
   *     preventScrolling.value = true;
   *   }}
   * />
   * ```
   * :::
   */
  "afterSelectionByProp",
  /**
   * Fired after one or more cells are selected (e.g. on mouse up).
   *
   * @event Hooks#afterSelectionEnd
   * @param {number} row Selection start visual row index.
   * @param {number} column Selection start visual column index.
   * @param {number} row2 Selection end visual row index.
   * @param {number} column2 Selection end visual column index.
   * @param {number} selectionLayerLevel The number which indicates what selection layer is currently modified.
   */
  "afterSelectionEnd",
  /**
   * Fired after one or more cells are selected (e.g. on mouse up).
   *
   * The `prop` and `prop2` arguments represent the source object property name instead of the column number.
   *
   * @event Hooks#afterSelectionEndByProp
   * @param {number} row Selection start visual row index.
   * @param {string} prop Selection start data source object property index.
   * @param {number} row2 Selection end visual row index.
   * @param {string} prop2 Selection end data source object property index.
   * @param {number} selectionLayerLevel The number which indicates what selection layer is currently modified.
   */
  "afterSelectionEndByProp",
  /**
   * Fired after the focus position within a selected range is changed.
   *
   * @since 14.3.0
   * @event Hooks#afterSelectionFocusSet
   * @param {number} row The focus visual row index position.
   * @param {number} column The focus visual column index position.
   * @param {object} preventScrolling A reference to the observable object with the `value` property.
   *                                  Property `preventScrolling.value` expects a boolean value that
   *                                  Handsontable uses to control scroll behavior after selection.
   * @example
   * ```js
   * ::: only-for javascript
   * new Handsontable(element, {
   *   afterSelectionFocusSet: (row, column, preventScrolling) => {
   *     // If set to `false` (default): when focused cell selection is outside the viewport,
   *     // Handsontable scrolls the viewport to that cell.
   *     // If set to `true`: when focused cell selection is outside the viewport,
   *     // Handsontable doesn't scroll the viewport.
   *     preventScrolling.value = true;
   *   }
   * })
   * ```
   * :::
   *
   * ::: only-for react
   * ```jsx
   * <HotTable
   *   afterSelectionFocusSet={(row, column, preventScrolling) => {
   *     // If set to `false` (default): when focused cell selection is outside the viewport,
   *     // Handsontable scrolls the viewport to that cell.
   *     // If set to `true`: when focused cell selection is outside the viewport,
   *     // Handsontable doesn't scroll the viewport.
   *     preventScrolling.value = true;
   *   }}
   * />
   * ```
   * :::
   */
  "afterSelectionFocusSet",
  /**
   * Fired before one or more columns are selected (e.g. During mouse header click or {@link Core#selectColumns} API call).
   *
   * @since 14.0.0
   * @event Hooks#beforeSelectColumns
   * @param {CellCoords} from Selection start coords object.
   * @param {CellCoords} to Selection end coords object.
   * @param {CellCoords} highlight Selection cell focus coords object.
   * @example
   * ::: only-for javascript
   * ```js
   * new Handsontable(element, {
   *   beforeSelectColumns: (from, to, highlight) => {
   *     // Extend the column selection by one column left and one column right.
   *     from.col = Math.max(from.col - 1, 0);
   *     to.col = Math.min(to.col + 1, this.countCols() - 1);
   *   }
   * })
   * ```
   * :::
   *
   * ::: only-for react
   * ```jsx
   * <HotTable
   *   beforeSelectColumns={(from, to, highlight) => {
   *     // Extend the column selection by one column left and one column right.
   *     from.col = Math.max(from.col - 1, 0);
   *     to.col = Math.min(to.col + 1, this.countCols() - 1);
   *   }}
   * />
   * ```
   * :::
   */
  "beforeSelectColumns",
  /**
   * Fired after one or more columns are selected (e.g. during mouse header click or {@link Core#selectColumns} API call).
   *
   * @since 14.0.0
   * @event Hooks#afterSelectColumns
   * @param {CellCoords} from Selection start coords object.
   * @param {CellCoords} to Selection end coords object.
   * @param {CellCoords} highlight Selection cell focus coords object.
   */
  "afterSelectColumns",
  /**
   * Fired before one or more rows are selected (e.g. during mouse header click or {@link Core#selectRows} API call).
   *
   * @since 14.0.0
   * @event Hooks#beforeSelectRows
   * @param {CellCoords} from Selection start coords object.
   * @param {CellCoords} to Selection end coords object.
   * @param {CellCoords} highlight Selection cell focus coords object.
   * @example
   * ::: only-for javascript
   * ```js
   * new Handsontable(element, {
   *   beforeSelectRows: (from, to, highlight) => {
   *     // Extend the row selection by one row up and one row bottom more.
   *     from.row = Math.max(from.row - 1, 0);
   *     to.row = Math.min(to.row + 1, this.countRows() - 1);
   *   }
   * })
   * ```
   * :::
   *
   * ::: only-for react
   * ```jsx
   * <HotTable
   *   beforeSelectRows={(from, to, highlight) => {
   *     // Extend the row selection by one row up and one row bottom more.
   *     from.row = Math.max(from.row - 1, 0);
   *     to.row = Math.min(to.row + 1, this.countRows() - 1);
   *   }}
   * />
   * ```
   * :::
   */
  "beforeSelectRows",
  /**
   * Fired after one or more rows are selected (e.g. during mouse header click or {@link Core#selectRows} API call).
   *
   * @since 14.0.0
   * @event Hooks#afterSelectRows
   * @param {CellCoords} from Selection start coords object.
   * @param {CellCoords} to Selection end coords object.
   * @param {CellCoords} highlight Selection cell focus coords object.
   */
  "afterSelectRows",
  /**
   * Fired after cell meta is changed.
   *
   * @event Hooks#afterSetCellMeta
   * @param {number} row Visual row index.
   * @param {number} column Visual column index.
   * @param {string} key The updated meta key.
   * @param {*} value The updated meta value.
   */
  "afterSetCellMeta",
  /**
   * Fired after cell meta is removed.
   *
   * @event Hooks#afterRemoveCellMeta
   * @param {number} row Visual row index.
   * @param {number} column Visual column index.
   * @param {string} key The removed meta key.
   * @param {*} value Value which was under removed key of cell meta.
   */
  "afterRemoveCellMeta",
  /**
   * Fired after cell data was changed.
   *
   * @event Hooks#afterSetDataAtCell
   * @param {Array} changes An array of changes in format `[[row, column, oldValue, value], ...]`.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   */
  "afterSetDataAtCell",
  /**
   * Fired after cell data was changed.
   * Called only when [`setDataAtRowProp`](@/api/core.md#setdataatrowprop) was executed.
   *
   * @event Hooks#afterSetDataAtRowProp
   * @param {Array} changes An array of changes in format `[[row, prop, oldValue, value], ...]`.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   */
  "afterSetDataAtRowProp",
  /**
   * Fired after cell source data was changed.
   *
   * @event Hooks#afterSetSourceDataAtCell
   * @since 8.0.0
   * @param {Array} changes An array of changes in format `[[row, column, oldValue, value], ...]`.
   * @param {string} [source] String that identifies source of hook call.
   */
  "afterSetSourceDataAtCell",
  /**
   * Fired after calling the [`updateSettings`](@/api/core.md#updatesettings) method.
   *
   * @event Hooks#afterUpdateSettings
   * @param {object} newSettings New settings object.
   */
  "afterUpdateSettings",
  /**
   * @description
   * A plugin hook executed after validator function, only if validator function is defined.
   * Validation result is the first parameter. This can be used to determinate if validation passed successfully or not.
   *
   * __Returning false from the callback will mark the cell as invalid__.
   *
   * @event Hooks#afterValidate
   * @param {boolean} isValid `true` if valid, `false` if not.
   * @param {*} value The value in question.
   * @param {number} row Visual row index.
   * @param {string|number} prop Property name / visual column index.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   * @returns {undefined | boolean} If `false` the cell will be marked as invalid, `true` otherwise.
   */
  "afterValidate",
  /**
   * Fired before successful change of language (when proper language code was set).
   *
   * @event Hooks#beforeLanguageChange
   * @since 0.35.0
   * @param {string} languageCode New language code.
   */
  "beforeLanguageChange",
  /**
   * Fired after successful change of language (when proper language code was set).
   *
   * @event Hooks#afterLanguageChange
   * @since 0.35.0
   * @param {string} languageCode New language code.
   */
  "afterLanguageChange",
  /**
   * Fired by {@link Autofill} plugin before populating the data in the autofill feature. This hook is fired when
   * {@link Options#fillHandle} option is enabled.
   *
   * @event Hooks#beforeAutofill
   * @param {Array[]} selectionData Data the autofill operation will start from.
   * @param {CellRange} sourceRange The range values will be filled from.
   * @param {CellRange} targetRange The range new values will be filled into.
   * @param {string} direction Declares the direction of the autofill. Possible values: `up`, `down`, `left`, `right`.
   *
   * @returns {boolean|Array[]} If false, the operation is cancelled. If array of arrays, the returned data
   *                              will be passed into [`populateFromArray`](@/api/core.md#populatefromarray) instead of the default autofill
   *                              algorithm's result.
   */
  "beforeAutofill",
  /**
   * Fired by {@link Autofill} plugin after populating the data in the autofill feature. This hook is fired when
   * {@link Options#fillHandle} option is enabled.
   *
   * @event Hooks#afterAutofill
   * @since 8.0.0
   * @param {Array[]} fillData The data that was used to fill the `targetRange`. If `beforeAutofill` was used
   *                            and returned `[[]]`, this will be the same object that was returned from `beforeAutofill`.
   * @param {CellRange} sourceRange The range values will be filled from.
   * @param {CellRange} targetRange The range new values will be filled into.
   * @param {string} direction Declares the direction of the autofill. Possible values: `up`, `down`, `left`, `right`.
   */
  "afterAutofill",
  /**
   * Fired before aligning the cell contents.
   *
   * @event Hooks#beforeCellAlignment
   * @param {object} stateBefore An object with class names defining the cell alignment.
   * @param {CellRange[]} range An array of `CellRange` coordinates where the alignment will be applied.
   * @param {string} type Type of the alignment - either `horizontal` or `vertical`.
   * @param {string} alignmentClass String defining the alignment class added to the cell.
   * Possible values: `htLeft` , `htCenter`, `htRight`, `htJustify`, `htTop`, `htMiddle`, `htBottom`.
   */
  "beforeCellAlignment",
  /**
   * Fired before one or more cells are changed.
   *
   * Use this hook to silently alter the user's changes before Handsontable re-renders.
   *
   * To ignore the user's changes, use a nullified array or return `false`.
   *
   * @event Hooks#beforeChange
   * @param {Array[]} changes 2D array containing information about each of the edited cells `[[row, prop, oldVal, newVal], ...]`. `row` is a visual row index.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   * @returns {undefined | boolean} If `false` all changes were cancelled, `true` otherwise.
   * @example
   * ::: only-for javascript
   * ```js
   * // to alter a single change, overwrite the value with `changes[i][3]`
   * new Handsontable(element, {
   *   beforeChange: (changes, source) => {
   *     // [[row, prop, oldVal, newVal], ...]
   *     changes[0][3] = 10;
   *   }
   * });
   *
   * // to ignore a single change, set `changes[i]` to `null`
   * // or remove `changes[i]` from the array, by using `changes.splice(i, 1)`
   * new Handsontable(element, {
   *   beforeChange: (changes, source) => {
   *     // [[row, prop, oldVal, newVal], ...]
   *     changes[0] = null;
   *   }
   * });
   *
   * // to ignore all changes, return `false`
   * // or set the array's length to 0, by using `changes.length = 0`
   * new Handsontable(element, {
   *   beforeChange: (changes, source) => {
   *     // [[row, prop, oldVal, newVal], ...]
   *     return false;
   *   }
   * });
   * ```
   * :::
   *
   * ::: only-for react
   * ```jsx
   * // to alter a single change, overwrite the desired value with `changes[i][3]`
   * <HotTable
   *   beforeChange={(changes, source) => {
   *     // [[row, prop, oldVal, newVal], ...]
   *     changes[0][3] = 10;
   *   }}
   * />
   *
   * // to ignore a single change, set `changes[i]` to `null`
   * // or remove `changes[i]` from the array, by using changes.splice(i, 1).
   * <HotTable
   *   beforeChange={(changes, source) => {
   *     // [[row, prop, oldVal, newVal], ...]
   *     changes[0] = null;
   *   }}
   * />
   *
   * // to ignore all changes, return `false`
   * // or set the array's length to 0 (`changes.length = 0`)
   * <HotTable
   *   beforeChange={(changes, source) => {
   *     // [[row, prop, oldVal, newVal], ...]
   *     return false;
   *   }}
   * />
   * ```
   * :::
   */
  "beforeChange",
  /**
   * Fired right before rendering the changes.
   *
   * @event Hooks#beforeChangeRender
   * @param {Array[]} changes Array in form of `[row, prop, oldValue, newValue]`.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   */
  "beforeChangeRender",
  /**
   * Fired before drawing the borders.
   *
   * @event Hooks#beforeDrawBorders
   * @param {Array} corners Array specifying the current selection borders.
   * @param {string} borderClassName Specifies the border class name.
   */
  "beforeDrawBorders",
  /**
   * Fired before getting cell settings.
   *
   * @event Hooks#beforeGetCellMeta
   * @param {number} row Visual row index.
   * @param {number} column Visual column index.
   * @param {object} cellProperties Object containing the cell's properties.
   */
  "beforeGetCellMeta",
  /**
   * Fired before cell meta is removed.
   *
   * @event Hooks#beforeRemoveCellMeta
   * @param {number} row Visual row index.
   * @param {number} column Visual column index.
   * @param {string} key The removed meta key.
   * @param {*} value Value which is under removed key of cell meta.
   * @returns {*|boolean} If false is returned the action is canceled.
   */
  "beforeRemoveCellMeta",
  /**
   * Fired before the Handsontable instance is initiated.
   *
   * @event Hooks#beforeInit
   */
  "beforeInit",
  /**
   * Fired before the Walkontable instance is initiated.
   *
   * @event Hooks#beforeInitWalkontable
   * @param {object} walkontableConfig Walkontable configuration object.
   */
  "beforeInitWalkontable",
  /**
   * Fired before Handsontable's [`data`](@/api/options.md#data)
   * gets modified by the [`loadData()`](@/api/core.md#loaddata) method
   * or the [`updateSettings()`](@/api/core.md#updatesettings) method.
   *
   * Read more:
   * - [Binding to data](@/guides/getting-started/binding-to-data/binding-to-data.md)
   * - [Saving data](@/guides/getting-started/saving-data/saving-data.md)
   *
   * @event Hooks#beforeLoadData
   * @since 8.0.0
   * @param {Array} sourceData An [array of arrays](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays), or an [array of objects](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects), that contains Handsontable's data
   * @param {boolean} initialLoad A flag that indicates whether the data was loaded at Handsontable's initialization (`true`) or later (`false`)
   * @param {string} source The source of the call
   * @returns {Array} The returned array will be used as Handsontable's new dataset.
   */
  "beforeLoadData",
  /**
   * Fired before the [`updateData()`](@/api/core.md#updatedata) method
   * modifies Handsontable's [`data`](@/api/options.md#data).
   *
   * Read more:
   * - [Binding to data](@/guides/getting-started/binding-to-data/binding-to-data.md)
   * - [Saving data](@/guides/getting-started/saving-data/saving-data.md)
   *
   * @event Hooks#beforeUpdateData
   * @since 11.1.0
   * @param {Array} sourceData An [array of arrays](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays), or an [array of objects](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects), that contains Handsontable's data
   * @param {boolean} initialLoad A flag that indicates whether the data was loaded at Handsontable's initialization (`true`) or later (`false`)
   * @param {string} source The source of the call
   * @returns {Array} The returned array will be used as Handsontable's new dataset.
   */
  "beforeUpdateData",
  /**
   * Hook fired before `keydown` event is handled. It can be used to stop default key bindings.
   *
   * __Note__: To prevent default behavior you need to call `false` in your `beforeKeyDown` handler.
   *
   * @event Hooks#beforeKeyDown
   * @param {Event} event Original DOM event.
   */
  "beforeKeyDown",
  /**
   * Fired after the user clicked a cell, but before all the calculations related with it.
   *
   * @event Hooks#beforeOnCellMouseDown
   * @param {Event} event The `mousedown` event object.
   * @param {CellCoords} coords Cell coords object containing the visual coordinates of the clicked cell.
   * @param {HTMLTableCellElement} TD TD element.
   * @param {object} controller An object with properties `row`, `column` and `cell`. Each property contains
   *                            a boolean value that allows or disallows changing the selection for that particular area.
   */
  "beforeOnCellMouseDown",
  /**
   * Fired after the user clicked a cell.
   *
   * @event Hooks#beforeOnCellMouseUp
   * @param {Event} event The `mouseup` event object.
   * @param {CellCoords} coords Cell coords object containing the visual coordinates of the clicked cell.
   * @param {HTMLTableCellElement} TD TD element.
   */
  "beforeOnCellMouseUp",
  /**
   * Fired after the user clicked a cell, but before all the calculations related with it.
   *
   * @event Hooks#beforeOnCellContextMenu
   * @since 4.1.0
   * @param {Event} event The `contextmenu` event object.
   * @param {CellCoords} coords Cell coords object containing the visual coordinates of the clicked cell.
   * @param {HTMLTableCellElement} TD TD element.
   */
  "beforeOnCellContextMenu",
  /**
   * Fired after the user moved cursor over a cell, but before all the calculations related with it.
   *
   * @event Hooks#beforeOnCellMouseOver
   * @param {Event} event The `mouseover` event object.
   * @param {CellCoords} coords CellCoords object containing the visual coordinates of the clicked cell.
   * @param {HTMLTableCellElement} TD TD element.
   * @param {object} controller An object with properties `row`, `column` and `cell`. Each property contains
   *                            a boolean value that allows or disallows changing the selection for that particular area.
   */
  "beforeOnCellMouseOver",
  /**
   * Fired after the user moved cursor out from a cell, but before all the calculations related with it.
   *
   * @event Hooks#beforeOnCellMouseOut
   * @param {Event} event The `mouseout` event object.
   * @param {CellCoords} coords CellCoords object containing the visual coordinates of the leaved cell.
   * @param {HTMLTableCellElement} TD TD element.
   */
  "beforeOnCellMouseOut",
  /**
   * Fired before one or more columns are about to be removed.
   *
   * @event Hooks#beforeRemoveCol
   * @param {number} index Visual index of starter column.
   * @param {number} amount Amount of columns to be removed.
   * @param {number[]} physicalColumns An array of physical columns removed from the data source.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   * @returns {*|boolean} If false is returned the action is canceled.
   */
  "beforeRemoveCol",
  /**
   * Fired when one or more rows are about to be removed.
   *
   * @event Hooks#beforeRemoveRow
   * @param {number} index Visual index of starter row.
   * @param {number} amount Amount of rows to be removed.
   * @param {number[]} physicalRows An array of physical rows removed from the data source.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   * @returns {*|boolean} If false is returned the action is canceled.
   */
  "beforeRemoveRow",
  /**
   * Fired before Handsontable's view-rendering engine is rendered.
   *
   * __Note:__ In Handsontable 9.x and earlier, the `beforeViewRender` hook was named `beforeRender`.
   *
   * @event Hooks#beforeViewRender
   * @since 10.0.0
   * @param {boolean} isForced If set to `true`, the rendering gets triggered by a change of settings, a change of
   *                           data, or a logic that needs a full Handsontable render cycle.
   *                           If set to `false`, the rendering gets triggered by scrolling or moving the selection.
   * @param {object} skipRender Object with `skipRender` property, if it is set to `true ` the next rendering cycle will be skipped.
   */
  "beforeViewRender",
  /**
   * Fired after Handsontable's view-rendering engine is rendered,
   * but before redrawing the selection borders and before scroll syncing.
   *
   * __Note:__ In Handsontable 9.x and earlier, the `afterViewRender` hook was named `afterRender`.
   *
   * @event Hooks#afterViewRender
   * @since 10.0.0
   * @param {boolean} isForced If set to `true`, the rendering gets triggered by a change of settings, a change of
   *                           data, or a logic that needs a full Handsontable render cycle.
   *                           If set to `false`, the rendering gets triggered by scrolling or moving the selection.
   */
  "afterViewRender",
  /**
   * Fired before Handsontable's view-rendering engine updates the view.
   *
   * The `beforeRender` event is fired right after the Handsontable
   * business logic is executed and right before the rendering engine starts calling
   * the Core logic, renderers, cell meta objects etc. to update the view.
   *
   * @event Hooks#beforeRender
   * @param {boolean} isForced If set to `true`, the rendering gets triggered by a change of settings, a change of
   *                           data, or a logic that needs a full Handsontable render cycle.
   *                           If set to `false`, the rendering gets triggered by scrolling or moving the selection.
   */
  "beforeRender",
  /**
   * Fired after Handsontable's view-rendering engine updates the view.
   *
   * @event Hooks#afterRender
   * @param {boolean} isForced If set to `true`, the rendering gets triggered by a change of settings, a change of
   *                           data, or a logic that needs a full Handsontable render cycle.
   *                           If set to `false`, the rendering gets triggered by scrolling or moving the selection.
   */
  "afterRender",
  /**
   * When the focus position is moved to the next or previous row caused by the {@link Options#autoWrapRow} option
   * the hook is triggered.
   *
   * @since 14.0.0
   * @event Hooks#beforeRowWrap
   * @param {boolean} isWrapEnabled Tells whether the row wrapping is going to happen.
   * There may be situations where the option does not work even though it is enabled.
   * This is due to the priority of other options that may block the feature.
   * For example, when the {@link Options#minSpareCols} is defined, the {@link Options#autoWrapRow} option is not checked.
   * Thus, row wrapping is off.
   * @param {CellCoords} newCoords The new focus position. It is an object with keys `row` and `col`, where a value of `-1` indicates a header.
   * @param {boolean} isFlipped `true` if the row index was flipped, `false` otherwise.
   * Flipped index means that the user reached the last row and the focus is moved to the first row or vice versa.
   */
  "beforeRowWrap",
  /**
   * When the focus position is moved to the next or previous column caused by the {@link Options#autoWrapCol} option
   * the hook is triggered.
   *
   * @since 14.0.0
   * @event Hooks#beforeColumnWrap
   * @param {boolean} isWrapEnabled Tells whether the column wrapping is going to happen.
   * There may be situations where the option does not work even though it is enabled.
   * This is due to the priority of other options that may block the feature.
   * For example, when the {@link Options#minSpareRows} is defined, the {@link Options#autoWrapCol} option is not checked.
   * Thus, column wrapping is off.
   * @param {CellCoords} newCoords The new focus position. It is an object with keys `row` and `col`, where a value of `-1` indicates a header.
   * @param {boolean} isFlipped `true` if the column index was flipped, `false` otherwise.
   * Flipped index means that the user reached the last column and the focus is moved to the first column or vice versa.
   */
  "beforeColumnWrap",
  /**
   * Fired before cell meta is changed.
   *
   * @event Hooks#beforeSetCellMeta
   * @since 8.0.0
   * @param {number} row Visual row index.
   * @param {number} column Visual column index.
   * @param {string} key The updated meta key.
   * @param {*} value The updated meta value.
   * @returns {boolean|undefined} If false is returned the action is canceled.
   */
  "beforeSetCellMeta",
  /**
   * Fired before setting focus selection.
   *
   * @since 14.3.0
   * @event Hooks#beforeSelectionFocusSet
   * @param {CellCoords} coords CellCoords instance.
   */
  "beforeSelectionFocusSet",
  /**
   * Fired before setting range is started but not finished yet.
   *
   * @event Hooks#beforeSetRangeStartOnly
   * @param {CellCoords} coords `CellCoords` instance.
   */
  "beforeSetRangeStartOnly",
  /**
   * Fired before setting range is started.
   *
   * @event Hooks#beforeSetRangeStart
   * @param {CellCoords} coords `CellCoords` instance.
   */
  "beforeSetRangeStart",
  /**
   * Fired before setting range is ended.
   *
   * @event Hooks#beforeSetRangeEnd
   * @param {CellCoords} coords `CellCoords` instance.
   */
  "beforeSetRangeEnd",
  /**
   * Fired before applying selection coordinates to the renderable coordinates for Walkontable (rendering engine).
   * It occurs even when cell coordinates remain unchanged and activates during cell selection and drag selection.
   * The behavior of Shift+Tab differs from Arrow Left when there's no further movement possible.
   *
   * @since 14.0.0
   * @event Hooks#beforeSelectionHighlightSet
   */
  "beforeSelectionHighlightSet",
  /**
   * Fired before the logic of handling a touch scroll, when user started scrolling on a touch-enabled device.
   *
   * @event Hooks#beforeTouchScroll
   */
  "beforeTouchScroll",
  /**
   * Fired before cell validation, only if validator function is defined. This can be used to manipulate the value
   * of changed cell before it is applied to the validator function.
   *
   * __Note:__ this will not affect values of changes. This will change value *ONLY* for validation.
   *
   * @event Hooks#beforeValidate
   * @param {*} value Value of the cell.
   * @param {number} row Visual row index.
   * @param {string|number} prop Property name / column index.
   * @param {string} [source] String that identifies source of hook call
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   */
  "beforeValidate",
  /**
   * Fired before cell value is rendered into the DOM (through renderer function). This can be used to manipulate the
   * value which is passed to the renderer without modifying the renderer itself.
   *
   * @event Hooks#beforeValueRender
   * @param {*} value Cell value to render.
   * @param {object} cellProperties An object containing the cell properties.
   */
  "beforeValueRender",
  /**
   * Fired after Handsontable instance is constructed (using `new` operator).
   *
   * @event Hooks#construct
   */
  "construct",
  /**
   * Fired after Handsontable instance is initiated but before table is rendered.
   *
   * @event Hooks#init
   */
  "init",
  /**
   * Fired when a column header index is about to be modified by a callback function.
   *
   * @event Hooks#modifyColHeader
   * @param {number} column Visual column header index.
   */
  "modifyColHeader",
  /**
   * Fired when a column width is about to be modified by a callback function.
   *
   * @event Hooks#modifyColWidth
   * @param {number} width Current column width.
   * @param {number} column Visual column index.
   */
  "modifyColWidth",
  /**
   * Fired when rendering the list of values in the multiple-selection component of the Filters dropdown.
   * The hook allows modifying the displayed values in that component.
   *
   * @since 14.2.0
   * @event Hooks#modifyFiltersMultiSelectValue
   * @param {object} item The item in the list of values.
   * @param {object} meta The cell properties object.
   */
  "modifyFiltersMultiSelectValue",
  /**
   * Fired when focusing a cell or a header element. Allows replacing the element to be focused by returning a
   * different HTML element.
   *
   * @since 14.0.0
   * @event Hooks#modifyFocusedElement
   * @param {number} row Row index.
   * @param {number} column Column index.
   * @param {HTMLElement|undefined} focusedElement The element to be focused. `null` for focusedElement is intended when focused cell is hidden.
   */
  "modifyFocusedElement",
  /**
   * Fired when a row header index is about to be modified by a callback function.
   *
   * @event Hooks#modifyRowHeader
   * @param {number} row Visual row header index.
   */
  "modifyRowHeader",
  /**
   * Fired when a row height is about to be modified by a callback function.
   *
   * @event Hooks#modifyRowHeight
   * @param {number} height Row height.
   * @param {number} row Visual row index.
   */
  "modifyRowHeight",
  /**
   * Fired when a data was retrieved or modified.
   *
   * @event Hooks#modifyData
   * @param {number} row Physical row index.
   * @param {number} column Visual column index.
   * @param {object} valueHolder Object which contains original value which can be modified by overwriting `.value` property.
   * @param {string} ioMode String which indicates for what operation hook is fired (`get` or `set`).
   */
  "modifyData",
  /**
   * Fired when a data was retrieved or modified from the source data set.
   *
   * @event Hooks#modifySourceData
   * @since 8.0.0
   * @param {number} row Physical row index.
   * @param {number} column Physical column index or property name.
   * @param {object} valueHolder Object which contains original value which can be modified by overwriting `.value` property.
   * @param {string} ioMode String which indicates for what operation hook is fired (`get` or `set`).
   */
  "modifySourceData",
  /**
   * Fired when a data was retrieved or modified.
   *
   * @event Hooks#modifyRowData
   * @param {number} row Physical row index.
   */
  "modifyRowData",
  /**
   * Used to modify the cell coordinates when using the [`getCell`](@/api/core.md#getcell) method, opening editor, getting value from the editor
   * and saving values from the closed editor.
   *
   * @event Hooks#modifyGetCellCoords
   * @since 0.36.0
   * @param {number} row Visual row index.
   * @param {number} column Visual column index.
   * @param {boolean} topmost If set to `true`, it returns the TD element from the topmost overlay. For example,
   *                          if the wanted cell is in the range of fixed rows, it will return a TD element
   *                          from the `top` overlay.
   * @returns {undefined|number[]}
   */
  "modifyGetCellCoords",
  /**
   * Used to modify the cell coordinates when the table is activated (going into the listen mode).
   *
   * @event Hooks#modifyFocusOnTabNavigation
   * @since 14.0.0
   * @param {'from_above' | 'from_below'} tabActivationDir The browsers Tab navigation direction. Depending on
   * whether the user activated the table from the element above or below, another cell can be selected.
   * @param {CellCoords} visualCoords The coords that will be used to select a cell.
   */
  "modifyFocusOnTabNavigation",
  /**
   * Allows modify the visual row index that is used to retrieve the row header element (TH) before it's
   * highlighted (proper CSS class names are added). Modifying the visual row index allows building a custom
   * implementation of the nested headers feature or other features that require highlighting other DOM
   * elements than that the rendering engine, by default, would have highlighted.
   *
   * @event Hooks#beforeHighlightingRowHeader
   * @since 8.4.0
   * @param {number} row Visual row index.
   * @param {number} headerLevel Column header level (0 = most distant to the table).
   * @param {object} highlightMeta An object that contains additional information about processed selection.
   * @returns {number|undefined}
   */
  "beforeHighlightingRowHeader",
  /**
   * Allows modify the visual column index that is used to retrieve the column header element (TH) before it's
   * highlighted (proper CSS class names are added). Modifying the visual column index allows building a custom
   * implementation of the nested headers feature or other features that require highlighting other DOM
   * elements than that the rendering engine, by default, would have highlighted.
   *
   * @event Hooks#beforeHighlightingColumnHeader
   * @since 8.4.0
   * @param {number} column Visual column index.
   * @param {number} headerLevel Row header level (0 = most distant to the table).
   * @param {object} highlightMeta An object that contains additional information about processed selection.
   * @returns {number|undefined}
   */
  "beforeHighlightingColumnHeader",
  /**
   * Fired by {@link PersistentState} plugin, after loading value, saved under given key, from browser local storage.
   *
   * The `persistentStateLoad` hook is fired even when the {@link Options#persistentState} option is disabled.
   *
   * @event Hooks#persistentStateLoad
   * @param {string} key Key.
   * @param {object} valuePlaceholder Object containing the loaded value under `valuePlaceholder.value` (if no value have been saved, `value` key will be undefined).
   */
  "persistentStateLoad",
  /**
   * Fired by {@link PersistentState} plugin after resetting data from local storage. If no key is given, all values associated with table will be cleared.
   * This hook is fired when {@link Options#persistentState} option is enabled.
   *
   * @event Hooks#persistentStateReset
   * @param {string} [key] Key.
   */
  "persistentStateReset",
  /**
   * Fired by {@link PersistentState} plugin, after saving value under given key in browser local storage.
   *
   * The `persistentStateSave` hook is fired even when the {@link Options#persistentState} option is disabled.
   *
   * @event Hooks#persistentStateSave
   * @param {string} key Key.
   * @param {Mixed} value Value to save.
   */
  "persistentStateSave",
  /**
   * Fired by {@link ColumnSorting} and {@link MultiColumnSorting} plugins before sorting the column. If you return `false` value inside callback for hook, then sorting
   * will be not applied by the Handsontable (useful for server-side sorting).
   *
   * This hook is fired when {@link Options#columnSorting} or {@link Options#multiColumnSorting} option is enabled.
   *
   * @event Hooks#beforeColumnSort
   * @param {Array} currentSortConfig Current sort configuration (for all sorted columns).
   * @param {Array} destinationSortConfigs Destination sort configuration (for all sorted columns).
   * @returns {boolean | undefined} If `false` the column will not be sorted, `true` otherwise.
   */
  "beforeColumnSort",
  /**
   * Fired by {@link ColumnSorting} and {@link MultiColumnSorting} plugins after sorting the column. This hook is fired when {@link Options#columnSorting}
   * or {@link Options#multiColumnSorting} option is enabled.
   *
   * @event Hooks#afterColumnSort
   * @param {Array} currentSortConfig Current sort configuration (for all sorted columns).
   * @param {Array} destinationSortConfigs Destination sort configuration (for all sorted columns).
   */
  "afterColumnSort",
  /**
   * Fired by {@link Autofill} plugin after setting range of autofill. This hook is fired when {@link Options#fillHandle}
   * option is enabled.
   *
   * @event Hooks#modifyAutofillRange
   * @param {Array} startArea Array of visual coordinates of the starting point for the drag-down operation (`[startRow, startColumn, endRow, endColumn]`).
   * @param {Array} entireArea Array of visual coordinates of the entire area of the drag-down operation (`[startRow, startColumn, endRow, endColumn]`).
   */
  "modifyAutofillRange",
  /**
   * Fired to allow modifying the copyable range with a callback function.
   *
   * @event Hooks#modifyCopyableRange
   * @param {Array[]} copyableRanges Array of objects defining copyable cells.
   */
  "modifyCopyableRange",
  /**
   * Fired by {@link CopyPaste} plugin before copying the values to the clipboard and before clearing values of
   * the selected cells. This hook is fired when {@link Options#copyPaste} option is enabled.
   *
   * @event Hooks#beforeCut
   * @param {Array[]} data An array of arrays which contains data to cut.
   * @param {object[]} coords An array of objects with ranges of the visual indexes (`startRow`, `startCol`, `endRow`, `endCol`)
   *                       which will be cut out.
   * @returns {*} If returns `false` then operation of the cutting out is canceled.
   * @example
   * ::: only-for javascript
   * ```js
   * // To disregard a single row, remove it from the array using data.splice(i, 1).
   * new Handsontable(element, {
   *   beforeCut: function(data, coords) {
   *     // data -> [[1, 2, 3], [4, 5, 6]]
   *     data.splice(0, 1);
   *     // data -> [[4, 5, 6]]
   *     // coords -> [{startRow: 0, startCol: 0, endRow: 1, endCol: 2}]
   *   }
   * });
   * // To cancel a cutting action, just return `false`.
   * new Handsontable(element, {
   *   beforeCut: function(data, coords) {
   *     return false;
   *   }
   * });
   * ```
   * :::
   *
   * ::: only-for react
   * ```jsx
   * // To disregard a single row, remove it from the array using data.splice(i, 1).
   * <HotTable
   *   beforeCut={(data, coords) => {
   *     // data -> [[1, 2, 3], [4, 5, 6]]
   *     data.splice(0, 1);
   *     // data -> [[4, 5, 6]]
   *     // coords -> [{startRow: 0, startCol: 0, endRow: 1, endCol: 2}]
   *   }}
   * />
   * // To cancel a cutting action, just return `false`.
   * <HotTable
   *   beforeCut={(data, coords) => {
   *     return false;
   *   }}
   * />
   * ```
   * :::
   */
  "beforeCut",
  /**
   * Fired by {@link CopyPaste} plugin after data was cut out from the table. This hook is fired when
   * {@link Options#copyPaste} option is enabled.
   *
   * @event Hooks#afterCut
   * @param {Array[]} data An array of arrays with the cut data.
   * @param {object[]} coords An array of objects with ranges of the visual indexes (`startRow`, `startCol`, `endRow`, `endCol`)
   *                       which was cut out.
   */
  "afterCut",
  /**
   * Fired before values are copied to the clipboard.
   *
   * @event Hooks#beforeCopy
   * @param {Array[]} data An array of arrays which contains data to copied.
   * @param {object[]} coords An array of objects with ranges of the visual indexes (`startRow`, `startCol`, `endRow`, `endCol`)
   *                         which will copied.
   * @param {{ columnHeadersCount: number }} copiedHeadersCount (Since 12.3.0) The number of copied column headers.
   * @returns {*} If returns `false` then copying is canceled.
   *
   * @example
   * ::: only-for javascript
   * ```js
   * // To disregard a single row, remove it from array using data.splice(i, 1).
   * ...
   * new Handsontable(document.getElementById('example'), {
   *   beforeCopy: (data, coords) => {
   *     // data -> [[1, 2, 3], [4, 5, 6]]
   *     data.splice(0, 1);
   *     // data -> [[4, 5, 6]]
   *     // coords -> [{startRow: 0, startCol: 0, endRow: 1, endCol: 2}]
   *   }
   * });
   * ...
   *
   * // To cancel copying, return false from the callback.
   * ...
   * new Handsontable(document.getElementById('example'), {
   *   beforeCopy: (data, coords) => {
   *     return false;
   *   }
   * });
   * ...
   * ```
   * :::
   *
   * ::: only-for react
   * ```jsx
   * // To disregard a single row, remove it from array using data.splice(i, 1).
   * ...
   * <HotTable
   *   beforeCopy={(data, coords) => {
   *     // data -> [[1, 2, 3], [4, 5, 6]]
   *     data.splice(0, 1);
   *     // data -> [[4, 5, 6]]
   *     // coords -> [{startRow: 0, startCol: 0, endRow: 1, endCol: 2}]
   *   }}
   * />
   * ...
   *
   * // To cancel copying, return false from the callback.
   * ...
   * <HotTable
   *   beforeCopy={(data, coords) => {
   *     return false;
   *   }}
   * />
   * ...
   * ```
   * :::
   */
  "beforeCopy",
  /**
   * Fired by {@link CopyPaste} plugin after data are pasted into table. This hook is fired when {@link Options#copyPaste}
   * option is enabled.
   *
   * @event Hooks#afterCopy
   * @param {Array[]} data An array of arrays which contains the copied data.
   * @param {object[]} coords An array of objects with ranges of the visual indexes (`startRow`, `startCol`, `endRow`, `endCol`)
   *                         which was copied.
   * @param {{ columnHeadersCount: number }} copiedHeadersCount (Since 12.3.0) The number of copied column headers.
   */
  "afterCopy",
  /**
   * Fired by {@link CopyPaste} plugin before values are pasted into table. This hook is fired when
   * {@link Options#copyPaste} option is enabled.
   *
   * @event Hooks#beforePaste
   * @param {Array[]} data An array of arrays which contains data to paste.
   * @param {object[]} coords An array of objects with ranges of the visual indexes (`startRow`, `startCol`, `endRow`, `endCol`)
   *                       that correspond to the previously selected area.
   * @returns {*} If returns `false` then pasting is canceled.
   * @example
   * ```js
   * ::: only-for javascript
   * // To disregard a single row, remove it from array using data.splice(i, 1).
   * new Handsontable(example, {
   *   beforePaste: (data, coords) => {
   *     // data -> [[1, 2, 3], [4, 5, 6]]
   *     data.splice(0, 1);
   *     // data -> [[4, 5, 6]]
   *     // coords -> [{startRow: 0, startCol: 0, endRow: 1, endCol: 2}]
   *   }
   * });
   * // To cancel pasting, return false from the callback.
   * new Handsontable(example, {
   *   beforePaste: (data, coords) => {
   *     return false;
   *   }
   * });
   * ```
   * :::
   *
   * ::: only-for react
   * ```jsx
   * // To disregard a single row, remove it from array using data.splice(i, 1).
   * <HotTable
   *   beforePaste={(data, coords) => {
   *     // data -> [[1, 2, 3], [4, 5, 6]]
   *     data.splice(0, 1);
   *     // data -> [[4, 5, 6]]
   *     // coords -> [{startRow: 0, startCol: 0, endRow: 1, endCol: 2}]
   *   }}
   * />
   * // To cancel pasting, return false from the callback.
   * <HotTable
   *   beforePaste={(data, coords) => {
   *     return false;
   *   }}
   * />
   * ```
   * :::
   */
  "beforePaste",
  /**
   * Fired by {@link CopyPaste} plugin after values are pasted into table. This hook is fired when
   * {@link Options#copyPaste} option is enabled.
   *
   * @event Hooks#afterPaste
   * @param {Array[]} data An array of arrays with the pasted data.
   * @param {object[]} coords An array of objects with ranges of the visual indexes (`startRow`, `startCol`, `endRow`, `endCol`)
   *                       that correspond to the previously selected area.
   */
  "afterPaste",
  /**
   * Fired by the {@link ManualColumnFreeze} plugin, before freezing a column.
   *
   * @event Hooks#beforeColumnFreeze
   * @since 12.1.0
   * @param {number} column The visual index of the column that is going to freeze.
   * @param {boolean} freezePerformed If `true`: the column is going to freeze. If `false`: the column is not going to freeze (which might happen if the column is already frozen).
   * @returns {boolean|undefined} If `false`: the column is not going to freeze, and the `afterColumnFreeze` hook won't fire.
   */
  "beforeColumnFreeze",
  /**
   * Fired by the {@link ManualColumnFreeze} plugin, right after freezing a column.
   *
   * @event Hooks#afterColumnFreeze
   * @since 12.1.0
   * @param {number} column The visual index of the frozen column.
   * @param {boolean} freezePerformed If `true`: the column got successfully frozen. If `false`: the column didn't get frozen.
   */
  "afterColumnFreeze",
  /**
   * Fired by {@link ManualColumnMove} plugin before change order of the visual indexes. This hook is fired when
   * {@link Options#manualColumnMove} option is enabled.
   *
   * @event Hooks#beforeColumnMove
   * @param {Array} movedColumns Array of visual column indexes to be moved.
   * @param {number} finalIndex Visual column index, being a start index for the moved columns.
   *                            Points to where the elements will be placed after the moving action.
   *                            To check visualization of final index please take a look at
   *                            [documentation](@/guides/columns/column-moving/column-moving.md).
   * @param {number|undefined} dropIndex Visual column index, being a drop index for the moved columns.
   *                                     Points to where we are going to drop the moved elements. To check
   *                                     visualization of drop index please take a look at
   *                                     [documentation](@/guides/columns/column-moving/column-moving.md).
   *                                     It's `undefined` when `dragColumns` function wasn't called.
   * @param {boolean} movePossible Indicates if it's possible to move rows to the desired position.
   * @returns {undefined | boolean} If `false` the column will not be moved, `true` otherwise.
   */
  "beforeColumnMove",
  /**
   * Fired by {@link ManualColumnMove} plugin after changing order of the visual indexes.
   * This hook is fired when {@link Options#manualColumnMove} option is enabled.
   *
   * @event Hooks#afterColumnMove
   * @param {Array} movedColumns Array of visual column indexes to be moved.
   * @param {number} finalIndex Visual column index, being a start index for the moved columns.
   *                            Points to where the elements will be placed after the moving action.
   *                            To check visualization of final index please take a look at
   *                            [documentation](@/guides/columns/column-moving/column-moving.md).
   * @param {number|undefined} dropIndex Visual column index, being a drop index for the moved columns.
   *                                     Points to where we are going to drop the moved elements.
   *                                     To check visualization of drop index please take a look at
   *                                     [documentation](@/guides/columns/column-moving/column-moving.md).
   *                                     It's `undefined` when `dragColumns` function wasn't called.
   * @param {boolean} movePossible Indicates if it was possible to move columns to the desired position.
   * @param {boolean} orderChanged Indicates if order of columns was changed by move.
   */
  "afterColumnMove",
  /**
   * Fired by the {@link ManualColumnFreeze} plugin, before unfreezing a column.
   *
   * @event Hooks#beforeColumnUnfreeze
   * @since 12.1.0
   * @param {number} column The visual index of the column that is going to unfreeze.
   * @param {boolean} unfreezePerformed If `true`: the column is going to unfreeze. If `false`: the column is not going to unfreeze (which might happen if the column is already unfrozen).
   * @returns {boolean|undefined} If `false`: the column is not going to unfreeze, and the `afterColumnUnfreeze` hook won't fire.
   */
  "beforeColumnUnfreeze",
  /**
   * Fired by the {@link ManualColumnFreeze} plugin, right after unfreezing a column.
   *
   * @event Hooks#afterColumnUnfreeze
   * @since 12.1.0
   * @param {number} column The visual index of the unfrozen column.
   * @param {boolean} unfreezePerformed If `true`: the column got successfully unfrozen. If `false`: the column didn't get unfrozen.
   */
  "afterColumnUnfreeze",
  /**
   * Fired by {@link ManualRowMove} plugin before changing the order of the visual indexes. This hook is fired when
   * {@link Options#manualRowMove} option is enabled.
   *
   * @event Hooks#beforeRowMove
   * @param {Array} movedRows Array of visual row indexes to be moved.
   * @param {number} finalIndex Visual row index, being a start index for the moved rows.
   *                            Points to where the elements will be placed after the moving action.
   *                            To check visualization of final index please take a look at
   *                            [documentation](@/guides/rows/row-moving/row-moving.md).
   * @param {number|undefined} dropIndex Visual row index, being a drop index for the moved rows.
   *                                     Points to where we are going to drop the moved elements.
   *                                     To check visualization of drop index please take a look at
   *                                     [documentation](@/guides/rows/row-moving/row-moving.md).
   *                                     It's `undefined` when `dragRows` function wasn't called.
   * @param {boolean} movePossible Indicates if it's possible to move rows to the desired position.
   * @returns {*|boolean} If false is returned the action is canceled.
   */
  "beforeRowMove",
  /**
   * Fired by {@link ManualRowMove} plugin after changing the order of the visual indexes.
   * This hook is fired when {@link Options#manualRowMove} option is enabled.
   *
   * @event Hooks#afterRowMove
   * @param {Array} movedRows Array of visual row indexes to be moved.
   * @param {number} finalIndex Visual row index, being a start index for the moved rows.
   *                            Points to where the elements will be placed after the moving action.
   *                            To check visualization of final index please take a look at
   *                            [documentation](@/guides/rows/row-moving/row-moving.md).
   * @param {number|undefined} dropIndex Visual row index, being a drop index for the moved rows.
   *                                     Points to where we are going to drop the moved elements.
   *                                     To check visualization of drop index please take a look at
   *                                     [documentation](@/guides/rows/row-moving/row-moving.md).
   *                                     It's `undefined` when `dragRows` function wasn't called.
   * @param {boolean} movePossible Indicates if it was possible to move rows to the desired position.
   * @param {boolean} orderChanged Indicates if order of rows was changed by move.
   */
  "afterRowMove",
  /**
   * Fired by {@link ManualColumnResize} plugin before rendering the table with modified column sizes. This hook is
   * fired when {@link Options#manualColumnResize} option is enabled.
   *
   * @event Hooks#beforeColumnResize
   * @param {number} newSize Calculated new column width.
   * @param {number} column Visual index of the resized column.
   * @param {boolean} isDoubleClick Flag that determines whether there was a double-click.
   * @returns {number} Returns a new column size or `undefined`, if column size should be calculated automatically.
   */
  "beforeColumnResize",
  /**
   * Fired by {@link ManualColumnResize} plugin after rendering the table with modified column sizes. This hook is
   * fired when {@link Options#manualColumnResize} option is enabled.
   *
   * @event Hooks#afterColumnResize
   * @param {number} newSize Calculated new column width.
   * @param {number} column Visual index of the resized column.
   * @param {boolean} isDoubleClick Flag that determines whether there was a double-click.
   */
  "afterColumnResize",
  /**
   * Fired by {@link ManualRowResize} plugin before rendering the table with modified row sizes. This hook is
   * fired when {@link Options#manualRowResize} option is enabled.
   *
   * @event Hooks#beforeRowResize
   * @param {number} newSize Calculated new row height.
   * @param {number} row Visual index of the resized row.
   * @param {boolean} isDoubleClick Flag that determines whether there was a double-click.
   * @returns {number|undefined} Returns the new row size or `undefined` if row size should be calculated automatically.
   */
  "beforeRowResize",
  /**
   * Fired by {@link ManualRowResize} plugin after rendering the table with modified row sizes. This hook is
   * fired when {@link Options#manualRowResize} option is enabled.
   *
   * @event Hooks#afterRowResize
   * @param {number} newSize Calculated new row height.
   * @param {number} row Visual index of the resized row.
   * @param {boolean} isDoubleClick Flag that determines whether there was a double-click.
   */
  "afterRowResize",
  /**
   * Fired after getting the column header renderers.
   *
   * @event Hooks#afterGetColumnHeaderRenderers
   * @param {Function[]} renderers An array of the column header renderers.
   */
  "afterGetColumnHeaderRenderers",
  /**
   * Fired after getting the row header renderers.
   *
   * @event Hooks#afterGetRowHeaderRenderers
   * @param {Function[]} renderers An array of the row header renderers.
   */
  "afterGetRowHeaderRenderers",
  /**
   * Fired before applying stretched column width to column.
   *
   * @event Hooks#beforeStretchingColumnWidth
   * @param {number} stretchedWidth Calculated width.
   * @param {number} column Visual column index.
   * @returns {number|undefined} Returns new width which will be applied to the column element.
   */
  "beforeStretchingColumnWidth",
  /**
   * Fired by the [`Filters`](@/api/filters.md) plugin,
   * before a [column filter](@/guides/columns/column-filter/column-filter.md) gets applied.
   *
   * [`beforeFilter`](#beforefilter) takes one argument (`conditionsStack`), which is an array of objects.
   * Each object represents one of your [column filters](@/api/filters.md#addcondition),
   * and consists of the following properties:
   *
   * | Property     | Possible values                                                         | Description                                                                                                              |
   * | ------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
   * | `column`     | Number                                                                  | A visual index of the column to which the filter will be applied.                                                        |
   * | `conditions` | Array of objects                                                        | Each object represents one condition. For details, see [`addCondition()`](@/api/filters.md#addcondition).                |
   * | `operation`  | `'conjunction'` \| `'disjunction'` \| `'disjunctionWithExtraCondition'` | An operation to perform on your set of `conditions`. For details, see [`addCondition()`](@/api/filters.md#addcondition). |
   *
   * An example of the format of the `conditionsStack` argument:
   *
   * ```js
   * [
   *   {
   *     column: 2,
   *     conditions: [
   *       {name: 'begins_with', args: [['S']]}
   *     ],
   *     operation: 'conjunction'
   *   },
   *   {
   *     column: 4,
   *     conditions: [
   *       {name: 'not_empty', args: []}
   *     ],
   *     operation: 'conjunction'
   *   },
   * ]
   * ```
   *
   * To perform server-side filtering (i.e., to not apply filtering to Handsontable's UI),
   * set [`beforeFilter`](#beforefilter) to return `false`:
   *
   * ```js
   * new Handsontable(document.getElementById('example'), {
   *   beforeFilter: (conditionsStack) => {
   *     return false;
   *   }
   * });
   *```
   *
   * Read more:
   * - [Guides: Column filter](@/guides/columns/column-filter/column-filter.md)
   * - [Hooks: `afterFilter`](#afterfilter)
   * - [Options: `filters`](@/api/options.md#filters)
   * - [Plugins: `Filters`](@/api/filters.md)
   * – [Plugin methods: `addCondition()`](@/api/filters.md#addcondition)
   *
   * @event Hooks#beforeFilter
   * @param {object[]} conditionsStack An array of objects with your [column filters](@/api/filters.md#addcondition).
   * @returns {boolean} To perform server-side filtering (i.e., to not apply filtering to Handsontable's UI), return `false`.
   */
  "beforeFilter",
  /**
   * Fired by the [`Filters`](@/api/filters.md) plugin,
   * after a [column filter](@/guides/columns/column-filter/column-filter.md) gets applied.
   *
   * [`afterFilter`](#afterfilter) takes one argument (`conditionsStack`), which is an array of objects.
   * Each object represents one of your [column filters](@/api/filters.md#addcondition),
   * and consists of the following properties:
   *
   * | Property     | Possible values                                                         | Description                                                                                                              |
   * | ------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
   * | `column`     | Number                                                                  | A visual index of the column to which the filter was applied.                                                            |
   * | `conditions` | Array of objects                                                        | Each object represents one condition. For details, see [`addCondition()`](@/api/filters.md#addcondition).                |
   * | `operation`  | `'conjunction'` \| `'disjunction'` \| `'disjunctionWithExtraCondition'` | An operation to perform on your set of `conditions`. For details, see [`addCondition()`](@/api/filters.md#addcondition). |
   *
   * An example of the format of the `conditionsStack` argument:
   *
   * ```js
   * [
   *   {
   *     column: 2,
   *     conditions: [
   *       {name: 'begins_with', args: [['S']]}
   *     ],
   *     operation: 'conjunction'
   *   },
   *   {
   *     column: 4,
   *     conditions: [
   *       {name: 'not_empty', args: []}
   *     ],
   *     operation: 'conjunction'
   *   },
   * ]
   * ```
   *
   * Read more:
   * - [Guides: Column filter](@/guides/columns/column-filter/column-filter.md)
   * - [Hooks: `beforeFilter`](#beforefilter)
   * - [Options: `filters`](@/api/options.md#filters)
   * - [Plugins: `Filters`](@/api/filters.md)
   * – [Plugin methods: `addCondition()`](@/api/filters.md#addcondition)
   *
   * @event Hooks#afterFilter
   * @param {object[]} conditionsStack An array of objects with your [column filters](@/api/filters.md#addcondition).
   */
  "afterFilter",
  /**
   * Fired by the {@link Formulas} plugin, when any cell value changes.
   *
   * Returns an array of objects that contains:
   * - The addresses (`sheet`, `row`, `col`) and new values (`newValue`) of the changed cells.
   * - The addresses and new values of any cells that had to be recalculated (because their formulas depend on the cells that changed).
   *
   * This hook gets also fired on Handsontable's initialization, returning the addresses and values of all cells.
   *
   * Read more:
   * - [Guides: Formula calculation](@/guides/formulas/formula-calculation/formula-calculation.md)
   * - [HyperFormula documentation: `valuesUpdated`](https://hyperformula.handsontable.com/api/interfaces/listeners.html#valuesupdated)
   *
   * @since 9.0.0
   * @event Hooks#afterFormulasValuesUpdate
   * @param {Array} changes The addresses and new values of all the changed and recalculated cells.
   */
  "afterFormulasValuesUpdate",
  /**
   * Fired when a named expression is added to the Formulas' engine instance.
   *
   * @since 9.0.0
   * @event Hooks#afterNamedExpressionAdded
   * @param {string} namedExpressionName The name of the added expression.
   * @param {Array} changes The values and location of applied changes.
   */
  "afterNamedExpressionAdded",
  /**
   * Fired when a named expression is removed from the Formulas' engine instance.
   *
   * @since 9.0.0
   * @event Hooks#afterNamedExpressionRemoved
   * @param {string} namedExpressionName The name of the removed expression.
   * @param {Array} changes The values and location of applied changes.
   */
  "afterNamedExpressionRemoved",
  /**
   * Fired when a new sheet is added to the Formulas' engine instance.
   *
   * @since 9.0.0
   * @event Hooks#afterSheetAdded
   * @param {string} addedSheetDisplayName The name of the added sheet.
   */
  "afterSheetAdded",
  /**
   * Fired when a sheet in the Formulas' engine instance is renamed.
   *
   * @since 9.0.0
   * @event Hooks#afterSheetRenamed
   * @param {string} oldDisplayName The old name of the sheet.
   * @param {string} newDisplayName The new name of the sheet.
   */
  "afterSheetRenamed",
  /**
   * Fired when a sheet is removed from the Formulas' engine instance.
   *
   * @since 9.0.0
   * @event Hooks#afterSheetRemoved
   * @param {string} removedSheetDisplayName The removed sheet name.
   * @param {Array} changes The values and location of applied changes.
   */
  "afterSheetRemoved",
  /**
   * Fired while retrieving the column header height.
   *
   * @event Hooks#modifyColumnHeaderHeight
   */
  "modifyColumnHeaderHeight",
  /**
   * Fired while retrieving a column header's value.
   *
   * @since 12.3.0
   * @event Hooks#modifyColumnHeaderValue
   * @param {string} value A column header value.
   * @param {number} visualColumnIndex A visual column index.
   * @param {number} [headerLevel=0] Header level index. Accepts positive (`0` to `n`)
   *                                 and negative (`-1` to `-n`) values. For positive values, `0` points to the
   *                                 topmost header. For negative values, `-1` points to the bottom-most
   *                                 header (the header closest to the cells).
   * @returns {string} The column header value to be updated.
   */
  "modifyColumnHeaderValue",
  /**
   * Fired by {@link UndoRedo} plugin before the undo action. Contains information about the action that is being undone.
   * This hook is fired when {@link Options#undo} option is enabled.
   *
   * @event Hooks#beforeUndo
   * @param {object} action The action object. Contains information about the action being undone. The `actionType`
   *                        property of the object specifies the type of the action in a String format. (e.g. `'remove_row'`).
   * @returns {*|boolean} If false is returned the action is canceled.
   */
  "beforeUndo",
  /**
   * Fired by {@link UndoRedo} plugin before changing undo stack.
   *
   * @event Hooks#beforeUndoStackChange
   * @since 8.4.0
   * @param {Array} doneActions Stack of actions which may be undone.
   * @param {string} [source] String that identifies source of action
   *                          ([list of all available sources](@/guides/getting-started/events-and-hooks/events-and-hooks.md#definition-for-source-argument)).
   * @returns {*|boolean} If false is returned the action of changing undo stack is canceled.
   */
  "beforeUndoStackChange",
  /**
   * Fired by {@link UndoRedo} plugin after the undo action. Contains information about the action that is being undone.
   * This hook is fired when {@link Options#undo} option is enabled.
   *
   * @event Hooks#afterUndo
   * @param {object} action The action object. Contains information about the action being undone. The `actionType`
   *                        property of the object specifies the type of the action in a String format. (e.g. `'remove_row'`).
   */
  "afterUndo",
  /**
   * Fired by {@link UndoRedo} plugin after changing undo stack.
   *
   * @event Hooks#afterUndoStackChange
   * @since 8.4.0
   * @param {Array} doneActionsBefore Stack of actions which could be undone before performing new action.
   * @param {Array} doneActionsAfter Stack of actions which can be undone after performing new action.
   */
  "afterUndoStackChange",
  /**
   * Fired by {@link UndoRedo} plugin before the redo action. Contains information about the action that is being redone.
   * This hook is fired when {@link Options#undo} option is enabled.
   *
   * @event Hooks#beforeRedo
   * @param {object} action The action object. Contains information about the action being redone. The `actionType`
   *                        property of the object specifies the type of the action in a String format (e.g. `'remove_row'`).
   * @returns {*|boolean} If false is returned the action is canceled.
   */
  "beforeRedo",
  /**
   * Fired by {@link UndoRedo} plugin before changing redo stack.
   *
   * @event Hooks#beforeRedoStackChange
   * @since 8.4.0
   * @param {Array} undoneActions Stack of actions which may be redone.
   */
  "beforeRedoStackChange",
  /**
   * Fired by {@link UndoRedo} plugin after the redo action. Contains information about the action that is being redone.
   * This hook is fired when {@link Options#undo} option is enabled.
   *
   * @event Hooks#afterRedo
   * @param {object} action The action object. Contains information about the action being redone. The `actionType`
   *                        property of the object specifies the type of the action in a String format (e.g. `'remove_row'`).
   */
  "afterRedo",
  /**
   * Fired by {@link UndoRedo} plugin after changing redo stack.
   *
   * @event Hooks#afterRedoStackChange
   * @since 8.4.0
   * @param {Array} undoneActionsBefore Stack of actions which could be redone before performing new action.
   * @param {Array} undoneActionsAfter Stack of actions which can be redone after performing new action.
   */
  "afterRedoStackChange",
  /**
   * Fired while retrieving the row header width.
   *
   * @event Hooks#modifyRowHeaderWidth
   * @param {number} rowHeaderWidth Row header width.
   */
  "modifyRowHeaderWidth",
  /**
   * Fired when the focus of the selection is being modified (e.g. Moving the focus with the enter/tab keys).
   *
   * @since 14.3.0
   * @event Hooks#modifyTransformFocus
   * @param {CellCoords} delta Cell coords object declaring the delta of the new selection relative to the previous one.
   */
  "modifyTransformFocus",
  /**
   * Fired when the start of the selection is being modified (e.g. Moving the selection with the arrow keys).
   *
   * @event Hooks#modifyTransformStart
   * @param {CellCoords} delta Cell coords object declaring the delta of the new selection relative to the previous one.
   */
  "modifyTransformStart",
  /**
   * Fired when the end of the selection is being modified (e.g. Moving the selection with the arrow keys).
   *
   * @event Hooks#modifyTransformEnd
   * @param {CellCoords} delta Cell coords object declaring the delta of the new selection relative to the previous one.
   */
  "modifyTransformEnd",
  /**
   * Fired after the focus of the selection is being modified (e.g. Moving the focus with the enter/tab keys).
   *
   * @since 14.3.0
   * @event Hooks#afterModifyTransformFocus
   * @param {CellCoords} coords Coords of the freshly focused cell.
   * @param {number} rowTransformDir `-1` if trying to focus a cell with a negative row index. `0` otherwise.
   * @param {number} colTransformDir `-1` if trying to focus a cell with a negative column index. `0` otherwise.
   */
  "afterModifyTransformFocus",
  /**
   * Fired after the start of the selection is being modified (e.g. Moving the selection with the arrow keys).
   *
   * @event Hooks#afterModifyTransformStart
   * @param {CellCoords} coords Coords of the freshly selected cell.
   * @param {number} rowTransformDir `-1` if trying to select a cell with a negative row index. `0` otherwise.
   * @param {number} colTransformDir `-1` if trying to select a cell with a negative column index. `0` otherwise.
   */
  "afterModifyTransformStart",
  /**
   * Fired after the end of the selection is being modified (e.g. Moving the selection with the arrow keys).
   *
   * @event Hooks#afterModifyTransformEnd
   * @param {CellCoords} coords Visual coords of the freshly selected cell.
   * @param {number} rowTransformDir `-1` if trying to select a cell with a negative row index. `0` otherwise.
   * @param {number} colTransformDir `-1` if trying to select a cell with a negative column index. `0` otherwise.
   */
  "afterModifyTransformEnd",
  /**
   * Fired inside the `viewportRowCalculatorOverride` method. Allows modifying the row calculator parameters.
   *
   * @event Hooks#afterViewportRowCalculatorOverride
   * @param {object} calc The row calculator.
   */
  "afterViewportRowCalculatorOverride",
  /**
   * Fired inside the `viewportColumnCalculatorOverride` method. Allows modifying the row calculator parameters.
   *
   * @event Hooks#afterViewportColumnCalculatorOverride
   * @param {object} calc The row calculator.
   */
  "afterViewportColumnCalculatorOverride",
  /**
   * Fired after initializing all the plugins.
   * This hook should be added before Handsontable is initialized.
   *
   * @event Hooks#afterPluginsInitialized
   *
   * @example
   * ```js
   * Handsontable.hooks.add('afterPluginsInitialized', myCallback);
   * ```
   */
  "afterPluginsInitialized",
  /**
   * Fired by {@link HiddenRows} plugin before marking the rows as hidden. Fired only if the {@link Options#hiddenRows} option is enabled.
   * Returning `false` in the callback will prevent the hiding action from completing.
   *
   * @event Hooks#beforeHideRows
   * @param {Array} currentHideConfig Current hide configuration - a list of hidden physical row indexes.
   * @param {Array} destinationHideConfig Destination hide configuration - a list of hidden physical row indexes.
   * @param {boolean} actionPossible `true`, if provided row indexes are valid, `false` otherwise.
   * @returns {undefined|boolean} If the callback returns `false`, the hiding action will not be completed.
   */
  "beforeHideRows",
  /**
   * Fired by {@link HiddenRows} plugin after marking the rows as hidden. Fired only if the {@link Options#hiddenRows} option is enabled.
   *
   * @event Hooks#afterHideRows
   * @param {Array} currentHideConfig Current hide configuration - a list of hidden physical row indexes.
   * @param {Array} destinationHideConfig Destination hide configuration - a list of hidden physical row indexes.
   * @param {boolean} actionPossible `true`, if provided row indexes are valid, `false` otherwise.
   * @param {boolean} stateChanged `true`, if the action affected any non-hidden rows, `false` otherwise.
   */
  "afterHideRows",
  /**
   * Fired by {@link HiddenRows} plugin before marking the rows as not hidden. Fired only if the {@link Options#hiddenRows} option is enabled.
   * Returning `false` in the callback will prevent the row revealing action from completing.
   *
   * @event Hooks#beforeUnhideRows
   * @param {Array} currentHideConfig Current hide configuration - a list of hidden physical row indexes.
   * @param {Array} destinationHideConfig Destination hide configuration - a list of hidden physical row indexes.
   * @param {boolean} actionPossible `true`, if provided row indexes are valid, `false` otherwise.
   * @returns {undefined|boolean} If the callback returns `false`, the revealing action will not be completed.
   */
  "beforeUnhideRows",
  /**
   * Fired by {@link HiddenRows} plugin after marking the rows as not hidden. Fired only if the {@link Options#hiddenRows} option is enabled.
   *
   * @event Hooks#afterUnhideRows
   * @param {Array} currentHideConfig Current hide configuration - a list of hidden physical row indexes.
   * @param {Array} destinationHideConfig Destination hide configuration - a list of hidden physical row indexes.
   * @param {boolean} actionPossible `true`, if provided row indexes are valid, `false` otherwise.
   * @param {boolean} stateChanged `true`, if the action affected any hidden rows, `false` otherwise.
   */
  "afterUnhideRows",
  /**
   * Fired by {@link HiddenColumns} plugin before marking the columns as hidden. Fired only if the {@link Options#hiddenColumns} option is enabled.
   * Returning `false` in the callback will prevent the hiding action from completing.
   *
   * @event Hooks#beforeHideColumns
   * @param {Array} currentHideConfig Current hide configuration - a list of hidden physical column indexes.
   * @param {Array} destinationHideConfig Destination hide configuration - a list of hidden physical column indexes.
   * @param {boolean} actionPossible `true`, if the provided column indexes are valid, `false` otherwise.
   * @returns {undefined|boolean} If the callback returns `false`, the hiding action will not be completed.
   */
  "beforeHideColumns",
  /**
   * Fired by {@link HiddenColumns} plugin after marking the columns as hidden. Fired only if the {@link Options#hiddenColumns} option is enabled.
   *
   * @event Hooks#afterHideColumns
   * @param {Array} currentHideConfig Current hide configuration - a list of hidden physical column indexes.
   * @param {Array} destinationHideConfig Destination hide configuration - a list of hidden physical column indexes.
   * @param {boolean} actionPossible `true`, if the provided column indexes are valid, `false` otherwise.
   * @param {boolean} stateChanged `true`, if the action affected any non-hidden columns, `false` otherwise.
   */
  "afterHideColumns",
  /**
   * Fired by {@link HiddenColumns} plugin before marking the columns as not hidden. Fired only if the {@link Options#hiddenColumns} option is enabled.
   * Returning `false` in the callback will prevent the column revealing action from completing.
   *
   * @event Hooks#beforeUnhideColumns
   * @param {Array} currentHideConfig Current hide configuration - a list of hidden physical column indexes.
   * @param {Array} destinationHideConfig Destination hide configuration - a list of hidden physical column indexes.
   * @param {boolean} actionPossible `true`, if the provided column indexes are valid, `false` otherwise.
   * @returns {undefined|boolean} If the callback returns `false`, the hiding action will not be completed.
   */
  "beforeUnhideColumns",
  /**
   * Fired by {@link HiddenColumns} plugin after marking the columns as not hidden. Fired only if the {@link Options#hiddenColumns} option is enabled.
   *
   * @event Hooks#afterUnhideColumns
   * @param {Array} currentHideConfig Current hide configuration - a list of hidden physical column indexes.
   * @param {Array} destinationHideConfig Destination hide configuration - a list of hidden physical column indexes.
   * @param {boolean} actionPossible `true`, if the provided column indexes are valid, `false` otherwise.
   * @param {boolean} stateChanged `true`, if the action affected any hidden columns, `false` otherwise.
   */
  "afterUnhideColumns",
  /**
   * Fired by {@link TrimRows} plugin before trimming rows. This hook is fired when {@link Options#trimRows} option is enabled.
   *
   * @event Hooks#beforeTrimRow
   * @param {Array} currentTrimConfig Current trim configuration - a list of trimmed physical row indexes.
   * @param {Array} destinationTrimConfig Destination trim configuration - a list of trimmed physical row indexes.
   * @param {boolean} actionPossible `true`, if all of the row indexes are withing the bounds of the table, `false` otherwise.
   * @returns {undefined|boolean} If the callback returns `false`, the trimming action will not be completed.
   */
  "beforeTrimRow",
  /**
   * Fired by {@link TrimRows} plugin after trimming rows. This hook is fired when {@link Options#trimRows} option is enabled.
   *
   * @event Hooks#afterTrimRow
   * @param {Array} currentTrimConfig Current trim configuration - a list of trimmed physical row indexes.
   * @param {Array} destinationTrimConfig Destination trim configuration - a list of trimmed physical row indexes.
   * @param {boolean} actionPossible `true`, if all of the row indexes are withing the bounds of the table, `false` otherwise.
   * @param {boolean} stateChanged `true`, if the action affected any non-trimmed rows, `false` otherwise.
   * @returns {undefined|boolean} If the callback returns `false`, the trimming action will not be completed.
   */
  "afterTrimRow",
  /**
   * Fired by {@link TrimRows} plugin before untrimming rows. This hook is fired when {@link Options#trimRows} option is enabled.
   *
   * @event Hooks#beforeUntrimRow
   * @param {Array} currentTrimConfig Current trim configuration - a list of trimmed physical row indexes.
   * @param {Array} destinationTrimConfig Destination trim configuration - a list of trimmed physical row indexes.
   * @param {boolean} actionPossible `true`, if all of the row indexes are withing the bounds of the table, `false` otherwise.
   * @returns {undefined|boolean} If the callback returns `false`, the untrimming action will not be completed.
   */
  "beforeUntrimRow",
  /**
   * Fired by {@link TrimRows} plugin after untrimming rows. This hook is fired when {@link Options#trimRows} option is enabled.
   *
   * @event Hooks#afterUntrimRow
   * @param {Array} currentTrimConfig Current trim configuration - a list of trimmed physical row indexes.
   * @param {Array} destinationTrimConfig Destination trim configuration - a list of trimmed physical row indexes.
   * @param {boolean} actionPossible `true`, if all of the row indexes are withing the bounds of the table, `false` otherwise.
   * @param {boolean} stateChanged `true`, if the action affected any trimmed rows, `false` otherwise.
   * @returns {undefined|boolean} If the callback returns `false`, the untrimming action will not be completed.
   */
  "afterUntrimRow",
  /**
   * Fired by {@link DropdownMenu} plugin before opening the dropdown menu. This hook is fired when {@link Options#dropdownMenu}
   * option is enabled.
   *
   * @event Hooks#beforeDropdownMenuShow
   * @param {DropdownMenu} dropdownMenu The `DropdownMenu` instance.
   */
  "beforeDropdownMenuShow",
  /**
   * Fired by {@link DropdownMenu} plugin after opening the Dropdown Menu. This hook is fired when {@link Options#dropdownMenu}
   * option is enabled.
   *
   * @event Hooks#afterDropdownMenuShow
   * @param {DropdownMenu} dropdownMenu The `DropdownMenu` instance.
   */
  "afterDropdownMenuShow",
  /**
   * Fired by {@link DropdownMenu} plugin after hiding the Dropdown Menu. This hook is fired when {@link Options#dropdownMenu}
   * option is enabled.
   *
   * @event Hooks#afterDropdownMenuHide
   * @param {DropdownMenu} instance The `DropdownMenu` instance.
   */
  "afterDropdownMenuHide",
  /**
   * Fired by {@link NestedRows} plugin before adding a children to the `NestedRows` structure. This hook is fired when
   * {@link Options#nestedRows} option is enabled.
   *
   * @event Hooks#beforeAddChild
   * @param {object} parent The parent object.
   * @param {object|undefined} element The element added as a child. If `undefined`, a blank child was added.
   * @param {number|undefined} index The index within the parent where the new child was added. If `undefined`, the element was added as the last child.
   */
  "beforeAddChild",
  /**
   * Fired by {@link NestedRows} plugin after adding a children to the `NestedRows` structure. This hook is fired when
   * {@link Options#nestedRows} option is enabled.
   *
   * @event Hooks#afterAddChild
   * @param {object} parent The parent object.
   * @param {object|undefined} element The element added as a child. If `undefined`, a blank child was added.
   * @param {number|undefined} index The index within the parent where the new child was added. If `undefined`, the element was added as the last child.
   */
  "afterAddChild",
  /**
   * Fired by {@link NestedRows} plugin before detaching a child from its parent. This hook is fired when
   * {@link Options#nestedRows} option is enabled.
   *
   * @event Hooks#beforeDetachChild
   * @param {object} parent An object representing the parent from which the element is to be detached.
   * @param {object} element The detached element.
   */
  "beforeDetachChild",
  /**
   * Fired by {@link NestedRows} plugin after detaching a child from its parent. This hook is fired when
   * {@link Options#nestedRows} option is enabled.
   *
   * @event Hooks#afterDetachChild
   * @param {object} parent An object representing the parent from which the element was detached.
   * @param {object} element The detached element.
   * @param {number} finalElementPosition The final row index of the detached element.
   */
  "afterDetachChild",
  /**
   * Fired before the editor is opened and rendered.
   *
   * @since 14.2.0
   * @event Hooks#beforeBeginEditing
   * @param {number} row Visual row index of the edited cell.
   * @param {number} column Visual column index of the edited cell.
   * @param {*} initialValue The initial editor value.
   * @param {MouseEvent | KeyboardEvent} event The event which was responsible for opening the editor.
   * @param {boolean} fullEditMode `true` if the editor is opened in full edit mode, `false` otherwise.
   * Editor opened in full edit mode does not close after pressing Arrow keys.
   * @returns {boolean | undefined} If the callback returns `false,` the editor won't be opened after
   * the mouse double click or after pressing the Enter key. Returning `undefined` (or other value
   * than boolean) will result in default behavior, which disallows opening an editor for non-contiguous
   * selection (while pressing Ctrl/Cmd) and for multiple selected cells (while pressing SHIFT).
   * Returning `true` removes those restrictions.
   */
  "beforeBeginEditing",
  /**
   * Fired after the editor is opened and rendered.
   *
   * @event Hooks#afterBeginEditing
   * @param {number} row Visual row index of the edited cell.
   * @param {number} column Visual column index of the edited cell.
   */
  "afterBeginEditing",
  /**
   * Fired by {@link MergeCells} plugin before cell merging. This hook is fired when {@link Options#mergeCells}
   * option is enabled.
   *
   * @event Hooks#beforeMergeCells
   * @param {CellRange} cellRange Selection cell range.
   * @param {boolean} [auto=false] `true` if called automatically by the plugin.
   */
  "beforeMergeCells",
  /**
   * Fired by {@link MergeCells} plugin after cell merging. This hook is fired when {@link Options#mergeCells}
   * option is enabled.
   *
   * @event Hooks#afterMergeCells
   * @param {CellRange} cellRange Selection cell range.
   * @param {object} mergeParent The parent collection of the provided cell range.
   * @param {boolean} [auto=false] `true` if called automatically by the plugin.
   */
  "afterMergeCells",
  /**
   * Fired by {@link MergeCells} plugin before unmerging the cells. This hook is fired when {@link Options#mergeCells}
   * option is enabled.
   *
   * @event Hooks#beforeUnmergeCells
   * @param {CellRange} cellRange Selection cell range.
   * @param {boolean} [auto=false] `true` if called automatically by the plugin.
   */
  "beforeUnmergeCells",
  /**
   * Fired by {@link MergeCells} plugin after unmerging the cells. This hook is fired when {@link Options#mergeCells}
   * option is enabled.
   *
   * @event Hooks#afterUnmergeCells
   * @param {CellRange} cellRange Selection cell range.
   * @param {boolean} [auto=false] `true` if called automatically by the plugin.
   */
  "afterUnmergeCells",
  /**
   * Fired after the table was switched into listening mode. This allows Handsontable to capture keyboard events and
   * respond in the right way.
   *
   * @event Hooks#afterListen
   */
  "afterListen",
  /**
   * Fired after the table was switched off from the listening mode. This makes the Handsontable inert for any
   * keyboard events.
   *
   * @event Hooks#afterUnlisten
   */
  "afterUnlisten",
  /**
   * Fired after the window was resized or the size of the Handsontable root element was changed.
   *
   * @event Hooks#afterRefreshDimensions
   * @param {{ width: number, height: number }} previousDimensions Previous dimensions of the container.
   * @param {{ width: number, height: number }} currentDimensions Current dimensions of the container.
   * @param {boolean} stateChanged `true`, if the container was re-render, `false` otherwise.
   */
  "afterRefreshDimensions",
  /**
   * Cancellable hook, called after resizing a window or after detecting size change of the
   * Handsontable root element, but before redrawing a table.
   *
   * @event Hooks#beforeRefreshDimensions
   * @param {{ width: number, height: number }} previousDimensions Previous dimensions of the container.
   * @param {{ width: number, height: number }} currentDimensions Current dimensions of the container.
   * @param {boolean} actionPossible `true`, if current and previous dimensions are different, `false` otherwise.
   * @returns {undefined|boolean} If the callback returns `false`, the refresh action will not be completed.
   */
  "beforeRefreshDimensions",
  /**
   * Fired by {@link CollapsibleColumns} plugin before columns collapse. This hook is fired when {@link Options#collapsibleColumns} option is enabled.
   *
   * @event Hooks#beforeColumnCollapse
   * @since 8.0.0
   * @param {Array} currentCollapsedColumns Current collapsible configuration - a list of collapsible physical column indexes.
   * @param {Array} destinationCollapsedColumns Destination collapsible configuration - a list of collapsible physical column indexes.
   * @param {boolean} collapsePossible `true`, if all of the column indexes are withing the bounds of the collapsed sections, `false` otherwise.
   * @returns {undefined|boolean} If the callback returns `false`, the collapsing action will not be completed.
   */
  "beforeColumnCollapse",
  /**
   * Fired by {@link CollapsibleColumns} plugin before columns collapse. This hook is fired when {@link Options#collapsibleColumns} option is enabled.
   *
   * @event Hooks#afterColumnCollapse
   * @since 8.0.0
   * @param {Array} currentCollapsedColumns Current collapsible configuration - a list of collapsible physical column indexes.
   * @param {Array} destinationCollapsedColumns Destination collapsible configuration - a list of collapsible physical column indexes.
   * @param {boolean} collapsePossible `true`, if all of the column indexes are withing the bounds of the collapsed sections, `false` otherwise.
   * @param {boolean} successfullyCollapsed `true`, if the action affected any non-collapsible column, `false` otherwise.
   */
  "afterColumnCollapse",
  /**
   * Fired by {@link CollapsibleColumns} plugin before columns expand. This hook is fired when {@link Options#collapsibleColumns} option is enabled.
   *
   * @event Hooks#beforeColumnExpand
   * @since 8.0.0
   * @param {Array} currentCollapsedColumns Current collapsible configuration - a list of collapsible physical column indexes.
   * @param {Array} destinationCollapsedColumns Destination collapsible configuration - a list of collapsible physical column indexes.
   * @param {boolean} expandPossible `true`, if all of the column indexes are withing the bounds of the collapsed sections, `false` otherwise.
   * @returns {undefined|boolean} If the callback returns `false`, the expanding action will not be completed.
   */
  "beforeColumnExpand",
  /**
   * Fired by {@link CollapsibleColumns} plugin before columns expand. This hook is fired when {@link Options#collapsibleColumns} option is enabled.
   *
   * @event Hooks#afterColumnExpand
   * @since 8.0.0
   * @param {Array} currentCollapsedColumns Current collapsible configuration - a list of collapsible physical column indexes.
   * @param {Array} destinationCollapsedColumns Destination collapsible configuration - a list of collapsible physical column indexes.
   * @param {boolean} expandPossible `true`, if all of the column indexes are withing the bounds of the collapsed sections, `false` otherwise.
   * @param {boolean} successfullyExpanded `true`, if the action affected any non-collapsible column, `false` otherwise.
   */
  "afterColumnExpand",
  /**
   * Fired by {@link AutoColumnSize} plugin within SampleGenerator utility.
   *
   * @event Hooks#modifyAutoColumnSizeSeed
   * @since 8.4.0
   * @param {string|undefined} seed Seed ID, unique name to categorize samples.
   * @param {object} cellProperties Object containing the cell properties.
   * @param {*} cellValue Value of the cell.
   */
  "modifyAutoColumnSizeSeed"
];
var REMOVED_MESSAGE = toSingleLine`The plugin hook "[hookName]" was removed in Handsontable [removedInVersion].\x20
  Please consult release notes https://github.com/handsontable/handsontable/releases/tag/[removedInVersion] to\x20
  learn about the migration path.`;
var REMOVED_HOOKS = /* @__PURE__ */ new Map([["modifyRow", "8.0.0"], ["modifyCol", "8.0.0"], ["unmodifyRow", "8.0.0"], ["unmodifyCol", "8.0.0"], ["skipLengthCache", "8.0.0"], ["hiddenColumn", "8.0.0"], ["hiddenRow", "8.0.0"]]);
var DEPRECATED_HOOKS = /* @__PURE__ */ new Map([[]]);
var callbackOrder = /* @__PURE__ */ new WeakMap();
var Hooks = class {
  static getSingleton() {
    return getGlobalSingleton();
  }
  /**
   * @type {object}
   */
  /**
   *
   */
  constructor() {
    _defineProperty(this, "globalBucket", void 0);
    this.globalBucket = this.createEmptyBucket();
  }
  /**
   * Returns a new object with empty handlers related to every registered hook name.
   *
   * @returns {object} The empty bucket object.
   *
   * @example
   * ```js
   * Handsontable.hooks.createEmptyBucket();
   * // Results:
   * {
   * ...
   * afterCreateCol: [],
   * afterCreateRow: [],
   * beforeInit: [],
   * ...
   * }
   * ```
   */
  createEmptyBucket() {
    const bucket = /* @__PURE__ */ Object.create(null);
    arrayEach(REGISTERED_HOOKS, (hook) => {
      bucket[hook] = [];
      this.initOrderMap(bucket, hook);
    });
    return bucket;
  }
  /**
   * Get hook bucket based on the context of the object or if argument is `undefined`, get the global hook bucket.
   *
   * @param {object} [context=null] A Handsontable instance.
   * @returns {object} Returns a global or Handsontable instance bucket.
   */
  getBucket() {
    let context = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    if (context) {
      if (!context.pluginHookBucket) {
        context.pluginHookBucket = this.createEmptyBucket();
      }
      return context.pluginHookBucket;
    }
    return this.globalBucket;
  }
  /**
   * Adds a listener (globally or locally) to a specified hook name.
   * If the `context` parameter is provided, the hook will be added only to the instance it references.
   * Otherwise, the callback will be used everytime the hook fires on any Handsontable instance.
   * You can provide an array of callback functions as the `callback` argument, this way they will all be fired
   * once the hook is triggered.
   *
   * @see Core#addHook
   * @param {string} key Hook name.
   * @param {Function|Array} callback Callback function or an array of functions.
   * @param {object} [context=null] The context for the hook callback to be added - a Handsontable instance or leave empty.
   * @param {number} [orderIndex] Order index of the callback.
   *                              If > 0, the callback will be added after the others, for example, with an index of 1, the callback will be added before the ones with an index of 2, 3, etc., but after the ones with an index of 0 and lower.
   *                              If < 0, the callback will be added before the others, for example, with an index of -1, the callback will be added after the ones with an index of -2, -3, etc., but before the ones with an index of 0 and higher.
   *                              If 0 or no order index is provided, the callback will be added between the "negative" and "positive" indexes.
   * @returns {Hooks} Instance of Hooks.
   *
   * @example
   * ```js
   * // single callback, added locally
   * Handsontable.hooks.add('beforeInit', myCallback, hotInstance);
   *
   * // single callback, added globally
   * Handsontable.hooks.add('beforeInit', myCallback);
   *
   * // multiple callbacks, added locally
   * Handsontable.hooks.add('beforeInit', [myCallback, anotherCallback], hotInstance);
   *
   * // multiple callbacks, added globally
   * Handsontable.hooks.add('beforeInit', [myCallback, anotherCallback]);
   * ```
   */
  add(key, callback) {
    let context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    let orderIndex = arguments.length > 3 ? arguments[3] : void 0;
    if (Array.isArray(callback)) {
      arrayEach(callback, (c) => this.add(key, c, context));
    } else {
      if (REMOVED_HOOKS.has(key)) {
        warn(substitute(REMOVED_MESSAGE, {
          hookName: key,
          removedInVersion: REMOVED_HOOKS.get(key)
        }));
      }
      if (DEPRECATED_HOOKS.has(key)) {
        warn(DEPRECATED_HOOKS.get(key));
      }
      const bucket = this.getBucket(context);
      if (typeof bucket[key] === "undefined") {
        this.register(key);
        bucket[key] = [];
        this.initOrderMap(bucket, key);
      }
      callback.skip = false;
      if (bucket[key].indexOf(callback) === -1) {
        let foundInitialHook = false;
        if (callback.initialHook) {
          arrayEach(bucket[key], (cb, i) => {
            if (cb.initialHook) {
              bucket[key][i] = callback;
              foundInitialHook = true;
              return false;
            }
          });
        }
        if (!foundInitialHook) {
          bucket[key].push(callback);
        }
      }
      this.setCallbackOrderIndex(bucket, key, callback, orderIndex);
      this.orderBucketByOrderIndex(bucket, key);
    }
    return this;
  }
  /**
   * Adds a listener to a specified hook. After the hook runs this listener will be automatically removed from the bucket.
   *
   * @see Core#addHookOnce
   * @param {string} key Hook/Event name.
   * @param {Function|Array} callback Callback function.
   * @param {object} [context=null] A Handsontable instance.
   * @param {number} [orderIndex] Order index of the callback.
   *                              If > 0, the callback will be added after the others, for example, with an index of 1, the callback will be added before the ones with an index of 2, 3, etc., but after the ones with an index of 0 and lower.
   *                              If < 0, the callback will be added before the others, for example, with an index of -1, the callback will be added after the ones with an index of -2, -3, etc., but before the ones with an index of 0 and higher.
   *                              If 0 or no order index is provided, the callback will be added between the "negative" and "positive" indexes.
   *
   * @example
   * ```js
   * Handsontable.hooks.once('beforeInit', myCallback, hotInstance);
   * ```
   */
  once(key, callback) {
    let context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    let orderIndex = arguments.length > 3 ? arguments[3] : void 0;
    if (Array.isArray(callback)) {
      arrayEach(callback, (c) => this.once(key, c, context));
    } else {
      callback.runOnce = true;
      this.add(key, callback, context, orderIndex);
    }
  }
  /**
   * Removes a listener from a hook with a given name. If the `context` argument is provided, it removes a listener from a local hook assigned to the given Handsontable instance.
   *
   * @see Core#removeHook
   * @param {string} key Hook/Event name.
   * @param {Function} callback Callback function (needs the be the function that was previously added to the hook).
   * @param {object} [context=null] Handsontable instance.
   * @returns {boolean} Returns `true` if hook was removed, `false` otherwise.
   *
   * @example
   * ```js
   * Handsontable.hooks.remove('beforeInit', myCallback);
   * ```
   */
  remove(key, callback) {
    let context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    const bucket = this.getBucket(context);
    if (typeof bucket[key] !== "undefined") {
      if (bucket[key].indexOf(callback) >= 0) {
        callback.skip = true;
        return true;
      }
    }
    return false;
  }
  /**
   * Checks whether there are any registered listeners for the provided hook name.
   * If the `context` parameter is provided, it only checks for listeners assigned to the given Handsontable instance.
   *
   * @param {string} key Hook name.
   * @param {object} [context=null] A Handsontable instance.
   * @returns {boolean} `true` for success, `false` otherwise.
   */
  has(key) {
    let context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    const bucket = this.getBucket(context);
    return !!(bucket[key] !== void 0 && bucket[key].length);
  }
  /**
   * Runs all local and global callbacks assigned to the hook identified by the `key` parameter.
   * It returns either a return value from the last called callback or the first parameter (`p1`) passed to the `run` function.
   *
   * @see Core#runHooks
   * @param {object} context Handsontable instance.
   * @param {string} key Hook/Event name.
   * @param {*} [p1] Parameter to be passed as an argument to the callback function.
   * @param {*} [p2] Parameter to be passed as an argument to the callback function.
   * @param {*} [p3] Parameter to be passed as an argument to the callback function.
   * @param {*} [p4] Parameter to be passed as an argument to the callback function.
   * @param {*} [p5] Parameter to be passed as an argument to the callback function.
   * @param {*} [p6] Parameter to be passed as an argument to the callback function.
   * @returns {*} Either a return value from the last called callback or `p1`.
   *
   * @example
   * ```js
   * Handsontable.hooks.run(hot, 'beforeInit');
   * ```
   */
  run(context, key, p1, p2, p3, p4, p5, p6) {
    {
      const globalHandlers = this.globalBucket[key];
      const length = globalHandlers ? globalHandlers.length : 0;
      let index2 = 0;
      if (length) {
        while (index2 < length) {
          if (!globalHandlers[index2] || globalHandlers[index2].skip) {
            index2 += 1;
            continue;
          }
          const res = fastCall(globalHandlers[index2], context, p1, p2, p3, p4, p5, p6);
          if (res !== void 0) {
            p1 = res;
          }
          if (globalHandlers[index2] && globalHandlers[index2].runOnce) {
            this.remove(key, globalHandlers[index2]);
          }
          index2 += 1;
        }
      }
    }
    {
      const localHandlers = this.getBucket(context)[key];
      const length = localHandlers ? localHandlers.length : 0;
      let index2 = 0;
      if (length) {
        while (index2 < length) {
          if (!localHandlers[index2] || localHandlers[index2].skip) {
            index2 += 1;
            continue;
          }
          const res = fastCall(localHandlers[index2], context, p1, p2, p3, p4, p5, p6);
          if (res !== void 0) {
            p1 = res;
          }
          if (localHandlers[index2] && localHandlers[index2].runOnce) {
            this.remove(key, localHandlers[index2], context);
          }
          index2 += 1;
        }
      }
    }
    return p1;
  }
  /**
   * Destroy all listeners connected to the context. If no context is provided, the global listeners will be destroyed.
   *
   * @param {object} [context=null] A Handsontable instance.
   * @example
   * ```js
   * // destroy the global listeners
   * Handsontable.hooks.destroy();
   *
   * // destroy the local listeners
   * Handsontable.hooks.destroy(hotInstance);
   * ```
   */
  destroy() {
    let context = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    objectEach(this.getBucket(context), (value, key, bucket) => bucket[key].length = 0);
  }
  /**
   * Registers a hook name (adds it to the list of the known hook names). Used by plugins.
   * It is not necessary to call register, but if you use it, your plugin hook will be used returned by
   * the `getRegistered` method. (which itself is used in the [demo](@/guides/getting-started/events-and-hooks/events-and-hooks.md)).
   *
   * @param {string} key The hook name.
   *
   * @example
   * ```js
   * Handsontable.hooks.register('myHook');
   * ```
   */
  register(key) {
    if (!this.isRegistered(key)) {
      REGISTERED_HOOKS.push(key);
    }
  }
  /**
   * Deregisters a hook name (removes it from the list of known hook names).
   *
   * @param {string} key The hook name.
   *
   * @example
   * ```js
   * Handsontable.hooks.deregister('myHook');
   * ```
   */
  deregister(key) {
    if (this.isRegistered(key)) {
      REGISTERED_HOOKS.splice(REGISTERED_HOOKS.indexOf(key), 1);
    }
  }
  /**
   * Returns a boolean value depending on if a hook by such name has been removed or deprecated.
   *
   * @param {string} hookName The hook name to check.
   * @returns {boolean} Returns `true` if the provided hook name was marked as deprecated or
   * removed from API, `false` otherwise.
   * @example
   * ```js
   * Handsontable.hooks.isDeprecated('skipLengthCache');
   *
   * // Results:
   * true
   * ```
   */
  isDeprecated(hookName) {
    return DEPRECATED_HOOKS.has(hookName) || REMOVED_HOOKS.has(hookName);
  }
  /**
   * Returns a boolean depending on if a hook by such name has been registered.
   *
   * @param {string} hookName The hook name to check.
   * @returns {boolean} `true` for success, `false` otherwise.
   * @example
   * ```js
   * Handsontable.hooks.isRegistered('beforeInit');
   *
   * // Results:
   * true
   * ```
   */
  isRegistered(hookName) {
    return REGISTERED_HOOKS.indexOf(hookName) >= 0;
  }
  /**
   * Returns an array of registered hooks.
   *
   * @returns {Array} An array of registered hooks.
   *
   * @example
   * ```js
   * Handsontable.hooks.getRegistered();
   *
   * // Results:
   * [
   * ...
   *   'beforeInit',
   *   'beforeRender',
   *   'beforeSetRangeEnd',
   *   'beforeDrawBorders',
   *   'beforeChange',
   * ...
   * ]
   * ```
   */
  getRegistered() {
    return REGISTERED_HOOKS;
  }
  /**
   * Sets the order index of the callback in the bucket object.
   *
   * @private
   * @param {object} bucket The bucket object.
   * @param {string} key Hook name.
   * @param {Function} callback Callback function.
   * @param {number|undefined} orderIndex Order index of the callback.
   */
  setCallbackOrderIndex(bucket, key, callback, orderIndex) {
    const normalizedOrderIndex = Number.isInteger(orderIndex) ? orderIndex : 0;
    const orderMap = this.getCallbackOrderMap(bucket, key);
    orderMap.set(normalizedOrderIndex, [...orderMap.get(normalizedOrderIndex) || [], callback]);
  }
  /**
   * Reorders the callbacks in the bucket object by their order index.
   *
   * @private
   * @param {objcet} bucket The bucket object.
   * @param {string} key Hook name.
   */
  orderBucketByOrderIndex(bucket, key) {
    const orderMap = this.getCallbackOrderMap(bucket, key);
    if (orderMap === void 0 || orderMap.size === 0 || orderMap.size === 1 && orderMap.has(0)) {
      return;
    }
    bucket[key] = [...orderMap].sort((a, b) => a[0] - b[0]).flatMap((_ref) => {
      let [, callbacks] = _ref;
      return callbacks;
    });
  }
  /**
   * Extends the bucket object with the order property.
   *
   * @private
   * @param {object} bucket The bucket object.
   * @param {string} hook The hook name.
   */
  initOrderMap(bucket, hook) {
    if (!callbackOrder.has(bucket)) {
      callbackOrder.set(bucket, []);
    }
    callbackOrder.get(bucket)[hook] = /* @__PURE__ */ new Map();
  }
  /**
   * Returns the order map for the provided hook.
   *
   * @private
   * @param {object} bucket The bucket object.
   * @param {string} hook The hook name.
   * @returns {Map<number, Array<Function>>} Returns the order map for the provided hook.
   */
  getCallbackOrderMap(bucket, hook) {
    return callbackOrder.get(bucket)[hook];
  }
};
var globalSingleton = new Hooks();
function getGlobalSingleton() {
  return globalSingleton;
}
var pluginHooks_default = Hooks;

// node_modules/handsontable/utils/staticRegister.mjs
var collection = /* @__PURE__ */ new Map();
function staticRegister() {
  let namespace = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "common";
  if (!collection.has(namespace)) {
    collection.set(namespace, /* @__PURE__ */ new Map());
  }
  const subCollection = collection.get(namespace);
  function register5(name, item) {
    subCollection.set(name, item);
  }
  function getItem5(name) {
    return subCollection.get(name);
  }
  function hasItem5(name) {
    return subCollection.has(name);
  }
  function getNames5() {
    return [...subCollection.keys()];
  }
  function getValues5() {
    return [...subCollection.values()];
  }
  return {
    register: register5,
    getItem: getItem5,
    hasItem: hasItem5,
    getNames: getNames5,
    getValues: getValues5
  };
}

// node_modules/handsontable/editors/registry.mjs
var registeredEditorClasses = /* @__PURE__ */ new WeakMap();
var {
  register,
  getItem,
  hasItem,
  getNames,
  getValues
} = staticRegister("editors");
function RegisteredEditor(editorClass) {
  const instances = {};
  const Clazz = editorClass;
  this.getConstructor = function() {
    return editorClass;
  };
  this.getInstance = function(hotInstance) {
    if (!(hotInstance.guid in instances)) {
      instances[hotInstance.guid] = new Clazz(hotInstance);
    }
    return instances[hotInstance.guid];
  };
  pluginHooks_default.getSingleton().add("afterDestroy", function() {
    instances[this.guid] = null;
  });
}
function _getEditorInstance(name, hotInstance) {
  let editor;
  if (typeof name === "function") {
    if (!registeredEditorClasses.get(name)) {
      _register(null, name);
    }
    editor = registeredEditorClasses.get(name);
  } else if (typeof name === "string") {
    editor = getItem(name);
  } else {
    throw Error('Only strings and functions can be passed as "editor" parameter');
  }
  if (!editor) {
    throw Error(`No editor registered under name "${name}"`);
  }
  return editor.getInstance(hotInstance);
}
function _getItem(name) {
  if (typeof name === "function") {
    return name;
  }
  if (!hasItem(name)) {
    throw Error(`No registered editor found under "${name}" name`);
  }
  return getItem(name).getConstructor();
}
function _register(name, editorClass) {
  if (name && typeof name !== "string") {
    editorClass = name;
    name = editorClass.EDITOR_TYPE;
  }
  const editorWrapper = new RegisteredEditor(editorClass);
  if (typeof name === "string") {
    register(name, editorWrapper);
  }
  registeredEditorClasses.set(editorClass, editorWrapper);
}

// node_modules/handsontable/helpers/number.mjs
function isNumeric(value) {
  let additionalDelimiters = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const type = typeof value;
  if (type === "number") {
    return !isNaN(value) && isFinite(value);
  } else if (type === "string") {
    if (value.length === 0) {
      return false;
    } else if (value.length === 1) {
      return /\d/.test(value);
    }
    const delimiter = Array.from(/* @__PURE__ */ new Set([".", ...additionalDelimiters])).map((d) => `\\${d}`).join("|");
    return new RegExp(`^[+-]?(((${delimiter})?\\d+((${delimiter})\\d+)?(e[+-]?\\d+)?)|(0x[a-f\\d]+))$`, "i").test(value.trim());
  } else if (type === "object") {
    return !!value && typeof value.valueOf() === "number" && !(value instanceof Date);
  }
  return false;
}
function isNumericLike(value) {
  return isNumeric(value, [","]);
}
function rangeEach(rangeFrom, rangeTo, iteratee) {
  let index2 = -1;
  if (typeof rangeTo === "function") {
    iteratee = rangeTo;
    rangeTo = rangeFrom;
  } else {
    index2 = rangeFrom - 1;
  }
  while (++index2 <= rangeTo) {
    if (iteratee(index2) === false) {
      break;
    }
  }
}
function rangeEachReverse(rangeFrom, rangeTo, iteratee) {
  let index2 = rangeFrom + 1;
  if (typeof rangeTo === "function") {
    iteratee = rangeTo;
    rangeTo = 0;
  }
  while (--index2 >= rangeTo) {
    if (iteratee(index2) === false) {
      break;
    }
  }
}
function valueAccordingPercent(value, percent) {
  percent = parseInt(percent.toString().replace("%", ""), 10);
  percent = isNaN(percent) ? 0 : percent;
  return parseInt(value * percent / 100, 10);
}
function clamp(value, minValue, maxValue) {
  if (Math.min(value, minValue) === value) {
    return minValue;
  } else if (Math.max(value, maxValue) === value) {
    return maxValue;
  }
  return value;
}

// node_modules/handsontable/utils/dataStructures/priorityMap.mjs
var ASC = "asc";
var DESC = "desc";
var ORDER_MAP = /* @__PURE__ */ new Map([[ASC, [-1, 1]], [DESC, [1, -1]]]);
var DEFAULT_ERROR_PRIORITY_EXISTS = (priority) => `The priority '${priority}' is already declared in a map.`;
var DEFAULT_ERROR_PRIORITY_NAN = (priority) => `The priority '${priority}' is not a number.`;
function createPriorityMap() {
  let {
    errorPriorityExists,
    errorPriorityNaN
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const priorityMap = /* @__PURE__ */ new Map();
  errorPriorityExists = isFunction(errorPriorityExists) ? errorPriorityExists : DEFAULT_ERROR_PRIORITY_EXISTS;
  errorPriorityNaN = isFunction(errorPriorityNaN) ? errorPriorityNaN : DEFAULT_ERROR_PRIORITY_NAN;
  function addItem(priority, item) {
    if (!isNumeric(priority)) {
      throw new Error(errorPriorityNaN(priority));
    }
    if (priorityMap.has(priority)) {
      throw new Error(errorPriorityExists(priority));
    }
    priorityMap.set(priority, item);
  }
  function getItems() {
    let order = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ASC;
    const [left, right] = ORDER_MAP.get(order) || ORDER_MAP.get(ASC);
    return [...priorityMap].sort((a, b) => a[0] < b[0] ? left : right).map((item) => item[1]);
  }
  return {
    addItem,
    getItems
  };
}

// node_modules/handsontable/utils/dataStructures/uniqueMap.mjs
var DEFAULT_ERROR_ID_EXISTS = (id) => `The id '${id}' is already declared in a map.`;
function createUniqueMap() {
  let {
    errorIdExists
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const uniqueMap = /* @__PURE__ */ new Map();
  errorIdExists = isFunction(errorIdExists) ? errorIdExists : DEFAULT_ERROR_ID_EXISTS;
  function addItem(id, item) {
    if (hasItem5(id)) {
      throw new Error(errorIdExists(id));
    }
    uniqueMap.set(id, item);
  }
  function removeItem(id) {
    return uniqueMap.delete(id);
  }
  function clear() {
    uniqueMap.clear();
  }
  function getId(item) {
    const [itemId] = getItems().find((_ref) => {
      let [id, element] = _ref;
      if (item === element) {
        return id;
      }
      return false;
    }) || [null];
    return itemId;
  }
  function getItem5(id) {
    return uniqueMap.get(id);
  }
  function getItems() {
    return [...uniqueMap];
  }
  function hasItem5(id) {
    return uniqueMap.has(id);
  }
  return {
    addItem,
    clear,
    getId,
    getItem: getItem5,
    getItems,
    hasItem: hasItem5,
    removeItem
  };
}

// node_modules/handsontable/utils/dataStructures/uniqueSet.mjs
var DEFAULT_ERROR_ITEM_EXISTS = (item) => `'${item}' value is already declared in a unique set.`;
function createUniqueSet() {
  let {
    errorItemExists
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const uniqueSet = /* @__PURE__ */ new Set();
  errorItemExists = isFunction(errorItemExists) ? errorItemExists : DEFAULT_ERROR_ITEM_EXISTS;
  function addItem(item) {
    if (uniqueSet.has(item)) {
      throw new Error(errorItemExists(item));
    }
    uniqueSet.add(item);
  }
  function getItems() {
    return [...uniqueSet];
  }
  function clear() {
    uniqueSet.clear();
  }
  return {
    addItem,
    clear,
    getItems
  };
}

// node_modules/handsontable/plugins/registry.mjs
var ERROR_PLUGIN_REGISTERED = (pluginName) => `There is already registered "${pluginName}" plugin.`;
var ERROR_PRIORITY_REGISTERED = (priority) => `There is already registered plugin on priority "${priority}".`;
var ERROR_PRIORITY_NAN = (priority) => `The priority "${priority}" is not a number.`;
var priorityPluginsQueue = createPriorityMap({
  errorPriorityExists: ERROR_PRIORITY_REGISTERED,
  errorPriorityNaN: ERROR_PRIORITY_NAN
});
var uniquePluginsQueue = createUniqueSet({
  errorItemExists: ERROR_PLUGIN_REGISTERED
});
var uniquePluginsList = createUniqueMap({
  errorIdExists: ERROR_PLUGIN_REGISTERED
});
function getPluginsNames() {
  return [...priorityPluginsQueue.getItems(), ...uniquePluginsQueue.getItems()];
}
function getPlugin(pluginName) {
  const unifiedPluginName = toUpperCaseFirst(pluginName);
  return uniquePluginsList.getItem(unifiedPluginName);
}
function hasPlugin(pluginName) {
  return getPlugin(pluginName) ? true : false;
}
function registerPlugin(pluginName, pluginClass, priority) {
  [pluginName, pluginClass, priority] = unifyPluginArguments(pluginName, pluginClass, priority);
  if (getPlugin(pluginName) === void 0) {
    _registerPlugin(pluginName, pluginClass, priority);
  }
}
function _registerPlugin(pluginName, pluginClass, priority) {
  const unifiedPluginName = toUpperCaseFirst(pluginName);
  if (uniquePluginsList.hasItem(unifiedPluginName)) {
    throw new Error(ERROR_PLUGIN_REGISTERED(unifiedPluginName));
  }
  if (priority === void 0) {
    uniquePluginsQueue.addItem(unifiedPluginName);
  } else {
    priorityPluginsQueue.addItem(priority, unifiedPluginName);
  }
  uniquePluginsList.addItem(unifiedPluginName, pluginClass);
}
function unifyPluginArguments(pluginName, pluginClass, priority) {
  if (typeof pluginName === "function") {
    pluginClass = pluginName;
    pluginName = pluginClass.PLUGIN_KEY;
    priority = pluginClass.PLUGIN_PRIORITY;
  }
  return [pluginName, pluginClass, priority];
}

// node_modules/handsontable/renderers/registry.mjs
var {
  register: register2,
  getItem: getItem2,
  hasItem: hasItem2,
  getNames: getNames2,
  getValues: getValues2
} = staticRegister("renderers");
function _getItem2(name) {
  if (typeof name === "function") {
    return name;
  }
  if (!hasItem2(name)) {
    throw Error(`No registered renderer found under "${name}" name`);
  }
  return getItem2(name);
}
function _register2(name, renderer) {
  if (typeof name !== "string") {
    renderer = name;
    name = renderer.RENDERER_TYPE;
  }
  register2(name, renderer);
}

// node_modules/handsontable/validators/registry.mjs
var {
  register: register3,
  getItem: getItem3,
  hasItem: hasItem3,
  getNames: getNames3,
  getValues: getValues3
} = staticRegister("validators");
function _getItem3(name) {
  if (typeof name === "function") {
    return name;
  }
  if (!hasItem3(name)) {
    throw Error(`No registered validator found under "${name}" name`);
  }
  return getItem3(name);
}
function _register3(name, validator) {
  if (typeof name !== "string") {
    validator = name;
    name = validator.VALIDATOR_TYPE;
  }
  register3(name, validator);
}

// node_modules/handsontable/3rdparty/walkontable/src/cell/coords.mjs
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive2(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _classPrivateFieldGet(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldSet(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _isRtl = /* @__PURE__ */ new WeakMap();
var CellCoords = class _CellCoords {
  constructor(row, column) {
    let isRtl = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    _defineProperty2(this, "row", null);
    _defineProperty2(this, "col", null);
    _classPrivateFieldInitSpec(this, _isRtl, false);
    _classPrivateFieldSet(_isRtl, this, isRtl);
    if (typeof row !== "undefined" && typeof column !== "undefined") {
      this.row = row;
      this.col = column;
    }
  }
  /**
   * Checks if the coordinates in your `CellCoords` instance are valid
   * in the context of given table parameters.
   *
   * The `row` index:
   * - Must be an integer.
   * - Must be higher than the number of column headers in the table.
   * - Must be lower than the total number of rows in the table.
   *
   * The `col` index:
   * - Must be an integer.
   * - Must be higher than the number of row headers in the table.
   * - Must be lower than the total number of columns in the table.
   *
   * @param {object} [tableParams] An object with a defined table size.
   * @param {number} [tableParams.countRows=0] The total number of rows.
   * @param {number} [tableParams.countCols=0] The total number of columns.
   * @param {number} [tableParams.countRowHeaders=0] A number of row headers.
   * @param {number} [tableParams.countColHeaders=0] A number of column headers.
   * @returns {boolean} `true`: The coordinates are valid.
   */
  isValid(tableParams) {
    const {
      countRows,
      countCols,
      countRowHeaders,
      countColHeaders
    } = __spreadValues({
      countRows: 0,
      countCols: 0,
      countRowHeaders: 0,
      countColHeaders: 0
    }, tableParams);
    if (!Number.isInteger(this.row) || !Number.isInteger(this.col)) {
      return false;
    }
    if (this.row < -countColHeaders || this.col < -countRowHeaders) {
      return false;
    }
    if (this.row >= countRows || this.col >= countCols) {
      return false;
    }
    return true;
  }
  /**
   * Checks if another set of coordinates (`coords`)
   * is equal to the coordinates in your `CellCoords` instance.
   *
   * @param {CellCoords} coords Coordinates to check.
   * @returns {boolean}
   */
  isEqual(coords) {
    if (coords === this) {
      return true;
    }
    return this.row === coords.row && this.col === coords.col;
  }
  /**
   * Checks if the coordinates point to the headers range. If one of the axis (row or col) point to
   * the header (negative value) then method returns `true`.
   *
   * @returns {boolean}
   */
  isHeader() {
    return !this.isCell();
  }
  /**
   * Checks if the coordinates point to the cells range. If all axis (row and col) point to
   * the cell (positive value) then method returns `true`.
   *
   * @returns {boolean}
   */
  isCell() {
    return this.row >= 0 && this.col >= 0;
  }
  /**
   * Checks if the coordinates runs in RTL mode.
   *
   * @returns {boolean}
   */
  isRtl() {
    return _classPrivateFieldGet(_isRtl, this);
  }
  /**
   * Checks if another set of coordinates (`testedCoords`)
   * is south-east of the coordinates in your `CellCoords` instance.
   *
   * @param {CellCoords} testedCoords Coordinates to check.
   * @returns {boolean}
   */
  isSouthEastOf(testedCoords) {
    return this.row >= testedCoords.row && (_classPrivateFieldGet(_isRtl, this) ? this.col <= testedCoords.col : this.col >= testedCoords.col);
  }
  /**
   * Checks if another set of coordinates (`testedCoords`)
   * is north-west of the coordinates in your `CellCoords` instance.
   *
   * @param {CellCoords} testedCoords Coordinates to check.
   * @returns {boolean}
   */
  isNorthWestOf(testedCoords) {
    return this.row <= testedCoords.row && (_classPrivateFieldGet(_isRtl, this) ? this.col >= testedCoords.col : this.col <= testedCoords.col);
  }
  /**
   * Checks if another set of coordinates (`testedCoords`)
   * is south-west of the coordinates in your `CellCoords` instance.
   *
   * @param {CellCoords} testedCoords Coordinates to check.
   * @returns {boolean}
   */
  isSouthWestOf(testedCoords) {
    return this.row >= testedCoords.row && (_classPrivateFieldGet(_isRtl, this) ? this.col >= testedCoords.col : this.col <= testedCoords.col);
  }
  /**
   * Checks if another set of coordinates (`testedCoords`)
   * is north-east of the coordinates in your `CellCoords` instance.
   *
   * @param {CellCoords} testedCoords Coordinates to check.
   * @returns {boolean}
   */
  isNorthEastOf(testedCoords) {
    return this.row <= testedCoords.row && (_classPrivateFieldGet(_isRtl, this) ? this.col <= testedCoords.col : this.col >= testedCoords.col);
  }
  /**
   * Normalizes the coordinates in your `CellCoords` instance to the nearest valid position.
   *
   * Coordinates that point to headers (negative values) are normalized to `0`.
   *
   * @returns {CellCoords}
   */
  normalize() {
    this.row = this.row === null ? this.row : Math.max(this.row, 0);
    this.col = this.col === null ? this.col : Math.max(this.col, 0);
    return this;
  }
  /**
   * Assigns the coordinates from another `CellCoords` instance (or compatible literal object)
   * to your `CellCoords` instance.
   *
   * @param {CellCoords | { row: number | undefined, col: number | undefined }} coords The CellCoords
   * instance or compatible literal object.
   * @returns {CellCoords}
   */
  assign(coords) {
    if (Number.isInteger(coords === null || coords === void 0 ? void 0 : coords.row)) {
      this.row = coords.row;
    }
    if (Number.isInteger(coords === null || coords === void 0 ? void 0 : coords.col)) {
      this.col = coords.col;
    }
    if (coords instanceof _CellCoords) {
      _classPrivateFieldSet(_isRtl, this, coords.isRtl());
    }
    return this;
  }
  /**
   * Clones your `CellCoords` instance.
   *
   * @returns {CellCoords}
   */
  clone() {
    return new _CellCoords(this.row, this.col, _classPrivateFieldGet(_isRtl, this));
  }
  /**
   * Converts your `CellCoords` instance into an object literal with `row` and `col` properties.
   *
   * @returns {{row: number, col: number}} An object literal with `row` and `col` properties.
   */
  toObject() {
    return {
      row: this.row,
      col: this.col
    };
  }
};
var coords_default = CellCoords;

// node_modules/handsontable/3rdparty/walkontable/src/cell/range.mjs
function _classPrivateFieldInitSpec2(obj, privateMap, value) {
  _checkPrivateRedeclaration2(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration2(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty3(obj, key, value) {
  key = _toPropertyKey3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive3(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand2(s, a));
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand2(s, a), r), r;
}
function _assertClassBrand2(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _isRtl2 = /* @__PURE__ */ new WeakMap();
var CellRange = class _CellRange {
  constructor(highlight) {
    let from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : highlight;
    let to = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : highlight;
    let isRtl = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    _defineProperty3(this, "highlight", null);
    _defineProperty3(this, "from", null);
    _defineProperty3(this, "to", null);
    _classPrivateFieldInitSpec2(this, _isRtl2, false);
    this.highlight = highlight.clone();
    this.from = from.clone();
    this.to = to.clone();
    _classPrivateFieldSet2(_isRtl2, this, isRtl);
  }
  /**
   * Highlights cell selection at the `coords` coordinates.
   *
   * @param {CellCoords} coords Coordinates to use.
   * @returns {CellRange}
   */
  setHighlight(coords) {
    this.highlight = coords.clone();
    return this;
  }
  /**
   * Sets the `coords` coordinates as the start of your range.
   *
   * @param {CellCoords} coords Coordinates to use.
   * @returns {CellRange}
   */
  setFrom(coords) {
    this.from = coords.clone();
    return this;
  }
  /**
   * Sets the `coords` coordinates as the end of your range.
   *
   * @param {CellCoords} coords Coordinates to use.
   * @returns {CellRange}
   */
  setTo(coords) {
    this.to = coords.clone();
    return this;
  }
  /**
   * Checks if the coordinates in your `CellRange` instance are valid
   * in the context of given table parameters.
   *
   * See the [`isValid()`](@/api/cellCoords.md#isvalid) method of the [`CellCoords`](@/api/cellCoords.md) class.
   *
   * @param {object} tableParams An object with a defined table size.
   * @param {number} tableParams.countRows The total number of rows.
   * @param {number} tableParams.countCols The total number of columns.
   * @param {number} tableParams.countRowHeaders A number of row headers.
   * @param {number} tableParams.countColHeaders A number of column headers.
   * @returns {boolean}
   */
  isValid(tableParams) {
    return this.from.isValid(tableParams) && this.to.isValid(tableParams);
  }
  /**
   * Checks if your range is just a single cell or header.
   *
   * @returns {boolean}
   */
  isSingle() {
    return this.isSingleCell() || this.isSingleHeader();
  }
  /**
   * Checks if your range is just a single cell.
   *
   * @returns {boolean}
   */
  isSingleCell() {
    return this.from.row >= 0 && this.from.row === this.to.row && this.from.col >= 0 && this.from.col === this.to.col;
  }
  /**
   * Checks if your range is just a single header.
   *
   * @returns {boolean}
   */
  isSingleHeader() {
    return (this.from.row < 0 || this.from.col < 0) && this.from.row === this.to.row && this.from.col === this.to.col;
  }
  /**
   * Checks if your range covers only headers range (negative coordinates, without any cells).
   *
   * @returns {boolean}
   */
  isHeader() {
    if (this.from.isHeader() && this.to.isHeader()) {
      return true;
    }
    return this.from.col < 0 && this.to.col < 0 || this.from.row < 0 && this.to.row < 0;
  }
  /**
   * Checks if your range overlaps headers range (negative coordinates).
   *
   * @returns {boolean}
   */
  containsHeaders() {
    return this.from.isHeader() || this.to.isHeader();
  }
  /**
   * Returns the height of your range (as a number of rows, including row headers).
   *
   * @returns {number}
   */
  getOuterHeight() {
    return Math.max(this.from.row, this.to.row) - Math.min(this.from.row, this.to.row) + 1;
  }
  /**
   * Returns the width of your range (as a number of columns, including column headers).
   *
   * @returns {number}
   */
  getOuterWidth() {
    return Math.max(this.from.col, this.to.col) - Math.min(this.from.col, this.to.col) + 1;
  }
  /**
   * Returns the height of your range (as a number of rows, excluding row headers).
   *
   * @returns {number}
   */
  getHeight() {
    if (this.from.row < 0 && this.to.row < 0) {
      return 0;
    }
    const fromRow = Math.max(this.from.row, 0);
    const toRow = Math.max(this.to.row, 0);
    return Math.max(fromRow, toRow) - Math.min(fromRow, toRow) + 1;
  }
  /**
   * Returns the width of your range (as a number of columns, excluding column headers).
   *
   * @returns {number}
   */
  getWidth() {
    if (this.from.col < 0 && this.to.col < 0) {
      return 0;
    }
    const fromCol = Math.max(this.from.col, 0);
    const toCol = Math.max(this.to.col, 0);
    return Math.max(fromCol, toCol) - Math.min(fromCol, toCol) + 1;
  }
  /**
   * Returns the number of cells within your range (excluding column and row headers).
   *
   * @returns {number}
   */
  getCellsCount() {
    return this.getWidth() * this.getHeight();
  }
  /**
   * Checks if another set of coordinates (`cellCoords`)
   * is within the `from` and `to` coordinates of your range.
   *
   * @param {CellCoords} cellCoords Coordinates to check.
   * @returns {boolean}
   */
  includes(cellCoords) {
    const {
      row,
      col
    } = cellCoords;
    const topStart = this.getOuterTopStartCorner();
    const bottomEnd = this.getOuterBottomEndCorner();
    return topStart.row <= row && bottomEnd.row >= row && topStart.col <= col && bottomEnd.col >= col;
  }
  /**
   * Checks if another range (`cellRange`) is within your range.
   *
   * @param {CellRange} cellRange A range to check.
   * @returns {boolean}
   */
  includesRange(cellRange) {
    return this.includes(cellRange.getOuterTopStartCorner()) && this.includes(cellRange.getOuterBottomEndCorner());
  }
  /**
   * Checks if another range (`cellRange`) is equal to your range.
   *
   * @param {CellRange} cellRange A range to check.
   * @returns {boolean}
   */
  isEqual(cellRange) {
    return Math.min(this.from.row, this.to.row) === Math.min(cellRange.from.row, cellRange.to.row) && Math.max(this.from.row, this.to.row) === Math.max(cellRange.from.row, cellRange.to.row) && Math.min(this.from.col, this.to.col) === Math.min(cellRange.from.col, cellRange.to.col) && Math.max(this.from.col, this.to.col) === Math.max(cellRange.from.col, cellRange.to.col);
  }
  /**
   * Checks if another range (`cellRange`) overlaps your range.
   *
   * Range A overlaps range B if the intersection of A and B (or B and A) is not empty.
   *
   * @param {CellRange} cellRange A range to check.
   * @returns {boolean}
   */
  overlaps(cellRange) {
    return cellRange.isSouthEastOf(this.getOuterTopLeftCorner()) && cellRange.isNorthWestOf(this.getOuterBottomRightCorner());
  }
  /**
   * Checks if coordinates point is south-east of your range.
   *
   * @param {CellCoords} cellCoords Coordinates to check.
   * @returns {boolean}
   */
  isSouthEastOf(cellCoords) {
    return this.getOuterTopLeftCorner().isSouthEastOf(cellCoords) || this.getOuterBottomRightCorner().isSouthEastOf(cellCoords);
  }
  /**
   * Checks if coordinates point is north-west of your range.
   *
   * @param {CellRange} cellCoords Coordinates to check.
   * @returns {boolean}
   */
  isNorthWestOf(cellCoords) {
    return this.getOuterTopLeftCorner().isNorthWestOf(cellCoords) || this.getOuterBottomRightCorner().isNorthWestOf(cellCoords);
  }
  /**
   * Checks if another range (`cellRange`) overlaps your range horizontally.
   *
   * For example: returns `true` if the last column of your range is `5`
   * and the first column of the `cellRange` range is `3`.
   *
   * @param {CellRange} cellRange A range to check.
   * @returns {boolean}
   */
  isOverlappingHorizontally(cellRange) {
    return this.getOuterTopEndCorner().col >= cellRange.getOuterTopStartCorner().col && this.getOuterTopEndCorner().col <= cellRange.getOuterTopEndCorner().col || this.getOuterTopStartCorner().col <= cellRange.getOuterTopEndCorner().col && this.getOuterTopStartCorner().col >= cellRange.getOuterTopStartCorner().col;
  }
  /**
   * Checks if another range (`cellRange`) overlaps your range vertically.
   *
   * For example: returns `true` if the last row of your range is `5`
   * and the first row of the `cellRange` range is `3`.
   *
   * @param {CellRange} cellRange A range to check.
   * @returns {boolean}
   */
  isOverlappingVertically(cellRange) {
    return this.getOuterBottomStartCorner().row >= cellRange.getOuterTopRightCorner().row && this.getOuterBottomStartCorner().row <= cellRange.getOuterBottomStartCorner().row || this.getOuterTopEndCorner().row <= cellRange.getOuterBottomStartCorner().row && this.getOuterTopEndCorner().row >= cellRange.getOuterTopRightCorner().row;
  }
  /**
   * Adds a cell to your range, at `cellCoords` coordinates.
   *
   * The `cellCoords` coordinates must exceed a corner of your range.
   *
   * @param {CellCoords} cellCoords A new cell's coordinates.
   * @returns {boolean}
   */
  expand(cellCoords) {
    const topStart = this.getOuterTopStartCorner();
    const bottomEnd = this.getOuterBottomEndCorner();
    if (cellCoords.row < topStart.row || cellCoords.col < topStart.col || cellCoords.row > bottomEnd.row || cellCoords.col > bottomEnd.col) {
      this.from = this._createCellCoords(Math.min(topStart.row, cellCoords.row), Math.min(topStart.col, cellCoords.col));
      this.to = this._createCellCoords(Math.max(bottomEnd.row, cellCoords.row), Math.max(bottomEnd.col, cellCoords.col));
      return true;
    }
    return false;
  }
  /**
   * Expand your range with another range (`expandingRange`).
   *
   * @param {CellRange} expandingRange A new range.
   * @param {boolean} [changeDirection=true] If `true`, the direction of your range is changed to the direction
   * of the `expandingRange` range.
   * @returns {boolean}
   */
  expandByRange(expandingRange) {
    let changeDirection = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (this.includesRange(expandingRange) || !this.overlaps(expandingRange)) {
      return false;
    }
    const topStart = this.getOuterTopStartCorner();
    const bottomEnd = this.getOuterBottomEndCorner();
    const initialDirection = this.getDirection();
    const expandingTopStart = expandingRange.getOuterTopStartCorner();
    const expandingBottomEnd = expandingRange.getOuterBottomEndCorner();
    const resultTopRow = Math.min(topStart.row, expandingTopStart.row);
    const resultTopCol = Math.min(topStart.col, expandingTopStart.col);
    const resultBottomRow = Math.max(bottomEnd.row, expandingBottomEnd.row);
    const resultBottomCol = Math.max(bottomEnd.col, expandingBottomEnd.col);
    const finalFrom = this._createCellCoords(resultTopRow, resultTopCol);
    const finalTo = this._createCellCoords(resultBottomRow, resultBottomCol);
    this.from = finalFrom;
    this.to = finalTo;
    this.setDirection(initialDirection);
    if (changeDirection) {
      if (this.highlight.row === this.getOuterBottomRightCorner().row && this.getVerticalDirection() === "N-S") {
        this.flipDirectionVertically();
      }
      if (this.highlight.col === this.getOuterTopRightCorner().col && this.getHorizontalDirection() === "W-E") {
        this.flipDirectionHorizontally();
      }
    }
    return true;
  }
  /**
   * Gets the direction of the selection.
   *
   * @returns {string} Returns one of the values: `'NW-SE'`, `'NE-SW'`, `'SE-NW'`, `'SW-NE'`.
   */
  getDirection() {
    if (this.from.isNorthWestOf(this.to)) {
      return "NW-SE";
    } else if (this.from.isNorthEastOf(this.to)) {
      return "NE-SW";
    } else if (this.from.isSouthEastOf(this.to)) {
      return "SE-NW";
    } else if (this.from.isSouthWestOf(this.to)) {
      return "SW-NE";
    }
  }
  /**
   * Sets the direction of the selection.
   *
   * @param {string} direction One of the values: `'NW-SE'`, `'NE-SW'`, `'SE-NW'`, `'SW-NE'`.
   */
  setDirection(direction) {
    switch (direction) {
      case "NW-SE":
        [this.from, this.to] = [this.getOuterTopLeftCorner(), this.getOuterBottomRightCorner()];
        break;
      case "NE-SW":
        [this.from, this.to] = [this.getOuterTopRightCorner(), this.getOuterBottomLeftCorner()];
        break;
      case "SE-NW":
        [this.from, this.to] = [this.getOuterBottomRightCorner(), this.getOuterTopLeftCorner()];
        break;
      case "SW-NE":
        [this.from, this.to] = [this.getOuterBottomLeftCorner(), this.getOuterTopRightCorner()];
        break;
      default:
        break;
    }
  }
  /**
   * Gets the vertical direction of the selection.
   *
   * @returns {string} Returns one of the values: `N-S` (north->south), `S-N` (south->north).
   */
  getVerticalDirection() {
    return ["NE-SW", "NW-SE"].indexOf(this.getDirection()) > -1 ? "N-S" : "S-N";
  }
  /**
   * Gets the horizontal direction of the selection.
   *
   * @returns {string} Returns one of the values: `W-E` (west->east), `E-W` (east->west).
   */
  getHorizontalDirection() {
    return ["NW-SE", "SW-NE"].indexOf(this.getDirection()) > -1 ? "W-E" : "E-W";
  }
  /**
   * Flips the direction of your range vertically (e.g., `NW-SE` changes to `SW-NE`).
   */
  flipDirectionVertically() {
    const direction = this.getDirection();
    switch (direction) {
      case "NW-SE":
        this.setDirection("SW-NE");
        break;
      case "NE-SW":
        this.setDirection("SE-NW");
        break;
      case "SE-NW":
        this.setDirection("NE-SW");
        break;
      case "SW-NE":
        this.setDirection("NW-SE");
        break;
      default:
        break;
    }
  }
  /**
   * Flips the direction of your range horizontally (e.g., `NW-SE` changes to `NE-SW`).
   */
  flipDirectionHorizontally() {
    const direction = this.getDirection();
    switch (direction) {
      case "NW-SE":
        this.setDirection("NE-SW");
        break;
      case "NE-SW":
        this.setDirection("NW-SE");
        break;
      case "SE-NW":
        this.setDirection("SW-NE");
        break;
      case "SW-NE":
        this.setDirection("SE-NW");
        break;
      default:
        break;
    }
  }
  /**
   * Gets the top-left (in LTR) or top-right (in RTL) corner coordinates of your range.
   *
   * If the corner contains header coordinates (negative values),
   * the corner coordinates are normalized to `0`.
   *
   * @returns {CellCoords}
   */
  getTopStartCorner() {
    return this._createCellCoords(Math.min(this.from.row, this.to.row), Math.min(this.from.col, this.to.col)).normalize();
  }
  /**
   * Gets the top-left corner coordinates of your range,
   * both in the LTR and RTL layout direction.
   *
   * If the corner contains header coordinates (negative values),
   * the corner coordinates are normalized to `0`.
   *
   * @returns {CellCoords}
   */
  getTopLeftCorner() {
    return _classPrivateFieldGet2(_isRtl2, this) ? this.getTopEndCorner() : this.getTopStartCorner();
  }
  /**
   * Gets the bottom right (in LTR) or bottom left (in RTL) corner coordinates of your range.
   *
   * If the corner contains header coordinates (negative values),
   * the corner coordinates are normalized to `0`.
   *
   * @returns {CellCoords}
   */
  getBottomEndCorner() {
    return this._createCellCoords(Math.max(this.from.row, this.to.row), Math.max(this.from.col, this.to.col)).normalize();
  }
  /**
   * Gets the bottom right corner coordinates of your range,
   * both in the LTR and RTL layout direction.
   *
   * If the corner contains header coordinates (negative values),
   * the corner coordinates are normalized to `0`.
   *
   * @returns {CellCoords}
   */
  getBottomRightCorner() {
    return _classPrivateFieldGet2(_isRtl2, this) ? this.getBottomStartCorner() : this.getBottomEndCorner();
  }
  /**
   * Gets the top right (in LTR) or top left (in RTL) corner coordinates of your range.
   *
   * If the corner contains header coordinates (negative values),
   * the corner coordinates are normalized to `0`.
   *
   * @returns {CellCoords}
   */
  getTopEndCorner() {
    return this._createCellCoords(Math.min(this.from.row, this.to.row), Math.max(this.from.col, this.to.col)).normalize();
  }
  /**
   * Gets the top right corner coordinates of your range,
   * both in the LTR and RTL layout direction.
   *
   * If the corner contains header coordinates (negative values),
   * the corner coordinates are normalized to `0`.
   *
   * @returns {CellCoords}
   */
  getTopRightCorner() {
    return _classPrivateFieldGet2(_isRtl2, this) ? this.getTopStartCorner() : this.getTopEndCorner();
  }
  /**
   * Gets the bottom left (in LTR) or bottom right (in RTL) corner coordinates of your range.
   *
   * If the corner contains header coordinates (negative values),
   * the corner coordinates are normalized to `0`.
   *
   * @returns {CellCoords}
   */
  getBottomStartCorner() {
    return this._createCellCoords(Math.max(this.from.row, this.to.row), Math.min(this.from.col, this.to.col)).normalize();
  }
  /**
   * Gets the bottom left corner coordinates of your range,
   * both in the LTR and RTL layout direction.
   *
   * If the corner contains header coordinates (negative values),
   * the corner coordinates are normalized to `0`.
   *
   * @returns {CellCoords}
   */
  getBottomLeftCorner() {
    return _classPrivateFieldGet2(_isRtl2, this) ? this.getBottomEndCorner() : this.getBottomStartCorner();
  }
  /**
   * Gets the top left (in LTR) or top right (in RTL) corner coordinates of your range.
   *
   * If the corner contains header coordinates (negative values),
   * the top and start coordinates are pointed to that header.
   *
   * @returns {CellCoords}
   */
  getOuterTopStartCorner() {
    return this._createCellCoords(Math.min(this.from.row, this.to.row), Math.min(this.from.col, this.to.col));
  }
  /**
   * Gets the top left corner coordinates of your range,
   * both in the LTR and RTL layout direction.
   *
   * If the corner contains header coordinates (negative values),
   * the top and left coordinates are pointed to that header.
   *
   * @returns {CellCoords}
   */
  getOuterTopLeftCorner() {
    return _classPrivateFieldGet2(_isRtl2, this) ? this.getOuterTopEndCorner() : this.getOuterTopStartCorner();
  }
  /**
   * Gets the bottom right (in LTR) or bottom left (in RTL) corner coordinates of your range.
   *
   * If the corner contains header coordinates (negative values),
   * the top and start coordinates are pointed to that header.
   *
   * @returns {CellCoords}
   */
  getOuterBottomEndCorner() {
    return this._createCellCoords(Math.max(this.from.row, this.to.row), Math.max(this.from.col, this.to.col));
  }
  /**
   * Gets the bottom right corner coordinates of your range,
   * both in the LTR and RTL layout direction.
   *
   * If the corner contains header coordinates (negative values),
   * the top and left coordinates are pointed to that header.
   *
   * @returns {CellCoords}
   */
  getOuterBottomRightCorner() {
    return _classPrivateFieldGet2(_isRtl2, this) ? this.getOuterBottomStartCorner() : this.getOuterBottomEndCorner();
  }
  /**
   * Gets the top right (in LTR) or top left (in RTL) corner coordinates of your range.
   *
   * If the corner contains header coordinates (negative values),
   * the top and start coordinates are pointed to that header.
   *
   * @returns {CellCoords}
   */
  getOuterTopEndCorner() {
    return this._createCellCoords(Math.min(this.from.row, this.to.row), Math.max(this.from.col, this.to.col));
  }
  /**
   * Gets the top right corner coordinates of your range,
   * both in the LTR and RTL layout direction.
   *
   * If the corner contains header coordinates (negative values),
   * the top and left coordinates are pointed to that header.
   *
   * @returns {CellCoords}
   */
  getOuterTopRightCorner() {
    return _classPrivateFieldGet2(_isRtl2, this) ? this.getOuterTopStartCorner() : this.getOuterTopEndCorner();
  }
  /**
   * Gets the bottom left (in LTR) or bottom right (in RTL) corner coordinates of your range.
   *
   * If the corner contains header coordinates (negative values),
   * the top and start coordinates are pointed to that header.
   *
   * @returns {CellCoords}
   */
  getOuterBottomStartCorner() {
    return this._createCellCoords(Math.max(this.from.row, this.to.row), Math.min(this.from.col, this.to.col));
  }
  /**
   * Gets the bottom left corner coordinates of your range,
   * both in the LTR and RTL layout direction.
   *
   * If the corner contains header coordinates (negative values),
   * the top and left coordinates are pointed to that header.
   *
   * @returns {CellCoords}
   */
  getOuterBottomLeftCorner() {
    return _classPrivateFieldGet2(_isRtl2, this) ? this.getOuterBottomEndCorner() : this.getOuterBottomStartCorner();
  }
  /**
   * Checks if a set of coordinates (`coords`) matches one of the 4 corners of your range.
   *
   * @param {CellCoords} coords Coordinates to check.
   * @returns {boolean}
   */
  isCorner(coords) {
    return coords.isEqual(this.getOuterTopLeftCorner()) || coords.isEqual(this.getOuterTopRightCorner()) || coords.isEqual(this.getOuterBottomLeftCorner()) || coords.isEqual(this.getOuterBottomRightCorner());
  }
  /**
   * Gets the coordinates of a range corner opposite to the provided `coords`.
   *
   * For example: if the `coords` coordinates match the bottom-right corner of your range,
   * the coordinates of the top-left corner of your range are returned.
   *
   * @param {CellCoords} coords Coordinates to check.
   * @returns {CellCoords}
   */
  getOppositeCorner(coords) {
    if (!(coords instanceof coords_default)) {
      return false;
    }
    if (coords.isEqual(this.getOuterBottomEndCorner())) {
      return this.getOuterTopStartCorner();
    } else if (coords.isEqual(this.getOuterTopStartCorner())) {
      return this.getOuterBottomEndCorner();
    } else if (coords.isEqual(this.getOuterTopEndCorner())) {
      return this.getOuterBottomStartCorner();
    } else if (coords.isEqual(this.getOuterBottomStartCorner())) {
      return this.getOuterTopEndCorner();
    }
  }
  /**
   * Indicates which borders (top, right, bottom, left) are shared between
   * your `CellRange`instance and another `range` that's within your range.
   *
   * @param {CellRange} range A range to compare with.
   * @returns {Array<'top' | 'right' | 'bottom' | 'left'>}
   */
  getBordersSharedWith(range) {
    if (!this.includesRange(range)) {
      return [];
    }
    const thisBorders = {
      top: Math.min(this.from.row, this.to.row),
      bottom: Math.max(this.from.row, this.to.row),
      left: Math.min(this.from.col, this.to.col),
      right: Math.max(this.from.col, this.to.col)
    };
    const rangeBorders = {
      top: Math.min(range.from.row, range.to.row),
      bottom: Math.max(range.from.row, range.to.row),
      left: Math.min(range.from.col, range.to.col),
      right: Math.max(range.from.col, range.to.col)
    };
    const result = [];
    if (thisBorders.top === rangeBorders.top) {
      result.push("top");
    }
    if (thisBorders.right === rangeBorders.right) {
      result.push(_classPrivateFieldGet2(_isRtl2, this) ? "left" : "right");
    }
    if (thisBorders.bottom === rangeBorders.bottom) {
      result.push("bottom");
    }
    if (thisBorders.left === rangeBorders.left) {
      result.push(_classPrivateFieldGet2(_isRtl2, this) ? "right" : "left");
    }
    return result;
  }
  /**
   * Gets the coordinates of the inner cells of your range.
   *
   * @returns {CellCoords[]}
   */
  getInner() {
    const topStart = this.getOuterTopStartCorner();
    const bottomEnd = this.getOuterBottomEndCorner();
    const out = [];
    for (let r = topStart.row; r <= bottomEnd.row; r++) {
      for (let c = topStart.col; c <= bottomEnd.col; c++) {
        if (!(this.from.row === r && this.from.col === c) && !(this.to.row === r && this.to.col === c)) {
          out.push(this._createCellCoords(r, c));
        }
      }
    }
    return out;
  }
  /**
   * Gets the coordinates of all cells of your range.
   *
   * @returns {CellCoords[]}
   */
  getAll() {
    const topStart = this.getOuterTopStartCorner();
    const bottomEnd = this.getOuterBottomEndCorner();
    const out = [];
    for (let r = topStart.row; r <= bottomEnd.row; r++) {
      for (let c = topStart.col; c <= bottomEnd.col; c++) {
        if (topStart.row === r && topStart.col === c) {
          out.push(topStart);
        } else if (bottomEnd.row === r && bottomEnd.col === c) {
          out.push(bottomEnd);
        } else {
          out.push(this._createCellCoords(r, c));
        }
      }
    }
    return out;
  }
  /**
   * Runs a callback function on all cells within your range.
   *
   * You can break the iteration by returning `false` in the callback function.
   *
   * @param {function(number, number): boolean} callback A callback function.
   */
  forAll(callback) {
    const topStart = this.getOuterTopStartCorner();
    const bottomEnd = this.getOuterBottomEndCorner();
    for (let r = topStart.row; r <= bottomEnd.row; r++) {
      for (let c = topStart.col; c <= bottomEnd.col; c++) {
        const breakIteration = callback(r, c);
        if (breakIteration === false) {
          return;
        }
      }
    }
  }
  /**
   * Clones your `CellRange` instance.
   *
   * @returns {CellRange}
   */
  clone() {
    return new _CellRange(this.highlight, this.from, this.to, _classPrivateFieldGet2(_isRtl2, this));
  }
  /**
   * Converts your `CellRange` instance into an object literal with the following properties:
   *
   * - `from`
   *    - `row`
   *    - `col`
   * - `to`
   *    - `row`
   *    - `col`
   *
   * @returns {{from: {row: number, col: number}, to: {row: number, col: number}}} An object literal with `from` and `to` properties.
   */
  toObject() {
    return {
      from: this.from.toObject(),
      to: this.to.toObject()
    };
  }
  /**
   * Creates and returns a new instance of the `CellCoords` class.
   *
   * The new `CellCoords` instance automatically inherits the LTR/RTL flag
   * from your `CellRange` instance.
   *
   * @private
   * @param {number} row A row index.
   * @param {number} column A column index.
   * @returns {CellCoords}
   */
  _createCellCoords(row, column) {
    return new coords_default(row, column, _classPrivateFieldGet2(_isRtl2, this));
  }
};
var range_default = CellRange;

// node_modules/handsontable/3rdparty/walkontable/src/calculator/renderAllColumns.mjs
function _defineProperty4(obj, key, value) {
  key = _toPropertyKey4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive4(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var RenderAllColumnsCalculator = class {
  /**
   * @param {RenderAllColumnsCalculatorOptions} options Object with all options specified for column viewport calculation.
   */
  constructor(options) {
    _defineProperty4(this, "count", 0);
    _defineProperty4(this, "startColumn", 0);
    _defineProperty4(this, "endColumn", 0);
    _defineProperty4(this, "startPosition", 0);
    this.count = options.totalColumns;
    this.endColumn = this.count - 1;
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/calculator/renderAllRows.mjs
function _defineProperty5(obj, key, value) {
  key = _toPropertyKey5(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey5(t) {
  var i = _toPrimitive5(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive5(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var RenderAllRowsCalculator = class {
  /**
   * @param {RenderAllRowsCalculatorOptions} options Object with all options specified for row viewport calculation.
   */
  constructor(options) {
    _defineProperty5(this, "count", 0);
    _defineProperty5(this, "startRow", 0);
    _defineProperty5(this, "endRow", 0);
    _defineProperty5(this, "startPosition", 0);
    this.count = options.totalRows;
    this.endRow = this.count - 1;
  }
};

// node_modules/core-js/modules/es.array.at.js
var $4 = require_export();
var toObject2 = require_to_object();
var lengthOfArrayLike2 = require_length_of_array_like();
var toIntegerOrInfinity = require_to_integer_or_infinity();
var addToUnscopables2 = require_add_to_unscopables();
$4({ target: "Array", proto: true }, {
  at: function at(index2) {
    var O = toObject2(this);
    var len = lengthOfArrayLike2(O);
    var relativeIndex = toIntegerOrInfinity(index2);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return k < 0 || k >= len ? void 0 : O[k];
  }
});
addToUnscopables2("at");

// node_modules/handsontable/3rdparty/walkontable/src/calculator/constants.mjs
var RENDER_TYPE = 1;
var FULLY_VISIBLE_TYPE = 2;
var PARTIALLY_VISIBLE_TYPE = 3;

// node_modules/handsontable/3rdparty/walkontable/src/calculator/viewportColumns.mjs
function _classPrivateFieldInitSpec3(obj, privateMap, value) {
  _checkPrivateRedeclaration3(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration3(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty6(obj, key, value) {
  key = _toPropertyKey6(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey6(t) {
  var i = _toPrimitive6(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive6(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _classPrivateFieldGet3(s, a) {
  return s.get(_assertClassBrand3(s, a));
}
function _classPrivateFieldSet3(s, a, r) {
  return s.set(_assertClassBrand3(s, a), r), r;
}
function _assertClassBrand3(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _options = /* @__PURE__ */ new WeakMap();
var ViewportColumnsCalculator = class _ViewportColumnsCalculator {
  /**
   * Default column width.
   *
   * @type {number}
   */
  static get DEFAULT_WIDTH() {
    return 50;
  }
  /**
   * Number of rendered/visible columns.
   *
   * @type {number}
   */
  /**
   * @param {ViewportColumnsCalculatorOptions} options Object with all options specified for column viewport calculation.
   */
  constructor(options) {
    _defineProperty6(this, "count", 0);
    _defineProperty6(this, "startColumn", null);
    _defineProperty6(this, "endColumn", null);
    _defineProperty6(this, "startPosition", null);
    _defineProperty6(this, "isVisibleInTrimmingContainer", false);
    _classPrivateFieldInitSpec3(this, _options, void 0);
    _classPrivateFieldSet3(_options, this, options);
    this.calculate();
  }
  /**
   * Calculates viewport.
   */
  calculate() {
    const {
      calculationType,
      overrideFn,
      scrollOffset,
      totalColumns,
      viewportWidth
    } = _classPrivateFieldGet3(_options, this);
    const zeroBasedScrollOffset = Math.max(_classPrivateFieldGet3(_options, this).scrollOffset, 0);
    const compensatedViewportWidth = zeroBasedScrollOffset > 0 ? viewportWidth + 1 : viewportWidth;
    let sum = 0;
    let needReverse = true;
    const startPositions = [];
    let columnWidth;
    let firstVisibleColumnWidth = 0;
    let lastVisibleColumnWidth = 0;
    for (let i = 0; i < totalColumns; i++) {
      columnWidth = this._getColumnWidth(i);
      if (sum <= zeroBasedScrollOffset && calculationType !== FULLY_VISIBLE_TYPE) {
        this.startColumn = i;
        firstVisibleColumnWidth = columnWidth;
      }
      if (sum >= zeroBasedScrollOffset && sum + (calculationType === FULLY_VISIBLE_TYPE ? columnWidth : 0) <= zeroBasedScrollOffset + compensatedViewportWidth) {
        if (this.startColumn === null || this.startColumn === void 0) {
          this.startColumn = i;
          firstVisibleColumnWidth = columnWidth;
        }
        this.endColumn = i;
      }
      startPositions.push(sum);
      sum += columnWidth;
      lastVisibleColumnWidth = columnWidth;
      if (calculationType !== FULLY_VISIBLE_TYPE) {
        this.endColumn = i;
      }
      if (sum >= zeroBasedScrollOffset + viewportWidth) {
        needReverse = false;
        break;
      }
    }
    const mostRightScrollOffset = scrollOffset + viewportWidth - compensatedViewportWidth;
    const inlineEndColumnOffset = calculationType === FULLY_VISIBLE_TYPE ? 0 : lastVisibleColumnWidth;
    const inlineStartColumnOffset = calculationType === FULLY_VISIBLE_TYPE ? firstVisibleColumnWidth : 0;
    if (
      // the table is to the left of the viewport
      mostRightScrollOffset < -1 * _classPrivateFieldGet3(_options, this).inlineStartOffset || scrollOffset > startPositions.at(-1) + inlineEndColumnOffset || // the table is to the right of the viewport
      -1 * _classPrivateFieldGet3(_options, this).scrollOffset - _classPrivateFieldGet3(_options, this).viewportWidth > -1 * inlineStartColumnOffset
    ) {
      this.isVisibleInTrimmingContainer = false;
    } else {
      this.isVisibleInTrimmingContainer = true;
    }
    if (this.endColumn === totalColumns - 1 && needReverse) {
      this.startColumn = this.endColumn;
      while (this.startColumn > 0) {
        const viewportSum = startPositions[this.endColumn] + columnWidth - startPositions[this.startColumn - 1];
        if (viewportSum <= viewportWidth || calculationType !== FULLY_VISIBLE_TYPE) {
          this.startColumn -= 1;
        }
        if (viewportSum > viewportWidth) {
          break;
        }
      }
    }
    if (calculationType === RENDER_TYPE && this.startColumn !== null && overrideFn) {
      overrideFn(this);
    }
    this.startPosition = startPositions[this.startColumn];
    if (this.startPosition === void 0) {
      this.startPosition = null;
    }
    if (totalColumns < this.endColumn) {
      this.endColumn = totalColumns - 1;
    }
    if (this.startColumn !== null) {
      this.count = this.endColumn - this.startColumn + 1;
    }
  }
  /**
   * @param {number} column The visual column index.
   * @returns {number}
   * @private
   */
  _getColumnWidth(column) {
    let width = _classPrivateFieldGet3(_options, this).columnWidthFn(column);
    if (isNaN(width)) {
      width = _ViewportColumnsCalculator.DEFAULT_WIDTH;
    }
    return width;
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/calculator/viewportRows.mjs
function _classPrivateFieldInitSpec4(obj, privateMap, value) {
  _checkPrivateRedeclaration4(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration4(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty7(obj, key, value) {
  key = _toPropertyKey7(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey7(t) {
  var i = _toPrimitive7(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive7(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _classPrivateFieldGet4(s, a) {
  return s.get(_assertClassBrand4(s, a));
}
function _classPrivateFieldSet4(s, a, r) {
  return s.set(_assertClassBrand4(s, a), r), r;
}
function _assertClassBrand4(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _options2 = /* @__PURE__ */ new WeakMap();
var ViewportRowsCalculator = class _ViewportRowsCalculator {
  /**
   * Default row height.
   *
   * @type {number}
   */
  static get DEFAULT_HEIGHT() {
    return 23;
  }
  /**
   * Number of rendered/visible rows.
   *
   * @type {number}
   */
  /**
   * @param {ViewportRowsCalculatorOptions} options Object with all options specified for row viewport calculation.
   */
  constructor(options) {
    _defineProperty7(this, "count", 0);
    _defineProperty7(this, "startRow", null);
    _defineProperty7(this, "endRow", null);
    _defineProperty7(this, "startPosition", null);
    _defineProperty7(this, "isVisibleInTrimmingContainer", false);
    _classPrivateFieldInitSpec4(this, _options2, void 0);
    _classPrivateFieldSet4(_options2, this, options);
    this.calculate();
  }
  /**
   * Calculates viewport.
   */
  calculate() {
    const {
      calculationType,
      overrideFn,
      rowHeightFn,
      scrollOffset,
      totalRows,
      viewportHeight
    } = _classPrivateFieldGet4(_options2, this);
    const zeroBasedScrollOffset = Math.max(_classPrivateFieldGet4(_options2, this).scrollOffset, 0);
    const horizontalScrollbarHeight = _classPrivateFieldGet4(_options2, this).horizontalScrollbarHeight || 0;
    const innerViewportHeight = zeroBasedScrollOffset + viewportHeight - horizontalScrollbarHeight;
    let sum = 0;
    let needReverse = true;
    const startPositions = [];
    let rowHeight;
    let firstVisibleRowHeight = 0;
    let lastVisibleRowHeight = 0;
    for (let i = 0; i < totalRows; i++) {
      rowHeight = rowHeightFn(i);
      if (isNaN(rowHeight)) {
        rowHeight = _ViewportRowsCalculator.DEFAULT_HEIGHT;
      }
      if (sum <= zeroBasedScrollOffset && calculationType !== FULLY_VISIBLE_TYPE) {
        this.startRow = i;
        firstVisibleRowHeight = rowHeight;
      }
      if (sum >= zeroBasedScrollOffset && sum + (calculationType === FULLY_VISIBLE_TYPE ? rowHeight : 0) <= innerViewportHeight) {
        if (this.startRow === null) {
          this.startRow = i;
          firstVisibleRowHeight = rowHeight;
        }
        this.endRow = i;
      }
      startPositions.push(sum);
      sum += rowHeight;
      lastVisibleRowHeight = rowHeight;
      if (calculationType !== FULLY_VISIBLE_TYPE) {
        this.endRow = i;
      }
      if (sum >= innerViewportHeight) {
        needReverse = false;
        break;
      }
    }
    const mostBottomScrollOffset = scrollOffset + viewportHeight - horizontalScrollbarHeight;
    const topRowOffset = calculationType === FULLY_VISIBLE_TYPE ? firstVisibleRowHeight : 0;
    const bottomRowOffset = calculationType === FULLY_VISIBLE_TYPE ? 0 : lastVisibleRowHeight;
    if (mostBottomScrollOffset < topRowOffset || scrollOffset > startPositions.at(-1) + bottomRowOffset) {
      this.isVisibleInTrimmingContainer = false;
    } else {
      this.isVisibleInTrimmingContainer = true;
    }
    if (this.endRow === totalRows - 1 && needReverse) {
      this.startRow = this.endRow;
      while (this.startRow > 0) {
        const viewportSum = startPositions[this.endRow] + rowHeight - startPositions[this.startRow - 1];
        if (viewportSum <= viewportHeight - horizontalScrollbarHeight || calculationType !== FULLY_VISIBLE_TYPE) {
          this.startRow -= 1;
        }
        if (viewportSum >= viewportHeight - horizontalScrollbarHeight) {
          break;
        }
      }
    }
    if (calculationType === RENDER_TYPE && this.startRow !== null && overrideFn) {
      overrideFn(this);
    }
    this.startPosition = startPositions[this.startRow];
    if (this.startPosition === void 0) {
      this.startPosition = null;
    }
    if (totalRows < this.endRow) {
      this.endRow = totalRows - 1;
    }
    if (this.startRow !== null) {
      this.count = this.endRow - this.startRow + 1;
    }
  }
};

// node_modules/handsontable/helpers/a11y.mjs
var A11Y_TABINDEX = (val) => ["tabindex", val];
var A11Y_TREEGRID = () => ["role", "treegrid"];
var A11Y_PRESENTATION = () => ["role", "presentation"];
var A11Y_GRIDCELL = () => ["role", "gridcell"];
var A11Y_ROWHEADER = () => ["role", "rowheader"];
var A11Y_ROWGROUP = () => ["role", "rowgroup"];
var A11Y_COLUMNHEADER = () => ["role", "columnheader"];
var A11Y_ROW = () => ["role", "row"];
var A11Y_MENU = () => ["role", "menu"];
var A11Y_MENU_ITEM = () => ["role", "menuitem"];
var A11Y_COMBOBOX = () => ["role", "combobox"];
var A11Y_LISTBOX = () => ["role", "listbox"];
var A11Y_OPTION = () => ["role", "option"];
var A11Y_CHECKBOX = () => ["role", "checkbox"];
var A11Y_SCOPE_COL = () => ["scope", "col"];
var A11Y_SCOPE_ROW = () => ["scope", "row"];
var A11Y_TEXT = () => ["type", "text"];
var A11Y_LABEL = (val) => ["aria-label", val];
var A11Y_HIDDEN = () => ["aria-hidden", "true"];
var A11Y_DISABLED = () => ["aria-disabled", "true"];
var A11Y_MULTISELECTABLE = () => ["aria-multiselectable", "true"];
var A11Y_HASPOPUP = (val) => ["aria-haspopup", val];
var A11Y_ROWCOUNT = (val) => ["aria-rowcount", val];
var A11Y_COLCOUNT = (val) => ["aria-colcount", val];
var A11Y_ROWINDEX = (val) => ["aria-rowindex", val];
var A11Y_COLINDEX = (val) => ["aria-colindex", val];
var A11Y_EXPANDED = (val) => ["aria-expanded", val];
var A11Y_SORT = (val) => ["aria-sort", val];
var A11Y_READONLY = () => ["aria-readonly", "true"];
var A11Y_INVALID = () => ["aria-invalid", "true"];
var A11Y_CHECKED = (val) => ["aria-checked", val];
var A11Y_SELECTED = () => ["aria-selected", "true"];
var A11Y_AUTOCOMPLETE = () => ["aria-autocomplete", "list"];
var A11Y_CONTROLS = (val) => ["aria-controls", val];
var A11Y_ACTIVEDESCENDANT = (val) => ["aria-activedescendant", val];
var A11Y_LIVE = (val) => ["aria-live", val];
var A11Y_RELEVANT = (val) => ["aria-relevant", val];
var A11Y_SETSIZE = (val) => ["aria-setsize", val];
var A11Y_POSINSET = (val) => ["aria-posinset", val];

// node_modules/handsontable/helpers/dom/element.mjs
function getParent(element) {
  let level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  let iteration = -1;
  let parent = null;
  let elementToCheck = element;
  while (elementToCheck !== null) {
    if (iteration === level) {
      parent = elementToCheck;
      break;
    }
    if (elementToCheck.host && elementToCheck.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      elementToCheck = elementToCheck.host;
    } else {
      iteration += 1;
      elementToCheck = elementToCheck.parentNode;
    }
  }
  return parent;
}
function isThisHotChild(element, thisHotContainer) {
  const closestHandsontableContainer = element.closest(".handsontable");
  return !!closestHandsontableContainer && (closestHandsontableContainer.parentNode === thisHotContainer || closestHandsontableContainer === thisHotContainer);
}
function getFrameElement(frame) {
  return Object.getPrototypeOf(frame.parent) && frame.frameElement;
}
function getParentWindow(frame) {
  return getFrameElement(frame) && frame.parent;
}
function closest(element) {
  let nodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  let until = arguments.length > 2 ? arguments[2] : void 0;
  const {
    ELEMENT_NODE,
    DOCUMENT_FRAGMENT_NODE
  } = Node;
  let elementToCheck = element;
  while (elementToCheck !== null && elementToCheck !== void 0 && elementToCheck !== until) {
    const {
      nodeType,
      nodeName
    } = elementToCheck;
    if (nodeType === ELEMENT_NODE && (nodes.includes(nodeName) || nodes.includes(elementToCheck))) {
      return elementToCheck;
    }
    const {
      host
    } = elementToCheck;
    if (host && nodeType === DOCUMENT_FRAGMENT_NODE) {
      elementToCheck = host;
    } else {
      elementToCheck = elementToCheck.parentNode;
    }
  }
  return null;
}
function closestDown(element, nodes, until) {
  const matched = [];
  let elementToCheck = element;
  while (elementToCheck) {
    elementToCheck = closest(elementToCheck, nodes, until);
    if (!elementToCheck || until && !until.contains(elementToCheck)) {
      break;
    }
    matched.push(elementToCheck);
    if (elementToCheck.host && elementToCheck.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      elementToCheck = elementToCheck.host;
    } else {
      elementToCheck = elementToCheck.parentNode;
    }
  }
  const length = matched.length;
  return length ? matched[length - 1] : null;
}
function isChildOf(child, parent) {
  let node = child.parentNode;
  let queriedParents = [];
  if (typeof parent === "string") {
    if (child.defaultView) {
      queriedParents = Array.prototype.slice.call(child.querySelectorAll(parent), 0);
    } else {
      queriedParents = Array.prototype.slice.call(child.ownerDocument.querySelectorAll(parent), 0);
    }
  } else {
    queriedParents.push(parent);
  }
  while (node !== null) {
    if (queriedParents.indexOf(node) > -1) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
function index(element) {
  let i = 0;
  let elementToCheck = element;
  if (elementToCheck.previousSibling) {
    while (elementToCheck = elementToCheck.previousSibling) {
      i += 1;
    }
  }
  return i;
}
function overlayContainsElement(overlayType, element, root) {
  const overlayElement = root.parentElement.querySelector(`.ht_clone_${overlayType}`);
  return overlayElement ? overlayElement.contains(element) : null;
}
function filterEmptyClassNames(classNames) {
  if (!classNames || !classNames.length) {
    return [];
  }
  return classNames.filter((x) => !!x);
}
function filterRegexes(list, returnBoth) {
  if (!list || !list.length) {
    return returnBoth ? {
      regexFree: [],
      regexes: []
    } : [];
  }
  const regexes = [];
  const regexFree = [];
  regexFree.push(...list.filter((entry) => {
    const isRegex = entry instanceof RegExp;
    if (isRegex && returnBoth) {
      regexes.push(entry);
    }
    return !isRegex;
  }));
  return returnBoth ? {
    regexFree,
    regexes
  } : regexFree;
}
function hasClass(element, className) {
  if (element.classList === void 0 || typeof className !== "string" || className === "") {
    return false;
  }
  return element.classList.contains(className);
}
function addClass(element, className) {
  if (typeof className === "string") {
    className = className.split(" ");
  }
  className = filterEmptyClassNames(className);
  if (className.length > 0) {
    element.classList.add(...className);
  }
}
function removeClass(element, className) {
  if (typeof className === "string") {
    className = className.split(" ");
  } else if (className instanceof RegExp) {
    className = [className];
  }
  let {
    regexFree: stringClasses,
    // eslint-disable-next-line prefer-const
    regexes: regexClasses
  } = filterRegexes(className, true);
  stringClasses = filterEmptyClassNames(stringClasses);
  if (stringClasses.length > 0) {
    element.classList.remove(...stringClasses);
  }
  regexClasses.forEach((regexClassName) => {
    element.classList.forEach((currentClassName) => {
      if (regexClassName.test(currentClassName)) {
        element.classList.remove(currentClassName);
      }
    });
  });
}
function setAttribute(domElement) {
  let attributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  let attributeValue = arguments.length > 2 ? arguments[2] : void 0;
  if (!Array.isArray(attributes)) {
    attributes = [[attributes, attributeValue]];
  }
  attributes.forEach((attributeInfo) => {
    if (Array.isArray(attributeInfo) && attributeInfo[0] !== "") {
      domElement.setAttribute(...attributeInfo);
    }
  });
}
function removeAttribute(domElement) {
  let attributesToRemove = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (typeof attributesToRemove === "string") {
    attributesToRemove = attributesToRemove.split(" ");
  } else if (attributesToRemove instanceof RegExp) {
    attributesToRemove = [attributesToRemove];
  }
  const {
    regexFree: stringAttributes,
    regexes: regexAttributes
  } = filterRegexes(attributesToRemove, true);
  stringAttributes.forEach((attributeNameToRemove) => {
    if (attributeNameToRemove !== "") {
      domElement.removeAttribute(attributeNameToRemove);
    }
  });
  regexAttributes.forEach((attributeRegex) => {
    domElement.getAttributeNames().forEach((attributeName) => {
      if (attributeRegex.test(attributeName)) {
        domElement.removeAttribute(attributeName);
      }
    });
  });
}
function removeTextNodes(element) {
  if (element.nodeType === 3) {
    element.parentNode.removeChild(element);
  } else if (["TABLE", "THEAD", "TBODY", "TFOOT", "TR"].indexOf(element.nodeName) > -1) {
    const childs = element.childNodes;
    for (let i = childs.length - 1; i >= 0; i--) {
      removeTextNodes(childs[i]);
    }
  }
}
function empty(element) {
  let child;
  while (child = element.lastChild) {
    element.removeChild(child);
  }
}
var HTML_CHARACTERS = /(<(.*)>|&(.*);)/;
function fastInnerHTML(element, content) {
  let sanitizeContent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (HTML_CHARACTERS.test(content)) {
    element.innerHTML = sanitizeContent ? sanitize(content) : content;
  } else {
    fastInnerText(element, content);
  }
}
function fastInnerText(element, content) {
  const child = element.firstChild;
  if (child && child.nodeType === 3 && child.nextSibling === null) {
    child.textContent = content;
  } else {
    empty(element);
    element.appendChild(element.ownerDocument.createTextNode(content));
  }
}
function isVisible(element) {
  const documentElement = element.ownerDocument.documentElement;
  let next = element;
  while (next !== documentElement) {
    if (next === null) {
      return false;
    } else if (next.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      if (next.host) {
        if (next.host.impl) {
          return isVisible(next.host.impl);
        } else if (next.host) {
          return isVisible(next.host);
        }
        throw new Error("Lost in Web Components world");
      } else {
        return false;
      }
    } else if (getComputedStyle(next).display === "none") {
      return false;
    }
    next = next.parentNode;
  }
  return true;
}
function offset(element) {
  const rootDocument = element.ownerDocument;
  const rootWindow = rootDocument.defaultView;
  const documentElement = rootDocument.documentElement;
  let elementToCheck = element;
  let offsetLeft;
  let offsetTop;
  let lastElem;
  offsetLeft = elementToCheck.offsetLeft;
  offsetTop = elementToCheck.offsetTop;
  lastElem = elementToCheck;
  while (elementToCheck = elementToCheck.offsetParent) {
    if (elementToCheck === rootDocument.body) {
      break;
    }
    if (!("offsetLeft" in elementToCheck)) {
      break;
    }
    offsetLeft += elementToCheck.offsetLeft;
    offsetTop += elementToCheck.offsetTop;
    lastElem = elementToCheck;
  }
  if (lastElem && lastElem.style.position === "fixed") {
    offsetLeft += rootWindow.pageXOffset || documentElement.scrollLeft;
    offsetTop += rootWindow.pageYOffset || documentElement.scrollTop;
  }
  return {
    left: offsetLeft,
    top: offsetTop
  };
}
function getWindowScrollTop() {
  let rootWindow = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
  return rootWindow.scrollY;
}
function getWindowScrollLeft() {
  let rootWindow = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
  return rootWindow.scrollX;
}
function getScrollTop(element) {
  let rootWindow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
  if (element === rootWindow) {
    return getWindowScrollTop(rootWindow);
  }
  return element.scrollTop;
}
function getScrollLeft(element) {
  let rootWindow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
  if (element === rootWindow) {
    return getWindowScrollLeft(rootWindow);
  }
  return element.scrollLeft;
}
function getScrollableElement(element) {
  let rootDocument = element.ownerDocument;
  let rootWindow = rootDocument ? rootDocument.defaultView : void 0;
  if (!rootDocument) {
    rootDocument = element.document ? element.document : element;
    rootWindow = rootDocument.defaultView;
  }
  const props = ["auto", "scroll"];
  let el = element.parentNode;
  while (el && el.style && rootDocument.body !== el) {
    let {
      overflow,
      overflowX,
      overflowY
    } = el.style;
    if ([overflow, overflowX, overflowY].includes("scroll")) {
      return el;
    } else {
      ({
        overflow,
        overflowX,
        overflowY
      } = rootWindow.getComputedStyle(el));
      if (props.includes(overflow) || props.includes(overflowX) || props.includes(overflowY)) {
        return el;
      }
    }
    if (el.clientHeight <= el.scrollHeight + 1 && (props.includes(overflowY) || props.includes(overflow))) {
      return el;
    }
    if (el.clientWidth <= el.scrollWidth + 1 && (props.includes(overflowX) || props.includes(overflow))) {
      return el;
    }
    el = el.parentNode;
  }
  return rootWindow;
}
function getMaximumScrollTop(element) {
  return element.scrollHeight - element.clientHeight;
}
function getMaximumScrollLeft(element) {
  return element.scrollWidth - element.clientWidth;
}
function getTrimmingContainer(base) {
  const rootDocument = base.ownerDocument;
  const rootWindow = rootDocument.defaultView;
  let el = base.parentNode;
  while (el && el.style && rootDocument.body !== el) {
    if (el.style.overflow !== "visible" && el.style.overflow !== "") {
      return el;
    }
    const computedStyle = getComputedStyle(el, rootWindow);
    const allowedProperties = ["scroll", "hidden", "auto"];
    const property = computedStyle.getPropertyValue("overflow");
    const propertyY = computedStyle.getPropertyValue("overflow-y");
    const propertyX = computedStyle.getPropertyValue("overflow-x");
    if (allowedProperties.includes(property) || allowedProperties.includes(propertyY) || allowedProperties.includes(propertyX)) {
      return el;
    }
    el = el.parentNode;
  }
  return rootWindow;
}
function getStyle(element, prop) {
  let rootWindow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : window;
  if (!element) {
    return;
  } else if (element === rootWindow) {
    if (prop === "width") {
      return `${rootWindow.innerWidth}px`;
    } else if (prop === "height") {
      return `${rootWindow.innerHeight}px`;
    }
    return;
  }
  const styleProp = element.style[prop];
  if (styleProp !== "" && styleProp !== void 0) {
    return styleProp;
  }
  const computedStyle = getComputedStyle(element, rootWindow);
  if (computedStyle[prop] !== "" && computedStyle[prop] !== void 0) {
    return computedStyle[prop];
  }
}
function getComputedStyle(element) {
  let rootWindow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
  return element.currentStyle || rootWindow.getComputedStyle(element);
}
function outerWidth(element) {
  return element.offsetWidth;
}
function outerHeight(element) {
  return element.offsetHeight;
}
function innerHeight(element) {
  return element.clientHeight || element.innerHeight;
}
function innerWidth(element) {
  return element.clientWidth || element.innerWidth;
}
function getCaretPosition(el) {
  if (el.selectionStart) {
    return el.selectionStart;
  }
  return 0;
}
function getSelectionEndPosition(el) {
  if (el.selectionEnd) {
    return el.selectionEnd;
  }
  return 0;
}
function clearTextSelection() {
  let rootWindow = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
  if (rootWindow.getSelection) {
    if (rootWindow.getSelection().empty) {
      rootWindow.getSelection().empty();
    } else if (rootWindow.getSelection().removeAllRanges) {
      rootWindow.getSelection().removeAllRanges();
    }
  }
}
function setCaretPosition(element, pos, endPos) {
  if (endPos === void 0) {
    endPos = pos;
  }
  if (element.setSelectionRange) {
    element.focus();
    try {
      element.setSelectionRange(pos, endPos);
    } catch (err) {
      const elementParent = element.parentNode;
      const parentDisplayValue = elementParent.style.display;
      elementParent.style.display = "block";
      element.setSelectionRange(pos, endPos);
      elementParent.style.display = parentDisplayValue;
    }
  }
}
var cachedScrollbarWidth;
function walkontableCalculateScrollbarWidth() {
  let rootDocument = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  const inner = rootDocument.createElement("div");
  inner.style.height = "200px";
  inner.style.width = "100%";
  const outer = rootDocument.createElement("div");
  outer.style.boxSizing = "content-box";
  outer.style.height = "150px";
  outer.style.left = "0px";
  outer.style.overflow = "hidden";
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.width = "200px";
  outer.style.visibility = "hidden";
  outer.appendChild(inner);
  (rootDocument.body || rootDocument.documentElement).appendChild(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  let w2 = inner.offsetWidth;
  if (w1 === w2) {
    w2 = outer.clientWidth;
  }
  (rootDocument.body || rootDocument.documentElement).removeChild(outer);
  return w1 - w2;
}
function getScrollbarWidth() {
  let rootDocument = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (cachedScrollbarWidth === void 0) {
    cachedScrollbarWidth = walkontableCalculateScrollbarWidth(rootDocument);
  }
  return cachedScrollbarWidth;
}
function hasVerticalScrollbar(element) {
  return element.offsetWidth !== element.clientWidth;
}
function hasHorizontalScrollbar(element) {
  return element.offsetHeight !== element.clientHeight;
}
function setOverlayPosition(overlayElem, left, top) {
  overlayElem.style.transform = `translate3d(${left},${top},0)`;
}
function resetCssTransform(element) {
  if (element.style.transform && element.style.transform !== "") {
    element.style.transform = "";
  }
}
function isInput(element) {
  const inputs = ["INPUT", "SELECT", "TEXTAREA"];
  return element && (inputs.indexOf(element.nodeName) > -1 || element.contentEditable === "true");
}
function isOutsideInput(element) {
  return isInput(element) && element.hasAttribute("data-hot-input") === false;
}
function isDetached(element) {
  return !element.parentNode;
}
function observeVisibilityChangeOnce(elementToBeObserved, callback) {
  const visibilityObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && elementToBeObserved.offsetParent !== null) {
        callback();
        observer.unobserve(elementToBeObserved);
      }
    });
  }, {
    root: elementToBeObserved.ownerDocument.body
  });
  visibilityObserver.observe(elementToBeObserved);
}
function makeElementContentEditableAndSelectItsContent(element) {
  let invisibleSelection = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  let ariaHidden = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const ownerDocument = element.ownerDocument;
  const range = ownerDocument.createRange();
  const sel = ownerDocument.defaultView.getSelection();
  setAttribute(element, "contenteditable", true);
  if (ariaHidden) {
    setAttribute(element, ...A11Y_HIDDEN());
  }
  if (invisibleSelection) {
    addClass(element, "invisibleSelection");
  }
  range.selectNodeContents(element);
  sel.removeAllRanges();
  sel.addRange(range);
}
function removeContentEditableFromElementAndDeselect(selectedElement) {
  let removeInvisibleSelectionClass = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const sel = selectedElement.ownerDocument.defaultView.getSelection();
  if (selectedElement.hasAttribute("aria-hidden")) {
    selectedElement.removeAttribute("aria-hidden");
  }
  sel.removeAllRanges();
  if (removeInvisibleSelectionClass) {
    removeClass(selectedElement, "invisibleSelection");
  }
  selectedElement.removeAttribute("contenteditable");
}
function runWithSelectedContendEditableElement(element, callback) {
  let invisibleSelection = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  makeElementContentEditableAndSelectItsContent(element, invisibleSelection);
  callback();
  removeContentEditableFromElementAndDeselect(element, invisibleSelection);
}

// node_modules/handsontable/helpers/feature.mjs
function requestAnimationFrame(callback) {
  return window.requestAnimationFrame(callback);
}
function cancelAnimationFrame(id) {
  window.cancelAnimationFrame(id);
}
function isTouchSupported() {
  return "ontouchstart" in window;
}
function isCSR() {
  return typeof window !== "undefined";
}
var comparisonFunction;
function getComparisonFunction(language) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (comparisonFunction) {
    return comparisonFunction;
  }
  if (typeof Intl === "object") {
    comparisonFunction = new Intl.Collator(language, options).compare;
  } else if (typeof String.prototype.localeCompare === "function") {
    comparisonFunction = (a, b) => `${a}`.localeCompare(b);
  } else {
    comparisonFunction = (a, b) => {
      if (a === b) {
        return 0;
      }
      return a > b ? -1 : 1;
    };
  }
  return comparisonFunction;
}

// node_modules/handsontable/helpers/browser.mjs
var tester2 = (testerFunc) => {
  const result = {
    value: false
  };
  result.test = (ua, vendor) => {
    result.value = testerFunc(ua, vendor);
  };
  return result;
};
var browsers = {
  chrome: tester2((ua, vendor) => /Chrome/.test(ua) && /Google/.test(vendor)),
  chromeWebKit: tester2((ua) => /CriOS/.test(ua)),
  edge: tester2((ua) => /Edge/.test(ua)),
  edgeWebKit: tester2((ua) => /EdgiOS/.test(ua)),
  firefox: tester2((ua) => /Firefox/.test(ua)),
  firefoxWebKit: tester2((ua) => /FxiOS/.test(ua)),
  mobile: tester2((ua) => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)),
  safari: tester2((ua, vendor) => /Safari/.test(ua) && /Apple Computer/.test(vendor))
};
var platforms = {
  mac: tester2((platform) => /^Mac/.test(platform)),
  win: tester2((platform) => /^Win/.test(platform)),
  linux: tester2((platform) => /^Linux/.test(platform)),
  ios: tester2((ua) => /iPhone|iPad|iPod/i.test(ua))
};
function setBrowserMeta() {
  let {
    userAgent = navigator.userAgent,
    vendor = navigator.vendor
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  objectEach(browsers, (_ref) => {
    let {
      test
    } = _ref;
    return void test(userAgent, vendor);
  });
}
function setPlatformMeta() {
  let {
    platform = navigator.platform
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  objectEach(platforms, (_ref2) => {
    let {
      test
    } = _ref2;
    return void test(platform);
  });
}
if (isCSR()) {
  setBrowserMeta();
  setPlatformMeta();
}
function isChrome() {
  return browsers.chrome.value;
}
function isChromeWebKit() {
  return browsers.chromeWebKit.value;
}
function isFirefox() {
  return browsers.firefox.value;
}
function isFirefoxWebKit() {
  return browsers.firefoxWebKit.value;
}
function isSafari() {
  return browsers.safari.value;
}
function isEdge() {
  return browsers.edge.value;
}
function isMobileBrowser() {
  return browsers.mobile.value;
}
function isIOS() {
  return platforms.ios.value;
}
function isIpadOS() {
  let {
    maxTouchPoints
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : navigator;
  return maxTouchPoints > 2 && platforms.mac.value;
}
function isWindowsOS() {
  return platforms.win.value;
}
function isMacOS() {
  return platforms.mac.value;
}

// node_modules/handsontable/3rdparty/walkontable/src/event.mjs
function _classPrivateFieldInitSpec5(obj, privateMap, value) {
  _checkPrivateRedeclaration5(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration5(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldGet5(s, a) {
  return s.get(_assertClassBrand5(s, a));
}
function _classPrivateFieldSet5(s, a, r) {
  return s.set(_assertClassBrand5(s, a), r), r;
}
function _assertClassBrand5(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _wtSettings = /* @__PURE__ */ new WeakMap();
var _domBindings = /* @__PURE__ */ new WeakMap();
var _wtTable = /* @__PURE__ */ new WeakMap();
var _selectionManager = /* @__PURE__ */ new WeakMap();
var _parent = /* @__PURE__ */ new WeakMap();
var _eventManager = /* @__PURE__ */ new WeakMap();
var _facadeGetter = /* @__PURE__ */ new WeakMap();
var _selectedCellBeforeTouchEnd = /* @__PURE__ */ new WeakMap();
var _dblClickTimeout = /* @__PURE__ */ new WeakMap();
var _dblClickOrigin = /* @__PURE__ */ new WeakMap();
var Event = class {
  /**
   * @param {FacadeGetter} facadeGetter Gets an instance facade.
   * @param {DomBindings} domBindings Bindings into dom.
   * @param {Settings} wtSettings The walkontable settings.
   * @param {EventManager} eventManager The walkontable event manager.
   * @param {Table} wtTable The table.
   * @param {SelectionManager} selectionManager Selections.
   * @param {Event} [parent=null] The main Event instance.
   */
  constructor(facadeGetter, domBindings, wtSettings, eventManager, wtTable, selectionManager) {
    let parent = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
    _classPrivateFieldInitSpec5(this, _wtSettings, void 0);
    _classPrivateFieldInitSpec5(this, _domBindings, void 0);
    _classPrivateFieldInitSpec5(this, _wtTable, void 0);
    _classPrivateFieldInitSpec5(this, _selectionManager, void 0);
    _classPrivateFieldInitSpec5(this, _parent, void 0);
    _classPrivateFieldInitSpec5(this, _eventManager, void 0);
    _classPrivateFieldInitSpec5(this, _facadeGetter, void 0);
    _classPrivateFieldInitSpec5(this, _selectedCellBeforeTouchEnd, void 0);
    _classPrivateFieldInitSpec5(this, _dblClickTimeout, [null, null]);
    _classPrivateFieldInitSpec5(this, _dblClickOrigin, [null, null]);
    _classPrivateFieldSet5(_wtSettings, this, wtSettings);
    _classPrivateFieldSet5(_domBindings, this, domBindings);
    _classPrivateFieldSet5(_wtTable, this, wtTable);
    _classPrivateFieldSet5(_selectionManager, this, selectionManager);
    _classPrivateFieldSet5(_parent, this, parent);
    _classPrivateFieldSet5(_eventManager, this, eventManager);
    _classPrivateFieldSet5(_facadeGetter, this, facadeGetter);
    this.registerEvents();
  }
  /**
   * Adds listeners for mouse and touch events.
   *
   * @private
   */
  registerEvents() {
    _classPrivateFieldGet5(_eventManager, this).addEventListener(_classPrivateFieldGet5(_wtTable, this).holder, "contextmenu", (event) => this.onContextMenu(event));
    _classPrivateFieldGet5(_eventManager, this).addEventListener(_classPrivateFieldGet5(_wtTable, this).TABLE, "mouseover", (event) => this.onMouseOver(event));
    _classPrivateFieldGet5(_eventManager, this).addEventListener(_classPrivateFieldGet5(_wtTable, this).TABLE, "mouseout", (event) => this.onMouseOut(event));
    const initTouchEvents = () => {
      _classPrivateFieldGet5(_eventManager, this).addEventListener(_classPrivateFieldGet5(_wtTable, this).holder, "touchstart", (event) => this.onTouchStart(event));
      _classPrivateFieldGet5(_eventManager, this).addEventListener(_classPrivateFieldGet5(_wtTable, this).holder, "touchend", (event) => this.onTouchEnd(event));
      if (!this.momentumScrolling) {
        this.momentumScrolling = {};
      }
      _classPrivateFieldGet5(_eventManager, this).addEventListener(_classPrivateFieldGet5(_wtTable, this).holder, "scroll", () => {
        clearTimeout(this.momentumScrolling._timeout);
        if (!this.momentumScrolling.ongoing) {
          _classPrivateFieldGet5(_wtSettings, this).getSetting("onBeforeTouchScroll");
        }
        this.momentumScrolling.ongoing = true;
        this.momentumScrolling._timeout = setTimeout(() => {
          if (!this.touchApplied) {
            this.momentumScrolling.ongoing = false;
            _classPrivateFieldGet5(_wtSettings, this).getSetting("onAfterMomentumScroll");
          }
        }, 200);
      });
    };
    const initMouseEvents = () => {
      _classPrivateFieldGet5(_eventManager, this).addEventListener(_classPrivateFieldGet5(_wtTable, this).holder, "mouseup", (event) => this.onMouseUp(event));
      _classPrivateFieldGet5(_eventManager, this).addEventListener(_classPrivateFieldGet5(_wtTable, this).holder, "mousedown", (event) => this.onMouseDown(event));
    };
    if (isMobileBrowser()) {
      initTouchEvents();
    } else {
      if (isTouchSupported()) {
        initTouchEvents();
      }
      initMouseEvents();
    }
  }
  /**
   * Checks if an element is already selected.
   *
   * @private
   * @param {Element} touchTarget An element to check.
   * @returns {boolean}
   */
  selectedCellWasTouched(touchTarget) {
    const cellUnderFinger = this.parentCell(touchTarget);
    const coordsOfCellUnderFinger = cellUnderFinger.coords;
    if (_classPrivateFieldGet5(_selectedCellBeforeTouchEnd, this) && coordsOfCellUnderFinger) {
      const [rowTouched, rowSelected] = [coordsOfCellUnderFinger.row, _classPrivateFieldGet5(_selectedCellBeforeTouchEnd, this).from.row];
      const [colTouched, colSelected] = [coordsOfCellUnderFinger.col, _classPrivateFieldGet5(_selectedCellBeforeTouchEnd, this).from.col];
      return rowTouched === rowSelected && colTouched === colSelected;
    }
    return false;
  }
  /**
   * Gets closest TD or TH element.
   *
   * @private
   * @param {Element} elem An element from the traversing starts.
   * @returns {object} Contains coordinates and reference to TD or TH if it exists. Otherwise it's empty object.
   */
  parentCell(elem) {
    const cell = {};
    const TABLE = _classPrivateFieldGet5(_wtTable, this).TABLE;
    const TD = closestDown(elem, ["TD", "TH"], TABLE);
    if (TD) {
      cell.coords = _classPrivateFieldGet5(_wtTable, this).getCoords(TD);
      cell.TD = TD;
    } else if (hasClass(elem, "wtBorder") && hasClass(elem, "current")) {
      cell.coords = _classPrivateFieldGet5(_selectionManager, this).getFocusSelection().cellRange.highlight;
      cell.TD = _classPrivateFieldGet5(_wtTable, this).getCell(cell.coords);
    } else if (hasClass(elem, "wtBorder") && hasClass(elem, "area")) {
      if (_classPrivateFieldGet5(_selectionManager, this).getAreaSelection().cellRange) {
        cell.coords = _classPrivateFieldGet5(_selectionManager, this).getAreaSelection().cellRange.to;
        cell.TD = _classPrivateFieldGet5(_wtTable, this).getCell(cell.coords);
      }
    }
    return cell;
  }
  /**
   * OnMouseDown callback.
   *
   * @private
   * @param {MouseEvent} event The mouse event object.
   */
  onMouseDown(event) {
    const activeElement = _classPrivateFieldGet5(_domBindings, this).rootDocument.activeElement;
    const getParentNode = partial(getParent, event.target);
    const realTarget = event.target;
    if (!["TD", "TH"].includes(activeElement.nodeName) && (realTarget === activeElement || getParentNode(0) === activeElement || getParentNode(1) === activeElement)) {
      return;
    }
    const cell = this.parentCell(realTarget);
    if (hasClass(realTarget, "corner")) {
      _classPrivateFieldGet5(_wtSettings, this).getSetting("onCellCornerMouseDown", event, realTarget);
    } else if (cell.TD && _classPrivateFieldGet5(_wtSettings, this).has("onCellMouseDown")) {
      this.callListener("onCellMouseDown", event, cell.coords, cell.TD);
    }
    if ((event.button === 0 || this.touchApplied) && cell.TD) {
      _classPrivateFieldGet5(_dblClickOrigin, this)[0] = cell.TD;
      clearTimeout(_classPrivateFieldGet5(_dblClickTimeout, this)[0]);
      _classPrivateFieldGet5(_dblClickTimeout, this)[0] = setTimeout(() => {
        _classPrivateFieldGet5(_dblClickOrigin, this)[0] = null;
      }, 1e3);
    }
  }
  /**
   * OnContextMenu callback.
   *
   * @private
   * @param {MouseEvent} event The mouse event object.
   */
  onContextMenu(event) {
    if (_classPrivateFieldGet5(_wtSettings, this).has("onCellContextMenu")) {
      const cell = this.parentCell(event.target);
      if (cell.TD) {
        this.callListener("onCellContextMenu", event, cell.coords, cell.TD);
      }
    }
  }
  /**
   * OnMouseOver callback.
   *
   * @private
   * @param {MouseEvent} event The mouse event object.
   */
  onMouseOver(event) {
    if (!_classPrivateFieldGet5(_wtSettings, this).has("onCellMouseOver")) {
      return;
    }
    const table = _classPrivateFieldGet5(_wtTable, this).TABLE;
    const td = closestDown(event.target, ["TD", "TH"], table);
    const parent = _classPrivateFieldGet5(_parent, this) || this;
    if (td && td !== parent.lastMouseOver && isChildOf(td, table)) {
      parent.lastMouseOver = td;
      this.callListener("onCellMouseOver", event, _classPrivateFieldGet5(_wtTable, this).getCoords(td), td);
    }
  }
  /**
   * OnMouseOut callback.
   *
   * @private
   * @param {MouseEvent} event The mouse event object.
   */
  onMouseOut(event) {
    if (!_classPrivateFieldGet5(_wtSettings, this).has("onCellMouseOut")) {
      return;
    }
    const table = _classPrivateFieldGet5(_wtTable, this).TABLE;
    const lastTD = closestDown(event.target, ["TD", "TH"], table);
    const nextTD = closestDown(event.relatedTarget, ["TD", "TH"], table);
    const parent = _classPrivateFieldGet5(_parent, this) || this;
    if (lastTD && lastTD !== nextTD && isChildOf(lastTD, table)) {
      this.callListener("onCellMouseOut", event, _classPrivateFieldGet5(_wtTable, this).getCoords(lastTD), lastTD);
      if (nextTD === null) {
        parent.lastMouseOver = null;
      }
    }
  }
  /**
   * OnMouseUp callback.
   *
   * @private
   * @param {MouseEvent} event The mouse event object.
   */
  onMouseUp(event) {
    const cell = this.parentCell(event.target);
    if (cell.TD && _classPrivateFieldGet5(_wtSettings, this).has("onCellMouseUp")) {
      this.callListener("onCellMouseUp", event, cell.coords, cell.TD);
    }
    if (event.button !== 0 && !this.touchApplied) {
      return;
    }
    if (cell.TD === _classPrivateFieldGet5(_dblClickOrigin, this)[0] && cell.TD === _classPrivateFieldGet5(_dblClickOrigin, this)[1]) {
      if (hasClass(event.target, "corner")) {
        this.callListener("onCellCornerDblClick", event, cell.coords, cell.TD);
      } else {
        this.callListener("onCellDblClick", event, cell.coords, cell.TD);
      }
      _classPrivateFieldGet5(_dblClickOrigin, this)[0] = null;
      _classPrivateFieldGet5(_dblClickOrigin, this)[1] = null;
    } else if (cell.TD === _classPrivateFieldGet5(_dblClickOrigin, this)[0]) {
      _classPrivateFieldGet5(_dblClickOrigin, this)[1] = cell.TD;
      clearTimeout(_classPrivateFieldGet5(_dblClickTimeout, this)[1]);
      _classPrivateFieldGet5(_dblClickTimeout, this)[1] = setTimeout(() => {
        _classPrivateFieldGet5(_dblClickOrigin, this)[1] = null;
      }, 500);
    }
  }
  /**
   * OnTouchStart callback. Simulates mousedown event.
   *
   * @private
   * @param {MouseEvent} event The mouse event object.
   */
  onTouchStart(event) {
    _classPrivateFieldSet5(_selectedCellBeforeTouchEnd, this, _classPrivateFieldGet5(_selectionManager, this).getFocusSelection().cellRange);
    this.touchApplied = true;
    this.onMouseDown(event);
  }
  /**
   * OnTouchEnd callback. Simulates mouseup event.
   *
   * @private
   * @param {MouseEvent} event The mouse event object.
   */
  onTouchEnd(event) {
    var _this$parentCell;
    const target = event.target;
    const parentCellCoords = (_this$parentCell = this.parentCell(target)) === null || _this$parentCell === void 0 ? void 0 : _this$parentCell.coords;
    const isCellsRange = isDefined(parentCellCoords) && parentCellCoords.row >= 0 && parentCellCoords.col >= 0;
    const isEventCancelable = event.cancelable && isCellsRange && _classPrivateFieldGet5(_wtSettings, this).getSetting("isDataViewInstance");
    if (isEventCancelable) {
      const interactiveElements = ["A", "BUTTON", "INPUT"];
      if (isIOS() && (isChromeWebKit() || isFirefoxWebKit()) && this.selectedCellWasTouched(target) && !interactiveElements.includes(target.tagName)) {
        event.preventDefault();
      } else if (!this.selectedCellWasTouched(target)) {
        event.preventDefault();
      }
    }
    this.onMouseUp(event);
    this.touchApplied = false;
  }
  /**
   * Call listener with backward compatibility.
   *
   * @private
   * @param {string} name Name of listener.
   * @param {MouseEvent} event The event object.
   * @param {CellCoords} coords Coordinates.
   * @param {HTMLElement} target Event target.
   */
  callListener(name, event, coords, target) {
    const listener = _classPrivateFieldGet5(_wtSettings, this).getSettingPure(name);
    if (listener) {
      listener(event, coords, target, _classPrivateFieldGet5(_facadeGetter, this).call(this));
    }
  }
  /**
   * Clears double-click timeouts and destroys the internal eventManager instance.
   */
  destroy() {
    clearTimeout(_classPrivateFieldGet5(_dblClickTimeout, this)[0]);
    clearTimeout(_classPrivateFieldGet5(_dblClickTimeout, this)[1]);
    _classPrivateFieldGet5(_eventManager, this).destroy();
  }
};
var event_default = Event;

// node_modules/handsontable/helpers/unicode.mjs
var KEY_CODES = {
  ALT: 18,
  ARROW_DOWN: 40,
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
  ARROW_UP: 38,
  AUDIO_DOWN: isFirefox() ? 182 : 174,
  AUDIO_MUTE: isFirefox() ? 181 : 173,
  AUDIO_UP: isFirefox() ? 183 : 175,
  BACKSPACE: 8,
  CAPS_LOCK: 20,
  COMMA: 188,
  COMMAND_LEFT: 91,
  COMMAND_RIGHT: 93,
  COMMAND_FIREFOX: 224,
  CONTROL: 17,
  DELETE: 46,
  END: 35,
  ENTER: 13,
  ESCAPE: 27,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  F13: 124,
  F14: 125,
  F15: 126,
  F16: 127,
  F17: 128,
  F18: 129,
  F19: 130,
  HOME: 36,
  INSERT: 45,
  MEDIA_NEXT: 176,
  MEDIA_PLAY_PAUSE: 179,
  MEDIA_PREV: 177,
  MEDIA_STOP: 178,
  NULL: 0,
  NUM_LOCK: 144,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PAUSE: 19,
  PERIOD: 190,
  SCROLL_LOCK: 145,
  SHIFT: 16,
  SPACE: 32,
  TAB: 9,
  A: 65,
  C: 67,
  D: 68,
  F: 70,
  L: 76,
  O: 79,
  P: 80,
  S: 83,
  V: 86,
  X: 88,
  Y: 89,
  Z: 90
};
var FUNCTION_KEYS = [KEY_CODES.ALT, KEY_CODES.ARROW_DOWN, KEY_CODES.ARROW_LEFT, KEY_CODES.ARROW_RIGHT, KEY_CODES.ARROW_UP, KEY_CODES.AUDIO_DOWN, KEY_CODES.AUDIO_MUTE, KEY_CODES.AUDIO_UP, KEY_CODES.BACKSPACE, KEY_CODES.CAPS_LOCK, KEY_CODES.DELETE, KEY_CODES.END, KEY_CODES.ENTER, KEY_CODES.ESCAPE, KEY_CODES.F1, KEY_CODES.F2, KEY_CODES.F3, KEY_CODES.F4, KEY_CODES.F5, KEY_CODES.F6, KEY_CODES.F7, KEY_CODES.F8, KEY_CODES.F9, KEY_CODES.F10, KEY_CODES.F11, KEY_CODES.F12, KEY_CODES.F13, KEY_CODES.F14, KEY_CODES.F15, KEY_CODES.F16, KEY_CODES.F17, KEY_CODES.F18, KEY_CODES.F19, KEY_CODES.HOME, KEY_CODES.INSERT, KEY_CODES.MEDIA_NEXT, KEY_CODES.MEDIA_PLAY_PAUSE, KEY_CODES.MEDIA_PREV, KEY_CODES.MEDIA_STOP, KEY_CODES.NULL, KEY_CODES.NUM_LOCK, KEY_CODES.PAGE_DOWN, KEY_CODES.PAGE_UP, KEY_CODES.PAUSE, KEY_CODES.SCROLL_LOCK, KEY_CODES.SHIFT, KEY_CODES.TAB];
function isPrintableChar(keyCode) {
  return keyCode === 32 || // space
  keyCode >= 48 && keyCode <= 57 || // 0-9
  keyCode >= 96 && keyCode <= 111 || // numpad
  keyCode >= 186 && keyCode <= 192 || // ;=,-./`
  keyCode >= 219 && keyCode <= 222 || // []{}\|"'
  keyCode >= 226 || // special chars (229 for Asian chars)
  keyCode >= 65 && keyCode <= 90;
}
function isFunctionKey(keyCode) {
  return FUNCTION_KEYS.includes(keyCode);
}
function isCtrlMetaKey(keyCode) {
  return [KEY_CODES.CONTROL, KEY_CODES.COMMAND_LEFT, KEY_CODES.COMMAND_RIGHT, KEY_CODES.COMMAND_FIREFOX].includes(keyCode);
}
function isKey(keyCode, baseCode) {
  const keys = baseCode.split("|");
  let result = false;
  arrayEach(keys, (key) => {
    if (keyCode === KEY_CODES[key]) {
      result = true;
      return false;
    }
  });
  return result;
}

// node_modules/handsontable/3rdparty/walkontable/src/filter/column.mjs
function _defineProperty8(obj, key, value) {
  key = _toPropertyKey8(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey8(t) {
  var i = _toPrimitive8(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive8(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var ColumnFilter = class {
  /**
   * @param {number} offset The scroll horizontal offset.
   * @param {number} total The total width of the table.
   * @param {number} countTH The number of rendered row headers.
   */
  constructor(offset2, total, countTH) {
    _defineProperty8(this, "offset", void 0);
    _defineProperty8(this, "total", void 0);
    _defineProperty8(this, "countTH", void 0);
    this.offset = offset2;
    this.total = total;
    this.countTH = countTH;
  }
  /**
   * @param {number} index The visual column index.
   * @returns {number}
   */
  offsetted(index2) {
    return index2 + this.offset;
  }
  /**
   * @param {number} index The visual column index.
   * @returns {number}
   */
  unOffsetted(index2) {
    return index2 - this.offset;
  }
  /**
   * @param {number} index The visual column index.
   * @returns {number}
   */
  renderedToSource(index2) {
    return this.offsetted(index2);
  }
  /**
   * @param {number} index The visual column index.
   * @returns {number}
   */
  sourceToRendered(index2) {
    return this.unOffsetted(index2);
  }
  /**
   * @param {number} index The visual column index.
   * @returns {number}
   */
  offsettedTH(index2) {
    return index2 - this.countTH;
  }
  /**
   * @param {number} index The visual column index.
   * @returns {number}
   */
  unOffsettedTH(index2) {
    return index2 + this.countTH;
  }
  /**
   * @param {number} index The visual column index.
   * @returns {number}
   */
  visibleRowHeadedColumnToSourceColumn(index2) {
    return this.renderedToSource(this.offsettedTH(index2));
  }
  /**
   * @param {number} index The visual column index.
   * @returns {number}
   */
  sourceColumnToVisibleRowHeadedColumn(index2) {
    return this.unOffsettedTH(this.sourceToRendered(index2));
  }
};
var column_default = ColumnFilter;

// node_modules/handsontable/3rdparty/walkontable/src/filter/row.mjs
function _defineProperty9(obj, key, value) {
  key = _toPropertyKey9(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey9(t) {
  var i = _toPrimitive9(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive9(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var RowFilter = class {
  /**
   * @param {number} offset The scroll vertical offset.
   * @param {number} total The total height of the table.
   * @param {number} countTH The number of rendered column headers.
   */
  constructor(offset2, total, countTH) {
    _defineProperty9(this, "offset", void 0);
    _defineProperty9(this, "total", void 0);
    _defineProperty9(this, "countTH", void 0);
    this.offset = offset2;
    this.total = total;
    this.countTH = countTH;
  }
  /**
   * @param {number} index The visual row index.
   * @returns {number}
   */
  offsetted(index2) {
    return index2 + this.offset;
  }
  /**
   * @param {number} index The visual row index.
   * @returns {number}
   */
  unOffsetted(index2) {
    return index2 - this.offset;
  }
  /**
   * @param {number} index The visual row index.
   * @returns {number}
   */
  renderedToSource(index2) {
    return this.offsetted(index2);
  }
  /**
   * @param {number} index The visual row index.
   * @returns {number}
   */
  sourceToRendered(index2) {
    return this.unOffsetted(index2);
  }
  /**
   * @param {number} index The visual row index.
   * @returns {number}
   */
  offsettedTH(index2) {
    return index2 - this.countTH;
  }
  /**
   * @param {number} index The visual row index.
   * @returns {number}
   */
  unOffsettedTH(index2) {
    return index2 + this.countTH;
  }
  /**
   * @param {number} index The visual row index.
   * @returns {number}
   */
  visibleColHeadedRowToSourceRow(index2) {
    return this.renderedToSource(this.offsettedTH(index2));
  }
  /**
   * @param {number} index The visual row index.
   * @returns {number}
   */
  sourceRowToVisibleColHeadedRow(index2) {
    return this.unOffsettedTH(this.sourceToRendered(index2));
  }
};
var row_default = RowFilter;

// node_modules/handsontable/3rdparty/walkontable/src/utils/orderView/constants.mjs
var WORKING_SPACE_ALL = 0;
var WORKING_SPACE_TOP = 1;
var WORKING_SPACE_BOTTOM = 2;

// node_modules/handsontable/3rdparty/walkontable/src/utils/orderView/viewSize.mjs
function _defineProperty10(obj, key, value) {
  key = _toPropertyKey10(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey10(t) {
  var i = _toPrimitive10(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive10(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var ViewSize = class {
  constructor() {
    _defineProperty10(this, "currentSize", 0);
    _defineProperty10(this, "nextSize", 0);
    _defineProperty10(this, "currentOffset", 0);
    _defineProperty10(this, "nextOffset", 0);
  }
  /**
   * Sets new size of the rendered DOM elements.
   *
   * @param {number} size The size.
   */
  setSize(size) {
    this.currentSize = this.nextSize;
    this.nextSize = size;
  }
  /**
   * Sets new offset.
   *
   * @param {number} offset The offset.
   */
  setOffset(offset2) {
    this.currentOffset = this.nextOffset;
    this.nextOffset = offset2;
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/utils/orderView/viewSizeSet.mjs
function _defineProperty11(obj, key, value) {
  key = _toPropertyKey11(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey11(t) {
  var i = _toPrimitive11(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive11(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var ViewSizeSet = class {
  constructor() {
    _defineProperty11(this, "size", new ViewSize());
    _defineProperty11(this, "workingSpace", WORKING_SPACE_ALL);
    _defineProperty11(this, "sharedSize", null);
  }
  /**
   * Sets the size for rendered elements. It can be a size for rows, cells or size for row
   * headers etc.
   *
   * @param {number} size The size.
   */
  setSize(size) {
    this.size.setSize(size);
  }
  /**
   * Sets the offset for rendered elements. The offset describes the shift between 0 and
   * the first rendered element according to the scroll position.
   *
   * @param {number} offset The offset.
   */
  setOffset(offset2) {
    this.size.setOffset(offset2);
  }
  /**
   * Returns ViewSize instance.
   *
   * @returns {ViewSize}
   */
  getViewSize() {
    return this.size;
  }
  /**
   * Checks if this ViewSizeSet is sharing the size with another instance.
   *
   * @returns {boolean}
   */
  isShared() {
    return this.sharedSize instanceof ViewSize;
  }
  /**
   * Checks what working space describes this size instance.
   *
   * @param {number} workingSpace The number which describes the type of the working space (see constants.js).
   * @returns {boolean}
   */
  isPlaceOn(workingSpace) {
    return this.workingSpace === workingSpace;
  }
  /**
   * Appends the ViewSizeSet instance to this instance that turns it into a shared mode.
   *
   * @param {ViewSizeSet} viewSize The instance of the ViewSizeSet class.
   */
  append(viewSize) {
    this.workingSpace = WORKING_SPACE_TOP;
    viewSize.workingSpace = WORKING_SPACE_BOTTOM;
    this.sharedSize = viewSize.getViewSize();
  }
  /**
   * Prepends the ViewSize instance to this instance that turns it into a shared mode.
   *
   * @param {ViewSizeSet} viewSize The instance of the ViewSizeSet class.
   */
  prepend(viewSize) {
    this.workingSpace = WORKING_SPACE_BOTTOM;
    viewSize.workingSpace = WORKING_SPACE_TOP;
    this.sharedSize = viewSize.getViewSize();
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/utils/orderView/view.mjs
function _defineProperty12(obj, key, value) {
  key = _toPropertyKey12(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey12(t) {
  var i = _toPrimitive12(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive12(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var OrderView = class {
  constructor(rootNode, nodesPool, childNodeType) {
    _defineProperty12(this, "rootNode", void 0);
    _defineProperty12(this, "nodesPool", void 0);
    _defineProperty12(this, "sizeSet", new ViewSizeSet());
    _defineProperty12(this, "childNodeType", void 0);
    _defineProperty12(this, "visualIndex", 0);
    _defineProperty12(this, "collectedNodes", []);
    this.rootNode = rootNode;
    this.nodesPool = nodesPool;
    this.childNodeType = childNodeType.toUpperCase();
  }
  /**
   * Sets the size for rendered elements. It can be a size for rows, cells or size for row
   * headers etc. It depends for what table renderer this instance was created.
   *
   * @param {number} size The size.
   * @returns {OrderView}
   */
  setSize(size) {
    this.sizeSet.setSize(size);
    return this;
  }
  /**
   * Sets the offset for rendered elements. The offset describes the shift between 0 and
   * the first rendered element according to the scroll position.
   *
   * @param {number} offset The offset.
   * @returns {OrderView}
   */
  setOffset(offset2) {
    this.sizeSet.setOffset(offset2);
    return this;
  }
  /**
   * Checks if this instance of the view shares the root node with another instance. This happens only once when
   * a row (TR) as a root node is managed by two OrderView instances. If this happens another DOM injection
   * algorithm is performed to achieve consistent order.
   *
   * @returns {boolean}
   */
  isSharedViewSet() {
    return this.sizeSet.isShared();
  }
  /**
   * Returns rendered DOM element based on visual index.
   *
   * @param {number} visualIndex The visual index.
   * @returns {HTMLElement}
   */
  getNode(visualIndex) {
    return visualIndex < this.collectedNodes.length ? this.collectedNodes[visualIndex] : null;
  }
  /**
   * Returns currently processed DOM element.
   *
   * @returns {HTMLElement}
   */
  getCurrentNode() {
    const length = this.collectedNodes.length;
    return length > 0 ? this.collectedNodes[length - 1] : null;
  }
  /**
   * Returns rendered child count for this instance.
   *
   * @returns {number}
   */
  getRenderedChildCount() {
    const {
      rootNode,
      sizeSet
    } = this;
    let childElementCount = 0;
    if (this.isSharedViewSet()) {
      let element = rootNode.firstElementChild;
      while (element) {
        if (element.tagName === this.childNodeType) {
          childElementCount += 1;
        } else if (sizeSet.isPlaceOn(WORKING_SPACE_TOP)) {
          break;
        }
        element = element.nextElementSibling;
      }
    } else {
      childElementCount = rootNode.childElementCount;
    }
    return childElementCount;
  }
  /**
   * Setups and prepares all necessary properties and start the rendering process.
   * This method has to be called only once (at the start) for the render cycle.
   */
  start() {
    this.collectedNodes.length = 0;
    this.visualIndex = 0;
    const {
      rootNode,
      sizeSet
    } = this;
    const isShared = this.isSharedViewSet();
    const {
      nextSize
    } = sizeSet.getViewSize();
    let childElementCount = this.getRenderedChildCount();
    while (childElementCount < nextSize) {
      const newNode = this.nodesPool();
      if (!isShared || isShared && sizeSet.isPlaceOn(WORKING_SPACE_BOTTOM)) {
        rootNode.appendChild(newNode);
      } else {
        rootNode.insertBefore(newNode, rootNode.firstChild);
      }
      childElementCount += 1;
    }
    const isSharedPlacedOnTop = isShared && sizeSet.isPlaceOn(WORKING_SPACE_TOP);
    while (childElementCount > nextSize) {
      rootNode.removeChild(isSharedPlacedOnTop ? rootNode.firstChild : rootNode.lastChild);
      childElementCount -= 1;
    }
  }
  /**
   * Renders the DOM element based on visual index (which is calculated internally).
   * This method has to be called as many times as the size count is met (to cover all previously rendered DOM elements).
   */
  render() {
    const {
      rootNode,
      sizeSet
    } = this;
    let visualIndex = this.visualIndex;
    if (this.isSharedViewSet() && sizeSet.isPlaceOn(WORKING_SPACE_BOTTOM)) {
      visualIndex += sizeSet.sharedSize.nextSize;
    }
    let node = rootNode.childNodes[visualIndex];
    if (node.tagName !== this.childNodeType) {
      const newNode = this.nodesPool();
      rootNode.replaceChild(newNode, node);
      node = newNode;
    }
    this.collectedNodes.push(node);
    this.visualIndex += 1;
  }
  /**
   * Ends the render process.
   * This method has to be called only once (at the end) for the render cycle.
   */
  end() {
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/utils/orderView/sharedView.mjs
var SharedOrderView = class extends OrderView {
  /**
   * The method results in merging external order view into the current order. This happens only for order views which
   * operate on the same root node.
   *
   * In the table, there is only one scenario when this happens. TR root element
   * has a common root node with cells order view and row headers order view. Both classes have to share
   * information about their order sizes to make proper diff calculations.
   *
   * @param {OrderView} orderView The order view to merging with. The view will be added at the beginning of the list.
   * @returns {SharedOrderView}
   */
  prependView(orderView) {
    this.sizeSet.prepend(orderView.sizeSet);
    orderView.sizeSet.append(this.sizeSet);
    return this;
  }
  /**
   * The method results in merging external order view into the current order. This happens only for order views which
   * operate on the same root node.
   *
   * In the table, there is only one scenario when this happens. TR root element
   * has a common root node with cells order view and row headers order view. Both classes have to share
   * information about their order sizes to make proper diff calculations.
   *
   * @param {OrderView} orderView The order view to merging with. The view will be added at the end of the list.
   * @returns {SharedOrderView}
   */
  appendView(orderView) {
    this.sizeSet.append(orderView.sizeSet);
    orderView.sizeSet.prepend(this.sizeSet);
    return this;
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/utils/nodesPool.mjs
function _defineProperty13(obj, key, value) {
  key = _toPropertyKey13(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey13(t) {
  var i = _toPrimitive13(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive13(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var NodesPool = class {
  constructor(nodeType) {
    _defineProperty13(this, "nodeType", void 0);
    this.nodeType = nodeType.toUpperCase();
  }
  /**
   * Set document owner for this instance.
   *
   * @param {HTMLDocument} rootDocument The document window owner.
   */
  setRootDocument(rootDocument) {
    this.rootDocument = rootDocument;
  }
  /**
   * Obtains an element. The returned elements in the feature can be cached.
   *
   * @returns {HTMLElement}
   */
  obtain() {
    return this.rootDocument.createElement(this.nodeType);
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/renderer/_base.mjs
function _defineProperty14(obj, key, value) {
  key = _toPropertyKey14(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey14(t) {
  var i = _toPrimitive14(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive14(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var BaseRenderer = class {
  constructor(nodeType, rootNode) {
    _defineProperty14(this, "nodesPool", null);
    _defineProperty14(this, "nodeType", void 0);
    _defineProperty14(this, "rootNode", void 0);
    _defineProperty14(this, "table", null);
    _defineProperty14(this, "renderedNodes", 0);
    this.nodesPool = typeof nodeType === "string" ? new NodesPool(nodeType) : null;
    this.nodeType = nodeType;
    this.rootNode = rootNode;
  }
  /**
   * Sets the table renderer instance to the current renderer.
   *
   * @param {TableRenderer} table The TableRenderer instance.
   */
  setTable(table) {
    if (this.nodesPool) {
      this.nodesPool.setRootDocument(table.rootDocument);
    }
    this.table = table;
  }
  /**
   * Adjusts the number of rendered nodes.
   */
  adjust() {
  }
  /**
   * Renders the contents to the elements.
   */
  render() {
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/renderer/rowHeaders.mjs
function _defineProperty15(obj, key, value) {
  key = _toPropertyKey15(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey15(t) {
  var i = _toPrimitive15(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive15(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var RowHeadersRenderer = class extends BaseRenderer {
  constructor() {
    super("TH");
    _defineProperty15(this, "orderViews", /* @__PURE__ */ new WeakMap());
    _defineProperty15(this, "sourceRowIndex", 0);
  }
  /**
   * Obtains the instance of the SharedOrderView class which is responsible for rendering the nodes to the root node.
   *
   * @param {HTMLTableRowElement} rootNode The TR element, which is root element for row headers (TH).
   * @returns {SharedOrderView}
   */
  obtainOrderView(rootNode) {
    let orderView;
    if (this.orderViews.has(rootNode)) {
      orderView = this.orderViews.get(rootNode);
    } else {
      orderView = new SharedOrderView(rootNode, (sourceColumnIndex) => this.nodesPool.obtain(this.sourceRowIndex, sourceColumnIndex), this.nodeType);
      this.orderViews.set(rootNode, orderView);
    }
    return orderView;
  }
  /**
   * Renders the cells.
   */
  render() {
    const {
      rowsToRender,
      rowHeaderFunctions,
      rowHeadersCount,
      rows,
      cells
    } = this.table;
    for (let visibleRowIndex = 0; visibleRowIndex < rowsToRender; visibleRowIndex++) {
      const sourceRowIndex = this.table.renderedRowToSource(visibleRowIndex);
      const TR = rows.getRenderedNode(visibleRowIndex);
      this.sourceRowIndex = sourceRowIndex;
      const orderView = this.obtainOrderView(TR);
      const cellsView = cells.obtainOrderView(TR);
      orderView.appendView(cellsView).setSize(rowHeadersCount).setOffset(this.table.renderedColumnToSource(0)).start();
      for (let visibleColumnIndex = 0; visibleColumnIndex < rowHeadersCount; visibleColumnIndex++) {
        orderView.render();
        const TH = orderView.getCurrentNode();
        TH.className = "";
        TH.removeAttribute("style");
        removeAttribute(TH, [new RegExp("aria-(.*)"), new RegExp("role")]);
        if (this.table.isAriaEnabled()) {
          setAttribute(TH, [A11Y_ROWHEADER(), A11Y_SCOPE_ROW(), A11Y_COLINDEX(visibleColumnIndex + 1), A11Y_TABINDEX(-1)]);
        }
        rowHeaderFunctions[visibleColumnIndex](sourceRowIndex, TH, visibleColumnIndex);
      }
      orderView.end();
    }
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/renderer/columnHeaders.mjs
var ColumnHeadersRenderer = class extends BaseRenderer {
  constructor(rootNode) {
    super(null, rootNode);
  }
  /**
   * Adjusts the number of the rendered elements.
   */
  adjust() {
    const {
      columnHeadersCount,
      rowHeadersCount
    } = this.table;
    let TR = this.rootNode.firstChild;
    if (columnHeadersCount) {
      const {
        columnsToRender
      } = this.table;
      const allColumnsToRender = columnsToRender + rowHeadersCount;
      for (let i = 0, len = columnHeadersCount; i < len; i++) {
        TR = this.rootNode.childNodes[i];
        if (!TR) {
          TR = this.table.rootDocument.createElement("tr");
          this.rootNode.appendChild(TR);
        }
        this.renderedNodes = TR.childNodes.length;
        while (this.renderedNodes < allColumnsToRender) {
          TR.appendChild(this.table.rootDocument.createElement("th"));
          this.renderedNodes += 1;
        }
        while (this.renderedNodes > allColumnsToRender) {
          TR.removeChild(TR.lastChild);
          this.renderedNodes -= 1;
        }
      }
      const theadChildrenLength = this.rootNode.childNodes.length;
      if (theadChildrenLength > columnHeadersCount) {
        for (let i = columnHeadersCount; i < theadChildrenLength; i++) {
          this.rootNode.removeChild(this.rootNode.lastChild);
        }
      }
    } else if (TR) {
      empty(TR);
    }
  }
  /**
   * Renders the TH elements.
   */
  render() {
    const {
      columnHeadersCount
    } = this.table;
    if (this.table.isAriaEnabled()) {
      setAttribute(this.rootNode, [A11Y_ROWGROUP()]);
    }
    for (let rowHeaderIndex = 0; rowHeaderIndex < columnHeadersCount; rowHeaderIndex += 1) {
      const {
        columnHeaderFunctions,
        columnsToRender,
        rowHeadersCount
      } = this.table;
      const TR = this.rootNode.childNodes[rowHeaderIndex];
      if (this.table.isAriaEnabled()) {
        setAttribute(TR, [A11Y_ROW(), A11Y_ROWINDEX(rowHeaderIndex + 1)]);
      }
      for (let renderedColumnIndex = -1 * rowHeadersCount; renderedColumnIndex < columnsToRender; renderedColumnIndex += 1) {
        const sourceColumnIndex = this.table.renderedColumnToSource(renderedColumnIndex);
        const TH = TR.childNodes[renderedColumnIndex + rowHeadersCount];
        TH.className = "";
        TH.removeAttribute("style");
        removeAttribute(TH, [new RegExp("aria-(.*)"), new RegExp("role")]);
        if (this.table.isAriaEnabled()) {
          setAttribute(TH, [A11Y_COLINDEX(renderedColumnIndex + 1 + this.table.rowHeadersCount), A11Y_TABINDEX(-1), A11Y_COLUMNHEADER(), ...renderedColumnIndex >= 0 ? [A11Y_SCOPE_COL()] : [
            // Adding `role=row` to the corner headers to prevent
            // https://github.com/handsontable/dev-handsontable/issues/1574
            A11Y_ROW()
          ]]);
        }
        columnHeaderFunctions[rowHeaderIndex](sourceColumnIndex, TH, rowHeaderIndex);
      }
    }
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/renderer/colGroup.mjs
var performanceWarningAppeared = false;
var ColGroupRenderer = class extends BaseRenderer {
  constructor(rootNode) {
    super(null, rootNode);
  }
  /**
   * Adjusts the number of the rendered elements.
   */
  adjust() {
    const {
      columnsToRender,
      rowHeadersCount
    } = this.table;
    const allColumnsToRender = columnsToRender + rowHeadersCount;
    while (this.renderedNodes < allColumnsToRender) {
      this.rootNode.appendChild(this.table.rootDocument.createElement("col"));
      this.renderedNodes += 1;
    }
    while (this.renderedNodes > allColumnsToRender) {
      this.rootNode.removeChild(this.rootNode.lastChild);
      this.renderedNodes -= 1;
    }
  }
  /**
   * Renders the col group elements.
   */
  render() {
    this.adjust();
    const {
      columnsToRender,
      rowHeadersCount
    } = this.table;
    if (!performanceWarningAppeared && columnsToRender > 1e3) {
      performanceWarningAppeared = true;
      warn(toSingleLine`Performance tip: Handsontable rendered more than 1000 visible columns.\x20
        Consider limiting the number of rendered columns by specifying the table width and/or\x20
        turning off the "renderAllColumns" option.`);
    }
    for (let visibleColumnIndex = 0; visibleColumnIndex < rowHeadersCount; visibleColumnIndex++) {
      const sourceColumnIndex = this.table.renderedColumnToSource(visibleColumnIndex);
      const width = this.table.columnUtils.getHeaderWidth(sourceColumnIndex);
      this.rootNode.childNodes[visibleColumnIndex].style.width = `${width}px`;
    }
    for (let visibleColumnIndex = 0; visibleColumnIndex < columnsToRender; visibleColumnIndex++) {
      const sourceColumnIndex = this.table.renderedColumnToSource(visibleColumnIndex);
      const width = this.table.columnUtils.getStretchedColumnWidth(sourceColumnIndex);
      this.rootNode.childNodes[visibleColumnIndex + rowHeadersCount].style.width = `${width}px`;
    }
    const firstChild = this.rootNode.firstChild;
    if (firstChild) {
      addClass(firstChild, "rowHeader");
    }
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/renderer/rows.mjs
function _defineProperty16(obj, key, value) {
  key = _toPropertyKey16(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey16(t) {
  var i = _toPrimitive16(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive16(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var performanceWarningAppeared2 = false;
var RowsRenderer = class extends BaseRenderer {
  constructor(rootNode) {
    super("TR", rootNode);
    _defineProperty16(this, "orderView", void 0);
    this.orderView = new OrderView(rootNode, (sourceRowIndex) => this.nodesPool.obtain(sourceRowIndex), this.nodeType);
  }
  /**
   * Returns currently rendered node.
   *
   * @param {string} visualIndex Visual index of the rendered node (it always goeas from 0 to N).
   * @returns {HTMLTableRowElement}
   */
  getRenderedNode(visualIndex) {
    return this.orderView.getNode(visualIndex);
  }
  /**
   * Renders the cells.
   */
  render() {
    const {
      rowsToRender
    } = this.table;
    if (!performanceWarningAppeared2 && rowsToRender > 1e3) {
      performanceWarningAppeared2 = true;
      warn(toSingleLine`Performance tip: Handsontable rendered more than 1000 visible rows.\x20
        Consider limiting the number of rendered rows by specifying the table height and/or\x20
        turning off the "renderAllRows" option.`);
    }
    if (this.table.isAriaEnabled()) {
      setAttribute(this.rootNode, [A11Y_ROWGROUP()]);
    }
    this.orderView.setSize(rowsToRender).setOffset(this.table.renderedRowToSource(0)).start();
    for (let visibleRowIndex = 0; visibleRowIndex < rowsToRender; visibleRowIndex++) {
      this.orderView.render();
      const TR = this.orderView.getCurrentNode();
      const sourceRowIndex = this.table.renderedRowToSource(visibleRowIndex);
      if (this.table.isAriaEnabled()) {
        var _this$table$rowUtils$, _this$table$rowUtils;
        setAttribute(TR, [
          A11Y_ROW(),
          // `aria-rowindex` is incremented by both tbody and thead rows.
          A11Y_ROWINDEX(sourceRowIndex + ((_this$table$rowUtils$ = (_this$table$rowUtils = this.table.rowUtils) === null || _this$table$rowUtils === void 0 || (_this$table$rowUtils = _this$table$rowUtils.dataAccessObject) === null || _this$table$rowUtils === void 0 ? void 0 : _this$table$rowUtils.columnHeaders.length) !== null && _this$table$rowUtils$ !== void 0 ? _this$table$rowUtils$ : 0) + 1)
        ]);
      }
    }
    this.orderView.end();
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/renderer/cells.mjs
function _defineProperty17(obj, key, value) {
  key = _toPropertyKey17(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey17(t) {
  var i = _toPrimitive17(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive17(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var CellsRenderer = class extends BaseRenderer {
  constructor() {
    super("TD");
    _defineProperty17(this, "orderViews", /* @__PURE__ */ new WeakMap());
    _defineProperty17(this, "sourceRowIndex", 0);
  }
  /**
   * Obtains the instance of the SharedOrderView class which is responsible for rendering the nodes to the root node.
   *
   * @param {HTMLTableRowElement} rootNode The TR element, which is root element for cells (TD).
   * @returns {SharedOrderView}
   */
  obtainOrderView(rootNode) {
    let orderView;
    if (this.orderViews.has(rootNode)) {
      orderView = this.orderViews.get(rootNode);
    } else {
      orderView = new SharedOrderView(rootNode, (sourceColumnIndex) => this.nodesPool.obtain(this.sourceRowIndex, sourceColumnIndex), this.nodeType);
      this.orderViews.set(rootNode, orderView);
    }
    return orderView;
  }
  /**
   * Renders the cells.
   */
  render() {
    const {
      rowsToRender,
      columnsToRender,
      rows,
      rowHeaders
    } = this.table;
    for (let visibleRowIndex = 0; visibleRowIndex < rowsToRender; visibleRowIndex++) {
      const sourceRowIndex = this.table.renderedRowToSource(visibleRowIndex);
      const TR = rows.getRenderedNode(visibleRowIndex);
      this.sourceRowIndex = sourceRowIndex;
      const orderView = this.obtainOrderView(TR);
      const rowHeadersView = rowHeaders.obtainOrderView(TR);
      orderView.prependView(rowHeadersView).setSize(columnsToRender).setOffset(this.table.renderedColumnToSource(0)).start();
      for (let visibleColumnIndex = 0; visibleColumnIndex < columnsToRender; visibleColumnIndex++) {
        orderView.render();
        const TD = orderView.getCurrentNode();
        const sourceColumnIndex = this.table.renderedColumnToSource(visibleColumnIndex);
        if (!hasClass(TD, "hide")) {
          TD.className = "";
        }
        TD.removeAttribute("style");
        TD.removeAttribute("dir");
        removeAttribute(TD, [new RegExp("aria-(.*)"), new RegExp("role")]);
        this.table.cellRenderer(sourceRowIndex, sourceColumnIndex, TD);
        if (this.table.isAriaEnabled()) {
          var _this$table$rowUtils$, _this$table$rowUtils;
          setAttribute(TD, [
            ...TD.hasAttribute("role") ? [] : [A11Y_GRIDCELL()],
            A11Y_TABINDEX(-1),
            // `aria-colindex` is incremented by both tbody and thead rows.
            A11Y_COLINDEX(sourceColumnIndex + ((_this$table$rowUtils$ = (_this$table$rowUtils = this.table.rowUtils) === null || _this$table$rowUtils === void 0 || (_this$table$rowUtils = _this$table$rowUtils.dataAccessObject) === null || _this$table$rowUtils === void 0 ? void 0 : _this$table$rowUtils.rowHeaders.length) !== null && _this$table$rowUtils$ !== void 0 ? _this$table$rowUtils$ : 0) + 1)
          ]);
        }
      }
      orderView.end();
    }
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/renderer/table.mjs
function _defineProperty18(obj, key, value) {
  key = _toPropertyKey18(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey18(t) {
  var i = _toPrimitive18(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive18(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var TableRenderer = class {
  constructor(rootNode) {
    let {
      cellRenderer
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _defineProperty18(this, "rootNode", void 0);
    _defineProperty18(this, "rootDocument", void 0);
    _defineProperty18(this, "rowHeaders", null);
    _defineProperty18(this, "columnHeaders", null);
    _defineProperty18(this, "colGroup", null);
    _defineProperty18(this, "rows", null);
    _defineProperty18(this, "cells", null);
    _defineProperty18(this, "rowFilter", null);
    _defineProperty18(this, "columnFilter", null);
    _defineProperty18(this, "rowUtils", null);
    _defineProperty18(this, "columnUtils", null);
    _defineProperty18(this, "rowsToRender", 0);
    _defineProperty18(this, "columnsToRender", 0);
    _defineProperty18(this, "rowHeaderFunctions", []);
    _defineProperty18(this, "rowHeadersCount", 0);
    _defineProperty18(this, "columnHeaderFunctions", []);
    _defineProperty18(this, "columnHeadersCount", 0);
    _defineProperty18(this, "cellRenderer", void 0);
    this.rootNode = rootNode;
    this.rootDocument = this.rootNode.ownerDocument;
    this.cellRenderer = cellRenderer;
  }
  /**
   * Set row and column util classes.
   *
   * @param {RowUtils} rowUtils RowUtils instance which provides useful methods related to row sizes.
   * @param {ColumnUtils} columnUtils ColumnUtils instance which provides useful methods related to row sizes.
   */
  setAxisUtils(rowUtils, columnUtils) {
    this.rowUtils = rowUtils;
    this.columnUtils = columnUtils;
  }
  /**
   * Sets viewport size of the table.
   *
   * @param {number} rowsCount An amount of rows to render.
   * @param {number} columnsCount An amount of columns to render.
   */
  setViewportSize(rowsCount, columnsCount) {
    this.rowsToRender = rowsCount;
    this.columnsToRender = columnsCount;
  }
  /**
   * Sets row and column filter instances.
   *
   * @param {RowFilter} rowFilter Row filter instance which contains all necessary information about row index transformation.
   * @param {ColumnFilter} columnFilter Column filter instance which contains all necessary information about row
   * index transformation.
   */
  setFilters(rowFilter, columnFilter) {
    this.rowFilter = rowFilter;
    this.columnFilter = columnFilter;
  }
  /**
   * Sets row and column header functions.
   *
   * @param {Function[]} rowHeaders Row header functions. Factories for creating content for row headers.
   * @param {Function[]} columnHeaders Column header functions. Factories for creating content for column headers.
   */
  setHeaderContentRenderers(rowHeaders, columnHeaders) {
    this.rowHeaderFunctions = rowHeaders;
    this.rowHeadersCount = rowHeaders.length;
    this.columnHeaderFunctions = columnHeaders;
    this.columnHeadersCount = columnHeaders.length;
  }
  /**
   * Sets table renderers.
   *
   * @param {renderers} renderers The renderer units.
   * @param {RowHeadersRenderer} renderers.rowHeaders Row headers renderer.
   * @param {ColumnHeadersRenderer} renderers.columnHeaders Column headers renderer.
   * @param {ColGroupRenderer} renderers.colGroup Col group renderer.
   * @param {RowsRenderer} renderers.rows Rows renderer.
   * @param {CellsRenderer} renderers.cells Cells renderer.
   */
  setRenderers() {
    let {
      rowHeaders,
      columnHeaders,
      colGroup,
      rows,
      cells
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    rowHeaders.setTable(this);
    columnHeaders.setTable(this);
    colGroup.setTable(this);
    rows.setTable(this);
    cells.setTable(this);
    this.rowHeaders = rowHeaders;
    this.columnHeaders = columnHeaders;
    this.colGroup = colGroup;
    this.rows = rows;
    this.cells = cells;
  }
  /**
   * Transforms visual/rendered row index to source index.
   *
   * @param {number} rowIndex Rendered index.
   * @returns {number}
   */
  renderedRowToSource(rowIndex) {
    return this.rowFilter.renderedToSource(rowIndex);
  }
  /**
   * Transforms visual/rendered column index to source index.
   *
   * @param {number} columnIndex Rendered index.
   * @returns {number}
   */
  renderedColumnToSource(columnIndex) {
    return this.columnFilter.renderedToSource(columnIndex);
  }
  /**
   * Returns `true` if the accessibility-related ARIA tags should be added to the table, `false` otherwise.
   *
   * @returns {boolean}
   */
  isAriaEnabled() {
    return this.rowUtils.wtSettings.getSetting("ariaTags");
  }
  /**
   * Renders the table.
   */
  render() {
    this.colGroup.adjust();
    this.columnHeaders.adjust();
    this.rows.adjust();
    this.rowHeaders.adjust();
    this.columnHeaders.render();
    this.rows.render();
    this.rowHeaders.render();
    this.cells.render();
    this.columnUtils.calculateWidths();
    this.colGroup.render();
    const {
      rowsToRender,
      rows
    } = this;
    for (let visibleRowIndex = 0; visibleRowIndex < rowsToRender; visibleRowIndex++) {
      const TR = rows.getRenderedNode(visibleRowIndex);
      if (TR.firstChild) {
        const sourceRowIndex = this.renderedRowToSource(visibleRowIndex);
        const rowHeight = this.rowUtils.getHeight(sourceRowIndex);
        if (rowHeight) {
          TR.firstChild.style.height = `${rowHeight - 1}px`;
        } else {
          TR.firstChild.style.height = "";
        }
      }
    }
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/renderer/index.mjs
var Renderer = class {
  constructor() {
    let {
      TABLE,
      THEAD,
      COLGROUP,
      TBODY,
      rowUtils,
      columnUtils,
      cellRenderer
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.renderer = new TableRenderer(TABLE, {
      cellRenderer
    });
    this.renderer.setRenderers({
      rowHeaders: new RowHeadersRenderer(),
      columnHeaders: new ColumnHeadersRenderer(THEAD),
      colGroup: new ColGroupRenderer(COLGROUP),
      rows: new RowsRenderer(TBODY),
      cells: new CellsRenderer()
    });
    this.renderer.setAxisUtils(rowUtils, columnUtils);
  }
  /**
   * Sets filter calculators for newly calculated row and column position. The filters are used to transform visual
   * indexes (0 to N) to source indexes provided by Handsontable.
   *
   * @param {RowFilter} rowFilter The row filter instance.
   * @param {ColumnFilter} columnFilter The column filter instance.
   * @returns {Renderer}
   */
  setFilters(rowFilter, columnFilter) {
    this.renderer.setFilters(rowFilter, columnFilter);
    return this;
  }
  /**
   * Sets the viewport size of the rendered table.
   *
   * @param {number} rowsCount An amount of rows to render.
   * @param {number} columnsCount An amount of columns to render.
   * @returns {Renderer}
   */
  setViewportSize(rowsCount, columnsCount) {
    this.renderer.setViewportSize(rowsCount, columnsCount);
    return this;
  }
  /**
   * Sets row and column header functions.
   *
   * @param {Function[]} rowHeaders Row header functions. Factories for creating content for row headers.
   * @param {Function[]} columnHeaders Column header functions. Factories for creating content for column headers.
   * @returns {Renderer}
   */
  setHeaderContentRenderers(rowHeaders, columnHeaders) {
    this.renderer.setHeaderContentRenderers(rowHeaders, columnHeaders);
    return this;
  }
  /**
   * Adjusts the table (preparing for render).
   */
  adjust() {
    this.renderer.adjust();
  }
  /**
   * Renders the table.
   */
  render() {
    this.renderer.render();
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/utils/columnStretching.mjs
function _classPrivateFieldInitSpec6(obj, privateMap, value) {
  _checkPrivateRedeclaration6(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration6(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty19(obj, key, value) {
  key = _toPropertyKey19(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey19(t) {
  var i = _toPrimitive19(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive19(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _classPrivateFieldGet6(s, a) {
  return s.get(_assertClassBrand6(s, a));
}
function _classPrivateFieldSet6(s, a, r) {
  return s.set(_assertClassBrand6(s, a), r), r;
}
function _assertClassBrand6(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _totalTargetWidth = /* @__PURE__ */ new WeakMap();
var _totalColumns = /* @__PURE__ */ new WeakMap();
var _stretchingColumnWidthFn = /* @__PURE__ */ new WeakMap();
var _columnWidthFn = /* @__PURE__ */ new WeakMap();
var _stretchMode = /* @__PURE__ */ new WeakMap();
var ColumnStretching = class _ColumnStretching {
  /**
   * Default column width.
   *
   * @type {number}
   */
  static get DEFAULT_WIDTH() {
    return 50;
  }
  /**
   * @type {number}
   */
  /**
   * @param {ColumnStretchingOptions} options Object with all options specified for column viewport calculation.
   */
  constructor(_ref) {
    let {
      totalColumns,
      stretchMode,
      stretchingColumnWidthFn,
      columnWidthFn
    } = _ref;
    _defineProperty19(this, "stretchAllRatio", 0);
    _defineProperty19(this, "stretchLastWidth", 0);
    _defineProperty19(this, "stretchAllColumnsWidth", []);
    _classPrivateFieldInitSpec6(this, _totalTargetWidth, 0);
    _defineProperty19(this, "needVerifyLastColumnWidth", true);
    _classPrivateFieldInitSpec6(this, _totalColumns, () => 0);
    _classPrivateFieldInitSpec6(this, _stretchingColumnWidthFn, (width) => width);
    _classPrivateFieldInitSpec6(this, _columnWidthFn, (width) => width);
    _classPrivateFieldInitSpec6(this, _stretchMode, () => "none");
    _classPrivateFieldSet6(_totalColumns, this, totalColumns);
    _classPrivateFieldSet6(_stretchMode, this, stretchMode);
    _classPrivateFieldSet6(_stretchingColumnWidthFn, this, stretchingColumnWidthFn !== null && stretchingColumnWidthFn !== void 0 ? stretchingColumnWidthFn : _classPrivateFieldGet6(_stretchingColumnWidthFn, this));
    _classPrivateFieldSet6(_columnWidthFn, this, columnWidthFn !== null && columnWidthFn !== void 0 ? columnWidthFn : _classPrivateFieldGet6(_columnWidthFn, this));
  }
  /**
   * Recalculate columns stretching.
   *
   * @param {number} totalWidth The total width of the table.
   */
  refreshStretching(totalWidth) {
    if (_classPrivateFieldGet6(_stretchMode, this).call(this) === "none") {
      return;
    }
    this.stretchAllRatio = 0;
    this.stretchAllColumnsWidth = [];
    this.needVerifyLastColumnWidth = true;
    this.stretchLastWidth = 0;
    _classPrivateFieldSet6(_totalTargetWidth, this, totalWidth);
    let sumAll = 0;
    for (let i = 0; i < _classPrivateFieldGet6(_totalColumns, this).call(this); i++) {
      const columnWidth = this._getColumnWidth(i);
      const permanentColumnWidth = _classPrivateFieldGet6(_stretchingColumnWidthFn, this).call(this, void 0, i);
      if (typeof permanentColumnWidth === "number") {
        totalWidth -= permanentColumnWidth;
      } else {
        sumAll += columnWidth;
      }
    }
    const remainingSize = totalWidth - sumAll;
    if (_classPrivateFieldGet6(_stretchMode, this).call(this) === "all" && remainingSize > 0) {
      this.stretchAllRatio = totalWidth / sumAll;
      this.stretchAllColumnsWidth = [];
      this.needVerifyLastColumnWidth = true;
    } else if (_classPrivateFieldGet6(_stretchMode, this).call(this) === "last" && totalWidth !== Infinity) {
      const columnWidth = this._getColumnWidth(_classPrivateFieldGet6(_totalColumns, this).call(this) - 1);
      const lastColumnWidth = remainingSize + columnWidth;
      this.stretchLastWidth = lastColumnWidth >= 0 ? lastColumnWidth : columnWidth;
    }
  }
  /**
   * Get stretched column width based on stretchH (all or last) setting passed in handsontable instance.
   *
   * @param {number} column The visual column index.
   * @param {number} baseWidth The default column width.
   * @returns {number|null}
   */
  getStretchedColumnWidth(column, baseWidth) {
    let result = null;
    if (_classPrivateFieldGet6(_stretchMode, this).call(this) === "all" && this.stretchAllRatio !== 0) {
      result = this._getStretchedAllColumnWidth(column, baseWidth);
    } else if (_classPrivateFieldGet6(_stretchMode, this).call(this) === "last" && this.stretchLastWidth !== 0) {
      result = this._getStretchedLastColumnWidth(column);
    }
    return result;
  }
  /**
   * @param {number} column The visual column index.
   * @param {number} baseWidth The default column width.
   * @returns {number}
   * @private
   */
  _getStretchedAllColumnWidth(column, baseWidth) {
    let sumRatioWidth = 0;
    if (!this.stretchAllColumnsWidth[column]) {
      const stretchedWidth = Math.round(baseWidth * this.stretchAllRatio);
      const newStretchedWidth = _classPrivateFieldGet6(_stretchingColumnWidthFn, this).call(this, stretchedWidth, column);
      if (newStretchedWidth === void 0) {
        this.stretchAllColumnsWidth[column] = stretchedWidth;
      } else {
        this.stretchAllColumnsWidth[column] = isNaN(newStretchedWidth) ? this._getColumnWidth(column) : newStretchedWidth;
      }
    }
    if (this.stretchAllColumnsWidth.length === _classPrivateFieldGet6(_totalColumns, this).call(this) && this.needVerifyLastColumnWidth) {
      this.needVerifyLastColumnWidth = false;
      for (let i = 0; i < this.stretchAllColumnsWidth.length; i++) {
        sumRatioWidth += this.stretchAllColumnsWidth[i];
      }
      if (sumRatioWidth !== _classPrivateFieldGet6(_totalTargetWidth, this)) {
        this.stretchAllColumnsWidth[this.stretchAllColumnsWidth.length - 1] += _classPrivateFieldGet6(_totalTargetWidth, this) - sumRatioWidth;
      }
    }
    return this.stretchAllColumnsWidth[column];
  }
  /**
   * @param {number} column The visual column index.
   * @returns {number|null}
   * @private
   */
  _getStretchedLastColumnWidth(column) {
    if (column === _classPrivateFieldGet6(_totalColumns, this).call(this) - 1) {
      return this.stretchLastWidth;
    }
    return null;
  }
  /**
   * @param {number} column The visual column index.
   * @returns {number}
   * @private
   */
  _getColumnWidth(column) {
    let width = _classPrivateFieldGet6(_columnWidthFn, this).call(this, column);
    if (isNaN(width)) {
      width = _ColumnStretching.DEFAULT_WIDTH;
    }
    return width;
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/utils/column.mjs
function _defineProperty20(obj, key, value) {
  key = _toPropertyKey20(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey20(t) {
  var i = _toPrimitive20(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive20(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var ColumnUtils = class {
  /**
   * @param {TableDao} dataAccessObject The table Data Access Object.
   * @param {Settings} wtSettings The walkontable settings.
   */
  constructor(dataAccessObject, wtSettings) {
    _defineProperty20(this, "dataAccessObject", void 0);
    _defineProperty20(this, "wtSettings", void 0);
    _defineProperty20(this, "headerWidths", /* @__PURE__ */ new Map());
    _defineProperty20(this, "stretching", void 0);
    this.dataAccessObject = dataAccessObject;
    this.wtSettings = wtSettings;
    this.stretching = new ColumnStretching({
      totalColumns: () => this.wtSettings.getSetting("totalColumns"),
      stretchMode: () => this.wtSettings.getSetting("stretchH"),
      stretchingColumnWidthFn: (stretchedWidth, column) => this.wtSettings.getSetting("onBeforeStretchingColumnWidth", stretchedWidth, column),
      columnWidthFn: (sourceCol) => this.dataAccessObject.wtTable.getColumnWidth(sourceCol)
    });
  }
  /**
   * Returns column width based on passed source index.
   *
   * @param {number} sourceIndex Column source index.
   * @returns {number}
   */
  getWidth(sourceIndex) {
    return this.wtSettings.getSetting("columnWidth", sourceIndex) || this.wtSettings.getSetting("defaultColumnWidth");
  }
  /**
   * Returns stretched column width based on passed source index.
   *
   * @param {number} sourceIndex Column source index.
   * @returns {number}
   */
  getStretchedColumnWidth(sourceIndex) {
    let width = this.getWidth(sourceIndex);
    const stretchedWidth = this.stretching.getStretchedColumnWidth(sourceIndex, width);
    if (stretchedWidth) {
      width = stretchedWidth;
    }
    return width;
  }
  /**
   * Returns column header height based on passed header level.
   *
   * @param {number} level Column header level.
   * @returns {number}
   */
  getHeaderHeight(level) {
    let height = this.wtSettings.getSetting("defaultRowHeight");
    const oversizedHeight = this.dataAccessObject.wtViewport.oversizedColumnHeaders[level];
    if (oversizedHeight !== void 0) {
      height = height ? Math.max(height, oversizedHeight) : oversizedHeight;
    }
    return height;
  }
  /**
   * Returns column header width based on passed source index.
   *
   * @param {number} sourceIndex Column source index.
   * @returns {number}
   */
  getHeaderWidth(sourceIndex) {
    return this.headerWidths.get(this.dataAccessObject.wtTable.columnFilter.sourceToRendered(sourceIndex));
  }
  /**
   * Refreshes the stretching column width by recalculating the widths of the columns.
   */
  refreshStretching() {
    const {
      wtTable,
      wtViewport,
      cloneSource
    } = this.dataAccessObject;
    const mainHolder = cloneSource ? cloneSource.wtTable.holder : wtTable.holder;
    const scrollbarCompensation = mainHolder.offsetHeight < mainHolder.scrollHeight ? getScrollbarWidth() : 0;
    this.stretching.refreshStretching(wtViewport.getViewportWidth() - scrollbarCompensation);
  }
  /**
   * Calculates column header widths that can be retrieved from the cache.
   */
  calculateWidths() {
    const {
      wtSettings
    } = this;
    let rowHeaderWidthSetting = wtSettings.getSetting("rowHeaderWidth");
    this.refreshStretching();
    rowHeaderWidthSetting = wtSettings.getSetting("onModifyRowHeaderWidth", rowHeaderWidthSetting);
    if (rowHeaderWidthSetting !== null && rowHeaderWidthSetting !== void 0) {
      const rowHeadersCount = wtSettings.getSetting("rowHeaders").length;
      const defaultColumnWidth = wtSettings.getSetting("defaultColumnWidth");
      for (let visibleColumnIndex = 0; visibleColumnIndex < rowHeadersCount; visibleColumnIndex++) {
        let width = Array.isArray(rowHeaderWidthSetting) ? rowHeaderWidthSetting[visibleColumnIndex] : rowHeaderWidthSetting;
        width = width === null || width === void 0 ? defaultColumnWidth : width;
        this.headerWidths.set(visibleColumnIndex, width);
      }
    }
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/utils/row.mjs
function _defineProperty21(obj, key, value) {
  key = _toPropertyKey21(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey21(t) {
  var i = _toPrimitive21(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive21(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var RowUtils = class {
  /**
   * @param {TableDao} dataAccessObject The table Data Access Object.
   * @param {Settings} wtSettings The walkontable settings.
   */
  constructor(dataAccessObject, wtSettings) {
    _defineProperty21(this, "dataAccessObject", void 0);
    _defineProperty21(this, "wtSettings", void 0);
    this.dataAccessObject = dataAccessObject;
    this.wtSettings = wtSettings;
  }
  /**
   * Returns row height based on passed source index.
   *
   * @param {number} sourceIndex Row source index.
   * @returns {number}
   */
  getHeight(sourceIndex) {
    let height = this.wtSettings.getSetting("rowHeight", sourceIndex);
    const oversizedHeight = this.dataAccessObject.wtViewport.oversizedRows[sourceIndex];
    if (oversizedHeight !== void 0) {
      height = height === void 0 ? oversizedHeight : Math.max(height, oversizedHeight);
    }
    return height;
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/table.mjs
function _defineProperty22(obj, key, value) {
  key = _toPropertyKey22(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey22(t) {
  var i = _toPrimitive22(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive22(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var Table = class {
  /**
   *
   * @abstract
   * @param {TableDao} dataAccessObject The data access object.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {DomBindings} domBindings Bindings into DOM.
   * @param {Settings} wtSettings The Walkontable settings.
   * @param {'master'|CLONE_TYPES_ENUM} name Overlay name.
   */
  constructor(dataAccessObject, facadeGetter, domBindings, wtSettings, name) {
    _defineProperty22(this, "wtSettings", null);
    _defineProperty22(this, "domBindings", void 0);
    _defineProperty22(this, "TBODY", null);
    _defineProperty22(this, "THEAD", null);
    _defineProperty22(this, "COLGROUP", null);
    _defineProperty22(this, "hasTableHeight", true);
    _defineProperty22(this, "hasTableWidth", true);
    _defineProperty22(this, "isTableVisible", false);
    _defineProperty22(this, "tableOffset", 0);
    _defineProperty22(this, "holderOffset", 0);
    this.domBindings = domBindings;
    this.isMaster = name === "master";
    this.name = name;
    this.dataAccessObject = dataAccessObject;
    this.facadeGetter = facadeGetter;
    this.wtSettings = wtSettings;
    this.instance = this.dataAccessObject.wot;
    this.wot = this.dataAccessObject.wot;
    this.TABLE = domBindings.rootTable;
    removeTextNodes(this.TABLE);
    this.spreader = this.createSpreader(this.TABLE);
    this.hider = this.createHider(this.spreader);
    this.holder = this.createHolder(this.hider);
    this.wtRootElement = this.holder.parentNode;
    if (this.isMaster) {
      this.alignOverlaysWithTrimmingContainer();
    }
    this.fixTableDomTree();
    this.rowFilter = null;
    this.columnFilter = null;
    this.correctHeaderWidth = false;
    const origRowHeaderWidth = this.wtSettings.getSettingPure("rowHeaderWidth");
    this.wtSettings.update("rowHeaderWidth", () => this._modifyRowHeaderWidth(origRowHeaderWidth));
    this.rowUtils = new RowUtils(this.dataAccessObject, this.wtSettings);
    this.columnUtils = new ColumnUtils(this.dataAccessObject, this.wtSettings);
    this.tableRenderer = new Renderer({
      // TODO refactoring, It can be passed through IOC.
      TABLE: this.TABLE,
      THEAD: this.THEAD,
      COLGROUP: this.COLGROUP,
      TBODY: this.TBODY,
      rowUtils: this.rowUtils,
      columnUtils: this.columnUtils,
      cellRenderer: this.wtSettings.getSettingPure("cellRenderer")
    });
  }
  /**
   * Returns a boolean that is true if this Table represents a specific overlay, identified by the overlay name.
   * For MasterTable, it returns false.
   *
   * @param {string} overlayTypeName The overlay type.
   * @returns {boolean}
   */
  is(overlayTypeName) {
    return this.name === overlayTypeName;
  }
  /**
   *
   */
  fixTableDomTree() {
    const rootDocument = this.domBindings.rootDocument;
    this.TBODY = this.TABLE.querySelector("tbody");
    if (!this.TBODY) {
      this.TBODY = rootDocument.createElement("tbody");
      this.TABLE.appendChild(this.TBODY);
    }
    this.THEAD = this.TABLE.querySelector("thead");
    if (!this.THEAD) {
      this.THEAD = rootDocument.createElement("thead");
      this.TABLE.insertBefore(this.THEAD, this.TBODY);
    }
    this.COLGROUP = this.TABLE.querySelector("colgroup");
    if (!this.COLGROUP) {
      this.COLGROUP = rootDocument.createElement("colgroup");
      this.TABLE.insertBefore(this.COLGROUP, this.THEAD);
    }
  }
  /**
   * @param {HTMLTableElement} table An element to process.
   * @returns {HTMLElement}
   */
  createSpreader(table) {
    const parent = table.parentNode;
    let spreader;
    if (!parent || parent.nodeType !== Node.ELEMENT_NODE || !hasClass(parent, "wtHolder")) {
      spreader = this.domBindings.rootDocument.createElement("div");
      spreader.className = "wtSpreader";
      if (parent) {
        parent.insertBefore(spreader, table);
      }
      spreader.appendChild(table);
    }
    spreader.style.position = "relative";
    if (this.wtSettings.getSetting("ariaTags")) {
      setAttribute(spreader, [A11Y_PRESENTATION()]);
    }
    return spreader;
  }
  /**
   * @param {HTMLElement} spreader An element to the hider element is injected.
   * @returns {HTMLElement}
   */
  createHider(spreader) {
    const parent = spreader.parentNode;
    let hider;
    if (!parent || parent.nodeType !== Node.ELEMENT_NODE || !hasClass(parent, "wtHolder")) {
      hider = this.domBindings.rootDocument.createElement("div");
      hider.className = "wtHider";
      if (parent) {
        parent.insertBefore(hider, spreader);
      }
      hider.appendChild(spreader);
    }
    if (this.wtSettings.getSetting("ariaTags")) {
      setAttribute(hider, [A11Y_PRESENTATION()]);
    }
    return hider;
  }
  /**
   *
   * @param {HTMLElement} hider An element to the holder element is injected.
   * @returns {HTMLElement}
   */
  createHolder(hider) {
    const parent = hider.parentNode;
    let holder;
    if (!parent || parent.nodeType !== Node.ELEMENT_NODE || !hasClass(parent, "wtHolder")) {
      holder = this.domBindings.rootDocument.createElement("div");
      holder.style.position = "relative";
      holder.className = "wtHolder";
      if (parent) {
        parent.insertBefore(holder, hider);
      }
      if (this.isMaster) {
        holder.parentNode.className += "ht_master handsontable";
        holder.parentNode.setAttribute("dir", this.wtSettings.getSettingPure("rtlMode") ? "rtl" : "ltr");
        if (this.wtSettings.getSetting("ariaTags")) {
          setAttribute(holder.parentNode, [A11Y_PRESENTATION()]);
        }
      }
      holder.appendChild(hider);
    }
    if (this.wtSettings.getSetting("ariaTags")) {
      setAttribute(holder, [A11Y_PRESENTATION()]);
    }
    return holder;
  }
  /**
   * Redraws the table.
   *
   * @param {boolean} [fastDraw=false] If TRUE, will try to avoid full redraw and only update the border positions.
   *                                   If FALSE or UNDEFINED, will perform a full redraw.
   * @returns {Table}
   */
  draw() {
    let fastDraw = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const {
      wtSettings
    } = this;
    const {
      wtOverlays,
      wtViewport
    } = this.dataAccessObject;
    const totalRows = wtSettings.getSetting("totalRows");
    const totalColumns = wtSettings.getSetting("totalColumns");
    const rowHeaders = wtSettings.getSetting("rowHeaders");
    const rowHeadersCount = rowHeaders.length;
    const columnHeaders = wtSettings.getSetting("columnHeaders");
    const columnHeadersCount = columnHeaders.length;
    let runFastDraw = fastDraw;
    if (this.isMaster) {
      this.holderOffset = offset(this.holder);
      runFastDraw = wtViewport.createRenderCalculators(runFastDraw);
      if (rowHeadersCount && !wtSettings.getSetting("fixedColumnsStart")) {
        const leftScrollPos = wtOverlays.inlineStartOverlay.getScrollPosition();
        const previousState = this.correctHeaderWidth;
        this.correctHeaderWidth = leftScrollPos !== 0;
        if (previousState !== this.correctHeaderWidth) {
          runFastDraw = false;
        }
      }
    }
    if (this.isMaster) {
      wtOverlays.beforeDraw();
    }
    if (runFastDraw) {
      if (this.isMaster) {
        wtViewport.createVisibleCalculators();
        wtViewport.createPartiallyVisibleCalculators();
      }
      if (wtOverlays) {
        wtOverlays.refresh(true);
      }
    } else {
      if (this.isMaster) {
        this.tableOffset = offset(this.TABLE);
      } else {
        this.tableOffset = this.dataAccessObject.parentTableOffset;
      }
      const startRow = totalRows > 0 ? this.getFirstRenderedRow() : 0;
      const startColumn = totalColumns > 0 ? this.getFirstRenderedColumn() : 0;
      this.rowFilter = new row_default(startRow, totalRows, columnHeadersCount);
      this.columnFilter = new column_default(startColumn, totalColumns, rowHeadersCount);
      let performRedraw = true;
      if (this.isMaster) {
        this.alignOverlaysWithTrimmingContainer();
        const skipRender = {};
        this.wtSettings.getSetting("beforeDraw", true, skipRender);
        performRedraw = skipRender.skipRender !== true;
      }
      if (performRedraw) {
        this.tableRenderer.setHeaderContentRenderers(rowHeaders, columnHeaders);
        if (this.is(CLONE_BOTTOM) || this.is(CLONE_BOTTOM_INLINE_START_CORNER)) {
          this.tableRenderer.setHeaderContentRenderers(rowHeaders, []);
        }
        this.resetOversizedRows();
        this.tableRenderer.setViewportSize(this.getRenderedRowsCount(), this.getRenderedColumnsCount()).setFilters(this.rowFilter, this.columnFilter).render();
        let workspaceWidth;
        if (this.isMaster) {
          workspaceWidth = this.dataAccessObject.workspaceWidth;
          wtViewport.containerWidth = null;
          this.markOversizedColumnHeaders();
        }
        this.adjustColumnHeaderHeights();
        if (this.isMaster || this.is(CLONE_BOTTOM)) {
          this.markOversizedRows();
        }
        if (this.isMaster) {
          wtViewport.createVisibleCalculators();
          wtViewport.createPartiallyVisibleCalculators();
          wtOverlays.refresh(false);
          wtOverlays.applyToDOM();
          const hiderWidth = outerWidth(this.hider);
          const tableWidth = outerWidth(this.TABLE);
          if (hiderWidth !== 0 && tableWidth !== hiderWidth) {
            this.columnUtils.calculateWidths();
            this.tableRenderer.renderer.colGroup.render();
          }
          if (workspaceWidth !== wtViewport.getWorkspaceWidth()) {
            wtViewport.containerWidth = null;
            this.columnUtils.calculateWidths();
            this.tableRenderer.renderer.colGroup.render();
          }
          this.wtSettings.getSetting("onDraw", true);
        } else if (this.is(CLONE_BOTTOM)) {
          this.dataAccessObject.cloneSource.wtOverlays.adjustElementsSize();
        }
      }
    }
    let positionChanged = false;
    if (this.isMaster) {
      positionChanged = wtOverlays.topOverlay.resetFixedPosition();
      if (wtOverlays.bottomOverlay.clone) {
        positionChanged = wtOverlays.bottomOverlay.resetFixedPosition() || positionChanged;
      }
      positionChanged = wtOverlays.inlineStartOverlay.resetFixedPosition() || positionChanged;
      if (wtOverlays.topInlineStartCornerOverlay) {
        wtOverlays.topInlineStartCornerOverlay.resetFixedPosition();
      }
      if (wtOverlays.bottomInlineStartCornerOverlay && wtOverlays.bottomInlineStartCornerOverlay.clone) {
        wtOverlays.bottomInlineStartCornerOverlay.resetFixedPosition();
      }
    }
    if (positionChanged) {
      wtOverlays.refreshAll();
      wtOverlays.adjustElementsSize();
    } else {
      this.dataAccessObject.selectionManager.setActiveOverlay(this.facadeGetter()).render(runFastDraw);
    }
    if (this.isMaster) {
      wtOverlays.afterDraw();
    }
    this.dataAccessObject.drawn = true;
    return this;
  }
  /**
   * @param {number} col The visual column index.
   */
  markIfOversizedColumnHeader(col) {
    const sourceColIndex = this.columnFilter.renderedToSource(col);
    let level = this.wtSettings.getSetting("columnHeaders").length;
    const defaultRowHeight = this.wtSettings.getSetting("defaultRowHeight");
    let previousColHeaderHeight;
    let currentHeader;
    let currentHeaderHeight;
    const columnHeaderHeightSetting = this.wtSettings.getSetting("columnHeaderHeight") || [];
    while (level) {
      level -= 1;
      previousColHeaderHeight = this.getColumnHeaderHeight(level);
      currentHeader = this.getColumnHeader(sourceColIndex, level);
      if (!currentHeader) {
        continue;
      }
      currentHeaderHeight = innerHeight(currentHeader);
      if (!previousColHeaderHeight && defaultRowHeight < currentHeaderHeight || previousColHeaderHeight < currentHeaderHeight) {
        this.dataAccessObject.wtViewport.oversizedColumnHeaders[level] = currentHeaderHeight;
      }
      if (Array.isArray(columnHeaderHeightSetting)) {
        if (columnHeaderHeightSetting[level] !== null && columnHeaderHeightSetting[level] !== void 0) {
          this.dataAccessObject.wtViewport.oversizedColumnHeaders[level] = columnHeaderHeightSetting[level];
        }
      } else if (!isNaN(columnHeaderHeightSetting)) {
        this.dataAccessObject.wtViewport.oversizedColumnHeaders[level] = columnHeaderHeightSetting;
      }
      if (this.dataAccessObject.wtViewport.oversizedColumnHeaders[level] < (columnHeaderHeightSetting[level] || columnHeaderHeightSetting)) {
        this.dataAccessObject.wtViewport.oversizedColumnHeaders[level] = columnHeaderHeightSetting[level] || columnHeaderHeightSetting;
      }
    }
  }
  /**
   *
   */
  adjustColumnHeaderHeights() {
    const {
      wtSettings
    } = this;
    const children = this.THEAD.childNodes;
    const oversizedColumnHeaders = this.dataAccessObject.wtViewport.oversizedColumnHeaders;
    const columnHeaders = wtSettings.getSetting("columnHeaders");
    for (let i = 0, len = columnHeaders.length; i < len; i++) {
      if (oversizedColumnHeaders[i]) {
        if (!children[i] || children[i].childNodes.length === 0) {
          return;
        }
        children[i].childNodes[0].style.height = `${oversizedColumnHeaders[i]}px`;
      }
    }
  }
  /**
   * Resets cache of row heights. The cache should be cached for each render cycle in a case
   * when new cell values have content which increases/decreases cell height.
   */
  resetOversizedRows() {
    const {
      wtSettings
    } = this;
    const {
      wtViewport
    } = this.dataAccessObject;
    if (!this.isMaster && !this.is(CLONE_BOTTOM)) {
      return;
    }
    if (!wtSettings.getSetting("externalRowCalculator")) {
      const rowsToRender = this.getRenderedRowsCount();
      for (let visibleRowIndex = 0; visibleRowIndex < rowsToRender; visibleRowIndex++) {
        const sourceRow = this.rowFilter.renderedToSource(visibleRowIndex);
        if (wtViewport.oversizedRows && wtViewport.oversizedRows[sourceRow]) {
          wtViewport.oversizedRows[sourceRow] = void 0;
        }
      }
    }
  }
  /**
   * Get cell element at coords.
   * Negative coords.row or coords.col are used to retrieve header cells. If there are multiple header levels, the
   * negative value corresponds to the distance from the working area. For example, when there are 3 levels of column
   * headers, coords.col=-1 corresponds to the most inner header element, while coords.col=-3 corresponds to the
   * outmost header element.
   *
   * In case an element for the coords is not rendered, the method returns an error code.
   * To produce the error code, the input parameters are validated in the order in which they
   * are given. Thus, if both the row and the column coords are out of the rendered bounds,
   * the method returns the error code for the row.
   *
   * @param {CellCoords} coords The cell coordinates.
   * @returns {HTMLElement|number} HTMLElement on success or Number one of the exit codes on error:
   *  -1 row before viewport
   *  -2 row after viewport
   *  -3 column before viewport
   *  -4 column after viewport.
   */
  getCell(coords) {
    let row = coords.row;
    let column = coords.col;
    const hookResult = this.wtSettings.getSetting("onModifyGetCellCoords", row, column);
    if (hookResult && Array.isArray(hookResult)) {
      [row, column] = hookResult;
    }
    if (this.isRowBeforeRenderedRows(row)) {
      return -1;
    } else if (this.isRowAfterRenderedRows(row)) {
      return -2;
    } else if (this.isColumnBeforeRenderedColumns(column)) {
      return -3;
    } else if (this.isColumnAfterRenderedColumns(column)) {
      return -4;
    }
    const TR = this.getRow(row);
    if (!TR && row >= 0) {
      throw new Error("TR was expected to be rendered but is not");
    }
    const TD = TR.childNodes[this.columnFilter.sourceColumnToVisibleRowHeadedColumn(column)];
    if (!TD && column >= 0) {
      throw new Error("TD or TH was expected to be rendered but is not");
    }
    return TD;
  }
  /**
   * Get the DOM element of the row with the provided index.
   *
   * @param {number} rowIndex Row index.
   * @returns {HTMLTableRowElement|boolean} Return the row's DOM element or `false` if the row with the provided
   * index doesn't exist.
   */
  getRow(rowIndex) {
    let renderedRowIndex = null;
    let parentElement = null;
    if (rowIndex < 0) {
      var _this$rowFilter;
      renderedRowIndex = (_this$rowFilter = this.rowFilter) === null || _this$rowFilter === void 0 ? void 0 : _this$rowFilter.sourceRowToVisibleColHeadedRow(rowIndex);
      parentElement = this.THEAD;
    } else {
      var _this$rowFilter2;
      renderedRowIndex = (_this$rowFilter2 = this.rowFilter) === null || _this$rowFilter2 === void 0 ? void 0 : _this$rowFilter2.sourceToRendered(rowIndex);
      parentElement = this.TBODY;
    }
    if (renderedRowIndex !== void 0 && parentElement !== void 0) {
      if (parentElement.childNodes.length < renderedRowIndex + 1) {
        return false;
      } else {
        return parentElement.childNodes[renderedRowIndex];
      }
    } else {
      return false;
    }
  }
  /**
   * GetColumnHeader.
   *
   * @param {number} col Column index.
   * @param {number} [level=0] Header level (0 = most distant to the table).
   * @returns {object} HTMLElement on success or undefined on error.
   */
  getColumnHeader(col) {
    let level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const TR = this.THEAD.childNodes[level];
    return TR === null || TR === void 0 ? void 0 : TR.childNodes[this.columnFilter.sourceColumnToVisibleRowHeadedColumn(col)];
  }
  /**
   * Gets all columns headers (TH elements) from the table.
   *
   * @param {number} column A source column index.
   * @returns {HTMLTableCellElement[]}
   */
  getColumnHeaders(column) {
    const THs = [];
    const visibleColumn = this.columnFilter.sourceColumnToVisibleRowHeadedColumn(column);
    this.THEAD.childNodes.forEach((TR) => {
      const TH = TR.childNodes[visibleColumn];
      if (TH) {
        THs.push(TH);
      }
    });
    return THs;
  }
  /**
   * GetRowHeader.
   *
   * @param {number} row Row index.
   * @param {number} [level=0] Header level (0 = most distant to the table).
   * @returns {HTMLElement} HTMLElement on success or Number one of the exit codes on error: `null table doesn't have
   *   row headers`.
   */
  getRowHeader(row) {
    let level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const rowHeadersCount = this.wtSettings.getSetting("rowHeaders").length;
    if (level >= rowHeadersCount) {
      return;
    }
    const renderedRow = this.rowFilter.sourceToRendered(row);
    const visibleRow = renderedRow < 0 ? this.rowFilter.sourceRowToVisibleColHeadedRow(row) : renderedRow;
    const parentElement = renderedRow < 0 ? this.THEAD : this.TBODY;
    const TR = parentElement.childNodes[visibleRow];
    return TR === null || TR === void 0 ? void 0 : TR.childNodes[level];
  }
  /**
   * Gets all rows headers (TH elements) from the table.
   *
   * @param {number} row A source row index.
   * @returns {HTMLTableCellElement[]}
   */
  getRowHeaders(row) {
    const THs = [];
    const rowHeadersCount = this.wtSettings.getSetting("rowHeaders").length;
    for (let renderedRowIndex = 0; renderedRowIndex < rowHeadersCount; renderedRowIndex++) {
      const TR = this.TBODY.childNodes[this.rowFilter.sourceToRendered(row)];
      const TH = TR === null || TR === void 0 ? void 0 : TR.childNodes[renderedRowIndex];
      if (TH) {
        THs.push(TH);
      }
    }
    return THs;
  }
  /**
   * Returns cell coords object for a given TD (or a child element of a TD element).
   *
   * @param {HTMLTableCellElement} TD A cell DOM element (or a child of one).
   * @returns {CellCoords|null} The coordinates of the provided TD element (or the closest TD element) or null, if the
   *   provided element is not applicable.
   */
  getCoords(TD) {
    let cellElement = TD;
    if (cellElement.nodeName !== "TD" && cellElement.nodeName !== "TH") {
      cellElement = closest(cellElement, ["TD", "TH"]);
    }
    if (cellElement === null) {
      return null;
    }
    const TR = cellElement.parentNode;
    const CONTAINER = TR.parentNode;
    let row = index(TR);
    let col = cellElement.cellIndex;
    if (overlayContainsElement(CLONE_TOP_INLINE_START_CORNER, cellElement, this.wtRootElement) || overlayContainsElement(CLONE_TOP, cellElement, this.wtRootElement)) {
      if (CONTAINER.nodeName === "THEAD") {
        row -= CONTAINER.childNodes.length;
      }
    } else if (overlayContainsElement(CLONE_BOTTOM_INLINE_START_CORNER, cellElement, this.wtRootElement) || overlayContainsElement(CLONE_BOTTOM, cellElement, this.wtRootElement)) {
      const totalRows = this.wtSettings.getSetting("totalRows");
      row = totalRows - CONTAINER.childNodes.length + row;
    } else if (CONTAINER === this.THEAD) {
      row = this.rowFilter.visibleColHeadedRowToSourceRow(row);
    } else {
      row = this.rowFilter.renderedToSource(row);
    }
    if (overlayContainsElement(CLONE_TOP_INLINE_START_CORNER, cellElement, this.wtRootElement) || overlayContainsElement(CLONE_INLINE_START, cellElement, this.wtRootElement) || overlayContainsElement(CLONE_BOTTOM_INLINE_START_CORNER, cellElement, this.wtRootElement)) {
      col = this.columnFilter.offsettedTH(col);
    } else {
      col = this.columnFilter.visibleRowHeadedColumnToSourceColumn(col);
    }
    return this.wot.createCellCoords(row, col);
  }
  /**
   * Check if any of the rendered rows is higher than expected, and if so, cache them.
   */
  markOversizedRows() {
    if (this.wtSettings.getSetting("externalRowCalculator")) {
      return;
    }
    let rowCount = this.TBODY.childNodes.length;
    const expectedTableHeight = rowCount * this.wtSettings.getSetting("defaultRowHeight");
    const actualTableHeight = innerHeight(this.TBODY) - 1;
    let previousRowHeight;
    let rowInnerHeight;
    let sourceRowIndex;
    let currentTr;
    let rowHeader;
    if (expectedTableHeight === actualTableHeight && !this.wtSettings.getSetting("fixedRowsBottom")) {
      return;
    }
    while (rowCount) {
      rowCount -= 1;
      sourceRowIndex = this.rowFilter.renderedToSource(rowCount);
      previousRowHeight = this.getRowHeight(sourceRowIndex);
      currentTr = this.getTrForRow(sourceRowIndex);
      rowHeader = currentTr.querySelector("th");
      if (rowHeader) {
        rowInnerHeight = innerHeight(rowHeader);
      } else {
        rowInnerHeight = innerHeight(currentTr) - 1;
      }
      if (!previousRowHeight && this.wtSettings.getSetting("defaultRowHeight") < rowInnerHeight || previousRowHeight < rowInnerHeight) {
        rowInnerHeight += 1;
        this.dataAccessObject.wtViewport.oversizedRows[sourceRowIndex] = rowInnerHeight;
      }
    }
  }
  /**
   * @param {number} row The visual row index.
   * @returns {HTMLTableElement}
   */
  getTrForRow(row) {
    return this.TBODY.childNodes[this.rowFilter.sourceToRendered(row)];
  }
  /**
   * Checks if the column index (negative value from -1 to N) is rendered.
   *
   * @param {number} column The column index (negative value from -1 to N).
   * @returns {boolean}
   */
  isColumnHeaderRendered(column) {
    if (column >= 0) {
      return false;
    }
    const rowHeaders = this.wtSettings.getSetting("rowHeaders");
    const rowHeadersCount = rowHeaders.length;
    return Math.abs(column) <= rowHeadersCount;
  }
  /**
   * Checks if the row index (negative value from -1 to N) is rendered.
   *
   * @param {number} row The row index (negative value from -1 to N).
   * @returns {boolean}
   */
  isRowHeaderRendered(row) {
    if (row >= 0) {
      return false;
    }
    const columnHeaders = this.wtSettings.getSetting("columnHeaders");
    const columnHeadersCount = columnHeaders.length;
    return Math.abs(row) <= columnHeadersCount;
  }
  /* eslint-disable jsdoc/require-description-complete-sentence */
  /**
   * Check if the given row index is lower than the index of the first row that
   * is currently rendered and return TRUE in that case, or FALSE otherwise.
   *
   * Negative row index is used to check the columns' headers.
   *
   *  Headers
   *           +--------------+                                     │
   *       -3  │    │    │    │                                     │
   *           +--------------+                                     │
   *       -2  │    │    │    │                                     │ TRUE
   *           +--------------+                                     │
   *       -1  │    │    │    │                                     │
   *  Cells  +==================+                                   │
   *        0  ┇    ┇    ┇    ┇ <--- For fixedRowsTop: 1            │
   *           +--------------+      the master overlay do       ---+ first rendered row (index 1)
   *        1  │ A2 │ B2 │ C2 │      not render the first row.      │
   *           +--------------+                                     │ FALSE
   *        2  │ A3 │ B3 │ C3 │                                     │
   *           +--------------+                                  ---+ last rendered row
   *                                                                │
   *                                                                │ FALSE
   *
   * @param {number} row The visual row index.
   * @memberof Table#
   * @function isRowBeforeRenderedRows
   * @returns {boolean}
   */
  /* eslint-enable jsdoc/require-description-complete-sentence */
  isRowBeforeRenderedRows(row) {
    const first = this.getFirstRenderedRow();
    if (row < 0 && first <= 0) {
      return !this.isRowHeaderRendered(row);
    }
    return row < first;
  }
  /* eslint-disable jsdoc/require-description-complete-sentence */
  /**
   * Check if the given column index is greater than the index of the last column that
   * is currently rendered and return TRUE in that case, or FALSE otherwise.
   *
   * The negative row index is used to check the columns' headers. However,
   * keep in mind that for negative indexes, the method always returns FALSE as
   * it is not possible to render headers partially. The "after" index can not be
   * lower than -1.
   *
   *  Headers
   *           +--------------+                                     │
   *       -3  │    │    │    │                                     │
   *           +--------------+                                     │
   *       -2  │    │    │    │                                     │ FALSE
   *           +--------------+                                     │
   *       -1  │    │    │    │                                     │
   *  Cells  +==================+                                   │
   *        0  ┇    ┇    ┇    ┇ <--- For fixedRowsTop: 1            │
   *           +--------------+      the master overlay do       ---+ first rendered row (index 1)
   *        1  │ A2 │ B2 │ C2 │      not render the first rows      │
   *           +--------------+                                     │ FALSE
   *        2  │ A3 │ B3 │ C3 │                                     │
   *           +--------------+                                  ---+ last rendered row
   *                                                                │
   *                                                                │ TRUE
   *
   * @param {number} row The visual row index.
   * @memberof Table#
   * @function isRowAfterRenderedRows
   * @returns {boolean}
   */
  /* eslint-enable jsdoc/require-description-complete-sentence */
  isRowAfterRenderedRows(row) {
    return row > this.getLastRenderedRow();
  }
  /* eslint-disable jsdoc/require-description-complete-sentence */
  /**
   * Check if the given column index is lower than the index of the first column that
   * is currently rendered and return TRUE in that case, or FALSE otherwise.
   *
   * Negative column index is used to check the rows' headers.
   *
   *                            For fixedColumnsStart: 1 the master overlay
   *                            do not render this first columns.
   *  Headers    -3   -2   -1    |
   *           +----+----+----║┄ ┄ +------+------+
   *           │    │    │    ║    │  B1  │  C1  │
   *           +--------------║┄ ┄ --------------│
   *           │    │    │    ║    │  B2  │  C2  │
   *           +--------------║┄ ┄ --------------│
   *           │    │    │    ║    │  B3  │  C3  │
   *           +----+----+----║┄ ┄ +------+------+
   *                               ╷             ╷
   *      -------------------------+-------------+---------------->
   *          TRUE             first    FALSE   last         FALSE
   *                           rendered         rendered
   *                           column           column
   *
   * @param {number} column The visual column index.
   * @memberof Table#
   * @function isColumnBeforeRenderedColumns
   * @returns {boolean}
   */
  /* eslint-enable jsdoc/require-description-complete-sentence */
  isColumnBeforeRenderedColumns(column) {
    const first = this.getFirstRenderedColumn();
    if (column < 0 && first <= 0) {
      return !this.isColumnHeaderRendered(column);
    }
    return column < first;
  }
  /* eslint-disable jsdoc/require-description-complete-sentence */
  /**
   * Check if the given column index is greater than the index of the last column that
   * is currently rendered and return TRUE in that case, or FALSE otherwise.
   *
   * The negative column index is used to check the rows' headers. However,
   * keep in mind that for negative indexes, the method always returns FALSE as
   * it is not possible to render headers partially. The "after" index can not be
   * lower than -1.
   *
   *                            For fixedColumnsStart: 1 the master overlay
   *                            do not render this first columns.
   *  Headers    -3   -2   -1    |
   *           +----+----+----║┄ ┄ +------+------+
   *           │    │    │    ║    │  B1  │  C1  │
   *           +--------------║┄ ┄ --------------│
   *           │    │    │    ║    │  B2  │  C2  │
   *           +--------------║┄ ┄ --------------│
   *           │    │    │    ║    │  B3  │  C3  │
   *           +----+----+----║┄ ┄ +------+------+
   *                               ╷             ╷
   *      -------------------------+-------------+---------------->
   *          FALSE             first    FALSE   last         TRUE
   *                           rendered         rendered
   *                           column           column
   *
   * @param {number} column The visual column index.
   * @memberof Table#
   * @function isColumnAfterRenderedColumns
   * @returns {boolean}
   */
  /* eslint-enable jsdoc/require-description-complete-sentence */
  isColumnAfterRenderedColumns(column) {
    return this.columnFilter && column > this.getLastRenderedColumn();
  }
  isColumnAfterViewport(column) {
    return this.columnFilter && column > this.getLastVisibleColumn();
  }
  isRowAfterViewport(row) {
    return this.rowFilter && row > this.getLastVisibleRow();
  }
  isColumnBeforeViewport(column) {
    return this.columnFilter && this.columnFilter.sourceToRendered(column) < 0 && column >= 0;
  }
  isLastRowFullyVisible() {
    return this.getLastVisibleRow() === this.getLastRenderedRow();
  }
  isLastColumnFullyVisible() {
    return this.getLastVisibleColumn() === this.getLastRenderedColumn();
  }
  allRowsInViewport() {
    return this.wtSettings.getSetting("totalRows") === this.getVisibleRowsCount();
  }
  allColumnsInViewport() {
    return this.wtSettings.getSetting("totalColumns") === this.getVisibleColumnsCount();
  }
  /**
   * Checks if any of the row's cells content exceeds its initial height, and if so, returns the oversized height.
   *
   * @param {number} sourceRow The physical row index.
   * @returns {number}
   */
  getRowHeight(sourceRow) {
    return this.rowUtils.getHeight(sourceRow);
  }
  /**
   * @param {number} level The column level.
   * @returns {number}
   */
  getColumnHeaderHeight(level) {
    return this.columnUtils.getHeaderHeight(level);
  }
  /**
   * @param {number} sourceColumn The physical column index.
   * @returns {number}
   */
  getColumnWidth(sourceColumn) {
    return this.columnUtils.getWidth(sourceColumn);
  }
  /**
   * @param {number} sourceColumn The physical column index.
   * @returns {number}
   */
  getStretchedColumnWidth(sourceColumn) {
    return this.columnUtils.getStretchedColumnWidth(sourceColumn);
  }
  /**
   * Checks if the table has defined size. It returns `true` when the table has width and height
   * set bigger than `0px`.
   *
   * @returns {boolean}
   */
  hasDefinedSize() {
    return this.hasTableHeight && this.hasTableWidth;
  }
  /**
   * Gets table's width. The returned width is the width of the rendered cells that fit in the
   * current viewport. The value may change depends on the viewport position (scroll position).
   *
   * @returns {number}
   */
  getWidth() {
    return outerWidth(this.TABLE);
  }
  /**
   * Gets table's height. The returned height is the height of the rendered cells that fit in the
   * current viewport. The value may change depends on the viewport position (scroll position).
   *
   * @returns {number}
   */
  getHeight() {
    return outerHeight(this.TABLE);
  }
  /**
   * Gets table's total width. The returned width is the width of all rendered cells (including headers)
   * that can be displayed in the table.
   *
   * @returns {number}
   */
  getTotalWidth() {
    const width = outerWidth(this.hider);
    return width !== 0 ? width : this.getWidth();
  }
  /**
   * Gets table's total height. The returned height is the height of all rendered cells (including headers)
   * that can be displayed in the table.
   *
   * @returns {number}
   */
  getTotalHeight() {
    const height = outerHeight(this.hider);
    return height !== 0 ? height : this.getHeight();
  }
  /**
   * Checks if the table is visible. It returns `true` when the holder element (or its parents)
   * has CSS 'display' property different than 'none'.
   *
   * @returns {boolean}
   */
  isVisible() {
    return isVisible(this.TABLE);
  }
  /**
   * Modify row header widths provided by user in class contructor.
   *
   * @private
   * @param {Function} rowHeaderWidthFactory The function which can provide default width values for rows..
   * @returns {number}
   */
  _modifyRowHeaderWidth(rowHeaderWidthFactory) {
    let widths = isFunction(rowHeaderWidthFactory) ? rowHeaderWidthFactory() : null;
    if (Array.isArray(widths)) {
      widths = [...widths];
      widths[widths.length - 1] = this._correctRowHeaderWidth(widths[widths.length - 1]);
    } else {
      widths = this._correctRowHeaderWidth(widths);
    }
    return widths;
  }
  /**
   * Correct row header width if necessary.
   *
   * @private
   * @param {number} width The width to process.
   * @returns {number}
   */
  _correctRowHeaderWidth(width) {
    let rowHeaderWidth = width;
    if (typeof width !== "number") {
      rowHeaderWidth = this.wtSettings.getSetting("defaultColumnWidth");
    }
    if (this.correctHeaderWidth) {
      rowHeaderWidth += 1;
    }
    return rowHeaderWidth;
  }
};
var table_default = Table;

// node_modules/handsontable/3rdparty/walkontable/src/table/mixin/stickyRowsBottom.mjs
var MIXIN_NAME = "stickyRowsBottom";
var stickyRowsBottom = {
  /**
   * Get the source index of the first rendered row. If no rows are rendered, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getFirstRenderedRow() {
    const totalRows = this.wtSettings.getSetting("totalRows");
    const fixedRowsBottom = this.wtSettings.getSetting("fixedRowsBottom");
    const index2 = totalRows - fixedRowsBottom;
    if (totalRows === 0 || fixedRowsBottom === 0) {
      return -1;
    }
    if (index2 < 0) {
      return 0;
    }
    return index2;
  },
  /**
   * Get the source index of the first row fully visible in the viewport. If no rows are fully visible, returns an error code: -1.
   * Assumes that all rendered rows are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getFirstVisibleRow() {
    return this.getFirstRenderedRow();
  },
  /**
   * Get the source index of the first row partially visible in the viewport. If no rows are partially visible, returns an error code: -1.
   * Assumes that all rendered rows are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getFirstPartiallyVisibleRow() {
    return this.getFirstRenderedRow();
  },
  /**
   * Get the source index of the last rendered row. If no rows are rendered, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getLastRenderedRow() {
    return this.wtSettings.getSetting("totalRows") - 1;
  },
  /**
   * Get the source index of the last row fully visible in the viewport. If no rows are fully visible, returns an error code: -1.
   * Assumes that all rendered rows are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getLastVisibleRow() {
    return this.getLastRenderedRow();
  },
  /**
   * Get the source index of the last row partially visible in the viewport. If no rows are partially visible, returns an error code: -1.
   * Assumes that all rendered rows are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getLastPartiallyVisibleRow() {
    return this.getLastRenderedRow();
  },
  /**
   * Get the number of rendered rows.
   *
   * @returns {number}
   * @this Table
   */
  getRenderedRowsCount() {
    const totalRows = this.wtSettings.getSetting("totalRows");
    return Math.min(this.wtSettings.getSetting("fixedRowsBottom"), totalRows);
  },
  /**
   * Get the number of fully visible rows in the viewport.
   * Assumes that all rendered rows are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getVisibleRowsCount() {
    return this.getRenderedRowsCount();
  },
  /**
   * Get the number of rendered column headers.
   *
   * @returns {number}
   * @this Table
   */
  getColumnHeadersCount() {
    return 0;
  }
};
defineGetter(stickyRowsBottom, "MIXIN_NAME", MIXIN_NAME, {
  writable: false,
  enumerable: false
});
var stickyRowsBottom_default = stickyRowsBottom;

// node_modules/handsontable/3rdparty/walkontable/src/table/mixin/stickyColumnsStart.mjs
var MIXIN_NAME2 = "stickyColumnsStart";
var stickyColumnsStart = {
  /**
   * Get the source index of the first rendered column. If no columns are rendered, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getFirstRenderedColumn() {
    const totalColumns = this.wtSettings.getSetting("totalColumns");
    if (totalColumns === 0) {
      return -1;
    }
    return 0;
  },
  /**
   * Get the source index of the first column fully visible in the viewport. If no columns are fully visible, returns an error code: -1.
   * Assumes that all rendered columns are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getFirstVisibleColumn() {
    return this.getFirstRenderedColumn();
  },
  /**
   * Get the source index of the first column partially visible in the viewport. If no columns are partially visible, returns an error code: -1.
   * Assumes that all rendered columns are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getFirstPartiallyVisibleColumn() {
    return this.getFirstRenderedColumn();
  },
  /**
   * Get the source index of the last rendered column. If no columns are rendered, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getLastRenderedColumn() {
    return this.getRenderedColumnsCount() - 1;
  },
  /**
   * Get the source index of the last column fully visible in the viewport. If no columns are fully visible, returns an error code: -1.
   * Assumes that all rendered columns are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getLastVisibleColumn() {
    return this.getLastRenderedColumn();
  },
  /**
   * Get the source index of the last column partially visible in the viewport. If no columns are partially visible, returns an error code: -1.
   * Assumes that all rendered columns are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getLastPartiallyVisibleColumn() {
    return this.getLastRenderedColumn();
  },
  /**
   * Get the number of rendered columns.
   *
   * @returns {number}
   * @this Table
   */
  getRenderedColumnsCount() {
    const totalColumns = this.wtSettings.getSetting("totalColumns");
    return Math.min(this.wtSettings.getSetting("fixedColumnsStart"), totalColumns);
  },
  /**
   * Get the number of fully visible columns in the viewport.
   * Assumes that all rendered columns are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getVisibleColumnsCount() {
    return this.getRenderedColumnsCount();
  },
  /**
   * Get the number of rendered row headers.
   *
   * @returns {number}
   * @this Table
   */
  getRowHeadersCount() {
    return this.dataAccessObject.rowHeaders.length;
  }
};
defineGetter(stickyColumnsStart, "MIXIN_NAME", MIXIN_NAME2, {
  writable: false,
  enumerable: false
});
var stickyColumnsStart_default = stickyColumnsStart;

// node_modules/handsontable/3rdparty/walkontable/src/table/bottomInlineStartCorner.mjs
var BottomInlineStartCornerOverlayTable = class extends table_default {
  /**
   * @param {TableDao} dataAccessObject The data access object.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {DomBindings} domBindings Bindings into DOM.
   * @param {Settings} wtSettings The Walkontable settings.
   */
  constructor(dataAccessObject, facadeGetter, domBindings, wtSettings) {
    super(dataAccessObject, facadeGetter, domBindings, wtSettings, CLONE_BOTTOM_INLINE_START_CORNER);
  }
};
mixin(BottomInlineStartCornerOverlayTable, stickyRowsBottom_default);
mixin(BottomInlineStartCornerOverlayTable, stickyColumnsStart_default);
var bottomInlineStartCorner_default = BottomInlineStartCornerOverlayTable;

// node_modules/handsontable/3rdparty/walkontable/src/overlay/constants.mjs
var CLONE_TOP = "top";
var CLONE_BOTTOM = "bottom";
var CLONE_INLINE_START = "inline_start";
var CLONE_TOP_INLINE_START_CORNER = "top_inline_start_corner";
var CLONE_BOTTOM_INLINE_START_CORNER = "bottom_inline_start_corner";
var CLONE_TYPES = [CLONE_TOP, CLONE_BOTTOM, CLONE_INLINE_START, CLONE_TOP_INLINE_START_CORNER, CLONE_BOTTOM_INLINE_START_CORNER];
var CLONE_CLASS_NAMES = /* @__PURE__ */ new Map([[CLONE_TOP, `ht_clone_${CLONE_TOP}`], [CLONE_BOTTOM, `ht_clone_${CLONE_BOTTOM}`], [CLONE_INLINE_START, `ht_clone_${CLONE_INLINE_START} ht_clone_left`], [CLONE_TOP_INLINE_START_CORNER, `ht_clone_${CLONE_TOP_INLINE_START_CORNER} ht_clone_top_left_corner`], [CLONE_BOTTOM_INLINE_START_CORNER, `ht_clone_${CLONE_BOTTOM_INLINE_START_CORNER} ht_clone_bottom_left_corner`]]);

// node_modules/handsontable/helpers/dom/event.mjs
function stopImmediatePropagation(event) {
  event.isImmediatePropagationEnabled = false;
  event.cancelBubble = true;
}
function isImmediatePropagationStopped(event) {
  return event.isImmediatePropagationEnabled === false;
}
function isRightClick(event) {
  return event.button === 2;
}
function isLeftClick(event) {
  return event.button === 0;
}
function offsetRelativeTo(event, untilElement) {
  const offset2 = {
    x: event.offsetX,
    y: event.offsetY
  };
  let element = event.target;
  if (!(untilElement instanceof HTMLElement) || element !== untilElement && element.contains(untilElement)) {
    return offset2;
  }
  while (element !== untilElement) {
    offset2.x += element.offsetLeft;
    offset2.y += element.offsetTop;
    element = element.offsetParent;
  }
  return offset2;
}

// node_modules/handsontable/eventManager.mjs
function _defineProperty23(obj, key, value) {
  key = _toPropertyKey23(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey23(t) {
  var i = _toPrimitive23(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive23(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var listenersCounter = 0;
var EventManager = class {
  /**
   * @param {object} [context=null] An object to which event listeners will be stored.
   * @private
   */
  constructor() {
    let context = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    _defineProperty23(this, "context", void 0);
    this.context = context || this;
    if (!this.context.eventListeners) {
      this.context.eventListeners = [];
    }
  }
  /**
   * Register specified listener (`eventName`) to the element.
   *
   * @param {Element} element Target element.
   * @param {string} eventName Event name.
   * @param {Function} callback Function which will be called after event occur.
   * @param {AddEventListenerOptions|boolean} [options] Listener options if object or useCapture if boolean.
   * @returns {Function} Returns function which you can easily call to remove that event.
   */
  addEventListener(element, eventName, callback) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    function callbackProxy(event) {
      callback.call(this, extendEvent(event));
    }
    this.context.eventListeners.push({
      element,
      event: eventName,
      callback,
      callbackProxy,
      options,
      eventManager: this
    });
    element.addEventListener(eventName, callbackProxy, options);
    listenersCounter += 1;
    return () => {
      this.removeEventListener(element, eventName, callback);
    };
  }
  /**
   * Remove the event listener previously registered.
   *
   * @param {Element} element Target element.
   * @param {string} eventName Event name.
   * @param {Function} callback Function to remove from the event target. It must be the same as during registration listener.
   * @param {boolean} [onlyOwnEvents] Whether whould remove only events registered using this instance of EventManager.
   */
  removeEventListener(element, eventName, callback) {
    let onlyOwnEvents = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    let len = this.context.eventListeners.length;
    let tmpEvent;
    while (len) {
      len -= 1;
      tmpEvent = this.context.eventListeners[len];
      if (tmpEvent.event === eventName && tmpEvent.element === element) {
        if (callback && callback !== tmpEvent.callback) {
          continue;
        }
        if (onlyOwnEvents && tmpEvent.eventManager !== this) {
          continue;
        }
        this.context.eventListeners.splice(len, 1);
        tmpEvent.element.removeEventListener(tmpEvent.event, tmpEvent.callbackProxy, tmpEvent.options);
        listenersCounter -= 1;
      }
    }
  }
  /**
   * Clear all previously registered events.
   *
   * @private
   * @since 0.15.0-beta3
   * @param {boolean} [onlyOwnEvents] Whether whould remove only events registered using this instance of EventManager.
   */
  clearEvents() {
    let onlyOwnEvents = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (!this.context) {
      return;
    }
    let len = this.context.eventListeners.length;
    while (len) {
      len -= 1;
      const event = this.context.eventListeners[len];
      if (onlyOwnEvents && event.eventManager !== this) {
        continue;
      }
      this.context.eventListeners.splice(len, 1);
      event.element.removeEventListener(event.event, event.callbackProxy, event.options);
      listenersCounter -= 1;
    }
  }
  /**
   * Clear all previously registered events.
   */
  clear() {
    this.clearEvents();
  }
  /**
   * Destroy instance of EventManager, clearing all events of the context.
   */
  destroy() {
    this.clearEvents();
    this.context = null;
  }
  /**
   * Destroy instance of EventManager, clearing only the own events.
   */
  destroyWithOwnEventsOnly() {
    this.clearEvents(true);
    this.context = null;
  }
  /**
   * Trigger event at the specified target element.
   *
   * @param {Element} element Target element.
   * @param {string} eventName Event name.
   */
  fireEvent(element, eventName) {
    let rootDocument = element.document;
    let rootWindow = element;
    if (!rootDocument) {
      rootDocument = element.ownerDocument ? element.ownerDocument : element;
      rootWindow = rootDocument.defaultView;
    }
    const options = {
      bubbles: true,
      cancelable: eventName !== "mousemove",
      view: rootWindow,
      detail: 0,
      screenX: 0,
      screenY: 0,
      clientX: 1,
      clientY: 1,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      button: 0,
      relatedTarget: void 0
    };
    let event;
    if (rootDocument.createEvent) {
      event = rootDocument.createEvent("MouseEvents");
      event.initMouseEvent(eventName, options.bubbles, options.cancelable, options.view, options.detail, options.screenX, options.screenY, options.clientX, options.clientY, options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, options.relatedTarget || rootDocument.body.parentNode);
    } else {
      event = rootDocument.createEventObject();
    }
    if (element.dispatchEvent) {
      element.dispatchEvent(event);
    } else {
      element.fireEvent(`on${eventName}`, event);
    }
  }
};
function extendEvent(event) {
  const nativeStopImmediatePropagation = event.stopImmediatePropagation;
  event.stopImmediatePropagation = function() {
    nativeStopImmediatePropagation.apply(this);
    stopImmediatePropagation(this);
  };
  return event;
}
var eventManager_default = EventManager;

// node_modules/handsontable/3rdparty/walkontable/src/scroll.mjs
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration7(obj, privateSet);
  privateSet.add(obj);
}
function _checkPrivateRedeclaration7(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty24(obj, key, value) {
  key = _toPropertyKey24(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey24(t) {
  var i = _toPrimitive24(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive24(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _assertClassBrand7(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _Scroll_brand = /* @__PURE__ */ new WeakSet();
var Scroll = class {
  /**
   * @param {ScrollDao} dataAccessObject Tha data access object.
   */
  constructor(dataAccessObject) {
    _classPrivateMethodInitSpec(this, _Scroll_brand);
    _defineProperty24(this, "dataAccessObject", void 0);
    this.dataAccessObject = dataAccessObject;
  }
  /**
   * Scrolls viewport to a cell.
   *
   * @param {CellCoords} coords The cell coordinates.
   * @param {boolean} [snapToTop] If `true`, viewport is scrolled to show the cell on the top of the table.
   * @param {boolean} [snapToRight] If `true`, viewport is scrolled to show the cell on the right of the table.
   * @param {boolean} [snapToBottom] If `true`, viewport is scrolled to show the cell on the bottom of the table.
   * @param {boolean} [snapToLeft] If `true`, viewport is scrolled to show the cell on the left of the table.
   * @returns {boolean}
   */
  scrollViewport(coords, snapToTop, snapToRight, snapToBottom, snapToLeft) {
    const scrolledHorizontally = this.scrollViewportHorizontally(coords.col, snapToRight, snapToLeft);
    const scrolledVertically = this.scrollViewportVertically(coords.row, snapToTop, snapToBottom);
    return scrolledHorizontally || scrolledVertically;
  }
  /**
   * Scrolls viewport to a column.
   *
   * @param {number} column Visual column index.
   * @param {boolean} [snapToRight] If `true`, viewport is scrolled to show the cell on the right of the table.
   * @param {boolean} [snapToLeft] If `true`, viewport is scrolled to show the cell on the left of the table.
   * @returns {boolean}
   */
  scrollViewportHorizontally(column, snapToRight, snapToLeft) {
    const {
      drawn,
      totalColumns
    } = this.dataAccessObject;
    if (!drawn || !Number.isInteger(column) || column < 0 || column > totalColumns) {
      return false;
    }
    const autoSnapping = snapToRight === void 0 && snapToLeft === void 0;
    const {
      fixedColumnsStart,
      inlineStartOverlay
    } = this.dataAccessObject;
    if (autoSnapping && column < fixedColumnsStart) {
      return false;
    }
    column = this.dataAccessObject.wtSettings.getSetting("onBeforeViewportScrollHorizontally", column);
    if (!Number.isInteger(column) || column < 0 || column > totalColumns) {
      return false;
    }
    const firstColumn = this.getFirstVisibleColumn();
    const lastColumn = this.getLastVisibleColumn();
    let result = false;
    if (autoSnapping && (column < firstColumn || column > lastColumn) || !autoSnapping) {
      result = inlineStartOverlay.scrollTo(column, autoSnapping ? column >= this.getLastPartiallyVisibleColumn() : snapToRight);
    }
    return result;
  }
  /**
   * Scrolls viewport to a row.
   *
   * @param {number} row Visual row index.
   * @param {boolean} [snapToTop] If `true`, viewport is scrolled to show the cell on the top of the table.
   * @param {boolean} [snapToBottom] If `true`, viewport is scrolled to show the cell on the bottom of the table.
   * @returns {boolean}
   */
  scrollViewportVertically(row, snapToTop, snapToBottom) {
    const {
      drawn,
      totalRows
    } = this.dataAccessObject;
    if (!drawn || !Number.isInteger(row) || row < 0 || row > totalRows) {
      return false;
    }
    const autoSnapping = snapToTop === void 0 && snapToBottom === void 0;
    const {
      fixedRowsBottom,
      fixedRowsTop,
      topOverlay
    } = this.dataAccessObject;
    if (autoSnapping && (row < fixedRowsTop || row > totalRows - fixedRowsBottom - 1)) {
      return false;
    }
    row = this.dataAccessObject.wtSettings.getSetting("onBeforeViewportScrollVertically", row);
    if (!Number.isInteger(row) || row < 0 || row > totalRows) {
      return false;
    }
    const firstRow = this.getFirstVisibleRow();
    const lastRow = this.getLastVisibleRow();
    let result = false;
    if (autoSnapping && (row < firstRow || row > lastRow) || !autoSnapping) {
      result = topOverlay.scrollTo(row, autoSnapping ? row >= this.getLastPartiallyVisibleRow() : snapToBottom);
    }
    return result;
  }
  /**
   * Get first visible row based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getFirstVisibleRow() {
    return this.dataAccessObject.wtTable.getFirstVisibleRow();
  }
  /**
   * Get last visible row based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getLastVisibleRow() {
    return _assertClassBrand7(_Scroll_brand, this, _getLastRowIndex).call(this, this.dataAccessObject.wtTable.getLastVisibleRow());
  }
  /**
   * Get first partially visible row based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getFirstPartiallyVisibleRow() {
    return this.dataAccessObject.wtTable.getFirstPartiallyVisibleRow();
  }
  /**
   * Get last visible row based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getLastPartiallyVisibleRow() {
    return _assertClassBrand7(_Scroll_brand, this, _getLastRowIndex).call(this, this.dataAccessObject.wtTable.getLastPartiallyVisibleRow());
  }
  /**
   * Get first visible column based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getFirstVisibleColumn() {
    return this.dataAccessObject.wtTable.getFirstVisibleColumn();
  }
  /**
   * Get last visible column based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getLastVisibleColumn() {
    return _assertClassBrand7(_Scroll_brand, this, _getLastColumnIndex).call(this, this.dataAccessObject.wtTable.getLastVisibleColumn());
  }
  /**
   * Get first partially visible column based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getFirstPartiallyVisibleColumn() {
    return this.dataAccessObject.wtTable.getFirstPartiallyVisibleColumn();
  }
  /**
   * Get last partially visible column based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getLastPartiallyVisibleColumn() {
    return _assertClassBrand7(_Scroll_brand, this, _getLastColumnIndex).call(this, this.dataAccessObject.wtTable.getLastPartiallyVisibleColumn());
  }
};
function _getLastColumnIndex(lastColumnIndex) {
  const {
    wtSettings,
    inlineStartOverlay,
    wtTable,
    wtViewport,
    totalColumns,
    rootWindow
  } = this.dataAccessObject;
  if (inlineStartOverlay.mainTableScrollableElement === rootWindow) {
    const isRtl = wtSettings.getSetting("rtlMode");
    let inlineStartRootElementOffset = null;
    if (isRtl) {
      const tableRect = wtTable.TABLE.getBoundingClientRect();
      const rootDocument = this.dataAccessObject.rootWindow.document;
      const docOffsetWidth = rootDocument.documentElement.offsetWidth;
      inlineStartRootElementOffset = Math.abs(tableRect.right - docOffsetWidth);
    } else {
      const rootElementOffset = offset(wtTable.wtRootElement);
      inlineStartRootElementOffset = rootElementOffset.left;
    }
    const windowScrollLeft = Math.abs(getScrollLeft(rootWindow, rootWindow));
    if (inlineStartRootElementOffset > windowScrollLeft) {
      const windowWidth = innerWidth(rootWindow);
      let columnsWidth = wtViewport.getRowHeaderWidth();
      for (let column = 1; column <= totalColumns; column++) {
        columnsWidth += inlineStartOverlay.sumCellSizes(column - 1, column);
        if (inlineStartRootElementOffset + columnsWidth - windowScrollLeft >= windowWidth) {
          lastColumnIndex = column - 2;
          break;
        }
      }
    }
  }
  return lastColumnIndex;
}
function _getLastRowIndex(lastRowIndex) {
  const {
    topOverlay,
    wtTable,
    wtViewport,
    totalRows,
    rootWindow
  } = this.dataAccessObject;
  if (topOverlay.mainTableScrollableElement === rootWindow) {
    const rootElementOffset = offset(wtTable.wtRootElement);
    const windowScrollTop = getScrollTop(rootWindow, rootWindow);
    if (rootElementOffset.top > windowScrollTop) {
      const windowHeight = innerHeight(rootWindow);
      let rowsHeight = wtViewport.getColumnHeaderHeight();
      for (let row = 1; row <= totalRows; row++) {
        rowsHeight += topOverlay.sumCellSizes(row - 1, row);
        if (rootElementOffset.top + rowsHeight - windowScrollTop >= windowHeight) {
          lastRowIndex = row - 2;
          break;
        }
      }
    }
  }
  return lastRowIndex;
}
var scroll_default = Scroll;

// node_modules/handsontable/3rdparty/walkontable/src/core/_base.mjs
function _defineProperty25(obj, key, value) {
  key = _toPropertyKey25(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey25(t) {
  var i = _toPrimitive25(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive25(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var CoreAbstract = class {
  get eventManager() {
    return new eventManager_default(this);
  }
  /**
   * @param {HTMLTableElement} table Main table.
   * @param {Settings} settings The Walkontable settings.
   */
  constructor(table, settings) {
    _defineProperty25(this, "wtTable", void 0);
    _defineProperty25(this, "wtScroll", void 0);
    _defineProperty25(this, "wtViewport", void 0);
    _defineProperty25(this, "wtOverlays", void 0);
    _defineProperty25(this, "selectionManager", void 0);
    _defineProperty25(this, "wtEvent", void 0);
    _defineProperty25(this, "guid", `wt_${randomString()}`);
    _defineProperty25(this, "drawInterrupted", false);
    _defineProperty25(this, "drawn", false);
    _defineProperty25(this, "domBindings", void 0);
    _defineProperty25(this, "wtSettings", void 0);
    this.domBindings = {
      rootTable: table,
      rootDocument: table.ownerDocument,
      rootWindow: table.ownerDocument.defaultView
    };
    this.wtSettings = settings;
    this.wtScroll = new scroll_default(this.createScrollDao());
  }
  findOriginalHeaders() {
    const originalHeaders = [];
    if (this.wtTable.THEAD.childNodes.length && this.wtTable.THEAD.childNodes[0].childNodes.length) {
      for (let c = 0, clen = this.wtTable.THEAD.childNodes[0].childNodes.length; c < clen; c++) {
        originalHeaders.push(this.wtTable.THEAD.childNodes[0].childNodes[c].innerHTML);
      }
      if (!this.wtSettings.getSetting("columnHeaders").length) {
        this.wtSettings.update("columnHeaders", [function(column, TH) {
          fastInnerText(TH, originalHeaders[column]);
        }]);
      }
    }
  }
  /**
   * Creates and returns the CellCoords object.
   *
   * @param {*} row The row index.
   * @param {*} column The column index.
   * @returns {CellCoords}
   */
  createCellCoords(row, column) {
    return new coords_default(row, column, this.wtSettings.getSetting("rtlMode"));
  }
  /**
   * Creates and returns the CellRange object.
   *
   * @param {CellCoords} highlight The highlight coordinates.
   * @param {CellCoords} from The from coordinates.
   * @param {CellCoords} to The to coordinates.
   * @returns {CellRange}
   */
  createCellRange(highlight, from, to) {
    return new range_default(highlight, from, to, this.wtSettings.getSetting("rtlMode"));
  }
  /**
   * Force rerender of Walkontable.
   *
   * @param {boolean} [fastDraw=false] When `true`, try to refresh only the positions of borders without rerendering
   *                                   the data. It will only work if Table.draw() does not force
   *                                   rendering anyway.
   * @returns {Walkontable}
   */
  draw() {
    let fastDraw = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    this.drawInterrupted = false;
    if (!this.wtTable.isVisible()) {
      this.drawInterrupted = true;
    } else {
      this.wtTable.draw(fastDraw);
    }
    return this;
  }
  /**
   * Returns the TD at coords. If topmost is set to true, returns TD from the topmost overlay layer,
   * if not set or set to false, returns TD from the master table.
   *
   * @param {CellCoords} coords The cell coordinates.
   * @param {boolean} [topmost=false] If set to `true`, it returns the TD element from the topmost overlay. For example,
   *                                  if the wanted cell is in the range of fixed rows, it will return a TD element
   *                                  from the top overlay.
   * @returns {HTMLElement}
   */
  getCell(coords) {
    let topmost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!topmost) {
      return this.wtTable.getCell(coords);
    }
    const totalRows = this.wtSettings.getSetting("totalRows");
    const fixedRowsTop = this.wtSettings.getSetting("fixedRowsTop");
    const fixedRowsBottom = this.wtSettings.getSetting("fixedRowsBottom");
    const fixedColumnsStart = this.wtSettings.getSetting("fixedColumnsStart");
    if (coords.row < fixedRowsTop && coords.col < fixedColumnsStart) {
      return this.wtOverlays.topInlineStartCornerOverlay.clone.wtTable.getCell(coords);
    } else if (coords.row < fixedRowsTop) {
      return this.wtOverlays.topOverlay.clone.wtTable.getCell(coords);
    } else if (coords.col < fixedColumnsStart && coords.row >= totalRows - fixedRowsBottom) {
      if (this.wtOverlays.bottomInlineStartCornerOverlay && this.wtOverlays.bottomInlineStartCornerOverlay.clone) {
        return this.wtOverlays.bottomInlineStartCornerOverlay.clone.wtTable.getCell(coords);
      }
    } else if (coords.col < fixedColumnsStart) {
      return this.wtOverlays.inlineStartOverlay.clone.wtTable.getCell(coords);
    } else if (coords.row < totalRows && coords.row >= totalRows - fixedRowsBottom) {
      if (this.wtOverlays.bottomOverlay && this.wtOverlays.bottomOverlay.clone) {
        return this.wtOverlays.bottomOverlay.clone.wtTable.getCell(coords);
      }
    }
    return this.wtTable.getCell(coords);
  }
  /**
   * Scrolls the viewport to a cell (rerenders if needed).
   *
   * @param {CellCoords} coords The cell coordinates to scroll to.
   * @param {boolean} [snapToTop] If `true`, viewport is scrolled to show the cell on the top of the table.
   * @param {boolean} [snapToRight] If `true`, viewport is scrolled to show the cell on the right of the table.
   * @param {boolean} [snapToBottom] If `true`, viewport is scrolled to show the cell on the bottom of the table.
   * @param {boolean} [snapToLeft] If `true`, viewport is scrolled to show the cell on the left of the table.
   * @returns {boolean}
   */
  scrollViewport(coords, snapToTop, snapToRight, snapToBottom, snapToLeft) {
    if (coords.col < 0 || coords.row < 0) {
      return false;
    }
    return this.wtScroll.scrollViewport(coords, snapToTop, snapToRight, snapToBottom, snapToLeft);
  }
  /**
   * Scrolls the viewport to a column (rerenders if needed).
   *
   * @param {number} column Visual column index.
   * @param {boolean} [snapToRight] If `true`, viewport is scrolled to show the cell on the right of the table.
   * @param {boolean} [snapToLeft] If `true`, viewport is scrolled to show the cell on the left of the table.
   * @returns {boolean}
   */
  scrollViewportHorizontally(column, snapToRight, snapToLeft) {
    if (column < 0) {
      return false;
    }
    return this.wtScroll.scrollViewportHorizontally(column, snapToRight, snapToLeft);
  }
  /**
   * Scrolls the viewport to a row (rerenders if needed).
   *
   * @param {number} row Visual row index.
   * @param {boolean} [snapToTop] If `true`, viewport is scrolled to show the cell on the top of the table.
   * @param {boolean} [snapToBottom] If `true`, viewport is scrolled to show the cell on the bottom of the table.
   * @returns {boolean}
   */
  scrollViewportVertically(row, snapToTop, snapToBottom) {
    if (row < 0) {
      return false;
    }
    return this.wtScroll.scrollViewportVertically(row, snapToTop, snapToBottom);
  }
  /**
   * @returns {Array}
   */
  getViewport() {
    return [this.wtTable.getFirstVisibleRow(), this.wtTable.getFirstVisibleColumn(), this.wtTable.getLastVisibleRow(), this.wtTable.getLastVisibleColumn()];
  }
  /**
   * Destroy instance.
   */
  destroy() {
    this.wtOverlays.destroy();
    this.wtEvent.destroy();
  }
  /**
   * Create data access object for scroll.
   *
   * @protected
   * @returns {ScrollDao}
   */
  createScrollDao() {
    const wot = this;
    return {
      get drawn() {
        return wot.drawn;
      },
      get topOverlay() {
        return wot.wtOverlays.topOverlay;
      },
      get inlineStartOverlay() {
        return wot.wtOverlays.inlineStartOverlay;
      },
      get wtTable() {
        return wot.wtTable;
      },
      get wtViewport() {
        return wot.wtViewport;
      },
      get wtSettings() {
        return wot.wtSettings;
      },
      get rootWindow() {
        return wot.domBindings.rootWindow;
      },
      // TODO refactoring, consider about using injecting wtSettings into scroll (it'll enables remove dao layer)
      get totalRows() {
        return wot.wtSettings.getSetting("totalRows");
      },
      get totalColumns() {
        return wot.wtSettings.getSetting("totalColumns");
      },
      get fixedRowsTop() {
        return wot.wtSettings.getSetting("fixedRowsTop");
      },
      get fixedRowsBottom() {
        return wot.wtSettings.getSetting("fixedRowsBottom");
      },
      get fixedColumnsStart() {
        return wot.wtSettings.getSetting("fixedColumnsStart");
      }
    };
  }
  // TODO refactoring: it will be much better to not use DAO objects. They are needed for now to provide
  // dynamically access to related objects
  /**
   * Create data access object for wtTable.
   *
   * @protected
   * @returns {TableDao}
   */
  getTableDao() {
    const wot = this;
    return {
      get wot() {
        return wot;
      },
      get parentTableOffset() {
        return wot.cloneSource.wtTable.tableOffset;
      },
      get cloneSource() {
        return wot.cloneSource;
      },
      get workspaceWidth() {
        return wot.wtViewport.getWorkspaceWidth();
      },
      get wtViewport() {
        return wot.wtViewport;
      },
      get wtOverlays() {
        return wot.wtOverlays;
      },
      get selectionManager() {
        return wot.selectionManager;
      },
      get drawn() {
        return wot.drawn;
      },
      set drawn(v) {
        wot.drawn = v;
      },
      get wtTable() {
        return wot.wtTable;
      },
      get startColumnRendered() {
        return wot.wtViewport.columnsRenderCalculator.startColumn;
      },
      get startColumnVisible() {
        return wot.wtViewport.columnsVisibleCalculator.startColumn;
      },
      get startColumnPartiallyVisible() {
        return wot.wtViewport.columnsPartiallyVisibleCalculator.startColumn;
      },
      get endColumnRendered() {
        return wot.wtViewport.columnsRenderCalculator.endColumn;
      },
      get endColumnVisible() {
        return wot.wtViewport.columnsVisibleCalculator.endColumn;
      },
      get endColumnPartiallyVisible() {
        return wot.wtViewport.columnsPartiallyVisibleCalculator.endColumn;
      },
      get countColumnsRendered() {
        return wot.wtViewport.columnsRenderCalculator.count;
      },
      get countColumnsVisible() {
        return wot.wtViewport.columnsVisibleCalculator.count;
      },
      get startRowRendered() {
        return wot.wtViewport.rowsRenderCalculator.startRow;
      },
      get startRowVisible() {
        return wot.wtViewport.rowsVisibleCalculator.startRow;
      },
      get startRowPartiallyVisible() {
        return wot.wtViewport.rowsPartiallyVisibleCalculator.startRow;
      },
      get endRowRendered() {
        return wot.wtViewport.rowsRenderCalculator.endRow;
      },
      get endRowVisible() {
        return wot.wtViewport.rowsVisibleCalculator.endRow;
      },
      get endRowPartiallyVisible() {
        return wot.wtViewport.rowsPartiallyVisibleCalculator.endRow;
      },
      get countRowsRendered() {
        return wot.wtViewport.rowsRenderCalculator.count;
      },
      get countRowsVisible() {
        return wot.wtViewport.rowsVisibleCalculator.count;
      },
      get columnHeaders() {
        return wot.wtSettings.getSetting("columnHeaders");
      },
      get rowHeaders() {
        return wot.wtSettings.getSetting("rowHeaders");
      }
    };
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/core/clone.mjs
function _defineProperty26(obj, key, value) {
  key = _toPropertyKey26(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey26(t) {
  var i = _toPrimitive26(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive26(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var Clone = class extends CoreAbstract {
  /**
   * @param {HTMLTableElement} table Main table.
   * @param {SettingsPure|Settings} settings The Walkontable settings.
   * @param {WalkontableCloneOptions} clone Clone data.
   */
  constructor(table, settings, clone2) {
    super(table, settings);
    _defineProperty26(this, "cloneSource", void 0);
    _defineProperty26(this, "cloneOverlay", void 0);
    const facadeGetter = this.wtSettings.getSetting("facade", this);
    this.cloneSource = clone2.source;
    this.cloneOverlay = clone2.overlay;
    this.wtTable = this.cloneOverlay.createTable(this.getTableDao(), facadeGetter, this.domBindings, this.wtSettings);
    this.wtViewport = clone2.viewport;
    this.selectionManager = clone2.selectionManager;
    this.wtEvent = new event_default(facadeGetter, this.domBindings, this.wtSettings, this.eventManager, this.wtTable, this.selectionManager, clone2.event);
    this.findOriginalHeaders();
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/overlay/_base.mjs
function _defineProperty27(obj, key, value) {
  key = _toPropertyKey27(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey27(t) {
  var i = _toPrimitive27(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive27(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var Overlay = class {
  /**
   * @param {Walkontable} wotInstance The Walkontable instance. @TODO refactoring: check if can be deleted.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {CLONE_TYPES_ENUM} type The overlay type name (clone name).
   * @param {Settings} wtSettings The Walkontable settings.
   * @param {DomBindings} domBindings Dom elements bound to the current instance.
   */
  constructor(wotInstance, facadeGetter, type, wtSettings, domBindings) {
    _defineProperty27(this, "wtSettings", null);
    defineGetter(this, "wot", wotInstance, {
      writable: false
    });
    this.domBindings = domBindings;
    this.facadeGetter = facadeGetter;
    this.wtSettings = wtSettings;
    const {
      TABLE,
      hider,
      spreader,
      holder,
      wtRootElement
    } = this.wot.wtTable;
    this.instance = this.wot;
    this.type = type;
    this.mainTableScrollableElement = null;
    this.TABLE = TABLE;
    this.hider = hider;
    this.spreader = spreader;
    this.holder = holder;
    this.wtRootElement = wtRootElement;
    this.trimmingContainer = getTrimmingContainer(this.hider.parentNode.parentNode);
    this.needFullRender = this.shouldBeRendered();
    this.clone = this.makeClone();
  }
  /**
   * Checks if the overlay rendering state has changed.
   *
   * @returns {boolean}
   */
  hasRenderingStateChanged() {
    return this.needFullRender !== this.shouldBeRendered();
  }
  /**
   * Updates internal state with an information about the need of full rendering of the overlay in the next draw cycles.
   *
   * If the state is changed to render the overlay, the `needFullRender` property is set to `true` which means that
   * the overlay will be fully rendered in the current draw cycle. If the state is changed to not render the overlay,
   * the `needFullRender` property is set to `false` which means that the overlay will be fully rendered in the
   * current draw cycle but it will not be rendered in the next draw cycles.
   *
   * @param {'before' | 'after'} drawPhase The phase of the rendering process.
   */
  updateStateOfRendering(drawPhase) {
    if (drawPhase === "before" && this.shouldBeRendered()) {
      this.needFullRender = true;
    } else if (drawPhase === "after" && !this.shouldBeRendered()) {
      this.needFullRender = false;
    }
  }
  /**
   * Checks if overlay should be fully rendered.
   *
   * @returns {boolean}
   */
  shouldBeRendered() {
    return true;
  }
  /**
   * Update the trimming container.
   */
  updateTrimmingContainer() {
    this.trimmingContainer = getTrimmingContainer(this.hider.parentNode.parentNode);
  }
  /**
   * Update the main scrollable element.
   */
  updateMainScrollableElement() {
    const {
      wtTable
    } = this.wot;
    const {
      rootWindow
    } = this.domBindings;
    if (rootWindow.getComputedStyle(wtTable.wtRootElement.parentNode).getPropertyValue("overflow") === "hidden") {
      this.mainTableScrollableElement = this.wot.wtTable.holder;
    } else {
      this.mainTableScrollableElement = getScrollableElement(wtTable.TABLE);
    }
  }
  /**
   * Calculates coordinates of the provided element, relative to the root Handsontable element.
   * NOTE: The element needs to be a child of the overlay in order for the method to work correctly.
   *
   * @param {HTMLElement} element The cell element to calculate the position for.
   * @param {number} rowIndex Visual row index.
   * @param {number} columnIndex Visual column index.
   * @returns {{top: number, start: number}|undefined}
   */
  getRelativeCellPosition(element, rowIndex, columnIndex) {
    if (this.clone.wtTable.holder.contains(element) === false) {
      warn(`The provided element is not a child of the ${this.type} overlay`);
      return;
    }
    const windowScroll = this.mainTableScrollableElement === this.domBindings.rootWindow;
    const fixedColumnStart = columnIndex < this.wtSettings.getSetting("fixedColumnsStart");
    const fixedRowTop = rowIndex < this.wtSettings.getSetting("fixedRowsTop");
    const fixedRowBottom = rowIndex >= this.wtSettings.getSetting("totalRows") - this.wtSettings.getSetting("fixedRowsBottom");
    const spreader = this.clone.wtTable.spreader;
    const spreaderOffset = {
      start: this.getRelativeStartPosition(spreader),
      top: spreader.offsetTop
    };
    const elementOffset = {
      start: this.getRelativeStartPosition(element),
      top: element.offsetTop
    };
    let offsetObject = null;
    if (windowScroll) {
      offsetObject = this.getRelativeCellPositionWithinWindow(fixedRowTop, fixedColumnStart, elementOffset, spreaderOffset);
    } else {
      offsetObject = this.getRelativeCellPositionWithinHolder(fixedRowTop, fixedRowBottom, fixedColumnStart, elementOffset, spreaderOffset);
    }
    return offsetObject;
  }
  /**
   * Get inline start value depending of direction.
   *
   * @param {HTMLElement} el Element.
   * @returns {number}
   */
  getRelativeStartPosition(el) {
    return this.isRtl() ? el.offsetParent.offsetWidth - el.offsetLeft - el.offsetWidth : el.offsetLeft;
  }
  /**
   * Calculates coordinates of the provided element, relative to the root Handsontable element within a table with window
   * as a scrollable element.
   *
   * @private
   * @param {boolean} onFixedRowTop `true` if the coordinates point to a place within the top fixed rows.
   * @param {boolean} onFixedColumn `true` if the coordinates point to a place within the fixed columns.
   * @param {number} elementOffset Offset position of the cell element.
   * @param {number} spreaderOffset Offset position of the spreader element.
   * @returns {{top: number, left: number}}
   */
  getRelativeCellPositionWithinWindow(onFixedRowTop, onFixedColumn, elementOffset, spreaderOffset) {
    const absoluteRootElementPosition = this.wot.wtTable.wtRootElement.getBoundingClientRect();
    let horizontalOffset = 0;
    let verticalOffset = 0;
    if (!onFixedColumn) {
      horizontalOffset = spreaderOffset.start;
    } else {
      let absoluteRootElementStartPosition = absoluteRootElementPosition.left;
      if (this.isRtl()) {
        absoluteRootElementStartPosition = this.domBindings.rootWindow.innerWidth - (absoluteRootElementPosition.left + absoluteRootElementPosition.width + getScrollbarWidth());
      }
      horizontalOffset = absoluteRootElementStartPosition <= 0 ? -1 * absoluteRootElementStartPosition : 0;
    }
    if (onFixedRowTop) {
      const absoluteOverlayPosition = this.clone.wtTable.TABLE.getBoundingClientRect();
      verticalOffset = absoluteOverlayPosition.top - absoluteRootElementPosition.top;
    } else {
      verticalOffset = spreaderOffset.top;
    }
    return {
      start: elementOffset.start + horizontalOffset,
      top: elementOffset.top + verticalOffset
    };
  }
  /**
   * Calculates coordinates of the provided element, relative to the root Handsontable element within a table with window
   * as a scrollable element.
   *
   * @private
   * @param {boolean} onFixedRowTop `true` if the coordinates point to a place within the top fixed rows.
   * @param {boolean} onFixedRowBottom `true` if the coordinates point to a place within the bottom fixed rows.
   * @param {boolean} onFixedColumn `true` if the coordinates point to a place within the fixed columns.
   * @param {number} elementOffset Offset position of the cell element.
   * @param {number} spreaderOffset Offset position of the spreader element.
   * @returns {{top: number, left: number}}
   */
  getRelativeCellPositionWithinHolder(onFixedRowTop, onFixedRowBottom, onFixedColumn, elementOffset, spreaderOffset) {
    const tableScrollPosition = {
      horizontal: this.wot.wtOverlays.inlineStartOverlay.getScrollPosition(),
      vertical: this.wot.wtOverlays.topOverlay.getScrollPosition()
    };
    let horizontalOffset = 0;
    let verticalOffset = 0;
    if (!onFixedColumn) {
      horizontalOffset = tableScrollPosition.horizontal - spreaderOffset.start;
    }
    if (onFixedRowBottom) {
      const absoluteRootElementPosition = this.wot.wtTable.wtRootElement.getBoundingClientRect();
      const absoluteOverlayPosition = this.clone.wtTable.TABLE.getBoundingClientRect();
      verticalOffset = absoluteOverlayPosition.top * -1 + absoluteRootElementPosition.top;
    } else if (!onFixedRowTop) {
      verticalOffset = tableScrollPosition.vertical - spreaderOffset.top;
    }
    return {
      start: elementOffset.start - horizontalOffset,
      top: elementOffset.top - verticalOffset
    };
  }
  /**
   * Make a clone of table for overlay.
   *
   * @returns {Clone}
   */
  makeClone() {
    if (CLONE_TYPES.indexOf(this.type) === -1) {
      throw new Error(`Clone type "${this.type}" is not supported.`);
    }
    const {
      wtTable,
      wtSettings
    } = this.wot;
    const {
      rootDocument,
      rootWindow
    } = this.domBindings;
    const clone2 = rootDocument.createElement("div");
    const clonedTable = rootDocument.createElement("table");
    const tableParent = wtTable.wtRootElement.parentNode;
    clone2.className = `${CLONE_CLASS_NAMES.get(this.type)} handsontable`;
    clone2.setAttribute("dir", this.isRtl() ? "rtl" : "ltr");
    clone2.style.position = "absolute";
    clone2.style.top = 0;
    clone2.style.overflow = "visible";
    if (this.isRtl()) {
      clone2.style.right = 0;
    } else {
      clone2.style.left = 0;
    }
    if (wtSettings.getSetting("ariaTags")) {
      setAttribute(clone2, [A11Y_PRESENTATION()]);
    }
    clonedTable.className = wtTable.TABLE.className;
    const mainTableRole = wtTable.TABLE.getAttribute("role");
    if (mainTableRole) {
      clonedTable.setAttribute("role", wtTable.TABLE.getAttribute("role"));
    }
    clone2.appendChild(clonedTable);
    tableParent.appendChild(clone2);
    const preventOverflow = this.wtSettings.getSetting("preventOverflow");
    if (preventOverflow === true || preventOverflow === "horizontal" && this.type === CLONE_TOP || preventOverflow === "vertical" && this.type === CLONE_INLINE_START) {
      this.mainTableScrollableElement = rootWindow;
    } else if (rootWindow.getComputedStyle(tableParent).getPropertyValue("overflow") === "hidden") {
      this.mainTableScrollableElement = wtTable.holder;
    } else {
      this.mainTableScrollableElement = getScrollableElement(wtTable.TABLE);
    }
    return new Clone(clonedTable, this.wtSettings, {
      // todo ioc factory
      source: this.wot,
      overlay: this,
      viewport: this.wot.wtViewport,
      // todo ioc , or factor func if used only here
      event: this.wot.wtEvent,
      // todo ioc , or factory func if used only here
      selectionManager: this.wot.selectionManager
      // todo ioc , or factory func if used only here
    });
  }
  /**
   * Refresh/Redraw overlay.
   *
   * @param {boolean} [fastDraw=false] When `true`, try to refresh only the positions of borders without rerendering
   *                                   the data. It will only work if Table.draw() does not force
   *                                   rendering anyway.
   */
  refresh() {
    let fastDraw = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (this.needFullRender) {
      this.clone.draw(fastDraw);
    }
  }
  /**
   * Reset overlay styles to initial values.
   */
  reset() {
    const holder = this.clone.wtTable.holder;
    const hider = this.clone.wtTable.hider;
    const holderStyle = holder.style;
    const hiderStyle = hider.style;
    const rootStyle = holder.parentNode.style;
    [holderStyle, hiderStyle, rootStyle].forEach((style) => {
      style.width = "";
      style.height = "";
    });
  }
  /**
   * Determine if Walkontable is running in RTL mode.
   *
   * @returns {boolean}
   */
  isRtl() {
    return this.wtSettings.getSetting("rtlMode");
  }
  /**
   * Destroy overlay instance.
   */
  destroy() {
    this.clone.eventManager.destroy();
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/overlay/bottomInlineStartCorner.mjs
var BottomInlineStartCornerOverlay = class extends Overlay {
  /**
   * @param {Walkontable} wotInstance The Walkontable instance. @TODO refactoring: check if can be deleted.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {Settings} wtSettings The Walkontable settings.
   * @param {DomBindings} domBindings Dom elements bound to the current instance.
   * @param {BottomOverlay} bottomOverlay The instance of the Top overlay.
   * @param {InlineStartOverlay} inlineStartOverlay The instance of the InlineStart overlay.
   */
  constructor(wotInstance, facadeGetter, wtSettings, domBindings, bottomOverlay, inlineStartOverlay) {
    super(wotInstance, facadeGetter, CLONE_BOTTOM_INLINE_START_CORNER, wtSettings, domBindings);
    this.bottomOverlay = bottomOverlay;
    this.inlineStartOverlay = inlineStartOverlay;
  }
  /**
   * Factory method to create a subclass of `Table` that is relevant to this overlay.
   *
   * @see Table#constructor
   * @param {...*} args Parameters that will be forwarded to the `Table` constructor.
   * @returns {BottomInlineStartCornerOverlayTable}
   */
  createTable() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return new bottomInlineStartCorner_default(...args);
  }
  /**
   * Checks if overlay should be fully rendered.
   *
   * @returns {boolean}
   */
  shouldBeRendered() {
    return this.wtSettings.getSetting("shouldRenderBottomOverlay") && this.wtSettings.getSetting("shouldRenderInlineStartOverlay");
  }
  /**
   * Updates the corner overlay position.
   *
   * @returns {boolean}
   */
  resetFixedPosition() {
    const {
      wot
    } = this;
    this.updateTrimmingContainer();
    if (!wot.wtTable.holder.parentNode) {
      return false;
    }
    const overlayRoot = this.clone.wtTable.holder.parentNode;
    overlayRoot.style.top = "";
    if (this.trimmingContainer === this.domBindings.rootWindow) {
      const inlineStartOffset = this.inlineStartOverlay.getOverlayOffset();
      const bottom = this.bottomOverlay.getOverlayOffset();
      overlayRoot.style[this.isRtl() ? "right" : "left"] = `${inlineStartOffset}px`;
      overlayRoot.style.bottom = `${bottom}px`;
    } else {
      resetCssTransform(overlayRoot);
      this.repositionOverlay();
    }
    let tableHeight = outerHeight(this.clone.wtTable.TABLE);
    const tableWidth = outerWidth(this.clone.wtTable.TABLE);
    if (!this.wot.wtTable.hasDefinedSize()) {
      tableHeight = 0;
    }
    overlayRoot.style.height = `${tableHeight}px`;
    overlayRoot.style.width = `${tableWidth}px`;
    return false;
  }
  /**
   * Reposition the overlay.
   */
  repositionOverlay() {
    const {
      wtTable,
      wtViewport
    } = this.wot;
    const {
      rootDocument
    } = this.domBindings;
    const cloneRoot = this.clone.wtTable.holder.parentNode;
    let bottomOffset = 0;
    if (!wtViewport.hasVerticalScroll()) {
      bottomOffset += wtViewport.getWorkspaceHeight() - wtTable.getTotalHeight();
    }
    if (wtViewport.hasVerticalScroll() && wtViewport.hasHorizontalScroll()) {
      bottomOffset += getScrollbarWidth(rootDocument);
    }
    cloneRoot.style.bottom = `${bottomOffset}px`;
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/table/mixin/calculatedColumns.mjs
var MIXIN_NAME3 = "calculatedColumns";
var calculatedColumns = {
  /**
   * Get the source index of the first rendered column. If no columns are rendered, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getFirstRenderedColumn() {
    const startColumn = this.dataAccessObject.startColumnRendered;
    if (startColumn === null) {
      return -1;
    }
    return startColumn;
  },
  /**
   * Get the source index of the first column fully visible in the viewport. If no columns are fully visible, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getFirstVisibleColumn() {
    const startColumn = this.dataAccessObject.startColumnVisible;
    if (startColumn === null) {
      return -1;
    }
    return startColumn;
  },
  /**
   * Get the source index of the first column partially visible in the viewport. If no columns are partially visible, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getFirstPartiallyVisibleColumn() {
    const startColumn = this.dataAccessObject.startColumnPartiallyVisible;
    if (startColumn === null) {
      return -1;
    }
    return startColumn;
  },
  /**
   * Get the source index of the last rendered column. If no columns are rendered, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getLastRenderedColumn() {
    const endColumn = this.dataAccessObject.endColumnRendered;
    if (endColumn === null) {
      return -1;
    }
    return endColumn;
  },
  /**
   * Get the source index of the last column fully visible in the viewport. If no columns are fully visible, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getLastVisibleColumn() {
    const endColumn = this.dataAccessObject.endColumnVisible;
    if (endColumn === null) {
      return -1;
    }
    return endColumn;
  },
  /**
   * Get the source index of the last column partially visible in the viewport. If no columns are partially visible, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getLastPartiallyVisibleColumn() {
    const endColumn = this.dataAccessObject.endColumnPartiallyVisible;
    if (endColumn === null) {
      return -1;
    }
    return endColumn;
  },
  /**
   * Get the number of rendered columns.
   *
   * @returns {number}
   * @this Table
   */
  getRenderedColumnsCount() {
    return this.dataAccessObject.countColumnsRendered;
  },
  /**
   * Get the number of fully visible columns in the viewport.
   *
   * @returns {number}
   * @this Table
   */
  getVisibleColumnsCount() {
    return this.dataAccessObject.countColumnsVisible;
  },
  /**
   * Get the number of rendered row headers.
   *
   * @returns {number}
   * @this Table
   */
  getRowHeadersCount() {
    return this.dataAccessObject.rowHeaders.length;
  }
};
defineGetter(calculatedColumns, "MIXIN_NAME", MIXIN_NAME3, {
  writable: false,
  enumerable: false
});
var calculatedColumns_default = calculatedColumns;

// node_modules/handsontable/3rdparty/walkontable/src/table/bottom.mjs
var BottomOverlayTable = class extends table_default {
  /**
   * @param {TableDao} dataAccessObject The data access object.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {DomBindings} domBindings Bindings into DOM.
   * @param {Settings} wtSettings The Walkontable settings.
   */
  constructor(dataAccessObject, facadeGetter, domBindings, wtSettings) {
    super(dataAccessObject, facadeGetter, domBindings, wtSettings, CLONE_BOTTOM);
  }
};
mixin(BottomOverlayTable, stickyRowsBottom_default);
mixin(BottomOverlayTable, calculatedColumns_default);
var bottom_default = BottomOverlayTable;

// node_modules/handsontable/3rdparty/walkontable/src/overlay/bottom.mjs
function _defineProperty28(obj, key, value) {
  key = _toPropertyKey28(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey28(t) {
  var i = _toPrimitive28(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive28(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var BottomOverlay = class extends Overlay {
  /**
   * @param {Walkontable} wotInstance The Walkontable instance. @TODO refactoring: check if can be deleted.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {Settings} wtSettings The Walkontable settings.
   * @param {DomBindings} domBindings Dom elements bound to the current instance.
   */
  constructor(wotInstance, facadeGetter, wtSettings, domBindings) {
    super(wotInstance, facadeGetter, CLONE_BOTTOM, wtSettings, domBindings);
    _defineProperty28(this, "cachedFixedRowsBottom", -1);
    this.cachedFixedRowsBottom = this.wtSettings.getSetting("fixedRowsBottom");
  }
  /**
   * Factory method to create a subclass of `Table` that is relevant to this overlay.
   *
   * @see Table#constructor
   * @param {...*} args Parameters that will be forwarded to the `Table` constructor.
   * @returns {BottomOverlayTable}
   */
  createTable() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return new bottom_default(...args);
  }
  /**
   * Checks if overlay should be fully rendered.
   *
   * @returns {boolean}
   */
  shouldBeRendered() {
    return this.wtSettings.getSetting("shouldRenderBottomOverlay");
  }
  /**
   * Updates the top overlay position.
   *
   * @returns {boolean}
   */
  resetFixedPosition() {
    if (!this.needFullRender || !this.shouldBeRendered() || !this.wot.wtTable.holder.parentNode) {
      return false;
    }
    const {
      rootWindow
    } = this.domBindings;
    const overlayRoot = this.clone.wtTable.holder.parentNode;
    overlayRoot.style.top = "";
    let overlayPosition = 0;
    const preventOverflow = this.wtSettings.getSetting("preventOverflow");
    if (this.trimmingContainer === rootWindow && (!preventOverflow || preventOverflow !== "vertical")) {
      overlayPosition = this.getOverlayOffset();
      overlayRoot.style.bottom = `${overlayPosition}px`;
    } else {
      overlayPosition = this.getScrollPosition();
      this.repositionOverlay();
    }
    const positionChanged = this.adjustHeaderBordersPosition(overlayPosition);
    this.adjustElementsSize();
    return positionChanged;
  }
  /**
   * Updates the bottom overlay position.
   */
  repositionOverlay() {
    const {
      wtTable,
      wtViewport
    } = this.wot;
    const {
      rootDocument
    } = this.domBindings;
    const cloneRoot = this.clone.wtTable.holder.parentNode;
    let bottomOffset = 0;
    if (!wtViewport.hasVerticalScroll()) {
      bottomOffset += wtViewport.getWorkspaceHeight() - wtTable.getTotalHeight();
    }
    if (wtViewport.hasVerticalScroll() && wtViewport.hasHorizontalScroll()) {
      bottomOffset += getScrollbarWidth(rootDocument);
    }
    cloneRoot.style.bottom = `${bottomOffset}px`;
  }
  /**
   * Sets the main overlay's vertical scroll position.
   *
   * @param {number} pos The scroll position.
   * @returns {boolean}
   */
  setScrollPosition(pos) {
    const {
      rootWindow
    } = this.domBindings;
    let result = false;
    if (this.mainTableScrollableElement === rootWindow) {
      rootWindow.scrollTo(getWindowScrollLeft(rootWindow), pos);
      result = true;
    } else if (this.mainTableScrollableElement.scrollTop !== pos) {
      this.mainTableScrollableElement.scrollTop = pos;
      result = true;
    }
    return result;
  }
  /**
   * Triggers onScroll hook callback.
   */
  onScroll() {
    this.wtSettings.getSetting("onScrollHorizontally");
  }
  /**
   * Calculates total sum cells height.
   *
   * @param {number} from Row index which calculates started from.
   * @param {number} to Row index where calculation is finished.
   * @returns {number} Height sum.
   */
  sumCellSizes(from, to) {
    const {
      wtTable,
      wtSettings
    } = this.wot;
    const defaultRowHeight = wtSettings.getSetting("defaultRowHeight");
    let row = from;
    let sum = 0;
    while (row < to) {
      const height = wtTable.getRowHeight(row);
      sum += height === void 0 ? defaultRowHeight : height;
      row += 1;
    }
    return sum;
  }
  /**
   * Adjust overlay root element, children and master table element sizes (width, height).
   */
  adjustElementsSize() {
    this.updateTrimmingContainer();
    if (this.needFullRender) {
      this.adjustRootElementSize();
      this.adjustRootChildrenSize();
    }
  }
  /**
   * Adjust overlay root element size (width and height).
   */
  adjustRootElementSize() {
    const {
      wtTable,
      wtViewport
    } = this.wot;
    const {
      rootDocument,
      rootWindow
    } = this.domBindings;
    const scrollbarWidth = getScrollbarWidth(rootDocument);
    const overlayRoot = this.clone.wtTable.holder.parentNode;
    const overlayRootStyle = overlayRoot.style;
    const preventOverflow = this.wtSettings.getSetting("preventOverflow");
    if (this.trimmingContainer !== rootWindow || preventOverflow === "horizontal") {
      let width = wtViewport.getWorkspaceWidth();
      if (this.wot.wtOverlays.hasScrollbarRight) {
        width -= scrollbarWidth;
      }
      width = Math.min(width, wtTable.wtRootElement.scrollWidth);
      overlayRootStyle.width = `${width}px`;
    } else {
      overlayRootStyle.width = "";
    }
    this.clone.wtTable.holder.style.width = overlayRootStyle.width;
    let tableHeight = outerHeight(this.clone.wtTable.TABLE);
    if (!this.wot.wtTable.hasDefinedSize()) {
      tableHeight = 0;
    }
    overlayRootStyle.height = `${tableHeight}px`;
  }
  /**
   * Adjust overlay root childs size.
   */
  adjustRootChildrenSize() {
    const {
      holder
    } = this.clone.wtTable;
    this.clone.wtTable.hider.style.width = this.hider.style.width;
    holder.style.width = holder.parentNode.style.width;
    holder.style.height = holder.parentNode.style.height;
  }
  /**
   * Adjust the overlay dimensions and position.
   */
  applyToDOM() {
    const total = this.wtSettings.getSetting("totalRows");
    if (typeof this.wot.wtViewport.rowsRenderCalculator.startPosition === "number") {
      this.spreader.style.top = `${this.wot.wtViewport.rowsRenderCalculator.startPosition}px`;
    } else if (total === 0) {
      this.spreader.style.top = "0";
    } else {
      throw new Error("Incorrect value of the rowsRenderCalculator");
    }
    this.spreader.style.bottom = "";
    if (this.needFullRender) {
      this.syncOverlayOffset();
    }
  }
  /**
   * Synchronize calculated left position to an element.
   */
  syncOverlayOffset() {
    const styleProperty = this.isRtl() ? "right" : "left";
    const {
      spreader
    } = this.clone.wtTable;
    if (typeof this.wot.wtViewport.columnsRenderCalculator.startPosition === "number") {
      spreader.style[styleProperty] = `${this.wot.wtViewport.columnsRenderCalculator.startPosition}px`;
    } else {
      spreader.style[styleProperty] = "";
    }
  }
  /**
   * Scrolls vertically to a row.
   *
   * @param {number} sourceRow Row index which you want to scroll to.
   * @param {boolean} [bottomEdge=false] If `true`, scrolls according to the bottom edge (top edge is by default).
   */
  scrollTo(sourceRow, bottomEdge) {
    let newY = this.getTableParentOffset();
    const sourceInstance = this.wot.cloneSource ? this.wot.cloneSource : this.wot;
    const mainHolder = sourceInstance.wtTable.holder;
    let scrollbarCompensation = 0;
    if (bottomEdge && mainHolder.offsetHeight !== mainHolder.clientHeight) {
      scrollbarCompensation = getScrollbarWidth(this.domBindings.rootDocument);
    }
    if (bottomEdge) {
      newY += this.sumCellSizes(0, sourceRow + 1);
      newY -= this.wot.wtViewport.getViewportHeight();
      newY += 1;
    } else {
      newY += this.sumCellSizes(this.wtSettings.getSetting("fixedRowsBottom"), sourceRow);
    }
    newY += scrollbarCompensation;
    this.setScrollPosition(newY);
  }
  /**
   * Gets table parent top position.
   *
   * @returns {number}
   */
  getTableParentOffset() {
    if (this.mainTableScrollableElement === this.domBindings.rootWindow) {
      return this.wot.wtTable.holderOffset.top;
    }
    return 0;
  }
  /**
   * Gets the main overlay's vertical scroll position.
   *
   * @returns {number} Main table's vertical scroll position.
   */
  getScrollPosition() {
    return getScrollTop(this.mainTableScrollableElement, this.domBindings.rootWindow);
  }
  /**
   * Gets the main overlay's vertical overlay offset.
   *
   * @returns {number} Main table's vertical overlay offset.
   */
  getOverlayOffset() {
    const {
      rootWindow
    } = this.domBindings;
    const preventOverflow = this.wtSettings.getSetting("preventOverflow");
    let overlayOffset = 0;
    if (this.trimmingContainer === rootWindow && (!preventOverflow || preventOverflow !== "vertical")) {
      const rootHeight = this.wot.wtTable.getTotalHeight();
      const overlayRootHeight = this.clone.wtTable.getTotalHeight();
      const maxOffset = rootHeight - overlayRootHeight;
      const docClientHeight = this.domBindings.rootDocument.documentElement.clientHeight;
      overlayOffset = Math.max(this.getTableParentOffset() - this.getScrollPosition() - docClientHeight + rootHeight, 0);
      if (overlayOffset > maxOffset) {
        overlayOffset = 0;
      }
    }
    return overlayOffset;
  }
  /**
   * Adds css classes to hide the header border's header (cell-selection border hiding issue).
   *
   * @param {number} position Header Y position if trimming container is window or scroll top if not.
   * @returns {boolean}
   */
  adjustHeaderBordersPosition(position) {
    const fixedRowsBottom = this.wtSettings.getSetting("fixedRowsBottom");
    const areFixedRowsBottomChanged = this.cachedFixedRowsBottom !== fixedRowsBottom;
    const columnHeaders = this.wtSettings.getSetting("columnHeaders");
    let positionChanged = false;
    if ((areFixedRowsBottomChanged || fixedRowsBottom === 0) && columnHeaders.length > 0) {
      const masterParent = this.wot.wtTable.holder.parentNode;
      const previousState = hasClass(masterParent, "innerBorderBottom");
      this.cachedFixedRowsBottom = this.wtSettings.getSetting("fixedRowsBottom");
      if (position || this.wtSettings.getSetting("totalRows") === 0) {
        addClass(masterParent, "innerBorderBottom");
        positionChanged = !previousState;
      } else {
        removeClass(masterParent, "innerBorderBottom");
        positionChanged = previousState;
      }
    }
    return positionChanged;
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/table/mixin/calculatedRows.mjs
var MIXIN_NAME4 = "calculatedRows";
var calculatedRows = {
  /**
   * Get the source index of the first rendered row. If no rows are rendered, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getFirstRenderedRow() {
    const startRow = this.dataAccessObject.startRowRendered;
    if (startRow === null) {
      return -1;
    }
    return startRow;
  },
  /**
   * Get the source index of the first row fully visible in the viewport. If no rows are fully visible, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getFirstVisibleRow() {
    const startRow = this.dataAccessObject.startRowVisible;
    if (startRow === null) {
      return -1;
    }
    return startRow;
  },
  /**
   * Get the source index of the first row partially visible in the viewport. If no rows are partially visible, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getFirstPartiallyVisibleRow() {
    const startRow = this.dataAccessObject.startRowPartiallyVisible;
    if (startRow === null) {
      return -1;
    }
    return startRow;
  },
  /**
   * Get the source index of the last rendered row. If no rows are rendered, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getLastRenderedRow() {
    const endRow = this.dataAccessObject.endRowRendered;
    if (endRow === null) {
      return -1;
    }
    return endRow;
  },
  /**
   * Get the source index of the last row fully visible in the viewport. If no rows are fully visible, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getLastVisibleRow() {
    const endRow = this.dataAccessObject.endRowVisible;
    if (endRow === null) {
      return -1;
    }
    return endRow;
  },
  /**
   * Get the source index of the last row partially visible in the viewport. If no rows are partially visible, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getLastPartiallyVisibleRow() {
    const endRow = this.dataAccessObject.endRowPartiallyVisible;
    if (endRow === null) {
      return -1;
    }
    return endRow;
  },
  /**
   * Get the number of rendered rows.
   *
   * @returns {number}
   * @this Table
   */
  getRenderedRowsCount() {
    return this.dataAccessObject.countRowsRendered;
  },
  /**
   * Get the number of fully visible rows in the viewport.
   *
   * @returns {number}
   * @this Table
   */
  getVisibleRowsCount() {
    return this.dataAccessObject.countRowsVisible;
  },
  /**
   * Get the number of rendered column headers.
   *
   * @returns {number}
   * @this Table
   */
  getColumnHeadersCount() {
    return this.dataAccessObject.columnHeaders.length;
  }
};
defineGetter(calculatedRows, "MIXIN_NAME", MIXIN_NAME4, {
  writable: false,
  enumerable: false
});
var calculatedRows_default = calculatedRows;

// node_modules/handsontable/3rdparty/walkontable/src/table/inlineStart.mjs
var InlineStartOverlayTable = class extends table_default {
  /**
   * @param {TableDao} dataAccessObject The data access object.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {DomBindings} domBindings Bindings into DOM.
   * @param {Settings} wtSettings The Walkontable settings.
   */
  constructor(dataAccessObject, facadeGetter, domBindings, wtSettings) {
    super(dataAccessObject, facadeGetter, domBindings, wtSettings, CLONE_INLINE_START);
  }
};
mixin(InlineStartOverlayTable, calculatedRows_default);
mixin(InlineStartOverlayTable, stickyColumnsStart_default);
var inlineStart_default = InlineStartOverlayTable;

// node_modules/handsontable/mixins/localHooks.mjs
var MIXIN_NAME5 = "localHooks";
var localHooks = {
  /**
   * Internal hooks storage.
   */
  _localHooks: /* @__PURE__ */ Object.create(null),
  /**
   * Add hook to the collection.
   *
   * @param {string} key The hook name.
   * @param {Function} callback The hook callback.
   * @returns {object}
   */
  addLocalHook(key, callback) {
    if (!this._localHooks[key]) {
      this._localHooks[key] = [];
    }
    this._localHooks[key].push(callback);
    return this;
  },
  /**
   * Run hooks.
   *
   * @param {string} key The name of the hook to run.
   * @param {*} [arg1] An additional parameter passed to the callback function.
   * @param {*} [arg2] An additional parameter passed to the callback function.
   * @param {*} [arg3] An additional parameter passed to the callback function.
   * @param {*} [arg4] An additional parameter passed to the callback function.
   * @param {*} [arg5] An additional parameter passed to the callback function.
   * @param {*} [arg6] An additional parameter passed to the callback function.
   */
  runLocalHooks(key, arg1, arg2, arg3, arg4, arg5, arg6) {
    if (this._localHooks[key]) {
      const length = this._localHooks[key].length;
      for (let i = 0; i < length; i++) {
        fastCall(this._localHooks[key][i], this, arg1, arg2, arg3, arg4, arg5, arg6);
      }
    }
  },
  /**
   * Clear all added hooks.
   *
   * @returns {object}
   */
  clearLocalHooks() {
    this._localHooks = {};
    return this;
  }
};
defineGetter(localHooks, "MIXIN_NAME", MIXIN_NAME5, {
  writable: false,
  enumerable: false
});
var localHooks_default = localHooks;

// node_modules/handsontable/3rdparty/walkontable/src/selection/selection.mjs
var Selection = class {
  /**
   * @param {object} settings The selection settings object. @todo type.
   * @param {CellRange} cellRange The cell range instance.
   */
  constructor(settings, cellRange) {
    this.settings = settings;
    this.cellRange = cellRange || null;
  }
  /**
   * Checks if selection is empty.
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.cellRange === null;
  }
  /**
   * Adds a cell coords to the selection.
   *
   * @param {CellCoords} coords The cell coordinates to add.
   * @returns {Selection}
   */
  add(coords) {
    if (this.isEmpty()) {
      this.cellRange = this.settings.createCellRange(coords);
    } else {
      this.cellRange.expand(coords);
    }
    return this;
  }
  /**
   * If selection range from or to property equals oldCoords, replace it with newCoords. Return boolean
   * information about success.
   *
   * @param {CellCoords} oldCoords An old cell coordinates to replace.
   * @param {CellCoords} newCoords The new cell coordinates.
   * @returns {boolean}
   */
  replace(oldCoords, newCoords) {
    if (!this.isEmpty()) {
      if (this.cellRange.from.isEqual(oldCoords)) {
        this.cellRange.from = newCoords;
        return true;
      }
      if (this.cellRange.to.isEqual(oldCoords)) {
        this.cellRange.to = newCoords;
        return true;
      }
    }
    return false;
  }
  /**
   * Clears selection.
   *
   * @returns {Selection}
   */
  clear() {
    this.cellRange = null;
    return this;
  }
  /**
   * Returns the top left (or top right in RTL) and bottom right (or bottom left in RTL) selection coordinates.
   *
   * @returns {number[]} Returns array of coordinates for example `[1, 1, 5, 5]`.
   */
  getCorners() {
    const topStart = this.cellRange.getOuterTopStartCorner();
    const bottomEnd = this.cellRange.getOuterBottomEndCorner();
    return [topStart.row, topStart.col, bottomEnd.row, bottomEnd.col];
  }
  /**
   * Destroys the instance.
   */
  destroy() {
    this.runLocalHooks("destroy");
  }
};
mixin(Selection, localHooks_default);
var selection_default = Selection;

// node_modules/handsontable/3rdparty/walkontable/src/selection/constants.mjs
var ACTIVE_HEADER_TYPE = "active-header";
var HEADER_TYPE = "header";
var AREA_TYPE = "area";
var FOCUS_TYPE = "focus";
var FILL_TYPE = "fill";
var ROW_TYPE = "row";
var COLUMN_TYPE = "column";
var CUSTOM_SELECTION_TYPE = "custom-selection";

// node_modules/handsontable/3rdparty/walkontable/src/selection/border/constants.mjs
var CORNER_DEFAULT_STYLE = Object.freeze({
  width: "6px",
  height: "6px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#FFF"
});

// node_modules/core-js/modules/es.array.unscopables.flat.js
var addToUnscopables3 = require_add_to_unscopables();
addToUnscopables3("flat");

// node_modules/handsontable/3rdparty/walkontable/src/selection/scanner.mjs
function _classPrivateMethodInitSpec2(obj, privateSet) {
  _checkPrivateRedeclaration8(obj, privateSet);
  privateSet.add(obj);
}
function _classPrivateFieldInitSpec7(obj, privateMap, value) {
  _checkPrivateRedeclaration8(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration8(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldGet7(s, a) {
  return s.get(_assertClassBrand8(s, a));
}
function _classPrivateFieldSet7(s, a, r) {
  return s.set(_assertClassBrand8(s, a), r), r;
}
function _assertClassBrand8(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _selection = /* @__PURE__ */ new WeakMap();
var _activeOverlaysWot = /* @__PURE__ */ new WeakMap();
var _SelectionScanner_brand = /* @__PURE__ */ new WeakSet();
var SelectionScanner = class {
  constructor() {
    _classPrivateMethodInitSpec2(this, _SelectionScanner_brand);
    _classPrivateFieldInitSpec7(this, _selection, void 0);
    _classPrivateFieldInitSpec7(this, _activeOverlaysWot, void 0);
  }
  /**
   * Sets the Walkontable instance that will be taking into account while scanning the table.
   *
   * @param {Walkontable} activeOverlaysWot The Walkontable instance.
   * @returns {SelectionScanner}
   */
  setActiveOverlay(activeOverlaysWot) {
    _classPrivateFieldSet7(_activeOverlaysWot, this, activeOverlaysWot);
    return this;
  }
  /**
   * Sets the Selection instance to process.
   *
   * @param {Selection} selection The Selection instance.
   * @returns {SelectionScanner}
   */
  setActiveSelection(selection) {
    _classPrivateFieldSet7(_selection, this, selection);
    return this;
  }
  /**
   * Scans the rendered table with selection and returns elements that intersects
   * with selection coordinates.
   *
   * @returns {HTMLTableElement[]}
   */
  scan() {
    const selectionType = _classPrivateFieldGet7(_selection, this).settings.selectionType;
    const elements = /* @__PURE__ */ new Set();
    if (selectionType === "active-header") {
      this.scanColumnsInHeadersRange((element) => elements.add(element));
      this.scanRowsInHeadersRange((element) => elements.add(element));
    } else if (selectionType === "area") {
      this.scanCellsRange((element) => elements.add(element));
    } else if (selectionType === "focus") {
      this.scanColumnsInHeadersRange((element) => elements.add(element));
      this.scanRowsInHeadersRange((element) => elements.add(element));
      this.scanCellsRange((element) => elements.add(element));
    } else if (selectionType === "fill") {
      this.scanCellsRange((element) => elements.add(element));
    } else if (selectionType === "header") {
      this.scanColumnsInHeadersRange((element) => elements.add(element));
      this.scanRowsInHeadersRange((element) => elements.add(element));
    } else if (selectionType === "row") {
      this.scanRowsInHeadersRange((element) => elements.add(element));
      this.scanRowsInCellsRange((element) => elements.add(element));
    } else if (selectionType === "column") {
      this.scanColumnsInHeadersRange((element) => elements.add(element));
      this.scanColumnsInCellsRange((element) => elements.add(element));
    }
    return elements;
  }
  /**
   * Scans the table (only rendered headers) and collect all column headers (TH) that match
   * the coordinates passed in the Selection instance.
   *
   * @param {function(HTMLTableElement): void} callback The callback function to trigger.
   */
  scanColumnsInHeadersRange(callback) {
    const [topRow, topColumn, bottomRow, bottomColumn] = _classPrivateFieldGet7(_selection, this).getCorners();
    const {
      wtTable
    } = _classPrivateFieldGet7(_activeOverlaysWot, this);
    const renderedColumnsCount = wtTable.getRenderedColumnsCount();
    const columnHeadersCount = wtTable.getColumnHeadersCount();
    let cursor = 0;
    for (let column = -wtTable.getRowHeadersCount(); column < renderedColumnsCount; column++) {
      const sourceColumn = wtTable.columnFilter.renderedToSource(column);
      if (sourceColumn < topColumn || sourceColumn > bottomColumn) {
        continue;
      }
      for (let headerLevel = -columnHeadersCount; headerLevel < 0; headerLevel++) {
        if (headerLevel < topRow || headerLevel > bottomRow) {
          continue;
        }
        const positiveBasedHeaderLevel = headerLevel + columnHeadersCount;
        let TH = wtTable.getColumnHeader(sourceColumn, positiveBasedHeaderLevel);
        const newSourceCol = _classPrivateFieldGet7(_activeOverlaysWot, this).getSetting("onBeforeHighlightingColumnHeader", sourceColumn, positiveBasedHeaderLevel, {
          selectionType: _classPrivateFieldGet7(_selection, this).settings.selectionType,
          columnCursor: cursor,
          selectionWidth: bottomColumn - topColumn + 1
        });
        if (newSourceCol === null) {
          continue;
        }
        if (newSourceCol !== sourceColumn) {
          TH = wtTable.getColumnHeader(newSourceCol, positiveBasedHeaderLevel);
        }
        callback(TH);
      }
      cursor += 1;
    }
  }
  /**
   * Scans the table (only rendered headers) and collect all row headers (TH) that match
   * the coordinates passed in the Selection instance.
   *
   * @param {function(HTMLTableElement): void} callback The callback function to trigger.
   */
  scanRowsInHeadersRange(callback) {
    const [topRow, topColumn, bottomRow, bottomColumn] = _classPrivateFieldGet7(_selection, this).getCorners();
    const {
      wtTable
    } = _classPrivateFieldGet7(_activeOverlaysWot, this);
    const renderedRowsCount = wtTable.getRenderedRowsCount();
    const rowHeadersCount = wtTable.getRowHeadersCount();
    let cursor = 0;
    for (let row = -wtTable.getColumnHeadersCount(); row < renderedRowsCount; row++) {
      const sourceRow = wtTable.rowFilter.renderedToSource(row);
      if (sourceRow < topRow || sourceRow > bottomRow) {
        continue;
      }
      for (let headerLevel = -rowHeadersCount; headerLevel < 0; headerLevel++) {
        if (headerLevel < topColumn || headerLevel > bottomColumn) {
          continue;
        }
        const positiveBasedHeaderLevel = headerLevel + rowHeadersCount;
        let TH = wtTable.getRowHeader(sourceRow, positiveBasedHeaderLevel);
        const newSourceRow = _classPrivateFieldGet7(_activeOverlaysWot, this).getSetting("onBeforeHighlightingRowHeader", sourceRow, positiveBasedHeaderLevel, {
          selectionType: _classPrivateFieldGet7(_selection, this).settings.selectionType,
          rowCursor: cursor,
          selectionHeight: bottomRow - topRow + 1
        });
        if (newSourceRow === null) {
          continue;
        }
        if (newSourceRow !== sourceRow) {
          TH = wtTable.getRowHeader(newSourceRow, positiveBasedHeaderLevel);
        }
        callback(TH);
      }
      cursor += 1;
    }
  }
  /**
   * Scans the table (only rendered cells) and collect all cells (TR) that match
   * the coordinates passed in the Selection instance.
   *
   * @param {function(HTMLTableElement): void} callback The callback function to trigger.
   */
  scanCellsRange(callback) {
    const [topRow, topColumn, bottomRow, bottomColumn] = _classPrivateFieldGet7(_selection, this).getCorners();
    const {
      wtTable
    } = _classPrivateFieldGet7(_activeOverlaysWot, this);
    _assertClassBrand8(_SelectionScanner_brand, this, _scanCellsRange).call(this, (sourceRow, sourceColumn) => {
      if (sourceRow >= topRow && sourceRow <= bottomRow && sourceColumn >= topColumn && sourceColumn <= bottomColumn) {
        const cell = wtTable.getCell(_classPrivateFieldGet7(_activeOverlaysWot, this).createCellCoords(sourceRow, sourceColumn));
        const additionalSelectionClass = _classPrivateFieldGet7(_activeOverlaysWot, this).getSetting("onAfterDrawSelection", sourceRow, sourceColumn, _classPrivateFieldGet7(_selection, this).settings.layerLevel);
        if (typeof additionalSelectionClass === "string") {
          addClass(cell, additionalSelectionClass);
        }
        callback(cell);
      }
    });
  }
  /**
   * Scans the table (only rendered cells) and collects all cells (TR) that match the coordinates
   * passed in the Selection instance but only for the X axis (rows).
   *
   * @param {function(HTMLTableElement): void} callback The callback function to trigger.
   */
  scanRowsInCellsRange(callback) {
    const [topRow, , bottomRow] = _classPrivateFieldGet7(_selection, this).getCorners();
    const {
      wtTable
    } = _classPrivateFieldGet7(_activeOverlaysWot, this);
    _assertClassBrand8(_SelectionScanner_brand, this, _scanCellsRange).call(this, (sourceRow, sourceColumn) => {
      if (sourceRow >= topRow && sourceRow <= bottomRow) {
        const cell = wtTable.getCell(_classPrivateFieldGet7(_activeOverlaysWot, this).createCellCoords(sourceRow, sourceColumn));
        callback(cell);
      }
    });
  }
  /**
   * Scans the table (only rendered cells) and collects all cells (TR) that match the coordinates
   * passed in the Selection instance but only for the Y axis (columns).
   *
   * @param {function(HTMLTableElement): void} callback The callback function to trigger.
   */
  scanColumnsInCellsRange(callback) {
    const [, topColumn, , bottomColumn] = _classPrivateFieldGet7(_selection, this).getCorners();
    const {
      wtTable
    } = _classPrivateFieldGet7(_activeOverlaysWot, this);
    _assertClassBrand8(_SelectionScanner_brand, this, _scanCellsRange).call(this, (sourceRow, sourceColumn) => {
      if (sourceColumn >= topColumn && sourceColumn <= bottomColumn) {
        const cell = wtTable.getCell(_classPrivateFieldGet7(_activeOverlaysWot, this).createCellCoords(sourceRow, sourceColumn));
        callback(cell);
      }
    });
  }
};
function _scanCellsRange(callback) {
  const {
    wtTable
  } = _classPrivateFieldGet7(_activeOverlaysWot, this);
  const renderedRowsCount = wtTable.getRenderedRowsCount();
  const renderedColumnsCount = wtTable.getRenderedColumnsCount();
  for (let row = 0; row < renderedRowsCount; row += 1) {
    const sourceRow = wtTable.rowFilter.renderedToSource(row);
    for (let column = 0; column < renderedColumnsCount; column += 1) {
      callback(sourceRow, wtTable.columnFilter.renderedToSource(column));
    }
  }
}

// node_modules/handsontable/3rdparty/walkontable/src/selection/border/border.mjs
var Border = class {
  // TODO As this is an internal class, should be designed for using {Walkontable}. It uses the facade,
  // TODO Con. Because the class is created on place where the instance reference comes from external origin.
  // TODO Imho, the discrimination for handling both, facade and non-facade should be handled.
  /**
   * @param {WalkontableFacade} wotInstance The Walkontable instance.
   * @param {object} settings The border settings.
   */
  constructor(wotInstance, settings) {
    if (!settings) {
      return;
    }
    this.eventManager = wotInstance.eventManager;
    this.instance = wotInstance;
    this.wot = wotInstance;
    this.settings = settings;
    this.mouseDown = false;
    this.main = null;
    this.top = null;
    this.bottom = null;
    this.start = null;
    this.end = null;
    this.topStyle = null;
    this.bottomStyle = null;
    this.startStyle = null;
    this.endStyle = null;
    this.cornerDefaultStyle = CORNER_DEFAULT_STYLE;
    this.cornerCenterPointOffset = -(parseInt(this.cornerDefaultStyle.width, 10) / 2);
    this.corner = null;
    this.cornerStyle = null;
    this.createBorders(settings);
    this.registerListeners();
  }
  /**
   * Register all necessary events.
   */
  registerListeners() {
    const documentBody = this.wot.rootDocument.body;
    this.eventManager.addEventListener(documentBody, "mousedown", () => this.onMouseDown());
    this.eventManager.addEventListener(documentBody, "mouseup", () => this.onMouseUp());
    for (let c = 0, len = this.main.childNodes.length; c < len; c++) {
      const element = this.main.childNodes[c];
      this.eventManager.addEventListener(element, "mouseenter", (event) => this.onMouseEnter(event, this.main.childNodes[c]));
    }
  }
  /**
   * Mouse down listener.
   *
   * @private
   */
  onMouseDown() {
    this.mouseDown = true;
  }
  /**
   * Mouse up listener.
   *
   * @private
   */
  onMouseUp() {
    this.mouseDown = false;
  }
  /**
   * Mouse enter listener for fragment selection functionality.
   *
   * @private
   * @param {Event} event Dom event.
   * @param {HTMLElement} parentElement Part of border element.
   */
  onMouseEnter(event, parentElement) {
    if (!this.mouseDown || !this.wot.getSetting("hideBorderOnMouseDownOver")) {
      return;
    }
    event.preventDefault();
    stopImmediatePropagation(event);
    const _this = this;
    const documentBody = this.wot.rootDocument.body;
    const bounds = parentElement.getBoundingClientRect();
    parentElement.style.display = "none";
    function isOutside(mouseEvent) {
      if (mouseEvent.clientY < Math.floor(bounds.top)) {
        return true;
      }
      if (mouseEvent.clientY > Math.ceil(bounds.top + bounds.height)) {
        return true;
      }
      if (mouseEvent.clientX < Math.floor(bounds.left)) {
        return true;
      }
      if (mouseEvent.clientX > Math.ceil(bounds.left + bounds.width)) {
        return true;
      }
    }
    function handler(handlerEvent) {
      if (isOutside(handlerEvent)) {
        _this.eventManager.removeEventListener(documentBody, "mousemove", handler);
        parentElement.style.display = "block";
      }
    }
    this.eventManager.addEventListener(documentBody, "mousemove", handler);
  }
  /**
   * Create border elements.
   *
   * @param {object} settings The border settings.
   */
  createBorders(settings) {
    const {
      rootDocument
    } = this.wot;
    this.main = rootDocument.createElement("div");
    const borderDivs = ["top", "start", "bottom", "end", "corner"];
    let style = this.main.style;
    style.position = "absolute";
    style.top = 0;
    style.left = 0;
    for (let i = 0; i < 5; i++) {
      const position = borderDivs[i];
      const div = rootDocument.createElement("div");
      div.className = `wtBorder ${this.settings.className || ""}`;
      if (this.settings[position] && this.settings[position].hide) {
        div.className += " hidden";
      }
      style = div.style;
      style.backgroundColor = this.settings[position] && this.settings[position].color ? this.settings[position].color : settings.border.color;
      style.height = this.settings[position] && this.settings[position].width ? `${this.settings[position].width}px` : `${settings.border.width}px`;
      style.width = this.settings[position] && this.settings[position].width ? `${this.settings[position].width}px` : `${settings.border.width}px`;
      this.main.appendChild(div);
    }
    this.top = this.main.childNodes[0];
    this.start = this.main.childNodes[1];
    this.bottom = this.main.childNodes[2];
    this.end = this.main.childNodes[3];
    this.topStyle = this.top.style;
    this.startStyle = this.start.style;
    this.bottomStyle = this.bottom.style;
    this.endStyle = this.end.style;
    this.corner = this.main.childNodes[4];
    this.corner.className += " corner";
    this.cornerStyle = this.corner.style;
    this.cornerStyle.width = this.cornerDefaultStyle.width;
    this.cornerStyle.height = this.cornerDefaultStyle.height;
    this.cornerStyle.border = [this.cornerDefaultStyle.borderWidth, this.cornerDefaultStyle.borderStyle, this.cornerDefaultStyle.borderColor].join(" ");
    if (isMobileBrowser() && this.instance.getSetting("isDataViewInstance")) {
      this.createMultipleSelectorHandles();
    }
    this.disappear();
    const {
      wtTable
    } = this.wot;
    let bordersHolder = wtTable.bordersHolder;
    if (!bordersHolder) {
      bordersHolder = rootDocument.createElement("div");
      bordersHolder.className = "htBorders";
      wtTable.bordersHolder = bordersHolder;
      wtTable.spreader.appendChild(bordersHolder);
    }
    bordersHolder.appendChild(this.main);
  }
  /**
   * Create multiple selector handler for mobile devices.
   */
  createMultipleSelectorHandles() {
    const {
      rootDocument
    } = this.wot;
    this.selectionHandles = {
      top: rootDocument.createElement("DIV"),
      topHitArea: rootDocument.createElement("DIV"),
      bottom: rootDocument.createElement("DIV"),
      bottomHitArea: rootDocument.createElement("DIV")
    };
    const width = 10;
    const hitAreaWidth = 40;
    this.selectionHandles.top.className = "topSelectionHandle topLeftSelectionHandle";
    this.selectionHandles.topHitArea.className = "topSelectionHandle-HitArea topLeftSelectionHandle-HitArea";
    this.selectionHandles.bottom.className = "bottomSelectionHandle bottomRightSelectionHandle";
    this.selectionHandles.bottomHitArea.className = "bottomSelectionHandle-HitArea bottomRightSelectionHandle-HitArea";
    this.selectionHandles.styles = {
      top: this.selectionHandles.top.style,
      topHitArea: this.selectionHandles.topHitArea.style,
      bottom: this.selectionHandles.bottom.style,
      bottomHitArea: this.selectionHandles.bottomHitArea.style
    };
    const hitAreaStyle = {
      position: "absolute",
      height: `${hitAreaWidth}px`,
      width: `${hitAreaWidth}px`,
      "border-radius": `${parseInt(hitAreaWidth / 1.5, 10)}px`
    };
    objectEach(hitAreaStyle, (value, key) => {
      this.selectionHandles.styles.bottomHitArea[key] = value;
      this.selectionHandles.styles.topHitArea[key] = value;
    });
    const handleStyle = {
      position: "absolute",
      height: `${width}px`,
      width: `${width}px`,
      "border-radius": `${parseInt(width / 1.5, 10)}px`,
      background: "#F5F5FF",
      border: "1px solid #4285c8"
    };
    objectEach(handleStyle, (value, key) => {
      this.selectionHandles.styles.bottom[key] = value;
      this.selectionHandles.styles.top[key] = value;
    });
    this.main.appendChild(this.selectionHandles.top);
    this.main.appendChild(this.selectionHandles.bottom);
    this.main.appendChild(this.selectionHandles.topHitArea);
    this.main.appendChild(this.selectionHandles.bottomHitArea);
  }
  /**
   * @param {number} row The visual row index.
   * @param {number} col The visual column index.
   * @returns {boolean}
   */
  isPartRange(row, col) {
    const areaSelection = this.wot.selectionManager.getAreaSelection();
    if (areaSelection.cellRange) {
      if (row !== areaSelection.cellRange.to.row || col !== areaSelection.cellRange.to.col) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param {number} row The visual row index.
   * @param {number} col The visual column index.
   * @param {number} top The top position of the handler.
   * @param {number} left The left position of the handler.
   * @param {number} width The width of the handler.
   * @param {number} height The height of the handler.
   */
  updateMultipleSelectionHandlesPosition(row, col, top, left, width, height) {
    const isRtl = this.wot.wtSettings.getSetting("rtlMode");
    const inlinePosProperty = isRtl ? "right" : "left";
    const {
      top: topStyles,
      topHitArea: topHitAreaStyles,
      bottom: bottomStyles,
      bottomHitArea: bottomHitAreaStyles
    } = this.selectionHandles.styles;
    const handleBorderSize = parseInt(topStyles.borderWidth, 10);
    const handleSize = parseInt(topStyles.width, 10);
    const hitAreaSize = parseInt(topHitAreaStyles.width, 10);
    const totalTableWidth = this.wot.wtTable.getWidth();
    const totalTableHeight = this.wot.wtTable.getHeight();
    topStyles.top = `${parseInt(top - handleSize - 1, 10)}px`;
    topStyles[inlinePosProperty] = `${parseInt(left - handleSize - 1, 10)}px`;
    topHitAreaStyles.top = `${parseInt(top - hitAreaSize / 4 * 3, 10)}px`;
    topHitAreaStyles[inlinePosProperty] = `${parseInt(left - hitAreaSize / 4 * 3, 10)}px`;
    const bottomHandlerInline = Math.min(parseInt(left + width, 10), totalTableWidth - handleSize - handleBorderSize * 2);
    const bottomHandlerAreaInline = Math.min(parseInt(left + width - hitAreaSize / 4, 10), totalTableWidth - hitAreaSize - handleBorderSize * 2);
    bottomStyles[inlinePosProperty] = `${bottomHandlerInline}px`;
    bottomHitAreaStyles[inlinePosProperty] = `${bottomHandlerAreaInline}px`;
    const bottomHandlerTop = Math.min(parseInt(top + height, 10), totalTableHeight - handleSize - handleBorderSize * 2);
    const bottomHandlerAreaTop = Math.min(parseInt(top + height - hitAreaSize / 4, 10), totalTableHeight - hitAreaSize - handleBorderSize * 2);
    bottomStyles.top = `${bottomHandlerTop}px`;
    bottomHitAreaStyles.top = `${bottomHandlerAreaTop}px`;
    if (this.settings.border.cornerVisible && this.settings.border.cornerVisible()) {
      topStyles.display = "block";
      topHitAreaStyles.display = "block";
      if (this.isPartRange(row, col)) {
        bottomStyles.display = "none";
        bottomHitAreaStyles.display = "none";
      } else {
        bottomStyles.display = "block";
        bottomHitAreaStyles.display = "block";
      }
    } else {
      topStyles.display = "none";
      bottomStyles.display = "none";
      topHitAreaStyles.display = "none";
      bottomHitAreaStyles.display = "none";
    }
    if (row === this.wot.wtSettings.getSetting("fixedRowsTop") || col === this.wot.wtSettings.getSetting("fixedColumnsStart")) {
      topStyles.zIndex = "9999";
      topHitAreaStyles.zIndex = "9999";
    } else {
      topStyles.zIndex = "";
      topHitAreaStyles.zIndex = "";
    }
  }
  /**
   * Show border around one or many cells.
   *
   * @param {Array} corners The corner coordinates.
   */
  appear(corners) {
    if (this.disabled) {
      return;
    }
    const {
      wtTable,
      rootDocument,
      rootWindow
    } = this.wot;
    let fromRow;
    let toRow;
    let fromColumn;
    let toColumn;
    let rowHeader;
    let columnHeader;
    const rowsCount = wtTable.getRenderedRowsCount();
    for (let i = 0; i < rowsCount; i += 1) {
      const s = wtTable.rowFilter.renderedToSource(i);
      if (s >= corners[0] && s <= corners[2]) {
        fromRow = s;
        rowHeader = corners[0];
        break;
      }
    }
    for (let i = rowsCount - 1; i >= 0; i -= 1) {
      const s = wtTable.rowFilter.renderedToSource(i);
      if (s >= corners[0] && s <= corners[2]) {
        toRow = s;
        break;
      }
    }
    const columnsCount = wtTable.getRenderedColumnsCount();
    for (let i = 0; i < columnsCount; i += 1) {
      const s = wtTable.columnFilter.renderedToSource(i);
      if (s >= corners[1] && s <= corners[3]) {
        fromColumn = s;
        columnHeader = corners[1];
        break;
      }
    }
    for (let i = columnsCount - 1; i >= 0; i -= 1) {
      const s = wtTable.columnFilter.renderedToSource(i);
      if (s >= corners[1] && s <= corners[3]) {
        toColumn = s;
        break;
      }
    }
    if (fromRow === void 0 || fromColumn === void 0) {
      this.disappear();
      return;
    }
    let fromTD = wtTable.getCell(this.wot.createCellCoords(fromRow, fromColumn));
    const isMultiple = fromRow !== toRow || fromColumn !== toColumn;
    const toTD = isMultiple ? wtTable.getCell(this.wot.createCellCoords(toRow, toColumn)) : fromTD;
    const fromOffset = offset(fromTD);
    const toOffset = isMultiple ? offset(toTD) : fromOffset;
    const containerOffset = offset(wtTable.TABLE);
    const containerWidth = outerWidth(wtTable.TABLE);
    const minTop = fromOffset.top;
    const minLeft = fromOffset.left;
    const isRtl = this.wot.wtSettings.getSetting("rtlMode");
    let inlineStartPos = 0;
    let width = 0;
    if (isRtl) {
      const fromWidth = outerWidth(fromTD);
      const gridRightPos = rootWindow.innerWidth - containerOffset.left - containerWidth;
      width = minLeft + fromWidth - toOffset.left;
      inlineStartPos = rootWindow.innerWidth - minLeft - fromWidth - gridRightPos - 1;
    } else {
      width = toOffset.left + outerWidth(toTD) - minLeft;
      inlineStartPos = minLeft - containerOffset.left - 1;
    }
    if (this.isEntireColumnSelected(fromRow, toRow)) {
      const modifiedValues = this.getDimensionsFromHeader("columns", fromColumn, toColumn, rowHeader, containerOffset);
      let fromTH = null;
      if (modifiedValues) {
        [fromTH, inlineStartPos, width] = modifiedValues;
      }
      if (fromTH) {
        fromTD = fromTH;
      }
    }
    let top = minTop - containerOffset.top - 1;
    let height = toOffset.top + outerHeight(toTD) - minTop;
    if (this.isEntireRowSelected(fromColumn, toColumn)) {
      const modifiedValues = this.getDimensionsFromHeader("rows", fromRow, toRow, columnHeader, containerOffset);
      let fromTH = null;
      if (modifiedValues) {
        [fromTH, top, height] = modifiedValues;
      }
      if (fromTH) {
        fromTD = fromTH;
      }
    }
    const style = getComputedStyle(fromTD, rootWindow);
    if (parseInt(style.borderTopWidth, 10) > 0) {
      top += 1;
      height = height > 0 ? height - 1 : 0;
    }
    if (parseInt(style[isRtl ? "borderRightWidth" : "borderLeftWidth"], 10) > 0) {
      inlineStartPos += 1;
      width = width > 0 ? width - 1 : 0;
    }
    const inlinePosProperty = isRtl ? "right" : "left";
    this.topStyle.top = `${top}px`;
    this.topStyle[inlinePosProperty] = `${inlineStartPos}px`;
    this.topStyle.width = `${width}px`;
    this.topStyle.display = "block";
    this.startStyle.top = `${top}px`;
    this.startStyle[inlinePosProperty] = `${inlineStartPos}px`;
    this.startStyle.height = `${height}px`;
    this.startStyle.display = "block";
    const delta = Math.floor(this.settings.border.width / 2);
    this.bottomStyle.top = `${top + height - delta}px`;
    this.bottomStyle[inlinePosProperty] = `${inlineStartPos}px`;
    this.bottomStyle.width = `${width}px`;
    this.bottomStyle.display = "block";
    this.endStyle.top = `${top}px`;
    this.endStyle[inlinePosProperty] = `${inlineStartPos + width - delta}px`;
    this.endStyle.height = `${height + 1}px`;
    this.endStyle.display = "block";
    let cornerVisibleSetting = this.settings.border.cornerVisible;
    cornerVisibleSetting = typeof cornerVisibleSetting === "function" ? cornerVisibleSetting(this.settings.layerLevel) : cornerVisibleSetting;
    const hookResult = this.wot.getSetting("onModifyGetCellCoords", toRow, toColumn);
    let [checkRow, checkCol] = [toRow, toColumn];
    if (hookResult && Array.isArray(hookResult)) {
      [, , checkRow, checkCol] = hookResult;
    }
    if (isMobileBrowser() || !cornerVisibleSetting || this.isPartRange(checkRow, checkCol)) {
      this.cornerStyle.display = "none";
    } else {
      this.cornerStyle.top = `${top + height + this.cornerCenterPointOffset - 1}px`;
      this.cornerStyle[inlinePosProperty] = `${inlineStartPos + width + this.cornerCenterPointOffset - 1}px`;
      this.cornerStyle.borderRightWidth = this.cornerDefaultStyle.borderWidth;
      this.cornerStyle.width = this.cornerDefaultStyle.width;
      this.cornerStyle.display = "none";
      let trimmingContainer = getTrimmingContainer(wtTable.TABLE);
      const trimToWindow = trimmingContainer === rootWindow;
      if (trimToWindow) {
        trimmingContainer = rootDocument.documentElement;
      }
      const cornerHalfWidth = parseInt(this.cornerDefaultStyle.width, 10) / 2;
      const cornerHalfHeight = parseInt(this.cornerDefaultStyle.height, 10) / 2;
      if (toColumn === this.wot.getSetting("totalColumns") - 1) {
        const toTdOffsetLeft = trimToWindow ? toTD.getBoundingClientRect().left : toTD.offsetLeft;
        let cornerOverlappingContainer = false;
        let cornerEdge = 0;
        if (isRtl) {
          cornerEdge = toTdOffsetLeft - parseInt(this.cornerDefaultStyle.width, 10) / 2;
          cornerOverlappingContainer = cornerEdge < 0;
        } else {
          cornerEdge = toTdOffsetLeft + outerWidth(toTD) + parseInt(this.cornerDefaultStyle.width, 10) / 2;
          cornerOverlappingContainer = cornerEdge >= innerWidth(trimmingContainer);
        }
        if (cornerOverlappingContainer) {
          this.cornerStyle[inlinePosProperty] = `${Math.floor(inlineStartPos + width + this.cornerCenterPointOffset - cornerHalfWidth)}px`;
          this.cornerStyle[isRtl ? "borderLeftWidth" : "borderRightWidth"] = 0;
        }
      }
      if (toRow === this.wot.getSetting("totalRows") - 1) {
        const toTdOffsetTop = trimToWindow ? toTD.getBoundingClientRect().top : toTD.offsetTop;
        const cornerBottomEdge = toTdOffsetTop + outerHeight(toTD) + parseInt(this.cornerDefaultStyle.height, 10) / 2;
        const cornerOverlappingContainer = cornerBottomEdge >= innerHeight(trimmingContainer);
        if (cornerOverlappingContainer) {
          this.cornerStyle.top = `${Math.floor(top + height + this.cornerCenterPointOffset - cornerHalfHeight)}px`;
          this.cornerStyle.borderBottomWidth = 0;
        }
      }
      this.cornerStyle.display = "block";
    }
    if (isMobileBrowser() && this.instance.getSetting("isDataViewInstance")) {
      this.updateMultipleSelectionHandlesPosition(toRow, toColumn, top, inlineStartPos, width, height);
    }
  }
  /**
   * Check whether an entire column of cells is selected.
   *
   * @private
   * @param {number} startRowIndex Start row index.
   * @param {number} endRowIndex End row index.
   * @returns {boolean}
   */
  isEntireColumnSelected(startRowIndex, endRowIndex) {
    return startRowIndex === this.wot.wtTable.getFirstRenderedRow() && endRowIndex === this.wot.wtTable.getLastRenderedRow();
  }
  /**
   * Check whether an entire row of cells is selected.
   *
   * @private
   * @param {number} startColumnIndex Start column index.
   * @param {number} endColumnIndex End column index.
   * @returns {boolean}
   */
  isEntireRowSelected(startColumnIndex, endColumnIndex) {
    return startColumnIndex === this.wot.wtTable.getFirstRenderedColumn() && endColumnIndex === this.wot.wtTable.getLastRenderedColumn();
  }
  /**
   * Get left/top index and width/height depending on the `direction` provided.
   *
   * @private
   * @param {string} direction `rows` or `columns`, defines if an entire column or row is selected.
   * @param {number} fromIndex Start index of the selection.
   * @param {number} toIndex End index of the selection.
   * @param {number} headerIndex The header index as negative value.
   * @param {number} containerOffset Offset of the container.
   * @returns {Array|boolean} Returns an array of [headerElement, left, width] or [headerElement, top, height], depending on `direction` (`false` in case of an error getting the headers).
   */
  getDimensionsFromHeader(direction, fromIndex, toIndex, headerIndex, containerOffset) {
    const {
      wtTable
    } = this.wot;
    const rootHotElement = wtTable.wtRootElement.parentNode;
    let getHeaderFn = null;
    let dimensionFn = null;
    let entireSelectionClassname = null;
    let index2 = null;
    let dimension = null;
    let dimensionProperty = null;
    let startHeader = null;
    let endHeader = null;
    switch (direction) {
      case "rows":
        getHeaderFn = function() {
          return wtTable.getRowHeader(...arguments);
        };
        dimensionFn = function() {
          return outerHeight(...arguments);
        };
        entireSelectionClassname = "ht__selection--rows";
        dimensionProperty = "top";
        break;
      case "columns":
        getHeaderFn = function() {
          return wtTable.getColumnHeader(...arguments);
        };
        dimensionFn = function() {
          return outerWidth(...arguments);
        };
        entireSelectionClassname = "ht__selection--columns";
        dimensionProperty = "left";
        break;
      default:
    }
    if (rootHotElement.classList.contains(entireSelectionClassname)) {
      const columnHeaderLevelCount = this.wot.getSetting("columnHeaders").length;
      startHeader = getHeaderFn(fromIndex, columnHeaderLevelCount - headerIndex);
      endHeader = getHeaderFn(toIndex, columnHeaderLevelCount - headerIndex);
      if (!startHeader || !endHeader) {
        return false;
      }
      const startHeaderOffset = offset(startHeader);
      const endOffset = offset(endHeader);
      if (startHeader && endHeader) {
        index2 = startHeaderOffset[dimensionProperty] - containerOffset[dimensionProperty] - 1;
        dimension = endOffset[dimensionProperty] + dimensionFn(endHeader) - startHeaderOffset[dimensionProperty];
      }
      return [startHeader, index2, dimension];
    }
    return false;
  }
  /**
   * Change border style.
   *
   * @private
   * @param {string} borderElement Coordinate where add/remove border: top, bottom, start, end.
   * @param {object} border The border object descriptor.
   */
  changeBorderStyle(borderElement, border) {
    const style = this[borderElement].style;
    const borderStyle = border[borderElement];
    if (!borderStyle || borderStyle.hide) {
      addClass(this[borderElement], "hidden");
    } else {
      if (hasClass(this[borderElement], "hidden")) {
        removeClass(this[borderElement], "hidden");
      }
      style.backgroundColor = borderStyle.color;
      if (borderElement === "top" || borderElement === "bottom") {
        style.height = `${borderStyle.width}px`;
      }
      if (borderElement === "start" || borderElement === "end") {
        style.width = `${borderStyle.width}px`;
      }
    }
  }
  /**
   * Change border style to default.
   *
   * @private
   * @param {string} position The position type ("top", "bottom", "start", "end") to change.
   */
  changeBorderToDefaultStyle(position) {
    const defaultBorder = {
      width: 1,
      color: "#000"
    };
    const style = this[position].style;
    style.backgroundColor = defaultBorder.color;
    style.width = `${defaultBorder.width}px`;
    style.height = `${defaultBorder.width}px`;
  }
  /**
   * Toggle class 'hidden' to element.
   *
   * @private
   * @param {string} borderElement Coordinate where add/remove border: top, bottom, start, end.
   * @param {boolean} [remove] Defines type of the action to perform.
   */
  toggleHiddenClass(borderElement, remove) {
    this.changeBorderToDefaultStyle(borderElement);
    if (remove) {
      addClass(this[borderElement], "hidden");
    } else {
      removeClass(this[borderElement], "hidden");
    }
  }
  /**
   * Hide border.
   */
  disappear() {
    this.topStyle.display = "none";
    this.bottomStyle.display = "none";
    this.startStyle.display = "none";
    this.endStyle.display = "none";
    this.cornerStyle.display = "none";
    if (isMobileBrowser() && this.instance.getSetting("isDataViewInstance")) {
      this.selectionHandles.styles.top.display = "none";
      this.selectionHandles.styles.topHitArea.display = "none";
      this.selectionHandles.styles.bottom.display = "none";
      this.selectionHandles.styles.bottomHitArea.display = "none";
    }
  }
  /**
   * Cleans up all the DOM state related to a Border instance. Call this prior to deleting a Border instance.
   */
  destroy() {
    this.eventManager.destroyWithOwnEventsOnly();
    this.main.parentNode.removeChild(this.main);
  }
};
var border_default = Border;

// node_modules/handsontable/3rdparty/walkontable/src/selection/manager.mjs
function _classPrivateMethodInitSpec3(obj, privateSet) {
  _checkPrivateRedeclaration9(obj, privateSet);
  privateSet.add(obj);
}
function _classPrivateFieldInitSpec8(obj, privateMap, value) {
  _checkPrivateRedeclaration9(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration9(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldGet8(s, a) {
  return s.get(_assertClassBrand9(s, a));
}
function _classPrivateFieldSet8(s, a, r) {
  return s.set(_assertClassBrand9(s, a), r), r;
}
function _assertClassBrand9(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _activeOverlaysWot2 = /* @__PURE__ */ new WeakMap();
var _selections = /* @__PURE__ */ new WeakMap();
var _scanner = /* @__PURE__ */ new WeakMap();
var _appliedClasses = /* @__PURE__ */ new WeakMap();
var _destroyListeners = /* @__PURE__ */ new WeakMap();
var _selectionBorders = /* @__PURE__ */ new WeakMap();
var _SelectionManager_brand = /* @__PURE__ */ new WeakSet();
var SelectionManager = class {
  constructor(selections) {
    _classPrivateMethodInitSpec3(this, _SelectionManager_brand);
    _classPrivateFieldInitSpec8(this, _activeOverlaysWot2, void 0);
    _classPrivateFieldInitSpec8(this, _selections, void 0);
    _classPrivateFieldInitSpec8(this, _scanner, new SelectionScanner());
    _classPrivateFieldInitSpec8(this, _appliedClasses, /* @__PURE__ */ new WeakMap());
    _classPrivateFieldInitSpec8(this, _destroyListeners, /* @__PURE__ */ new WeakSet());
    _classPrivateFieldInitSpec8(this, _selectionBorders, /* @__PURE__ */ new Map());
    _classPrivateFieldSet8(_selections, this, selections);
  }
  /**
   * Sets the active Walkontable instance.
   *
   * @param {Walkontable} activeWot The overlays or master Walkontable instance.
   * @returns {SelectionManager}
   */
  setActiveOverlay(activeWot) {
    _classPrivateFieldSet8(_activeOverlaysWot2, this, activeWot);
    _classPrivateFieldGet8(_scanner, this).setActiveOverlay(_classPrivateFieldGet8(_activeOverlaysWot2, this));
    if (!_classPrivateFieldGet8(_appliedClasses, this).has(_classPrivateFieldGet8(_activeOverlaysWot2, this))) {
      _classPrivateFieldGet8(_appliedClasses, this).set(_classPrivateFieldGet8(_activeOverlaysWot2, this), /* @__PURE__ */ new Set());
    }
    return this;
  }
  /**
   * Gets the Selection instance of the "focus" type.
   *
   * @returns {Selection|null}
   */
  getFocusSelection() {
    return _classPrivateFieldGet8(_selections, this) !== null ? _classPrivateFieldGet8(_selections, this).getFocus() : null;
  }
  /**
   * Gets the Selection instance of the "area" type.
   *
   * @returns {Selection|null}
   */
  getAreaSelection() {
    return _classPrivateFieldGet8(_selections, this) !== null ? _classPrivateFieldGet8(_selections, this).createLayeredArea() : null;
  }
  /**
   * Gets the Border instance associated with Selection instance.
   *
   * @param {Selection} selection The selection instance.
   * @returns {Border|null} Returns the Border instance (new for each overlay Walkontable instance).
   */
  getBorderInstance(selection) {
    if (!selection.settings.border) {
      return null;
    }
    if (_classPrivateFieldGet8(_selectionBorders, this).has(selection)) {
      const borders = _classPrivateFieldGet8(_selectionBorders, this).get(selection);
      if (borders.has(_classPrivateFieldGet8(_activeOverlaysWot2, this))) {
        return borders.get(_classPrivateFieldGet8(_activeOverlaysWot2, this));
      }
      const border2 = new border_default(_classPrivateFieldGet8(_activeOverlaysWot2, this), selection.settings);
      borders.set(_classPrivateFieldGet8(_activeOverlaysWot2, this), border2);
      return border2;
    }
    const border = new border_default(_classPrivateFieldGet8(_activeOverlaysWot2, this), selection.settings);
    _classPrivateFieldGet8(_selectionBorders, this).set(selection, /* @__PURE__ */ new Map([[_classPrivateFieldGet8(_activeOverlaysWot2, this), border]]));
    return border;
  }
  /**
   * Gets all Border instances associated with Selection instance for all overlays.
   *
   * @param {Selection} selection The selection instance.
   * @returns {Border[]}
   */
  getBorderInstances(selection) {
    var _classPrivateFieldGet22, _classPrivateFieldGet32;
    return Array.from((_classPrivateFieldGet22 = (_classPrivateFieldGet32 = _classPrivateFieldGet8(_selectionBorders, this).get(selection)) === null || _classPrivateFieldGet32 === void 0 ? void 0 : _classPrivateFieldGet32.values()) !== null && _classPrivateFieldGet22 !== void 0 ? _classPrivateFieldGet22 : []);
  }
  /**
   * Destroys the Border instance associated with Selection instance.
   *
   * @param {Selection} selection The selection instance.
   */
  destroyBorders(selection) {
    _classPrivateFieldGet8(_selectionBorders, this).get(selection).forEach((border) => border.destroy());
    _classPrivateFieldGet8(_selectionBorders, this).delete(selection);
  }
  /**
   * Renders all the selections (add CSS classes to cells and draw borders).
   *
   * @param {boolean} fastDraw Indicates the render cycle type (fast/slow).
   */
  render(fastDraw) {
    if (_classPrivateFieldGet8(_selections, this) === null) {
      return;
    }
    if (fastDraw) {
      _assertClassBrand9(_SelectionManager_brand, this, _resetCells).call(this);
    }
    const selections = Array.from(_classPrivateFieldGet8(_selections, this));
    const classNamesMap = /* @__PURE__ */ new Map();
    const headerAttributesMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < selections.length; i++) {
      const selection = selections[i];
      const {
        className,
        headerAttributes,
        createLayers,
        selectionType
      } = selection.settings;
      if (!_classPrivateFieldGet8(_destroyListeners, this).has(selection)) {
        _classPrivateFieldGet8(_destroyListeners, this).add(selection);
        selection.addLocalHook("destroy", () => this.destroyBorders(selection));
      }
      const borderInstance = this.getBorderInstance(selection);
      if (selection.isEmpty()) {
        borderInstance === null || borderInstance === void 0 || borderInstance.disappear();
        continue;
      }
      if (className) {
        const elements = _classPrivateFieldGet8(_scanner, this).setActiveSelection(selection).scan();
        elements.forEach((element) => {
          if (classNamesMap.has(element)) {
            const classNamesLayers = classNamesMap.get(element);
            if (classNamesLayers.has(className) && createLayers === true) {
              classNamesLayers.set(className, classNamesLayers.get(className) + 1);
            } else {
              classNamesLayers.set(className, 1);
            }
          } else {
            classNamesMap.set(element, /* @__PURE__ */ new Map([[className, 1]]));
          }
          if (headerAttributes) {
            if (!headerAttributesMap.has(element)) {
              headerAttributesMap.set(element, []);
            }
            if (element.nodeName === "TH") {
              headerAttributesMap.get(element).push(...headerAttributes);
            }
          }
        });
      }
      const corners = selection.getCorners();
      _classPrivateFieldGet8(_activeOverlaysWot2, this).getSetting("onBeforeDrawBorders", corners, selectionType);
      borderInstance === null || borderInstance === void 0 || borderInstance.appear(corners);
    }
    classNamesMap.forEach((classNamesLayers, element) => {
      var _classPrivateFieldGet42;
      const classNames = Array.from(classNamesLayers).map((_ref) => {
        let [className, occurrenceCount] = _ref;
        if (occurrenceCount === 1) {
          return className;
        }
        return [className, ...Array.from({
          length: occurrenceCount - 1
        }, (_, i) => `${className}-${i + 1}`)];
      }).flat();
      classNames.forEach((className) => _classPrivateFieldGet8(_appliedClasses, this).get(_classPrivateFieldGet8(_activeOverlaysWot2, this)).add(className));
      addClass(element, classNames);
      if (element.nodeName === "TD" && Array.isArray((_classPrivateFieldGet42 = _classPrivateFieldGet8(_selections, this).options) === null || _classPrivateFieldGet42 === void 0 ? void 0 : _classPrivateFieldGet42.cellAttributes)) {
        setAttribute(element, _classPrivateFieldGet8(_selections, this).options.cellAttributes);
      }
    });
    Array.from(headerAttributesMap.keys()).forEach((element) => {
      setAttribute(element, [...headerAttributesMap.get(element)]);
    });
  }
};
function _resetCells() {
  const appliedOverlaysClasses = _classPrivateFieldGet8(_appliedClasses, this).get(_classPrivateFieldGet8(_activeOverlaysWot2, this));
  const classesToRemove = _classPrivateFieldGet8(_activeOverlaysWot2, this).wtSettings.getSetting("onBeforeRemoveCellClassNames");
  if (Array.isArray(classesToRemove)) {
    for (let i = 0; i < classesToRemove.length; i++) {
      appliedOverlaysClasses.add(classesToRemove[i]);
    }
  }
  appliedOverlaysClasses.forEach((className) => {
    var _classPrivateFieldGet52, _classPrivateFieldGet62;
    const nodes = _classPrivateFieldGet8(_activeOverlaysWot2, this).wtTable.TABLE.querySelectorAll(`.${className}`);
    let cellAttributes = [];
    if (Array.isArray((_classPrivateFieldGet52 = _classPrivateFieldGet8(_selections, this).options) === null || _classPrivateFieldGet52 === void 0 ? void 0 : _classPrivateFieldGet52.cellAttributes)) {
      cellAttributes = _classPrivateFieldGet8(_selections, this).options.cellAttributes.map((el) => el[0]);
    }
    if (Array.isArray((_classPrivateFieldGet62 = _classPrivateFieldGet8(_selections, this).options) === null || _classPrivateFieldGet62 === void 0 ? void 0 : _classPrivateFieldGet62.headerAttributes)) {
      cellAttributes = [...cellAttributes, ..._classPrivateFieldGet8(_selections, this).options.headerAttributes.map((el) => el[0])];
    }
    for (let i = 0, len = nodes.length; i < len; i++) {
      removeClass(nodes[i], className);
      removeAttribute(nodes[i], cellAttributes);
    }
  });
  appliedOverlaysClasses.clear();
}

// node_modules/handsontable/3rdparty/walkontable/src/overlay/inlineStart.mjs
var InlineStartOverlay = class extends Overlay {
  /**
   * @param {Walkontable} wotInstance The Walkontable instance. @TODO refactoring: check if can be deleted.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {Settings} wtSettings The Walkontable settings.
   * @param {DomBindings} domBindings Dom elements bound to the current instance.
   */
  constructor(wotInstance, facadeGetter, wtSettings, domBindings) {
    super(wotInstance, facadeGetter, CLONE_INLINE_START, wtSettings, domBindings);
  }
  /**
   * Factory method to create a subclass of `Table` that is relevant to this overlay.
   *
   * @see Table#constructor
   * @param {...*} args Parameters that will be forwarded to the `Table` constructor.
   * @returns {InlineStartOverlayTable}
   */
  createTable() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return new inlineStart_default(...args);
  }
  /**
   * Checks if overlay should be fully rendered.
   *
   * @returns {boolean}
   */
  shouldBeRendered() {
    return this.wtSettings.getSetting("shouldRenderInlineStartOverlay");
  }
  /**
   * Updates the left overlay position.
   *
   * @returns {boolean}
   */
  resetFixedPosition() {
    const {
      wtTable
    } = this.wot;
    if (!this.needFullRender || !this.shouldBeRendered() || !wtTable.holder.parentNode) {
      return false;
    }
    const {
      rootWindow
    } = this.domBindings;
    const overlayRoot = this.clone.wtTable.holder.parentNode;
    const preventOverflow = this.wtSettings.getSetting("preventOverflow");
    let overlayPosition = 0;
    if (this.trimmingContainer === rootWindow && (!preventOverflow || preventOverflow !== "horizontal")) {
      overlayPosition = this.getOverlayOffset() * (this.isRtl() ? -1 : 1);
      setOverlayPosition(overlayRoot, `${overlayPosition}px`, "0px");
    } else {
      overlayPosition = this.getScrollPosition();
      resetCssTransform(overlayRoot);
    }
    const positionChanged = this.adjustHeaderBordersPosition(overlayPosition);
    this.adjustElementsSize();
    return positionChanged;
  }
  /**
   * Sets the main overlay's horizontal scroll position.
   *
   * @param {number} pos The scroll position.
   * @returns {boolean}
   */
  setScrollPosition(pos) {
    const {
      rootWindow
    } = this.domBindings;
    let result = false;
    if (this.isRtl()) {
      pos = -pos;
    }
    if (this.mainTableScrollableElement === rootWindow && rootWindow.scrollX !== pos) {
      rootWindow.scrollTo(pos, getWindowScrollTop(rootWindow));
      result = true;
    } else if (this.mainTableScrollableElement.scrollLeft !== pos) {
      this.mainTableScrollableElement.scrollLeft = pos;
      result = true;
    }
    return result;
  }
  /**
   * Triggers onScroll hook callback.
   */
  onScroll() {
    this.wtSettings.getSetting("onScrollVertically");
  }
  /**
   * Calculates total sum cells width.
   *
   * @param {number} from Column index which calculates started from.
   * @param {number} to Column index where calculation is finished.
   * @returns {number} Width sum.
   */
  sumCellSizes(from, to) {
    const defaultColumnWidth = this.wtSettings.getSetting("defaultColumnWidth");
    let column = from;
    let sum = 0;
    while (column < to) {
      sum += this.wot.wtTable.getStretchedColumnWidth(column) || defaultColumnWidth;
      column += 1;
    }
    return sum;
  }
  /**
   * Adjust overlay root element, children and master table element sizes (width, height).
   */
  adjustElementsSize() {
    this.updateTrimmingContainer();
    if (this.needFullRender) {
      this.adjustRootElementSize();
      this.adjustRootChildrenSize();
    }
  }
  /**
   * Adjust overlay root element size (width and height).
   */
  adjustRootElementSize() {
    const {
      wtTable
    } = this.wot;
    const {
      rootDocument,
      rootWindow
    } = this.domBindings;
    const scrollbarHeight = getScrollbarWidth(rootDocument);
    const overlayRoot = this.clone.wtTable.holder.parentNode;
    const overlayRootStyle = overlayRoot.style;
    const preventOverflow = this.wtSettings.getSetting("preventOverflow");
    if (this.trimmingContainer !== rootWindow || preventOverflow === "vertical") {
      let height = this.wot.wtViewport.getWorkspaceHeight();
      if (this.wot.wtOverlays.hasScrollbarBottom) {
        height -= scrollbarHeight;
      }
      height = Math.min(height, wtTable.wtRootElement.scrollHeight);
      overlayRootStyle.height = `${height}px`;
    } else {
      overlayRootStyle.height = "";
    }
    this.clone.wtTable.holder.style.height = overlayRootStyle.height;
    const tableWidth = outerWidth(this.clone.wtTable.TABLE);
    overlayRootStyle.width = `${tableWidth}px`;
  }
  /**
   * Adjust overlay root childs size.
   */
  adjustRootChildrenSize() {
    const {
      holder
    } = this.clone.wtTable;
    const selectionCornerOffset = this.wot.selectionManager.getFocusSelection() ? parseInt(CORNER_DEFAULT_STYLE.width, 10) / 2 : 0;
    this.clone.wtTable.hider.style.height = this.hider.style.height;
    holder.style.height = holder.parentNode.style.height;
    holder.style.width = `${parseInt(holder.parentNode.style.width, 10) + selectionCornerOffset}px`;
  }
  /**
   * Adjust the overlay dimensions and position.
   */
  applyToDOM() {
    const total = this.wtSettings.getSetting("totalColumns");
    const styleProperty = this.isRtl() ? "right" : "left";
    if (typeof this.wot.wtViewport.columnsRenderCalculator.startPosition === "number") {
      this.spreader.style[styleProperty] = `${this.wot.wtViewport.columnsRenderCalculator.startPosition}px`;
    } else if (total === 0) {
      this.spreader.style[styleProperty] = "0";
    } else {
      throw new Error("Incorrect value of the columnsRenderCalculator");
    }
    if (this.isRtl()) {
      this.spreader.style.left = "";
    } else {
      this.spreader.style.right = "";
    }
    if (this.needFullRender) {
      this.syncOverlayOffset();
    }
  }
  /**
   * Synchronize calculated top position to an element.
   */
  syncOverlayOffset() {
    if (typeof this.wot.wtViewport.rowsRenderCalculator.startPosition === "number") {
      this.clone.wtTable.spreader.style.top = `${this.wot.wtViewport.rowsRenderCalculator.startPosition}px`;
    } else {
      this.clone.wtTable.spreader.style.top = "";
    }
  }
  /**
   * Scrolls horizontally to a column at the left edge of the viewport.
   *
   * @param {number} sourceCol  Column index which you want to scroll to.
   * @param {boolean} [beyondRendered]  If `true`, scrolls according to the right
   *                                    edge (left edge is by default).
   * @returns {boolean}
   */
  scrollTo(sourceCol, beyondRendered) {
    const {
      wtSettings
    } = this;
    const rowHeaders = wtSettings.getSetting("rowHeaders");
    const fixedColumnsStart = wtSettings.getSetting("fixedColumnsStart");
    const sourceInstance = this.wot.cloneSource ? this.wot.cloneSource : this.wot;
    const mainHolder = sourceInstance.wtTable.holder;
    const rowHeaderBorderCompensation = fixedColumnsStart === 0 && rowHeaders.length > 0 && !hasClass(mainHolder.parentNode, "innerBorderInlineStart") ? 1 : 0;
    let newX = this.getTableParentOffset();
    let scrollbarCompensation = 0;
    if (beyondRendered) {
      const columnWidth = this.wot.wtTable.getColumnWidth(sourceCol);
      const viewportWidth = this.wot.wtViewport.getViewportWidth();
      if (columnWidth > viewportWidth) {
        beyondRendered = false;
      }
    }
    if (beyondRendered && mainHolder.offsetWidth !== mainHolder.clientWidth) {
      scrollbarCompensation = getScrollbarWidth(this.domBindings.rootDocument);
    }
    if (beyondRendered) {
      newX += this.sumCellSizes(0, sourceCol + 1);
      newX -= this.wot.wtViewport.getViewportWidth();
      newX += rowHeaderBorderCompensation;
    } else {
      newX += this.sumCellSizes(this.wtSettings.getSetting("fixedColumnsStart"), sourceCol);
    }
    newX += scrollbarCompensation;
    if (getMaximumScrollLeft(this.mainTableScrollableElement) === newX - rowHeaderBorderCompensation && rowHeaderBorderCompensation > 0) {
      this.wot.wtOverlays.expandHiderHorizontallyBy(rowHeaderBorderCompensation);
    }
    return this.setScrollPosition(newX);
  }
  /**
   * Gets table parent left position.
   *
   * @returns {number}
   */
  getTableParentOffset() {
    const preventOverflow = this.wtSettings.getSetting("preventOverflow");
    let offset2 = 0;
    if (!preventOverflow && this.trimmingContainer === this.domBindings.rootWindow) {
      offset2 = this.wot.wtTable.holderOffset.left;
    }
    return offset2;
  }
  /**
   * Gets the main overlay's horizontal scroll position.
   *
   * @returns {number} Main table's horizontal scroll position.
   */
  getScrollPosition() {
    return Math.abs(getScrollLeft(this.mainTableScrollableElement, this.domBindings.rootWindow));
  }
  /**
   * Gets the main overlay's horizontal overlay offset.
   *
   * @returns {number} Main table's horizontal overlay offset.
   */
  getOverlayOffset() {
    const {
      rootWindow
    } = this.domBindings;
    const preventOverflow = this.wtSettings.getSetting("preventOverflow");
    let overlayOffset = 0;
    if (this.trimmingContainer === rootWindow && (!preventOverflow || preventOverflow !== "horizontal")) {
      if (this.isRtl()) {
        overlayOffset = Math.abs(Math.min(this.getTableParentOffset() - this.getScrollPosition(), 0));
      } else {
        overlayOffset = Math.max(this.getScrollPosition() - this.getTableParentOffset(), 0);
      }
      const rootWidth = this.wot.wtTable.getTotalWidth();
      const overlayRootWidth = this.clone.wtTable.getTotalWidth();
      const maxOffset = rootWidth - overlayRootWidth;
      if (overlayOffset > maxOffset) {
        overlayOffset = 0;
      }
    }
    return overlayOffset;
  }
  /**
   * Adds css classes to hide the header border's header (cell-selection border hiding issue).
   *
   * @param {number} position Header X position if trimming container is window or scroll top if not.
   * @returns {boolean}
   */
  adjustHeaderBordersPosition(position) {
    const {
      wtSettings
    } = this;
    const masterParent = this.wot.wtTable.holder.parentNode;
    const rowHeaders = wtSettings.getSetting("rowHeaders");
    const fixedColumnsStart = wtSettings.getSetting("fixedColumnsStart");
    const totalRows = wtSettings.getSetting("totalRows");
    const preventVerticalOverflow = wtSettings.getSetting("preventOverflow") === "vertical";
    if (totalRows) {
      removeClass(masterParent, "emptyRows");
    } else {
      addClass(masterParent, "emptyRows");
    }
    let positionChanged = false;
    if (!preventVerticalOverflow) {
      if (fixedColumnsStart && !rowHeaders.length) {
        addClass(masterParent, "innerBorderLeft innerBorderInlineStart");
      } else if (!fixedColumnsStart && rowHeaders.length) {
        const previousState = hasClass(masterParent, "innerBorderInlineStart");
        if (position) {
          addClass(masterParent, "innerBorderLeft innerBorderInlineStart");
          positionChanged = !previousState;
        } else {
          removeClass(masterParent, "innerBorderLeft innerBorderInlineStart");
          positionChanged = previousState;
        }
      }
    }
    return positionChanged;
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/table/mixin/stickyRowsTop.mjs
var MIXIN_NAME6 = "stickyRowsTop";
var stickyRowsTop = {
  /**
   * Get the source index of the first rendered row. If no rows are rendered, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getFirstRenderedRow() {
    const totalRows = this.wtSettings.getSetting("totalRows");
    if (totalRows === 0) {
      return -1;
    }
    return 0;
  },
  /**
   * Get the source index of the first row fully visible in the viewport. If no rows are fully visible, returns an error code: -1.
   * Assumes that all rendered rows are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getFirstVisibleRow() {
    return this.getFirstRenderedRow();
  },
  /**
   * Get the source index of the first row partially visible in the viewport. If no rows are partially visible, returns an error code: -1.
   * Assumes that all rendered rows are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getFirstPartiallyVisibleRow() {
    return this.getFirstRenderedRow();
  },
  /**
   * Get the source index of the last rendered row. If no rows are rendered, returns an error code: -1.
   *
   * @returns {number}
   * @this Table
   */
  getLastRenderedRow() {
    return this.getRenderedRowsCount() - 1;
  },
  /**
   * Get the source index of the last row fully visible in the viewport. If no rows are fully visible, returns an error code: -1.
   * Assumes that all rendered rows are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getLastVisibleRow() {
    return this.getLastRenderedRow();
  },
  /**
   * Get the source index of the last row partially visible in the viewport. If no rows are partially visible, returns an error code: -1.
   * Assumes that all rendered rows are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getLastPartiallyVisibleRow() {
    return this.getLastRenderedRow();
  },
  /**
   * Get the number of rendered rows.
   *
   * @returns {number}
   * @this Table
   */
  getRenderedRowsCount() {
    const totalRows = this.wtSettings.getSetting("totalRows");
    return Math.min(this.wtSettings.getSetting("fixedRowsTop"), totalRows);
  },
  /**
   * Get the number of fully visible rows in the viewport.
   * Assumes that all rendered rows are fully visible.
   *
   * @returns {number}
   * @this Table
   */
  getVisibleRowsCount() {
    return this.getRenderedRowsCount();
  },
  /**
   * Get the number of rendered column headers.
   *
   * @returns {number}
   * @this Table
   */
  getColumnHeadersCount() {
    return this.dataAccessObject.columnHeaders.length;
  }
};
defineGetter(stickyRowsTop, "MIXIN_NAME", MIXIN_NAME6, {
  writable: false,
  enumerable: false
});
var stickyRowsTop_default = stickyRowsTop;

// node_modules/handsontable/3rdparty/walkontable/src/table/topInlineStartCorner.mjs
var TopInlineStartCornerOverlayTable = class extends table_default {
  /**
   * @param {TableDao} dataAccessObject The data access object.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {DomBindings} domBindings Bindings into DOM.
   * @param {Settings} wtSettings The Walkontable settings.
   */
  constructor(dataAccessObject, facadeGetter, domBindings, wtSettings) {
    super(dataAccessObject, facadeGetter, domBindings, wtSettings, CLONE_TOP_INLINE_START_CORNER);
  }
};
mixin(TopInlineStartCornerOverlayTable, stickyRowsTop_default);
mixin(TopInlineStartCornerOverlayTable, stickyColumnsStart_default);
var topInlineStartCorner_default = TopInlineStartCornerOverlayTable;

// node_modules/handsontable/3rdparty/walkontable/src/overlay/topInlineStartCorner.mjs
function _defineProperty29(obj, key, value) {
  key = _toPropertyKey29(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey29(t) {
  var i = _toPrimitive29(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive29(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var TopInlineStartCornerOverlay = class extends Overlay {
  /**
   * @param {Walkontable} wotInstance The Walkontable instance. @TODO refactoring: check if can be deleted.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {Settings} wtSettings The Walkontable settings.
   * @param {DomBindings} domBindings Dom elements bound to the current instance.
   * @param {TopOverlay} topOverlay The instance of the Top overlay.
   * @param {InlineStartOverlay} inlineStartOverlay The instance of the InlineStart overlay.
   */
  constructor(wotInstance, facadeGetter, wtSettings, domBindings, topOverlay, inlineStartOverlay) {
    super(wotInstance, facadeGetter, CLONE_TOP_INLINE_START_CORNER, wtSettings, domBindings);
    _defineProperty29(this, "topOverlay", void 0);
    _defineProperty29(this, "inlineStartOverlay", void 0);
    this.topOverlay = topOverlay;
    this.inlineStartOverlay = inlineStartOverlay;
  }
  /**
   * Factory method to create a subclass of `Table` that is relevant to this overlay.
   *
   * @see Table#constructor
   * @param {...*} args Parameters that will be forwarded to the `Table` constructor.
   * @returns {TopInlineStartCornerOverlayTable}
   */
  createTable() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return new topInlineStartCorner_default(...args);
  }
  /**
   * Checks if overlay should be fully rendered.
   *
   * @returns {boolean}
   */
  shouldBeRendered() {
    return this.wtSettings.getSetting("shouldRenderTopOverlay") && this.wtSettings.getSetting("shouldRenderInlineStartOverlay");
  }
  /**
   * Updates the corner overlay position.
   *
   * @returns {boolean}
   */
  resetFixedPosition() {
    this.updateTrimmingContainer();
    if (!this.wot.wtTable.holder.parentNode) {
      return false;
    }
    const overlayRoot = this.clone.wtTable.holder.parentNode;
    if (this.trimmingContainer === this.domBindings.rootWindow) {
      const left = this.inlineStartOverlay.getOverlayOffset() * (this.isRtl() ? -1 : 1);
      const top = this.topOverlay.getOverlayOffset();
      setOverlayPosition(overlayRoot, `${left}px`, `${top}px`);
    } else {
      resetCssTransform(overlayRoot);
    }
    let tableHeight = outerHeight(this.clone.wtTable.TABLE);
    const tableWidth = outerWidth(this.clone.wtTable.TABLE);
    if (!this.wot.wtTable.hasDefinedSize()) {
      tableHeight = 0;
    }
    overlayRoot.style.height = `${tableHeight}px`;
    overlayRoot.style.width = `${tableWidth}px`;
    return false;
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/table/top.mjs
var TopOverlayTable = class extends table_default {
  /**
   * @param {TableDao} dataAccessObject The data access object.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {DomBindings} domBindings Bindings into DOM.
   * @param {Settings} wtSettings The Walkontable settings.
   */
  constructor(dataAccessObject, facadeGetter, domBindings, wtSettings) {
    super(dataAccessObject, facadeGetter, domBindings, wtSettings, CLONE_TOP);
  }
};
mixin(TopOverlayTable, stickyRowsTop_default);
mixin(TopOverlayTable, calculatedColumns_default);
var top_default = TopOverlayTable;

// node_modules/handsontable/3rdparty/walkontable/src/overlay/top.mjs
function _defineProperty30(obj, key, value) {
  key = _toPropertyKey30(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey30(t) {
  var i = _toPrimitive30(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive30(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var TopOverlay = class extends Overlay {
  /**
   * @param {Walkontable} wotInstance The Walkontable instance. @TODO refactoring: check if can be deleted.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {Settings} wtSettings The Walkontable settings.
   * @param {DomBindings} domBindings Dom elements bound to the current instance.
   */
  constructor(wotInstance, facadeGetter, wtSettings, domBindings) {
    super(wotInstance, facadeGetter, CLONE_TOP, wtSettings, domBindings);
    _defineProperty30(this, "cachedFixedRowsTop", -1);
    this.cachedFixedRowsTop = this.wtSettings.getSetting("fixedRowsTop");
  }
  /**
   * Factory method to create a subclass of `Table` that is relevant to this overlay.
   *
   * @see Table#constructor
   * @param {...*} args Parameters that will be forwarded to the `Table` constructor.
   * @returns {TopOverlayTable}
   */
  createTable() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return new top_default(...args);
  }
  /**
   * Checks if overlay should be fully rendered.
   *
   * @returns {boolean}
   */
  shouldBeRendered() {
    return this.wtSettings.getSetting("shouldRenderTopOverlay");
  }
  /**
   * Updates the top overlay position.
   *
   * @returns {boolean}
   */
  resetFixedPosition() {
    if (!this.needFullRender || !this.shouldBeRendered() || !this.wot.wtTable.holder.parentNode) {
      return false;
    }
    const overlayRoot = this.clone.wtTable.holder.parentNode;
    const {
      rootWindow
    } = this.domBindings;
    const preventOverflow = this.wtSettings.getSetting("preventOverflow");
    let overlayPosition = 0;
    let skipInnerBorderAdjusting = false;
    if (this.trimmingContainer === rootWindow && (!preventOverflow || preventOverflow !== "vertical")) {
      const {
        wtTable
      } = this.wot;
      const hiderRect = wtTable.hider.getBoundingClientRect();
      const bottom = Math.ceil(hiderRect.bottom);
      const rootHeight = overlayRoot.offsetHeight;
      skipInnerBorderAdjusting = bottom === rootHeight;
      overlayPosition = this.getOverlayOffset();
      setOverlayPosition(overlayRoot, "0px", `${overlayPosition}px`);
    } else {
      overlayPosition = this.getScrollPosition();
      resetCssTransform(overlayRoot);
    }
    const positionChanged = this.adjustHeaderBordersPosition(overlayPosition, skipInnerBorderAdjusting);
    this.adjustElementsSize();
    return positionChanged;
  }
  /**
   * Sets the main overlay's vertical scroll position.
   *
   * @param {number} pos The scroll position.
   * @returns {boolean}
   */
  setScrollPosition(pos) {
    const rootWindow = this.domBindings.rootWindow;
    let result = false;
    if (this.mainTableScrollableElement === rootWindow && rootWindow.scrollY !== pos) {
      rootWindow.scrollTo(getWindowScrollLeft(rootWindow), pos);
      result = true;
    } else if (this.mainTableScrollableElement.scrollTop !== pos) {
      this.mainTableScrollableElement.scrollTop = pos;
      result = true;
    }
    return result;
  }
  /**
   * Triggers onScroll hook callback.
   */
  onScroll() {
    this.wtSettings.getSetting("onScrollHorizontally");
  }
  /**
   * Calculates total sum cells height.
   *
   * @param {number} from Row index which calculates started from.
   * @param {number} to Row index where calculation is finished.
   * @returns {number} Height sum.
   */
  sumCellSizes(from, to) {
    const defaultRowHeight = this.wtSettings.getSetting("defaultRowHeight");
    let row = from;
    let sum = 0;
    while (row < to) {
      const height = this.wot.wtTable.getRowHeight(row);
      sum += height === void 0 ? defaultRowHeight : height;
      row += 1;
    }
    return sum;
  }
  /**
   * Adjust overlay root element, children and master table element sizes (width, height).
   */
  adjustElementsSize() {
    this.updateTrimmingContainer();
    if (this.needFullRender) {
      this.adjustRootElementSize();
      this.adjustRootChildrenSize();
    }
  }
  /**
   * Adjust overlay root element size (width and height).
   */
  adjustRootElementSize() {
    const {
      wtTable
    } = this.wot;
    const {
      rootDocument,
      rootWindow
    } = this.domBindings;
    const scrollbarWidth = getScrollbarWidth(rootDocument);
    const overlayRoot = this.clone.wtTable.holder.parentNode;
    const overlayRootStyle = overlayRoot.style;
    const preventOverflow = this.wtSettings.getSetting("preventOverflow");
    if (this.trimmingContainer !== rootWindow || preventOverflow === "horizontal") {
      let width = this.wot.wtViewport.getWorkspaceWidth();
      if (this.wot.wtOverlays.hasScrollbarRight) {
        width -= scrollbarWidth;
      }
      width = Math.min(width, wtTable.wtRootElement.scrollWidth);
      overlayRootStyle.width = `${width}px`;
    } else {
      overlayRootStyle.width = "";
    }
    this.clone.wtTable.holder.style.width = overlayRootStyle.width;
    let tableHeight = outerHeight(this.clone.wtTable.TABLE);
    if (!this.wot.wtTable.hasDefinedSize()) {
      tableHeight = 0;
    }
    overlayRootStyle.height = `${tableHeight}px`;
  }
  /**
   * Adjust overlay root childs size.
   */
  adjustRootChildrenSize() {
    const {
      holder
    } = this.clone.wtTable;
    const selectionCornerOffset = this.wot.selectionManager.getFocusSelection() ? parseInt(CORNER_DEFAULT_STYLE.height, 10) / 2 : 0;
    this.clone.wtTable.hider.style.width = this.hider.style.width;
    holder.style.width = holder.parentNode.style.width;
    holder.style.height = `${parseInt(holder.parentNode.style.height, 10) + selectionCornerOffset}px`;
  }
  /**
   * Adjust the overlay dimensions and position.
   */
  applyToDOM() {
    const total = this.wtSettings.getSetting("totalRows");
    if (typeof this.wot.wtViewport.rowsRenderCalculator.startPosition === "number") {
      this.spreader.style.top = `${this.wot.wtViewport.rowsRenderCalculator.startPosition}px`;
    } else if (total === 0) {
      this.spreader.style.top = "0";
    } else {
      throw new Error("Incorrect value of the rowsRenderCalculator");
    }
    this.spreader.style.bottom = "";
    if (this.needFullRender) {
      this.syncOverlayOffset();
    }
  }
  /**
   * Synchronize calculated left position to an element.
   */
  syncOverlayOffset() {
    const styleProperty = this.isRtl() ? "right" : "left";
    const {
      spreader
    } = this.clone.wtTable;
    if (typeof this.wot.wtViewport.columnsRenderCalculator.startPosition === "number") {
      spreader.style[styleProperty] = `${this.wot.wtViewport.columnsRenderCalculator.startPosition}px`;
    } else {
      spreader.style[styleProperty] = "";
    }
  }
  /**
   * Scrolls vertically to a row.
   *
   * @param {number} sourceRow Row index which you want to scroll to.
   * @param {boolean} [bottomEdge] If `true`, scrolls according to the bottom edge (top edge is by default).
   * @returns {boolean}
   */
  scrollTo(sourceRow, bottomEdge) {
    const {
      wot,
      wtSettings
    } = this;
    const sourceInstance = wot.cloneSource ? wot.cloneSource : wot;
    const mainHolder = sourceInstance.wtTable.holder;
    const columnHeaders = wtSettings.getSetting("columnHeaders");
    const fixedRowsTop = wtSettings.getSetting("fixedRowsTop");
    const columnHeaderBorderCompensation = fixedRowsTop === 0 && columnHeaders.length > 0 && !hasClass(mainHolder.parentNode, "innerBorderTop") ? 1 : 0;
    let newY = this.getTableParentOffset();
    let scrollbarCompensation = 0;
    if (bottomEdge) {
      const rowHeight = this.wot.wtTable.getRowHeight(sourceRow);
      const viewportHeight = this.wot.wtViewport.getViewportHeight();
      if (rowHeight > viewportHeight) {
        bottomEdge = false;
      }
    }
    if (bottomEdge && mainHolder.offsetHeight !== mainHolder.clientHeight) {
      scrollbarCompensation = getScrollbarWidth(this.domBindings.rootDocument);
    }
    if (bottomEdge) {
      const fixedRowsBottom = wtSettings.getSetting("fixedRowsBottom");
      const totalRows = wtSettings.getSetting("totalRows");
      newY += this.sumCellSizes(0, sourceRow + 1);
      newY -= wot.wtViewport.getViewportHeight() - this.sumCellSizes(totalRows - fixedRowsBottom, totalRows);
      newY += 1;
      newY += columnHeaderBorderCompensation;
    } else {
      newY += this.sumCellSizes(wtSettings.getSetting("fixedRowsTop"), sourceRow);
    }
    newY += scrollbarCompensation;
    if (getMaximumScrollTop(this.mainTableScrollableElement) === newY - columnHeaderBorderCompensation && columnHeaderBorderCompensation > 0) {
      this.wot.wtOverlays.expandHiderVerticallyBy(columnHeaderBorderCompensation);
    }
    return this.setScrollPosition(newY);
  }
  /**
   * Gets table parent top position.
   *
   * @returns {number}
   */
  getTableParentOffset() {
    if (this.mainTableScrollableElement === this.domBindings.rootWindow) {
      return this.wot.wtTable.holderOffset.top;
    }
    return 0;
  }
  /**
   * Gets the main overlay's vertical scroll position.
   *
   * @returns {number} Main table's vertical scroll position.
   */
  getScrollPosition() {
    return getScrollTop(this.mainTableScrollableElement, this.domBindings.rootWindow);
  }
  /**
   * Gets the main overlay's vertical overlay offset.
   *
   * @returns {number} Main table's vertical overlay offset.
   */
  getOverlayOffset() {
    const {
      rootWindow
    } = this.domBindings;
    const preventOverflow = this.wtSettings.getSetting("preventOverflow");
    let overlayOffset = 0;
    if (this.trimmingContainer === rootWindow && (!preventOverflow || preventOverflow !== "vertical")) {
      const rootHeight = this.wot.wtTable.getTotalHeight();
      const overlayRootHeight = this.clone.wtTable.getTotalHeight();
      const maxOffset = rootHeight - overlayRootHeight;
      overlayOffset = Math.max(this.getScrollPosition() - this.getTableParentOffset(), 0);
      if (overlayOffset > maxOffset) {
        overlayOffset = 0;
      }
    }
    return overlayOffset;
  }
  /**
   * Adds css classes to hide the header border's header (cell-selection border hiding issue).
   *
   * @param {number} position Header Y position if trimming container is window or scroll top if not.
   * @param {boolean} [skipInnerBorderAdjusting=false] If `true` the inner border adjusting will be skipped.
   * @returns {boolean}
   */
  adjustHeaderBordersPosition(position) {
    let skipInnerBorderAdjusting = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const {
      wtSettings
    } = this;
    const masterParent = this.wot.wtTable.holder.parentNode;
    const totalColumns = wtSettings.getSetting("totalColumns");
    const preventHorizontalOverflow = wtSettings.getSetting("preventOverflow") === "horizontal";
    if (totalColumns) {
      removeClass(masterParent, "emptyColumns");
    } else {
      addClass(masterParent, "emptyColumns");
    }
    let positionChanged = false;
    if (!skipInnerBorderAdjusting && !preventHorizontalOverflow) {
      const fixedRowsTop = wtSettings.getSetting("fixedRowsTop");
      const areFixedRowsTopChanged = this.cachedFixedRowsTop !== fixedRowsTop;
      const columnHeaders = wtSettings.getSetting("columnHeaders");
      if ((areFixedRowsTopChanged || fixedRowsTop === 0) && columnHeaders.length > 0) {
        const previousState = hasClass(masterParent, "innerBorderTop");
        this.cachedFixedRowsTop = wtSettings.getSetting("fixedRowsTop");
        if (position || wtSettings.getSetting("totalRows") === 0) {
          addClass(masterParent, "innerBorderTop");
          positionChanged = !previousState;
        } else {
          removeClass(masterParent, "innerBorderTop");
          positionChanged = previousState;
        }
      }
    }
    return positionChanged;
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/overlays.mjs
function _classPrivateFieldInitSpec9(obj, privateMap, value) {
  _checkPrivateRedeclaration10(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration10(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty31(obj, key, value) {
  key = _toPropertyKey31(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey31(t) {
  var i = _toPrimitive31(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive31(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _classPrivateFieldSet9(s, a, r) {
  return s.set(_assertClassBrand10(s, a), r), r;
}
function _classPrivateFieldGet9(s, a) {
  return s.get(_assertClassBrand10(s, a));
}
function _assertClassBrand10(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _overlays = /* @__PURE__ */ new WeakMap();
var _hasRenderingStateChanged = /* @__PURE__ */ new WeakMap();
var Overlays = class {
  /**
   * @param {Walkontable} wotInstance The Walkontable instance. @todo refactoring remove.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {DomBindings} domBindings Bindings into DOM.
   * @param {Settings} wtSettings The Walkontable settings.
   * @param {EventManager} eventManager The walkontable event manager.
   * @param {MasterTable} wtTable The master table.
   */
  constructor(wotInstance, facadeGetter, domBindings, wtSettings, eventManager, wtTable) {
    _defineProperty31(this, "wot", null);
    _classPrivateFieldInitSpec9(this, _overlays, []);
    _defineProperty31(this, "topOverlay", null);
    _defineProperty31(this, "bottomOverlay", null);
    _defineProperty31(this, "inlineStartOverlay", null);
    _defineProperty31(this, "topInlineStartCornerOverlay", null);
    _defineProperty31(this, "bottomInlineStartCornerOverlay", null);
    _defineProperty31(this, "browserLineHeight", void 0);
    _defineProperty31(this, "wtSettings", null);
    _classPrivateFieldInitSpec9(this, _hasRenderingStateChanged, false);
    _defineProperty31(this, "resizeObserver", new ResizeObserver((entries) => {
      requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        this.wtSettings.getSetting("onContainerElementResize");
      });
    }));
    this.wot = wotInstance;
    this.wtSettings = wtSettings;
    this.domBindings = domBindings;
    this.facadeGetter = facadeGetter;
    this.wtTable = wtTable;
    const {
      rootDocument,
      rootWindow
    } = this.domBindings;
    this.instance = this.wot;
    this.eventManager = eventManager;
    this.scrollbarSize = getScrollbarWidth(rootDocument);
    const isOverflowHidden = rootWindow.getComputedStyle(wtTable.wtRootElement.parentNode).getPropertyValue("overflow") === "hidden";
    this.scrollableElement = isOverflowHidden ? wtTable.holder : getScrollableElement(wtTable.TABLE);
    this.initOverlays();
    this.hasScrollbarBottom = false;
    this.hasScrollbarRight = false;
    this.destroyed = false;
    this.keyPressed = false;
    this.spreaderLastSize = {
      width: null,
      height: null
    };
    this.verticalScrolling = false;
    this.horizontalScrolling = false;
    this.initBrowserLineHeight();
    this.registerListeners();
    this.lastScrollX = rootWindow.scrollX;
    this.lastScrollY = rootWindow.scrollY;
  }
  /**
   * Get the list of references to all overlays.
   *
   * @param {boolean} [includeMaster = false] If set to `true`, the list will contain the master table as the last
   * element.
   * @returns {(TopOverlay|TopInlineStartCornerOverlay|InlineStartOverlay|BottomOverlay|BottomInlineStartCornerOverlay)[]}
   */
  getOverlays() {
    let includeMaster = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const overlays = [..._classPrivateFieldGet9(_overlays, this)];
    if (includeMaster) {
      overlays.push(this.wtTable);
    }
    return overlays;
  }
  /**
   * Retrieve browser line height and apply its value to `browserLineHeight`.
   *
   * @private
   */
  initBrowserLineHeight() {
    const {
      rootWindow,
      rootDocument
    } = this.domBindings;
    const computedStyle = rootWindow.getComputedStyle(rootDocument.body);
    const lineHeight = parseInt(computedStyle.lineHeight, 10);
    const lineHeightFalback = parseInt(computedStyle.fontSize, 10) * 1.2;
    this.browserLineHeight = lineHeight || lineHeightFalback;
  }
  /**
   * Prepare overlays based on user settings.
   *
   * @private
   */
  initOverlays() {
    const args = [this.wot, this.facadeGetter, this.wtSettings, this.domBindings];
    this.topOverlay = new TopOverlay(...args);
    this.bottomOverlay = new BottomOverlay(...args);
    this.inlineStartOverlay = new InlineStartOverlay(...args);
    this.topInlineStartCornerOverlay = new TopInlineStartCornerOverlay(...args, this.topOverlay, this.inlineStartOverlay);
    this.bottomInlineStartCornerOverlay = new BottomInlineStartCornerOverlay(...args, this.bottomOverlay, this.inlineStartOverlay);
    _classPrivateFieldSet9(_overlays, this, [this.topOverlay, this.bottomOverlay, this.inlineStartOverlay, this.topInlineStartCornerOverlay, this.bottomInlineStartCornerOverlay]);
  }
  /**
   * Runs logic for the overlays before the table is drawn.
   */
  beforeDraw() {
    _classPrivateFieldSet9(_hasRenderingStateChanged, this, _classPrivateFieldGet9(_overlays, this).reduce((acc, overlay) => {
      return overlay.hasRenderingStateChanged() || acc;
    }, false));
    _classPrivateFieldGet9(_overlays, this).forEach((overlay) => overlay.updateStateOfRendering("before"));
  }
  /**
   * Runs logic for the overlays after the table is drawn.
   */
  afterDraw() {
    this.syncScrollWithMaster();
    _classPrivateFieldGet9(_overlays, this).forEach((overlay) => {
      const hasRenderingStateChanged = overlay.hasRenderingStateChanged();
      overlay.updateStateOfRendering("after");
      if (hasRenderingStateChanged && !overlay.needFullRender) {
        overlay.reset();
      }
    });
  }
  /**
   * Refresh and redraw table.
   */
  refreshAll() {
    if (!this.wot.drawn) {
      return;
    }
    if (!this.wtTable.holder.parentNode) {
      this.destroy();
      return;
    }
    this.wot.draw(true);
    if (this.verticalScrolling) {
      this.inlineStartOverlay.onScroll();
    }
    if (this.horizontalScrolling) {
      this.topOverlay.onScroll();
    }
    this.verticalScrolling = false;
    this.horizontalScrolling = false;
  }
  /**
   * Register all necessary event listeners.
   */
  registerListeners() {
    const {
      rootDocument,
      rootWindow
    } = this.domBindings;
    const {
      mainTableScrollableElement: topOverlayScrollableElement
    } = this.topOverlay;
    const {
      mainTableScrollableElement: inlineStartOverlayScrollableElement
    } = this.inlineStartOverlay;
    this.eventManager.addEventListener(rootDocument.documentElement, "keydown", (event) => this.onKeyDown(event));
    this.eventManager.addEventListener(rootDocument.documentElement, "keyup", () => this.onKeyUp());
    this.eventManager.addEventListener(rootDocument, "visibilitychange", () => this.onKeyUp());
    this.eventManager.addEventListener(topOverlayScrollableElement, "scroll", (event) => this.onTableScroll(event), {
      passive: true
    });
    if (topOverlayScrollableElement !== inlineStartOverlayScrollableElement) {
      this.eventManager.addEventListener(inlineStartOverlayScrollableElement, "scroll", (event) => this.onTableScroll(event), {
        passive: true
      });
    }
    const isHighPixelRatio = rootWindow.devicePixelRatio && rootWindow.devicePixelRatio > 1;
    const isScrollOnWindow = this.scrollableElement === rootWindow;
    const preventWheel = this.wtSettings.getSetting("preventWheel");
    const wheelEventOptions = {
      passive: isScrollOnWindow
    };
    if (preventWheel || isHighPixelRatio || !isChrome()) {
      this.eventManager.addEventListener(this.wtTable.wtRootElement, "wheel", (event) => this.onCloneWheel(event, preventWheel), wheelEventOptions);
    }
    const overlays = [this.topOverlay, this.bottomOverlay, this.inlineStartOverlay, this.topInlineStartCornerOverlay, this.bottomInlineStartCornerOverlay];
    overlays.forEach((overlay) => {
      if (overlay && overlay.needFullRender) {
        const {
          holder
        } = overlay.clone.wtTable;
        this.eventManager.addEventListener(holder, "wheel", (event) => this.onCloneWheel(event, preventWheel), wheelEventOptions);
      }
    });
    let resizeTimeout;
    this.eventManager.addEventListener(rootWindow, "resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.wtSettings.getSetting("onWindowResize");
      }, 200);
    });
    if (!isScrollOnWindow) {
      this.resizeObserver.observe(this.wtTable.wtRootElement.parentElement);
    }
  }
  /**
   * Deregister all previously registered listeners.
   */
  deregisterListeners() {
    this.eventManager.clearEvents(true);
  }
  /**
   * Scroll listener.
   *
   * @param {Event} event The mouse event object.
   */
  onTableScroll(event) {
    const rootWindow = this.domBindings.rootWindow;
    const masterHorizontal = this.inlineStartOverlay.mainTableScrollableElement;
    const masterVertical = this.topOverlay.mainTableScrollableElement;
    const target = event.target;
    if (this.keyPressed) {
      if (masterVertical !== rootWindow && target !== rootWindow && !event.target.contains(masterVertical) || masterHorizontal !== rootWindow && target !== rootWindow && !event.target.contains(masterHorizontal)) {
        return;
      }
    }
    this.syncScrollPositions(event);
  }
  /**
   * Wheel listener for cloned overlays.
   *
   * @param {Event} event The mouse event object.
   * @param {boolean} preventDefault If `true`, the `preventDefault` will be called on event object.
   */
  onCloneWheel(event, preventDefault) {
    const {
      rootWindow
    } = this.domBindings;
    const masterHorizontal = this.inlineStartOverlay.mainTableScrollableElement;
    const masterVertical = this.topOverlay.mainTableScrollableElement;
    const target = event.target;
    const shouldNotWheelVertically = masterVertical !== rootWindow && target !== rootWindow && !target.contains(masterVertical);
    const shouldNotWheelHorizontally = masterHorizontal !== rootWindow && target !== rootWindow && !target.contains(masterHorizontal);
    if (this.keyPressed && (shouldNotWheelVertically || shouldNotWheelHorizontally)) {
      return;
    }
    const isScrollPossible = this.translateMouseWheelToScroll(event);
    if (preventDefault || this.scrollableElement !== rootWindow && isScrollPossible) {
      event.preventDefault();
    }
  }
  /**
   * Key down listener.
   *
   * @param {Event} event The keyboard event object.
   */
  onKeyDown(event) {
    this.keyPressed = isKey(event.keyCode, "ARROW_UP|ARROW_RIGHT|ARROW_DOWN|ARROW_LEFT");
  }
  /**
   * Key up listener.
   */
  onKeyUp() {
    this.keyPressed = false;
  }
  /**
   * Translate wheel event into scroll event and sync scroll overlays position.
   *
   * @private
   * @param {Event} event The mouse event object.
   * @returns {boolean}
   */
  translateMouseWheelToScroll(event) {
    let deltaY = isNaN(event.deltaY) ? -1 * event.wheelDeltaY : event.deltaY;
    let deltaX = isNaN(event.deltaX) ? -1 * event.wheelDeltaX : event.deltaX;
    if (event.deltaMode === 1) {
      deltaX += deltaX * this.browserLineHeight;
      deltaY += deltaY * this.browserLineHeight;
    }
    const isScrollVerticallyPossible = this.scrollVertically(deltaY);
    const isScrollHorizontallyPossible = this.scrollHorizontally(deltaX);
    return isScrollVerticallyPossible || isScrollHorizontallyPossible;
  }
  /**
   * Scrolls main scrollable element horizontally.
   *
   * @param {number} delta Relative value to scroll.
   * @returns {boolean}
   */
  scrollVertically(delta) {
    const previousScroll = this.scrollableElement.scrollTop;
    this.scrollableElement.scrollTop += delta;
    return previousScroll !== this.scrollableElement.scrollTop;
  }
  /**
   * Scrolls main scrollable element horizontally.
   *
   * @param {number} delta Relative value to scroll.
   * @returns {boolean}
   */
  scrollHorizontally(delta) {
    const previousScroll = this.scrollableElement.scrollLeft;
    this.scrollableElement.scrollLeft += delta;
    return previousScroll !== this.scrollableElement.scrollLeft;
  }
  /**
   * Synchronize scroll position between master table and overlay table.
   *
   * @private
   */
  syncScrollPositions() {
    if (this.destroyed) {
      return;
    }
    const {
      rootWindow
    } = this.domBindings;
    const topHolder = this.topOverlay.clone.wtTable.holder;
    const leftHolder = this.inlineStartOverlay.clone.wtTable.holder;
    const [scrollLeft, scrollTop] = [this.scrollableElement.scrollLeft, this.scrollableElement.scrollTop];
    this.horizontalScrolling = topHolder.scrollLeft !== scrollLeft || this.lastScrollX !== rootWindow.scrollX;
    this.verticalScrolling = leftHolder.scrollTop !== scrollTop || this.lastScrollY !== rootWindow.scrollY;
    this.lastScrollX = rootWindow.scrollX;
    this.lastScrollY = rootWindow.scrollY;
    if (this.horizontalScrolling) {
      topHolder.scrollLeft = scrollLeft;
      const bottomHolder = this.bottomOverlay.needFullRender ? this.bottomOverlay.clone.wtTable.holder : null;
      if (bottomHolder) {
        bottomHolder.scrollLeft = scrollLeft;
      }
    }
    if (this.verticalScrolling) {
      leftHolder.scrollTop = scrollTop;
    }
    this.refreshAll();
  }
  /**
   * Synchronize overlay scrollbars with the master scrollbar.
   */
  syncScrollWithMaster() {
    if (!_classPrivateFieldGet9(_hasRenderingStateChanged, this)) {
      return;
    }
    const master = this.topOverlay.mainTableScrollableElement;
    const {
      scrollLeft,
      scrollTop
    } = master;
    if (this.topOverlay.needFullRender) {
      this.topOverlay.clone.wtTable.holder.scrollLeft = scrollLeft;
    }
    if (this.bottomOverlay.needFullRender) {
      this.bottomOverlay.clone.wtTable.holder.scrollLeft = scrollLeft;
    }
    if (this.inlineStartOverlay.needFullRender) {
      this.inlineStartOverlay.clone.wtTable.holder.scrollTop = scrollTop;
    }
    _classPrivateFieldSet9(_hasRenderingStateChanged, this, false);
  }
  /**
   * Update the main scrollable elements for all the overlays.
   */
  updateMainScrollableElements() {
    this.deregisterListeners();
    this.inlineStartOverlay.updateMainScrollableElement();
    this.topOverlay.updateMainScrollableElement();
    if (this.bottomOverlay.needFullRender) {
      this.bottomOverlay.updateMainScrollableElement();
    }
    const {
      wtTable
    } = this;
    const {
      rootWindow
    } = this.domBindings;
    if (rootWindow.getComputedStyle(wtTable.wtRootElement.parentNode).getPropertyValue("overflow") === "hidden") {
      this.scrollableElement = wtTable.holder;
    } else {
      this.scrollableElement = getScrollableElement(wtTable.TABLE);
    }
    this.registerListeners();
  }
  /**
   *
   */
  destroy() {
    this.resizeObserver.disconnect();
    this.eventManager.destroy();
    this.topOverlay.destroy();
    if (this.bottomOverlay.clone) {
      this.bottomOverlay.destroy();
    }
    this.inlineStartOverlay.destroy();
    if (this.topInlineStartCornerOverlay) {
      this.topInlineStartCornerOverlay.destroy();
    }
    if (this.bottomInlineStartCornerOverlay && this.bottomInlineStartCornerOverlay.clone) {
      this.bottomInlineStartCornerOverlay.destroy();
    }
    this.destroyed = true;
  }
  /**
   * @param {boolean} [fastDraw=false] When `true`, try to refresh only the positions of borders without rerendering
   *                                   the data. It will only work if Table.draw() does not force
   *                                   rendering anyway.
   */
  refresh() {
    let fastDraw = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const wasSpreaderSizeUpdated = this.updateLastSpreaderSize();
    if (wasSpreaderSizeUpdated) {
      this.adjustElementsSize();
    }
    if (this.bottomOverlay.clone) {
      this.bottomOverlay.refresh(fastDraw);
    }
    this.inlineStartOverlay.refresh(fastDraw);
    this.topOverlay.refresh(fastDraw);
    if (this.topInlineStartCornerOverlay) {
      this.topInlineStartCornerOverlay.refresh(fastDraw);
    }
    if (this.bottomInlineStartCornerOverlay && this.bottomInlineStartCornerOverlay.clone) {
      this.bottomInlineStartCornerOverlay.refresh(fastDraw);
    }
  }
  /**
   * Update the last cached spreader size with the current size.
   *
   * @returns {boolean} `true` if the lastSpreaderSize cache was updated, `false` otherwise.
   */
  updateLastSpreaderSize() {
    const spreader = this.wtTable.spreader;
    const width = spreader.clientWidth;
    const height = spreader.clientHeight;
    const needsUpdating = width !== this.spreaderLastSize.width || height !== this.spreaderLastSize.height;
    if (needsUpdating) {
      this.spreaderLastSize.width = width;
      this.spreaderLastSize.height = height;
    }
    return needsUpdating;
  }
  /**
   * Adjust overlays elements size and master table size.
   */
  adjustElementsSize() {
    const {
      wtViewport
    } = this.wot;
    const {
      wtTable
    } = this;
    const {
      rootWindow
    } = this.domBindings;
    const isWindowScrolled = this.scrollableElement === rootWindow;
    const totalColumns = this.wtSettings.getSetting("totalColumns");
    const totalRows = this.wtSettings.getSetting("totalRows");
    const headerRowSize = wtViewport.getRowHeaderWidth();
    const headerColumnSize = wtViewport.getColumnHeaderHeight();
    const proposedHiderHeight = headerColumnSize + this.topOverlay.sumCellSizes(0, totalRows) + 1;
    const proposedHiderWidth = headerRowSize + this.inlineStartOverlay.sumCellSizes(0, totalColumns);
    const hiderElement = wtTable.hider;
    const hiderStyle = hiderElement.style;
    const isScrolledBeyondHiderHeight = () => {
      return isWindowScrolled ? false : this.scrollableElement.scrollTop > Math.max(0, proposedHiderHeight - wtTable.holder.clientHeight);
    };
    const isScrolledBeyondHiderWidth = () => {
      return isWindowScrolled ? false : this.scrollableElement.scrollLeft > Math.max(0, proposedHiderWidth - wtTable.holder.clientWidth);
    };
    const columnHeaderBorderCompensation = isScrolledBeyondHiderHeight() ? 1 : 0;
    const rowHeaderBorderCompensation = isScrolledBeyondHiderWidth() ? 1 : 0;
    hiderStyle.width = `${proposedHiderWidth + rowHeaderBorderCompensation}px`;
    hiderStyle.height = `${proposedHiderHeight + columnHeaderBorderCompensation}px`;
    if (this.scrollbarSize > 0) {
      const {
        scrollHeight: rootElemScrollHeight,
        scrollWidth: rootElemScrollWidth
      } = wtTable.wtRootElement;
      const {
        scrollHeight: holderScrollHeight,
        scrollWidth: holderScrollWidth
      } = wtTable.holder;
      this.hasScrollbarRight = rootElemScrollHeight < holderScrollHeight;
      this.hasScrollbarBottom = rootElemScrollWidth < holderScrollWidth;
      if (this.hasScrollbarRight && wtTable.hider.scrollWidth + this.scrollbarSize > rootElemScrollWidth) {
        this.hasScrollbarBottom = true;
      } else if (this.hasScrollbarBottom && wtTable.hider.scrollHeight + this.scrollbarSize > rootElemScrollHeight) {
        this.hasScrollbarRight = true;
      }
    }
    this.topOverlay.adjustElementsSize();
    this.inlineStartOverlay.adjustElementsSize();
    this.bottomOverlay.adjustElementsSize();
  }
  /**
   * Expand the hider vertically element by the provided delta value.
   *
   * @param {number} heightDelta The delta value to expand the hider element by.
   */
  expandHiderVerticallyBy(heightDelta) {
    const {
      wtTable
    } = this;
    wtTable.hider.style.height = `${parseInt(wtTable.hider.style.height, 10) + heightDelta}px`;
  }
  /**
   * Expand the hider horizontally element by the provided delta value.
   *
   * @param {number} widthDelta The delta value to expand the hider element by.
   */
  expandHiderHorizontallyBy(widthDelta) {
    const {
      wtTable
    } = this;
    wtTable.hider.style.width = `${parseInt(wtTable.hider.style.width, 10) + widthDelta}px`;
  }
  /**
   *
   */
  applyToDOM() {
    if (!this.wtTable.isVisible()) {
      return;
    }
    this.topOverlay.applyToDOM();
    if (this.bottomOverlay.clone) {
      this.bottomOverlay.applyToDOM();
    }
    this.inlineStartOverlay.applyToDOM();
  }
  /**
   * Get the parent overlay of the provided element.
   *
   * @param {HTMLElement} element An element to process.
   * @returns {object|null}
   */
  getParentOverlay(element) {
    if (!element) {
      return null;
    }
    const overlays = [this.topOverlay, this.inlineStartOverlay, this.bottomOverlay, this.topInlineStartCornerOverlay, this.bottomInlineStartCornerOverlay];
    let result = null;
    arrayEach(overlays, (overlay) => {
      if (!overlay) {
        return;
      }
      if (overlay.clone && overlay.clone.wtTable.TABLE.contains(element)) {
        result = overlay.clone;
      }
    });
    return result;
  }
  /**
   * Synchronize the class names between the main overlay table and the tables on the other overlays.
   *
   */
  syncOverlayTableClassNames() {
    const masterTable = this.wtTable.TABLE;
    const overlays = [this.topOverlay, this.inlineStartOverlay, this.bottomOverlay, this.topInlineStartCornerOverlay, this.bottomInlineStartCornerOverlay];
    arrayEach(overlays, (elem) => {
      if (!elem) {
        return;
      }
      elem.clone.wtTable.TABLE.className = masterTable.className;
    });
  }
};
var overlays_default = Overlays;

// node_modules/handsontable/3rdparty/walkontable/src/settings.mjs
function _defineProperty32(obj, key, value) {
  key = _toPropertyKey32(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey32(t) {
  var i = _toPrimitive32(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive32(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var Settings = class {
  /**
   * @param {SettingsPure} settings The user defined settings.
   */
  constructor(settings) {
    _defineProperty32(this, "settings", {});
    _defineProperty32(this, "defaults", Object.freeze(this.getDefaults()));
    objectEach(this.defaults, (value, key) => {
      if (settings[key] !== void 0) {
        this.settings[key] = settings[key];
      } else if (value === void 0) {
        throw new Error(`A required setting "${key}" was not provided`);
      } else {
        this.settings[key] = value;
      }
    });
  }
  /**
   * Generate defaults for a settings.
   * Void 0 means it is required, null means it can be empty.
   *
   * @private
   * @returns {SettingsPure}
   */
  getDefaults() {
    return {
      facade: void 0,
      table: void 0,
      // Determines whether the Walkontable instance is used as dataset viewer. When its instance is used as
      // a context menu, autocomplete list, etc, the returned value is `false`.
      isDataViewInstance: true,
      // presentation mode
      externalRowCalculator: false,
      stretchH: "none",
      // values: all, last, none
      currentRowClassName: null,
      currentColumnClassName: null,
      preventOverflow() {
        return false;
      },
      preventWheel: false,
      // data source
      data: void 0,
      freezeOverlays: false,
      // Number of renderable columns for the left overlay.
      fixedColumnsStart: 0,
      // Number of renderable rows for the top overlay.
      fixedRowsTop: 0,
      // Number of renderable rows for the bottom overlay.
      fixedRowsBottom: 0,
      // Enable the inline start overlay when conditions are met (left for LTR and right for RTL document mode).
      shouldRenderInlineStartOverlay: () => {
        return this.getSetting("fixedColumnsStart") > 0 || this.getSetting("rowHeaders").length > 0;
      },
      // Enable the top overlay when conditions are met.
      shouldRenderTopOverlay: () => {
        return this.getSetting("fixedRowsTop") > 0 || this.getSetting("columnHeaders").length > 0;
      },
      // Enable the bottom overlay when conditions are met.
      shouldRenderBottomOverlay: () => {
        return this.getSetting("fixedRowsBottom") > 0;
      },
      minSpareRows: 0,
      // this must be array of functions: [function (row, TH) {}]
      rowHeaders() {
        return [];
      },
      // this must be array of functions: [function (column, TH) {}]
      columnHeaders() {
        return [];
      },
      totalRows: void 0,
      totalColumns: void 0,
      cellRenderer: (row, column, TD) => {
        const cellData = this.getSetting("data", row, column);
        fastInnerText(TD, cellData === void 0 || cellData === null ? "" : cellData);
      },
      // columnWidth: 50,
      columnWidth() {
      },
      rowHeight() {
      },
      defaultRowHeight: 23,
      defaultColumnWidth: 50,
      selections: null,
      hideBorderOnMouseDownOver: false,
      viewportRowCalculatorOverride: null,
      viewportColumnCalculatorOverride: null,
      // callbacks
      onCellMouseDown: null,
      onCellContextMenu: null,
      onCellMouseOver: null,
      onCellMouseOut: null,
      onCellMouseUp: null,
      // onCellMouseOut: null,
      onCellDblClick: null,
      onCellCornerMouseDown: null,
      onCellCornerDblClick: null,
      beforeDraw: null,
      onDraw: null,
      onBeforeRemoveCellClassNames: null,
      onAfterDrawSelection: null,
      onBeforeDrawBorders: null,
      // viewport scroll hooks
      onBeforeViewportScrollHorizontally: (column) => column,
      onBeforeViewportScrollVertically: (row) => row,
      // native scroll hooks
      onScrollHorizontally: null,
      onScrollVertically: null,
      //
      onBeforeTouchScroll: null,
      onAfterMomentumScroll: null,
      onBeforeStretchingColumnWidth: (width) => width,
      onModifyRowHeaderWidth: null,
      onModifyGetCellCoords: null,
      onBeforeHighlightingRowHeader: (sourceRow) => sourceRow,
      onBeforeHighlightingColumnHeader: (sourceCol) => sourceCol,
      onWindowResize: null,
      onContainerElementResize: null,
      renderAllColumns: false,
      renderAllRows: false,
      groups: false,
      rowHeaderWidth: null,
      columnHeaderHeight: null,
      headerClassName: null,
      rtlMode: false,
      ariaTags: true
    };
  }
  /**
   * Update settings.
   *
   * @param {object|string} settings The singular settings to update or if passed as object to merge with.
   * @param {*} value The value to set if the first argument is passed as string.
   * @returns {Settings}
   */
  update(settings, value) {
    if (value === void 0) {
      objectEach(settings, (settingValue, key) => {
        this.settings[key] = settingValue;
      });
    } else {
      this.settings[settings] = value;
    }
    return this;
  }
  /**
   * Get setting by name.
   *
   * @param {$Keys<SettingsPure>} key The settings key to retrieve.
   * @param {*} [param1] Additional parameter passed to the options defined as function.
   * @param {*} [param2] Additional parameter passed to the options defined as function.
   * @param {*} [param3] Additional parameter passed to the options defined as function.
   * @param {*} [param4] Additional parameter passed to the options defined as function.
   * @returns {*}
   */
  getSetting(key, param1, param2, param3, param4) {
    if (typeof this.settings[key] === "function") {
      return this.settings[key](param1, param2, param3, param4);
    } else if (param1 !== void 0 && Array.isArray(this.settings[key])) {
      return this.settings[key][param1];
    }
    return this.settings[key];
  }
  /**
   * Get a setting value without any evaluation.
   *
   * @param {string} key The settings key to retrieve.
   * @returns {*}
   */
  getSettingPure(key) {
    return this.settings[key];
  }
  /**
   * Checks if setting exists.
   *
   * @param {boolean} key The settings key to check.
   * @returns {boolean}
   */
  has(key) {
    return !!this.settings[key];
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/table/master.mjs
var MasterTable = class extends table_default {
  /**
   * @param {TableDao} dataAccessObject The data access object.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {DomBindings} domBindings Bindings into DOM.
   * @param {Settings} wtSettings The Walkontable settings.
   */
  constructor(dataAccessObject, facadeGetter, domBindings, wtSettings) {
    super(dataAccessObject, facadeGetter, domBindings, wtSettings, "master");
  }
  alignOverlaysWithTrimmingContainer() {
    const trimmingElement = getTrimmingContainer(this.wtRootElement);
    const {
      rootWindow
    } = this.domBindings;
    if (trimmingElement === rootWindow) {
      const preventOverflow = this.wtSettings.getSetting("preventOverflow");
      if (!preventOverflow) {
        this.holder.style.overflow = "visible";
        this.wtRootElement.style.overflow = "visible";
      }
    } else {
      const trimmingElementParent = trimmingElement.parentElement;
      const trimmingHeight = getStyle(trimmingElement, "height", rootWindow);
      const trimmingOverflow = getStyle(trimmingElement, "overflow", rootWindow);
      const holderStyle = this.holder.style;
      const {
        scrollWidth,
        scrollHeight
      } = trimmingElement;
      let width = trimmingElement.offsetWidth;
      let height = trimmingElement.offsetHeight;
      const overflow = ["auto", "hidden", "scroll"];
      if (trimmingElementParent && overflow.includes(trimmingOverflow)) {
        const cloneNode = trimmingElement.cloneNode(false);
        cloneNode.style.overflow = "auto";
        cloneNode.style.position = "absolute";
        if (trimmingElement.nextElementSibling) {
          trimmingElementParent.insertBefore(cloneNode, trimmingElement.nextElementSibling);
        } else {
          trimmingElementParent.appendChild(cloneNode);
        }
        const cloneHeight = parseInt(getComputedStyle(cloneNode, rootWindow).height, 10);
        trimmingElementParent.removeChild(cloneNode);
        if (cloneHeight === 0) {
          height = 0;
        }
      }
      height = Math.min(height, scrollHeight);
      holderStyle.height = trimmingHeight === "auto" ? "auto" : `${height}px`;
      width = Math.min(width, scrollWidth);
      holderStyle.width = `${width}px`;
      holderStyle.overflow = "";
      this.hasTableHeight = holderStyle.height === "auto" ? true : height > 0;
      this.hasTableWidth = width > 0;
    }
    this.isTableVisible = isVisible(this.TABLE);
  }
  markOversizedColumnHeaders() {
    const {
      wtSettings
    } = this;
    const {
      wtViewport
    } = this.dataAccessObject;
    const overlayName = "master";
    const columnHeaders = wtSettings.getSetting("columnHeaders");
    const columnHeadersCount = columnHeaders.length;
    if (columnHeadersCount && !wtViewport.hasOversizedColumnHeadersMarked[overlayName]) {
      const rowHeaders = wtSettings.getSetting("rowHeaders");
      const rowHeaderCount = rowHeaders.length;
      const columnCount = this.getRenderedColumnsCount();
      for (let i = 0; i < columnHeadersCount; i++) {
        for (let renderedColumnIndex = -1 * rowHeaderCount; renderedColumnIndex < columnCount; renderedColumnIndex++) {
          this.markIfOversizedColumnHeader(renderedColumnIndex);
        }
      }
      wtViewport.hasOversizedColumnHeadersMarked[overlayName] = true;
    }
  }
};
mixin(MasterTable, calculatedRows_default);
mixin(MasterTable, calculatedColumns_default);
var master_default = MasterTable;

// node_modules/handsontable/3rdparty/walkontable/src/viewport.mjs
var Viewport = class {
  /**
   * @param {ViewportDao} dataAccessObject The Walkontable instance.
   * @param {DomBindings} domBindings Bindings into DOM.
   * @param {Settings} wtSettings The Walkontable settings.
   * @param {EventManager} eventManager The instance event manager.
   * @param {Table} wtTable The table.
   */
  constructor(dataAccessObject, domBindings, wtSettings, eventManager, wtTable) {
    this.dataAccessObject = dataAccessObject;
    this.wot = dataAccessObject.wot;
    this.instance = this.wot;
    this.domBindings = domBindings;
    this.wtSettings = wtSettings;
    this.wtTable = wtTable;
    this.oversizedRows = [];
    this.oversizedColumnHeaders = [];
    this.hasOversizedColumnHeadersMarked = {};
    this.clientHeight = 0;
    this.containerWidth = NaN;
    this.rowHeaderWidth = NaN;
    this.rowsVisibleCalculator = null;
    this.columnsVisibleCalculator = null;
    this.eventManager = eventManager;
    this.eventManager.addEventListener(this.domBindings.rootWindow, "resize", () => {
      this.clientHeight = this.getWorkspaceHeight();
    });
  }
  /**
   * @returns {number}
   */
  getWorkspaceHeight() {
    const currentDocument = this.domBindings.rootDocument;
    const trimmingContainer = this.dataAccessObject.topOverlayTrimmingContainer;
    let height = 0;
    if (trimmingContainer === this.domBindings.rootWindow) {
      height = currentDocument.documentElement.clientHeight;
    } else {
      const elemHeight = outerHeight(trimmingContainer);
      height = elemHeight > 0 && trimmingContainer.clientHeight > 0 ? trimmingContainer.clientHeight : Infinity;
    }
    return height;
  }
  getWorkspaceWidth() {
    const {
      wtSettings
    } = this;
    const {
      rootDocument,
      rootWindow
    } = this.domBindings;
    const trimmingContainer = this.dataAccessObject.inlineStartOverlayTrimmingContainer;
    const docOffsetWidth = rootDocument.documentElement.offsetWidth;
    const totalColumns = wtSettings.getSetting("totalColumns");
    const preventOverflow = wtSettings.getSetting("preventOverflow");
    const isRtl = wtSettings.getSetting("rtlMode");
    const tableRect = this.wtTable.TABLE.getBoundingClientRect();
    const inlineStart = isRtl ? tableRect.right - docOffsetWidth : tableRect.left;
    const tableOffset = docOffsetWidth - inlineStart;
    let width;
    let overflow;
    if (preventOverflow) {
      return outerWidth(this.wtTable.wtRootElement);
    }
    if (wtSettings.getSetting("freezeOverlays")) {
      width = Math.min(tableOffset, docOffsetWidth);
    } else {
      width = Math.min(this.getContainerFillWidth(), tableOffset, docOffsetWidth);
    }
    if (trimmingContainer === rootWindow && totalColumns > 0 && this.sumColumnWidths(0, totalColumns - 1) > width) {
      return rootDocument.documentElement.clientWidth;
    }
    if (trimmingContainer !== rootWindow) {
      overflow = getStyle(this.dataAccessObject.inlineStartOverlayTrimmingContainer, "overflow", rootWindow);
      if (overflow === "scroll" || overflow === "hidden" || overflow === "auto") {
        return Math.max(width, trimmingContainer.clientWidth);
      }
    }
    const stretchSetting = wtSettings.getSetting("stretchH");
    if (stretchSetting === "none" || !stretchSetting) {
      return Math.max(width, outerWidth(this.wtTable.TABLE));
    }
    return width;
  }
  /**
   * Checks if viewport has vertical scroll.
   *
   * @returns {boolean}
   */
  hasVerticalScroll() {
    return this.wtTable.hider.offsetHeight > this.getWorkspaceHeight();
  }
  /**
   * Checks if viewport has horizontal scroll.
   *
   * @returns {boolean}
   */
  hasHorizontalScroll() {
    return this.wtTable.hider.offsetWidth > this.getWorkspaceWidth();
  }
  /**
   * @param {number} from The visual column index from the width sum is start calculated.
   * @param {number} length The length of the column to traverse.
   * @returns {number}
   */
  sumColumnWidths(from, length) {
    let sum = 0;
    let column = from;
    while (column < length) {
      sum += this.wtTable.getColumnWidth(column);
      column += 1;
    }
    return sum;
  }
  /**
   * @returns {number}
   */
  getContainerFillWidth() {
    if (this.containerWidth) {
      return this.containerWidth;
    }
    const mainContainer = this.wtTable.holder;
    const dummyElement = this.domBindings.rootDocument.createElement("div");
    dummyElement.style.width = "100%";
    dummyElement.style.height = "1px";
    mainContainer.appendChild(dummyElement);
    const fillWidth = dummyElement.offsetWidth;
    this.containerWidth = fillWidth;
    mainContainer.removeChild(dummyElement);
    return fillWidth;
  }
  /**
   * @returns {number}
   */
  getWorkspaceOffset() {
    return offset(this.wtTable.TABLE);
  }
  /**
   * @returns {number}
   */
  getColumnHeaderHeight() {
    const columnHeaders = this.wtSettings.getSetting("columnHeaders");
    if (!columnHeaders.length) {
      this.columnHeaderHeight = 0;
    } else if (isNaN(this.columnHeaderHeight)) {
      this.columnHeaderHeight = outerHeight(this.wtTable.THEAD);
    }
    return this.columnHeaderHeight;
  }
  /**
   * @returns {number}
   */
  getViewportHeight() {
    let containerHeight = this.getWorkspaceHeight();
    if (containerHeight === Infinity) {
      return containerHeight;
    }
    const columnHeaderHeight = this.getColumnHeaderHeight();
    if (columnHeaderHeight > 0) {
      containerHeight -= columnHeaderHeight;
    }
    return containerHeight;
  }
  /**
   * @returns {number}
   */
  getRowHeaderWidth() {
    const rowHeadersWidthSetting = this.wtSettings.getSetting("rowHeaderWidth");
    const rowHeaders = this.wtSettings.getSetting("rowHeaders");
    if (rowHeadersWidthSetting) {
      this.rowHeaderWidth = 0;
      for (let i = 0, len = rowHeaders.length; i < len; i++) {
        this.rowHeaderWidth += rowHeadersWidthSetting[i] || rowHeadersWidthSetting;
      }
    }
    if (isNaN(this.rowHeaderWidth)) {
      if (rowHeaders.length) {
        let TH = this.wtTable.TABLE.querySelector("TH");
        this.rowHeaderWidth = 0;
        for (let i = 0, len = rowHeaders.length; i < len; i++) {
          if (TH) {
            this.rowHeaderWidth += outerWidth(TH);
            TH = TH.nextSibling;
          } else {
            this.rowHeaderWidth += 50;
          }
        }
      } else {
        this.rowHeaderWidth = 0;
      }
    }
    this.rowHeaderWidth = this.wtSettings.getSetting("onModifyRowHeaderWidth", this.rowHeaderWidth) || this.rowHeaderWidth;
    return this.rowHeaderWidth;
  }
  /**
   * @returns {number}
   */
  getViewportWidth() {
    const containerWidth = this.getWorkspaceWidth();
    if (containerWidth === Infinity) {
      return containerWidth;
    }
    const rowHeaderWidth = this.getRowHeaderWidth();
    if (rowHeaderWidth > 0) {
      return containerWidth - rowHeaderWidth;
    }
    return containerWidth;
  }
  /**
   * Creates:
   * - rowsRenderCalculator (before draw, to qualify rows for rendering)
   * - rowsVisibleCalculator (after draw, to measure which rows are actually visible).
   *
   * @param {number} calculationType The render type ID, which determines for what type of
   *                                 calculation calculator is created.
   * @returns {ViewportRowsCalculator}
   */
  createRowsCalculator() {
    let calculationType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : RENDER_TYPE;
    const {
      wtSettings,
      wtTable
    } = this;
    if (wtSettings.getSetting("renderAllRows") && calculationType === RENDER_TYPE) {
      return new RenderAllRowsCalculator({
        totalRows: wtSettings.getSetting("totalRows")
      });
    }
    let height = this.getViewportHeight();
    let scrollbarHeight;
    let fixedRowsHeight;
    this.rowHeaderWidth = NaN;
    let pos = this.dataAccessObject.topScrollPosition - this.dataAccessObject.topParentOffset;
    const fixedRowsTop = wtSettings.getSetting("fixedRowsTop");
    const fixedRowsBottom = wtSettings.getSetting("fixedRowsBottom");
    const totalRows = wtSettings.getSetting("totalRows");
    if (fixedRowsTop && pos >= 0) {
      fixedRowsHeight = this.dataAccessObject.topOverlay.sumCellSizes(0, fixedRowsTop);
      pos += fixedRowsHeight;
      height -= fixedRowsHeight;
    }
    if (fixedRowsBottom && this.dataAccessObject.bottomOverlay.clone) {
      fixedRowsHeight = this.dataAccessObject.bottomOverlay.sumCellSizes(totalRows - fixedRowsBottom, totalRows);
      height -= fixedRowsHeight;
    }
    if (wtTable.holder.clientHeight === wtTable.holder.offsetHeight) {
      scrollbarHeight = 0;
    } else {
      scrollbarHeight = getScrollbarWidth(this.domBindings.rootDocument);
    }
    return new ViewportRowsCalculator({
      viewportHeight: height,
      scrollOffset: pos,
      totalRows: wtSettings.getSetting("totalRows"),
      rowHeightFn: (sourceRow) => wtTable.getRowHeight(sourceRow),
      overrideFn: wtSettings.getSettingPure("viewportRowCalculatorOverride"),
      calculationType,
      horizontalScrollbarHeight: scrollbarHeight
    });
  }
  /**
   * Creates:
   * - columnsRenderCalculator (before draw, to qualify columns for rendering)
   * - columnsVisibleCalculator (after draw, to measure which columns are actually visible).
   *
   * @param {number} calculationType The render type ID, which determines for what type of
   *                                 calculation calculator is created.
   * @returns {ViewportColumnsCalculator}
   */
  createColumnsCalculator() {
    let calculationType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : RENDER_TYPE;
    const {
      wtSettings,
      wtTable
    } = this;
    if (wtSettings.getSetting("renderAllColumns") && calculationType === RENDER_TYPE) {
      return new RenderAllColumnsCalculator({
        totalColumns: wtSettings.getSetting("totalColumns")
      });
    }
    let width = this.getViewportWidth();
    let pos = Math.abs(this.dataAccessObject.inlineStartScrollPosition) - this.dataAccessObject.inlineStartParentOffset;
    this.columnHeaderHeight = NaN;
    const fixedColumnsStart = wtSettings.getSetting("fixedColumnsStart");
    if (fixedColumnsStart && pos >= 0) {
      const fixedColumnsWidth = this.dataAccessObject.inlineStartOverlay.sumCellSizes(0, fixedColumnsStart);
      pos += fixedColumnsWidth;
      width -= fixedColumnsWidth;
    }
    if (wtTable.holder.clientWidth !== wtTable.holder.offsetWidth) {
      width -= getScrollbarWidth(this.domBindings.rootDocument);
    }
    return new ViewportColumnsCalculator({
      viewportWidth: width,
      scrollOffset: pos,
      totalColumns: wtSettings.getSetting("totalColumns"),
      columnWidthFn: (sourceCol) => wtTable.getColumnWidth(sourceCol),
      overrideFn: wtSettings.getSettingPure("viewportColumnCalculatorOverride"),
      calculationType,
      inlineStartOffset: this.dataAccessObject.inlineStartParentOffset
    });
  }
  /**
   * Creates rowsRenderCalculator and columnsRenderCalculator (before draw, to determine what rows and
   * cols should be rendered).
   *
   * @param {boolean} fastDraw If `true`, will try to avoid full redraw and only update the border positions.
   *                           If `false` or `undefined`, will perform a full redraw.
   * @returns {boolean} The fastDraw value, possibly modified.
   */
  createRenderCalculators() {
    let fastDraw = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const {
      wtSettings
    } = this;
    if (fastDraw && !wtSettings.getSetting("renderAllRows")) {
      const proposedRowsVisibleCalculator = this.createRowsCalculator(FULLY_VISIBLE_TYPE);
      fastDraw = this.areAllProposedVisibleRowsAlreadyRendered(proposedRowsVisibleCalculator);
    }
    if (fastDraw && !wtSettings.getSetting("renderAllColumns")) {
      const proposedColumnsVisibleCalculator = this.createColumnsCalculator(FULLY_VISIBLE_TYPE);
      fastDraw = this.areAllProposedVisibleColumnsAlreadyRendered(proposedColumnsVisibleCalculator);
    }
    if (!fastDraw) {
      this.rowsRenderCalculator = this.createRowsCalculator(RENDER_TYPE);
      this.columnsRenderCalculator = this.createColumnsCalculator(RENDER_TYPE);
    }
    this.rowsVisibleCalculator = null;
    this.columnsVisibleCalculator = null;
    return fastDraw;
  }
  /**
   * Creates rowsVisibleCalculator and columnsVisibleCalculator (after draw, to determine what are
   * the actually fully visible rows and columns).
   */
  createVisibleCalculators() {
    this.rowsVisibleCalculator = this.createRowsCalculator(FULLY_VISIBLE_TYPE);
    this.columnsVisibleCalculator = this.createColumnsCalculator(FULLY_VISIBLE_TYPE);
  }
  /**
   * Creates rowsPartiallyVisibleCalculator and columnsPartiallyVisibleCalculator (after draw, to determine what are
   * the actually partially visible rows and columns).
   */
  createPartiallyVisibleCalculators() {
    this.rowsPartiallyVisibleCalculator = this.createRowsCalculator(PARTIALLY_VISIBLE_TYPE);
    this.columnsPartiallyVisibleCalculator = this.createColumnsCalculator(PARTIALLY_VISIBLE_TYPE);
  }
  /**
   * Returns information whether proposedRowsVisibleCalculator viewport
   * is contained inside rows rendered in previous draw (cached in rowsRenderCalculator).
   *
   * @param {ViewportRowsCalculator} proposedRowsVisibleCalculator The instance of the viewport calculator to compare with.
   * @returns {boolean} Returns `true` if all proposed visible rows are already rendered (meaning: redraw is not needed).
   *                    Returns `false` if at least one proposed visible row is not already rendered (meaning: redraw is needed).
   */
  areAllProposedVisibleRowsAlreadyRendered(proposedRowsVisibleCalculator) {
    if (!this.rowsVisibleCalculator) {
      return false;
    }
    let {
      startRow,
      endRow
    } = proposedRowsVisibleCalculator;
    if (startRow === null && endRow === null) {
      if (!proposedRowsVisibleCalculator.isVisibleInTrimmingContainer) {
        return true;
      }
      startRow = this.rowsPartiallyVisibleCalculator.startRow;
      endRow = this.rowsPartiallyVisibleCalculator.endRow;
    }
    const {
      startRow: renderedStartRow,
      endRow: renderedEndRow
    } = this.rowsRenderCalculator;
    if (startRow < renderedStartRow || startRow === renderedStartRow && startRow > 0) {
      return false;
    } else if (endRow > renderedEndRow || endRow === renderedEndRow && endRow < this.wtSettings.getSetting("totalRows") - 1) {
      return false;
    }
    return true;
  }
  /**
   * Returns information whether proposedColumnsVisibleCalculator viewport
   * is contained inside column rendered in previous draw (cached in columnsRenderCalculator).
   *
   * @param {ViewportRowsCalculator} proposedColumnsVisibleCalculator The instance of the viewport calculator to compare with.
   * @returns {boolean} Returns `true` if all proposed visible columns are already rendered (meaning: redraw is not needed).
   *                    Returns `false` if at least one proposed visible column is not already rendered (meaning: redraw is needed).
   */
  areAllProposedVisibleColumnsAlreadyRendered(proposedColumnsVisibleCalculator) {
    if (!this.columnsVisibleCalculator) {
      return false;
    }
    let {
      startColumn,
      endColumn
    } = proposedColumnsVisibleCalculator;
    if (startColumn === null && endColumn === null) {
      if (!proposedColumnsVisibleCalculator.isVisibleInTrimmingContainer) {
        return true;
      }
      startColumn = this.columnsPartiallyVisibleCalculator.startColumn;
      endColumn = this.columnsPartiallyVisibleCalculator.endColumn;
    }
    const {
      startColumn: renderedStartColumn,
      endColumn: renderedEndColumn
    } = this.columnsRenderCalculator;
    if (startColumn < renderedStartColumn || startColumn === renderedStartColumn && startColumn > 0) {
      return false;
    } else if (endColumn > renderedEndColumn || endColumn === renderedEndColumn && endColumn < this.wtSettings.getSetting("totalColumns") - 1) {
      return false;
    }
    return true;
  }
  /**
   * Resets values in keys of the hasOversizedColumnHeadersMarked object after updateSettings.
   */
  resetHasOversizedColumnHeadersMarked() {
    objectEach(this.hasOversizedColumnHeadersMarked, (value, key, object) => {
      object[key] = void 0;
    });
  }
};
var viewport_default = Viewport;

// node_modules/handsontable/3rdparty/walkontable/src/core/core.mjs
var Walkontable = class extends CoreAbstract {
  /**
   * @param {HTMLTableElement} table Main table.
   * @param {SettingsPure} settings The Walkontable settings.
   */
  constructor(table, settings) {
    super(table, new Settings(settings));
    const facadeGetter = this.wtSettings.getSetting("facade", this);
    this.wtTable = new master_default(this.getTableDao(), facadeGetter, this.domBindings, this.wtSettings);
    this.wtViewport = new viewport_default(this.getViewportDao(), this.domBindings, this.wtSettings, this.eventManager, this.wtTable);
    this.selectionManager = new SelectionManager(this.wtSettings.getSetting("selections"));
    this.wtEvent = new event_default(facadeGetter, this.domBindings, this.wtSettings, this.eventManager, this.wtTable, this.selectionManager);
    this.wtOverlays = new overlays_default(
      // TODO create DAO and remove reference to the Walkontable instance.
      this,
      facadeGetter,
      this.domBindings,
      this.wtSettings,
      this.eventManager,
      this.wtTable
    );
    this.exportSettingsAsClassNames();
    this.findOriginalHeaders();
  }
  /**
   * Export settings as class names added to the parent element of the table.
   */
  exportSettingsAsClassNames() {
    const toExport = {
      rowHeaders: "htRowHeaders",
      columnHeaders: "htColumnHeaders"
    };
    const allClassNames = [];
    const newClassNames = [];
    objectEach(toExport, (className, key) => {
      if (this.wtSettings.getSetting(key).length) {
        newClassNames.push(className);
      }
      allClassNames.push(className);
    });
    removeClass(this.wtTable.wtRootElement.parentNode, allClassNames);
    addClass(this.wtTable.wtRootElement.parentNode, newClassNames);
  }
  /**
   * @returns {ViewportDao}
   */
  getViewportDao() {
    const wot = this;
    return {
      get wot() {
        return wot;
      },
      get topOverlayTrimmingContainer() {
        return wot.wtOverlays.topOverlay.trimmingContainer;
      },
      get inlineStartOverlayTrimmingContainer() {
        return wot.wtOverlays.inlineStartOverlay.trimmingContainer;
      },
      get topScrollPosition() {
        return wot.wtOverlays.topOverlay.getScrollPosition();
      },
      get topParentOffset() {
        return wot.wtOverlays.topOverlay.getTableParentOffset();
      },
      get inlineStartScrollPosition() {
        return wot.wtOverlays.inlineStartOverlay.getScrollPosition();
      },
      get inlineStartParentOffset() {
        return wot.wtOverlays.inlineStartOverlay.getTableParentOffset();
      },
      get topOverlay() {
        return wot.wtOverlays.topOverlay;
      },
      get inlineStartOverlay() {
        return wot.wtOverlays.inlineStartOverlay;
      },
      get bottomOverlay() {
        return wot.wtOverlays.bottomOverlay;
      }
    };
  }
};

// node_modules/handsontable/3rdparty/walkontable/src/facade/core.mjs
var WalkontableFacade = class _WalkontableFacade {
  /**
   * @param {SettingsPure|Walkontable} settingsOrInstance The Walkontable settings.
   */
  constructor(settingsOrInstance) {
    if (settingsOrInstance instanceof CoreAbstract) {
      this._wot = settingsOrInstance;
    } else {
      this._initFromSettings(settingsOrInstance);
    }
  }
  _initFromSettings(settings) {
    settings.facade = (instance) => {
      const facade = new _WalkontableFacade(instance);
      return () => facade;
    };
    this._wot = new Walkontable(settings.table, settings);
  }
  get guid() {
    return this._wot.guid;
  }
  get rootDocument() {
    return this._wot.domBindings.rootDocument;
  }
  get rootWindow() {
    return this._wot.domBindings.rootWindow;
  }
  get wtSettings() {
    return this._wot.wtSettings;
  }
  get cloneSource() {
    return this._wot.cloneSource;
  }
  get cloneOverlay() {
    return this._wot.cloneOverlay;
  }
  get selectionManager() {
    return this._wot.selectionManager;
  }
  get wtViewport() {
    return this._wot.wtViewport;
  }
  get wtOverlays() {
    return this._wot.wtOverlays;
  }
  get wtTable() {
    return this._wot.wtTable;
  }
  get wtEvent() {
    return this._wot.wtEvent;
  }
  get wtScroll() {
    return this._wot.wtScroll;
  }
  get drawn() {
    return this._wot.drawn;
  }
  set drawn(value) {
    this._wot.drawn = value;
  }
  get drawInterrupted() {
    return this._wot.drawInterrupted;
  }
  set drawInterrupted(value) {
    this._wot.drawInterrupted = value;
  }
  get lastMouseOver() {
    return this._wot.lastMouseOver;
  }
  set lastMouseOver(value) {
    this._wot.lastMouseOver = value;
  }
  get momentumScrolling() {
    return this._wot.momentumScrolling;
  }
  set momentumScrolling(value) {
    this._wot.momentumScrolling = value;
  }
  get touchApplied() {
    return this._wot.touchApplied;
  }
  set touchApplied(value) {
    this._wot.touchApplied = value;
  }
  get domBindings() {
    return this._wot.domBindings;
  }
  get eventListeners() {
    return this._wot.eventListeners;
  }
  set eventListeners(value) {
    this._wot.eventListeners = value;
  }
  get eventManager() {
    return this._wot.eventManager;
  }
  createCellCoords(row, column) {
    return this._wot.createCellCoords(row, column);
  }
  createCellRange(highlight, from, to) {
    return this._wot.createCellRange(highlight, from, to);
  }
  draw() {
    let fastDraw = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    this._wot.draw(fastDraw);
    return this;
  }
  getCell(coords) {
    let topmost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return this._wot.getCell(coords, topmost);
  }
  scrollViewport(coords, snapToTop, snapToRight, snapToBottom, snapToLeft) {
    return this._wot.scrollViewport(coords, snapToTop, snapToRight, snapToBottom, snapToLeft);
  }
  scrollViewportHorizontally(column, snapToRight, snapToLeft) {
    return this._wot.scrollViewportHorizontally(column, snapToRight, snapToLeft);
  }
  scrollViewportVertically(row, snapToTop, snapToBottom) {
    return this._wot.scrollViewportVertically(row, snapToTop, snapToBottom);
  }
  getViewport() {
    return this._wot.getViewport();
  }
  getOverlayName() {
    return this._wot.cloneOverlay ? this._wot.cloneOverlay.type : "master";
  }
  exportSettingsAsClassNames() {
    return this._wot.exportSettingsAsClassNames();
  }
  update(settings, value) {
    this._wot.wtSettings.update(settings, value);
    return this;
  }
  getSetting(key, param1, param2, param3, param4) {
    return this._wot.wtSettings.getSetting(key, param1, param2, param3, param4);
  }
  hasSetting(key) {
    return this._wot.wtSettings.hasSetting(key);
  }
  destroy() {
    this._wot.destroy();
  }
};

// node_modules/handsontable/cellTypes/registry.mjs
var {
  register: register4,
  getItem: getItem4,
  hasItem: hasItem4,
  getNames: getNames4,
  getValues: getValues4
} = staticRegister("cellTypes");
function _getItem4(name) {
  if (!hasItem4(name)) {
    throw Error(`You declared cell type "${name}" as a string that is not mapped to a known object.
                 Cell type must be an object or a string mapped to an object registered by
                 "Handsontable.cellTypes.registerCellType" method`);
  }
  return getItem4(name);
}
function _register4(name, type) {
  if (typeof name !== "string") {
    type = name;
    name = type.CELL_TYPE;
  }
  const {
    editor,
    renderer,
    validator
  } = type;
  if (editor) {
    _register(name, editor);
  }
  if (renderer) {
    _register2(name, renderer);
  }
  if (validator) {
    _register3(name, validator);
  }
  register4(name, type);
}

// node_modules/handsontable/mixins/hooksRefRegisterer.mjs
var MIXIN_NAME7 = "hooksRefRegisterer";
var hooksRefRegisterer = {
  /**
   * Internal hooks storage.
   */
  _hooksStorage: /* @__PURE__ */ Object.create(null),
  /**
   * Add hook to the collection.
   *
   * @param {string} key The hook name.
   * @param {Function} callback The hook callback.
   * @returns {object}
   */
  addHook(key, callback) {
    if (!this._hooksStorage[key]) {
      this._hooksStorage[key] = [];
    }
    this.hot.addHook(key, callback);
    this._hooksStorage[key].push(callback);
    return this;
  },
  /**
   * Remove all hooks listeners by hook name.
   *
   * @param {string} key The hook name.
   */
  removeHooksByKey(key) {
    arrayEach(this._hooksStorage[key] || [], (callback) => {
      this.hot.removeHook(key, callback);
    });
  },
  /**
   * Clear all added hooks.
   */
  clearHooks() {
    objectEach(this._hooksStorage, (callbacks, name) => this.removeHooksByKey(name));
    this._hooksStorage = {};
  }
};
defineGetter(hooksRefRegisterer, "MIXIN_NAME", MIXIN_NAME7, {
  writable: false,
  enumerable: false
});
var hooksRefRegisterer_default = hooksRefRegisterer;

// node_modules/handsontable/editors/baseEditor/baseEditor.mjs
function _defineProperty33(obj, key, value) {
  key = _toPropertyKey33(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey33(t) {
  var i = _toPrimitive33(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive33(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var EDITOR_TYPE = "base";
var EDITOR_STATE = Object.freeze({
  VIRGIN: "STATE_VIRGIN",
  // before editing
  EDITING: "STATE_EDITING",
  WAITING: "STATE_WAITING",
  // waiting for async validation
  FINISHED: "STATE_FINISHED"
});
var BaseEditor = class {
  static get EDITOR_TYPE() {
    return EDITOR_TYPE;
  }
  /**
   * A reference to the source instance of the Handsontable.
   *
   * @type {Handsontable}
   */
  /**
   * @param {Handsontable} hotInstance A reference to the source instance of the Handsontable.
   */
  constructor(hotInstance) {
    _defineProperty33(this, "hot", void 0);
    _defineProperty33(this, "state", EDITOR_STATE.VIRGIN);
    _defineProperty33(this, "_opened", false);
    _defineProperty33(this, "_fullEditMode", false);
    _defineProperty33(this, "_closeCallback", null);
    _defineProperty33(this, "TD", null);
    _defineProperty33(this, "row", null);
    _defineProperty33(this, "col", null);
    _defineProperty33(this, "prop", null);
    _defineProperty33(this, "originalValue", null);
    _defineProperty33(this, "cellProperties", null);
    this.hot = hotInstance;
    this.init();
  }
  /**
   * Fires callback after closing editor.
   *
   * @private
   * @param {boolean} result The editor value.
   */
  _fireCallbacks(result) {
    if (this._closeCallback) {
      this._closeCallback(result);
      this._closeCallback = null;
    }
  }
  /**
   * Initializes an editor's intance.
   */
  init() {
  }
  /**
   * Required method to get current value from editable element.
   */
  getValue() {
    throw Error("Editor getValue() method unimplemented");
  }
  /**
   * Required method to set new value into editable element.
   */
  setValue() {
    throw Error("Editor setValue() method unimplemented");
  }
  /**
   * Required method to open editor.
   */
  open() {
    throw Error("Editor open() method unimplemented");
  }
  /**
   * Required method to close editor.
   */
  close() {
    throw Error("Editor close() method unimplemented");
  }
  /**
   * Prepares editor's meta data.
   *
   * @param {number} row The visual row index.
   * @param {number} col The visual column index.
   * @param {number|string} prop The column property (passed when datasource is an array of objects).
   * @param {HTMLTableCellElement} td The rendered cell element.
   * @param {*} value The rendered value.
   * @param {object} cellProperties The cell meta object (see {@link Core#getCellMeta}).
   */
  prepare(row, col, prop, td, value, cellProperties) {
    this.TD = td;
    this.row = row;
    this.col = col;
    this.prop = prop;
    this.originalValue = value;
    this.cellProperties = cellProperties;
    this.state = this.isOpened() ? this.state : EDITOR_STATE.VIRGIN;
  }
  /**
   * Fallback method to provide extendable editors in ES5.
   *
   * @returns {Function}
   */
  extend() {
    return class Editor extends this.constructor {
    };
  }
  /**
   * Saves value from editor into data storage.
   *
   * @param {*} value The editor value.
   * @param {boolean} ctrlDown If `true`, applies value to each cell in the last selected range.
   */
  saveValue(value, ctrlDown) {
    let visualRowFrom;
    let visualColumnFrom;
    let visualRowTo;
    let visualColumnTo;
    if (ctrlDown) {
      const selectedLast = this.hot.getSelectedLast();
      visualRowFrom = Math.max(Math.min(selectedLast[0], selectedLast[2]), 0);
      visualColumnFrom = Math.max(Math.min(selectedLast[1], selectedLast[3]), 0);
      visualRowTo = Math.max(selectedLast[0], selectedLast[2]);
      visualColumnTo = Math.max(selectedLast[1], selectedLast[3]);
    } else {
      [visualRowFrom, visualColumnFrom, visualRowTo, visualColumnTo] = [this.row, this.col, null, null];
    }
    const modifiedCellCoords = this.hot.runHooks("modifyGetCellCoords", visualRowFrom, visualColumnFrom);
    if (Array.isArray(modifiedCellCoords)) {
      [visualRowFrom, visualColumnFrom] = modifiedCellCoords;
    }
    this.hot.populateFromArray(visualRowFrom, visualColumnFrom, value, visualRowTo, visualColumnTo, "edit");
  }
  /**
   * Begins editing on a highlighted cell and hides fillHandle corner if was present.
   *
   * @param {*} newInitialValue The initial editor value.
   * @param {Event} event The keyboard event object.
   */
  beginEditing(newInitialValue, event) {
    if (this.state !== EDITOR_STATE.VIRGIN) {
      return;
    }
    const hotInstance = this.hot;
    const renderableRowIndex = hotInstance.rowIndexMapper.getRenderableFromVisualIndex(this.row);
    const renderableColumnIndex = hotInstance.columnIndexMapper.getRenderableFromVisualIndex(this.col);
    hotInstance.view.scrollViewport(hotInstance._createCellCoords(renderableRowIndex, renderableColumnIndex));
    this.state = EDITOR_STATE.EDITING;
    if (this.isInFullEditMode()) {
      const stringifiedInitialValue = typeof newInitialValue === "string" ? newInitialValue : stringify(this.originalValue);
      this.setValue(stringifiedInitialValue);
    }
    this.open(event);
    this._opened = true;
    this.focus();
    hotInstance.view.render();
    hotInstance.runHooks("afterBeginEditing", this.row, this.col);
  }
  /**
   * Finishes editing and start saving or restoring process for editing cell or last selected range.
   *
   * @param {boolean} restoreOriginalValue If true, then closes editor without saving value from the editor into a cell.
   * @param {boolean} ctrlDown If true, then saveValue will save editor's value to each cell in the last selected range.
   * @param {Function} callback The callback function, fired after editor closing.
   */
  finishEditing(restoreOriginalValue, ctrlDown, callback) {
    let val;
    if (callback) {
      const previousCloseCallback = this._closeCallback;
      this._closeCallback = (result) => {
        if (previousCloseCallback) {
          previousCloseCallback(result);
        }
        callback(result);
        this.hot.view.render();
      };
    }
    if (this.isWaiting()) {
      return;
    }
    if (this.state === EDITOR_STATE.VIRGIN) {
      this.hot._registerTimeout(() => {
        this._fireCallbacks(true);
      });
      return;
    }
    if (this.state === EDITOR_STATE.EDITING) {
      if (restoreOriginalValue) {
        this.cancelChanges();
        this.hot.view.render();
        return;
      }
      const value = this.getValue();
      if (this.cellProperties.trimWhitespace) {
        val = [[typeof value === "string" ? String.prototype.trim.call(value || "") : value]];
      } else {
        val = [[value]];
      }
      this.state = EDITOR_STATE.WAITING;
      this.saveValue(val, ctrlDown);
      if (this.hot.getCellValidator(this.cellProperties)) {
        this.hot.addHookOnce("postAfterValidate", (result) => {
          this.state = EDITOR_STATE.FINISHED;
          this.discardEditor(result);
        });
      } else {
        this.state = EDITOR_STATE.FINISHED;
        this.discardEditor(true);
      }
    }
  }
  /**
   * Finishes editing without singout saving value.
   */
  cancelChanges() {
    this.state = EDITOR_STATE.FINISHED;
    this.discardEditor();
  }
  /**
   * Verifies result of validation or closes editor if user's cancelled changes.
   *
   * @param {boolean|undefined} result If `false` and the cell using allowInvalid option,
   *                                   then an editor won't be closed until validation is passed.
   */
  discardEditor(result) {
    if (this.state !== EDITOR_STATE.FINISHED) {
      return;
    }
    if (result === false && this.cellProperties.allowInvalid !== true) {
      this.hot.selectCell(this.row, this.col);
      this.focus();
      this.state = EDITOR_STATE.EDITING;
      this._fireCallbacks(false);
    } else {
      this.close();
      this._opened = false;
      this._fullEditMode = false;
      this.state = EDITOR_STATE.VIRGIN;
      this._fireCallbacks(true);
      const shortcutManager = this.hot.getShortcutManager();
      shortcutManager.setActiveContextName("grid");
    }
  }
  /**
   * Switch editor into full edit mode. In this state navigation keys don't close editor. This mode is activated
   * automatically after hit ENTER or F2 key on the cell or while editing cell press F2 key.
   */
  enableFullEditMode() {
    this._fullEditMode = true;
  }
  /**
   * Checks if editor is in full edit mode.
   *
   * @returns {boolean}
   */
  isInFullEditMode() {
    return this._fullEditMode;
  }
  /**
   * Returns information whether the editor is open.
   *
   * @returns {boolean}
   */
  isOpened() {
    return this._opened;
  }
  /**
   * Returns information whether the editor is waiting, eg.: for async validation.
   *
   * @returns {boolean}
   */
  isWaiting() {
    return this.state === EDITOR_STATE.WAITING;
  }
  /* eslint-disable jsdoc/require-description-complete-sentence */
  /**
   * Gets the object that provides information about the edited cell size and its position
   * relative to the table viewport.
   *
   * The rectangle has six integer properties:
   *  - `top` The top position relative to the table viewport
   *  - `start` The left (or right in RTL) position relative to the table viewport
   *  - `width` The cell's current width;
   *  - `maxWidth` The maximum cell's width after which the editor goes out of the table viewport
   *  - `height` The cell's current height;
   *  - `maxHeight` The maximum cell's height after which the editor goes out of the table viewport
   *
   * @returns {{top: number, start: number, width: number, maxWidth: number, height: number, maxHeight: number} | undefined}
   */
  getEditedCellRect() {
    var _wtOverlays$getParent;
    const TD = this.getEditedCell();
    if (!TD) {
      return;
    }
    const {
      wtOverlays,
      wtViewport
    } = this.hot.view._wt;
    const rootWindow = this.hot.rootWindow;
    const currentOffset = offset(TD);
    const cellWidth = outerWidth(TD);
    const containerOffset = offset(this.hot.rootElement);
    const containerWidth = outerWidth(this.hot.rootElement);
    const scrollableContainerTop = wtOverlays.topOverlay.holder;
    const scrollableContainerLeft = wtOverlays.inlineStartOverlay.holder;
    const containerScrollTop = scrollableContainerTop !== rootWindow ? scrollableContainerTop.scrollTop : 0;
    const containerScrollLeft = scrollableContainerLeft !== rootWindow ? scrollableContainerLeft.scrollLeft : 0;
    const gridMostRightPos = rootWindow.innerWidth - containerOffset.left - containerWidth;
    const {
      wtTable: overlayTable
    } = (_wtOverlays$getParent = wtOverlays.getParentOverlay(TD)) !== null && _wtOverlays$getParent !== void 0 ? _wtOverlays$getParent : this.hot.view._wt;
    const overlayName = overlayTable.name;
    const scrollTop = ["master", "inline_start"].includes(overlayName) ? containerScrollTop : 0;
    const scrollLeft = ["master", "top", "bottom"].includes(overlayName) ? containerScrollLeft : 0;
    const editTopModifier = currentOffset.top === containerOffset.top ? 0 : 1;
    let topPos = currentOffset.top - containerOffset.top - editTopModifier - scrollTop;
    let inlineStartPos = 0;
    if (this.hot.isRtl()) {
      inlineStartPos = rootWindow.innerWidth - currentOffset.left - cellWidth - gridMostRightPos - 1 + scrollLeft;
    } else {
      inlineStartPos = currentOffset.left - containerOffset.left - 1 - scrollLeft;
    }
    if (["top", "top_inline_start_corner"].includes(overlayName)) {
      topPos += wtOverlays.topOverlay.getOverlayOffset();
    }
    if (["inline_start", "top_inline_start_corner"].includes(overlayName)) {
      inlineStartPos += Math.abs(wtOverlays.inlineStartOverlay.getOverlayOffset());
    }
    const hasColumnHeaders = this.hot.hasColHeaders();
    const renderableRow = this.hot.rowIndexMapper.getRenderableFromVisualIndex(this.row);
    const renderableColumn = this.hot.columnIndexMapper.getRenderableFromVisualIndex(this.col);
    const nrOfRenderableRowIndexes = this.hot.rowIndexMapper.getRenderableIndexesLength();
    const firstRowIndexOfTheBottomOverlay = nrOfRenderableRowIndexes - this.hot.view._wt.getSetting("fixedRowsBottom");
    if (hasColumnHeaders && renderableRow <= 0 || renderableRow === firstRowIndexOfTheBottomOverlay) {
      topPos += 1;
    }
    if (renderableColumn <= 0) {
      inlineStartPos += 1;
    }
    const firstRowOffset = wtViewport.rowsRenderCalculator.startPosition;
    const firstColumnOffset = wtViewport.columnsRenderCalculator.startPosition;
    const horizontalScrollPosition = Math.abs(wtOverlays.inlineStartOverlay.getScrollPosition());
    const verticalScrollPosition = wtOverlays.topOverlay.getScrollPosition();
    const scrollbarWidth = getScrollbarWidth(this.hot.rootDocument);
    let cellTopOffset = TD.offsetTop;
    if (["inline_start", "master"].includes(overlayName)) {
      cellTopOffset += firstRowOffset - verticalScrollPosition;
    }
    if (["bottom", "bottom_inline_start_corner"].includes(overlayName)) {
      const {
        wtViewport: bottomWtViewport,
        wtTable: bottomWtTable
      } = wtOverlays.bottomOverlay.clone;
      cellTopOffset += bottomWtViewport.getWorkspaceHeight() - bottomWtTable.getHeight() - scrollbarWidth;
    }
    let cellStartOffset = TD.offsetLeft;
    if (this.hot.isRtl()) {
      if (cellStartOffset >= 0) {
        cellStartOffset = overlayTable.getWidth() - TD.offsetLeft;
      } else {
        cellStartOffset = Math.abs(cellStartOffset);
      }
      cellStartOffset += firstColumnOffset - horizontalScrollPosition - cellWidth;
    } else if (["top", "master", "bottom"].includes(overlayName)) {
      cellStartOffset += firstColumnOffset - horizontalScrollPosition;
    }
    const cellComputedStyle = getComputedStyle(this.TD, this.hot.rootWindow);
    const borderPhysicalWidthProp = this.hot.isRtl() ? "borderRightWidth" : "borderLeftWidth";
    const inlineStartBorderCompensation = parseInt(cellComputedStyle[borderPhysicalWidthProp], 10) > 0 ? 0 : 1;
    const topBorderCompensation = parseInt(cellComputedStyle.borderTopWidth, 10) > 0 ? 0 : 1;
    const width = outerWidth(TD) + inlineStartBorderCompensation;
    const height = outerHeight(TD) + topBorderCompensation;
    const actualVerticalScrollbarWidth = hasVerticalScrollbar(scrollableContainerTop) ? scrollbarWidth : 0;
    const actualHorizontalScrollbarWidth = hasHorizontalScrollbar(scrollableContainerLeft) ? scrollbarWidth : 0;
    const maxWidth = this.hot.view.maximumVisibleElementWidth(cellStartOffset) - actualVerticalScrollbarWidth + inlineStartBorderCompensation;
    const maxHeight = Math.max(this.hot.view.maximumVisibleElementHeight(cellTopOffset) - actualHorizontalScrollbarWidth + topBorderCompensation, 23);
    return {
      top: topPos,
      start: inlineStartPos,
      height,
      maxHeight,
      width,
      maxWidth
    };
  }
  /* eslint-enable jsdoc/require-description-complete-sentence */
  /**
   * Gets className of the edited cell if exist.
   *
   * @returns {string}
   */
  getEditedCellsLayerClass() {
    const editorSection = this.checkEditorSection();
    switch (editorSection) {
      case "inline-start":
        return "ht_clone_left ht_clone_inline_start";
      case "bottom":
        return "ht_clone_bottom";
      case "bottom-inline-start-corner":
        return "ht_clone_bottom_left_corner ht_clone_bottom_inline_start_corner";
      case "top":
        return "ht_clone_top";
      case "top-inline-start-corner":
        return "ht_clone_top_left_corner ht_clone_top_inline_start_corner";
      default:
        return "ht_clone_master";
    }
  }
  /**
   * Gets HTMLTableCellElement of the edited cell if exist.
   *
   * @returns {HTMLTableCellElement|null}
   */
  getEditedCell() {
    return this.hot.getCell(this.row, this.col, true);
  }
  /**
   * Returns name of the overlay, where editor is placed.
   *
   * @private
   * @returns {string}
   */
  checkEditorSection() {
    const totalRows = this.hot.countRows();
    let section = "";
    if (this.row < this.hot.getSettings().fixedRowsTop) {
      if (this.col < this.hot.getSettings().fixedColumnsStart) {
        section = "top-inline-start-corner";
      } else {
        section = "top";
      }
    } else if (this.hot.getSettings().fixedRowsBottom && this.row >= totalRows - this.hot.getSettings().fixedRowsBottom) {
      if (this.col < this.hot.getSettings().fixedColumnsStart) {
        section = "bottom-inline-start-corner";
      } else {
        section = "bottom";
      }
    } else if (this.col < this.hot.getSettings().fixedColumnsStart) {
      section = "inline-start";
    }
    return section;
  }
};
mixin(BaseEditor, hooksRefRegisterer_default);

// node_modules/handsontable/utils/autoResize.mjs
function observe(element, eventName, handler) {
  element.addEventListener(eventName, handler, false);
}
function unObserve(element, eventName, handler) {
  element.removeEventListener(eventName, handler, false);
}
function getComputedStyle2(element) {
  return element.ownerDocument.defaultView.getComputedStyle(element);
}
function createInputElementResizer(ownerDocument) {
  const defaults = {
    minHeight: 200,
    maxHeight: 300,
    minWidth: 100,
    maxWidth: 300
  };
  const body = ownerDocument.body;
  const textHolder = ownerDocument.createTextNode("");
  const textContainer = ownerDocument.createElement("span");
  let observedElement;
  function resize() {
    textHolder.textContent = observedElement.value;
    textContainer.style.position = "absolute";
    textContainer.style.fontSize = getComputedStyle2(observedElement).fontSize;
    textContainer.style.fontFamily = getComputedStyle2(observedElement).fontFamily;
    textContainer.style.whiteSpace = "pre";
    body.appendChild(textContainer);
    const width = textContainer.clientWidth + 2;
    body.removeChild(textContainer);
    const elementStyle = observedElement.style;
    elementStyle.height = `${defaults.minHeight}px`;
    if (defaults.minWidth > width) {
      elementStyle.width = `${defaults.minWidth}px`;
    } else if (width > defaults.maxWidth) {
      elementStyle.width = `${defaults.maxWidth}px`;
    } else {
      elementStyle.width = `${width}px`;
    }
    const scrollHeight = observedElement.scrollHeight ? observedElement.scrollHeight - 1 : 0;
    if (defaults.minHeight > scrollHeight) {
      elementStyle.height = `${defaults.minHeight}px`;
    } else if (defaults.maxHeight < scrollHeight) {
      elementStyle.height = `${defaults.maxHeight}px`;
      elementStyle.overflowY = "visible";
    } else {
      elementStyle.height = `${scrollHeight}px`;
    }
  }
  function delayedResize() {
    ownerDocument.defaultView.setTimeout(resize, 0);
  }
  function extendDefaults(config) {
    if (config && config.minHeight) {
      if (config.minHeight === "inherit") {
        defaults.minHeight = observedElement.clientHeight;
      } else {
        const minHeight = parseInt(config.minHeight, 10);
        if (!isNaN(minHeight)) {
          defaults.minHeight = minHeight;
        }
      }
    }
    if (config && config.maxHeight) {
      if (config.maxHeight === "inherit") {
        defaults.maxHeight = observedElement.clientHeight;
      } else {
        const maxHeight = parseInt(config.maxHeight, 10);
        if (!isNaN(maxHeight)) {
          defaults.maxHeight = maxHeight;
        }
      }
    }
    if (config && config.minWidth) {
      if (config.minWidth === "inherit") {
        defaults.minWidth = observedElement.clientWidth;
      } else {
        const minWidth = parseInt(config.minWidth, 10);
        if (!isNaN(minWidth)) {
          defaults.minWidth = minWidth;
        }
      }
    }
    if (config && config.maxWidth) {
      if (config.maxWidth === "inherit") {
        defaults.maxWidth = observedElement.clientWidth;
      } else {
        const maxWidth = parseInt(config.maxWidth, 10);
        if (!isNaN(maxWidth)) {
          defaults.maxWidth = maxWidth;
        }
      }
    }
    if (!textContainer.firstChild) {
      textContainer.className = "autoResize";
      textContainer.style.display = "inline-block";
      textContainer.appendChild(textHolder);
    }
  }
  function init(elementToObserve, config) {
    let doObserve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    observedElement = elementToObserve;
    extendDefaults(config);
    if (observedElement.nodeName === "TEXTAREA") {
      observedElement.style.resize = "none";
      observedElement.style.height = `${defaults.minHeight}px`;
      observedElement.style.minWidth = `${defaults.minWidth}px`;
      observedElement.style.maxWidth = `${defaults.maxWidth}px`;
      observedElement.style.overflowY = "hidden";
    }
    if (doObserve) {
      observe(observedElement, "input", resize);
      observe(observedElement, "keydown", delayedResize);
    }
    resize();
  }
  return {
    init,
    resize,
    unObserve() {
      unObserve(observedElement, "input", resize);
      unObserve(observedElement, "keydown", delayedResize);
    }
  };
}

// node_modules/handsontable/editors/textEditor/caretPositioner.mjs
function updateCaretPosition(actionName, textareaElement) {
  const caretPosition = getCaretPosition(textareaElement);
  const textLines = textareaElement.value.split("\n");
  let newCaretPosition = caretPosition;
  let lineStartIndex = 0;
  for (let i = 0; i < textLines.length; i++) {
    const textLine = textLines[i];
    if (i !== 0) {
      lineStartIndex += textLines[i - 1].length + 1;
    }
    const lineEndIndex = lineStartIndex + textLine.length;
    if (actionName === "home") {
      newCaretPosition = lineStartIndex;
    } else if (actionName === "end") {
      newCaretPosition = lineEndIndex;
    }
    if (caretPosition <= lineEndIndex) {
      break;
    }
  }
  setCaretPosition(textareaElement, newCaretPosition);
}

// node_modules/handsontable/editors/textEditor/textEditor.mjs
function _defineProperty34(obj, key, value) {
  key = _toPropertyKey34(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey34(t) {
  var i = _toPrimitive34(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive34(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var EDITOR_VISIBLE_CLASS_NAME = "ht_editor_visible";
var EDITOR_HIDDEN_CLASS_NAME = "ht_editor_hidden";
var SHORTCUTS_GROUP = "textEditor";
var EDITOR_TYPE2 = "text";
var TextEditor = class extends BaseEditor {
  static get EDITOR_TYPE() {
    return EDITOR_TYPE2;
  }
  /**
   * Instance of {@link EventManager}.
   *
   * @private
   * @type {EventManager}
   */
  /**
   * @param {Core} hotInstance The Handsontable instance.
   */
  constructor(hotInstance) {
    super(hotInstance);
    _defineProperty34(this, "eventManager", new eventManager_default(this));
    _defineProperty34(this, "autoResize", createInputElementResizer(this.hot.rootDocument));
    _defineProperty34(this, "TEXTAREA", void 0);
    _defineProperty34(this, "textareaStyle", void 0);
    _defineProperty34(this, "TEXTAREA_PARENT", void 0);
    _defineProperty34(this, "textareaParentStyle", void 0);
    _defineProperty34(this, "layerClass", void 0);
    this.eventManager = new eventManager_default(this);
    this.createElements();
    this.bindEvents();
    this.hot.addHookOnce("afterDestroy", () => this.destroy());
  }
  /**
   * Gets current value from editable element.
   *
   * @returns {number}
   */
  getValue() {
    return this.TEXTAREA.value;
  }
  /**
   * Sets new value into editable element.
   *
   * @param {*} newValue The editor value.
   */
  setValue(newValue) {
    this.TEXTAREA.value = newValue;
  }
  /**
   * Opens the editor and adjust its size.
   */
  open() {
    this.refreshDimensions();
    this.showEditableElement();
    this.hot.getShortcutManager().setActiveContextName("editor");
    this.registerShortcuts();
  }
  /**
   * Closes the editor.
   */
  close() {
    this.autoResize.unObserve();
    if (isThisHotChild(this.hot.rootDocument.activeElement, this.hot.rootElement)) {
      this.hot.listen();
    }
    this.hideEditableElement();
    this.unregisterShortcuts();
  }
  /**
   * Prepares editor's meta data.
   *
   * @param {number} row The visual row index.
   * @param {number} col The visual column index.
   * @param {number|string} prop The column property (passed when datasource is an array of objects).
   * @param {HTMLTableCellElement} td The rendered cell element.
   * @param {*} value The rendered value.
   * @param {object} cellProperties The cell meta object (see {@link Core#getCellMeta}).
   */
  prepare(row, col, prop, td, value, cellProperties) {
    const previousState = this.state;
    super.prepare(row, col, prop, td, value, cellProperties);
    if (!cellProperties.readOnly) {
      this.refreshDimensions(true);
      const {
        allowInvalid
      } = cellProperties;
      if (allowInvalid && !this.isOpened()) {
        this.TEXTAREA.value = "";
      }
      if (previousState !== EDITOR_STATE.FINISHED && !this.isOpened()) {
        this.hideEditableElement();
      }
    }
  }
  /**
   * Begins editing on a highlighted cell and hides fillHandle corner if was present.
   *
   * @param {*} newInitialValue The editor initial value.
   * @param {Event} event The keyboard event object.
   */
  beginEditing(newInitialValue, event) {
    if (this.state !== EDITOR_STATE.VIRGIN) {
      return;
    }
    this.TEXTAREA.value = "";
    super.beginEditing(newInitialValue, event);
  }
  /**
   * Sets focus state on the select element.
   */
  focus() {
    this.TEXTAREA.select();
    setCaretPosition(this.TEXTAREA, this.TEXTAREA.value.length);
  }
  /**
   * Creates an editor's elements and adds necessary CSS classnames.
   */
  createElements() {
    const {
      rootDocument
    } = this.hot;
    this.TEXTAREA = rootDocument.createElement("TEXTAREA");
    setAttribute(this.TEXTAREA, [["data-hot-input", ""], A11Y_TABINDEX(-1)]);
    if (this.hot.getSettings().ariaTags) {
      setAttribute(this.TEXTAREA, [A11Y_HIDDEN()]);
    }
    addClass(this.TEXTAREA, "handsontableInput");
    this.textareaStyle = this.TEXTAREA.style;
    this.textareaStyle.width = 0;
    this.textareaStyle.height = 0;
    this.textareaStyle.overflowY = "visible";
    this.TEXTAREA_PARENT = rootDocument.createElement("DIV");
    addClass(this.TEXTAREA_PARENT, "handsontableInputHolder");
    if (hasClass(this.TEXTAREA_PARENT, this.layerClass)) {
      removeClass(this.TEXTAREA_PARENT, this.layerClass);
    }
    addClass(this.TEXTAREA_PARENT, EDITOR_HIDDEN_CLASS_NAME);
    this.textareaParentStyle = this.TEXTAREA_PARENT.style;
    this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
    this.hot.rootElement.appendChild(this.TEXTAREA_PARENT);
  }
  /**
   * Moves an editable element out of the viewport, but element must be able to hold focus for IME support.
   *
   * @private
   */
  hideEditableElement() {
    if (isEdge()) {
      this.textareaStyle.textIndent = "-99999px";
    }
    this.textareaStyle.overflowY = "visible";
    this.textareaParentStyle.opacity = "0";
    this.textareaParentStyle.height = "1px";
    removeClass(this.TEXTAREA_PARENT, this.layerClass);
    addClass(this.TEXTAREA_PARENT, EDITOR_HIDDEN_CLASS_NAME);
  }
  /**
   * Resets an editable element position.
   *
   * @private
   */
  showEditableElement() {
    this.textareaParentStyle.height = "";
    this.textareaParentStyle.overflow = "";
    this.textareaParentStyle.position = "";
    this.textareaParentStyle[this.hot.isRtl() ? "left" : "right"] = "auto";
    this.textareaParentStyle.opacity = "1";
    this.textareaStyle.textIndent = "";
    const childNodes = this.TEXTAREA_PARENT.childNodes;
    let hasClassHandsontableEditor = false;
    rangeEach(childNodes.length - 1, (index2) => {
      const childNode = childNodes[index2];
      if (hasClass(childNode, "handsontableEditor")) {
        hasClassHandsontableEditor = true;
        return false;
      }
    });
    if (hasClass(this.TEXTAREA_PARENT, EDITOR_HIDDEN_CLASS_NAME)) {
      removeClass(this.TEXTAREA_PARENT, EDITOR_HIDDEN_CLASS_NAME);
    }
    if (hasClassHandsontableEditor) {
      this.layerClass = EDITOR_VISIBLE_CLASS_NAME;
      addClass(this.TEXTAREA_PARENT, this.layerClass);
    } else {
      this.layerClass = this.getEditedCellsLayerClass();
      addClass(this.TEXTAREA_PARENT, this.layerClass);
    }
  }
  /**
   * Refreshes editor's value using source data.
   *
   * @private
   */
  refreshValue() {
    const physicalRow = this.hot.toPhysicalRow(this.row);
    const sourceData = this.hot.getSourceDataAtCell(physicalRow, this.col);
    this.originalValue = sourceData;
    this.setValue(sourceData);
    this.refreshDimensions();
  }
  /**
   * Refreshes editor's size and position.
   *
   * @private
   * @param {boolean} force Indicates if the refreshing editor dimensions should be triggered.
   */
  refreshDimensions() {
    let force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (this.state !== EDITOR_STATE.EDITING && !force) {
      return;
    }
    this.TD = this.getEditedCell();
    if (!this.TD) {
      if (!force) {
        this.close();
      }
      return;
    }
    const {
      top,
      start,
      width,
      maxWidth,
      height,
      maxHeight
    } = this.getEditedCellRect();
    this.textareaParentStyle.top = `${top}px`;
    this.textareaParentStyle[this.hot.isRtl() ? "right" : "left"] = `${start}px`;
    this.showEditableElement();
    const cellComputedStyle = getComputedStyle(this.TD, this.hot.rootWindow);
    this.TEXTAREA.style.fontSize = cellComputedStyle.fontSize;
    this.TEXTAREA.style.fontFamily = cellComputedStyle.fontFamily;
    this.TEXTAREA.style.backgroundColor = this.TD.style.backgroundColor;
    const textareaComputedStyle = getComputedStyle(this.TEXTAREA);
    const horizontalPadding = parseInt(textareaComputedStyle.paddingLeft, 10) + parseInt(textareaComputedStyle.paddingRight, 10);
    const verticalPadding = parseInt(textareaComputedStyle.paddingTop, 10) + parseInt(textareaComputedStyle.paddingBottom, 10);
    const finalWidth = width - horizontalPadding;
    const finalHeight = height - verticalPadding;
    const finalMaxWidth = maxWidth - horizontalPadding;
    const finalMaxHeight = maxHeight - verticalPadding;
    this.autoResize.init(this.TEXTAREA, {
      minWidth: Math.min(finalWidth, finalMaxWidth),
      minHeight: Math.min(finalHeight, finalMaxHeight),
      // TEXTAREA should never be wider than visible part of the viewport (should not cover the scrollbar)
      maxWidth: finalMaxWidth,
      maxHeight: finalMaxHeight
    }, true);
  }
  /**
   * Binds events and hooks.
   *
   * @private
   */
  bindEvents() {
    if (isIOS()) {
      this.eventManager.addEventListener(this.TEXTAREA, "focusout", () => this.finishEditing(false));
    }
    this.addHook("afterScrollHorizontally", () => this.refreshDimensions());
    this.addHook("afterScrollVertically", () => this.refreshDimensions());
    this.addHook("afterColumnResize", () => {
      this.refreshDimensions();
      if (this.state === EDITOR_STATE.EDITING) {
        this.focus();
      }
    });
    this.addHook("afterRowResize", () => {
      this.refreshDimensions();
      if (this.state === EDITOR_STATE.EDITING) {
        this.focus();
      }
    });
  }
  /**
   * Ugly hack for autocompleteEditor.
   *
   * @private
   */
  allowKeyEventPropagation() {
  }
  /**
   * Destroys the internal event manager and clears attached hooks.
   *
   * @private
   */
  destroy() {
    this.eventManager.destroy();
    this.clearHooks();
  }
  /**
   * Register shortcuts responsible for handling editor.
   *
   * @private
   */
  registerShortcuts() {
    const shortcutManager = this.hot.getShortcutManager();
    const editorContext = shortcutManager.getContext("editor");
    const contextConfig = {
      runOnlyIf: () => isDefined(this.hot.getSelected()),
      group: SHORTCUTS_GROUP
    };
    const insertNewLine = () => {
      this.hot.rootDocument.execCommand("insertText", false, "\n");
    };
    editorContext.addShortcuts([{
      keys: [["Control", "Enter"]],
      callback: () => {
        insertNewLine();
        return false;
      },
      runOnlyIf: (event) => !this.hot.selection.isMultiple() && // We trigger a data population for multiple selection.
      // catch CTRL but not right ALT (which in some systems triggers ALT+CTRL)
      !event.altKey
    }, {
      keys: [["Meta", "Enter"]],
      callback: () => {
        insertNewLine();
        return false;
      },
      runOnlyIf: () => !this.hot.selection.isMultiple()
      // We trigger a data population for multiple selection.
    }, {
      keys: [["Alt", "Enter"]],
      callback: () => {
        insertNewLine();
        return false;
      }
    }, {
      keys: [["Home"]],
      callback: (event, _ref) => {
        let [keyName] = _ref;
        updateCaretPosition(keyName, this.TEXTAREA);
      }
    }, {
      keys: [["End"]],
      callback: (event, _ref2) => {
        let [keyName] = _ref2;
        updateCaretPosition(keyName, this.TEXTAREA);
      }
    }], contextConfig);
  }
  /**
   * Unregister shortcuts responsible for handling editor.
   *
   * @private
   */
  unregisterShortcuts() {
    const shortcutManager = this.hot.getShortcutManager();
    const editorContext = shortcutManager.getContext("editor");
    editorContext.removeShortcutsByGroup(SHORTCUTS_GROUP);
  }
};

// node_modules/handsontable/renderers/baseRenderer/baseRenderer.mjs
var RENDERER_TYPE = "base";
function baseRenderer(hotInstance, TD, row, col, prop, value, cellProperties) {
  const ariaEnabled = cellProperties.ariaTags;
  const classesToAdd = [];
  const classesToRemove = [];
  const attributesToRemove = [];
  const attributesToAdd = [];
  if (cellProperties.className) {
    addClass(TD, cellProperties.className);
  }
  if (cellProperties.readOnly) {
    classesToAdd.push(cellProperties.readOnlyCellClassName);
    if (ariaEnabled) {
      attributesToAdd.push(A11Y_READONLY());
    }
  } else if (ariaEnabled) {
    attributesToRemove.push(A11Y_READONLY()[0]);
  }
  if (cellProperties.valid === false && cellProperties.invalidCellClassName) {
    classesToAdd.push(cellProperties.invalidCellClassName);
    if (ariaEnabled) {
      attributesToAdd.push(A11Y_INVALID());
    }
  } else {
    classesToRemove.push(cellProperties.invalidCellClassName);
    if (ariaEnabled) {
      attributesToRemove.push(A11Y_INVALID()[0]);
    }
  }
  if (cellProperties.wordWrap === false && cellProperties.noWordWrapClassName) {
    classesToAdd.push(cellProperties.noWordWrapClassName);
  }
  if (!value && cellProperties.placeholder) {
    classesToAdd.push(cellProperties.placeholderCellClassName);
  }
  removeClass(TD, classesToRemove);
  addClass(TD, classesToAdd);
  removeAttribute(TD, attributesToRemove);
  setAttribute(TD, attributesToAdd);
}
baseRenderer.RENDERER_TYPE = RENDERER_TYPE;

// node_modules/handsontable/renderers/textRenderer/textRenderer.mjs
var RENDERER_TYPE2 = "text";
function textRenderer(hotInstance, TD, row, col, prop, value, cellProperties) {
  baseRenderer.apply(this, [hotInstance, TD, row, col, prop, value, cellProperties]);
  let escaped = value;
  if (!escaped && cellProperties.placeholder) {
    escaped = cellProperties.placeholder;
  }
  escaped = stringify(escaped);
  if (cellProperties.trimWhitespace) {
    escaped = escaped.trim();
  }
  if (cellProperties.rendererTemplate) {
    empty(TD);
    const TEMPLATE = hotInstance.rootDocument.createElement("TEMPLATE");
    TEMPLATE.setAttribute("bind", "{{}}");
    TEMPLATE.innerHTML = cellProperties.rendererTemplate;
    HTMLTemplateElement.decorate(TEMPLATE);
    TEMPLATE.model = hotInstance.getSourceDataAtRow(row);
    TD.appendChild(TEMPLATE);
  } else {
    fastInnerText(TD, escaped);
  }
}
textRenderer.RENDERER_TYPE = RENDERER_TYPE2;

// node_modules/handsontable/cellTypes/textType/textType.mjs
var CELL_TYPE = "text";
var TextCellType = {
  CELL_TYPE,
  editor: TextEditor,
  renderer: textRenderer
};

// node_modules/core-js/modules/es.string.replace-all.js
var $5 = require_export();
var call2 = require_function_call();
var uncurryThis2 = require_function_uncurry_this();
var requireObjectCoercible = require_require_object_coercible();
var isCallable2 = require_is_callable();
var isNullOrUndefined = require_is_null_or_undefined();
var isRegExp2 = require_is_regexp();
var toString = require_to_string();
var getMethod = require_get_method();
var getRegExpFlags = require_regexp_get_flags();
var getSubstitution = require_get_substitution();
var wellKnownSymbol = require_well_known_symbol();
var IS_PURE = require_is_pure();
var REPLACE = wellKnownSymbol("replace");
var $TypeError = TypeError;
var indexOf = uncurryThis2("".indexOf);
var replace2 = uncurryThis2("".replace);
var stringSlice = uncurryThis2("".slice);
var max = Math.max;
$5({ target: "String", proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = "";
    if (!isNullOrUndefined(searchValue)) {
      IS_REG_EXP = isRegExp2(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, "g"))
          throw new $TypeError("`.replaceAll` does not allow non-global regexes");
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) {
        return call2(replacer, searchValue, O, replaceValue);
      } else if (IS_PURE && IS_REG_EXP) {
        return replace2(toString(O), searchValue, replaceValue);
      }
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable2(replaceValue);
    if (!functionalReplace)
      replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = indexOf(string, searchString);
    while (position !== -1) {
      replacement = functionalReplace ? toString(replaceValue(searchString, position, string)) : getSubstitution(searchString, string, position, [], void 0, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = position + advanceBy > string.length ? -1 : indexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});

// node_modules/handsontable/utils/parseTable.mjs
var ESCAPED_HTML_CHARS = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">"
};
var regEscapedChars = new RegExp(Object.keys(ESCAPED_HTML_CHARS).map((key) => `(${key})`).join("|"), "gi");
function isHTMLTable(element) {
  return (element && element.nodeName || "") === "TABLE";
}
function instanceToHTML(instance) {
  const hasColumnHeaders = instance.hasColHeaders();
  const hasRowHeaders = instance.hasRowHeaders();
  const coords = [hasColumnHeaders ? -1 : 0, hasRowHeaders ? -1 : 0, instance.countRows() - 1, instance.countCols() - 1];
  const data = instance.getData(...coords);
  const countRows = data.length;
  const countCols = countRows > 0 ? data[0].length : 0;
  const TABLE = ["<table>", "</table>"];
  const THEAD = hasColumnHeaders ? ["<thead>", "</thead>"] : [];
  const TBODY = ["<tbody>", "</tbody>"];
  const rowModifier = hasRowHeaders ? 1 : 0;
  const columnModifier = hasColumnHeaders ? 1 : 0;
  for (let row = 0; row < countRows; row += 1) {
    const isColumnHeadersRow = hasColumnHeaders && row === 0;
    const CELLS = [];
    for (let column = 0; column < countCols; column += 1) {
      const isRowHeadersColumn = !isColumnHeadersRow && hasRowHeaders && column === 0;
      let cell = "";
      if (isColumnHeadersRow) {
        cell = `<th>${instance.getColHeader(column - rowModifier)}</th>`;
      } else if (isRowHeadersColumn) {
        cell = `<th>${instance.getRowHeader(row - columnModifier)}</th>`;
      } else {
        const cellData = data[row][column];
        const {
          hidden,
          rowspan,
          colspan
        } = instance.getCellMeta(row - columnModifier, column - rowModifier);
        if (!hidden) {
          const attrs = [];
          if (rowspan) {
            attrs.push(`rowspan="${rowspan}"`);
          }
          if (colspan) {
            attrs.push(`colspan="${colspan}"`);
          }
          if (isEmpty(cellData)) {
            cell = `<td ${attrs.join(" ")}></td>`;
          } else {
            const value = cellData.toString().replace("<", "&lt;").replace(">", "&gt;").replace(/(<br(\s*|\/)>(\r\n|\n)?|\r\n|\n)/g, "<br>\r\n").replace(/\x20/gi, "&nbsp;").replace(/\t/gi, "&#9;");
            cell = `<td ${attrs.join(" ")}>${value}</td>`;
          }
        }
      }
      CELLS.push(cell);
    }
    const TR = ["<tr>", ...CELLS, "</tr>"].join("");
    if (isColumnHeadersRow) {
      THEAD.splice(1, 0, TR);
    } else {
      TBODY.splice(-1, 0, TR);
    }
  }
  TABLE.splice(1, 0, THEAD.join(""), TBODY.join(""));
  return TABLE.join("");
}
function _dataToHTML(input) {
  const inputLen = input.length;
  const result = ["<table>"];
  for (let row = 0; row < inputLen; row += 1) {
    const rowData = input[row];
    const columnsLen = rowData.length;
    const columnsResult = [];
    if (row === 0) {
      result.push("<tbody>");
    }
    for (let column = 0; column < columnsLen; column += 1) {
      const cellData = rowData[column];
      const parsedCellData = isEmpty(cellData) ? "" : cellData.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/(<br(\s*|\/)>(\r\n|\n)?|\r\n|\n)/g, "<br>\r\n").replace(/\x20{2,}/gi, (substring) => {
        return `<span style="mso-spacerun: yes">${"&nbsp;".repeat(substring.length - 1)} </span>`;
      }).replace(/\t/gi, "&#9;");
      columnsResult.push(`<td>${parsedCellData}</td>`);
    }
    result.push("<tr>", ...columnsResult, "</tr>");
    if (row + 1 === inputLen) {
      result.push("</tbody>");
    }
  }
  result.push("</table>");
  return result.join("");
}
function htmlToGridSettings(element) {
  let rootDocument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document;
  const settingsObj = {};
  const fragment = rootDocument.createDocumentFragment();
  const tempElem = rootDocument.createElement("div");
  fragment.appendChild(tempElem);
  let checkElement = element;
  if (typeof checkElement === "string") {
    const escapedAdjacentHTML = checkElement.replace(/<td\b[^>]*?>([\s\S]*?)<\/\s*td>/g, (cellFragment) => {
      const openingTag = cellFragment.match(/<td\b[^>]*?>/g)[0];
      const paragraphRegexp = /<p.*?>/g;
      const cellValue = cellFragment.substring(openingTag.length, cellFragment.lastIndexOf("<")).trim().replaceAll(/\n\s+/g, " ").replaceAll(paragraphRegexp, "\n").replace("\n", "").replaceAll(/<\/(.*)>\s+$/mg, "</$1>").replace(/(<(?!br)([^>]+)>)/gi, "").replaceAll(/^&nbsp;$/mg, "");
      const closingTag = "</td>";
      return `${openingTag}${cellValue}${closingTag}`;
    });
    tempElem.insertAdjacentHTML("afterbegin", `${escapedAdjacentHTML}`);
    checkElement = tempElem.querySelector("table");
  }
  if (!checkElement || !isHTMLTable(checkElement)) {
    return;
  }
  const generator = tempElem.querySelector('meta[name$="enerator"]');
  const hasRowHeaders = checkElement.querySelector("tbody th") !== null;
  const trElement = checkElement.querySelector("tr");
  const countCols = !trElement ? 0 : Array.from(trElement.cells).reduce((cols, cell) => cols + cell.colSpan, 0) - (hasRowHeaders ? 1 : 0);
  const fixedRowsBottom = checkElement.tFoot && Array.from(checkElement.tFoot.rows) || [];
  const fixedRowsTop = [];
  let hasColHeaders = false;
  let thRowsLen = 0;
  let countRows = 0;
  if (checkElement.tHead) {
    const thRows = Array.from(checkElement.tHead.rows).filter((tr) => {
      const isDataRow = tr.querySelector("td") !== null;
      if (isDataRow) {
        fixedRowsTop.push(tr);
      }
      return !isDataRow;
    });
    thRowsLen = thRows.length;
    hasColHeaders = thRowsLen > 0;
    if (thRowsLen > 1) {
      settingsObj.nestedHeaders = Array.from(thRows).reduce((rows, row) => {
        const headersRow = Array.from(row.cells).reduce((headers, header, currentIndex) => {
          if (hasRowHeaders && currentIndex === 0) {
            return headers;
          }
          const {
            colSpan: colspan,
            innerHTML
          } = header;
          const nextHeader = colspan > 1 ? {
            label: innerHTML,
            colspan
          } : innerHTML;
          headers.push(nextHeader);
          return headers;
        }, []);
        rows.push(headersRow);
        return rows;
      }, []);
    } else if (hasColHeaders) {
      settingsObj.colHeaders = Array.from(thRows[0].children).reduce((headers, header, index2) => {
        if (hasRowHeaders && index2 === 0) {
          return headers;
        }
        headers.push(header.innerHTML);
        return headers;
      }, []);
    }
  }
  if (fixedRowsTop.length) {
    settingsObj.fixedRowsTop = fixedRowsTop.length;
  }
  if (fixedRowsBottom.length) {
    settingsObj.fixedRowsBottom = fixedRowsBottom.length;
  }
  const dataRows = [...fixedRowsTop, ...Array.from(checkElement.tBodies).reduce((sections, section) => {
    sections.push(...Array.from(section.rows));
    return sections;
  }, []), ...fixedRowsBottom];
  countRows = dataRows.length;
  const dataArr = new Array(countRows);
  for (let r = 0; r < countRows; r++) {
    dataArr[r] = new Array(countCols);
  }
  const mergeCells = [];
  const rowHeaders = [];
  for (let row = 0; row < countRows; row++) {
    const tr = dataRows[row];
    const cells = Array.from(tr.cells);
    const cellsLen = cells.length;
    for (let cellId = 0; cellId < cellsLen; cellId++) {
      const cell = cells[cellId];
      const {
        nodeName,
        innerHTML,
        rowSpan: rowspan,
        colSpan: colspan
      } = cell;
      const col = dataArr[row].findIndex((value) => value === void 0);
      if (nodeName === "TD") {
        if (rowspan > 1 || colspan > 1) {
          for (let rstart = row; rstart < row + rowspan; rstart++) {
            if (rstart < countRows) {
              for (let cstart = col; cstart < col + colspan; cstart++) {
                dataArr[rstart][cstart] = null;
              }
            }
          }
          const styleAttr = cell.getAttribute("style");
          const ignoreMerge = styleAttr && styleAttr.includes("mso-ignore:colspan");
          if (!ignoreMerge) {
            mergeCells.push({
              col,
              row,
              rowspan,
              colspan
            });
          }
        }
        let cellValue = "";
        if (generator && /excel/gi.test(generator.content)) {
          cellValue = innerHTML.replace(/[\r\n][\x20]{0,2}/g, " ").replace(/<br(\s*|\/)>[\r\n]?[\x20]{0,3}/gim, "\r\n");
        } else {
          cellValue = innerHTML.replace(/<br(\s*|\/)>[\r\n]?/gim, "\r\n");
        }
        dataArr[row][col] = cellValue.replace(regEscapedChars, (match) => ESCAPED_HTML_CHARS[match]);
      } else {
        rowHeaders.push(innerHTML);
      }
    }
  }
  if (mergeCells.length) {
    settingsObj.mergeCells = mergeCells;
  }
  if (rowHeaders.length) {
    settingsObj.rowHeaders = rowHeaders;
  }
  if (dataArr.length) {
    settingsObj.data = dataArr;
  }
  return settingsObj;
}

// node_modules/handsontable/helpers/data.mjs
var COLUMN_LABEL_BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var COLUMN_LABEL_BASE_LENGTH = COLUMN_LABEL_BASE.length;
function spreadsheetColumnLabel(index2) {
  let dividend = index2 + 1;
  let columnLabel = "";
  let modulo;
  while (dividend > 0) {
    modulo = (dividend - 1) % COLUMN_LABEL_BASE_LENGTH;
    columnLabel = String.fromCharCode(65 + modulo) + columnLabel;
    dividend = parseInt((dividend - modulo) / COLUMN_LABEL_BASE_LENGTH, 10);
  }
  return columnLabel;
}
function dataRowToChangesArray(dataRow) {
  let rowOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  let dataRows = dataRow;
  const changesArray = [];
  if (!Array.isArray(dataRow) || !Array.isArray(dataRow[0])) {
    dataRows = [dataRow];
  }
  dataRows.forEach((row, rowIndex) => {
    if (Array.isArray(row)) {
      row.forEach((value, column) => {
        changesArray.push([rowIndex + rowOffset, column, value]);
      });
    } else {
      Object.keys(row).forEach((propName) => {
        changesArray.push([rowIndex + rowOffset, propName, row[propName]]);
      });
    }
  });
  return changesArray;
}
function countFirstRowKeys(data) {
  let result = 0;
  if (Array.isArray(data)) {
    if (data[0] && Array.isArray(data[0])) {
      result = data[0].length;
    } else if (data[0] && isObject(data[0])) {
      result = deepObjectSize(data[0]);
    }
  }
  return result;
}
function isArrayOfArrays(data) {
  return !!(Array.isArray(data) && data.length && data.every((el) => Array.isArray(el)));
}
function isArrayOfObjects(data) {
  return !!(Array.isArray(data) && data.length && data.every((el) => typeof el === "object" && !Array.isArray(el) && el !== null));
}

// node_modules/handsontable/translations/maps/indexMap.mjs
function _defineProperty35(obj, key, value) {
  key = _toPropertyKey35(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey35(t) {
  var i = _toPrimitive35(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive35(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var IndexMap = class {
  constructor() {
    let initValueOrFn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    _defineProperty35(this, "indexedValues", []);
    _defineProperty35(this, "initValueOrFn", void 0);
    this.initValueOrFn = initValueOrFn;
  }
  /**
   * Get full list of values for particular indexes.
   *
   * @returns {Array}
   */
  getValues() {
    return this.indexedValues;
  }
  /**
   * Get value for the particular index.
   *
   * @param {number} index Index for which value is got.
   * @returns {*}
   */
  getValueAtIndex(index2) {
    const values = this.indexedValues;
    if (index2 < values.length) {
      return values[index2];
    }
  }
  /**
   * Set new values for particular indexes.
   *
   * Note: Please keep in mind that `change` hook triggered by the method may not update cache of a collection immediately.
   *
   * @param {Array} values List of set values.
   */
  setValues(values) {
    this.indexedValues = values.slice();
    this.runLocalHooks("change");
  }
  /**
   * Set new value for the particular index.
   *
   * @param {number} index The index.
   * @param {*} value The value to save.
   *
   * Note: Please keep in mind that it is not possible to set value beyond the map (not respecting already set
   * map's size). Please use the `setValues` method when you would like to extend the map.
   * Note: Please keep in mind that `change` hook triggered by the method may not update cache of a collection immediately.
   *
   * @returns {boolean}
   */
  setValueAtIndex(index2, value) {
    if (index2 < this.indexedValues.length) {
      this.indexedValues[index2] = value;
      this.runLocalHooks("change");
      return true;
    }
    return false;
  }
  /**
   * Clear all values to the defaults.
   */
  clear() {
    this.setDefaultValues();
  }
  /**
   * Get length of the index map.
   *
   * @returns {number}
   */
  getLength() {
    return this.getValues().length;
  }
  /**
   * Set default values for elements from `0` to `n`, where `n` is equal to the handled variable.
   *
   * Note: Please keep in mind that `change` hook triggered by the method may not update cache of a collection immediately.
   *
   * @private
   * @param {number} [length] Length of list.
   */
  setDefaultValues() {
    let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.indexedValues.length;
    this.indexedValues.length = 0;
    if (isFunction(this.initValueOrFn)) {
      rangeEach(length - 1, (index2) => this.indexedValues.push(this.initValueOrFn(index2)));
    } else {
      rangeEach(length - 1, () => this.indexedValues.push(this.initValueOrFn));
    }
    this.runLocalHooks("change");
  }
  /**
   * Initialize list with default values for particular indexes.
   *
   * @private
   * @param {number} length New length of indexed list.
   * @returns {IndexMap}
   */
  init(length) {
    this.setDefaultValues(length);
    this.runLocalHooks("init");
    return this;
  }
  /**
   * Add values to the list.
   *
   * Note: Please keep in mind that `change` hook triggered by the method may not update cache of a collection immediately.
   *
   * @private
   */
  insert() {
    this.runLocalHooks("change");
  }
  /**
   * Remove values from the list.
   *
   * Note: Please keep in mind that `change` hook triggered by the method may not update cache of a collection immediately.
   *
   * @private
   */
  remove() {
    this.runLocalHooks("change");
  }
  /**
   * Destroys the Map instance.
   */
  destroy() {
    this.clearLocalHooks();
    this.indexedValues = null;
    this.initValueOrFn = null;
  }
};
mixin(IndexMap, localHooks_default);

// node_modules/handsontable/translations/maps/utils/physicallyIndexed.mjs
function getListWithInsertedItems(indexedValues, insertionIndex, insertedIndexes, insertedValuesMapping) {
  const firstInsertedIndex = insertedIndexes.length ? insertedIndexes[0] : void 0;
  return [...indexedValues.slice(0, firstInsertedIndex), ...insertedIndexes.map((insertedIndex, ordinalNumber) => {
    if (isFunction(insertedValuesMapping)) {
      return insertedValuesMapping(insertedIndex, ordinalNumber);
    }
    return insertedValuesMapping;
  }), ...firstInsertedIndex === void 0 ? [] : indexedValues.slice(firstInsertedIndex)];
}
function getListWithRemovedItems(indexedValues, removedIndexes) {
  return arrayFilter(indexedValues, (_, index2) => removedIndexes.includes(index2) === false);
}

// node_modules/handsontable/translations/maps/physicalIndexToValueMap.mjs
var PhysicalIndexToValueMap = class extends IndexMap {
  /**
   * Add values to list and reorganize.
   *
   * @private
   * @param {number} insertionIndex Position inside the list.
   * @param {Array} insertedIndexes List of inserted indexes.
   */
  insert(insertionIndex, insertedIndexes) {
    this.indexedValues = getListWithInsertedItems(this.indexedValues, insertionIndex, insertedIndexes, this.initValueOrFn);
    super.insert(insertionIndex, insertedIndexes);
  }
  /**
   * Remove values from the list and reorganize.
   *
   * @private
   * @param {Array} removedIndexes List of removed indexes.
   */
  remove(removedIndexes) {
    this.indexedValues = getListWithRemovedItems(this.indexedValues, removedIndexes);
    super.remove(removedIndexes);
  }
};

// node_modules/handsontable/translations/maps/hidingMap.mjs
var HidingMap = class extends PhysicalIndexToValueMap {
  constructor() {
    let initValueOrFn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    super(initValueOrFn);
  }
  /**
   * Get physical indexes which are hidden.
   *
   * Note: Indexes marked as hidden are included in a {@link DataMap}, but aren't rendered.
   *
   * @returns {Array}
   */
  getHiddenIndexes() {
    return arrayReduce(this.getValues(), (indexesList, isHidden, physicalIndex) => {
      if (isHidden) {
        indexesList.push(physicalIndex);
      }
      return indexesList;
    }, []);
  }
};

// node_modules/handsontable/translations/maps/trimmingMap.mjs
var TrimmingMap = class extends PhysicalIndexToValueMap {
  constructor() {
    let initValueOrFn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    super(initValueOrFn);
  }
  /**
   * Get physical indexes which are trimmed.
   *
   * Note: Indexes marked as trimmed aren't included in a {@link DataMap} and aren't rendered.
   *
   * @returns {Array}
   */
  getTrimmedIndexes() {
    return arrayReduce(this.getValues(), (indexesList, isTrimmed, physicalIndex) => {
      if (isTrimmed) {
        indexesList.push(physicalIndex);
      }
      return indexesList;
    }, []);
  }
};

// node_modules/handsontable/translations/maps/utils/indexesSequence.mjs
function getListWithInsertedItems2(indexedValues, insertionIndex, insertedIndexes) {
  return [...indexedValues.slice(0, insertionIndex), ...insertedIndexes, ...indexedValues.slice(insertionIndex)];
}
function getListWithRemovedItems2(indexedValues, removedIndexes) {
  return arrayFilter(indexedValues, (index2) => {
    return removedIndexes.includes(index2) === false;
  });
}

// node_modules/handsontable/translations/maps/utils/actionsOnIndexes.mjs
function getDecreasedIndexes(indexedValues, removedIndexes) {
  return arrayMap(indexedValues, (index2) => index2 - removedIndexes.filter((removedIndex) => removedIndex < index2).length);
}
function getIncreasedIndexes(indexedValues, insertedIndexes) {
  const firstInsertedIndex = insertedIndexes[0];
  const amountOfIndexes = insertedIndexes.length;
  return arrayMap(indexedValues, (index2) => {
    if (index2 >= firstInsertedIndex) {
      return index2 + amountOfIndexes;
    }
    return index2;
  });
}

// node_modules/handsontable/translations/maps/utils/index.mjs
var alterStrategies = /* @__PURE__ */ new Map([["indexesSequence", {
  getListWithInsertedItems: getListWithInsertedItems2,
  getListWithRemovedItems: getListWithRemovedItems2
}], ["physicallyIndexed", {
  getListWithInsertedItems,
  getListWithRemovedItems
}]]);
var alterUtilsFactory = (indexationStrategy) => {
  if (alterStrategies.has(indexationStrategy) === false) {
    throw new Error(`Alter strategy with ID '${indexationStrategy}' does not exist.`);
  }
  return alterStrategies.get(indexationStrategy);
};

// node_modules/handsontable/translations/maps/indexesSequence.mjs
var IndexesSequence = class extends IndexMap {
  constructor() {
    super((index2) => index2);
  }
  /**
   * Add values to list and reorganize.
   *
   * @private
   * @param {number} insertionIndex Position inside the list.
   * @param {Array} insertedIndexes List of inserted indexes.
   */
  insert(insertionIndex, insertedIndexes) {
    const listAfterUpdate = getIncreasedIndexes(this.indexedValues, insertedIndexes);
    this.indexedValues = getListWithInsertedItems2(listAfterUpdate, insertionIndex, insertedIndexes);
    super.insert(insertionIndex, insertedIndexes);
  }
  /**
   * Remove values from the list and reorganize.
   *
   * @private
   * @param {Array} removedIndexes List of removed indexes.
   */
  remove(removedIndexes) {
    const listAfterUpdate = getListWithRemovedItems2(this.indexedValues, removedIndexes);
    this.indexedValues = getDecreasedIndexes(listAfterUpdate, removedIndexes);
    super.remove(removedIndexes);
  }
};

// node_modules/handsontable/translations/maps/linkedPhysicalIndexToValueMap.mjs
function _defineProperty36(obj, key, value) {
  key = _toPropertyKey36(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey36(t) {
  var i = _toPrimitive36(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive36(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var LinkedPhysicalIndexToValueMap = class extends IndexMap {
  constructor() {
    super(...arguments);
    _defineProperty36(this, "orderOfIndexes", []);
  }
  /**
   * Get full list of ordered values for particular indexes.
   *
   * @returns {Array}
   */
  getValues() {
    return this.orderOfIndexes.map((physicalIndex) => this.indexedValues[physicalIndex]);
  }
  /**
   * Set new values for particular indexes. Entries are linked and stored in a certain order.
   *
   * Note: Please keep in mind that `change` hook triggered by the method may not update cache of a collection immediately.
   *
   * @param {Array} values List of set values.
   */
  setValues(values) {
    this.orderOfIndexes = [...Array(values.length).keys()];
    super.setValues(values);
  }
  /**
   * Set value at index and add it to the linked list of entries. Entries are stored in a certain order.
   *
   * Note: Value will be added at the end of the queue.
   *
   * @param {number} index The index.
   * @param {*} value The value to save.
   * @param {number} position Position to which entry will be added.
   *
   * @returns {boolean}
   */
  setValueAtIndex(index2, value) {
    let position = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.orderOfIndexes.length;
    if (index2 < this.indexedValues.length) {
      this.indexedValues[index2] = value;
      if (this.orderOfIndexes.includes(index2) === false) {
        this.orderOfIndexes.splice(position, 0, index2);
      }
      this.runLocalHooks("change");
      return true;
    }
    return false;
  }
  /**
   * Clear value for particular index.
   *
   * @param {number} physicalIndex Physical index.
   */
  clearValue(physicalIndex) {
    this.orderOfIndexes = getListWithRemovedItems2(this.orderOfIndexes, [physicalIndex]);
    if (isFunction(this.initValueOrFn)) {
      super.setValueAtIndex(physicalIndex, this.initValueOrFn(physicalIndex));
    } else {
      super.setValueAtIndex(physicalIndex, this.initValueOrFn);
    }
  }
  /**
   * Get length of the index map.
   *
   * @returns {number}
   */
  getLength() {
    return this.orderOfIndexes.length;
  }
  /**
   * Set default values for elements from `0` to `n`, where `n` is equal to the handled variable.
   *
   * Note: Please keep in mind that `change` hook triggered by the method may not update cache of a collection immediately.
   *
   * @private
   * @param {number} [length] Length of list.
   */
  setDefaultValues() {
    let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.indexedValues.length;
    this.orderOfIndexes.length = 0;
    super.setDefaultValues(length);
  }
  /**
   * Add values to list and reorganize. It updates list of indexes related to ordered values.
   *
   * @private
   * @param {number} insertionIndex Position inside the list.
   * @param {Array} insertedIndexes List of inserted indexes.
   */
  insert(insertionIndex, insertedIndexes) {
    this.indexedValues = getListWithInsertedItems(this.indexedValues, insertionIndex, insertedIndexes, this.initValueOrFn);
    this.orderOfIndexes = getIncreasedIndexes(this.orderOfIndexes, insertedIndexes);
    super.insert(insertionIndex, insertedIndexes);
  }
  /**
   * Remove values from the list and reorganize. It updates list of indexes related to ordered values.
   *
   * @private
   * @param {Array} removedIndexes List of removed indexes.
   */
  remove(removedIndexes) {
    this.indexedValues = getListWithRemovedItems(this.indexedValues, removedIndexes);
    this.orderOfIndexes = getListWithRemovedItems2(this.orderOfIndexes, removedIndexes);
    this.orderOfIndexes = getDecreasedIndexes(this.orderOfIndexes, removedIndexes);
    super.remove(removedIndexes);
  }
  /**
   * Get every entry containing index and value, respecting order of indexes.
   *
   * @returns {Array}
   */
  getEntries() {
    return this.orderOfIndexes.map((physicalIndex) => [physicalIndex, this.getValueAtIndex(physicalIndex)]);
  }
};

// node_modules/handsontable/translations/maps/index.mjs
var availableIndexMapTypes = /* @__PURE__ */ new Map([["hiding", HidingMap], ["index", IndexMap], ["linkedPhysicalIndexToValue", LinkedPhysicalIndexToValueMap], ["physicalIndexToValue", PhysicalIndexToValueMap], ["trimming", TrimmingMap]]);
function createIndexMap(mapType) {
  let initValueOrFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!availableIndexMapTypes.has(mapType)) {
    throw new Error(`The provided map type ("${mapType}") does not exist.`);
  }
  return new (availableIndexMapTypes.get(mapType))(initValueOrFn);
}

// node_modules/handsontable/translations/mapCollections/mapCollection.mjs
function _defineProperty37(obj, key, value) {
  key = _toPropertyKey37(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey37(t) {
  var i = _toPrimitive37(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive37(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var registeredMaps = 0;
var MapCollection = class {
  constructor() {
    _defineProperty37(this, "collection", /* @__PURE__ */ new Map());
  }
  /**
   * Register custom index map.
   *
   * @param {string} uniqueName Unique name of the index map.
   * @param {IndexMap} indexMap Index map containing miscellaneous (i.e. Meta data, indexes sequence), updated after remove and insert data actions.
   */
  register(uniqueName, indexMap) {
    if (this.collection.has(uniqueName) === false) {
      this.collection.set(uniqueName, indexMap);
      indexMap.addLocalHook("change", () => this.runLocalHooks("change", indexMap));
      registeredMaps += 1;
    }
  }
  /**
   * Unregister custom index map.
   *
   * @param {string} name Name of the index map.
   */
  unregister(name) {
    const indexMap = this.collection.get(name);
    if (isDefined(indexMap)) {
      indexMap.destroy();
      this.collection.delete(name);
      this.runLocalHooks("change", indexMap);
      registeredMaps -= 1;
    }
  }
  /**
   * Unregisters and destroys all collected index map instances.
   */
  unregisterAll() {
    this.collection.forEach((indexMap, name) => this.unregister(name));
    this.collection.clear();
  }
  /**
   * Get index map for the provided name.
   *
   * @param {string} [name] Name of the index map.
   * @returns {Array|IndexMap}
   */
  get(name) {
    if (isUndefined(name)) {
      return Array.from(this.collection.values());
    }
    return this.collection.get(name);
  }
  /**
   * Get collection size.
   *
   * @returns {number}
   */
  getLength() {
    return this.collection.size;
  }
  /**
   * Remove some indexes and corresponding mappings and update values of the others within all collection's index maps.
   *
   * @private
   * @param {Array} removedIndexes List of removed indexes.
   */
  removeFromEvery(removedIndexes) {
    this.collection.forEach((indexMap) => {
      indexMap.remove(removedIndexes);
    });
  }
  /**
   * Insert new indexes and corresponding mapping and update values of the others all collection's index maps.
   *
   * @private
   * @param {number} insertionIndex Position inside the actual list.
   * @param {Array} insertedIndexes List of inserted indexes.
   */
  insertToEvery(insertionIndex, insertedIndexes) {
    this.collection.forEach((indexMap) => {
      indexMap.insert(insertionIndex, insertedIndexes);
    });
  }
  /**
   * Set default values to index maps within collection.
   *
   * @param {number} length Destination length for all stored maps.
   */
  initEvery(length) {
    this.collection.forEach((indexMap) => {
      indexMap.init(length);
    });
  }
};
mixin(MapCollection, localHooks_default);

// node_modules/handsontable/translations/mapCollections/aggregatedCollection.mjs
function _defineProperty38(obj, key, value) {
  key = _toPropertyKey38(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey38(t) {
  var i = _toPrimitive38(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive38(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var AggregatedCollection = class extends MapCollection {
  constructor(aggregationFunction, fallbackValue) {
    super();
    _defineProperty38(this, "mergedValuesCache", []);
    _defineProperty38(this, "aggregationFunction", void 0);
    _defineProperty38(this, "fallbackValue", void 0);
    this.aggregationFunction = aggregationFunction;
    this.fallbackValue = fallbackValue;
  }
  /**
   * Get merged values for all indexes.
   *
   * @param {boolean} [readFromCache=true] Determine if read results from the cache.
   * @returns {Array}
   */
  getMergedValues() {
    let readFromCache = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (readFromCache === true) {
      return this.mergedValuesCache;
    }
    if (this.getLength() === 0) {
      return [];
    }
    const mapsValuesMatrix = arrayMap(this.get(), (map) => map.getValues());
    const indexesValuesMatrix = [];
    const mapsLength = isDefined(mapsValuesMatrix[0]) && mapsValuesMatrix[0].length || 0;
    for (let index2 = 0; index2 < mapsLength; index2 += 1) {
      const valuesForIndex = [];
      for (let mapIndex = 0; mapIndex < this.getLength(); mapIndex += 1) {
        valuesForIndex.push(mapsValuesMatrix[mapIndex][index2]);
      }
      indexesValuesMatrix.push(valuesForIndex);
    }
    return arrayMap(indexesValuesMatrix, this.aggregationFunction);
  }
  /**
   * Get merged value for particular index.
   *
   * @param {number} index Index for which we calculate single result.
   * @param {boolean} [readFromCache=true] Determine if read results from the cache.
   * @returns {*}
   */
  getMergedValueAtIndex(index2, readFromCache) {
    const valueAtIndex = this.getMergedValues(readFromCache)[index2];
    return isDefined(valueAtIndex) ? valueAtIndex : this.fallbackValue;
  }
  /**
   * Rebuild cache for the collection.
   */
  updateCache() {
    this.mergedValuesCache = this.getMergedValues(false);
  }
};

// node_modules/handsontable/translations/changesObservable/observer.mjs
function _classPrivateFieldInitSpec10(obj, privateMap, value) {
  _checkPrivateRedeclaration11(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration11(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldSet10(s, a, r) {
  return s.set(_assertClassBrand11(s, a), r), r;
}
function _classPrivateFieldGet10(s, a) {
  return s.get(_assertClassBrand11(s, a));
}
function _assertClassBrand11(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _currentInitialChanges = /* @__PURE__ */ new WeakMap();
var ChangesObserver = class {
  constructor() {
    _classPrivateFieldInitSpec10(this, _currentInitialChanges, []);
  }
  /**
   * Subscribes to the observer.
   *
   * @param {Function} callback A function that will be called when the new changes will appear.
   * @returns {ChangesObserver}
   */
  subscribe(callback) {
    this.addLocalHook("change", callback);
    this._write(_classPrivateFieldGet10(_currentInitialChanges, this));
    return this;
  }
  /**
   * Unsubscribes all subscriptions. After the method call, the observer would not produce
   * any new events.
   *
   * @returns {ChangesObserver}
   */
  unsubscribe() {
    this.runLocalHooks("unsubscribe");
    this.clearLocalHooks();
    return this;
  }
  /**
   * The write method is executed by the ChangesObservable module. The module produces all
   * changes events that are distributed further by the observer.
   *
   * @private
   * @param {object} changes The chunk of changes produced by the ChangesObservable module.
   * @returns {ChangesObserver}
   */
  _write(changes) {
    if (changes.length > 0) {
      this.runLocalHooks("change", changes);
    }
    return this;
  }
  /**
   * The write method is executed by the ChangesObservable module. The module produces initial
   * changes that will be used to notify new subscribers.
   *
   * @private
   * @param {object} initialChanges The chunk of changes produced by the ChangesObservable module.
   */
  _writeInitialChanges(initialChanges) {
    _classPrivateFieldSet10(_currentInitialChanges, this, initialChanges);
  }
};
mixin(ChangesObserver, localHooks_default);

// node_modules/handsontable/translations/changesObservable/utils.mjs
function arrayDiff(baseArray, newArray) {
  const changes = [];
  let i = 0;
  let j = 0;
  for (; i < baseArray.length && j < newArray.length; i++, j++) {
    if (baseArray[i] !== newArray[j]) {
      changes.push({
        op: "replace",
        index: j,
        oldValue: baseArray[i],
        newValue: newArray[j]
      });
    }
  }
  for (; i < newArray.length; i++) {
    changes.push({
      op: "insert",
      index: i,
      oldValue: void 0,
      newValue: newArray[i]
    });
  }
  for (; j < baseArray.length; j++) {
    changes.push({
      op: "remove",
      index: j,
      oldValue: baseArray[j],
      newValue: void 0
    });
  }
  return changes;
}

// node_modules/handsontable/translations/changesObservable/observable.mjs
function _classPrivateFieldInitSpec11(obj, privateMap, value) {
  _checkPrivateRedeclaration12(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration12(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldGet11(s, a) {
  return s.get(_assertClassBrand12(s, a));
}
function _classPrivateFieldSet11(s, a, r) {
  return s.set(_assertClassBrand12(s, a), r), r;
}
function _assertClassBrand12(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _observers = /* @__PURE__ */ new WeakMap();
var _indexMatrix = /* @__PURE__ */ new WeakMap();
var _currentIndexState = /* @__PURE__ */ new WeakMap();
var _isMatrixIndexesInitialized = /* @__PURE__ */ new WeakMap();
var _initialIndexValue = /* @__PURE__ */ new WeakMap();
var ChangesObservable = class {
  constructor() {
    let {
      initialIndexValue
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classPrivateFieldInitSpec11(this, _observers, /* @__PURE__ */ new Set());
    _classPrivateFieldInitSpec11(this, _indexMatrix, []);
    _classPrivateFieldInitSpec11(this, _currentIndexState, []);
    _classPrivateFieldInitSpec11(this, _isMatrixIndexesInitialized, false);
    _classPrivateFieldInitSpec11(this, _initialIndexValue, false);
    _classPrivateFieldSet11(_initialIndexValue, this, initialIndexValue !== null && initialIndexValue !== void 0 ? initialIndexValue : false);
  }
  /* eslint-disable jsdoc/require-description-complete-sentence */
  /**
   * Creates and returns a new instance of the ChangesObserver object. The resource
   * allows subscribing to the index changes that during the code running may change.
   * Changes are emitted as an array of the index change. Each change is represented
   * separately as an object with `op`, `index`, `oldValue`, and `newValue` props.
   *
   * For example:
   * ```
   * [
   *   { op: 'replace', index: 1, oldValue: false, newValue: true },
   *   { op: 'replace', index: 3, oldValue: false, newValue: true },
   *   { op: 'insert', index: 4, oldValue: false, newValue: true },
   * ]
   * // or when the new index map changes have less indexes
   * [
   *   { op: 'replace', index: 1, oldValue: false, newValue: true },
   *   { op: 'remove', index: 4, oldValue: false, newValue: true },
   * ]
   * ```
   *
   * @returns {ChangesObserver}
   */
  /* eslint-enable jsdoc/require-description-complete-sentence */
  createObserver() {
    const observer = new ChangesObserver();
    _classPrivateFieldGet11(_observers, this).add(observer);
    observer.addLocalHook("unsubscribe", () => {
      _classPrivateFieldGet11(_observers, this).delete(observer);
    });
    observer._writeInitialChanges(arrayDiff(_classPrivateFieldGet11(_indexMatrix, this), _classPrivateFieldGet11(_currentIndexState, this)));
    return observer;
  }
  /**
   * The method is an entry point for triggering new index map changes. Emitting the
   * changes triggers comparing algorithm which compares last saved state with a new
   * state. When there are some differences, the changes are sent to all subscribers.
   *
   * @param {Array} indexesState An array with index map state.
   */
  emit(indexesState) {
    let currentIndexState = _classPrivateFieldGet11(_currentIndexState, this);
    if (!_classPrivateFieldGet11(_isMatrixIndexesInitialized, this) || _classPrivateFieldGet11(_indexMatrix, this).length !== indexesState.length) {
      if (indexesState.length === 0) {
        indexesState = new Array(currentIndexState.length).fill(_classPrivateFieldGet11(_initialIndexValue, this));
      } else {
        _classPrivateFieldSet11(_indexMatrix, this, new Array(indexesState.length).fill(_classPrivateFieldGet11(_initialIndexValue, this)));
      }
      if (!_classPrivateFieldGet11(_isMatrixIndexesInitialized, this)) {
        _classPrivateFieldSet11(_isMatrixIndexesInitialized, this, true);
        currentIndexState = _classPrivateFieldGet11(_indexMatrix, this);
      }
    }
    const changes = arrayDiff(currentIndexState, indexesState);
    _classPrivateFieldGet11(_observers, this).forEach((observer) => observer._write(changes));
    _classPrivateFieldSet11(_currentIndexState, this, indexesState);
  }
};

// node_modules/handsontable/translations/indexMapper.mjs
function _defineProperty39(obj, key, value) {
  key = _toPropertyKey39(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey39(t) {
  var i = _toPrimitive39(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive39(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var IndexMapper = class {
  constructor() {
    _defineProperty39(this, "indexesSequence", new IndexesSequence());
    _defineProperty39(this, "trimmingMapsCollection", new AggregatedCollection((valuesForIndex) => valuesForIndex.some((value) => value === true), false));
    _defineProperty39(this, "hidingMapsCollection", new AggregatedCollection((valuesForIndex) => valuesForIndex.some((value) => value === true), false));
    _defineProperty39(this, "variousMapsCollection", new MapCollection());
    _defineProperty39(this, "hidingChangesObservable", new ChangesObservable({
      initialIndexValue: false
    }));
    _defineProperty39(this, "notTrimmedIndexesCache", []);
    _defineProperty39(this, "notHiddenIndexesCache", []);
    _defineProperty39(this, "isBatched", false);
    _defineProperty39(this, "indexesSequenceChanged", false);
    _defineProperty39(this, "indexesChangeSource", void 0);
    _defineProperty39(this, "trimmedIndexesChanged", false);
    _defineProperty39(this, "hiddenIndexesChanged", false);
    _defineProperty39(this, "renderablePhysicalIndexesCache", []);
    _defineProperty39(this, "fromPhysicalToVisualIndexesCache", /* @__PURE__ */ new Map());
    _defineProperty39(this, "fromVisualToRenderableIndexesCache", /* @__PURE__ */ new Map());
    this.indexesSequence.addLocalHook("change", () => {
      this.indexesSequenceChanged = true;
      this.updateCache();
      this.runLocalHooks("indexesSequenceChange", this.indexesChangeSource);
      this.runLocalHooks("change", this.indexesSequence, null);
    });
    this.trimmingMapsCollection.addLocalHook("change", (changedMap) => {
      this.trimmedIndexesChanged = true;
      this.updateCache();
      this.runLocalHooks("change", changedMap, this.trimmingMapsCollection);
    });
    this.hidingMapsCollection.addLocalHook("change", (changedMap) => {
      this.hiddenIndexesChanged = true;
      this.updateCache();
      this.runLocalHooks("change", changedMap, this.hidingMapsCollection);
    });
    this.variousMapsCollection.addLocalHook("change", (changedMap) => {
      this.runLocalHooks("change", changedMap, this.variousMapsCollection);
    });
  }
  /**
   * Suspends the cache update for this map. The method is helpful to group multiple
   * operations, which affects the cache. In this case, the cache will be updated once after
   * calling the `resumeOperations` method.
   */
  suspendOperations() {
    this.isBatched = true;
  }
  /**
   * Resumes the cache update for this map. It recalculates the cache and restores the
   * default behavior where each map modification updates the cache.
   */
  resumeOperations() {
    this.isBatched = false;
    this.updateCache();
  }
  /**
   * It creates and returns the new instance of the ChangesObserver object. The object
   * allows listening to the index changes that happen while the Handsontable is running.
   *
   * @param {string} indexMapType The index map type which we want to observe.
   *                              Currently, only the 'hiding' index map types are observable.
   * @returns {ChangesObserver}
   */
  createChangesObserver(indexMapType) {
    if (indexMapType !== "hiding") {
      throw new Error(`Unsupported index map type "${indexMapType}".`);
    }
    return this.hidingChangesObservable.createObserver();
  }
  /**
   * Creates and registers a new `IndexMap` for a specified `IndexMapper` instance.
   *
   * @param {string} indexName A unique index name.
   * @param {string} mapType The index map type (e.g., "hiding", "trimming", "physicalIndexToValue").
   * @param {*} [initValueOrFn] The initial value for the index map.
   * @returns {IndexMap}
   */
  createAndRegisterIndexMap(indexName, mapType, initValueOrFn) {
    return this.registerMap(indexName, createIndexMap(mapType, initValueOrFn));
  }
  /**
   * Register map which provide some index mappings. Type of map determining to which collection it will be added.
   *
   * @param {string} uniqueName Name of the index map. It should be unique.
   * @param {IndexMap} indexMap Registered index map updated on items removal and insertion.
   * @returns {IndexMap}
   */
  registerMap(uniqueName, indexMap) {
    if (this.trimmingMapsCollection.get(uniqueName) || this.hidingMapsCollection.get(uniqueName) || this.variousMapsCollection.get(uniqueName)) {
      throw Error(`Map with name "${uniqueName}" has been already registered.`);
    }
    if (indexMap instanceof TrimmingMap) {
      this.trimmingMapsCollection.register(uniqueName, indexMap);
    } else if (indexMap instanceof HidingMap) {
      this.hidingMapsCollection.register(uniqueName, indexMap);
    } else {
      this.variousMapsCollection.register(uniqueName, indexMap);
    }
    const numberOfIndexes = this.getNumberOfIndexes();
    if (numberOfIndexes > 0) {
      indexMap.init(numberOfIndexes);
    }
    return indexMap;
  }
  /**
   * Unregister a map with given name.
   *
   * @param {string} name Name of the index map.
   */
  unregisterMap(name) {
    this.trimmingMapsCollection.unregister(name);
    this.hidingMapsCollection.unregister(name);
    this.variousMapsCollection.unregister(name);
  }
  /**
   * Unregisters all collected index map instances from all map collection types.
   */
  unregisterAll() {
    this.trimmingMapsCollection.unregisterAll();
    this.hidingMapsCollection.unregisterAll();
    this.variousMapsCollection.unregisterAll();
  }
  /**
   * Get a physical index corresponding to the given visual index.
   *
   * @param {number} visualIndex Visual index.
   * @returns {number|null} Returns translated index mapped by passed visual index.
   */
  getPhysicalFromVisualIndex(visualIndex) {
    const physicalIndex = this.notTrimmedIndexesCache[visualIndex];
    if (isDefined(physicalIndex)) {
      return physicalIndex;
    }
    return null;
  }
  /**
   * Get a physical index corresponding to the given renderable index.
   *
   * @param {number} renderableIndex Renderable index.
   * @returns {null|number}
   */
  getPhysicalFromRenderableIndex(renderableIndex) {
    const physicalIndex = this.renderablePhysicalIndexesCache[renderableIndex];
    if (isDefined(physicalIndex)) {
      return physicalIndex;
    }
    return null;
  }
  /**
   * Get a visual index corresponding to the given physical index.
   *
   * @param {number} physicalIndex Physical index to search.
   * @returns {number|null} Returns a visual index of the index mapper.
   */
  getVisualFromPhysicalIndex(physicalIndex) {
    const visualIndex = this.fromPhysicalToVisualIndexesCache.get(physicalIndex);
    if (isDefined(visualIndex)) {
      return visualIndex;
    }
    return null;
  }
  /**
   * Get a visual index corresponding to the given renderable index.
   *
   * @param {number} renderableIndex Renderable index.
   * @returns {null|number}
   */
  getVisualFromRenderableIndex(renderableIndex) {
    return this.getVisualFromPhysicalIndex(this.getPhysicalFromRenderableIndex(renderableIndex));
  }
  /**
   * Get a renderable index corresponding to the given visual index.
   *
   * @param {number} visualIndex Visual index.
   * @returns {null|number}
   */
  getRenderableFromVisualIndex(visualIndex) {
    const renderableIndex = this.fromVisualToRenderableIndexesCache.get(visualIndex);
    if (isDefined(renderableIndex)) {
      return renderableIndex;
    }
    return null;
  }
  /**
   * Search for the nearest not-hidden row or column.
   *
   * @param {number} fromVisualIndex The visual index of the row or column from which the search starts.<br><br>
   * If the row or column from which the search starts is not hidden, the method simply returns the `fromVisualIndex` number.
   * @param {number} searchDirection The search direction.<br><br>`1`: search from `fromVisualIndex` to the end of the dataset.<br><br>
   * `-1`: search from `fromVisualIndex` to the beginning of the dataset (i.e., to the row or column at visual index `0`).
   * @param {boolean} searchAlsoOtherWayAround `true`: if a search in a first direction failed, try the opposite direction.<br><br>
   * `false`: search in one direction only.
   *
   * @returns {number|null} A visual index of a row or column, or `null`.
   */
  getNearestNotHiddenIndex(fromVisualIndex, searchDirection) {
    let searchAlsoOtherWayAround = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    const physicalIndex = this.getPhysicalFromVisualIndex(fromVisualIndex);
    if (physicalIndex === null) {
      return null;
    }
    if (this.fromVisualToRenderableIndexesCache.has(fromVisualIndex)) {
      return fromVisualIndex;
    }
    const visibleIndexes = Array.from(this.fromVisualToRenderableIndexesCache.keys());
    let index2 = -1;
    if (searchDirection > 0) {
      index2 = visibleIndexes.findIndex((visualIndex) => visualIndex > fromVisualIndex);
    } else {
      index2 = visibleIndexes.reverse().findIndex((visualIndex) => visualIndex < fromVisualIndex);
    }
    if (index2 === -1) {
      if (searchAlsoOtherWayAround) {
        return this.getNearestNotHiddenIndex(fromVisualIndex, -searchDirection, false);
      }
      return null;
    }
    return visibleIndexes[index2];
  }
  /**
   * Set default values for all indexes in registered index maps.
   *
   * @param {number} [length] Destination length for all stored index maps.
   */
  initToLength() {
    let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getNumberOfIndexes();
    this.notTrimmedIndexesCache = [...new Array(length).keys()];
    this.notHiddenIndexesCache = [...new Array(length).keys()];
    this.suspendOperations();
    this.indexesChangeSource = "init";
    this.indexesSequence.init(length);
    this.indexesChangeSource = void 0;
    this.trimmingMapsCollection.initEvery(length);
    this.resumeOperations();
    this.suspendOperations();
    this.hidingMapsCollection.initEvery(length);
    this.variousMapsCollection.initEvery(length);
    this.resumeOperations();
    this.runLocalHooks("init");
  }
  /**
   * Trim/extend the mappers to fit the desired length.
   *
   * @param {number} length New mapper length.
   */
  fitToLength(length) {
    const currentIndexCount = this.getNumberOfIndexes();
    if (length < currentIndexCount) {
      const indexesToBeRemoved = [...Array(this.getNumberOfIndexes() - length).keys()].map((i) => i + length);
      this.removeIndexes(indexesToBeRemoved);
    } else {
      this.insertIndexes(currentIndexCount, length - currentIndexCount);
    }
  }
  /**
   * Get sequence of indexes.
   *
   * @returns {Array} Physical indexes.
   */
  getIndexesSequence() {
    return this.indexesSequence.getValues();
  }
  /**
   * Set completely new indexes sequence.
   *
   * @param {Array} indexes Physical indexes.
   */
  setIndexesSequence(indexes) {
    if (this.indexesChangeSource === void 0) {
      this.indexesChangeSource = "update";
    }
    this.indexesSequence.setValues(indexes);
    if (this.indexesChangeSource === "update") {
      this.indexesChangeSource = void 0;
    }
  }
  /**
   * Get all NOT trimmed indexes.
   *
   * Note: Indexes marked as trimmed aren't included in a {@link DataMap} and aren't rendered.
   *
   * @param {boolean} [readFromCache=true] Determine if read indexes from cache.
   * @returns {Array} List of physical indexes. Index of this native array is a "visual index",
   * value of this native array is a "physical index".
   */
  getNotTrimmedIndexes() {
    let readFromCache = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (readFromCache === true) {
      return this.notTrimmedIndexesCache;
    }
    const indexesSequence = this.getIndexesSequence();
    return indexesSequence.filter((physicalIndex) => this.isTrimmed(physicalIndex) === false);
  }
  /**
   * Get length of all NOT trimmed indexes.
   *
   * Note: Indexes marked as trimmed aren't included in a {@link DataMap} and aren't rendered.
   *
   * @returns {number}
   */
  getNotTrimmedIndexesLength() {
    return this.getNotTrimmedIndexes().length;
  }
  /**
   * Get all NOT hidden indexes.
   *
   * Note: Indexes marked as hidden are included in a {@link DataMap}, but aren't rendered.
   *
   * @param {boolean} [readFromCache=true] Determine if read indexes from cache.
   * @returns {Array} List of physical indexes. Please keep in mind that index of this native array IS NOT a "visual index".
   */
  getNotHiddenIndexes() {
    let readFromCache = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (readFromCache === true) {
      return this.notHiddenIndexesCache;
    }
    const indexesSequence = this.getIndexesSequence();
    return indexesSequence.filter((physicalIndex) => this.isHidden(physicalIndex) === false);
  }
  /**
   * Get length of all NOT hidden indexes.
   *
   * Note: Indexes marked as hidden are included in a {@link DataMap}, but aren't rendered.
   *
   * @returns {number}
   */
  getNotHiddenIndexesLength() {
    return this.getNotHiddenIndexes().length;
  }
  /**
   * Get list of physical indexes (respecting the sequence of indexes) which may be rendered (when they are in a viewport).
   *
   * @param {boolean} [readFromCache=true] Determine if read indexes from cache.
   * @returns {Array} List of physical indexes. Index of this native array is a "renderable index",
   * value of this native array is a "physical index".
   */
  getRenderableIndexes() {
    let readFromCache = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (readFromCache === true) {
      return this.renderablePhysicalIndexesCache;
    }
    const notTrimmedIndexes = this.getNotTrimmedIndexes();
    return notTrimmedIndexes.filter((physicalIndex) => this.isHidden(physicalIndex) === false);
  }
  /**
   * Get length of all NOT trimmed and NOT hidden indexes.
   *
   * @returns {number}
   */
  getRenderableIndexesLength() {
    return this.getRenderableIndexes().length;
  }
  /**
   * Get number of all indexes.
   *
   * @returns {number}
   */
  getNumberOfIndexes() {
    return this.getIndexesSequence().length;
  }
  /**
   * Move indexes in the index mapper.
   *
   * @param {number|Array} movedIndexes Visual index(es) to move.
   * @param {number} finalIndex Visual index being a start index for the moved elements.
   */
  moveIndexes(movedIndexes, finalIndex) {
    if (typeof movedIndexes === "number") {
      movedIndexes = [movedIndexes];
    }
    const physicalMovedIndexes = arrayMap(movedIndexes, (visualIndex) => this.getPhysicalFromVisualIndex(visualIndex));
    const notTrimmedIndexesLength = this.getNotTrimmedIndexesLength();
    const movedIndexesLength = movedIndexes.length;
    const notMovedIndexes = getListWithRemovedItems2(this.getIndexesSequence(), physicalMovedIndexes);
    const notTrimmedNotMovedItems = notMovedIndexes.filter((index2) => this.isTrimmed(index2) === false);
    let destinationPosition = notMovedIndexes.indexOf(notTrimmedNotMovedItems[notTrimmedNotMovedItems.length - 1]) + 1;
    if (finalIndex + movedIndexesLength < notTrimmedIndexesLength) {
      const physicalIndex = notTrimmedNotMovedItems[finalIndex];
      destinationPosition = notMovedIndexes.indexOf(physicalIndex);
    }
    this.indexesChangeSource = "move";
    this.setIndexesSequence(getListWithInsertedItems2(notMovedIndexes, destinationPosition, physicalMovedIndexes));
    this.indexesChangeSource = void 0;
  }
  /**
   * Get whether index is trimmed. Index marked as trimmed isn't included in a {@link DataMap} and isn't rendered.
   *
   * @param {number} physicalIndex Physical index.
   * @returns {boolean}
   */
  isTrimmed(physicalIndex) {
    return this.trimmingMapsCollection.getMergedValueAtIndex(physicalIndex);
  }
  /**
   * Get whether index is hidden. Index marked as hidden is included in a {@link DataMap}, but isn't rendered.
   *
   * @param {number} physicalIndex Physical index.
   * @returns {boolean}
   */
  isHidden(physicalIndex) {
    return this.hidingMapsCollection.getMergedValueAtIndex(physicalIndex);
  }
  /**
   * Insert new indexes and corresponding mapping and update values of the others, for all stored index maps.
   *
   * @private
   * @param {number} firstInsertedVisualIndex First inserted visual index.
   * @param {number} amountOfIndexes Amount of inserted indexes.
   */
  insertIndexes(firstInsertedVisualIndex, amountOfIndexes) {
    const nthVisibleIndex = this.getNotTrimmedIndexes()[firstInsertedVisualIndex];
    const firstInsertedPhysicalIndex = isDefined(nthVisibleIndex) ? nthVisibleIndex : this.getNumberOfIndexes();
    const insertionIndex = this.getIndexesSequence().includes(nthVisibleIndex) ? this.getIndexesSequence().indexOf(nthVisibleIndex) : this.getNumberOfIndexes();
    const insertedIndexes = arrayMap(new Array(amountOfIndexes).fill(firstInsertedPhysicalIndex), (nextIndex, stepsFromStart) => nextIndex + stepsFromStart);
    this.suspendOperations();
    this.indexesChangeSource = "insert";
    this.indexesSequence.insert(insertionIndex, insertedIndexes);
    this.indexesChangeSource = void 0;
    this.trimmingMapsCollection.insertToEvery(insertionIndex, insertedIndexes);
    this.hidingMapsCollection.insertToEvery(insertionIndex, insertedIndexes);
    this.variousMapsCollection.insertToEvery(insertionIndex, insertedIndexes);
    this.resumeOperations();
  }
  /**
   * Remove some indexes and corresponding mappings and update values of the others, for all stored index maps.
   *
   * @private
   * @param {Array} removedIndexes List of removed indexes.
   */
  removeIndexes(removedIndexes) {
    this.suspendOperations();
    this.indexesChangeSource = "remove";
    this.indexesSequence.remove(removedIndexes);
    this.indexesChangeSource = void 0;
    this.trimmingMapsCollection.removeFromEvery(removedIndexes);
    this.hidingMapsCollection.removeFromEvery(removedIndexes);
    this.variousMapsCollection.removeFromEvery(removedIndexes);
    this.resumeOperations();
  }
  /**
   * Rebuild cache for some indexes. Every action on indexes sequence or indexes skipped in the process of rendering
   * by default reset cache, thus batching some index maps actions is recommended.
   *
   * @private
   * @param {boolean} [force=false] Determine if force cache update.
   */
  updateCache() {
    let force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const anyCachedIndexChanged = this.indexesSequenceChanged || this.trimmedIndexesChanged || this.hiddenIndexesChanged;
    if (force === true || this.isBatched === false && anyCachedIndexChanged === true) {
      this.trimmingMapsCollection.updateCache();
      this.hidingMapsCollection.updateCache();
      this.notTrimmedIndexesCache = this.getNotTrimmedIndexes(false);
      this.notHiddenIndexesCache = this.getNotHiddenIndexes(false);
      this.renderablePhysicalIndexesCache = this.getRenderableIndexes(false);
      this.cacheFromPhysicalToVisualIndexes();
      this.cacheFromVisualToRenderableIndexes();
      if (this.hiddenIndexesChanged) {
        this.hidingChangesObservable.emit(this.hidingMapsCollection.getMergedValues());
      }
      this.runLocalHooks("cacheUpdated", {
        indexesSequenceChanged: this.indexesSequenceChanged,
        trimmedIndexesChanged: this.trimmedIndexesChanged,
        hiddenIndexesChanged: this.hiddenIndexesChanged
      });
      this.indexesSequenceChanged = false;
      this.trimmedIndexesChanged = false;
      this.hiddenIndexesChanged = false;
    }
  }
  /**
   * Update cache for translations from physical to visual indexes.
   *
   * @private
   */
  cacheFromPhysicalToVisualIndexes() {
    const nrOfNotTrimmedIndexes = this.getNotTrimmedIndexesLength();
    this.fromPhysicalToVisualIndexesCache.clear();
    for (let visualIndex = 0; visualIndex < nrOfNotTrimmedIndexes; visualIndex += 1) {
      const physicalIndex = this.getPhysicalFromVisualIndex(visualIndex);
      this.fromPhysicalToVisualIndexesCache.set(physicalIndex, visualIndex);
    }
  }
  /**
   * Update cache for translations from visual to renderable indexes.
   *
   * @private
   */
  cacheFromVisualToRenderableIndexes() {
    const nrOfRenderableIndexes = this.getRenderableIndexesLength();
    this.fromVisualToRenderableIndexesCache.clear();
    for (let renderableIndex = 0; renderableIndex < nrOfRenderableIndexes; renderableIndex += 1) {
      const physicalIndex = this.getPhysicalFromRenderableIndex(renderableIndex);
      const visualIndex = this.getVisualFromPhysicalIndex(physicalIndex);
      this.fromVisualToRenderableIndexesCache.set(visualIndex, renderableIndex);
    }
  }
};
mixin(IndexMapper, localHooks_default);

// node_modules/handsontable/i18n/constants.mjs
var constants_exports = {};
__export(constants_exports, {
  CHECKBOX_CHECKED: () => CHECKBOX_CHECKED,
  CHECKBOX_RENDERER_NAMESPACE: () => CHECKBOX_RENDERER_NAMESPACE,
  CHECKBOX_UNCHECKED: () => CHECKBOX_UNCHECKED,
  CONTEXTMENU_ITEMS_ADD_COMMENT: () => CONTEXTMENU_ITEMS_ADD_COMMENT,
  CONTEXTMENU_ITEMS_ALIGNMENT: () => CONTEXTMENU_ITEMS_ALIGNMENT,
  CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM: () => CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM,
  CONTEXTMENU_ITEMS_ALIGNMENT_CENTER: () => CONTEXTMENU_ITEMS_ALIGNMENT_CENTER,
  CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY: () => CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY,
  CONTEXTMENU_ITEMS_ALIGNMENT_LEFT: () => CONTEXTMENU_ITEMS_ALIGNMENT_LEFT,
  CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE: () => CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE,
  CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT: () => CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT,
  CONTEXTMENU_ITEMS_ALIGNMENT_TOP: () => CONTEXTMENU_ITEMS_ALIGNMENT_TOP,
  CONTEXTMENU_ITEMS_BORDERS: () => CONTEXTMENU_ITEMS_BORDERS,
  CONTEXTMENU_ITEMS_BORDERS_BOTTOM: () => CONTEXTMENU_ITEMS_BORDERS_BOTTOM,
  CONTEXTMENU_ITEMS_BORDERS_LEFT: () => CONTEXTMENU_ITEMS_BORDERS_LEFT,
  CONTEXTMENU_ITEMS_BORDERS_RIGHT: () => CONTEXTMENU_ITEMS_BORDERS_RIGHT,
  CONTEXTMENU_ITEMS_BORDERS_TOP: () => CONTEXTMENU_ITEMS_BORDERS_TOP,
  CONTEXTMENU_ITEMS_CLEAR_COLUMN: () => CONTEXTMENU_ITEMS_CLEAR_COLUMN,
  CONTEXTMENU_ITEMS_COPY: () => CONTEXTMENU_ITEMS_COPY,
  CONTEXTMENU_ITEMS_COPY_COLUMN_HEADERS_ONLY: () => CONTEXTMENU_ITEMS_COPY_COLUMN_HEADERS_ONLY,
  CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_GROUP_HEADERS: () => CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_GROUP_HEADERS,
  CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_HEADERS: () => CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_HEADERS,
  CONTEXTMENU_ITEMS_CUT: () => CONTEXTMENU_ITEMS_CUT,
  CONTEXTMENU_ITEMS_EDIT_COMMENT: () => CONTEXTMENU_ITEMS_EDIT_COMMENT,
  CONTEXTMENU_ITEMS_FREEZE_COLUMN: () => CONTEXTMENU_ITEMS_FREEZE_COLUMN,
  CONTEXTMENU_ITEMS_HIDE_COLUMN: () => CONTEXTMENU_ITEMS_HIDE_COLUMN,
  CONTEXTMENU_ITEMS_HIDE_ROW: () => CONTEXTMENU_ITEMS_HIDE_ROW,
  CONTEXTMENU_ITEMS_INSERT_LEFT: () => CONTEXTMENU_ITEMS_INSERT_LEFT,
  CONTEXTMENU_ITEMS_INSERT_RIGHT: () => CONTEXTMENU_ITEMS_INSERT_RIGHT,
  CONTEXTMENU_ITEMS_MERGE_CELLS: () => CONTEXTMENU_ITEMS_MERGE_CELLS,
  CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD: () => CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD,
  CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD: () => CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD,
  CONTEXTMENU_ITEMS_NO_ITEMS: () => CONTEXTMENU_ITEMS_NO_ITEMS,
  CONTEXTMENU_ITEMS_READ_ONLY: () => CONTEXTMENU_ITEMS_READ_ONLY,
  CONTEXTMENU_ITEMS_READ_ONLY_COMMENT: () => CONTEXTMENU_ITEMS_READ_ONLY_COMMENT,
  CONTEXTMENU_ITEMS_REDO: () => CONTEXTMENU_ITEMS_REDO,
  CONTEXTMENU_ITEMS_REMOVE_BORDERS: () => CONTEXTMENU_ITEMS_REMOVE_BORDERS,
  CONTEXTMENU_ITEMS_REMOVE_COLUMN: () => CONTEXTMENU_ITEMS_REMOVE_COLUMN,
  CONTEXTMENU_ITEMS_REMOVE_COMMENT: () => CONTEXTMENU_ITEMS_REMOVE_COMMENT,
  CONTEXTMENU_ITEMS_REMOVE_ROW: () => CONTEXTMENU_ITEMS_REMOVE_ROW,
  CONTEXTMENU_ITEMS_ROW_ABOVE: () => CONTEXTMENU_ITEMS_ROW_ABOVE,
  CONTEXTMENU_ITEMS_ROW_BELOW: () => CONTEXTMENU_ITEMS_ROW_BELOW,
  CONTEXTMENU_ITEMS_SHOW_COLUMN: () => CONTEXTMENU_ITEMS_SHOW_COLUMN,
  CONTEXTMENU_ITEMS_SHOW_ROW: () => CONTEXTMENU_ITEMS_SHOW_ROW,
  CONTEXTMENU_ITEMS_UNDO: () => CONTEXTMENU_ITEMS_UNDO,
  CONTEXTMENU_ITEMS_UNFREEZE_COLUMN: () => CONTEXTMENU_ITEMS_UNFREEZE_COLUMN,
  CONTEXTMENU_ITEMS_UNMERGE_CELLS: () => CONTEXTMENU_ITEMS_UNMERGE_CELLS,
  CONTEXT_MENU_ITEMS_NAMESPACE: () => CONTEXT_MENU_ITEMS_NAMESPACE,
  FILTERS_BUTTONS_CANCEL: () => FILTERS_BUTTONS_CANCEL,
  FILTERS_BUTTONS_CLEAR: () => FILTERS_BUTTONS_CLEAR,
  FILTERS_BUTTONS_OK: () => FILTERS_BUTTONS_OK,
  FILTERS_BUTTONS_PLACEHOLDER_SEARCH: () => FILTERS_BUTTONS_PLACEHOLDER_SEARCH,
  FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE: () => FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE,
  FILTERS_BUTTONS_PLACEHOLDER_VALUE: () => FILTERS_BUTTONS_PLACEHOLDER_VALUE,
  FILTERS_BUTTONS_SELECT_ALL: () => FILTERS_BUTTONS_SELECT_ALL,
  FILTERS_CONDITIONS_AFTER: () => FILTERS_CONDITIONS_AFTER,
  FILTERS_CONDITIONS_BEFORE: () => FILTERS_CONDITIONS_BEFORE,
  FILTERS_CONDITIONS_BEGINS_WITH: () => FILTERS_CONDITIONS_BEGINS_WITH,
  FILTERS_CONDITIONS_BETWEEN: () => FILTERS_CONDITIONS_BETWEEN,
  FILTERS_CONDITIONS_BY_VALUE: () => FILTERS_CONDITIONS_BY_VALUE,
  FILTERS_CONDITIONS_CONTAINS: () => FILTERS_CONDITIONS_CONTAINS,
  FILTERS_CONDITIONS_EMPTY: () => FILTERS_CONDITIONS_EMPTY,
  FILTERS_CONDITIONS_ENDS_WITH: () => FILTERS_CONDITIONS_ENDS_WITH,
  FILTERS_CONDITIONS_EQUAL: () => FILTERS_CONDITIONS_EQUAL,
  FILTERS_CONDITIONS_GREATER_THAN: () => FILTERS_CONDITIONS_GREATER_THAN,
  FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL: () => FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL,
  FILTERS_CONDITIONS_LESS_THAN: () => FILTERS_CONDITIONS_LESS_THAN,
  FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL: () => FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL,
  FILTERS_CONDITIONS_NAMESPACE: () => FILTERS_CONDITIONS_NAMESPACE,
  FILTERS_CONDITIONS_NONE: () => FILTERS_CONDITIONS_NONE,
  FILTERS_CONDITIONS_NOT_BETWEEN: () => FILTERS_CONDITIONS_NOT_BETWEEN,
  FILTERS_CONDITIONS_NOT_CONTAIN: () => FILTERS_CONDITIONS_NOT_CONTAIN,
  FILTERS_CONDITIONS_NOT_EMPTY: () => FILTERS_CONDITIONS_NOT_EMPTY,
  FILTERS_CONDITIONS_NOT_EQUAL: () => FILTERS_CONDITIONS_NOT_EQUAL,
  FILTERS_CONDITIONS_TODAY: () => FILTERS_CONDITIONS_TODAY,
  FILTERS_CONDITIONS_TOMORROW: () => FILTERS_CONDITIONS_TOMORROW,
  FILTERS_CONDITIONS_YESTERDAY: () => FILTERS_CONDITIONS_YESTERDAY,
  FILTERS_DIVS_FILTER_BY_CONDITION: () => FILTERS_DIVS_FILTER_BY_CONDITION,
  FILTERS_DIVS_FILTER_BY_VALUE: () => FILTERS_DIVS_FILTER_BY_VALUE,
  FILTERS_LABELS_CONJUNCTION: () => FILTERS_LABELS_CONJUNCTION,
  FILTERS_LABELS_DISJUNCTION: () => FILTERS_LABELS_DISJUNCTION,
  FILTERS_NAMESPACE: () => FILTERS_NAMESPACE,
  FILTERS_VALUES_BLANK_CELLS: () => FILTERS_VALUES_BLANK_CELLS
});
var CONTEXT_MENU_ITEMS_NAMESPACE = "ContextMenu:items";
var CM_ALIAS = CONTEXT_MENU_ITEMS_NAMESPACE;
var CONTEXTMENU_ITEMS_NO_ITEMS = `${CM_ALIAS}.noItems`;
var CONTEXTMENU_ITEMS_ROW_ABOVE = `${CM_ALIAS}.insertRowAbove`;
var CONTEXTMENU_ITEMS_ROW_BELOW = `${CM_ALIAS}.insertRowBelow`;
var CONTEXTMENU_ITEMS_INSERT_LEFT = `${CM_ALIAS}.insertColumnOnTheLeft`;
var CONTEXTMENU_ITEMS_INSERT_RIGHT = `${CM_ALIAS}.insertColumnOnTheRight`;
var CONTEXTMENU_ITEMS_REMOVE_ROW = `${CM_ALIAS}.removeRow`;
var CONTEXTMENU_ITEMS_REMOVE_COLUMN = `${CM_ALIAS}.removeColumn`;
var CONTEXTMENU_ITEMS_UNDO = `${CM_ALIAS}.undo`;
var CONTEXTMENU_ITEMS_REDO = `${CM_ALIAS}.redo`;
var CONTEXTMENU_ITEMS_READ_ONLY = `${CM_ALIAS}.readOnly`;
var CONTEXTMENU_ITEMS_CLEAR_COLUMN = `${CM_ALIAS}.clearColumn`;
var CONTEXTMENU_ITEMS_COPY = `${CM_ALIAS}.copy`;
var CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_HEADERS = `${CM_ALIAS}.copyWithHeaders`;
var CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_GROUP_HEADERS = `${CM_ALIAS}.copyWithGroupHeaders`;
var CONTEXTMENU_ITEMS_COPY_COLUMN_HEADERS_ONLY = `${CM_ALIAS}.copyHeadersOnly`;
var CONTEXTMENU_ITEMS_CUT = `${CM_ALIAS}.cut`;
var CONTEXTMENU_ITEMS_FREEZE_COLUMN = `${CM_ALIAS}.freezeColumn`;
var CONTEXTMENU_ITEMS_UNFREEZE_COLUMN = `${CM_ALIAS}.unfreezeColumn`;
var CONTEXTMENU_ITEMS_MERGE_CELLS = `${CM_ALIAS}.mergeCells`;
var CONTEXTMENU_ITEMS_UNMERGE_CELLS = `${CM_ALIAS}.unmergeCells`;
var CONTEXTMENU_ITEMS_ADD_COMMENT = `${CM_ALIAS}.addComment`;
var CONTEXTMENU_ITEMS_EDIT_COMMENT = `${CM_ALIAS}.editComment`;
var CONTEXTMENU_ITEMS_REMOVE_COMMENT = `${CM_ALIAS}.removeComment`;
var CONTEXTMENU_ITEMS_READ_ONLY_COMMENT = `${CM_ALIAS}.readOnlyComment`;
var CONTEXTMENU_ITEMS_ALIGNMENT = `${CM_ALIAS}.align`;
var CONTEXTMENU_ITEMS_ALIGNMENT_LEFT = `${CM_ALIAS}.align.left`;
var CONTEXTMENU_ITEMS_ALIGNMENT_CENTER = `${CM_ALIAS}.align.center`;
var CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT = `${CM_ALIAS}.align.right`;
var CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY = `${CM_ALIAS}.align.justify`;
var CONTEXTMENU_ITEMS_ALIGNMENT_TOP = `${CM_ALIAS}.align.top`;
var CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE = `${CM_ALIAS}.align.middle`;
var CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM = `${CM_ALIAS}.align.bottom`;
var CONTEXTMENU_ITEMS_BORDERS = `${CM_ALIAS}.borders`;
var CONTEXTMENU_ITEMS_BORDERS_TOP = `${CM_ALIAS}.borders.top`;
var CONTEXTMENU_ITEMS_BORDERS_RIGHT = `${CM_ALIAS}.borders.right`;
var CONTEXTMENU_ITEMS_BORDERS_BOTTOM = `${CM_ALIAS}.borders.bottom`;
var CONTEXTMENU_ITEMS_BORDERS_LEFT = `${CM_ALIAS}.borders.left`;
var CONTEXTMENU_ITEMS_REMOVE_BORDERS = `${CM_ALIAS}.borders.remove`;
var CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD = `${CM_ALIAS}.nestedHeaders.insertChildRow`;
var CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD = `${CM_ALIAS}.nestedHeaders.detachFromParent`;
var CONTEXTMENU_ITEMS_HIDE_COLUMN = `${CM_ALIAS}.hideColumn`;
var CONTEXTMENU_ITEMS_SHOW_COLUMN = `${CM_ALIAS}.showColumn`;
var CONTEXTMENU_ITEMS_HIDE_ROW = `${CM_ALIAS}.hideRow`;
var CONTEXTMENU_ITEMS_SHOW_ROW = `${CM_ALIAS}.showRow`;
var FILTERS_NAMESPACE = "Filters:";
var FILTERS_CONDITIONS_NAMESPACE = `${FILTERS_NAMESPACE}conditions`;
var FILTERS_CONDITIONS_NONE = `${FILTERS_CONDITIONS_NAMESPACE}.none`;
var FILTERS_CONDITIONS_EMPTY = `${FILTERS_CONDITIONS_NAMESPACE}.isEmpty`;
var FILTERS_CONDITIONS_NOT_EMPTY = `${FILTERS_CONDITIONS_NAMESPACE}.isNotEmpty`;
var FILTERS_CONDITIONS_EQUAL = `${FILTERS_CONDITIONS_NAMESPACE}.isEqualTo`;
var FILTERS_CONDITIONS_NOT_EQUAL = `${FILTERS_CONDITIONS_NAMESPACE}.isNotEqualTo`;
var FILTERS_CONDITIONS_BEGINS_WITH = `${FILTERS_CONDITIONS_NAMESPACE}.beginsWith`;
var FILTERS_CONDITIONS_ENDS_WITH = `${FILTERS_CONDITIONS_NAMESPACE}.endsWith`;
var FILTERS_CONDITIONS_CONTAINS = `${FILTERS_CONDITIONS_NAMESPACE}.contains`;
var FILTERS_CONDITIONS_NOT_CONTAIN = `${FILTERS_CONDITIONS_NAMESPACE}.doesNotContain`;
var FILTERS_CONDITIONS_BY_VALUE = `${FILTERS_CONDITIONS_NAMESPACE}.byValue`;
var FILTERS_CONDITIONS_GREATER_THAN = `${FILTERS_CONDITIONS_NAMESPACE}.greaterThan`;
var FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL = `${FILTERS_CONDITIONS_NAMESPACE}.greaterThanOrEqualTo`;
var FILTERS_CONDITIONS_LESS_THAN = `${FILTERS_CONDITIONS_NAMESPACE}.lessThan`;
var FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL = `${FILTERS_CONDITIONS_NAMESPACE}.lessThanOrEqualTo`;
var FILTERS_CONDITIONS_BETWEEN = `${FILTERS_CONDITIONS_NAMESPACE}.isBetween`;
var FILTERS_CONDITIONS_NOT_BETWEEN = `${FILTERS_CONDITIONS_NAMESPACE}.isNotBetween`;
var FILTERS_CONDITIONS_AFTER = `${FILTERS_CONDITIONS_NAMESPACE}.after`;
var FILTERS_CONDITIONS_BEFORE = `${FILTERS_CONDITIONS_NAMESPACE}.before`;
var FILTERS_CONDITIONS_TODAY = `${FILTERS_CONDITIONS_NAMESPACE}.today`;
var FILTERS_CONDITIONS_TOMORROW = `${FILTERS_CONDITIONS_NAMESPACE}.tomorrow`;
var FILTERS_CONDITIONS_YESTERDAY = `${FILTERS_CONDITIONS_NAMESPACE}.yesterday`;
var FILTERS_DIVS_FILTER_BY_CONDITION = `${FILTERS_NAMESPACE}labels.filterByCondition`;
var FILTERS_DIVS_FILTER_BY_VALUE = `${FILTERS_NAMESPACE}labels.filterByValue`;
var FILTERS_LABELS_CONJUNCTION = `${FILTERS_NAMESPACE}labels.conjunction`;
var FILTERS_LABELS_DISJUNCTION = `${FILTERS_NAMESPACE}labels.disjunction`;
var FILTERS_VALUES_BLANK_CELLS = `${FILTERS_NAMESPACE}values.blankCells`;
var FILTERS_BUTTONS_SELECT_ALL = `${FILTERS_NAMESPACE}buttons.selectAll`;
var FILTERS_BUTTONS_CLEAR = `${FILTERS_NAMESPACE}buttons.clear`;
var FILTERS_BUTTONS_OK = `${FILTERS_NAMESPACE}buttons.ok`;
var FILTERS_BUTTONS_CANCEL = `${FILTERS_NAMESPACE}buttons.cancel`;
var FILTERS_BUTTONS_PLACEHOLDER_SEARCH = `${FILTERS_NAMESPACE}buttons.placeholder.search`;
var FILTERS_BUTTONS_PLACEHOLDER_VALUE = `${FILTERS_NAMESPACE}buttons.placeholder.value`;
var FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE = `${FILTERS_NAMESPACE}buttons.placeholder.secondValue`;
var CHECKBOX_RENDERER_NAMESPACE = "CheckboxRenderer:";
var CHECKBOX_CHECKED = `${CHECKBOX_RENDERER_NAMESPACE}checked`;
var CHECKBOX_UNCHECKED = `${CHECKBOX_RENDERER_NAMESPACE}unchecked`;

// node_modules/handsontable/selection/highlight/visualSelection.mjs
function _defineProperty40(obj, key, value) {
  key = _toPropertyKey40(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey40(t) {
  var i = _toPrimitive40(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive40(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var VisualSelection = class extends selection_default {
  constructor(settings, visualCellRange) {
    super(settings, null);
    _defineProperty40(this, "visualCellRange", null);
    this.visualCellRange = visualCellRange || null;
    this.commit();
  }
  /**
   * Adds a cell coords to the selection.
   *
   * @param {CellCoords} coords Visual coordinates of a cell.
   * @returns {VisualSelection}
   */
  add(coords) {
    if (this.visualCellRange === null) {
      this.visualCellRange = this.settings.createCellRange(coords);
    } else {
      this.visualCellRange.expand(coords);
    }
    return this;
  }
  /**
   * Clears visual and renderable selection.
   *
   * @returns {VisualSelection}
   */
  clear() {
    this.visualCellRange = null;
    return super.clear();
  }
  /**
   * Trims the passed cell range object by removing all coordinates that points to the hidden rows
   * or columns. The result is a new cell range object that points only to the visible indexes or `null`.
   *
   * @private
   * @param {CellRange} cellRange Cells range object to be trimmed.
   * @returns {CellRange} Visual non-hidden cells range coordinates.
   */
  trimToVisibleCellsRangeOnly(_ref) {
    let {
      from,
      to
    } = _ref;
    let visibleFromCoords = this.getNearestNotHiddenCoords(from, 1);
    let visibleToCoords = this.getNearestNotHiddenCoords(to, -1);
    if (visibleFromCoords === null || visibleToCoords === null) {
      return null;
    }
    if (visibleFromCoords.row > visibleToCoords.row || visibleFromCoords.col > visibleToCoords.col) {
      visibleFromCoords = from;
      visibleToCoords = to;
    }
    return this.settings.createCellRange(visibleFromCoords, visibleFromCoords, visibleToCoords);
  }
  /**
   * Gets nearest coordinates that points to the visible row and column indexes. If there are no visible
   * rows and/or columns the `null` value is returned.
   *
   * @private
   * @param {CellCoords} coords The coords object as starting point for finding the nearest visible coordinates.
   * @param {1|-1} rowSearchDirection The search direction. For value 1, it means searching from top to bottom for
   *                                  rows and from left to right for columns. For -1, it is the other way around.
   * @param {1|-1} columnSearchDirection The same as above but for rows.
   * @returns {CellCoords|null} Visual cell coordinates.
   */
  getNearestNotHiddenCoords(coords, rowSearchDirection) {
    let columnSearchDirection = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rowSearchDirection;
    const nextVisibleRow = this.getNearestNotHiddenIndex(this.settings.rowIndexMapper, coords.row, rowSearchDirection);
    if (nextVisibleRow === null) {
      return null;
    }
    const nextVisibleColumn = this.getNearestNotHiddenIndex(this.settings.columnIndexMapper, coords.col, columnSearchDirection);
    if (nextVisibleColumn === null) {
      return null;
    }
    return this.settings.createCellCoords(nextVisibleRow, nextVisibleColumn);
  }
  /**
   * Gets nearest visual index. If there are no visible rows or columns the `null` value is returned.
   *
   * @private
   * @param {IndexMapper} indexMapper The IndexMapper instance for specific axis.
   * @param {number} visualIndex The index as starting point for finding the nearest visible index.
   * @param {1|-1} searchDirection The search direction. For value 1, it means searching from top to bottom for
   *                               rows and from left to right for columns. For -1, it is the other way around.
   * @returns {number|null} Visual row/column index.
   */
  getNearestNotHiddenIndex(indexMapper, visualIndex, searchDirection) {
    if (visualIndex < 0) {
      return visualIndex;
    }
    return indexMapper.getNearestNotHiddenIndex(visualIndex, searchDirection);
  }
  /**
   * Override internally stored visual indexes added by the Selection's `add` function. It should be executed
   * at the end of process of adding visual selection coordinates.
   *
   * @returns {VisualSelection}
   */
  commit() {
    if (this.visualCellRange === null) {
      return this;
    }
    const trimmedCellRange = this.trimToVisibleCellsRangeOnly(this.visualCellRange);
    if (trimmedCellRange === null) {
      this.cellRange = null;
    } else {
      this.cellRange = this.createRenderableCellRange(trimmedCellRange.from, trimmedCellRange.to);
    }
    return this;
  }
  /**
   * Some selection may be a part of broader cell range. This function sync coordinates of current selection
   * and the broader cell range when needed (current selection can't be presented visually).
   *
   * @param {CellRange} broaderCellRange Visual range. Actual cell range may be contained in the broader cell range.
   * When there is no way to represent some cell range visually we try to find range containing just the first visible cell.
   *
   * Warn: Please keep in mind that this function may change coordinates of the handled broader range.
   *
   * @returns {VisualSelection}
   */
  syncWith(broaderCellRange) {
    const coordsFrom = broaderCellRange.from.clone().normalize();
    const rowDirection = broaderCellRange.getVerticalDirection() === "N-S" ? 1 : -1;
    const columnDirection = broaderCellRange.getHorizontalDirection() === "W-E" ? 1 : -1;
    const renderableHighlight = this.settings.visualToRenderableCoords(this.visualCellRange.highlight);
    let cellCoordsVisual = null;
    if (renderableHighlight === null || renderableHighlight.col === null || renderableHighlight.row === null) {
      cellCoordsVisual = this.getNearestNotHiddenCoords(coordsFrom, rowDirection, columnDirection);
    }
    if (cellCoordsVisual !== null && broaderCellRange.overlaps(cellCoordsVisual)) {
      const currentHighlight = broaderCellRange.highlight.clone();
      if (currentHighlight.row >= 0) {
        currentHighlight.row = cellCoordsVisual.row;
      }
      if (currentHighlight.col >= 0) {
        currentHighlight.col = cellCoordsVisual.col;
      }
      if (this.cellRange === null) {
        const cellCoordsRenderable = this.settings.visualToRenderableCoords(currentHighlight);
        this.cellRange = this.settings.createCellRange(cellCoordsRenderable);
      }
      broaderCellRange.setHighlight(currentHighlight);
    }
    if (this.settings.selectionType === "focus" && renderableHighlight !== null && cellCoordsVisual === null) {
      broaderCellRange.setHighlight(this.visualCellRange.highlight);
    }
    return this;
  }
  /**
   * Returns the top left (TL) and bottom right (BR) selection coordinates (renderable indexes).
   * The method overwrites the original method to support header selection for hidden cells.
   * To make the header selection working, the CellCoords and CellRange have to support not
   * complete coordinates (`null` values for example, `row: null`, `col: 2`).
   *
   * @returns {Array} Returns array of coordinates for example `[1, 1, 5, 5]`.
   */
  getCorners() {
    const {
      from,
      to
    } = this.cellRange;
    return [Math.min(from.row, to.row), Math.min(from.col, to.col), Math.max(from.row, to.row), Math.max(from.col, to.col)];
  }
  /**
   * Returns the top left (or top right in RTL) and bottom right (or bottom left in RTL) selection
   * coordinates (visual indexes).
   *
   * @returns {Array} Returns array of coordinates for example `[1, 1, 5, 5]`.
   */
  getVisualCorners() {
    const topStart = this.settings.renderableToVisualCoords(this.cellRange.getTopStartCorner());
    const bottomEnd = this.settings.renderableToVisualCoords(this.cellRange.getBottomEndCorner());
    return [topStart.row, topStart.col, bottomEnd.row, bottomEnd.col];
  }
  /**
   * Creates a new CellRange object based on visual coordinates which before object creation are
   * translated to renderable indexes.
   *
   * @param {CellCoords} visualFromCoords The CellCoords object which contains coordinates that
   *                                      points to the beginning of the selection.
   * @param {CellCoords} visualToCoords The CellCoords object which contains coordinates that
   *                                    points to the end of the selection.
   * @returns {CellRange|null}
   */
  createRenderableCellRange(visualFromCoords, visualToCoords) {
    const renderableFromCoords = this.settings.visualToRenderableCoords(visualFromCoords);
    const renderableToCoords = this.settings.visualToRenderableCoords(visualToCoords);
    if (renderableFromCoords.row === null || renderableFromCoords.col === null || renderableToCoords.row === null || renderableToCoords.col === null) {
      return null;
    }
    return this.settings.createCellRange(renderableFromCoords, renderableFromCoords, renderableToCoords);
  }
};
var visualSelection_default = VisualSelection;

// node_modules/handsontable/selection/highlight/types/activeHeader.mjs
function createHighlight(_ref) {
  let _a = _ref, {
    activeHeaderClassName
  } = _a, restOptions = __objRest(_a, [
    "activeHeaderClassName"
  ]);
  return new visualSelection_default(__spreadProps(__spreadValues({
    className: activeHeaderClassName
  }, restOptions), {
    selectionType: ACTIVE_HEADER_TYPE
  }));
}

// node_modules/handsontable/selection/highlight/types/areaLayered.mjs
function createHighlight2(_ref) {
  let _a = _ref, {
    areaCornerVisible
  } = _a, restOptions = __objRest(_a, [
    "areaCornerVisible"
  ]);
  return new visualSelection_default(__spreadProps(__spreadValues({
    className: "area",
    createLayers: true,
    border: {
      width: 1,
      color: "#4b89ff",
      cornerVisible: areaCornerVisible
    }
  }, restOptions), {
    selectionType: AREA_TYPE
  }));
}

// node_modules/handsontable/selection/highlight/types/area.mjs
function createHighlight3(_ref) {
  let restOptions = __objRest(_ref, []);
  return new visualSelection_default(__spreadProps(__spreadValues({
    className: "highlight"
  }, restOptions), {
    selectionType: AREA_TYPE
  }));
}

// node_modules/handsontable/selection/highlight/types/column.mjs
function createHighlight4(_ref) {
  let _a = _ref, {
    columnClassName
  } = _a, restOptions = __objRest(_a, [
    "columnClassName"
  ]);
  return new visualSelection_default(__spreadProps(__spreadValues({
    className: columnClassName
  }, restOptions), {
    selectionType: COLUMN_TYPE
  }));
}

// node_modules/handsontable/selection/highlight/types/focus.mjs
function createHighlight5(_ref) {
  let _a = _ref, {
    cellCornerVisible
  } = _a, restOptions = __objRest(_a, [
    "cellCornerVisible"
  ]);
  return new visualSelection_default(__spreadProps(__spreadValues({
    className: "current",
    headerAttributes: [A11Y_SELECTED()],
    border: {
      width: 2,
      color: "#4b89ff",
      cornerVisible: cellCornerVisible
    }
  }, restOptions), {
    selectionType: FOCUS_TYPE
  }));
}

// node_modules/handsontable/selection/highlight/types/customSelection.mjs
function createHighlight6(_ref) {
  let _a = _ref, {
    border,
    visualCellRange
  } = _a, restOptions = __objRest(_a, [
    "border",
    "visualCellRange"
  ]);
  return new visualSelection_default(__spreadProps(__spreadValues(__spreadValues({}, border), restOptions), {
    selectionType: CUSTOM_SELECTION_TYPE
  }), visualCellRange);
}

// node_modules/handsontable/selection/highlight/types/fill.mjs
function createHighlight7(_ref) {
  let restOptions = __objRest(_ref, []);
  return new visualSelection_default(__spreadProps(__spreadValues({
    className: "fill",
    border: {
      width: 1,
      color: "#ff0000"
    }
  }, restOptions), {
    selectionType: FILL_TYPE
  }));
}

// node_modules/handsontable/selection/highlight/types/header.mjs
function createHighlight8(_ref) {
  let _a = _ref, {
    headerClassName
  } = _a, restOptions = __objRest(_a, [
    "headerClassName"
  ]);
  return new visualSelection_default(__spreadProps(__spreadValues({
    className: headerClassName
  }, restOptions), {
    selectionType: HEADER_TYPE
  }));
}

// node_modules/handsontable/selection/highlight/types/row.mjs
function createHighlight9(_ref) {
  let _a = _ref, {
    rowClassName
  } = _a, restOptions = __objRest(_a, [
    "rowClassName"
  ]);
  return new visualSelection_default(__spreadProps(__spreadValues({
    className: rowClassName
  }, restOptions), {
    selectionType: ROW_TYPE
  }));
}

// node_modules/handsontable/selection/highlight/highlight.mjs
function _classPrivateMethodInitSpec4(obj, privateSet) {
  _checkPrivateRedeclaration13(obj, privateSet);
  privateSet.add(obj);
}
function _checkPrivateRedeclaration13(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty41(obj, key, value) {
  key = _toPropertyKey41(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey41(t) {
  var i = _toPrimitive41(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive41(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _assertClassBrand13(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _Highlight_brand = /* @__PURE__ */ new WeakSet();
var Highlight = class {
  constructor(options) {
    _classPrivateMethodInitSpec4(this, _Highlight_brand);
    _defineProperty41(this, "options", void 0);
    _defineProperty41(this, "layerLevel", 0);
    _defineProperty41(this, "focus", void 0);
    _defineProperty41(this, "fill", void 0);
    _defineProperty41(this, "layeredAreas", /* @__PURE__ */ new Map());
    _defineProperty41(this, "areas", /* @__PURE__ */ new Map());
    _defineProperty41(this, "rowHeaders", /* @__PURE__ */ new Map());
    _defineProperty41(this, "columnHeaders", /* @__PURE__ */ new Map());
    _defineProperty41(this, "activeRowHeaders", /* @__PURE__ */ new Map());
    _defineProperty41(this, "activeColumnHeaders", /* @__PURE__ */ new Map());
    _defineProperty41(this, "activeCornerHeaders", /* @__PURE__ */ new Map());
    _defineProperty41(this, "rowHighlights", /* @__PURE__ */ new Map());
    _defineProperty41(this, "columnHighlights", /* @__PURE__ */ new Map());
    _defineProperty41(this, "customSelections", []);
    this.options = options;
    this.focus = createHighlight5(options);
    this.fill = createHighlight7(options);
  }
  /**
   * Check if highlight cell rendering is disabled for specified highlight type.
   *
   * @param {string} highlightType Highlight type. Possible values are: `cell`, `area`, `fill` or `header`.
   * @param {CellCoords} coords The CellCoords instance with defined visual coordinates.
   * @returns {boolean}
   */
  isEnabledFor(highlightType, coords) {
    let type = highlightType;
    if (highlightType === FOCUS_TYPE) {
      type = "current";
    }
    let disableHighlight = this.options.disabledCellSelection(coords.row, coords.col);
    if (typeof disableHighlight === "string") {
      disableHighlight = [disableHighlight];
    }
    return disableHighlight === false || Array.isArray(disableHighlight) && !disableHighlight.includes(type);
  }
  /**
   * Set a new layer level to make access to the desire `area` and `header` highlights.
   *
   * @param {number} [level=0] Layer level to use.
   * @returns {Highlight}
   */
  useLayerLevel() {
    let level = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    this.layerLevel = level;
    return this;
  }
  /**
   * Get Walkontable Selection instance created for controlling highlight of the currently
   * focused cell (or header).
   *
   * @returns {Selection}
   */
  getFocus() {
    return this.focus;
  }
  /**
   * Get Walkontable Selection instance created for controlling highlight of the autofill functionality.
   *
   * @returns {Selection}
   */
  getFill() {
    return this.fill;
  }
  /**
   * Creates (if not exist in the cache) Walkontable Selection instance created for controlling
   * `area` highlights.
   *
   * @returns {Selection}
   */
  createLayeredArea() {
    return _assertClassBrand13(_Highlight_brand, this, _createHighlight).call(this, this.layeredAreas, createHighlight2);
  }
  /**
   * Get all Walkontable Selection instances which describes the state of the visual highlight of the cells.
   *
   * @returns {Selection[]}
   */
  getLayeredAreas() {
    return [...this.layeredAreas.values()];
  }
  /**
   * Creates (if not exist in the cache) Walkontable Selection instance created for controlling
   * `highlight` highlights.
   *
   * @returns {Selection}
   */
  createArea() {
    return _assertClassBrand13(_Highlight_brand, this, _createHighlight).call(this, this.areas, createHighlight3);
  }
  /**
   * Get all Walkontable Selection instances which describes the state of the visual highlight of the cells.
   *
   * @returns {Selection[]}
   */
  getAreas() {
    return [...this.areas.values()];
  }
  /**
   * Creates (if not exist in the cache) Walkontable Selection instance created for controlling
   * header highlight for rows.
   *
   * @returns {Selection}
   */
  createRowHeader() {
    return _assertClassBrand13(_Highlight_brand, this, _createHighlight).call(this, this.rowHeaders, createHighlight8);
  }
  /**
   * Get all Walkontable Selection instances which describes the state of the visual highlight of the headers.
   *
   * @returns {Selection[]}
   */
  getRowHeaders() {
    return [...this.rowHeaders.values()];
  }
  /**
   * Creates (if not exist in the cache) Walkontable Selection instance created for controlling
   * header highlight for columns.
   *
   * @returns {Selection}
   */
  createColumnHeader() {
    return _assertClassBrand13(_Highlight_brand, this, _createHighlight).call(this, this.columnHeaders, createHighlight8);
  }
  /**
   * Get all Walkontable Selection instances which describes the state of the visual highlight of the headers.
   *
   * @returns {Selection[]}
   */
  getColumnHeaders() {
    return [...this.columnHeaders.values()];
  }
  /**
   * Creates (if not exist in the cache) Walkontable Selection instance created for controlling
   * highlight for active row headers.
   *
   * @returns {Selection}
   */
  createActiveRowHeader() {
    return _assertClassBrand13(_Highlight_brand, this, _createHighlight).call(this, this.activeRowHeaders, createHighlight);
  }
  /**
   * Get all Walkontable Selection instances which describes the state of the visual highlight of the active headers.
   *
   * @returns {Selection[]}
   */
  getActiveRowHeaders() {
    return [...this.activeRowHeaders.values()];
  }
  /**
   * Creates (if not exist in the cache) Walkontable Selection instance created for controlling
   * highlight for active column headers.
   *
   * @returns {Selection}
   */
  createActiveColumnHeader() {
    return _assertClassBrand13(_Highlight_brand, this, _createHighlight).call(this, this.activeColumnHeaders, createHighlight);
  }
  /**
   * Get all Walkontable Selection instances which describes the state of the visual highlight of the active headers.
   *
   * @returns {Selection[]}
   */
  getActiveColumnHeaders() {
    return [...this.activeColumnHeaders.values()];
  }
  /**
   * Creates (if not exist in the cache) Walkontable Selection instance created for controlling
   * highlight for the headers corner.
   *
   * @returns {Selection}
   */
  createActiveCornerHeader() {
    return _assertClassBrand13(_Highlight_brand, this, _createHighlight).call(this, this.activeCornerHeaders, createHighlight);
  }
  /**
   * Get all Walkontable Selection instances which describes the state of the visual highlight of the headers corner.
   *
   * @returns {Selection[]}
   */
  getActiveCornerHeaders() {
    return [...this.activeCornerHeaders.values()];
  }
  /**
   * Creates (if not exist in the cache) Walkontable Selection instance created for controlling
   * highlight cells in a row.
   *
   * @returns {Selection}
   */
  createRowHighlight() {
    return _assertClassBrand13(_Highlight_brand, this, _createHighlight).call(this, this.rowHighlights, createHighlight9);
  }
  /**
   * Get all Walkontable Selection instances which describes the state of the rows highlighting.
   *
   * @returns {Selection[]}
   */
  getRowHighlights() {
    return [...this.rowHighlights.values()];
  }
  /**
   * Creates (if not exist in the cache) Walkontable Selection instance created for controlling
   * highlight cells in a column.
   *
   * @returns {Selection}
   */
  createColumnHighlight() {
    return _assertClassBrand13(_Highlight_brand, this, _createHighlight).call(this, this.columnHighlights, createHighlight4);
  }
  /**
   * Get all Walkontable Selection instances which describes the state of the columns highlighting.
   *
   * @returns {Selection[]}
   */
  getColumnHighlights() {
    return [...this.columnHighlights.values()];
  }
  /**
   * Get Walkontable Selection instance created for controlling highlight of the custom selection functionality.
   *
   * @returns {Selection}
   */
  getCustomSelections() {
    return [...this.customSelections.values()];
  }
  /**
   * Add selection to the custom selection instance. The new selection are added to the end of the selection collection.
   *
   * @param {object} selectionInstance The selection instance.
   */
  addCustomSelection(selectionInstance) {
    this.customSelections.push(createHighlight6(__spreadValues(__spreadValues({}, this.options), selectionInstance)));
  }
  /**
   * Perform cleaning visual highlights for the whole table.
   */
  clear() {
    this.focus.clear();
    this.fill.clear();
    arrayEach(this.areas.values(), (highlight) => void highlight.clear());
    arrayEach(this.layeredAreas.values(), (highlight) => void highlight.clear());
    arrayEach(this.rowHeaders.values(), (highlight) => void highlight.clear());
    arrayEach(this.columnHeaders.values(), (highlight) => void highlight.clear());
    arrayEach(this.activeRowHeaders.values(), (highlight) => void highlight.clear());
    arrayEach(this.activeColumnHeaders.values(), (highlight) => void highlight.clear());
    arrayEach(this.activeCornerHeaders.values(), (highlight) => void highlight.clear());
    arrayEach(this.rowHighlights.values(), (highlight) => void highlight.clear());
    arrayEach(this.columnHighlights.values(), (highlight) => void highlight.clear());
  }
  /**
   * This object can be iterate over using `for of` syntax or using internal `arrayEach` helper.
   *
   * @returns {Selection[]}
   */
  [Symbol.iterator]() {
    return [this.focus, this.fill, ...this.areas.values(), ...this.layeredAreas.values(), ...this.rowHeaders.values(), ...this.columnHeaders.values(), ...this.activeRowHeaders.values(), ...this.activeColumnHeaders.values(), ...this.activeCornerHeaders.values(), ...this.rowHighlights.values(), ...this.columnHighlights.values(), ...this.customSelections][Symbol.iterator]();
  }
};
function _createHighlight(cacheMap, highlightFactory) {
  const layerLevel = this.layerLevel;
  if (cacheMap.has(layerLevel)) {
    return cacheMap.get(layerLevel);
  }
  const highlight = highlightFactory(__spreadValues({
    layerLevel
  }, this.options));
  cacheMap.set(layerLevel, highlight);
  return highlight;
}
var highlight_default = Highlight;

// node_modules/handsontable/selection/utils.mjs
var SELECTION_TYPE_UNRECOGNIZED = 0;
var SELECTION_TYPE_EMPTY = 1;
var SELECTION_TYPE_ARRAY = 2;
var SELECTION_TYPE_OBJECT = 3;
var SELECTION_TYPES = [SELECTION_TYPE_OBJECT, SELECTION_TYPE_ARRAY];
var ARRAY_TYPE_PATTERN = [["number"], ["number", "string"], ["number", "undefined"], ["number", "string", "undefined"]];
var rootCall = Symbol("root");
var childCall = Symbol("child");
function detectSelectionType(selectionRanges) {
  let _callSymbol = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rootCall;
  if (_callSymbol !== rootCall && _callSymbol !== childCall) {
    throw new Error("The second argument is used internally only and cannot be overwritten.");
  }
  const isArray = Array.isArray(selectionRanges);
  const isRootCall = _callSymbol === rootCall;
  let result = SELECTION_TYPE_UNRECOGNIZED;
  if (isArray) {
    const firstItem = selectionRanges[0];
    if (selectionRanges.length === 0) {
      result = SELECTION_TYPE_EMPTY;
    } else if (isRootCall && firstItem instanceof range_default) {
      result = SELECTION_TYPE_OBJECT;
    } else if (isRootCall && Array.isArray(firstItem)) {
      result = detectSelectionType(firstItem, childCall);
    } else if (selectionRanges.length >= 2 && selectionRanges.length <= 4) {
      const isArrayType = !selectionRanges.some((value, index2) => !ARRAY_TYPE_PATTERN[index2].includes(typeof value));
      if (isArrayType) {
        result = SELECTION_TYPE_ARRAY;
      }
    }
  }
  return result;
}
function normalizeSelectionFactory(type) {
  let {
    createCellCoords,
    createCellRange,
    keepDirection = false,
    propToCol
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!SELECTION_TYPES.includes(type)) {
    throw new Error("Unsupported selection ranges schema type was provided.");
  }
  return function(selection) {
    const isObjectType = type === SELECTION_TYPE_OBJECT;
    let rowStart = isObjectType ? selection.from.row : selection[0];
    let columnStart = isObjectType ? selection.from.col : selection[1];
    let rowEnd = isObjectType ? selection.to.row : selection[2];
    let columnEnd = isObjectType ? selection.to.col : selection[3];
    if (typeof propToCol === "function") {
      if (typeof columnStart === "string") {
        columnStart = propToCol(columnStart);
      }
      if (typeof columnEnd === "string") {
        columnEnd = propToCol(columnEnd);
      }
    }
    if (isUndefined(rowEnd)) {
      rowEnd = rowStart;
    }
    if (isUndefined(columnEnd)) {
      columnEnd = columnStart;
    }
    if (!keepDirection) {
      const origRowStart = rowStart;
      const origColumnStart = columnStart;
      const origRowEnd = rowEnd;
      const origColumnEnd = columnEnd;
      rowStart = Math.min(origRowStart, origRowEnd);
      columnStart = Math.min(origColumnStart, origColumnEnd);
      rowEnd = Math.max(origRowStart, origRowEnd);
      columnEnd = Math.max(origColumnStart, origColumnEnd);
    }
    const from = createCellCoords(rowStart, columnStart);
    const to = createCellCoords(rowEnd, columnEnd);
    return createCellRange(from, from, to);
  };
}
function transformSelectionToColumnDistance(hotInstance) {
  const selectionType = detectSelectionType(hotInstance.getSelected());
  if (selectionType === SELECTION_TYPE_UNRECOGNIZED || selectionType === SELECTION_TYPE_EMPTY) {
    return [];
  }
  const selectionSchemaNormalizer = normalizeSelectionFactory(selectionType, {
    createCellCoords: hotInstance._createCellCoords.bind(hotInstance),
    createCellRange: hotInstance._createCellRange.bind(hotInstance)
  });
  const unorderedIndexes = /* @__PURE__ */ new Set();
  arrayEach(hotInstance.getSelected(), (selection) => {
    const {
      from,
      to
    } = selectionSchemaNormalizer(selection);
    const columnNonHeaderStart = Math.max(from.col, 0);
    const amount = to.col - columnNonHeaderStart + 1;
    arrayEach(Array.from(new Array(amount), (_, i) => columnNonHeaderStart + i), (index2) => {
      if (!unorderedIndexes.has(index2)) {
        unorderedIndexes.add(index2);
      }
    });
  });
  const orderedIndexes = Array.from(unorderedIndexes).sort((a, b) => a - b);
  const normalizedColumnRanges = arrayReduce(orderedIndexes, (acc, visualColumnIndex, index2, array) => {
    if (index2 !== 0 && visualColumnIndex === array[index2 - 1] + 1) {
      acc[acc.length - 1][1] += 1;
    } else {
      acc.push([visualColumnIndex, 1]);
    }
    return acc;
  }, []);
  return normalizedColumnRanges;
}
function transformSelectionToRowDistance(hotInstance) {
  const selectionType = detectSelectionType(hotInstance.getSelected());
  if (selectionType === SELECTION_TYPE_UNRECOGNIZED || selectionType === SELECTION_TYPE_EMPTY) {
    return [];
  }
  const selectionSchemaNormalizer = normalizeSelectionFactory(selectionType, {
    createCellCoords: hotInstance._createCellCoords.bind(hotInstance),
    createCellRange: hotInstance._createCellRange.bind(hotInstance)
  });
  const unorderedIndexes = /* @__PURE__ */ new Set();
  arrayEach(hotInstance.getSelected(), (selection) => {
    const {
      from,
      to
    } = selectionSchemaNormalizer(selection);
    const rowNonHeaderStart = Math.max(from.row, 0);
    const amount = to.row - rowNonHeaderStart + 1;
    arrayEach(Array.from(new Array(amount), (_, i) => rowNonHeaderStart + i), (index2) => {
      if (!unorderedIndexes.has(index2)) {
        unorderedIndexes.add(index2);
      }
    });
  });
  const orderedIndexes = Array.from(unorderedIndexes).sort((a, b) => a - b);
  const normalizedRowRanges = arrayReduce(orderedIndexes, (acc, rowIndex, index2, array) => {
    if (index2 !== 0 && rowIndex === array[index2 - 1] + 1) {
      acc[acc.length - 1][1] += 1;
    } else {
      acc.push([rowIndex, 1]);
    }
    return acc;
  }, []);
  return normalizedRowRanges;
}

// node_modules/handsontable/selection/range.mjs
function _defineProperty42(obj, key, value) {
  key = _toPropertyKey42(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey42(t) {
  var i = _toPrimitive42(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive42(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var SelectionRange = class {
  constructor(createCellRange) {
    _defineProperty42(this, "ranges", []);
    _defineProperty42(this, "createCellRange", void 0);
    this.createCellRange = createCellRange;
  }
  /**
   * Check if selected range is empty.
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }
  /**
   * Set coordinates to the class instance. It clears all previously added coordinates and push `coords`
   * to the collection.
   *
   * @param {CellCoords} coords The CellCoords instance with defined visual coordinates.
   * @returns {SelectionRange}
   */
  set(coords) {
    this.clear();
    this.ranges.push(this.createCellRange(coords));
    return this;
  }
  /**
   * Add coordinates to the class instance. The new coordinates are added to the end of the range collection.
   *
   * @param {CellCoords} coords The CellCoords instance with defined visual coordinates.
   * @returns {SelectionRange}
   */
  add(coords) {
    this.ranges.push(this.createCellRange(coords));
    return this;
  }
  /**
   * Removes from the stack the last added coordinates.
   *
   * @returns {SelectionRange}
   */
  pop() {
    this.ranges.pop();
    return this;
  }
  /**
   * Get last added coordinates from ranges, it returns a CellRange instance.
   *
   * @returns {CellRange|undefined}
   */
  current() {
    return this.peekByIndex(this.size() - 1);
  }
  /**
   * Get previously added coordinates from ranges, it returns a CellRange instance.
   *
   * @returns {CellRange|undefined}
   */
  previous() {
    return this.peekByIndex(this.size() - 2);
  }
  /**
   * Returns `true` if coords is within selection coords. This method iterates through all selection layers to check if
   * the coords object is within selection range.
   *
   * @param {CellCoords} coords The CellCoords instance with defined visual coordinates.
   * @returns {boolean}
   */
  includes(coords) {
    return this.ranges.some((cellRange) => cellRange.includes(coords));
  }
  /**
   * Clear collection.
   *
   * @returns {SelectionRange}
   */
  clear() {
    this.ranges.length = 0;
    return this;
  }
  /**
   * Get count of added all coordinates added to the selection.
   *
   * @returns {number}
   */
  size() {
    return this.ranges.length;
  }
  /**
   * Peek the coordinates based on the index where that coordinate resides in the collection.
   *
   * @param {number} [index=0] An index where the coordinate will be retrieved from. The index '0' gets the
   * latest range.
   * @returns {CellRange|undefined}
   */
  peekByIndex() {
    let index2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    let cellRange;
    if (index2 >= 0 && index2 < this.size()) {
      cellRange = this.ranges[index2];
    }
    return cellRange;
  }
  [Symbol.iterator]() {
    return this.ranges[Symbol.iterator]();
  }
};
var range_default2 = SelectionRange;

// node_modules/handsontable/selection/transformation.mjs
function _classPrivateMethodInitSpec5(obj, privateSet) {
  _checkPrivateRedeclaration14(obj, privateSet);
  privateSet.add(obj);
}
function _classPrivateFieldInitSpec12(obj, privateMap, value) {
  _checkPrivateRedeclaration14(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration14(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldGet12(s, a) {
  return s.get(_assertClassBrand14(s, a));
}
function _classPrivateFieldSet12(s, a, r) {
  return s.set(_assertClassBrand14(s, a), r), r;
}
function _assertClassBrand14(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _range = /* @__PURE__ */ new WeakMap();
var _options3 = /* @__PURE__ */ new WeakMap();
var _offset = /* @__PURE__ */ new WeakMap();
var _Transformation_brand = /* @__PURE__ */ new WeakSet();
var Transformation = class {
  constructor(range, options) {
    _classPrivateMethodInitSpec5(this, _Transformation_brand);
    _classPrivateFieldInitSpec12(this, _range, void 0);
    _classPrivateFieldInitSpec12(this, _options3, void 0);
    _classPrivateFieldInitSpec12(this, _offset, {
      x: 0,
      y: 0
    });
    _classPrivateFieldSet12(_range, this, range);
    _classPrivateFieldSet12(_options3, this, options);
  }
  /**
   * Selects cell relative to the current cell (if possible).
   *
   * @param {number} rowDelta Rows number to move, value can be passed as negative number.
   * @param {number} colDelta Columns number to move, value can be passed as negative number.
   * @param {boolean} [createMissingRecords=false] If `true` the new rows/columns will be created if necessary. Otherwise, row/column will
   *                        be created according to `minSpareRows/minSpareCols` settings of Handsontable.
   * @returns {CellCoords} Visual coordinates after transformation.
   */
  transformStart(rowDelta, colDelta) {
    let createMissingRecords = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    const delta = _classPrivateFieldGet12(_options3, this).createCellCoords(rowDelta, colDelta);
    let visualCoords = _classPrivateFieldGet12(_range, this).current().highlight;
    const highlightRenderableCoords = _classPrivateFieldGet12(_options3, this).visualToRenderableCoords(visualCoords);
    let rowTransformDir = 0;
    let colTransformDir = 0;
    this.runLocalHooks("beforeTransformStart", delta);
    if (highlightRenderableCoords.row !== null && highlightRenderableCoords.col !== null) {
      const {
        width,
        height
      } = _assertClassBrand14(_Transformation_brand, this, _getTableSize).call(this);
      const {
        row,
        col
      } = _assertClassBrand14(_Transformation_brand, this, _visualToZeroBasedCoords).call(this, visualCoords);
      const fixedRowsBottom = _classPrivateFieldGet12(_options3, this).fixedRowsBottom();
      const minSpareRows = _classPrivateFieldGet12(_options3, this).minSpareRows();
      const minSpareCols = _classPrivateFieldGet12(_options3, this).minSpareCols();
      const autoWrapRow = _classPrivateFieldGet12(_options3, this).autoWrapRow();
      const autoWrapCol = _classPrivateFieldGet12(_options3, this).autoWrapCol();
      const zeroBasedCoords = _classPrivateFieldGet12(_options3, this).createCellCoords(row + delta.row, col + delta.col);
      if (zeroBasedCoords.row >= height) {
        const isActionInterrupted = createObjectPropListener(createMissingRecords && minSpareRows > 0 && fixedRowsBottom === 0);
        const nextColumn = zeroBasedCoords.col + 1;
        const newCoords = _classPrivateFieldGet12(_options3, this).createCellCoords(zeroBasedCoords.row - height, nextColumn >= width ? nextColumn - width : nextColumn);
        this.runLocalHooks("beforeColumnWrap", isActionInterrupted, _assertClassBrand14(_Transformation_brand, this, _zeroBasedToVisualCoords).call(this, newCoords), nextColumn >= width);
        if (isActionInterrupted.value) {
          this.runLocalHooks("insertRowRequire", _classPrivateFieldGet12(_options3, this).countRenderableRows());
        } else if (autoWrapCol) {
          zeroBasedCoords.assign(newCoords);
        }
      } else if (zeroBasedCoords.row < 0) {
        const isActionInterrupted = createObjectPropListener(autoWrapCol);
        const previousColumn = zeroBasedCoords.col - 1;
        const newCoords = _classPrivateFieldGet12(_options3, this).createCellCoords(height + zeroBasedCoords.row, previousColumn < 0 ? width + previousColumn : previousColumn);
        this.runLocalHooks("beforeColumnWrap", isActionInterrupted, _assertClassBrand14(_Transformation_brand, this, _zeroBasedToVisualCoords).call(this, newCoords), previousColumn < 0);
        if (autoWrapCol) {
          zeroBasedCoords.assign(newCoords);
        }
      }
      if (zeroBasedCoords.col >= width) {
        const isActionInterrupted = createObjectPropListener(createMissingRecords && minSpareCols > 0);
        const nextRow = zeroBasedCoords.row + 1;
        const newCoords = _classPrivateFieldGet12(_options3, this).createCellCoords(nextRow >= height ? nextRow - height : nextRow, zeroBasedCoords.col - width);
        this.runLocalHooks("beforeRowWrap", isActionInterrupted, _assertClassBrand14(_Transformation_brand, this, _zeroBasedToVisualCoords).call(this, newCoords), nextRow >= height);
        if (isActionInterrupted.value) {
          this.runLocalHooks("insertColRequire", _classPrivateFieldGet12(_options3, this).countRenderableColumns());
        } else if (autoWrapRow) {
          zeroBasedCoords.assign(newCoords);
        }
      } else if (zeroBasedCoords.col < 0) {
        const isActionInterrupted = createObjectPropListener(autoWrapRow);
        const previousRow = zeroBasedCoords.row - 1;
        const newCoords = _classPrivateFieldGet12(_options3, this).createCellCoords(previousRow < 0 ? height + previousRow : previousRow, width + zeroBasedCoords.col);
        this.runLocalHooks("beforeRowWrap", isActionInterrupted, _assertClassBrand14(_Transformation_brand, this, _zeroBasedToVisualCoords).call(this, newCoords), previousRow < 0);
        if (autoWrapRow) {
          zeroBasedCoords.assign(newCoords);
        }
      }
      const {
        rowDir,
        colDir
      } = _assertClassBrand14(_Transformation_brand, this, _clampCoords).call(this, zeroBasedCoords);
      rowTransformDir = rowDir;
      colTransformDir = colDir;
      visualCoords = _assertClassBrand14(_Transformation_brand, this, _zeroBasedToVisualCoords).call(this, zeroBasedCoords);
    }
    this.runLocalHooks("afterTransformStart", visualCoords, rowTransformDir, colTransformDir);
    return visualCoords;
  }
  /**
   * Sets selection end cell relative to the current selection end cell (if possible).
   *
   * @param {number} rowDelta Rows number to move, value can be passed as negative number.
   * @param {number} colDelta Columns number to move, value can be passed as negative number.
   * @returns {CellCoords} Visual coordinates after transformation.
   */
  transformEnd(rowDelta, colDelta) {
    const delta = _classPrivateFieldGet12(_options3, this).createCellCoords(rowDelta, colDelta);
    const cellRange = _classPrivateFieldGet12(_range, this).current();
    const highlightRenderableCoords = _classPrivateFieldGet12(_options3, this).visualToRenderableCoords(cellRange.highlight);
    const toRow = _assertClassBrand14(_Transformation_brand, this, _findFirstNonHiddenZeroBasedRow).call(this, cellRange.to.row, cellRange.from.row);
    const toColumn = _assertClassBrand14(_Transformation_brand, this, _findFirstNonHiddenZeroBasedColumn).call(this, cellRange.to.col, cellRange.from.col);
    const visualCoords = cellRange.to.clone();
    let rowTransformDir = 0;
    let colTransformDir = 0;
    this.runLocalHooks("beforeTransformEnd", delta);
    if (highlightRenderableCoords.row !== null && highlightRenderableCoords.col !== null && toRow !== null && toColumn !== null) {
      const {
        row: highlightRow,
        col: highlightColumn
      } = _assertClassBrand14(_Transformation_brand, this, _visualToZeroBasedCoords).call(this, cellRange.highlight);
      const coords = _classPrivateFieldGet12(_options3, this).createCellCoords(toRow + delta.row, toColumn + delta.col);
      const topStartCorner = cellRange.getTopStartCorner();
      const topEndCorner = cellRange.getTopEndCorner();
      const bottomEndCorner = cellRange.getBottomEndCorner();
      if (delta.col < 0 && toColumn >= highlightColumn && coords.col < highlightColumn) {
        const columnRestDelta = coords.col - highlightColumn;
        coords.col = _assertClassBrand14(_Transformation_brand, this, _findFirstNonHiddenZeroBasedColumn).call(this, topStartCorner.col, topEndCorner.col) + columnRestDelta;
      } else if (delta.col > 0 && toColumn <= highlightColumn && coords.col > highlightColumn) {
        const endColumnIndex = _assertClassBrand14(_Transformation_brand, this, _findFirstNonHiddenZeroBasedColumn).call(this, topEndCorner.col, topStartCorner.col);
        const columnRestDelta = Math.max(coords.col - endColumnIndex, 1);
        coords.col = endColumnIndex + columnRestDelta;
      }
      if (delta.row < 0 && toRow >= highlightRow && coords.row < highlightRow) {
        const rowRestDelta = coords.row - highlightRow;
        coords.row = _assertClassBrand14(_Transformation_brand, this, _findFirstNonHiddenZeroBasedRow).call(this, topStartCorner.row, bottomEndCorner.row) + rowRestDelta;
      } else if (delta.row > 0 && toRow <= highlightRow && coords.row > highlightRow) {
        const bottomRowIndex = _assertClassBrand14(_Transformation_brand, this, _findFirstNonHiddenZeroBasedRow).call(this, bottomEndCorner.row, topStartCorner.row);
        const rowRestDelta = Math.max(coords.row - bottomRowIndex, 1);
        coords.row = bottomRowIndex + rowRestDelta;
      }
      const {
        rowDir,
        colDir
      } = _assertClassBrand14(_Transformation_brand, this, _clampCoords).call(this, coords);
      rowTransformDir = rowDir;
      colTransformDir = colDir;
      const newVisualCoords = _assertClassBrand14(_Transformation_brand, this, _zeroBasedToVisualCoords).call(this, coords);
      if (delta.row === 0 && delta.col !== 0) {
        visualCoords.col = newVisualCoords.col;
      } else if (delta.row !== 0 && delta.col === 0) {
        visualCoords.row = newVisualCoords.row;
      } else {
        visualCoords.row = newVisualCoords.row;
        visualCoords.col = newVisualCoords.col;
      }
    }
    this.runLocalHooks("afterTransformEnd", visualCoords, rowTransformDir, colTransformDir);
    return visualCoords;
  }
  /**
   * Sets the additional offset in table size that may occur when the `navigableHeaders` option
   * is enabled.
   *
   * @param {{x: number, y: number}} offset Offset as x and y properties.
   */
  setOffsetSize(_ref) {
    let {
      x,
      y
    } = _ref;
    _classPrivateFieldSet12(_offset, this, {
      x,
      y
    });
  }
};
function _clampCoords(zeroBasedCoords) {
  const {
    width,
    height
  } = _assertClassBrand14(_Transformation_brand, this, _getTableSize).call(this);
  let rowDir = 0;
  let colDir = 0;
  if (zeroBasedCoords.row < 0) {
    rowDir = -1;
    zeroBasedCoords.row = 0;
  } else if (zeroBasedCoords.row > 0 && zeroBasedCoords.row >= height) {
    rowDir = 1;
    zeroBasedCoords.row = height - 1;
  }
  if (zeroBasedCoords.col < 0) {
    colDir = -1;
    zeroBasedCoords.col = 0;
  } else if (zeroBasedCoords.col > 0 && zeroBasedCoords.col >= width) {
    colDir = 1;
    zeroBasedCoords.col = width - 1;
  }
  return {
    rowDir,
    colDir
  };
}
function _getTableSize() {
  return {
    width: _classPrivateFieldGet12(_offset, this).x + _classPrivateFieldGet12(_options3, this).countRenderableColumns(),
    height: _classPrivateFieldGet12(_offset, this).y + _classPrivateFieldGet12(_options3, this).countRenderableRows()
  };
}
function _findFirstNonHiddenZeroBasedRow(visualRowFrom, visualRowTo) {
  const row = _classPrivateFieldGet12(_options3, this).findFirstNonHiddenRenderableRow(visualRowFrom, visualRowTo);
  if (row === null) {
    return null;
  }
  return _classPrivateFieldGet12(_offset, this).y + row;
}
function _findFirstNonHiddenZeroBasedColumn(visualColumnFrom, visualColumnTo) {
  const column = _classPrivateFieldGet12(_options3, this).findFirstNonHiddenRenderableColumn(visualColumnFrom, visualColumnTo);
  if (column === null) {
    return null;
  }
  return _classPrivateFieldGet12(_offset, this).x + column;
}
function _visualToZeroBasedCoords(visualCoords) {
  const {
    row,
    col
  } = _classPrivateFieldGet12(_options3, this).visualToRenderableCoords(visualCoords);
  if (row === null || col === null) {
    throw new Error("Renderable coords are not visible.");
  }
  return _classPrivateFieldGet12(_options3, this).createCellCoords(_classPrivateFieldGet12(_offset, this).y + row, _classPrivateFieldGet12(_offset, this).x + col);
}
function _zeroBasedToVisualCoords(zeroBasedCoords) {
  const coords = zeroBasedCoords.clone();
  coords.col = zeroBasedCoords.col - _classPrivateFieldGet12(_offset, this).x;
  coords.row = zeroBasedCoords.row - _classPrivateFieldGet12(_offset, this).y;
  return _classPrivateFieldGet12(_options3, this).renderableToVisualCoords(coords);
}
mixin(Transformation, localHooks_default);
var transformation_default = Transformation;

// node_modules/handsontable/selection/selection.mjs
function _classPrivateFieldInitSpec13(obj, privateMap, value) {
  _checkPrivateRedeclaration15(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration15(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty43(obj, key, value) {
  key = _toPropertyKey43(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey43(t) {
  var i = _toPrimitive43(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive43(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _classPrivateFieldGet13(s, a) {
  return s.get(_assertClassBrand15(s, a));
}
function _classPrivateFieldSet13(s, a, r) {
  return s.set(_assertClassBrand15(s, a), r), r;
}
function _assertClassBrand15(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _transformation = /* @__PURE__ */ new WeakMap();
var _focusTransformation = /* @__PURE__ */ new WeakMap();
var _isFocusSelectionChanged = /* @__PURE__ */ new WeakMap();
var _disableHeadersHighlight = /* @__PURE__ */ new WeakMap();
var _selectionSource = /* @__PURE__ */ new WeakMap();
var _expectedLayersCount = /* @__PURE__ */ new WeakMap();
var Selection2 = class {
  constructor(settings, tableProps) {
    var _this = this;
    _defineProperty43(this, "settings", void 0);
    _defineProperty43(this, "tableProps", void 0);
    _defineProperty43(this, "inProgress", false);
    _defineProperty43(this, "selectedRange", new range_default2((highlight, from, to) => {
      return this.tableProps.createCellRange(highlight, from, to);
    }));
    _defineProperty43(this, "highlight", void 0);
    _classPrivateFieldInitSpec13(this, _transformation, void 0);
    _classPrivateFieldInitSpec13(this, _focusTransformation, void 0);
    _defineProperty43(this, "selectedByRowHeader", /* @__PURE__ */ new Set());
    _defineProperty43(this, "selectedByColumnHeader", /* @__PURE__ */ new Set());
    _classPrivateFieldInitSpec13(this, _isFocusSelectionChanged, false);
    _classPrivateFieldInitSpec13(this, _disableHeadersHighlight, false);
    _classPrivateFieldInitSpec13(this, _selectionSource, "unknown");
    _classPrivateFieldInitSpec13(this, _expectedLayersCount, -1);
    this.settings = settings;
    this.tableProps = tableProps;
    this.highlight = new highlight_default({
      headerClassName: settings.currentHeaderClassName,
      activeHeaderClassName: settings.activeHeaderClassName,
      rowClassName: settings.currentRowClassName,
      columnClassName: settings.currentColClassName,
      cellAttributes: [A11Y_SELECTED()],
      rowIndexMapper: this.tableProps.rowIndexMapper,
      columnIndexMapper: this.tableProps.columnIndexMapper,
      disabledCellSelection: (row, column) => this.tableProps.isDisabledCellSelection(row, column),
      cellCornerVisible: function() {
        return _this.isCellCornerVisible(...arguments);
      },
      areaCornerVisible: function() {
        return _this.isAreaCornerVisible(...arguments);
      },
      visualToRenderableCoords: (coords) => this.tableProps.visualToRenderableCoords(coords),
      renderableToVisualCoords: (coords) => this.tableProps.renderableToVisualCoords(coords),
      createCellCoords: (row, column) => this.tableProps.createCellCoords(row, column),
      createCellRange: (highlight, from, to) => this.tableProps.createCellRange(highlight, from, to)
    });
    _classPrivateFieldSet13(_transformation, this, new transformation_default(this.selectedRange, {
      rowIndexMapper: this.tableProps.rowIndexMapper,
      columnIndexMapper: this.tableProps.columnIndexMapper,
      countRenderableRows: () => this.tableProps.countRenderableRows(),
      countRenderableColumns: () => this.tableProps.countRenderableColumns(),
      visualToRenderableCoords: (coords) => this.tableProps.visualToRenderableCoords(coords),
      renderableToVisualCoords: (coords) => this.tableProps.renderableToVisualCoords(coords),
      findFirstNonHiddenRenderableRow: function() {
        return _this.tableProps.findFirstNonHiddenRenderableRow(...arguments);
      },
      findFirstNonHiddenRenderableColumn: function() {
        return _this.tableProps.findFirstNonHiddenRenderableColumn(...arguments);
      },
      createCellCoords: (row, column) => this.tableProps.createCellCoords(row, column),
      fixedRowsBottom: () => settings.fixedRowsBottom,
      minSpareRows: () => settings.minSpareRows,
      minSpareCols: () => settings.minSpareCols,
      autoWrapRow: () => settings.autoWrapRow,
      autoWrapCol: () => settings.autoWrapCol
    }));
    _classPrivateFieldSet13(_focusTransformation, this, new transformation_default(this.selectedRange, {
      rowIndexMapper: this.tableProps.rowIndexMapper,
      columnIndexMapper: this.tableProps.columnIndexMapper,
      countRenderableRows: () => {
        const range = this.selectedRange.current();
        return this.tableProps.countRenderableRowsInRange(0, range.getOuterBottomEndCorner().row);
      },
      countRenderableColumns: () => {
        const range = this.selectedRange.current();
        return this.tableProps.countRenderableColumnsInRange(0, range.getOuterBottomEndCorner().col);
      },
      visualToRenderableCoords: (coords) => this.tableProps.visualToRenderableCoords(coords),
      renderableToVisualCoords: (coords) => this.tableProps.renderableToVisualCoords(coords),
      findFirstNonHiddenRenderableRow: function() {
        return _this.tableProps.findFirstNonHiddenRenderableRow(...arguments);
      },
      findFirstNonHiddenRenderableColumn: function() {
        return _this.tableProps.findFirstNonHiddenRenderableColumn(...arguments);
      },
      createCellCoords: (row, column) => this.tableProps.createCellCoords(row, column),
      fixedRowsBottom: () => 0,
      minSpareRows: () => 0,
      minSpareCols: () => 0,
      autoWrapRow: () => true,
      autoWrapCol: () => true
    }));
    _classPrivateFieldGet13(_transformation, this).addLocalHook("beforeTransformStart", function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _this.runLocalHooks("beforeModifyTransformStart", ...args);
    });
    _classPrivateFieldGet13(_transformation, this).addLocalHook("afterTransformStart", function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return _this.runLocalHooks("afterModifyTransformStart", ...args);
    });
    _classPrivateFieldGet13(_transformation, this).addLocalHook("beforeTransformEnd", function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return _this.runLocalHooks("beforeModifyTransformEnd", ...args);
    });
    _classPrivateFieldGet13(_transformation, this).addLocalHook("afterTransformEnd", function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return _this.runLocalHooks("afterModifyTransformEnd", ...args);
    });
    _classPrivateFieldGet13(_transformation, this).addLocalHook("insertRowRequire", function() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return _this.runLocalHooks("insertRowRequire", ...args);
    });
    _classPrivateFieldGet13(_transformation, this).addLocalHook("insertColRequire", function() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return _this.runLocalHooks("insertColRequire", ...args);
    });
    _classPrivateFieldGet13(_transformation, this).addLocalHook("beforeRowWrap", function() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return _this.runLocalHooks("beforeRowWrap", ...args);
    });
    _classPrivateFieldGet13(_transformation, this).addLocalHook("beforeColumnWrap", function() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      return _this.runLocalHooks("beforeColumnWrap", ...args);
    });
    _classPrivateFieldGet13(_focusTransformation, this).addLocalHook("beforeTransformStart", function() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      return _this.runLocalHooks("beforeModifyTransformFocus", ...args);
    });
    _classPrivateFieldGet13(_focusTransformation, this).addLocalHook("afterTransformStart", function() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }
      return _this.runLocalHooks("afterModifyTransformFocus", ...args);
    });
  }
  /**
   * Get data layer for current selection.
   *
   * @returns {SelectionRange}
   */
  getSelectedRange() {
    return this.selectedRange;
  }
  /**
   * Marks the source of the selection. It can be one of the following values: `mouse`, or any other string.
   *
   * @param {'mouse' | 'unknown' | string} sourceName The source name.
   */
  markSource(sourceName) {
    _classPrivateFieldSet13(_selectionSource, this, sourceName);
  }
  /**
   * Marks end of the selection source. It restores the selection source to default value which is 'unknown'.
   */
  markEndSource() {
    _classPrivateFieldSet13(_selectionSource, this, "unknown");
  }
  /**
   * Returns the source of the selection.
   *
   * @returns {'mouse' | 'unknown' | string}
   */
  getSelectionSource() {
    return _classPrivateFieldGet13(_selectionSource, this);
  }
  /**
   * Set the number of expected layers. The method is not obligatory to call. It is used mostly internally
   * to determine when the last selection layer of non-contiguous is applied, thus the viewport scroll is triggered.
   *
   * @param {number} layersCount The number of expected layers.
   */
  setExpectedLayers(layersCount) {
    _classPrivateFieldSet13(_expectedLayersCount, this, layersCount);
  }
  /**
   * Indicate that selection process began. It sets internally `.inProgress` property to `true`.
   */
  begin() {
    this.inProgress = true;
  }
  /**
   * Indicate that selection process finished. It sets internally `.inProgress` property to `false`.
   */
  finish() {
    this.runLocalHooks("afterSelectionFinished", Array.from(this.selectedRange));
    this.inProgress = false;
    _classPrivateFieldSet13(_expectedLayersCount, this, -1);
  }
  /**
   * Check if the process of selecting the cell/cells is in progress.
   *
   * @returns {boolean}
   */
  isInProgress() {
    return this.inProgress;
  }
  /**
   * Starts selection range on given coordinate object.
   *
   * @param {CellCoords} coords Visual coords.
   * @param {boolean} [multipleSelection] If `true`, selection will be worked in 'multiple' mode. This option works
   *                                      only when 'selectionMode' is set as 'multiple'. If the argument is not defined
   *                                      the default trigger will be used.
   * @param {boolean} [fragment=false] If `true`, the selection will be treated as a partial selection where the
   *                                   `setRangeEnd` method won't be called on every `setRangeStart` call.
   * @param {CellCoords} [highlightCoords] If set, allows changing the coordinates of the highlight/focus cell.
   */
  setRangeStart(coords, multipleSelection) {
    let fragment = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    let highlightCoords = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : coords;
    const isMultipleMode = this.settings.selectionMode === "multiple";
    const isMultipleSelection = isUndefined(multipleSelection) ? this.tableProps.getShortcutManager().isCtrlPressed() : multipleSelection;
    const coordsClone = coords.clone();
    _classPrivateFieldSet13(_isFocusSelectionChanged, this, false);
    this.runLocalHooks(`beforeSetRangeStart${fragment ? "Only" : ""}`, coordsClone);
    if (!isMultipleMode || isMultipleMode && !isMultipleSelection && isUndefined(multipleSelection)) {
      this.selectedRange.clear();
    }
    this.selectedRange.add(coordsClone).current().setHighlight(highlightCoords.clone());
    if (this.getLayerLevel() === 0) {
      this.selectedByRowHeader.clear();
      this.selectedByColumnHeader.clear();
    }
    if (!fragment) {
      this.setRangeEnd(coords);
    }
  }
  /**
   * Starts selection range on given coordinate object.
   *
   * @param {CellCoords} coords Visual coords.
   * @param {boolean} [multipleSelection] If `true`, selection will be worked in 'multiple' mode. This option works
   *                                      only when 'selectionMode' is set as 'multiple'. If the argument is not defined
   *                                      the default trigger will be used.
   * @param {CellCoords} [highlightCoords] If set, allows changing the coordinates of the highlight/focus cell.
   */
  setRangeStartOnly(coords, multipleSelection) {
    let highlightCoords = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : coords;
    this.setRangeStart(coords, multipleSelection, true, highlightCoords);
  }
  /**
   * Ends selection range on given coordinate object.
   *
   * @param {CellCoords} coords Visual coords.
   */
  setRangeEnd(coords) {
    if (this.selectedRange.isEmpty()) {
      return;
    }
    const coordsClone = coords.clone();
    const countRows = this.tableProps.countRows();
    const countCols = this.tableProps.countCols();
    const isSingle = this.selectedRange.current().clone().setTo(coords).isSingleHeader();
    if ((countRows > 0 || countCols > 0) && (countRows === 0 && coordsClone.col < 0 && !isSingle || countCols === 0 && coordsClone.row < 0 && !isSingle)) {
      return;
    }
    this.runLocalHooks("beforeSetRangeEnd", coordsClone);
    this.begin();
    const cellRange = this.selectedRange.current();
    if (!this.settings.navigableHeaders) {
      cellRange.highlight.normalize();
    }
    if (this.settings.selectionMode === "single") {
      cellRange.setFrom(cellRange.highlight);
      cellRange.setTo(cellRange.highlight);
    } else {
      const horizontalDir = cellRange.getHorizontalDirection();
      const verticalDir = cellRange.getVerticalDirection();
      const isMultiple = this.isMultiple();
      cellRange.setTo(coordsClone);
      if (isMultiple && (horizontalDir !== cellRange.getHorizontalDirection() || cellRange.getWidth() === 1 && !cellRange.includes(cellRange.highlight))) {
        cellRange.from.assign({
          col: cellRange.highlight.col
        });
      }
      if (isMultiple && (verticalDir !== cellRange.getVerticalDirection() || cellRange.getHeight() === 1 && !cellRange.includes(cellRange.highlight))) {
        cellRange.from.assign({
          row: cellRange.highlight.row
        });
      }
    }
    if (countRows > 0 && countCols > 0) {
      if (!this.settings.navigableHeaders || this.settings.navigableHeaders && !cellRange.isSingleHeader()) {
        cellRange.to.normalize();
      }
    }
    this.runLocalHooks("beforeHighlightSet");
    this.setRangeFocus(this.selectedRange.current().highlight);
    this.applyAndCommit();
    const isLastLayer = _classPrivateFieldGet13(_expectedLayersCount, this) === -1 || this.selectedRange.size() === _classPrivateFieldGet13(_expectedLayersCount, this);
    this.runLocalHooks("afterSetRangeEnd", coords, isLastLayer);
  }
  /**
   * Applies and commits the selection to all layers (using the Walkontable Selection API) based on the selection (CellRanges)
   * collected in the `selectedRange` module.
   *
   * @param {CellRange} [cellRange] The cell range to apply. If not provided, the current selection is used.
   * @param {number} [layerLevel] The layer level to apply. If not provided, the current layer level is used.
   */
  applyAndCommit() {
    let cellRange = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectedRange.current();
    let layerLevel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLayerLevel();
    const countRows = this.tableProps.countRows();
    const countCols = this.tableProps.countCols();
    if (layerLevel < this.highlight.layerLevel) {
      arrayEach(this.highlight.getAreas(), (highlight) => void highlight.clear());
      arrayEach(this.highlight.getLayeredAreas(), (highlight) => void highlight.clear());
      arrayEach(this.highlight.getRowHeaders(), (highlight) => void highlight.clear());
      arrayEach(this.highlight.getColumnHeaders(), (highlight) => void highlight.clear());
      arrayEach(this.highlight.getActiveRowHeaders(), (highlight) => void highlight.clear());
      arrayEach(this.highlight.getActiveColumnHeaders(), (highlight) => void highlight.clear());
      arrayEach(this.highlight.getActiveCornerHeaders(), (highlight) => void highlight.clear());
      arrayEach(this.highlight.getRowHighlights(), (highlight) => void highlight.clear());
      arrayEach(this.highlight.getColumnHighlights(), (highlight) => void highlight.clear());
    }
    this.highlight.useLayerLevel(layerLevel);
    const areaHighlight = this.highlight.createArea();
    const layeredAreaHighlight = this.highlight.createLayeredArea();
    const rowHeaderHighlight = this.highlight.createRowHeader();
    const columnHeaderHighlight = this.highlight.createColumnHeader();
    const activeRowHeaderHighlight = this.highlight.createActiveRowHeader();
    const activeColumnHeaderHighlight = this.highlight.createActiveColumnHeader();
    const activeCornerHeaderHighlight = this.highlight.createActiveCornerHeader();
    const rowHighlight = this.highlight.createRowHighlight();
    const columnHighlight = this.highlight.createColumnHighlight();
    areaHighlight.clear();
    layeredAreaHighlight.clear();
    rowHeaderHighlight.clear();
    columnHeaderHighlight.clear();
    activeRowHeaderHighlight.clear();
    activeColumnHeaderHighlight.clear();
    activeCornerHeaderHighlight.clear();
    rowHighlight.clear();
    columnHighlight.clear();
    if (this.highlight.isEnabledFor(AREA_TYPE, cellRange.highlight) && (this.isMultiple() || layerLevel >= 1)) {
      areaHighlight.add(cellRange.from).add(cellRange.to).commit();
      layeredAreaHighlight.add(cellRange.from).add(cellRange.to).commit();
      if (layerLevel === 1) {
        const previousRange = this.selectedRange.previous();
        this.highlight.useLayerLevel(layerLevel - 1);
        this.highlight.createArea().add(previousRange.from).commit().syncWith(previousRange);
        this.highlight.createLayeredArea().add(previousRange.from).commit().syncWith(previousRange);
        this.highlight.useLayerLevel(layerLevel);
      }
    }
    if (this.highlight.isEnabledFor(HEADER_TYPE, cellRange.highlight)) {
      if (!cellRange.isSingleHeader()) {
        const rowCoordsFrom = this.tableProps.createCellCoords(Math.max(cellRange.from.row, 0), -1);
        const rowCoordsTo = this.tableProps.createCellCoords(cellRange.to.row, -1);
        const columnCoordsFrom = this.tableProps.createCellCoords(-1, Math.max(cellRange.from.col, 0));
        const columnCoordsTo = this.tableProps.createCellCoords(-1, cellRange.to.col);
        if (this.settings.selectionMode === "single") {
          rowHeaderHighlight.add(rowCoordsFrom).commit();
          columnHeaderHighlight.add(columnCoordsFrom).commit();
          rowHighlight.add(rowCoordsFrom).commit();
          columnHighlight.add(columnCoordsFrom).commit();
        } else {
          rowHeaderHighlight.add(rowCoordsFrom).add(rowCoordsTo).commit();
          columnHeaderHighlight.add(columnCoordsFrom).add(columnCoordsTo).commit();
          rowHighlight.add(rowCoordsFrom).add(rowCoordsTo).commit();
          columnHighlight.add(columnCoordsFrom).add(columnCoordsTo).commit();
        }
      }
      const highlightRowHeaders = !_classPrivateFieldGet13(_disableHeadersHighlight, this) && this.isEntireRowSelected() && (countCols > 0 && countCols === cellRange.getWidth() || countCols === 0 && this.isSelectedByRowHeader());
      const highlightColumnHeaders = !_classPrivateFieldGet13(_disableHeadersHighlight, this) && this.isEntireColumnSelected() && (countRows > 0 && countRows === cellRange.getHeight() || countRows === 0 && this.isSelectedByColumnHeader());
      if (highlightRowHeaders) {
        activeRowHeaderHighlight.add(this.tableProps.createCellCoords(Math.max(cellRange.from.row, 0), Math.min(-this.tableProps.countRowHeaders(), -1))).add(this.tableProps.createCellCoords(Math.max(cellRange.to.row, 0), -1)).commit();
      }
      if (highlightColumnHeaders) {
        activeColumnHeaderHighlight.add(this.tableProps.createCellCoords(Math.min(-this.tableProps.countColHeaders(), -1), Math.max(cellRange.from.col, 0))).add(this.tableProps.createCellCoords(-1, Math.max(cellRange.to.col, 0))).commit();
      }
      if (highlightRowHeaders && highlightColumnHeaders) {
        activeCornerHeaderHighlight.add(this.tableProps.createCellCoords(-this.tableProps.countColHeaders(), -this.tableProps.countRowHeaders())).add(this.tableProps.createCellCoords(-1, -1)).commit();
      }
    }
  }
  /**
   * Sets the selection focus position at the specified coordinates.
   *
   * @param {CellCoords} coords The CellCoords instance with defined visual coordinates.
   */
  setRangeFocus(coords) {
    if (this.selectedRange.isEmpty()) {
      return;
    }
    const cellRange = this.selectedRange.current();
    if (!this.inProgress) {
      this.runLocalHooks("beforeSetFocus", coords);
    }
    const focusHighlight = this.highlight.getFocus();
    focusHighlight.clear();
    cellRange.setHighlight(coords);
    if (!this.inProgress) {
      this.runLocalHooks("beforeHighlightSet");
    }
    if (this.highlight.isEnabledFor(FOCUS_TYPE, cellRange.highlight)) {
      focusHighlight.add(cellRange.highlight).commit().syncWith(cellRange);
    }
    if (!this.inProgress) {
      _classPrivateFieldSet13(_isFocusSelectionChanged, this, true);
      this.runLocalHooks("afterSetFocus", cellRange.highlight);
    }
  }
  /**
   * Selects cell relative to the current cell (if possible).
   *
   * @param {number} rowDelta Rows number to move, value can be passed as negative number.
   * @param {number} colDelta Columns number to move, value can be passed as negative number.
   * @param {boolean} [createMissingRecords=false] If `true` the new rows/columns will be created if necessary.
   * Otherwise, row/column will be created according to `minSpareRows/minSpareCols` settings of Handsontable.
   */
  transformStart(rowDelta, colDelta) {
    let createMissingRecords = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (this.settings.navigableHeaders) {
      _classPrivateFieldGet13(_transformation, this).setOffsetSize({
        x: this.tableProps.countRowHeaders(),
        y: this.tableProps.countColHeaders()
      });
    }
    this.setRangeStart(_classPrivateFieldGet13(_transformation, this).transformStart(rowDelta, colDelta, createMissingRecords));
  }
  /**
   * Sets selection end cell relative to the current selection end cell (if possible).
   *
   * @param {number} rowDelta Rows number to move, value can be passed as negative number.
   * @param {number} colDelta Columns number to move, value can be passed as negative number.
   */
  transformEnd(rowDelta, colDelta) {
    if (this.settings.navigableHeaders) {
      _classPrivateFieldGet13(_transformation, this).setOffsetSize({
        x: this.tableProps.countRowHeaders(),
        y: this.tableProps.countColHeaders()
      });
    }
    this.setRangeEnd(_classPrivateFieldGet13(_transformation, this).transformEnd(rowDelta, colDelta));
  }
  /**
   * Transforms the focus cell selection relative to the current focus position.
   *
   * @param {number} rowDelta Rows number to move, value can be passed as negative number.
   * @param {number} colDelta Columns number to move, value can be passed as negative number.
   */
  transformFocus(rowDelta, colDelta) {
    const range = this.selectedRange.current();
    const {
      row,
      col
    } = range.getOuterTopStartCorner();
    const columnsInRange = this.tableProps.countRenderableColumnsInRange(0, col - 1);
    const rowsInRange = this.tableProps.countRenderableRowsInRange(0, row - 1);
    if (range.highlight.isHeader()) {
      _classPrivateFieldGet13(_focusTransformation, this).setOffsetSize({
        x: col < 0 ? Math.abs(col) : -columnsInRange,
        y: row < 0 ? Math.abs(row) : -rowsInRange
      });
    } else {
      _classPrivateFieldGet13(_focusTransformation, this).setOffsetSize({
        x: col < 0 ? 0 : -columnsInRange,
        y: row < 0 ? 0 : -rowsInRange
      });
    }
    const focusCoords = _classPrivateFieldGet13(_focusTransformation, this).transformStart(rowDelta, colDelta);
    this.setRangeFocus(focusCoords.normalize());
  }
  /**
   * Transforms the last selection layer down or up by the index count.
   *
   * @param {number} visualRowIndex Visual row index from which the selection will be shifted.
   * @param {number} amount The number of rows to shift the selection.
   */
  shiftRows(visualRowIndex, amount) {
    if (!this.isSelected()) {
      return;
    }
    const range = this.selectedRange.current();
    if (this.isSelectedByCorner()) {
      this.selectAll(true, true, {
        disableHeadersHighlight: true
      });
    } else if (this.isSelectedByColumnHeader() || range.getOuterTopStartCorner().row >= visualRowIndex) {
      const {
        from,
        to,
        highlight
      } = range;
      const countRows = this.tableProps.countRows();
      const isSelectedByRowHeader = this.isSelectedByRowHeader();
      const isSelectedByColumnHeader = this.isSelectedByColumnHeader();
      const minRow = isSelectedByColumnHeader ? -1 : 0;
      const coordsStartAmount = isSelectedByColumnHeader ? 0 : amount;
      this.getSelectedRange().pop();
      const coordsStart = this.tableProps.createCellCoords(clamp(from.row + coordsStartAmount, minRow, countRows - 1), from.col);
      const coordsEnd = this.tableProps.createCellCoords(clamp(to.row + amount, minRow, countRows - 1), to.col);
      this.markSource("shift");
      if (highlight.row >= visualRowIndex) {
        this.setRangeStartOnly(coordsStart, true, this.tableProps.createCellCoords(clamp(highlight.row + amount, 0, countRows - 1), highlight.col));
      } else {
        this.setRangeStartOnly(coordsStart, true);
      }
      if (isSelectedByRowHeader) {
        this.selectedByRowHeader.add(this.getLayerLevel());
      }
      if (isSelectedByColumnHeader) {
        this.selectedByColumnHeader.add(this.getLayerLevel());
      }
      this.setRangeEnd(coordsEnd);
      this.markEndSource();
    }
  }
  /**
   * Transforms the last selection layer left or right by the index count.
   *
   * @param {number} visualColumnIndex Visual column index from which the selection will be shifted.
   * @param {number} amount The number of columns to shift the selection.
   */
  shiftColumns(visualColumnIndex, amount) {
    if (!this.isSelected()) {
      return;
    }
    const range = this.selectedRange.current();
    if (this.isSelectedByCorner()) {
      this.selectAll(true, true, {
        disableHeadersHighlight: true
      });
    } else if (this.isSelectedByRowHeader() || range.getOuterTopStartCorner().col >= visualColumnIndex) {
      const {
        from,
        to,
        highlight
      } = range;
      const countCols = this.tableProps.countCols();
      const isSelectedByRowHeader = this.isSelectedByRowHeader();
      const isSelectedByColumnHeader = this.isSelectedByColumnHeader();
      const minColumn = isSelectedByRowHeader ? -1 : 0;
      const coordsStartAmount = isSelectedByRowHeader ? 0 : amount;
      this.getSelectedRange().pop();
      const coordsStart = this.tableProps.createCellCoords(from.row, clamp(from.col + coordsStartAmount, minColumn, countCols - 1));
      const coordsEnd = this.tableProps.createCellCoords(to.row, clamp(to.col + amount, minColumn, countCols - 1));
      this.markSource("shift");
      if (highlight.col >= visualColumnIndex) {
        this.setRangeStartOnly(coordsStart, true, this.tableProps.createCellCoords(highlight.row, clamp(highlight.col + amount, 0, countCols - 1)));
      } else {
        this.setRangeStartOnly(coordsStart, true);
      }
      if (isSelectedByRowHeader) {
        this.selectedByRowHeader.add(this.getLayerLevel());
      }
      if (isSelectedByColumnHeader) {
        this.selectedByColumnHeader.add(this.getLayerLevel());
      }
      this.setRangeEnd(coordsEnd);
      this.markEndSource();
    }
  }
  /**
   * Returns currently used layer level.
   *
   * @returns {number} Returns layer level starting from 0. If no selection was added to the table -1 is returned.
   */
  getLayerLevel() {
    return this.selectedRange.size() - 1;
  }
  /**
   * Returns `true` if currently there is a selection on the screen, `false` otherwise.
   *
   * @returns {boolean}
   */
  isSelected() {
    return !this.selectedRange.isEmpty();
  }
  /**
   * Returns information if we have a multi-selection. This method check multi-selection only on the latest layer of
   * the selection.
   *
   * @returns {boolean}
   */
  isMultiple() {
    if (!this.isSelected()) {
      return false;
    }
    const isMultipleListener = createObjectPropListener(!this.selectedRange.current().isSingle());
    this.runLocalHooks("afterIsMultipleSelection", isMultipleListener);
    return isMultipleListener.value;
  }
  /**
   * Checks if the last selection involves changing the focus cell position only.
   *
   * @returns {boolean}
   */
  isFocusSelectionChanged() {
    return this.isSelected() && _classPrivateFieldGet13(_isFocusSelectionChanged, this);
  }
  /**
   * Returns `true` if the selection was applied by clicking to the row header. If the `layerLevel`
   * argument is passed then only that layer will be checked. Otherwise, it checks if any row header
   * was clicked on any selection layer level.
   *
   * @param {number} [layerLevel=this.getLayerLevel()] Selection layer level to check.
   * @returns {boolean}
   */
  isSelectedByRowHeader() {
    let layerLevel = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getLayerLevel();
    return !this.isSelectedByCorner(layerLevel) && (layerLevel === -1 ? this.selectedByRowHeader.size > 0 : this.selectedByRowHeader.has(layerLevel));
  }
  /**
   * Returns `true` if the selection consists of entire rows (including their headers). If the `layerLevel`
   * argument is passed then only that layer will be checked. Otherwise, it checks the selection for all layers.
   *
   * @param {number} [layerLevel=this.getLayerLevel()] Selection layer level to check.
   * @returns {boolean}
   */
  isEntireRowSelected() {
    let layerLevel = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getLayerLevel();
    const tester3 = (range2) => {
      const {
        col
      } = range2.getOuterTopStartCorner();
      const rowHeaders = this.tableProps.countRowHeaders();
      const countCols = this.tableProps.countCols();
      return (rowHeaders > 0 && col < 0 || rowHeaders === 0) && range2.getWidth() === countCols;
    };
    if (layerLevel === -1) {
      return Array.from(this.selectedRange).some((range2) => tester3(range2));
    }
    const range = this.selectedRange.peekByIndex(layerLevel);
    return range ? tester3(range) : false;
  }
  /**
   * Returns `true` if the selection was applied by clicking to the column header. If the `layerLevel`
   * argument is passed then only that layer will be checked. Otherwise, it checks if any column header
   * was clicked on any selection layer level.
   *
   * @param {number} [layerLevel=this.getLayerLevel()] Selection layer level to check.
   * @returns {boolean}
   */
  isSelectedByColumnHeader() {
    let layerLevel = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getLayerLevel();
    return !this.isSelectedByCorner() && (layerLevel === -1 ? this.selectedByColumnHeader.size > 0 : this.selectedByColumnHeader.has(layerLevel));
  }
  /**
   * Returns `true` if the selection consists of entire columns (including their headers). If the `layerLevel`
   * argument is passed then only that layer will be checked. Otherwise, it checks the selection for all layers.
   *
   * @param {number} [layerLevel=this.getLayerLevel()] Selection layer level to check.
   * @returns {boolean}
   */
  isEntireColumnSelected() {
    let layerLevel = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getLayerLevel();
    const tester3 = (range2) => {
      const {
        row
      } = range2.getOuterTopStartCorner();
      const colHeaders = this.tableProps.countColHeaders();
      const countRows = this.tableProps.countRows();
      return (colHeaders > 0 && row < 0 || colHeaders === 0) && range2.getHeight() === countRows;
    };
    if (layerLevel === -1) {
      return Array.from(this.selectedRange).some((range2) => tester3(range2));
    }
    const range = this.selectedRange.peekByIndex(layerLevel);
    return range ? tester3(range) : false;
  }
  /**
   * Returns `true` if the selection was applied by clicking on the row or column header on any layer level.
   *
   * @returns {boolean}
   */
  isSelectedByAnyHeader() {
    return this.isSelectedByRowHeader(-1) || this.isSelectedByColumnHeader(-1) || this.isSelectedByCorner();
  }
  /**
   * Returns `true` if the selection was applied by clicking on the left-top corner overlay.
   *
   * @returns {boolean}
   */
  isSelectedByCorner() {
    return this.selectedByColumnHeader.has(this.getLayerLevel()) && this.selectedByRowHeader.has(this.getLayerLevel());
  }
  /**
   * Returns `true` if coords is within selection coords. This method iterates through all selection layers to check if
   * the coords object is within selection range.
   *
   * @param {CellCoords} coords The CellCoords instance with defined visual coordinates.
   * @returns {boolean}
   */
  inInSelection(coords) {
    return this.selectedRange.includes(coords);
  }
  /**
   * Returns `true` if the cell corner should be visible.
   *
   * @private
   * @returns {boolean} `true` if the corner element has to be visible, `false` otherwise.
   */
  isCellCornerVisible() {
    return this.settings.fillHandle && !this.tableProps.isEditorOpened() && !this.isMultiple();
  }
  /**
   * Returns `true` if the cell coordinates are visible (renderable).
   *
   * @private
   * @param {CellCoords} coords The cell coordinates to check.
   * @returns {boolean}
   */
  isCellVisible(coords) {
    const renderableCoords = this.tableProps.visualToRenderableCoords(coords);
    return renderableCoords.row !== null && renderableCoords.col !== null;
  }
  /**
   * Returns `true` if the area corner should be visible.
   *
   * @param {number} layerLevel The layer level.
   * @returns {boolean} `true` if the corner element has to be visible, `false` otherwise.
   */
  isAreaCornerVisible(layerLevel) {
    if (Number.isInteger(layerLevel) && layerLevel !== this.getLayerLevel()) {
      return false;
    }
    return this.settings.fillHandle && !this.tableProps.isEditorOpened() && this.isMultiple();
  }
  /**
   * Clear the selection by resetting the collected ranges and highlights.
   */
  clear() {
    this.selectedRange.clear();
    this.highlight.clear();
  }
  /**
   * Deselects all selected cells.
   */
  deselect() {
    if (!this.isSelected()) {
      return;
    }
    this.inProgress = false;
    this.clear();
    this.runLocalHooks("afterDeselect");
  }
  /**
   * Selects all cells and headers.
   *
   * @param {boolean} [includeRowHeaders=false] `true` If the selection should include the row headers,
   * `false` otherwise.
   * @param {boolean} [includeColumnHeaders=false] `true` If the selection should include the column
   * headers, `false` otherwise.
   * @param {object} [options] Additional object with options.
   * @param {{row: number, col: number} | boolean} [options.focusPosition] The argument allows changing the cell/header
   * focus position. The value takes an object with a `row` and `col` properties from -N to N, where
   * negative values point to the headers and positive values point to the cell range. If `false`, the focus
   * position won't be changed.
   * @param {boolean} [options.disableHeadersHighlight] If `true`, disables highlighting the headers even when
   * the logical coordinates points on them.
   */
  selectAll() {
    var _this$getSelectedRang;
    let includeRowHeaders = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    let includeColumnHeaders = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      focusPosition: false,
      disableHeadersHighlight: false
    };
    const nrOfRows = this.tableProps.countRows();
    const nrOfColumns = this.tableProps.countCols();
    const countRowHeaders = this.tableProps.countRowHeaders();
    const countColHeaders = this.tableProps.countColHeaders();
    const rowFrom = includeColumnHeaders ? -countColHeaders : 0;
    const columnFrom = includeRowHeaders ? -countRowHeaders : 0;
    if (rowFrom === 0 && columnFrom === 0 && (nrOfRows === 0 || nrOfColumns === 0)) {
      return;
    }
    let highlight = (_this$getSelectedRang = this.getSelectedRange().current()) === null || _this$getSelectedRang === void 0 ? void 0 : _this$getSelectedRang.highlight;
    const {
      focusPosition,
      disableHeadersHighlight
    } = options;
    _classPrivateFieldSet13(_disableHeadersHighlight, this, disableHeadersHighlight);
    if (focusPosition && Number.isInteger(focusPosition === null || focusPosition === void 0 ? void 0 : focusPosition.row) && Number.isInteger(focusPosition === null || focusPosition === void 0 ? void 0 : focusPosition.col)) {
      highlight = this.tableProps.createCellCoords(clamp(focusPosition.row, rowFrom, nrOfRows - 1), clamp(focusPosition.col, columnFrom, nrOfColumns - 1));
    }
    const startCoords = this.tableProps.createCellCoords(rowFrom, columnFrom);
    const endCoords = this.tableProps.createCellCoords(nrOfRows - 1, nrOfColumns - 1);
    this.clear();
    this.setRangeStartOnly(startCoords, void 0, highlight);
    if (columnFrom < 0) {
      this.selectedByRowHeader.add(this.getLayerLevel());
    }
    if (rowFrom < 0) {
      this.selectedByColumnHeader.add(this.getLayerLevel());
    }
    this.setRangeEnd(endCoords);
    this.finish();
    _classPrivateFieldSet13(_disableHeadersHighlight, this, false);
  }
  /**
   * Make multiple, non-contiguous selection specified by `row` and `column` values or a range of cells
   * finishing at `endRow`, `endColumn`. The method supports two input formats, first as an array of arrays such
   * as `[[rowStart, columnStart, rowEnd, columnEnd]]` and second format as an array of CellRange objects.
   * If the passed ranges have another format the exception will be thrown.
   *
   * @param {Array[]|CellRange[]} selectionRanges The coordinates which define what the cells should be selected.
   * @returns {boolean} Returns `true` if selection was successful, `false` otherwise.
   */
  selectCells(selectionRanges) {
    var _this2 = this;
    const selectionType = detectSelectionType(selectionRanges);
    if (selectionType === SELECTION_TYPE_EMPTY) {
      return false;
    } else if (selectionType === SELECTION_TYPE_UNRECOGNIZED) {
      throw new Error(toSingleLine`Unsupported format of the selection ranges was passed. To select cells pass\x20
        the coordinates as an array of arrays ([[rowStart, columnStart/columnPropStart, rowEnd,\x20
        columnEnd/columnPropEnd]]) or as an array of CellRange objects.`);
    }
    const selectionSchemaNormalizer = normalizeSelectionFactory(selectionType, {
      createCellCoords: function() {
        return _this2.tableProps.createCellCoords(...arguments);
      },
      createCellRange: function() {
        return _this2.tableProps.createCellRange(...arguments);
      },
      propToCol: (prop) => this.tableProps.propToCol(prop),
      keepDirection: true
    });
    const navigableHeaders = this.settings.navigableHeaders;
    const tableParams = {
      countRows: this.tableProps.countRows(),
      countCols: this.tableProps.countCols(),
      countRowHeaders: navigableHeaders ? this.tableProps.countRowHeaders() : 0,
      countColHeaders: navigableHeaders ? this.tableProps.countColHeaders() : 0
    };
    const isValid = !selectionRanges.some((selection) => {
      const cellRange = selectionSchemaNormalizer(selection);
      const rangeValidity = cellRange.isValid(tableParams);
      return !(rangeValidity && !cellRange.containsHeaders() || rangeValidity && cellRange.containsHeaders() && cellRange.isSingleHeader());
    });
    if (isValid) {
      this.clear();
      this.setExpectedLayers(selectionRanges.length);
      arrayEach(selectionRanges, (selection) => {
        const {
          from,
          to
        } = selectionSchemaNormalizer(selection);
        this.setRangeStartOnly(from.clone(), false);
        this.setRangeEnd(to.clone());
      });
      this.finish();
    }
    return isValid;
  }
  /**
   * Select column specified by `startColumn` visual index or column property or a range of columns finishing at
   * `endColumn`.
   *
   * @param {number|string} startColumn Visual column index or column property from which the selection starts.
   * @param {number|string} [endColumn] Visual column index or column property from to the selection finishes.
   * @param {number | { row: number, col: number }} [focusPosition=0] The argument allows changing the cell/header focus
   * position. The value can take visual row index from -N to N, where negative values point to the headers and positive
   * values point to the cell range. An object with `row` and `col` properties also can be passed to change the focus
   * position horizontally.
   * @returns {boolean} Returns `true` if selection was successful, `false` otherwise.
   */
  selectColumns(startColumn) {
    let endColumn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : startColumn;
    let focusPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    const start = typeof startColumn === "string" ? this.tableProps.propToCol(startColumn) : startColumn;
    const end = typeof endColumn === "string" ? this.tableProps.propToCol(endColumn) : endColumn;
    const countRows = this.tableProps.countRows();
    const countCols = this.tableProps.countCols();
    const countColHeaders = this.tableProps.countColHeaders();
    const columnHeaderLastIndex = countColHeaders === 0 ? 0 : -countColHeaders;
    const fromCoords = this.tableProps.createCellCoords(columnHeaderLastIndex, start);
    const toCoords = this.tableProps.createCellCoords(countRows - 1, end);
    const isValid = this.tableProps.createCellRange(fromCoords, fromCoords, toCoords).isValid({
      countRows,
      countCols,
      countRowHeaders: 0,
      countColHeaders
    });
    if (isValid) {
      let highlightRow = 0;
      let highlightColumn = 0;
      if (Number.isInteger(focusPosition === null || focusPosition === void 0 ? void 0 : focusPosition.row) && Number.isInteger(focusPosition === null || focusPosition === void 0 ? void 0 : focusPosition.col)) {
        highlightRow = clamp(focusPosition.row, columnHeaderLastIndex, countRows - 1);
        highlightColumn = clamp(focusPosition.col, Math.min(start, end), Math.max(start, end));
      } else {
        highlightRow = clamp(focusPosition, columnHeaderLastIndex, countRows - 1);
        highlightColumn = start;
      }
      const highlight = this.tableProps.createCellCoords(highlightRow, highlightColumn);
      const fromRow = countColHeaders === 0 ? 0 : clamp(highlight.row, columnHeaderLastIndex, -1);
      const toRow = countRows - 1;
      const from = this.tableProps.createCellCoords(fromRow, start);
      const to = this.tableProps.createCellCoords(toRow, end);
      this.runLocalHooks("beforeSelectColumns", from, to, highlight);
      from.row = fromRow;
      to.row = toRow;
      this.setRangeStartOnly(from, void 0, highlight);
      this.selectedByColumnHeader.add(this.getLayerLevel());
      this.setRangeEnd(to);
      this.runLocalHooks("afterSelectColumns", from, to, highlight);
      this.finish();
    }
    return isValid;
  }
  /**
   * Select row specified by `startRow` visual index or a range of rows finishing at `endRow`.
   *
   * @param {number} startRow Visual row index from which the selection starts.
   * @param {number} [endRow] Visual row index from to the selection finishes.
   * @param {number | { row: number, col: number }} [focusPosition=0] The argument allows changing the cell/header focus
   * position. The value can take visual row index from -N to N, where negative values point to the headers and positive
   * values point to the cell range. An object with `row` and `col` properties also can be passed to change the focus
   * position horizontally.
   * @returns {boolean} Returns `true` if selection was successful, `false` otherwise.
   */
  selectRows(startRow) {
    let endRow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : startRow;
    let focusPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    const countRows = this.tableProps.countRows();
    const countCols = this.tableProps.countCols();
    const countRowHeaders = this.tableProps.countRowHeaders();
    const rowHeaderLastIndex = countRowHeaders === 0 ? 0 : -countRowHeaders;
    const fromCoords = this.tableProps.createCellCoords(startRow, rowHeaderLastIndex);
    const toCoords = this.tableProps.createCellCoords(endRow, countCols - 1);
    const isValid = this.tableProps.createCellRange(fromCoords, fromCoords, toCoords).isValid({
      countRows,
      countCols,
      countRowHeaders,
      countColHeaders: 0
    });
    if (isValid) {
      let highlightRow = 0;
      let highlightColumn = 0;
      if (Number.isInteger(focusPosition === null || focusPosition === void 0 ? void 0 : focusPosition.row) && Number.isInteger(focusPosition === null || focusPosition === void 0 ? void 0 : focusPosition.col)) {
        highlightRow = clamp(focusPosition.row, Math.min(startRow, endRow), Math.max(startRow, endRow));
        highlightColumn = clamp(focusPosition.col, rowHeaderLastIndex, countCols - 1);
      } else {
        highlightRow = startRow;
        highlightColumn = clamp(focusPosition, rowHeaderLastIndex, countCols - 1);
      }
      const highlight = this.tableProps.createCellCoords(highlightRow, highlightColumn);
      const fromColumn = countRowHeaders === 0 ? 0 : clamp(highlight.col, rowHeaderLastIndex, -1);
      const toColumn = countCols - 1;
      const from = this.tableProps.createCellCoords(startRow, fromColumn);
      const to = this.tableProps.createCellCoords(endRow, toColumn);
      this.runLocalHooks("beforeSelectRows", from, to, highlight);
      from.col = fromColumn;
      to.col = toColumn;
      this.setRangeStartOnly(from, void 0, highlight);
      this.selectedByRowHeader.add(this.getLayerLevel());
      this.setRangeEnd(to);
      this.runLocalHooks("afterSelectRows", from, to, highlight);
      this.finish();
    }
    return isValid;
  }
  /**
   * Refreshes the whole selection by clearing, reapplying and committing the renderable selection (Walkontable Selection API)
   * by using already added visual ranges.
   */
  refresh() {
    if (!this.isSelected()) {
      return;
    }
    const countRows = this.tableProps.countRows();
    const countColumns = this.tableProps.countCols();
    if (countRows === 0 || countColumns === 0) {
      this.deselect();
      return;
    }
    const range = this.selectedRange.peekByIndex(this.selectedRange.size() - 1);
    const {
      from,
      to,
      highlight
    } = range;
    this.clear();
    highlight.assign({
      row: clamp(highlight.row, -Infinity, countRows - 1),
      col: clamp(highlight.col, -Infinity, countColumns - 1)
    });
    from.assign({
      row: clamp(from.row, -Infinity, countRows - 1),
      col: clamp(from.col, -Infinity, countColumns - 1)
    });
    to.assign({
      row: clamp(to.row, 0, countRows - 1),
      col: clamp(to.col, 0, countColumns - 1)
    });
    this.selectedRange.ranges.push(range);
    this.highlight.getFocus().add(highlight).commit().syncWith(range);
    this.applyAndCommit(range);
  }
  /**
   * Refreshes the whole selection by recommitting (recalculating visual indexes to renderable ones) the renderable selection
   * that was already added.
   */
  commit() {
    const customSelections = this.highlight.getCustomSelections();
    customSelections.forEach((customSelection) => {
      customSelection.commit();
    });
    if (!this.isSelected()) {
      return;
    }
    const focusHighlight = this.highlight.getFocus();
    const currentLayer = this.getLayerLevel();
    focusHighlight.commit().syncWith(this.selectedRange.current());
    for (let layerLevel = 0; layerLevel < this.selectedRange.size(); layerLevel += 1) {
      this.highlight.useLayerLevel(layerLevel);
      const areaHighlight = this.highlight.createArea();
      const areaLayeredHighlight = this.highlight.createLayeredArea();
      const rowHeaderHighlight = this.highlight.createRowHeader();
      const columnHeaderHighlight = this.highlight.createColumnHeader();
      const activeRowHeaderHighlight = this.highlight.createActiveRowHeader();
      const activeColumnHeaderHighlight = this.highlight.createActiveColumnHeader();
      const activeCornerHeaderHighlight = this.highlight.createActiveCornerHeader();
      const rowHighlight = this.highlight.createRowHighlight();
      const columnHighlight = this.highlight.createColumnHighlight();
      areaHighlight.commit();
      areaLayeredHighlight.commit();
      rowHeaderHighlight.commit();
      columnHeaderHighlight.commit();
      activeRowHeaderHighlight.commit();
      activeColumnHeaderHighlight.commit();
      activeCornerHeaderHighlight.commit();
      rowHighlight.commit();
      columnHighlight.commit();
    }
    this.highlight.useLayerLevel(currentLayer);
  }
};
mixin(Selection2, localHooks_default);
var selection_default2 = Selection2;

// node_modules/handsontable/selection/mouseEventHandler.mjs
function mouseDown(_ref) {
  let {
    isShiftKey,
    isLeftClick: isLeftClick2,
    isRightClick: isRightClick2,
    coords,
    selection,
    controller,
    cellCoordsFactory
  } = _ref;
  const currentSelection = selection.isSelected() ? selection.getSelectedRange().current() : null;
  const selectedCorner = selection.isSelectedByCorner();
  const selectedRow = selection.isSelectedByRowHeader();
  selection.markSource("mouse");
  if (isShiftKey && currentSelection) {
    if (coords.row >= 0 && coords.col >= 0 && !controller.cell) {
      selection.setRangeEnd(coords);
    } else if ((selectedCorner || selectedRow) && coords.row >= 0 && coords.col >= 0 && !controller.cell) {
      selection.setRangeEnd(cellCoordsFactory(coords.row, coords.col));
    } else if (selectedCorner && coords.row < 0 && !controller.column) {
      selection.setRangeEnd(cellCoordsFactory(currentSelection.to.row, coords.col));
    } else if (selectedRow && coords.col < 0 && !controller.row) {
      selection.setRangeEnd(cellCoordsFactory(coords.row, currentSelection.to.col));
    } else if ((!selectedCorner && !selectedRow && coords.col < 0 || selectedCorner && coords.col < 0) && !controller.row) {
      selection.selectRows(Math.max(currentSelection.from.row, 0), coords.row, coords.col);
    } else if ((!selectedCorner && !selectedRow && coords.row < 0 || selectedRow && coords.row < 0) && !controller.column) {
      selection.selectColumns(Math.max(currentSelection.from.col, 0), coords.col, coords.row);
    }
  } else {
    const allowRightClickSelection = !selection.inInSelection(coords);
    const performSelection = isLeftClick2 || isRightClick2 && allowRightClickSelection;
    if (coords.row < 0 && coords.col >= 0 && !controller.column) {
      if (performSelection) {
        selection.selectColumns(coords.col, coords.col, coords.row);
      }
    } else if (coords.col < 0 && coords.row >= 0 && !controller.row) {
      if (performSelection) {
        selection.selectRows(coords.row, coords.row, coords.col);
      }
    } else if (coords.col >= 0 && coords.row >= 0 && !controller.cell) {
      if (performSelection) {
        selection.setRangeStart(coords);
      }
    } else if (coords.col < 0 && coords.row < 0) {
      selection.selectAll(true, true, {
        disableHeadersHighlight: true,
        focusPosition: {
          row: 0,
          col: 0
        }
      });
    }
  }
  selection.markEndSource();
}
function mouseOver(_ref2) {
  let {
    isLeftClick: isLeftClick2,
    coords,
    selection,
    controller,
    cellCoordsFactory
  } = _ref2;
  if (!isLeftClick2) {
    return;
  }
  const selectedRow = selection.isSelectedByRowHeader();
  const selectedColumn = selection.isSelectedByColumnHeader();
  const countCols = selection.tableProps.countCols();
  const countRows = selection.tableProps.countRows();
  selection.markSource("mouse");
  if (selectedColumn && !controller.column) {
    selection.setRangeEnd(cellCoordsFactory(countRows - 1, coords.col));
  } else if (selectedRow && !controller.row) {
    selection.setRangeEnd(cellCoordsFactory(coords.row, countCols - 1));
  } else if (!controller.cell) {
    selection.setRangeEnd(coords);
  }
  selection.markEndSource();
}
var handlers = /* @__PURE__ */ new Map([["mousedown", mouseDown], ["mouseover", mouseOver], ["touchstart", mouseDown]]);
function handleMouseEvent(event, _ref3) {
  let {
    coords,
    selection,
    controller,
    cellCoordsFactory
  } = _ref3;
  handlers.get(event.type)({
    coords,
    selection,
    controller,
    cellCoordsFactory,
    isShiftKey: event.shiftKey,
    isLeftClick: isLeftClick(event) || event.type === "touchstart",
    isRightClick: isRightClick(event)
  });
}

// node_modules/handsontable/3rdparty/SheetClip/SheetClip.mjs
var regUniversalNewLine = /^(\r\n|\n\r|\r|\n)/;
var regNextCellNoQuotes = /^[^\t\r\n]+/;
var regNextEmptyCell = /^\t/;
function parse(str) {
  const arr = [[""]];
  if (str.length === 0) {
    return arr;
  }
  let column = 0;
  let row = 0;
  let lastLength;
  while (str.length > 0) {
    if (lastLength === str.length) {
      break;
    }
    lastLength = str.length;
    if (str.match(regNextEmptyCell)) {
      str = str.replace(regNextEmptyCell, "");
      column += 1;
      arr[row][column] = "";
    } else if (str.match(regUniversalNewLine)) {
      str = str.replace(regUniversalNewLine, "");
      column = 0;
      row += 1;
      arr[row] = [""];
    } else {
      let nextCell = "";
      if (str.startsWith('"')) {
        let quoteNo = 0;
        let isStillCell = true;
        while (isStillCell) {
          const nextChar = str.slice(0, 1);
          if (nextChar === '"') {
            quoteNo += 1;
          }
          nextCell += nextChar;
          str = str.slice(1);
          if (str.length === 0 || str.match(/^[\t\r\n]/) && quoteNo % 2 === 0) {
            isStillCell = false;
          }
        }
        nextCell = nextCell.replace(/^"/, "").replace(/"$/, "").replace(/["]*/g, (match) => new Array(Math.floor(match.length / 2)).fill('"').join(""));
      } else {
        const matchedText = str.match(regNextCellNoQuotes);
        nextCell = matchedText ? matchedText[0] : "";
        str = str.slice(nextCell.length);
      }
      arr[row][column] = nextCell;
    }
  }
  return arr;
}
function stringify2(arr) {
  let r;
  let rLen;
  let c;
  let cLen;
  let str = "";
  let val;
  for (r = 0, rLen = arr.length; r < rLen; r += 1) {
    cLen = arr[r].length;
    for (c = 0; c < cLen; c += 1) {
      if (c > 0) {
        str += "	";
      }
      val = arr[r][c];
      if (typeof val === "string") {
        if (val.indexOf("\n") > -1) {
          str += `"${val.replace(/"/g, '""')}"`;
        } else {
          str += val;
        }
      } else if (val === null || val === void 0) {
        str += "";
      } else {
        str += val;
      }
    }
    if (r !== rLen - 1) {
      str += "\n";
    }
  }
  return str;
}

// node_modules/handsontable/shortcutContexts/constants.mjs
var GRID_GROUP = "gridDefault";
var EDITOR_EDIT_GROUP = "editorManager.handlingEditor";

// node_modules/handsontable/shortcutContexts/commands/editor/closeAndSave.mjs
var command = {
  name: "editorCloseAndSave",
  callback(hot) {
    const editorManager = hot._getEditorManager();
    editorManager.closeEditorAndSaveChanges();
  }
};

// node_modules/handsontable/shortcutContexts/commands/editor/closeAndSaveByArrowKeys.mjs
var command2 = {
  name: "editorCloseAndSaveByArrowKeys",
  callback(hot, event, keys) {
    const editorManager = hot._getEditorManager();
    const activeEditor = editorManager.getActiveEditor();
    if (activeEditor.isInFullEditMode() && activeEditor.state === EDITOR_STATE.EDITING) {
      return;
    }
    editorManager.closeEditorAndSaveChanges();
    if (hot.getSelected()) {
      if (keys.includes("arrowdown")) {
        hot.selection.transformStart(1, 0);
      } else if (keys.includes("arrowup")) {
        hot.selection.transformStart(-1, 0);
      } else if (keys.includes("arrowleft")) {
        hot.selection.transformStart(0, -1 * hot.getDirectionFactor());
      } else if (keys.includes("arrowright")) {
        hot.selection.transformStart(0, hot.getDirectionFactor());
      }
    }
    event.preventDefault();
  }
};

// node_modules/handsontable/shortcutContexts/commands/editor/closeAndSaveByEnter.mjs
var command3 = {
  name: "editorCloseAndSaveByEnter",
  callback(hot, event) {
    const editorManager = hot._getEditorManager();
    editorManager.closeEditorAndSaveChanges(event.ctrlKey || event.metaKey);
    editorManager.moveSelectionAfterEnter(event);
  }
};

// node_modules/handsontable/shortcutContexts/commands/editor/closeWithoutSaving.mjs
var command4 = {
  name: "editorCloseWithoutSaving",
  callback(hot) {
    const editorManager = hot._getEditorManager();
    editorManager.closeEditorAndRestoreOriginalValue(hot.getShortcutManager().isCtrlPressed());
    editorManager.activeEditor.focus();
  }
};

// node_modules/handsontable/shortcutContexts/commands/editor/fastOpen.mjs
var command5 = {
  name: "editorFastOpen",
  callback(hot, event) {
    const {
      highlight
    } = hot.getSelectedRangeLast();
    if (highlight.isHeader()) {
      return;
    }
    hot._getEditorManager().openEditor(null, event, true);
  }
};

// node_modules/handsontable/shortcutContexts/commands/editor/open.mjs
var command6 = {
  name: "editorOpen",
  callback(hot, event, keys) {
    const editorManager = hot._getEditorManager();
    const selectedRange = hot.getSelectedRangeLast();
    const {
      highlight
    } = selectedRange;
    if (hot.selection.isMultiple() && !selectedRange.isHeader() && hot.countRenderedCols() > 0 && hot.countRenderedRows() > 0) {
      const settings = hot.getSettings();
      const enterMoves = typeof settings.enterMoves === "function" ? settings.enterMoves(event) : settings.enterMoves;
      if (keys.includes("shift")) {
        hot.selection.transformFocus(-enterMoves.row, -enterMoves.col);
      } else {
        hot.selection.transformFocus(enterMoves.row, enterMoves.col);
      }
      return;
    }
    if (highlight.isHeader()) {
      return;
    }
    if (hot.getSettings().enterBeginsEditing) {
      if (editorManager.cellProperties.readOnly) {
        editorManager.moveSelectionAfterEnter(event);
      } else {
        editorManager.openEditor(null, event, true);
      }
    } else {
      editorManager.moveSelectionAfterEnter(event);
    }
    stopImmediatePropagation(event);
  }
};

// node_modules/handsontable/shortcutContexts/commands/editor/index.mjs
function getAllCommands() {
  return [command, command2, command3, command4, command5, command6];
}

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/down.mjs
var command7 = {
  name: "extendCellsSelectionDown",
  callback(hot) {
    const {
      highlight
    } = hot.getSelectedRangeLast();
    if (!hot.selection.isSelectedByColumnHeader() && !hot.selection.isSelectedByCorner() && (highlight.isCell() || highlight.isHeader() && hot.selection.isSelectedByRowHeader())) {
      hot.selection.transformEnd(1, 0);
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/downByViewportHeight.mjs
var command8 = {
  name: "extendCellsSelectionDownByViewportHeight",
  callback(hot) {
    const {
      to
    } = hot.getSelectedRangeLast();
    const nextRowIndexToSelect = Math.min(to.row + hot.countVisibleRows(), hot.countRows() - 1);
    const row = hot.rowIndexMapper.getNearestNotHiddenIndex(nextRowIndexToSelect, -1);
    if (row !== null) {
      const coords = hot._createCellCoords(row, to.col);
      const scrollPadding = to.row - hot.view.getFirstFullyVisibleRow();
      const nextVerticalScroll = Math.min(coords.row - scrollPadding, hot.countRows() - 1);
      hot.selection.setRangeEnd(coords);
      hot.scrollViewportTo({
        row: nextVerticalScroll,
        verticalSnap: "top",
        horizontalSnap: "start"
      });
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/left.mjs
var command9 = {
  name: "extendCellsSelectionLeft",
  callback(hot) {
    const {
      highlight
    } = hot.getSelectedRangeLast();
    if (!hot.selection.isSelectedByRowHeader() && !hot.selection.isSelectedByCorner() && (highlight.isCell() || highlight.isHeader() && hot.selection.isSelectedByColumnHeader())) {
      hot.selection.transformEnd(0, -1 * hot.getDirectionFactor());
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/right.mjs
var command10 = {
  name: "extendCellsSelectionRight",
  callback(hot) {
    const {
      highlight
    } = hot.getSelectedRangeLast();
    if (!hot.selection.isSelectedByRowHeader() && !hot.selection.isSelectedByCorner() && (highlight.isCell() || highlight.isHeader() && hot.selection.isSelectedByColumnHeader())) {
      hot.selection.transformEnd(0, hot.getDirectionFactor());
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/toColumns.mjs
var command11 = {
  name: "extendCellsSelectionToColumns",
  callback(hot) {
    const {
      highlight,
      from,
      to
    } = hot.getSelectedRangeLast();
    if (hot.selection.isSelectedByRowHeader()) {
      hot.selection.selectAll(true, true);
    } else {
      hot.selectColumns(from.col, to.col, highlight);
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/toMostBottom.mjs
var command12 = {
  name: "extendCellsSelectionToMostBottom",
  callback(hot) {
    const {
      selection,
      rowIndexMapper
    } = hot;
    const {
      highlight,
      from,
      to
    } = hot.getSelectedRangeLast();
    const isFocusHighlightedByHeader = highlight.isHeader() && hot.selection.isSelectedByRowHeader();
    if (highlight.isCell() || isFocusHighlightedByHeader) {
      const row = rowIndexMapper.getNearestNotHiddenIndex(hot.countRows() - 1, -1);
      const newFrom = from.clone();
      newFrom.row = highlight.row;
      selection.setRangeStart(newFrom, void 0, false, highlight.clone());
      if (isFocusHighlightedByHeader) {
        selection.selectedByRowHeader.add(selection.getLayerLevel());
      }
      selection.setRangeEnd(hot._createCellCoords(row, to.col));
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/toMostInlineEnd.mjs
var command13 = {
  name: "extendCellsSelectionToMostInlineEnd",
  callback(hot) {
    const {
      selection,
      columnIndexMapper
    } = hot;
    const {
      highlight,
      from,
      to
    } = hot.getSelectedRangeLast();
    if (!hot.selection.isSelectedByRowHeader() && !hot.selection.isSelectedByCorner() && highlight.isCell()) {
      const column = columnIndexMapper.getNearestNotHiddenIndex(hot.countCols() - 1, -1);
      const newFrom = from.clone();
      newFrom.col = highlight.col;
      selection.setRangeStart(newFrom, void 0, false, highlight.clone());
      selection.setRangeEnd(hot._createCellCoords(to.row, column));
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/toMostInlineStart.mjs
var command14 = {
  name: "extendCellsSelectionToMostInlineStart",
  callback(hot) {
    const {
      selection,
      columnIndexMapper
    } = hot;
    const {
      highlight,
      from,
      to
    } = hot.getSelectedRangeLast();
    if (!hot.selection.isSelectedByRowHeader() && !hot.selection.isSelectedByCorner() && highlight.isCell()) {
      const fixedColumns = parseInt(hot.getSettings().fixedColumnsStart, 10);
      const column = columnIndexMapper.getNearestNotHiddenIndex(fixedColumns, 1);
      const newFrom = from.clone();
      newFrom.col = highlight.col;
      selection.setRangeStart(newFrom, void 0, false, highlight.clone());
      selection.setRangeEnd(hot._createCellCoords(to.row, column));
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/toMostLeft.mjs
var command15 = {
  name: "extendCellsSelectionToMostLeft",
  callback(hot) {
    const {
      selection,
      columnIndexMapper
    } = hot;
    const {
      highlight,
      from,
      to
    } = hot.getSelectedRangeLast();
    const isFocusHighlightedByHeader = highlight.isHeader() && hot.selection.isSelectedByColumnHeader();
    if (highlight.isCell() || isFocusHighlightedByHeader) {
      const column = columnIndexMapper.getNearestNotHiddenIndex(...hot.isRtl() ? [hot.countCols() - 1, -1] : [0, 1]);
      const newFrom = from.clone();
      newFrom.col = highlight.col;
      selection.setRangeStart(newFrom, void 0, false, highlight.clone());
      if (isFocusHighlightedByHeader) {
        selection.selectedByColumnHeader.add(selection.getLayerLevel());
      }
      selection.setRangeEnd(hot._createCellCoords(to.row, column));
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/toMostRight.mjs
var command16 = {
  name: "extendCellsSelectionToMostRight",
  callback(hot) {
    const {
      selection,
      columnIndexMapper
    } = hot;
    const {
      highlight,
      from,
      to
    } = hot.getSelectedRangeLast();
    const isFocusHighlightedByHeader = highlight.isHeader() && hot.selection.isSelectedByColumnHeader();
    if (highlight.isCell() || isFocusHighlightedByHeader) {
      const column = columnIndexMapper.getNearestNotHiddenIndex(...hot.isRtl() ? [0, 1] : [hot.countCols() - 1, -1]);
      const newFrom = from.clone();
      newFrom.col = highlight.col;
      selection.setRangeStart(newFrom, void 0, false, highlight.clone());
      if (isFocusHighlightedByHeader) {
        selection.selectedByColumnHeader.add(selection.getLayerLevel());
      }
      selection.setRangeEnd(hot._createCellCoords(to.row, column));
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/toMostTop.mjs
var command17 = {
  name: "extendCellsSelectionToMostTop",
  callback(hot) {
    const {
      selection,
      rowIndexMapper
    } = hot;
    const {
      highlight,
      from,
      to
    } = hot.getSelectedRangeLast();
    const isFocusHighlightedByHeader = highlight.isHeader() && hot.selection.isSelectedByRowHeader();
    if (highlight.isCell() || isFocusHighlightedByHeader) {
      const row = rowIndexMapper.getNearestNotHiddenIndex(0, 1);
      const newFrom = from.clone();
      newFrom.row = highlight.row;
      selection.setRangeStart(newFrom, void 0, false, highlight.clone());
      if (isFocusHighlightedByHeader) {
        selection.selectedByRowHeader.add(selection.getLayerLevel());
      }
      selection.setRangeEnd(hot._createCellCoords(row, to.col));
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/toRows.mjs
var command18 = {
  name: "extendCellsSelectionToRows",
  callback(hot) {
    const {
      highlight,
      from,
      to
    } = hot.getSelectedRangeLast();
    if (hot.selection.isSelectedByColumnHeader()) {
      hot.selection.selectAll(true, true);
    } else {
      hot.selectRows(from.row, to.row, highlight);
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/up.mjs
var command19 = {
  name: "extendCellsSelectionUp",
  callback(hot) {
    const {
      highlight
    } = hot.getSelectedRangeLast();
    if (!hot.selection.isSelectedByColumnHeader() && !hot.selection.isSelectedByCorner() && (highlight.isCell() || highlight.isHeader() && hot.selection.isSelectedByRowHeader())) {
      hot.selection.transformEnd(-1, 0);
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/upByViewportHeight.mjs
var command20 = {
  name: "extendCellsSelectionUpByViewportHeight",
  callback(hot) {
    const {
      to
    } = hot.getSelectedRangeLast();
    const nextRowIndexToSelect = Math.max(to.row - hot.countVisibleRows(), 0);
    const row = hot.rowIndexMapper.getNearestNotHiddenIndex(nextRowIndexToSelect, 1);
    if (row !== null) {
      const coords = hot._createCellCoords(row, to.col);
      const scrollPadding = to.row - hot.view.getFirstFullyVisibleRow();
      const nextVerticalScroll = Math.max(coords.row - scrollPadding, 0);
      hot.selection.setRangeEnd(coords);
      hot.scrollViewportTo({
        row: nextVerticalScroll,
        verticalSnap: "top",
        horizontalSnap: "start"
      });
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/extendCellsSelection/index.mjs
function getAllCommands2() {
  return [command7, command8, command9, command10, command11, command12, command13, command14, command15, command16, command17, command18, command19, command20];
}

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/down.mjs
var command21 = {
  name: "moveCellSelectionDown",
  callback(_ref) {
    let {
      selection
    } = _ref;
    selection.transformStart(1, 0);
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/downByViewportHeight.mjs
var command22 = {
  name: "moveCellSelectionDownByViewportHeight",
  callback(hot) {
    const {
      navigableHeaders
    } = hot.getSettings();
    const columnHeadersCount = navigableHeaders ? hot.countColHeaders() : 0;
    const {
      row
    } = hot.getSelectedRangeLast().highlight;
    let rowsStep = hot.countVisibleRows() + columnHeadersCount;
    if (row === hot.countRows() - 1) {
      rowsStep = 1;
    } else if (row + rowsStep > hot.countRows()) {
      rowsStep = hot.countRows() - row - 1;
    }
    hot.selection.transformStart(rowsStep, 0);
    if (hot.getSelectedRangeLast().highlight.row < 0) {
      hot.scrollViewportTo({
        row: 0
      });
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/inlineEnd.mjs
var command23 = {
  name: "moveCellSelectionInlineEnd",
  callback(hot, event) {
    const settings = hot.getSettings();
    const selectedRange = hot.getSelectedRangeLast();
    const tabMoves = typeof settings.tabMoves === "function" ? settings.tabMoves(event) : settings.tabMoves;
    if (hot.selection.isMultiple() && !selectedRange.isHeader() && hot.countRenderedCols() > 0 && hot.countRenderedRows() > 0) {
      hot.selection.transformFocus(-tabMoves.row, -tabMoves.col);
    } else {
      hot.selection.transformStart(-tabMoves.row, -tabMoves.col);
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/inlineStart.mjs
var command24 = {
  name: "moveCellSelectionInlineStart",
  callback(hot, event) {
    const settings = hot.getSettings();
    const selectedRange = hot.getSelectedRangeLast();
    const tabMoves = typeof settings.tabMoves === "function" ? settings.tabMoves(event) : settings.tabMoves;
    if (hot.selection.isMultiple() && !selectedRange.isHeader() && hot.countRenderedCols() > 0 && hot.countRenderedRows() > 0) {
      hot.selection.transformFocus(tabMoves.row, tabMoves.col);
    } else {
      hot.selection.transformStart(tabMoves.row, tabMoves.col);
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/left.mjs
var command25 = {
  name: "moveCellSelectionLeft",
  callback(hot) {
    hot.selection.transformStart(0, -1 * hot.getDirectionFactor());
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/right.mjs
var command26 = {
  name: "moveCellSelectionRight",
  callback(hot) {
    hot.selection.transformStart(0, hot.getDirectionFactor());
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/toMostBottom.mjs
var command27 = {
  name: "moveCellSelectionToMostBottom",
  callback(hot) {
    const {
      col
    } = hot.getSelectedRangeLast().highlight;
    let row = hot.rowIndexMapper.getNearestNotHiddenIndex(hot.countRows() - 1, -1);
    if (row === null) {
      row = -1;
    }
    hot.selection.setRangeStart(hot._createCellCoords(row, col));
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/toMostBottomInlineEnd.mjs
var command28 = {
  name: "moveCellSelectionToMostBottomInlineEnd",
  callback(hot) {
    const {
      selection,
      rowIndexMapper,
      columnIndexMapper
    } = hot;
    const fixedRows = parseInt(hot.getSettings().fixedRowsBottom, 10);
    const row = rowIndexMapper.getNearestNotHiddenIndex(hot.countRows() - fixedRows - 1, -1);
    const column = columnIndexMapper.getNearestNotHiddenIndex(hot.countCols() - 1, -1);
    selection.setRangeStart(hot._createCellCoords(row, column));
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/toMostInlineEnd.mjs
var command29 = {
  name: "moveCellSelectionToMostInlineEnd",
  callback(hot) {
    const {
      selection,
      columnIndexMapper
    } = hot;
    selection.setRangeStart(hot._createCellCoords(hot.getSelectedRangeLast().highlight.row, columnIndexMapper.getNearestNotHiddenIndex(hot.countCols() - 1, -1)));
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/toMostInlineStart.mjs
var command30 = {
  name: "moveCellSelectionToMostInlineStart",
  callback(hot) {
    const {
      selection,
      columnIndexMapper
    } = hot;
    const fixedColumns = parseInt(hot.getSettings().fixedColumnsStart, 10);
    const row = hot.getSelectedRangeLast().highlight.row;
    const column = columnIndexMapper.getNearestNotHiddenIndex(fixedColumns, 1);
    selection.setRangeStart(hot._createCellCoords(row, column));
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/toMostLeft.mjs
var command31 = {
  name: "moveCellSelectionToMostLeft",
  callback(hot) {
    const {
      selection,
      columnIndexMapper
    } = hot;
    const row = hot.getSelectedRangeLast().highlight.row;
    let column = columnIndexMapper.getNearestNotHiddenIndex(...hot.isRtl() ? [hot.countCols() - 1, -1] : [0, 1]);
    if (column === null) {
      column = hot.isRtl() ? -1 : -hot.countRowHeaders();
    }
    selection.setRangeStart(hot._createCellCoords(row, column));
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/toMostRight.mjs
var command32 = {
  name: "moveCellSelectionToMostRight",
  callback(hot) {
    const {
      selection,
      columnIndexMapper
    } = hot;
    const {
      row
    } = hot.getSelectedRangeLast().highlight;
    let column = columnIndexMapper.getNearestNotHiddenIndex(...hot.isRtl() ? [0, 1] : [hot.countCols() - 1, -1]);
    if (column === null) {
      column = hot.isRtl() ? -hot.countRowHeaders() : -1;
    }
    selection.setRangeStart(hot._createCellCoords(row, column));
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/toMostTop.mjs
var command33 = {
  name: "moveCellSelectionToMostTop",
  callback(hot) {
    const {
      col
    } = hot.getSelectedRangeLast().highlight;
    let row = hot.rowIndexMapper.getNearestNotHiddenIndex(0, 1);
    if (row === null) {
      row = -hot.countColHeaders();
    }
    hot.selection.setRangeStart(hot._createCellCoords(row, col));
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/toMostTopInlineStart.mjs
var command34 = {
  name: "moveCellSelectionToMostTopInlineStart",
  callback(hot) {
    const {
      selection,
      rowIndexMapper,
      columnIndexMapper
    } = hot;
    const fixedRows = parseInt(hot.getSettings().fixedRowsTop, 10);
    const fixedColumns = parseInt(hot.getSettings().fixedColumnsStart, 10);
    const row = rowIndexMapper.getNearestNotHiddenIndex(fixedRows, 1);
    const column = columnIndexMapper.getNearestNotHiddenIndex(fixedColumns, 1);
    selection.setRangeStart(hot._createCellCoords(row, column));
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/up.mjs
var command35 = {
  name: "moveCellSelectionUp",
  callback(_ref) {
    let {
      selection
    } = _ref;
    selection.transformStart(-1, 0);
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/upByViewportHeight.mjs
var command36 = {
  name: "moveCellSelectionUpByViewportHight",
  callback(hot) {
    const {
      navigableHeaders
    } = hot.getSettings();
    const columnHeadersCount = navigableHeaders ? hot.countColHeaders() : 0;
    const {
      row
    } = hot.getSelectedRangeLast().highlight;
    let rowsStep = -(hot.countVisibleRows() + columnHeadersCount);
    if (row === -columnHeadersCount) {
      rowsStep = -1;
    } else if (row + rowsStep < columnHeadersCount) {
      rowsStep = -(row + columnHeadersCount);
    }
    hot.selection.transformStart(rowsStep, 0);
    if (hot.getSelectedRangeLast().highlight.row < 0) {
      hot.scrollViewportTo({
        row: 0
      });
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/moveCellSelection/index.mjs
function getAllCommands3() {
  return [command21, command22, command23, command24, command25, command26, command27, command28, command29, command30, command31, command32, command33, command34, command35, command36];
}

// node_modules/handsontable/shortcutContexts/commands/emptySelectedCells.mjs
var command37 = {
  name: "emptySelectedCells",
  callback(hot) {
    hot.emptySelectedCells();
    hot._getEditorManager().prepareEditor();
  }
};

// node_modules/handsontable/shortcutContexts/commands/scrollToFocusedCell.mjs
var command38 = {
  name: "scrollToFocusedCell",
  callback(hot) {
    const {
      highlight
    } = hot.getSelectedRangeLast();
    const firstVisibleRow = hot.view.getFirstFullyVisibleRow() - 1;
    const firstVisibleColumn = hot.view.getFirstFullyVisibleColumn() - 1;
    const lastVisibleRow = hot.view.getLastFullyVisibleRow() + 1;
    const lastVisibleColumn = hot.view.getLastFullyVisibleColumn() + 1;
    const visibleCoordsFrom = hot._createCellCoords(firstVisibleRow, firstVisibleColumn);
    const visibleCoordsTo = hot._createCellCoords(lastVisibleRow, lastVisibleColumn);
    const visibleRange = hot._createCellRange(visibleCoordsFrom, visibleCoordsFrom, visibleCoordsTo);
    if (!visibleRange.includes(highlight) && (highlight.row >= 0 || highlight.col >= 0)) {
      const scrollCoords = {};
      if (highlight.col >= 0) {
        const offsetColumns = Math.floor(hot.countVisibleCols() / 2);
        scrollCoords.col = Math.max(highlight.col - offsetColumns, 0);
      }
      if (highlight.row >= 0) {
        const offsetRows = Math.floor(hot.countVisibleRows() / 2);
        scrollCoords.row = Math.max(highlight.row - offsetRows, 0);
      }
      hot.scrollViewportTo(__spreadProps(__spreadValues({}, scrollCoords), {
        verticalSnap: "top",
        horizontalSnap: "start"
      }));
    }
  }
};

// node_modules/handsontable/shortcutContexts/commands/selectAllCells.mjs
var command39 = {
  name: "selectAllCells",
  callback(hot) {
    hot.selection.selectAll(true, true, {
      disableHeadersHighlight: true
    });
  }
};

// node_modules/handsontable/shortcutContexts/commands/selectAllCellsAndHeaders.mjs
var command40 = {
  name: "selectAllCellsAndHeaders",
  callback(hot) {
    hot.selection.selectAll(true, true, {
      disableHeadersHighlight: false
    });
  }
};

// node_modules/handsontable/shortcutContexts/commands/populateSelectedCellsData.mjs
var command41 = {
  name: "populateSelectedCellsData",
  callback(hot) {
    const selectedRange = hot.getSelectedRange();
    const {
      row: highlightRow,
      col: highlightColumn
    } = selectedRange[selectedRange.length - 1].highlight.normalize();
    const valueToPopulate = hot.getDataAtCell(highlightRow, highlightColumn);
    const cellValues = /* @__PURE__ */ new Map();
    for (let i = 0; i < selectedRange.length; i++) {
      selectedRange[i].forAll((row, column) => {
        if (row >= 0 && column >= 0 && (row !== highlightRow || column !== highlightColumn)) {
          const {
            readOnly
          } = hot.getCellMeta(row, column);
          if (!readOnly) {
            cellValues.set(`${row}x${column}`, [row, column, valueToPopulate]);
          }
        }
      });
    }
    hot.setDataAtCell(Array.from(cellValues.values()));
  }
};

// node_modules/handsontable/shortcutContexts/commands/index.mjs
var allCommands = [...getAllCommands(), ...getAllCommands2(), ...getAllCommands3(), command37, command38, command39, command40, command41];
function createKeyboardShortcutCommandsPool(hot) {
  const commands = {};
  allCommands.forEach((_ref) => {
    let {
      name,
      callback
    } = _ref;
    commands[name] = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return callback(hot, ...args);
    };
  });
  return commands;
}

// node_modules/handsontable/shortcutContexts/editor.mjs
function shortcutsEditorContext(hot) {
  const context = hot.getShortcutManager().addContext("editor");
  const commandsPool = createKeyboardShortcutCommandsPool(hot);
  const config = {
    group: EDITOR_EDIT_GROUP
  };
  context.addShortcuts([{
    keys: [["Enter"], ["Enter", "Shift"]],
    callback: (event, keys) => commandsPool.editorCloseAndSaveByEnter(event, keys)
  }, {
    keys: [["Enter", "Control/Meta"], ["Enter", "Control/Meta", "Shift"]],
    captureCtrl: true,
    callback: (event, keys) => commandsPool.editorCloseAndSaveByEnter(event, keys)
  }, {
    keys: [["Tab"], ["Tab", "Shift"], ["PageDown"], ["PageUp"]],
    forwardToContext: hot.getShortcutManager().getContext("grid"),
    callback: (event, keys) => commandsPool.editorCloseAndSave(event, keys)
  }, {
    keys: [["ArrowDown"], ["ArrowUp"], ["ArrowLeft"], ["ArrowRight"]],
    preventDefault: false,
    callback: (event, keys) => commandsPool.editorCloseAndSaveByArrowKeys(event, keys)
  }, {
    keys: [["Escape"], ["Escape", "Control/Meta"]],
    callback: () => commandsPool.editorCloseWithoutSaving()
  }], config);
}

// node_modules/handsontable/shortcutContexts/grid.mjs
function shortcutsGridContext(hot) {
  const context = hot.getShortcutManager().addContext("grid");
  const commandsPool = createKeyboardShortcutCommandsPool(hot);
  const config = {
    runOnlyIf: () => {
      const {
        navigableHeaders
      } = hot.getSettings();
      return isDefined(hot.getSelected()) && (navigableHeaders || !navigableHeaders && hot.countRenderedRows() > 0 && hot.countRenderedCols() > 0);
    },
    group: GRID_GROUP
  };
  context.addShortcuts([{
    keys: [["F2"]],
    callback: (event) => commandsPool.editorFastOpen(event)
  }, {
    keys: [["Enter"], ["Enter", "Shift"]],
    callback: (event, keys) => commandsPool.editorOpen(event, keys)
  }, {
    keys: [["Backspace"], ["Delete"]],
    callback: () => commandsPool.emptySelectedCells()
  }], {
    group: EDITOR_EDIT_GROUP,
    runOnlyIf: () => isDefined(hot.getSelected())
  });
  context.addShortcuts([{
    keys: [["Control/Meta", "A"]],
    callback: () => commandsPool.selectAllCells(),
    runOnlyIf: () => !hot.getSelectedRangeLast().highlight.isHeader()
  }, {
    keys: [["Control/Meta", "A"]],
    callback: () => {
    },
    runOnlyIf: () => hot.getSelectedRangeLast().highlight.isHeader(),
    preventDefault: true
  }, {
    keys: [["Control/Meta", "Shift", "Space"]],
    callback: () => commandsPool.selectAllCellsAndHeaders()
  }, {
    keys: [["Control/Meta", "Enter"]],
    callback: () => commandsPool.populateSelectedCellsData(),
    runOnlyIf: () => {
      return !hot.getSelectedRangeLast().highlight.isHeader() && hot.getSelectedRangeLast().getCellsCount() > 1;
    }
  }, {
    keys: [["Control", "Space"]],
    captureCtrl: true,
    callback: () => commandsPool.extendCellsSelectionToColumns()
  }, {
    keys: [["Shift", "Space"]],
    stopPropagation: true,
    callback: () => commandsPool.extendCellsSelectionToRows()
  }, {
    keys: [["ArrowUp"]],
    callback: () => commandsPool.moveCellSelectionUp()
  }, {
    keys: [["ArrowUp", "Control/Meta"]],
    captureCtrl: true,
    callback: () => commandsPool.moveCellSelectionToMostTop()
  }, {
    keys: [["ArrowUp", "Shift"]],
    callback: () => commandsPool.extendCellsSelectionUp()
  }, {
    keys: [["ArrowUp", "Shift", "Control/Meta"]],
    captureCtrl: true,
    callback: () => commandsPool.extendCellsSelectionToMostTop(),
    runOnlyIf: () => !(hot.selection.isSelectedByCorner() || hot.selection.isSelectedByColumnHeader())
  }, {
    keys: [["ArrowDown"]],
    callback: () => commandsPool.moveCellSelectionDown()
  }, {
    keys: [["ArrowDown", "Control/Meta"]],
    captureCtrl: true,
    callback: () => commandsPool.moveCellSelectionToMostBottom()
  }, {
    keys: [["ArrowDown", "Shift"]],
    callback: () => commandsPool.extendCellsSelectionDown()
  }, {
    keys: [["ArrowDown", "Shift", "Control/Meta"]],
    captureCtrl: true,
    callback: () => commandsPool.extendCellsSelectionToMostBottom(),
    runOnlyIf: () => !(hot.selection.isSelectedByCorner() || hot.selection.isSelectedByColumnHeader())
  }, {
    keys: [["ArrowLeft"]],
    callback: () => commandsPool.moveCellSelectionLeft()
  }, {
    keys: [["ArrowLeft", "Control/Meta"]],
    captureCtrl: true,
    callback: () => commandsPool.moveCellSelectionToMostLeft()
  }, {
    keys: [["ArrowLeft", "Shift"]],
    callback: () => commandsPool.extendCellsSelectionLeft()
  }, {
    keys: [["ArrowLeft", "Shift", "Control/Meta"]],
    captureCtrl: true,
    callback: () => commandsPool.extendCellsSelectionToMostLeft(),
    runOnlyIf: () => !(hot.selection.isSelectedByCorner() || hot.selection.isSelectedByRowHeader())
  }, {
    keys: [["ArrowRight"]],
    callback: () => commandsPool.moveCellSelectionRight()
  }, {
    keys: [["ArrowRight", "Control/Meta"]],
    captureCtrl: true,
    callback: () => commandsPool.moveCellSelectionToMostRight()
  }, {
    keys: [["ArrowRight", "Shift"]],
    callback: () => commandsPool.extendCellsSelectionRight()
  }, {
    keys: [["ArrowRight", "Shift", "Control/Meta"]],
    captureCtrl: true,
    callback: () => commandsPool.extendCellsSelectionToMostRight(),
    runOnlyIf: () => !(hot.selection.isSelectedByCorner() || hot.selection.isSelectedByRowHeader())
  }, {
    keys: [["Home"]],
    captureCtrl: true,
    callback: () => commandsPool.moveCellSelectionToMostInlineStart(),
    runOnlyIf: () => hot.view.isMainTableNotFullyCoveredByOverlays()
  }, {
    keys: [["Home", "Shift"]],
    callback: () => commandsPool.extendCellsSelectionToMostInlineStart()
  }, {
    keys: [["Home", "Control/Meta"]],
    captureCtrl: true,
    callback: () => commandsPool.moveCellSelectionToMostTopInlineStart(),
    runOnlyIf: () => hot.view.isMainTableNotFullyCoveredByOverlays()
  }, {
    keys: [["End"]],
    captureCtrl: true,
    callback: () => commandsPool.moveCellSelectionToMostInlineEnd(),
    runOnlyIf: () => hot.view.isMainTableNotFullyCoveredByOverlays()
  }, {
    keys: [["End", "Shift"]],
    callback: () => commandsPool.extendCellsSelectionToMostInlineEnd()
  }, {
    keys: [["End", "Control/Meta"]],
    captureCtrl: true,
    callback: () => commandsPool.moveCellSelectionToMostBottomInlineEnd(),
    runOnlyIf: () => hot.view.isMainTableNotFullyCoveredByOverlays()
  }, {
    keys: [["PageUp"]],
    callback: () => commandsPool.moveCellSelectionUpByViewportHight()
  }, {
    keys: [["PageUp", "Shift"]],
    callback: () => commandsPool.extendCellsSelectionUpByViewportHeight()
  }, {
    keys: [["PageDown"]],
    callback: () => commandsPool.moveCellSelectionDownByViewportHeight()
  }, {
    keys: [["PageDown", "Shift"]],
    callback: () => commandsPool.extendCellsSelectionDownByViewportHeight()
  }, {
    keys: [["Tab"]],
    // The property value is controlled by focusCatcher module (https://github.com/handsontable/handsontable/blob/master/handsontable/src/core/focusCatcher/index.js)
    preventDefault: false,
    callback: (event) => commandsPool.moveCellSelectionInlineStart(event)
  }, {
    keys: [["Shift", "Tab"]],
    // The property value is controlled by focusCatcher module (https://github.com/handsontable/handsontable/blob/master/handsontable/src/core/focusCatcher/index.js)
    preventDefault: false,
    callback: (event) => commandsPool.moveCellSelectionInlineEnd(event)
  }, {
    keys: [["Control/Meta", "Backspace"]],
    callback: () => commandsPool.scrollToFocusedCell()
  }], config);
}

// node_modules/handsontable/shortcutContexts/index.mjs
function registerAllShortcutContexts(hotInstance) {
  [shortcutsGridContext, shortcutsEditorContext].forEach((context) => context(hotInstance));
}

export {
  require_array_set_length,
  require_does_not_exceed_safe_integer,
  to2dArray,
  extendArray,
  pivot,
  arrayReduce,
  arrayFilter,
  arrayMap,
  arrayEach,
  arrayUnique,
  getDifferenceOfArrays,
  stringToArray,
  toSingleLine,
  stringify,
  isDefined,
  isUndefined,
  isEmpty,
  isRegExp,
  _injectProductInfo,
  toUpperCaseFirst,
  randomString,
  isPercentValue,
  substitute,
  stripTags,
  sanitize,
  A11Y_TABINDEX,
  A11Y_TREEGRID,
  A11Y_PRESENTATION,
  A11Y_MENU,
  A11Y_MENU_ITEM,
  A11Y_COMBOBOX,
  A11Y_LISTBOX,
  A11Y_OPTION,
  A11Y_CHECKBOX,
  A11Y_TEXT,
  A11Y_LABEL,
  A11Y_HIDDEN,
  A11Y_DISABLED,
  A11Y_MULTISELECTABLE,
  A11Y_HASPOPUP,
  A11Y_ROWCOUNT,
  A11Y_COLCOUNT,
  A11Y_EXPANDED,
  A11Y_SORT,
  A11Y_CHECKED,
  A11Y_SELECTED,
  A11Y_AUTOCOMPLETE,
  A11Y_CONTROLS,
  A11Y_ACTIVEDESCENDANT,
  A11Y_LIVE,
  A11Y_RELEVANT,
  A11Y_SETSIZE,
  A11Y_POSINSET,
  getParentWindow,
  closest,
  isChildOf,
  hasClass,
  addClass,
  removeClass,
  setAttribute,
  removeAttribute,
  empty,
  fastInnerHTML,
  fastInnerText,
  isVisible,
  offset,
  getTrimmingContainer,
  getStyle,
  outerWidth,
  outerHeight,
  getCaretPosition,
  getSelectionEndPosition,
  clearTextSelection,
  setCaretPosition,
  getScrollbarWidth,
  isInput,
  isOutsideInput,
  isDetached,
  observeVisibilityChangeOnce,
  makeElementContentEditableAndSelectItsContent,
  removeContentEditableFromElementAndDeselect,
  runWithSelectedContendEditableElement,
  isFunction,
  debounce,
  partial,
  curry,
  duckSchema,
  inherit,
  extend,
  deepExtend,
  deepClone,
  clone,
  mixin,
  isObjectEqual,
  isObject,
  defineGetter,
  objectEach,
  getProperty,
  setProperty,
  deepObjectSize,
  createObjectPropListener,
  hasOwnProperty,
  requestAnimationFrame,
  cancelAnimationFrame,
  isTouchSupported,
  getComparisonFunction,
  isChrome,
  isSafari,
  isMobileBrowser,
  isIpadOS,
  isWindowsOS,
  isMacOS,
  KEY_CODES,
  isPrintableChar,
  isFunctionKey,
  isCtrlMetaKey,
  isKey,
  stopImmediatePropagation,
  isImmediatePropagationStopped,
  isRightClick,
  isLeftClick,
  offsetRelativeTo,
  warn,
  error,
  pluginHooks_default,
  staticRegister,
  hasItem,
  _getEditorInstance,
  _getItem,
  _register,
  eventManager_default,
  instanceToHTML,
  _dataToHTML,
  htmlToGridSettings,
  isNumeric,
  isNumericLike,
  rangeEach,
  rangeEachReverse,
  valueAccordingPercent,
  clamp,
  createUniqueMap,
  getPluginsNames,
  getPlugin,
  hasPlugin,
  registerPlugin,
  hasItem2,
  _getItem2,
  _register2,
  hasItem3,
  _getItem3,
  _register3,
  ViewportColumnsCalculator,
  ViewportRowsCalculator,
  coords_default,
  range_default,
  localHooks_default,
  ACTIVE_HEADER_TYPE,
  HEADER_TYPE,
  WalkontableFacade,
  handleMouseEvent,
  spreadsheetColumnLabel,
  dataRowToChangesArray,
  countFirstRowKeys,
  isArrayOfArrays,
  isArrayOfObjects,
  IndexMap,
  PhysicalIndexToValueMap,
  HidingMap,
  getDecreasedIndexes,
  getIncreasedIndexes,
  LinkedPhysicalIndexToValueMap,
  TrimmingMap,
  alterUtilsFactory,
  IndexesSequence,
  IndexMapper,
  CONTEXTMENU_ITEMS_NO_ITEMS,
  CONTEXTMENU_ITEMS_ROW_ABOVE,
  CONTEXTMENU_ITEMS_ROW_BELOW,
  CONTEXTMENU_ITEMS_INSERT_LEFT,
  CONTEXTMENU_ITEMS_INSERT_RIGHT,
  CONTEXTMENU_ITEMS_REMOVE_ROW,
  CONTEXTMENU_ITEMS_REMOVE_COLUMN,
  CONTEXTMENU_ITEMS_UNDO,
  CONTEXTMENU_ITEMS_REDO,
  CONTEXTMENU_ITEMS_READ_ONLY,
  CONTEXTMENU_ITEMS_CLEAR_COLUMN,
  CONTEXTMENU_ITEMS_COPY,
  CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_HEADERS,
  CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_GROUP_HEADERS,
  CONTEXTMENU_ITEMS_COPY_COLUMN_HEADERS_ONLY,
  CONTEXTMENU_ITEMS_CUT,
  CONTEXTMENU_ITEMS_FREEZE_COLUMN,
  CONTEXTMENU_ITEMS_UNFREEZE_COLUMN,
  CONTEXTMENU_ITEMS_MERGE_CELLS,
  CONTEXTMENU_ITEMS_UNMERGE_CELLS,
  CONTEXTMENU_ITEMS_ADD_COMMENT,
  CONTEXTMENU_ITEMS_EDIT_COMMENT,
  CONTEXTMENU_ITEMS_REMOVE_COMMENT,
  CONTEXTMENU_ITEMS_READ_ONLY_COMMENT,
  CONTEXTMENU_ITEMS_ALIGNMENT,
  CONTEXTMENU_ITEMS_ALIGNMENT_LEFT,
  CONTEXTMENU_ITEMS_ALIGNMENT_CENTER,
  CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT,
  CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY,
  CONTEXTMENU_ITEMS_ALIGNMENT_TOP,
  CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE,
  CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM,
  CONTEXTMENU_ITEMS_BORDERS,
  CONTEXTMENU_ITEMS_BORDERS_TOP,
  CONTEXTMENU_ITEMS_BORDERS_RIGHT,
  CONTEXTMENU_ITEMS_BORDERS_BOTTOM,
  CONTEXTMENU_ITEMS_BORDERS_LEFT,
  CONTEXTMENU_ITEMS_REMOVE_BORDERS,
  CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD,
  CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD,
  CONTEXTMENU_ITEMS_HIDE_COLUMN,
  CONTEXTMENU_ITEMS_SHOW_COLUMN,
  CONTEXTMENU_ITEMS_HIDE_ROW,
  CONTEXTMENU_ITEMS_SHOW_ROW,
  FILTERS_NAMESPACE,
  FILTERS_CONDITIONS_NAMESPACE,
  FILTERS_CONDITIONS_NONE,
  FILTERS_CONDITIONS_EMPTY,
  FILTERS_CONDITIONS_NOT_EMPTY,
  FILTERS_CONDITIONS_EQUAL,
  FILTERS_CONDITIONS_NOT_EQUAL,
  FILTERS_CONDITIONS_BEGINS_WITH,
  FILTERS_CONDITIONS_ENDS_WITH,
  FILTERS_CONDITIONS_CONTAINS,
  FILTERS_CONDITIONS_NOT_CONTAIN,
  FILTERS_CONDITIONS_GREATER_THAN,
  FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL,
  FILTERS_CONDITIONS_LESS_THAN,
  FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL,
  FILTERS_CONDITIONS_BETWEEN,
  FILTERS_CONDITIONS_NOT_BETWEEN,
  FILTERS_CONDITIONS_AFTER,
  FILTERS_CONDITIONS_BEFORE,
  FILTERS_CONDITIONS_TODAY,
  FILTERS_CONDITIONS_TOMORROW,
  FILTERS_CONDITIONS_YESTERDAY,
  FILTERS_DIVS_FILTER_BY_CONDITION,
  FILTERS_DIVS_FILTER_BY_VALUE,
  FILTERS_LABELS_CONJUNCTION,
  FILTERS_LABELS_DISJUNCTION,
  FILTERS_VALUES_BLANK_CELLS,
  FILTERS_BUTTONS_SELECT_ALL,
  FILTERS_BUTTONS_CLEAR,
  FILTERS_BUTTONS_OK,
  FILTERS_BUTTONS_CANCEL,
  FILTERS_BUTTONS_PLACEHOLDER_SEARCH,
  FILTERS_BUTTONS_PLACEHOLDER_VALUE,
  FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE,
  CHECKBOX_CHECKED,
  CHECKBOX_UNCHECKED,
  constants_exports,
  detectSelectionType,
  normalizeSelectionFactory,
  transformSelectionToColumnDistance,
  transformSelectionToRowDistance,
  selection_default2 as selection_default,
  parse,
  stringify2,
  hasItem4,
  _getItem4,
  _register4,
  GRID_GROUP,
  EDITOR_EDIT_GROUP,
  EDITOR_STATE,
  BaseEditor,
  registerAllShortcutContexts,
  TextEditor,
  baseRenderer,
  textRenderer,
  TextCellType
};
//# sourceMappingURL=chunk-EYFUX3VO.js.map
