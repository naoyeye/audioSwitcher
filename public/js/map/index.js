(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":13}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":14}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":15}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":16}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":17}],6:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
},{"../core-js/promise":5}],7:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":4}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":2,"../core-js/is-iterable":3}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};
},{"../core-js/array/from":1}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":1}],12:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":91}],13:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;

},{"../../modules/_core":25,"../../modules/es6.array.from":82,"../../modules/es6.string.iterator":87}],14:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');

},{"../modules/core.get-iterator":80,"../modules/es6.string.iterator":87,"../modules/web.dom.iterable":90}],15:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');

},{"../modules/core.is-iterable":81,"../modules/es6.string.iterator":87,"../modules/web.dom.iterable":90}],16:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":25,"../../modules/es6.object.define-property":84}],17:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
require('../modules/es7.promise.finally');
require('../modules/es7.promise.try');
module.exports = require('../modules/_core').Promise;

},{"../modules/_core":25,"../modules/es6.object.to-string":85,"../modules/es6.promise":86,"../modules/es6.string.iterator":87,"../modules/es7.promise.finally":88,"../modules/es7.promise.try":89,"../modules/web.dom.iterable":90}],18:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],19:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],20:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],21:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":43}],22:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":71,"./_to-iobject":73,"./_to-length":74}],23:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":24,"./_wks":78}],24:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],25:[function(require,module,exports){
var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],26:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":54,"./_property-desc":61}],27:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":18}],28:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],29:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":33}],30:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":35,"./_is-object":43}],31:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],32:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":25,"./_ctx":27,"./_global":35,"./_hide":37}],33:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],34:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":21,"./_ctx":27,"./_is-array-iter":42,"./_iter-call":44,"./_to-length":74,"./core.get-iterator-method":79}],35:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],36:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],37:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":29,"./_object-dp":54,"./_property-desc":61}],38:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":35}],39:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":29,"./_dom-create":30,"./_fails":33}],40:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],41:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":24}],42:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":49,"./_wks":78}],43:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],44:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":21}],45:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":37,"./_object-create":53,"./_property-desc":61,"./_set-to-string-tag":65,"./_wks":78}],46:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var has = require('./_has');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":32,"./_has":36,"./_hide":37,"./_iter-create":45,"./_iterators":49,"./_library":50,"./_object-gpo":56,"./_redefine":63,"./_set-to-string-tag":65,"./_wks":78}],47:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":78}],48:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],49:[function(require,module,exports){
module.exports = {};

},{}],50:[function(require,module,exports){
module.exports = true;

},{}],51:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":24,"./_global":35,"./_task":70}],52:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":18}],53:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":21,"./_dom-create":30,"./_enum-bug-keys":31,"./_html":38,"./_object-dps":55,"./_shared-key":66}],54:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":21,"./_descriptors":29,"./_ie8-dom-define":39,"./_to-primitive":76}],55:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":21,"./_descriptors":29,"./_object-dp":54,"./_object-keys":58}],56:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":36,"./_shared-key":66,"./_to-object":75}],57:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":22,"./_has":36,"./_shared-key":66,"./_to-iobject":73}],58:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":31,"./_object-keys-internal":57}],59:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],60:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":21,"./_is-object":43,"./_new-promise-capability":52}],61:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],62:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

},{"./_hide":37}],63:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":37}],64:[function(require,module,exports){
'use strict';
var global = require('./_global');
var core = require('./_core');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_core":25,"./_descriptors":29,"./_global":35,"./_object-dp":54,"./_wks":78}],65:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":36,"./_object-dp":54,"./_wks":78}],66:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":67,"./_uid":77}],67:[function(require,module,exports){
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

},{"./_global":35}],68:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":18,"./_an-object":21,"./_wks":78}],69:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":28,"./_to-integer":72}],70:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":24,"./_ctx":27,"./_dom-create":30,"./_global":35,"./_html":38,"./_invoke":40}],71:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":72}],72:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],73:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":28,"./_iobject":41}],74:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":72}],75:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":28}],76:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":43}],77:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],78:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":35,"./_shared":67,"./_uid":77}],79:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":23,"./_core":25,"./_iterators":49,"./_wks":78}],80:[function(require,module,exports){
var anObject = require('./_an-object');
var get = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

},{"./_an-object":21,"./_core":25,"./core.get-iterator-method":79}],81:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};

},{"./_classof":23,"./_core":25,"./_iterators":49,"./_wks":78}],82:[function(require,module,exports){
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":26,"./_ctx":27,"./_export":32,"./_is-array-iter":42,"./_iter-call":44,"./_iter-detect":47,"./_to-length":74,"./_to-object":75,"./core.get-iterator-method":79}],83:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":19,"./_iter-define":46,"./_iter-step":48,"./_iterators":49,"./_to-iobject":73}],84:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":29,"./_export":32,"./_object-dp":54}],85:[function(require,module,exports){

},{}],86:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":18,"./_an-instance":20,"./_classof":23,"./_core":25,"./_ctx":27,"./_export":32,"./_for-of":34,"./_global":35,"./_is-object":43,"./_iter-detect":47,"./_library":50,"./_microtask":51,"./_new-promise-capability":52,"./_perform":59,"./_promise-resolve":60,"./_redefine-all":62,"./_set-species":64,"./_set-to-string-tag":65,"./_species-constructor":68,"./_task":70,"./_wks":78}],87:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":46,"./_string-at":69}],88:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":25,"./_export":32,"./_global":35,"./_promise-resolve":60,"./_species-constructor":68}],89:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":32,"./_new-promise-capability":52,"./_perform":59}],90:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":35,"./_hide":37,"./_iterators":49,"./_wks":78,"./es6.array.iterator":83}],91:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

},{"./runtime":92}],92:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);

},{}],93:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _StreetviewElement = require('./StreetviewElement');

var _StreetviewElement2 = _interopRequireDefault(_StreetviewElement);

var _Streetview = require('./Streetview');

var _Streetview2 = _interopRequireDefault(_Streetview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Game = function () {
    function Game(map, element) {
        var _this = this;

        var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { roundCount: 5, distribution: distribution.weighted };
        (0, _classCallCheck3.default)(this, Game);

        this.element = element;
        this.svElement = new _StreetviewElement2.default(element.querySelector('.streetview'), element.querySelector('.return-home'));

        this.scoreElement = element.querySelector('.total-score');
        this.timeElement = element.querySelector('.time-left');
        this.movesElement = element.querySelector('.moves-left');
        this.roundElement = element.querySelector('.round');

        this.googleMap = new google.maps.Map(element.querySelector('.map-element'), {
            zoom: 0,
            center: { lat: 0, lng: 0 },
            disableDefaultUI: true,
            clickableIcons: false,
            backgroundColor: '#aadaff',
            fullscreenControl: false
        });
        this.attachMap('.embed-map');
        google.maps.event.addListener(this.googleMap, 'click', function (e) {
            if (_this.googleMap.getDiv().parentElement.attributes.class.value === 'embed-map') _this.placeGuessMarker(e.latLng);
        });

        // this.googleMap = new google.maps.Map(element.querySelector('.overview-map'), {
        //     zoom: 2,
        //     center: { lat: 0, lng: 0 },
        //     disableDefaultUI: true,
        //     clickableIcons: false,
        //     backgroundColor: '#aadaff',
        //     fullscreenControl: false,
        // });

        this.setResizeEventListeners();

        this.newGame(map, rules);

        this.ready = false;
        this.once('nextRound', function () {
            _this.ready = true;
        });
    }

    (0, _createClass3.default)(Game, [{
        key: 'setRules',
        value: function setRules(e) {
            var _this2 = this;

            console.log('set rules called', this.ready);
            if (e) e.preventDefault();
            if (!this.ready) {
                console.log('this.ready = ', this.ready);
                this.once('nextRound', function () {
                    return setTimeout(function () {
                        console.log('nextRound');
                        _this2.setRules();
                    }, 5);
                });
                return;
            }

            this.hideGameRuleSelection();

            var form = document.querySelector('form');

            var _map = [].concat((0, _toConsumableArray3.default)(new FormData(form))).map(function (n) {
                return n[1];
            }),
                _map2 = (0, _toArray3.default)(_map),
                _map2$ = _map2[0],
                roundCount = _map2$ === undefined ? 5 : _map2$,
                timeLimit = _map2[1],
                moveLimit = _map2[2],
                restrictions = _map2.slice(3);

            console.log('roundCount = ', roundCount);
            document.querySelector('.logg').innerText = 'roundCount';

            var rules = { roundCount: +roundCount, timeLimit: +timeLimit, moveLimit: +moveLimit };
            rules.panAllowed = restrictions.includes('pan');
            rules.zoomAllowed = restrictions.includes('zoom');
            this.rules = rules;

            setTimeout(function () {
                return _this2.applyRules();
            }, 300);
        }
    }, {
        key: 'resetRestrictions',
        value: function resetRestrictions() {
            this.svElement.resetRestrictions();
            this.timeElement.style.display = 'none';
            this.movesElement.style.display = 'none';
        }
    }, {
        key: 'applyRules',
        value: function applyRules() {
            console.log('applyRules');
            if (!this.rules.panAllowed) this.svElement.restrictPan();

            if (!this.rules.zoomAllowed) this.svElement.restrictZoom();

            if (this.rules.moveLimit !== -1) this.svElement.setMoveLimit(this.rules.moveLimit, this.movesElement);

            if (this.rules.timeLimit !== -1) this.startTimer(+this.rules.timeLimit);

            // 请求截图
            console.log('请求截图');
            setTimeout(function () {
                $('.logg').hide();
                $.ajax({
                    url: '/map/screenshot',
                    success: function success(data) {
                        console.log('data', data);
                    }
                });
            }, 1000);
        }
    }, {
        key: 'startTimer',
        value: function startTimer(seconds) {
            var _this3 = this;

            if (this.timerRunning) return;
            this.timeElement.style.display = 'inline-block';
            this.timerRunning = true;
            this.timeElement.innerHTML = 'Time: <b>' + seconds + '</b>';
            this.timeInterval = setInterval(function () {
                seconds -= 0.1;
                _this3.timeElement.innerHTML = 'Time: <b>' + (seconds < 10 ? (Math.round(seconds * 10) / 10).toFixed(1) : Math.round(seconds)) + '</b>';
            }, 100);
            this.timeTimeout = setTimeout(function () {
                _this3.makeGuess({ lat: 0, lng: 0 });
                clearInterval(_this3.timeInterval);
                _this3.timerRunning = false;
            }, seconds * 1000);
        }
    }, {
        key: 'endTimer',
        value: function endTimer() {
            clearTimeout(this.timeTimeout);
            clearInterval(this.timeInterval);
            this.timerRunning = false;
        }
    }, {
        key: 'hideGameRuleSelection',
        value: function hideGameRuleSelection() {
            var element = document.querySelector(".gamerule-selector");
            element.style.transform = 'translateY(-' + element.offsetHeight + 'px)';
        }
    }, {
        key: 'attachMap',
        value: function attachMap(selector) {
            var mapElement = this.googleMap.getDiv();
            mapElement.remove();
            this.element.querySelector(selector).appendChild(mapElement);
        }
    }, {
        key: 'toggleMapOverlay',
        value: function toggleMapOverlay() {
            if (this.map.polygon.getMap()) this.map.polygon.setMap(null);else this.map.polygon.setMap(this.googleMap);
        }
    }, {
        key: 'setResizeEventListeners',
        value: function setResizeEventListeners() {
            var _this4 = this;

            var resizeElement = this.element.querySelector('.guess-map-resizer');
            var resizerDown = false;
            var guessMap = this.element.querySelector('.guess-map');

            var onMove = function onMove(x, y) {
                if (resizerDown) {
                    var height = window.innerHeight - y - _this4.element.offsetTop;
                    var width = x - _this4.element.offsetLeft;
                    guessMap.style.height = height + 'px';
                    guessMap.style.width = width + 'px';
                }
            };
            var onDown = function onDown() {
                resizerDown = true;
            };
            var onUp = function onUp() {
                resizerDown = false;
            };

            resizeElement.addEventListener('mousedown', function () {
                return onDown();
            });
            document.addEventListener('mousemove', function (e) {
                return onMove(e.pageX, e.pageY);
            });
            document.addEventListener('mouseup', function () {
                return onUp();
            });

            resizeElement.addEventListener('touchstart', function () {
                return onDown();
            });
            document.addEventListener('touchmove', function (e) {
                return onMove(e.touches[0].pageX, e.touches[0].pageY);
            });
            document.addEventListener('touchend', function () {
                return onUp();
            });
        }
    }, {
        key: 'newGame',
        value: function newGame() {
            var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.overviewLines) this.removeOverviewLines();

            if (rules !== false) {
                this.rules = rules;
            }

            if (map !== false) {
                this.map = map;
                // console.log('this.rules.distribution - ', this.rules.distribution)
                this.streetview = new _Streetview2.default(map, 1);
            }

            this.zoom = 14;
            this.currentRound = 0;
            this.events = {};
            this.overviewLines = [];
            this.previousGuesses = [];
            this.roundElement.innerHTML = 'Round: <b>' + this.currentRound + '/' + this.rules.roundCount + '</b>';

            console.log('newGame');
            document.querySelector('.logg').innerText = 'newGame';
            this.preloadNextMap();
            this.nextRound();
        }
    }, {
        key: 'playAgain',
        value: function playAgain() {
            var _this5 = this;

            var button = this.element.querySelector('.play-again-button');
            button.innerText = 'Loading...';
            this.newGame();
            this.once('nextRound', function () {
                var overviewElement = _this5.element.querySelector('.guess-overview');
                overviewElement.style.transform = 'translateY(-100%)';
                setTimeout(function () {
                    button.innerText = 'Play Again';
                    _this5.applyRules();
                }, 300);
            });
        }
    }, {
        key: 'showOverview',
        value: function showOverview(guess, actual) {
            this.attachMap('.overview-map');

            var distance = this.measureDistance(guess, actual);
            var niceDistance = this.formatDistance(distance);
            var score = this.map.scoreCalculation(distance);

            this.previousGuesses.push({
                guess: guess, actual: actual, score: score
            });

            var totalScore = this.previousGuesses.map(function (result) {
                return result.score;
            }).reduce(function (a, b) {
                return a + b;
            });

            this.scoreElement.innerHTML = 'Score: <b>' + totalScore + '</b>';

            return [score, niceDistance, totalScore];
        }
    }, {
        key: 'showRoundOverview',
        value: function showRoundOverview(guess, actual) {
            var _this6 = this;

            var _showOverview = this.showOverview(guess, actual),
                _showOverview2 = (0, _slicedToArray3.default)(_showOverview, 2),
                score = _showOverview2[0],
                niceDistance = _showOverview2[1];

            var overviewElement = this.element.querySelector('.guess-overview');
            overviewElement.style.transform = 'translateY(0%)';
            overviewElement.querySelector('.next-round-button').style.display = 'inline-block';
            overviewElement.querySelector('.game-end-buttons').style.display = 'none';

            var _overviewElement$quer = overviewElement.querySelectorAll('.score-text p'),
                _overviewElement$quer2 = (0, _slicedToArray3.default)(_overviewElement$quer, 2),
                meterElement = _overviewElement$quer2[0],
                scoreElement = _overviewElement$quer2[1];

            meterElement.innerText = 'Your guess is ' + niceDistance + ' removed from your start location';
            if (score === 1) scoreElement.innerText = 'You scored a point';else scoreElement.innerText = 'You scored ' + score + ' points';

            this.fitMap([guess, actual]);
            setTimeout(function () {
                overviewElement.querySelector('.score-progress').style.width = score / _this6.map.maxScore * 100 + '%';
                _this6.addOverviewLine(guess, actual, 600);
            }, 300);
        }
    }, {
        key: 'showGameOverview',
        value: function showGameOverview(guess, actual) {
            var _this7 = this;

            var _showOverview3 = this.showOverview(guess, actual),
                _showOverview4 = (0, _slicedToArray3.default)(_showOverview3, 3),
                score = _showOverview4[0],
                niceDistance = _showOverview4[1],
                totalScore = _showOverview4[2];

            var overviewElement = this.element.querySelector('.guess-overview');
            overviewElement.style.transform = 'translateY(0%)';
            overviewElement.querySelector('.next-round-button').style.display = 'none';
            overviewElement.querySelector('.game-end-buttons').style.display = 'block';

            var maxScore = this.map.maxScore * this.rules.roundCount;

            var _overviewElement$quer3 = overviewElement.querySelectorAll('.score-text p'),
                _overviewElement$quer4 = (0, _slicedToArray3.default)(_overviewElement$quer3, 2),
                meterElement = _overviewElement$quer4[0],
                scoreElement = _overviewElement$quer4[1];

            meterElement.innerText = 'Your latest guess is ' + niceDistance + ' removed from your start location';
            if (score === 1) scoreElement.innerText = 'You scored a point, which brings your total score to ' + totalScore + ' points';else scoreElement.innerText = 'You scored ' + score + ' points, which brings your total score to ' + totalScore + ' points';

            var locations = this.previousGuesses.map(function (result) {
                return result.guess;
            }).concat(this.previousGuesses.map(function (result) {
                return result.actual;
            }));
            this.fitMap(locations);

            setTimeout(function () {
                overviewElement.querySelector('.score-progress').style.width = totalScore / maxScore * 100 + '%';
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(_this7.previousGuesses), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var result = _step.value;

                        _this7.addOverviewLine(result.guess, result.actual, 600);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }, 300);
        }
    }, {
        key: 'fitMapToGeoMap',
        value: function fitMapToGeoMap() {
            this.googleMap.fitBounds(this.map.getBounds());
        }
    }, {
        key: 'fitMap',
        value: function fitMap(positions) {
            var bounds = new google.maps.LatLngBounds();
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = (0, _getIterator3.default)(positions), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var location = _step2.value;

                    bounds.extend({
                        lat: location[0],
                        lng: location[1]
                    });
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.googleMap.fitBounds(bounds);
        }
    }, {
        key: 'nextRoundButton',
        value: function nextRoundButton() {
            var _this8 = this;

            var button = this.element.querySelector('.next-round-button');
            button.innerText = 'Loading...';

            this.once('nextRound', function () {
                var overviewElement = _this8.element.querySelector('.guess-overview');
                overviewElement.style.transform = 'translateY(-100%)';

                setTimeout(function () {
                    button.innerText = 'Next Round';
                    if (_this8.svElement.panorama) {
                        _this8.svElement.panorama.setZoom(0);
                        _this8.applyRules();
                    }
                }, 300);
            });
            this.nextRound();
        }
    }, {
        key: 'nextRound',
        value: function nextRound() {
            var _this9 = this,
                _svElement;

            // Check if next destination is loaded
            if (!this.mapLoaded) {
                this.once('preload', function () {
                    return _this9.nextRound();
                });
                return;
            }

            if (this.svElement.panorama) this.resetRestrictions();
            this.currentDestination = this.nextDestination;
            this.disableGuessButton();
            // this.fitMapToGeoMap();

            if (++this.currentRound < this.rules.roundCount) this.preloadNextMap();

            this.roundElement.innerHTML = 'Round: <b>' + this.currentRound + '/' + this.rules.roundCount + '</b>';

            setTimeout(function () {
                _this9.timeElement.style.display = 'none';
                _this9.movesElement.style.display = 'none';
                _this9.fire('nextRound');
                _this9.removeOverviewLines();
                _this9.attachMap('.embed-map');
                _this9.fitMapToGeoMap();
            }, 500);
            (_svElement = this.svElement).setLocation.apply(_svElement, (0, _toConsumableArray3.default)(this.currentDestination));
        }
    }, {
        key: 'removeOverviewLines',
        value: function removeOverviewLines() {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = (0, _getIterator3.default)(this.overviewLines), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var lineData = _step3.value;

                    lineData.line.setMap(null);
                    lineData.guess.setMap(null);
                    lineData.actual.setMap(null);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: 'addOverviewLine',
        value: function addOverviewLine(guess, actual) {
            var _this10 = this;

            var animationTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1500;

            guess = { lat: guess[0], lng: guess[1] };
            actual = { lat: actual[0], lng: actual[1] };

            var lineData = {};
            this.overviewLines.push(lineData);

            lineData.line = new google.maps.Polyline({
                path: [guess, guess],
                geodesic: true,
                strokeColor: 'red',
                strokeOpacity: 0.8,
                strokeWeight: 3,
                map: this.googleMap
            });

            var dropTime = 250;
            var fps = 30;
            var steps = fps * (animationTime / 1000);
            var step = 0;
            var deltaLat = guess.lat - actual.lat;
            var deltaLng = guess.lng - actual.lng;

            lineData.guess = new google.maps.Marker({
                position: guess,
                map: this.googleMap,
                animation: google.maps.Animation.DROP,
                title: 'Your guess'
            });

            setTimeout(function () {
                var interval = self.setInterval(function () {
                    if (step++ >= steps) {
                        clearInterval(interval);
                        lineData.line.setPath([guess, actual]);
                        return;
                    }

                    lineData.line.setPath([guess, {
                        lat: guess.lat - deltaLat * (step / steps),
                        lng: guess.lng - deltaLng * (step / steps)
                    }]);
                }, 1000 / fps);
            }, dropTime);

            setTimeout(function () {
                lineData.actual = new google.maps.Marker({
                    position: actual,
                    animation: google.maps.Animation.DROP,
                    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
                    title: 'Actual location'
                });
                lineData.actual.setMap(_this10.googleMap);
            }, animationTime);
        }
    }, {
        key: 'disableGuessButton',
        value: function disableGuessButton() {
            var button = this.element.querySelector('.guess-button');
            button.style.pointerEvents = 'none';
            button.style.filter = 'grayscale(90%)';
        }
    }, {
        key: 'enableGuessButton',
        value: function enableGuessButton() {
            var button = this.element.querySelector('.guess-button');
            button.style.pointerEvents = 'all';
            button.style.filter = 'grayscale(0%)';
        }
    }, {
        key: 'measureDistance',
        value: function measureDistance(from, to) {
            return google.maps.geometry.spherical.computeDistanceBetween(new (Function.prototype.bind.apply(google.maps.LatLng, [null].concat((0, _toConsumableArray3.default)(from))))(), new (Function.prototype.bind.apply(google.maps.LatLng, [null].concat((0, _toConsumableArray3.default)(to))))());
        }
    }, {
        key: 'makeGuess',
        value: function makeGuess() {
            if (this.marker === undefined || this.marker.getMap() === null) this.placeGuessMarker({ lat: 0, lng: 0 });
            this.marker.setMap(null);
            this.endTimer();

            var guessLocation = [this.marker.position.lat(), this.marker.position.lng()];

            if (this.currentRound === this.rules.roundCount) {
                this.showGameOverview(guessLocation, this.currentDestination);
            } else {
                this.showRoundOverview(guessLocation, this.currentDestination);
            }
        }
    }, {
        key: 'formatDistance',
        value: function formatDistance(meters) {
            if (meters < 1000) {
                return Math.floor(meters * 10) / 10 + ' m';
            }
            if (meters < 20000) {
                return Math.floor(meters / 100) / 10 + ' km';
            }
            return Math.floor(meters / 1000) + ' km';
        }
    }, {
        key: 'placeGuessMarker',
        value: function placeGuessMarker(location) {
            if (this.marker !== undefined) {
                this.marker.setMap(null);
            }

            this.marker = new google.maps.Marker({
                position: location,
                map: this.googleMap
            });
            this.enableGuessButton();
        }
    }, {
        key: 'returnHome',
        value: function returnHome() {
            var _svElement2;

            (_svElement2 = this.svElement).setLocation.apply(_svElement2, (0, _toConsumableArray3.default)(this.currentDestination));
        }
    }, {
        key: 'preloadNextMap',
        value: function preloadNextMap() {
            var _this11 = this;

            this.mapLoaded = false;
            this.streetview.randomValidLocation(this.zoom).then(function (next) {
                _this11.nextDestination = next;
                _this11.mapLoaded = true;
                _this11.fire('preload');
            });
        }
    }, {
        key: 'fire',
        value: function fire(event) {
            if (this.events[event]) {
                for (var i = this.events[event].length - 1; i >= 0; i--) {
                    this.events[event][i]();
                }
            }
        }
    }, {
        key: 'once',
        value: function once(event, callback) {
            var _this12 = this;

            var onceCallback = function onceCallback() {
                callback();
                _this12.off(event, onceCallback);
            };
            this.on(event, onceCallback);
        }
    }, {
        key: 'on',
        value: function on(event, callback) {
            if (!this.events[event]) {
                this.events[event] = [];
            }
            this.events[event].push(callback);
        }
    }, {
        key: 'off',
        value: function off(event, callback) {
            if (event in this.events) {
                this.events[event].splice(this.events[event].indexOf(callback), 1);
            } else {
                console.warn('Trying to remove ' + event + ' event, but it does not exist');
            }
        }
    }]);
    return Game;
}();

exports.default = Game;

},{"./Streetview":96,"./StreetviewElement":97,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8,"babel-runtime/helpers/slicedToArray":9,"babel-runtime/helpers/toArray":10,"babel-runtime/helpers/toConsumableArray":11}],94:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeoMap = function () {
    function GeoMap(polygon, minimumDistanceForPoints) {
        (0, _classCallCheck3.default)(this, GeoMap);

        console.log(minimumDistanceForPoints);
        this.minimumDistanceForPoints = minimumDistanceForPoints;
        this.maxScore = 5000;

        this.polygon = polygon;
    }

    (0, _createClass3.default)(GeoMap, [{
        key: 'getBounds',
        value: function getBounds() {
            var bounds = new google.maps.LatLngBounds();
            this.polygon.getPaths().forEach(function (path) {
                path.forEach(function (pos) {
                    bounds.extend(pos);
                });
            });
            return bounds;
        }
    }, {
        key: 'isInMap',
        value: function isInMap(_lat, lon) {
            return google.maps.geometry.poly.containsLocation({ lat: function lat() {
                    return _lat;
                }, lng: function lng() {
                    return lon;
                } }, this.polygon);
        }
    }, {
        key: 'scoreCalculation',
        value: function scoreCalculation(distance) {

            var score = (this.minimumDistanceForPoints - distance) / (this.minimumDistanceForPoints / this.maxScore);
            var scoreDifficulty = 2;

            console.log('1', score);

            if (score < 0) return 0;

            score = Math.pow(score, scoreDifficulty) / Math.pow(this.maxScore, scoreDifficulty - 1);

            console.log('2', score);

            score = Math.max(0, score);
            score = Math.min(this.maxScore, score);
            console.log('3', score);
            return Math.round(score);
        }
    }]);
    return GeoMap;
}();

exports.default = GeoMap;

},{"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _GeoMap = require('./GeoMap');

var _GeoMap2 = _interopRequireDefault(_GeoMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapManager = function () {
    function MapManager() {
        (0, _classCallCheck3.default)(this, MapManager);
    }

    (0, _createClass3.default)(MapManager, [{
        key: 'initialize',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var response;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch('../data/countries.json');

                            case 2:
                                response = _context.sent;

                                console.error('MapManager initialize');
                                _context.next = 6;
                                return response.json();

                            case 6:
                                this.countries = _context.sent;
                                _context.next = 9;
                                return fetch('../data/maps.json');

                            case 9:
                                response = _context.sent;
                                _context.next = 12;
                                return response.json();

                            case 12:
                                this.maps = _context.sent;

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function initialize() {
                return _ref.apply(this, arguments);
            }

            return initialize;
        }()
    }, {
        key: 'getMap',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(key) {
                var _this = this;

                var poly, map, response, kml, area, minimumDistanceForPoints;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                poly = void 0;

                                if (!(this.maps[key] === undefined)) {
                                    _context2.next = 5;
                                    break;
                                }

                                poly = this.kmlsToPolygon(this.countries[key]);
                                _context2.next = 19;
                                break;

                            case 5:
                                map = this.maps[key];

                                if (!(map.type === 'collection')) {
                                    _context2.next = 11;
                                    break;
                                }

                                console.log("Map collection:", map.countries);
                                poly = this.kmlsToPolygon.apply(this, (0, _toConsumableArray3.default)(map.countries.map(function (country) {
                                    return _this.countries[country];
                                })));
                                _context2.next = 19;
                                break;

                            case 11:
                                if (!(map.type === 'kml')) {
                                    _context2.next = 19;
                                    break;
                                }

                                _context2.next = 14;
                                return fetch('../data/kml/' + map.file);

                            case 14:
                                response = _context2.sent;
                                _context2.next = 17;
                                return response.text();

                            case 17:
                                kml = _context2.sent;

                                poly = this.kmlsToPolygon(kml);

                            case 19:

                                console.log('poly = ', { poly: poly });

                                area = 0;

                                poly.getPaths().forEach(function (path) {
                                    console.log('path - ', path);
                                    area += google.maps.geometry.spherical.computeArea(path);
                                });

                                minimumDistanceForPoints = Math.sqrt(area) * 2;


                                console.log('minimumDistanceForPoints - ', minimumDistanceForPoints);
                                return _context2.abrupt('return', new _GeoMap2.default(poly, minimumDistanceForPoints));

                            case 25:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getMap(_x) {
                return _ref2.apply(this, arguments);
            }

            return getMap;
        }()
    }, {
        key: 'kmlsToPolygon',
        value: function kmlsToPolygon() {
            var paths = [];

            for (var _len = arguments.length, kmls = Array(_len), _key = 0; _key < _len; _key++) {
                kmls[_key] = arguments[_key];
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(kmls), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var kml = _step.value;

                    paths = paths.concat(this.kmlToPaths(kml));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return new google.maps.Polygon({
                paths: paths,
                strokeColor: '#FFC107',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FFC107',
                fillOpacity: 0.35
            });
        }
    }, {
        key: 'kmlToPaths',
        value: function kmlToPaths(kml) {
            var paths = [];

            var addPolygonToPaths = function addPolygonToPaths(polygon, paths) {
                var poly = [];
                var coordString = polygon.textContent.trim();
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = (0, _getIterator3.default)(coordString.split(' ')), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var coordinate = _step2.value;

                        var _coordinate$split$map = coordinate.split(',').map(function (n) {
                            return +n;
                        }),
                            _coordinate$split$map2 = (0, _slicedToArray3.default)(_coordinate$split$map, 3),
                            lng = _coordinate$split$map2[0],
                            lat = _coordinate$split$map2[1],
                            _ = _coordinate$split$map2[2];

                        poly.push({
                            lat: lat, lng: lng
                        });
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                paths.push(poly);
            };

            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(kml, "text/xml").firstChild;

            if (xmlDoc.nodeName === 'MultiGeometry') {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = (0, _getIterator3.default)(xmlDoc.children), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _polygon = _step3.value;

                        addPolygonToPaths(_polygon, paths);
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            } else if (xmlDoc.nodeName === 'Polygon') addPolygonToPaths(xmlDoc, paths);

            return paths;
        }
    }]);
    return MapManager;
}();

exports.default = MapManager;

},{"./GeoMap":94,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/asyncToGenerator":6,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8,"babel-runtime/helpers/slicedToArray":9,"babel-runtime/helpers/toConsumableArray":11,"babel-runtime/regenerator":12}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Streetview = function () {
    function Streetview(map, distribution) {
        (0, _classCallCheck3.default)(this, Streetview);

        this.map = map;
        this.distribution = distribution;
    }

    (0, _createClass3.default)(Streetview, [{
        key: 'randomValidLocation',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var endZoom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 14;

                var tile, canvas, context, img, data, bluePixelCount, i, randomPixel, _i, x, y;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.randomValidTile(endZoom);

                            case 2:
                                tile = _context.sent;
                                canvas = document.createElement('canvas');
                                context = canvas.getContext('2d');
                                img = tile.img;

                                canvas.width = img.width;
                                canvas.height = img.height;
                                context.drawImage(img, 0, 0);

                                data = context.getImageData(0, 0, img.width, img.height).data;
                                bluePixelCount = 0;


                                for (i = 0; i < data.length; i += 4) {
                                    if (data[i + 2] > 0) bluePixelCount++;
                                }randomPixel = Math.floor(Math.random() * bluePixelCount);
                                _i = 0;

                            case 14:
                                if (!(_i < data.length)) {
                                    _context.next = 22;
                                    break;
                                }

                                if (!(data[_i + 2] > 0 && --randomPixel === 0)) {
                                    _context.next = 19;
                                    break;
                                }

                                x = _i / 4 % img.width;
                                y = Math.floor(_i / 4 / img.width);
                                return _context.abrupt('return', this.tilePixelToLatLon(tile.x, tile.y, tile.zoom, x, y));

                            case 19:
                                _i += 4;
                                _context.next = 14;
                                break;

                            case 22:

                                console.error("No blue pixel found");

                            case 23:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function randomValidLocation() {
                return _ref.apply(this, arguments);
            }

            return randomValidLocation;
        }()
    }, {
        key: 'randomValidTile',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(endZoom) {
                var _this = this;

                var chosenTile, previousTiles, failedTiles, subTiles, validTiles;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                chosenTile = { x: 0, y: 0, zoom: 0 };
                                previousTiles = [chosenTile];
                                failedTiles = [];

                            case 3:
                                if (!(chosenTile.zoom < endZoom)) {
                                    _context2.next = 11;
                                    break;
                                }

                                _context2.next = 6;
                                return this.getSubTiles(chosenTile.x, chosenTile.y, chosenTile.zoom);

                            case 6:
                                subTiles = _context2.sent;
                                validTiles = subTiles.filter(function (tile) {
                                    return tile.hasSv;
                                }).filter(function (tile) {
                                    return _this.tileIntersectsMap(tile.x, tile.y, tile.zoom);
                                }).filter(function (tile) {
                                    var _iteratorNormalCompletion = true;
                                    var _didIteratorError = false;
                                    var _iteratorError = undefined;

                                    try {
                                        for (var _iterator = (0, _getIterator3.default)(failedTiles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                            var fail = _step.value;

                                            if (fail.x === tile.x && fail.y === tile.y && fail.zoom === tile.zoom) return false;
                                        }
                                    } catch (err) {
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return) {
                                                _iterator.return();
                                            }
                                        } finally {
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                    }

                                    return true;
                                });


                                if (validTiles.length === 0) {
                                    failedTiles.push(chosenTile);
                                    if (previousTiles.length > 0) chosenTile = previousTiles.splice(-2)[0];else chosenTile = { x: 0, y: 0, zoom: 0 };
                                    console.log("Took a wrong turn when getting a random position, going back to zoom " + chosenTile.zoom, chosenTile);
                                } else {
                                    chosenTile = this.pickRandomSubTile(validTiles);
                                    previousTiles.push(chosenTile);
                                }
                                _context2.next = 3;
                                break;

                            case 11:
                                return _context2.abrupt('return', chosenTile);

                            case 12:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function randomValidTile(_x2) {
                return _ref2.apply(this, arguments);
            }

            return randomValidTile;
        }()
    }, {
        key: 'pickRandomSubTile',
        value: function pickRandomSubTile(tiles) {
            if (this.distribution === window.distribution.uniform) {
                return tiles[Math.floor(tiles.length * Math.random())];
            }

            var totalCoverage = tiles.map(function (tile) {
                return tile.coverage;
            }).reduce(function (a, b) {
                return a + b;
            });
            var random = Math.random() * totalCoverage;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = (0, _getIterator3.default)(tiles), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var tile = _step2.value;

                    random -= tile.coverage;
                    if (random <= 0) return tile;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            console.error("Count not find tile");
        }
    }, {
        key: 'tileIntersectsMap',
        value: function tileIntersectsMap(tileX, tileY, zoom) {
            var bounds = [];
            bounds.push(this.tilePixelToLatLon(tileX, tileY, zoom, 0, 0));
            bounds.push(this.tilePixelToLatLon(tileX, tileY, zoom, 256, 256));
            bounds.push(this.tilePixelToLatLon(tileX, tileY, zoom, 0, 256));
            bounds.push(this.tilePixelToLatLon(tileX, tileY, zoom, 256, 0));
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = (0, _getIterator3.default)(bounds), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _map;

                    var bound = _step3.value;

                    if ((_map = this.map).isInMap.apply(_map, (0, _toConsumableArray3.default)(bound))) return true;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            var mapsBounds = new google.maps.LatLngBounds({ lat: bounds[2][0], lng: bounds[2][1] }, { lat: bounds[3][0], lng: bounds[3][1] });

            var intersect = false;
            this.map.polygon.getPaths().forEach(function (path) {
                path.forEach(function (point) {
                    if (mapsBounds.contains(point)) intersect = true;
                });
            });

            // Check if map coordinates are in within tile bounds
            return intersect;
        }
    }, {
        key: 'getSubTiles',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(x, y, zoom) {
                var startX, startY, endX, endY;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                startX = x * 2;
                                startY = y * 2;
                                endX = startX + 2;
                                endY = startY + 2;

                                zoom++;

                                return _context3.abrupt('return', this.getTilesAtCoordinate(startX, endX, startY, endY, zoom));

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getSubTiles(_x3, _x4, _x5) {
                return _ref3.apply(this, arguments);
            }

            return getSubTiles;
        }()
    }, {
        key: 'getTilesAtCoordinate',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(startX, endX, startY, endY, zoom) {
                var _this2 = this;

                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                return _context4.abrupt('return', new _promise2.default(function (resolve) {

                                    var maxIterations = (endX - startX) * (endY - startY);
                                    var iteration = 0;
                                    var results = [];

                                    for (var y = startY; y < endY; y++) {
                                        for (var x = startX; x < endX; x++) {
                                            _this2.getTile(x, y, zoom).then(function (result) {

                                                results.push(result);
                                                if (++iteration >= maxIterations) {
                                                    resolve(results);
                                                }
                                            });
                                        }
                                    }
                                }));

                            case 1:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getTilesAtCoordinate(_x6, _x7, _x8, _x9, _x10) {
                return _ref4.apply(this, arguments);
            }

            return getTilesAtCoordinate;
        }()
    }, {
        key: 'tilePixelToLatLon',
        value: function tilePixelToLatLon(tileX, tileY, zoom, pixelX, pixelY) {
            tileX += pixelX / 256;
            tileY += pixelY / 256;

            tileX *= Math.pow(2, 8 - zoom);
            tileY *= Math.pow(2, 8 - zoom);

            var lon = tileX / 256 * 360 - 180;
            var n = Math.PI - 2 * Math.PI * tileY / 256;
            var lat = 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));

            return [lat, lon];
        }
    }, {
        key: 'toRadians',
        value: function toRadians(degrees) {
            return degrees * Math.PI / 180;
        }
    }, {
        key: 'latLonToTile',
        value: function latLonToTile(latDeg, lonDeg, zoom) {
            var latRad = this.toRadians(latDeg);
            var n = Math.pow(2.0, zoom);
            var xTile = Math.floor((lonDeg + 180.0) / 360.0 * n);
            var yTile = Math.floor((1.0 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2.0 * n);
            return [xTile, yTile];
        }
    }, {
        key: 'getTile',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(x, y, zoom) {
                var _this3 = this;

                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                return _context6.abrupt('return', new _promise2.default(function () {
                                    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve) {
                                        var response, blob, reader;
                                        return _regenerator2.default.wrap(function _callee5$(_context5) {
                                            while (1) {
                                                switch (_context5.prev = _context5.next) {
                                                    case 0:
                                                        _context5.next = 2;
                                                        return fetch('https://mts1.googleapis.com/vt?hl=en-US&lyrs=svv|cb_client:apiv3&style=40,18&x=' + x + '&y=' + y + '&z=' + zoom);

                                                    case 2:
                                                        response = _context5.sent;
                                                        _context5.next = 5;
                                                        return response.blob();

                                                    case 5:
                                                        blob = _context5.sent;
                                                        reader = new FileReader();

                                                        reader.readAsDataURL(blob);
                                                        reader.onload = function (e) {
                                                            var img = new Image();
                                                            img.src = e.target.result;
                                                            img.onload = function () {
                                                                var hasSv = img.width !== 1;
                                                                var coverage = _this3.distribution === window.distribution.weighted ? _this3.getTileCoverage(img) : 0;

                                                                resolve({
                                                                    coverage: coverage, hasSv: hasSv, img: img, x: x, y: y, zoom: zoom
                                                                });
                                                            };
                                                        };

                                                    case 9:
                                                    case 'end':
                                                        return _context5.stop();
                                                }
                                            }
                                        }, _callee5, _this3);
                                    }));

                                    return function (_x14) {
                                        return _ref6.apply(this, arguments);
                                    };
                                }()));

                            case 1:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getTile(_x11, _x12, _x13) {
                return _ref5.apply(this, arguments);
            }

            return getTile;
        }()
    }, {
        key: 'getTileCoverage',
        value: function getTileCoverage(img) {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
            var data = context.getImageData(0, 0, img.width, img.height).data;
            var coverage = 0;
            for (var i = 0; i < data.length; i += 4) {
                coverage += data[i + 2];
            }return coverage;
        }
    }]);
    return Streetview;
}();

exports.default = Streetview;

// Array.prototype.shuffle = function () {
//     var input = this;

//     for (var i = input.length - 1; i >= 0; i--) {

//         var randomIndex = Math.floor(Math.random() * (i + 1));
//         var itemAtIndex = input[randomIndex];

//         input[randomIndex] = input[i];
//         input[i] = itemAtIndex;
//     }
//     return input;
// }

},{"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/promise":5,"babel-runtime/helpers/asyncToGenerator":6,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8,"babel-runtime/helpers/toConsumableArray":11,"babel-runtime/regenerator":12}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StreetviewElement = function () {
    function StreetviewElement(element, flagElement) {
        (0, _classCallCheck3.default)(this, StreetviewElement);

        this.flagElement = flagElement;
        this.element = element;
    }

    (0, _createClass3.default)(StreetviewElement, [{
        key: 'resetRestrictions',
        value: function resetRestrictions() {
            this.allowMove();
            this.allowPan();
            this.allowZoom();
            this.removeMoveLimit();
        }
    }, {
        key: 'setMoveLimit',
        value: function setMoveLimit(moves, remainingElement) {
            var _this = this;

            console.log({ moves: moves });
            if (moves === 0) this.restrictMove();
            remainingElement.style.display = 'inline-block';
            remainingElement.innerHTML = 'Moves: <b>' + moves + '</b>';
            this.panorama.addListener('position_changed', function () {
                remainingElement.innerHTML = 'Moves: <b>' + --moves + '</b>';
                if (moves === 0) _this.restrictMove();
            });
        }
    }, {
        key: 'removeMoveLimit',
        value: function removeMoveLimit() {
            google.maps.event.clearListeners(this.panorama, 'position_changed');
        }
    }, {
        key: 'restrictPan',
        value: function restrictPan() {
            // this.element.querySelector('.gm-compass').style.display = 'none';
            // this.element.querySelector('.widget-scene').style.pointerEvents = 'none';
        }
    }, {
        key: 'allowPan',
        value: function allowPan() {
            // this.element.querySelector('.gm-compass').style.display = 'block';
            // this.element.querySelector('.widget-scene').style.pointerEvents = 'all';
        }
    }, {
        key: 'restrictZoom',
        value: function restrictZoom() {
            // this.element.querySelector('div.gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom > div.gmnoprint > div').style.display = 'none';
            this.panorama.setOptions({ scrollwheel: false });
        }
    }, {
        key: 'allowZoom',
        value: function allowZoom() {
            // this.element.querySelector('div.gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom > div.gmnoprint > div').style.display = 'block';
            this.panorama.setOptions({ scrollwheel: true });
        }
    }, {
        key: 'restrictMove',
        value: function restrictMove() {
            this.panorama.setOptions({ linksControl: false });
            this.panorama.setOptions({ clickToGo: false });
            this.flagElement.style.display = 'none';
        }
    }, {
        key: 'allowMove',
        value: function allowMove() {
            this.panorama.setOptions({ linksControl: true });
            this.panorama.setOptions({ clickToGo: true });
            this.flagElement.style.display = 'block';
        }
    }, {
        key: 'setLocation',
        value: function setLocation(lat, lon) {
            document.querySelector('.logg').innerText = 'setLocation';

            if (this.panorama !== undefined) {
                this.panorama.setPosition({ lat: lat, lng: lon });
            } else {
                this.panorama = new google.maps.StreetViewPanorama(this.element, {
                    position: { lat: lat, lng: lon },
                    // position: { lat: 42.345573, lng: -71.098326 },
                    addressControl: true,
                    linksControl: false,
                    panControl: false,
                    enableCloseButton: false,
                    showRoadLabels: false,
                    motionTracking: false,
                    fullscreenControl: false,
                    motionTrackingControl: false,
                    zoomControl: false,
                    // scrollwheel: false,
                    clickToGo: false
                    // pov: {
                    //     heading: 0,
                    //     pitch: 0,
                    // },
                    // zoom: 0
                });
            }

            this.panorama.set;
        }
    }]);
    return StreetviewElement;
}();

exports.default = StreetviewElement;

},{"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8}],98:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Streetview = require('./Streetview');

var _Streetview2 = _interopRequireDefault(_Streetview);

var _Game = require('./Game');

var _Game2 = _interopRequireDefault(_Game);

var _MapManager = require('./MapManager');

var _MapManager2 = _interopRequireDefault(_MapManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapApp = function () {
    function MapApp(distribution) {
        (0, _classCallCheck3.default)(this, MapApp);

        this.distribution = { weighted: 0, uniform: 1 };
        this.init();
    }

    (0, _createClass3.default)(MapApp, [{
        key: 'init',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var map, mapManager, game;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                console.log('location.hash - ', window.location.hash);

                                map = decodeURI(window.location.hash.substring(1));

                                window.addEventListener('hashchange', function () {
                                    window.location.reload();
                                });
                                if (map === '') {
                                    map = 'world';
                                }

                                console.log("Map: ", map);

                                document.querySelector('.logg').innerText = '1';

                                mapManager = new _MapManager2.default();

                                document.querySelector('.logg').innerText = '2';

                                _context.next = 10;
                                return mapManager.initialize();

                            case 10:
                                document.querySelector('.logg').innerText = '3';

                                _context.next = 13;
                                return mapManager.getMap(map);

                            case 13:
                                map = _context.sent;

                                document.querySelector('.logg').innerText = '4';

                                game = new _Game2.default(map, document.querySelector('.estimator'), this.distribution);


                                document.querySelector('.logg').innerText = '5';
                                game.setRules();

                                document.querySelector('.logg').innerText = '6';

                                // let svElement = new StreetviewElement(document.querySelector('.streetview'));

                                // streetview = new Streetview(maps.world);
                                // let location = await streetview.randomValidLocation();

                                // svElement.setLocation(...location);
                                // console.log({ location });

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function init() {
                return _ref.apply(this, arguments);
            }

            return init;
        }()
    }]);
    return MapApp;
}(); // Todo:
// Map editor maken
// Style return home button
// Photosphere gamemode toevoegen
// Load size van voorpagina verminderen


exports.default = MapApp;


var app = new MapApp();

$('#start-btn').click(function () {
    game.setRules();
});

function goHome() {
    window.location.href = '../';
}

},{"./Game":93,"./MapManager":95,"./Streetview":96,"babel-runtime/helpers/asyncToGenerator":6,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8,"babel-runtime/regenerator":12}]},{},[98])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIm1hcC9HYW1lLmpzIiwibWFwL0dlb01hcC5qcyIsIm1hcC9NYXBNYW5hZ2VyLmpzIiwibWFwL1N0cmVldHZpZXcuanMiLCJtYXAvU3RyZWV0dmlld0VsZW1lbnQuanMiLCJtYXAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QyxTQUFoQyxHQUE0QyxHQUE1Qzs7O3VDQUVNLFdBQVcsVUFBWCxFOzs7QUFDTix5Q0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLFNBQWhDLEdBQTRDLEdBQTVDOzs7dUNBR1ksV0FBVyxNQUFYLENBQWtCLEdBQWxCLEM7OztBQUFaLG1DOztBQUNBLHlDQUFTLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0MsU0FBaEMsR0FBNEMsR0FBNUM7O0FBR0ksb0MsR0FBTyxtQkFBUyxHQUFULEVBQWMsU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQWQsRUFBb0QsS0FBSyxZQUF6RCxDOzs7QUFFWCx5Q0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLFNBQWhDLEdBQTRDLEdBQTVDO0FBQ0EscUNBQUssUUFBTDs7QUFFQSx5Q0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLFNBQWhDLEdBQTRDLEdBQTVDOztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNURSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztrQkE0RGUsTTs7O0FBR2YsSUFBSSxNQUFNLElBQUksTUFBSixFQUFWOztBQUVBLEVBQUUsWUFBRixFQUFnQixLQUFoQixDQUFzQixZQUFNO0FBQ3hCLFNBQUssUUFBTDtBQUNILENBRkQ7O0FBS0EsU0FBUyxNQUFULEdBQWtCO0FBQ2QsV0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEtBQXZCO0FBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9wcm9taXNlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvcHJvbWlzZVwiKTtcblxudmFyIF9wcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb21pc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gbmV3IF9wcm9taXNlMi5kZWZhdWx0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3Byb21pc2UyLmRlZmF1bHQucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBzdGVwKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcChcIm5leHRcIik7XG4gICAgfSk7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnIgOiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjMnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gKCFCVUdHWSAmJiAkbmF0aXZlKSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldCA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcbiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiaW1wb3J0IFN0cmVldHZpZXdFbGVtZW50IGZyb20gJy4vU3RyZWV0dmlld0VsZW1lbnQnO1xuaW1wb3J0IFN0cmVldHZpZXcgZnJvbSAnLi9TdHJlZXR2aWV3JztcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IobWFwLCBlbGVtZW50LCBydWxlcyA9IHtyb3VuZENvdW50OiA1LCBkaXN0cmlidXRpb246IGRpc3RyaWJ1dGlvbi53ZWlnaHRlZH0pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zdkVsZW1lbnQgPSBuZXcgU3RyZWV0dmlld0VsZW1lbnQoZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3RyZWV0dmlldycpLCBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXR1cm4taG9tZScpKTtcblxuICAgICAgICB0aGlzLnNjb3JlRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLXNjb3JlJyk7XG4gICAgICAgIHRoaXMudGltZUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lLWxlZnQnKTtcbiAgICAgICAgdGhpcy5tb3Zlc0VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3Zlcy1sZWZ0Jyk7XG4gICAgICAgIHRoaXMucm91bmRFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucm91bmQnKTtcblxuICAgICAgICB0aGlzLmdvb2dsZU1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWFwLWVsZW1lbnQnKSwge1xuICAgICAgICAgICAgem9vbTogMCxcbiAgICAgICAgICAgIGNlbnRlcjoge2xhdDogMCwgbG5nOiAwfSxcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGVJY29uczogZmFsc2UsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYWFkYWZmJyxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXR0YWNoTWFwKCcuZW1iZWQtbWFwJyk7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMuZ29vZ2xlTWFwLCAnY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdvb2dsZU1hcC5nZXREaXYoKS5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXMuY2xhc3MudmFsdWUgPT09ICdlbWJlZC1tYXAnKVxuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VHdWVzc01hcmtlcihlLmxhdExuZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMuZ29vZ2xlTWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVydmlldy1tYXAnKSwge1xuICAgICAgICAvLyAgICAgem9vbTogMixcbiAgICAgICAgLy8gICAgIGNlbnRlcjogeyBsYXQ6IDAsIGxuZzogMCB9LFxuICAgICAgICAvLyAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbiAgICAgICAgLy8gICAgIGNsaWNrYWJsZUljb25zOiBmYWxzZSxcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogJyNhYWRhZmYnLFxuICAgICAgICAvLyAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAvLyB9KTtcblxuICAgICAgICB0aGlzLnNldFJlc2l6ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgdGhpcy5uZXdHYW1lKG1hcCwgcnVsZXMpO1xuXG4gICAgICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbmNlKCduZXh0Um91bmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0UnVsZXMoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0IHJ1bGVzIGNhbGxlZCcsIHRoaXMucmVhZHkpO1xuICAgICAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXRoaXMucmVhZHkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnJlYWR5ID0gJywgdGhpcy5yZWFkeSlcbiAgICAgICAgICAgIHRoaXMub25jZSgnbmV4dFJvdW5kJywgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25leHRSb3VuZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UnVsZXMoKTtcbiAgICAgICAgICAgIH0sIDUpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkZUdhbWVSdWxlU2VsZWN0aW9uKCk7XG5cbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGxldCBbcm91bmRDb3VudD01LCB0aW1lTGltaXQsIG1vdmVMaW1pdCwgLi4ucmVzdHJpY3Rpb25zXSA9IFsuLi5uZXcgRm9ybURhdGEoZm9ybSldLm1hcChuID0+IG5bMV0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdyb3VuZENvdW50ID0gJywgcm91bmRDb3VudClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2cnKS5pbm5lclRleHQgPSAncm91bmRDb3VudCc7XG5cbiAgICAgICAgbGV0IHJ1bGVzID0ge3JvdW5kQ291bnQ6ICtyb3VuZENvdW50LCB0aW1lTGltaXQ6ICt0aW1lTGltaXQsIG1vdmVMaW1pdDogK21vdmVMaW1pdH07XG4gICAgICAgIHJ1bGVzLnBhbkFsbG93ZWQgPSByZXN0cmljdGlvbnMuaW5jbHVkZXMoJ3BhbicpO1xuICAgICAgICBydWxlcy56b29tQWxsb3dlZCA9IHJlc3RyaWN0aW9ucy5pbmNsdWRlcygnem9vbScpO1xuICAgICAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFwcGx5UnVsZXMoKSwgMzAwKTtcbiAgICB9XG5cbiAgICByZXNldFJlc3RyaWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5zdkVsZW1lbnQucmVzZXRSZXN0cmljdGlvbnMoKTtcbiAgICAgICAgdGhpcy50aW1lRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLm1vdmVzRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGFwcGx5UnVsZXMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhcHBseVJ1bGVzJyk7XG4gICAgICAgIGlmICghdGhpcy5ydWxlcy5wYW5BbGxvd2VkKVxuICAgICAgICAgICAgdGhpcy5zdkVsZW1lbnQucmVzdHJpY3RQYW4oKTtcblxuICAgICAgICBpZiAoIXRoaXMucnVsZXMuem9vbUFsbG93ZWQpXG4gICAgICAgICAgICB0aGlzLnN2RWxlbWVudC5yZXN0cmljdFpvb20oKTtcblxuICAgICAgICBpZiAodGhpcy5ydWxlcy5tb3ZlTGltaXQgIT09IC0xKVxuICAgICAgICAgICAgdGhpcy5zdkVsZW1lbnQuc2V0TW92ZUxpbWl0KHRoaXMucnVsZXMubW92ZUxpbWl0LCB0aGlzLm1vdmVzRWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMucnVsZXMudGltZUxpbWl0ICE9PSAtMSlcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcigrdGhpcy5ydWxlcy50aW1lTGltaXQpO1xuXG4gICAgICAgIC8vIOivt+axguaIquWbvlxuICAgICAgICBjb25zb2xlLmxvZygn6K+35rGC5oiq5Zu+Jyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnLmxvZ2cnKS5oaWRlKCk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy9tYXAvc2NyZWVuc2hvdCcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHN0YXJ0VGltZXIoc2Vjb25kcykge1xuICAgICAgICBpZiAodGhpcy50aW1lclJ1bm5pbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudGltZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0aGlzLnRpbWVyUnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZUVsZW1lbnQuaW5uZXJIVE1MID0gYFRpbWU6IDxiPiR7c2Vjb25kc308L2I+YDtcbiAgICAgICAgdGhpcy50aW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZWNvbmRzIC09IDAuMTtcbiAgICAgICAgICAgIHRoaXMudGltZUVsZW1lbnQuaW5uZXJIVE1MID0gYFRpbWU6IDxiPiR7c2Vjb25kcyA8IDEwID8gKE1hdGgucm91bmQoc2Vjb25kcyAqIDEwKSAvIDEwKS50b0ZpeGVkKDEpIDogTWF0aC5yb3VuZChzZWNvbmRzKX08L2I+YDtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgdGhpcy50aW1lVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYWtlR3Vlc3Moe2xhdDogMCwgbG5nOiAwfSk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZUludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMudGltZXJSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIHNlY29uZHMgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBlbmRUaW1lcigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZVRpbWVvdXQpO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZUludGVydmFsKTtcbiAgICAgICAgdGhpcy50aW1lclJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoaWRlR2FtZVJ1bGVTZWxlY3Rpb24oKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcnVsZS1zZWxlY3RvclwiKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtJHtlbGVtZW50Lm9mZnNldEhlaWdodH1weClgO1xuICAgIH1cblxuICAgIGF0dGFjaE1hcChzZWxlY3Rvcikge1xuICAgICAgICBsZXQgbWFwRWxlbWVudCA9IHRoaXMuZ29vZ2xlTWFwLmdldERpdigpO1xuICAgICAgICBtYXBFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYXBwZW5kQ2hpbGQobWFwRWxlbWVudCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWFwT3ZlcmxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFwLnBvbHlnb24uZ2V0TWFwKCkpXG4gICAgICAgICAgICB0aGlzLm1hcC5wb2x5Z29uLnNldE1hcChudWxsKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5tYXAucG9seWdvbi5zZXRNYXAodGhpcy5nb29nbGVNYXApO1xuICAgIH1cblxuICAgIHNldFJlc2l6ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgcmVzaXplRWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3MtbWFwLXJlc2l6ZXInKTtcbiAgICAgICAgbGV0IHJlc2l6ZXJEb3duID0gZmFsc2U7XG4gICAgICAgIGxldCBndWVzc01hcCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3MtbWFwJyk7XG5cbiAgICAgICAgbGV0IG9uTW92ZSA9ICh4LCB5KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzaXplckRvd24pIHtcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0geSAtIHRoaXMuZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0geCAtIHRoaXMuZWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgICAgIGd1ZXNzTWFwLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgZ3Vlc3NNYXAuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBvbkRvd24gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNpemVyRG93biA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9uVXAgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNpemVyRG93biA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzaXplRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiBvbkRvd24oKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gb25Nb3ZlKGUucGFnZVgsIGUucGFnZVkpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IG9uVXAoKSk7XG5cbiAgICAgICAgcmVzaXplRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4gb25Eb3duKCkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBlID0+IG9uTW92ZShlLnRvdWNoZXNbMF0ucGFnZVgsIGUudG91Y2hlc1swXS5wYWdlWSkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IG9uVXAoKSk7XG4gICAgfVxuXG4gICAgbmV3R2FtZShtYXAgPSBmYWxzZSwgcnVsZXMgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5vdmVydmlld0xpbmVzKVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVPdmVydmlld0xpbmVzKCk7XG5cbiAgICAgICAgaWYgKHJ1bGVzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMucnVsZXMuZGlzdHJpYnV0aW9uIC0gJywgdGhpcy5ydWxlcy5kaXN0cmlidXRpb24pXG4gICAgICAgICAgICB0aGlzLnN0cmVldHZpZXcgPSBuZXcgU3RyZWV0dmlldyhtYXAsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy56b29tID0gMTQ7XG4gICAgICAgIHRoaXMuY3VycmVudFJvdW5kID0gMDtcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICAgICAgdGhpcy5vdmVydmlld0xpbmVzID0gW107XG4gICAgICAgIHRoaXMucHJldmlvdXNHdWVzc2VzID0gW107XG4gICAgICAgIHRoaXMucm91bmRFbGVtZW50LmlubmVySFRNTCA9IGBSb3VuZDogPGI+JHt0aGlzLmN1cnJlbnRSb3VuZH0vJHt0aGlzLnJ1bGVzLnJvdW5kQ291bnR9PC9iPmA7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ25ld0dhbWUnKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nZycpLmlubmVyVGV4dCA9ICduZXdHYW1lJztcbiAgICAgICAgdGhpcy5wcmVsb2FkTmV4dE1hcCgpO1xuICAgICAgICB0aGlzLm5leHRSb3VuZCgpO1xuICAgIH1cblxuICAgIHBsYXlBZ2FpbigpIHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1hZ2Fpbi1idXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdMb2FkaW5nLi4uJztcbiAgICAgICAgdGhpcy5uZXdHYW1lKCk7XG4gICAgICAgIHRoaXMub25jZSgnbmV4dFJvdW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG92ZXJ2aWV3RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3Mtb3ZlcnZpZXcnKTtcbiAgICAgICAgICAgIG92ZXJ2aWV3RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTAwJSknO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdQbGF5IEFnYWluJztcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5UnVsZXMoKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dPdmVydmlldyhndWVzcywgYWN0dWFsKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoTWFwKCcub3ZlcnZpZXctbWFwJyk7XG5cblxuICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLm1lYXN1cmVEaXN0YW5jZShndWVzcywgYWN0dWFsKTtcbiAgICAgICAgbGV0IG5pY2VEaXN0YW5jZSA9IHRoaXMuZm9ybWF0RGlzdGFuY2UoZGlzdGFuY2UpO1xuICAgICAgICBsZXQgc2NvcmUgPSB0aGlzLm1hcC5zY29yZUNhbGN1bGF0aW9uKGRpc3RhbmNlKTtcblxuICAgICAgICB0aGlzLnByZXZpb3VzR3Vlc3Nlcy5wdXNoKHtcbiAgICAgICAgICAgIGd1ZXNzLCBhY3R1YWwsIHNjb3JlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0b3RhbFNjb3JlID0gdGhpcy5wcmV2aW91c0d1ZXNzZXMubWFwKHJlc3VsdCA9PiByZXN1bHQuc2NvcmUpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuXG4gICAgICAgIHRoaXMuc2NvcmVFbGVtZW50LmlubmVySFRNTCA9IGBTY29yZTogPGI+JHt0b3RhbFNjb3JlfTwvYj5gO1xuXG4gICAgICAgIHJldHVybiBbc2NvcmUsIG5pY2VEaXN0YW5jZSwgdG90YWxTY29yZV07XG4gICAgfVxuXG4gICAgc2hvd1JvdW5kT3ZlcnZpZXcoZ3Vlc3MsIGFjdHVhbCkge1xuICAgICAgICBsZXQgW3Njb3JlLCBuaWNlRGlzdGFuY2VdID0gdGhpcy5zaG93T3ZlcnZpZXcoZ3Vlc3MsIGFjdHVhbCk7XG5cbiAgICAgICAgbGV0IG92ZXJ2aWV3RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3Mtb3ZlcnZpZXcnKTtcbiAgICAgICAgb3ZlcnZpZXdFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDAlKSc7XG4gICAgICAgIG92ZXJ2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1yb3VuZC1idXR0b24nKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIG92ZXJ2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1lbmQtYnV0dG9ucycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgbGV0IFttZXRlckVsZW1lbnQsIHNjb3JlRWxlbWVudF0gPSBvdmVydmlld0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjb3JlLXRleHQgcCcpO1xuICAgICAgICBtZXRlckVsZW1lbnQuaW5uZXJUZXh0ID0gYFlvdXIgZ3Vlc3MgaXMgJHtuaWNlRGlzdGFuY2V9IHJlbW92ZWQgZnJvbSB5b3VyIHN0YXJ0IGxvY2F0aW9uYDtcbiAgICAgICAgaWYgKHNjb3JlID09PSAxKVxuICAgICAgICAgICAgc2NvcmVFbGVtZW50LmlubmVyVGV4dCA9IGBZb3Ugc2NvcmVkIGEgcG9pbnRgO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzY29yZUVsZW1lbnQuaW5uZXJUZXh0ID0gYFlvdSBzY29yZWQgJHtzY29yZX0gcG9pbnRzYDtcblxuICAgICAgICB0aGlzLmZpdE1hcChbZ3Vlc3MsIGFjdHVhbF0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG92ZXJ2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtcHJvZ3Jlc3MnKS5zdHlsZS53aWR0aCA9IChzY29yZSAvIHRoaXMubWFwLm1heFNjb3JlICogMTAwKSArICclJztcbiAgICAgICAgICAgIHRoaXMuYWRkT3ZlcnZpZXdMaW5lKGd1ZXNzLCBhY3R1YWwsIDYwMCk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgc2hvd0dhbWVPdmVydmlldyhndWVzcywgYWN0dWFsKSB7XG4gICAgICAgIGxldCBbc2NvcmUsIG5pY2VEaXN0YW5jZSwgdG90YWxTY29yZV0gPSB0aGlzLnNob3dPdmVydmlldyhndWVzcywgYWN0dWFsKTtcblxuICAgICAgICBsZXQgb3ZlcnZpZXdFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzcy1vdmVydmlldycpO1xuICAgICAgICBvdmVydmlld0VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMCUpJztcbiAgICAgICAgb3ZlcnZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LXJvdW5kLWJ1dHRvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG92ZXJ2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1lbmQtYnV0dG9ucycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIGxldCBtYXhTY29yZSA9IHRoaXMubWFwLm1heFNjb3JlICogdGhpcy5ydWxlcy5yb3VuZENvdW50O1xuXG4gICAgICAgIGxldCBbbWV0ZXJFbGVtZW50LCBzY29yZUVsZW1lbnRdID0gb3ZlcnZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZS10ZXh0IHAnKTtcbiAgICAgICAgbWV0ZXJFbGVtZW50LmlubmVyVGV4dCA9IGBZb3VyIGxhdGVzdCBndWVzcyBpcyAke25pY2VEaXN0YW5jZX0gcmVtb3ZlZCBmcm9tIHlvdXIgc3RhcnQgbG9jYXRpb25gO1xuICAgICAgICBpZiAoc2NvcmUgPT09IDEpXG4gICAgICAgICAgICBzY29yZUVsZW1lbnQuaW5uZXJUZXh0ID0gYFlvdSBzY29yZWQgYSBwb2ludCwgd2hpY2ggYnJpbmdzIHlvdXIgdG90YWwgc2NvcmUgdG8gJHt0b3RhbFNjb3JlfSBwb2ludHNgO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzY29yZUVsZW1lbnQuaW5uZXJUZXh0ID0gYFlvdSBzY29yZWQgJHtzY29yZX0gcG9pbnRzLCB3aGljaCBicmluZ3MgeW91ciB0b3RhbCBzY29yZSB0byAke3RvdGFsU2NvcmV9IHBvaW50c2A7XG5cbiAgICAgICAgbGV0IGxvY2F0aW9ucyA9IHRoaXMucHJldmlvdXNHdWVzc2VzLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmd1ZXNzKS5jb25jYXQodGhpcy5wcmV2aW91c0d1ZXNzZXMubWFwKHJlc3VsdCA9PiByZXN1bHQuYWN0dWFsKSk7XG4gICAgICAgIHRoaXMuZml0TWFwKGxvY2F0aW9ucyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBvdmVydmlld0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLXByb2dyZXNzJykuc3R5bGUud2lkdGggPSAodG90YWxTY29yZSAvIG1heFNjb3JlICogMTAwKSArICclJztcbiAgICAgICAgICAgIGZvciAobGV0IHJlc3VsdCBvZiB0aGlzLnByZXZpb3VzR3Vlc3NlcylcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE92ZXJ2aWV3TGluZShyZXN1bHQuZ3Vlc3MsIHJlc3VsdC5hY3R1YWwsIDYwMCk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgZml0TWFwVG9HZW9NYXAoKSB7XG4gICAgICAgIHRoaXMuZ29vZ2xlTWFwLmZpdEJvdW5kcyh0aGlzLm1hcC5nZXRCb3VuZHMoKSk7XG4gICAgfVxuXG4gICAgZml0TWFwKHBvc2l0aW9ucykge1xuICAgICAgICBsZXQgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgICAgICBmb3IgKGxldCBsb2NhdGlvbiBvZiBwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIGJvdW5kcy5leHRlbmQoe1xuICAgICAgICAgICAgICAgIGxhdDogbG9jYXRpb25bMF0sXG4gICAgICAgICAgICAgICAgbG5nOiBsb2NhdGlvblsxXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nb29nbGVNYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgfVxuXG4gICAgbmV4dFJvdW5kQnV0dG9uKCkge1xuICAgICAgICBsZXQgYnV0dG9uID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LXJvdW5kLWJ1dHRvbicpO1xuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ0xvYWRpbmcuLi4nO1xuXG4gICAgICAgIHRoaXMub25jZSgnbmV4dFJvdW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG92ZXJ2aWV3RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3Mtb3ZlcnZpZXcnKTtcbiAgICAgICAgICAgIG92ZXJ2aWV3RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTAwJSknO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ05leHQgUm91bmQnO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN2RWxlbWVudC5wYW5vcmFtYSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2RWxlbWVudC5wYW5vcmFtYS5zZXRab29tKDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5UnVsZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLm5leHRSb3VuZCgpO1xuICAgIH1cblxuICAgIG5leHRSb3VuZCgpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgbmV4dCBkZXN0aW5hdGlvbiBpcyBsb2FkZWRcbiAgICAgICAgaWYgKCF0aGlzLm1hcExvYWRlZCkge1xuICAgICAgICAgICAgdGhpcy5vbmNlKCdwcmVsb2FkJywgKCkgPT4gdGhpcy5uZXh0Um91bmQoKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdkVsZW1lbnQucGFub3JhbWEpXG4gICAgICAgICAgICB0aGlzLnJlc2V0UmVzdHJpY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuY3VycmVudERlc3RpbmF0aW9uID0gdGhpcy5uZXh0RGVzdGluYXRpb247XG4gICAgICAgIHRoaXMuZGlzYWJsZUd1ZXNzQnV0dG9uKCk7XG4gICAgICAgIC8vIHRoaXMuZml0TWFwVG9HZW9NYXAoKTtcblxuICAgICAgICBpZiAoKyt0aGlzLmN1cnJlbnRSb3VuZCA8IHRoaXMucnVsZXMucm91bmRDb3VudClcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZE5leHRNYXAoKTtcblxuICAgICAgICB0aGlzLnJvdW5kRWxlbWVudC5pbm5lckhUTUwgPSBgUm91bmQ6IDxiPiR7dGhpcy5jdXJyZW50Um91bmR9LyR7dGhpcy5ydWxlcy5yb3VuZENvdW50fTwvYj5gO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5tb3Zlc0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMuZmlyZSgnbmV4dFJvdW5kJyk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU92ZXJ2aWV3TGluZXMoKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoTWFwKCcuZW1iZWQtbWFwJyk7XG4gICAgICAgICAgICB0aGlzLmZpdE1hcFRvR2VvTWFwKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHRoaXMuc3ZFbGVtZW50LnNldExvY2F0aW9uKC4uLnRoaXMuY3VycmVudERlc3RpbmF0aW9uKTtcbiAgICB9XG5cbiAgICByZW1vdmVPdmVydmlld0xpbmVzKCkge1xuICAgICAgICBmb3IgKGxldCBsaW5lRGF0YSBvZiB0aGlzLm92ZXJ2aWV3TGluZXMpIHtcbiAgICAgICAgICAgIGxpbmVEYXRhLmxpbmUuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgbGluZURhdGEuZ3Vlc3Muc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgbGluZURhdGEuYWN0dWFsLnNldE1hcChudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE92ZXJ2aWV3TGluZShndWVzcywgYWN0dWFsLCBhbmltYXRpb25UaW1lID0gMTUwMCkge1xuICAgICAgICBndWVzcyA9IHtsYXQ6IGd1ZXNzWzBdLCBsbmc6IGd1ZXNzWzFdfTtcbiAgICAgICAgYWN0dWFsID0ge2xhdDogYWN0dWFsWzBdLCBsbmc6IGFjdHVhbFsxXX07XG5cbiAgICAgICAgbGV0IGxpbmVEYXRhID0ge307XG4gICAgICAgIHRoaXMub3ZlcnZpZXdMaW5lcy5wdXNoKGxpbmVEYXRhKTtcblxuICAgICAgICBsaW5lRGF0YS5saW5lID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHtcbiAgICAgICAgICAgIHBhdGg6IFtndWVzcywgZ3Vlc3NdLFxuICAgICAgICAgICAgZ2VvZGVzaWM6IHRydWUsXG4gICAgICAgICAgICBzdHJva2VDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICBzdHJva2VXZWlnaHQ6IDMsXG4gICAgICAgICAgICBtYXA6IHRoaXMuZ29vZ2xlTWFwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBkcm9wVGltZSA9IDI1MDtcbiAgICAgICAgbGV0IGZwcyA9IDMwO1xuICAgICAgICBsZXQgc3RlcHMgPSBmcHMgKiAoYW5pbWF0aW9uVGltZSAvIDEwMDApO1xuICAgICAgICBsZXQgc3RlcCA9IDA7XG4gICAgICAgIGxldCBkZWx0YUxhdCA9IGd1ZXNzLmxhdCAtIGFjdHVhbC5sYXQ7XG4gICAgICAgIGxldCBkZWx0YUxuZyA9IGd1ZXNzLmxuZyAtIGFjdHVhbC5sbmc7XG5cbiAgICAgICAgbGluZURhdGEuZ3Vlc3MgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBndWVzcyxcbiAgICAgICAgICAgIG1hcDogdGhpcy5nb29nbGVNYXAsXG4gICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuICAgICAgICAgICAgdGl0bGU6ICdZb3VyIGd1ZXNzJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZWxmLnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCsrID49IHN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lRGF0YS5saW5lLnNldFBhdGgoW2d1ZXNzLCBhY3R1YWxdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxpbmVEYXRhLmxpbmUuc2V0UGF0aChbXG4gICAgICAgICAgICAgICAgICAgIGd1ZXNzLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGd1ZXNzLmxhdCAtIGRlbHRhTGF0ICogKHN0ZXAgLyBzdGVwcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBsbmc6IGd1ZXNzLmxuZyAtIGRlbHRhTG5nICogKHN0ZXAgLyBzdGVwcyksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0sIDEwMDAgLyBmcHMpO1xuICAgICAgICB9LCBkcm9wVGltZSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsaW5lRGF0YS5hY3R1YWwgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWN0dWFsLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2h0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcGZpbGVzL21zL2ljb25zL2dyZWVuLWRvdC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQWN0dWFsIGxvY2F0aW9uJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGluZURhdGEuYWN0dWFsLnNldE1hcCh0aGlzLmdvb2dsZU1hcCk7XG4gICAgICAgIH0sIGFuaW1hdGlvblRpbWUpO1xuICAgIH1cblxuICAgIGRpc2FibGVHdWVzc0J1dHRvbigpIHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3MtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBidXR0b24uc3R5bGUuZmlsdGVyID0gJ2dyYXlzY2FsZSg5MCUpJztcbiAgICB9XG5cbiAgICBlbmFibGVHdWVzc0J1dHRvbigpIHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3MtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5maWx0ZXIgPSAnZ3JheXNjYWxlKDAlKSc7XG4gICAgfVxuXG4gICAgbWVhc3VyZURpc3RhbmNlKGZyb20sIHRvKSB7XG4gICAgICAgIHJldHVybiBnb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2VlbihuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKC4uLmZyb20pLCBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKC4uLnRvKSk7XG4gICAgfVxuXG4gICAgbWFrZUd1ZXNzKCkge1xuICAgICAgICBpZiAodGhpcy5tYXJrZXIgPT09IHVuZGVmaW5lZCB8fCB0aGlzLm1hcmtlci5nZXRNYXAoKSA9PT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMucGxhY2VHdWVzc01hcmtlcih7bGF0OiAwLCBsbmc6IDB9KTtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICB0aGlzLmVuZFRpbWVyKCk7XG5cbiAgICAgICAgbGV0IGd1ZXNzTG9jYXRpb24gPSBbdGhpcy5tYXJrZXIucG9zaXRpb24ubGF0KCksIHRoaXMubWFya2VyLnBvc2l0aW9uLmxuZygpXTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Um91bmQgPT09IHRoaXMucnVsZXMucm91bmRDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5zaG93R2FtZU92ZXJ2aWV3KGd1ZXNzTG9jYXRpb24sIHRoaXMuY3VycmVudERlc3RpbmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1JvdW5kT3ZlcnZpZXcoZ3Vlc3NMb2NhdGlvbiwgdGhpcy5jdXJyZW50RGVzdGluYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9ybWF0RGlzdGFuY2UobWV0ZXJzKSB7XG4gICAgICAgIGlmIChtZXRlcnMgPCAxMDAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihtZXRlcnMgKiAxMCkgLyAxMH0gbWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGVycyA8IDIwMDAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihtZXRlcnMgLyAxMDApIC8gMTB9IGttYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihtZXRlcnMgLyAxMDAwKX0ga21gO1xuICAgIH1cblxuICAgIHBsYWNlR3Vlc3NNYXJrZXIobG9jYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMubWFya2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgICBtYXA6IHRoaXMuZ29vZ2xlTWFwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVuYWJsZUd1ZXNzQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuSG9tZSgpIHtcbiAgICAgICAgdGhpcy5zdkVsZW1lbnQuc2V0TG9jYXRpb24oLi4udGhpcy5jdXJyZW50RGVzdGluYXRpb24pO1xuICAgIH1cblxuICAgIHByZWxvYWROZXh0TWFwKCkge1xuICAgICAgICB0aGlzLm1hcExvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0cmVldHZpZXcucmFuZG9tVmFsaWRMb2NhdGlvbih0aGlzLnpvb20pLnRoZW4obmV4dCA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHREZXN0aW5hdGlvbiA9IG5leHQ7XG4gICAgICAgICAgICB0aGlzLm1hcExvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ3ByZWxvYWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlyZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ldmVudHNbZXZlbnRdLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdW2ldKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbmNlKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgb25jZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMub2ZmKGV2ZW50LCBvbmNlQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oZXZlbnQsIG9uY2VDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb2ZmKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoZXZlbnQgaW4gdGhpcy5ldmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5zcGxpY2UodGhpcy5ldmVudHNbZXZlbnRdLmluZGV4T2YoY2FsbGJhY2spLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVHJ5aW5nIHRvIHJlbW92ZSAke2V2ZW50fSBldmVudCwgYnV0IGl0IGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUiLCJjbGFzcyBHZW9NYXAge1xuICAgIGNvbnN0cnVjdG9yKHBvbHlnb24sIG1pbmltdW1EaXN0YW5jZUZvclBvaW50cykge1xuICAgICAgICBjb25zb2xlLmxvZyhtaW5pbXVtRGlzdGFuY2VGb3JQb2ludHMpO1xuICAgICAgICB0aGlzLm1pbmltdW1EaXN0YW5jZUZvclBvaW50cyA9IG1pbmltdW1EaXN0YW5jZUZvclBvaW50cztcbiAgICAgICAgdGhpcy5tYXhTY29yZSA9IDUwMDA7XG5cbiAgICAgICAgdGhpcy5wb2x5Z29uID0gcG9seWdvbjtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5wb2x5Z29uLmdldFBhdGhzKCkuZm9yRWFjaChwYXRoID0+IHtcbiAgICAgICAgICAgIHBhdGguZm9yRWFjaChwb3MgPT4ge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5leHRlbmQocG9zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9XG5cbiAgICBpc0luTWFwKGxhdCwgbG9uKSB7XG4gICAgICAgIHJldHVybiBnb29nbGUubWFwcy5nZW9tZXRyeS5wb2x5LmNvbnRhaW5zTG9jYXRpb24oeyBsYXQ6ICgpID0+IGxhdCwgbG5nOiAoKSA9PiBsb24gfSwgdGhpcy5wb2x5Z29uKTtcbiAgICB9XG5cbiAgICBzY29yZUNhbGN1bGF0aW9uKGRpc3RhbmNlKSB7XG5cbiAgICAgICAgbGV0IHNjb3JlID0gKHRoaXMubWluaW11bURpc3RhbmNlRm9yUG9pbnRzIC0gZGlzdGFuY2UpIC8gKHRoaXMubWluaW11bURpc3RhbmNlRm9yUG9pbnRzIC8gdGhpcy5tYXhTY29yZSk7XG4gICAgICAgIGxldCBzY29yZURpZmZpY3VsdHkgPSAyO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCcxJywgc2NvcmUpO1xuXG4gICAgICAgIGlmIChzY29yZSA8IDApXG4gICAgICAgICAgICByZXR1cm4gMDtcblxuICAgICAgICBzY29yZSA9IHNjb3JlICoqIHNjb3JlRGlmZmljdWx0eSAvIHRoaXMubWF4U2NvcmUgKiogKHNjb3JlRGlmZmljdWx0eSAtIDEpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCcyJywgc2NvcmUpO1xuXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMCwgc2NvcmUpO1xuICAgICAgICBzY29yZSA9IE1hdGgubWluKHRoaXMubWF4U2NvcmUsIHNjb3JlKTtcbiAgICAgICAgY29uc29sZS5sb2coJzMnLCBzY29yZSk7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNjb3JlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlb01hcCIsImltcG9ydCBHZW9NYXAgZnJvbSAnLi9HZW9NYXAnXG5cbmNsYXNzIE1hcE1hbmFnZXIge1xuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcuLi9kYXRhL2NvdW50cmllcy5qc29uJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hcE1hbmFnZXIgaW5pdGlhbGl6ZScpXG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcuLi9kYXRhL21hcHMuanNvbicpO1xuICAgICAgICB0aGlzLm1hcHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFwKGtleSkge1xuICAgICAgICBsZXQgcG9seTtcbiAgICAgICAgaWYgKHRoaXMubWFwc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBvbHkgPSB0aGlzLmttbHNUb1BvbHlnb24odGhpcy5jb3VudHJpZXNba2V5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXBzW2tleV07XG4gICAgICAgICAgICBpZiAobWFwLnR5cGUgPT09ICdjb2xsZWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFwIGNvbGxlY3Rpb246XCIsIG1hcC5jb3VudHJpZXMpO1xuICAgICAgICAgICAgICAgIHBvbHkgPSB0aGlzLmttbHNUb1BvbHlnb24oLi4ubWFwLmNvdW50cmllcy5tYXAoY291bnRyeSA9PiB0aGlzLmNvdW50cmllc1tjb3VudHJ5XSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXAudHlwZSA9PT0gJ2ttbCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnLi4vZGF0YS9rbWwvJyArIG1hcC5maWxlKTtcbiAgICAgICAgICAgICAgICBsZXQga21sID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgIHBvbHkgPSB0aGlzLmttbHNUb1BvbHlnb24oa21sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdwb2x5ID0gJywgeyBwb2x5IH0pO1xuXG4gICAgICAgIGxldCBhcmVhID0gMDtcbiAgICAgICAgcG9seS5nZXRQYXRocygpLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGF0aCAtICcsIHBhdGgpXG4gICAgICAgICAgICBhcmVhICs9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlQXJlYShwYXRoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1pbmltdW1EaXN0YW5jZUZvclBvaW50cyA9IE1hdGguc3FydChhcmVhKSAqIDI7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21pbmltdW1EaXN0YW5jZUZvclBvaW50cyAtICcsIG1pbmltdW1EaXN0YW5jZUZvclBvaW50cylcbiAgICAgICAgcmV0dXJuIG5ldyBHZW9NYXAocG9seSwgbWluaW11bURpc3RhbmNlRm9yUG9pbnRzKVxuICAgIH1cblxuICAgIGttbHNUb1BvbHlnb24oLi4ua21scykge1xuICAgICAgICBsZXQgcGF0aHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQga21sIG9mIGttbHMpIHtcbiAgICAgICAgICAgIHBhdGhzID0gcGF0aHMuY29uY2F0KHRoaXMua21sVG9QYXRocyhrbWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuUG9seWdvbih7XG4gICAgICAgICAgICBwYXRoczogcGF0aHMsXG4gICAgICAgICAgICBzdHJva2VDb2xvcjogJyNGRkMxMDcnLFxuICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC44LFxuICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAyLFxuICAgICAgICAgICAgZmlsbENvbG9yOiAnI0ZGQzEwNycsXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4zNVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrbWxUb1BhdGhzKGttbCkge1xuICAgICAgICBsZXQgcGF0aHMgPSBbXTtcblxuICAgICAgICBsZXQgYWRkUG9seWdvblRvUGF0aHMgPSAocG9seWdvbiwgcGF0aHMpID0+IHtcbiAgICAgICAgICAgIGxldCBwb2x5ID0gW107XG4gICAgICAgICAgICBsZXQgY29vcmRTdHJpbmcgPSBwb2x5Z29uLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvb3JkaW5hdGUgb2YgY29vcmRTdHJpbmcuc3BsaXQoJyAnKSkge1xuICAgICAgICAgICAgICAgIGxldCBbbG5nLCBsYXQsIF9dID0gY29vcmRpbmF0ZS5zcGxpdCgnLCcpLm1hcChuID0+ICtuKTtcbiAgICAgICAgICAgICAgICBwb2x5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsYXQsIGxuZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aHMucHVzaChwb2x5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGxldCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGttbCwgXCJ0ZXh0L3htbFwiKS5maXJzdENoaWxkO1xuXG4gICAgICAgIGlmICh4bWxEb2Mubm9kZU5hbWUgPT09ICdNdWx0aUdlb21ldHJ5JylcbiAgICAgICAgICAgIGZvciAobGV0IHBvbHlnb24gb2YgeG1sRG9jLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgIGFkZFBvbHlnb25Ub1BhdGhzKHBvbHlnb24sIHBhdGhzKTtcbiAgICAgICAgZWxzZSBpZiAoeG1sRG9jLm5vZGVOYW1lID09PSAnUG9seWdvbicpXG4gICAgICAgICAgICBhZGRQb2x5Z29uVG9QYXRocyh4bWxEb2MsIHBhdGhzKTtcblxuICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBNYW5hZ2VyIiwiY2xhc3MgU3RyZWV0dmlldyB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkaXN0cmlidXRpb24pIHtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuZGlzdHJpYnV0aW9uID0gZGlzdHJpYnV0aW9uO1xuICAgIH1cblxuICAgIGFzeW5jIHJhbmRvbVZhbGlkTG9jYXRpb24oZW5kWm9vbSA9IDE0KSB7XG4gICAgICAgIGxldCB0aWxlID0gYXdhaXQgdGhpcy5yYW5kb21WYWxpZFRpbGUoZW5kWm9vbSk7XG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgbGV0IGltZyA9IHRpbGUuaW1nO1xuICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuXG4gICAgICAgIGxldCBkYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KS5kYXRhO1xuICAgICAgICBsZXQgYmx1ZVBpeGVsQ291bnQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gNClcbiAgICAgICAgICAgIGlmIChkYXRhW2kgKyAyXSA+IDApXG4gICAgICAgICAgICAgICAgYmx1ZVBpeGVsQ291bnQrKztcblxuICAgICAgICBsZXQgcmFuZG9tUGl4ZWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBibHVlUGl4ZWxDb3VudCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuXG4gICAgICAgICAgICBpZiAoZGF0YVtpICsgMl0gPiAwICYmIC0tcmFuZG9tUGl4ZWwgPT09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IChpIC8gNCkgJSBpbWcud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKChpIC8gNCkgLyBpbWcud2lkdGgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZVBpeGVsVG9MYXRMb24odGlsZS54LCB0aWxlLnksIHRpbGUuem9vbSwgeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gYmx1ZSBwaXhlbCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhc3luYyByYW5kb21WYWxpZFRpbGUoZW5kWm9vbSkge1xuICAgICAgICBsZXQgY2hvc2VuVGlsZSA9IHsgeDogMCwgeTogMCwgem9vbTogMCB9O1xuICAgICAgICBsZXQgcHJldmlvdXNUaWxlcyA9IFtjaG9zZW5UaWxlXTtcbiAgICAgICAgbGV0IGZhaWxlZFRpbGVzID0gW107XG4gICAgICAgIHdoaWxlIChjaG9zZW5UaWxlLnpvb20gPCBlbmRab29tKSB7XG4gICAgICAgICAgICBsZXQgc3ViVGlsZXMgPSBhd2FpdCB0aGlzLmdldFN1YlRpbGVzKGNob3NlblRpbGUueCwgY2hvc2VuVGlsZS55LCBjaG9zZW5UaWxlLnpvb20pO1xuXG4gICAgICAgICAgICBsZXQgdmFsaWRUaWxlcyA9IHN1YlRpbGVzXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0aWxlID0+IHRpbGUuaGFzU3YpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0aWxlID0+IHRoaXMudGlsZUludGVyc2VjdHNNYXAodGlsZS54LCB0aWxlLnksIHRpbGUuem9vbSkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0aWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZmFpbCBvZiBmYWlsZWRUaWxlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmYWlsLnggPT09IHRpbGUueCAmJiBmYWlsLnkgPT09IHRpbGUueSAmJiBmYWlsLnpvb20gPT09IHRpbGUuem9vbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRUaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBmYWlsZWRUaWxlcy5wdXNoKGNob3NlblRpbGUpO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1RpbGVzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIGNob3NlblRpbGUgPSBwcmV2aW91c1RpbGVzLnNwbGljZSgtMilbMF07XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5UaWxlID0geyB4OiAwLCB5OiAwLCB6b29tOiAwIH07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUb29rIGEgd3JvbmcgdHVybiB3aGVuIGdldHRpbmcgYSByYW5kb20gcG9zaXRpb24sIGdvaW5nIGJhY2sgdG8gem9vbSBcIiArIGNob3NlblRpbGUuem9vbSwgY2hvc2VuVGlsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNob3NlblRpbGUgPSB0aGlzLnBpY2tSYW5kb21TdWJUaWxlKHZhbGlkVGlsZXMpO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVGlsZXMucHVzaChjaG9zZW5UaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaG9zZW5UaWxlO1xuICAgIH1cblxuICAgIHBpY2tSYW5kb21TdWJUaWxlKHRpbGVzKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc3RyaWJ1dGlvbiA9PT0gd2luZG93LmRpc3RyaWJ1dGlvbi51bmlmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gdGlsZXNbTWF0aC5mbG9vcih0aWxlcy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG90YWxDb3ZlcmFnZSA9IHRpbGVzLm1hcCh0aWxlID0+IHRpbGUuY292ZXJhZ2UpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsQ292ZXJhZ2U7XG5cbiAgICAgICAgZm9yIChsZXQgdGlsZSBvZiB0aWxlcykge1xuICAgICAgICAgICAgcmFuZG9tIC09IHRpbGUuY292ZXJhZ2U7XG4gICAgICAgICAgICBpZiAocmFuZG9tIDw9IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bnQgbm90IGZpbmQgdGlsZVwiKTtcbiAgICB9XG5cbiAgICB0aWxlSW50ZXJzZWN0c01hcCh0aWxlWCwgdGlsZVksIHpvb20pIHtcbiAgICAgICAgbGV0IGJvdW5kcyA9IFtdO1xuICAgICAgICBib3VuZHMucHVzaCh0aGlzLnRpbGVQaXhlbFRvTGF0TG9uKHRpbGVYLCB0aWxlWSwgem9vbSwgMCwgMCkpO1xuICAgICAgICBib3VuZHMucHVzaCh0aGlzLnRpbGVQaXhlbFRvTGF0TG9uKHRpbGVYLCB0aWxlWSwgem9vbSwgMjU2LCAyNTYpKTtcbiAgICAgICAgYm91bmRzLnB1c2godGhpcy50aWxlUGl4ZWxUb0xhdExvbih0aWxlWCwgdGlsZVksIHpvb20sIDAsIDI1NikpO1xuICAgICAgICBib3VuZHMucHVzaCh0aGlzLnRpbGVQaXhlbFRvTGF0TG9uKHRpbGVYLCB0aWxlWSwgem9vbSwgMjU2LCAwKSk7XG4gICAgICAgIGZvciAobGV0IGJvdW5kIG9mIGJvdW5kcylcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcC5pc0luTWFwKC4uLmJvdW5kKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBsZXQgbWFwc0JvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoeyBsYXQ6IGJvdW5kc1syXVswXSwgbG5nOiBib3VuZHNbMl1bMV0gfSwgeyBsYXQ6IGJvdW5kc1szXVswXSwgbG5nOiBib3VuZHNbM11bMV0gfSk7XG5cbiAgICAgICAgbGV0IGludGVyc2VjdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hcC5wb2x5Z29uLmdldFBhdGhzKCkuZm9yRWFjaChwYXRoID0+IHtcbiAgICAgICAgICAgIHBhdGguZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1hcHNCb3VuZHMuY29udGFpbnMocG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3QgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIG1hcCBjb29yZGluYXRlcyBhcmUgaW4gd2l0aGluIHRpbGUgYm91bmRzXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3Q7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U3ViVGlsZXMoeCwgeSwgem9vbSkge1xuICAgICAgICBsZXQgc3RhcnRYID0geCAqIDI7XG4gICAgICAgIGxldCBzdGFydFkgPSB5ICogMjtcbiAgICAgICAgbGV0IGVuZFggPSBzdGFydFggKyAyO1xuICAgICAgICBsZXQgZW5kWSA9IHN0YXJ0WSArIDI7XG4gICAgICAgIHpvb20rKztcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUaWxlc0F0Q29vcmRpbmF0ZShzdGFydFgsIGVuZFgsIHN0YXJ0WSwgZW5kWSwgem9vbSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VGlsZXNBdENvb3JkaW5hdGUoc3RhcnRYLCBlbmRYLCBzdGFydFksIGVuZFksIHpvb20pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbWF4SXRlcmF0aW9ucyA9IChlbmRYIC0gc3RhcnRYKSAqIChlbmRZIC0gc3RhcnRZKTtcbiAgICAgICAgICAgIGxldCBpdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IHN0YXJ0WTsgeSA8IGVuZFk7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBzdGFydFg7IHggPCBlbmRYOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHgsIHksIHpvb20pLnRoZW4ocmVzdWx0ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKytpdGVyYXRpb24gPj0gbWF4SXRlcmF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRpbGVQaXhlbFRvTGF0TG9uKHRpbGVYLCB0aWxlWSwgem9vbSwgcGl4ZWxYLCBwaXhlbFkpIHtcbiAgICAgICAgdGlsZVggKz0gcGl4ZWxYIC8gMjU2O1xuICAgICAgICB0aWxlWSArPSBwaXhlbFkgLyAyNTY7XG5cbiAgICAgICAgdGlsZVggKj0gMiAqKiAoOCAtIHpvb20pO1xuICAgICAgICB0aWxlWSAqPSAyICoqICg4IC0gem9vbSk7XG5cbiAgICAgICAgbGV0IGxvbiA9IHRpbGVYIC8gMjU2ICogMzYwIC0gMTgwO1xuICAgICAgICBsZXQgbiA9IE1hdGguUEkgLSAyICogTWF0aC5QSSAqIHRpbGVZIC8gMjU2O1xuICAgICAgICBsZXQgbGF0ID0gKDE4MCAvIE1hdGguUEkgKiBNYXRoLmF0YW4oMC41ICogKE1hdGguZXhwKG4pIC0gTWF0aC5leHAoLW4pKSkpO1xuXG4gICAgICAgIHJldHVybiBbbGF0LCBsb25dO1xuICAgIH1cblxuICAgIHRvUmFkaWFucyhkZWdyZWVzKSB7XG4gICAgICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICB9XG5cbiAgICBsYXRMb25Ub1RpbGUobGF0RGVnLCBsb25EZWcsIHpvb20pIHtcbiAgICAgICAgbGV0IGxhdFJhZCA9IHRoaXMudG9SYWRpYW5zKGxhdERlZyk7XG4gICAgICAgIGxldCBuID0gMi4wICoqIHpvb207XG4gICAgICAgIGxldCB4VGlsZSA9IE1hdGguZmxvb3IoKGxvbkRlZyArIDE4MC4wKSAvIDM2MC4wICogbik7XG4gICAgICAgIGxldCB5VGlsZSA9IE1hdGguZmxvb3IoKDEuMCAtIE1hdGgubG9nKE1hdGgudGFuKGxhdFJhZCkgKyAoMSAvIE1hdGguY29zKGxhdFJhZCkpKSAvIE1hdGguUEkpIC8gMi4wICogbik7XG4gICAgICAgIHJldHVybiBbeFRpbGUsIHlUaWxlXTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUaWxlKHgsIHksIHpvb20pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbXRzMS5nb29nbGVhcGlzLmNvbS92dD9obD1lbi1VUyZseXJzPXN2dnxjYl9jbGllbnQ6YXBpdjMmc3R5bGU9NDAsMTgmeD0ke3h9Jnk9JHt5fSZ6PSR7em9vbX1gKTtcbiAgICAgICAgICAgIGxldCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBlID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzU3YgPSBpbWcud2lkdGggIT09IDE7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3ZlcmFnZSA9IHRoaXMuZGlzdHJpYnV0aW9uID09PSB3aW5kb3cuZGlzdHJpYnV0aW9uLndlaWdodGVkID8gdGhpcy5nZXRUaWxlQ292ZXJhZ2UoaW1nKSA6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcmFnZSwgaGFzU3YsIGltZywgeCwgeSwgem9vbVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFRpbGVDb3ZlcmFnZShpbWcpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICBsZXQgZGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCkuZGF0YTtcbiAgICAgICAgbGV0IGNvdmVyYWdlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KVxuICAgICAgICAgICAgY292ZXJhZ2UgKz0gZGF0YVtpICsgMl07XG4gICAgICAgIHJldHVybiBjb3ZlcmFnZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmVldHZpZXdcblxuLy8gQXJyYXkucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgdmFyIGlucHV0ID0gdGhpcztcblxuLy8gICAgIGZvciAodmFyIGkgPSBpbnB1dC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXG4vLyAgICAgICAgIHZhciByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuLy8gICAgICAgICB2YXIgaXRlbUF0SW5kZXggPSBpbnB1dFtyYW5kb21JbmRleF07XG5cbi8vICAgICAgICAgaW5wdXRbcmFuZG9tSW5kZXhdID0gaW5wdXRbaV07XG4vLyAgICAgICAgIGlucHV0W2ldID0gaXRlbUF0SW5kZXg7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBpbnB1dDtcbi8vIH0iLCJjbGFzcyBTdHJlZXR2aWV3RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZmxhZ0VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5mbGFnRWxlbWVudCA9IGZsYWdFbGVtZW50O1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIHJlc2V0UmVzdHJpY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmFsbG93TW92ZSgpO1xuICAgICAgICB0aGlzLmFsbG93UGFuKCk7XG4gICAgICAgIHRoaXMuYWxsb3dab29tKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlTW92ZUxpbWl0KCk7XG4gICAgfVxuXG4gICAgc2V0TW92ZUxpbWl0KG1vdmVzLCByZW1haW5pbmdFbGVtZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHttb3Zlc30pO1xuICAgICAgICBpZiAobW92ZXMgPT09IDApXG4gICAgICAgICAgICB0aGlzLnJlc3RyaWN0TW92ZSgpO1xuICAgICAgICByZW1haW5pbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgcmVtYWluaW5nRWxlbWVudC5pbm5lckhUTUwgPSBgTW92ZXM6IDxiPiR7bW92ZXN9PC9iPmA7XG4gICAgICAgIHRoaXMucGFub3JhbWEuYWRkTGlzdGVuZXIoJ3Bvc2l0aW9uX2NoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1haW5pbmdFbGVtZW50LmlubmVySFRNTCA9IGBNb3ZlczogPGI+JHstLW1vdmVzfTwvYj5gO1xuICAgICAgICAgICAgaWYgKG1vdmVzID09PSAwKVxuICAgICAgICAgICAgICAgIHRoaXMucmVzdHJpY3RNb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZU1vdmVMaW1pdCgpIHtcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuY2xlYXJMaXN0ZW5lcnModGhpcy5wYW5vcmFtYSwgJ3Bvc2l0aW9uX2NoYW5nZWQnKTtcbiAgICB9XG5cbiAgICByZXN0cmljdFBhbigpIHtcbiAgICAgICAgLy8gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbS1jb21wYXNzJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy8gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXQtc2NlbmUnKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGFsbG93UGFuKCkge1xuICAgICAgICAvLyB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdtLWNvbXBhc3MnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgLy8gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXQtc2NlbmUnKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XG4gICAgfVxuXG4gICAgcmVzdHJpY3Rab29tKCkge1xuICAgICAgICAvLyB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lmdtbm9wcmludC5nbS1idW5kbGVkLWNvbnRyb2wuZ20tYnVuZGxlZC1jb250cm9sLW9uLWJvdHRvbSA+IGRpdi5nbW5vcHJpbnQgPiBkaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnBhbm9yYW1hLnNldE9wdGlvbnMoe3Njcm9sbHdoZWVsOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIGFsbG93Wm9vbSgpIHtcbiAgICAgICAgLy8gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5nbW5vcHJpbnQuZ20tYnVuZGxlZC1jb250cm9sLmdtLWJ1bmRsZWQtY29udHJvbC1vbi1ib3R0b20gPiBkaXYuZ21ub3ByaW50ID4gZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMucGFub3JhbWEuc2V0T3B0aW9ucyh7c2Nyb2xsd2hlZWw6IHRydWV9KTtcbiAgICB9XG5cbiAgICByZXN0cmljdE1vdmUoKSB7XG4gICAgICAgIHRoaXMucGFub3JhbWEuc2V0T3B0aW9ucyh7bGlua3NDb250cm9sOiBmYWxzZX0pO1xuICAgICAgICB0aGlzLnBhbm9yYW1hLnNldE9wdGlvbnMoe2NsaWNrVG9HbzogZmFsc2V9KTtcbiAgICAgICAgdGhpcy5mbGFnRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGFsbG93TW92ZSgpIHtcbiAgICAgICAgdGhpcy5wYW5vcmFtYS5zZXRPcHRpb25zKHtsaW5rc0NvbnRyb2w6IHRydWV9KTtcbiAgICAgICAgdGhpcy5wYW5vcmFtYS5zZXRPcHRpb25zKHtjbGlja1RvR286IHRydWV9KTtcbiAgICAgICAgdGhpcy5mbGFnRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBzZXRMb2NhdGlvbihsYXQsIGxvbikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nZycpLmlubmVyVGV4dCA9ICdzZXRMb2NhdGlvbic7XG5cbiAgICAgICAgaWYgKHRoaXMucGFub3JhbWEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYS5zZXRQb3NpdGlvbih7bGF0OiBsYXQsIGxuZzogbG9ufSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hID0gbmV3IGdvb2dsZS5tYXBzLlN0cmVldFZpZXdQYW5vcmFtYShcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtsYXQ6IGxhdCwgbG5nOiBsb259LFxuICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogeyBsYXQ6IDQyLjM0NTU3MywgbG5nOiAtNzEuMDk4MzI2IH0sXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NDb250cm9sOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsaW5rc0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwYW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ2xvc2VCdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzaG93Um9hZExhYmVsczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1vdGlvblRyYWNraW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtb3Rpb25UcmFja2luZ0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB6b29tQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tUb0dvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gcG92OiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBoZWFkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGl0Y2g6IDAsXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vIHpvb206IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFub3JhbWEuc2V0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJlZXR2aWV3RWxlbWVudCIsIi8vIFRvZG86XG4vLyBNYXAgZWRpdG9yIG1ha2VuXG4vLyBTdHlsZSByZXR1cm4gaG9tZSBidXR0b25cbi8vIFBob3Rvc3BoZXJlIGdhbWVtb2RlIHRvZXZvZWdlblxuLy8gTG9hZCBzaXplIHZhbiB2b29ycGFnaW5hIHZlcm1pbmRlcmVuXG5cblxuaW1wb3J0IFN0cmVldHZpZXcgZnJvbSAnLi9TdHJlZXR2aWV3JztcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5cbmltcG9ydCBNYXBNYW5hZ2VyIGZyb20gJy4vTWFwTWFuYWdlcic7XG5cblxuY2xhc3MgTWFwQXBwIHtcbiAgICBjb25zdHJ1Y3RvcihkaXN0cmlidXRpb24pIHtcbiAgICAgICAgdGhpcy5kaXN0cmlidXRpb24gPSB7IHdlaWdodGVkOiAwLCB1bmlmb3JtOiAxIH07XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdCgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZygnbG9jYXRpb24uaGFzaCAtICcsIHdpbmRvdy5sb2NhdGlvbi5oYXNoKVxuXG4gICAgICAgIGxldCBtYXAgPSBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWFwID09PSAnJykge1xuICAgICAgICAgIG1hcCA9ICd3b3JsZCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcDogXCIsIG1hcCk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2cnKS5pbm5lclRleHQgPSAnMSc7XG5cbiAgICAgICAgbGV0IG1hcE1hbmFnZXIgPSBuZXcgTWFwTWFuYWdlcigpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nZycpLmlubmVyVGV4dCA9ICcyJztcblxuICAgICAgICBhd2FpdCBtYXBNYW5hZ2VyLmluaXRpYWxpemUoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2cnKS5pbm5lclRleHQgPSAnMyc7XG4gICAgICAgIFxuXG4gICAgICAgIG1hcCA9IGF3YWl0IG1hcE1hbmFnZXIuZ2V0TWFwKG1hcCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dnJykuaW5uZXJUZXh0ID0gJzQnO1xuXG5cbiAgICAgICAgbGV0IGdhbWUgPSBuZXcgR2FtZShtYXAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lc3RpbWF0b3InKSwgdGhpcy5kaXN0cmlidXRpb24pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dnJykuaW5uZXJUZXh0ID0gJzUnO1xuICAgICAgICBnYW1lLnNldFJ1bGVzKClcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nZycpLmlubmVyVGV4dCA9ICc2JztcblxuXG4gICAgICAgIC8vIGxldCBzdkVsZW1lbnQgPSBuZXcgU3RyZWV0dmlld0VsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmVldHZpZXcnKSk7XG5cbiAgICAgICAgLy8gc3RyZWV0dmlldyA9IG5ldyBTdHJlZXR2aWV3KG1hcHMud29ybGQpO1xuICAgICAgICAvLyBsZXQgbG9jYXRpb24gPSBhd2FpdCBzdHJlZXR2aWV3LnJhbmRvbVZhbGlkTG9jYXRpb24oKTtcblxuICAgICAgICAvLyBzdkVsZW1lbnQuc2V0TG9jYXRpb24oLi4ubG9jYXRpb24pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh7IGxvY2F0aW9uIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwQXBwXG5cblxudmFyIGFwcCA9IG5ldyBNYXBBcHAoKTtcblxuJCgnI3N0YXJ0LWJ0bicpLmNsaWNrKCgpID0+IHtcbiAgICBnYW1lLnNldFJ1bGVzKClcbn0pXG5cblxuZnVuY3Rpb24gZ29Ib21lKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4uLyc7XG59XG4iXX0=
