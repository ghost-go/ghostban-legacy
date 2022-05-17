
  /**
   * @license
   * author: Byron Bai
   * ghostban.js v2.0.0-alpha.16
   * Released under the MIT license.
   */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var _ = require('lodash');
var TreeModel = require('tree-model');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
var TreeModel__default = /*#__PURE__*/_interopDefaultLegacy(TreeModel);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

function eq$3(value, other) {
  return value === other || value !== value && other !== other;
}

var eq_1 = eq$3;

var freeGlobal$1 = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root$8 = freeGlobal || freeSelf || Function('return this')();
var _root = root$8;

var root$7 = _root;
/** Built-in value references. */

var _Symbol2 = root$7.Symbol;
var _Symbol$3 = _Symbol2;

var _Symbol$2 = _Symbol$3;
/** Used for built-in method references. */

var objectProto$c = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$c.toString;
/** Built-in value references. */

var symToStringTag$1 = _Symbol$2 ? _Symbol$2.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag$1(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1),
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
var objectProto$b = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto$b.toString;
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

var _Symbol$1 = _Symbol$3,
    getRawTag = _getRawTag,
    objectToString = _objectToString;
/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol$1 ? _Symbol$1.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag$5(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

var _baseGetTag = baseGetTag$5;

function isObject$7(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$7;

var baseGetTag$4 = _baseGetTag,
    isObject$6 = isObject_1;
/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
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

function isFunction$2(value) {
  if (!isObject$6(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag$4(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$2;

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

function isLength$2(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength$2;

var isFunction$1 = isFunction_1,
    isLength$1 = isLength_1;
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

function isArrayLike$3(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}

var isArrayLike_1 = isArrayLike$3;

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

function isIndex$2(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

var _isIndex = isIndex$2;

var eq$2 = eq_1,
    isArrayLike$2 = isArrayLike_1,
    isIndex$1 = _isIndex,
    isObject$5 = isObject_1;
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
  if (!isObject$5(object)) {
    return false;
  }

  var type = _typeof(index);

  if (type == 'number' ? isArrayLike$2(object) && isIndex$1(index, object.length) : type == 'string' && index in object) {
    return eq$2(object[index], value);
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

function isObjectLike$6(value) {
  return value != null && _typeof(value) == 'object';
}

var isObjectLike_1 = isObjectLike$6;

var baseGetTag$3 = _baseGetTag,
    isObjectLike$5 = isObjectLike_1;
/** `Object#toString` result references. */

var symbolTag$2 = '[object Symbol]';
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
  return _typeof(value) == 'symbol' || isObjectLike$5(value) && baseGetTag$3(value) == symbolTag$2;
}

var isSymbol_1 = isSymbol$1;

var baseTrim = _baseTrim,
    isObject$4 = isObject_1,
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

  if (isObject$4(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$4(other) ? other + '' : other;
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

var _a;
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
var RESOURCES = (_a = {},
    _a[exports.Theme.BlackAndWhite] = {
        blacks: [],
        whites: [],
    },
    _a[exports.Theme.Subdued] = {
        board: 'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/subdued/board.png',
        blacks: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/subdued/black.png',
        ],
        whites: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/subdued/white.png',
        ],
    },
    _a[exports.Theme.ShellStone] = {
        board: 'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/board.png',
        blacks: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/black.png',
        ],
        whites: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/white0.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/white1.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/white2.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/white3.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/white4.png',
        ],
    },
    _a[exports.Theme.SlateAndShell] = {
        board: 'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/board.png',
        blacks: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/slate1.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/slate2.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/slate3.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/slate4.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/slate5.png',
        ],
        whites: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/shell1.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/shell2.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/shell3.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/shell4.png',
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/shell5.png',
        ],
    },
    _a[exports.Theme.Walnut] = {
        board: 'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/walnut/board.jpg',
        blacks: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/walnut/black.png',
        ],
        whites: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/walnut/white.png',
        ],
    },
    _a[exports.Theme.Photorealistic] = {
        board: 'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/photorealistic/board.png',
        blacks: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/photorealistic/black.png',
        ],
        whites: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/photorealistic/white.png',
        ],
    },
    _a[exports.Theme.Flat] = {
        blacks: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/flat/black.svg',
        ],
        whites: [
            'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/flat/white.svg',
        ],
    },
    _a);

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

var eq$1 = eq_1;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf$4(array, key) {
  var length = array.length;

  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;
/** Used for built-in method references. */

var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);
  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache$4(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype['delete'] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;

var ListCache$3 = _ListCache;
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */

function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

var root$6 = _root;
/** Used to detect overreaching core-js shims. */

var coreJsData$1 = root$6['__core-js_shared__'];
var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

var _toSource = toSource$2;

var isFunction = isFunction_1,
    isMasked = _isMasked,
    isObject$3 = isObject_1,
    toSource$1 = _toSource;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto$a = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative$1(value) {
  if (!isObject$3(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$7;

var getNative$6 = _getNative,
    root$5 = _root;
/* Built-in method references that are verified to be native. */

var Map$4 = getNative$6(root$5, 'Map');
var _Map = Map$4;

var getNative$5 = _getNative;
/* Built-in method references that are verified to be native. */

var nativeCreate$4 = getNative$5(Object, 'create');
var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto$9 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet$1(key) {
  var data = this.__data__;

  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }

  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;
/** Used for built-in method references. */

var objectProto$8 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== undefined : hasOwnProperty$6.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;

var Hash = _Hash,
    ListCache$2 = _ListCache,
    Map$3 = _Map;
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map$3 || ListCache$2)(),
    'string': new Hash()
  };
}

var _mapCacheClear = mapCacheClear$1;

function isKeyable$1(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype['delete'] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;
var _MapCache = MapCache$1;

var ListCache$1 = _ListCache,
    Map$2 = _Map,
    MapCache = _MapCache;
/** Used as the size to enable large array optimizations. */

var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet$1(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache$1) {
    var pairs = data.__data__;

    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack$1.prototype.clear = stackClear;
Stack$1.prototype['delete'] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;
var _Stack = Stack$1;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */

function arrayEach$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

var _arrayEach = arrayEach$1;

var getNative$4 = _getNative;

var defineProperty$1 = function () {
  try {
    var func = getNative$4(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

var _defineProperty = defineProperty$1;

var defineProperty = _defineProperty;
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue$2(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue$2;

var baseAssignValue$1 = _baseAssignValue,
    eq = eq_1;
/** Used for built-in method references. */

var objectProto$7 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue$2(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}

var _assignValue = assignValue$2;

var assignValue$1 = _assignValue,
    baseAssignValue = _baseAssignValue;
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */

function copyObject$4(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }

  return object;
}

var _copyObject = copyObject$4;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

var _baseTimes = baseTimes$1;

var baseGetTag$2 = _baseGetTag,
    isObjectLike$4 = isObjectLike_1;
/** `Object#toString` result references. */

var argsTag$2 = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments$1(value) {
  return isObjectLike$4(value) && baseGetTag$2(value) == argsTag$2;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
    isObjectLike$3 = isObjectLike_1;
/** Used for built-in method references. */

var objectProto$6 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments$1 = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike$3(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable$1.call(value, 'callee');
};
var isArguments_1 = isArguments$1;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$3 = Array.isArray;
var isArray_1 = isArray$3;

var isBuffer$2 = {exports: {}};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

(function (module, exports) {
  var root = _root,
      stubFalse = stubFalse_1;
  /** Detect free variable `exports`. */

  var freeExports = exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer = moduleExports ? root.Buffer : undefined;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */

  var isBuffer = nativeIsBuffer || stubFalse;
  module.exports = isBuffer;
})(isBuffer$2, isBuffer$2.exports);

var baseGetTag$1 = _baseGetTag,
    isLength = isLength_1,
    isObjectLike$2 = isObjectLike_1;
/** `Object#toString` result references. */

var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    weakMapTag$2 = '[object WeakMap]';
var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray$1(value) {
  return isObjectLike$2(value) && isLength(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary$3(func) {
  return function (value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$3;

var _nodeUtil = {exports: {}};

(function (module, exports) {
  var freeGlobal = _freeGlobal;
  /** Detect free variable `exports`. */

  var freeExports = exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports && freeGlobal.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      } // Legacy `process.binding('util')` for Node.js < 10.


      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();

  module.exports = nodeUtil;
})(_nodeUtil, _nodeUtil.exports);

var baseIsTypedArray = _baseIsTypedArray,
    baseUnary$2 = _baseUnary,
    nodeUtil$2 = _nodeUtil.exports;
/* Node.js helper references. */

var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray$1 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$1;

var baseTimes = _baseTimes,
    isArguments = isArguments_1,
    isArray$2 = isArray_1,
    isBuffer$1 = isBuffer$2.exports,
    isIndex = _isIndex,
    isTypedArray = isTypedArray_1;
/** Used for built-in method references. */

var objectProto$5 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$5.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$2(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

var _arrayLikeKeys = arrayLikeKeys$2;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype$3(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$4;
  return value === proto;
}

var _isPrototype = isPrototype$3;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg$2(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$2;

var overArg$1 = _overArg;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;

var isPrototype$2 = _isPrototype,
    nativeKeys = _nativeKeys;
/** Used for built-in method references. */

var objectProto$3 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys$1(object) {
  if (!isPrototype$2(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

var _baseKeys = baseKeys$1;

var arrayLikeKeys$1 = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike$1 = isArrayLike_1;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys$3(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}

var keys_1 = keys$3;

var copyObject$3 = _copyObject,
    keys$2 = keys_1;
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */

function baseAssign$1(object, source) {
  return object && copyObject$3(source, keys$2(source), object);
}

var _baseAssign = baseAssign$1;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function nativeKeysIn$1(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

var _nativeKeysIn = nativeKeysIn$1;

var isObject$2 = isObject_1,
    isPrototype$1 = _isPrototype,
    nativeKeysIn = _nativeKeysIn;
/** Used for built-in method references. */

var objectProto$2 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn$1(object) {
  if (!isObject$2(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype$1(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

var _baseKeysIn = baseKeysIn$1;

var arrayLikeKeys = _arrayLikeKeys,
    baseKeysIn = _baseKeysIn,
    isArrayLike = isArrayLike_1;
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */

function keysIn$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

var keysIn_1 = keysIn$3;

var copyObject$2 = _copyObject,
    keysIn$2 = keysIn_1;
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */

function baseAssignIn$1(object, source) {
  return object && copyObject$2(source, keysIn$2(source), object);
}

var _baseAssignIn = baseAssignIn$1;

var _cloneBuffer = {exports: {}};

(function (module, exports) {
  var root = _root;
  /** Detect free variable `exports`. */

  var freeExports = exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer = moduleExports ? root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */

  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }

    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
})(_cloneBuffer, _cloneBuffer.exports);

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */

function copyArray$1(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

var _copyArray = copyArray$1;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

var _arrayFilter = arrayFilter$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */

function stubArray$2() {
  return [];
}

var stubArray_1 = stubArray$2;

var arrayFilter = _arrayFilter,
    stubArray$1 = stubArray_1;
/** Used for built-in method references. */

var objectProto$1 = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$3;

var copyObject$1 = _copyObject,
    getSymbols$2 = _getSymbols;
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */

function copySymbols$1(source, object) {
  return copyObject$1(source, getSymbols$2(source), object);
}

var _copySymbols = copySymbols$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush$2(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

var _arrayPush = arrayPush$2;

var overArg = _overArg;
/** Built-in value references. */

var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$2;

var arrayPush$1 = _arrayPush,
    getPrototype$1 = _getPrototype,
    getSymbols$1 = _getSymbols,
    stubArray = stubArray_1;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function (object) {
  var result = [];

  while (object) {
    arrayPush$1(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }

  return result;
};
var _getSymbolsIn = getSymbolsIn$2;

var copyObject = _copyObject,
    getSymbolsIn$1 = _getSymbolsIn;
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */

function copySymbolsIn$1(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}

var _copySymbolsIn = copySymbolsIn$1;

var arrayPush = _arrayPush,
    isArray$1 = isArray_1;
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */

function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$2;

var baseGetAllKeys$1 = _baseGetAllKeys,
    getSymbols = _getSymbols,
    keys$1 = keys_1;
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */

function getAllKeys$1(object) {
  return baseGetAllKeys$1(object, keys$1, getSymbols);
}

var _getAllKeys = getAllKeys$1;

var baseGetAllKeys = _baseGetAllKeys,
    getSymbolsIn = _getSymbolsIn,
    keysIn$1 = keysIn_1;
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */

function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn$1;

var getNative$3 = _getNative,
    root$4 = _root;
/* Built-in method references that are verified to be native. */

var DataView$1 = getNative$3(root$4, 'DataView');
var _DataView = DataView$1;

var getNative$2 = _getNative,
    root$3 = _root;
/* Built-in method references that are verified to be native. */

var Promise$2 = getNative$2(root$3, 'Promise');
var _Promise = Promise$2;

var getNative$1 = _getNative,
    root$2 = _root;
/* Built-in method references that are verified to be native. */

var Set$1 = getNative$1(root$2, 'Set');
var _Set = Set$1;

var getNative = _getNative,
    root$1 = _root;
/* Built-in method references that are verified to be native. */

var WeakMap$1 = getNative(root$1, 'WeakMap');
var _WeakMap = WeakMap$1;

var DataView = _DataView,
    Map$1 = _Map,
    Promise$1 = _Promise,
    Set = _Set,
    WeakMap = _WeakMap,
    baseGetTag = _baseGetTag,
    toSource = _toSource;
/** `Object#toString` result references. */

var mapTag$3 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$3 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';
var dataViewTag$2 = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag$3 = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag$3(new Map$1()) != mapTag$3 || Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag || Set && getTag$3(new Set()) != setTag$3 || WeakMap && getTag$3(new WeakMap()) != weakMapTag$1) {
  getTag$3 = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;

        case mapCtorString:
          return mapTag$3;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag$3;

        case weakMapCtorString:
          return weakMapTag$1;
      }
    }

    return result;
  };
}

var _getTag = getTag$3;

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */

function initCloneArray$1(array) {
  var length = array.length,
      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}

var _initCloneArray = initCloneArray$1;

var root = _root;
/** Built-in value references. */

var Uint8Array$1 = root.Uint8Array;
var _Uint8Array = Uint8Array$1;

var Uint8Array = _Uint8Array;
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */

function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer$3;

var cloneArrayBuffer$2 = _cloneArrayBuffer;
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */

function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView$1;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp$1;

var _Symbol = _Symbol$3;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol$1;

var cloneArrayBuffer$1 = _cloneArrayBuffer;
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */

function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray$1;

var cloneArrayBuffer = _cloneArrayBuffer,
    cloneDataView = _cloneDataView,
    cloneRegExp = _cloneRegExp,
    cloneSymbol = _cloneSymbol,
    cloneTypedArray = _cloneTypedArray;
/** `Object#toString` result references. */

var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';
var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$1:
      return cloneDataView(object, isDeep);

    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);

    case mapTag$2:
      return new Ctor();

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return cloneRegExp(object);

    case setTag$2:
      return new Ctor();

    case symbolTag$1:
      return cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag$1;

var isObject$1 = isObject_1;
/** Built-in value references. */

var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate$1 = function () {
  function object() {}

  return function (proto) {
    if (!isObject$1(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

var _baseCreate = baseCreate$1;

var baseCreate = _baseCreate,
    getPrototype = _getPrototype,
    isPrototype = _isPrototype;
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneObject$1(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

var _initCloneObject = initCloneObject$1;

var getTag$2 = _getTag,
    isObjectLike$1 = isObjectLike_1;
/** `Object#toString` result references. */

var mapTag$1 = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */

function baseIsMap$1(value) {
  return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
}

var _baseIsMap = baseIsMap$1;

var baseIsMap = _baseIsMap,
    baseUnary$1 = _baseUnary,
    nodeUtil$1 = _nodeUtil.exports;
/* Node.js helper references. */

var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */

var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;

var getTag$1 = _getTag,
    isObjectLike = isObjectLike_1;
/** `Object#toString` result references. */

var setTag$1 = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */

function baseIsSet$1(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}

var _baseIsSet = baseIsSet$1;

var baseIsSet = _baseIsSet,
    baseUnary = _baseUnary,
    nodeUtil = _nodeUtil.exports;
/* Node.js helper references. */

var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */

var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;

var Stack = _Stack,
    arrayEach = _arrayEach,
    assignValue = _assignValue,
    baseAssign = _baseAssign,
    baseAssignIn = _baseAssignIn,
    cloneBuffer = _cloneBuffer.exports,
    copyArray = _copyArray,
    copySymbols = _copySymbols,
    copySymbolsIn = _copySymbolsIn,
    getAllKeys = _getAllKeys,
    getAllKeysIn = _getAllKeysIn,
    getTag = _getTag,
    initCloneArray = _initCloneArray,
    initCloneByTag = _initCloneByTag,
    initCloneObject = _initCloneObject,
    isArray = isArray_1,
    isBuffer = isBuffer$2.exports,
    isMap = isMap_1,
    isObject = isObject_1,
    isSet = isSet_1,
    keys = keys_1,
    keysIn = keysIn_1;
/** Used to compose bitmasks for cloning. */

var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG$2 = 4;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone$2(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$2;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!isObject(value)) {
    return value;
  }

  var isArr = isArray(value);

  if (isArr) {
    result = initCloneArray(value);

    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }

    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);

      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = initCloneByTag(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new Stack());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone$2(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone$2(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    assignValue(result, key, baseClone$2(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone$2;

var baseClone$1 = _baseClone;
/** Used to compose bitmasks for cloning. */

var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG$1 = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */

function cloneDeep(value) {
  return baseClone$1(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG$1);
}

var cloneDeep_1 = cloneDeep;

var baseClone = _baseClone;
/** Used to compose bitmasks for cloning. */

var CLONE_SYMBOLS_FLAG = 4;
/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */

function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

var clone_1 = clone;

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
var sgfOffset = function (sgf, offset) {
    if (offset === void 0) { offset = 0; }
    if (offset === 0)
        return sgf;
    var res = clone_1(sgf);
    var charIndex = SGF_LETTERS.indexOf(sgf[2]) - offset;
    return res.substr(0, 2) + SGF_LETTERS[charIndex] + res.substr(2 + 1);
};
var a1ToSGF = function (str, type, offset) {
    if (type === void 0) { type = 'B'; }
    if (offset === void 0) { offset = 0; }
    var inx = A1_LETTERS.indexOf(str[0]) + offset;
    var iny = A1_NUMBERS.indexOf(parseInt(str.substr(1), 0)) - offset;
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
var convertStoneTypeToString = function (type) { return (type === 1 ? 'B' : 'W'); };
var convertStepsForAI = function (steps, offset) {
    if (offset === void 0) { offset = 0; }
    var res = clone_1(steps);
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
    var newMat = cloneDeep_1(mat);
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
    var newMat = cloneDeep_1(mat);
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
    var newMat = cloneDeep_1(mat);
    newMat[i][j] = ki;
    return execPonnuki(newMat, i, j, -ki);
}
function showKi(mat, steps, isPonnuki) {
    if (isPonnuki === void 0) { isPonnuki = true; }
    var newMat = cloneDeep_1(mat);
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
            extend: 2,
            interactive: false,
            coordinate: true,
            background: false,
            theme: exports.Theme.BlackAndWhite,
        };
        this.clearCanvas = function () {
            if (_this.canvas) {
                var ctx = _this.canvas.getContext('2d');
                if (ctx) {
                    ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                }
            }
        };
        this.drawMarkup = function (mat, markup) {
            // console.log('markup', markup);
            var canvas = _this.canvas;
            if (canvas) {
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
        this.drawBan = function () {
            var board = _this.board;
            var theme = _this.options.theme;
            if (board) {
                board.style.borderRadius = '2px';
                var ctx = board.getContext('2d');
                if (ctx) {
                    if (theme === exports.Theme.BlackAndWhite) {
                        board.style.boxShadow = '0px 0px 0px #000000';
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
        this.drawBoardLine = function (visibleArea) {
            if (visibleArea === void 0) { visibleArea = [
                [0, 18],
                [0, 18],
            ]; }
            if (!_this.canvas)
                return;
            var ctx = _this.canvas.getContext('2d');
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
            var canvas = _this.canvas;
            if (!canvas)
                return;
            var ctx = canvas.getContext('2d');
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
                        ctx.fillText(l, x, canvas.height - offset_1);
                    }
                });
                A1_NUMBERS.forEach(function (l, index) {
                    var y = space * index + scaledPadding;
                    if (index >= visibleArea[1][0] && index <= visibleArea[1][1]) {
                        ctx.fillText(l.toString(), offset_1, y);
                        ctx.fillText(l.toString(), canvas.width - offset_1, y);
                    }
                });
            }
        };
        this.calcSpaceAndPadding = function () {
            var space = 0;
            var scaledPadding = 0;
            if (_this.canvas) {
                var _a = _this.options, padding = _a.padding, boardSize = _a.boardSize;
                // scaledPadding = padding * devicePixelRatio;
                scaledPadding = padding;
                space = (_this.canvas.width - padding * 2) / boardSize;
                scaledPadding = scaledPadding + space / 2;
            }
            return { space: space, scaledPadding: scaledPadding };
        };
        this.drawCursor = function (visibleArea) {
            var canvas = _this.canvas;
            if (canvas) {
                var padding = _this.options.padding;
                var ctx = canvas.getContext('2d');
                var space = _this.calcSpaceAndPadding().space;
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
        this.drawStones = function (matrix) {
            var canvas = _this.canvas;
            var _a = _this.options.theme, theme = _a === void 0 ? exports.Theme.BlackAndWhite : _a;
            if (canvas) {
                for (var i = 0; i < matrix.length; i++) {
                    for (var j = 0; j < matrix[i].length; j++) {
                        var value = matrix[i][j];
                        if (value !== 0) {
                            var ctx = canvas.getContext('2d');
                            if (ctx) {
                                var _b = _this.calcSpaceAndPadding(), space = _b.space, scaledPadding = _b.scaledPadding;
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
    }
    GhostBan.prototype.getCanvas = function () {
        return this.canvas;
    };
    GhostBan.prototype.setTurn = function (turn) {
        this._turn = turn;
    };
    GhostBan.prototype.resize = function () {
        if (!this.canvas || !this.dom || !this.board)
            return;
        var _a = this, canvas = _a.canvas, board = _a.board;
        var size = this.options.size;
        if (size) {
            canvas.width = size * devicePixelRatio;
            canvas.height = size * devicePixelRatio;
            board.width = size * devicePixelRatio;
            board.height = size * devicePixelRatio;
        }
        else {
            var clientWidth = this.dom.clientWidth;
            canvas.style.width = clientWidth + 'px';
            canvas.style.height = clientWidth + 'px';
            canvas.width = Math.floor(clientWidth * devicePixelRatio);
            canvas.height = Math.floor(clientWidth * devicePixelRatio);
            board.style.width = clientWidth + 'px';
            board.style.height = clientWidth + 'px';
            board.width = Math.floor(clientWidth * devicePixelRatio);
            board.height = Math.floor(clientWidth * devicePixelRatio);
        }
    };
    GhostBan.prototype.init = function (dom) {
        var _a, _b;
        this.mat = zeros([19, 19]);
        this.markup = empty([19, 19]);
        this.transMat = new DOMMatrix();
        var board = document.createElement('canvas');
        board.style.position = 'absolute';
        this.board = board;
        var canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        this.canvas = canvas;
        this.dom = dom;
        // const ctx = canvas.getContext('2d');
        // if (ctx) {
        //   ctx.imageSmoothingQuality = 'high';
        // }
        this.resize();
        (_a = dom.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = dom.firstChild) === null || _b === void 0 ? void 0 : _b.remove();
        dom.appendChild(board);
        dom.appendChild(canvas);
        this.renderInteractive();
    };
    GhostBan.prototype.setOptions = function (options) {
        this.options = tslib.__assign(tslib.__assign({}, this.options), options);
    };
    GhostBan.prototype.renderInteractive = function () {
        var _this = this;
        var canvas = this.canvas;
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
            _this.render(_this.mat, _this.markup);
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
        }
        else {
            canvas.removeEventListener('mousemove', onMouseMove);
            canvas.removeEventListener('touchmove', onTouchMove);
        }
    };
    GhostBan.prototype.setTheme = function (theme) {
        var _this = this;
        var _a = RESOURCES[theme], board = _a.board, blacks = _a.blacks, whites = _a.whites;
        preload(___default["default"].compact(tslib.__spreadArray(tslib.__spreadArray([board], tslib.__read(blacks), false), tslib.__read(whites), false)), function () {
            var shadowStyle = '3px 3px 3px #aaaaaa';
            var canvas = _this.canvas;
            if (canvas) {
                _this.options.theme = theme;
                if (theme === exports.Theme.BlackAndWhite) {
                    canvas.style.boxShadow = '0px 0px 0px #000000';
                }
                else if (theme === exports.Theme.Flat) {
                    canvas.style.boxShadow = shadowStyle;
                }
                setTimeout(function () {
                    _this.render(_this.mat, _this.markup);
                }, 0);
            }
        });
        setTimeout(function () {
            _this.options.theme = theme;
            _this.render(_this.mat, _this.markup);
        }, 0);
    };
    GhostBan.prototype.render = function (mat, markup) {
        if (mat)
            this.mat = mat;
        if (markup)
            this.markup = markup;
        var _a = this.options, boardSize = _a.boardSize, zoom = _a.zoom, extend = _a.extend, interactive = _a.interactive, coordinate = _a.coordinate;
        var canvas = this.canvas;
        if (canvas) {
            this.resize();
            this.clearCanvas();
            var ctx = canvas.getContext('2d');
            if (ctx && this.options.background) {
                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            var _b = calcVisibleArea(this.mat, boardSize, extend), zoomedVisibleArea = _b.visibleArea, center = _b.center;
            var visibleArea = zoom
                ? zoomedVisibleArea
                : [
                    [0, 18],
                    [0, 18],
                ];
            if (zoom && ctx) {
                var space = this.calcSpaceAndPadding().space;
                var zoomedBoardSize = visibleArea[0][1] - visibleArea[0][0] + 1;
                var scale = 1 / (zoomedBoardSize / boardSize);
                var offsetX = 0;
                var offsetY = 0;
                switch (center) {
                    case exports.Center.TopLeft:
                        break;
                    case exports.Center.TopRight:
                        offsetX =
                            visibleArea[0][0] * space * scale +
                                (this.options.padding / 2) * scale;
                        break;
                    case exports.Center.BottomLeft:
                        offsetY =
                            visibleArea[1][0] * space * scale +
                                (this.options.padding / 2) * scale;
                        break;
                    case exports.Center.BottomRight:
                        offsetX =
                            visibleArea[0][0] * space * scale +
                                (this.options.padding / 2) * scale;
                        offsetY =
                            visibleArea[1][0] * space * scale +
                                (this.options.padding / 2) * scale;
                        break;
                }
                this.transMat = new DOMMatrix();
                this.transMat.translateSelf(-offsetX, -offsetY);
                this.transMat.scaleSelf(scale, scale);
                ctx.setTransform(this.transMat);
            }
            this.drawBan();
            this.drawBoardLine(visibleArea);
            this.drawStars(visibleArea);
            if (interactive) {
                this.drawCursor(visibleArea);
            }
            if (coordinate) {
                this.drawCoordinate(visibleArea);
            }
            this.drawStones(mat !== null && mat !== void 0 ? mat : this.mat);
            this.drawMarkup(mat !== null && mat !== void 0 ? mat : this.mat, markup !== null && markup !== void 0 ? markup : this.markup);
            // ctx?.restore();
        }
    };
    return GhostBan;
}());

var MOVE_PROP_LIST = ['B', 'KO', 'MN', 'W'];
var SETUP_PROP_LIST = ['AB', 'AE', 'AW', 'PL'];
var NODE_ANNOTATION_PROP_LIST = [
    'C',
    'DM',
    'GB',
    'GW',
    'HO',
    'N',
    'UC',
    'V',
];
var MOVE_ANNOTATION_PROP_LIST = ['BM', 'DO', 'IT', 'TE'];
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
var TOKEN_REGEX = new RegExp(/([A-Z]*)\[(.*?)\]/);
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
        var match = str.match(/([A-Z]*)\[(.*?)\]/);
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
        var valMatches = str.matchAll(/\[(.*?)\]/g);
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
        var match = str.match(/([A-Z]*)\[(.*?)\]/);
        if (match) {
            var token = match[1];
            var val = match[2];
            return new MoveProp(token, val);
        }
        return new MoveProp('', '');
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
        var match = str.match(/([A-Z]*)\[(.*?)\]/);
        if (match) {
            var token = match[1];
            var val = match[2];
            return new MoveProp(token, val);
        }
        return new MoveProp('', '');
    };
    return MoveAnnotationProp;
}(SgfPropBase));
/** @class */ ((function (_super) {
    tslib.__extends(AnnotationProp, _super);
    function AnnotationProp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnnotationProp;
})(SgfPropBase));
var MarkupProp = /** @class */ (function (_super) {
    tslib.__extends(MarkupProp, _super);
    function MarkupProp(token, value) {
        var _this = _super.call(this, token, value) || this;
        _this.type = 'markup';
        return _this;
    }
    MarkupProp.from = function (str) {
        var match = str.match(/([A-Z]*)\[(.*?)\]/);
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
        var match = str.match(/([A-Z]*)\[(.*?)\]/);
        if (match) {
            var token = match[1];
            var val = match[2];
            return new RootProp(token, val);
        }
        return new RootProp('', '');
    };
    return RootProp;
}(SgfPropBase));
/** @class */ ((function (_super) {
    tslib.__extends(GameInfo, _super);
    function GameInfo(token, value) {
        var _this = _super.call(this, token, value) || this;
        _this.type = 'game-info';
        return _this;
    }
    return GameInfo;
})(SgfPropBase));
/** @class */ ((function (_super) {
    tslib.__extends(TimingProp, _super);
    function TimingProp(token, value) {
        var _this = _super.call(this, token, value) || this;
        _this.type = 'Timing';
        return _this;
    }
    return TimingProp;
})(SgfPropBase));
/** @class */ ((function (_super) {
    tslib.__extends(MiscellaneousProp, _super);
    function MiscellaneousProp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MiscellaneousProp;
})(SgfPropBase));

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
        node.walk({ strategy: 'pre' }, function (n) {
            var _a = n.model, rootProps = _a.rootProps, moveProps = _a.moveProps, setupProps = _a.setupProps, markupProps = _a.markupProps, nodeAnnotationProps = _a.nodeAnnotationProps, moveAnnotationProps = _a.moveAnnotationProps;
            var nodes = ___default["default"].compact(tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(rootProps), false), tslib.__read(moveProps), false), tslib.__read(setupProps), false), tslib.__read(markupProps), false), tslib.__read(nodeAnnotationProps), false), tslib.__read(moveAnnotationProps), false));
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
    Sgf.prototype.parse = function (sgf) {
        sgf = sgf.replace(/(\r\n|\n|\r)/gm, '');
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
                    var nodeAnnotationProps_1 = [];
                    var moveAnnotationProps_1 = [];
                    var matches = tslib.__spreadArray([], tslib.__read(content.matchAll(
                    // eslint-disable-next-line no-useless-escape
                    // RegExp(/([A-Z]+\[[a-z\[\]]*\]+)/, 'g')
                    // RegExp(/([A-Z]+\[.*?\]+)/, 'g')
                    RegExp(/[A-Z]+(\[.*?\]){1,}/, 'g'))), false);
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
                            if (NODE_ANNOTATION_PROP_LIST.includes(token))
                                nodeAnnotationProps_1.push(NodeAnnotationProp.from(m[0]));
                            if (MOVE_ANNOTATION_PROP_LIST.includes(token))
                                moveAnnotationProps_1.push(MoveAnnotationProp.from(m[0]));
                        }
                    });
                    if (matches.length > 0) {
                        var node = this_1.tree.parse({
                            name: counter,
                            number: counter,
                            moveProps: moveProps_1,
                            setupProps: setupProps_1,
                            rootProps: rootProps_1,
                            markupProps: markupProps_1,
                            nodeAnnotationProps: nodeAnnotationProps_1,
                            moveAnnotationProps: moveAnnotationProps_1,
                        });
                        if (this_1.currentNode) {
                            this_1.currentNode.addChild(node);
                            node.model.children = [node];
                        }
                        else {
                            this_1.root = node;
                            this_1.parentNode = node;
                        }
                        this_1.currentNode = node;
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

exports.GhostBan = GhostBan;
exports.Sgf = Sgf;
exports.a1ToSGF = a1ToSGF;
exports.calcCenter = calcCenter;
exports.calcMost = calcMost;
exports.calcVisibleArea = calcVisibleArea;
exports.canMove = canMove;
exports.convertStepsForAI = convertStepsForAI;
exports.convertStoneTypeToString = convertStoneTypeToString;
exports.empty = empty;
exports.move = move;
exports.posToSgf = posToSgf;
exports.sgfOffset = sgfOffset;
exports.sgfToPos = sgfToPos;
exports.showKi = showKi;
exports.zeros = zeros;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTbGljZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9GaW5pdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvSW50ZWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2h1bmsuanMiLCIuLi9zcmMvdHlwZXMudHMiLCIuLi9zcmMvY29uc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwQ2FjaGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VBc3NpZ25Jbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weUFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19EYXRhVmlldy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc01hcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ2xvbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2Nsb25lRGVlcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2xvbmUuanMiLCIuLi9zcmMvaGVscGVyLnRzIiwiLi4vc3JjL3V0aWxzLnRzIiwiLi4vc3JjL3N0b25lcy9iYXNlLnRzIiwiLi4vc3JjL3N0b25lcy9id1N0b25lLnRzIiwiLi4vc3JjL3N0b25lcy9pbWFnZVN0b25lLnRzIiwiLi4vc3JjL21hcmt1cHMvTWFya3VwQmFzZS50cyIsIi4uL3NyYy9tYXJrdXBzL0NpcmNsZU1hcmt1cC50cyIsIi4uL3NyYy9tYXJrdXBzL0Nyb3NzTWFya3VwLnRzIiwiLi4vc3JjL21hcmt1cHMvVGV4dE1hcmt1cC50cyIsIi4uL3NyYy9tYXJrdXBzL1NxdWFyZU1hcmt1cC50cyIsIi4uL3NyYy9tYXJrdXBzL1RyaWFuZ2xlTWFya3VwLnRzIiwiLi4vc3JjL2dob3N0YmFuLnRzIiwiLi4vc3JjL3Byb3BzLnRzIiwiLi4vc3JjL3NnZi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNsaWNlYCB3aXRob3V0IGFuIGl0ZXJhdGVlIGNhbGwgZ3VhcmQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gZW5kID4gbGVuZ3RoID8gbGVuZ3RoIDogZW5kO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIHRyaW1tZWRFbmRJbmRleCA9IHJlcXVpcmUoJy4vX3RyaW1tZWRFbmRJbmRleCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRyaW07XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgYmFzZVRyaW0gPSByZXF1aXJlKCcuL19iYXNlVHJpbScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsInZhciB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBmaW5pdGUgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9GaW5pdGUoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9GaW5pdGUoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvRmluaXRlKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0Zpbml0ZSgnMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9GaW5pdGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogMDtcbiAgfVxuICB2YWx1ZSA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHZhbHVlID09PSBJTkZJTklUWSB8fCB2YWx1ZSA9PT0gLUlORklOSVRZKSB7XG4gICAgdmFyIHNpZ24gPSAodmFsdWUgPCAwID8gLTEgOiAxKTtcbiAgICByZXR1cm4gc2lnbiAqIE1BWF9JTlRFR0VSO1xuICB9XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB2YWx1ZSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9GaW5pdGU7XG4iLCJ2YXIgdG9GaW5pdGUgPSByZXF1aXJlKCcuL3RvRmluaXRlJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBpbnRlZ2VyLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvSW50ZWdlcmBdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2ludGVnZXIpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMuMik7XG4gKiAvLyA9PiAzXG4gKlxuICogXy50b0ludGVnZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiAwXG4gKlxuICogXy50b0ludGVnZXIoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvSW50ZWdlcignMy4yJyk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIHRvSW50ZWdlcih2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdG9GaW5pdGUodmFsdWUpLFxuICAgICAgcmVtYWluZGVyID0gcmVzdWx0ICUgMTtcblxuICByZXR1cm4gcmVzdWx0ID09PSByZXN1bHQgPyAocmVtYWluZGVyID8gcmVzdWx0IC0gcmVtYWluZGVyIDogcmVzdWx0KSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9JbnRlZ2VyO1xuIiwidmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi9faXNJdGVyYXRlZUNhbGwnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlQ2VpbCA9IE1hdGguY2VpbCxcbiAgICBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIGVsZW1lbnRzIHNwbGl0IGludG8gZ3JvdXBzIHRoZSBsZW5ndGggb2YgYHNpemVgLlxuICogSWYgYGFycmF5YCBjYW4ndCBiZSBzcGxpdCBldmVubHksIHRoZSBmaW5hbCBjaHVuayB3aWxsIGJlIHRoZSByZW1haW5pbmdcbiAqIGVsZW1lbnRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemU9MV0gVGhlIGxlbmd0aCBvZiBlYWNoIGNodW5rXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgY2h1bmtzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNodW5rKFsnYScsICdiJywgJ2MnLCAnZCddLCAyKTtcbiAqIC8vID0+IFtbJ2EnLCAnYiddLCBbJ2MnLCAnZCddXVxuICpcbiAqIF8uY2h1bmsoWydhJywgJ2InLCAnYycsICdkJ10sIDMpO1xuICogLy8gPT4gW1snYScsICdiJywgJ2MnXSwgWydkJ11dXG4gKi9cbmZ1bmN0aW9uIGNodW5rKGFycmF5LCBzaXplLCBndWFyZCkge1xuICBpZiAoKGd1YXJkID8gaXNJdGVyYXRlZUNhbGwoYXJyYXksIHNpemUsIGd1YXJkKSA6IHNpemUgPT09IHVuZGVmaW5lZCkpIHtcbiAgICBzaXplID0gMTtcbiAgfSBlbHNlIHtcbiAgICBzaXplID0gbmF0aXZlTWF4KHRvSW50ZWdlcihzaXplKSwgMCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICBpZiAoIWxlbmd0aCB8fCBzaXplIDwgMSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobmF0aXZlQ2VpbChsZW5ndGggLyBzaXplKSk7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W3Jlc0luZGV4KytdID0gYmFzZVNsaWNlKGFycmF5LCBpbmRleCwgKGluZGV4ICs9IHNpemUpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNodW5rO1xuIiwiZXhwb3J0IGVudW0gS2kge1xuICBCbGFjayA9IDEsXG4gIFdoaXRlID0gLTEsXG4gIEVtcHR5ID0gMCxcbn1cblxuZXhwb3J0IGVudW0gVGhlbWUge1xuICBCbGFja0FuZFdoaXRlID0gJ2JsYWNrLWFuZC13aGl0ZScsXG4gIEZsYXQgPSAnZmxhdCcsXG4gIFN1YmR1ZWQgPSAnc3ViZHVlZCcsXG4gIFNoZWxsU3RvbmUgPSAnc2hlbGwnLFxuICBTbGF0ZUFuZFNoZWxsID0gJ3NsYXRlLWFuZC1zaGVsbCcsXG4gIFdhbG51dCA9ICd3YWxuZXQnLFxuICBQaG90b3JlYWxpc3RpYyA9ICdwaG90b3JlYWxpc3RpYycsXG59XG5cbmV4cG9ydCBlbnVtIENlbnRlciB7XG4gIFRvcFJpZ2h0ID0gJ3RyJyxcbiAgVG9wTGVmdCA9ICd0bCcsXG4gIEJvdHRvbUxlZnQgPSAnYmwnLFxuICBCb3R0b21SaWdodCA9ICdicicsXG4gIENlbnRlciA9ICdjJyxcbn1cblxuZXhwb3J0IGVudW0gTWFya3VwIHtcbiAgQ3VycmVudCA9ICdjdScsXG4gIENpcmNsZSA9ICdjaScsXG4gIFNxdWFyZSA9ICdzcScsXG4gIFRyaWFuZ2xlID0gJ3RyaScsXG4gIENyb3NzID0gJ2NyJyxcbiAgTnVtYmVyID0gJ251bScsXG4gIExldHRlciA9ICdsZScsXG4gIE5vbmUgPSAnJyxcbn1cblxuaW1wb3J0IHtcbiAgTW92ZVByb3AsXG4gIFNldHVwUHJvcCxcbiAgUm9vdFByb3AsXG4gIE5vZGVBbm5vdGF0aW9uUHJvcCxcbiAgTW92ZUFubm90YXRpb25Qcm9wLFxuICBNYXJrdXBQcm9wLFxufSBmcm9tICcuL3Byb3BzJztcblxuZXhwb3J0IHR5cGUgU2dmTm9kZSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhdHRyaWJ1dGVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICB9O1xuICBtb3ZlUHJvcHM6IE1vdmVQcm9wW107XG4gIHNldHVwUHJvcHM6IFNldHVwUHJvcFtdO1xuICByb290UHJvcHM6IFJvb3RQcm9wW107XG4gIG1hcmt1cFByb3BzOiBNYXJrdXBQcm9wW107XG4gIG5vZGVBbm5vdGF0aW9uUHJvcHM6IE5vZGVBbm5vdGF0aW9uUHJvcFtdO1xuICBtb3ZlQW5ub3RhdGlvblByb3BzOiBNb3ZlQW5ub3RhdGlvblByb3BbXTtcbn07XG4iLCJpbXBvcnQgY2h1bmsgZnJvbSAnbG9kYXNoL2NodW5rJztcbmltcG9ydCB7VGhlbWV9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQTFfTEVUVEVSUyA9IFtcbiAgJ0EnLFxuICAnQicsXG4gICdDJyxcbiAgJ0QnLFxuICAnRScsXG4gICdGJyxcbiAgJ0cnLFxuICAnSCcsXG4gICdKJyxcbiAgJ0snLFxuICAnTCcsXG4gICdNJyxcbiAgJ04nLFxuICAnTycsXG4gICdQJyxcbiAgJ1EnLFxuICAnUicsXG4gICdTJyxcbiAgJ1QnLFxuXTtcbmV4cG9ydCBjb25zdCBBMV9OVU1CRVJTID0gW1xuICAxOSwgMTgsIDE3LCAxNiwgMTUsIDE0LCAxMywgMTIsIDExLCAxMCwgOSwgOCwgNywgNiwgNSwgNCwgMywgMiwgMSxcbl07XG5leHBvcnQgY29uc3QgU0dGX0xFVFRFUlMgPSBbXG4gICdhJyxcbiAgJ2InLFxuICAnYycsXG4gICdkJyxcbiAgJ2UnLFxuICAnZicsXG4gICdnJyxcbiAgJ2gnLFxuICAnaScsXG4gICdqJyxcbiAgJ2snLFxuICAnbCcsXG4gICdtJyxcbiAgJ24nLFxuICAnbycsXG4gICdwJyxcbiAgJ3EnLFxuICAncicsXG4gICdzJyxcbl07XG5leHBvcnQgY29uc3QgQkxBTktfQVJSQVkgPSBjaHVuayhuZXcgQXJyYXkoMzYxKS5maWxsKDApLCAxOSk7XG5leHBvcnQgY29uc3QgR1JJRCA9IDE5O1xuZXhwb3J0IGNvbnN0IERPVF9TSVpFID0gMztcbmV4cG9ydCBjb25zdCBFWFBBTkRfSCA9IDU7XG5leHBvcnQgY29uc3QgRVhQQU5EX1YgPSA1O1xuZXhwb3J0IGNvbnN0IFJFU1BPTlNFX1RJTUUgPSAxMDA7XG5cbmV4cG9ydCBjb25zdCBSRVNPVVJDRVM6IHtcbiAgW2tleTogc3RyaW5nXToge2JvYXJkPzogc3RyaW5nOyBibGFja3M6IHN0cmluZ1tdOyB3aGl0ZXM6IHN0cmluZ1tdfTtcbn0gPSB7XG4gIFtUaGVtZS5CbGFja0FuZFdoaXRlXToge1xuICAgIGJsYWNrczogW10sXG4gICAgd2hpdGVzOiBbXSxcbiAgfSxcbiAgW1RoZW1lLlN1YmR1ZWRdOiB7XG4gICAgYm9hcmQ6XG4gICAgICAnaHR0cHM6Ly9naG9zdC1nby5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vdGhlbWVzL3N1YmR1ZWQvYm9hcmQucG5nJyxcbiAgICBibGFja3M6IFtcbiAgICAgICdodHRwczovL2dob3N0LWdvLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS90aGVtZXMvc3ViZHVlZC9ibGFjay5wbmcnLFxuICAgIF0sXG4gICAgd2hpdGVzOiBbXG4gICAgICAnaHR0cHM6Ly9naG9zdC1nby5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vdGhlbWVzL3N1YmR1ZWQvd2hpdGUucG5nJyxcbiAgICBdLFxuICB9LFxuICBbVGhlbWUuU2hlbGxTdG9uZV06IHtcbiAgICBib2FyZDpcbiAgICAgICdodHRwczovL2dob3N0LWdvLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS90aGVtZXMvc2hlbGwtc3RvbmUvYm9hcmQucG5nJyxcbiAgICBibGFja3M6IFtcbiAgICAgICdodHRwczovL2dob3N0LWdvLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS90aGVtZXMvc2hlbGwtc3RvbmUvYmxhY2sucG5nJyxcbiAgICBdLFxuICAgIHdoaXRlczogW1xuICAgICAgJ2h0dHBzOi8vZ2hvc3QtZ28ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3RoZW1lcy9zaGVsbC1zdG9uZS93aGl0ZTAucG5nJyxcbiAgICAgICdodHRwczovL2dob3N0LWdvLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS90aGVtZXMvc2hlbGwtc3RvbmUvd2hpdGUxLnBuZycsXG4gICAgICAnaHR0cHM6Ly9naG9zdC1nby5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vdGhlbWVzL3NoZWxsLXN0b25lL3doaXRlMi5wbmcnLFxuICAgICAgJ2h0dHBzOi8vZ2hvc3QtZ28ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3RoZW1lcy9zaGVsbC1zdG9uZS93aGl0ZTMucG5nJyxcbiAgICAgICdodHRwczovL2dob3N0LWdvLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS90aGVtZXMvc2hlbGwtc3RvbmUvd2hpdGU0LnBuZycsXG4gICAgXSxcbiAgfSxcbiAgW1RoZW1lLlNsYXRlQW5kU2hlbGxdOiB7XG4gICAgYm9hcmQ6XG4gICAgICAnaHR0cHM6Ly9naG9zdC1nby5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vdGhlbWVzL3NsYXRlLWFuZC1zaGVsbC9ib2FyZC5wbmcnLFxuICAgIGJsYWNrczogW1xuICAgICAgJ2h0dHBzOi8vZ2hvc3QtZ28ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3RoZW1lcy9zbGF0ZS1hbmQtc2hlbGwvc2xhdGUxLnBuZycsXG4gICAgICAnaHR0cHM6Ly9naG9zdC1nby5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vdGhlbWVzL3NsYXRlLWFuZC1zaGVsbC9zbGF0ZTIucG5nJyxcbiAgICAgICdodHRwczovL2dob3N0LWdvLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS90aGVtZXMvc2xhdGUtYW5kLXNoZWxsL3NsYXRlMy5wbmcnLFxuICAgICAgJ2h0dHBzOi8vZ2hvc3QtZ28ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3RoZW1lcy9zbGF0ZS1hbmQtc2hlbGwvc2xhdGU0LnBuZycsXG4gICAgICAnaHR0cHM6Ly9naG9zdC1nby5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vdGhlbWVzL3NsYXRlLWFuZC1zaGVsbC9zbGF0ZTUucG5nJyxcbiAgICBdLFxuICAgIHdoaXRlczogW1xuICAgICAgJ2h0dHBzOi8vZ2hvc3QtZ28ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3RoZW1lcy9zbGF0ZS1hbmQtc2hlbGwvc2hlbGwxLnBuZycsXG4gICAgICAnaHR0cHM6Ly9naG9zdC1nby5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vdGhlbWVzL3NsYXRlLWFuZC1zaGVsbC9zaGVsbDIucG5nJyxcbiAgICAgICdodHRwczovL2dob3N0LWdvLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS90aGVtZXMvc2xhdGUtYW5kLXNoZWxsL3NoZWxsMy5wbmcnLFxuICAgICAgJ2h0dHBzOi8vZ2hvc3QtZ28ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3RoZW1lcy9zbGF0ZS1hbmQtc2hlbGwvc2hlbGw0LnBuZycsXG4gICAgICAnaHR0cHM6Ly9naG9zdC1nby5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vdGhlbWVzL3NsYXRlLWFuZC1zaGVsbC9zaGVsbDUucG5nJyxcbiAgICBdLFxuICB9LFxuICBbVGhlbWUuV2FsbnV0XToge1xuICAgIGJvYXJkOlxuICAgICAgJ2h0dHBzOi8vZ2hvc3QtZ28ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3RoZW1lcy93YWxudXQvYm9hcmQuanBnJyxcbiAgICBibGFja3M6IFtcbiAgICAgICdodHRwczovL2dob3N0LWdvLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS90aGVtZXMvd2FsbnV0L2JsYWNrLnBuZycsXG4gICAgXSxcbiAgICB3aGl0ZXM6IFtcbiAgICAgICdodHRwczovL2dob3N0LWdvLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS90aGVtZXMvd2FsbnV0L3doaXRlLnBuZycsXG4gICAgXSxcbiAgfSxcbiAgW1RoZW1lLlBob3RvcmVhbGlzdGljXToge1xuICAgIGJvYXJkOlxuICAgICAgJ2h0dHBzOi8vZ2hvc3QtZ28ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3RoZW1lcy9waG90b3JlYWxpc3RpYy9ib2FyZC5wbmcnLFxuICAgIGJsYWNrczogW1xuICAgICAgJ2h0dHBzOi8vZ2hvc3QtZ28ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3RoZW1lcy9waG90b3JlYWxpc3RpYy9ibGFjay5wbmcnLFxuICAgIF0sXG4gICAgd2hpdGVzOiBbXG4gICAgICAnaHR0cHM6Ly9naG9zdC1nby5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vdGhlbWVzL3Bob3RvcmVhbGlzdGljL3doaXRlLnBuZycsXG4gICAgXSxcbiAgfSxcbiAgW1RoZW1lLkZsYXRdOiB7XG4gICAgYmxhY2tzOiBbXG4gICAgICAnaHR0cHM6Ly9naG9zdC1nby5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vdGhlbWVzL2ZsYXQvYmxhY2suc3ZnJyxcbiAgICBdLFxuICAgIHdoaXRlczogW1xuICAgICAgJ2h0dHBzOi8vZ2hvc3QtZ28ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3RoZW1lcy9mbGF0L3doaXRlLnN2ZycsXG4gICAgXSxcbiAgfSxcbn07XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG4iLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcbiIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG4iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG4iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG4iLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG4iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcbiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG4iLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzSW47XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXNJbiA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzSW47XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbkluO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHM7XG4iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9sc0luO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBhbmQgaW5oZXJpdGVkIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzSW4oc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9sc0luO1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gbmV3IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcbiIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGF0YVZpZXc7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVnRXhwO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTeW1ib2w7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKSxcbiAgICBjbG9uZURhdGFWaWV3ID0gcmVxdWlyZSgnLi9fY2xvbmVEYXRhVmlldycpLFxuICAgIGNsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKSxcbiAgICBjbG9uZVN5bWJvbCA9IHJlcXVpcmUoJy4vX2Nsb25lU3ltYm9sJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBNYXBgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIGBTZXRgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG4iLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG4iLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWFwYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBtYXBUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWFwO1xuIiwidmFyIGJhc2VJc01hcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNNYXAgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc01hcDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE1hcGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNNYXAobmV3IE1hcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc01hcChuZXcgV2Vha01hcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNNYXAgPSBub2RlSXNNYXAgPyBiYXNlVW5hcnkobm9kZUlzTWFwKSA6IGJhc2VJc01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc01hcDtcbiIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNTZXRgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1NldCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IHNldFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNTZXQ7XG4iLCJ2YXIgYmFzZUlzU2V0ID0gcmVxdWlyZSgnLi9fYmFzZUlzU2V0JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1NldCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzU2V0O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU2V0YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1NldChuZXcgU2V0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU2V0KG5ldyBXZWFrU2V0KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1NldCA9IG5vZGVJc1NldCA/IGJhc2VVbmFyeShub2RlSXNTZXQpIDogYmFzZUlzU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2V0O1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlQXNzaWduSW4gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduSW4nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGNvcHlTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19jb3B5U3ltYm9sc0luJyksXG4gICAgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKSxcbiAgICBnZXRBbGxLZXlzSW4gPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzSW4nKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc01hcCA9IHJlcXVpcmUoJy4vaXNNYXAnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1NldCA9IHJlcXVpcmUoJy4vaXNTZXQnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX0ZMQVRfRkxBRyA9IDIsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIERlZXAgY2xvbmVcbiAqICAyIC0gRmxhdHRlbiBpbmhlcml0ZWQgcHJvcGVydGllc1xuICogIDQgLSBDbG9uZSBzeW1ib2xzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0LFxuICAgICAgaXNEZWVwID0gYml0bWFzayAmIENMT05FX0RFRVBfRkxBRyxcbiAgICAgIGlzRmxhdCA9IGJpdG1hc2sgJiBDTE9ORV9GTEFUX0ZMQUcsXG4gICAgICBpc0Z1bGwgPSBiaXRtYXNrICYgQ0xPTkVfU1lNQk9MU19GTEFHO1xuXG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIHJlc3VsdCA9IChpc0ZsYXQgfHwgaXNGdW5jKSA/IHt9IDogaW5pdENsb25lT2JqZWN0KHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBpc0ZsYXRcbiAgICAgICAgICA/IGNvcHlTeW1ib2xzSW4odmFsdWUsIGJhc2VBc3NpZ25JbihyZXN1bHQsIHZhbHVlKSlcbiAgICAgICAgICA6IGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlKSB7XG4gICAgICByZXN1bHQuYWRkKGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3ViVmFsdWUsIHZhbHVlLCBzdGFjaykpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzTWFwKHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgICAgcmVzdWx0LnNldChrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBrZXlzRnVuYyA9IGlzRnVsbFxuICAgID8gKGlzRmxhdCA/IGdldEFsbEtleXNJbiA6IGdldEFsbEtleXMpXG4gICAgOiAoaXNGbGF0ID8ga2V5c0luIDoga2V5cyk7XG5cbiAgdmFyIHByb3BzID0gaXNBcnIgPyB1bmRlZmluZWQgOiBrZXlzRnVuYyh2YWx1ZSk7XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4vX2Jhc2VDbG9uZScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIENMT05FX0RFRVBfRkxBRyB8IENMT05FX1NZTUJPTFNfRkxBRyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4vX2Jhc2VDbG9uZScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNoYWxsb3cgY2xvbmUgb2YgYHZhbHVlYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvbiB0aGVcbiAqIFtzdHJ1Y3R1cmVkIGNsb25lIGFsZ29yaXRobV0oaHR0cHM6Ly9tZG4uaW8vU3RydWN0dXJlZF9jbG9uZV9hbGdvcml0aG0pXG4gKiBhbmQgc3VwcG9ydHMgY2xvbmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLCBkYXRlIG9iamVjdHMsIG1hcHMsXG4gKiBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLCBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWRcbiAqIGFycmF5cy4gVGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgYGFyZ3VtZW50c2Agb2JqZWN0cyBhcmUgY2xvbmVkXG4gKiBhcyBwbGFpbiBvYmplY3RzLiBBbiBlbXB0eSBvYmplY3QgaXMgcmV0dXJuZWQgZm9yIHVuY2xvbmVhYmxlIHZhbHVlcyBzdWNoXG4gKiBhcyBlcnJvciBvYmplY3RzLCBmdW5jdGlvbnMsIERPTSBub2RlcywgYW5kIFdlYWtNYXBzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVEZWVwXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBzaGFsbG93ID0gXy5jbG9uZShvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKHNoYWxsb3dbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xuIiwiaW1wb3J0IGNsb25lIGZyb20gJ2xvZGFzaC9jbG9uZSc7XG4vLyBpbXBvcnQgSnNGZWF0IGZyb20gJ2pzZmVhdCc7XG5pbXBvcnQgKiBhcyBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuZXhwb3J0IGNvbnN0IHNnZlRvUG9zID0gKHN0cjogYW55KSA9PiB7XG4gIGNvbnN0IGtpID0gc3RyWzBdID09PSAnQicgPyAxIDogLTE7XG4gIGNvbnN0IHRlbXBTdHIgPSAvXFxbKC4qKVxcXS8uZXhlYyhzdHIpO1xuICBpZiAodGVtcFN0cikge1xuICAgIGNvbnN0IHBvcyA9IHRlbXBTdHJbMV07XG4gICAgY29uc3QgeCA9IENvbnN0LlNHRl9MRVRURVJTLmluZGV4T2YocG9zWzBdKTtcbiAgICBjb25zdCB5ID0gQ29uc3QuU0dGX0xFVFRFUlMuaW5kZXhPZihwb3NbMV0pO1xuICAgIHJldHVybiB7eCwgeSwga2l9O1xuICB9XG4gIHJldHVybiB7eDogLTEsIHk6IC0xLCBraTogMH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2dmT2Zmc2V0ID0gKHNnZjogYW55LCBvZmZzZXQgPSAwKSA9PiB7XG4gIGlmIChvZmZzZXQgPT09IDApIHJldHVybiBzZ2Y7XG4gIGNvbnN0IHJlcyA9IGNsb25lKHNnZik7XG4gIGNvbnN0IGNoYXJJbmRleCA9IENvbnN0LlNHRl9MRVRURVJTLmluZGV4T2Yoc2dmWzJdKSAtIG9mZnNldDtcbiAgcmV0dXJuIHJlcy5zdWJzdHIoMCwgMikgKyBDb25zdC5TR0ZfTEVUVEVSU1tjaGFySW5kZXhdICsgcmVzLnN1YnN0cigyICsgMSk7XG59O1xuXG5leHBvcnQgY29uc3QgYTFUb1NHRiA9IChzdHI6IGFueSwgdHlwZSA9ICdCJywgb2Zmc2V0ID0gMCkgPT4ge1xuICBjb25zdCBpbnggPSBDb25zdC5BMV9MRVRURVJTLmluZGV4T2Yoc3RyWzBdKSArIG9mZnNldDtcbiAgY29uc3QgaW55ID0gQ29uc3QuQTFfTlVNQkVSUy5pbmRleE9mKHBhcnNlSW50KHN0ci5zdWJzdHIoMSksIDApKSAtIG9mZnNldDtcbiAgY29uc3Qgc2dmID0gYCR7dHlwZX1bJHtDb25zdC5TR0ZfTEVUVEVSU1tpbnhdfSR7Q29uc3QuU0dGX0xFVFRFUlNbaW55XX1dYDtcbiAgcmV0dXJuIHNnZjtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3NUb1NnZiA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwga2k6IG51bWJlcikgPT4ge1xuICBjb25zdCBheCA9IENvbnN0LlNHRl9MRVRURVJTW3hdO1xuICBjb25zdCBheSA9IENvbnN0LlNHRl9MRVRURVJTW3ldO1xuICBpZiAoa2kgPT09IDApIHJldHVybiAnJztcbiAgaWYgKGtpID09PSAxKSByZXR1cm4gYEJbJHtheH0ke2F5fV1gO1xuICBpZiAoa2kgPT09IC0xKSByZXR1cm4gYFdbJHtheH0ke2F5fV1gO1xuICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnQgY29uc3QgY29udmVydFN0b25lVHlwZVRvU3RyaW5nID0gKHR5cGU6IGFueSkgPT4gKHR5cGUgPT09IDEgPyAnQicgOiAnVycpO1xuXG5leHBvcnQgY29uc3QgY29udmVydFN0ZXBzRm9yQUkgPSAoc3RlcHM6IGFueSwgb2Zmc2V0ID0gMCkgPT4ge1xuICBsZXQgcmVzID0gY2xvbmUoc3RlcHMpO1xuICByZXMgPSByZXMubWFwKChzOiBhbnkpID0+IHNnZk9mZnNldChzLCBvZmZzZXQpKTtcbiAgY29uc3QgaGVhZGVyID0gYCg7RkZbNF1HTVsxXVNaWyR7XG4gICAgMTkgLSBvZmZzZXRcbiAgfV1HTlsyMjZdUEJbQmxhY2tdSEFbMF1QV1tXaGl0ZV1LTVs3LjVdRFRbMjAxNy0wOC0wMV1UTVsxODAwXVJVW0NoaW5lc2VdQ1BbQ29weXJpZ2h0IGdob3N0LWdvLmNvbV1BUFtnaG9zdC1nby5jb21dUExbQmxhY2tdO2A7XG4gIGxldCBjb3VudCA9IDA7XG4gIGxldCBwcmV2ID0gJyc7XG4gIHN0ZXBzLmZvckVhY2goKHN0ZXA6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgIGlmIChzdGVwWzBdID09PSBwcmV2WzBdKSB7XG4gICAgICBpZiAoc3RlcFswXSA9PT0gJ0InKSB7XG4gICAgICAgIHJlcy5zcGxpY2UoaW5kZXggKyBjb3VudCwgMCwgJ1dbdHRdJyk7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3BsaWNlKGluZGV4ICsgY291bnQsIDAsICdCW3R0XScpO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBwcmV2ID0gc3RlcDtcbiAgfSk7XG4gIHJldHVybiBgJHtoZWFkZXJ9JHtyZXMuam9pbignOycpfSlgO1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IEdvQmFuRGV0ZWN0aW9uID0gKHBpeGVsRGF0YSwgY2FudmFzKSA9PiB7XG4vLyBjb25zdCBjb2x1bW5zID0gY2FudmFzLndpZHRoO1xuLy8gY29uc3Qgcm93cyA9IGNhbnZhcy5oZWlnaHQ7XG4vLyBjb25zdCBkYXRhVHlwZSA9IEpzRmVhdC5VOEMxX3Q7XG4vLyBjb25zdCBkaXN0TWF0cml4VCA9IG5ldyBKc0ZlYXQubWF0cml4X3QoY29sdW1ucywgcm93cywgZGF0YVR5cGUpO1xuLy8gSnNGZWF0LmltZ3Byb2MuZ3JheXNjYWxlKHBpeGVsRGF0YSwgY29sdW1ucywgcm93cywgZGlzdE1hdHJpeFQpO1xuLy8gSnNGZWF0LmltZ3Byb2MuZ2F1c3NpYW5fYmx1cihkaXN0TWF0cml4VCwgZGlzdE1hdHJpeFQsIDIsIDApO1xuLy8gSnNGZWF0LmltZ3Byb2MuY2FubnkoZGlzdE1hdHJpeFQsIGRpc3RNYXRyaXhULCA1MCwgNTApO1xuXG4vLyBjb25zdCBuZXdQaXhlbERhdGEgPSBuZXcgVWludDMyQXJyYXkocGl4ZWxEYXRhLmJ1ZmZlcik7XG4vLyBjb25zdCBhbHBoYSA9ICgweGZmIDw8IDI0KTtcbi8vIGxldCBpID0gZGlzdE1hdHJpeFQuY29scyAqIGRpc3RNYXRyaXhULnJvd3M7XG4vLyBsZXQgcGl4ID0gMDtcbi8vIHdoaWxlIChpID49IDApIHtcbi8vICAgcGl4ID0gZGlzdE1hdHJpeFQuZGF0YVtpXTtcbi8vICAgbmV3UGl4ZWxEYXRhW2ldID0gYWxwaGEgfCAocGl4IDw8IDE2KSB8IChwaXggPDwgOCkgfCBwaXg7XG4vLyAgIGkgLT0gMTtcbi8vIH1cbi8vIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG5cbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoL2Nsb25lRGVlcCc7XG5pbXBvcnQge3NnZlRvUG9zfSBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQge0NlbnRlcn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCB6ZXJvcyA9IChzaXplOiBbbnVtYmVyLCBudW1iZXJdKSA9PlxuICBuZXcgQXJyYXkoc2l6ZVswXSkuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IEFycmF5KHNpemVbMV0pLmZpbGwoMCkpO1xuXG5leHBvcnQgY29uc3QgZW1wdHkgPSAoc2l6ZTogW251bWJlciwgbnVtYmVyXSk6IHN0cmluZ1tdW10gPT5cbiAgbmV3IEFycmF5KHNpemVbMF0pLmZpbGwoJycpLm1hcCgoKSA9PiBuZXcgQXJyYXkoc2l6ZVsxXSkuZmlsbCgnJykpO1xuXG5jb25zdCBHUklEID0gMTk7XG5sZXQgbGliZXJ0aWVzID0gMDtcbmxldCByZWN1cnNpb25QYXRoOiBzdHJpbmdbXSA9IFtdO1xuXG5leHBvcnQgY29uc3QgY2FsY01vc3QgPSAobWF0OiBudW1iZXJbXVtdLCBib2FyZFNpemUgPSAxOSkgPT4ge1xuICBsZXQgbGVmdE1vc3Q6IG51bWJlciA9IGJvYXJkU2l6ZSAtIDE7XG4gIGxldCByaWdodE1vc3QgPSAwO1xuICBsZXQgdG9wTW9zdDogbnVtYmVyID0gYm9hcmRTaXplIC0gMTtcbiAgbGV0IGJvdHRvbU1vc3QgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0W2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG1hdFtpXVtqXTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgICBpZiAobGVmdE1vc3QgPiBpKSBsZWZ0TW9zdCA9IGk7XG4gICAgICAgIGlmIChyaWdodE1vc3QgPCBpKSByaWdodE1vc3QgPSBpO1xuICAgICAgICBpZiAodG9wTW9zdCA+IGopIHRvcE1vc3QgPSBqO1xuICAgICAgICBpZiAoYm90dG9tTW9zdCA8IGopIGJvdHRvbU1vc3QgPSBqO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge2xlZnRNb3N0LCByaWdodE1vc3QsIHRvcE1vc3QsIGJvdHRvbU1vc3R9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGNDZW50ZXIgPSAobWF0OiBudW1iZXJbXVtdLCBib2FyZFNpemUgPSAxOSkgPT4ge1xuICBjb25zdCB7bGVmdE1vc3QsIHJpZ2h0TW9zdCwgdG9wTW9zdCwgYm90dG9tTW9zdH0gPSBjYWxjTW9zdChtYXQsIGJvYXJkU2l6ZSk7XG4gIGNvbnN0IHRvcCA9IHRvcE1vc3QgPCBib2FyZFNpemUgLSAxIC0gYm90dG9tTW9zdDtcbiAgY29uc3QgbGVmdCA9IGxlZnRNb3N0IDwgYm9hcmRTaXplIC0gMSAtIHJpZ2h0TW9zdDtcbiAgaWYgKHRvcCAmJiBsZWZ0KSByZXR1cm4gQ2VudGVyLlRvcExlZnQ7XG4gIGlmICghdG9wICYmIGxlZnQpIHJldHVybiBDZW50ZXIuQm90dG9tTGVmdDtcbiAgaWYgKHRvcCAmJiAhbGVmdCkgcmV0dXJuIENlbnRlci5Ub3BSaWdodDtcbiAgaWYgKCF0b3AgJiYgIWxlZnQpIHJldHVybiBDZW50ZXIuQm90dG9tUmlnaHQ7XG4gIHJldHVybiBDZW50ZXIuQ2VudGVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGNWaXNpYmxlQXJlYSA9IChcbiAgbWF0OiBudW1iZXJbXVtdLFxuICBib2FyZFNpemUgPSAxOSxcbiAgZXh0ZW5kID0gMlxuKSA9PiB7XG4gIGNvbnN0IGNlbnRlciA9IGNhbGNDZW50ZXIobWF0KTtcbiAgY29uc3Qge2xlZnRNb3N0LCByaWdodE1vc3QsIHRvcE1vc3QsIGJvdHRvbU1vc3R9ID0gY2FsY01vc3QobWF0LCBib2FyZFNpemUpO1xuICBsZXQgdmlzaWJsZUFyZWEgPSBbXG4gICAgWzAsIDE4XSxcbiAgICBbMCwgMThdLFxuICBdO1xuICBsZXQgdmlzaWJsZVNpemUgPSBib2FyZFNpemUgLSAxO1xuICBpZiAoY2VudGVyID09PSBDZW50ZXIuVG9wTGVmdCkge1xuICAgIHZpc2libGVTaXplID0gTWF0aC5taW4oXG4gICAgICBNYXRoLm1heChyaWdodE1vc3QsIGJvdHRvbU1vc3QpICsgZXh0ZW5kLFxuICAgICAgYm9hcmRTaXplIC0gMVxuICAgICk7XG4gICAgdmlzaWJsZUFyZWEgPSBbXG4gICAgICBbMCwgdmlzaWJsZVNpemVdLFxuICAgICAgWzAsIHZpc2libGVTaXplXSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGNlbnRlciA9PT0gQ2VudGVyLlRvcFJpZ2h0KSB7XG4gICAgdmlzaWJsZVNpemUgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KGJvdHRvbU1vc3QgKyBleHRlbmQsIGJvYXJkU2l6ZSAtIDEgLSAobGVmdE1vc3QgLSBleHRlbmQpKSxcbiAgICAgIGJvYXJkU2l6ZSAtIDFcbiAgICApO1xuICAgIHZpc2libGVBcmVhID0gW1xuICAgICAgW2JvYXJkU2l6ZSAtIDEgLSB2aXNpYmxlU2l6ZSwgMThdLFxuICAgICAgWzAsIHZpc2libGVTaXplXSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGNlbnRlciA9PT0gQ2VudGVyLkJvdHRvbUxlZnQpIHtcbiAgICB2aXNpYmxlU2l6ZSA9IE1hdGgubWluKFxuICAgICAgTWF0aC5tYXgoYm9hcmRTaXplIC0gMSAtICh0b3BNb3N0IC0gZXh0ZW5kKSwgcmlnaHRNb3N0ICsgZXh0ZW5kKSxcbiAgICAgIGJvYXJkU2l6ZSAtIDFcbiAgICApO1xuICAgIHZpc2libGVBcmVhID0gW1xuICAgICAgWzAsIHZpc2libGVTaXplXSxcbiAgICAgIFtib2FyZFNpemUgLSAxIC0gdmlzaWJsZVNpemUsIDE4XSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGNlbnRlciA9PT0gQ2VudGVyLkJvdHRvbVJpZ2h0KSB7XG4gICAgdmlzaWJsZVNpemUgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KFxuICAgICAgICBib2FyZFNpemUgLSAxIC0gKHRvcE1vc3QgLSBleHRlbmQpLFxuICAgICAgICBib2FyZFNpemUgLSAxIC0gKGxlZnRNb3N0IC0gZXh0ZW5kKVxuICAgICAgKSxcbiAgICAgIGJvYXJkU2l6ZSAtIDFcbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2cycsIHZpc2libGVTaXplKTtcbiAgICB2aXNpYmxlQXJlYSA9IFtcbiAgICAgIFtib2FyZFNpemUgLSAxIC0gdmlzaWJsZVNpemUsIDE4XSxcbiAgICAgIFtib2FyZFNpemUgLSAxIC0gdmlzaWJsZVNpemUsIDE4XSxcbiAgICBdO1xuICB9XG4gIHJldHVybiB7dmlzaWJsZUFyZWEsIGNlbnRlcn07XG59O1xuXG5mdW5jdGlvbiBjYWxjTGliZXJ0eUNvcmUobWF0OiBudW1iZXJbXVtdLCB4OiBudW1iZXIsIHk6IG51bWJlciwga2k6IG51bWJlcikge1xuICBpZiAoeCA+PSAwICYmIHggPCBHUklEICYmIHkgPj0gMCAmJiB5IDwgR1JJRCkge1xuICAgIGlmIChtYXRbeF1beV0gPT09IGtpICYmICFyZWN1cnNpb25QYXRoLmluY2x1ZGVzKGAke3h9LCR7eX1gKSkge1xuICAgICAgcmVjdXJzaW9uUGF0aC5wdXNoKGAke3h9LCR7eX1gKTtcbiAgICAgIGNhbGNMaWJlcnR5Q29yZShtYXQsIHggLSAxLCB5LCBraSk7XG4gICAgICBjYWxjTGliZXJ0eUNvcmUobWF0LCB4ICsgMSwgeSwga2kpO1xuICAgICAgY2FsY0xpYmVydHlDb3JlKG1hdCwgeCwgeSAtIDEsIGtpKTtcbiAgICAgIGNhbGNMaWJlcnR5Q29yZShtYXQsIHgsIHkgKyAxLCBraSk7XG4gICAgfSBlbHNlIGlmIChtYXRbeF1beV0gPT09IDApIHtcbiAgICAgIGxpYmVydGllcyArPSAxO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjTGliZXJ0eShtYXQ6IG51bWJlcltdW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGxpYmVydGllcyA9IDA7XG4gIHJlY3Vyc2lvblBhdGggPSBbXTtcblxuICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+IEdSSUQgLSAxIHx8IHkgPiBHUklEIC0gMSkge1xuICAgIHJldHVybiB7XG4gICAgICBsaWJlcnR5OiA0LFxuICAgICAgcmVjdXJzaW9uUGF0aDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGlmIChtYXRbeF1beV0gPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGliZXJ0eTogNCxcbiAgICAgIHJlY3Vyc2lvblBhdGg6IFtdLFxuICAgIH07XG4gIH1cbiAgY2FsY0xpYmVydHlDb3JlKG1hdCwgeCwgeSwga2kpO1xuICByZXR1cm4ge1xuICAgIGxpYmVydHk6IGxpYmVydGllcyxcbiAgICByZWN1cnNpb25QYXRoLFxuICB9O1xufVxuXG5mdW5jdGlvbiBleGVjUG9ubnVraShtYXQ6IG51bWJlcltdW10sIGk6IG51bWJlciwgajogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGNvbnN0IG5ld01hdCA9IGNsb25lRGVlcChtYXQpO1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eVVwLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoVXB9ID0gY2FsY0xpYmVydHkoXG4gICAgbWF0LFxuICAgIGksXG4gICAgaiAtIDEsXG4gICAga2lcbiAgKTtcbiAgY29uc3Qge2xpYmVydHk6IGxpYmVydHlEb3duLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoRG93bn0gPSBjYWxjTGliZXJ0eShcbiAgICBtYXQsXG4gICAgaSxcbiAgICBqICsgMSxcbiAgICBraVxuICApO1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eUxlZnQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhMZWZ0fSA9IGNhbGNMaWJlcnR5KFxuICAgIG1hdCxcbiAgICBpIC0gMSxcbiAgICBqLFxuICAgIGtpXG4gICk7XG4gIGNvbnN0IHtsaWJlcnR5OiBsaWJlcnR5UmlnaHQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhSaWdodH0gPVxuICAgIGNhbGNMaWJlcnR5KG1hdCwgaSArIDEsIGosIGtpKTtcbiAgaWYgKGxpYmVydHlVcCA9PT0gMCkge1xuICAgIHJlY3Vyc2lvblBhdGhVcC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY29vcmQgPSBpdGVtLnNwbGl0KCcsJyk7XG4gICAgICBuZXdNYXRbcGFyc2VJbnQoY29vcmRbMF0pXVtwYXJzZUludChjb29yZFsxXSldID0gMDtcbiAgICB9KTtcbiAgfVxuICBpZiAobGliZXJ0eURvd24gPT09IDApIHtcbiAgICByZWN1cnNpb25QYXRoRG93bi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY29vcmQgPSBpdGVtLnNwbGl0KCcsJyk7XG4gICAgICBuZXdNYXRbcGFyc2VJbnQoY29vcmRbMF0pXVtwYXJzZUludChjb29yZFsxXSldID0gMDtcbiAgICB9KTtcbiAgfVxuICBpZiAobGliZXJ0eUxlZnQgPT09IDApIHtcbiAgICByZWN1cnNpb25QYXRoTGVmdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY29vcmQgPSBpdGVtLnNwbGl0KCcsJyk7XG4gICAgICBuZXdNYXRbcGFyc2VJbnQoY29vcmRbMF0pXVtwYXJzZUludChjb29yZFsxXSldID0gMDtcbiAgICB9KTtcbiAgfVxuICBpZiAobGliZXJ0eVJpZ2h0ID09PSAwKSB7XG4gICAgcmVjdXJzaW9uUGF0aFJpZ2h0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBjb29yZCA9IGl0ZW0uc3BsaXQoJywnKTtcbiAgICAgIG5ld01hdFtwYXJzZUludChjb29yZFswXSldW3BhcnNlSW50KGNvb3JkWzFdKV0gPSAwO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBuZXdNYXQ7XG59XG5cbmZ1bmN0aW9uIGNhblBvbm51a2kobWF0OiBudW1iZXJbXVtdLCBpOiBudW1iZXIsIGo6IG51bWJlciwga2k6IG51bWJlcikge1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eVVwLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoVXB9ID0gY2FsY0xpYmVydHkoXG4gICAgbWF0LFxuICAgIGksXG4gICAgaiAtIDEsXG4gICAga2lcbiAgKTtcbiAgY29uc3Qge2xpYmVydHk6IGxpYmVydHlEb3duLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoRG93bn0gPSBjYWxjTGliZXJ0eShcbiAgICBtYXQsXG4gICAgaSxcbiAgICBqICsgMSxcbiAgICBraVxuICApO1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eUxlZnQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhMZWZ0fSA9IGNhbGNMaWJlcnR5KFxuICAgIG1hdCxcbiAgICBpIC0gMSxcbiAgICBqLFxuICAgIGtpXG4gICk7XG4gIGNvbnN0IHtsaWJlcnR5OiBsaWJlcnR5UmlnaHQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhSaWdodH0gPVxuICAgIGNhbGNMaWJlcnR5KG1hdCwgaSArIDEsIGosIGtpKTtcbiAgaWYgKGxpYmVydHlVcCA9PT0gMCAmJiByZWN1cnNpb25QYXRoVXAubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChsaWJlcnR5RG93biA9PT0gMCAmJiByZWN1cnNpb25QYXRoRG93bi5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGxpYmVydHlMZWZ0ID09PSAwICYmIHJlY3Vyc2lvblBhdGhMZWZ0Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAobGliZXJ0eVJpZ2h0ID09PSAwICYmIHJlY3Vyc2lvblBhdGhSaWdodC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuTW92ZShtYXQ6IG51bWJlcltdW10sIGk6IG51bWJlciwgajogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGlmIChpIDwgMCB8fCBqIDwgMCkgcmV0dXJuIHRydWU7XG4gIGNvbnN0IG5ld01hdCA9IGNsb25lRGVlcChtYXQpO1xuICBpZiAobmV3TWF0W2ldW2pdICE9PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbmV3TWF0W2ldW2pdID0ga2k7XG4gIGNvbnN0IHtsaWJlcnR5fSA9IGNhbGNMaWJlcnR5KG5ld01hdCwgaSwgaiwga2kpO1xuICBpZiAoY2FuUG9ubnVraShuZXdNYXQsIGksIGosIC1raSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoY2FuUG9ubnVraShuZXdNYXQsIGksIGosIGtpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobGliZXJ0eSA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmUobWF0OiBudW1iZXJbXVtdLCBpOiBudW1iZXIsIGo6IG51bWJlciwga2k6IG51bWJlcikge1xuICBpZiAoaSA8IDAgfHwgaiA8IDApIHJldHVybiBtYXQ7XG4gIGNvbnN0IG5ld01hdCA9IGNsb25lRGVlcChtYXQpO1xuICBuZXdNYXRbaV1bal0gPSBraTtcbiAgcmV0dXJuIGV4ZWNQb25udWtpKG5ld01hdCwgaSwgaiwgLWtpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dLaShtYXQ6IG51bWJlcltdW10sIHN0ZXBzOiBzdHJpbmdbXSwgaXNQb25udWtpID0gdHJ1ZSkge1xuICBsZXQgbmV3TWF0ID0gY2xvbmVEZWVwKG1hdCk7XG4gIGxldCBoYXNNb3ZlZCA9IGZhbHNlO1xuICBzdGVwcy5mb3JFYWNoKHN0ciA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBraSxcbiAgICB9OiB7XG4gICAgICB4OiBudW1iZXI7XG4gICAgICB5OiBudW1iZXI7XG4gICAgICBraTogbnVtYmVyO1xuICAgIH0gPSBzZ2ZUb1BvcyhzdHIpO1xuICAgIGlmIChpc1Bvbm51a2kpIHtcbiAgICAgIGlmIChjYW5Nb3ZlKG5ld01hdCwgeCwgeSwga2kpKSB7XG4gICAgICAgIG5ld01hdFt4XVt5XSA9IGtpO1xuICAgICAgICBuZXdNYXQgPSBleGVjUG9ubnVraShuZXdNYXQsIHgsIHksIC1raSk7XG4gICAgICAgIGhhc01vdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TWF0W3hdW3ldID0ga2k7XG4gICAgICBoYXNNb3ZlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGFycmFuZ2VtZW50OiBuZXdNYXQsXG4gICAgaGFzTW92ZWQsXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9uZSB7XG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcjogbnVtYmVyO1xuICBraTogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHI6IG51bWJlcixcbiAgICBraTogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnIgPSByO1xuICAgIHRoaXMua2kgPSBraTtcbiAgfVxuICBkcmF3KCkge1xuICAgIGNvbnNvbGUubG9nKCdUQkQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFN0b25lIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ3U3RvbmUgZXh0ZW5kcyBTdG9uZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgcjogbnVtYmVyLFxuICAgIGtpOiBudW1iZXJcbiAgKSB7XG4gICAgc3VwZXIoY3R4LCB4LCB5LCByLCBraSk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHtjdHgsIHgsIHksIHIsIGtpfSA9IHRoaXM7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcbiAgICBpZiAoa2kgPT09IDEpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgfSBlbHNlIGlmIChraSA9PT0gLTEpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgfVxuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgU3RvbmUgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNsYXNzIEltYWdlU3RvbmUgZXh0ZW5kcyBTdG9uZSB7XG4gIG1vZDogbnVtYmVyO1xuICBibGFja3M6IGFueTtcbiAgd2hpdGVzOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgcjogbnVtYmVyLFxuICAgIGtpOiBudW1iZXIsXG4gICAgbW9kOiBudW1iZXIsXG4gICAgYmxhY2tzOiBhbnksXG4gICAgd2hpdGVzOiBhbnlcbiAgKSB7XG4gICAgc3VwZXIoY3R4LCB4LCB5LCByLCBraSk7XG4gICAgdGhpcy5tb2QgPSBtb2Q7XG4gICAgdGhpcy5ibGFja3MgPSBibGFja3M7XG4gICAgdGhpcy53aGl0ZXMgPSB3aGl0ZXM7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHtjdHgsIHgsIHksIHIsIGtpLCBibGFja3MsIHdoaXRlcywgbW9kfSA9IHRoaXM7XG4gICAgbGV0IGltZztcbiAgICBpZiAoa2kgPT09IDEpIHtcbiAgICAgIGltZyA9IGJsYWNrc1ttb2QgJSBibGFja3MubGVuZ3RoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1nID0gd2hpdGVzW21vZCAlIHdoaXRlcy5sZW5ndGhdO1xuICAgIH1cbiAgICBpZiAoaW1nKSB7XG4gICAgICBjdHguZHJhd0ltYWdlKGltZywgeCAtIHIsIHkgLSByLCByICogMiwgciAqIDIpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya3VwIHtcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzOiBudW1iZXI7XG4gIGtpOiBudW1iZXI7XG4gIHZhbDogc3RyaW5nIHwgbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHM6IG51bWJlcixcbiAgICBraTogbnVtYmVyLFxuICAgIHZhbDogc3RyaW5nIHwgbnVtYmVyID0gJydcbiAgKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMucyA9IHM7XG4gICAgdGhpcy5raSA9IGtpO1xuICAgIHRoaXMudmFsID0gdmFsO1xuICB9XG4gIGRyYXcoKSB7XG4gICAgY29uc29sZS5sb2coJ1RCRCcpO1xuICB9XG59XG4iLCJpbXBvcnQgTWFya3VwIGZyb20gJy4vTWFya3VwQmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGVNYXJrdXAgZXh0ZW5kcyBNYXJrdXAge1xuICBkcmF3KCkge1xuICAgIGNvbnN0IHtjdHgsIHgsIHksIHMsIGtpfSA9IHRoaXM7XG4gICAgY29uc3QgcmFkaXVzID0gcyAqIDAuNTtcbiAgICBsZXQgc2l6ZSA9IHJhZGl1cyAqIDAuNjU7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgaWYgKGtpID09PSAxKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2ZmZic7XG4gICAgfSBlbHNlIGlmIChraSA9PT0gLTEpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgICBzaXplID0gcmFkaXVzICogMC43O1xuICAgIH1cbiAgICBpZiAoc2l6ZSA+IDApIHtcbiAgICAgIGN0eC5hcmMoeCwgeSwgc2l6ZSwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgTWFya3VwIGZyb20gJy4vTWFya3VwQmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBDcm9zc01hcmt1cCBleHRlbmRzIE1hcmt1cCB7XG4gIGRyYXcoKSB7XG4gICAgY29uc3Qge2N0eCwgeCwgeSwgcywga2l9ID0gdGhpcztcbiAgICBjb25zdCByYWRpdXMgPSBzICogMC41O1xuICAgIGxldCBzaXplID0gcmFkaXVzICogMC41O1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCAtIHNpemUsIHkgLSBzaXplKTtcbiAgICBjdHgubGluZVRvKHggKyBzaXplLCB5ICsgc2l6ZSk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgc2l6ZSwgeSAtIHNpemUpO1xuICAgIGN0eC5saW5lVG8oeCAtIHNpemUsIHkgKyBzaXplKTtcblxuICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgIGlmIChraSA9PT0gMSkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZmYnO1xuICAgIH0gZWxzZSBpZiAoa2kgPT09IC0xKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgICAgc2l6ZSA9IHJhZGl1cyAqIDAuNztcbiAgICB9XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgTWFya3VwIGZyb20gJy4vTWFya3VwQmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0TWFya3VwIGV4dGVuZHMgTWFya3VwIHtcbiAgZHJhdygpIHtcbiAgICBjb25zdCB7Y3R4LCB4LCB5LCBzLCBraSwgdmFsfSA9IHRoaXM7XG4gICAgY29uc3Qgc2l6ZSA9IHMgKiAwLjg7XG4gICAgbGV0IGZvbnRTaXplID0gc2l6ZSAvIDEuNTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYgKGtpID09PSAxKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIH0gZWxzZSBpZiAoa2kgPT09IC0xKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguY2xlYXJSZWN0KHggLSBzaXplIC8gMiwgeSAtIHNpemUgLyAyLCBzaXplLCBzaXplKTtcbiAgICB9XG4gICAgaWYgKHZhbC50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZm9udFNpemUgPSBzaXplIC8gMS41O1xuICAgIH0gZWxzZSBpZiAodmFsLnRvU3RyaW5nKCkubGVuZ3RoID09PSAyKSB7XG4gICAgICBmb250U2l6ZSA9IHNpemUgLyAxLjg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvbnRTaXplID0gc2l6ZSAvIDIuMDtcbiAgICB9XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAke2ZvbnRTaXplfXB4IFRhaG9tYWA7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjdHguZmlsbFRleHQodmFsLnRvU3RyaW5nKCksIHgsIHkgKyAyKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgTWFya3VwIGZyb20gJy4vTWFya3VwQmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBTcXVhcmVNYXJrdXAgZXh0ZW5kcyBNYXJrdXAge1xuICBkcmF3KCkge1xuICAgIGNvbnN0IHtjdHgsIHgsIHksIHMsIGtpfSA9IHRoaXM7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgbGV0IHNpemUgPSBzICogMC41NTtcbiAgICBpZiAoa2kgPT09IDEpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmJztcbiAgICB9IGVsc2UgaWYgKGtpID09PSAtMSkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gcyAqIDAuNztcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcbiAgICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgIH1cbiAgICBjdHgucmVjdCh4IC0gc2l6ZSAvIDIsIHkgLSBzaXplIC8gMiwgc2l6ZSwgc2l6ZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBNYXJrdXAgZnJvbSAnLi9NYXJrdXBCYXNlJztcblxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlTWFya3VwIGV4dGVuZHMgTWFya3VwIHtcbiAgZHJhdygpIHtcbiAgICBjb25zdCB7Y3R4LCB4LCB5LCBzLCBraX0gPSB0aGlzO1xuICAgIGNvbnN0IHJhZGl1cyA9IHMgKiAwLjU7XG4gICAgbGV0IHNpemUgPSByYWRpdXMgKiAwLjc1O1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSAtIHNpemUpO1xuICAgIGN0eC5saW5lVG8oeCAtIHNpemUgKiBNYXRoLmNvcygwLjUyMyksIHkgKyBzaXplICogTWF0aC5zaW4oMC41MjMpKTtcbiAgICBjdHgubGluZVRvKHggKyBzaXplICogTWF0aC5jb3MoMC41MjMpLCB5ICsgc2l6ZSAqIE1hdGguc2luKDAuNTIzKSk7XG5cbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBpZiAoa2kgPT09IDEpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmJztcbiAgICB9IGVsc2UgaWYgKGtpID09PSAtMSkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHgubGluZVdpZHRoID0gMztcbiAgICAgIHNpemUgPSByYWRpdXMgKiAwLjc7XG4gICAgfVxuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7QTFfTEVUVEVSUywgQTFfTlVNQkVSUywgUkVTT1VSQ0VTfSBmcm9tICcuL2NvbnN0JztcbmltcG9ydCB7VGhlbWUsIEtpfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7emVyb3MsIGVtcHR5fSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHtDZW50ZXIsIE1hcmt1cH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2NhbGNWaXNpYmxlQXJlYX0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge0ltYWdlU3RvbmV9IGZyb20gJy4vc3RvbmVzJztcbmltcG9ydCBCd1N0b25lIGZyb20gJy4vc3RvbmVzL2J3U3RvbmUnO1xuaW1wb3J0IHtcbiAgQ2lyY2xlTWFya3VwLFxuICBDcm9zc01hcmt1cCxcbiAgVGV4dE1hcmt1cCxcbiAgU3F1YXJlTWFya3VwLFxuICBUcmlhbmdsZU1hcmt1cCxcbn0gZnJvbSAnLi9tYXJrdXBzJztcblxuLy8gY29uc3QgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xubGV0IGRldmljZVBpeGVsUmF0aW8gPSAxLjA7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAvLyBicm93c2VyIGNvZGVcbn1cblxuY29uc3QgaW1hZ2VzOiB7XG4gIFtrZXk6IHN0cmluZ106IEhUTUxJbWFnZUVsZW1lbnQ7XG59ID0ge307XG5cbmZ1bmN0aW9uIHByZWxvYWQodXJsczogc3RyaW5nW10sIGRvbmU6ICgpID0+IHZvaWQpIHtcbiAgbGV0IGxvYWRlZCA9IDA7XG4gIGNvbnN0IGltYWdlTG9hZGVkID0gKCkgPT4ge1xuICAgIGxvYWRlZCsrO1xuICAgIGlmIChsb2FkZWQgPT09IHVybHMubGVuZ3RoKSB7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHVybHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWltYWdlc1t1cmxzW2ldXSkge1xuICAgICAgaW1hZ2VzW3VybHNbaV1dID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZXNbdXJsc1tpXV0uc3JjID0gdXJsc1tpXTtcbiAgICAgIGltYWdlc1t1cmxzW2ldXS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGltYWdlTG9hZGVkKCk7XG4gICAgICB9O1xuICAgICAgaW1hZ2VzW3VybHNbaV1dLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGltYWdlTG9hZGVkKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHaG9zdEJhbk9wdGlvbnMgPSB7XG4gIGJvYXJkU2l6ZTogbnVtYmVyO1xuICBzaXplPzogbnVtYmVyO1xuICBwYWRkaW5nOiBudW1iZXI7XG4gIHpvb20/OiBib29sZWFuO1xuICBleHRlbmQ6IG51bWJlcjtcbiAgdGhlbWU6IFRoZW1lO1xuICBjb29yZGluYXRlOiBib29sZWFuO1xuICBpbnRlcmFjdGl2ZTogYm9vbGVhbjtcbiAgYmFja2dyb3VuZD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBHaG9zdEJhbk9wdGlvbnNQYXJhbXMgPSB7XG4gIGJvYXJkU2l6ZT86IG51bWJlcjtcbiAgc2l6ZT86IG51bWJlcjtcbiAgcGFkZGluZz86IG51bWJlcjtcbiAgem9vbT86IGJvb2xlYW47XG4gIGV4dGVuZD86IG51bWJlcjtcbiAgdGhlbWU/OiBUaGVtZTtcbiAgaW50ZXJhY3RpdmU/OiBib29sZWFuO1xuICBjb29yZGluYXRlPzogYm9vbGVhbjtcbiAgYmFja2dyb3VuZD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgR2hvc3RCYW4ge1xuICBkZWZhdWx0T3B0aW9uczogR2hvc3RCYW5PcHRpb25zID0ge1xuICAgIGJvYXJkU2l6ZTogMTksXG4gICAgcGFkZGluZzogMTAsXG4gICAgZXh0ZW5kOiAyLFxuICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICBjb29yZGluYXRlOiB0cnVlLFxuICAgIGJhY2tncm91bmQ6IGZhbHNlLFxuICAgIHRoZW1lOiBUaGVtZS5CbGFja0FuZFdoaXRlLFxuICB9O1xuICBvcHRpb25zOiBHaG9zdEJhbk9wdGlvbnM7XG4gIGRvbTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gIGNhbnZhcz86IEhUTUxDYW52YXNFbGVtZW50O1xuICBib2FyZD86IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIF90dXJuOiBLaTtcbiAgY3Vyc29yOiBbbnVtYmVyLCBudW1iZXJdO1xuICBjdXJzb3JQb3M6IERPTVBvaW50O1xuICBtYXQ6IG51bWJlcltdW107XG4gIG1hcmt1cDogKHN0cmluZyB8IG51bWJlcilbXVtdO1xuICBtYXhodjogbnVtYmVyO1xuICB0cmFuc01hdDogRE9NTWF0cml4O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEdob3N0QmFuT3B0aW9uc1BhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgLi4udGhpcy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICB0aGlzLm1hdCA9IHplcm9zKFsxOSwgMTldKTtcbiAgICB0aGlzLm1hcmt1cCA9IGVtcHR5KFsxOSwgMTldKTtcbiAgICB0aGlzLl90dXJuID0gS2kuQmxhY2s7XG4gICAgdGhpcy5jdXJzb3IgPSBbMTgsIDBdO1xuICAgIHRoaXMuY3Vyc29yUG9zID0gbmV3IERPTVBvaW50KCk7XG4gICAgdGhpcy5tYXhodiA9IHRoaXMub3B0aW9ucy5ib2FyZFNpemU7XG4gICAgdGhpcy50cmFuc01hdCA9IG5ldyBET01NYXRyaXgoKTtcbiAgfVxuXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cblxuICBzZXRUdXJuKHR1cm46IEtpKSB7XG4gICAgdGhpcy5fdHVybiA9IHR1cm47XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLmNhbnZhcyB8fCAhdGhpcy5kb20gfHwgIXRoaXMuYm9hcmQpIHJldHVybjtcbiAgICBjb25zdCB7Y2FudmFzLCBib2FyZH0gPSB0aGlzO1xuICAgIGNvbnN0IHtzaXplfSA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAoc2l6ZSkge1xuICAgICAgY2FudmFzLndpZHRoID0gc2l6ZSAqIGRldmljZVBpeGVsUmF0aW87XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZSAqIGRldmljZVBpeGVsUmF0aW87XG4gICAgICBib2FyZC53aWR0aCA9IHNpemUgKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgYm9hcmQuaGVpZ2h0ID0gc2l6ZSAqIGRldmljZVBpeGVsUmF0aW87XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHtjbGllbnRXaWR0aH0gPSB0aGlzLmRvbTtcbiAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGNsaWVudFdpZHRoICsgJ3B4JztcbiAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBjbGllbnRXaWR0aCArICdweCc7XG4gICAgICBjYW52YXMud2lkdGggPSBNYXRoLmZsb29yKGNsaWVudFdpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihjbGllbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgYm9hcmQuc3R5bGUud2lkdGggPSBjbGllbnRXaWR0aCArICdweCc7XG4gICAgICBib2FyZC5zdHlsZS5oZWlnaHQgPSBjbGllbnRXaWR0aCArICdweCc7XG4gICAgICBib2FyZC53aWR0aCA9IE1hdGguZmxvb3IoY2xpZW50V2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgIGJvYXJkLmhlaWdodCA9IE1hdGguZmxvb3IoY2xpZW50V2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvKTtcbiAgICB9XG4gIH1cblxuICBpbml0KGRvbTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm1hdCA9IHplcm9zKFsxOSwgMTldKTtcbiAgICB0aGlzLm1hcmt1cCA9IGVtcHR5KFsxOSwgMTldKTtcbiAgICB0aGlzLnRyYW5zTWF0ID0gbmV3IERPTU1hdHJpeCgpO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgYm9hcmQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5kb20gPSBkb207XG5cbiAgICAvLyBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAvLyBpZiAoY3R4KSB7XG4gICAgLy8gICBjdHguaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gJ2hpZ2gnO1xuICAgIC8vIH1cblxuICAgIHRoaXMucmVzaXplKCk7XG4gICAgZG9tLmZpcnN0Q2hpbGQ/LnJlbW92ZSgpO1xuICAgIGRvbS5maXJzdENoaWxkPy5yZW1vdmUoKTtcblxuICAgIGRvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgZG9tLmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbiAgICB0aGlzLnJlbmRlckludGVyYWN0aXZlKCk7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnM6IEdob3N0QmFuT3B0aW9uc1BhcmFtcykge1xuICAgIHRoaXMub3B0aW9ucyA9IHsuLi50aGlzLm9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICB9XG5cbiAgcmVuZGVySW50ZXJhY3RpdmUoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgaWYgKCFjYW52YXMpIHJldHVybjtcbiAgICBjb25zdCB7cGFkZGluZ30gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3Qge3NwYWNlfSA9IHRoaXMuY2FsY1NwYWNlQW5kUGFkZGluZygpO1xuXG4gICAgY29uc3Qgc2V0Q3Vyc29yV2l0aFJlbmRlciA9IChkb21Qb2ludDogRE9NUG9pbnQpID0+IHtcbiAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy50cmFuc01hdC5pbnZlcnNlKCkudHJhbnNmb3JtUG9pbnQoZG9tUG9pbnQpO1xuICAgICAgY29uc3QgaWR4ID0gTWF0aC5yb3VuZCgocG9pbnQueCAtIHBhZGRpbmcgKyBzcGFjZSAvIDIpIC8gc3BhY2UpO1xuICAgICAgY29uc3QgaWR5ID0gTWF0aC5yb3VuZCgocG9pbnQueSAtIHBhZGRpbmcgKyBzcGFjZSAvIDIpIC8gc3BhY2UpO1xuICAgICAgY29uc3QgeHggPSBpZHggKiBzcGFjZTtcbiAgICAgIGNvbnN0IHl5ID0gaWR5ICogc3BhY2U7XG4gICAgICBjb25zdCBwID0gdGhpcy50cmFuc01hdC50cmFuc2Zvcm1Qb2ludChuZXcgRE9NUG9pbnQoeHgsIHl5KSk7XG4gICAgICB0aGlzLmN1cnNvclBvcyA9IHA7XG4gICAgICB0aGlzLmN1cnNvciA9IFtpZHggLSAxLCBpZHkgLSAxXTtcbiAgICAgIHRoaXMucmVuZGVyKHRoaXMubWF0LCB0aGlzLm1hcmt1cCk7XG4gICAgfTtcbiAgICBjb25zdCBvblRvdWNoTW92ZSA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXM7XG4gICAgICBjb25zdCBwb2ludCA9IG5ldyBET01Qb2ludChcbiAgICAgICAgKHRvdWNoZXNbMF0uY2xpZW50WCAtIHJlY3QubGVmdCkgKiBkZXZpY2VQaXhlbFJhdGlvLFxuICAgICAgICAodG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC50b3ApICogZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgKTtcbiAgICAgIHNldEN1cnNvcldpdGhSZW5kZXIocG9pbnQpO1xuICAgIH07XG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgcG9pbnQgPSBuZXcgRE9NUG9pbnQoXG4gICAgICAgIGUub2Zmc2V0WCAqIGRldmljZVBpeGVsUmF0aW8sXG4gICAgICAgIGUub2Zmc2V0WSAqIGRldmljZVBpeGVsUmF0aW9cbiAgICAgICk7XG4gICAgICBzZXRDdXJzb3JXaXRoUmVuZGVyKHBvaW50KTtcbiAgICB9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmUpIHtcbiAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICB9XG4gIH1cblxuICBzZXRUaGVtZSh0aGVtZTogVGhlbWUpIHtcbiAgICBjb25zdCB7Ym9hcmQsIGJsYWNrcywgd2hpdGVzfSA9IFJFU09VUkNFU1t0aGVtZV07XG4gICAgcHJlbG9hZChfLmNvbXBhY3QoW2JvYXJkLCAuLi5ibGFja3MsIC4uLndoaXRlc10pLCAoKSA9PiB7XG4gICAgICBjb25zdCBzaGFkb3dTdHlsZSA9ICczcHggM3B4IDNweCAjYWFhYWFhJztcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSB0aGVtZTtcbiAgICAgICAgaWYgKHRoZW1lID09PSBUaGVtZS5CbGFja0FuZFdoaXRlKSB7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLmJveFNoYWRvdyA9ICcwcHggMHB4IDBweCAjMDAwMDAwJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGVtZSA9PT0gVGhlbWUuRmxhdCkge1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3dTdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcih0aGlzLm1hdCwgdGhpcy5tYXJrdXApO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucy50aGVtZSA9IHRoZW1lO1xuICAgICAgdGhpcy5yZW5kZXIodGhpcy5tYXQsIHRoaXMubWFya3VwKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHJlbmRlcihtYXQ/OiBudW1iZXJbXVtdLCBtYXJrdXA/OiAoc3RyaW5nIHwgbnVtYmVyKVtdW10pIHtcbiAgICBpZiAobWF0KSB0aGlzLm1hdCA9IG1hdDtcbiAgICBpZiAobWFya3VwKSB0aGlzLm1hcmt1cCA9IG1hcmt1cDtcbiAgICBjb25zdCB7Ym9hcmRTaXplLCB6b29tLCBleHRlbmQsIGludGVyYWN0aXZlLCBjb29yZGluYXRlfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpZiAoY3R4ICYmIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7dmlzaWJsZUFyZWE6IHpvb21lZFZpc2libGVBcmVhLCBjZW50ZXJ9ID0gY2FsY1Zpc2libGVBcmVhKFxuICAgICAgICB0aGlzLm1hdCxcbiAgICAgICAgYm9hcmRTaXplLFxuICAgICAgICBleHRlbmRcbiAgICAgICk7XG4gICAgICBjb25zdCB2aXNpYmxlQXJlYSA9IHpvb21cbiAgICAgICAgPyB6b29tZWRWaXNpYmxlQXJlYVxuICAgICAgICA6IFtcbiAgICAgICAgICAgIFswLCAxOF0sXG4gICAgICAgICAgICBbMCwgMThdLFxuICAgICAgICAgIF07XG5cbiAgICAgIGlmICh6b29tICYmIGN0eCkge1xuICAgICAgICBjb25zdCB7c3BhY2V9ID0gdGhpcy5jYWxjU3BhY2VBbmRQYWRkaW5nKCk7XG4gICAgICAgIGNvbnN0IHpvb21lZEJvYXJkU2l6ZSA9IHZpc2libGVBcmVhWzBdWzFdIC0gdmlzaWJsZUFyZWFbMF1bMF0gKyAxO1xuICAgICAgICBjb25zdCBzY2FsZSA9IDEgLyAoem9vbWVkQm9hcmRTaXplIC8gYm9hcmRTaXplKTtcblxuICAgICAgICBsZXQgb2Zmc2V0WCA9IDA7XG4gICAgICAgIGxldCBvZmZzZXRZID0gMDtcbiAgICAgICAgc3dpdGNoIChjZW50ZXIpIHtcbiAgICAgICAgICBjYXNlIENlbnRlci5Ub3BMZWZ0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBDZW50ZXIuVG9wUmlnaHQ6XG4gICAgICAgICAgICBvZmZzZXRYID1cbiAgICAgICAgICAgICAgdmlzaWJsZUFyZWFbMF1bMF0gKiBzcGFjZSAqIHNjYWxlICtcbiAgICAgICAgICAgICAgKHRoaXMub3B0aW9ucy5wYWRkaW5nIC8gMikgKiBzY2FsZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQ2VudGVyLkJvdHRvbUxlZnQ6XG4gICAgICAgICAgICBvZmZzZXRZID1cbiAgICAgICAgICAgICAgdmlzaWJsZUFyZWFbMV1bMF0gKiBzcGFjZSAqIHNjYWxlICtcbiAgICAgICAgICAgICAgKHRoaXMub3B0aW9ucy5wYWRkaW5nIC8gMikgKiBzY2FsZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQ2VudGVyLkJvdHRvbVJpZ2h0OlxuICAgICAgICAgICAgb2Zmc2V0WCA9XG4gICAgICAgICAgICAgIHZpc2libGVBcmVhWzBdWzBdICogc3BhY2UgKiBzY2FsZSArXG4gICAgICAgICAgICAgICh0aGlzLm9wdGlvbnMucGFkZGluZyAvIDIpICogc2NhbGU7XG4gICAgICAgICAgICBvZmZzZXRZID1cbiAgICAgICAgICAgICAgdmlzaWJsZUFyZWFbMV1bMF0gKiBzcGFjZSAqIHNjYWxlICtcbiAgICAgICAgICAgICAgKHRoaXMub3B0aW9ucy5wYWRkaW5nIC8gMikgKiBzY2FsZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNNYXQgPSBuZXcgRE9NTWF0cml4KCk7XG4gICAgICAgIHRoaXMudHJhbnNNYXQudHJhbnNsYXRlU2VsZigtb2Zmc2V0WCwgLW9mZnNldFkpO1xuICAgICAgICB0aGlzLnRyYW5zTWF0LnNjYWxlU2VsZihzY2FsZSwgc2NhbGUpO1xuICAgICAgICBjdHguc2V0VHJhbnNmb3JtKHRoaXMudHJhbnNNYXQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRyYXdCYW4oKTtcbiAgICAgIHRoaXMuZHJhd0JvYXJkTGluZSh2aXNpYmxlQXJlYSk7XG4gICAgICB0aGlzLmRyYXdTdGFycyh2aXNpYmxlQXJlYSk7XG4gICAgICBpZiAoaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5kcmF3Q3Vyc29yKHZpc2libGVBcmVhKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb29yZGluYXRlKSB7XG4gICAgICAgIHRoaXMuZHJhd0Nvb3JkaW5hdGUodmlzaWJsZUFyZWEpO1xuICAgICAgfVxuICAgICAgdGhpcy5kcmF3U3RvbmVzKG1hdCA/PyB0aGlzLm1hdCk7XG4gICAgICB0aGlzLmRyYXdNYXJrdXAobWF0ID8/IHRoaXMubWF0LCBtYXJrdXAgPz8gdGhpcy5tYXJrdXApO1xuICAgICAgLy8gY3R4Py5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJDYW52YXMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgaWYgKGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkcmF3TWFya3VwID0gKG1hdDogbnVtYmVyW11bXSwgbWFya3VwOiAoc3RyaW5nIHwgbnVtYmVyKVtdW10pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnbWFya3VwJywgbWFya3VwKTtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmt1cC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hcmt1cFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWFya3VwW2ldW2pdO1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IHtzcGFjZSwgc2NhbGVkUGFkZGluZ30gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBzY2FsZWRQYWRkaW5nICsgaSAqIHNwYWNlO1xuICAgICAgICAgICAgY29uc3QgeSA9IHNjYWxlZFBhZGRpbmcgKyBqICogc3BhY2U7XG4gICAgICAgICAgICBjb25zdCBraSA9IG1hdFtpXVtqXTtcbiAgICAgICAgICAgIGxldCBtYXJrdXA7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgTWFya3VwLkNpcmNsZTpcbiAgICAgICAgICAgICAgICBjYXNlIE1hcmt1cC5DdXJyZW50OiB7XG4gICAgICAgICAgICAgICAgICBtYXJrdXAgPSBuZXcgQ2lyY2xlTWFya3VwKGN0eCwgeCwgeSwgc3BhY2UsIGtpKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIE1hcmt1cC5TcXVhcmU6IHtcbiAgICAgICAgICAgICAgICAgIG1hcmt1cCA9IG5ldyBTcXVhcmVNYXJrdXAoY3R4LCB4LCB5LCBzcGFjZSwga2kpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgTWFya3VwLlRyaWFuZ2xlOiB7XG4gICAgICAgICAgICAgICAgICBtYXJrdXAgPSBuZXcgVHJpYW5nbGVNYXJrdXAoY3R4LCB4LCB5LCBzcGFjZSwga2kpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgTWFya3VwLkNyb3NzOiB7XG4gICAgICAgICAgICAgICAgICBtYXJrdXAgPSBuZXcgQ3Jvc3NNYXJrdXAoY3R4LCB4LCB5LCBzcGFjZSwga2kpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya3VwID0gbmV3IFRleHRNYXJrdXAoY3R4LCB4LCB5LCBzcGFjZSwga2ksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtYXJrdXA/LmRyYXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZHJhd0JhbiA9ICgpID0+IHtcbiAgICBjb25zdCB7Ym9hcmR9ID0gdGhpcztcbiAgICBjb25zdCB7dGhlbWV9ID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChib2FyZCkge1xuICAgICAgYm9hcmQuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzJweCc7XG4gICAgICBjb25zdCBjdHggPSBib2FyZC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgaWYgKGN0eCkge1xuICAgICAgICBpZiAodGhlbWUgPT09IFRoZW1lLkJsYWNrQW5kV2hpdGUpIHtcbiAgICAgICAgICBib2FyZC5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCAwcHggIzAwMDAwMCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhlbWUgPT09IFRoZW1lLkZsYXQpIHtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNFQ0I1NUEnO1xuICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBib2FyZC53aWR0aCwgYm9hcmQuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB0aGVtZSA9PT0gVGhlbWUuV2FsbnV0ICYmXG4gICAgICAgICAgUkVTT1VSQ0VTW3RoZW1lXS5ib2FyZCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGJvYXJkVXJsID0gUkVTT1VSQ0VTW3RoZW1lXS5ib2FyZCB8fCAnJztcbiAgICAgICAgICBjb25zdCBib2FyZFJlcyA9IGltYWdlc1tib2FyZFVybF07XG4gICAgICAgICAgaWYgKGJvYXJkUmVzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGJvYXJkUmVzLCAwLCAwLCBib2FyZC53aWR0aCwgYm9hcmQuaGVpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYm9hcmRVcmwgPSBSRVNPVVJDRVNbdGhlbWVdLmJvYXJkIHx8ICcnO1xuICAgICAgICAgIGNvbnN0IGltYWdlID0gaW1hZ2VzW2JvYXJkVXJsXTtcbiAgICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjdHguY3JlYXRlUGF0dGVybihpbWFnZSwgJ3JlcGVhdCcpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBhdHRlcm47XG4gICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBib2FyZC53aWR0aCwgYm9hcmQuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZHJhd0JvYXJkTGluZSA9IChcbiAgICB2aXNpYmxlQXJlYSA9IFtcbiAgICAgIFswLCAxOF0sXG4gICAgICBbMCwgMThdLFxuICAgIF1cbiAgKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbnZhcykgcmV0dXJuO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY29uc3Qge3NwYWNlLCBzY2FsZWRQYWRkaW5nfSA9IHRoaXMuY2FsY1NwYWNlQW5kUGFkZGluZygpO1xuXG4gICAgICBjdHgubGluZVdpZHRoID0gMSAqIGRldmljZVBpeGVsUmF0aW87XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAwMDAnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgZm9yIChsZXQgaSA9IHZpc2libGVBcmVhWzBdWzBdOyBpIDw9IHZpc2libGVBcmVhWzBdWzFdOyBpKyspIHtcbiAgICAgICAgY3R4Lm1vdmVUbyhcbiAgICAgICAgICBpICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nLFxuICAgICAgICAgIHNjYWxlZFBhZGRpbmcgKyB2aXNpYmxlQXJlYVsxXVswXSAqIHNwYWNlXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgaSAqIHNwYWNlICsgc2NhbGVkUGFkZGluZyxcbiAgICAgICAgICBzcGFjZSAqIHZpc2libGVBcmVhWzFdWzFdICsgc2NhbGVkUGFkZGluZ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHZpc2libGVBcmVhWzFdWzBdOyBpIDw9IHZpc2libGVBcmVhWzFdWzFdOyBpKyspIHtcbiAgICAgICAgY3R4Lm1vdmVUbyhcbiAgICAgICAgICB2aXNpYmxlQXJlYVswXVswXSAqIHNwYWNlICsgc2NhbGVkUGFkZGluZyxcbiAgICAgICAgICBpICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgdmlzaWJsZUFyZWFbMF1bMV0gKiBzcGFjZSArIHNjYWxlZFBhZGRpbmcsXG4gICAgICAgICAgaSAqIHNwYWNlICsgc2NhbGVkUGFkZGluZ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgfTtcblxuICBkcmF3U3RhcnMgPSAoXG4gICAgdmlzaWJsZUFyZWEgPSBbXG4gICAgICBbMCwgMThdLFxuICAgICAgWzAsIDE4XSxcbiAgICBdXG4gICkgPT4ge1xuICAgIGlmICghdGhpcy5jYW52YXMpIHJldHVybjtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChjdHgpIHtcbiAgICAgIGNvbnN0IHtzcGFjZSwgc2NhbGVkUGFkZGluZ30gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcbiAgICAgIC8vIERyYXdpbmcgc3RhclxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgWzMsIDksIDE1XS5mb3JFYWNoKGkgPT4ge1xuICAgICAgICBbMywgOSwgMTVdLmZvckVhY2goaiA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaSA+IHZpc2libGVBcmVhWzBdWzBdICYmXG4gICAgICAgICAgICBpIDwgdmlzaWJsZUFyZWFbMF1bMV0gJiZcbiAgICAgICAgICAgIGogPiB2aXNpYmxlQXJlYVsxXVswXSAmJlxuICAgICAgICAgICAgaiA8IHZpc2libGVBcmVhWzFdWzFdXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgICBpICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nLFxuICAgICAgICAgICAgICBqICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nLFxuICAgICAgICAgICAgICAzICogZGV2aWNlUGl4ZWxSYXRpbyxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMiAqIE1hdGguUEksXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBkcmF3Q29vcmRpbmF0ZSA9IChcbiAgICB2aXNpYmxlQXJlYSA9IFtcbiAgICAgIFswLCAxOF0sXG4gICAgICBbMCwgMThdLFxuICAgIF1cbiAgKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgaWYgKCFjYW52YXMpIHJldHVybjtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCB7c3BhY2UsIHNjYWxlZFBhZGRpbmd9ID0gdGhpcy5jYWxjU3BhY2VBbmRQYWRkaW5nKCk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgJHtzcGFjZSAvIDIuOH1weCBIZWx2ZXRpY2FgO1xuXG4gICAgICBjb25zdCBvZmZzZXQgPSBzcGFjZSAvIDM7XG4gICAgICBBMV9MRVRURVJTLmZvckVhY2goKGwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBzcGFjZSAqIGluZGV4ICsgc2NhbGVkUGFkZGluZztcbiAgICAgICAgaWYgKGluZGV4ID49IHZpc2libGVBcmVhWzBdWzBdICYmIGluZGV4IDw9IHZpc2libGVBcmVhWzBdWzFdKSB7XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KGwsIHgsIDAgKyBvZmZzZXQpO1xuICAgICAgICAgIGN0eC5maWxsVGV4dChsLCB4LCBjYW52YXMuaGVpZ2h0IC0gb2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBBMV9OVU1CRVJTLmZvckVhY2goKGw6IG51bWJlciwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgeSA9IHNwYWNlICogaW5kZXggKyBzY2FsZWRQYWRkaW5nO1xuICAgICAgICBpZiAoaW5kZXggPj0gdmlzaWJsZUFyZWFbMV1bMF0gJiYgaW5kZXggPD0gdmlzaWJsZUFyZWFbMV1bMV0pIHtcbiAgICAgICAgICBjdHguZmlsbFRleHQobC50b1N0cmluZygpLCBvZmZzZXQsIHkpO1xuICAgICAgICAgIGN0eC5maWxsVGV4dChsLnRvU3RyaW5nKCksIGNhbnZhcy53aWR0aCAtIG9mZnNldCwgeSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjYWxjU3BhY2VBbmRQYWRkaW5nID0gKCkgPT4ge1xuICAgIGxldCBzcGFjZSA9IDA7XG4gICAgbGV0IHNjYWxlZFBhZGRpbmcgPSAwO1xuICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgY29uc3Qge3BhZGRpbmcsIGJvYXJkU2l6ZX0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAvLyBzY2FsZWRQYWRkaW5nID0gcGFkZGluZyAqIGRldmljZVBpeGVsUmF0aW87XG4gICAgICBzY2FsZWRQYWRkaW5nID0gcGFkZGluZztcbiAgICAgIHNwYWNlID0gKHRoaXMuY2FudmFzLndpZHRoIC0gcGFkZGluZyAqIDIpIC8gYm9hcmRTaXplO1xuICAgICAgc2NhbGVkUGFkZGluZyA9IHNjYWxlZFBhZGRpbmcgKyBzcGFjZSAvIDI7XG4gICAgfVxuICAgIHJldHVybiB7c3BhY2UsIHNjYWxlZFBhZGRpbmd9O1xuICB9O1xuXG4gIGRyYXdDdXJzb3IgPSAodmlzaWJsZUFyZWE6IG51bWJlcltdW10pID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCB7cGFkZGluZ30gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNvbnN0IHtzcGFjZX0gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcblxuICAgICAgY29uc3QgW2lkeCwgaWR5XSA9IHRoaXMuY3Vyc29yO1xuICAgICAgaWYgKGlkeCA8IHZpc2libGVBcmVhWzBdWzBdIHx8IGlkeCA+IHZpc2libGVBcmVhWzBdWzFdKSByZXR1cm47XG4gICAgICBpZiAoaWR5IDwgdmlzaWJsZUFyZWFbMV1bMF0gfHwgaWR5ID4gdmlzaWJsZUFyZWFbMV1bMV0pIHJldHVybjtcbiAgICAgIGNvbnN0IHggPSBpZHggKiBzcGFjZSArIHNwYWNlIC8gMiArIHBhZGRpbmc7XG4gICAgICBjb25zdCB5ID0gaWR5ICogc3BhY2UgKyBzcGFjZSAvIDIgKyBwYWRkaW5nO1xuXG4gICAgICBpZiAoY3R4KSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBzcGFjZSAqIDAuNDtcbiAgICAgICAgaWYgKHNpemUgPiAwKSB7XG4gICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4LmFyYyh4LCB5LCBzaXplLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC42O1xuICAgICAgICAgIGlmICh0aGlzLl90dXJuID09PSBLaS5CbGFjaykge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3R1cm4gPT09IEtpLldoaXRlKSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI0ZGRic7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkYnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZHJhd1N0b25lcyA9IChtYXRyaXg6IG51bWJlcltdW10pID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBjb25zdCB7dGhlbWUgPSBUaGVtZS5CbGFja0FuZFdoaXRlfSA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWF0cml4W2ldW2pdO1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHtzcGFjZSwgc2NhbGVkUGFkZGluZ30gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcbiAgICAgICAgICAgICAgY29uc3QgeCA9IHNjYWxlZFBhZGRpbmcgKyBpICogc3BhY2U7XG4gICAgICAgICAgICAgIGNvbnN0IHkgPSBzY2FsZWRQYWRkaW5nICsgaiAqIHNwYWNlO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gMC40NjtcbiAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoZW1lICE9PSBUaGVtZS5TdWJkdWVkICYmXG4gICAgICAgICAgICAgICAgdGhlbWUgIT09IFRoZW1lLkJsYWNrQW5kV2hpdGUgJiZcbiAgICAgICAgICAgICAgICB0aGVtZSAhPT0gVGhlbWUuRmxhdFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDM7XG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSAzO1xuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9ICcjNTU1JztcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IHN0b25lO1xuICAgICAgICAgICAgICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBUaGVtZS5CbGFja0FuZFdoaXRlOlxuICAgICAgICAgICAgICAgIGNhc2UgVGhlbWUuRmxhdDoge1xuICAgICAgICAgICAgICAgICAgc3RvbmUgPSBuZXcgQndTdG9uZShjdHgsIHgsIHksIHNwYWNlICogcmF0aW8sIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBibGFja3MgPSBSRVNPVVJDRVNbdGhlbWVdLmJsYWNrcy5tYXAoaSA9PiBpbWFnZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgd2hpdGVzID0gUkVTT1VSQ0VTW3RoZW1lXS53aGl0ZXMubWFwKGkgPT4gaW1hZ2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzcGFjZSAqIHJhdGlvO1xuICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0gaSArIDEwICsgajtcbiAgICAgICAgICAgICAgICAgIHN0b25lID0gbmV3IEltYWdlU3RvbmUoXG4gICAgICAgICAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1vZCxcbiAgICAgICAgICAgICAgICAgICAgYmxhY2tzLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZXNcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHN0b25lLmRyYXcoKTtcbiAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgTU9WRV9QUk9QX0xJU1QgPSBbJ0InLCAnS08nLCAnTU4nLCAnVyddO1xuZXhwb3J0IGNvbnN0IFNFVFVQX1BST1BfTElTVCA9IFsnQUInLCAnQUUnLCAnQVcnLCAnUEwnXTtcbmV4cG9ydCBjb25zdCBOT0RFX0FOTk9UQVRJT05fUFJPUF9MSVNUID0gW1xuICAnQycsXG4gICdETScsXG4gICdHQicsXG4gICdHVycsXG4gICdITycsXG4gICdOJyxcbiAgJ1VDJyxcbiAgJ1YnLFxuXTtcbmV4cG9ydCBjb25zdCBNT1ZFX0FOTk9UQVRJT05fUFJPUF9MSVNUID0gWydCTScsICdETycsICdJVCcsICdURSddO1xuZXhwb3J0IGNvbnN0IE1BUktVUF9QUk9QX0xJU1QgPSBbXG4gICdBUicsXG4gICdDUicsXG4gICdMQicsXG4gICdMTicsXG4gICdNQScsXG4gICdTTCcsXG4gICdTUScsXG4gICdUUicsXG5dO1xuXG5leHBvcnQgY29uc3QgUk9PVF9QUk9QX0xJU1QgPSBbJ0FQJywgJ0NBJywgJ0ZGJywgJ0dNJywgJ1NUJywgJ1NaJ107XG5leHBvcnQgY29uc3QgR0FNRV9JTkZPX1BST1BfTElTVCA9IFtcbiAgJ0FOJyxcbiAgJ0JSJyxcbiAgJ0JUJyxcbiAgJ0NQJyxcbiAgJ0RUJyxcbiAgJ0VWJyxcbiAgJ0dOJyxcbiAgJ0dDJyxcbiAgJ09OJyxcbiAgJ09UJyxcbiAgJ1BCJyxcbiAgJ1BDJyxcbiAgJ1BXJyxcbiAgJ1JFJyxcbiAgJ1JPJyxcbiAgJ1JVJyxcbiAgJ1NPJyxcbiAgJ1RNJyxcbiAgJ1VTJyxcbiAgJ1dSJyxcbiAgJ1dUJyxcbl07XG5leHBvcnQgY29uc3QgVElNSU5HX1BST1BfTElTVCA9IFsnQkwnLCAnT0InLCAnT1cnLCAnV0wnXTtcbmV4cG9ydCBjb25zdCBNSVNDRUxMQU5FT1VTX1BST1BfTElTVCA9IFsnRkcnLCAnUE0nLCAnVlcnXTtcblxuZXhwb3J0IGNvbnN0IExJU1RfT0ZfUE9JTlRTX1BST1AgPSBbJ0FCJywgJ0FFJywgJ0FXJ107XG5jb25zdCBUT0tFTl9SRUdFWCA9IG5ldyBSZWdFeHAoLyhbQS1aXSopXFxbKC4qPylcXF0vKTtcblxuZXhwb3J0IGNsYXNzIFNnZlByb3BCYXNlIHtcbiAgdG9rZW46IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgdmFsdWVzOiBzdHJpbmdbXTtcbiAgdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHRva2VuOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHZhbHVlcz86IHN0cmluZ1tdKSB7XG4gICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcyB8fCBbdmFsdWVdO1xuICAgIHRoaXMudHlwZSA9ICctJztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBgJHt0aGlzLnRva2VufSR7dGhpcy52YWx1ZXMubWFwKHYgPT4gYFske3Z9XWApLmpvaW4oJycpfWA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVQcm9wIGV4dGVuZHMgU2dmUHJvcEJhc2Uge1xuICBjb25zdHJ1Y3Rvcih0b2tlbjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCB2YWx1ZXM/OiBzdHJpbmdbXSkge1xuICAgIHN1cGVyKHRva2VuLCB2YWx1ZSwgdmFsdWVzKTtcbiAgICB0aGlzLnR5cGUgPSAnbW92ZSc7XG4gIH1cblxuICBzdGF0aWMgZnJvbShzdHI6IHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKC8oW0EtWl0qKVxcWyguKj8pXFxdLyk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IG1hdGNoWzFdO1xuICAgICAgY29uc3QgdmFsID0gbWF0Y2hbMl07XG4gICAgICByZXR1cm4gbmV3IE1vdmVQcm9wKHRva2VuLCB2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE1vdmVQcm9wKCcnLCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldHVwUHJvcCBleHRlbmRzIFNnZlByb3BCYXNlIHtcbiAgY29uc3RydWN0b3IodG9rZW46IHN0cmluZywgdmFsdWU6IHN0cmluZywgdmFsdWVzPzogc3RyaW5nW10pIHtcbiAgICBzdXBlcih0b2tlbiwgdmFsdWUsIHZhbHVlcyk7XG4gICAgdGhpcy50eXBlID0gJ3NldHVwJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tKHN0cjogc3RyaW5nKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3N0cicsIHN0cik7XG4gICAgY29uc3QgdG9rZW5NYXRjaCA9IHN0ci5tYXRjaChUT0tFTl9SRUdFWCk7XG4gICAgY29uc3QgdmFsTWF0Y2hlcyA9IHN0ci5tYXRjaEFsbCgvXFxbKC4qPylcXF0vZyk7XG5cbiAgICBsZXQgdG9rZW4gPSAnJztcbiAgICBjb25zdCB2YWxzID0gWy4uLnZhbE1hdGNoZXNdLm1hcChtID0+IG1bMV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWxNYXRjaGVzJywgWy4uLnZhbE1hdGNoZXNdKTtcbiAgICAvLyBjb25zb2xlLmxvZygndmFscycsIHZhbHMpO1xuICAgIGlmICh0b2tlbk1hdGNoKSB0b2tlbiA9IHRva2VuTWF0Y2hbMV07XG4gICAgcmV0dXJuIG5ldyBTZXR1cFByb3AodG9rZW4sIHZhbHMuam9pbignLCcpLCB2YWxzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm9kZUFubm90YXRpb25Qcm9wIGV4dGVuZHMgU2dmUHJvcEJhc2Uge1xuICBjb25zdHJ1Y3Rvcih0b2tlbjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodG9rZW4sIHZhbHVlKTtcbiAgICB0aGlzLnR5cGUgPSAnbm9kZS1hbm5vdGF0aW9uJztcbiAgfVxuICBzdGF0aWMgZnJvbShzdHI6IHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKC8oW0EtWl0qKVxcWyguKj8pXFxdLyk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IG1hdGNoWzFdO1xuICAgICAgY29uc3QgdmFsID0gbWF0Y2hbMl07XG4gICAgICByZXR1cm4gbmV3IE1vdmVQcm9wKHRva2VuLCB2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE1vdmVQcm9wKCcnLCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVBbm5vdGF0aW9uUHJvcCBleHRlbmRzIFNnZlByb3BCYXNlIHtcbiAgY29uc3RydWN0b3IodG9rZW46IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKHRva2VuLCB2YWx1ZSk7XG4gICAgdGhpcy50eXBlID0gJ21vdmUtYW5ub3RhdGlvbic7XG4gIH1cbiAgc3RhdGljIGZyb20oc3RyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvKFtBLVpdKilcXFsoLio/KVxcXS8pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgdG9rZW4gPSBtYXRjaFsxXTtcbiAgICAgIGNvbnN0IHZhbCA9IG1hdGNoWzJdO1xuICAgICAgcmV0dXJuIG5ldyBNb3ZlUHJvcCh0b2tlbiwgdmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBNb3ZlUHJvcCgnJywgJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uUHJvcCBleHRlbmRzIFNnZlByb3BCYXNlIHt9XG5leHBvcnQgY2xhc3MgTWFya3VwUHJvcCBleHRlbmRzIFNnZlByb3BCYXNlIHtcbiAgY29uc3RydWN0b3IodG9rZW46IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKHRva2VuLCB2YWx1ZSk7XG4gICAgdGhpcy50eXBlID0gJ21hcmt1cCc7XG4gIH1cbiAgc3RhdGljIGZyb20oc3RyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvKFtBLVpdKilcXFsoLio/KVxcXS8pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgdG9rZW4gPSBtYXRjaFsxXTtcbiAgICAgIGNvbnN0IHZhbCA9IG1hdGNoWzJdO1xuICAgICAgcmV0dXJuIG5ldyBNYXJrdXBQcm9wKHRva2VuLCB2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE1hcmt1cFByb3AoJycsICcnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm9vdFByb3AgZXh0ZW5kcyBTZ2ZQcm9wQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHRva2VuOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0b2tlbiwgdmFsdWUpO1xuICAgIHRoaXMudHlwZSA9ICdyb290JztcbiAgfVxuICBzdGF0aWMgZnJvbShzdHI6IHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKC8oW0EtWl0qKVxcWyguKj8pXFxdLyk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IG1hdGNoWzFdO1xuICAgICAgY29uc3QgdmFsID0gbWF0Y2hbMl07XG4gICAgICByZXR1cm4gbmV3IFJvb3RQcm9wKHRva2VuLCB2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFJvb3RQcm9wKCcnLCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVJbmZvIGV4dGVuZHMgU2dmUHJvcEJhc2Uge1xuICBjb25zdHJ1Y3Rvcih0b2tlbjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodG9rZW4sIHZhbHVlKTtcbiAgICB0aGlzLnR5cGUgPSAnZ2FtZS1pbmZvJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltaW5nUHJvcCBleHRlbmRzIFNnZlByb3BCYXNlIHtcbiAgY29uc3RydWN0b3IodG9rZW46IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKHRva2VuLCB2YWx1ZSk7XG4gICAgdGhpcy50eXBlID0gJ1RpbWluZyc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1pc2NlbGxhbmVvdXNQcm9wIGV4dGVuZHMgU2dmUHJvcEJhc2Uge31cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVHJlZU1vZGVsIGZyb20gJ3RyZWUtbW9kZWwnO1xuaW1wb3J0IHtcbiAgTW92ZVByb3AsXG4gIFNldHVwUHJvcCxcbiAgUm9vdFByb3AsXG4gIFNnZlByb3BCYXNlLFxuICBOb2RlQW5ub3RhdGlvblByb3AsXG4gIE1vdmVBbm5vdGF0aW9uUHJvcCxcbiAgTWFya3VwUHJvcCxcbiAgUk9PVF9QUk9QX0xJU1QsXG4gIE1PVkVfUFJPUF9MSVNULFxuICBTRVRVUF9QUk9QX0xJU1QsXG4gIE1BUktVUF9QUk9QX0xJU1QsXG4gIE5PREVfQU5OT1RBVElPTl9QUk9QX0xJU1QsXG4gIE1PVkVfQU5OT1RBVElPTl9QUk9QX0xJU1QsXG59IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHR5cGUge1NnZk5vZGV9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgU2dmIHtcbiAgTkVXX05PREUgPSAnOyc7XG4gIEJSQU5DSElORyA9IFsnKCcsICcpJ107XG4gIFBST1BFUlRZID0gWydbJywgJ10nXTtcbiAgTElTVF9JREVOVElUSUVTID0gW1xuICAgICdBVycsXG4gICAgJ0FCJyxcbiAgICAnQUUnLFxuICAgICdBUicsXG4gICAgJ0NSJyxcbiAgICAnREQnLFxuICAgICdMQicsXG4gICAgJ0xOJyxcbiAgICAnTUEnLFxuICAgICdTTCcsXG4gICAgJ1NRJyxcbiAgICAnVFInLFxuICAgICdWVycsXG4gICAgJ1RCJyxcbiAgICAnVFcnLFxuICBdO1xuICBOT0RFX0RFTElNSVRFUlMgPSBbdGhpcy5ORVdfTk9ERV0uY29uY2F0KHRoaXMuQlJBTkNISU5HKTtcblxuICB0cmVlOiBUcmVlTW9kZWwgPSBuZXcgVHJlZU1vZGVsKCk7XG4gIHJvb3Q6IFRyZWVNb2RlbC5Ob2RlPFNnZk5vZGU+IHwgbnVsbCA9IG51bGw7XG4gIG5vZGU6IFRyZWVNb2RlbC5Ob2RlPFNnZk5vZGU+IHwgbnVsbCA9IG51bGw7XG4gIGN1cnJlbnROb2RlOiBUcmVlTW9kZWwuTm9kZTxTZ2ZOb2RlPiB8IG51bGwgPSBudWxsO1xuICBwYXJlbnROb2RlOiBUcmVlTW9kZWwuTm9kZTxTZ2ZOb2RlPiB8IG51bGwgPSBudWxsO1xuICBub2RlUHJvcHM6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKCk7XG4gIHNnZiA9ICcnO1xuXG4gIGZyb21Sb290KHJvb3Q6IFRyZWVNb2RlbC5Ob2RlPFNnZk5vZGU+KSB7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5vZGVUb1N0cmluZyhub2RlOiBhbnkpIHtcbiAgICBsZXQgY29udGVudCA9ICcnO1xuICAgIG5vZGUud2Fsayh7c3RyYXRlZ3k6ICdwcmUnfSwgKG46IFRyZWVNb2RlbC5Ob2RlPFNnZk5vZGU+KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgbW92ZVByb3BzLFxuICAgICAgICBzZXR1cFByb3BzLFxuICAgICAgICBtYXJrdXBQcm9wcyxcbiAgICAgICAgbm9kZUFubm90YXRpb25Qcm9wcyxcbiAgICAgICAgbW92ZUFubm90YXRpb25Qcm9wcyxcbiAgICAgIH0gPSBuLm1vZGVsO1xuICAgICAgY29uc3Qgbm9kZXMgPSBfLmNvbXBhY3QoW1xuICAgICAgICAuLi5yb290UHJvcHMsXG4gICAgICAgIC4uLm1vdmVQcm9wcyxcbiAgICAgICAgLi4uc2V0dXBQcm9wcyxcbiAgICAgICAgLi4ubWFya3VwUHJvcHMsXG4gICAgICAgIC4uLm5vZGVBbm5vdGF0aW9uUHJvcHMsXG4gICAgICAgIC4uLm1vdmVBbm5vdGF0aW9uUHJvcHMsXG4gICAgICBdKTtcbiAgICAgIGNvbnRlbnQgKz0gJzsnO1xuICAgICAgbm9kZXMuZm9yRWFjaCgobjogU2dmUHJvcEJhc2UpID0+IHtcbiAgICAgICAgY29udGVudCArPSBuLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChuLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogU2dmUHJvcEJhc2UpID0+IHtcbiAgICAgICAgICBjb250ZW50ICs9IGAoJHt0aGlzLm5vZGVUb1N0cmluZyhjaGlsZCl9KWA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4uY2hpbGRyZW4ubGVuZ3RoIDwgMjtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHRvU2dmKCkge1xuICAgIHJldHVybiBgKCR7dGhpcy5ub2RlVG9TdHJpbmcodGhpcy5yb290KX0pYDtcbiAgfVxuXG4gIHBhcnNlKHNnZjogc3RyaW5nKSB7XG4gICAgc2dmID0gc2dmLnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sICcnKTtcbiAgICBsZXQgbm9kZVN0YXJ0ID0gMDtcbiAgICBjb25zdCBjb3VudGVyID0gMDtcbiAgICBjb25zdCBzdGFjazogVHJlZU1vZGVsLk5vZGU8U2dmTm9kZT5bXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZ2YubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGMgPSBzZ2ZbaV07XG4gICAgICBpZiAodGhpcy5OT0RFX0RFTElNSVRFUlMuaW5jbHVkZXMoYykpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHNnZi5zbGljZShub2RlU3RhcnQsIGkpO1xuICAgICAgICBpZiAoY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgICBjb25zdCBtb3ZlUHJvcHM6IE1vdmVQcm9wW10gPSBbXTtcbiAgICAgICAgICBjb25zdCBzZXR1cFByb3BzOiBTZXR1cFByb3BbXSA9IFtdO1xuICAgICAgICAgIGNvbnN0IHJvb3RQcm9wczogUm9vdFByb3BbXSA9IFtdO1xuICAgICAgICAgIGNvbnN0IG1hcmt1cFByb3BzOiBNYXJrdXBQcm9wW10gPSBbXTtcbiAgICAgICAgICBjb25zdCBub2RlQW5ub3RhdGlvblByb3BzOiBOb2RlQW5ub3RhdGlvblByb3BbXSA9IFtdO1xuICAgICAgICAgIGNvbnN0IG1vdmVBbm5vdGF0aW9uUHJvcHM6IE1vdmVBbm5vdGF0aW9uUHJvcFtdID0gW107XG5cbiAgICAgICAgICBjb25zdCBtYXRjaGVzID0gW1xuICAgICAgICAgICAgLi4uY29udGVudC5tYXRjaEFsbChcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgICAgICAgICAgIC8vIFJlZ0V4cCgvKFtBLVpdK1xcW1thLXpcXFtcXF1dKlxcXSspLywgJ2cnKVxuICAgICAgICAgICAgICAvLyBSZWdFeHAoLyhbQS1aXStcXFsuKj9cXF0rKS8sICdnJylcbiAgICAgICAgICAgICAgUmVnRXhwKC9bQS1aXSsoXFxbLio/XFxdKXsxLH0vLCAnZycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBtYXRjaGVzLmZvckVhY2gobSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbk1hdGNoID0gbVswXS5tYXRjaCgvKFtBLVpdKylcXFsvKTtcbiAgICAgICAgICAgIGlmICh0b2tlbk1hdGNoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5NYXRjaFsxXTtcbiAgICAgICAgICAgICAgaWYgKE1PVkVfUFJPUF9MSVNULmluY2x1ZGVzKHRva2VuKSlcbiAgICAgICAgICAgICAgICBtb3ZlUHJvcHMucHVzaChNb3ZlUHJvcC5mcm9tKG1bMF0pKTtcbiAgICAgICAgICAgICAgaWYgKFNFVFVQX1BST1BfTElTVC5pbmNsdWRlcyh0b2tlbikpXG4gICAgICAgICAgICAgICAgc2V0dXBQcm9wcy5wdXNoKFNldHVwUHJvcC5mcm9tKG1bMF0pKTtcbiAgICAgICAgICAgICAgaWYgKFJPT1RfUFJPUF9MSVNULmluY2x1ZGVzKHRva2VuKSlcbiAgICAgICAgICAgICAgICByb290UHJvcHMucHVzaChSb290UHJvcC5mcm9tKG1bMF0pKTtcbiAgICAgICAgICAgICAgaWYgKE1BUktVUF9QUk9QX0xJU1QuaW5jbHVkZXModG9rZW4pKVxuICAgICAgICAgICAgICAgIG1hcmt1cFByb3BzLnB1c2goTWFya3VwUHJvcC5mcm9tKG1bMF0pKTtcbiAgICAgICAgICAgICAgaWYgKE5PREVfQU5OT1RBVElPTl9QUk9QX0xJU1QuaW5jbHVkZXModG9rZW4pKVxuICAgICAgICAgICAgICAgIG5vZGVBbm5vdGF0aW9uUHJvcHMucHVzaChOb2RlQW5ub3RhdGlvblByb3AuZnJvbShtWzBdKSk7XG4gICAgICAgICAgICAgIGlmIChNT1ZFX0FOTk9UQVRJT05fUFJPUF9MSVNULmluY2x1ZGVzKHRva2VuKSlcbiAgICAgICAgICAgICAgICBtb3ZlQW5ub3RhdGlvblByb3BzLnB1c2goTW92ZUFubm90YXRpb25Qcm9wLmZyb20obVswXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMudHJlZS5wYXJzZSh7XG4gICAgICAgICAgICAgIG5hbWU6IGNvdW50ZXIsXG4gICAgICAgICAgICAgIG51bWJlcjogY291bnRlcixcbiAgICAgICAgICAgICAgbW92ZVByb3BzLFxuICAgICAgICAgICAgICBzZXR1cFByb3BzLFxuICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgIG1hcmt1cFByb3BzLFxuICAgICAgICAgICAgICBub2RlQW5ub3RhdGlvblByb3BzLFxuICAgICAgICAgICAgICBtb3ZlQW5ub3RhdGlvblByb3BzLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgIG5vZGUubW9kZWwuY2hpbGRyZW4gPSBbbm9kZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYyA9PT0gJygnICYmIHRoaXMuY3VycmVudE5vZGUpIHtcbiAgICAgICAgc3RhY2sucHVzaCh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjID09PSAnKScgJiYgc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBub2RlID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuTk9ERV9ERUxJTUlURVJTLmluY2x1ZGVzKGMpKSB7XG4gICAgICAgIG5vZGVTdGFydCA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiYmFzZVNsaWNlIiwiYXJyYXkiLCJzdGFydCIsImVuZCIsImluZGV4IiwibGVuZ3RoIiwicmVzdWx0IiwiQXJyYXkiLCJfYmFzZVNsaWNlIiwiZXEiLCJ2YWx1ZSIsIm90aGVyIiwiZXFfMSIsImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJPYmplY3QiLCJfZnJlZUdsb2JhbCIsInJlcXVpcmUkJDAiLCJmcmVlU2VsZiIsInNlbGYiLCJyb290IiwiRnVuY3Rpb24iLCJfcm9vdCIsIlN5bWJvbCIsIl9TeW1ib2wiLCJvYmplY3RQcm90byIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJ1bmRlZmluZWQiLCJnZXRSYXdUYWciLCJpc093biIsImNhbGwiLCJ0YWciLCJ1bm1hc2tlZCIsImUiLCJfZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJfb2JqZWN0VG9TdHJpbmciLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJiYXNlR2V0VGFnIiwiX2Jhc2VHZXRUYWciLCJpc09iamVjdCIsInR5cGUiLCJpc09iamVjdF8xIiwiYXN5bmNUYWciLCJmdW5jVGFnIiwiZ2VuVGFnIiwicHJveHlUYWciLCJpc0Z1bmN0aW9uIiwiaXNGdW5jdGlvbl8xIiwiTUFYX1NBRkVfSU5URUdFUiIsImlzTGVuZ3RoIiwiaXNMZW5ndGhfMSIsImlzQXJyYXlMaWtlIiwiaXNBcnJheUxpa2VfMSIsInJlSXNVaW50IiwiaXNJbmRleCIsInRlc3QiLCJfaXNJbmRleCIsInJlcXVpcmUkJDMiLCJpc0l0ZXJhdGVlQ2FsbCIsIm9iamVjdCIsIl9pc0l0ZXJhdGVlQ2FsbCIsInJlV2hpdGVzcGFjZSIsInRyaW1tZWRFbmRJbmRleCIsInN0cmluZyIsImNoYXJBdCIsIl90cmltbWVkRW5kSW5kZXgiLCJyZVRyaW1TdGFydCIsImJhc2VUcmltIiwic2xpY2UiLCJyZXBsYWNlIiwiX2Jhc2VUcmltIiwiaXNPYmplY3RMaWtlIiwiaXNPYmplY3RMaWtlXzEiLCJzeW1ib2xUYWciLCJpc1N5bWJvbCIsImlzU3ltYm9sXzEiLCJOQU4iLCJyZUlzQmFkSGV4IiwicmVJc0JpbmFyeSIsInJlSXNPY3RhbCIsImZyZWVQYXJzZUludCIsInBhcnNlSW50IiwidG9OdW1iZXIiLCJ2YWx1ZU9mIiwiaXNCaW5hcnkiLCJ0b051bWJlcl8xIiwiSU5GSU5JVFkiLCJNQVhfSU5URUdFUiIsInRvRmluaXRlIiwic2lnbiIsInRvRmluaXRlXzEiLCJ0b0ludGVnZXIiLCJyZW1haW5kZXIiLCJ0b0ludGVnZXJfMSIsIm5hdGl2ZUNlaWwiLCJNYXRoIiwiY2VpbCIsIm5hdGl2ZU1heCIsIm1heCIsImNodW5rIiwic2l6ZSIsImd1YXJkIiwicmVzSW5kZXgiLCJjaHVua18xIiwiS2kiLCJUaGVtZSIsIkNlbnRlciIsIk1hcmt1cCIsImxpc3RDYWNoZUNsZWFyIiwiX19kYXRhX18iLCJfbGlzdENhY2hlQ2xlYXIiLCJhc3NvY0luZGV4T2YiLCJrZXkiLCJfYXNzb2NJbmRleE9mIiwiYXJyYXlQcm90byIsInNwbGljZSIsImxpc3RDYWNoZURlbGV0ZSIsImRhdGEiLCJsYXN0SW5kZXgiLCJwb3AiLCJfbGlzdENhY2hlRGVsZXRlIiwibGlzdENhY2hlR2V0IiwiX2xpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsIl9saXN0Q2FjaGVIYXMiLCJsaXN0Q2FjaGVTZXQiLCJwdXNoIiwiX2xpc3RDYWNoZVNldCIsInJlcXVpcmUkJDQiLCJMaXN0Q2FjaGUiLCJlbnRyaWVzIiwiY2xlYXIiLCJlbnRyeSIsInNldCIsImdldCIsImhhcyIsIl9MaXN0Q2FjaGUiLCJzdGFja0NsZWFyIiwiX3N0YWNrQ2xlYXIiLCJzdGFja0RlbGV0ZSIsIl9zdGFja0RlbGV0ZSIsInN0YWNrR2V0IiwiX3N0YWNrR2V0Iiwic3RhY2tIYXMiLCJfc3RhY2tIYXMiLCJjb3JlSnNEYXRhIiwiX2NvcmVKc0RhdGEiLCJtYXNrU3JjS2V5IiwidWlkIiwiZXhlYyIsImtleXMiLCJJRV9QUk9UTyIsImlzTWFza2VkIiwiZnVuYyIsIl9pc01hc2tlZCIsImZ1bmNQcm90byIsImZ1bmNUb1N0cmluZyIsInRvU291cmNlIiwiX3RvU291cmNlIiwicmVSZWdFeHBDaGFyIiwicmVJc0hvc3RDdG9yIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsImJhc2VJc05hdGl2ZSIsInBhdHRlcm4iLCJfYmFzZUlzTmF0aXZlIiwiZ2V0VmFsdWUiLCJfZ2V0VmFsdWUiLCJnZXROYXRpdmUiLCJfZ2V0TmF0aXZlIiwiTWFwIiwiX01hcCIsIm5hdGl2ZUNyZWF0ZSIsIl9uYXRpdmVDcmVhdGUiLCJoYXNoQ2xlYXIiLCJfaGFzaENsZWFyIiwiaGFzaERlbGV0ZSIsIl9oYXNoRGVsZXRlIiwiSEFTSF9VTkRFRklORUQiLCJoYXNoR2V0IiwiX2hhc2hHZXQiLCJoYXNoSGFzIiwiX2hhc2hIYXMiLCJoYXNoU2V0IiwiX2hhc2hTZXQiLCJIYXNoIiwiX0hhc2giLCJtYXBDYWNoZUNsZWFyIiwiX21hcENhY2hlQ2xlYXIiLCJpc0tleWFibGUiLCJfaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsIm1hcCIsIl9nZXRNYXBEYXRhIiwibWFwQ2FjaGVEZWxldGUiLCJfbWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIl9tYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwiX21hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJfbWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsIl9NYXBDYWNoZSIsIkxBUkdFX0FSUkFZX1NJWkUiLCJzdGFja1NldCIsInBhaXJzIiwiX3N0YWNrU2V0IiwicmVxdWlyZSQkNSIsIlN0YWNrIiwiX1N0YWNrIiwiYXJyYXlFYWNoIiwiaXRlcmF0ZWUiLCJfYXJyYXlFYWNoIiwiZGVmaW5lUHJvcGVydHkiLCJfZGVmaW5lUHJvcGVydHkiLCJiYXNlQXNzaWduVmFsdWUiLCJfYmFzZUFzc2lnblZhbHVlIiwiYXNzaWduVmFsdWUiLCJvYmpWYWx1ZSIsIl9hc3NpZ25WYWx1ZSIsImNvcHlPYmplY3QiLCJzb3VyY2UiLCJwcm9wcyIsImN1c3RvbWl6ZXIiLCJpc05ldyIsIm5ld1ZhbHVlIiwiX2NvcHlPYmplY3QiLCJiYXNlVGltZXMiLCJuIiwiX2Jhc2VUaW1lcyIsImFyZ3NUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJfYmFzZUlzQXJndW1lbnRzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpc0FyZ3VtZW50cyIsImFyZ3VtZW50cyIsImlzQXJndW1lbnRzXzEiLCJpc0FycmF5IiwiaXNBcnJheV8xIiwic3R1YkZhbHNlIiwic3R1YkZhbHNlXzEiLCJmcmVlRXhwb3J0cyIsImV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0J1ZmZlciIsImFycmF5VGFnIiwiYm9vbFRhZyIsImRhdGVUYWciLCJlcnJvclRhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsIm9iamVjdFRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsIndlYWtNYXBUYWciLCJhcnJheUJ1ZmZlclRhZyIsImRhdGFWaWV3VGFnIiwiZmxvYXQzMlRhZyIsImZsb2F0NjRUYWciLCJpbnQ4VGFnIiwiaW50MTZUYWciLCJpbnQzMlRhZyIsInVpbnQ4VGFnIiwidWludDhDbGFtcGVkVGFnIiwidWludDE2VGFnIiwidWludDMyVGFnIiwidHlwZWRBcnJheVRhZ3MiLCJiYXNlSXNUeXBlZEFycmF5IiwiX2Jhc2VJc1R5cGVkQXJyYXkiLCJiYXNlVW5hcnkiLCJfYmFzZVVuYXJ5IiwiZnJlZVByb2Nlc3MiLCJwcm9jZXNzIiwibm9kZVV0aWwiLCJ0eXBlcyIsInJlcXVpcmUiLCJiaW5kaW5nIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheV8xIiwiYXJyYXlMaWtlS2V5cyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsIlN0cmluZyIsIl9hcnJheUxpa2VLZXlzIiwiaXNQcm90b3R5cGUiLCJDdG9yIiwiY29uc3RydWN0b3IiLCJwcm90byIsIl9pc1Byb3RvdHlwZSIsIm92ZXJBcmciLCJ0cmFuc2Zvcm0iLCJhcmciLCJfb3ZlckFyZyIsIm5hdGl2ZUtleXMiLCJfbmF0aXZlS2V5cyIsImJhc2VLZXlzIiwiX2Jhc2VLZXlzIiwia2V5c18xIiwiYmFzZUFzc2lnbiIsIl9iYXNlQXNzaWduIiwibmF0aXZlS2V5c0luIiwiX25hdGl2ZUtleXNJbiIsImJhc2VLZXlzSW4iLCJpc1Byb3RvIiwiX2Jhc2VLZXlzSW4iLCJrZXlzSW4iLCJrZXlzSW5fMSIsImJhc2VBc3NpZ25JbiIsIl9iYXNlQXNzaWduSW4iLCJhbGxvY1Vuc2FmZSIsImNsb25lQnVmZmVyIiwiYnVmZmVyIiwiaXNEZWVwIiwiY29weSIsImNvcHlBcnJheSIsIl9jb3B5QXJyYXkiLCJhcnJheUZpbHRlciIsInByZWRpY2F0ZSIsIl9hcnJheUZpbHRlciIsInN0dWJBcnJheSIsInN0dWJBcnJheV8xIiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldFN5bWJvbHMiLCJzeW1ib2wiLCJfZ2V0U3ltYm9scyIsImNvcHlTeW1ib2xzIiwiX2NvcHlTeW1ib2xzIiwiYXJyYXlQdXNoIiwidmFsdWVzIiwib2Zmc2V0IiwiX2FycmF5UHVzaCIsImdldFByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwiX2dldFByb3RvdHlwZSIsImdldFN5bWJvbHNJbiIsIl9nZXRTeW1ib2xzSW4iLCJjb3B5U3ltYm9sc0luIiwiX2NvcHlTeW1ib2xzSW4iLCJiYXNlR2V0QWxsS2V5cyIsImtleXNGdW5jIiwic3ltYm9sc0Z1bmMiLCJfYmFzZUdldEFsbEtleXMiLCJnZXRBbGxLZXlzIiwiX2dldEFsbEtleXMiLCJnZXRBbGxLZXlzSW4iLCJfZ2V0QWxsS2V5c0luIiwiRGF0YVZpZXciLCJfRGF0YVZpZXciLCJQcm9taXNlIiwiX1Byb21pc2UiLCJTZXQiLCJfU2V0IiwiV2Vha01hcCIsIl9XZWFrTWFwIiwicmVxdWlyZSQkNiIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJnZXRUYWciLCJBcnJheUJ1ZmZlciIsInJlc29sdmUiLCJjdG9yU3RyaW5nIiwiX2dldFRhZyIsImluaXRDbG9uZUFycmF5IiwiaW5wdXQiLCJfaW5pdENsb25lQXJyYXkiLCJVaW50OEFycmF5IiwiX1VpbnQ4QXJyYXkiLCJjbG9uZUFycmF5QnVmZmVyIiwiYXJyYXlCdWZmZXIiLCJieXRlTGVuZ3RoIiwiX2Nsb25lQXJyYXlCdWZmZXIiLCJjbG9uZURhdGFWaWV3IiwiZGF0YVZpZXciLCJieXRlT2Zmc2V0IiwiX2Nsb25lRGF0YVZpZXciLCJyZUZsYWdzIiwiY2xvbmVSZWdFeHAiLCJyZWdleHAiLCJfY2xvbmVSZWdFeHAiLCJzeW1ib2xQcm90byIsInN5bWJvbFZhbHVlT2YiLCJjbG9uZVN5bWJvbCIsIl9jbG9uZVN5bWJvbCIsImNsb25lVHlwZWRBcnJheSIsInR5cGVkQXJyYXkiLCJfY2xvbmVUeXBlZEFycmF5IiwiaW5pdENsb25lQnlUYWciLCJfaW5pdENsb25lQnlUYWciLCJvYmplY3RDcmVhdGUiLCJjcmVhdGUiLCJiYXNlQ3JlYXRlIiwiX2Jhc2VDcmVhdGUiLCJpbml0Q2xvbmVPYmplY3QiLCJfaW5pdENsb25lT2JqZWN0IiwiYmFzZUlzTWFwIiwiX2Jhc2VJc01hcCIsIm5vZGVJc01hcCIsImlzTWFwIiwiaXNNYXBfMSIsImJhc2VJc1NldCIsIl9iYXNlSXNTZXQiLCJub2RlSXNTZXQiLCJpc1NldCIsImlzU2V0XzEiLCJyZXF1aXJlJCQ3IiwicmVxdWlyZSQkOCIsInJlcXVpcmUkJDkiLCJyZXF1aXJlJCQxMCIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTIiLCJyZXF1aXJlJCQxMyIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTUiLCJyZXF1aXJlJCQxNiIsInJlcXVpcmUkJDE3IiwicmVxdWlyZSQkMTgiLCJyZXF1aXJlJCQxOSIsInJlcXVpcmUkJDIwIiwicmVxdWlyZSQkMjEiLCJDTE9ORV9ERUVQX0ZMQUciLCJDTE9ORV9GTEFUX0ZMQUciLCJDTE9ORV9TWU1CT0xTX0ZMQUciLCJjbG9uZWFibGVUYWdzIiwiYmFzZUNsb25lIiwiYml0bWFzayIsInN0YWNrIiwiaXNGbGF0IiwiaXNGdWxsIiwiaXNGdW5jIiwic3RhY2tlZCIsImZvckVhY2giLCJzdWJWYWx1ZSIsImFkZCIsIl9iYXNlQ2xvbmUiLCJjbG9uZURlZXAiLCJjbG9uZURlZXBfMSIsImNsb25lIiwiY2xvbmVfMSIsIkNvbnN0LlNHRl9MRVRURVJTIiwiQ29uc3QuQTFfTEVUVEVSUyIsIkNvbnN0LkExX05VTUJFUlMiLCJfX2V4dGVuZHMiLCJfX3JlYWQiLCJfIiwiX19zcHJlYWRBcnJheSIsIlRyZWVNb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsU0FBU0EsV0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUNwQyxNQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFiO0FBQUEsTUFDSUMsTUFBTSxHQUFHSixLQUFLLENBQUNJLE1BRG5COztBQUdBLE1BQUlILEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDYkEsSUFBQUEsS0FBSyxHQUFHLENBQUNBLEtBQUQsR0FBU0csTUFBVCxHQUFrQixDQUFsQixHQUF1QkEsTUFBTSxHQUFHSCxLQUF4QztBQUNEOztBQUNEQyxFQUFBQSxHQUFHLEdBQUdBLEdBQUcsR0FBR0UsTUFBTixHQUFlQSxNQUFmLEdBQXdCRixHQUE5Qjs7QUFDQSxNQUFJQSxHQUFHLEdBQUcsQ0FBVixFQUFhO0FBQ1hBLElBQUFBLEdBQUcsSUFBSUUsTUFBUDtBQUNEOztBQUNEQSxFQUFBQSxNQUFNLEdBQUdILEtBQUssR0FBR0MsR0FBUixHQUFjLENBQWQsR0FBb0JBLEdB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QUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQURoQixZQUFZLGFBQUEsRUFBaUIsa0JBQWtCLG1CQUMvQixDQUFDO0lBQ2pDLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtRQUNuQixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUMxQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEQsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7UUFDckIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUM1QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEQsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7UUFDckIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUM1QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEQsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxJQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDdEIsa0JBQWtCLENBQUMsT0FBTyxD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
