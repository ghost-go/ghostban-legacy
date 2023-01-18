
  /**
   * @license
   * author: Byron Bai
   * ghostban.js v3.0.0-alpha.16
   * Released under the MIT license.
   */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lodash = require('lodash');
var mathjs = require('mathjs');
var matchAll = require('string.prototype.matchall');
var TreeModel = require('tree-model');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var matchAll__default = /*#__PURE__*/_interopDefaultLegacy(matchAll);
var TreeModel__default = /*#__PURE__*/_interopDefaultLegacy(TreeModel);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */

function baseSlice$1(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

var _baseSlice = baseSlice$1;

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$1(value, other) {
  return value === other || value !== value && other !== other;
}

var eq_1 = eq$1;

var freeGlobal$1 = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root$1 = freeGlobal || freeSelf || Function('return this')();
var _root = root$1;

var root = _root;
/** Built-in value references. */

var _Symbol2 = root.Symbol;
var _Symbol$2 = _Symbol2;

var _Symbol$1 = _Symbol$2;
/** Used for built-in method references. */

var objectProto$1 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto$1.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/** Built-in value references. */

var symToStringTag$1 = _Symbol$1 ? _Symbol$1.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag$1(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }

  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var _Symbol = _Symbol$2,
    getRawTag = _getRawTag,
    objectToString = _objectToString;
/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag$2(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

var _baseGetTag = baseGetTag$2;

function isObject$3(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$3;

var baseGetTag$1 = _baseGetTag,
    isObject$2 = isObject_1;
/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction$1(value) {
  if (!isObject$2(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag$1(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength$1(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength$1;

var isFunction = isFunction_1,
    isLength = isLength_1;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike$1(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

var isArrayLike_1 = isArrayLike$1;

var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex$1(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

var _isIndex = isIndex$1;

var eq = eq_1,
    isArrayLike = isArrayLike_1,
    isIndex = _isIndex,
    isObject$1 = isObject_1;
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */

function isIterateeCall$1(value, index, object) {
  if (!isObject$1(object)) {
    return false;
  }

  var type = _typeof(index);

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

var _isIterateeCall = isIterateeCall$1;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */

function trimmedEndIndex$1(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}

  return index;
}

var _trimmedEndIndex = trimmedEndIndex$1;

var trimmedEndIndex = _trimmedEndIndex;
/** Used to match leading whitespace. */

var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */

function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}

var _baseTrim = baseTrim$1;

function isObjectLike$1(value) {
  return value != null && _typeof(value) == 'object';
}

var isObjectLike_1 = isObjectLike$1;

var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol$1(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

var isSymbol_1 = isSymbol$1;

var baseTrim = _baseTrim,
    isObject = isObject_1,
    isSymbol = isSymbol_1;
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

var toNumber_1 = toNumber$1;

var toNumber = toNumber_1;
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */

function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }

  value = toNumber(value);

  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }

  return value === value ? value : 0;
}

var toFinite_1 = toFinite$1;

var toFinite = toFinite_1;
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */

function toInteger$1(value) {
  var result = toFinite(value),
      remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}

var toInteger_1 = toInteger$1;

var baseSlice = _baseSlice,
    isIterateeCall = _isIterateeCall,
    toInteger = toInteger_1;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeCeil = Math.ceil,
    nativeMax = Math.max;
/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */

function chunk(array, size, guard) {
  if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }

  var length = array == null ? 0 : array.length;

  if (!length || size < 1) {
    return [];
  }

  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, index += size);
  }

  return result;
}

var chunk_1 = chunk;

exports.Ki = void 0;
(function (Ki) {
    Ki[Ki["Black"] = 1] = "Black";
    Ki[Ki["White"] = -1] = "White";
    Ki[Ki["Empty"] = 0] = "Empty";
})(exports.Ki || (exports.Ki = {}));
exports.Theme = void 0;
(function (Theme) {
    Theme["BlackAndWhite"] = "black-and-white";
    Theme["Flat"] = "flat";
    Theme["Subdued"] = "subdued";
    Theme["ShellStone"] = "shell";
    Theme["SlateAndShell"] = "slate-and-shell";
    Theme["Walnut"] = "walnet";
    Theme["Photorealistic"] = "photorealistic";
})(exports.Theme || (exports.Theme = {}));
exports.Center = void 0;
(function (Center) {
    Center["TopRight"] = "tr";
    Center["TopLeft"] = "tl";
    Center["BottomLeft"] = "bl";
    Center["BottomRight"] = "br";
    Center["Center"] = "c";
})(exports.Center || (exports.Center = {}));
exports.Markup = void 0;
(function (Markup) {
    Markup["Current"] = "cu";
    Markup["Circle"] = "ci";
    Markup["Square"] = "sq";
    Markup["Triangle"] = "tri";
    Markup["Cross"] = "cr";
    Markup["Number"] = "num";
    Markup["Letter"] = "le";
    Markup["None"] = "";
})(exports.Markup || (exports.Markup = {}));

var _a$1;
var settings = { cdn: 'https://s.shaowq.com' };
var A1_LETTERS = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
];
var A1_NUMBERS = [
    19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];
var SGF_LETTERS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
];
chunk_1(new Array(361).fill(0), 19);
var RESOURCES = (_a$1 = {},
    _a$1[exports.Theme.BlackAndWhite] = {
        blacks: [],
        whites: [],
    },
    _a$1[exports.Theme.Subdued] = {
        board: settings.cdn + "/assets/theme/subdued/board.png",
        blacks: [settings.cdn + "/assets/theme/subdued/black.png"],
        whites: [settings.cdn + "/assets/theme/subdued/white.png"],
    },
    _a$1[exports.Theme.ShellStone] = {
        board: settings.cdn + "/assets/theme/shell-stone/board.png",
        blacks: [settings.cdn + "/assets/theme/shell-stone/black.png"],
        whites: [
            settings.cdn + "/assets/theme/shell-stone/white0.png",
            settings.cdn + "/assets/theme/shell-stone/white1.png",
            settings.cdn + "/assets/theme/shell-stone/white2.png",
            settings.cdn + "/assets/theme/shell-stone/white3.png",
            settings.cdn + "/assets/theme/shell-stone/white4.png",
        ],
    },
    _a$1[exports.Theme.SlateAndShell] = {
        board: settings.cdn + "/assets/theme/slate-and-shell/board.png",
        blacks: [
            settings.cdn + "/assets/theme/slate-and-shell/slate1.png",
            settings.cdn + "/assets/theme/slate-and-shell/slate2.png",
            settings.cdn + "/assets/theme/slate-and-shell/slate3.png",
            settings.cdn + "/assets/theme/slate-and-shell/slate4.png",
            settings.cdn + "/assets/theme/slate-and-shell/slate5.png",
        ],
        whites: [
            settings.cdn + "/assets/theme/slate-and-shell/shell1.png",
            settings.cdn + "/assets/theme/slate-and-shell/shell2.png",
            settings.cdn + "/assets/theme/slate-and-shell/shell3.png",
            settings.cdn + "/assets/theme/slate-and-shell/shell4.png",
            settings.cdn + "/assets/theme/slate-and-shell/shell5.png",
        ],
    },
    _a$1[exports.Theme.Walnut] = {
        board: settings.cdn + "/assets/theme/walnut/board.jpg",
        blacks: [settings.cdn + "/assets/theme/walnut/black.png"],
        whites: [settings.cdn + "/assets/theme/walnut/white.png"],
    },
    _a$1[exports.Theme.Photorealistic] = {
        board: settings.cdn + "/assets/theme/photorealistic/board.png",
        blacks: [settings.cdn + "/assets/theme/photorealistic/black.png"],
        whites: [settings.cdn + "/assets/theme/photorealistic/white.png"],
    },
    _a$1[exports.Theme.Flat] = {
        blacks: [],
        whites: [],
    },
    _a$1);

var sha256$1 = {exports: {}};

var core = {exports: {}};

(function (module, exports) {

  (function (root, factory) {
    {
      // CommonJS
      module.exports = factory();
    }
  })(commonjsGlobal, function () {
    /*globals window, global, require*/

    /**
     * CryptoJS core components.
     */
    var CryptoJS = CryptoJS || function (Math, undefined$1) {
      var crypto; // Native crypto from window (Browser)

      if (typeof window !== 'undefined' && window.crypto) {
        crypto = window.crypto;
      } // Native crypto in web worker (Browser)


      if (typeof self !== 'undefined' && self.crypto) {
        crypto = self.crypto;
      } // Native crypto from worker


      if (typeof globalThis !== 'undefined' && globalThis.crypto) {
        crypto = globalThis.crypto;
      } // Native (experimental IE 11) crypto from window (Browser)


      if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
        crypto = window.msCrypto;
      } // Native crypto from global (NodeJS)


      if (!crypto && typeof commonjsGlobal !== 'undefined' && commonjsGlobal.crypto) {
        crypto = commonjsGlobal.crypto;
      } // Native crypto import via require (NodeJS)


      if (!crypto && typeof commonjsRequire === 'function') {
        try {
          crypto = require('crypto');
        } catch (err) {}
      }
      /*
       * Cryptographically secure pseudorandom number generator
       *
       * As Math.random() is cryptographically not safe to use
       */


      var cryptoSecureRandomInt = function cryptoSecureRandomInt() {
        if (crypto) {
          // Use getRandomValues method (Browser)
          if (typeof crypto.getRandomValues === 'function') {
            try {
              return crypto.getRandomValues(new Uint32Array(1))[0];
            } catch (err) {}
          } // Use randomBytes method (NodeJS)


          if (typeof crypto.randomBytes === 'function') {
            try {
              return crypto.randomBytes(4).readInt32LE();
            } catch (err) {}
          }
        }

        throw new Error('Native crypto module could not be used to get secure random number.');
      };
      /*
       * Local polyfill of Object.create
        */


      var create = Object.create || function () {
        function F() {}

        return function (obj) {
          var subtype;
          F.prototype = obj;
          subtype = new F();
          F.prototype = null;
          return subtype;
        };
      }();
      /**
       * CryptoJS namespace.
       */


      var C = {};
      /**
       * Library namespace.
       */

      var C_lib = C.lib = {};
      /**
       * Base object for prototypal inheritance.
       */

      var Base = C_lib.Base = function () {
        return {
          /**
           * Creates a new object that inherits from this object.
           *
           * @param {Object} overrides Properties to copy into the new object.
           *
           * @return {Object} The new object.
           *
           * @static
           *
           * @example
           *
           *     var MyType = CryptoJS.lib.Base.extend({
           *         field: 'value',
           *
           *         method: function () {
           *         }
           *     });
           */
          extend: function extend(overrides) {
            // Spawn
            var subtype = create(this); // Augment

            if (overrides) {
              subtype.mixIn(overrides);
            } // Create default initializer


            if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
              subtype.init = function () {
                subtype.$super.init.apply(this, arguments);
              };
            } // Initializer's prototype is the subtype object


            subtype.init.prototype = subtype; // Reference supertype

            subtype.$super = this;
            return subtype;
          },

          /**
           * Extends this object and runs the init method.
           * Arguments to create() will be passed to init().
           *
           * @return {Object} The new object.
           *
           * @static
           *
           * @example
           *
           *     var instance = MyType.create();
           */
          create: function create() {
            var instance = this.extend();
            instance.init.apply(instance, arguments);
            return instance;
          },

          /**
           * Initializes a newly created object.
           * Override this method to add some logic when your objects are created.
           *
           * @example
           *
           *     var MyType = CryptoJS.lib.Base.extend({
           *         init: function () {
           *             // ...
           *         }
           *     });
           */
          init: function init() {},

          /**
           * Copies properties into this object.
           *
           * @param {Object} properties The properties to mix in.
           *
           * @example
           *
           *     MyType.mixIn({
           *         field: 'value'
           *     });
           */
          mixIn: function mixIn(properties) {
            for (var propertyName in properties) {
              if (properties.hasOwnProperty(propertyName)) {
                this[propertyName] = properties[propertyName];
              }
            } // IE won't copy toString using the loop above


            if (properties.hasOwnProperty('toString')) {
              this.toString = properties.toString;
            }
          },

          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = instance.clone();
           */
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        };
      }();
      /**
       * An array of 32-bit words.
       *
       * @property {Array} words The array of 32-bit words.
       * @property {number} sigBytes The number of significant bytes in this word array.
       */


      var WordArray = C_lib.WordArray = Base.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of 32-bit words.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.create();
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
         */
        init: function init(words, sigBytes) {
          words = this.words = words || [];

          if (sigBytes != undefined$1) {
            this.sigBytes = sigBytes;
          } else {
            this.sigBytes = words.length * 4;
          }
        },

        /**
         * Converts this word array to a string.
         *
         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {string} The stringified word array.
         *
         * @example
         *
         *     var string = wordArray + '';
         *     var string = wordArray.toString();
         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
         */
        toString: function toString(encoder) {
          return (encoder || Hex).stringify(this);
        },

        /**
         * Concatenates a word array to this word array.
         *
         * @param {WordArray} wordArray The word array to append.
         *
         * @return {WordArray} This word array.
         *
         * @example
         *
         *     wordArray1.concat(wordArray2);
         */
        concat: function concat(wordArray) {
          // Shortcuts
          var thisWords = this.words;
          var thatWords = wordArray.words;
          var thisSigBytes = this.sigBytes;
          var thatSigBytes = wordArray.sigBytes; // Clamp excess bits

          this.clamp(); // Concat

          if (thisSigBytes % 4) {
            // Copy one byte at a time
            for (var i = 0; i < thatSigBytes; i++) {
              var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
              thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
            }
          } else {
            // Copy one word at a time
            for (var j = 0; j < thatSigBytes; j += 4) {
              thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
            }
          }

          this.sigBytes += thatSigBytes; // Chainable

          return this;
        },

        /**
         * Removes insignificant bits.
         *
         * @example
         *
         *     wordArray.clamp();
         */
        clamp: function clamp() {
          // Shortcuts
          var words = this.words;
          var sigBytes = this.sigBytes; // Clamp

          words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
          words.length = Math.ceil(sigBytes / 4);
        },

        /**
         * Creates a copy of this word array.
         *
         * @return {WordArray} The clone.
         *
         * @example
         *
         *     var clone = wordArray.clone();
         */
        clone: function clone() {
          var clone = Base.clone.call(this);
          clone.words = this.words.slice(0);
          return clone;
        },

        /**
         * Creates a word array filled with random bytes.
         *
         * @param {number} nBytes The number of random bytes to generate.
         *
         * @return {WordArray} The random word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.random(16);
         */
        random: function random(nBytes) {
          var words = [];

          for (var i = 0; i < nBytes; i += 4) {
            words.push(cryptoSecureRandomInt());
          }

          return new WordArray.init(words, nBytes);
        }
      });
      /**
       * Encoder namespace.
       */

      var C_enc = C.enc = {};
      /**
       * Hex encoding strategy.
       */

      var Hex = C_enc.Hex = {
        /**
         * Converts a word array to a hex string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The hex string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
         */
        stringify: function stringify(wordArray) {
          // Shortcuts
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes; // Convert

          var hexChars = [];

          for (var i = 0; i < sigBytes; i++) {
            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            hexChars.push((bite >>> 4).toString(16));
            hexChars.push((bite & 0x0f).toString(16));
          }

          return hexChars.join('');
        },

        /**
         * Converts a hex string to a word array.
         *
         * @param {string} hexStr The hex string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
         */
        parse: function parse(hexStr) {
          // Shortcut
          var hexStrLength = hexStr.length; // Convert

          var words = [];

          for (var i = 0; i < hexStrLength; i += 2) {
            words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
          }

          return new WordArray.init(words, hexStrLength / 2);
        }
      };
      /**
       * Latin1 encoding strategy.
       */

      var Latin1 = C_enc.Latin1 = {
        /**
         * Converts a word array to a Latin1 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Latin1 string.
         *
         * @static
         *
         * @example
         *
         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
         */
        stringify: function stringify(wordArray) {
          // Shortcuts
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes; // Convert

          var latin1Chars = [];

          for (var i = 0; i < sigBytes; i++) {
            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            latin1Chars.push(String.fromCharCode(bite));
          }

          return latin1Chars.join('');
        },

        /**
         * Converts a Latin1 string to a word array.
         *
         * @param {string} latin1Str The Latin1 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
         */
        parse: function parse(latin1Str) {
          // Shortcut
          var latin1StrLength = latin1Str.length; // Convert

          var words = [];

          for (var i = 0; i < latin1StrLength; i++) {
            words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
          }

          return new WordArray.init(words, latin1StrLength);
        }
      };
      /**
       * UTF-8 encoding strategy.
       */

      var Utf8 = C_enc.Utf8 = {
        /**
         * Converts a word array to a UTF-8 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-8 string.
         *
         * @static
         *
         * @example
         *
         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
         */
        stringify: function stringify(wordArray) {
          try {
            return decodeURIComponent(escape(Latin1.stringify(wordArray)));
          } catch (e) {
            throw new Error('Malformed UTF-8 data');
          }
        },

        /**
         * Converts a UTF-8 string to a word array.
         *
         * @param {string} utf8Str The UTF-8 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
         */
        parse: function parse(utf8Str) {
          return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        }
      };
      /**
       * Abstract buffered block algorithm template.
       *
       * The property blockSize must be implemented in a concrete subtype.
       *
       * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
       */

      var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *
         *     bufferedBlockAlgorithm.reset();
         */
        reset: function reset() {
          // Initial values
          this._data = new WordArray.init();
          this._nDataBytes = 0;
        },

        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         */
        _append: function _append(data) {
          // Convert string to WordArray, else assume WordArray already
          if (typeof data == 'string') {
            data = Utf8.parse(data);
          } // Append


          this._data.concat(data);

          this._nDataBytes += data.sigBytes;
        },

        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {WordArray} The processed data.
         *
         * @example
         *
         *     var processedData = bufferedBlockAlgorithm._process();
         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
         */
        _process: function _process(doFlush) {
          var processedWords; // Shortcuts

          var data = this._data;
          var dataWords = data.words;
          var dataSigBytes = data.sigBytes;
          var blockSize = this.blockSize;
          var blockSizeBytes = blockSize * 4; // Count blocks ready

          var nBlocksReady = dataSigBytes / blockSizeBytes;

          if (doFlush) {
            // Round up to include partial blocks
            nBlocksReady = Math.ceil(nBlocksReady);
          } else {
            // Round down to include only full blocks,
            // less the number of blocks that must remain in the buffer
            nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
          } // Count words ready


          var nWordsReady = nBlocksReady * blockSize; // Count bytes ready

          var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes); // Process blocks

          if (nWordsReady) {
            for (var offset = 0; offset < nWordsReady; offset += blockSize) {
              // Perform concrete-algorithm logic
              this._doProcessBlock(dataWords, offset);
            } // Remove processed words


            processedWords = dataWords.splice(0, nWordsReady);
            data.sigBytes -= nBytesReady;
          } // Return processed words


          return new WordArray.init(processedWords, nBytesReady);
        },

        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = bufferedBlockAlgorithm.clone();
         */
        clone: function clone() {
          var clone = Base.clone.call(this);
          clone._data = this._data.clone();
          return clone;
        },
        _minBufferSize: 0
      });
      /**
       * Abstract hasher template.
       *
       * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
       */

      C_lib.Hasher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         */
        cfg: Base.extend(),

        /**
         * Initializes a newly created hasher.
         *
         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
         *
         * @example
         *
         *     var hasher = CryptoJS.algo.SHA256.create();
         */
        init: function init(cfg) {
          // Apply config defaults
          this.cfg = this.cfg.extend(cfg); // Set initial values

          this.reset();
        },

        /**
         * Resets this hasher to its initial state.
         *
         * @example
         *
         *     hasher.reset();
         */
        reset: function reset() {
          // Reset data buffer
          BufferedBlockAlgorithm.reset.call(this); // Perform concrete-hasher logic

          this._doReset();
        },

        /**
         * Updates this hasher with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {Hasher} This hasher.
         *
         * @example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         */
        update: function update(messageUpdate) {
          // Append
          this._append(messageUpdate); // Update the hash


          this._process(); // Chainable


          return this;
        },

        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The hash.
         *
         * @example
         *
         *     var hash = hasher.finalize();
         *     var hash = hasher.finalize('message');
         *     var hash = hasher.finalize(wordArray);
         */
        finalize: function finalize(messageUpdate) {
          // Final message update
          if (messageUpdate) {
            this._append(messageUpdate);
          } // Perform concrete-hasher logic


          var hash = this._doFinalize();

          return hash;
        },
        blockSize: 512 / 32,

        /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * @param {Hasher} hasher The hasher to create a helper for.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
         */
        _createHelper: function _createHelper(hasher) {
          return function (message, cfg) {
            return new hasher.init(cfg).finalize(message);
          };
        },

        /**
         * Creates a shortcut function to the HMAC's object interface.
         *
         * @param {Hasher} hasher The hasher to use in this HMAC helper.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
         */
        _createHmacHelper: function _createHmacHelper(hasher) {
          return function (message, key) {
            return new C_algo.HMAC.init(hasher, key).finalize(message);
          };
        }
      });
      /**
       * Algorithm namespace.
       */

      var C_algo = C.algo = {};
      return C;
    }(Math);

    return CryptoJS;
  });
})(core);

(function (module, exports) {

  (function (root, factory) {
    {
      // CommonJS
      module.exports = factory(core.exports);
    }
  })(commonjsGlobal, function (CryptoJS) {
    (function (Math) {
      // Shortcuts
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo; // Initialization and round constants tables

      var H = [];
      var K = []; // Compute constants

      (function () {
        function isPrime(n) {
          var sqrtN = Math.sqrt(n);

          for (var factor = 2; factor <= sqrtN; factor++) {
            if (!(n % factor)) {
              return false;
            }
          }

          return true;
        }

        function getFractionalBits(n) {
          return (n - (n | 0)) * 0x100000000 | 0;
        }

        var n = 2;
        var nPrime = 0;

        while (nPrime < 64) {
          if (isPrime(n)) {
            if (nPrime < 8) {
              H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
            }

            K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
            nPrime++;
          }

          n++;
        }
      })(); // Reusable object


      var W = [];
      /**
       * SHA-256 hash algorithm.
       */

      var SHA256 = C_algo.SHA256 = Hasher.extend({
        _doReset: function _doReset() {
          this._hash = new WordArray.init(H.slice(0));
        },
        _doProcessBlock: function _doProcessBlock(M, offset) {
          // Shortcut
          var H = this._hash.words; // Working variables

          var a = H[0];
          var b = H[1];
          var c = H[2];
          var d = H[3];
          var e = H[4];
          var f = H[5];
          var g = H[6];
          var h = H[7]; // Computation

          for (var i = 0; i < 64; i++) {
            if (i < 16) {
              W[i] = M[offset + i] | 0;
            } else {
              var gamma0x = W[i - 15];
              var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
              var gamma1x = W[i - 2];
              var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
              W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
            }

            var ch = e & f ^ ~e & g;
            var maj = a & b ^ a & c ^ b & c;
            var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
            var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
            var t1 = h + sigma1 + ch + K[i] + W[i];
            var t2 = sigma0 + maj;
            h = g;
            g = f;
            f = e;
            e = d + t1 | 0;
            d = c;
            c = b;
            b = a;
            a = t1 + t2 | 0;
          } // Intermediate hash value


          H[0] = H[0] + a | 0;
          H[1] = H[1] + b | 0;
          H[2] = H[2] + c | 0;
          H[3] = H[3] + d | 0;
          H[4] = H[4] + e | 0;
          H[5] = H[5] + f | 0;
          H[6] = H[6] + g | 0;
          H[7] = H[7] + h | 0;
        },
        _doFinalize: function _doFinalize() {
          // Shortcuts
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8; // Add padding

          dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
          data.sigBytes = dataWords.length * 4; // Hash final blocks

          this._process(); // Return final computed hash


          return this._hash;
        },
        clone: function clone() {
          var clone = Hasher.clone.call(this);
          clone._hash = this._hash.clone();
          return clone;
        }
      });
      /**
       * Shortcut function to the hasher's object interface.
       *
       * @param {WordArray|string} message The message to hash.
       *
       * @return {WordArray} The hash.
       *
       * @static
       *
       * @example
       *
       *     var hash = CryptoJS.SHA256('message');
       *     var hash = CryptoJS.SHA256(wordArray);
       */

      C.SHA256 = Hasher._createHelper(SHA256);
      /**
       * Shortcut function to the HMAC's object interface.
       *
       * @param {WordArray|string} message The message to hash.
       * @param {WordArray|string} key The secret key.
       *
       * @return {WordArray} The HMAC.
       *
       * @static
       *
       * @example
       *
       *     var hmac = CryptoJS.HmacSHA256(message, key);
       */

      C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    })(Math);

    return CryptoJS.SHA256;
  });
})(sha256$1);

var sha256 = sha256$1.exports;

var round2 = function (v, scale, fixed) {
    if (scale === void 0) { scale = 1; }
    if (fixed === void 0) { fixed = 2; }
    return ((Math.round(v * 100) / 100) * scale).toFixed(fixed);
};
var round3 = function (v, scale, fixed) {
    if (scale === void 0) { scale = 1; }
    if (fixed === void 0) { fixed = 3; }
    return ((Math.round(v * 1000) / 1000) * scale).toFixed(fixed);
};
var getDeduplicatedProps = function (targetProps) {
    return lodash.filter(targetProps, function (prop, index) {
        return index ===
            lodash.findLastIndex(targetProps, function (lastPro) {
                return prop.token === lastPro.token && prop.value === lastPro.value;
            });
    });
};
var isMoveNode = function (n) {
    return n.model.moveProps.length > 0;
};
var isRooNode = function (n) {
    return n.model.moveProps.length > 0;
};
var isSetupNode = function (n) {
    return n.model.setupProps.length > 0;
};
var isAnswerNode = function (n, kind) {
    var _a;
    var pai = (_a = n.model.customProps) === null || _a === void 0 ? void 0 : _a.find(function (p) { return p.token === 'PAI'; });
    if (!pai)
        return false;
    var data = JSON.parse(pai.value);
    return data.kind === kind;
};
var getNodeNumber = function (n, parent) {
    var path = n.getPath();
    var movesCount = path.filter(function (n) { return isMoveNode(n); }).length;
    if (parent) {
        movesCount += parent.getPath().filter(function (n) { return isMoveNode(n); }).length;
    }
    return movesCount;
};
var calcSHA = function (node, moveProps, setupProps) {
    if (moveProps === void 0) { moveProps = []; }
    if (setupProps === void 0) { setupProps = []; }
    var nodeType = 'r';
    if (moveProps.length > 0)
        nodeType = 'm';
    if (setupProps.length > 0)
        nodeType = 's';
    var n = "" + nodeType;
    if (moveProps.length > 0)
        n += "" + moveProps[0].token + moveProps[0].value;
    var fullname = n;
    if (node) {
        fullname =
            node
                .getPath()
                .map(function (n) { return n.model.id; })
                .join('=>') +
                '=>' +
                n;
    }
    var sha = sha256(fullname).toString().slice(0, 6);
    return sha;
};
var nFormatter = function (num, fixed) {
    if (fixed === void 0) { fixed = 1; }
    var lookup = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'k' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'G' },
        { value: 1e12, symbol: 'T' },
        { value: 1e15, symbol: 'P' },
        { value: 1e18, symbol: 'E' },
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
        .slice()
        .reverse()
        .find(function (item) {
        return num >= item.value;
    });
    return item
        ? (num / item.value).toFixed(fixed).replace(rx, '$1') + item.symbol
        : '0';
};
var pathToIndexes = function (path) {
    return path.map(function (n) { return n.model.id; });
};
var pathToInitialStones = function (path, xOffset, yOffset) {
    if (xOffset === void 0) { xOffset = 0; }
    if (yOffset === void 0) { yOffset = 0; }
    var inits = path
        .filter(function (n) { return n.model.setupProps.length > 0; })
        .map(function (n) {
        return n.model.setupProps.map(function (setup) {
            var a = A1_LETTERS[SGF_LETTERS.indexOf(setup.value[0]) + xOffset];
            var b = A1_NUMBERS[SGF_LETTERS.indexOf(setup.value[1]) + yOffset];
            var token = setup.token === 'AB' ? 'B' : 'W';
            return [token, a + b];
        });
    });
    return lodash.flattenDepth(inits[0], 0);
};
var pathToAiMoves = function (path, xOffset, yOffset) {
    if (xOffset === void 0) { xOffset = 0; }
    if (yOffset === void 0) { yOffset = 0; }
    var moves = path
        .filter(function (n) { return n.model.moveProps.length > 0; })
        .map(function (n) {
        var prop = n.model.moveProps[0];
        var a = A1_LETTERS[SGF_LETTERS.indexOf(prop.value[0]) + xOffset];
        var b = A1_NUMBERS[SGF_LETTERS.indexOf(prop.value[1]) + yOffset];
        return [prop.token, a + b];
    });
    return moves;
};
var getIndexFromAnalysis = function (a) {
    if (/indexes/.test(a.id)) {
        return JSON.parse(a.id)['indexes'][0];
    }
    return '';
};
var isMainPath = function (node) {
    return lodash.sum(node.getPath().map(function (n) { return n.getIndex(); })) === 0;
};
var sgfToPos = function (str) {
    var ki = str[0] === 'B' ? 1 : -1;
    var tempStr = /\[(.*)\]/.exec(str);
    if (tempStr) {
        var pos = tempStr[1];
        var x = SGF_LETTERS.indexOf(pos[0]);
        var y = SGF_LETTERS.indexOf(pos[1]);
        return { x: x, y: y, ki: ki };
    }
    return { x: -1, y: -1, ki: 0 };
};
var sgfToA1 = function (str) {
    var _a = sgfToPos(str), x = _a.x, y = _a.y;
    return A1_LETTERS[x] + A1_NUMBERS[y];
};
var a1ToPos = function (move) {
    var x = A1_LETTERS.indexOf(move[0]);
    var y = A1_NUMBERS.indexOf(parseInt(move.substr(1), 0));
    return { x: x, y: y };
};
var a1ToIndex = function (move, boardSize) {
    if (boardSize === void 0) { boardSize = 19; }
    var x = A1_LETTERS.indexOf(move[0]);
    var y = A1_NUMBERS.indexOf(parseInt(move.substr(1), 0));
    return x * boardSize + y;
};
var sgfOffset = function (sgf, offset) {
    if (offset === void 0) { offset = 0; }
    if (offset === 0)
        return sgf;
    var res = lodash.clone(sgf);
    var charIndex = SGF_LETTERS.indexOf(sgf[2]) - offset;
    return res.substr(0, 2) + SGF_LETTERS[charIndex] + res.substr(2 + 1);
};
var a1ToSGF = function (str, type, offsetX, offsetY) {
    if (type === void 0) { type = 'B'; }
    if (offsetX === void 0) { offsetX = 0; }
    if (offsetY === void 0) { offsetY = 0; }
    if (str === 'pass')
        return type + "[]";
    var inx = A1_LETTERS.indexOf(str[0]) + offsetX;
    var iny = A1_NUMBERS.indexOf(parseInt(str.substr(1), 0)) + offsetY;
    var sgf = type + "[" + SGF_LETTERS[inx] + SGF_LETTERS[iny] + "]";
    return sgf;
};
var posToSgf = function (x, y, ki) {
    var ax = SGF_LETTERS[x];
    var ay = SGF_LETTERS[y];
    if (ki === 0)
        return '';
    if (ki === 1)
        return "B[" + ax + ay + "]";
    if (ki === -1)
        return "W[" + ax + ay + "]";
    return '';
};
var matToPosition = function (mat, xOffset, yOffset) {
    if (xOffset === void 0) { xOffset = 0; }
    if (yOffset === void 0) { yOffset = 0; }
    var result = '';
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            var value = mat[i][j];
            if (value !== 0) {
                var x = A1_LETTERS[i + xOffset];
                var y = A1_NUMBERS[j + yOffset];
                var color = value === 1 ? 'b' : 'w';
                result += color + " " + x + y + " ";
            }
        }
    }
    return result;
};
var matToListOfTuples = function (mat, xOffset, yOffset) {
    if (xOffset === void 0) { xOffset = 0; }
    if (yOffset === void 0) { yOffset = 0; }
    var results = [];
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            var value = mat[i][j];
            if (value !== 0) {
                var x = A1_LETTERS[i + xOffset];
                var y = A1_NUMBERS[j + yOffset];
                var color = value === 1 ? 'B' : 'W';
                results.push([color, x + y]);
            }
        }
    }
    return results;
};
var convertStoneTypeToString = function (type) { return (type === 1 ? 'B' : 'W'); };
var convertStepsForAI = function (steps, offset) {
    if (offset === void 0) { offset = 0; }
    var res = lodash.clone(steps);
    res = res.map(function (s) { return sgfOffset(s, offset); });
    var header = "(;FF[4]GM[1]SZ[" + (19 - offset) + "]GN[226]PB[Black]HA[0]PW[White]KM[7.5]DT[2017-08-01]TM[1800]RU[Chinese]CP[Copyright ghost-go.com]AP[ghost-go.com]PL[Black];";
    var count = 0;
    var prev = '';
    steps.forEach(function (step, index) {
        if (step[0] === prev[0]) {
            if (step[0] === 'B') {
                res.splice(index + count, 0, 'W[tt]');
                count += 1;
            }
            else {
                res.splice(index + count, 0, 'B[tt]');
                count += 1;
            }
        }
        prev = step;
    });
    return "" + header + res.join(';') + ")";
};
var reverseOffsetA1Move = function (move, mat, analysis) {
    if (move === 'pass')
        return move;
    var idObj = JSON.parse(analysis.id);
    var _a = reverseOffset(mat, idObj.bx, idObj.by), x = _a.x, y = _a.y;
    var inx = A1_LETTERS.indexOf(move[0]) + x;
    var iny = A1_NUMBERS.indexOf(parseInt(move.substr(1), 0)) + y;
    return "" + A1_LETTERS[inx] + A1_NUMBERS[iny];
};
var calcScoreDiffText = function (prev, curr, fixed) {
    if (fixed === void 0) { fixed = 1; }
    if (!prev || !curr)
        return '';
    var score = calcScoreDiff(prev, curr);
    var fixedScore = score.toFixed(fixed);
    return score > 0 ? "+" + fixedScore : "" + fixedScore;
};
var calcWinrateDiffText = function (prev, curr, fixed) {
    if (fixed === void 0) { fixed = 1; }
    if (!prev || !curr)
        return '';
    var winrate = calcWinrateDiff(prev, curr);
    var fixedWinrate = winrate.toFixed(fixed);
    return winrate >= 0 ? "+" + fixedWinrate + "%" : fixedWinrate + "%";
};
var calcScoreDiff = function (prevInfo, currInfo) {
    var sign = prevInfo.currentPlayer === 'B' ? 1 : -1;
    var score = Math.round((currInfo.scoreLead - prevInfo.scoreLead) * sign * 1000) / 1000;
    return score;
};
var calcWinrateDiff = function (prevInfo, currInfo) {
    var sign = prevInfo.currentPlayer === 'B' ? 1 : -1;
    var score = Math.round((currInfo.winrate - prevInfo.winrate) * sign * 1000 * 100) /
        1000;
    return score;
};
// export const GoBanDetection = (pixelData, canvas) => {
// const columns = canvas.width;
// const rows = canvas.height;
// const dataType = JsFeat.U8C1_t;
// const distMatrixT = new JsFeat.matrix_t(columns, rows, dataType);
// JsFeat.imgproc.grayscale(pixelData, columns, rows, distMatrixT);
// JsFeat.imgproc.gaussian_blur(distMatrixT, distMatrixT, 2, 0);
// JsFeat.imgproc.canny(distMatrixT, distMatrixT, 50, 50);
// const newPixelData = new Uint32Array(pixelData.buffer);
// const alpha = (0xff << 24);
// let i = distMatrixT.cols * distMatrixT.rows;
// let pix = 0;
// while (i >= 0) {
//   pix = distMatrixT.data[i];
//   newPixelData[i] = alpha | (pix << 16) | (pix << 8) | pix;
//   i -= 1;
// }
// };

/* eslint-disable @typescript-eslint/no-non-null-assertion */
var zeros = function (size) {
    return new Array(size[0]).fill(0).map(function () { return new Array(size[1]).fill(0); });
};
var empty = function (size) {
    return new Array(size[0]).fill('').map(function () { return new Array(size[1]).fill(''); });
};
var GRID = 19;
var liberties = 0;
var recursionPath = [];
var calcMost = function (mat, boardSize) {
    if (boardSize === void 0) { boardSize = 19; }
    var leftMost = boardSize - 1;
    var rightMost = 0;
    var topMost = boardSize - 1;
    var bottomMost = 0;
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            var value = mat[i][j];
            if (value !== 0) {
                if (leftMost > i)
                    leftMost = i;
                if (rightMost < i)
                    rightMost = i;
                if (topMost > j)
                    topMost = j;
                if (bottomMost < j)
                    bottomMost = j;
            }
        }
    }
    return { leftMost: leftMost, rightMost: rightMost, topMost: topMost, bottomMost: bottomMost };
};
var calcCenter = function (mat, boardSize) {
    if (boardSize === void 0) { boardSize = 19; }
    var _a = calcMost(mat, boardSize), leftMost = _a.leftMost, rightMost = _a.rightMost, topMost = _a.topMost, bottomMost = _a.bottomMost;
    var top = topMost < boardSize - 1 - bottomMost;
    var left = leftMost < boardSize - 1 - rightMost;
    if (top && left)
        return exports.Center.TopLeft;
    if (!top && left)
        return exports.Center.BottomLeft;
    if (top && !left)
        return exports.Center.TopRight;
    if (!top && !left)
        return exports.Center.BottomRight;
    return exports.Center.Center;
};
var calcBoardSize = function (mat, boardSize, extend) {
    if (boardSize === void 0) { boardSize = 19; }
    if (extend === void 0) { extend = 2; }
    var result = [19, 19];
    var center = calcCenter(mat);
    var _a = calcMost(mat, boardSize), leftMost = _a.leftMost, rightMost = _a.rightMost, topMost = _a.topMost, bottomMost = _a.bottomMost;
    if (center === exports.Center.TopLeft) {
        result[0] = rightMost + extend + 1;
        result[1] = bottomMost + extend + 1;
    }
    if (center === exports.Center.TopRight) {
        result[0] = boardSize - leftMost + extend;
        result[1] = bottomMost + extend + 1;
    }
    if (center === exports.Center.BottomLeft) {
        result[0] = rightMost + extend + 1;
        result[1] = boardSize - topMost + extend;
    }
    if (center === exports.Center.BottomRight) {
        result[0] = boardSize - leftMost + extend;
        result[1] = boardSize - topMost + extend;
    }
    return result;
};
var calcOffset = function (mat) {
    var boardSize = calcBoardSize(mat);
    var ox = 19 - boardSize[0];
    var oy = 19 - boardSize[1];
    var center = calcCenter(mat);
    var oox = ox;
    var ooy = oy;
    switch (center) {
        case exports.Center.TopLeft: {
            oox = 0;
            ooy = oy;
            break;
        }
        case exports.Center.TopRight: {
            oox = -ox;
            ooy = oy;
            break;
        }
        case exports.Center.BottomLeft: {
            oox = 0;
            ooy = 0;
            break;
        }
        case exports.Center.BottomRight: {
            oox = -ox;
            ooy = 0;
            break;
        }
    }
    return { x: oox, y: ooy };
};
var reverseOffset = function (mat, bx, by) {
    if (bx === void 0) { bx = 19; }
    if (by === void 0) { by = 19; }
    var ox = 19 - bx;
    var oy = 19 - by;
    var center = calcCenter(mat);
    var oox = ox;
    var ooy = oy;
    switch (center) {
        case exports.Center.TopLeft: {
            oox = 0;
            ooy = -oy;
            break;
        }
        case exports.Center.TopRight: {
            oox = ox;
            ooy = -oy;
            break;
        }
        case exports.Center.BottomLeft: {
            oox = 0;
            ooy = 0;
            break;
        }
        case exports.Center.BottomRight: {
            oox = ox;
            ooy = 0;
            break;
        }
    }
    return { x: oox, y: ooy };
};
var calcVisibleArea = function (mat, boardSize, extend) {
    if (boardSize === void 0) { boardSize = 19; }
    if (extend === void 0) { extend = 2; }
    var center = calcCenter(mat);
    var _a = calcMost(mat, boardSize), leftMost = _a.leftMost, rightMost = _a.rightMost, topMost = _a.topMost, bottomMost = _a.bottomMost;
    var visibleArea = [
        [0, 18],
        [0, 18],
    ];
    var visibleSize = boardSize - 1;
    if (center === exports.Center.TopLeft) {
        visibleSize = Math.min(Math.max(rightMost, bottomMost) + extend, boardSize - 1);
        visibleArea = [
            [0, visibleSize],
            [0, visibleSize],
        ];
    }
    else if (center === exports.Center.TopRight) {
        visibleSize = Math.min(Math.max(bottomMost + extend, boardSize - 1 - (leftMost - extend)), boardSize - 1);
        visibleArea = [
            [boardSize - 1 - visibleSize, 18],
            [0, visibleSize],
        ];
    }
    else if (center === exports.Center.BottomLeft) {
        visibleSize = Math.min(Math.max(boardSize - 1 - (topMost - extend), rightMost + extend), boardSize - 1);
        visibleArea = [
            [0, visibleSize],
            [boardSize - 1 - visibleSize, 18],
        ];
    }
    else if (center === exports.Center.BottomRight) {
        visibleSize = Math.min(Math.max(boardSize - 1 - (topMost - extend), boardSize - 1 - (leftMost - extend)), boardSize - 1);
        // console.log('vs', visibleSize);
        visibleArea = [
            [boardSize - 1 - visibleSize, 18],
            [boardSize - 1 - visibleSize, 18],
        ];
    }
    return { visibleArea: visibleArea, center: center };
};
function calcLibertyCore(mat, x, y, ki) {
    if (x >= 0 && x < GRID && y >= 0 && y < GRID) {
        if (mat[x][y] === ki && !recursionPath.includes(x + "," + y)) {
            recursionPath.push(x + "," + y);
            calcLibertyCore(mat, x - 1, y, ki);
            calcLibertyCore(mat, x + 1, y, ki);
            calcLibertyCore(mat, x, y - 1, ki);
            calcLibertyCore(mat, x, y + 1, ki);
        }
        else if (mat[x][y] === 0) {
            liberties += 1;
        }
    }
}
function calcLiberty(mat, x, y, ki) {
    liberties = 0;
    recursionPath = [];
    if (x < 0 || y < 0 || x > GRID - 1 || y > GRID - 1) {
        return {
            liberty: 4,
            recursionPath: [],
        };
    }
    if (mat[x][y] === 0) {
        return {
            liberty: 4,
            recursionPath: [],
        };
    }
    calcLibertyCore(mat, x, y, ki);
    return {
        liberty: liberties,
        recursionPath: recursionPath,
    };
}
function execPonnuki(mat, i, j, ki) {
    var newMat = lodash.cloneDeep(mat);
    var _a = calcLiberty(mat, i, j - 1, ki), libertyUp = _a.liberty, recursionPathUp = _a.recursionPath;
    var _b = calcLiberty(mat, i, j + 1, ki), libertyDown = _b.liberty, recursionPathDown = _b.recursionPath;
    var _c = calcLiberty(mat, i - 1, j, ki), libertyLeft = _c.liberty, recursionPathLeft = _c.recursionPath;
    var _d = calcLiberty(mat, i + 1, j, ki), libertyRight = _d.liberty, recursionPathRight = _d.recursionPath;
    if (libertyUp === 0) {
        recursionPathUp.forEach(function (item) {
            var coord = item.split(',');
            newMat[parseInt(coord[0])][parseInt(coord[1])] = 0;
        });
    }
    if (libertyDown === 0) {
        recursionPathDown.forEach(function (item) {
            var coord = item.split(',');
            newMat[parseInt(coord[0])][parseInt(coord[1])] = 0;
        });
    }
    if (libertyLeft === 0) {
        recursionPathLeft.forEach(function (item) {
            var coord = item.split(',');
            newMat[parseInt(coord[0])][parseInt(coord[1])] = 0;
        });
    }
    if (libertyRight === 0) {
        recursionPathRight.forEach(function (item) {
            var coord = item.split(',');
            newMat[parseInt(coord[0])][parseInt(coord[1])] = 0;
        });
    }
    return newMat;
}
function canPonnuki(mat, i, j, ki) {
    var _a = calcLiberty(mat, i, j - 1, ki), libertyUp = _a.liberty, recursionPathUp = _a.recursionPath;
    var _b = calcLiberty(mat, i, j + 1, ki), libertyDown = _b.liberty, recursionPathDown = _b.recursionPath;
    var _c = calcLiberty(mat, i - 1, j, ki), libertyLeft = _c.liberty, recursionPathLeft = _c.recursionPath;
    var _d = calcLiberty(mat, i + 1, j, ki), libertyRight = _d.liberty, recursionPathRight = _d.recursionPath;
    if (libertyUp === 0 && recursionPathUp.length > 0) {
        return true;
    }
    if (libertyDown === 0 && recursionPathDown.length > 0) {
        return true;
    }
    if (libertyLeft === 0 && recursionPathLeft.length > 0) {
        return true;
    }
    if (libertyRight === 0 && recursionPathRight.length > 0) {
        return true;
    }
    return false;
}
function canMove(mat, i, j, ki) {
    if (i < 0 || j < 0)
        return true;
    var newMat = lodash.cloneDeep(mat);
    if (newMat[i][j] !== 0) {
        return false;
    }
    newMat[i][j] = ki;
    var liberty = calcLiberty(newMat, i, j, ki).liberty;
    if (canPonnuki(newMat, i, j, -ki)) {
        return true;
    }
    if (canPonnuki(newMat, i, j, ki)) {
        return false;
    }
    if (liberty === 0) {
        return false;
    }
    return true;
}
function move(mat, i, j, ki) {
    if (i < 0 || j < 0)
        return mat;
    var newMat = lodash.cloneDeep(mat);
    newMat[i][j] = ki;
    return execPonnuki(newMat, i, j, -ki);
}
function showKi(mat, steps, isPonnuki) {
    if (isPonnuki === void 0) { isPonnuki = true; }
    var newMat = lodash.cloneDeep(mat);
    var hasMoved = false;
    steps.forEach(function (str) {
        var _a = sgfToPos(str), x = _a.x, y = _a.y, ki = _a.ki;
        if (isPonnuki) {
            if (canMove(newMat, x, y, ki)) {
                newMat[x][y] = ki;
                newMat = execPonnuki(newMat, x, y, -ki);
                hasMoved = true;
            }
        }
        else {
            newMat[x][y] = ki;
            hasMoved = true;
        }
    });
    return {
        arrangement: newMat,
        hasMoved: hasMoved,
    };
}

var Stone = /** @class */ (function () {
    function Stone(ctx, x, y, r, ki) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = r;
        this.ki = ki;
    }
    Stone.prototype.draw = function () {
        console.log('TBD');
    };
    return Stone;
}());

var BwStone = /** @class */ (function (_super) {
    tslib.__extends(BwStone, _super);
    function BwStone(ctx, x, y, r, ki) {
        return _super.call(this, ctx, x, y, r, ki) || this;
    }
    BwStone.prototype.draw = function () {
        var _a = this, ctx = _a.ctx, x = _a.x, y = _a.y, r = _a.r, ki = _a.ki;
        if (r <= 0)
            return;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI, true);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        if (ki === 1) {
            ctx.fillStyle = '#000';
        }
        else if (ki === -1) {
            ctx.fillStyle = '#fff';
        }
        ctx.fill();
        ctx.stroke();
    };
    return BwStone;
}(Stone));

var ImageStone = /** @class */ (function (_super) {
    tslib.__extends(ImageStone, _super);
    function ImageStone(ctx, x, y, r, ki, mod, blacks, whites) {
        var _this = _super.call(this, ctx, x, y, r, ki) || this;
        _this.mod = mod;
        _this.blacks = blacks;
        _this.whites = whites;
        return _this;
    }
    ImageStone.prototype.draw = function () {
        var _a = this, ctx = _a.ctx, x = _a.x, y = _a.y, r = _a.r, ki = _a.ki, blacks = _a.blacks, whites = _a.whites, mod = _a.mod;
        if (r <= 0)
            return;
        var img;
        if (ki === 1) {
            img = blacks[mod % blacks.length];
        }
        else {
            img = whites[mod % whites.length];
        }
        if (img) {
            ctx.drawImage(img, x - r, y - r, r * 2, r * 2);
        }
    };
    return ImageStone;
}(Stone));

var AnalysisPoint = /** @class */ (function () {
    function AnalysisPoint(ctx, x, y, r, rootInfo, moveInfo, norm, detail) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = r;
        this.rootInfo = rootInfo;
        this.moveInfo = moveInfo;
        this.norm = norm || 0;
        this.detail = detail;
    }
    AnalysisPoint.prototype.draw = function () {
        var _a = this, ctx = _a.ctx, x = _a.x, y = _a.y, r = _a.r, rootInfo = _a.rootInfo, moveInfo = _a.moveInfo;
        if (r < 0)
            return;
        var prior = moveInfo.prior, order = moveInfo.order;
        var score = calcScoreDiff(rootInfo, moveInfo);
        var pColor = 'rgba(255, 255, 255, 0.5)';
        if (prior >= 0.5 ||
            (prior >= 0.1 && order < 3 && score > -0.3) ||
            order === 0 ||
            score >= 0) {
            pColor = 'rgba(136, 170, 60, 1)';
        }
        else if ((prior > 0.05 && score > -0.5) ||
            (prior > 0.01 && score > -0.1)) {
            pColor = 'rgba(206, 210, 83, 1)';
        }
        else if (prior > 0.01 && score > -1) {
            pColor = 'rgba(242, 217, 60, 1)';
        }
        else {
            pColor = 'rgba(236, 146, 73, 1)';
        }
        ctx.save();
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 0;
        if (moveInfo.visits > 50 && score > -1 && (prior > 0.01 || order < 5)) {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI, true);
            ctx.lineWidth = 0;
            ctx.strokeStyle = 'rgba(255,255,255,0)';
            var gradient = ctx.createRadialGradient(x, y, r * 0.9, x, y, r);
            gradient.addColorStop(0, pColor);
            gradient.addColorStop(0.9, 'rgba(255, 255, 255, 0');
            ctx.fillStyle = gradient;
            ctx.fill();
            var fontSize = r / 1.5;
            ctx.font = fontSize * 0.8 + "px Tahoma";
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            var winrate = rootInfo.currentPlayer === 'B'
                ? moveInfo.winrate
                : 1 - moveInfo.winrate;
            ctx.fillText(round3(winrate, 100, 1), x, y - r / 2 + fontSize / 5);
            ctx.font = fontSize + "px Tahoma";
            var scoreText = calcScoreDiffText(rootInfo, moveInfo);
            ctx.fillText(scoreText, x, y + fontSize / 3);
            // ctx.font = `${fontSize * 0.8}px Tahoma`;
            // ctx.fillStyle = 'black';
            // ctx.textAlign = 'center';
            // ctx.fillText(nFormatter(moveInfo.visits), x, y + r / 4 );
            ctx.font = fontSize * 0.8 + "px Tahoma";
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(nFormatter(moveInfo.visits), x, y + r / 2 + fontSize / 3);
            var order_1 = moveInfo.order;
            ctx.fillText((order_1 + 1).toString(), x + r, y - r / 2);
        }
        else {
            ctx.beginPath();
            ctx.arc(x, y, r * 0.6, 0, 2 * Math.PI, true);
            ctx.lineWidth = 0;
            ctx.strokeStyle = 'rgba(255,255,255,0)';
            var gradient = ctx.createRadialGradient(x, y, r * 0.4, x, y, r);
            gradient.addColorStop(0, pColor);
            gradient.addColorStop(0.95, 'rgba(255, 255, 255, 0');
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.stroke();
        }
        ctx.restore();
    };
    return AnalysisPoint;
}());

var Markup = /** @class */ (function () {
    function Markup(ctx, x, y, s, ki, val) {
        if (val === void 0) { val = ''; }
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.s = s;
        this.ki = ki;
        this.val = val;
    }
    Markup.prototype.draw = function () {
        console.log('TBD');
    };
    return Markup;
}());

var CircleMarkup = /** @class */ (function (_super) {
    tslib.__extends(CircleMarkup, _super);
    function CircleMarkup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleMarkup.prototype.draw = function () {
        var _a = this, ctx = _a.ctx, x = _a.x, y = _a.y, s = _a.s, ki = _a.ki;
        var radius = s * 0.5;
        var size = radius * 0.65;
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 2;
        if (ki === 1) {
            ctx.strokeStyle = '#fff';
        }
        else if (ki === -1) {
            ctx.strokeStyle = '#000';
        }
        else {
            ctx.lineWidth = 3;
            size = radius * 0.7;
        }
        if (size > 0) {
            ctx.arc(x, y, size, 0, 2 * Math.PI, true);
            ctx.stroke();
        }
        ctx.restore();
    };
    return CircleMarkup;
}(Markup));

var CrossMarkup = /** @class */ (function (_super) {
    tslib.__extends(CrossMarkup, _super);
    function CrossMarkup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CrossMarkup.prototype.draw = function () {
        var _a = this, ctx = _a.ctx, x = _a.x, y = _a.y, s = _a.s, ki = _a.ki;
        var radius = s * 0.5;
        var size = radius * 0.5;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x - size, y - size);
        ctx.lineTo(x + size, y + size);
        ctx.moveTo(x + size, y - size);
        ctx.lineTo(x - size, y + size);
        ctx.lineWidth = 3;
        if (ki === 1) {
            ctx.strokeStyle = '#fff';
        }
        else if (ki === -1) {
            ctx.strokeStyle = '#000';
        }
        else {
            ctx.lineWidth = 3;
            size = radius * 0.7;
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    };
    return CrossMarkup;
}(Markup));

var TextMarkup = /** @class */ (function (_super) {
    tslib.__extends(TextMarkup, _super);
    function TextMarkup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextMarkup.prototype.draw = function () {
        var _a = this, ctx = _a.ctx, x = _a.x, y = _a.y, s = _a.s, ki = _a.ki, val = _a.val;
        var size = s * 0.8;
        var fontSize = size / 1.5;
        ctx.save();
        if (ki === 1) {
            ctx.fillStyle = '#fff';
        }
        else if (ki === -1) {
            ctx.fillStyle = '#000';
        }
        else {
            ctx.clearRect(x - size / 2, y - size / 2, size, size);
        }
        if (val.toString().length === 1) {
            fontSize = size / 1.5;
        }
        else if (val.toString().length === 2) {
            fontSize = size / 1.8;
        }
        else {
            fontSize = size / 2.0;
        }
        ctx.font = "bold " + fontSize + "px Tahoma";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(val.toString(), x, y + 2);
        ctx.restore();
    };
    return TextMarkup;
}(Markup));

var SquareMarkup = /** @class */ (function (_super) {
    tslib.__extends(SquareMarkup, _super);
    function SquareMarkup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquareMarkup.prototype.draw = function () {
        var _a = this, ctx = _a.ctx, x = _a.x, y = _a.y, s = _a.s, ki = _a.ki;
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 2;
        var size = s * 0.55;
        if (ki === 1) {
            ctx.strokeStyle = '#fff';
        }
        else if (ki === -1) {
            ctx.strokeStyle = '#000';
        }
        else {
            size = s * 0.7;
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 3;
        }
        ctx.rect(x - size / 2, y - size / 2, size, size);
        ctx.stroke();
        ctx.restore();
    };
    return SquareMarkup;
}(Markup));

var TriangleMarkup = /** @class */ (function (_super) {
    tslib.__extends(TriangleMarkup, _super);
    function TriangleMarkup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleMarkup.prototype.draw = function () {
        var _a = this, ctx = _a.ctx, x = _a.x, y = _a.y, s = _a.s, ki = _a.ki;
        var radius = s * 0.5;
        var size = radius * 0.75;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x - size * Math.cos(0.523), y + size * Math.sin(0.523));
        ctx.lineTo(x + size * Math.cos(0.523), y + size * Math.sin(0.523));
        ctx.lineWidth = 2;
        if (ki === 1) {
            ctx.strokeStyle = '#fff';
        }
        else if (ki === -1) {
            ctx.strokeStyle = '#000';
        }
        else {
            ctx.lineWidth = 3;
            size = radius * 0.7;
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    };
    return TriangleMarkup;
}(Markup));

var config = {};
var _a = mathjs.create({ meanDependencies: mathjs.meanDependencies, stdDependencies: mathjs.stdDependencies }, config), std = _a.std, mean = _a.mean;
// const devicePixelRatio = window.devicePixelRatio;
var devicePixelRatio = 1.0;
if (typeof window !== 'undefined') {
    devicePixelRatio = window.devicePixelRatio;
    // browser code
}
var images = {};
function preload(urls, done) {
    var loaded = 0;
    var imageLoaded = function () {
        loaded++;
        if (loaded === urls.length) {
            done();
        }
    };
    for (var i = 0; i < urls.length; i++) {
        if (!images[urls[i]]) {
            images[urls[i]] = new Image();
            images[urls[i]].src = urls[i];
            images[urls[i]].onload = function () {
                imageLoaded();
            };
            images[urls[i]].onerror = function () {
                imageLoaded();
            };
        }
    }
}
var GhostBan = /** @class */ (function () {
    function GhostBan(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.defaultOptions = {
            boardSize: 19,
            padding: 10,
            extend: 3,
            interactive: false,
            coordinate: true,
            theme: exports.Theme.BlackAndWhite,
            background: false,
        };
        this.clearAllCanvas = function () {
            _this.clearBoard();
            _this.clearCanvas();
            _this.clearCursorCanvas();
            _this.clearAnalysisCanvas();
        };
        this.clearBoard = function () {
            if (!_this.board)
                return;
            var ctx = _this.board.getContext('2d');
            if (ctx) {
                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                // Will always clear the right space
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.restore();
            }
        };
        this.clearCanvas = function () {
            if (!_this.canvas)
                return;
            var ctx = _this.canvas.getContext('2d');
            if (ctx) {
                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                ctx.restore();
            }
        };
        this.clearMarkupCanvas = function () {
            if (!_this.markupCanvas)
                return;
            var ctx = _this.markupCanvas.getContext('2d');
            if (ctx) {
                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, _this.markupCanvas.width, _this.markupCanvas.height);
                ctx.restore();
            }
        };
        this.clearCursorCanvas = function () {
            if (!_this.cursorCanvas)
                return;
            var ctx = _this.cursorCanvas.getContext('2d');
            if (ctx) {
                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, _this.cursorCanvas.width, _this.cursorCanvas.height);
                ctx.restore();
            }
        };
        this.clearAnalysisCanvas = function () {
            if (!_this.analysisCanvas)
                return;
            var ctx = _this.analysisCanvas.getContext('2d');
            if (ctx) {
                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, _this.analysisCanvas.width, _this.analysisCanvas.height);
                ctx.restore();
            }
        };
        this.drawAnalysis = function (analysis) {
            var canvas = _this.analysisCanvas;
            var _a = _this.options.theme, theme = _a === void 0 ? exports.Theme.BlackAndWhite : _a;
            if (!canvas || !analysis)
                return;
            var ctx = canvas.getContext('2d');
            if (!ctx)
                return;
            _this.clearAnalysisCanvas();
            var rootInfo = analysis.rootInfo;
            var uts = analysis.moveInfos.map(function (m) { return m.utility; });
            var utsZ = uts.map(function (v) {
                return (v - mean(uts)) / std.apply(void 0, tslib.__spreadArray([], tslib.__read(uts), false));
            });
            var utsNorm = utsZ.map(function (v) {
                var max = Math.max.apply(Math, tslib.__spreadArray([], tslib.__read(uts), false));
                var min = Math.min.apply(Math, tslib.__spreadArray([], tslib.__read(uts), false));
                return (v - min) / (max - min);
            });
            analysis.moveInfos.forEach(function (m, index) {
                if (m.move === 'pass')
                    return;
                var idObj = JSON.parse(analysis.id);
                var _a = reverseOffset(_this.mat, idObj.bx, idObj.by), ox = _a.x, oy = _a.y;
                var _b = a1ToPos(m.move), i = _b.x, j = _b.y;
                i += ox;
                j += oy;
                if (_this.mat[i][j] !== 0)
                    return;
                var _c = _this.calcSpaceAndPadding(), space = _c.space, scaledPadding = _c.scaledPadding;
                var x = scaledPadding + i * space;
                var y = scaledPadding + j * space;
                var ratio = 0.46;
                ctx.save();
                if (theme !== exports.Theme.Subdued &&
                    theme !== exports.Theme.BlackAndWhite &&
                    theme !== exports.Theme.Flat) {
                    ctx.shadowOffsetX = 3;
                    ctx.shadowOffsetY = 3;
                    ctx.shadowColor = '#555';
                    ctx.shadowBlur = 8;
                }
                else {
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    ctx.shadowColor = '#fff';
                    ctx.shadowBlur = 0;
                }
                var stone = new AnalysisPoint(ctx, x, y, space * ratio, rootInfo, m, utsNorm[index], true);
                stone.draw();
                ctx.restore();
            });
            // for (let i = 0; i < matrix.length; i++) {
            //   for (let j = 0; j < matrix[i].length; j++) {
            //     const value = matrix[i][j];
            //     if (value !== 0) {
            //       const ctx = canvas.getContext('2d');
            //       if (ctx) {
            //         const {space, scaledPadding} = this.calcSpaceAndPadding();
            //         const x = scaledPadding + i * space;
            //         const y = scaledPadding + j * space;
            //         const ratio = 0.46;
            //         ctx.save();
            //         if (
            //           theme !== Theme.Subdued &&
            //           theme !== Theme.BlackAndWhite &&
            //           theme !== Theme.Flat
            //         ) {
            //           ctx.shadowOffsetX = 3;
            //           ctx.shadowOffsetY = 3;
            //           ctx.shadowColor = '#555';
            //           ctx.shadowBlur = 8;
            //         }
            //         let stone;
            //         switch (theme) {
            //           case Theme.BlackAndWhite:
            //           case Theme.Flat: {
            //             stone = new BwStone(ctx, x, y, space * ratio, value);
            //             break;
            //           }
            //           default: {
            //             const blacks = RESOURCES[theme].blacks.map(i => images[i]);
            //             const whites = RESOURCES[theme].whites.map(i => images[i]);
            //             const r = space * ratio;
            //             const mod = i + 10 + j;
            //             stone = new ImageStone(
            //               ctx,
            //               x,
            //               y,
            //               r,
            //               value,
            //               mod,
            //               blacks,
            //               whites
            //             );
            //           }
            //         }
            //         stone.draw();
            //         ctx.restore();
            //       }
            //     }
            //   }
            // }
        };
        this.drawMarkup = function (mat, markup) {
            if (mat === void 0) { mat = _this.mat; }
            if (markup === void 0) { markup = _this.markup; }
            // console.log('markup', markup);
            var canvas = _this.markupCanvas;
            if (canvas) {
                _this.clearMarkupCanvas();
                for (var i = 0; i < markup.length; i++) {
                    for (var j = 0; j < markup[i].length; j++) {
                        var value = markup[i][j];
                        if (value !== null && value !== '') {
                            var _a = _this.calcSpaceAndPadding(), space = _a.space, scaledPadding = _a.scaledPadding;
                            var x = scaledPadding + i * space;
                            var y = scaledPadding + j * space;
                            var ki = mat[i][j];
                            var markup_1 = void 0;
                            var ctx = canvas.getContext('2d');
                            if (ctx) {
                                switch (value) {
                                    case exports.Markup.Circle:
                                    case exports.Markup.Current: {
                                        markup_1 = new CircleMarkup(ctx, x, y, space, ki);
                                        break;
                                    }
                                    case exports.Markup.Square: {
                                        markup_1 = new SquareMarkup(ctx, x, y, space, ki);
                                        break;
                                    }
                                    case exports.Markup.Triangle: {
                                        markup_1 = new TriangleMarkup(ctx, x, y, space, ki);
                                        break;
                                    }
                                    case exports.Markup.Cross: {
                                        markup_1 = new CrossMarkup(ctx, x, y, space, ki);
                                        break;
                                    }
                                    default: {
                                        if (value !== '') {
                                            markup_1 = new TextMarkup(ctx, x, y, space, ki, value);
                                        }
                                        break;
                                    }
                                }
                                markup_1 === null || markup_1 === void 0 ? void 0 : markup_1.draw();
                            }
                        }
                    }
                }
            }
        };
        this.drawBoard = function () {
            _this.clearBoard();
            _this.drawBan();
            _this.drawBoardLine();
            _this.drawStars();
            if (_this.options.coordinate) {
                _this.drawCoordinate();
            }
        };
        this.drawBan = function () {
            var board = _this.board;
            var theme = _this.options.theme;
            if (board) {
                board.style.borderRadius = '2px';
                var ctx = board.getContext('2d');
                if (ctx) {
                    if (theme === exports.Theme.BlackAndWhite) {
                        board.style.boxShadow = '0px 0px 0px #000000';
                        ctx.fillStyle = '#FFFFFF';
                        ctx.fillRect(0, 0, board.width, board.height);
                    }
                    else if (theme === exports.Theme.Flat) {
                        ctx.fillStyle = '#ECB55A';
                        ctx.fillRect(0, 0, board.width, board.height);
                    }
                    else if (theme === exports.Theme.Walnut &&
                        RESOURCES[theme].board !== undefined) {
                        var boardUrl = RESOURCES[theme].board || '';
                        var boardRes = images[boardUrl];
                        if (boardRes) {
                            ctx.drawImage(boardRes, 0, 0, board.width, board.height);
                        }
                    }
                    else {
                        var boardUrl = RESOURCES[theme].board || '';
                        var image = images[boardUrl];
                        if (image) {
                            var pattern = ctx.createPattern(image, 'repeat');
                            if (pattern) {
                                ctx.fillStyle = pattern;
                                ctx.fillRect(0, 0, board.width, board.height);
                            }
                        }
                    }
                }
            }
        };
        this.drawBoardLine = function () {
            if (!_this.board)
                return;
            var visibleArea = _this.visibleArea;
            var ctx = _this.board.getContext('2d');
            if (ctx) {
                var _a = _this.calcSpaceAndPadding(), space = _a.space, scaledPadding = _a.scaledPadding;
                ctx.lineWidth = 1 * devicePixelRatio;
                ctx.fillStyle = '#000000';
                ctx.beginPath();
                for (var i = visibleArea[0][0]; i <= visibleArea[0][1]; i++) {
                    ctx.moveTo(i * space + scaledPadding, scaledPadding + visibleArea[1][0] * space);
                    ctx.lineTo(i * space + scaledPadding, space * visibleArea[1][1] + scaledPadding);
                }
                for (var i = visibleArea[1][0]; i <= visibleArea[1][1]; i++) {
                    ctx.moveTo(visibleArea[0][0] * space + scaledPadding, i * space + scaledPadding);
                    ctx.lineTo(visibleArea[0][1] * space + scaledPadding, i * space + scaledPadding);
                }
                ctx.stroke();
            }
        };
        this.drawStars = function (visibleArea) {
            if (visibleArea === void 0) { visibleArea = [
                [0, 18],
                [0, 18],
            ]; }
            if (!_this.canvas)
                return;
            var ctx = _this.canvas.getContext('2d');
            if (ctx) {
                var _a = _this.calcSpaceAndPadding(), space_1 = _a.space, scaledPadding_1 = _a.scaledPadding;
                // Drawing star
                ctx.stroke();
                [3, 9, 15].forEach(function (i) {
                    [3, 9, 15].forEach(function (j) {
                        if (i > visibleArea[0][0] &&
                            i < visibleArea[0][1] &&
                            j > visibleArea[1][0] &&
                            j < visibleArea[1][1]) {
                            ctx.beginPath();
                            ctx.arc(i * space_1 + scaledPadding_1, j * space_1 + scaledPadding_1, 3 * devicePixelRatio, 0, 2 * Math.PI, true);
                            ctx.fillStyle = 'black';
                            ctx.fill();
                        }
                    });
                });
            }
        };
        this.drawCoordinate = function (visibleArea) {
            if (visibleArea === void 0) { visibleArea = [
                [0, 18],
                [0, 18],
            ]; }
            var board = _this.board;
            if (!board)
                return;
            var ctx = board.getContext('2d');
            var _a = _this.calcSpaceAndPadding(), space = _a.space, scaledPadding = _a.scaledPadding;
            if (ctx) {
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#000000';
                ctx.font = "bold " + space / 2.8 + "px Helvetica";
                var offset_1 = space / 3;
                A1_LETTERS.forEach(function (l, index) {
                    var x = space * index + scaledPadding;
                    if (index >= visibleArea[0][0] && index <= visibleArea[0][1]) {
                        ctx.fillText(l, x, 0 + offset_1);
                        ctx.fillText(l, x, board.height - offset_1);
                    }
                });
                A1_NUMBERS.forEach(function (l, index) {
                    var y = space * index + scaledPadding;
                    if (index >= visibleArea[1][0] && index <= visibleArea[1][1]) {
                        ctx.fillText(l.toString(), offset_1, y);
                        ctx.fillText(l.toString(), board.width - offset_1, y);
                    }
                });
            }
        };
        this.calcSpaceAndPadding = function (canvas) {
            if (canvas === void 0) { canvas = _this.canvas; }
            var space = 0;
            var scaledPadding = 0;
            if (canvas) {
                var _a = _this.options, padding = _a.padding, boardSize = _a.boardSize;
                // scaledPadding = padding * devicePixelRatio;
                scaledPadding = padding;
                space = (canvas.width - padding * 2) / boardSize;
                scaledPadding = scaledPadding + space / 2;
            }
            return { space: space, scaledPadding: scaledPadding };
        };
        this.drawCursor = function () {
            var canvas = _this.cursorCanvas;
            if (canvas) {
                _this.clearCursorCanvas();
                var padding = _this.options.padding;
                var ctx = canvas.getContext('2d');
                var space = _this.calcSpaceAndPadding().space;
                var visibleArea = _this.visibleArea;
                var _a = tslib.__read(_this.cursor, 2), idx = _a[0], idy = _a[1];
                if (idx < visibleArea[0][0] || idx > visibleArea[0][1])
                    return;
                if (idy < visibleArea[1][0] || idy > visibleArea[1][1])
                    return;
                var x = idx * space + space / 2 + padding;
                var y = idy * space + space / 2 + padding;
                if (ctx) {
                    var size = space * 0.4;
                    if (size > 0) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(x, y, size, 0, 2 * Math.PI, true);
                        ctx.lineWidth = 1;
                        ctx.globalAlpha = 0.6;
                        if (_this._turn === exports.Ki.Black) {
                            ctx.strokeStyle = '#000';
                            ctx.fillStyle = '#000';
                        }
                        else if (_this._turn === exports.Ki.White) {
                            ctx.strokeStyle = '#FFF';
                            ctx.fillStyle = '#FFF';
                        }
                        ctx.fill();
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                        ctx.restore();
                    }
                }
            }
        };
        this.drawStones = function (mat) {
            if (mat === void 0) { mat = _this.mat; }
            var canvas = _this.canvas;
            var _a = _this.options.theme, theme = _a === void 0 ? exports.Theme.BlackAndWhite : _a;
            if (canvas) {
                for (var i = 0; i < mat.length; i++) {
                    for (var j = 0; j < mat[i].length; j++) {
                        var value = mat[i][j];
                        if (value !== 0) {
                            var ctx = canvas.getContext('2d');
                            if (ctx) {
                                var _b = _this.calcSpaceAndPadding(), space = _b.space, scaledPadding = _b.scaledPadding;
                                var x = scaledPadding + i * space;
                                var y = scaledPadding + j * space;
                                var ratio = 0.45;
                                ctx.save();
                                if (theme !== exports.Theme.Subdued &&
                                    theme !== exports.Theme.BlackAndWhite &&
                                    theme !== exports.Theme.Flat) {
                                    ctx.shadowOffsetX = 3;
                                    ctx.shadowOffsetY = 3;
                                    ctx.shadowColor = '#555';
                                    ctx.shadowBlur = 8;
                                }
                                else {
                                    ctx.shadowOffsetX = 0;
                                    ctx.shadowOffsetY = 0;
                                    ctx.shadowBlur = 0;
                                }
                                var stone = void 0;
                                switch (theme) {
                                    case exports.Theme.BlackAndWhite:
                                    case exports.Theme.Flat: {
                                        stone = new BwStone(ctx, x, y, space * ratio, value);
                                        break;
                                    }
                                    default: {
                                        var blacks = RESOURCES[theme].blacks.map(function (i) { return images[i]; });
                                        var whites = RESOURCES[theme].whites.map(function (i) { return images[i]; });
                                        var r = space * ratio;
                                        var mod = i + 10 + j;
                                        stone = new ImageStone(ctx, x, y, r, value, mod, blacks, whites);
                                    }
                                }
                                stone.draw();
                                ctx.restore();
                            }
                        }
                    }
                }
            }
        };
        this.options = tslib.__assign(tslib.__assign({}, this.defaultOptions), options);
        this.mat = zeros([19, 19]);
        this.markup = empty([19, 19]);
        this._turn = exports.Ki.Black;
        this.cursor = [18, 0];
        this.cursorPos = new DOMPoint();
        this.maxhv = this.options.boardSize;
        this.transMat = new DOMMatrix();
        this.analysis = null;
        this.visibleArea = [
            [0, 18],
            [0, 18],
        ];
    }
    GhostBan.prototype.setTurn = function (turn) {
        this._turn = turn;
    };
    GhostBan.prototype.resize = function () {
        if (!this.canvas ||
            !this.cursorCanvas ||
            !this.dom ||
            !this.board ||
            !this.markupCanvas ||
            !this.analysisCanvas)
            return;
        var _a = this, board = _a.board, canvas = _a.canvas, markupCanvas = _a.markupCanvas, cursorCanvas = _a.cursorCanvas, analysisCanvas = _a.analysisCanvas;
        var _b = this.options, size = _b.size, zoom = _b.zoom;
        if (size) {
            board.width = size * devicePixelRatio;
            board.height = size * devicePixelRatio;
            canvas.width = size * devicePixelRatio;
            canvas.height = size * devicePixelRatio;
            markupCanvas.width = size * devicePixelRatio;
            markupCanvas.height = size * devicePixelRatio;
            cursorCanvas.width = size * devicePixelRatio;
            cursorCanvas.height = size * devicePixelRatio;
            analysisCanvas.width = size * devicePixelRatio;
            analysisCanvas.height = size * devicePixelRatio;
        }
        else {
            var clientWidth = this.dom.clientWidth;
            board.style.width = clientWidth + 'px';
            board.style.height = clientWidth + 'px';
            board.width = Math.floor(clientWidth * devicePixelRatio);
            board.height = Math.floor(clientWidth * devicePixelRatio);
            canvas.style.width = clientWidth + 'px';
            canvas.style.height = clientWidth + 'px';
            canvas.width = Math.floor(clientWidth * devicePixelRatio);
            canvas.height = Math.floor(clientWidth * devicePixelRatio);
            markupCanvas.style.width = clientWidth + 'px';
            markupCanvas.style.height = clientWidth + 'px';
            markupCanvas.width = Math.floor(clientWidth * devicePixelRatio);
            markupCanvas.height = Math.floor(clientWidth * devicePixelRatio);
            cursorCanvas.style.width = clientWidth + 'px';
            cursorCanvas.style.height = clientWidth + 'px';
            cursorCanvas.width = Math.floor(clientWidth * devicePixelRatio);
            cursorCanvas.height = Math.floor(clientWidth * devicePixelRatio);
            analysisCanvas.style.width = clientWidth + 'px';
            analysisCanvas.style.height = clientWidth + 'px';
            analysisCanvas.width = Math.floor(clientWidth * devicePixelRatio);
            analysisCanvas.height = Math.floor(clientWidth * devicePixelRatio);
        }
        this.calcBoardVisibleArea(zoom || false);
        this.render();
    };
    GhostBan.prototype.init = function (dom) {
        var _a, _b, _c, _d, _e;
        this.mat = zeros([19, 19]);
        this.markup = empty([19, 19]);
        this.transMat = new DOMMatrix();
        var board = document.createElement('canvas');
        board.style.position = 'absolute';
        board.id = 'ghostban-board';
        this.board = board;
        var canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.id = 'ghostban-canvas';
        this.canvas = canvas;
        var markupCanvas = document.createElement('canvas');
        markupCanvas.style.position = 'absolute';
        markupCanvas.id = 'ghostban-markup';
        markupCanvas.style.pointerEvents = 'none';
        this.markupCanvas = markupCanvas;
        var cursorCanvas = document.createElement('canvas');
        cursorCanvas.style.position = 'absolute';
        cursorCanvas.id = 'ghostban-cursor';
        this.cursorCanvas = cursorCanvas;
        var analysisCanvas = document.createElement('canvas');
        analysisCanvas.style.position = 'absolute';
        analysisCanvas.style.pointerEvents = 'none';
        analysisCanvas.id = 'ghostban-analysis';
        this.analysisCanvas = analysisCanvas;
        this.dom = dom;
        (_a = dom.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = dom.firstChild) === null || _b === void 0 ? void 0 : _b.remove();
        (_c = dom.firstChild) === null || _c === void 0 ? void 0 : _c.remove();
        (_d = dom.firstChild) === null || _d === void 0 ? void 0 : _d.remove();
        (_e = dom.firstChild) === null || _e === void 0 ? void 0 : _e.remove();
        dom.appendChild(board);
        dom.appendChild(canvas);
        dom.appendChild(markupCanvas);
        dom.appendChild(cursorCanvas);
        dom.appendChild(analysisCanvas);
        this.resize();
        this.renderInteractive();
    };
    GhostBan.prototype.setOptions = function (options) {
        this.options = tslib.__assign(tslib.__assign({}, this.options), options);
    };
    GhostBan.prototype.setMat = function (mat) {
        this.mat = mat;
    };
    GhostBan.prototype.setMarkup = function (markup) {
        this.markup = markup;
    };
    GhostBan.prototype.renderInteractive = function () {
        var _this = this;
        var canvas = this.cursorCanvas;
        if (!canvas)
            return;
        var padding = this.options.padding;
        var space = this.calcSpaceAndPadding().space;
        var setCursorWithRender = function (domPoint) {
            var point = _this.transMat.inverse().transformPoint(domPoint);
            var idx = Math.round((point.x - padding + space / 2) / space);
            var idy = Math.round((point.y - padding + space / 2) / space);
            var xx = idx * space;
            var yy = idy * space;
            var p = _this.transMat.transformPoint(new DOMPoint(xx, yy));
            _this.cursorPos = p;
            _this.cursor = [idx - 1, idy - 1];
            _this.drawCursor();
        };
        var onTouchMove = function (e) {
            e.preventDefault();
            var rect = canvas.getBoundingClientRect();
            var touches = e.changedTouches;
            var point = new DOMPoint((touches[0].clientX - rect.left) * devicePixelRatio, (touches[0].clientY - rect.top) * devicePixelRatio);
            setCursorWithRender(point);
        };
        var onMouseMove = function (e) {
            e.preventDefault();
            var point = new DOMPoint(e.offsetX * devicePixelRatio, e.offsetY * devicePixelRatio);
            setCursorWithRender(point);
        };
        if (this.options.interactive) {
            canvas.addEventListener('mousemove', onMouseMove);
            canvas.addEventListener('touchmove', onTouchMove);
            canvas.addEventListener('mouseout', onMouseMove);
        }
        else {
            canvas.removeEventListener('mousemove', onMouseMove);
            canvas.removeEventListener('touchmove', onTouchMove);
            canvas.removeEventListener('mouseout', onMouseMove);
        }
    };
    GhostBan.prototype.setAnalysis = function (analysis) {
        var _this = this;
        if (!analysis)
            return;
        this.analysis = analysis;
        setTimeout(function () {
            _this.drawAnalysis(analysis);
        }, 0);
    };
    GhostBan.prototype.setTheme = function (theme) {
        var _this = this;
        if (!RESOURCES[theme])
            return;
        var _a = RESOURCES[theme], board = _a.board, blacks = _a.blacks, whites = _a.whites;
        this.options.theme = theme;
        preload(lodash.compact(tslib.__spreadArray(tslib.__spreadArray([board], tslib.__read(blacks), false), tslib.__read(whites), false)), function () {
            _this.drawBoard();
            _this.render();
        });
        this.drawBoard();
        this.render();
    };
    GhostBan.prototype.calcBoardVisibleArea = function (zoom) {
        var _a = this, canvas = _a.canvas, analysisCanvas = _a.analysisCanvas, board = _a.board, cursorCanvas = _a.cursorCanvas, markupCanvas = _a.markupCanvas;
        var _b = this.options, boardSize = _b.boardSize, extend = _b.extend;
        var _c = calcVisibleArea(this.mat, boardSize, extend), zoomedVisibleArea = _c.visibleArea, center = _c.center;
        var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
        var boardCtx = board === null || board === void 0 ? void 0 : board.getContext('2d');
        var cursorCtx = cursorCanvas === null || cursorCanvas === void 0 ? void 0 : cursorCanvas.getContext('2d');
        var markupCtx = markupCanvas === null || markupCanvas === void 0 ? void 0 : markupCanvas.getContext('2d');
        var analysisCtx = analysisCanvas === null || analysisCanvas === void 0 ? void 0 : analysisCanvas.getContext('2d');
        var visibleArea = zoom
            ? zoomedVisibleArea
            : [
                [0, 18],
                [0, 18],
            ];
        this.visibleArea = visibleArea;
        if (zoom) {
            var space = this.calcSpaceAndPadding().space;
            var zoomedBoardSize = visibleArea[0][1] - visibleArea[0][0] + 1;
            var scale = 1 / (zoomedBoardSize / boardSize);
            var offsetX = 0;
            var offsetY = 0;
            // const offset = this.options.padding;
            var offset = this.options.padding * scale;
            switch (center) {
                case exports.Center.TopLeft:
                    break;
                case exports.Center.TopRight:
                    offsetX = visibleArea[0][0] * space * scale + offset;
                    break;
                case exports.Center.BottomLeft:
                    offsetY = visibleArea[1][0] * space * scale + offset;
                    break;
                case exports.Center.BottomRight:
                    offsetX = visibleArea[0][0] * space * scale + offset;
                    offsetY = visibleArea[1][0] * space * scale + offset;
                    break;
            }
            this.transMat = new DOMMatrix();
            this.transMat.translateSelf(-offsetX, -offsetY);
            this.transMat.scaleSelf(scale, scale);
            ctx === null || ctx === void 0 ? void 0 : ctx.setTransform(this.transMat);
            boardCtx === null || boardCtx === void 0 ? void 0 : boardCtx.setTransform(this.transMat);
            analysisCtx === null || analysisCtx === void 0 ? void 0 : analysisCtx.setTransform(this.transMat);
            cursorCtx === null || cursorCtx === void 0 ? void 0 : cursorCtx.setTransform(this.transMat);
            markupCtx === null || markupCtx === void 0 ? void 0 : markupCtx.setTransform(this.transMat);
        }
        else {
            ctx === null || ctx === void 0 ? void 0 : ctx.resetTransform();
            boardCtx === null || boardCtx === void 0 ? void 0 : boardCtx.resetTransform();
            analysisCtx === null || analysisCtx === void 0 ? void 0 : analysisCtx.resetTransform();
            cursorCtx === null || cursorCtx === void 0 ? void 0 : cursorCtx.resetTransform();
            markupCtx === null || markupCtx === void 0 ? void 0 : markupCtx.resetTransform();
        }
    };
    GhostBan.prototype.render = function () {
        this.clearAllCanvas();
        this.drawBoard();
        this.drawStones();
        this.drawMarkup();
    };
    return GhostBan;
}());

var MOVE_PROP_LIST = [
    'B',
    // KO is standard in move list but usually be used for komi in gameinfo props
    // 'KO',
    'MN',
    'W',
];
var SETUP_PROP_LIST = [
    'AB',
    'AE',
    'AW',
    //TODO: PL is a value of color type
    // 'PL'
];
var NODE_ANNOTATION_PROP_LIST = [
    'A',
    'C',
    'DM',
    'GB',
    'GW',
    'HO',
    'N',
    'UC',
    'V',
];
var MOVE_ANNOTATION_PROP_LIST = [
    'BM',
    'DO',
    'IT',
    // TE is standard in move annotation for tesuji
    // 'TE',
];
var MARKUP_PROP_LIST = [
    'AR',
    'CR',
    'LB',
    'LN',
    'MA',
    'SL',
    'SQ',
    'TR',
];
var ROOT_PROP_LIST = ['AP', 'CA', 'FF', 'GM', 'ST', 'SZ'];
var GAME_INFO_PROP_LIST = [
    //TE Non-standard
    'TE',
    //KO Non-standard
    'KO',
    'AN',
    'BR',
    'BT',
    'CP',
    'DT',
    'EV',
    'GN',
    'GC',
    'ON',
    'OT',
    'PB',
    'PC',
    'PW',
    'RE',
    'RO',
    'RU',
    'SO',
    'TM',
    'US',
    'WR',
    'WT',
];
var TIMING_PROP_LIST = ['BL', 'OB', 'OW', 'WL'];
var MISCELLANEOUS_PROP_LIST = ['FG', 'PM', 'VW'];
var CUSTOM_PROP_LIST = ['PI', 'PAI', 'NID'];
var LIST_OF_POINTS_PROP = ['AB', 'AE', 'AW'];
var TOKEN_REGEX = new RegExp(/([A-Z]*)\[([\s\S]*?)\]/);
var SgfPropBase = /** @class */ (function () {
    function SgfPropBase(token, value, values) {
        this.token = token;
        this.value = value;
        this.values = values || [value];
        this.type = '-';
    }
    SgfPropBase.prototype.toString = function () {
        return "" + this.token + this.values.map(function (v) { return "[" + v + "]"; }).join('');
    };
    return SgfPropBase;
}());
var MoveProp = /** @class */ (function (_super) {
    tslib.__extends(MoveProp, _super);
    function MoveProp(token, value, values) {
        var _this = _super.call(this, token, value, values) || this;
        _this.type = 'move';
        return _this;
    }
    MoveProp.from = function (str) {
        var match = str.match(/([A-Z]*)\[([\s\S]*?)\]/);
        if (match) {
            var token = match[1];
            var val = match[2];
            return new MoveProp(token, val);
        }
        return new MoveProp('', '');
    };
    return MoveProp;
}(SgfPropBase));
var SetupProp = /** @class */ (function (_super) {
    tslib.__extends(SetupProp, _super);
    function SetupProp(token, value, values) {
        var _this = _super.call(this, token, value, values) || this;
        _this.type = 'setup';
        return _this;
    }
    SetupProp.from = function (str) {
        // console.log('str', str);
        var tokenMatch = str.match(TOKEN_REGEX);
        var valMatches = matchAll__default["default"](str, /\[([\s\S]*?)\]/g);
        var token = '';
        var vals = tslib.__spreadArray([], tslib.__read(valMatches), false).map(function (m) { return m[1]; });
        // console.log('valMatches', [...valMatches]);
        // console.log('vals', vals);
        if (tokenMatch)
            token = tokenMatch[1];
        return new SetupProp(token, vals.join(','), vals);
    };
    return SetupProp;
}(SgfPropBase));
var NodeAnnotationProp = /** @class */ (function (_super) {
    tslib.__extends(NodeAnnotationProp, _super);
    function NodeAnnotationProp(token, value) {
        var _this = _super.call(this, token, value) || this;
        _this.type = 'node-annotation';
        return _this;
    }
    NodeAnnotationProp.from = function (str) {
        var match = str.match(/([A-Z]*)\[([\s\S]*?)\]/);
        if (match) {
            var token = match[1];
            var val = match[2];
            return new NodeAnnotationProp(token, val);
        }
        return new NodeAnnotationProp('', '');
    };
    return NodeAnnotationProp;
}(SgfPropBase));
var MoveAnnotationProp = /** @class */ (function (_super) {
    tslib.__extends(MoveAnnotationProp, _super);
    function MoveAnnotationProp(token, value) {
        var _this = _super.call(this, token, value) || this;
        _this.type = 'move-annotation';
        return _this;
    }
    MoveAnnotationProp.from = function (str) {
        var match = str.match(/([A-Z]*)\[([\s\S]*?)\]/);
        if (match) {
            var token = match[1];
            var val = match[2];
            return new MoveAnnotationProp(token, val);
        }
        return new MoveAnnotationProp('', '');
    };
    return MoveAnnotationProp;
}(SgfPropBase));
var AnnotationProp = /** @class */ (function (_super) {
    tslib.__extends(AnnotationProp, _super);
    function AnnotationProp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnnotationProp;
}(SgfPropBase));
var MarkupProp = /** @class */ (function (_super) {
    tslib.__extends(MarkupProp, _super);
    function MarkupProp(token, value) {
        var _this = _super.call(this, token, value) || this;
        _this.type = 'markup';
        return _this;
    }
    MarkupProp.from = function (str) {
        var match = str.match(/([A-Z]*)\[([\s\S]*?)\]/);
        if (match) {
            var token = match[1];
            var val = match[2];
            return new MarkupProp(token, val);
        }
        return new MarkupProp('', '');
    };
    return MarkupProp;
}(SgfPropBase));
var RootProp = /** @class */ (function (_super) {
    tslib.__extends(RootProp, _super);
    function RootProp(token, value) {
        var _this = _super.call(this, token, value) || this;
        _this.type = 'root';
        return _this;
    }
    RootProp.from = function (str) {
        var match = str.match(/([A-Z]*)\[([\s\S]*?)\]/);
        if (match) {
            var token = match[1];
            var val = match[2];
            return new RootProp(token, val);
        }
        return new RootProp('', '');
    };
    return RootProp;
}(SgfPropBase));
var GameInfoProp = /** @class */ (function (_super) {
    tslib.__extends(GameInfoProp, _super);
    function GameInfoProp(token, value) {
        var _this = _super.call(this, token, value) || this;
        _this.type = 'game-info';
        return _this;
    }
    GameInfoProp.from = function (str) {
        var match = str.match(/([A-Z]*)\[([\s\S]*?)\]/);
        if (match) {
            var token = match[1];
            var val = match[2];
            return new GameInfoProp(token, val);
        }
        return new GameInfoProp('', '');
    };
    return GameInfoProp;
}(SgfPropBase));
var CustomProp = /** @class */ (function (_super) {
    tslib.__extends(CustomProp, _super);
    function CustomProp(token, value) {
        var _this = _super.call(this, token, value) || this;
        _this.type = 'custom';
        return _this;
    }
    CustomProp.from = function (str) {
        var match = str.match(/([A-Z]*)\[([\s\S]*?)\]/);
        if (match) {
            var token = match[1];
            var val = match[2];
            return new CustomProp(token, val);
        }
        return new CustomProp('', '');
    };
    return CustomProp;
}(SgfPropBase));
var TimingProp = /** @class */ (function (_super) {
    tslib.__extends(TimingProp, _super);
    function TimingProp(token, value) {
        var _this = _super.call(this, token, value) || this;
        _this.type = 'Timing';
        return _this;
    }
    return TimingProp;
}(SgfPropBase));
var MiscellaneousProp = /** @class */ (function (_super) {
    tslib.__extends(MiscellaneousProp, _super);
    function MiscellaneousProp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MiscellaneousProp;
}(SgfPropBase));

var Sgf = /** @class */ (function () {
    function Sgf() {
        this.NEW_NODE = ';';
        this.BRANCHING = ['(', ')'];
        this.PROPERTY = ['[', ']'];
        this.LIST_IDENTITIES = [
            'AW',
            'AB',
            'AE',
            'AR',
            'CR',
            'DD',
            'LB',
            'LN',
            'MA',
            'SL',
            'SQ',
            'TR',
            'VW',
            'TB',
            'TW',
        ];
        this.NODE_DELIMITERS = [this.NEW_NODE].concat(this.BRANCHING);
        this.tree = new TreeModel__default["default"]();
        this.root = null;
        this.node = null;
        this.currentNode = null;
        this.parentNode = null;
        this.nodeProps = new Map();
        this.sgf = '';
    }
    Sgf.prototype.fromRoot = function (root) {
        this.root = root;
        return this;
    };
    Sgf.prototype.nodeToString = function (node) {
        var _this = this;
        var content = '';
        node.walk(function (n) {
            var _a = n.model, rootProps = _a.rootProps, moveProps = _a.moveProps, customProps = _a.customProps, setupProps = _a.setupProps, markupProps = _a.markupProps, nodeAnnotationProps = _a.nodeAnnotationProps, moveAnnotationProps = _a.moveAnnotationProps, gameInfoProps = _a.gameInfoProps;
            var nodes = lodash.compact(tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(rootProps), false), tslib.__read(customProps), false), tslib.__read(moveProps), false), tslib.__read(getDeduplicatedProps(setupProps)), false), tslib.__read(getDeduplicatedProps(markupProps)), false), tslib.__read(gameInfoProps), false), tslib.__read(nodeAnnotationProps), false), tslib.__read(moveAnnotationProps), false));
            content += ';';
            nodes.forEach(function (n) {
                content += n.toString();
            });
            if (n.children.length > 1) {
                n.children.forEach(function (child) {
                    content += "(" + _this.nodeToString(child) + ")";
                });
            }
            return n.children.length < 2;
        });
        return content;
    };
    Sgf.prototype.toSgf = function () {
        return "(" + this.nodeToString(this.root) + ")";
    };
    Sgf.prototype.toSgfWithoutAnalysis = function () {
        var sgf = "(" + this.nodeToString(this.root) + ")";
        return lodash.replace(sgf, /](A\[.*?\])/g, ']');
    };
    Sgf.prototype.parse = function (sgf) {
        if (!sgf)
            return;
        // sgf = sgf.replace(/(\r\n|\n|\r)/gm, '');
        var nodeStart = 0;
        var counter = 0;
        var stack = [];
        var _loop_1 = function (i) {
            var c = sgf[i];
            if (this_1.NODE_DELIMITERS.includes(c)) {
                var content = sgf.slice(nodeStart, i);
                if (content !== '') {
                    var moveProps_1 = [];
                    var setupProps_1 = [];
                    var rootProps_1 = [];
                    var markupProps_1 = [];
                    var gameInfoProps_1 = [];
                    var nodeAnnotationProps_1 = [];
                    var moveAnnotationProps_1 = [];
                    var customProps_1 = [];
                    var matches = tslib.__spreadArray([], tslib.__read(matchAll__default["default"](content, 
                    // eslint-disable-next-line no-useless-escape
                    // RegExp(/([A-Z]+\[[a-z\[\]]*\]+)/, 'g')
                    // RegExp(/([A-Z]+\[.*?\]+)/, 'g')
                    // RegExp(/[A-Z]+(\[.*?\]){1,}/, 'g')
                    RegExp(/[A-Z]+(\[[\s\S]*?\]){1,}/, 'g'))), false);
                    matches.forEach(function (m) {
                        var tokenMatch = m[0].match(/([A-Z]+)\[/);
                        if (tokenMatch) {
                            var token = tokenMatch[1];
                            if (MOVE_PROP_LIST.includes(token))
                                moveProps_1.push(MoveProp.from(m[0]));
                            if (SETUP_PROP_LIST.includes(token))
                                setupProps_1.push(SetupProp.from(m[0]));
                            if (ROOT_PROP_LIST.includes(token))
                                rootProps_1.push(RootProp.from(m[0]));
                            if (MARKUP_PROP_LIST.includes(token))
                                markupProps_1.push(MarkupProp.from(m[0]));
                            if (GAME_INFO_PROP_LIST.includes(token))
                                gameInfoProps_1.push(GameInfoProp.from(m[0]));
                            if (NODE_ANNOTATION_PROP_LIST.includes(token)) {
                                nodeAnnotationProps_1.push(NodeAnnotationProp.from(m[0]));
                            }
                            if (MOVE_ANNOTATION_PROP_LIST.includes(token))
                                moveAnnotationProps_1.push(MoveAnnotationProp.from(m[0]));
                            if (CUSTOM_PROP_LIST.includes(token))
                                customProps_1.push(CustomProp.from(m[0]));
                        }
                    });
                    if (matches.length > 0) {
                        var sha = calcSHA(this_1.currentNode, moveProps_1, setupProps_1);
                        var node = this_1.tree.parse({
                            id: sha,
                            name: sha,
                            index: counter,
                            number: 0,
                            moveProps: moveProps_1,
                            setupProps: setupProps_1,
                            rootProps: rootProps_1,
                            markupProps: markupProps_1,
                            gameInfoProps: gameInfoProps_1,
                            nodeAnnotationProps: nodeAnnotationProps_1,
                            moveAnnotationProps: moveAnnotationProps_1,
                            customProps: customProps_1,
                        });
                        if (this_1.currentNode) {
                            this_1.currentNode.addChild(node);
                            node.model.number = getNodeNumber(node);
                            node.model.children = [node];
                        }
                        else {
                            this_1.root = node;
                            this_1.parentNode = node;
                        }
                        this_1.currentNode = node;
                        counter += 1;
                    }
                }
            }
            if (c === '(' && this_1.currentNode) {
                stack.push(this_1.currentNode);
            }
            if (c === ')' && stack.length > 0) {
                var node = stack.pop();
                if (node) {
                    this_1.currentNode = node;
                }
            }
            if (this_1.NODE_DELIMITERS.includes(c)) {
                nodeStart = i;
            }
        };
        var this_1 = this;
        for (var i = 0; i < sgf.length; i++) {
            _loop_1(i);
        }
    };
    return Sgf;
}());

var tree = new TreeModel__default["default"]();
var initRootProps = [
    'FF[4]',
    'GM[1]',
    'CA[UTF-8]',
    'AP[ghostgo:0.1.0]',
    'SZ[19]',
    'ST[0]',
].map(function (p) { return RootProp.from(p); });
var initialRoot = function () {
    return tree.parse({
        id: 'root',
        name: 0,
        index: 0,
        number: 0,
        rootProps: initRootProps,
        moveProps: [],
        setupProps: [],
        markupProps: [],
        gameInfoProps: [],
        nodeAnnotationProps: [],
        moveAnnotationProps: [],
        customProps: [],
    });
};

exports.AnnotationProp = AnnotationProp;
exports.CUSTOM_PROP_LIST = CUSTOM_PROP_LIST;
exports.CustomProp = CustomProp;
exports.GAME_INFO_PROP_LIST = GAME_INFO_PROP_LIST;
exports.GameInfoProp = GameInfoProp;
exports.GhostBan = GhostBan;
exports.LIST_OF_POINTS_PROP = LIST_OF_POINTS_PROP;
exports.MARKUP_PROP_LIST = MARKUP_PROP_LIST;
exports.MISCELLANEOUS_PROP_LIST = MISCELLANEOUS_PROP_LIST;
exports.MOVE_ANNOTATION_PROP_LIST = MOVE_ANNOTATION_PROP_LIST;
exports.MOVE_PROP_LIST = MOVE_PROP_LIST;
exports.MarkupProp = MarkupProp;
exports.MiscellaneousProp = MiscellaneousProp;
exports.MoveAnnotationProp = MoveAnnotationProp;
exports.MoveProp = MoveProp;
exports.NODE_ANNOTATION_PROP_LIST = NODE_ANNOTATION_PROP_LIST;
exports.NodeAnnotationProp = NodeAnnotationProp;
exports.ROOT_PROP_LIST = ROOT_PROP_LIST;
exports.RootProp = RootProp;
exports.SETUP_PROP_LIST = SETUP_PROP_LIST;
exports.SetupProp = SetupProp;
exports.Sgf = Sgf;
exports.SgfPropBase = SgfPropBase;
exports.TIMING_PROP_LIST = TIMING_PROP_LIST;
exports.TimingProp = TimingProp;
exports.a1ToIndex = a1ToIndex;
exports.a1ToPos = a1ToPos;
exports.a1ToSGF = a1ToSGF;
exports.calcBoardSize = calcBoardSize;
exports.calcCenter = calcCenter;
exports.calcMost = calcMost;
exports.calcOffset = calcOffset;
exports.calcSHA = calcSHA;
exports.calcScoreDiff = calcScoreDiff;
exports.calcScoreDiffText = calcScoreDiffText;
exports.calcVisibleArea = calcVisibleArea;
exports.calcWinrateDiff = calcWinrateDiff;
exports.calcWinrateDiffText = calcWinrateDiffText;
exports.canMove = canMove;
exports.convertStepsForAI = convertStepsForAI;
exports.convertStoneTypeToString = convertStoneTypeToString;
exports.empty = empty;
exports.getDeduplicatedProps = getDeduplicatedProps;
exports.getIndexFromAnalysis = getIndexFromAnalysis;
exports.getNodeNumber = getNodeNumber;
exports.initialRoot = initialRoot;
exports.isAnswerNode = isAnswerNode;
exports.isMainPath = isMainPath;
exports.isMoveNode = isMoveNode;
exports.isRooNode = isRooNode;
exports.isSetupNode = isSetupNode;
exports.matToListOfTuples = matToListOfTuples;
exports.matToPosition = matToPosition;
exports.move = move;
exports.nFormatter = nFormatter;
exports.pathToAiMoves = pathToAiMoves;
exports.pathToIndexes = pathToIndexes;
exports.pathToInitialStones = pathToInitialStones;
exports.posToSgf = posToSgf;
exports.reverseOffset = reverseOffset;
exports.reverseOffsetA1Move = reverseOffsetA1Move;
exports.round2 = round2;
exports.round3 = round3;
exports.sgfOffset = sgfOffset;
exports.sgfToA1 = sgfToA1;
exports.sgfToPos = sgfToPos;
exports.showKi = showKi;
exports.zeros = zeros;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTbGljZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9GaW5pdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvSW50ZWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2h1bmsuanMiLCIuLi9zcmMvdHlwZXMudHMiLCIuLi9zcmMvY29uc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2NvcmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIi4uL3NyYy9oZWxwZXIudHMiLCIuLi9zcmMvdXRpbHMudHMiLCIuLi9zcmMvc3RvbmVzL2Jhc2UudHMiLCIuLi9zcmMvc3RvbmVzL2J3U3RvbmUudHMiLCIuLi9zcmMvc3RvbmVzL2ltYWdlU3RvbmUudHMiLCIuLi9zcmMvc3RvbmVzL0FuYWx5c2lzUG9pbnQudHMiLCIuLi9zcmMvbWFya3Vwcy9NYXJrdXBCYXNlLnRzIiwiLi4vc3JjL21hcmt1cHMvQ2lyY2xlTWFya3VwLnRzIiwiLi4vc3JjL21hcmt1cHMvQ3Jvc3NNYXJrdXAudHMiLCIuLi9zcmMvbWFya3Vwcy9UZXh0TWFya3VwLnRzIiwiLi4vc3JjL21hcmt1cHMvU3F1YXJlTWFya3VwLnRzIiwiLi4vc3JjL21hcmt1cHMvVHJpYW5nbGVNYXJrdXAudHMiLCIuLi9zcmMvZ2hvc3RiYW4udHMiLCIuLi9zcmMvY29yZS9wcm9wcy50cyIsIi4uL3NyYy9jb3JlL3NnZi50cyIsIi4uL3NyYy9jb3JlL2hlbHBlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcbiIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSXRlcmF0ZWVDYWxsO1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYSBzaW5nbGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccy87XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbUVuZGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZEVuZEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIHJlV2hpdGVzcGFjZS50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1tZWRFbmRJbmRleDtcbiIsInZhciB0cmltbWVkRW5kSW5kZXggPSByZXF1aXJlKCcuL190cmltbWVkRW5kSW5kZXgnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUcmltO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIGJhc2VUcmltID0gcmVxdWlyZSgnLi9fYmFzZVRyaW0nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IGJhc2VUcmltKHZhbHVlKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJ2YXIgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX0lOVEVHRVIgPSAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwODtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTIuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvRmluaXRlKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b0Zpbml0ZShJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9GaW5pdGUoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvRmluaXRlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvRmluaXRlO1xuIiwidmFyIHRvRmluaXRlID0gcmVxdWlyZSgnLi90b0Zpbml0ZScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9pbnRlZ2VyKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvSW50ZWdlcigzLjIpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMuMicpO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKSxcbiAgICAgIHJlbWFpbmRlciA9IHJlc3VsdCAlIDE7XG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdCkgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvSW50ZWdlcjtcbiIsInZhciBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL19iYXNlU2xpY2UnKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vX2lzSXRlcmF0ZWVDYWxsJyksXG4gICAgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUNlaWwgPSBNYXRoLmNlaWwsXG4gICAgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBlbGVtZW50cyBzcGxpdCBpbnRvIGdyb3VwcyB0aGUgbGVuZ3RoIG9mIGBzaXplYC5cbiAqIElmIGBhcnJheWAgY2FuJ3QgYmUgc3BsaXQgZXZlbmx5LCB0aGUgZmluYWwgY2h1bmsgd2lsbCBiZSB0aGUgcmVtYWluaW5nXG4gKiBlbGVtZW50cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTFdIFRoZSBsZW5ndGggb2YgZWFjaCBjaHVua1xuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGNodW5rcy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jaHVuayhbJ2EnLCAnYicsICdjJywgJ2QnXSwgMik7XG4gKiAvLyA9PiBbWydhJywgJ2InXSwgWydjJywgJ2QnXV1cbiAqXG4gKiBfLmNodW5rKFsnYScsICdiJywgJ2MnLCAnZCddLCAzKTtcbiAqIC8vID0+IFtbJ2EnLCAnYicsICdjJ10sIFsnZCddXVxuICovXG5mdW5jdGlvbiBjaHVuayhhcnJheSwgc2l6ZSwgZ3VhcmQpIHtcbiAgaWYgKChndWFyZCA/IGlzSXRlcmF0ZWVDYWxsKGFycmF5LCBzaXplLCBndWFyZCkgOiBzaXplID09PSB1bmRlZmluZWQpKSB7XG4gICAgc2l6ZSA9IDE7XG4gIH0gZWxzZSB7XG4gICAgc2l6ZSA9IG5hdGl2ZU1heCh0b0ludGVnZXIoc2l6ZSksIDApO1xuICB9XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgaWYgKCFsZW5ndGggfHwgc2l6ZSA8IDEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG5hdGl2ZUNlaWwobGVuZ3RoIC8gc2l6ZSkpO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IGJhc2VTbGljZShhcnJheSwgaW5kZXgsIChpbmRleCArPSBzaXplKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaHVuaztcbiIsImV4cG9ydCB0eXBlIENvbnN1bWVkQW5hbHlzaXMgPSB7XG4gIHJlc3VsdHM6IEFuYWx5c2lzW107XG4gIHBhcmFtczogQW5hbHlzaXNQYXJhbXMgfCBudWxsO1xufTtcblxuZXhwb3J0IHR5cGUgQW5hbHlzaXMgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGlzRHVyaW5nU2VhcmNoOiBib29sZWFuO1xuICBtb3ZlSW5mb3M6IE1vdmVJbmZvW107XG4gIHJvb3RJbmZvOiBSb290SW5mbztcbiAgcG9saWN5OiBudW1iZXJbXTtcbiAgb3duZXJzaGlwOiBudW1iZXJbXTtcbiAgdHVybk51bWJlcjogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgQW5hbHlzaXNQYXJhbXMgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGluaXRpYWxQbGF5ZXI6IHN0cmluZztcbiAgbW92ZXM6IGFueVtdO1xuICBydWxlczogc3RyaW5nO1xuICBrb21pOiBzdHJpbmc7XG4gIGJvYXJkWFNpemU6IG51bWJlcjtcbiAgYm9hcmRZU2l6ZTogbnVtYmVyO1xuICBpbmNsdWRlUG9saWN5OiBib29sZWFuO1xuICBwcmlvcml0eTogbnVtYmVyO1xuICBtYXhWaXNpdHM6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIE1vdmVJbmZvID0ge1xuICBpc1N5bW1ldHJ5T2Y6IHN0cmluZztcbiAgbGNiOiBudW1iZXI7XG4gIG1vdmU6IHN0cmluZztcbiAgb3JkZXI6IG51bWJlcjtcbiAgcHJpb3I6IG51bWJlcjtcbiAgcHY6IHN0cmluZ1tdO1xuICBzY29yZUxlYWQ6IG51bWJlcjtcbiAgc2NvcmVNZWFuOiBudW1iZXI7XG4gIHNjb3JlU2VsZlBsYXk6IG51bWJlcjtcbiAgc2NvcmVTdGRldjogbnVtYmVyO1xuICB1dGlsaXR5OiBudW1iZXI7XG4gIHV0aWxpdHlMY2I6IG51bWJlcjtcbiAgdmlzaXRzOiBudW1iZXI7XG4gIHdpbnJhdGU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFJvb3RJbmZvID0ge1xuICBjdXJyZW50UGxheWVyOiBzdHJpbmc7XG4gIGxjYjogbnVtYmVyO1xuICBzY29yZUxlYWQ6IG51bWJlcjtcbiAgc2NvcmVTZWxmcGxheTogbnVtYmVyO1xuICBzY29yZVN0ZGV2OiBudW1iZXI7XG4gIHN5bUhhc2g6IHN0cmluZztcbiAgdGhpc0hhc2g6IHN0cmluZztcbiAgdXRpbGl0eTogbnVtYmVyO1xuICB2aXNpdHM6IG51bWJlcjtcbiAgd2lucmF0ZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGVudW0gS2kge1xuICBCbGFjayA9IDEsXG4gIFdoaXRlID0gLTEsXG4gIEVtcHR5ID0gMCxcbn1cblxuZXhwb3J0IGVudW0gVGhlbWUge1xuICBCbGFja0FuZFdoaXRlID0gJ2JsYWNrLWFuZC13aGl0ZScsXG4gIEZsYXQgPSAnZmxhdCcsXG4gIFN1YmR1ZWQgPSAnc3ViZHVlZCcsXG4gIFNoZWxsU3RvbmUgPSAnc2hlbGwnLFxuICBTbGF0ZUFuZFNoZWxsID0gJ3NsYXRlLWFuZC1zaGVsbCcsXG4gIFdhbG51dCA9ICd3YWxuZXQnLFxuICBQaG90b3JlYWxpc3RpYyA9ICdwaG90b3JlYWxpc3RpYycsXG59XG5cbmV4cG9ydCBlbnVtIENlbnRlciB7XG4gIFRvcFJpZ2h0ID0gJ3RyJyxcbiAgVG9wTGVmdCA9ICd0bCcsXG4gIEJvdHRvbUxlZnQgPSAnYmwnLFxuICBCb3R0b21SaWdodCA9ICdicicsXG4gIENlbnRlciA9ICdjJyxcbn1cblxuZXhwb3J0IGVudW0gTWFya3VwIHtcbiAgQ3VycmVudCA9ICdjdScsXG4gIENpcmNsZSA9ICdjaScsXG4gIFNxdWFyZSA9ICdzcScsXG4gIFRyaWFuZ2xlID0gJ3RyaScsXG4gIENyb3NzID0gJ2NyJyxcbiAgTnVtYmVyID0gJ251bScsXG4gIExldHRlciA9ICdsZScsXG4gIE5vbmUgPSAnJyxcbn1cbiIsImltcG9ydCBjaHVuayBmcm9tICdsb2Rhc2gvY2h1bmsnO1xuaW1wb3J0IHtUaGVtZX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHNldHRpbmdzID0ge2NkbjogJ2h0dHBzOi8vcy5zaGFvd3EuY29tJ307XG5cbmV4cG9ydCBjb25zdCBBMV9MRVRURVJTID0gW1xuICAnQScsXG4gICdCJyxcbiAgJ0MnLFxuICAnRCcsXG4gICdFJyxcbiAgJ0YnLFxuICAnRycsXG4gICdIJyxcbiAgJ0onLFxuICAnSycsXG4gICdMJyxcbiAgJ00nLFxuICAnTicsXG4gICdPJyxcbiAgJ1AnLFxuICAnUScsXG4gICdSJyxcbiAgJ1MnLFxuICAnVCcsXG5dO1xuZXhwb3J0IGNvbnN0IEExX0xFVFRFUlNfV0lUSF9JID0gW1xuICAnQScsXG4gICdCJyxcbiAgJ0MnLFxuICAnRCcsXG4gICdFJyxcbiAgJ0YnLFxuICAnRycsXG4gICdIJyxcbiAgJ0knLFxuICAnSicsXG4gICdLJyxcbiAgJ0wnLFxuICAnTScsXG4gICdOJyxcbiAgJ08nLFxuICAnUCcsXG4gICdRJyxcbiAgJ1InLFxuICAnUycsXG5dO1xuZXhwb3J0IGNvbnN0IEExX05VTUJFUlMgPSBbXG4gIDE5LCAxOCwgMTcsIDE2LCAxNSwgMTQsIDEzLCAxMiwgMTEsIDEwLCA5LCA4LCA3LCA2LCA1LCA0LCAzLCAyLCAxLFxuXTtcbmV4cG9ydCBjb25zdCBTR0ZfTEVUVEVSUyA9IFtcbiAgJ2EnLFxuICAnYicsXG4gICdjJyxcbiAgJ2QnLFxuICAnZScsXG4gICdmJyxcbiAgJ2cnLFxuICAnaCcsXG4gICdpJyxcbiAgJ2onLFxuICAnaycsXG4gICdsJyxcbiAgJ20nLFxuICAnbicsXG4gICdvJyxcbiAgJ3AnLFxuICAncScsXG4gICdyJyxcbiAgJ3MnLFxuXTtcbmV4cG9ydCBjb25zdCBCTEFOS19BUlJBWSA9IGNodW5rKG5ldyBBcnJheSgzNjEpLmZpbGwoMCksIDE5KTtcbmV4cG9ydCBjb25zdCBHUklEID0gMTk7XG5leHBvcnQgY29uc3QgRE9UX1NJWkUgPSAzO1xuZXhwb3J0IGNvbnN0IEVYUEFORF9IID0gNTtcbmV4cG9ydCBjb25zdCBFWFBBTkRfViA9IDU7XG5leHBvcnQgY29uc3QgUkVTUE9OU0VfVElNRSA9IDEwMDtcblxuZXhwb3J0IGNvbnN0IFJFU09VUkNFUzoge1xuICBba2V5OiBzdHJpbmddOiB7Ym9hcmQ/OiBzdHJpbmc7IGJsYWNrczogc3RyaW5nW107IHdoaXRlczogc3RyaW5nW119O1xufSA9IHtcbiAgW1RoZW1lLkJsYWNrQW5kV2hpdGVdOiB7XG4gICAgYmxhY2tzOiBbXSxcbiAgICB3aGl0ZXM6IFtdLFxuICB9LFxuICBbVGhlbWUuU3ViZHVlZF06IHtcbiAgICBib2FyZDogYCR7c2V0dGluZ3MuY2RufS9hc3NldHMvdGhlbWUvc3ViZHVlZC9ib2FyZC5wbmdgLFxuICAgIGJsYWNrczogW2Ake3NldHRpbmdzLmNkbn0vYXNzZXRzL3RoZW1lL3N1YmR1ZWQvYmxhY2sucG5nYF0sXG4gICAgd2hpdGVzOiBbYCR7c2V0dGluZ3MuY2RufS9hc3NldHMvdGhlbWUvc3ViZHVlZC93aGl0ZS5wbmdgXSxcbiAgfSxcbiAgW1RoZW1lLlNoZWxsU3RvbmVdOiB7XG4gICAgYm9hcmQ6IGAke3NldHRpbmdzLmNkbn0vYXNzZXRzL3RoZW1lL3NoZWxsLXN0b25lL2JvYXJkLnBuZ2AsXG4gICAgYmxhY2tzOiBbYCR7c2V0dGluZ3MuY2RufS9hc3NldHMvdGhlbWUvc2hlbGwtc3RvbmUvYmxhY2sucG5nYF0sXG4gICAgd2hpdGVzOiBbXG4gICAgICBgJHtzZXR0aW5ncy5jZG59L2Fzc2V0cy90aGVtZS9zaGVsbC1zdG9uZS93aGl0ZTAucG5nYCxcbiAgICAgIGAke3NldHRpbmdzLmNkbn0vYXNzZXRzL3RoZW1lL3NoZWxsLXN0b25lL3doaXRlMS5wbmdgLFxuICAgICAgYCR7c2V0dGluZ3MuY2RufS9hc3NldHMvdGhlbWUvc2hlbGwtc3RvbmUvd2hpdGUyLnBuZ2AsXG4gICAgICBgJHtzZXR0aW5ncy5jZG59L2Fzc2V0cy90aGVtZS9zaGVsbC1zdG9uZS93aGl0ZTMucG5nYCxcbiAgICAgIGAke3NldHRpbmdzLmNkbn0vYXNzZXRzL3RoZW1lL3NoZWxsLXN0b25lL3doaXRlNC5wbmdgLFxuICAgIF0sXG4gIH0sXG4gIFtUaGVtZS5TbGF0ZUFuZFNoZWxsXToge1xuICAgIGJvYXJkOiBgJHtzZXR0aW5ncy5jZG59L2Fzc2V0cy90aGVtZS9zbGF0ZS1hbmQtc2hlbGwvYm9hcmQucG5nYCxcbiAgICBibGFja3M6IFtcbiAgICAgIGAke3NldHRpbmdzLmNkbn0vYXNzZXRzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9zbGF0ZTEucG5nYCxcbiAgICAgIGAke3NldHRpbmdzLmNkbn0vYXNzZXRzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9zbGF0ZTIucG5nYCxcbiAgICAgIGAke3NldHRpbmdzLmNkbn0vYXNzZXRzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9zbGF0ZTMucG5nYCxcbiAgICAgIGAke3NldHRpbmdzLmNkbn0vYXNzZXRzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9zbGF0ZTQucG5nYCxcbiAgICAgIGAke3NldHRpbmdzLmNkbn0vYXNzZXRzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9zbGF0ZTUucG5nYCxcbiAgICBdLFxuICAgIHdoaXRlczogW1xuICAgICAgYCR7c2V0dGluZ3MuY2RufS9hc3NldHMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NoZWxsMS5wbmdgLFxuICAgICAgYCR7c2V0dGluZ3MuY2RufS9hc3NldHMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NoZWxsMi5wbmdgLFxuICAgICAgYCR7c2V0dGluZ3MuY2RufS9hc3NldHMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NoZWxsMy5wbmdgLFxuICAgICAgYCR7c2V0dGluZ3MuY2RufS9hc3NldHMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NoZWxsNC5wbmdgLFxuICAgICAgYCR7c2V0dGluZ3MuY2RufS9hc3NldHMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NoZWxsNS5wbmdgLFxuICAgIF0sXG4gIH0sXG4gIFtUaGVtZS5XYWxudXRdOiB7XG4gICAgYm9hcmQ6IGAke3NldHRpbmdzLmNkbn0vYXNzZXRzL3RoZW1lL3dhbG51dC9ib2FyZC5qcGdgLFxuICAgIGJsYWNrczogW2Ake3NldHRpbmdzLmNkbn0vYXNzZXRzL3RoZW1lL3dhbG51dC9ibGFjay5wbmdgXSxcbiAgICB3aGl0ZXM6IFtgJHtzZXR0aW5ncy5jZG59L2Fzc2V0cy90aGVtZS93YWxudXQvd2hpdGUucG5nYF0sXG4gIH0sXG4gIFtUaGVtZS5QaG90b3JlYWxpc3RpY106IHtcbiAgICBib2FyZDogYCR7c2V0dGluZ3MuY2RufS9hc3NldHMvdGhlbWUvcGhvdG9yZWFsaXN0aWMvYm9hcmQucG5nYCxcbiAgICBibGFja3M6IFtgJHtzZXR0aW5ncy5jZG59L2Fzc2V0cy90aGVtZS9waG90b3JlYWxpc3RpYy9ibGFjay5wbmdgXSxcbiAgICB3aGl0ZXM6IFtgJHtzZXR0aW5ncy5jZG59L2Fzc2V0cy90aGVtZS9waG90b3JlYWxpc3RpYy93aGl0ZS5wbmdgXSxcbiAgfSxcbiAgW1RoZW1lLkZsYXRdOiB7XG4gICAgYmxhY2tzOiBbXSxcbiAgICB3aGl0ZXM6IFtdLFxuICB9LFxufTtcbiIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRyb290LkNyeXB0b0pTID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHQvKmdsb2JhbHMgd2luZG93LCBnbG9iYWwsIHJlcXVpcmUqL1xuXG5cdC8qKlxuXHQgKiBDcnlwdG9KUyBjb3JlIGNvbXBvbmVudHMuXG5cdCAqL1xuXHR2YXIgQ3J5cHRvSlMgPSBDcnlwdG9KUyB8fCAoZnVuY3Rpb24gKE1hdGgsIHVuZGVmaW5lZCkge1xuXG5cdCAgICB2YXIgY3J5cHRvO1xuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGZyb20gd2luZG93IChCcm93c2VyKVxuXHQgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSB3aW5kb3cuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGluIHdlYiB3b3JrZXIgKEJyb3dzZXIpXG5cdCAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gc2VsZi5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gZnJvbSB3b3JrZXJcblx0ICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcy5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSBnbG9iYWxUaGlzLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIChleHBlcmltZW50YWwgSUUgMTEpIGNyeXB0byBmcm9tIHdpbmRvdyAoQnJvd3Nlcilcblx0ICAgIGlmICghY3J5cHRvICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5tc0NyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IHdpbmRvdy5tc0NyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBmcm9tIGdsb2JhbCAoTm9kZUpTKVxuXHQgICAgaWYgKCFjcnlwdG8gJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IGdsb2JhbC5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gaW1wb3J0IHZpYSByZXF1aXJlIChOb2RlSlMpXG5cdCAgICBpZiAoIWNyeXB0byAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgIH1cblxuXHQgICAgLypcblx0ICAgICAqIENyeXB0b2dyYXBoaWNhbGx5IHNlY3VyZSBwc2V1ZG9yYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuXHQgICAgICpcblx0ICAgICAqIEFzIE1hdGgucmFuZG9tKCkgaXMgY3J5cHRvZ3JhcGhpY2FsbHkgbm90IHNhZmUgdG8gdXNlXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcnlwdG9TZWN1cmVSYW5kb21JbnQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKGNyeXB0bykge1xuXHQgICAgICAgICAgICAvLyBVc2UgZ2V0UmFuZG9tVmFsdWVzIG1ldGhvZCAoQnJvd3Nlcilcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheSgxKSlbMF07XG5cdCAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBVc2UgcmFuZG9tQnl0ZXMgbWV0aG9kIChOb2RlSlMpXG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY3J5cHRvLnJhbmRvbUJ5dGVzID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8ucmFuZG9tQnl0ZXMoNCkucmVhZEludDMyTEUoKTtcblx0ICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHRocm93IG5ldyBFcnJvcignTmF0aXZlIGNyeXB0byBtb2R1bGUgY291bGQgbm90IGJlIHVzZWQgdG8gZ2V0IHNlY3VyZSByYW5kb20gbnVtYmVyLicpO1xuXHQgICAgfTtcblxuXHQgICAgLypcblx0ICAgICAqIExvY2FsIHBvbHlmaWxsIG9mIE9iamVjdC5jcmVhdGVcblxuXHQgICAgICovXG5cdCAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIEYoKSB7fVxuXG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgICAgICAgdmFyIHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBvYmo7XG5cblx0ICAgICAgICAgICAgc3VidHlwZSA9IG5ldyBGKCk7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBudWxsO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgIH07XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIENyeXB0b0pTIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMaWJyYXJ5IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbGliID0gQy5saWIgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlIG9iamVjdCBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlID0gKGZ1bmN0aW9uICgpIHtcblxuXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG92ZXJyaWRlcyBQcm9wZXJ0aWVzIHRvIGNvcHkgaW50byB0aGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICAgICAgbWV0aG9kOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNwYXduXG5cdCAgICAgICAgICAgICAgICB2YXIgc3VidHlwZSA9IGNyZWF0ZSh0aGlzKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQXVnbWVudFxuXHQgICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgaW5pdGlhbGl6ZXJcblx0ICAgICAgICAgICAgICAgIGlmICghc3VidHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IHRoaXMuaW5pdCA9PT0gc3VidHlwZS5pbml0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZXIncyBwcm90b3R5cGUgaXMgdGhlIHN1YnR5cGUgb2JqZWN0XG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQucHJvdG90eXBlID0gc3VidHlwZTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHN1cGVydHlwZVxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIgPSB0aGlzO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogRXh0ZW5kcyB0aGlzIG9iamVjdCBhbmQgcnVucyB0aGUgaW5pdCBtZXRob2QuXG5cdCAgICAgICAgICAgICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBpbnN0YW5jZSA9IE15VHlwZS5jcmVhdGUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5leHRlbmQoKTtcblx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG9iamVjdC5cblx0ICAgICAgICAgICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHNvbWUgbG9naWMgd2hlbiB5b3VyIG9iamVjdHMgYXJlIGNyZWF0ZWQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgICAgIC8vIC4uLlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBtaXggaW4uXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBNeVR5cGUubWl4SW4oe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnXG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG1peEluOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIElFIHdvbid0IGNvcHkgdG9TdHJpbmcgdXNpbmcgdGhlIGxvb3AgYWJvdmVcblx0ICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyA9IHByb3BlcnRpZXMudG9TdHJpbmc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGluc3RhbmNlLmNsb25lKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgKi9cblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10pO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddLCA2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xuXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoaXMgd29yZCBhcnJheSB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7RW5jb2Rlcn0gZW5jb2RlciAoT3B0aW9uYWwpIFRoZSBlbmNvZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IENyeXB0b0pTLmVuYy5IZXhcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGVuY29kZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25jYXRlbmF0ZXMgYSB3b3JkIGFycmF5IHRvIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHRoaXNXb3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0V29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGlzU2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHRoaXMuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb25jYXRcblx0ICAgICAgICAgICAgaWYgKHRoaXNTaWdCeXRlcyAlIDQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIGJ5dGUgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXRCeXRlID0gKHRoYXRXb3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgKDI0IC0gKCh0aGlzU2lnQnl0ZXMgKyBpKSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSB3b3JkIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGF0U2lnQnl0ZXM7IGogKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaikgPj4+IDJdID0gdGhhdFdvcmRzW2ogPj4+IDJdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgKz0gdGhhdFNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVtb3ZlcyBpbnNpZ25pZmljYW50IGJpdHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsYW1wOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wXG5cdCAgICAgICAgICAgIHdvcmRzW3NpZ0J5dGVzID4+PiAyXSAmPSAweGZmZmZmZmZmIDw8ICgzMiAtIChzaWdCeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gd29yZEFycmF5LmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgd29yZCBhcnJheSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcmFuZG9tIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobkJ5dGVzKSB7XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbkJ5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzLnB1c2goY3J5cHRvU2VjdXJlUmFuZG9tSW50KCkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbkJ5dGVzKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBFbmNvZGVyIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBIZXggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGhleENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgJiAweDBmKS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0ciBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChoZXhTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZXhTdHJMZW5ndGg7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gM10gfD0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLCAyKSwgMTYpIDw8ICgyNCAtIChpICUgOCkgKiA0KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGhleFN0ckxlbmd0aCAvIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGF0aW4xIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgTGF0aW4xID0gQ19lbmMuTGF0aW4xID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGxhdGluMUNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiaXRlKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbGF0aW4xQ2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGF0aW4xU3RyIFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5MYXRpbjEucGFyc2UobGF0aW4xU3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGxhdGluMVN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xU3RyTGVuZ3RoID0gbGF0aW4xU3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSAobGF0aW4xU3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBsYXRpbjFTdHJMZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmOCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmOFN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGY4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSk7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIFVURi04IGRhdGEnKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi04IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmOFN0ciBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHV0ZjhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmOFN0cikge1xuXHQgICAgICAgICAgICByZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgYnVmZmVyZWQgYmxvY2sgYWxnb3JpdGhtIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIFRoZSBwcm9wZXJ0eSBibG9ja1NpemUgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9taW5CdWZmZXJTaXplIFRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgc2hvdWxkIGJlIGtlcHQgdW5wcm9jZXNzZWQgaW4gdGhlIGJ1ZmZlci4gRGVmYXVsdDogMFxuXHQgICAgICovXG5cdCAgICB2YXIgQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IENfbGliLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFdvcmRBcnJheS5pbml0KCk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgYnVmZmVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQoJ2RhdGEnKTtcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2FwcGVuZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEgPSBVdGY4LnBhcnNlKGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzICs9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGF0YSBibG9ja3MuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBUaGlzIG1ldGhvZCBpbnZva2VzIF9kb1Byb2Nlc3NCbG9jayhvZmZzZXQpLCB3aGljaCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9GbHVzaCBXaGV0aGVyIGFsbCBibG9ja3MgYW5kIHBhcnRpYWwgYmxvY2tzIHNob3VsZCBiZSBwcm9jZXNzZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwcm9jZXNzZWQgZGF0YS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcyghISdmbHVzaCcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wcm9jZXNzOiBmdW5jdGlvbiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkV29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBkYXRhU2lnQnl0ZXMgPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYmxvY2tzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tzUmVhZHkgPSBkYXRhU2lnQnl0ZXMgLyBibG9ja1NpemVCeXRlcztcblx0ICAgICAgICAgICAgaWYgKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIHVwIHRvIGluY2x1ZGUgcGFydGlhbCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGguY2VpbChuQmxvY2tzUmVhZHkpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgZG93biB0byBpbmNsdWRlIG9ubHkgZnVsbCBibG9ja3MsXG5cdCAgICAgICAgICAgICAgICAvLyBsZXNzIHRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgbXVzdCByZW1haW4gaW4gdGhlIGJ1ZmZlclxuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5tYXgoKG5CbG9ja3NSZWFkeSB8IDApIC0gdGhpcy5fbWluQnVmZmVyU2l6ZSwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb3VudCB3b3JkcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbldvcmRzUmVhZHkgPSBuQmxvY2tzUmVhZHkgKiBibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYnl0ZXMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CeXRlc1JlYWR5ID0gTWF0aC5taW4obldvcmRzUmVhZHkgKiA0LCBkYXRhU2lnQnl0ZXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgYmxvY2tzXG5cdCAgICAgICAgICAgIGlmIChuV29yZHNSZWFkeSkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgbldvcmRzUmVhZHk7IG9mZnNldCArPSBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWFsZ29yaXRobSBsb2dpY1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGRhdGFXb3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICAgICAgcHJvY2Vzc2VkV29yZHMgPSBkYXRhV29yZHMuc3BsaWNlKDAsIG5Xb3Jkc1JlYWR5KTtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQocHJvY2Vzc2VkV29yZHMsIG5CeXRlc1JlYWR5KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWluQnVmZmVyU2l6ZTogMFxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBoYXNoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDE2ICg1MTIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlciA9IEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCgpLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaGVyID0gQ3J5cHRvSlMuYWxnby5TSEEyNTYuY3JlYXRlKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBoYXNoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBoYXNoZXIgd2l0aCBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7SGFzaGVyfSBUaGlzIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXG5cdCAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzaFxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBGaW5hbCBtZXNzYWdlIHVwZGF0ZVxuXHQgICAgICAgICAgICBpZiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNTEyLzMyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIGEgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byBjcmVhdGUgYSBoZWxwZXIgZm9yLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIFNIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGNmZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBoYXNoZXIuaW5pdChjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZSBpbiB0aGlzIEhNQUMgaGVscGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSG1hY0hlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGtleSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDX2FsZ28uSE1BQy5pbml0KGhhc2hlciwga2V5KS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbGdvcml0aG0gbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvID0ge307XG5cblx0ICAgIHJldHVybiBDO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uIChNYXRoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gSW5pdGlhbGl6YXRpb24gYW5kIHJvdW5kIGNvbnN0YW50cyB0YWJsZXNcblx0ICAgIHZhciBIID0gW107XG5cdCAgICB2YXIgSyA9IFtdO1xuXG5cdCAgICAvLyBDb21wdXRlIGNvbnN0YW50c1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBpc1ByaW1lKG4pIHtcblx0ICAgICAgICAgICAgdmFyIHNxcnROID0gTWF0aC5zcXJ0KG4pO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBmYWN0b3IgPSAyOyBmYWN0b3IgPD0gc3FydE47IGZhY3RvcisrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIShuICUgZmFjdG9yKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGZ1bmN0aW9uIGdldEZyYWN0aW9uYWxCaXRzKG4pIHtcblx0ICAgICAgICAgICAgcmV0dXJuICgobiAtIChuIHwgMCkpICogMHgxMDAwMDAwMDApIHwgMDtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICB2YXIgbiA9IDI7XG5cdCAgICAgICAgdmFyIG5QcmltZSA9IDA7XG5cdCAgICAgICAgd2hpbGUgKG5QcmltZSA8IDY0KSB7XG5cdCAgICAgICAgICAgIGlmIChpc1ByaW1lKG4pKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoblByaW1lIDwgOCkge1xuXHQgICAgICAgICAgICAgICAgICAgIEhbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAyKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBLW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMykpO1xuXG5cdCAgICAgICAgICAgICAgICBuUHJpbWUrKztcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIG4rKztcblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3Rcblx0ICAgIHZhciBXID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTI1NiBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTI1NiA9IENfYWxnby5TSEEyNTYgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KEguc2xpY2UoMCkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXG5cdCAgICAgICAgICAgIHZhciBhID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XG5cdCAgICAgICAgICAgIHZhciBkID0gSFszXTtcblx0ICAgICAgICAgICAgdmFyIGUgPSBIWzRdO1xuXHQgICAgICAgICAgICB2YXIgZiA9IEhbNV07XG5cdCAgICAgICAgICAgIHZhciBnID0gSFs2XTtcblx0ICAgICAgICAgICAgdmFyIGggPSBIWzddO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBNW29mZnNldCArIGldIHwgMDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMHggPSBXW2kgLSAxNV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMCAgPSAoKGdhbW1hMHggPDwgMjUpIHwgKGdhbW1hMHggPj4+IDcpKSAgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTB4IDw8IDE0KSB8IChnYW1tYTB4ID4+PiAxOCkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWEweCA+Pj4gMyk7XG5cblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeCA9IFdbaSAtIDJdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTEgID0gKChnYW1tYTF4IDw8IDE1KSB8IChnYW1tYTF4ID4+PiAxNykpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWExeCA8PCAxMykgfCAoZ2FtbWExeCA+Pj4gMTkpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMXggPj4+IDEwKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgdmFyIGNoICA9IChlICYgZikgXiAofmUgJiBnKTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYWogPSAoYSAmIGIpIF4gKGEgJiBjKSBeIChiICYgYyk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTAgPSAoKGEgPDwgMzApIHwgKGEgPj4+IDIpKSBeICgoYSA8PCAxOSkgfCAoYSA+Pj4gMTMpKSBeICgoYSA8PCAxMCkgfCAoYSA+Pj4gMjIpKTtcblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTEgPSAoKGUgPDwgMjYpIHwgKGUgPj4+IDYpKSBeICgoZSA8PCAyMSkgfCAoZSA+Pj4gMTEpKSBeICgoZSA8PCA3KSAgfCAoZSA+Pj4gMjUpKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHQxID0gaCArIHNpZ21hMSArIGNoICsgS1tpXSArIFdbaV07XG5cdCAgICAgICAgICAgICAgICB2YXIgdDIgPSBzaWdtYTAgKyBtYWo7XG5cblx0ICAgICAgICAgICAgICAgIGggPSBnO1xuXHQgICAgICAgICAgICAgICAgZyA9IGY7XG5cdCAgICAgICAgICAgICAgICBmID0gZTtcblx0ICAgICAgICAgICAgICAgIGUgPSAoZCArIHQxKSB8IDA7XG5cdCAgICAgICAgICAgICAgICBkID0gYztcblx0ICAgICAgICAgICAgICAgIGMgPSBiO1xuXHQgICAgICAgICAgICAgICAgYiA9IGE7XG5cdCAgICAgICAgICAgICAgICBhID0gKHQxICsgdDIpIHwgMDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcblx0ICAgICAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgfCAwO1xuXHQgICAgICAgICAgICBIWzVdID0gKEhbNV0gKyBmKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNl0gPSAoSFs2XSArIGcpIHwgMDtcblx0ICAgICAgICAgICAgSFs3XSA9IChIWzddICsgaCkgfCAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IG5CaXRzVG90YWw7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1Nih3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLlNIQTI1NiA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTI1Nik7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMjU2KG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY1NIQTI1NiA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEEyNTYpO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEyNTY7XG5cbn0pKTsiLCJpbXBvcnQge2ZsYXR0ZW5EZXB0aCwgY2xvbmUsIHN1bSwgZmlsdGVyLCBmaW5kTGFzdEluZGV4fSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtTZ2ZOb2RlfSBmcm9tICcuL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHtBMV9MRVRURVJTLCBBMV9OVU1CRVJTLCBTR0ZfTEVUVEVSU30gZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgVHJlZU1vZGVsIGZyb20gJ3RyZWUtbW9kZWwvdHlwZXMnO1xuaW1wb3J0IHtTZXR1cFByb3AsIEN1c3RvbVByb3AsIFNnZlByb3BCYXNlfSBmcm9tICcuL2NvcmUvcHJvcHMnO1xuaW1wb3J0IHtBbmFseXNpcywgTW92ZUluZm8sIFJvb3RJbmZvfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7cmV2ZXJzZU9mZnNldH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgc2hhMjU2IGZyb20gJ2NyeXB0by1qcy9zaGEyNTYnO1xuXG5leHBvcnQgY29uc3Qgcm91bmQyID0gKHY6IG51bWJlciwgc2NhbGUgPSAxLCBmaXhlZCA9IDIpID0+IHtcbiAgcmV0dXJuICgoTWF0aC5yb3VuZCh2ICogMTAwKSAvIDEwMCkgKiBzY2FsZSkudG9GaXhlZChmaXhlZCk7XG59O1xuXG5leHBvcnQgY29uc3Qgcm91bmQzID0gKHY6IG51bWJlciwgc2NhbGUgPSAxLCBmaXhlZCA9IDMpID0+IHtcbiAgcmV0dXJuICgoTWF0aC5yb3VuZCh2ICogMTAwMCkgLyAxMDAwKSAqIHNjYWxlKS50b0ZpeGVkKGZpeGVkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREZWR1cGxpY2F0ZWRQcm9wcyA9ICh0YXJnZXRQcm9wczogU2dmUHJvcEJhc2VbXSkgPT4ge1xuICByZXR1cm4gZmlsdGVyKFxuICAgIHRhcmdldFByb3BzLFxuICAgIChwcm9wOiBTZ2ZQcm9wQmFzZSwgaW5kZXg6IG51bWJlcikgPT5cbiAgICAgIGluZGV4ID09PVxuICAgICAgZmluZExhc3RJbmRleChcbiAgICAgICAgdGFyZ2V0UHJvcHMsXG4gICAgICAgIChsYXN0UHJvOiBTZ2ZQcm9wQmFzZSkgPT5cbiAgICAgICAgICBwcm9wLnRva2VuID09PSBsYXN0UHJvLnRva2VuICYmIHByb3AudmFsdWUgPT09IGxhc3RQcm8udmFsdWVcbiAgICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc01vdmVOb2RlID0gKG46IFRyZWVNb2RlbC5Ob2RlPFNnZk5vZGU+KSA9PiB7XG4gIHJldHVybiBuLm1vZGVsLm1vdmVQcm9wcy5sZW5ndGggPiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUm9vTm9kZSA9IChuOiBUcmVlTW9kZWwuTm9kZTxTZ2ZOb2RlPikgPT4ge1xuICByZXR1cm4gbi5tb2RlbC5tb3ZlUHJvcHMubGVuZ3RoID4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1NldHVwTm9kZSA9IChuOiBUcmVlTW9kZWwuTm9kZTxTZ2ZOb2RlPikgPT4ge1xuICByZXR1cm4gbi5tb2RlbC5zZXR1cFByb3BzLmxlbmd0aCA+IDA7XG59O1xuXG5leHBvcnQgY29uc3QgaXNBbnN3ZXJOb2RlID0gKG46IFRyZWVNb2RlbC5Ob2RlPFNnZk5vZGU+LCBraW5kOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcGFpID0gbi5tb2RlbC5jdXN0b21Qcm9wcz8uZmluZCgocDogQ3VzdG9tUHJvcCkgPT4gcC50b2tlbiA9PT0gJ1BBSScpO1xuICBpZiAoIXBhaSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShwYWkudmFsdWUpO1xuXG4gIHJldHVybiBkYXRhLmtpbmQgPT09IGtpbmQ7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Tm9kZU51bWJlciA9IChcbiAgbjogVHJlZU1vZGVsLk5vZGU8U2dmTm9kZT4sXG4gIHBhcmVudD86IFRyZWVNb2RlbC5Ob2RlPFNnZk5vZGU+XG4pID0+IHtcbiAgY29uc3QgcGF0aCA9IG4uZ2V0UGF0aCgpO1xuICBsZXQgbW92ZXNDb3VudCA9IHBhdGguZmlsdGVyKG4gPT4gaXNNb3ZlTm9kZShuKSkubGVuZ3RoO1xuICBpZiAocGFyZW50KSB7XG4gICAgbW92ZXNDb3VudCArPSBwYXJlbnQuZ2V0UGF0aCgpLmZpbHRlcihuID0+IGlzTW92ZU5vZGUobikpLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gbW92ZXNDb3VudDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjU0hBID0gKFxuICBub2RlOiBUcmVlTW9kZWwuTm9kZTxTZ2ZOb2RlPiB8IG51bGwgfCB1bmRlZmluZWQsXG4gIG1vdmVQcm9wczogYW55ID0gW10sXG4gIHNldHVwUHJvcHM6IGFueSA9IFtdXG4pID0+IHtcbiAgbGV0IG5vZGVUeXBlID0gJ3InO1xuICBpZiAobW92ZVByb3BzLmxlbmd0aCA+IDApIG5vZGVUeXBlID0gJ20nO1xuICBpZiAoc2V0dXBQcm9wcy5sZW5ndGggPiAwKSBub2RlVHlwZSA9ICdzJztcblxuICBsZXQgbiA9IGAke25vZGVUeXBlfWA7XG4gIGlmIChtb3ZlUHJvcHMubGVuZ3RoID4gMCkgbiArPSBgJHttb3ZlUHJvcHNbMF0udG9rZW59JHttb3ZlUHJvcHNbMF0udmFsdWV9YDtcblxuICBsZXQgZnVsbG5hbWUgPSBuO1xuICBpZiAobm9kZSkge1xuICAgIGZ1bGxuYW1lID1cbiAgICAgIG5vZGVcbiAgICAgICAgLmdldFBhdGgoKVxuICAgICAgICAubWFwKChuOiBUcmVlTW9kZWwuTm9kZTxTZ2ZOb2RlPikgPT4gbi5tb2RlbC5pZClcbiAgICAgICAgLmpvaW4oJz0+JykgK1xuICAgICAgJz0+JyArXG4gICAgICBuO1xuICB9XG5cbiAgY29uc3Qgc2hhID0gc2hhMjU2KGZ1bGxuYW1lKS50b1N0cmluZygpLnNsaWNlKDAsIDYpO1xuICByZXR1cm4gc2hhO1xufTtcblxuZXhwb3J0IGNvbnN0IG5Gb3JtYXR0ZXIgPSAobnVtOiBudW1iZXIsIGZpeGVkID0gMSkgPT4ge1xuICBjb25zdCBsb29rdXAgPSBbXG4gICAge3ZhbHVlOiAxLCBzeW1ib2w6ICcnfSxcbiAgICB7dmFsdWU6IDFlMywgc3ltYm9sOiAnayd9LFxuICAgIHt2YWx1ZTogMWU2LCBzeW1ib2w6ICdNJ30sXG4gICAge3ZhbHVlOiAxZTksIHN5bWJvbDogJ0cnfSxcbiAgICB7dmFsdWU6IDFlMTIsIHN5bWJvbDogJ1QnfSxcbiAgICB7dmFsdWU6IDFlMTUsIHN5bWJvbDogJ1AnfSxcbiAgICB7dmFsdWU6IDFlMTgsIHN5bWJvbDogJ0UnfSxcbiAgXTtcbiAgY29uc3QgcnggPSAvXFwuMCskfChcXC5bMC05XSpbMS05XSkwKyQvO1xuICBjb25zdCBpdGVtID0gbG9va3VwXG4gICAgLnNsaWNlKClcbiAgICAucmV2ZXJzZSgpXG4gICAgLmZpbmQoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gbnVtID49IGl0ZW0udmFsdWU7XG4gICAgfSk7XG4gIHJldHVybiBpdGVtXG4gICAgPyAobnVtIC8gaXRlbS52YWx1ZSkudG9GaXhlZChmaXhlZCkucmVwbGFjZShyeCwgJyQxJykgKyBpdGVtLnN5bWJvbFxuICAgIDogJzAnO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhdGhUb0luZGV4ZXMgPSAocGF0aDogVHJlZU1vZGVsLk5vZGU8U2dmTm9kZT5bXSk6IG51bWJlcltdID0+IHtcbiAgcmV0dXJuIHBhdGgubWFwKG4gPT4gbi5tb2RlbC5pZCk7XG59O1xuXG5leHBvcnQgY29uc3QgcGF0aFRvSW5pdGlhbFN0b25lcyA9IChcbiAgcGF0aDogVHJlZU1vZGVsLk5vZGU8U2dmTm9kZT5bXSxcbiAgeE9mZnNldCA9IDAsXG4gIHlPZmZzZXQgPSAwXG4pOiBzdHJpbmdbXVtdID0+IHtcbiAgY29uc3QgaW5pdHMgPSBwYXRoXG4gICAgLmZpbHRlcihuID0+IG4ubW9kZWwuc2V0dXBQcm9wcy5sZW5ndGggPiAwKVxuICAgIC5tYXAobiA9PiB7XG4gICAgICByZXR1cm4gbi5tb2RlbC5zZXR1cFByb3BzLm1hcCgoc2V0dXA6IFNldHVwUHJvcCkgPT4ge1xuICAgICAgICBjb25zdCBhID0gQTFfTEVUVEVSU1tTR0ZfTEVUVEVSUy5pbmRleE9mKHNldHVwLnZhbHVlWzBdKSArIHhPZmZzZXRdO1xuICAgICAgICBjb25zdCBiID0gQTFfTlVNQkVSU1tTR0ZfTEVUVEVSUy5pbmRleE9mKHNldHVwLnZhbHVlWzFdKSArIHlPZmZzZXRdO1xuICAgICAgICBjb25zdCB0b2tlbiA9IHNldHVwLnRva2VuID09PSAnQUInID8gJ0InIDogJ1cnO1xuICAgICAgICByZXR1cm4gW3Rva2VuLCBhICsgYl07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgcmV0dXJuIGZsYXR0ZW5EZXB0aChpbml0c1swXSwgMCk7XG59O1xuXG5leHBvcnQgY29uc3QgcGF0aFRvQWlNb3ZlcyA9IChcbiAgcGF0aDogVHJlZU1vZGVsLk5vZGU8U2dmTm9kZT5bXSxcbiAgeE9mZnNldCA9IDAsXG4gIHlPZmZzZXQgPSAwXG4pID0+IHtcbiAgY29uc3QgbW92ZXMgPSBwYXRoXG4gICAgLmZpbHRlcihuID0+IG4ubW9kZWwubW92ZVByb3BzLmxlbmd0aCA+IDApXG4gICAgLm1hcChuID0+IHtcbiAgICAgIGNvbnN0IHByb3AgPSBuLm1vZGVsLm1vdmVQcm9wc1swXTtcbiAgICAgIGNvbnN0IGEgPSBBMV9MRVRURVJTW1NHRl9MRVRURVJTLmluZGV4T2YocHJvcC52YWx1ZVswXSkgKyB4T2Zmc2V0XTtcbiAgICAgIGNvbnN0IGIgPSBBMV9OVU1CRVJTW1NHRl9MRVRURVJTLmluZGV4T2YocHJvcC52YWx1ZVsxXSkgKyB5T2Zmc2V0XTtcbiAgICAgIHJldHVybiBbcHJvcC50b2tlbiwgYSArIGJdO1xuICAgIH0pO1xuICByZXR1cm4gbW92ZXM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SW5kZXhGcm9tQW5hbHlzaXMgPSAoYTogQW5hbHlzaXMpID0+IHtcbiAgaWYgKC9pbmRleGVzLy50ZXN0KGEuaWQpKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoYS5pZClbJ2luZGV4ZXMnXVswXTtcbiAgfVxuICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnQgY29uc3QgaXNNYWluUGF0aCA9IChub2RlOiBUcmVlTW9kZWwuTm9kZTxTZ2ZOb2RlPikgPT4ge1xuICByZXR1cm4gc3VtKG5vZGUuZ2V0UGF0aCgpLm1hcChuID0+IG4uZ2V0SW5kZXgoKSkpID09PSAwO1xufTtcblxuZXhwb3J0IGNvbnN0IHNnZlRvUG9zID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGtpID0gc3RyWzBdID09PSAnQicgPyAxIDogLTE7XG4gIGNvbnN0IHRlbXBTdHIgPSAvXFxbKC4qKVxcXS8uZXhlYyhzdHIpO1xuICBpZiAodGVtcFN0cikge1xuICAgIGNvbnN0IHBvcyA9IHRlbXBTdHJbMV07XG4gICAgY29uc3QgeCA9IFNHRl9MRVRURVJTLmluZGV4T2YocG9zWzBdKTtcbiAgICBjb25zdCB5ID0gU0dGX0xFVFRFUlMuaW5kZXhPZihwb3NbMV0pO1xuICAgIHJldHVybiB7eCwgeSwga2l9O1xuICB9XG4gIHJldHVybiB7eDogLTEsIHk6IC0xLCBraTogMH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2dmVG9BMSA9IChzdHI6IHN0cmluZykgPT4ge1xuICBjb25zdCB7eCwgeX0gPSBzZ2ZUb1BvcyhzdHIpO1xuICByZXR1cm4gQTFfTEVUVEVSU1t4XSArIEExX05VTUJFUlNbeV07XG59O1xuXG5leHBvcnQgY29uc3QgYTFUb1BvcyA9IChtb3ZlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgeCA9IEExX0xFVFRFUlMuaW5kZXhPZihtb3ZlWzBdKTtcbiAgY29uc3QgeSA9IEExX05VTUJFUlMuaW5kZXhPZihwYXJzZUludChtb3ZlLnN1YnN0cigxKSwgMCkpO1xuICByZXR1cm4ge3gsIHl9O1xufTtcblxuZXhwb3J0IGNvbnN0IGExVG9JbmRleCA9IChtb3ZlOiBzdHJpbmcsIGJvYXJkU2l6ZSA9IDE5KSA9PiB7XG4gIGNvbnN0IHggPSBBMV9MRVRURVJTLmluZGV4T2YobW92ZVswXSk7XG4gIGNvbnN0IHkgPSBBMV9OVU1CRVJTLmluZGV4T2YocGFyc2VJbnQobW92ZS5zdWJzdHIoMSksIDApKTtcbiAgcmV0dXJuIHggKiBib2FyZFNpemUgKyB5O1xufTtcblxuZXhwb3J0IGNvbnN0IHNnZk9mZnNldCA9IChzZ2Y6IGFueSwgb2Zmc2V0ID0gMCkgPT4ge1xuICBpZiAob2Zmc2V0ID09PSAwKSByZXR1cm4gc2dmO1xuICBjb25zdCByZXMgPSBjbG9uZShzZ2YpO1xuICBjb25zdCBjaGFySW5kZXggPSBTR0ZfTEVUVEVSUy5pbmRleE9mKHNnZlsyXSkgLSBvZmZzZXQ7XG4gIHJldHVybiByZXMuc3Vic3RyKDAsIDIpICsgU0dGX0xFVFRFUlNbY2hhckluZGV4XSArIHJlcy5zdWJzdHIoMiArIDEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGExVG9TR0YgPSAoc3RyOiBhbnksIHR5cGUgPSAnQicsIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCkgPT4ge1xuICBpZiAoc3RyID09PSAncGFzcycpIHJldHVybiBgJHt0eXBlfVtdYDtcbiAgY29uc3QgaW54ID0gQTFfTEVUVEVSUy5pbmRleE9mKHN0clswXSkgKyBvZmZzZXRYO1xuICBjb25zdCBpbnkgPSBBMV9OVU1CRVJTLmluZGV4T2YocGFyc2VJbnQoc3RyLnN1YnN0cigxKSwgMCkpICsgb2Zmc2V0WTtcbiAgY29uc3Qgc2dmID0gYCR7dHlwZX1bJHtTR0ZfTEVUVEVSU1tpbnhdfSR7U0dGX0xFVFRFUlNbaW55XX1dYDtcbiAgcmV0dXJuIHNnZjtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3NUb1NnZiA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwga2k6IG51bWJlcikgPT4ge1xuICBjb25zdCBheCA9IFNHRl9MRVRURVJTW3hdO1xuICBjb25zdCBheSA9IFNHRl9MRVRURVJTW3ldO1xuICBpZiAoa2kgPT09IDApIHJldHVybiAnJztcbiAgaWYgKGtpID09PSAxKSByZXR1cm4gYEJbJHtheH0ke2F5fV1gO1xuICBpZiAoa2kgPT09IC0xKSByZXR1cm4gYFdbJHtheH0ke2F5fV1gO1xuICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnQgY29uc3QgbWF0VG9Qb3NpdGlvbiA9IChtYXQ6IG51bWJlcltdW10sIHhPZmZzZXQgPSAwLCB5T2Zmc2V0ID0gMCkgPT4ge1xuICBsZXQgcmVzdWx0ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbWF0W2ldW2pdO1xuICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IHggPSBBMV9MRVRURVJTW2kgKyB4T2Zmc2V0XTtcbiAgICAgICAgY29uc3QgeSA9IEExX05VTUJFUlNbaiArIHlPZmZzZXRdO1xuICAgICAgICBjb25zdCBjb2xvciA9IHZhbHVlID09PSAxID8gJ2InIDogJ3cnO1xuICAgICAgICByZXN1bHQgKz0gYCR7Y29sb3J9ICR7eH0ke3l9IGA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3QgbWF0VG9MaXN0T2ZUdXBsZXMgPSAoXG4gIG1hdDogbnVtYmVyW11bXSxcbiAgeE9mZnNldCA9IDAsXG4gIHlPZmZzZXQgPSAwXG4pID0+IHtcbiAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0W2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG1hdFtpXVtqXTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgICBjb25zdCB4ID0gQTFfTEVUVEVSU1tpICsgeE9mZnNldF07XG4gICAgICAgIGNvbnN0IHkgPSBBMV9OVU1CRVJTW2ogKyB5T2Zmc2V0XTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB2YWx1ZSA9PT0gMSA/ICdCJyA6ICdXJztcbiAgICAgICAgcmVzdWx0cy5wdXNoKFtjb2xvciwgeCArIHldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59O1xuXG5leHBvcnQgY29uc3QgY29udmVydFN0b25lVHlwZVRvU3RyaW5nID0gKHR5cGU6IGFueSkgPT4gKHR5cGUgPT09IDEgPyAnQicgOiAnVycpO1xuXG5leHBvcnQgY29uc3QgY29udmVydFN0ZXBzRm9yQUkgPSAoc3RlcHM6IGFueSwgb2Zmc2V0ID0gMCkgPT4ge1xuICBsZXQgcmVzID0gY2xvbmUoc3RlcHMpO1xuICByZXMgPSByZXMubWFwKChzOiBhbnkpID0+IHNnZk9mZnNldChzLCBvZmZzZXQpKTtcbiAgY29uc3QgaGVhZGVyID0gYCg7RkZbNF1HTVsxXVNaWyR7XG4gICAgMTkgLSBvZmZzZXRcbiAgfV1HTlsyMjZdUEJbQmxhY2tdSEFbMF1QV1tXaGl0ZV1LTVs3LjVdRFRbMjAxNy0wOC0wMV1UTVsxODAwXVJVW0NoaW5lc2VdQ1BbQ29weXJpZ2h0IGdob3N0LWdvLmNvbV1BUFtnaG9zdC1nby5jb21dUExbQmxhY2tdO2A7XG4gIGxldCBjb3VudCA9IDA7XG4gIGxldCBwcmV2ID0gJyc7XG4gIHN0ZXBzLmZvckVhY2goKHN0ZXA6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgIGlmIChzdGVwWzBdID09PSBwcmV2WzBdKSB7XG4gICAgICBpZiAoc3RlcFswXSA9PT0gJ0InKSB7XG4gICAgICAgIHJlcy5zcGxpY2UoaW5kZXggKyBjb3VudCwgMCwgJ1dbdHRdJyk7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3BsaWNlKGluZGV4ICsgY291bnQsIDAsICdCW3R0XScpO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBwcmV2ID0gc3RlcDtcbiAgfSk7XG4gIHJldHVybiBgJHtoZWFkZXJ9JHtyZXMuam9pbignOycpfSlgO1xufTtcblxuZXhwb3J0IGNvbnN0IHJldmVyc2VPZmZzZXRBMU1vdmUgPSAoXG4gIG1vdmU6IHN0cmluZyxcbiAgbWF0OiBudW1iZXJbXVtdLFxuICBhbmFseXNpczogQW5hbHlzaXNcbikgPT4ge1xuICBpZiAobW92ZSA9PT0gJ3Bhc3MnKSByZXR1cm4gbW92ZTtcbiAgY29uc3QgaWRPYmogPSBKU09OLnBhcnNlKGFuYWx5c2lzLmlkKTtcbiAgY29uc3Qge3gsIHl9ID0gcmV2ZXJzZU9mZnNldChtYXQsIGlkT2JqLmJ4LCBpZE9iai5ieSk7XG4gIGNvbnN0IGlueCA9IEExX0xFVFRFUlMuaW5kZXhPZihtb3ZlWzBdKSArIHg7XG4gIGNvbnN0IGlueSA9IEExX05VTUJFUlMuaW5kZXhPZihwYXJzZUludChtb3ZlLnN1YnN0cigxKSwgMCkpICsgeTtcbiAgcmV0dXJuIGAke0ExX0xFVFRFUlNbaW54XX0ke0ExX05VTUJFUlNbaW55XX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGNTY29yZURpZmZUZXh0ID0gKFxuICBwcmV2PzogUm9vdEluZm8gfCBudWxsLFxuICBjdXJyPzogTW92ZUluZm8gfCBSb290SW5mbyB8IG51bGwsXG4gIGZpeGVkID0gMVxuKSA9PiB7XG4gIGlmICghcHJldiB8fCAhY3VycikgcmV0dXJuICcnO1xuICBjb25zdCBzY29yZSA9IGNhbGNTY29yZURpZmYocHJldiwgY3Vycik7XG4gIGNvbnN0IGZpeGVkU2NvcmUgPSBzY29yZS50b0ZpeGVkKGZpeGVkKTtcblxuICByZXR1cm4gc2NvcmUgPiAwID8gYCske2ZpeGVkU2NvcmV9YCA6IGAke2ZpeGVkU2NvcmV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjV2lucmF0ZURpZmZUZXh0ID0gKFxuICBwcmV2PzogUm9vdEluZm8gfCBudWxsLFxuICBjdXJyPzogTW92ZUluZm8gfCBSb290SW5mbyB8IG51bGwsXG4gIGZpeGVkID0gMVxuKSA9PiB7XG4gIGlmICghcHJldiB8fCAhY3VycikgcmV0dXJuICcnO1xuICBjb25zdCB3aW5yYXRlID0gY2FsY1dpbnJhdGVEaWZmKHByZXYsIGN1cnIpO1xuICBjb25zdCBmaXhlZFdpbnJhdGUgPSB3aW5yYXRlLnRvRml4ZWQoZml4ZWQpO1xuXG4gIHJldHVybiB3aW5yYXRlID49IDAgPyBgKyR7Zml4ZWRXaW5yYXRlfSVgIDogYCR7Zml4ZWRXaW5yYXRlfSVgO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGNTY29yZURpZmYgPSAoXG4gIHByZXZJbmZvOiBSb290SW5mbyxcbiAgY3VyckluZm86IE1vdmVJbmZvIHwgUm9vdEluZm9cbikgPT4ge1xuICBjb25zdCBzaWduID0gcHJldkluZm8uY3VycmVudFBsYXllciA9PT0gJ0InID8gMSA6IC0xO1xuICBjb25zdCBzY29yZSA9XG4gICAgTWF0aC5yb3VuZCgoY3VyckluZm8uc2NvcmVMZWFkIC0gcHJldkluZm8uc2NvcmVMZWFkKSAqIHNpZ24gKiAxMDAwKSAvIDEwMDA7XG5cbiAgcmV0dXJuIHNjb3JlO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGNXaW5yYXRlRGlmZiA9IChcbiAgcHJldkluZm86IFJvb3RJbmZvLFxuICBjdXJySW5mbzogTW92ZUluZm8gfCBSb290SW5mb1xuKSA9PiB7XG4gIGNvbnN0IHNpZ24gPSBwcmV2SW5mby5jdXJyZW50UGxheWVyID09PSAnQicgPyAxIDogLTE7XG4gIGNvbnN0IHNjb3JlID1cbiAgICBNYXRoLnJvdW5kKChjdXJySW5mby53aW5yYXRlIC0gcHJldkluZm8ud2lucmF0ZSkgKiBzaWduICogMTAwMCAqIDEwMCkgL1xuICAgIDEwMDA7XG5cbiAgcmV0dXJuIHNjb3JlO1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IEdvQmFuRGV0ZWN0aW9uID0gKHBpeGVsRGF0YSwgY2FudmFzKSA9PiB7XG4vLyBjb25zdCBjb2x1bW5zID0gY2FudmFzLndpZHRoO1xuLy8gY29uc3Qgcm93cyA9IGNhbnZhcy5oZWlnaHQ7XG4vLyBjb25zdCBkYXRhVHlwZSA9IEpzRmVhdC5VOEMxX3Q7XG4vLyBjb25zdCBkaXN0TWF0cml4VCA9IG5ldyBKc0ZlYXQubWF0cml4X3QoY29sdW1ucywgcm93cywgZGF0YVR5cGUpO1xuLy8gSnNGZWF0LmltZ3Byb2MuZ3JheXNjYWxlKHBpeGVsRGF0YSwgY29sdW1ucywgcm93cywgZGlzdE1hdHJpeFQpO1xuLy8gSnNGZWF0LmltZ3Byb2MuZ2F1c3NpYW5fYmx1cihkaXN0TWF0cml4VCwgZGlzdE1hdHJpeFQsIDIsIDApO1xuLy8gSnNGZWF0LmltZ3Byb2MuY2FubnkoZGlzdE1hdHJpeFQsIGRpc3RNYXRyaXhULCA1MCwgNTApO1xuXG4vLyBjb25zdCBuZXdQaXhlbERhdGEgPSBuZXcgVWludDMyQXJyYXkocGl4ZWxEYXRhLmJ1ZmZlcik7XG4vLyBjb25zdCBhbHBoYSA9ICgweGZmIDw8IDI0KTtcbi8vIGxldCBpID0gZGlzdE1hdHJpeFQuY29scyAqIGRpc3RNYXRyaXhULnJvd3M7XG4vLyBsZXQgcGl4ID0gMDtcbi8vIHdoaWxlIChpID49IDApIHtcbi8vICAgcGl4ID0gZGlzdE1hdHJpeFQuZGF0YVtpXTtcbi8vICAgbmV3UGl4ZWxEYXRhW2ldID0gYWxwaGEgfCAocGl4IDw8IDE2KSB8IChwaXggPDwgOCkgfCBwaXg7XG4vLyAgIGkgLT0gMTtcbi8vIH1cbi8vIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG5cbmltcG9ydCB7Y2xvbmVEZWVwfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtzZ2ZUb1Bvc30gZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHtDZW50ZXJ9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgemVyb3MgPSAoc2l6ZTogW251bWJlciwgbnVtYmVyXSkgPT5cbiAgbmV3IEFycmF5KHNpemVbMF0pLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheShzaXplWzFdKS5maWxsKDApKTtcblxuZXhwb3J0IGNvbnN0IGVtcHR5ID0gKHNpemU6IFtudW1iZXIsIG51bWJlcl0pOiBzdHJpbmdbXVtdID0+XG4gIG5ldyBBcnJheShzaXplWzBdKS5maWxsKCcnKS5tYXAoKCkgPT4gbmV3IEFycmF5KHNpemVbMV0pLmZpbGwoJycpKTtcblxuY29uc3QgR1JJRCA9IDE5O1xubGV0IGxpYmVydGllcyA9IDA7XG5sZXQgcmVjdXJzaW9uUGF0aDogc3RyaW5nW10gPSBbXTtcblxuZXhwb3J0IGNvbnN0IGNhbGNNb3N0ID0gKG1hdDogbnVtYmVyW11bXSwgYm9hcmRTaXplID0gMTkpID0+IHtcbiAgbGV0IGxlZnRNb3N0OiBudW1iZXIgPSBib2FyZFNpemUgLSAxO1xuICBsZXQgcmlnaHRNb3N0ID0gMDtcbiAgbGV0IHRvcE1vc3Q6IG51bWJlciA9IGJvYXJkU2l6ZSAtIDE7XG4gIGxldCBib3R0b21Nb3N0ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgdmFsdWUgPSBtYXRbaV1bal07XG4gICAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgICAgaWYgKGxlZnRNb3N0ID4gaSkgbGVmdE1vc3QgPSBpO1xuICAgICAgICBpZiAocmlnaHRNb3N0IDwgaSkgcmlnaHRNb3N0ID0gaTtcbiAgICAgICAgaWYgKHRvcE1vc3QgPiBqKSB0b3BNb3N0ID0gajtcbiAgICAgICAgaWYgKGJvdHRvbU1vc3QgPCBqKSBib3R0b21Nb3N0ID0gajtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtsZWZ0TW9zdCwgcmlnaHRNb3N0LCB0b3BNb3N0LCBib3R0b21Nb3N0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjQ2VudGVyID0gKG1hdDogbnVtYmVyW11bXSwgYm9hcmRTaXplID0gMTkpID0+IHtcbiAgY29uc3Qge2xlZnRNb3N0LCByaWdodE1vc3QsIHRvcE1vc3QsIGJvdHRvbU1vc3R9ID0gY2FsY01vc3QobWF0LCBib2FyZFNpemUpO1xuICBjb25zdCB0b3AgPSB0b3BNb3N0IDwgYm9hcmRTaXplIC0gMSAtIGJvdHRvbU1vc3Q7XG4gIGNvbnN0IGxlZnQgPSBsZWZ0TW9zdCA8IGJvYXJkU2l6ZSAtIDEgLSByaWdodE1vc3Q7XG4gIGlmICh0b3AgJiYgbGVmdCkgcmV0dXJuIENlbnRlci5Ub3BMZWZ0O1xuICBpZiAoIXRvcCAmJiBsZWZ0KSByZXR1cm4gQ2VudGVyLkJvdHRvbUxlZnQ7XG4gIGlmICh0b3AgJiYgIWxlZnQpIHJldHVybiBDZW50ZXIuVG9wUmlnaHQ7XG4gIGlmICghdG9wICYmICFsZWZ0KSByZXR1cm4gQ2VudGVyLkJvdHRvbVJpZ2h0O1xuICByZXR1cm4gQ2VudGVyLkNlbnRlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjQm9hcmRTaXplID0gKFxuICBtYXQ6IG51bWJlcltdW10sXG4gIGJvYXJkU2l6ZSA9IDE5LFxuICBleHRlbmQgPSAyXG4pOiBudW1iZXJbXSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFsxOSwgMTldO1xuICBjb25zdCBjZW50ZXIgPSBjYWxjQ2VudGVyKG1hdCk7XG4gIGNvbnN0IHtsZWZ0TW9zdCwgcmlnaHRNb3N0LCB0b3BNb3N0LCBib3R0b21Nb3N0fSA9IGNhbGNNb3N0KG1hdCwgYm9hcmRTaXplKTtcbiAgaWYgKGNlbnRlciA9PT0gQ2VudGVyLlRvcExlZnQpIHtcbiAgICByZXN1bHRbMF0gPSByaWdodE1vc3QgKyBleHRlbmQgKyAxO1xuICAgIHJlc3VsdFsxXSA9IGJvdHRvbU1vc3QgKyBleHRlbmQgKyAxO1xuICB9XG4gIGlmIChjZW50ZXIgPT09IENlbnRlci5Ub3BSaWdodCkge1xuICAgIHJlc3VsdFswXSA9IGJvYXJkU2l6ZSAtIGxlZnRNb3N0ICsgZXh0ZW5kO1xuICAgIHJlc3VsdFsxXSA9IGJvdHRvbU1vc3QgKyBleHRlbmQgKyAxO1xuICB9XG4gIGlmIChjZW50ZXIgPT09IENlbnRlci5Cb3R0b21MZWZ0KSB7XG4gICAgcmVzdWx0WzBdID0gcmlnaHRNb3N0ICsgZXh0ZW5kICsgMTtcbiAgICByZXN1bHRbMV0gPSBib2FyZFNpemUgLSB0b3BNb3N0ICsgZXh0ZW5kO1xuICB9XG4gIGlmIChjZW50ZXIgPT09IENlbnRlci5Cb3R0b21SaWdodCkge1xuICAgIHJlc3VsdFswXSA9IGJvYXJkU2l6ZSAtIGxlZnRNb3N0ICsgZXh0ZW5kO1xuICAgIHJlc3VsdFsxXSA9IGJvYXJkU2l6ZSAtIHRvcE1vc3QgKyBleHRlbmQ7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGNPZmZzZXQgPSAobWF0OiBudW1iZXJbXVtdKSA9PiB7XG4gIGNvbnN0IGJvYXJkU2l6ZSA9IGNhbGNCb2FyZFNpemUobWF0KTtcbiAgY29uc3Qgb3ggPSAxOSAtIGJvYXJkU2l6ZVswXTtcbiAgY29uc3Qgb3kgPSAxOSAtIGJvYXJkU2l6ZVsxXTtcbiAgY29uc3QgY2VudGVyID0gY2FsY0NlbnRlcihtYXQpO1xuXG4gIGxldCBvb3ggPSBveDtcbiAgbGV0IG9veSA9IG95O1xuICBzd2l0Y2ggKGNlbnRlcikge1xuICAgIGNhc2UgQ2VudGVyLlRvcExlZnQ6IHtcbiAgICAgIG9veCA9IDA7XG4gICAgICBvb3kgPSBveTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENlbnRlci5Ub3BSaWdodDoge1xuICAgICAgb294ID0gLW94O1xuICAgICAgb295ID0gb3k7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDZW50ZXIuQm90dG9tTGVmdDoge1xuICAgICAgb294ID0gMDtcbiAgICAgIG9veSA9IDA7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDZW50ZXIuQm90dG9tUmlnaHQ6IHtcbiAgICAgIG9veCA9IC1veDtcbiAgICAgIG9veSA9IDA7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHt4OiBvb3gsIHk6IG9veX07XG59O1xuXG5leHBvcnQgY29uc3QgcmV2ZXJzZU9mZnNldCA9IChtYXQ6IG51bWJlcltdW10sIGJ4ID0gMTksIGJ5ID0gMTkpID0+IHtcbiAgY29uc3Qgb3ggPSAxOSAtIGJ4O1xuICBjb25zdCBveSA9IDE5IC0gYnk7XG4gIGNvbnN0IGNlbnRlciA9IGNhbGNDZW50ZXIobWF0KTtcblxuICBsZXQgb294ID0gb3g7XG4gIGxldCBvb3kgPSBveTtcbiAgc3dpdGNoIChjZW50ZXIpIHtcbiAgICBjYXNlIENlbnRlci5Ub3BMZWZ0OiB7XG4gICAgICBvb3ggPSAwO1xuICAgICAgb295ID0gLW95O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2VudGVyLlRvcFJpZ2h0OiB7XG4gICAgICBvb3ggPSBveDtcbiAgICAgIG9veSA9IC1veTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENlbnRlci5Cb3R0b21MZWZ0OiB7XG4gICAgICBvb3ggPSAwO1xuICAgICAgb295ID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENlbnRlci5Cb3R0b21SaWdodDoge1xuICAgICAgb294ID0gb3g7XG4gICAgICBvb3kgPSAwO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB7eDogb294LCB5OiBvb3l9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGNWaXNpYmxlQXJlYSA9IChcbiAgbWF0OiBudW1iZXJbXVtdLFxuICBib2FyZFNpemUgPSAxOSxcbiAgZXh0ZW5kID0gMlxuKSA9PiB7XG4gIGNvbnN0IGNlbnRlciA9IGNhbGNDZW50ZXIobWF0KTtcbiAgY29uc3Qge2xlZnRNb3N0LCByaWdodE1vc3QsIHRvcE1vc3QsIGJvdHRvbU1vc3R9ID0gY2FsY01vc3QobWF0LCBib2FyZFNpemUpO1xuICBsZXQgdmlzaWJsZUFyZWEgPSBbXG4gICAgWzAsIDE4XSxcbiAgICBbMCwgMThdLFxuICBdO1xuICBsZXQgdmlzaWJsZVNpemUgPSBib2FyZFNpemUgLSAxO1xuICBpZiAoY2VudGVyID09PSBDZW50ZXIuVG9wTGVmdCkge1xuICAgIHZpc2libGVTaXplID0gTWF0aC5taW4oXG4gICAgICBNYXRoLm1heChyaWdodE1vc3QsIGJvdHRvbU1vc3QpICsgZXh0ZW5kLFxuICAgICAgYm9hcmRTaXplIC0gMVxuICAgICk7XG4gICAgdmlzaWJsZUFyZWEgPSBbXG4gICAgICBbMCwgdmlzaWJsZVNpemVdLFxuICAgICAgWzAsIHZpc2libGVTaXplXSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGNlbnRlciA9PT0gQ2VudGVyLlRvcFJpZ2h0KSB7XG4gICAgdmlzaWJsZVNpemUgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KGJvdHRvbU1vc3QgKyBleHRlbmQsIGJvYXJkU2l6ZSAtIDEgLSAobGVmdE1vc3QgLSBleHRlbmQpKSxcbiAgICAgIGJvYXJkU2l6ZSAtIDFcbiAgICApO1xuICAgIHZpc2libGVBcmVhID0gW1xuICAgICAgW2JvYXJkU2l6ZSAtIDEgLSB2aXNpYmxlU2l6ZSwgMThdLFxuICAgICAgWzAsIHZpc2libGVTaXplXSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGNlbnRlciA9PT0gQ2VudGVyLkJvdHRvbUxlZnQpIHtcbiAgICB2aXNpYmxlU2l6ZSA9IE1hdGgubWluKFxuICAgICAgTWF0aC5tYXgoYm9hcmRTaXplIC0gMSAtICh0b3BNb3N0IC0gZXh0ZW5kKSwgcmlnaHRNb3N0ICsgZXh0ZW5kKSxcbiAgICAgIGJvYXJkU2l6ZSAtIDFcbiAgICApO1xuICAgIHZpc2libGVBcmVhID0gW1xuICAgICAgWzAsIHZpc2libGVTaXplXSxcbiAgICAgIFtib2FyZFNpemUgLSAxIC0gdmlzaWJsZVNpemUsIDE4XSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGNlbnRlciA9PT0gQ2VudGVyLkJvdHRvbVJpZ2h0KSB7XG4gICAgdmlzaWJsZVNpemUgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KFxuICAgICAgICBib2FyZFNpemUgLSAxIC0gKHRvcE1vc3QgLSBleHRlbmQpLFxuICAgICAgICBib2FyZFNpemUgLSAxIC0gKGxlZnRNb3N0IC0gZXh0ZW5kKVxuICAgICAgKSxcbiAgICAgIGJvYXJkU2l6ZSAtIDFcbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2cycsIHZpc2libGVTaXplKTtcbiAgICB2aXNpYmxlQXJlYSA9IFtcbiAgICAgIFtib2FyZFNpemUgLSAxIC0gdmlzaWJsZVNpemUsIDE4XSxcbiAgICAgIFtib2FyZFNpemUgLSAxIC0gdmlzaWJsZVNpemUsIDE4XSxcbiAgICBdO1xuICB9XG4gIHJldHVybiB7dmlzaWJsZUFyZWEsIGNlbnRlcn07XG59O1xuXG5mdW5jdGlvbiBjYWxjTGliZXJ0eUNvcmUobWF0OiBudW1iZXJbXVtdLCB4OiBudW1iZXIsIHk6IG51bWJlciwga2k6IG51bWJlcikge1xuICBpZiAoeCA+PSAwICYmIHggPCBHUklEICYmIHkgPj0gMCAmJiB5IDwgR1JJRCkge1xuICAgIGlmIChtYXRbeF1beV0gPT09IGtpICYmICFyZWN1cnNpb25QYXRoLmluY2x1ZGVzKGAke3h9LCR7eX1gKSkge1xuICAgICAgcmVjdXJzaW9uUGF0aC5wdXNoKGAke3h9LCR7eX1gKTtcbiAgICAgIGNhbGNMaWJlcnR5Q29yZShtYXQsIHggLSAxLCB5LCBraSk7XG4gICAgICBjYWxjTGliZXJ0eUNvcmUobWF0LCB4ICsgMSwgeSwga2kpO1xuICAgICAgY2FsY0xpYmVydHlDb3JlKG1hdCwgeCwgeSAtIDEsIGtpKTtcbiAgICAgIGNhbGNMaWJlcnR5Q29yZShtYXQsIHgsIHkgKyAxLCBraSk7XG4gICAgfSBlbHNlIGlmIChtYXRbeF1beV0gPT09IDApIHtcbiAgICAgIGxpYmVydGllcyArPSAxO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjTGliZXJ0eShtYXQ6IG51bWJlcltdW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGxpYmVydGllcyA9IDA7XG4gIHJlY3Vyc2lvblBhdGggPSBbXTtcblxuICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+IEdSSUQgLSAxIHx8IHkgPiBHUklEIC0gMSkge1xuICAgIHJldHVybiB7XG4gICAgICBsaWJlcnR5OiA0LFxuICAgICAgcmVjdXJzaW9uUGF0aDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGlmIChtYXRbeF1beV0gPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGliZXJ0eTogNCxcbiAgICAgIHJlY3Vyc2lvblBhdGg6IFtdLFxuICAgIH07XG4gIH1cbiAgY2FsY0xpYmVydHlDb3JlKG1hdCwgeCwgeSwga2kpO1xuICByZXR1cm4ge1xuICAgIGxpYmVydHk6IGxpYmVydGllcyxcbiAgICByZWN1cnNpb25QYXRoLFxuICB9O1xufVxuXG5mdW5jdGlvbiBleGVjUG9ubnVraShtYXQ6IG51bWJlcltdW10sIGk6IG51bWJlciwgajogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGNvbnN0IG5ld01hdCA9IGNsb25lRGVlcChtYXQpO1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eVVwLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoVXB9ID0gY2FsY0xpYmVydHkoXG4gICAgbWF0LFxuICAgIGksXG4gICAgaiAtIDEsXG4gICAga2lcbiAgKTtcbiAgY29uc3Qge2xpYmVydHk6IGxpYmVydHlEb3duLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoRG93bn0gPSBjYWxjTGliZXJ0eShcbiAgICBtYXQsXG4gICAgaSxcbiAgICBqICsgMSxcbiAgICBraVxuICApO1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eUxlZnQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhMZWZ0fSA9IGNhbGNMaWJlcnR5KFxuICAgIG1hdCxcbiAgICBpIC0gMSxcbiAgICBqLFxuICAgIGtpXG4gICk7XG4gIGNvbnN0IHtsaWJlcnR5OiBsaWJlcnR5UmlnaHQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhSaWdodH0gPVxuICAgIGNhbGNMaWJlcnR5KG1hdCwgaSArIDEsIGosIGtpKTtcbiAgaWYgKGxpYmVydHlVcCA9PT0gMCkge1xuICAgIHJlY3Vyc2lvblBhdGhVcC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY29vcmQgPSBpdGVtLnNwbGl0KCcsJyk7XG4gICAgICBuZXdNYXRbcGFyc2VJbnQoY29vcmRbMF0pXVtwYXJzZUludChjb29yZFsxXSldID0gMDtcbiAgICB9KTtcbiAgfVxuICBpZiAobGliZXJ0eURvd24gPT09IDApIHtcbiAgICByZWN1cnNpb25QYXRoRG93bi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY29vcmQgPSBpdGVtLnNwbGl0KCcsJyk7XG4gICAgICBuZXdNYXRbcGFyc2VJbnQoY29vcmRbMF0pXVtwYXJzZUludChjb29yZFsxXSldID0gMDtcbiAgICB9KTtcbiAgfVxuICBpZiAobGliZXJ0eUxlZnQgPT09IDApIHtcbiAgICByZWN1cnNpb25QYXRoTGVmdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY29vcmQgPSBpdGVtLnNwbGl0KCcsJyk7XG4gICAgICBuZXdNYXRbcGFyc2VJbnQoY29vcmRbMF0pXVtwYXJzZUludChjb29yZFsxXSldID0gMDtcbiAgICB9KTtcbiAgfVxuICBpZiAobGliZXJ0eVJpZ2h0ID09PSAwKSB7XG4gICAgcmVjdXJzaW9uUGF0aFJpZ2h0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBjb29yZCA9IGl0ZW0uc3BsaXQoJywnKTtcbiAgICAgIG5ld01hdFtwYXJzZUludChjb29yZFswXSldW3BhcnNlSW50KGNvb3JkWzFdKV0gPSAwO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBuZXdNYXQ7XG59XG5cbmZ1bmN0aW9uIGNhblBvbm51a2kobWF0OiBudW1iZXJbXVtdLCBpOiBudW1iZXIsIGo6IG51bWJlciwga2k6IG51bWJlcikge1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eVVwLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoVXB9ID0gY2FsY0xpYmVydHkoXG4gICAgbWF0LFxuICAgIGksXG4gICAgaiAtIDEsXG4gICAga2lcbiAgKTtcbiAgY29uc3Qge2xpYmVydHk6IGxpYmVydHlEb3duLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoRG93bn0gPSBjYWxjTGliZXJ0eShcbiAgICBtYXQsXG4gICAgaSxcbiAgICBqICsgMSxcbiAgICBraVxuICApO1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eUxlZnQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhMZWZ0fSA9IGNhbGNMaWJlcnR5KFxuICAgIG1hdCxcbiAgICBpIC0gMSxcbiAgICBqLFxuICAgIGtpXG4gICk7XG4gIGNvbnN0IHtsaWJlcnR5OiBsaWJlcnR5UmlnaHQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhSaWdodH0gPVxuICAgIGNhbGNMaWJlcnR5KG1hdCwgaSArIDEsIGosIGtpKTtcbiAgaWYgKGxpYmVydHlVcCA9PT0gMCAmJiByZWN1cnNpb25QYXRoVXAubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChsaWJlcnR5RG93biA9PT0gMCAmJiByZWN1cnNpb25QYXRoRG93bi5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGxpYmVydHlMZWZ0ID09PSAwICYmIHJlY3Vyc2lvblBhdGhMZWZ0Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAobGliZXJ0eVJpZ2h0ID09PSAwICYmIHJlY3Vyc2lvblBhdGhSaWdodC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuTW92ZShtYXQ6IG51bWJlcltdW10sIGk6IG51bWJlciwgajogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGlmIChpIDwgMCB8fCBqIDwgMCkgcmV0dXJuIHRydWU7XG4gIGNvbnN0IG5ld01hdCA9IGNsb25lRGVlcChtYXQpO1xuICBpZiAobmV3TWF0W2ldW2pdICE9PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbmV3TWF0W2ldW2pdID0ga2k7XG4gIGNvbnN0IHtsaWJlcnR5fSA9IGNhbGNMaWJlcnR5KG5ld01hdCwgaSwgaiwga2kpO1xuICBpZiAoY2FuUG9ubnVraShuZXdNYXQsIGksIGosIC1raSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoY2FuUG9ubnVraShuZXdNYXQsIGksIGosIGtpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobGliZXJ0eSA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmUobWF0OiBudW1iZXJbXVtdLCBpOiBudW1iZXIsIGo6IG51bWJlciwga2k6IG51bWJlcikge1xuICBpZiAoaSA8IDAgfHwgaiA8IDApIHJldHVybiBtYXQ7XG4gIGNvbnN0IG5ld01hdCA9IGNsb25lRGVlcChtYXQpO1xuICBuZXdNYXRbaV1bal0gPSBraTtcbiAgcmV0dXJuIGV4ZWNQb25udWtpKG5ld01hdCwgaSwgaiwgLWtpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dLaShtYXQ6IG51bWJlcltdW10sIHN0ZXBzOiBzdHJpbmdbXSwgaXNQb25udWtpID0gdHJ1ZSkge1xuICBsZXQgbmV3TWF0ID0gY2xvbmVEZWVwKG1hdCk7XG4gIGxldCBoYXNNb3ZlZCA9IGZhbHNlO1xuICBzdGVwcy5mb3JFYWNoKHN0ciA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBraSxcbiAgICB9OiB7XG4gICAgICB4OiBudW1iZXI7XG4gICAgICB5OiBudW1iZXI7XG4gICAgICBraTogbnVtYmVyO1xuICAgIH0gPSBzZ2ZUb1BvcyhzdHIpO1xuICAgIGlmIChpc1Bvbm51a2kpIHtcbiAgICAgIGlmIChjYW5Nb3ZlKG5ld01hdCwgeCwgeSwga2kpKSB7XG4gICAgICAgIG5ld01hdFt4XVt5XSA9IGtpO1xuICAgICAgICBuZXdNYXQgPSBleGVjUG9ubnVraShuZXdNYXQsIHgsIHksIC1raSk7XG4gICAgICAgIGhhc01vdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TWF0W3hdW3ldID0ga2k7XG4gICAgICBoYXNNb3ZlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGFycmFuZ2VtZW50OiBuZXdNYXQsXG4gICAgaGFzTW92ZWQsXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9uZSB7XG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcjogbnVtYmVyO1xuICBraTogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHI6IG51bWJlcixcbiAgICBraTogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnIgPSByO1xuICAgIHRoaXMua2kgPSBraTtcbiAgfVxuICBkcmF3KCkge1xuICAgIGNvbnNvbGUubG9nKCdUQkQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFN0b25lIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ3U3RvbmUgZXh0ZW5kcyBTdG9uZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgcjogbnVtYmVyLFxuICAgIGtpOiBudW1iZXJcbiAgKSB7XG4gICAgc3VwZXIoY3R4LCB4LCB5LCByLCBraSk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHtjdHgsIHgsIHksIHIsIGtpfSA9IHRoaXM7XG4gICAgaWYgKHIgPD0gMCkgcmV0dXJuO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XG4gICAgaWYgKGtpID09PSAxKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgIH0gZWxzZSBpZiAoa2kgPT09IC0xKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIH1cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFN0b25lIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVN0b25lIGV4dGVuZHMgU3RvbmUge1xuICBtb2Q6IG51bWJlcjtcbiAgYmxhY2tzOiBhbnk7XG4gIHdoaXRlczogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHI6IG51bWJlcixcbiAgICBraTogbnVtYmVyLFxuICAgIG1vZDogbnVtYmVyLFxuICAgIGJsYWNrczogYW55LFxuICAgIHdoaXRlczogYW55XG4gICkge1xuICAgIHN1cGVyKGN0eCwgeCwgeSwgciwga2kpO1xuICAgIHRoaXMubW9kID0gbW9kO1xuICAgIHRoaXMuYmxhY2tzID0gYmxhY2tzO1xuICAgIHRoaXMud2hpdGVzID0gd2hpdGVzO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCB7Y3R4LCB4LCB5LCByLCBraSwgYmxhY2tzLCB3aGl0ZXMsIG1vZH0gPSB0aGlzO1xuICAgIGlmIChyIDw9IDApIHJldHVybjtcbiAgICBsZXQgaW1nO1xuICAgIGlmIChraSA9PT0gMSkge1xuICAgICAgaW1nID0gYmxhY2tzW21vZCAlIGJsYWNrcy5sZW5ndGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWcgPSB3aGl0ZXNbbW9kICUgd2hpdGVzLmxlbmd0aF07XG4gICAgfVxuICAgIGlmIChpbWcpIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4IC0gciwgeSAtIHIsIHIgKiAyLCByICogMik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge2NhbGNTY29yZURpZmYsIGNhbGNTY29yZURpZmZUZXh0LCBuRm9ybWF0dGVyLCByb3VuZDN9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQge01vdmVJbmZvLCBSb290SW5mb30gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXNpc1BvaW50IHtcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByOiBudW1iZXI7XG4gIHJvb3RJbmZvOiBSb290SW5mbztcbiAgbW92ZUluZm86IE1vdmVJbmZvO1xuICBub3JtOiBudW1iZXI7XG4gIGRldGFpbDogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICByOiBudW1iZXIsXG4gICAgcm9vdEluZm86IFJvb3RJbmZvLFxuICAgIG1vdmVJbmZvOiBNb3ZlSW5mbyxcbiAgICBub3JtOiBudW1iZXIsXG4gICAgZGV0YWlsOiBib29sZWFuXG4gICkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnIgPSByO1xuICAgIHRoaXMucm9vdEluZm8gPSByb290SW5mbztcbiAgICB0aGlzLm1vdmVJbmZvID0gbW92ZUluZm87XG4gICAgdGhpcy5ub3JtID0gbm9ybSB8fCAwO1xuICAgIHRoaXMuZGV0YWlsID0gZGV0YWlsO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCB7Y3R4LCB4LCB5LCByLCByb290SW5mbywgbW92ZUluZm99ID0gdGhpcztcbiAgICBpZiAociA8IDApIHJldHVybjtcbiAgICBjb25zdCB7cHJpb3IsIG9yZGVyfSA9IG1vdmVJbmZvO1xuICAgIGNvbnN0IHNjb3JlID0gY2FsY1Njb3JlRGlmZihyb290SW5mbywgbW92ZUluZm8pO1xuXG4gICAgbGV0IHBDb2xvciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknO1xuICAgIGlmIChcbiAgICAgIHByaW9yID49IDAuNSB8fFxuICAgICAgKHByaW9yID49IDAuMSAmJiBvcmRlciA8IDMgJiYgc2NvcmUgPiAtMC4zKSB8fFxuICAgICAgb3JkZXIgPT09IDAgfHxcbiAgICAgIHNjb3JlID49IDBcbiAgICApIHtcbiAgICAgIHBDb2xvciA9ICdyZ2JhKDEzNiwgMTcwLCA2MCwgMSknO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAocHJpb3IgPiAwLjA1ICYmIHNjb3JlID4gLTAuNSkgfHxcbiAgICAgIChwcmlvciA+IDAuMDEgJiYgc2NvcmUgPiAtMC4xKVxuICAgICkge1xuICAgICAgcENvbG9yID0gJ3JnYmEoMjA2LCAyMTAsIDgzLCAxKSc7XG4gICAgfSBlbHNlIGlmIChwcmlvciA+IDAuMDEgJiYgc2NvcmUgPiAtMSkge1xuICAgICAgcENvbG9yID0gJ3JnYmEoMjQyLCAyMTcsIDYwLCAxKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBDb2xvciA9ICdyZ2JhKDIzNiwgMTQ2LCA3MywgMSknO1xuICAgIH1cblxuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnNoYWRvd09mZnNldFggPSAwO1xuICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcbiAgICBjdHguc2hhZG93Q29sb3IgPSAnI2ZmZic7XG4gICAgY3R4LnNoYWRvd0JsdXIgPSAwO1xuICAgIGlmIChtb3ZlSW5mby52aXNpdHMgPiA1MCAmJiBzY29yZSA+IC0xICYmIChwcmlvciA+IDAuMDEgfHwgb3JkZXIgPCA1KSkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICBjdHgubGluZVdpZHRoID0gMDtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDApJztcbiAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIHIgKiAwLjksIHgsIHksIHIpO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIHBDb2xvcik7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC45LCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICBjdHguZmlsbCgpO1xuXG4gICAgICBjb25zdCBmb250U2l6ZSA9IHIgLyAxLjU7XG5cbiAgICAgIGN0eC5mb250ID0gYCR7Zm9udFNpemUgKiAwLjh9cHggVGFob21hYDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXG4gICAgICBjb25zdCB3aW5yYXRlID1cbiAgICAgICAgcm9vdEluZm8uY3VycmVudFBsYXllciA9PT0gJ0InXG4gICAgICAgICAgPyBtb3ZlSW5mby53aW5yYXRlXG4gICAgICAgICAgOiAxIC0gbW92ZUluZm8ud2lucmF0ZTtcblxuICAgICAgY3R4LmZpbGxUZXh0KHJvdW5kMyh3aW5yYXRlLCAxMDAsIDEpLCB4LCB5IC0gciAvIDIgKyBmb250U2l6ZSAvIDUpO1xuXG4gICAgICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4IFRhaG9tYWA7XG4gICAgICBjb25zdCBzY29yZVRleHQgPSBjYWxjU2NvcmVEaWZmVGV4dChyb290SW5mbywgbW92ZUluZm8pO1xuICAgICAgY3R4LmZpbGxUZXh0KHNjb3JlVGV4dCwgeCwgeSArIGZvbnRTaXplIC8gMyk7XG5cbiAgICAgIC8vIGN0eC5mb250ID0gYCR7Zm9udFNpemUgKiAwLjh9cHggVGFob21hYDtcbiAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgLy8gY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgLy8gY3R4LmZpbGxUZXh0KG5Gb3JtYXR0ZXIobW92ZUluZm8udmlzaXRzKSwgeCwgeSArIHIgLyA0ICk7XG5cbiAgICAgIGN0eC5mb250ID0gYCR7Zm9udFNpemUgKiAwLjh9cHggVGFob21hYDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgY3R4LmZpbGxUZXh0KG5Gb3JtYXR0ZXIobW92ZUluZm8udmlzaXRzKSwgeCwgeSArIHIgLyAyICsgZm9udFNpemUgLyAzKTtcblxuICAgICAgY29uc3Qgb3JkZXIgPSBtb3ZlSW5mby5vcmRlcjtcbiAgICAgIGN0eC5maWxsVGV4dCgob3JkZXIgKyAxKS50b1N0cmluZygpLCB4ICsgciwgeSAtIHIgLyAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh4LCB5LCByICogMC42LCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICBjdHgubGluZVdpZHRoID0gMDtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDApJztcbiAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIHIgKiAwLjQsIHgsIHksIHIpO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIHBDb2xvcik7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC45NSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCcpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya3VwIHtcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzOiBudW1iZXI7XG4gIGtpOiBudW1iZXI7XG4gIHZhbDogc3RyaW5nIHwgbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHM6IG51bWJlcixcbiAgICBraTogbnVtYmVyLFxuICAgIHZhbDogc3RyaW5nIHwgbnVtYmVyID0gJydcbiAgKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMucyA9IHM7XG4gICAgdGhpcy5raSA9IGtpO1xuICAgIHRoaXMudmFsID0gdmFsO1xuICB9XG4gIGRyYXcoKSB7XG4gICAgY29uc29sZS5sb2coJ1RCRCcpO1xuICB9XG59XG4iLCJpbXBvcnQgTWFya3VwIGZyb20gJy4vTWFya3VwQmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGVNYXJrdXAgZXh0ZW5kcyBNYXJrdXAge1xuICBkcmF3KCkge1xuICAgIGNvbnN0IHtjdHgsIHgsIHksIHMsIGtpfSA9IHRoaXM7XG4gICAgY29uc3QgcmFkaXVzID0gcyAqIDAuNTtcbiAgICBsZXQgc2l6ZSA9IHJhZGl1cyAqIDAuNjU7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgaWYgKGtpID09PSAxKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2ZmZic7XG4gICAgfSBlbHNlIGlmIChraSA9PT0gLTEpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgICBzaXplID0gcmFkaXVzICogMC43O1xuICAgIH1cbiAgICBpZiAoc2l6ZSA+IDApIHtcbiAgICAgIGN0eC5hcmMoeCwgeSwgc2l6ZSwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgTWFya3VwIGZyb20gJy4vTWFya3VwQmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBDcm9zc01hcmt1cCBleHRlbmRzIE1hcmt1cCB7XG4gIGRyYXcoKSB7XG4gICAgY29uc3Qge2N0eCwgeCwgeSwgcywga2l9ID0gdGhpcztcbiAgICBjb25zdCByYWRpdXMgPSBzICogMC41O1xuICAgIGxldCBzaXplID0gcmFkaXVzICogMC41O1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCAtIHNpemUsIHkgLSBzaXplKTtcbiAgICBjdHgubGluZVRvKHggKyBzaXplLCB5ICsgc2l6ZSk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgc2l6ZSwgeSAtIHNpemUpO1xuICAgIGN0eC5saW5lVG8oeCAtIHNpemUsIHkgKyBzaXplKTtcblxuICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgIGlmIChraSA9PT0gMSkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZmYnO1xuICAgIH0gZWxzZSBpZiAoa2kgPT09IC0xKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgICAgc2l6ZSA9IHJhZGl1cyAqIDAuNztcbiAgICB9XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgTWFya3VwIGZyb20gJy4vTWFya3VwQmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0TWFya3VwIGV4dGVuZHMgTWFya3VwIHtcbiAgZHJhdygpIHtcbiAgICBjb25zdCB7Y3R4LCB4LCB5LCBzLCBraSwgdmFsfSA9IHRoaXM7XG4gICAgY29uc3Qgc2l6ZSA9IHMgKiAwLjg7XG4gICAgbGV0IGZvbnRTaXplID0gc2l6ZSAvIDEuNTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYgKGtpID09PSAxKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIH0gZWxzZSBpZiAoa2kgPT09IC0xKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguY2xlYXJSZWN0KHggLSBzaXplIC8gMiwgeSAtIHNpemUgLyAyLCBzaXplLCBzaXplKTtcbiAgICB9XG4gICAgaWYgKHZhbC50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZm9udFNpemUgPSBzaXplIC8gMS41O1xuICAgIH0gZWxzZSBpZiAodmFsLnRvU3RyaW5nKCkubGVuZ3RoID09PSAyKSB7XG4gICAgICBmb250U2l6ZSA9IHNpemUgLyAxLjg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvbnRTaXplID0gc2l6ZSAvIDIuMDtcbiAgICB9XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAke2ZvbnRTaXplfXB4IFRhaG9tYWA7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjdHguZmlsbFRleHQodmFsLnRvU3RyaW5nKCksIHgsIHkgKyAyKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgTWFya3VwIGZyb20gJy4vTWFya3VwQmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBTcXVhcmVNYXJrdXAgZXh0ZW5kcyBNYXJrdXAge1xuICBkcmF3KCkge1xuICAgIGNvbnN0IHtjdHgsIHgsIHksIHMsIGtpfSA9IHRoaXM7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgbGV0IHNpemUgPSBzICogMC41NTtcbiAgICBpZiAoa2kgPT09IDEpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmJztcbiAgICB9IGVsc2UgaWYgKGtpID09PSAtMSkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gcyAqIDAuNztcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcbiAgICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgIH1cbiAgICBjdHgucmVjdCh4IC0gc2l6ZSAvIDIsIHkgLSBzaXplIC8gMiwgc2l6ZSwgc2l6ZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBNYXJrdXAgZnJvbSAnLi9NYXJrdXBCYXNlJztcblxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlTWFya3VwIGV4dGVuZHMgTWFya3VwIHtcbiAgZHJhdygpIHtcbiAgICBjb25zdCB7Y3R4LCB4LCB5LCBzLCBraX0gPSB0aGlzO1xuICAgIGNvbnN0IHJhZGl1cyA9IHMgKiAwLjU7XG4gICAgbGV0IHNpemUgPSByYWRpdXMgKiAwLjc1O1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSAtIHNpemUpO1xuICAgIGN0eC5saW5lVG8oeCAtIHNpemUgKiBNYXRoLmNvcygwLjUyMyksIHkgKyBzaXplICogTWF0aC5zaW4oMC41MjMpKTtcbiAgICBjdHgubGluZVRvKHggKyBzaXplICogTWF0aC5jb3MoMC41MjMpLCB5ICsgc2l6ZSAqIE1hdGguc2luKDAuNTIzKSk7XG5cbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBpZiAoa2kgPT09IDEpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmJztcbiAgICB9IGVsc2UgaWYgKGtpID09PSAtMSkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHgubGluZVdpZHRoID0gMztcbiAgICAgIHNpemUgPSByYWRpdXMgKiAwLjc7XG4gICAgfVxuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtjb21wYWN0fSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtBMV9MRVRURVJTLCBBMV9OVU1CRVJTLCBSRVNPVVJDRVN9IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IHtUaGVtZSwgS2ksIEFuYWx5c2lzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7emVyb3MsIGVtcHR5fSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHtDZW50ZXIsIE1hcmt1cH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2NhbGNWaXNpYmxlQXJlYSwgcmV2ZXJzZU9mZnNldH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge0ltYWdlU3RvbmV9IGZyb20gJy4vc3RvbmVzJztcbmltcG9ydCBCd1N0b25lIGZyb20gJy4vc3RvbmVzL2J3U3RvbmUnO1xuaW1wb3J0IEFuYWx5c2lzUG9pbnQgZnJvbSAnLi9zdG9uZXMvQW5hbHlzaXNQb2ludCc7XG5pbXBvcnQge2NyZWF0ZSwgbWVhbkRlcGVuZGVuY2llcywgc3RkRGVwZW5kZW5jaWVzfSBmcm9tICdtYXRoanMnO1xuXG5jb25zdCBjb25maWcgPSB7fTtcbmNvbnN0IHtzdGQsIG1lYW59ID0gY3JlYXRlKHttZWFuRGVwZW5kZW5jaWVzLCBzdGREZXBlbmRlbmNpZXN9LCBjb25maWcpO1xuXG5pbXBvcnQge1xuICBDaXJjbGVNYXJrdXAsXG4gIENyb3NzTWFya3VwLFxuICBUZXh0TWFya3VwLFxuICBTcXVhcmVNYXJrdXAsXG4gIFRyaWFuZ2xlTWFya3VwLFxufSBmcm9tICcuL21hcmt1cHMnO1xuaW1wb3J0IHthMVRvUG9zfSBmcm9tICcuL2hlbHBlcic7XG5cbi8vIGNvbnN0IGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbmxldCBkZXZpY2VQaXhlbFJhdGlvID0gMS4wO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgLy8gYnJvd3NlciBjb2RlXG59XG5cbmNvbnN0IGltYWdlczoge1xuICBba2V5OiBzdHJpbmddOiBIVE1MSW1hZ2VFbGVtZW50O1xufSA9IHt9O1xuXG5mdW5jdGlvbiBwcmVsb2FkKHVybHM6IHN0cmluZ1tdLCBkb25lOiAoKSA9PiB2b2lkKSB7XG4gIGxldCBsb2FkZWQgPSAwO1xuICBjb25zdCBpbWFnZUxvYWRlZCA9ICgpID0+IHtcbiAgICBsb2FkZWQrKztcbiAgICBpZiAobG9hZGVkID09PSB1cmxzLmxlbmd0aCkge1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmxzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFpbWFnZXNbdXJsc1tpXV0pIHtcbiAgICAgIGltYWdlc1t1cmxzW2ldXSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2VzW3VybHNbaV1dLnNyYyA9IHVybHNbaV07XG4gICAgICBpbWFnZXNbdXJsc1tpXV0ub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbWFnZUxvYWRlZCgpO1xuICAgICAgfTtcbiAgICAgIGltYWdlc1t1cmxzW2ldXS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbWFnZUxvYWRlZCgpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2hvc3RCYW5PcHRpb25zID0ge1xuICBib2FyZFNpemU6IG51bWJlcjtcbiAgc2l6ZT86IG51bWJlcjtcbiAgcGFkZGluZzogbnVtYmVyO1xuICB6b29tPzogYm9vbGVhbjtcbiAgZXh0ZW5kOiBudW1iZXI7XG4gIHRoZW1lOiBUaGVtZTtcbiAgY29vcmRpbmF0ZTogYm9vbGVhbjtcbiAgaW50ZXJhY3RpdmU6IGJvb2xlYW47XG4gIGJhY2tncm91bmQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBHaG9zdEJhbk9wdGlvbnNQYXJhbXMgPSB7XG4gIGJvYXJkU2l6ZT86IG51bWJlcjtcbiAgc2l6ZT86IG51bWJlcjtcbiAgcGFkZGluZz86IG51bWJlcjtcbiAgem9vbT86IGJvb2xlYW47XG4gIGV4dGVuZD86IG51bWJlcjtcbiAgdGhlbWU/OiBUaGVtZTtcbiAgaW50ZXJhY3RpdmU/OiBib29sZWFuO1xuICBjb29yZGluYXRlPzogYm9vbGVhbjtcbiAgYmFja2dyb3VuZD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgR2hvc3RCYW4ge1xuICBkZWZhdWx0T3B0aW9uczogR2hvc3RCYW5PcHRpb25zID0ge1xuICAgIGJvYXJkU2l6ZTogMTksXG4gICAgcGFkZGluZzogMTAsXG4gICAgZXh0ZW5kOiAzLFxuICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICBjb29yZGluYXRlOiB0cnVlLFxuICAgIHRoZW1lOiBUaGVtZS5CbGFja0FuZFdoaXRlLFxuICAgIGJhY2tncm91bmQ6IGZhbHNlLFxuICB9O1xuICBvcHRpb25zOiBHaG9zdEJhbk9wdGlvbnM7XG4gIGRvbTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gIGNhbnZhcz86IEhUTUxDYW52YXNFbGVtZW50O1xuICBib2FyZD86IEhUTUxDYW52YXNFbGVtZW50O1xuICBhbmFseXNpc0NhbnZhcz86IEhUTUxDYW52YXNFbGVtZW50O1xuICBjdXJzb3JDYW52YXM/OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgbWFya3VwQ2FudmFzPzogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgX3R1cm46IEtpO1xuICBjdXJzb3I6IFtudW1iZXIsIG51bWJlcl07XG4gIGN1cnNvclBvczogRE9NUG9pbnQ7XG4gIG1hdDogbnVtYmVyW11bXTtcbiAgbWFya3VwOiAoc3RyaW5nIHwgbnVtYmVyKVtdW107XG4gIG1heGh2OiBudW1iZXI7XG4gIHRyYW5zTWF0OiBET01NYXRyaXg7XG4gIGFuYWx5c2lzOiBBbmFseXNpcyB8IG51bGw7XG4gIHZpc2libGVBcmVhOiBudW1iZXJbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEdob3N0QmFuT3B0aW9uc1BhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgLi4udGhpcy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICB0aGlzLm1hdCA9IHplcm9zKFsxOSwgMTldKTtcbiAgICB0aGlzLm1hcmt1cCA9IGVtcHR5KFsxOSwgMTldKTtcbiAgICB0aGlzLl90dXJuID0gS2kuQmxhY2s7XG4gICAgdGhpcy5jdXJzb3IgPSBbMTgsIDBdO1xuICAgIHRoaXMuY3Vyc29yUG9zID0gbmV3IERPTVBvaW50KCk7XG4gICAgdGhpcy5tYXhodiA9IHRoaXMub3B0aW9ucy5ib2FyZFNpemU7XG4gICAgdGhpcy50cmFuc01hdCA9IG5ldyBET01NYXRyaXgoKTtcbiAgICB0aGlzLmFuYWx5c2lzID0gbnVsbDtcbiAgICB0aGlzLnZpc2libGVBcmVhID0gW1xuICAgICAgWzAsIDE4XSxcbiAgICAgIFswLCAxOF0sXG4gICAgXTtcbiAgfVxuXG4gIHNldFR1cm4odHVybjogS2kpIHtcbiAgICB0aGlzLl90dXJuID0gdHVybjtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5jYW52YXMgfHxcbiAgICAgICF0aGlzLmN1cnNvckNhbnZhcyB8fFxuICAgICAgIXRoaXMuZG9tIHx8XG4gICAgICAhdGhpcy5ib2FyZCB8fFxuICAgICAgIXRoaXMubWFya3VwQ2FudmFzIHx8XG4gICAgICAhdGhpcy5hbmFseXNpc0NhbnZhc1xuICAgIClcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCB7Ym9hcmQsIGNhbnZhcywgbWFya3VwQ2FudmFzLCBjdXJzb3JDYW52YXMsIGFuYWx5c2lzQ2FudmFzfSA9IHRoaXM7XG4gICAgY29uc3Qge3NpemUsIHpvb219ID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChzaXplKSB7XG4gICAgICBib2FyZC53aWR0aCA9IHNpemUgKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgYm9hcmQuaGVpZ2h0ID0gc2l6ZSAqIGRldmljZVBpeGVsUmF0aW87XG4gICAgICBjYW52YXMud2lkdGggPSBzaXplICogZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplICogZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgIG1hcmt1cENhbnZhcy53aWR0aCA9IHNpemUgKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgbWFya3VwQ2FudmFzLmhlaWdodCA9IHNpemUgKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgY3Vyc29yQ2FudmFzLndpZHRoID0gc2l6ZSAqIGRldmljZVBpeGVsUmF0aW87XG4gICAgICBjdXJzb3JDYW52YXMuaGVpZ2h0ID0gc2l6ZSAqIGRldmljZVBpeGVsUmF0aW87XG4gICAgICBhbmFseXNpc0NhbnZhcy53aWR0aCA9IHNpemUgKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgYW5hbHlzaXNDYW52YXMuaGVpZ2h0ID0gc2l6ZSAqIGRldmljZVBpeGVsUmF0aW87XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHtjbGllbnRXaWR0aH0gPSB0aGlzLmRvbTtcbiAgICAgIGJvYXJkLnN0eWxlLndpZHRoID0gY2xpZW50V2lkdGggKyAncHgnO1xuICAgICAgYm9hcmQuc3R5bGUuaGVpZ2h0ID0gY2xpZW50V2lkdGggKyAncHgnO1xuICAgICAgYm9hcmQud2lkdGggPSBNYXRoLmZsb29yKGNsaWVudFdpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICBib2FyZC5oZWlnaHQgPSBNYXRoLmZsb29yKGNsaWVudFdpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBjbGllbnRXaWR0aCArICdweCc7XG4gICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gY2xpZW50V2lkdGggKyAncHgnO1xuICAgICAgY2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihjbGllbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3IoY2xpZW50V2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgIG1hcmt1cENhbnZhcy5zdHlsZS53aWR0aCA9IGNsaWVudFdpZHRoICsgJ3B4JztcbiAgICAgIG1hcmt1cENhbnZhcy5zdHlsZS5oZWlnaHQgPSBjbGllbnRXaWR0aCArICdweCc7XG4gICAgICBtYXJrdXBDYW52YXMud2lkdGggPSBNYXRoLmZsb29yKGNsaWVudFdpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICBtYXJrdXBDYW52YXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihjbGllbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgY3Vyc29yQ2FudmFzLnN0eWxlLndpZHRoID0gY2xpZW50V2lkdGggKyAncHgnO1xuICAgICAgY3Vyc29yQ2FudmFzLnN0eWxlLmhlaWdodCA9IGNsaWVudFdpZHRoICsgJ3B4JztcbiAgICAgIGN1cnNvckNhbnZhcy53aWR0aCA9IE1hdGguZmxvb3IoY2xpZW50V2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgIGN1cnNvckNhbnZhcy5oZWlnaHQgPSBNYXRoLmZsb29yKGNsaWVudFdpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICBhbmFseXNpc0NhbnZhcy5zdHlsZS53aWR0aCA9IGNsaWVudFdpZHRoICsgJ3B4JztcbiAgICAgIGFuYWx5c2lzQ2FudmFzLnN0eWxlLmhlaWdodCA9IGNsaWVudFdpZHRoICsgJ3B4JztcbiAgICAgIGFuYWx5c2lzQ2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihjbGllbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgYW5hbHlzaXNDYW52YXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihjbGllbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pO1xuICAgIH1cbiAgICB0aGlzLmNhbGNCb2FyZFZpc2libGVBcmVhKHpvb20gfHwgZmFsc2UpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBpbml0KGRvbTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm1hdCA9IHplcm9zKFsxOSwgMTldKTtcbiAgICB0aGlzLm1hcmt1cCA9IGVtcHR5KFsxOSwgMTldKTtcbiAgICB0aGlzLnRyYW5zTWF0ID0gbmV3IERPTU1hdHJpeCgpO1xuXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBib2FyZC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgYm9hcmQuaWQgPSAnZ2hvc3RiYW4tYm9hcmQnO1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgY2FudmFzLmlkID0gJ2dob3N0YmFuLWNhbnZhcyc7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICBjb25zdCBtYXJrdXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBtYXJrdXBDYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG1hcmt1cENhbnZhcy5pZCA9ICdnaG9zdGJhbi1tYXJrdXAnO1xuICAgIG1hcmt1cENhbnZhcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIHRoaXMubWFya3VwQ2FudmFzID0gbWFya3VwQ2FudmFzO1xuXG4gICAgY29uc3QgY3Vyc29yQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY3Vyc29yQ2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBjdXJzb3JDYW52YXMuaWQgPSAnZ2hvc3RiYW4tY3Vyc29yJztcbiAgICB0aGlzLmN1cnNvckNhbnZhcyA9IGN1cnNvckNhbnZhcztcblxuICAgIGNvbnN0IGFuYWx5c2lzQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgYW5hbHlzaXNDYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGFuYWx5c2lzQ2FudmFzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgYW5hbHlzaXNDYW52YXMuaWQgPSAnZ2hvc3RiYW4tYW5hbHlzaXMnO1xuICAgIHRoaXMuYW5hbHlzaXNDYW52YXMgPSBhbmFseXNpc0NhbnZhcztcblxuICAgIHRoaXMuZG9tID0gZG9tO1xuXG4gICAgZG9tLmZpcnN0Q2hpbGQ/LnJlbW92ZSgpO1xuICAgIGRvbS5maXJzdENoaWxkPy5yZW1vdmUoKTtcbiAgICBkb20uZmlyc3RDaGlsZD8ucmVtb3ZlKCk7XG4gICAgZG9tLmZpcnN0Q2hpbGQ/LnJlbW92ZSgpO1xuICAgIGRvbS5maXJzdENoaWxkPy5yZW1vdmUoKTtcblxuICAgIGRvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgZG9tLmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgZG9tLmFwcGVuZENoaWxkKG1hcmt1cENhbnZhcyk7XG4gICAgZG9tLmFwcGVuZENoaWxkKGN1cnNvckNhbnZhcyk7XG4gICAgZG9tLmFwcGVuZENoaWxkKGFuYWx5c2lzQ2FudmFzKTtcblxuICAgIHRoaXMucmVzaXplKCk7XG4gICAgdGhpcy5yZW5kZXJJbnRlcmFjdGl2ZSgpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBHaG9zdEJhbk9wdGlvbnNQYXJhbXMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7Li4udGhpcy5vcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgfVxuXG4gIHNldE1hdChtYXQ6IG51bWJlcltdW10pIHtcbiAgICB0aGlzLm1hdCA9IG1hdDtcbiAgfVxuXG4gIHNldE1hcmt1cChtYXJrdXA6IHN0cmluZ1tdW10pIHtcbiAgICB0aGlzLm1hcmt1cCA9IG1hcmt1cDtcbiAgfVxuXG4gIHJlbmRlckludGVyYWN0aXZlKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY3Vyc29yQ2FudmFzO1xuICAgIGlmICghY2FudmFzKSByZXR1cm47XG4gICAgY29uc3Qge3BhZGRpbmd9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHtzcGFjZX0gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcblxuICAgIGNvbnN0IHNldEN1cnNvcldpdGhSZW5kZXIgPSAoZG9tUG9pbnQ6IERPTVBvaW50KSA9PiB7XG4gICAgICBjb25zdCBwb2ludCA9IHRoaXMudHJhbnNNYXQuaW52ZXJzZSgpLnRyYW5zZm9ybVBvaW50KGRvbVBvaW50KTtcbiAgICAgIGNvbnN0IGlkeCA9IE1hdGgucm91bmQoKHBvaW50LnggLSBwYWRkaW5nICsgc3BhY2UgLyAyKSAvIHNwYWNlKTtcbiAgICAgIGNvbnN0IGlkeSA9IE1hdGgucm91bmQoKHBvaW50LnkgLSBwYWRkaW5nICsgc3BhY2UgLyAyKSAvIHNwYWNlKTtcbiAgICAgIGNvbnN0IHh4ID0gaWR4ICogc3BhY2U7XG4gICAgICBjb25zdCB5eSA9IGlkeSAqIHNwYWNlO1xuICAgICAgY29uc3QgcCA9IHRoaXMudHJhbnNNYXQudHJhbnNmb3JtUG9pbnQobmV3IERPTVBvaW50KHh4LCB5eSkpO1xuICAgICAgdGhpcy5jdXJzb3JQb3MgPSBwO1xuICAgICAgdGhpcy5jdXJzb3IgPSBbaWR4IC0gMSwgaWR5IC0gMV07XG4gICAgICB0aGlzLmRyYXdDdXJzb3IoKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uVG91Y2hNb3ZlID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB0b3VjaGVzID0gZS5jaGFuZ2VkVG91Y2hlcztcbiAgICAgIGNvbnN0IHBvaW50ID0gbmV3IERPTVBvaW50KFxuICAgICAgICAodG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIGRldmljZVBpeGVsUmF0aW8sXG4gICAgICAgICh0b3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnRvcCkgKiBkZXZpY2VQaXhlbFJhdGlvXG4gICAgICApO1xuICAgICAgc2V0Q3Vyc29yV2l0aFJlbmRlcihwb2ludCk7XG4gICAgfTtcbiAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBwb2ludCA9IG5ldyBET01Qb2ludChcbiAgICAgICAgZS5vZmZzZXRYICogZGV2aWNlUGl4ZWxSYXRpbyxcbiAgICAgICAgZS5vZmZzZXRZICogZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgKTtcbiAgICAgIHNldEN1cnNvcldpdGhSZW5kZXIocG9pbnQpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmludGVyYWN0aXZlKSB7XG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG9uTW91c2VNb3ZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvbk1vdXNlTW92ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0QW5hbHlzaXMoYW5hbHlzaXM6IEFuYWx5c2lzIHwgbnVsbCkge1xuICAgIGlmICghYW5hbHlzaXMpIHJldHVybjtcbiAgICB0aGlzLmFuYWx5c2lzID0gYW5hbHlzaXM7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRyYXdBbmFseXNpcyhhbmFseXNpcyk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBzZXRUaGVtZSh0aGVtZTogVGhlbWUpIHtcbiAgICBpZiAoIVJFU09VUkNFU1t0aGVtZV0pIHJldHVybjtcbiAgICBjb25zdCB7Ym9hcmQsIGJsYWNrcywgd2hpdGVzfSA9IFJFU09VUkNFU1t0aGVtZV07XG4gICAgdGhpcy5vcHRpb25zLnRoZW1lID0gdGhlbWU7XG4gICAgcHJlbG9hZChjb21wYWN0KFtib2FyZCwgLi4uYmxhY2tzLCAuLi53aGl0ZXNdKSwgKCkgPT4ge1xuICAgICAgdGhpcy5kcmF3Qm9hcmQoKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gICAgdGhpcy5kcmF3Qm9hcmQoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY2FsY0JvYXJkVmlzaWJsZUFyZWEoem9vbTogYm9vbGVhbikge1xuICAgIGNvbnN0IHtjYW52YXMsIGFuYWx5c2lzQ2FudmFzLCBib2FyZCwgY3Vyc29yQ2FudmFzLCBtYXJrdXBDYW52YXN9ID0gdGhpcztcbiAgICBjb25zdCB7Ym9hcmRTaXplLCBleHRlbmR9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHt2aXNpYmxlQXJlYTogem9vbWVkVmlzaWJsZUFyZWEsIGNlbnRlcn0gPSBjYWxjVmlzaWJsZUFyZWEoXG4gICAgICB0aGlzLm1hdCxcbiAgICAgIGJvYXJkU2l6ZSxcbiAgICAgIGV4dGVuZFxuICAgICk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzPy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IGJvYXJkQ3R4ID0gYm9hcmQ/LmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgY3Vyc29yQ3R4ID0gY3Vyc29yQ2FudmFzPy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IG1hcmt1cEN0eCA9IG1hcmt1cENhbnZhcz8uZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBhbmFseXNpc0N0eCA9IGFuYWx5c2lzQ2FudmFzPy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IHZpc2libGVBcmVhID0gem9vbVxuICAgICAgPyB6b29tZWRWaXNpYmxlQXJlYVxuICAgICAgOiBbXG4gICAgICAgICAgWzAsIDE4XSxcbiAgICAgICAgICBbMCwgMThdLFxuICAgICAgICBdO1xuXG4gICAgdGhpcy52aXNpYmxlQXJlYSA9IHZpc2libGVBcmVhO1xuXG4gICAgaWYgKHpvb20pIHtcbiAgICAgIGNvbnN0IHtzcGFjZX0gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcbiAgICAgIGNvbnN0IHpvb21lZEJvYXJkU2l6ZSA9IHZpc2libGVBcmVhWzBdWzFdIC0gdmlzaWJsZUFyZWFbMF1bMF0gKyAxO1xuICAgICAgY29uc3Qgc2NhbGUgPSAxIC8gKHpvb21lZEJvYXJkU2l6ZSAvIGJvYXJkU2l6ZSk7XG5cbiAgICAgIGxldCBvZmZzZXRYID0gMDtcbiAgICAgIGxldCBvZmZzZXRZID0gMDtcblxuICAgICAgLy8gY29uc3Qgb2Zmc2V0ID0gdGhpcy5vcHRpb25zLnBhZGRpbmc7XG4gICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm9wdGlvbnMucGFkZGluZyAqIHNjYWxlO1xuICAgICAgc3dpdGNoIChjZW50ZXIpIHtcbiAgICAgICAgY2FzZSBDZW50ZXIuVG9wTGVmdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDZW50ZXIuVG9wUmlnaHQ6XG4gICAgICAgICAgb2Zmc2V0WCA9IHZpc2libGVBcmVhWzBdWzBdICogc3BhY2UgKiBzY2FsZSArIG9mZnNldDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDZW50ZXIuQm90dG9tTGVmdDpcbiAgICAgICAgICBvZmZzZXRZID0gdmlzaWJsZUFyZWFbMV1bMF0gKiBzcGFjZSAqIHNjYWxlICsgb2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENlbnRlci5Cb3R0b21SaWdodDpcbiAgICAgICAgICBvZmZzZXRYID0gdmlzaWJsZUFyZWFbMF1bMF0gKiBzcGFjZSAqIHNjYWxlICsgb2Zmc2V0O1xuICAgICAgICAgIG9mZnNldFkgPSB2aXNpYmxlQXJlYVsxXVswXSAqIHNwYWNlICogc2NhbGUgKyBvZmZzZXQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLnRyYW5zTWF0ID0gbmV3IERPTU1hdHJpeCgpO1xuICAgICAgdGhpcy50cmFuc01hdC50cmFuc2xhdGVTZWxmKC1vZmZzZXRYLCAtb2Zmc2V0WSk7XG4gICAgICB0aGlzLnRyYW5zTWF0LnNjYWxlU2VsZihzY2FsZSwgc2NhbGUpO1xuICAgICAgY3R4Py5zZXRUcmFuc2Zvcm0odGhpcy50cmFuc01hdCk7XG4gICAgICBib2FyZEN0eD8uc2V0VHJhbnNmb3JtKHRoaXMudHJhbnNNYXQpO1xuICAgICAgYW5hbHlzaXNDdHg/LnNldFRyYW5zZm9ybSh0aGlzLnRyYW5zTWF0KTtcbiAgICAgIGN1cnNvckN0eD8uc2V0VHJhbnNmb3JtKHRoaXMudHJhbnNNYXQpO1xuICAgICAgbWFya3VwQ3R4Py5zZXRUcmFuc2Zvcm0odGhpcy50cmFuc01hdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eD8ucmVzZXRUcmFuc2Zvcm0oKTtcbiAgICAgIGJvYXJkQ3R4Py5yZXNldFRyYW5zZm9ybSgpO1xuICAgICAgYW5hbHlzaXNDdHg/LnJlc2V0VHJhbnNmb3JtKCk7XG4gICAgICBjdXJzb3JDdHg/LnJlc2V0VHJhbnNmb3JtKCk7XG4gICAgICBtYXJrdXBDdHg/LnJlc2V0VHJhbnNmb3JtKCk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmNsZWFyQWxsQ2FudmFzKCk7XG4gICAgdGhpcy5kcmF3Qm9hcmQoKTtcbiAgICB0aGlzLmRyYXdTdG9uZXMoKTtcbiAgICB0aGlzLmRyYXdNYXJrdXAoKTtcbiAgfVxuXG4gIGNsZWFyQWxsQ2FudmFzID0gKCkgPT4ge1xuICAgIHRoaXMuY2xlYXJCb2FyZCgpO1xuICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcbiAgICB0aGlzLmNsZWFyQ3Vyc29yQ2FudmFzKCk7XG4gICAgdGhpcy5jbGVhckFuYWx5c2lzQ2FudmFzKCk7XG4gIH07XG5cbiAgY2xlYXJCb2FyZCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuYm9hcmQpIHJldHVybjtcbiAgICBjb25zdCBjdHggPSB0aGlzLmJvYXJkLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAvLyBXaWxsIGFsd2F5cyBjbGVhciB0aGUgcmlnaHQgc3BhY2VcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH07XG5cbiAgY2xlYXJDYW52YXMgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbnZhcykgcmV0dXJuO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH07XG5cbiAgY2xlYXJNYXJrdXBDYW52YXMgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLm1hcmt1cENhbnZhcykgcmV0dXJuO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMubWFya3VwQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMubWFya3VwQ2FudmFzLndpZHRoLCB0aGlzLm1hcmt1cENhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH07XG5cbiAgY2xlYXJDdXJzb3JDYW52YXMgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLmN1cnNvckNhbnZhcykgcmV0dXJuO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3Vyc29yQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3Vyc29yQ2FudmFzLndpZHRoLCB0aGlzLmN1cnNvckNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH07XG5cbiAgY2xlYXJBbmFseXNpc0NhbnZhcyA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuYW5hbHlzaXNDYW52YXMpIHJldHVybjtcbiAgICBjb25zdCBjdHggPSB0aGlzLmFuYWx5c2lzQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICBjdHguY2xlYXJSZWN0KFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLmFuYWx5c2lzQ2FudmFzLndpZHRoLFxuICAgICAgICB0aGlzLmFuYWx5c2lzQ2FudmFzLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9O1xuXG4gIGRyYXdBbmFseXNpcyA9IChhbmFseXNpczogQW5hbHlzaXMpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmFuYWx5c2lzQ2FudmFzO1xuICAgIGNvbnN0IHt0aGVtZSA9IFRoZW1lLkJsYWNrQW5kV2hpdGV9ID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICghY2FudmFzIHx8ICFhbmFseXNpcykgcmV0dXJuO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmICghY3R4KSByZXR1cm47XG4gICAgdGhpcy5jbGVhckFuYWx5c2lzQ2FudmFzKCk7XG4gICAgY29uc3Qge3Jvb3RJbmZvfSA9IGFuYWx5c2lzO1xuXG4gICAgY29uc3QgdXRzID0gYW5hbHlzaXMubW92ZUluZm9zLm1hcChtID0+IG0udXRpbGl0eSk7XG4gICAgY29uc3QgdXRzWiA9IHV0cy5tYXAodiA9PiB7XG4gICAgICByZXR1cm4gKHYgLSBtZWFuKHV0cykpIC8gc3RkKC4uLnV0cyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB1dHNOb3JtID0gdXRzWi5tYXAodiA9PiB7XG4gICAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi51dHMpO1xuICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oLi4udXRzKTtcbiAgICAgIHJldHVybiAodiAtIG1pbikgLyAobWF4IC0gbWluKTtcbiAgICB9KTtcblxuICAgIGFuYWx5c2lzLm1vdmVJbmZvcy5mb3JFYWNoKChtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKG0ubW92ZSA9PT0gJ3Bhc3MnKSByZXR1cm47XG4gICAgICBjb25zdCBpZE9iaiA9IEpTT04ucGFyc2UoYW5hbHlzaXMuaWQpO1xuICAgICAgY29uc3Qge3g6IG94LCB5OiBveX0gPSByZXZlcnNlT2Zmc2V0KHRoaXMubWF0LCBpZE9iai5ieCwgaWRPYmouYnkpO1xuICAgICAgbGV0IHt4OiBpLCB5OiBqfSA9IGExVG9Qb3MobS5tb3ZlKTtcbiAgICAgIGkgKz0gb3g7XG4gICAgICBqICs9IG95O1xuICAgICAgaWYgKHRoaXMubWF0W2ldW2pdICE9PSAwKSByZXR1cm47XG4gICAgICBjb25zdCB7c3BhY2UsIHNjYWxlZFBhZGRpbmd9ID0gdGhpcy5jYWxjU3BhY2VBbmRQYWRkaW5nKCk7XG4gICAgICBjb25zdCB4ID0gc2NhbGVkUGFkZGluZyArIGkgKiBzcGFjZTtcbiAgICAgIGNvbnN0IHkgPSBzY2FsZWRQYWRkaW5nICsgaiAqIHNwYWNlO1xuICAgICAgY29uc3QgcmF0aW8gPSAwLjQ2O1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhlbWUgIT09IFRoZW1lLlN1YmR1ZWQgJiZcbiAgICAgICAgdGhlbWUgIT09IFRoZW1lLkJsYWNrQW5kV2hpdGUgJiZcbiAgICAgICAgdGhlbWUgIT09IFRoZW1lLkZsYXRcbiAgICAgICkge1xuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDM7XG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gMztcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gJyM1NTUnO1xuICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDA7XG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gJyNmZmYnO1xuICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgICB9XG4gICAgICBjb25zdCBzdG9uZSA9IG5ldyBBbmFseXNpc1BvaW50KFxuICAgICAgICBjdHgsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHNwYWNlICogcmF0aW8sXG4gICAgICAgIHJvb3RJbmZvLFxuICAgICAgICBtLFxuICAgICAgICB1dHNOb3JtW2luZGV4XSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICAgIHN0b25lLmRyYXcoKTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXhbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAvLyAgICAgY29uc3QgdmFsdWUgPSBtYXRyaXhbaV1bal07XG4gICAgLy8gICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgIC8vICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8vICAgICAgIGlmIChjdHgpIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHtzcGFjZSwgc2NhbGVkUGFkZGluZ30gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcbiAgICAvLyAgICAgICAgIGNvbnN0IHggPSBzY2FsZWRQYWRkaW5nICsgaSAqIHNwYWNlO1xuICAgIC8vICAgICAgICAgY29uc3QgeSA9IHNjYWxlZFBhZGRpbmcgKyBqICogc3BhY2U7XG5cbiAgICAvLyAgICAgICAgIGNvbnN0IHJhdGlvID0gMC40NjtcbiAgICAvLyAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgLy8gICAgICAgICBpZiAoXG4gICAgLy8gICAgICAgICAgIHRoZW1lICE9PSBUaGVtZS5TdWJkdWVkICYmXG4gICAgLy8gICAgICAgICAgIHRoZW1lICE9PSBUaGVtZS5CbGFja0FuZFdoaXRlICYmXG4gICAgLy8gICAgICAgICAgIHRoZW1lICE9PSBUaGVtZS5GbGF0XG4gICAgLy8gICAgICAgICApIHtcbiAgICAvLyAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSAzO1xuICAgIC8vICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDM7XG4gICAgLy8gICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9ICcjNTU1JztcbiAgICAvLyAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA4O1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgbGV0IHN0b25lO1xuICAgIC8vICAgICAgICAgc3dpdGNoICh0aGVtZSkge1xuICAgIC8vICAgICAgICAgICBjYXNlIFRoZW1lLkJsYWNrQW5kV2hpdGU6XG4gICAgLy8gICAgICAgICAgIGNhc2UgVGhlbWUuRmxhdDoge1xuICAgIC8vICAgICAgICAgICAgIHN0b25lID0gbmV3IEJ3U3RvbmUoY3R4LCB4LCB5LCBzcGFjZSAqIHJhdGlvLCB2YWx1ZSk7XG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgZGVmYXVsdDoge1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGJsYWNrcyA9IFJFU09VUkNFU1t0aGVtZV0uYmxhY2tzLm1hcChpID0+IGltYWdlc1tpXSk7XG4gICAgLy8gICAgICAgICAgICAgY29uc3Qgd2hpdGVzID0gUkVTT1VSQ0VTW3RoZW1lXS53aGl0ZXMubWFwKGkgPT4gaW1hZ2VzW2ldKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCByID0gc3BhY2UgKiByYXRpbztcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBtb2QgPSBpICsgMTAgKyBqO1xuICAgIC8vICAgICAgICAgICAgIHN0b25lID0gbmV3IEltYWdlU3RvbmUoXG4gICAgLy8gICAgICAgICAgICAgICBjdHgsXG4gICAgLy8gICAgICAgICAgICAgICB4LFxuICAgIC8vICAgICAgICAgICAgICAgeSxcbiAgICAvLyAgICAgICAgICAgICAgIHIsXG4gICAgLy8gICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAvLyAgICAgICAgICAgICAgIG1vZCxcbiAgICAvLyAgICAgICAgICAgICAgIGJsYWNrcyxcbiAgICAvLyAgICAgICAgICAgICAgIHdoaXRlc1xuICAgIC8vICAgICAgICAgICAgICk7XG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHN0b25lLmRyYXcoKTtcbiAgICAvLyAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9O1xuXG4gIGRyYXdNYXJrdXAgPSAoXG4gICAgbWF0OiBudW1iZXJbXVtdID0gdGhpcy5tYXQsXG4gICAgbWFya3VwOiAoc3RyaW5nIHwgbnVtYmVyKVtdW10gPSB0aGlzLm1hcmt1cFxuICApID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnbWFya3VwJywgbWFya3VwKTtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLm1hcmt1cENhbnZhcztcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICB0aGlzLmNsZWFyTWFya3VwQ2FudmFzKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmt1cC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hcmt1cFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWFya3VwW2ldW2pdO1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IHtzcGFjZSwgc2NhbGVkUGFkZGluZ30gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBzY2FsZWRQYWRkaW5nICsgaSAqIHNwYWNlO1xuICAgICAgICAgICAgY29uc3QgeSA9IHNjYWxlZFBhZGRpbmcgKyBqICogc3BhY2U7XG4gICAgICAgICAgICBjb25zdCBraSA9IG1hdFtpXVtqXTtcbiAgICAgICAgICAgIGxldCBtYXJrdXA7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgTWFya3VwLkNpcmNsZTpcbiAgICAgICAgICAgICAgICBjYXNlIE1hcmt1cC5DdXJyZW50OiB7XG4gICAgICAgICAgICAgICAgICBtYXJrdXAgPSBuZXcgQ2lyY2xlTWFya3VwKGN0eCwgeCwgeSwgc3BhY2UsIGtpKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIE1hcmt1cC5TcXVhcmU6IHtcbiAgICAgICAgICAgICAgICAgIG1hcmt1cCA9IG5ldyBTcXVhcmVNYXJrdXAoY3R4LCB4LCB5LCBzcGFjZSwga2kpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgTWFya3VwLlRyaWFuZ2xlOiB7XG4gICAgICAgICAgICAgICAgICBtYXJrdXAgPSBuZXcgVHJpYW5nbGVNYXJrdXAoY3R4LCB4LCB5LCBzcGFjZSwga2kpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgTWFya3VwLkNyb3NzOiB7XG4gICAgICAgICAgICAgICAgICBtYXJrdXAgPSBuZXcgQ3Jvc3NNYXJrdXAoY3R4LCB4LCB5LCBzcGFjZSwga2kpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya3VwID0gbmV3IFRleHRNYXJrdXAoY3R4LCB4LCB5LCBzcGFjZSwga2ksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtYXJrdXA/LmRyYXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZHJhd0JvYXJkID0gKCkgPT4ge1xuICAgIHRoaXMuY2xlYXJCb2FyZCgpO1xuICAgIHRoaXMuZHJhd0JhbigpO1xuICAgIHRoaXMuZHJhd0JvYXJkTGluZSgpO1xuICAgIHRoaXMuZHJhd1N0YXJzKCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb29yZGluYXRlKSB7XG4gICAgICB0aGlzLmRyYXdDb29yZGluYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIGRyYXdCYW4gPSAoKSA9PiB7XG4gICAgY29uc3Qge2JvYXJkfSA9IHRoaXM7XG4gICAgY29uc3Qge3RoZW1lfSA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAoYm9hcmQpIHtcbiAgICAgIGJvYXJkLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcycHgnO1xuICAgICAgY29uc3QgY3R4ID0gYm9hcmQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgaWYgKHRoZW1lID09PSBUaGVtZS5CbGFja0FuZFdoaXRlKSB7XG4gICAgICAgICAgYm9hcmQuc3R5bGUuYm94U2hhZG93ID0gJzBweCAwcHggMHB4ICMwMDAwMDAnO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGJvYXJkLndpZHRoLCBib2FyZC5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoZW1lID09PSBUaGVtZS5GbGF0KSB7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjRUNCNTVBJztcbiAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgYm9hcmQud2lkdGgsIGJvYXJkLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdGhlbWUgPT09IFRoZW1lLldhbG51dCAmJlxuICAgICAgICAgIFJFU09VUkNFU1t0aGVtZV0uYm9hcmQgIT09IHVuZGVmaW5lZFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBib2FyZFVybCA9IFJFU09VUkNFU1t0aGVtZV0uYm9hcmQgfHwgJyc7XG4gICAgICAgICAgY29uc3QgYm9hcmRSZXMgPSBpbWFnZXNbYm9hcmRVcmxdO1xuICAgICAgICAgIGlmIChib2FyZFJlcykge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShib2FyZFJlcywgMCwgMCwgYm9hcmQud2lkdGgsIGJvYXJkLmhlaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGJvYXJkVXJsID0gUkVTT1VSQ0VTW3RoZW1lXS5ib2FyZCB8fCAnJztcbiAgICAgICAgICBjb25zdCBpbWFnZSA9IGltYWdlc1tib2FyZFVybF07XG4gICAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gY3R4LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsICdyZXBlYXQnKTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBwYXR0ZXJuO1xuICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgYm9hcmQud2lkdGgsIGJvYXJkLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRyYXdCb2FyZExpbmUgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLmJvYXJkKSByZXR1cm47XG5cbiAgICBjb25zdCB7dmlzaWJsZUFyZWF9ID0gdGhpcztcbiAgICBjb25zdCBjdHggPSB0aGlzLmJvYXJkLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY29uc3Qge3NwYWNlLCBzY2FsZWRQYWRkaW5nfSA9IHRoaXMuY2FsY1NwYWNlQW5kUGFkZGluZygpO1xuXG4gICAgICBjdHgubGluZVdpZHRoID0gMSAqIGRldmljZVBpeGVsUmF0aW87XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAwMDAnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgZm9yIChsZXQgaSA9IHZpc2libGVBcmVhWzBdWzBdOyBpIDw9IHZpc2libGVBcmVhWzBdWzFdOyBpKyspIHtcbiAgICAgICAgY3R4Lm1vdmVUbyhcbiAgICAgICAgICBpICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nLFxuICAgICAgICAgIHNjYWxlZFBhZGRpbmcgKyB2aXNpYmxlQXJlYVsxXVswXSAqIHNwYWNlXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgaSAqIHNwYWNlICsgc2NhbGVkUGFkZGluZyxcbiAgICAgICAgICBzcGFjZSAqIHZpc2libGVBcmVhWzFdWzFdICsgc2NhbGVkUGFkZGluZ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHZpc2libGVBcmVhWzFdWzBdOyBpIDw9IHZpc2libGVBcmVhWzFdWzFdOyBpKyspIHtcbiAgICAgICAgY3R4Lm1vdmVUbyhcbiAgICAgICAgICB2aXNpYmxlQXJlYVswXVswXSAqIHNwYWNlICsgc2NhbGVkUGFkZGluZyxcbiAgICAgICAgICBpICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgdmlzaWJsZUFyZWFbMF1bMV0gKiBzcGFjZSArIHNjYWxlZFBhZGRpbmcsXG4gICAgICAgICAgaSAqIHNwYWNlICsgc2NhbGVkUGFkZGluZ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgfTtcblxuICBkcmF3U3RhcnMgPSAoXG4gICAgdmlzaWJsZUFyZWEgPSBbXG4gICAgICBbMCwgMThdLFxuICAgICAgWzAsIDE4XSxcbiAgICBdXG4gICkgPT4ge1xuICAgIGlmICghdGhpcy5jYW52YXMpIHJldHVybjtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChjdHgpIHtcbiAgICAgIGNvbnN0IHtzcGFjZSwgc2NhbGVkUGFkZGluZ30gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcbiAgICAgIC8vIERyYXdpbmcgc3RhclxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgWzMsIDksIDE1XS5mb3JFYWNoKGkgPT4ge1xuICAgICAgICBbMywgOSwgMTVdLmZvckVhY2goaiA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaSA+IHZpc2libGVBcmVhWzBdWzBdICYmXG4gICAgICAgICAgICBpIDwgdmlzaWJsZUFyZWFbMF1bMV0gJiZcbiAgICAgICAgICAgIGogPiB2aXNpYmxlQXJlYVsxXVswXSAmJlxuICAgICAgICAgICAgaiA8IHZpc2libGVBcmVhWzFdWzFdXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgICBpICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nLFxuICAgICAgICAgICAgICBqICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nLFxuICAgICAgICAgICAgICAzICogZGV2aWNlUGl4ZWxSYXRpbyxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMiAqIE1hdGguUEksXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBkcmF3Q29vcmRpbmF0ZSA9IChcbiAgICB2aXNpYmxlQXJlYSA9IFtcbiAgICAgIFswLCAxOF0sXG4gICAgICBbMCwgMThdLFxuICAgIF1cbiAgKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSB0aGlzLmJvYXJkO1xuICAgIGlmICghYm9hcmQpIHJldHVybjtcbiAgICBjb25zdCBjdHggPSBib2FyZC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IHtzcGFjZSwgc2NhbGVkUGFkZGluZ30gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcbiAgICBpZiAoY3R4KSB7XG4gICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAwMDAnO1xuICAgICAgY3R4LmZvbnQgPSBgYm9sZCAke3NwYWNlIC8gMi44fXB4IEhlbHZldGljYWA7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IHNwYWNlIC8gMztcbiAgICAgIEExX0xFVFRFUlMuZm9yRWFjaCgobCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IHNwYWNlICogaW5kZXggKyBzY2FsZWRQYWRkaW5nO1xuICAgICAgICBpZiAoaW5kZXggPj0gdmlzaWJsZUFyZWFbMF1bMF0gJiYgaW5kZXggPD0gdmlzaWJsZUFyZWFbMF1bMV0pIHtcbiAgICAgICAgICBjdHguZmlsbFRleHQobCwgeCwgMCArIG9mZnNldCk7XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KGwsIHgsIGJvYXJkLmhlaWdodCAtIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgQTFfTlVNQkVSUy5mb3JFYWNoKChsOiBudW1iZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHkgPSBzcGFjZSAqIGluZGV4ICsgc2NhbGVkUGFkZGluZztcbiAgICAgICAgaWYgKGluZGV4ID49IHZpc2libGVBcmVhWzFdWzBdICYmIGluZGV4IDw9IHZpc2libGVBcmVhWzFdWzFdKSB7XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KGwudG9TdHJpbmcoKSwgb2Zmc2V0LCB5KTtcbiAgICAgICAgICBjdHguZmlsbFRleHQobC50b1N0cmluZygpLCBib2FyZC53aWR0aCAtIG9mZnNldCwgeSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjYWxjU3BhY2VBbmRQYWRkaW5nID0gKGNhbnZhcyA9IHRoaXMuY2FudmFzKSA9PiB7XG4gICAgbGV0IHNwYWNlID0gMDtcbiAgICBsZXQgc2NhbGVkUGFkZGluZyA9IDA7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc3Qge3BhZGRpbmcsIGJvYXJkU2l6ZX0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAvLyBzY2FsZWRQYWRkaW5nID0gcGFkZGluZyAqIGRldmljZVBpeGVsUmF0aW87XG4gICAgICBzY2FsZWRQYWRkaW5nID0gcGFkZGluZztcbiAgICAgIHNwYWNlID0gKGNhbnZhcy53aWR0aCAtIHBhZGRpbmcgKiAyKSAvIGJvYXJkU2l6ZTtcbiAgICAgIHNjYWxlZFBhZGRpbmcgPSBzY2FsZWRQYWRkaW5nICsgc3BhY2UgLyAyO1xuICAgIH1cbiAgICByZXR1cm4ge3NwYWNlLCBzY2FsZWRQYWRkaW5nfTtcbiAgfTtcblxuICBkcmF3Q3Vyc29yID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY3Vyc29yQ2FudmFzO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIHRoaXMuY2xlYXJDdXJzb3JDYW52YXMoKTtcbiAgICAgIGNvbnN0IHtwYWRkaW5nfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY29uc3Qge3NwYWNlfSA9IHRoaXMuY2FsY1NwYWNlQW5kUGFkZGluZygpO1xuICAgICAgY29uc3Qge3Zpc2libGVBcmVhfSA9IHRoaXM7XG5cbiAgICAgIGNvbnN0IFtpZHgsIGlkeV0gPSB0aGlzLmN1cnNvcjtcbiAgICAgIGlmIChpZHggPCB2aXNpYmxlQXJlYVswXVswXSB8fCBpZHggPiB2aXNpYmxlQXJlYVswXVsxXSkgcmV0dXJuO1xuICAgICAgaWYgKGlkeSA8IHZpc2libGVBcmVhWzFdWzBdIHx8IGlkeSA+IHZpc2libGVBcmVhWzFdWzFdKSByZXR1cm47XG4gICAgICBjb25zdCB4ID0gaWR4ICogc3BhY2UgKyBzcGFjZSAvIDIgKyBwYWRkaW5nO1xuICAgICAgY29uc3QgeSA9IGlkeSAqIHNwYWNlICsgc3BhY2UgLyAyICsgcGFkZGluZztcblxuICAgICAgaWYgKGN0eCkge1xuICAgICAgICBjb25zdCBzaXplID0gc3BhY2UgKiAwLjQ7XG4gICAgICAgIGlmIChzaXplID4gMCkge1xuICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5hcmMoeCwgeSwgc2l6ZSwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuNjtcbiAgICAgICAgICBpZiAodGhpcy5fdHVybiA9PT0gS2kuQmxhY2spIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl90dXJuID09PSBLaS5XaGl0ZSkge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRkYnO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjRkZGJztcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRyYXdTdG9uZXMgPSAobWF0OiBudW1iZXJbXVtdID0gdGhpcy5tYXQpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBjb25zdCB7dGhlbWUgPSBUaGVtZS5CbGFja0FuZFdoaXRlfSA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWF0W2ldW2pdO1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHtzcGFjZSwgc2NhbGVkUGFkZGluZ30gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcbiAgICAgICAgICAgICAgY29uc3QgeCA9IHNjYWxlZFBhZGRpbmcgKyBpICogc3BhY2U7XG4gICAgICAgICAgICAgIGNvbnN0IHkgPSBzY2FsZWRQYWRkaW5nICsgaiAqIHNwYWNlO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gMC40NTtcbiAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoZW1lICE9PSBUaGVtZS5TdWJkdWVkICYmXG4gICAgICAgICAgICAgICAgdGhlbWUgIT09IFRoZW1lLkJsYWNrQW5kV2hpdGUgJiZcbiAgICAgICAgICAgICAgICB0aGVtZSAhPT0gVGhlbWUuRmxhdFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDM7XG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSAzO1xuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9ICcjNTU1JztcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSAwO1xuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IHN0b25lO1xuICAgICAgICAgICAgICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBUaGVtZS5CbGFja0FuZFdoaXRlOlxuICAgICAgICAgICAgICAgIGNhc2UgVGhlbWUuRmxhdDoge1xuICAgICAgICAgICAgICAgICAgc3RvbmUgPSBuZXcgQndTdG9uZShjdHgsIHgsIHksIHNwYWNlICogcmF0aW8sIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBibGFja3MgPSBSRVNPVVJDRVNbdGhlbWVdLmJsYWNrcy5tYXAoaSA9PiBpbWFnZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgd2hpdGVzID0gUkVTT1VSQ0VTW3RoZW1lXS53aGl0ZXMubWFwKGkgPT4gaW1hZ2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzcGFjZSAqIHJhdGlvO1xuICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0gaSArIDEwICsgajtcbiAgICAgICAgICAgICAgICAgIHN0b25lID0gbmV3IEltYWdlU3RvbmUoXG4gICAgICAgICAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1vZCxcbiAgICAgICAgICAgICAgICAgICAgYmxhY2tzLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZXNcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHN0b25lLmRyYXcoKTtcbiAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgbWF0Y2hBbGwgZnJvbSAnc3RyaW5nLnByb3RvdHlwZS5tYXRjaGFsbCc7XG5cbmV4cG9ydCBjb25zdCBNT1ZFX1BST1BfTElTVCA9IFtcbiAgJ0InLFxuICAvLyBLTyBpcyBzdGFuZGFyZCBpbiBtb3ZlIGxpc3QgYnV0IHVzdWFsbHkgYmUgdXNlZCBmb3Iga29taSBpbiBnYW1laW5mbyBwcm9wc1xuICAvLyAnS08nLFxuICAnTU4nLFxuICAnVycsXG5dO1xuZXhwb3J0IGNvbnN0IFNFVFVQX1BST1BfTElTVCA9IFtcbiAgJ0FCJyxcbiAgJ0FFJyxcbiAgJ0FXJyxcbiAgLy9UT0RPOiBQTCBpcyBhIHZhbHVlIG9mIGNvbG9yIHR5cGVcbiAgLy8gJ1BMJ1xuXTtcbmV4cG9ydCBjb25zdCBOT0RFX0FOTk9UQVRJT05fUFJPUF9MSVNUID0gW1xuICAnQScsXG4gICdDJyxcbiAgJ0RNJyxcbiAgJ0dCJyxcbiAgJ0dXJyxcbiAgJ0hPJyxcbiAgJ04nLFxuICAnVUMnLFxuICAnVicsXG5dO1xuZXhwb3J0IGNvbnN0IE1PVkVfQU5OT1RBVElPTl9QUk9QX0xJU1QgPSBbXG4gICdCTScsXG4gICdETycsXG4gICdJVCcsXG4gIC8vIFRFIGlzIHN0YW5kYXJkIGluIG1vdmUgYW5ub3RhdGlvbiBmb3IgdGVzdWppXG4gIC8vICdURScsXG5dO1xuZXhwb3J0IGNvbnN0IE1BUktVUF9QUk9QX0xJU1QgPSBbXG4gICdBUicsXG4gICdDUicsXG4gICdMQicsXG4gICdMTicsXG4gICdNQScsXG4gICdTTCcsXG4gICdTUScsXG4gICdUUicsXG5dO1xuXG5leHBvcnQgY29uc3QgUk9PVF9QUk9QX0xJU1QgPSBbJ0FQJywgJ0NBJywgJ0ZGJywgJ0dNJywgJ1NUJywgJ1NaJ107XG5leHBvcnQgY29uc3QgR0FNRV9JTkZPX1BST1BfTElTVCA9IFtcbiAgLy9URSBOb24tc3RhbmRhcmRcbiAgJ1RFJyxcbiAgLy9LTyBOb24tc3RhbmRhcmRcbiAgJ0tPJyxcbiAgJ0FOJyxcbiAgJ0JSJyxcbiAgJ0JUJyxcbiAgJ0NQJyxcbiAgJ0RUJyxcbiAgJ0VWJyxcbiAgJ0dOJyxcbiAgJ0dDJyxcbiAgJ09OJyxcbiAgJ09UJyxcbiAgJ1BCJyxcbiAgJ1BDJyxcbiAgJ1BXJyxcbiAgJ1JFJyxcbiAgJ1JPJyxcbiAgJ1JVJyxcbiAgJ1NPJyxcbiAgJ1RNJyxcbiAgJ1VTJyxcbiAgJ1dSJyxcbiAgJ1dUJyxcbl07XG5leHBvcnQgY29uc3QgVElNSU5HX1BST1BfTElTVCA9IFsnQkwnLCAnT0InLCAnT1cnLCAnV0wnXTtcbmV4cG9ydCBjb25zdCBNSVNDRUxMQU5FT1VTX1BST1BfTElTVCA9IFsnRkcnLCAnUE0nLCAnVlcnXTtcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9QUk9QX0xJU1QgPSBbJ1BJJywgJ1BBSScsICdOSUQnXTtcblxuZXhwb3J0IGNvbnN0IExJU1RfT0ZfUE9JTlRTX1BST1AgPSBbJ0FCJywgJ0FFJywgJ0FXJ107XG5cbmNvbnN0IFRPS0VOX1JFR0VYID0gbmV3IFJlZ0V4cCgvKFtBLVpdKilcXFsoW1xcc1xcU10qPylcXF0vKTtcblxuZXhwb3J0IGNsYXNzIFNnZlByb3BCYXNlIHtcbiAgdG9rZW46IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgdmFsdWVzOiBzdHJpbmdbXTtcbiAgdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHRva2VuOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHZhbHVlcz86IHN0cmluZ1tdKSB7XG4gICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcyB8fCBbdmFsdWVdO1xuICAgIHRoaXMudHlwZSA9ICctJztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBgJHt0aGlzLnRva2VufSR7dGhpcy52YWx1ZXMubWFwKHYgPT4gYFske3Z9XWApLmpvaW4oJycpfWA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVQcm9wIGV4dGVuZHMgU2dmUHJvcEJhc2Uge1xuICBjb25zdHJ1Y3Rvcih0b2tlbjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCB2YWx1ZXM/OiBzdHJpbmdbXSkge1xuICAgIHN1cGVyKHRva2VuLCB2YWx1ZSwgdmFsdWVzKTtcbiAgICB0aGlzLnR5cGUgPSAnbW92ZSc7XG4gIH1cblxuICBzdGF0aWMgZnJvbShzdHI6IHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKC8oW0EtWl0qKVxcWyhbXFxzXFxTXSo/KVxcXS8pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgdG9rZW4gPSBtYXRjaFsxXTtcbiAgICAgIGNvbnN0IHZhbCA9IG1hdGNoWzJdO1xuICAgICAgcmV0dXJuIG5ldyBNb3ZlUHJvcCh0b2tlbiwgdmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBNb3ZlUHJvcCgnJywgJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXR1cFByb3AgZXh0ZW5kcyBTZ2ZQcm9wQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHRva2VuOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHZhbHVlcz86IHN0cmluZ1tdKSB7XG4gICAgc3VwZXIodG9rZW4sIHZhbHVlLCB2YWx1ZXMpO1xuICAgIHRoaXMudHlwZSA9ICdzZXR1cCc7XG4gIH1cblxuICBzdGF0aWMgZnJvbShzdHI6IHN0cmluZykge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzdHInLCBzdHIpO1xuICAgIGNvbnN0IHRva2VuTWF0Y2ggPSBzdHIubWF0Y2goVE9LRU5fUkVHRVgpO1xuICAgIGNvbnN0IHZhbE1hdGNoZXMgPSBtYXRjaEFsbChzdHIsIC9cXFsoW1xcc1xcU10qPylcXF0vZyk7XG5cbiAgICBsZXQgdG9rZW4gPSAnJztcbiAgICBjb25zdCB2YWxzID0gWy4uLnZhbE1hdGNoZXNdLm1hcChtID0+IG1bMV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWxNYXRjaGVzJywgWy4uLnZhbE1hdGNoZXNdKTtcbiAgICAvLyBjb25zb2xlLmxvZygndmFscycsIHZhbHMpO1xuICAgIGlmICh0b2tlbk1hdGNoKSB0b2tlbiA9IHRva2VuTWF0Y2hbMV07XG4gICAgcmV0dXJuIG5ldyBTZXR1cFByb3AodG9rZW4sIHZhbHMuam9pbignLCcpLCB2YWxzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm9kZUFubm90YXRpb25Qcm9wIGV4dGVuZHMgU2dmUHJvcEJhc2Uge1xuICBjb25zdHJ1Y3Rvcih0b2tlbjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodG9rZW4sIHZhbHVlKTtcbiAgICB0aGlzLnR5cGUgPSAnbm9kZS1hbm5vdGF0aW9uJztcbiAgfVxuICBzdGF0aWMgZnJvbShzdHI6IHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKC8oW0EtWl0qKVxcWyhbXFxzXFxTXSo/KVxcXS8pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgdG9rZW4gPSBtYXRjaFsxXTtcbiAgICAgIGNvbnN0IHZhbCA9IG1hdGNoWzJdO1xuICAgICAgcmV0dXJuIG5ldyBOb2RlQW5ub3RhdGlvblByb3AodG9rZW4sIHZhbCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTm9kZUFubm90YXRpb25Qcm9wKCcnLCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVBbm5vdGF0aW9uUHJvcCBleHRlbmRzIFNnZlByb3BCYXNlIHtcbiAgY29uc3RydWN0b3IodG9rZW46IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKHRva2VuLCB2YWx1ZSk7XG4gICAgdGhpcy50eXBlID0gJ21vdmUtYW5ub3RhdGlvbic7XG4gIH1cbiAgc3RhdGljIGZyb20oc3RyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvKFtBLVpdKilcXFsoW1xcc1xcU10qPylcXF0vKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gbWF0Y2hbMV07XG4gICAgICBjb25zdCB2YWwgPSBtYXRjaFsyXTtcbiAgICAgIHJldHVybiBuZXcgTW92ZUFubm90YXRpb25Qcm9wKHRva2VuLCB2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE1vdmVBbm5vdGF0aW9uUHJvcCgnJywgJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uUHJvcCBleHRlbmRzIFNnZlByb3BCYXNlIHt9XG5leHBvcnQgY2xhc3MgTWFya3VwUHJvcCBleHRlbmRzIFNnZlByb3BCYXNlIHtcbiAgY29uc3RydWN0b3IodG9rZW46IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKHRva2VuLCB2YWx1ZSk7XG4gICAgdGhpcy50eXBlID0gJ21hcmt1cCc7XG4gIH1cbiAgc3RhdGljIGZyb20oc3RyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvKFtBLVpdKilcXFsoW1xcc1xcU10qPylcXF0vKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gbWF0Y2hbMV07XG4gICAgICBjb25zdCB2YWwgPSBtYXRjaFsyXTtcbiAgICAgIHJldHVybiBuZXcgTWFya3VwUHJvcCh0b2tlbiwgdmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBNYXJrdXBQcm9wKCcnLCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvb3RQcm9wIGV4dGVuZHMgU2dmUHJvcEJhc2Uge1xuICBjb25zdHJ1Y3Rvcih0b2tlbjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodG9rZW4sIHZhbHVlKTtcbiAgICB0aGlzLnR5cGUgPSAncm9vdCc7XG4gIH1cbiAgc3RhdGljIGZyb20oc3RyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvKFtBLVpdKilcXFsoW1xcc1xcU10qPylcXF0vKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gbWF0Y2hbMV07XG4gICAgICBjb25zdCB2YWwgPSBtYXRjaFsyXTtcbiAgICAgIHJldHVybiBuZXcgUm9vdFByb3AodG9rZW4sIHZhbCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUm9vdFByb3AoJycsICcnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FtZUluZm9Qcm9wIGV4dGVuZHMgU2dmUHJvcEJhc2Uge1xuICBjb25zdHJ1Y3Rvcih0b2tlbjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodG9rZW4sIHZhbHVlKTtcbiAgICB0aGlzLnR5cGUgPSAnZ2FtZS1pbmZvJztcbiAgfVxuICBzdGF0aWMgZnJvbShzdHI6IHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKC8oW0EtWl0qKVxcWyhbXFxzXFxTXSo/KVxcXS8pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgdG9rZW4gPSBtYXRjaFsxXTtcbiAgICAgIGNvbnN0IHZhbCA9IG1hdGNoWzJdO1xuICAgICAgcmV0dXJuIG5ldyBHYW1lSW5mb1Byb3AodG9rZW4sIHZhbCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgR2FtZUluZm9Qcm9wKCcnLCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbVByb3AgZXh0ZW5kcyBTZ2ZQcm9wQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHRva2VuOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0b2tlbiwgdmFsdWUpO1xuICAgIHRoaXMudHlwZSA9ICdjdXN0b20nO1xuICB9XG4gIHN0YXRpYyBmcm9tKHN0cjogc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2goLyhbQS1aXSopXFxbKFtcXHNcXFNdKj8pXFxdLyk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IG1hdGNoWzFdO1xuICAgICAgY29uc3QgdmFsID0gbWF0Y2hbMl07XG4gICAgICByZXR1cm4gbmV3IEN1c3RvbVByb3AodG9rZW4sIHZhbCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ3VzdG9tUHJvcCgnJywgJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaW1pbmdQcm9wIGV4dGVuZHMgU2dmUHJvcEJhc2Uge1xuICBjb25zdHJ1Y3Rvcih0b2tlbjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodG9rZW4sIHZhbHVlKTtcbiAgICB0aGlzLnR5cGUgPSAnVGltaW5nJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWlzY2VsbGFuZW91c1Byb3AgZXh0ZW5kcyBTZ2ZQcm9wQmFzZSB7fVxuIiwiaW1wb3J0IHtjb21wYWN0LCByZXBsYWNlfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1hdGNoQWxsIGZyb20gJ3N0cmluZy5wcm90b3R5cGUubWF0Y2hhbGwnO1xuXG5pbXBvcnQgVHJlZU1vZGVsIGZyb20gJ3RyZWUtbW9kZWwnO1xuaW1wb3J0IHtcbiAgTW92ZVByb3AsXG4gIFNldHVwUHJvcCxcbiAgUm9vdFByb3AsXG4gIEdhbWVJbmZvUHJvcCxcbiAgU2dmUHJvcEJhc2UsXG4gIE5vZGVBbm5vdGF0aW9uUHJvcCxcbiAgTW92ZUFubm90YXRpb25Qcm9wLFxuICBNYXJrdXBQcm9wLFxuICBDdXN0b21Qcm9wLFxuICBST09UX1BST1BfTElTVCxcbiAgTU9WRV9QUk9QX0xJU1QsXG4gIFNFVFVQX1BST1BfTElTVCxcbiAgTUFSS1VQX1BST1BfTElTVCxcbiAgTk9ERV9BTk5PVEFUSU9OX1BST1BfTElTVCxcbiAgTU9WRV9BTk5PVEFUSU9OX1BST1BfTElTVCxcbiAgR0FNRV9JTkZPX1BST1BfTElTVCxcbiAgQ1VTVE9NX1BST1BfTElTVCxcbn0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgdHlwZSB7U2dmTm9kZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2dldERlZHVwbGljYXRlZFByb3BzLCBnZXROb2RlTnVtYmVyfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHtjYWxjU0hBfSBmcm9tICcuLi9oZWxwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZ2Yge1xuICBORVdfTk9ERSA9ICc7JztcbiAgQlJBTkNISU5HID0gWycoJywgJyknXTtcbiAgUFJPUEVSVFkgPSBbJ1snLCAnXSddO1xuICBMSVNUX0lERU5USVRJRVMgPSBbXG4gICAgJ0FXJyxcbiAgICAnQUInLFxuICAgICdBRScsXG4gICAgJ0FSJyxcbiAgICAnQ1InLFxuICAgICdERCcsXG4gICAgJ0xCJyxcbiAgICAnTE4nLFxuICAgICdNQScsXG4gICAgJ1NMJyxcbiAgICAnU1EnLFxuICAgICdUUicsXG4gICAgJ1ZXJyxcbiAgICAnVEInLFxuICAgICdUVycsXG4gIF07XG4gIE5PREVfREVMSU1JVEVSUyA9IFt0aGlzLk5FV19OT0RFXS5jb25jYXQodGhpcy5CUkFOQ0hJTkcpO1xuXG4gIHRyZWU6IFRyZWVNb2RlbCA9IG5ldyBUcmVlTW9kZWwoKTtcbiAgcm9vdDogVHJlZU1vZGVsLk5vZGU8U2dmTm9kZT4gfCBudWxsID0gbnVsbDtcbiAgbm9kZTogVHJlZU1vZGVsLk5vZGU8U2dmTm9kZT4gfCBudWxsID0gbnVsbDtcbiAgY3VycmVudE5vZGU6IFRyZWVNb2RlbC5Ob2RlPFNnZk5vZGU+IHwgbnVsbCA9IG51bGw7XG4gIHBhcmVudE5vZGU6IFRyZWVNb2RlbC5Ob2RlPFNnZk5vZGU+IHwgbnVsbCA9IG51bGw7XG4gIG5vZGVQcm9wczogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcbiAgc2dmID0gJyc7XG5cbiAgZnJvbVJvb3Qocm9vdDogVHJlZU1vZGVsLk5vZGU8U2dmTm9kZT4pIHtcbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbm9kZVRvU3RyaW5nKG5vZGU6IGFueSkge1xuICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgbm9kZS53YWxrKChuOiBUcmVlTW9kZWwuTm9kZTxTZ2ZOb2RlPikgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIG1vdmVQcm9wcyxcbiAgICAgICAgY3VzdG9tUHJvcHMsXG4gICAgICAgIHNldHVwUHJvcHMsXG4gICAgICAgIG1hcmt1cFByb3BzLFxuICAgICAgICBub2RlQW5ub3RhdGlvblByb3BzLFxuICAgICAgICBtb3ZlQW5ub3RhdGlvblByb3BzLFxuICAgICAgICBnYW1lSW5mb1Byb3BzLFxuICAgICAgfSA9IG4ubW9kZWw7XG4gICAgICBjb25zdCBub2RlcyA9IGNvbXBhY3QoW1xuICAgICAgICAuLi5yb290UHJvcHMsXG4gICAgICAgIC4uLmN1c3RvbVByb3BzLFxuICAgICAgICAuLi5tb3ZlUHJvcHMsXG4gICAgICAgIC4uLmdldERlZHVwbGljYXRlZFByb3BzKHNldHVwUHJvcHMpLFxuICAgICAgICAuLi5nZXREZWR1cGxpY2F0ZWRQcm9wcyhtYXJrdXBQcm9wcyksXG4gICAgICAgIC4uLmdhbWVJbmZvUHJvcHMsXG4gICAgICAgIC4uLm5vZGVBbm5vdGF0aW9uUHJvcHMsXG4gICAgICAgIC4uLm1vdmVBbm5vdGF0aW9uUHJvcHMsXG4gICAgICBdKTtcbiAgICAgIGNvbnRlbnQgKz0gJzsnO1xuICAgICAgbm9kZXMuZm9yRWFjaCgobjogU2dmUHJvcEJhc2UpID0+IHtcbiAgICAgICAgY29udGVudCArPSBuLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChuLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogU2dmUHJvcEJhc2UpID0+IHtcbiAgICAgICAgICBjb250ZW50ICs9IGAoJHt0aGlzLm5vZGVUb1N0cmluZyhjaGlsZCl9KWA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4uY2hpbGRyZW4ubGVuZ3RoIDwgMjtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHRvU2dmKCkge1xuICAgIHJldHVybiBgKCR7dGhpcy5ub2RlVG9TdHJpbmcodGhpcy5yb290KX0pYDtcbiAgfVxuXG4gIHRvU2dmV2l0aG91dEFuYWx5c2lzKCkge1xuICAgIGNvbnN0IHNnZiA9IGAoJHt0aGlzLm5vZGVUb1N0cmluZyh0aGlzLnJvb3QpfSlgO1xuICAgIHJldHVybiByZXBsYWNlKHNnZiwgL10oQVxcWy4qP1xcXSkvZywgJ10nKTtcbiAgfVxuXG4gIHBhcnNlKHNnZjogc3RyaW5nKSB7XG4gICAgaWYgKCFzZ2YpIHJldHVybjtcbiAgICAvLyBzZ2YgPSBzZ2YucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJycpO1xuICAgIGxldCBub2RlU3RhcnQgPSAwO1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBjb25zdCBzdGFjazogVHJlZU1vZGVsLk5vZGU8U2dmTm9kZT5bXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZ2YubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGMgPSBzZ2ZbaV07XG4gICAgICBpZiAodGhpcy5OT0RFX0RFTElNSVRFUlMuaW5jbHVkZXMoYykpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHNnZi5zbGljZShub2RlU3RhcnQsIGkpO1xuICAgICAgICBpZiAoY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgICBjb25zdCBtb3ZlUHJvcHM6IE1vdmVQcm9wW10gPSBbXTtcbiAgICAgICAgICBjb25zdCBzZXR1cFByb3BzOiBTZXR1cFByb3BbXSA9IFtdO1xuICAgICAgICAgIGNvbnN0IHJvb3RQcm9wczogUm9vdFByb3BbXSA9IFtdO1xuICAgICAgICAgIGNvbnN0IG1hcmt1cFByb3BzOiBNYXJrdXBQcm9wW10gPSBbXTtcbiAgICAgICAgICBjb25zdCBnYW1lSW5mb1Byb3BzOiBHYW1lSW5mb1Byb3BbXSA9IFtdO1xuICAgICAgICAgIGNvbnN0IG5vZGVBbm5vdGF0aW9uUHJvcHM6IE5vZGVBbm5vdGF0aW9uUHJvcFtdID0gW107XG4gICAgICAgICAgY29uc3QgbW92ZUFubm90YXRpb25Qcm9wczogTW92ZUFubm90YXRpb25Qcm9wW10gPSBbXTtcbiAgICAgICAgICBjb25zdCBjdXN0b21Qcm9wczogQ3VzdG9tUHJvcFtdID0gW107XG5cbiAgICAgICAgICBjb25zdCBtYXRjaGVzID0gW1xuICAgICAgICAgICAgLi4ubWF0Y2hBbGwoXG4gICAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgICAgICAgICAvLyBSZWdFeHAoLyhbQS1aXStcXFtbYS16XFxbXFxdXSpcXF0rKS8sICdnJylcbiAgICAgICAgICAgICAgLy8gUmVnRXhwKC8oW0EtWl0rXFxbLio/XFxdKykvLCAnZycpXG4gICAgICAgICAgICAgIC8vIFJlZ0V4cCgvW0EtWl0rKFxcWy4qP1xcXSl7MSx9LywgJ2cnKVxuICAgICAgICAgICAgICBSZWdFeHAoL1tBLVpdKyhcXFtbXFxzXFxTXSo/XFxdKXsxLH0vLCAnZycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBtYXRjaGVzLmZvckVhY2gobSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbk1hdGNoID0gbVswXS5tYXRjaCgvKFtBLVpdKylcXFsvKTtcbiAgICAgICAgICAgIGlmICh0b2tlbk1hdGNoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5NYXRjaFsxXTtcbiAgICAgICAgICAgICAgaWYgKE1PVkVfUFJPUF9MSVNULmluY2x1ZGVzKHRva2VuKSlcbiAgICAgICAgICAgICAgICBtb3ZlUHJvcHMucHVzaChNb3ZlUHJvcC5mcm9tKG1bMF0pKTtcbiAgICAgICAgICAgICAgaWYgKFNFVFVQX1BST1BfTElTVC5pbmNsdWRlcyh0b2tlbikpXG4gICAgICAgICAgICAgICAgc2V0dXBQcm9wcy5wdXNoKFNldHVwUHJvcC5mcm9tKG1bMF0pKTtcbiAgICAgICAgICAgICAgaWYgKFJPT1RfUFJPUF9MSVNULmluY2x1ZGVzKHRva2VuKSlcbiAgICAgICAgICAgICAgICByb290UHJvcHMucHVzaChSb290UHJvcC5mcm9tKG1bMF0pKTtcbiAgICAgICAgICAgICAgaWYgKE1BUktVUF9QUk9QX0xJU1QuaW5jbHVkZXModG9rZW4pKVxuICAgICAgICAgICAgICAgIG1hcmt1cFByb3BzLnB1c2goTWFya3VwUHJvcC5mcm9tKG1bMF0pKTtcbiAgICAgICAgICAgICAgaWYgKEdBTUVfSU5GT19QUk9QX0xJU1QuaW5jbHVkZXModG9rZW4pKVxuICAgICAgICAgICAgICAgIGdhbWVJbmZvUHJvcHMucHVzaChHYW1lSW5mb1Byb3AuZnJvbShtWzBdKSk7XG4gICAgICAgICAgICAgIGlmIChOT0RFX0FOTk9UQVRJT05fUFJPUF9MSVNULmluY2x1ZGVzKHRva2VuKSkge1xuICAgICAgICAgICAgICAgIG5vZGVBbm5vdGF0aW9uUHJvcHMucHVzaChOb2RlQW5ub3RhdGlvblByb3AuZnJvbShtWzBdKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKE1PVkVfQU5OT1RBVElPTl9QUk9QX0xJU1QuaW5jbHVkZXModG9rZW4pKVxuICAgICAgICAgICAgICAgIG1vdmVBbm5vdGF0aW9uUHJvcHMucHVzaChNb3ZlQW5ub3RhdGlvblByb3AuZnJvbShtWzBdKSk7XG4gICAgICAgICAgICAgIGlmIChDVVNUT01fUFJPUF9MSVNULmluY2x1ZGVzKHRva2VuKSlcbiAgICAgICAgICAgICAgICBjdXN0b21Qcm9wcy5wdXNoKEN1c3RvbVByb3AuZnJvbShtWzBdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzaGEgPSBjYWxjU0hBKHRoaXMuY3VycmVudE5vZGUsIG1vdmVQcm9wcywgc2V0dXBQcm9wcyk7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy50cmVlLnBhcnNlPFNnZk5vZGU+KHtcbiAgICAgICAgICAgICAgaWQ6IHNoYSxcbiAgICAgICAgICAgICAgbmFtZTogc2hhLFxuICAgICAgICAgICAgICBpbmRleDogY291bnRlcixcbiAgICAgICAgICAgICAgbnVtYmVyOiAwLFxuICAgICAgICAgICAgICBtb3ZlUHJvcHMsXG4gICAgICAgICAgICAgIHNldHVwUHJvcHMsXG4gICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgbWFya3VwUHJvcHMsXG4gICAgICAgICAgICAgIGdhbWVJbmZvUHJvcHMsXG4gICAgICAgICAgICAgIG5vZGVBbm5vdGF0aW9uUHJvcHMsXG4gICAgICAgICAgICAgIG1vdmVBbm5vdGF0aW9uUHJvcHMsXG4gICAgICAgICAgICAgIGN1c3RvbVByb3BzLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUuYWRkQ2hpbGQobm9kZSk7XG5cbiAgICAgICAgICAgICAgbm9kZS5tb2RlbC5udW1iZXIgPSBnZXROb2RlTnVtYmVyKG5vZGUpO1xuICAgICAgICAgICAgICBub2RlLm1vZGVsLmNoaWxkcmVuID0gW25vZGVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcbiAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBub2RlO1xuICAgICAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGMgPT09ICcoJyAmJiB0aGlzLmN1cnJlbnROb2RlKSB7XG4gICAgICAgIHN0YWNrLnB1c2godGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgICBpZiAoYyA9PT0gJyknICYmIHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBub2RlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLk5PREVfREVMSU1JVEVSUy5pbmNsdWRlcyhjKSkge1xuICAgICAgICBub2RlU3RhcnQgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFRyZWVNb2RlbCBmcm9tICd0cmVlLW1vZGVsJztcbmltcG9ydCB7Um9vdFByb3B9IGZyb20gJy4vcHJvcHMnO1xuY29uc3QgdHJlZTogVHJlZU1vZGVsID0gbmV3IFRyZWVNb2RlbCgpO1xuXG5jb25zdCBpbml0Um9vdFByb3BzID0gW1xuICAnRkZbNF0nLFxuICAnR01bMV0nLFxuICAnQ0FbVVRGLThdJyxcbiAgJ0FQW2dob3N0Z286MC4xLjBdJyxcbiAgJ1NaWzE5XScsXG4gICdTVFswXScsXG5dLm1hcChwID0+IFJvb3RQcm9wLmZyb20ocCkpO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFJvb3QgPSAoKSA9PlxuICB0cmVlLnBhcnNlKHtcbiAgICBpZDogJ3Jvb3QnLFxuICAgIG5hbWU6IDAsXG4gICAgaW5kZXg6IDAsXG4gICAgbnVtYmVyOiAwLFxuICAgIHJvb3RQcm9wczogaW5pdFJvb3RQcm9wcyxcbiAgICBtb3ZlUHJvcHM6IFtdLFxuICAgIHNldHVwUHJvcHM6IFtdLFxuICAgIG1hcmt1cFByb3BzOiBbXSxcbiAgICBnYW1lSW5mb1Byb3BzOiBbXSxcbiAgICBub2RlQW5ub3RhdGlvblByb3BzOiBbXSxcbiAgICBtb3ZlQW5ub3RhdGlvblByb3BzOiBbXSxcbiAgICBjdXN0b21Qcm9wczogW10sXG4gIH0pO1xuIl0sIm5hbWVzIjpbImJhc2VTbGljZSIsImFycmF5Iiwic3RhcnQiLCJlbmQiLCJpbmRleCIsImxlbmd0aCIsInJlc3VsdCIsIkFycmF5IiwiX2Jhc2VTbGljZSIsImVxIiwidmFsdWUiLCJvdGhlciIsImVxXzEiLCJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwiT2JqZWN0IiwiX2ZyZWVHbG9iYWwiLCJyZXF1aXJlJCQwIiwiZnJlZVNlbGYiLCJzZWxmIiwicm9vdCIsIkZ1bmN0aW9uIiwiX3Jvb3QiLCJTeW1ib2wiLCJfU3ltYm9sIiwib2JqZWN0UHJvdG8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwidG9TdHJpbmciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwidW5kZWZpbmVkIiwiZ2V0UmF3VGFnIiwiaXNPd24iLCJjYWxsIiwidGFnIiwidW5tYXNrZWQiLCJlIiwiX2dldFJhd1RhZyIsIm9iamVjdFRvU3RyaW5nIiwiX29iamVjdFRvU3RyaW5nIiwicmVxdWlyZSQkMSIsInJlcXVpcmUkJDIiLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwiYmFzZUdldFRhZyIsIl9iYXNlR2V0VGFnIiwiaXNPYmplY3QiLCJ0eXBlIiwiaXNPYmplY3RfMSIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiaXNGdW5jdGlvbiIsImlzRnVuY3Rpb25fMSIsIk1BWF9TQUZFX0lOVEVHRVIiLCJpc0xlbmd0aCIsImlzTGVuZ3RoXzEiLCJpc0FycmF5TGlrZSIsImlzQXJyYXlMaWtlXzEiLCJyZUlzVWludCIsImlzSW5kZXgiLCJ0ZXN0IiwiX2lzSW5kZXgiLCJyZXF1aXJlJCQzIiwiaXNJdGVyYXRlZUNhbGwiLCJvYmplY3QiLCJfaXNJdGVyYXRlZUNhbGwiLCJyZVdoaXRlc3BhY2UiLCJ0cmltbWVkRW5kSW5kZXgiLCJzdHJpbmciLCJjaGFyQXQiLCJfdHJpbW1lZEVuZEluZGV4IiwicmVUcmltU3RhcnQiLCJiYXNlVHJpbSIsInNsaWNlIiwicmVwbGFjZSIsIl9iYXNlVHJpbSIsImlzT2JqZWN0TGlrZSIsImlzT2JqZWN0TGlrZV8xIiwic3ltYm9sVGFnIiwiaXNTeW1ib2wiLCJpc1N5bWJvbF8xIiwiTkFOIiwicmVJc0JhZEhleCIsInJlSXNCaW5hcnkiLCJyZUlzT2N0YWwiLCJmcmVlUGFyc2VJbnQiLCJwYXJzZUludCIsInRvTnVtYmVyIiwidmFsdWVPZiIsImlzQmluYXJ5IiwidG9OdW1iZXJfMSIsIklORklOSVRZIiwiTUFYX0lOVEVHRVIiLCJ0b0Zpbml0ZSIsInNpZ24iLCJ0b0Zpbml0ZV8xIiwidG9JbnRlZ2VyIiwicmVtYWluZGVyIiwidG9JbnRlZ2VyXzEiLCJuYXRpdmVDZWlsIiwiTWF0aCIsImNlaWwiLCJuYXRpdmVNYXgiLCJtYXgiLCJjaHVuayIsInNpemUiLCJndWFyZCIsInJlc0luZGV4IiwiY2h1bmtfMSIsIktpIiwiVGhlbWUiLCJDZW50ZXIiLCJNYXJrdXAiLCJfYSIsImZhY3RvcnkiLCJtb2R1bGUiLCJ0aGlzIiwiQ3J5cHRvSlMiLCJjcnlwdG8iLCJ3aW5kb3ciLCJnbG9iYWxUaGlzIiwibXNDcnlwdG8iLCJyZXF1aXJlIiwiZXJyIiwiY3J5cHRvU2VjdXJlUmFuZG9tSW50IiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDMyQXJyYXkiLCJyYW5kb21CeXRlcyIsInJlYWRJbnQzMkxFIiwiRXJyb3IiLCJjcmVhdGUiLCJGIiwib2JqIiwic3VidHlwZSIsIkMiLCJDX2xpYiIsImxpYiIsIkJhc2UiLCJleHRlbmQiLCJvdmVycmlkZXMiLCJtaXhJbiIsImluaXQiLCIkc3VwZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsImluc3RhbmNlIiwicHJvcGVydGllcyIsInByb3BlcnR5TmFtZSIsImNsb25lIiwiV29yZEFycmF5Iiwid29yZHMiLCJzaWdCeXRlcyIsImVuY29kZXIiLCJIZXgiLCJzdHJpbmdpZnkiLCJjb25jYXQiLCJ3b3JkQXJyYXkiLCJ0aGlzV29yZHMiLCJ0aGF0V29yZHMiLCJ0aGlzU2lnQnl0ZXMiLCJ0aGF0U2lnQnl0ZXMiLCJjbGFtcCIsImkiLCJ0aGF0Qnl0ZSIsImoiLCJyYW5kb20iLCJuQnl0ZXMiLCJwdXNoIiwiQ19lbmMiLCJlbmMiLCJoZXhDaGFycyIsImJpdGUiLCJqb2luIiwicGFyc2UiLCJoZXhTdHIiLCJoZXhTdHJMZW5ndGgiLCJzdWJzdHIiLCJMYXRpbjEiLCJsYXRpbjFDaGFycyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImxhdGluMVN0ciIsImxhdGluMVN0ckxlbmd0aCIsImNoYXJDb2RlQXQiLCJVdGY4IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwidXRmOFN0ciIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiQnVmZmVyZWRCbG9ja0FsZ29yaXRobSIsInJlc2V0IiwiX2RhdGEiLCJfbkRhdGFCeXRlcyIsIl9hcHBlbmQiLCJkYXRhIiwiX3Byb2Nlc3MiLCJkb0ZsdXNoIiwicHJvY2Vzc2VkV29yZHMiLCJkYXRhV29yZHMiLCJkYXRhU2lnQnl0ZXMiLCJibG9ja1NpemUiLCJibG9ja1NpemVCeXRlcyIsIm5CbG9ja3NSZWFkeSIsIl9taW5CdWZmZXJTaXplIiwibldvcmRzUmVhZHkiLCJuQnl0ZXNSZWFkeSIsIm1pbiIsIm9mZnNldCIsIl9kb1Byb2Nlc3NCbG9jayIsInNwbGljZSIsIkhhc2hlciIsImNmZyIsIl9kb1Jlc2V0IiwidXBkYXRlIiwibWVzc2FnZVVwZGF0ZSIsImZpbmFsaXplIiwiaGFzaCIsIl9kb0ZpbmFsaXplIiwiX2NyZWF0ZUhlbHBlciIsImhhc2hlciIsIm1lc3NhZ2UiLCJfY3JlYXRlSG1hY0hlbHBlciIsImtleSIsIkNfYWxnbyIsIkhNQUMiLCJhbGdvIiwiSCIsIksiLCJpc1ByaW1lIiwibiIsInNxcnROIiwic3FydCIsImZhY3RvciIsImdldEZyYWN0aW9uYWxCaXRzIiwiblByaW1lIiwicG93IiwiVyIsIlNIQTI1NiIsIl9oYXNoIiwiTSIsImEiLCJiIiwiYyIsImQiLCJmIiwiZyIsImgiLCJnYW1tYTB4IiwiZ2FtbWEwIiwiZ2FtbWExeCIsImdhbW1hMSIsImNoIiwibWFqIiwic2lnbWEwIiwic2lnbWExIiwidDEiLCJ0MiIsIm5CaXRzVG90YWwiLCJuQml0c0xlZnQiLCJmbG9vciIsIkhtYWNTSEEyNTYiLCJmaWx0ZXIiLCJmaW5kTGFzdEluZGV4IiwiZmxhdHRlbkRlcHRoIiwic3VtIiwiY2xvbmVEZWVwIiwiX19leHRlbmRzIiwiX19yZWFkIiwiY29tcGFjdCIsIm1hdGNoQWxsIiwiX19zcHJlYWRBcnJheSIsIlRyZWVNb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsU0FBU0EsV0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUNwQyxNQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFiO0FBQUEsTUFDSUMsTUFBTSxHQUFHSixLQUFLLENBQUNJLE1BRG5COztBQUdBLE1BQUlILEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDYkEsSUFBQUEsS0FBSyxHQUFHLENBQUNBLEtBQUQsR0FBU0csTUFBVCxHQUFrQixDQUFsQixH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
