
  /**
   * @license
   * author: Byron Bai
   * ghostban.js v2.0.0-alpha.13
   * Released under the MIT license.
   */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');

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

exports.Ki = void 0;
(function (Ki) {
    Ki[Ki["Black"] = 1] = "Black";
    Ki[Ki["White"] = -1] = "White";
    Ki[Ki["Empty"] = 0] = "Empty";
})(exports.Ki || (exports.Ki = {}));
exports.Theme = void 0;
(function (Theme) {
    Theme["BlackAndWhite"] = "Black&White";
    Theme["Flat"] = "Flat";
    Theme["Subdued"] = "Subdued";
    Theme["ShellStone"] = "Shell";
    Theme["SlateAndShell"] = "SlateAndShell";
    Theme["Walnut"] = "Walnet";
    Theme["Photorealistic"] = "Photorealistic";
})(exports.Theme || (exports.Theme = {}));
exports.Center = void 0;
(function (Center) {
    Center["TopRight"] = "tr";
    Center["TopLeft"] = "tl";
    Center["BottomLeft"] = "bl";
    Center["BottomRight"] = "br";
    Center["Center"] = "c";
})(exports.Center || (exports.Center = {}));
exports.Mark = void 0;
(function (Mark) {
    Mark["Current"] = "cu";
    Mark["Circle"] = "ci";
    Mark["Square"] = "sq";
    Mark["Triangle"] = "tri";
})(exports.Mark || (exports.Mark = {}));

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

var Map$3 = getNative$6(root$5, 'Map');
var _Map = Map$3;

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
    Map$2 = _Map;
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
    'map': new (Map$2 || ListCache$2)(),
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
    Map$1 = _Map,
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

    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
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
    Map = _Map,
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
    mapCtorString = toSource(Map),
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

if (DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag$3(new Map()) != mapTag$3 || Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag || Set && getTag$3(new Set()) != setTag$3 || WeakMap && getTag$3(new WeakMap()) != weakMapTag$1) {
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
var initMat = function (size) {
    return new Array(size[0]).fill(0).map(function () { return new Array(size[1]).fill(0); });
};
var initMarks = function (size) {
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
    if (center == exports.Center.TopLeft) {
        visibleSize = Math.min(Math.max(rightMost, bottomMost) + extend, boardSize - 1);
        visibleArea = [
            [0, visibleSize],
            [0, visibleSize],
        ];
    }
    else if (center == exports.Center.TopRight) {
        visibleSize = Math.min(Math.max(bottomMost + extend, boardSize - 1 - (leftMost - extend)), boardSize - 1);
        visibleArea = [
            [boardSize - 1 - visibleSize, 18],
            [0, visibleSize],
        ];
    }
    else if (center == exports.Center.BottomLeft) {
        visibleSize = Math.min(Math.max(boardSize - 1 - (topMost - extend), rightMost + extend), boardSize - 1);
        visibleArea = [
            [0, visibleSize],
            [boardSize - 1 - visibleSize, 18],
        ];
    }
    else if (center == exports.Center.BottomRight) {
        visibleSize = Math.min(Math.max(boardSize - 1 - (topMost - extend), boardSize - 1 - (leftMost - extend)), boardSize - 1);
        console.log('vs', visibleSize);
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

var img$2 = "data:image/png;base64,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";

var img$1 = "data:image/png;base64,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";

var img = "data:image/png;base64,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";

var _a;
// const devicePixelRatio = window.devicePixelRatio;
var devicePixelRatio = 1.0;
if (typeof window !== 'undefined') {
    devicePixelRatio = window.devicePixelRatio;
    // browser code
}
var Resources = (_a = {},
    _a[exports.Theme.Subdued] = {
        board: img$2,
        black: [img],
        white: [img$1],
    },
    _a);
var GhostBan = /** @class */ (function () {
    function GhostBan(options) {
        var _this = this;
        this.options = {
            boardSize: 19,
            padding: 10,
            extend: 2,
            interactive: false,
            coordinate: true,
        };
        this.clearCanvas = function () {
            if (_this.canvas) {
                var ctx = _this.canvas.getContext('2d');
                if (ctx) {
                    ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                }
            }
        };
        this.drawMarks = function (mat, marks) {
            console.log('marks', marks);
            var canvas = _this.canvas;
            if (canvas) {
                for (var i = 0; i < marks.length; i++) {
                    for (var j = 0; j < marks[i].length; j++) {
                        var value = marks[i][j];
                        if (value !== null && value !== '') {
                            var _a = _this.calcSpaceAndPadding(), space = _a.space, scaledPadding = _a.scaledPadding;
                            var x = scaledPadding + i * space;
                            var y = scaledPadding + j * space;
                            if (value === exports.Mark.Current) {
                                var ctx = canvas.getContext('2d');
                                if (ctx) {
                                    ctx.beginPath();
                                    ctx.arc(x, y, space * 0.3, 0, 2 * Math.PI, true);
                                    ctx.lineWidth = 2;
                                    if (mat[i][j] === 1) {
                                        ctx.strokeStyle = '#fff';
                                    }
                                    else {
                                        ctx.strokeStyle = '#000';
                                    }
                                    ctx.stroke();
                                    ctx.lineWidth = 1;
                                    ctx.strokeStyle = '#000';
                                }
                            }
                        }
                    }
                }
            }
        };
        this.drawBan = function () {
            var canvas = _this.canvas;
            var theme = _this.options.theme;
            if (canvas) {
                canvas.style.borderRadius = '2px';
                var ctx = canvas.getContext('2d');
                if (ctx) {
                    if (theme === exports.Theme.BlackAndWhite) {
                        canvas.style.boxShadow = '0px 0px 0px #000000';
                    }
                    else if (theme === exports.Theme.Flat) {
                        ctx.fillStyle = '#ECB55A';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                    }
                    else if (theme === exports.Theme.Walnut) {
                        if (_this.resources.board) {
                            ctx.drawImage(_this.resources.board, 0, 0, canvas.width, canvas.height);
                        }
                    }
                    else {
                        if (_this.resources.board) {
                            var pattern = ctx.createPattern(_this.resources.board, 'repeat');
                            if (pattern) {
                                ctx.fillStyle = pattern;
                                ctx.fillRect(0, 0, canvas.width, canvas.height);
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
                var _a = _this.cursor, idx = _a[0], idy = _a[1];
                if (idx < visibleArea[0][0] || idx > visibleArea[0][1])
                    return;
                if (idy < visibleArea[1][0] || idy > visibleArea[1][1])
                    return;
                var x = idx * space + space / 2 + padding;
                var y = idy * space + space / 2 + padding;
                if (ctx) {
                    var size = space * 0.4;
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
        };
        this.drawStones = function (matrix) {
            var canvas = _this.canvas;
            var theme = _this.options.theme;
            if (canvas) {
                for (var i = 0; i < matrix.length; i++) {
                    for (var j = 0; j < matrix[i].length; j++) {
                        var value = matrix[i][j];
                        if (value !== 0) {
                            var ctx = canvas.getContext('2d');
                            if (ctx) {
                                var _a = _this.calcSpaceAndPadding(), space = _a.space, scaledPadding = _a.scaledPadding;
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
                                if (theme === exports.Theme.BlackAndWhite || theme === exports.Theme.Flat) {
                                    ctx.beginPath();
                                    ctx.arc(x, y, space * ratio, 0, 2 * Math.PI, true);
                                    ctx.lineWidth = 1;
                                    ctx.strokeStyle = '#000';
                                    if (value === 1) {
                                        ctx.fillStyle = '#000';
                                    }
                                    else if (value === -1) {
                                        ctx.fillStyle = '#fff';
                                    }
                                    ctx.fill();
                                    ctx.stroke();
                                }
                                else {
                                    var mod = i + 10 + j;
                                    var img = void 0;
                                    if (value === 1) {
                                        img = _this.resources.black[mod % _this.resources.black.length];
                                    }
                                    else {
                                        img = _this.resources.white[mod % _this.resources.white.length];
                                    }
                                    if (img) {
                                        var size = space * ratio * 2;
                                        ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
                                    }
                                }
                                ctx.restore();
                            }
                        }
                    }
                }
            }
        };
        var defaultOptions = this.options;
        this.resources = {
            board: null,
            white: [],
            black: [],
        };
        this.mat = zeros([19, 19]);
        this.marks = initMarks([19, 19]);
        this._turn = exports.Ki.Black;
        this.cursor = [18, 0];
        this.cursorPos = new DOMPoint();
        this.maxhv = this.options.boardSize;
        this.transMat = new DOMMatrix();
        if (options) {
            this.options = tslib.__assign(tslib.__assign({}, defaultOptions), options);
        }
    }
    GhostBan.prototype.setTurn = function (turn) {
        this._turn = turn;
    };
    GhostBan.prototype.resize = function () {
        if (!this.canvas || !this.dom)
            return;
        var canvas = this.canvas;
        var size = this.options.size;
        if (size) {
            canvas.width = size;
            canvas.height = size;
        }
        else {
            var clientWidth = this.dom.clientWidth;
            canvas.style.width = clientWidth + 'px';
            canvas.style.height = clientWidth + 'px';
            canvas.width = Math.floor(clientWidth * devicePixelRatio);
            canvas.height = Math.floor(clientWidth * devicePixelRatio);
        }
    };
    GhostBan.prototype.init = function (dom) {
        var _a;
        this.mat = zeros([19, 19]);
        this.marks = initMarks([19, 19]);
        this.transMat = new DOMMatrix();
        var canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        this.canvas = canvas;
        this.dom = dom;
        this.resize();
        (_a = dom.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
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
            _this.render(_this.mat, _this.marks);
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
        if (this.options.theme === theme)
            return;
        var shadowStyle = '3px 3px 3px #aaaaaa';
        var canvas = this.canvas;
        if (canvas) {
            this.options.theme = theme;
            if (theme === exports.Theme.BlackAndWhite) {
                canvas.style.boxShadow = '0px 0px 0px #000000';
            }
            else if (theme === exports.Theme.Subdued
            // ||
            // theme === Theme.Photorealistic ||
            // theme === Theme.ShellStone ||
            // theme === Theme.SlateAndShell ||
            // theme === Theme.Walnut
            ) {
                var board_1 = new Image();
                var boardTheme = Resources[theme];
                board_1.src = boardTheme.board; // Set source path
                var blacks_1 = Resources[theme].black.map(function (i) {
                    var img = new Image();
                    img.src = i;
                    return img;
                });
                var whites_1 = Resources[theme].white.map(function (i) {
                    var img = new Image();
                    img.src = i;
                    return img;
                });
                Promise.all(Array.from(tslib.__spreadArray(tslib.__spreadArray([board_1], blacks_1, true), whites_1, true))
                    .filter(function (img) { return !img.complete; })
                    .map(function (img) {
                    return new Promise(function (resolve) {
                        img.onload = img.onerror = resolve;
                    });
                })).then(function () {
                    _this.resources.black = blacks_1;
                    _this.resources.white = whites_1;
                    _this.resources.board = board_1;
                    _this.render(_this.mat, _this.marks);
                });
            }
            else {
                this.options.theme = exports.Theme.Flat;
                canvas.style.boxShadow = shadowStyle;
            }
        }
    };
    GhostBan.prototype.render = function (mat, marks) {
        if (mat)
            this.mat = mat;
        if (marks)
            this.marks = marks;
        var _a = this.options, boardSize = _a.boardSize, zoom = _a.zoom, extend = _a.extend, interactive = _a.interactive, coordinate = _a.coordinate;
        var canvas = this.canvas;
        if (canvas) {
            this.resize();
            this.clearCanvas();
            var ctx = canvas.getContext('2d');
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
            this.drawMarks(mat !== null && mat !== void 0 ? mat : this.mat, marks !== null && marks !== void 0 ? marks : this.marks);
            // ctx?.restore();
        }
    };
    return GhostBan;
}());

exports.GhostBan = GhostBan;
exports.a1ToSGF = a1ToSGF;
exports.calcCenter = calcCenter;
exports.calcMost = calcMost;
exports.calcVisibleArea = calcVisibleArea;
exports.canMove = canMove;
exports.convertStepsForAI = convertStepsForAI;
exports.convertStoneTypeToString = convertStoneTypeToString;
exports.initMarks = initMarks;
exports.initMat = initMat;
exports.move = move;
exports.posToSgf = posToSgf;
exports.sgfOffset = sgfOffset;
exports.sgfToPos = sgfToPos;
exports.showKi = showKi;
exports.zeros = zeros;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTbGljZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9GaW5pdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvSW50ZWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2h1bmsuanMiLCIuLi9zcmMvY29uc3QudHMiLCIuLi9zcmMvdHlwZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwQ2FjaGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VBc3NpZ25Jbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weUFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19EYXRhVmlldy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc01hcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ2xvbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2Nsb25lRGVlcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2xvbmUuanMiLCIuLi9zcmMvaGVscGVyLnRzIiwiLi4vc3JjL3V0aWxzLnRzIiwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc3ViZHVlZC9ib2FyZC5wbmciLCIuLi9zcmMvYXNzZXRzL2ltYWdlcy90aGVtZS9zdWJkdWVkL3doaXRlLnBuZyIsIi4uL3NyYy9hc3NldHMvaW1hZ2VzL3RoZW1lL3N1YmR1ZWQvYmxhY2sucG5nIiwiLi4vc3JjL2dob3N0YmFuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSBlbmQgPiBsZW5ndGggPyBsZW5ndGggOiBlbmQ7XG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlbmd0aDtcbiAgfVxuICBsZW5ndGggPSBzdGFydCA+IGVuZCA/IDAgOiAoKGVuZCAtIHN0YXJ0KSA+Pj4gMCk7XG4gIHN0YXJ0ID4+Pj0gMDtcblxuICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gYXJyYXlbaW5kZXggKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2xpY2U7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpXG4gICAgICApIHtcbiAgICByZXR1cm4gZXEob2JqZWN0W2luZGV4XSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0l0ZXJhdGVlQ2FsbDtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGEgc2luZ2xlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMvO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1FbmRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2VcbiAqIGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpIHtcbiAgdmFyIGluZGV4ID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgtLSAmJiByZVdoaXRlc3BhY2UudGVzdChzdHJpbmcuY2hhckF0KGluZGV4KSkpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmltbWVkRW5kSW5kZXg7XG4iLCJ2YXIgdHJpbW1lZEVuZEluZGV4ID0gcmVxdWlyZSgnLi9fdHJpbW1lZEVuZEluZGV4Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW1TdGFydCA9IC9eXFxzKy87XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udHJpbWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byB0cmltLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUcmltKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nXG4gICAgPyBzdHJpbmcuc2xpY2UoMCwgdHJpbW1lZEVuZEluZGV4KHN0cmluZykgKyAxKS5yZXBsYWNlKHJlVHJpbVN0YXJ0LCAnJylcbiAgICA6IHN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVHJpbTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciBiYXNlVHJpbSA9IHJlcXVpcmUoJy4vX2Jhc2VUcmltJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSBiYXNlVHJpbSh2YWx1ZSk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwidmFyIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwLFxuICAgIE1BWF9JTlRFR0VSID0gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDg7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIGZpbml0ZSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEyLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0Zpbml0ZSgzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b0Zpbml0ZShOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9GaW5pdGUoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvRmluaXRlKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b0Zpbml0ZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiAwO1xuICB9XG4gIHZhbHVlID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAodmFsdWUgPT09IElORklOSVRZIHx8IHZhbHVlID09PSAtSU5GSU5JVFkpIHtcbiAgICB2YXIgc2lnbiA9ICh2YWx1ZSA8IDAgPyAtMSA6IDEpO1xuICAgIHJldHVybiBzaWduICogTUFYX0lOVEVHRVI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHZhbHVlIDogMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0Zpbml0ZTtcbiIsInZhciB0b0Zpbml0ZSA9IHJlcXVpcmUoJy4vdG9GaW5pdGUnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGludGVnZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgaW50ZWdlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0ludGVnZXIoMy4yKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnRvSW50ZWdlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDBcbiAqXG4gKiBfLnRvSW50ZWdlcihJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9JbnRlZ2VyKCczLjInKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0b0Zpbml0ZSh2YWx1ZSksXG4gICAgICByZW1haW5kZXIgPSByZXN1bHQgJSAxO1xuXG4gIHJldHVybiByZXN1bHQgPT09IHJlc3VsdCA/IChyZW1haW5kZXIgPyByZXN1bHQgLSByZW1haW5kZXIgOiByZXN1bHQpIDogMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0ludGVnZXI7XG4iLCJ2YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9fYmFzZVNsaWNlJyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVDZWlsID0gTWF0aC5jZWlsLFxuICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgZWxlbWVudHMgc3BsaXQgaW50byBncm91cHMgdGhlIGxlbmd0aCBvZiBgc2l6ZWAuXG4gKiBJZiBgYXJyYXlgIGNhbid0IGJlIHNwbGl0IGV2ZW5seSwgdGhlIGZpbmFsIGNodW5rIHdpbGwgYmUgdGhlIHJlbWFpbmluZ1xuICogZWxlbWVudHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZT0xXSBUaGUgbGVuZ3RoIG9mIGVhY2ggY2h1bmtcbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBjaHVua3MuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2h1bmsoWydhJywgJ2InLCAnYycsICdkJ10sIDIpO1xuICogLy8gPT4gW1snYScsICdiJ10sIFsnYycsICdkJ11dXG4gKlxuICogXy5jaHVuayhbJ2EnLCAnYicsICdjJywgJ2QnXSwgMyk7XG4gKiAvLyA9PiBbWydhJywgJ2InLCAnYyddLCBbJ2QnXV1cbiAqL1xuZnVuY3Rpb24gY2h1bmsoYXJyYXksIHNpemUsIGd1YXJkKSB7XG4gIGlmICgoZ3VhcmQgPyBpc0l0ZXJhdGVlQ2FsbChhcnJheSwgc2l6ZSwgZ3VhcmQpIDogc2l6ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHNpemUgPSAxO1xuICB9IGVsc2Uge1xuICAgIHNpemUgPSBuYXRpdmVNYXgodG9JbnRlZ2VyKHNpemUpLCAwKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIGlmICghbGVuZ3RoIHx8IHNpemUgPCAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBpbmRleCA9IDAsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShuYXRpdmVDZWlsKGxlbmd0aCAvIHNpemUpKTtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbcmVzSW5kZXgrK10gPSBiYXNlU2xpY2UoYXJyYXksIGluZGV4LCAoaW5kZXggKz0gc2l6ZSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2h1bms7XG4iLCJpbXBvcnQgY2h1bmsgZnJvbSAnbG9kYXNoL2NodW5rJztcblxuZXhwb3J0IGNvbnN0IEExX0xFVFRFUlMgPSBbXG4gICdBJyxcbiAgJ0InLFxuICAnQycsXG4gICdEJyxcbiAgJ0UnLFxuICAnRicsXG4gICdHJyxcbiAgJ0gnLFxuICAnSicsXG4gICdLJyxcbiAgJ0wnLFxuICAnTScsXG4gICdOJyxcbiAgJ08nLFxuICAnUCcsXG4gICdRJyxcbiAgJ1InLFxuICAnUycsXG4gICdUJyxcbl07XG5leHBvcnQgY29uc3QgQTFfTlVNQkVSUyA9IFtcbiAgMTksIDE4LCAxNywgMTYsIDE1LCAxNCwgMTMsIDEyLCAxMSwgMTAsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDEsXG5dO1xuZXhwb3J0IGNvbnN0IFNHRl9MRVRURVJTID0gW1xuICAnYScsXG4gICdiJyxcbiAgJ2MnLFxuICAnZCcsXG4gICdlJyxcbiAgJ2YnLFxuICAnZycsXG4gICdoJyxcbiAgJ2knLFxuICAnaicsXG4gICdrJyxcbiAgJ2wnLFxuICAnbScsXG4gICduJyxcbiAgJ28nLFxuICAncCcsXG4gICdxJyxcbiAgJ3InLFxuICAncycsXG5dO1xuZXhwb3J0IGNvbnN0IEJMQU5LX0FSUkFZID0gY2h1bmsobmV3IEFycmF5KDM2MSkuZmlsbCgwKSwgMTkpO1xuZXhwb3J0IGNvbnN0IEdSSUQgPSAxOTtcbmV4cG9ydCBjb25zdCBET1RfU0laRSA9IDM7XG5leHBvcnQgY29uc3QgRVhQQU5EX0ggPSA1O1xuZXhwb3J0IGNvbnN0IEVYUEFORF9WID0gNTtcbmV4cG9ydCBjb25zdCBSRVNQT05TRV9USU1FID0gMTAwO1xuIiwiZXhwb3J0IGVudW0gS2kge1xuICBCbGFjayA9IDEsXG4gIFdoaXRlID0gLTEsXG4gIEVtcHR5ID0gMCxcbn1cblxuZXhwb3J0IGVudW0gVGhlbWUge1xuICBCbGFja0FuZFdoaXRlID0gJ0JsYWNrJldoaXRlJyxcbiAgRmxhdCA9ICdGbGF0JyxcbiAgU3ViZHVlZCA9ICdTdWJkdWVkJyxcbiAgU2hlbGxTdG9uZSA9ICdTaGVsbCcsXG4gIFNsYXRlQW5kU2hlbGwgPSAnU2xhdGVBbmRTaGVsbCcsXG4gIFdhbG51dCA9ICdXYWxuZXQnLFxuICBQaG90b3JlYWxpc3RpYyA9ICdQaG90b3JlYWxpc3RpYycsXG59XG5cbmV4cG9ydCBlbnVtIENlbnRlciB7XG4gIFRvcFJpZ2h0ID0gJ3RyJyxcbiAgVG9wTGVmdCA9ICd0bCcsXG4gIEJvdHRvbUxlZnQgPSAnYmwnLFxuICBCb3R0b21SaWdodCA9ICdicicsXG4gIENlbnRlciA9ICdjJyxcbn1cblxuZXhwb3J0IGVudW0gTWFyayB7XG4gIEN1cnJlbnQgPSAnY3UnLFxuICBDaXJjbGUgPSAnY2knLFxuICBTcXVhcmUgPSAnc3EnLFxuICBUcmlhbmdsZSA9ICd0cmknLFxufVxuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHNJbjtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNJbiwgZ2V0U3ltYm9sc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzSW47XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVBcnJheTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG4iLCJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlZ0V4cDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU3ltYm9sO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyksXG4gICAgY2xvbmVEYXRhVmlldyA9IHJlcXVpcmUoJy4vX2Nsb25lRGF0YVZpZXcnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTWFwYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBgU2V0YCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcjtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuIiwidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hcGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWFwKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gbWFwVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hcDtcbiIsInZhciBiYXNlSXNNYXAgPSByZXF1aXJlKCcuL19iYXNlSXNNYXAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzTWFwID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNNYXA7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBNYXBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTWFwKG5ldyBNYXApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNNYXAobmV3IFdlYWtNYXApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzTWFwID0gbm9kZUlzTWFwID8gYmFzZVVuYXJ5KG5vZGVJc01hcCkgOiBiYXNlSXNNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXA7XG4iLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzU2V0YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNTZXQodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBzZXRUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzU2V0O1xuIiwidmFyIGJhc2VJc1NldCA9IHJlcXVpcmUoJy4vX2Jhc2VJc1NldCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNTZXQgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1NldDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFNldGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTZXQobmV3IFNldCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1NldChuZXcgV2Vha1NldCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNTZXQgPSBub2RlSXNTZXQgPyBiYXNlVW5hcnkobm9kZUlzU2V0KSA6IGJhc2VJc1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1NldDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNNYXAgPSByZXF1aXJlKCcuL2lzTWFwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTZXQgPSByZXF1aXJlKCcuL2lzU2V0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSkge1xuICAgICAgcmVzdWx0LmFkZChiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN1YlZhbHVlLCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc01hcCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcbiIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcbiIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzaGFsbG93IGNsb25lIG9mIGB2YWx1ZWAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb24gdGhlXG4gKiBbc3RydWN0dXJlZCBjbG9uZSBhbGdvcml0aG1dKGh0dHBzOi8vbWRuLmlvL1N0cnVjdHVyZWRfY2xvbmVfYWxnb3JpdGhtKVxuICogYW5kIHN1cHBvcnRzIGNsb25pbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucywgZGF0ZSBvYmplY3RzLCBtYXBzLFxuICogbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcywgc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkXG4gKiBhcnJheXMuIFRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIGBhcmd1bWVudHNgIG9iamVjdHMgYXJlIGNsb25lZFxuICogYXMgcGxhaW4gb2JqZWN0cy4gQW4gZW1wdHkgb2JqZWN0IGlzIHJldHVybmVkIGZvciB1bmNsb25lYWJsZSB2YWx1ZXMgc3VjaFxuICogYXMgZXJyb3Igb2JqZWN0cywgZnVuY3Rpb25zLCBET00gbm9kZXMsIGFuZCBXZWFrTWFwcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lRGVlcFxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgc2hhbGxvdyA9IF8uY2xvbmUob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhzaGFsbG93WzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY2xvbmUodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgQ0xPTkVfU1lNQk9MU19GTEFHKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcbiIsImltcG9ydCBjbG9uZSBmcm9tICdsb2Rhc2gvY2xvbmUnO1xuLy8gaW1wb3J0IEpzRmVhdCBmcm9tICdqc2ZlYXQnO1xuaW1wb3J0ICogYXMgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmV4cG9ydCBjb25zdCBzZ2ZUb1BvcyA9IChzdHI6IGFueSkgPT4ge1xuICBjb25zdCBraSA9IHN0clswXSA9PT0gJ0InID8gMSA6IC0xO1xuICBjb25zdCB0ZW1wU3RyID0gL1xcWyguKilcXF0vLmV4ZWMoc3RyKTtcbiAgaWYgKHRlbXBTdHIpIHtcbiAgICBjb25zdCBwb3MgPSB0ZW1wU3RyWzFdO1xuICAgIGNvbnN0IHggPSBDb25zdC5TR0ZfTEVUVEVSUy5pbmRleE9mKHBvc1swXSk7XG4gICAgY29uc3QgeSA9IENvbnN0LlNHRl9MRVRURVJTLmluZGV4T2YocG9zWzFdKTtcbiAgICByZXR1cm4ge3gsIHksIGtpfTtcbiAgfVxuICByZXR1cm4ge3g6IC0xLCB5OiAtMSwga2k6IDB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNnZk9mZnNldCA9IChzZ2Y6IGFueSwgb2Zmc2V0ID0gMCkgPT4ge1xuICBpZiAob2Zmc2V0ID09PSAwKSByZXR1cm4gc2dmO1xuICBjb25zdCByZXMgPSBjbG9uZShzZ2YpO1xuICBjb25zdCBjaGFySW5kZXggPSBDb25zdC5TR0ZfTEVUVEVSUy5pbmRleE9mKHNnZlsyXSkgLSBvZmZzZXQ7XG4gIHJldHVybiByZXMuc3Vic3RyKDAsIDIpICsgQ29uc3QuU0dGX0xFVFRFUlNbY2hhckluZGV4XSArIHJlcy5zdWJzdHIoMiArIDEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGExVG9TR0YgPSAoc3RyOiBhbnksIHR5cGUgPSAnQicsIG9mZnNldCA9IDApID0+IHtcbiAgY29uc3QgaW54ID0gQ29uc3QuQTFfTEVUVEVSUy5pbmRleE9mKHN0clswXSkgKyBvZmZzZXQ7XG4gIGNvbnN0IGlueSA9IENvbnN0LkExX05VTUJFUlMuaW5kZXhPZihwYXJzZUludChzdHIuc3Vic3RyKDEpLCAwKSkgLSBvZmZzZXQ7XG4gIGNvbnN0IHNnZiA9IGAke3R5cGV9WyR7Q29uc3QuU0dGX0xFVFRFUlNbaW54XX0ke0NvbnN0LlNHRl9MRVRURVJTW2lueV19XWA7XG4gIHJldHVybiBzZ2Y7XG59O1xuXG5leHBvcnQgY29uc3QgcG9zVG9TZ2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGtpOiBudW1iZXIpID0+IHtcbiAgY29uc3QgYXggPSBDb25zdC5TR0ZfTEVUVEVSU1t4XTtcbiAgY29uc3QgYXkgPSBDb25zdC5TR0ZfTEVUVEVSU1t5XTtcbiAgaWYgKGtpID09PSAwKSByZXR1cm4gJyc7XG4gIGlmIChraSA9PT0gMSkgcmV0dXJuIGBCWyR7YXh9JHtheX1dYDtcbiAgaWYgKGtpID09PSAtMSkgcmV0dXJuIGBXWyR7YXh9JHtheX1dYDtcbiAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRTdG9uZVR5cGVUb1N0cmluZyA9ICh0eXBlOiBhbnkpID0+ICh0eXBlID09PSAxID8gJ0InIDogJ1cnKTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRTdGVwc0ZvckFJID0gKHN0ZXBzOiBhbnksIG9mZnNldCA9IDApID0+IHtcbiAgbGV0IHJlcyA9IGNsb25lKHN0ZXBzKTtcbiAgcmVzID0gcmVzLm1hcCgoczogYW55KSA9PiBzZ2ZPZmZzZXQocywgb2Zmc2V0KSk7XG4gIGNvbnN0IGhlYWRlciA9IGAoO0ZGWzRdR01bMV1TWlske1xuICAgIDE5IC0gb2Zmc2V0XG4gIH1dR05bMjI2XVBCW0JsYWNrXUhBWzBdUFdbV2hpdGVdS01bNy41XURUWzIwMTctMDgtMDFdVE1bMTgwMF1SVVtDaGluZXNlXUNQW0NvcHlyaWdodCBnaG9zdC1nby5jb21dQVBbZ2hvc3QtZ28uY29tXVBMW0JsYWNrXTtgO1xuICBsZXQgY291bnQgPSAwO1xuICBsZXQgcHJldiA9ICcnO1xuICBzdGVwcy5mb3JFYWNoKChzdGVwOiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICBpZiAoc3RlcFswXSA9PT0gcHJldlswXSkge1xuICAgICAgaWYgKHN0ZXBbMF0gPT09ICdCJykge1xuICAgICAgICByZXMuc3BsaWNlKGluZGV4ICsgY291bnQsIDAsICdXW3R0XScpO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnNwbGljZShpbmRleCArIGNvdW50LCAwLCAnQlt0dF0nKTtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJldiA9IHN0ZXA7XG4gIH0pO1xuICByZXR1cm4gYCR7aGVhZGVyfSR7cmVzLmpvaW4oJzsnKX0pYDtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBHb0JhbkRldGVjdGlvbiA9IChwaXhlbERhdGEsIGNhbnZhcykgPT4ge1xuLy8gY29uc3QgY29sdW1ucyA9IGNhbnZhcy53aWR0aDtcbi8vIGNvbnN0IHJvd3MgPSBjYW52YXMuaGVpZ2h0O1xuLy8gY29uc3QgZGF0YVR5cGUgPSBKc0ZlYXQuVThDMV90O1xuLy8gY29uc3QgZGlzdE1hdHJpeFQgPSBuZXcgSnNGZWF0Lm1hdHJpeF90KGNvbHVtbnMsIHJvd3MsIGRhdGFUeXBlKTtcbi8vIEpzRmVhdC5pbWdwcm9jLmdyYXlzY2FsZShwaXhlbERhdGEsIGNvbHVtbnMsIHJvd3MsIGRpc3RNYXRyaXhUKTtcbi8vIEpzRmVhdC5pbWdwcm9jLmdhdXNzaWFuX2JsdXIoZGlzdE1hdHJpeFQsIGRpc3RNYXRyaXhULCAyLCAwKTtcbi8vIEpzRmVhdC5pbWdwcm9jLmNhbm55KGRpc3RNYXRyaXhULCBkaXN0TWF0cml4VCwgNTAsIDUwKTtcblxuLy8gY29uc3QgbmV3UGl4ZWxEYXRhID0gbmV3IFVpbnQzMkFycmF5KHBpeGVsRGF0YS5idWZmZXIpO1xuLy8gY29uc3QgYWxwaGEgPSAoMHhmZiA8PCAyNCk7XG4vLyBsZXQgaSA9IGRpc3RNYXRyaXhULmNvbHMgKiBkaXN0TWF0cml4VC5yb3dzO1xuLy8gbGV0IHBpeCA9IDA7XG4vLyB3aGlsZSAoaSA+PSAwKSB7XG4vLyAgIHBpeCA9IGRpc3RNYXRyaXhULmRhdGFbaV07XG4vLyAgIG5ld1BpeGVsRGF0YVtpXSA9IGFscGhhIHwgKHBpeCA8PCAxNikgfCAocGl4IDw8IDgpIHwgcGl4O1xuLy8gICBpIC09IDE7XG4vLyB9XG4vLyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnO1xuaW1wb3J0IHtzZ2ZUb1Bvc30gZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHtDZW50ZXJ9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgemVyb3MgPSAoc2l6ZTogW251bWJlciwgbnVtYmVyXSkgPT5cbiAgbmV3IEFycmF5KHNpemVbMF0pLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheShzaXplWzFdKS5maWxsKDApKTtcblxuZXhwb3J0IGNvbnN0IGluaXRNYXQgPSAoc2l6ZTogW251bWJlciwgbnVtYmVyXSk6IG51bWJlcltdW10gPT5cbiAgbmV3IEFycmF5KHNpemVbMF0pLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheShzaXplWzFdKS5maWxsKDApKTtcblxuZXhwb3J0IGNvbnN0IGluaXRNYXJrcyA9IChzaXplOiBbbnVtYmVyLCBudW1iZXJdKTogc3RyaW5nW11bXSA9PlxuICBuZXcgQXJyYXkoc2l6ZVswXSkuZmlsbCgnJykubWFwKCgpID0+IG5ldyBBcnJheShzaXplWzFdKS5maWxsKCcnKSk7XG5cbmNvbnN0IEdSSUQgPSAxOTtcbmxldCBsaWJlcnRpZXMgPSAwO1xubGV0IHJlY3Vyc2lvblBhdGg6IHN0cmluZ1tdID0gW107XG5cbmV4cG9ydCBjb25zdCBjYWxjTW9zdCA9IChtYXQ6IG51bWJlcltdW10sIGJvYXJkU2l6ZSA9IDE5KSA9PiB7XG4gIGxldCBsZWZ0TW9zdDogbnVtYmVyID0gYm9hcmRTaXplIC0gMTtcbiAgbGV0IHJpZ2h0TW9zdCA9IDA7XG4gIGxldCB0b3BNb3N0OiBudW1iZXIgPSBib2FyZFNpemUgLSAxO1xuICBsZXQgYm90dG9tTW9zdCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbWF0W2ldW2pdO1xuICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICAgIGlmIChsZWZ0TW9zdCA+IGkpIGxlZnRNb3N0ID0gaTtcbiAgICAgICAgaWYgKHJpZ2h0TW9zdCA8IGkpIHJpZ2h0TW9zdCA9IGk7XG4gICAgICAgIGlmICh0b3BNb3N0ID4gaikgdG9wTW9zdCA9IGo7XG4gICAgICAgIGlmIChib3R0b21Nb3N0IDwgaikgYm90dG9tTW9zdCA9IGo7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB7bGVmdE1vc3QsIHJpZ2h0TW9zdCwgdG9wTW9zdCwgYm90dG9tTW9zdH07XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY0NlbnRlciA9IChtYXQ6IG51bWJlcltdW10sIGJvYXJkU2l6ZSA9IDE5KSA9PiB7XG4gIGNvbnN0IHtsZWZ0TW9zdCwgcmlnaHRNb3N0LCB0b3BNb3N0LCBib3R0b21Nb3N0fSA9IGNhbGNNb3N0KG1hdCwgYm9hcmRTaXplKTtcbiAgY29uc3QgdG9wID0gdG9wTW9zdCA8IGJvYXJkU2l6ZSAtIDEgLSBib3R0b21Nb3N0O1xuICBjb25zdCBsZWZ0ID0gbGVmdE1vc3QgPCBib2FyZFNpemUgLSAxIC0gcmlnaHRNb3N0O1xuICBpZiAodG9wICYmIGxlZnQpIHJldHVybiBDZW50ZXIuVG9wTGVmdDtcbiAgaWYgKCF0b3AgJiYgbGVmdCkgcmV0dXJuIENlbnRlci5Cb3R0b21MZWZ0O1xuICBpZiAodG9wICYmICFsZWZ0KSByZXR1cm4gQ2VudGVyLlRvcFJpZ2h0O1xuICBpZiAoIXRvcCAmJiAhbGVmdCkgcmV0dXJuIENlbnRlci5Cb3R0b21SaWdodDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjVmlzaWJsZUFyZWEgPSAoXG4gIG1hdDogbnVtYmVyW11bXSxcbiAgYm9hcmRTaXplID0gMTksXG4gIGV4dGVuZCA9IDJcbikgPT4ge1xuICBjb25zdCBjZW50ZXIgPSBjYWxjQ2VudGVyKG1hdCk7XG4gIGNvbnN0IHtsZWZ0TW9zdCwgcmlnaHRNb3N0LCB0b3BNb3N0LCBib3R0b21Nb3N0fSA9IGNhbGNNb3N0KG1hdCwgYm9hcmRTaXplKTtcbiAgbGV0IHZpc2libGVBcmVhID0gW1xuICAgIFswLCAxOF0sXG4gICAgWzAsIDE4XSxcbiAgXTtcbiAgbGV0IHZpc2libGVTaXplID0gYm9hcmRTaXplIC0gMTtcbiAgaWYgKGNlbnRlciA9PSBDZW50ZXIuVG9wTGVmdCkge1xuICAgIHZpc2libGVTaXplID0gTWF0aC5taW4oXG4gICAgICBNYXRoLm1heChyaWdodE1vc3QsIGJvdHRvbU1vc3QpICsgZXh0ZW5kLFxuICAgICAgYm9hcmRTaXplIC0gMVxuICAgICk7XG4gICAgdmlzaWJsZUFyZWEgPSBbXG4gICAgICBbMCwgdmlzaWJsZVNpemVdLFxuICAgICAgWzAsIHZpc2libGVTaXplXSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGNlbnRlciA9PSBDZW50ZXIuVG9wUmlnaHQpIHtcbiAgICB2aXNpYmxlU2l6ZSA9IE1hdGgubWluKFxuICAgICAgTWF0aC5tYXgoYm90dG9tTW9zdCArIGV4dGVuZCwgYm9hcmRTaXplIC0gMSAtIChsZWZ0TW9zdCAtIGV4dGVuZCkpLFxuICAgICAgYm9hcmRTaXplIC0gMVxuICAgICk7XG4gICAgdmlzaWJsZUFyZWEgPSBbXG4gICAgICBbYm9hcmRTaXplIC0gMSAtIHZpc2libGVTaXplLCAxOF0sXG4gICAgICBbMCwgdmlzaWJsZVNpemVdLFxuICAgIF07XG4gIH0gZWxzZSBpZiAoY2VudGVyID09IENlbnRlci5Cb3R0b21MZWZ0KSB7XG4gICAgdmlzaWJsZVNpemUgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KGJvYXJkU2l6ZSAtIDEgLSAodG9wTW9zdCAtIGV4dGVuZCksIHJpZ2h0TW9zdCArIGV4dGVuZCksXG4gICAgICBib2FyZFNpemUgLSAxXG4gICAgKTtcbiAgICB2aXNpYmxlQXJlYSA9IFtcbiAgICAgIFswLCB2aXNpYmxlU2l6ZV0sXG4gICAgICBbYm9hcmRTaXplIC0gMSAtIHZpc2libGVTaXplLCAxOF0sXG4gICAgXTtcbiAgfSBlbHNlIGlmIChjZW50ZXIgPT0gQ2VudGVyLkJvdHRvbVJpZ2h0KSB7XG4gICAgdmlzaWJsZVNpemUgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KFxuICAgICAgICBib2FyZFNpemUgLSAxIC0gKHRvcE1vc3QgLSBleHRlbmQpLFxuICAgICAgICBib2FyZFNpemUgLSAxIC0gKGxlZnRNb3N0IC0gZXh0ZW5kKVxuICAgICAgKSxcbiAgICAgIGJvYXJkU2l6ZSAtIDFcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKCd2cycsIHZpc2libGVTaXplKTtcbiAgICB2aXNpYmxlQXJlYSA9IFtcbiAgICAgIFtib2FyZFNpemUgLSAxIC0gdmlzaWJsZVNpemUsIDE4XSxcbiAgICAgIFtib2FyZFNpemUgLSAxIC0gdmlzaWJsZVNpemUsIDE4XSxcbiAgICBdO1xuICB9XG4gIHJldHVybiB7dmlzaWJsZUFyZWEsIGNlbnRlcn07XG59O1xuXG5mdW5jdGlvbiBjYWxjTGliZXJ0eUNvcmUobWF0OiBudW1iZXJbXVtdLCB4OiBudW1iZXIsIHk6IG51bWJlciwga2k6IG51bWJlcikge1xuICBpZiAoeCA+PSAwICYmIHggPCBHUklEICYmIHkgPj0gMCAmJiB5IDwgR1JJRCkge1xuICAgIGlmIChtYXRbeF1beV0gPT09IGtpICYmICFyZWN1cnNpb25QYXRoLmluY2x1ZGVzKGAke3h9LCR7eX1gKSkge1xuICAgICAgcmVjdXJzaW9uUGF0aC5wdXNoKGAke3h9LCR7eX1gKTtcbiAgICAgIGNhbGNMaWJlcnR5Q29yZShtYXQsIHggLSAxLCB5LCBraSk7XG4gICAgICBjYWxjTGliZXJ0eUNvcmUobWF0LCB4ICsgMSwgeSwga2kpO1xuICAgICAgY2FsY0xpYmVydHlDb3JlKG1hdCwgeCwgeSAtIDEsIGtpKTtcbiAgICAgIGNhbGNMaWJlcnR5Q29yZShtYXQsIHgsIHkgKyAxLCBraSk7XG4gICAgfSBlbHNlIGlmIChtYXRbeF1beV0gPT09IDApIHtcbiAgICAgIGxpYmVydGllcyArPSAxO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjTGliZXJ0eShtYXQ6IG51bWJlcltdW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGxpYmVydGllcyA9IDA7XG4gIHJlY3Vyc2lvblBhdGggPSBbXTtcblxuICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+IEdSSUQgLSAxIHx8IHkgPiBHUklEIC0gMSkge1xuICAgIHJldHVybiB7XG4gICAgICBsaWJlcnR5OiA0LFxuICAgICAgcmVjdXJzaW9uUGF0aDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGlmIChtYXRbeF1beV0gPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGliZXJ0eTogNCxcbiAgICAgIHJlY3Vyc2lvblBhdGg6IFtdLFxuICAgIH07XG4gIH1cbiAgY2FsY0xpYmVydHlDb3JlKG1hdCwgeCwgeSwga2kpO1xuICByZXR1cm4ge1xuICAgIGxpYmVydHk6IGxpYmVydGllcyxcbiAgICByZWN1cnNpb25QYXRoLFxuICB9O1xufVxuXG5mdW5jdGlvbiBleGVjUG9ubnVraShtYXQ6IG51bWJlcltdW10sIGk6IG51bWJlciwgajogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGNvbnN0IG5ld01hdCA9IGNsb25lRGVlcChtYXQpO1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eVVwLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoVXB9ID0gY2FsY0xpYmVydHkoXG4gICAgbWF0LFxuICAgIGksXG4gICAgaiAtIDEsXG4gICAga2lcbiAgKTtcbiAgY29uc3Qge2xpYmVydHk6IGxpYmVydHlEb3duLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoRG93bn0gPSBjYWxjTGliZXJ0eShcbiAgICBtYXQsXG4gICAgaSxcbiAgICBqICsgMSxcbiAgICBraVxuICApO1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eUxlZnQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhMZWZ0fSA9IGNhbGNMaWJlcnR5KFxuICAgIG1hdCxcbiAgICBpIC0gMSxcbiAgICBqLFxuICAgIGtpXG4gICk7XG4gIGNvbnN0IHtsaWJlcnR5OiBsaWJlcnR5UmlnaHQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhSaWdodH0gPVxuICAgIGNhbGNMaWJlcnR5KG1hdCwgaSArIDEsIGosIGtpKTtcbiAgaWYgKGxpYmVydHlVcCA9PT0gMCkge1xuICAgIHJlY3Vyc2lvblBhdGhVcC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY29vcmQgPSBpdGVtLnNwbGl0KCcsJyk7XG4gICAgICBuZXdNYXRbcGFyc2VJbnQoY29vcmRbMF0pXVtwYXJzZUludChjb29yZFsxXSldID0gMDtcbiAgICB9KTtcbiAgfVxuICBpZiAobGliZXJ0eURvd24gPT09IDApIHtcbiAgICByZWN1cnNpb25QYXRoRG93bi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY29vcmQgPSBpdGVtLnNwbGl0KCcsJyk7XG4gICAgICBuZXdNYXRbcGFyc2VJbnQoY29vcmRbMF0pXVtwYXJzZUludChjb29yZFsxXSldID0gMDtcbiAgICB9KTtcbiAgfVxuICBpZiAobGliZXJ0eUxlZnQgPT09IDApIHtcbiAgICByZWN1cnNpb25QYXRoTGVmdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY29vcmQgPSBpdGVtLnNwbGl0KCcsJyk7XG4gICAgICBuZXdNYXRbcGFyc2VJbnQoY29vcmRbMF0pXVtwYXJzZUludChjb29yZFsxXSldID0gMDtcbiAgICB9KTtcbiAgfVxuICBpZiAobGliZXJ0eVJpZ2h0ID09PSAwKSB7XG4gICAgcmVjdXJzaW9uUGF0aFJpZ2h0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBjb29yZCA9IGl0ZW0uc3BsaXQoJywnKTtcbiAgICAgIG5ld01hdFtwYXJzZUludChjb29yZFswXSldW3BhcnNlSW50KGNvb3JkWzFdKV0gPSAwO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBuZXdNYXQ7XG59XG5cbmZ1bmN0aW9uIGNhblBvbm51a2kobWF0OiBudW1iZXJbXVtdLCBpOiBudW1iZXIsIGo6IG51bWJlciwga2k6IG51bWJlcikge1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eVVwLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoVXB9ID0gY2FsY0xpYmVydHkoXG4gICAgbWF0LFxuICAgIGksXG4gICAgaiAtIDEsXG4gICAga2lcbiAgKTtcbiAgY29uc3Qge2xpYmVydHk6IGxpYmVydHlEb3duLCByZWN1cnNpb25QYXRoOiByZWN1cnNpb25QYXRoRG93bn0gPSBjYWxjTGliZXJ0eShcbiAgICBtYXQsXG4gICAgaSxcbiAgICBqICsgMSxcbiAgICBraVxuICApO1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eUxlZnQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhMZWZ0fSA9IGNhbGNMaWJlcnR5KFxuICAgIG1hdCxcbiAgICBpIC0gMSxcbiAgICBqLFxuICAgIGtpXG4gICk7XG4gIGNvbnN0IHtsaWJlcnR5OiBsaWJlcnR5UmlnaHQsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhSaWdodH0gPVxuICAgIGNhbGNMaWJlcnR5KG1hdCwgaSArIDEsIGosIGtpKTtcbiAgaWYgKGxpYmVydHlVcCA9PT0gMCAmJiByZWN1cnNpb25QYXRoVXAubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChsaWJlcnR5RG93biA9PT0gMCAmJiByZWN1cnNpb25QYXRoRG93bi5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGxpYmVydHlMZWZ0ID09PSAwICYmIHJlY3Vyc2lvblBhdGhMZWZ0Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAobGliZXJ0eVJpZ2h0ID09PSAwICYmIHJlY3Vyc2lvblBhdGhSaWdodC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuTW92ZShtYXQ6IG51bWJlcltdW10sIGk6IG51bWJlciwgajogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGNvbnN0IG5ld01hdCA9IGNsb25lRGVlcChtYXQpO1xuICBpZiAobmV3TWF0W2ldW2pdICE9PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbmV3TWF0W2ldW2pdID0ga2k7XG4gIGNvbnN0IHtsaWJlcnR5fSA9IGNhbGNMaWJlcnR5KG5ld01hdCwgaSwgaiwga2kpO1xuICBpZiAoY2FuUG9ubnVraShuZXdNYXQsIGksIGosIC1raSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoY2FuUG9ubnVraShuZXdNYXQsIGksIGosIGtpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobGliZXJ0eSA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmUobWF0OiBudW1iZXJbXVtdLCBpOiBudW1iZXIsIGo6IG51bWJlciwga2k6IG51bWJlcikge1xuICBjb25zdCBuZXdNYXQgPSBjbG9uZURlZXAobWF0KTtcbiAgbmV3TWF0W2ldW2pdID0ga2k7XG4gIHJldHVybiBleGVjUG9ubnVraShuZXdNYXQsIGksIGosIC1raSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93S2kobWF0OiBudW1iZXJbXVtdLCBzdGVwczogc3RyaW5nW10sIGlzUG9ubnVraSA9IHRydWUpIHtcbiAgbGV0IG5ld01hdCA9IGNsb25lRGVlcChtYXQpO1xuICBsZXQgaGFzTW92ZWQgPSBmYWxzZTtcbiAgc3RlcHMuZm9yRWFjaChzdHIgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAga2ksXG4gICAgfToge1xuICAgICAgeDogbnVtYmVyO1xuICAgICAgeTogbnVtYmVyO1xuICAgICAga2k6IG51bWJlcjtcbiAgICB9ID0gc2dmVG9Qb3Moc3RyKTtcbiAgICBpZiAoaXNQb25udWtpKSB7XG4gICAgICBpZiAoY2FuTW92ZShuZXdNYXQsIHgsIHksIGtpKSkge1xuICAgICAgICBuZXdNYXRbeF1beV0gPSBraTtcbiAgICAgICAgbmV3TWF0ID0gZXhlY1Bvbm51a2kobmV3TWF0LCB4LCB5LCAta2kpO1xuICAgICAgICBoYXNNb3ZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld01hdFt4XVt5XSA9IGtpO1xuICAgICAgaGFzTW92ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhcnJhbmdlbWVudDogbmV3TWF0LFxuICAgIGhhc01vdmVkLFxuICB9O1xufVxuIiwidmFyIGltZyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUMxQ0FZQUFBQ3BnRnJlQUFBRURtbERRMUJyUTBkRGIyeHZjbE53WVdObFIyVnVaWEpwWTFKSFFnQUFPSTJOVlYxb0hGVVVQcHU1c3lza3pvUFVwcWFTRHY0MWxMUnNVdEdFMnVqK1piTnQzQ3lUYkxSQmtNbnMzWjFwSmpQai9LUnBLVDRVUVJEQnFPQ1Q0UDlid1NjaGFxdnRpeTJpdEZDaUJJTW8rTkQ2UjZIU0Z3bnJ1VE96dTVPNGE3M0wzUG5tbk85KzU5NXo3dDRMa0xnc1c1YmVKUUlzR3E0dDVkUGlzOGZteE1RNmRNRjkwQTE5MEMwcmpwVXFsU1lCRytQQ3Y5cnQ3eURHM3RmMnQvZi9aK3V1VUVjQmlOMkYyS3c0eWlMaVpRRCtGY1d5WFlBRVFmdklDZGRpK0FuRU8yeWNJT0lTdzdVQVZ4aWVEL0N5ejVtUk1vaGZSU3dvcW96K3hOdUlCK2NqOWxvRUIzUHcyNDQ4TmFpdEtTTExSY2sycTVwT0k5TzlnL3QvdGtYZGE4VGJnMCtQc3pCOUZOOER1UGFYS25LVzRZY1FuMVhrM0hTSXJ5NXBzOFVRLzJXNWFRbnhJd0JkdTd5RmNncnhQc1JqVlh1OEhPaDBxYW8zMGNBcnA5U1paeERmZzNoMXdUekt4dTVFL0xVeFg1d0tkWDVTbkF6bUR4NEE0T0lxTGJCNjl5TWVzRTFwS29qTGpWZG9Oc2Z5aVBpNDVoWm1BbjN1TFdkcE90ZlFPYVZtaWtFczdvdmo4aEZXcHo3RVY2bWVsMEw5WHkyM0ZNWWxQWVplbkF4MHlEQjEvUFg2ZGxlZG1RamlramtYQ3hxTUpTOVd0ZkZDeUg5WHRTZWtFRisyZEgrUDR0eklUZHVUeWdHZnY1OGE1VkNUSDVQdFhEN0VGWmlOeVVEQmhIbnNGVEJnRTBTUUlBOXBmRnRnbzZjS0d1aG9vZWlsYUtINDFlRHMzOElwK2Y0QXQxUnEvc2pyNk5Fd1FxYi9JL0RRcXNMdmFGVWp2QXgrZVdpcmRkQUpabkFqMURGSkwwbVNnL2djSXBQa01Ca2hveUNTSjhsVFpJeGswVHBLRGpYSGxpSnpaUE81MGRSNUFTTlNuemVMdkl2b2QwSEcvbWRrbU9DMHo4VktuemNRMk0vWXoydktsZGR1WGpwOWJsZUx1MFpXbjd2V2MrbDBKR2NhYWkxMHlOclVuWExQLzhKZjU5ZXdYK2MzV2d6K0IzNERmK3ZiVnJjMTZ6VE1WZ3A5dW05YnhFZnpQVTVrUHFVdFZXeGhzNk9pV1RWVytnSWZ5d0I5dVhpN0NHY0dXL3prOThrL2ttdko5NUlmSm4vajN1USs0YzV6bjNLZmNkK0F5RjNnTG5KZmNsOXhIM09mUjJyVWVlODBhKzZ2bzdFSzVtbVhVZHlmUWxyWUxUd29aSVU5d3NQQ1pFdFA2QldHaEFsaEwzcDJONnNUalJkZHV3YkhzRzlrcTMyc2dCZXBjK3h1ckxQVzRUOVVScFlHSjN5bTQrOHpBMDV1NDRRalNUOFpJb1Z0dTNxRTdmV21kbjVMUGRxdmdjWno4V3c4QldKOFgzdzBQaFEvd25DREdkK0x2bEhzOGRSeTZiTExEdUtNYVoyMHRacnFpc1BKNU9OaUNxOHlLaFlNNWNDZ0tPdTY2THNjMGFZT3RaZG81UUN3ZXpJNHdtOUovdjBYMjNtbFpYT2ZCamo4Snp2M1dyWTVEK0NzQTlEN2FNczJnR2ZqdmU4QXJENm1lUFpTZUNmRVl0OENPTldEdzhGWFR4clBxeC9yOVZ0NGJpWGVBTmg4dlY3LysvMTZmZk1EMU44QXVLRC9BLzhsZUF2Rlk5YkxBQUFBZUdWWVNXWk5UUUFxQUFBQUNBQUZBUklBQXdBQUFBRUFBUUFBQVJvQUJRQUFBQUVBQUFCS0FSc0FCUUFBQUFFQUFBQlNBU2dBQXdBQUFBRUFBZ0FBaDJrQUJBQUFBQUVBQUFCYUFBQUFBQUFBQUVnQUFBQUJBQUFBU0FBQUFBRUFBcUFDQUFRQUFBQUJBQUFBWktBREFBUUFBQUFCQUFBQXRRQUFBQUFuM0cwWkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFCV1dsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpV0UxUUlFTnZjbVVnTmk0d0xqQWlQZ29nSUNBOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaVBnb2dJQ0FnSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cDBhV1ptUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzUnBabVl2TVM0d0x5SStDaUFnSUNBZ0lDQWdJRHgwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQakU4TDNScFptWTZUM0pwWlc1MFlYUnBiMjQrQ2lBZ0lDQWdJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29nSUNBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ29aWHVFSEFBQkFBRWxFUVZSNEFWemRhWmJjU3JPbFp4NlNYNVhXMGpRMU1NMUdBOUtmdXZldzBmdHNBNElzZVNRQzNsaXpyWEdIQXhHWitjLy84My8vWDc5Ly9QdnZseS8vL1BQbCs3ZHZYNVIvdnY3ejVjZVBIMS8rcWY3MTY3Y3ZQMy8rWEIrYXIxKy9mdm5WMlAvNG4vL25sLy8xWC8vdmwyLy8rUjlmZnRmKzl1MC80L2thNzUveXRlcnZOYjNIUG5tL2EzejkrdjNMajMvLzE1ZXYzNzdXSDExOXhudnYvTStYbjc5K0hPZXgxLzczeTMrKy9ZOHZ2MzZINVI4NC8vbnk2K2VQenIrUC92ZXZMMGtLdzM5LytmNzkrNWZmditxdjU4czNRanQrL2Z6eUMvV3Y2SkwvSy9rd2ZQc2VmclF2MmU5L3Z2eE9MaDhvc1BEQnIzeUFTUHRYc3I3bHExL3gwZjgxL0wrU0crSHdVZmVQWmhVVS8yUWptNzJSK3VQSHYrUDU5cDk4OE4vL25hN3NHUUE4Q2tWM2ltY2lBdnA5b0xSSFc3ZjZSdU5pMFBnRzhGZEFmbi81RmlDQzFGZSsvaDU0WEsrQmpBSHpONGUvZENQLy9lVm56dVp3eGhuak9McWgrL2J0ZS9aVzR4ek9yNTlUQkhOeWNvNHpXcjQ1UmkzVnZkTTZtZCtTOFRWNS80UlhnSDRuejloMEpsaVMxSndNclBTZElENjQrbVBobk16ZTBjQWxEQVVWLzIvTTA0R2FEODQzN1Byb013bWlrZWhMRm9UZldKZFE1dXdIdzA4U2dZcCtNNmZSK2ltRUNURDFvOGx3SWlhaHV2SEhRUlQ5a3h3Z3ZSWTBsUGpKSzB0L2o0Q01ISnpNelpoQk9wMFQ4T0Q3OVRQbjVjUTVvWnlIMll1c0d2MzhxblhBdlN1ak1NNlhuZkhxZzdHVG41VlBjSTJPSHM3c3o1UERGSlhaOHRveUprcklreXc2MU5lT2grMTFpbyt4My9PQm9PakRhQ1c0SkJrbXljQ0poMy9peHJrTTVWV2w0VGRqS2Z0dHlSaUxPcUVIMkJnNmhsQjJZK2NhOVQrdkF3VGhhd1ROQnppcU5VNHVrTXZJWVZSL0RFOEhzb2RyY3JoNDViSCtnbjBKQTlkczNGdThzcEZ6WGtmRC9DUlFBemVlT0ZsUEx1eGJzcDVFMEY1ZmJVZ2xuY29GdXFwKzJEdERaV2FqUjZRbVNLL3V6WmIwb01QenRmbzVocEVvbnlqS2Znb1VoQ3U0SnZKMVJabmFFalJGTTI1VWwza29pWXVWM0lIdVBFY0VVS2JQVWFCR1JBTTZLckpENjVsTjZsZGVPYzdqbVBERE40d3lrblBpLzVsOEJZbERtV1BDSzhpanE0Kyt4STNvdHpISzV5REFNYU8zSkxtbWNlako0MGgxeWhhMkd1U3NEa2QxOUZOTmxQVUtSd09iNGJzbTZUSmpuZmltZ0FBSk9rYUhOYnc1ZWxPS0pXUlltbFFpcEdoQ1JGOFFVaTZvVjZwSHArOTFETTdKUnArOFpUeXhEWHh0RmxJeDRKOHhvSkpSLy9rbWhTVUptcjJIZnBuTGlnY1pRK0FDYlZsWjQ1dnJ3TEE2VWVqSHpJRGJRTzNPYzNhS2ZsRll0M0dTSmVNM0YvMHRvNGlOa1o5L1ZPcDQrZXVvL3UzR0d6SDhYbmQrTW1MTXZXYzA2WHFXOEJLZ2x1QktUdGZFcjdmTU5Kd1RUdkFaWDJQdEU1eUdzeUZsd0Z4elRrcVlpK0JsTzZYWUdJM3ErRTcyQ1Rqbm1ESC9tZEhUbVhCU1VlQzdvRDNCeTY4d3pKaUlmbklJdW1VaGg5WVFRSWxSQTkwdXBtVEdkd1JrQ2JCa3kzR3hXSHBmdWRxTjZvMC9XZFhPWVcwME9MU09RandabzMweHBSUGx1OXpSQWNQOEVzZDJXb1FwazN1YTVvOXowR2VNYmpTTmNjWmxoZnFyZFk0M3hzallYTmd3U08xUmM0QjExMFUybXJ2d1ArejRHcHRwc3B1dXNkTkZHamtPVzBmYjJJRGdtVUdQVVEzck8vZkFYUWNzNitlSWRNSlMzN0NtUjkrdnRzZDJjRXNrM05HUWNjNVhvNFM4Szl0R3I4TllNbmI5ZTRMekJIM0xlSExnb2RQTGhGTGdnUjgyczNKUzZOU1gzUFBwcXROaUJtK2pzMkNXQmo5dTVWZ2k1YlBrWnh4RHk3SVpseURuOVZmdnFyL0MzazJ2NktiWUdNQm5SalFBSExqMWtSdU5DL3ljTXprSFhEWnVyUjVIcldmblJBTWRNeWJlRS9rWWRlSnp4Rnk2SUd6NUlXTkJmM1p0QlJuamxxN09NSEl2MmNQRE5qRFcxNHl6Uk5mbVpKV2JnUStCR2FiRThJRlRaUWx3SXlmbjlaRWtqTlZ4TkhEZ2x5Zy9oOFV1Y3dGOStKMWVMT290V1FuSklCRy9yQUxyeW9SeWJEM3FITzI4ZWxxWExhMnpFTnc0NFVDaHZQTHR5YXkxeGx1TlBoMXRyVWU3NEFXbTgyVTBtZ3ZFM1h3aFB1Q1dSamV3K09nMDlaYUZ4bXVlak9Sdi9KbTlqWEVFRytGVGpHdnRHdkg3YTVzQU40UGZkdDNRZitOSE04RlQ5ZUJtUjBPaldRWEhIWHl5bFVNN09uZ2xIQm1Db3ExL2Zzb0x1K2VKOW5Sa013UGNKQ0VVbUs4UlUvUlBnZHJVdCs3V250R2JSVEdMT29EUmIyZnk4UHh3UjA4WkVJNjlrdGRMTmk5Wk1pUXhWenFuNW8veE9TWk5EMWpMMFplYzMzMEthanFjdy9LclFETDhadDQ3MndpS2pLTWJld1A3enZUVGJ4WjFRN2pyUVRpYkhlaCtmU2w3VzI3UTJBVXVxNWNjb1NsSUs4bGxGeHA2UHZyalhqS09ma2lYRkhpMjRoeTNUQmtkOW5raWUrQi9reWtweWEyOUxKdXJqdk14ZXc0M04xUVFlM0h5QmhnZEtuM0VDeURseHU0aStDeC9EOC82Tm56QjRkU1YraWFYaHB4aitmaG5NeTd3MFhoa0k4akx1RVV1cmZWRDlHT1BUUjcrREp2eGRGU0dDMTN0ZTd5aTl4YUtyUWlQZnJwdUtXbG05T2lIN0Rub2haZE8ySmVnUklnRXV6czludGpZKzRSaXZ1Um9nV3RXU0VRSktnRUZVdnVkRVZNeGZPUTNUaVphTm14MmRCWUFnTDVhaDBseFYxb0doWXFWZGNsZzNKa3MxQ3NNNStpRTJiWmxKQVdiQldtcGVncDNQdHJqU3lBNm5Ca09COW90T2Fzbkx5SGtrTWNwSVI3clVjTmRacU45eDBtWjJEcXF1QzU2NUFMck5oMVAxdjlabWg4NnN5UWJsbFIwUmtmWHQrOW1HblBwcGZVMEw3U05Xd0xSRHBZNlg5SFJjWTkxaU1IYmMwSzd1K3Btb0tSWTBMUko3aXdRQzlnc092amJpeU1BV01TV3JjU0ZhazRUWlVvckoveU1KcXFPQ2R4Z1NKZHQrcFY1RE5XMEhoajFlYnQrU2tkMkR4VjNMM1JkRHhaejRpLzY1RWtjUzZaK1JzOXBCRW1hd2JtWnhmaWY3SEdReVhnRVdqQW53Mk1pUFJ4S2psbnhPdytab2V4bUM2ZmpIeXY1YVo2VWRUWncwajk0NTJxNkNrNHI4V1k4ZlRaRWt2RElZNjU2aVE1RDlBWStpa3I2UlFtQWYvKzc2ZDRXY3JyMjNnWFBlbm9BRnlTdGh0UlhOQ3EzN2w3Zk9ldmtHbjFwWmRHQ0hxOCtJQm54T3llZzNuWHRXWmJXbGdnRXBPT1d6cEd0ajFOcG81N2pCY0hNRUp6U3F3dDNjdXRiME9pdGQ5bXN0dVNwb3pJejZqcW5TTDdEdHNHRUg4L3BtWkRHeWFJZDdhOUF3TEc4a0JqdnJDakFIcjFJZFA1QXkvWXhkenA3Nml0eVMvZTdXRVZZOUtEYTQyRExWYS9GTXlNVUJ1dERBOGlmVEpPQk9ncFlGUmRkVFNYU0FCcVhlV1hjaE1SdnhiTVNScml4S25Cc3ljb1lhLzh0ZnlIWVhiQ2N2R1hTemcwait1Rk54NXlsN1RxVWFBR2c1T2NQbTVKbkNiWkJjUUdmUFd4QWVjdVZRUDZJbjViTk1oZCtNbGpDQnJNNW5mY0FGSzkrL0U2OFFscHRkQjIyKzdPOXVsWEZ0Y095eWQ3SmUvaHU1dExyeXVDeC9PbVpYdGxwWGY3M3gzODFUTUIvT3A5enoxRUhaRUtUSU1vbmlLc1l6aGcvdlZVK0YxQkVpN1VSWTY5em4rVWpFTitHL3N6YWVBNkNaWUNyMzkyK0dLWkRHWDFuWUtvTDZySXZaM1BRU24zTFJvM3FaRjBTcmVPaFl4OForNkY2Z1FCNWNnUy9zaURtM0Z2T1E1R3NGeTJjSDZ5QytCd1NjQTlRdzdQZEhLd3ZwdmpuQlI5ajhFbzA4RGM3ZXl0eVYwS1ZsNy8zUVJCbFU0VFJnN1hPMm5NcDhETmdyWUdkRDFneDQyUkxEWE0zK1Y1YlZtUStlUUhldXBuelBvOUNHanZuRjRSbkV3SGtzbXRPcVo2NDBtUlFCWHVsR1hHejdweG1Ucjl0SUFWdytoYW9aY1hHWC81dGk0bnEyRTFibVh4NjB4ZlBtd2o2ek1qTW5rMmJrZkhjc3kzSlIzOGJta2NXUDNxOXN4dmJzTU1VOXNuaisrMzBMc0QvK2MvL3NkdU9DZVhzUnVkRXhBckQ3cm9SbU9vK2xMSWRuY0ZjRHNYY2pZM0RQbWpxNk1mMHJjZ0Z6b2I2elpqeGpqNityRmpRRU5jbm5Cd3hubzNVTjEwVDIxejhJMGVQRUMzendYbnduV2g0b3AwVEJJWjhEckU3by9kMllYZzNwZytKcEptQUdoWE8xNFJyYmN0UWxWbmIyUGxMa2oxOUtBZUtMRFAza2hrVG10VE5LZzh2WFc5ZjIxeXp2eHVjWklKSFJxVk9pcG9SRWJnbVRDa3RIN0RYSjRPL2ZaMG50anR4WXpsYkpqanlSQW5xemE1QXR6YWZUQjhSNTVEdlBpS3VIdDJ5bFdiR2JEUUtqcUJUVmkxSW5Sc2w5M0JpUkRQM2pNdUlRdjUwYkFYSXVtOFhTR1B2NXpwMEx3V215RHErcUMyNWxoQUJ5M3dNdzhoWEtFQmtCMmNhVnREVDl3YlR1T1A3MXo0bW50OXd5a3M3T1BJRUhxWUxLdjlYYzYwb0E4eVFoR212UHVMZnV6SGI4dExZb2ptbGw4VWlQN1BqK1dFNUMrVzJrYU5wS0tSclYzRXh2Q1FYc0d0VHg1Z3dYNmxoK1FUNC9ReDdNNWV6WmFWTkIxZGdta3p3YjRrNnQ1d3ozbVZ4WkRZRUZDZmozVlNjMDhoZ2I1OXgvMnBIMmZnK1oyZG5QREJ4RHdMK2NOTXF1OHVuZWpnYWpqUkVhRnR0cC9TekI0VXlTQkMrbG1pSEV3azltTit1YUJhRTJ1ZVVoZ1dsK3pnRytxRGZOak05ZzdDbHlaMm1uVmFFRE54U0F4emcyaWt3eHNpMVlTUGdVVDZuYXdQaFpPako4UFdGRm8yTmhQQmVJWi9jazNNT3ZmcTZKdVJSTVFaWU91S24rNVZEN3U2ZTY3azc0Mlo1bVArM0hVd0NMMnZuZ2VIYjUvazUvZzhXYXp2bmZkdU4zZUw2WE4vb09odUxrZXZPb25VSTZOcFdkakc3NWNyQ0txR0hJZDN6VllyY1FGSnVYQ0syd3ZTbzJuNC94ZW1ZVVlRdFlnZ1RTaUdtMStBSjRDRzluVVNaRTRsWVdlWG9CMHppOUNKZk1mTC8xemNENnpkRzhrR1VyUzZGWHVmVTZmUFdjVFFuOGQwRk9uOHZ3ZUJlRWVDY3RUdm5PT2laay9FL1JNUjliMGY1cmMzTTNjV0ZZZkpUa3kxa2N2SjdQZG9zcUlWbWNYaVIxRjZTUFdNeThkVmhpVndDcFA4MkQrY09McG11TUxodWZyL3BQQmVOb2VFUnlEdjNENy8yd0krTFlvVThnSlpiMFN3U0E3QUFtb0s1YlFxSytwWXFUbkczdE01cDdxMnUrSUN3WGtlNXZudExxNDFEZmZieGxvTFFYRlloR0U5TG95bjNPbHlWNFExdnBvVFAxNEN1NUg3SjRiQjBQZmkvSnBzSXNOeTM3S1NEWnYzMHNBMWRSSGRkZkdjaWF2am9sQ1Q4UVlmK3gwVTFMakQ4cCsrVUxhZ1BiZUlYQUdHbTJSZ1I1dG9ZRmlXT0xFbzd1b2FZd21DY3RndkVkaHoxckk4aXdPTFo5TjI2cUg2QkFsaDJMWHNIUDY2Q1FMSDNmM284TWZsL0daTldSSk1uKzB4eFdUYjU4VzNHSkhNZUJlTXBkQTRiQjhlek5nSFZsenc1OTg4V0Z2OHhXa2Jtc0pweHJUT1c3b3ZRc1Ayd2NOWDNQdVZrazU4VUROUDhHOTNiUHorT1lDU2pOWmExdzBjRitVaUc4YW8xNzlYSDJpaGs5d25ZTmNHNkhwWmRaQmF3QnQ5UzJ3WHJWSkJxd054NE5nTjFmTjJzQWtGL2xEbmpnK0taU2EveG5MaHBEVWUwRG1GeWVidE5SQ29Fc1dFR2tQbVdxZjdMTVQ0dHRBbjQyZmJ4MzMvL3E0dHNkNzZUZUR6djhwSGdTN1pvNFNmYlRISGVUbStWTkEwYkc3TnBJa1o0czc4K2lTZzNEamRCNURoZmZVdFRDQ1RmcFdCSll3T2xLU3J4ZTg0RjgzYVI2eUx4VVdZM3dSR2l6Q2x1V2k3RFBjRzlkWlFzMmJxTGFlY0puL3lFVUtKai9PVjY4dERwMmt4NDVPS2ZzOEhrRk9YaDNjcFJrL1B4d3JhK1lkUVBnWExaTzZ4VG00UHNVdUFzb2ZZc0swWjFqdnZadHlzSm01T3hKNGVrWlhRK3VQb2xwbXpjNC9Qa2xRdUROajN4V0o0ZGNBd0xpSTUwTUdFN3dlU1oyVnVHb3FPVC9BL1BqQnFJalkxeEs0TjVHQ21CZSs0L3dDZElNSXo5L0dsTHlIaWxRSEVnQUZvcGZjOHEyMEVnZThET3ZJUmJZNSs1a2g4ZlIyQVl5dVNRcDE0NWlTb2tBMWdQL3B6N1BwWEZXQmUvTGJQUUNKNVpLaWhrY0FJWnRObVU3S0xLdXcvdlB5M1BzcFZ6Wnp0OXNhemVNcFlJQ2Z6bFAzM2QwNnpSVDZkeXo2UzBSYXVPQnp5YU4zdVdzRzJETDJobU50UHByL0JKK201VmFReE9zZ1h5SGl1Y3U4STZ3MTZueUY0R0VyU3BISUhyQ3FENEtWRVcrZlZjLytIbW5DeXNzUFVBTlpMbUFkRFB5WTF3MnIzcWhBeEFEQjJiSlp2MDc2eUtjZ280SGQxakhGQnp6TU0vNTdzR3ltcTQ5Wk5QUlV0SHI5L1BoZ08rRFZBNXNLZWZtbjJDK0xBaXV5VTJmODAyMkxPVG1mR2RZd3RDcy9KOGRncjVCelNmaVh4bzZtUDc5QUdGTkJsZkFaM2k1OTBBb2lOTTRjWnZxc2F5ajFReDdndkpPaXAvNkJtUW1weGovWXlyc2R0bjAvSjV2Wm1DZDNxaFVUKzNwSDN0ZDhiQmVMNU9ncVFFZkJoSGRoaWp3WTN6Wm9jWmNoaGtFUHJYRnNzbGJldGJyVEV6OS9HTCttQVJXV0RuaS9pck5GTmNhd3BEOTIxNzlERzU3Q2JJVER6NzM0Mk1ic2Q0M2NOQTZGUW4yODFRMmVmbFd0a01NV1h2a2ZTRVljWlU0VUNFdHBYdVZRQ2JnaUczTlh5TXFOOXJqaE9JNUUxUmZaOXBIZVBuVTdHbEZEVnhtYWFXRlBxUzl6NWFGd0IrR1hMNmg1TnpZanZpNmZ6SEJtSnk2Q0pUK3duTU50V3VmWnpJOEZ0MjJFenVHMWl6WUlLam04TWJQdy9RLzNmQkErdk5PUHpuMEd5QW9XT0I2RHpveFBZSzBjWmMxL0N6K1E5dk1rc1lNcFZtM2dsNTJoTUE3R3g3c054MFQvb3NadXpCalRYQmpzY1pNWEhXWmVncFFUbFZ4L0pJakViL0k0OWNvQldPNDU5YlRYSmNkY3NTZzNzYnpmcG1CTmxKdjBoTXp6WUptMGEwbG5IUmVTSFJNOGZsRU1EcDUxQ2lKeW5GYkRrSDZhdjNvY09QYmtmOXpwOEVUTjhsb0VBSmZIckdQUW5ya3dTanlaYWpqY1lTRmo1dDJNYTN0YkRXaEtmbGNzY3c0U211aG1tMytJM3ZkMFgwUWNUUTNtOGEzOVFlNXh4a05Cb2RUM202NnlPWThWZmRmVUkwTXVjdjhuR1JzYnRzVG54SEk5b1M4N1R4Q09pQ2x0RHBJWjg4Z3hteXpIMHUxcHNoRFZ4Q1VQUE1sdWlYVFBITXZtUmN4dDhNZUFUUGtYdms4OHk4Zi9ZN0tFQ2RIbkxmUk5sWnE3N1orOHkrbDJZK0NnRlBXaW15NFRKbHhMM1owVERXbVlGaTl3YU5rRDIvcjQ4SXZITUNBM3Bkb2ZpUFl3dHJEckVFOUhvTkh1SGRpUnV6bEhBS2d5YUZucHFXU24wYnJyb3hYYXVja1VTdFNYNTZQVm1lRkZrWHI0MCsyN3g1RFhwdlhsdmF6RFIwalQzcXRuWGRFamRpWTdiZ2pxcEVWcm5QNmNuUVB0c1dhS1lvMFVtMFhOd3kzRFdMSGM4aHdlOUJhZU1GWVRHWUM5QW44ZEV6cG5PeUw0N2x4QkUvV1pPT3phS0FiNExoZ3hBelF5Zm5BTEtmRndXRFBBRFEzQm5wS0xBc1NFVjVTOFBZQ0p5czAvYzZQM2Q4K0RpVFNzcWQ0TnJYaUxyTy9keW5uY1lxOEJWWnpueTM4V1JMRERNZG4rTDNZN3c0Yk00aHo2dXpqNEF0S1hlWHoxZDNQWnBkcmxYelFiUVNpd3lBTm1QWVZxT0RsbitlaDdjWGZET1hEVFlKUmd0RTlla1ppTHIyYlVCQWw0NFBzSlFNNEVJUTB6SzhKYVJNWEVrZjRIc1hnR1ZsVFVaM2JFak02VWFWOHZYallqeFM3MFI4eXVPWTJudGk2MktTclhoUFV3TlZ6RnJINU5FMWFaS0FiQnVWKzM2dkdVTUhnNzF1dWZwYkwzMkpaRGRNNkdyTDZzbWFjaktmc1hSZW90bkMza3J3U2JpSFZ5S2tzZXkvRzFWeXRnMDJEdXFqaTk2M3VZRUdlODQyTkp0ZWtBdzJRNHVzaUMyVFpKUGdZTy9uN21KbGRhcndKT2l5TUpDSnUrL0xraUVUWk00WjhTNERlQWFRTUxIRkJObGZSV0tnTWY2UFJ6VmhXaEFreFljNHZTQTV2SXoxdk9rL1BlMzk1dnlmdm1HZmM0SmVPZWZkbGVqMHNYSE9wQjkvcHoxZHlJRlVMSXNYbHZNaEtaZFEwemJaemNucE5rYktyUjRJdFlXdTJUWHNkZFNKeG9xdzhUM0tmeEpkWDdHQTcxTjJjVFhOS2xqSFhNMkwwTTJBZ25NanZjdWFYcDhQazNBc3l2VStRVUt6eFl1eVpCaXYrcFFiVytOUDUzaGx0ay96RUhPVURKK0JlZGZyRFM2MGM5d3EzSjd1ak5zSFhZOGU3YnFIVTVja2d3WEdMYnNBQ0U1dGg5MlBCTFI5dHlWMnp6RmFHRitaNTZicGV6dlJLRXRlZmtTK21mMHdOVGFLeWNtdWFONE5EV0t2a0wvaW1xYVJ5MzZaS2FzRzdsRlNZOWNVenRYL0xnVXlkOWxMMVdaRHB3emVwdUM1U200Q0NDamVYbk5HMml5NFhuN0k1L3lQM0RwOVJySHgrSXc1dmNIWmJNRDQyaXJZMnNuaEVOY0h5OWJOck9zZithcTlUZVVGK1hDc2EzcHVOY2cxQmVaZDZqWmI0WWZ6QVhMb3MrdkZRR1l2TnVoY0FrNXNQSkppNVpJakw0d1dwdG11a3B4NjJ3VzAxbkdXZ2ZFMXhpQmdxQ2pJeDRRaEF0bHAzREFhQU40c3ZUamZNNkZkTk5IblJUeU11ZWM5Q2FxOU8yWlY4cFVwdndDbkFhTHAzYjBBWlIwY1BGME4rYTJuMVJQZ0RDMzlQM3JTNjJMTDZGbFpuODlaVGhFWnFtbXdjWmxPNDdjcy82aVBESnVCNGFLdkFOK3ZqQmRBdXBMNjJyR2drQmZlRUoyT0NOanVCWk1DaXdETnA4Wmx2TkhBdlBZNE4zNFAyRTc3eWJNamVmdnRYcFFaSEMwaHk1S1lmZm5oQXZQMlpRZUtsQ3h3TTV6Mk9nTmdxYmhIS29Bd0lnRExRbHpySXYxMHlRTDcvQnlWOVFFVmZNRVk2UmxVM2JTL2laZ2p0ZUhLK2U2TkdMdVBaUVdINFozUEtiSlQvR2tqWGpEUTl6Q3g3L051Tk16dkROa0dJZnlMWFhKOGgreDdqZmtoL3Ewb0JYakNrckZyRTMwRGU3NFJzQ1ZvOVBwdjdMQmV2WUZLSDRiNS9PQWVUYzhpblh2c25rQVJUdkE4U21HQ0xxUDBYWDNUTTVxQnlETjQrSXdTTFJtQloydCtmcGZ0QzBwRTRrVE9DNGpEZkh0dlpVK2JDMnl6VnpTMkZuUGF3elhyazhIbSt6M0FlU0pwa3FFditNVkR0K1ZURWZMZGVGVzU3TDJ6UkhHTmVCTmo4L0p4Mkd3Z05qbWNQYnVjSDcwWk5qUXN2akF5TUVYR053TTZSNi9NRHczY3pFaGNRbTVwTktydThWV1lLWDJQTkRkRzRvRnRmR0NXUi9YLzdQTjM4czBlaGNQZjM2WjFjZkx5TXd6SmVqUG93SUVNTUlKeEp1SEphclM0ZHA1ZzFlR2FucVZtdGJHU0t3Z3cwSGVKZ2s3ZG1QNU1xM2xaRDhjYjlBVWpOZ0hRN3dzTTIrSXVPeHFJYzBHQkNGODlua0h0TndKczZTcjZaaS9kdGU0cGJqTW1XU3Z6S2R1aTlQT3NEdHBXRG43MWRuVy8veUlHemRKb0Mxd1pXeGErb0preUkwbktLR3U1TGxkVFRwdVNlQlNCV1RWRkhMU0xHRkIxeWdCNHlJVktkb1lBMXpMREwrTHNRNlRrdnpTbS9tN2d6QlFiZzNqSnNJU2NMZ2pJTStNYTRKQncvY0ZJMVFXRFdoYWdhUTJvbnQ3dDJqallMc3JNT1d6N1JhTWN0T0RNWVdjWC9mVGU5WSs4ZVdkTGxNL2xGWGhXMi9Wc1VWMy9SaHFROVFLOEpFNmVRTnJTZTl4QzNsQ3lKVGxXbTJuZTFJbVJhUWdZT0NkWmdueWhLeksvZWJUbGc1aEhBRVdPOTFuV096MDU0elgySERpMXlkUS8rQU40VTNhZHA0T2pxMjM1aTlLc1J3M1ZMdUJ6L3ZFYjJkaVVobk9ZSHRtY0sxbnNHOE85a3BvUHJzWW1PWjVMc0hNMHV2MitJeFRSRzl1MUNQV3JkaTZpN3l5N3BPRTdCQ2ZQc3F6b016c3VtUVNXSEVubkNmUUo5SXRIN3cza3YvMmRsaTFaRC9lbXJpeC9uZWhaejAxdHpqRUZNNm9vbmpwY1Vlb0x3UFViS1VnRmNWazFCN09BeE1kcFNLSUhsc0M1b3JaSCtmT0NudHJQZzdhNGNIY3NLbFVpZzlCaGdSN2U2RTltR2ZnWWFnbVFtM2pSdkRQaWNKbXhUNkNpSjQzejJhZ3NHZXUxNUVINnpzaXBLZGk3TmczdmlJZjFkcHBSZXR4VXZBOFNHY2swSTJZWDZjWXMzbmtrb3RtR1llMXdUUzRsaTFyTW80Z0F3QjNORjR0YkFpTXJNbjhjWnhlRUhpOEVqS0xpbGtCS251MGhkQlZqVjRzdU1hUjYzNTMvUjVjdmRoTlg0Rk80TFM5S3loMzl0Tm8rRjBzU0x2Z010endJTWVjejluZHRNZ2hzY3orWms1R0RSbGYvTXBiUUIrTVVKTlhNa0xrUW83MWZyWk9VcDN2WTVoY2M5Tnc5eSt1RDlTNFJ3dGlQbmQ4SGwxM2pPOFA0TGh4aTRyNHJ1TElqcFRybkg5eTN2dDZPNm8vRGI1WXdJdG9aY0lZQS9MaUNoQUY0RFh6SkJKZDh2RHZpc2R0aWpDS3o3cmRyZ1hlSFhDTGdVWGR2OE9oY1ZpVjBXY1poSEQ3dFR0YmhXMXJ2TjE4bDJDMFZtMklaUFJ2UTU4emp2TVFoQS84Yy9laENLeGxoTkNzK05rMlZkcFZvUndmak04UHFXcm43SEZqNUYvc2x2dUVkbXprbis3VlpVaTNET2ZVME9EV2xUTDMxbllQb3ZneXRGdW1tZm5ReVhicU9tMEgxL2RpT1FWQVo4eGk4bVdYcG9LVStNcDRNMDVDUmJyYStmZjJmdTdpNXdPOGk1MjQ5bWFOL0xSM3ZFeVM0Z3JRRUNZZS9TYUtqYW4xbHJlMXo5SFN5d1huQkhSKzZNTEtWV1k5OCtoWndldGYvWEZQeDFPRkY1bHFFbnJmWHB1VzJ1TW1XVkg1aHFIR3JDTDRsUkhieTkzdXRtUnZvakdab2dabXpPOG5LSUE4Y1BRdlVyRHZGNVlQS01IaWpBUHN5c1duNTQ4dHpINEg1RCs0dEp5TVR0TElnckFNNitjQm92c2ZUOXZWOEVZOTZEc05QcUNUYVRxWEtITmY0TWpuSE11NU5GZ0o5TitzVmZvN0U4MG9pK3kyVzVGcjQ3MjBEeHJVMzlDVGU1RGM3endtSno1SG5YSTdtOUlHSUorNE9aN3ZHU1dxSUFiTVlYN1FiTjFzNm1pRjJVQWxweWluN21pWnZVWjVURVZQSW1DbGdRbjA3ME1jL3dMM3ZNeFJqbEQ3Z3lmNWNlTkh6WnVQSWV1L2NlUExWTnpUZEdiWnRiMTl5M3NVWEZqem81cTVkcC9BczQ0YUpDSGhQMWluSnladnA5N0VDV2pSa2tiTEhIL0RySno4UmFKYlY2ck0vMjhONEgyWk40Mmh0OC9sa3Myb0NFN0RaeDQ3NngyTUpsU1NTTm1kYllwZGd5WkZNdlM0SlFyUEFGQXNYSzg5dmZFL0pSTmhmeFNIN0tjZFdJd1ZBcndBL3BRVGZjekR0L1JyeG5Ldi9ITE16U3h2Zlp5MkJsMkdQaDFtOXVuMDlzcC85YWdCRkRCVW8yMElHR2VTNEYvamhRSGU2bHFXUmtRZkxKZGpyekttZmZTYzdlN2Rwa0V3WGJCbE1GcDBjTi8zSm9aZCtNWnY5OU1GblFNbk11bmFkTXlJZkZuZzBDYnd2Z2h5OW1jT0dKVEZkbU1sSmo1dEw5WW5iazlrYk9tTTRZR3BpaXBqZ3Zlb0hZOEdBWXVVVUVHOTJYZFJ2MXJFSEFBRFZsdzN4SFA4SkdPakdaMVJFOG81amdOczdQbG1lb3h5MjRWdWJNKzdkdXBJMzZ0Nk16ZWdob1IveVNrTFJmYzZUZmc3NmJVOXRxTDc3L1VwazdheGMxd3JVOXozR0dRUHdHOVA2eUswKzBmVnNsYmlwSHQ1d0pYZTNEaW53WnhQVkI3YUI3UmF6SFNhRVc2MCtEbDlmR2RNOXhKU214SmhwdmF5cDdnWG9ISnh5KzNUajZad1RqQ24zUUU5LzlMWC9uRGU4dDkyM0pETWxCMXJHUm53UzRxbC9mOW1CRFAxN1M3YlhFZ05mK1pRSU81U1hrVzVhNS93MDRST1VkN2VrZnpNdU9hZFBBTUdRbXg1K1BnNkxsOTFiY2ppdDhablgyOTF6SGRqN0NsSEVqMytPS09kS29QcnVTYnJ4NUVzT0JzN0ltMk4zd3d2bkplNitLR2VYTWVCUjIzWnRuWTlyVHVEdHdITytOWlZBQmh2amlNaXZibmN6V3RpcU5CRFZhWC83YTNIaXgxbkxqbk1HV3ZKR0dyODIyZXNRZ0x3M2FZektQMGM0TUkxTjhBeWRZeHVjdkdGRXpLR1hYRFZtdzdiNjBiMlBiMDY2bFQ1ZVJxSjdIRGhibXlucjB4K1d6eklhTFRwQ2h5OHNFbmJMLzdOZHg4ZW5LSGF2bEFGb0phckFYYWxWSE5ZeXhWZklUYmpNbWNVWnNZdXE3SWg1VXRRdUNsdHJkU3YyL3lzQm93aXRvVjNReWExZlFCWEEzQ2h4cE9BWTIzVWxEdHhnNFQzeXBLVmZocHV4MjZjM2h0ZjRsc0hKRnpUbWRJVHZETDJ6K3BZRGNuSXNMZHFiRFV3bnlKSGg5TzY2UjFKSzRGc0N3WXBHa0ZwRlRtLzA5YTllaFIyakp6S2ZlbDYxWGV1Yy9zaGh1eHRxUVN2OHArT1NGRSsvcm5sQ2tuR0tuNGhSdE1EM2RvNTh3TXFPK2daeXBoMWhVQzhMUkIvb3dDMUxLRlpma2diS0J6OFBHTlp6WWoyNEczcy9LdVhjeDZtTU5NcGY2SGM5WWZBWnRpV2pjU1ZTN3ptczJjengwVTgzMlpOSHgyVXdvVXVDenZ1OUR6aGdOTkNQWTVsT0tKdjNDb3ZWcExHcHFnL2hQZTl5M3hUMzdNUkN5TkZ0dzdCbGxTOEswckJMU04rYlBuL0FCeXNSVldMTVNjb2NyVzNRVEdpY1laOEMzd0J4NDhGYWU0NC9SNjZYMEwvS3B1cmFyN0FubXllZkR2M0g0LzF2R1d0UDV4a0tNL3BKYXZBd0l3Z1J2Y2FleE1KclJ1amY5ZERqQ1kvVGgrWGhqWFh5bmxuenlrY0MxcEpXUFpuRWN3dDVsNWkxMjVXUnJZOGNOTU9VUzMyUVpZYnFNKzZ3by9KSEdXNUdKMno0YUpuUEovMk1FWlNPa1ZUZGNsTmpqemlrVnZVWitoaHJYQ0ZLYVVVK29ZK3oxZ3Q5UDRCYzVlcDFuWjQ0bWd1cms2Ui95dzN3MWEvTVJaT3hYMlBlR3Z6bzVMR0trenplUTBYNk83WUVxTnVaUGRMTXRJZ2UyczRjT2EzbzRvbit0c3dKekR5Si9xMG54cjdGc21Vdm1udkJlVnRWcy9WZElpZHF0b2FKbitqalU2NGFybXhkUDkxK3Y5Tk1OanQ5aEZHZ2J2bzFHREZoTXhPSVBzcFVPSElBRFFBY0k2STNXMDVKL1labHd2TmlYR0xHZjluM3lzLzg2RFpkT2NONit0RGh2VDIvblZRdHFyRE5xYVNkRGpyUE9UQWlvdjJ5aytXK2ZMYUw3dnJuaDdDZ1NVWXNKTjB5WEVXTHJwMGdPUHA5MHZnazNDZEpqM1FKeUEzNHlCMXZIVnc0Yk04bVNYT3pJanZoVTk0K1RXTkw5dnpodDlLa3hwNzJHdGdVTzU2eHp2RUVwZVhkVVhBeHlMdHZhYjNmR2p4UVo0UTFGek1sVnk2WElvRjlZUFNUWVR2NFdIQzZYK001djJQUHNSNS9ZNzZMTVJtQ0FiekVPOEhjY3RKZGR6eDFqZkV2aGVpaXJIU3V6cDR0TVhvZmZWUlZqUzJhOGQ2OHRjSEFPd2tuWk5lSFdUZzdiOE13L3owV0N0QlRQVDZDNjNpdldhU1pGWnU1eVdTYnBOZlgwbjVPaTJPS3Nhb3RRMWMzbnJobE5lVUpyZ05tQzgzN3lTRG1HVFBqenpIalJQZlhoWEJBY3VpU0FCTlp0NDRFeUVYZEUxeC8rL0NtTVN3NzJ0bmNSZGFzcXQ2dnFMMVBTSTBMRUp6N0RNTlNNc2MyKythTU5VZUJod01pSEwyelQyWnBZZk4yVWloaExzRmNrRjluTitsWFgzQTBPS0V5V3dUSENwSzhCUEhNK2luWmRoWW0rZG80K3Q0T2Y1ckpKelBTWmtqTUxyZ2FsRE42ZjhtZ0hzNWpBT2F0dFErQUJpWjBmbHo5bE56Mjc1VE9XV2JNVTE1WndOZ2l6ODI5eVdaaUFRSVdqcmVnZVhYUDJOSG95a25aejljTGNGeHpYdjF6emw5QzVzelJKUXREWmJPb1AzZEJ5Snd4bkk5TitXSXpURi8wOU5oaEtjUGMrMlN1TVlURC9UcDYxNGY1NUh5MjJVbldBbUZSZWdzNXA5OVNmOHM5YkRVd3lZNzl0VE9aK1RyK0ErR0V6SnlFVEhsanoyZitaeWprTThZRHRJemdCRmxUSVU0TzdKdm90cmIxVFZabkNTQWRMQkNiZlJIZkg5OThnOGxSN0NseEhvZWlaUmo1TDliOWNZTUlPVnZmem1HU0dCSm44cU8vY1RPSGdKYmpuVGltcFhZUE1nK3pTRXcyUmVQdlhCRU1zblp1MllWaDE3T1dqV2VpRCt0RHpNRXhrWGszb2JzVVZCOStSR0gxQzZrKzgxRi8vckwxWmNjbVRVNkZBSmdCeWhHNHIvMDRxZmFXanlpWFRTbjg5cjJ2M3RDQ2Q4Yk8zckNjUE45dHV2L0M0QUVpT2RFaFp5Q1NwNENxYVoybmt5MWIwcElqRVRaajBUNFk1b1hIaDdDUWhaK2p1TzUxM0Q3RnZKSDFHVTM4ZE9DYnJoZ3RmdlFZdkFRQk1WcExYYmpuQjkrb1AvU2pXeDhhaWdtbFgzdDFmblROaXIvMk95dEdkSlNqUFIydFRtTk8rTDZaUjhDY1ZRN3dSQ0hmVnBDZ2FLWXdCbEdmMFhSelF1TStkNkI0VG5qZU4xMmpvZXpOWENhVFM5WGtOUFlwOWZVelExNDVVeXArVDJJTVp6eGtEc056dnN5ankrdzUrVmVQS21WN1BRNWRsT04rOWU5Nk9jV0hCYlk1S0s0dDV6Q1dFRTZiYmVGcGJnejJrb1RkQm85eHlmRGFwR3QvbksyekFPOTZTbGRsZ1UvSENUNTU4N3R0SXBvcHo5bHJHUjlqbFFTdDZzSGpnTncwM1pLQmJHQjRMZER4Yi9sVDk4TDdPUE15cmt6cFU3UVRuenpPeWxIb2JyMXRuTlh2VEUyejNGQzJLNG1PdXUyMEpoZTJwY3R3M0ozd241bEVqNHY0NS9jOFlyNm54SFJmQXNsK0dKYkJRL2FZL3RRM00vYTRKTjhrME94RnkzbHVDdm1OakFXay9nc21mMHBXOVA3Y1J6ZUN0YTBPUy9MbW1QN05Jb215bHhrU2czTFQ2NWpubU9zMGNnb29vb0EzSm9neEhQTThFeUx3VmVBOFRxNVN0QUhvc0ZaVzFOL2xETi9XK2h5L0hVK092ZzJHSGM3VW5WNk1aQXRFbGk2SVQxdDkyTkJVOEsyTUgrMmgwSGREeDcvR2VQV2ZEUyt6UUNhKy9ydldjS2JnY0RRYU5sNFNWWU5EUjhJWFdPUHJRSHIwZUdPbzN4YzVzbjk2M1ZZY1ArYjlxZkV4RXBpaGxPOCtRcHQwUnovN2hBeVFCTWtTWTdmT1V5QmIvREhpdTdjd0V3Q2xjS0J0SFFraHJaUGxTeXRSQjBZblVBVnRYN2dyVC94ams2TTd6bmQ1MFVLdXpDRG5hU0dEbURLMU1uRWpSTi9ZbXpqVldZWUxSb0cvNEk1TjkyVGd1ZVVGN1YxUERMby9za1RmdmNNZngwN2ZJNEpoVTQwVDF0ejJvei9Bc0FLS0FQMjIrU0Q1WnRMTzlhZnp5Zm9qaHlmQ2VXcENnZCszUG93VFlJeEN3YWtEL2Q1cTdoUEJrRWlFejdLQWFrTHJTeUhGNkdmd2M4NTBWRVoybXV6SngvZ0U5Wm5pUUpuZ3k3WXM4dnJjNUtIbXlBNDdKdHdjcCs5ZGtrWWJma2swMmlWWlV2UkZUNzUrVDJTUDV2cldiN3pTSFJBRWt5K0ozeFZsZkdZQTkzVk96STVYRjE2ejRVZkwzeXc3ODZidjdPaHZzd0RoUUNnTE1SK3crbGQ1SXFqL0dTUG5waTBIOTJvWnNoVGQvVXRMbUhVMUdwRVliZS9PbTFrejRLYit4UGMyNDJSTlZBTmZqU3p0VDRsNVlXT29GMnZSaTM0U2pydGE4cWJMYUJYaEpQOXJqOEt0OVZrNlp3MTNXTFlxUExveGw2T2JCWjRyeGRoUFBBTktOdWVubnc3SlZWMGc3NTR2dVQ0VDJoajg2T2svL2wyc3ErcC92c3hRUGRUUm5NMFNxWWVlbkNTanZIYkJxVzZwbU1NZm8ycXMvWDZmbGZQZEt6UzN6aUc4VVgxODhXZm5QZ3UvaTcweGJxZ01MTHE3OEhQcWpnYmVPbXR0a1k4M0I3QXErWkZXbDVsbmdNeWZ4YlhOcUhzV0Y1RnhHRnhrSzNlZGduUWdEYzZaQWpUYkY2UlJKaHZBU0dyU2UzZlloNWN1ZWppUm5Rdm9LSGxPR084TXAyTFdiT2syWGNqa2xJcEVzM3F3WlByUXNySEQ5dDZkMHdqanVMWHhpVHFqWkxxTTJGKzRmcGg0NWtUZjV3QU0zMUtVVXI5S29MM3B6NEJlVXpvamdweEJFUStjQUd6R1JYZmdodW5BSmV2c0VpalhHeTlHM2pMZ1RuOE9ob21jWlhwU3RDdEhqZU4wWEZCdTVKTHZvYUZiY2owdnZjcWZ0dnJoZ2xleGxDMXhIOXJ0c0pLekxHZGZkTk1zU2FML0pCcGV2Z3lyOGZQcEJXaVNIejc0Vm5ZQnUycEN4UHZBTEkya1V0Sm5Mb0dZdHNiS1FrYWZLWHV1RlpVUG9XNTVHS1JveHpuYXFFK0x6S2w2Uzg1bHRCbndmc1dTVTA0UHVuUDZwdmh3eGJpNS83cStjNWhPNXhtRWY1L01jYnBmYlg3d2JpWU5pVHR6eTJLVXFTQjduQnJiM2dNbll5RitNRWU5M1NGQ0RzenB3OGdmMnMrQi91VndYc0tncVhISklkbjlrV3BKSk1rYU00T3lzNmU5WjVTNHZRcjB2TmtiMTVSdG1TRUNZTHdkdTJaWVFDdUxMSVhqdldYcmpmWXJ5L2tNdXJBY2NGTTdHWUhhb3RJNU1aV2pkUjcvdXVyVHYxOHZxSFkyam5mTEZNYjZ5RkxvbXF6YVhsZE8vblpZTFkza2krMWhzMXcydyt0ZDVsZDdzVENZUFhzT3gzbkdPbzIrWUcvYnZ1N2UyR0RRbVFRL3VRMENNbXFxTlJ5cTZYYjlOWm9PMHdqbEhtdXNDM0ZpNm5kZ1FyeHZwK2NCbjNZdEtQaVpPVUZYOXpVWGZWdG55N2drMy9pVXZnYmQraXZBNzRHYjNBTUs5RzBKOVN2MDA3TjFQYUo5VE9wUHNhbFBYMFNjbnhObVZnNjYzMWRwYVVzdVBYL2t3SlF6OU0yeE9HYk1aTzFpZnVKR3grdDBKT1R3MWZZOWc4Mm9NUDE5am1HeVlMMm4xZmtQYjV5K3BESEFLRVkzeUFzcURiTTlHMExHK1dWZHg2SXFzc1RzWW5lRTYvSVdnOWY5bGRLN1pqdzVzQ0R0NG5TMkRkdXVKN09sNjBBZ0Jva1QvRXhvcWg3QUFnNDhHYVl4WFp5Rzd0YmVTNDdSTEluUVgxbHplWVczUGxNbkpYc3FqQ1RkKy9iNnV4cDAzVkNXbFhCaDZteFdUR2ZzK3Znd0tScFJrK2VzWE4vYXo3QVJOdTZvdm10VDlEa1l3eVZWZFR6YmtOUjM4czZPOTFsWGw0NWJjakM5a2VNVUFWTGtGcUN5YkZuMUFQQWxabjlXRlpWRHBueTJnUUY3SGZ2ZXFFVXlBRUFJdHAzS0F2WXNFWk9TakZ2WDA3VVpkbzdEdXd6THRpME56c21wMDlEa1BUSFFHSjRxZjhhais0Ly83UXZYb3VjY3Y0QVRzZDltdWdrenVXUlhCTVB3V24vZTFvdHZZOGxrdXhrNW14dGR6a1UvZlpPRjhoSnlBYXU1ejFrbVdSS1l4WmUwTEs4anR6dFRzcGtCaUtENGJkWjJUZ2xmMWtMNUNKWmRuT3NhTkJiTUZYUzJyY3Z3eGhvZDNTRDF0dVZqZkN4OFFOYmVqSjRFSURpaGNYOGk3d21ZM1piQ2FESzNWTlJHOTJZYVBodUtxTGEya3ltQUhudzZYOUY1ejlLb21GN2VUYTdrMjNlS2FmZzdVUjlPTks4ZldFYjN2cXViQXc2SG1VMUlzblpaVEs1bHY2NGxYLzBJdFBjOU0wR1VJUFV0SUFKeldVTndXV052ajNoTStwNVdnazdnWld5dDBaRzhla0dZVTJyZitweUU4VTRZZ1pjOUtiOWQxUVBzU1FTZ1p1am9EaUNqeUVyQjF1TXRKUU5lRHZWcEhveXVaYnNUbjZGUDltTVk4TWNtZ1lBdnpNTTQyaGQvVXNvMlVBZVhmZzdxZk5kUU9BZGh2Qkp6SlhuVWlDYS9UZVRVcXV0RDFYVTNmMnEvZlM4dFc1Rm8zM25reVN3Uk5uVVQ3QVgyUUpNWHFZdXJ6emw4MHdQemxpM254blpoQjJwQTVKYTZqblArTW8rMnVtVHpac1loclF1UUJxUC9lNHlUMytrL0xhYXhaU1V4UkcxWFY0MmF5UmltdnpZRE1yV3hNeExmdFpldVp1cjdpbStPeXZsemtpQ005ajZreTdwUkR2T2szY3llM0FjUCsyR0VUY0NITStXWFdGbVh6V3pjSXh6NnB1TlpJYkJnZFBDSm80Nm9zbkh5RHRqNzVTNkVsaUxQcG9TcGhKeWpLTGlJbjhSRldCYXYzTFE3VFhRUWZ3QUhlblNCckg5eWlPaTFwYS82QlhtVW0wMkgxaXlvbGpIdk5jTk1IZjdPK3NsTDRBcmFRd01uSjBtaTJ4RzlJelFJN0hkL0xKLytIUHozL1V1Tm1iQUwvb3UvN05xU2wweGxzeWVsTjJQYU1NelpIQm9VU1dGVzVqY21MM0ZyU1RTQ1B6UFErT1N6NCswUEQrR0lPV21XTVZBdC9nbXBmckZqWkxXR0NYb3ZRdWQwamo4K2tFLzVHTTloMHNGUnVhQStodFhuWmV3YzFlajAzL0p6dlkwOG1DYWorbVkxbmtlbThWbnc4TkwveDRIa1QzVXJ6RzNiLythNzVUTHM1Ni93cVp3dDlOMHNPUkYrWjNFSnVlbWZReHRYdmV2cHJRenU0aFVKWkVjcU1haC9JRnhpMFJMV1M2YjBQWFcrQ1RzUGR6QU9qczYzeGgwbyszS0VFNGt1WXdWb0dWdHY0amEwcWZxSVdGWWsxM1E5NDBud0dzUVlxaWZudmQ5NFAzalMveWN6YzBZMDl2T2M4czZFdTloU2RESW1QeDhJM3B5VmRFdnN1N3lCdCs4UjA4cWg2VkJzTTJkcm1Eelg4b295dTl3WW52dDhVRFk3cnprYVkzQnQ3ekJKRGM1bnAzOWo4TmI5M2NOQ3krN2o4R0VtWGREcTgrc081N3dMNm1iNG8yc2d4cGphSlFpUU1Za1RtdGNoNjlER0FjZzdwaDM5SWwvblF0ajRlOEcrUnhkMlA4Q1FLWk80Z1F6VFY1OUgwd2VXWWNxYlh4NjgzZXZsSjRUMlRsWHhMNWlXRmUzNE9kMDkwM2FSNkk0OE9aZkJDQVg3WFZZSW1wMFJvQ1hqYkx5VkFlUDU1TUxxL2IzR05SQlRQM2wxWDlUYk9mU0FkV3lwZWdFTXk4bVl2Q1VDSGVGWmhrVkFJTjZWQkErMTg5LzlRaGdSdWcvZmxNaWFYSnV6M3lmR3V0MkRlRVpHQnZvcGxEM0U3c2pGMHpWRkdKcHhUOSt5T1NLVURaZVR2Y0xJYWZVdThPU2lHRW1CcUhIM1QvcHIzK2d6dzRpMzZ5bjQwVnNZQklKKzhuVGF3T1NTMVJjSWd4MmNmTVU1L1FSTXFZU0Q5K3pmcjZ3bG1Mek42bXc5YXhPRHBmYjA2Vy9sdWRrajhjNC9kUHk1TVp5dWhNMFJwK1NGSVZtM2IxNG1ueE1XOFJrY3FNZklURHc2V2pmbWhzbVNkOU9jWWdhL28xdGZMUXNNbHRsS2hwNno3eEVMdTFjS05zTzMxUEI5OVgzVkNBdjJKTStYaUtmQXA0OTlDZG85U0cxTHp5dktPSWlYUk5XZjJMbnUvSGh3N0dFck9VUE1tL1FrUXgvbWdOMGt2a1FMVFFNbjZKMXhDeHpHNlRxN3YvdnZvVVRzL1dSdFdXNUZ3bmNoV3o4bDR6M2xLYVQzTXNXYSsyVHVoTDF2UUlsVzdkNDhubGprUTNwcjZUMmkzeGF3bWJMMU9GcEEzeXdUSWs1UCtsNHpodUZvU0RWWU1hb2NyNG9mdkNwaERaLzJaaVRxWk9Bd2J1YmUwbkkyenJDSFZ3S09KbWZzcWNKbTBSOWRkSkpQbUY0SE95WXpHU3VHall2OFU2N2ROZW12ejIwZ2NrdHFIZGhqR25LVm5TNFI4OTkvQm43ckphTWNqMmIwR0JrM1kxMmdIbjdDdmR4QjIyRUI4RDZHeWJTOXBnblFWeXNpSXpNNlNSSktZVWcvWk1tVzQzaTRDdTdoWlFnaWRQVmQ5ZG9URWxkOVJIR1loUGlnSUtDK205WEp6NlorU3JKL0p6dVdsZjNycHpuckhtNXVCZzN6bzVQZW5CSjM5UEJVeU8zUXNqbnBycldIajMvKy8rTVVQSmlSbTJYc0U3eGJXVXBhSHc5MDhITTZaVGlIY3U0NGE1OVRabEQ4eXlEU0tnZmlhcmV6YWxha2RkbHZmT0NPQnhYWk8wR1dYUGNGcmRickk1Lyt5K3JHZTRMcm1uN21uU3p5N2h1U3FKR0VOZEkzNkxjdFRlS1NCYWVNUDRlbDhMQVRQVjFUMnh1ODZtL1FiQ3Fpc09IZ2xHWXp1WFJ2VXhBbEIrNDZnSzF5L3Bwem9pMkEwM0hYSjRIZkREakNoL1prUkpiNng5Y2J2NldUbjFJbjFBRllWbWJpcG5aR0RPeE1teUVVeXJnTHpLQVBCQlI3YnBXd3haSVJ2V1pvWTI5d09PQ2VielZxblZ5R2t0OElSaXlkOWdBUnlNcUFPemN1NE1BcW14bjY0TkZ2bGszUWhrY1BvWUFwMHhMelNQQ2wrLzVnMjltOTJkYW9BRzFEd29hdUplOWpwTzM2eUlIdndlQUI2QWUzdmdmYzJYN3ZncktFSFlMemhSbDNpZkJZTjZFaFRPYzJBUkpoSHlYS2pNeEd2UFdSUWRaVWE0cVBPQTE4akZZL2N5bmdydGZ4b014QXZQYllEOURwRmZzNWlVT09uOHhkU0tlLzRmR1RQemZXUEVOUUQvQklCRUZnTDh1Mjd1dW5wUEppdVJsemZSeTUreExMYTdvc1Y4N3ZNWHoxN1JQUFlUNjl2VWZvMDBZSStPUnh0aVYzTHhSbnl4Sm5TNjZueWcrZUpYRWlVUEVISFk3NTJxeUU5MlNydTdlUjlxTTZnVVdRYytxNldXUHNWTVA1dUltVTJHNDJFS1RzRFA4MTcxd252cFB3NXp0TWRDN0laRlpmWUtNZDZDUnBjK3c0TzZ2ZjBYWEtOMXE2NFJ6dUtMWmNORDdjMC9VbTFlbDk0Q3o3N2RBRWdXTzM1ZHpLa0ZWc3FXOVp6M2s1ZlBiWFQ0OFgzbzJudzBOREdHUDZ3emZNYkRnUWVFYlRXUm52VlZlZi9FaFBaNkx3VmFRdEtRMmNqWGoySllJNkxBdldmYVQ2WlRZUW13VjFHRjkrRkRRWE5NSzN2QUJqK21tWGpucDl4WVdTeTNReUVzZ2g4SGU4RGcxWjdidWp0d09TNmU5bTRSN1U0VG5uQ2JUeUxnMUFmajc1VEFZVk1GMXdqVDM1cDkvbjZSRXNRM01HbEovQUovZHNOSnU3OEdmZmVFMnR4bDRjWk05bTNWdEo3ajZuMXNsZWhaUC95T2F6MmZmTVVBR2M3Y21tZjk1ZVI4dytGYVZBZVMvU045VVB5TDIvVHBBZE4xMEYxL2NDcmwwbHdoazNTWmVONXhSRTk3amcwK1lrQnlnQklwRzh5ZXE4NVVMRW5uSnlSekE5MjZrMEZ2UU1zNVFVekgxV3pzVVZTWlBBeS9ob2N0dzVzbjcxU0taM1FjWkFMT2RZeGk4UWlNd0tmZ0pGTnI4M3dPOXNKdU5jOXlZTFBHUlVEUGdabHV0N1RhTGZJUkgzUWRXMWdDcURabFpnZWoxa2N3aGdiOW02K3pTdDMrWCtQaTNiYkVpaHd1QUJ2TllaQjdEWG51L0lWQmM0VDVLYldRdktZRTBWV2NERE5tZmxqSFBTR1gzakJndGpkR2k4VHErK3N2K3htR005MlVVemdiTDhOVWZmbkVYZmtJLzMxVVgrZlRDV2xVdWF5T09uWjVNbEZpTEl2citQSW9FT296NGlxZHExNXdqSHEzTmpvejNkaHJlcXVQZ3VlNks2aU43ZE1JQ0UvVDNkU0FGMnpzclFxWFRGbkZKT080QjJLSytUNXFvQ0oydmZKOEs3S0tkM2Q5SSthM240NUlPMVhRNlpNYmRzT0s5ajdiUHJkQzRBalMyYjYzcDZhNXVGdDhUZU5ZTmN1RjEvN2ppWDREa0hqam5odjlxdzNMeW5NNG1jWHpDTW8vVnVDZHUxWXEzRHV1RFJFYTBaRHI4eTIxeC9DbTZEeUJLUkRMUVNSUk5EaGYvSHRjNklEcHpvMjQzRXhQb1pjczRacEFUdW1RM2owT0V6TlR1LzAvaGp4SlFjK05UWDNheVlGaUJ1NlFCNUdaY2g3M1VHWnJxbWY3aUFYZWVOU0laSDV6bzRiQmwwc2lidmRYejlDMXoyWEpMUW5lenVtWG1MQTdRRmJESnFFNldraGxrVlFYbnVuZXEwMU9IZDBBaXlzVE05TUZ0ajNMOHNrR0dUV0p0aGJIeXhSa1VOSGdyZkJGNzZUVkNESEUwVFFzR0JSdmF0VGZFUURNdkdKenhhQkhldDRWUUJsU1hvMVUvaUVtU0NidHQ1VS93UlNFWkN5T01nTWo0QnEyNW45YzBYRVI0ODc5cU1telB2QTZIRDd5dXVWQTlyK283bUNUNytSYmJrMmJVazgrY3dJTlBjZUQwNUZmNXorbjE1NGJJQmZNNGJMVHB0Wnc3WDNmbFYvWDdLS2poek9GTFh1UFNmYk56b0JiQ1hRRVg2ektHdUh4bk5FR1NmckgraXVlZ1NXT0dzWlVQMUV6WklHeHZ6QU9mY2VpN1FsQTF0Y2hrbW00NTh3QWFJSkhxTjNwcTd6RWtnSG84V2JyQ1pRUVlpQ3FyQU16TTR1c00xU2JZemZET2hjVHdMb3Y2eDBmZml3TTlYN3pMNzRCYWdDbDljUWRmeE5EbHczeHlwYTFqZmZuaXEwL2Z2di84ZWRuSzIyUWhqY3VlWDZEWXI4YzN3S016VTBtSDZYdWRvTFZQYjY1K2ljMVlObWdkUVJFK085NmV2NFJmc0ZJemVibEFRZ0RTbGdibHQ3TExpNmI4dkE4aGkyVUtOOXd2TWhOWjhrMkJ3NFNEMndHNVRnWWN1WGJ0bnlQbXZ3ZXlaWTJHZ29SK3pXSjQ4MXFVenh0Njh0cGF2Z3h1VEdKOCtmbHVabkdSWVVkaEVvSi94MTA3Zjd1YWZoQjVQZUE4dUgzUThNdkR0cWZXV09LbWxKTWk2ZUkyTDdwd0NaT1grYlNtSEVob1ZZeFA2SW1UczNUZ2QvUlQvQmZRTXZPbnA0bTU3ZXI5TFFsNXlBMDRmT29leVdUclFNM2U2MEZyNnhnUGJIUERRVmhjQU9EZ3Axbk1pNmhwZWZyNlhFRDREaDNHVDdkRzNVSkFkN1NlQWFBckpoRFhHZm0vamZlaHVMTzVtNW42VDFpaGFyOGV1dGJ1QWIwbHJGaXg1VW43THB3QjZ2a2RadW4vOTZ6dFVYWVQ2SXBtbDVBSWhBMitaSU9ReXJjSFRCZE15MXF5S2RSL3NNQUxCcmgycmNRUmpPUGo2T1VVd05odmoreFQxampsdFZodVJ6YjNQZ0F2WWh3VnRpaWV2cFdZR240Z244Mi9iaS80U2gxM2hnNXZjQmV5d3dFL1daa0FFN1A5QXFPMnFodWJUaWI2WDlwMGwwWi9sYmxqSVdOTGk2MUFTc212amZPYis1alpFVzQzZ2VwS2thekZINmtqOEEyeEJBYUxDcWV1dm5tbzlnM2xnMHJlSjhxenhqVXovZ25CSTdFNG9QVVBWWmNva243UE1PTzBPM0tydlJSb1Y0aHZ1NGk0NUhzZk9KeHMzODhhRk9QSjBlYVhUbitiYk5TWVZTeXBPRE52c2krYVdsZnJvem9Fdkxvbko1dE5CTnNrM2M5VGZwd0dXVDB2d1NITW91YnQydGRyWU5NejJGdzhaWndoaEphVkVndWN1OUh0MG4rSjhsWU5vNmUzanVKcTNQdGE1UmZ1eTZqTHJBbVJYMVVvNTBDNkljc25zV0J5OVVVYnVTZDk1emxtbnJCUGVHbER1Qk1YdDRYRnhpQmYvbzdQRTNXZlZqME1qMzcwQVIvSkljcHd2ZWQ0a3VxVlVIelh2N0tWcDJoSnV0cnAyU1lKdFp5MWhUOUFPdzlBTUwrajhkWTl5YnRhLzlrMXZmR3dCWjd1cFpMMUxNRHJYeXVFTWpGazF5Ukd6YjRFay81UWU0RnRpQUdmc0dXVlNDTVFyNEJXSTd3SW8reHZ2bFV1V3dadDEwRWN6K2FPVkRZVGhlMmJLT0JpSnMzTnZIUGVXWlZ5Ti9TY0IvY1pIaWU1cXdyNVhPcFJIN2ZEZUduMzl0NE5CZ2MvMXhzelNNc1hya1dCMm12WG9mUVAxcHRYTDZScjRQbWhrR3h0dmRyR3ZObHQySkpla3Z3d2E1dkhVZnhmRHhtOUdWMGwvSzhCQTFibmdrcjlzeVhFVnZCZ0ExREFybE0wRXdPcTdoNHJyM3R2TXdUUEZ4czBHZ3FzRHdRWFBFcWJPbVovTVpVajY5MWtFSG1VUHlTd1R6MUpIUkFYUFpuRmtNbXhMMmZpVDhXVDRjRXVWNTMrcGZ4TEkxNU42K1l6bW5iVjdqdlJzL1Rsbk9tRHJHTTYyUXBMMGtvUy9KR0RsZFU4TjhnTTJ1cE9ielpHOFNia0xmN2d2TWVzbldTQTZSdGY3dmlnM2h6V01jTXpCQU9MdVRmUzdUNkZaN3pFVDh1Zmoxa0ZyNUxhYzFzWEhwZ1hDWHpMWWhaemkxblZQVUFlS3dBRTgwRnVTMGdYb09admJ2SzRjVHZXQU93R1cwbVVoT1FCMHZMTEhhMUlLWnM2NjVhTmVkdVpRR1Frb09yK3d1ZitBWFZDdDcvZkUrL2w5bCtpbWc4NksrcWZOdHE0WEFuRmpPNldqWURSMjIvN3IyeXJ6OUYvUDJmM2FCWDUrQlVnQWJpazVtemhPMTE5SzBKbEdsYXBSSDdBdGJiV0VpV0d5UkxhaTRRUlR6L2UxTm00M1VsWVN1N0hKY0IwNi9TNldwT3dDWEkwVytFenE4UkM2d29Gejk0RFlDZDJzTFd1VGJRVGZQVEtQdTRDOHRoamJuN3JZTmVQOWkyNVRWY0F3Mi82Zm51QnNac1lTWUtEUlBjR2pCWVo0YnFQUllDVHFrejlTWTJiQTBtZnM3TjR5eFVjVEhDRkY1Sm14cUlDazdhSmFWd1RxNzFJQzVKU2Ivbk9laEhDUnRZVjl1UEZNempCUGdhZ0lCdDdkZHp6anJ5NkxqYkkvTHVPY2NSNUFta1dqQ1JNc01ISnd5RGNMR0dnMmhHcjlaK1RJNG84TVErVzkrejdlUjhiRVpHUExscy8zWnhlblNwN3BrQlFSWlorL3FyMGtyUC9qQzg1RkYvUWxIMzBwNWZpVnpteSt3aDRvSTNyOHBKL09uVmR2L0ZuK0x2a2FHNWlJem9BMFRVR2dKMWRnT0M2WWkrcGtMZnM0NWxWTnAvcHJQT2RwTHplcW9IMjMxaVFzR3pzRGJBN0ErRDcvbWNNYk8xa0NPc0p3UHM2cU9kM0pOS1M4dEFlQ0l4NG5QN3duSk1MYVAzcWt3YmJaczJ0VGpTbHhtdnNNenNtdlBhZjU2RXlXQnFmNzF3UkJNSlpkVng5SFRDVGZUbVp5eC9mb2VTMlovTmVJL0hCenlWUk52RFZWdHVFNUlTblorbnNYYzQ2cmgrN2w5djRxczI4YXhTQm9jb0dqWmRPdkxlakpDZkFMNUowSnJ3M3Zoc0d1aTc1cmsvN0NQWG4wQ2dZYU9LUGNheGlSSy9nN09jeTBhMFQzWFB2UXd2Wis4bmZKSVJsT0h1NHRMMXRTVHRkWm1xM3hMa25ZRW83OTRpZWRFU3loR1BSQmRlaUg1NTExOFVQK3pKVmhIWHRzTEZIdThWRjZ0Ti9zaXU4WmptSWdJZ2VpWXc0My9UWmIwR0hHTG9oMlFQYm5ubjhKV29ZV2hUa3dtY0JNZFdPYmpZOFcrb3d5ZU11T1owT1YzVFRSQTBNT1hjRHdrSVZKOVpubWZsbDBTMng4L0dLY2tWNnJuL0lOb25QOS9mTzVqUHNDUHk5UnVwUEwxamN4MzhEcFo5bGtab2ViVk9Yek5hRkpFWFErdWdCVWlTSUZrVzUyZDU0OGpJR0Y5T1NkajVNK0haM3VkZXRnQW1vbndYc01BV1I4R2UrM1R6bWNBejlHZld5eHJPbG44V3ExQnljZU1xOC9nbUQwU3Y0Rlo3Ti9mY1oyRjV3TXM4bmZ0dVY0dTVOSmNIZDdsRVJmMW1xSGFUQTZ6MHcra0ozS3MxVmZQZm1qaElGRHc3WFg4SVZadS83TkJuWm9KMmMzZ21nNjZQSFB1L2hFWS85dmk1cGtjdllTS3hsMnFNTUFmMlA0dnZaWS80TkwwdUo3NUdycy9vekIwWS9RNElVRzRMdVFBU2l6SE12ayt1Y0FSdldhZ29RQk9KQkp1SEVHQ2RBOUdwQUphR1ZmMElPU1BZd2UxTk9yNytlV3VtdFBOM0RSNDhjYmtGMXI0SnlocktyK1Buc3pEaG0yc1RiNk1ScWx6bmhnbjcxcm8rZFE4a2UwTnMydjNzemZrSkJQMzdTUWNySWlyUFpIUG13Mk1wN2tGb2FQVCtEMnZZTEQwV0IwWW9LZDZmbEk1dDlTTVltOVVZT0I4azhtTEhEbjNGaEhLaHNtRGF6b3YvMXp3NVNpb0FBQUkrbEpSRUZVZjYzNWxPb3pESXoxK1RLV1locW1aWDNIU3llYU84NVFBczY1ajc1SGhwbDhyeWlhUFROS3dpVDFML0hUZXoya3dNSWVkYTBvVCt6T3JqVmJmbzV3T0JiSUFWN25mSUxsZExQbkJQRFZLd3FsWXNhbzczbFpNMTBkeldaQks0M3k5dDAxcjJ2VDdNL3Rzc293d1FmaWlMOStqNlcrUlRoeFc5SjBNVjMwM1ZQa2tJTVR6R2JFci8zV0x0Y1E2VkZFcHh6eFh0REoyMUI5Ny9uY2JtcjdPeUwzTDVNOEZialA0VytaU2tnSUtVL25NUjVJcytZNm1ranc1d1M4WFN3ZUZRM1RaVGFYZUV2MUFyTVBwSkpZVXMzbVF6TzZxOUoxL3JBUjJOSXRzeHU4NzRVOVFhQ2s0NjRSbmQzdFM5NThRZTFtZFg2eVFFbndmWU9UREJ1WitLdzgrSWVoTUVDVDRhYVFwYVJDVG4zVTdYdFkxMlhreXZoN282QkFmb3pCbzl1SStvUVJ4eDNQUUdQdkdyb3BtODd0bnVwSGJ6YVJpWFhtcm5KT2FUQUN5MTRYOFkzZkdvellMTjZzbVpyc2VmaGd2Qm1lRExNWkVuTFVjc1RoUE1mQ3MwYzJHMFhaOGNHeWhnNFNKdE5NZTh1cDIvdGp4OWt6aCt6dnBwdzgvT3dUSkxqbWQ2STdwajhNVUQ2T0ZiK0xLTWVlNmcwRzN2bHhWRUNPc2o3ZEQwZ3p4dFNUQjRDWUxjcmFCRTg2UjcvbFpoSER5TFBtcG4xVWtvTXpmQ0ZOTm5LY2Y1dEtGdUFvdC9WTXhCeWNmUDdoOUJmYnRydGhpUFVKYmc3SFM4OTB3Y2lzem82NjJVTDZnampHK0I5NkpuRG1MS2p2RWtEaXFjK05EYlhzN0dMZWpyTStQT1NkUDhmWkcvUkdUdDdSc0p0MXZZeGZwcUE5NGRwaklVbnQ3U2Vyd3UzanlZRjNZYjUrRm1vRGk0ZDUyTzlDL2pEanB6VFp6blBvaE42MTRKeUd4OE0vVHJ4WjlCbzliTEtkRTkxandFb2ZYWHNuczJFMDFEekJ0YytQWmRkTDQ2K2VjWVZGTUljTFlPTmxzRURkdUVDK0t0YXpRQjU5L1FUYW5zTlR1YVdYYjhKU0h3d1haS1A4d25aMXF1NUZCdnA4OTB4cmd6cTlwQnVES1lwbzdSaW5PTG81dkNhMGFOWisrSGNSZjNuclEwTjVQeDk1SUZ6UDliMDNueStOVWFiWkF0OFVENmoxSDViaGVUWVhrNHRMQUd4TWNNTGRhWUdvTXA0TDZvZi9XQkJOUHB2ZkFJeVhsQ3AwbWNFdnJqbTRNY0Z1cU9ObXRNYitzOXZUWnl2TWt5dWQ1c2NhN3dxeXBCVnNRcFJuTnRIZERCRkp2YWY0UTlTZWVSbGk4RUg1R1NPamJ1MDMwOTZMNHg5NTV4dys0dHg3OUU0M3VVLzJmT1RlbEgxeTVWVTNremE3Sk1pYzNhbHlUd0VTL1BBejRNUExqbTBtMlBPRXZuRm1LRERQOEJ5aWtML2FkYTRQTVRzUThzRktCbThEd3gzWHcyV1ROOXA2eVQ0Zi9lOUVsOURYMTN2RkpMamFvL3lUMUZPMzZVMTVtbVQ3UlJRQTRNVTZac0NyeTlvcGhnb3RpYUx6dVVoeHc3RFNYQm4zNkRadHRSL3ZDR2FObzJrSGM5UTcwYmdoc2l3RnU1K3AvbUpJOVVjT0RyTEpuVXdkQmNWc0xaMlgwVUM5TjM1SGY3Z2luSzdaRWYvWnZCUWE1b2w2TU8rcGNSMnd3ZkVlZDkzUWxteWVITHd6Nk5FUnJabU9QcVRoMEg5anQ2RTYyMkZJYzBUM013OVFwbHpVYXpWR0dEY3orTmIxK3Z0SnhkRytPMC9rMGQ2amp3Mjk2T3UvTVZ5dDVCcXIzUXlMVWFsdm1CL3dNNWlPaHBmSk0vUm9nWjhybnlYbEJKeU0zWnZzL3NRZktFUFg4bWQ5WDhBdWNCTHZMcnlYUUpRMHZNSk91dDl6SGo0cEJOVS96TkcvaWJ4a2FJamRyT092TzlKTlp2SmNqdThtL0lJei95VnJTZlBZWjlLMGVQVDBjMzhDVCswUlVFMjU1ZWU4L1c0SkdiSnA5VTVwUXRmaExIRHV0dU9CWkFvQmhNWUlvKzhNaUl6ZGpKeTVhQjZ5MmtmMmQ5Wkg3MEk3WExia2QvOUQ5UDlXcUIwTkI1R1hMQlU2SHNkZXBrN2R2VkgySEU0blVnYS9lSS9zc0o0MlM4NDdLNWU4cDZ5RXZWdUlDY2tmYkhvZnZkQnYxemc3VW5JcnhzMmNDNm9OVVJ4dWZFUjcwejBMajVBLzM4eGdrUFpsaDE4ZDNvd1o0SFBhVVp3eG16blBMa29BTGdpVEVFQUJ2Z3djZGNETzlDbTRMbjA1M0t4NDEvaGxZeVREaU45Um05NWNIVFo2Sk5VaGVmRzgyMW8zaXRNVEg0NDNNVjU2eVpTUS9KQlU5Wlh0ZXA2YUFJU3BwUGdFSnZyTll1ZjQzc1JiYlBaR0pBOVhwdmRrOE90UU4vYnF2OW1XYXJTQW1GUFd3aXVnMXljZ0hVQ1F3UWdLNXZETnhRSVVBK281ZW81NWcwaWwvdU1qenBRZU9DQWZXZmNkV3dZOWp4TkdIMjlMekRMcTBTK3JKdXlrYm5hOTY3M2xnTHVsVjlVRmtZRmE1eEM5eVpSSUN4cHMwZVUwZnZxVGdJL3poaEx2akI3V09SdFgySDNjK3diaXRaczl6eVM1TWZoNVY0QVZQajcyVlUyQ1BWYUpENi9ELzdycU0zV1BQKzZQUWM3b0JzYmYyenUxUkgvZzBuQWdLWEhSN0lsbVF2UlJzUC91UEc2dUkrY2NRQ1NGYnhZOEpQVzl0UWRwemV0aW5NL2xyMy9Pb0xLMnJ1T3JuazR5dCtYbDNHSW1iQjhwRVpwUldQV3BreVhUSjZqZWpXZWZKWGszbitoSFExakhJS1JMN21ZbmZaRjAzQ1puQk1sWjRPdTNYUE1IZS9mVjFzNTdwZk53b09rN3YvUDcwdWg0dysrN0JqU00rVEtRb3FRbThJeGlCS2NPd1l3NVJ6ZWNHa0laWi9tUXBRNjhUdHNJekRzY3g1RUM1c3NERjBnU1p1ejBuelBTOGdITkJWTmIzM1JxNk92OWMwK2lSNFJXbURLdXlWRHo4OWtWaWxZZGdualhQRXl5MHZ2Vjc3M1dkRjMvell3UTFEZW5Rek1HV0liczNqZCsrbkRpNDROaDN1eldlMWg5dTk1dTdQVXRLUzhtWVorVFBwQVNoRzNMUVFaT2VRQmtrci9Vb0FNVWZqaGZuRG4zZDZrNHUyd3pSaUJaYy9nNTQrQlArdVJJQW5yY1Yyd05wOWV4TitjcVV3VG1Id09QTm1tTjQvZENobmtzenMwVlhmYzhEdVphL1JDOWFUUUdHZG9ycGpkUXhzLzVDR1h6bmJlc0VkNnh2MHE2WFp1bG5JOFFXY3J1RzR1UzFPelFuc2FwUGw5dTFZa1c3Z0ZDRWY5ODBYV3U2V0ZteGdoOWpaMVVnVy9zbGdSTFZTYTlnNEZRSmlqckFGamR2VVJNbDBuSGF3WnFrNzFaTS9CYTkxS1R4ZmZDanY4UEQ5NDMwOTdsaDdUSkROKytaaFArMDBBbUo5NmppczM2NlR1bjdRa3czdUduNTY2WkMxYWN3d0RyOERyRGZNbTRwZXJSK3k1YkVRQmM3OWtUNnVGYXd1VHdiVFR4OURwa3ZZZnRQbnl6M0QvMGFLcXp2VDRaSGVFeTljbVl2d2dZc1VjQmo1TUlYcFFIK2dRRkM4ZkFNY0FuWXlBSzlBQ2thQmxRM0hlRHQ4eUpibE82TWVPY3VBZUlISFh5MERaUWx0OFh3c2xHUzdaQW4yTmtJUnh5aTFNdkVYYTJTZmxzSk9oN0ErUGJKT2ZJdSt1djNpeGQxekwzOVB4anFpZHhldnl4WUJvaS9iZC9QWEYzN2JVbFEzMFh6TlBSMUFBSXl2SFB2dnlvdzhjS3R1S1c3L3VtUGwzb3Rsamx1NGR0Vi96RUdyTVdyejlLdFhQUXpZUlR6T0dQb0p4UDRhdCtIKzAyek5uTDdsMVlJczQyY3BiWjF3ejMzYmpaN2VpMzB4cTRlNXNCUjMvWE1qcmZ0ZFpGMzVJd0pJekhNemtSTVNMOUFya3F2UUFvZUR4QkZsQy9sZFdMbk5tWWpNbnBmTUd1YmZXb0xWa21MQkhET21Fd20yVnBnV0ZHSWw5dFowbnBtcmN2L3VHSkxzMkhoajd5ZzNiZkhXZ0VjeitCT2hBalpjVnJ5WlFzREtSOUZPUFp2VUFLM2pYZGVOREhhM3pHalV0dzNpMDF4N3k2THN2M3FINzZ5YmNNMmZrbEo3cXR0VmdxZS80emJKYW9YdlZyZnU0eGFFK09Qa2FoNFZnZCt0ZmQyMlpUR2ZxanI1aktiZzY2TGZEUnpJNnEyM3JIejQ3M08xeVRZVFlsZTQ2YjNLZE9FYjZhZ3JZbGFRd1gxUFhCTTBoSjJBckJqbVpNeTc2Z054bmlYcEVGbDNWTTBzc1laenI3cVg1S3RHU204WGNaZUhFaHZrQllyb1RuTW1CdVNwZkE2RDM2QXlLYnlkKzFMQjB2TGVSYUsrK0NqSTRPblJQaVJBZm5uM0dHdGx4T0V0cTcrUjFkRXZIUHBYZzY0SndYNEV2R084N2lyVDZkTFRVY3gvWTlLTVZYMC9YZ1o3UDFoK1dWcGhMSlFmOHUrSG9UUWdmOXUrYkZjNjlwalRhaWRKaHQzWWNjMkpwVFNLblhhL0JsVnEzSCtDMHZHMzkyWGRVbkRsaE1uY2pnbzdjZlFGVDNpTHl6ekVCT0prTjd2Y0ZGNTNoNU9FU0pZcjlIRCs4aDdIMFpkbkt1YjZrM1BjTVFKWHIzUjF2ZUdCelBiR3paSXBWalFQYzJmSjIxOVROaTkyaTF0L3lGOTczdWpTVzJ5UXZicmczSk8zK2RQVVJNbDhUZXpJQlNzcHhSOUJpL1JFcWR1bzZ0TW9CaWdxT1hDSnRHbS9LMTk0eW04N3VHYzR1TExHcHFiaDNXY2RudXp5aE50alJLTmptYmx2NUdsVm1Tc1FNYnh6MzJlUFFtand4bHJOakpoTWVYOG1wZkJqZStnT0xYeDNraFh5Yms2TWIwVDBmNjUrRGFLNDFCVGZMUU0yUzBkZUZ6U3QrUVBManJtZU9XNGUrNDI0QjA3b09wc2g2ZmdtL0hJMnZZcXU5aFpycjh5c0hmdEhUcVliVjBHZk9nTFNnYzJVZVF6MGVuMGF5OEgwbHlCcU8vOXUrc01lNzd2V1lBb3llNHpzNlhNUlNsSktQODZvSU1wTmFEUVNBZGhNeVIxUkl6M2tTRjczSHFSVDJxY3poTFpneGQwM1BMcHFSWU1CYUYrR3ZUZFptWjNuVGZ2Y0d6UlU4aWl1bjNubkpmTVdVVDBhK0Rwa1lyTDhKN0FlWWpmZmRIRGk0UmtsZWZiSi9NRTVJc2R0L0gwUmRNZENYblp6eTdzSFNZQkplS1JFU3dMUHc0OXh4MlRqNkczbWNDemJhazkzampPdEhkakFEOG5uamVkRDZuczVKQm01Nm01TEpacHZiS0FaY1FsazliMVhQVlRIdXlmczVsOFNFWVh2cm9YU0E1V0VMVmgzYTd4dXJiNGVDaUEzdGxnWnZqT1FEOURkeHE4RGlWN0dqeEhFVkIxYkZlQXhmc2NjNzJYQ21UWUhkR3N1ZFordnhjWUl3VGM4a1pEVG1QL2t4MURURTFMM3NKZVoyNGl4TGlFR0d5dm1VNk5WT2FSKy9pbGhSZk9Gai9KRkVDNWpuYXpOZ3VhRjc3M1I2K1FLNCtVK2FjWGZ6UW1UWGpwTlA0NDVScVo5TFIzRXdRMDlwa29aM1JPS3ByMWo5NTBkeGdlQTEweElWZzQyeS9aTEtzYmRoNzQvVkh2a3ptcUxJY3BrdUFXODVPVDh0Vy9idTJ4TU1XZEF2dUorbm9jOUVuMWt3MzB5emJsOFRPWnBrTlJuS2VDS1YwZjdJb0prdkttMkduRkZTSzBKTHEybklmTWdFekI4MHdnNk40bEwydHp1bFJ6T2dEWEFXZ2NheHpnTFJIQTVkS05LWjZwL0ZkcHYvQnNzQXhLQnpuc0dhbmJYTnk3dVpOaUhQc1pKelJqRmNnbW1VZkc5Wk5VZloxMUlRSDFTMno4T3FKNjBSME91ZWpoMUZ4WHVDZWp1TjVscW5HK0dJM3ZhTmVFS2ljc3ZQd0FEM2J0Z1lFNHlKSk1nRW5zblI1NElnb1F6dmkzZG82NGQ0RXk3VWlta3lDNmVWbjRwNTVHUzlERkpsa2lhTUhvZ3Z1WTl5SE43MlBIMGExeGxUWGZ3NmhEdzR5OW9qazZaL2N6ZlIwRyt0Z24yeVVnTXZrUUw3Snh0SzdyeUVSTENBb040UDBYZnNTNGZDamM4dHdYNkE3MnhtK3dEOHpZamVXK1d3ZlVDVm4rdGkreDA1bURIU0MwOXVXSjFGN3A5aUUzVklHekw2TkI4cThHLzJMTVY2S3Jmc0R5b0RHQmxBOVpRTmVYVG4rTTB5Ym1jcW0rN2dDRlRBU0ZzVFFIZFdkMzc0dEkxU2pUS0ZBcU0vSk5pVCs5Vkw5c055c3NmU1laWnprZlBUazNMZ0VlTzA3bnNQbVBUd0NzcUJRMkFGZjdUM1NxVTd2Y0ppWmttdlk2SEtkSlNMSFkxT2E0bWp1NHY5Z3J2dHdKWXNnQXQrMWVNNmRVdHhXVzA4d1BjdVg3UWQ2THN1d1RiMW92QVFXa2prVXY5bFUxOEJ1TmhsRkIxb0V5YnFDNTArV0d4dDdPdW1iekFMK1dSTHEyclR1YlBpMjBtY3UzZnVxWmdPM1JBb1dIR2FGNjV6NnlTVDdnc0ZmcHg4ZU11WEVrclMyWDA4YlBoamo3UlFCZjkxSENlU1lIU3RrOGtzTmNyN3VyemZVcW40Zk94UVluMXd1S1I0N1Y3OGtNVnNYRUJ3em5wU09SYTlCZ2hndlVZR2lTWGJOa1BFY2ptY2lnekVIekpnakg3QlQzWEF5Z2t6c0FuMHpRNGc2MHJ2blUva1dqWklxTE5PNUcxTFQybXljSE00NUpac1o1Q1pqOXpUVDhHQ3UvaTVMa3p2UitDYjRzdmhObVBvV0REWU9BTjJQbnVUY0xJdDFLOG5Oc25yM2Voa3VOVzdaNXp1em12MkRPa2ZtMDFmM1IvYTBSYlV4aGh6Um9sMzNua0krMnpla25MVkEwSnF3emFicXNpU1ZqVlA2WkRUYUlKSjVLQzc3OEhDcSs1TXFKSDNLT1pTT0p4azZjemJjUTBsV0JaMGc3anNBbmRYcmljNkJOTGtDQm9Ob2trZlRIRDRqUi92eUkzbmw0a0hxdEFla0NhVFdBY2F1YzBtamFBRisrbzlKOTlFYk94a0N1QlNJMzVlcytlVjVKZFRZU2IremQ3TENlMHVSUnRWTnA4dGM1QWxsekdrWWkvcU1EY0FneEFSRWl3S1BqV2I4bzd2TW1Pem9UMko5NlB2b3R4WFdVRHFlS1I5bzMzZ2Y2UXlFNE1iMHZVOExNTTNwalFyU2NCNjZOb0JkT0xkaHlNUjRYbk1YTlByQzVka1RKV1NlRlk5TjZWZjBvOXU1K21ZOFlkdmlqV0o4eUtZQkxkWUZtSDJYdEpjWXRWODZDY2xrSFJMVVJ4dlR5ZmY1c2Z1V3JVdmJuZEMzMTdnMWxvRzR4ZTFGdDhjRW1YbEtrdXNSZW9Bd0FMQlppVWVtMUx1K3N2YSt4SkRoT2Y4Q0NsT09PUi9NYURvMkd3TTc1eStGVHhaVURPRjh4WGt2em9DR1lXNGNBakQ1dzRPSGM0NkxPTHVkMjBXZHZPbkQveFM4YXoxTDQ5M2tXalc2aXljbmZUdGdTUGFidlBkWmVuMWdkTHgrV2lPSlcxN2oyY3d3Q2FxL1dpY1AvbzR1RjVZQW4rK21xQTduTFJjVTZxTUE4NFJvRTlPeG1XRTMwOC9TUXpCdU4zRmI0bFBJWFpNNTl4MHdNcFh2UFg2NWgzYmtrM2xKSUppV0ZlVjloRE9uNHFOdkdKdGxzQkNHdC9JdWFXcy96akp5UisvMWJhYkltb0pPei9HeStha25EbDdYVVh6N1l3SmpOYXR0YVc5R0dsUDQwWXlBUy8yY2U3UDZkcWQwUm1NTXcxOVk1K2ZHVHA4dHNDODUxQ0dhblk2MkNxRks3aStiN3RxZ2Iwc1RnYnR2Y0ZGN2dqQjZ3VG8rb084QzZORUVRY2xvUG5OWVd2cXhUTXJjdG4vcW5JT3VNb2ZWTjNjd3dtelpFdE5nOGllQm5LejNBbnFRcWpOd1N3RG5SZ3NOVEpvLy9OdUsvUTFlTXRuMExJV24xSHVGTEk1UFBuNVRDdk9XbWV2ZmhnZXBGU0JzRWU2MTYwcDg3NHlaM3NlcWZYRlFnQk83clh1VnU5Z1R4UDkzVDViS2xyU0V2dG0zYUFlQUE0RDVPd2ljK1RyamR6U1kxMDZnTTlwekFSVVYzbWprY2FIR2lpWGpkOHZja2hQbkNYM0k2U2pJMTFxV0RzTms1WmNjK1Q2Z0cydVlZQ2VDUTJRYVlINHpkOVkvT3JGLzN6K1d0QkxjclB2elVQUWNCZkNXN21oZmU3RGZyMEFMam1YTFl4OTFXTTQvYUU2dDVPUm9nWk9Ha2hLMkRnQldUM0puc3BZNGpRNzdGSUxzT3RMK25IT2tRWFFqbm9DWGVBb2FmUUtFeGxyOXJ0T0Y4NkVrNDhvN0JXOTdxbTlxTzEwZ3YzbFNYTjhDbUx6c0dGQy9pa2IrbkQ0SEc4dEFHSHA1QW5BNE1SMm04YUxSc2NiRG55QlFkVzAydWpaVWw0MTdORlRqWFJaVCtEanY2QzFOYklCbFFTNjdCVWIyejJtQ085bEQxVXlKZGhQSk5tWFRhYlBIRElKaHhMMk5iZ0UxcytJZHRnSTJ1UWpEdDUvbnVqREFkVkxqZFlDTytXWkFnd002TlZVRjQzR0dyaDAzUnB2WE9aQ2gxOUovcmpwWlczK1BzUTRpOEVTZkdEcVY2WllRUm5PTzVXK1pXdTJLOHhnb1dxYitiQlphbG9pNG0wRmNKMzEzOG9JZkxYV1RBcDk2RE02V0pobi9IOHZKRXZBMEdjdXp4L2Zna3pDVE1RZ3RzWDAwSEh0eUNOelBtSWUvUGlqTTZGY3ZuUUp2MWkydXB2SFdRTG9hZUMvU2tIbmR0dlFjV2pBL3RCdTNHNGtQditNeSttakpZZ3hjamtOM2loZk1oSkdON0VaTisyVFZmektmNE5VZ2tZamYrMldZZE5XM2I3ZE14OG1janB4bE50L25OL0ZYMzVOVi9QRXM0NnVULzduRG5zNmN0TFc4aHNHRUVjMDM2OUQ5NkpMcFcwVW9mUHB5eTZWbTl0NVRnY2I2Y2R4U3hnODZkT1ZqdU5Uck8weEgvdlY5SHJPMUdJaW9SQkwxZnIrdVBuSUlFVUVGeGdXdTNnbmZORFh1UXZud1Buem9Ed0FRQjJTQmk4NlpMTUJrNzc0SldXWnYyby9ybHBuUGNobE5XdWJ3KzdNZXR5UzRwbTM5ZjdFU1NDcmdGWHB2aHFaUHdHUmlRKzhGK0Z6cHNjdmh2L05oT2p1SnVtVFIvcFJYYm1PZjVTZ1o3OGU5TDZtenJmYUw1dzNNNU1CY1pmZ2t0YzV6NnJOVjJ6b2RTVUpNNlNPMmRxc3g3bW9UbW5FTUhPaWxFcVlMM052L0ttL2tsQ2J6czdicUkzTm5TNFNuc0xhV1lGMnZrd3hia1MxeVlsTzdlbU56MEJ6TTJVLzd3WHAyWFRCR3Q3UW1xWkdJMGQ5RituVVdQWC9HME1CdlVaN3NZL1UrZEdzT202U05Mb2UrL0pOVW4zNGs4MFA2MUYvNzlRbms1R3lOeTlaN0pNQVpEQXBra2R5em1yTjJDdEJNSUdsUC82MnhNaHpnNC8zV0w4aWJmcStpVGN1Y2NNc1NHYStqT2VNeS9YWE03Z21HekJUT1FSMit5TDNkU0hwOStyWXRaOER2SW5pR0ptbTBXRG50M2YwMHV0bCtBYzdRalQxellVbDN6b2tzZWVPdXF2Szh3MUFoLzdWL1dPdmJIeGdJeDQzZGpKTW84a1haTnpISnJUNi9kYlk4NHRpRFd2Ym9zMXozVW1abjFSNWdicExVOVVoVDI3VkF4RThwSUJzV01OeXpnRWFDVHppU0c3cTJNWHk3S3paV0ppd0laZlBrRVlpbW9WMm95YTdydHJYUHQvb1d0SnU1WkkrV2JuU05qYmI2Y0RoSDRWbld1MUdRZldiWDY4aExxa3NLZ1pNODcrd2ptM1ZvSEJ3a2FaWGZsdFlaZUhpM2ROZVdHSzQ3TEI3L2srMEJ1RGFiOENjSGx1R3RZMzU1L0RDNVpEdlNPenlyMHo0QnQrUnN6UnVhZ1BGQVl3TmIzeGwyaGxyRi9jMm9TLzZqV1laSFo4WlkzOGZIVVltNVE3WnIzLyttM1VRUHRUdnZiWWs3NzZhcjhUMjJwdCtxQXZPREhTWVhidGJXRlR6Qy9Rajh1c2U3UDVyTXJnZi9tZlE0TS9sdi8vRzk5MS9Oem1mNWtaeG5mNXo1YUJ1QjlLUWhteStaZDAxOFpNR2crL1VSTUFMMnJVZnh1MmFOemdYZGk1UjAxamY2YVBkYnVMV05EQnlxZXc1emJWazlMN0pha1FVWVg2WThwQ3BiNUlPc2V6OTdZS3pwTytHYzEvVmh4Q21STGFZdm1qdk1CTG9vSVpDYVd3NldrWk4rUStTOWZPZVNwejlvRE9PZ1BXR1lIUGpJbStESnhMdS83MUxmMW5EQnJIRFlMWWZ1aDh6azk5Y25CQzZDMmZQYVdiUGxuUjNubXRNekgvQ0QvdWVRUlBTL21BL0xMZUgwa1V2ZmJSenE0RVRBTUZ3NWdMdmdUUm8xaE43VTFScnRkWjRQZTMrL1NiSGRWcklHU2tCWHhrWDNIRVlESHkzZ3EzT3RqaHNuNnpWb3pobU5ESlZka1IzcDRYb1JHQ2lmSnlmaEFyRmxwYVRZMHRXSWZGcDkyTTFpenRmQWZMTTR4ZU43N1czZ3dmb0V0eTloM3d4NlpMMG9Fa0hLNTdmQ0JLRWUvaVZnV2pwendyc3J2Ti9kTU1hbmt3YzBqWGhFVWZVSXZEZlp5Z0taZkZ2Q3JjL1JiYUpBdXV3aUlDQzdJYnE2TUpnY3l3RENFMnprWFhKVzE1TXNVLys5ZU44WHNFbUx2LzViRnM2eHkvVDZxZVRVdTFhUXBERFhRY2N0T1pKc1NWRy9QSTdsd2lVcDYzbkhQcnhFQ1VaNk9jaGlKU2xnNWhNemFIb1R4RStFNVFsV3pNNHRQWUhiVWtwWlJKNEd6Syt0Qm5odmVTUEh6alcrbklUZlV3cEZPc1UzamFwam9nWklzOG5uRTVpUjNFTTVTTkQxNWdCOXdkSVdRdDI5QUtwb000N3hoTnpkOHdWMzlQVzk5eS9IZ2V4bTFXWnQvT2VndnNqbXk5RWVoSVpIb0JkaURrVGpEVVpBcjJlbnVmYkFyN2ZCSlJQVDkwVzNnalpaeTdDK0h0dHZKUCs1K0FyT1kwY25kaGliRTNPMHNyOWRUSGxxbmRpOTJRTkxyKzJrOEF3Z2ZHeURrUzlJZU1venZoamY4bkRYaFNORmRGUHRBbkpSRHNtRXpPMEo0TEJHUnV0ZEJ0d3lOVjhRMHVpQnZVWXRocXpMRzFCcFRDN253SGtyNUtFZ2k2NWJ1amlPbHNwakNWL1pKS0srTDBEUC9iZEUxRG5qQzk1bTMxR1JKc3VHNFlKMWRWSkluMFBUNDB6dXZZMjg4VkhvclV4QlBUenczSmpxNG9QWmxMd25hSlB6OUJ2U1BtMTNuYkY4blVsdGNnQ2tCdmh0R1NlTVFxQTQ3OEFkR04zSE1RSHozdEdTQW9qczJQK1dhcG1UZExIdk9Lb0Rjb2JubDBFN0krZW85UGxTZ1NCNVN1QkxCWEVuUjFZNXFqZExmRy9ZQnNId2krdndhQ05yMlFnSCtlK3k1M09OeVowOTRYQXRpdml6Z1lrV3ZSbjQrL20vdEdkL3lNQjRDMnpES0ZuQ1UzQi9kNU16VjlFZXFQM1pQOElyVzVxcXpoZTEzMnVXdS9tN1J2TTk2KytEdnU5Mkk2YlZicnBpTUdnMW0vbXlDN0VJMGhpdzVVTjFkR2wrUElDUGdkWkcxd05MMGh0STFiaDJYTitZT0huT0tiOW1JT1crMWovT1ZERXluY241Nm0ralVONlBCNE16TlhsbTZQdDRoNndaQnYvakRBN3pvbXBMRFgxWk1Oa0plV1V1RVBCNWtZTS9PYXRmSG9RajI1Y0liQmNNeWNxRXZjMjUveW1ZL09VYWNyczhNb2dxTVFTYXl3cWdCTHRkSHY3YlNHd2pnQzZLZWdQam00aWNjVmcrbFpwWCtPTlpvbTVkRkF6R1lidjNBd2ZVOVMwN29TN29pbnVGUFhsdEhLaGRKTStxK2prMExGQ1A5cFdxL1RxU1hMemVqWGRXZjNnRVlzRzlrY2s4WjBkT0QxS2MwZS9hc0VhTzVZSWIySG40TC8raTR4dGVnRy9NdldtZDh5OEozSVdUSDZKbTNnSTJucnF3b2ovMU8rOGFvNk95NWRnRFV6RVkvclo5Q0FnbWN3VXo1VTk3bVlpWUV2MEcrakg5Q0FGdWp0ak1pQ0RISGloenJTbXN2Yk5IQjZ3L3A5ckNiaC9Qa1BHOHNwL3NCQ2xhWmZDbzFSRU9RWkZ0Q0ViVFc2M0JnMGhzeVQ3ZC9rNld6ek5PbUVSZzAwcS9PN2hmbmI3V1pHNnBqQlRtSlFuQTZadHVPdUJOMjBsRFk1bXlhN3Q2emVIYWFnRkloTWJuWTJQb28zWHRmaitpWHBBaU5FOEhic1JITzRiN2c1Q1dqTW9NQ1ZEVmJUbHppTmVVdEJabS9od0U1cnNURS9FekpuWlp0bFI1TWdGM29GNEQ1OHFuZmN2WHMvYlBZck13Szg3S1FkbTFJL212ZzIvR2dNbVlJVDRlMERQOGxtVkpVZHY3NUtLL3JCU2JkZldtVDVscllGcjkzdkR2U3crVERyLytiSEgwKzRwdmU5a1E3L1R0clRFK2lFRHY2YTBXdjFzSzEyN21HZCtkT2lzMmRXYjBXc3VzMUZXSWNIMmd2ZUo4M0JvUWp1SWRHN2lVank4NkVLWW93SzhEQVg2ZFFkeEFWVUVubytuZ3BGaFh0MlRzdVZyeXZIWURpckV5TjllUDc5VzFnZWoybVVoMCs4NkE3WEtHejQ1WW5hZmlpUWE1ekxrbHlneTZBQjZFN0huMGtTM3pRM3MzZ0t2Vk9ReC95R1lmckJNNmhaR2taVGJjVXdxSmRHS3p1ZXNuUCtjam1UdzRzWjd6Z1BVQ1NzSzhXUXZNYThoYmIzRDgydnVZODl2L0hLcWJjU2ZYOG5BQlQ3RkMvdm16czIrWTNHL0Y2bG8zMzR5QU84SzY2RHdCTGEzMm1YK1p0V1Z4bUY5NmhvL2pUbFU1K0J4SVRvNTRiSTE1L01NL0hqNmw3L1hCWmZSODBUaGVaYmNJcUE3YTA0L2cvTEJyU09OTExENXNpSGhZdDhPcXRlVXErNWFneWFFWFRhb2xUK3Y4bUhLU0RPTGdPZkFBNzg5QUZPYzZvY0UySnk1a3k3amI1eStvMGV3UHMwVGpJZUh0Z01ZeXBWdkNaa2c2VWlwY2x4QmxJNE1YQkVBdkE3WGZtODU5aWhrMm9DMVp5N3p3VEZ5eXRHRTRSd0I1WTJ4NW41bmR4VG1PNk00SmFJNlBuTmswRE1tbisvSER6V0EraUdvUUlMOEF2Wit1Q3R3Mk96eExHTjdSYys3UWRqYUlMNjM4SHQwdHQyaU1aY2UycUFRME9nSFZPVzdPbzhRSXdaQW9xam52V0x5M05OZ1lwUFRmN2ZVTFNtZmtmMmJUcUhXY21NNjNBenR4bXcxMFpjUmI3cGN0THpqNnBxazNHVS9PNTNjWUcyT1VjYWlnL0JQY0c2UFdab0tENS9USEZoZ1crdmhaT2htYmVlVFZGOThrRzFBZkhXR04xYmRIN3dKdmRrVENCMmNnaUdraVlCSWFYZjJDdjR0L1dBUjl5UWQvSkZ1eWxnVlZyZEd5eThEMzcyVzNDT29uazdDT1U1SlNtVWxJcjkyZ0dZdHdYNzlaZjV3enpQbVVFVFBoemhrL3FFQ1llWGpNa001VXZXM09PeWZjV254L2dzUDRIWnppSnRST0JSYjB4amFjZm5Ja2l6S3hhQjZublFqWTlMRk5jQ3ExZDdNWGdYNU9jMlpIbGFPVEZMUWx0SGRNRHgwOGtxM2VPVzVEV3ltMkk1d3VlTnN5eC9OKzJ6R3E0U0F0ZlVReW5EQ092cTNveWJzQURWRDlkbFhMMEUyM3g1QUlHV1Vud3hQa0xPcGtwV2p5bzluVTFNRUE5QXpNcmpQbnV2a0tYWm8yQS9icnpPcFlZSXpzWFpMb0hQT3h6amxWNnl2bnA2SUFFNDR2WFhNZUFkbXhUSDdxdzBjeHV2cm9lY3M3cXdSYk9kODArK0ZtZDdTdi80N3RNTDR5Tm5QWldjblYwYXZ6dHZldFBXMW96bWFkTUE3OU9ZMlcyUHhMNmE3NGN5RE5jNTU0QXR5NVRCWXNQTEpuaFNWUldQNk1LWGNhNUdqTFBydWNPbSszZE1xSEw4ckpjajJpVDBuY204bXZqdWxPejVsejhwY2dId3hqbTE3QlB2MFBtRVF5ZkNpOVZXWkRtZTVSeVk5d0MvVDhrTHpwWmd1aXh5QUo0TzdhMk04ZlpuaVBaNXFaQzB4a2Z6VE5VMHZlM1ZzMEFJOXI5UzFwWmlYN1NFai9Bb05mMGo3cTJJUmdTMWJJOXlrZEJrc1RNemdpR2hjd29jRk83YVoyVW9EVlcxZUdOK0p2aUdTZ1lteWcwWlRxZTJVa2ZSdWpKeU1ibmd5N0dJSkF2YVZSaTNJNklyb3Irc3pZc3RBUXp1bW5jK3ZZT2U2R1NxRHM4TittR2NHT1BVZWlEMVBIZE5GYWNONXlXMlFKaWVac2VEUCtEZHd1NG8zRDU5ZmorTVN4bmhSSkdBckY5R2YvNGtMeGpHM0w0T3pVMC9qYmg1WXBCRzZOYTVqVDUyQU9FRElzckJqalhWZnNXdVlnTSthWmVwOXZJNXBkWmRlMmUxc0tSaHJWaGRMVmdLeXowOXI3VG1YWlFjL3B1NlZwMWg3OXhtN0h0Tm5MOGVUTXEycDNhSkxEeUhkTS9UWUREeEdiNjFQWXZmdWF4MEhzSVl2MFQwbmUrcDdBU0lUNTY4RzdkTWhYTC82WGI3Nk4wWmsvM3VWMmJuMWtvVDFkNmRnSFgzTUlwM0ZWblRpZGdYZ2Mra0VZWjcyTm05N3hDTjRjYmNDMHZPaVhqMGpXUngyTzk2bW5iTWxkRitUWUJ2SW0wNUROb2U1TDBzMlI1T0RuLytPTEY4YmF5N1QxajJKR24wTUZxaFFvT1pRbFdJNS83ZGxLWURaMVhHcGNFTWlrNDR4NytBRGl2QVdGOVk5dVFYNXMyd3gvZ21OOCt2ano1UW52ZTkwU3lOTjVjaDZBVkc5bCtlcDVqeUpmWkw3c2U1Y3FSQTVsR2JjV2NCeUs0NVR6eE8zMW13WHhuOEVGUzMwQkk4RVVmdjRrb0tqVTluNGh4WmZ1WHB1TmJ6RGlId1hzUi93NDVoeTB2aWorMXZmZWN6RGM5WTR0TW5KTHFDQTFlL2VFbFg1NjJNSG1uTGVkWHZLbU15d0FucC9OaUh6UWtnYnZqZnRld0swRzQzLzQ1a2hMSDh5UEx3emRqRXpQdzcwdlplaWZqckJna2RDUHhxblpWRWNCWUM4WHRWdlRJMnRLRDl3RFhvUHd2Uk02UmZkMnZBS20vUmpiK1hPWHkxa3lsSXlRT014UGFYR1pPTTdIK011dW15SGsrYUZORWZBcjNQUTM3eWdlc3BmNm5URzVOd2YzenkzMysreGhJZUwvYTdHT2tnQ0FZQmlJM3YvVzhyYjhHQzJ4TW5TTWo0SDZBcmlFNVhCV3Bwd0I1eks5c0pMTjhjMnZiVDFXTXZGa212SFg3ekltZWZ2Um1tWjJyTEk4VzA2amcyeGpxN01BQUFBQVNVVk9SSzVDWUlJPVwiO1xuICBleHBvcnQgZGVmYXVsdCBpbWc7IiwidmFyIGltZyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRZ0FBQUVJQ0FNQUFBQ1VLSnJOQUFBQk5WQk1WRVVBQUFCUVVGQnBhV2xTVWxKUVVGQlFVRkJTVWxKUVVGQlFVRkJRVUZCUlVWRlFVRkJRVUZCUVVGQlFVRkJQVDA5UVVGQlFVRkJRVUZCUFQwOVFVRkJRVUZCUFQwOVFVRkJRVUZCUFQwOVFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlBUMDlRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGRHE2dXJ0N2UzdzhQRHo4L1BwNmVuMjl2YnM3T3puNStmNStmbnY3Ky95OHZMazVPVDE5ZlhoNGVIbTV1YjQrUGo4L1B6ajQrUDcrL3YrL3Y3ZDNkMVNVbEp3Y0hCWFYxZGFXbHBVVkZUYjI5dVBqNDllWGw3VTFOU0xpNHVFaElUUTBOQzF0YldxcXFwcmEydkZ4Y1dnb0tDYm01dG1abWJNek15L3Y3OTFkWFc0dUxpbXBxYWpvNk4vZjM5NGVIakl5TWk4dkx5eXNySmtaR1JvYUdoaFlXRjZlbnJZMk5pdXJxNlZsWldZbUpnUDZLaGVBQUFBSzNSU1RsTUErZ0lGOE5zV2NQV0pFT2RsTTZ0RDFWQ1FDODVkTGFNbUhiMTRzbjlLNHNhNGw0TWhQTUdkVit0ckR6R3h3QUFBRHdkSlJFRlVlTnJrMjJsYjJrQVFCL0JOQ0FpaWdvb0hlTi9hUDBMVHBwUVdpb0FJRnJ6QUF4WEZ1OS8vSTFUdHdXNFNFT1RJOWR2SHZFU2YyZG1aSVlsRUU2UGpudlVQUzR0REFaL1BibmNMZ3JCaHQvdDhxME9MUzMxanMrUDl4UHo2UFI5R2hud2JhRXp3VFkvMHpUcUlPUzJ2TDAzUG9SWHVCZGZZSkU5TVpOUXpFeER3UHM1NTE3QXB6Z28vT0JWd29qM2MvTktLalJpWlkyekNqYzRRaGdiOHhKZ2NIMWJSV2I2cFpXSTB5ek5lZElOM1pwSVlCejg3emFGckF1c0dxUmZMTGplNlMxZ2NKN3JubWViUUE0RmhYUThZbzMxMjlJcDdScmZqaFdQS2phWnQzNXhkNWtybkI5WHk5ZEhSMFdsNS8rQ2dsQ3VjSFdmUU5NR2x5NGJxY0RuUmhOUmh2bGk5U2thMjZoRy9YZTBYOCtrVW1zQXQ2aTRVL1RQQzIwbHdYeXBueGEzbVNNbnI0bVVHYitGR2RQWGRiSFJxQTQzZDVhc1BpYTFXeFpQN3VXTTA1blRwSmhUOG1MdHhKaFQydjI2OVgvQTZuMEVqUXA4K0JvdVZlVFJ3Vzl5VHR0b1YvM21lUmdQZVdhSzU1V25VVjZsK2ozZEtzRnBCZlFHTlJ5eSt6NGw2N29yWitJdXRqcXdYMzg1dlVRL25HaVhhR2ZTaGp1M2MzdjhvdEl2K29PelROdXB3RHhPTjJHWTRxTHM1RC83NTZ6dWJFcStYVVBVUWRheHBNMnNPZXFFdWZTcjkzOFBPWkFUMWNTK3U3cUhPdlU1Nnp1YmlvQ2FWeTlMSjhQTFRxWlNnQXZ1MXRBTlZRNzFPQ3Y4cVZCV1NiREowSmlHb29QNjdmTStsb01ZK1NIcXBUclBJSitPOTgvbEpOUlRjREU5NlpYUUNhaXA3OGQ1S0ZxQm13VUY2WTl3T0ZZY244ZDU3cUVDRjIwTjZZZDBKcGQyeUZOZEM0dWdHU3R3VVQ3cU5kMEZGTGhqWFNxaVVndEpFdCtmTS9nVW9IWi9FdFpSTlE4bm5KOTIwN0lYQ3pya1kxMWFpbklHQ3U1dDlkSHdPQ29jUGNlMTlxMEJCNkY3Sm5IVkNMblVlUytpQlZONkdIRGRBdW1PZGc5emRTVUl2SGc2aE1FVzZvUThLdVZCQ1A4UWlGRWI0WHNRaFZVM295K2wyOXlQQmowRHVPSnZRbXg5cHlBM1p1aDJIU2pDaFA1RjhseVBoZ3R3dmZYUUxPZWt4cFlnRVR6cG1DVEtwc3FSWEp4bklUSFFzRWxPUXlaeElVa0tuUzhyZVFXYU43MUsvdU1sSytwV1FQcWNoTTBJNllaZ0Q2L2FyZnZNaElUMzdkQWFaUHRJK0R3ZFdPaWpwMkdzc3dwZVFHU1B0bXR3QXEvSkYwbmxDUEYvRVBGamNDbW1Qd3c3V1plVGxOK25XbjFna3BGZ09ySTFKMGc3YktsajNFY2tZeEJ4WTNuN1Noald3emtLU1VZZ0ZzQmI0empYT3N5K1NjU2dpNFNMdnRjS0JjYWpyZnFFUXZRUnIvYjJGMGczR3pYZkpXRGJUWUFqdks1aTJlVEF5U2Nsb2dyZGcyUHM3OEkwemRTSVpUellEeGhwcDNTeFlwNUlSN2UyME8ySDJ6NEZ4RVRPbU1oaUNuN1JvR295OEdET29FaGcrRzJuSkFCaUhvWmhSaVpkZ0xKRlcrQVhRdHJNeDQvcThDeG8zU0pySEI4QTRpaG5aengzUXZDMGNqakV3U2pGamUzenY4eS9IQm1objBaakJGVURqeGttVGhrRExmQk9OTG5nSDJqei9ybEdxS29veGd5L3hDSXdCMGd5YlhUWkJHRjlNTElFbU9GcS9DWkg1clBsK3RyOUVNWFRiOHYxOWh3RGF0V2g4TDdINDJYSzlYQU90WVB3Q0VSTmZQWUVXSUc4WkJDM3pRelNCMTJCczNvRTJUTjZ3QU5xQmFCNm5vSGw1MHRBS2FPbW9hQ0tYcmR5WkNJQzJKNXBKY2djVXU0MDA0SkZWU25NcE5aOFM4NkRzR0grMlptM3VnakpuYXpZaFNxTFpWSnROaVFBb21VK2kyWVFQUWJIenpjMFE1Nkw1WERjM1MweUFzcnNaTlI4MkpWYUpPajhIeWtIVWpOaVVXQ0dxWEtaUGlPZVVTSU15Uk5TTWJvQnlIalVuSmlVNFAxRXh3TGFNcURtRmowRlplbk9ZS2tYTjZoRVV0KzJOM3BuNkVUV3J6ZDAzT3VnaUtQbXdlUlZCV1ZDV1NnR1V2WERVdE90SHFtRzVIQU1sSFRhekFpZ3pEZTlNVlRYZnRtNnVJMURzaE9YZ1VMTWRESnZhRFNqakRZYUlmRmp6WGV2bUNsK0FzdFRnWkp5RXpTMEppcmYreVRnMmQwSThwMFFGbE1HNko2TVVOcnZIdW1kakdwU2ZZYlA3bnFwek5teE8xTnlHemU4ZUZIK2ROeUtLWWZQYnIvTzJ4SWkxVGdaOU50amJNM2JVM0VYQ0ZuQ0dHcWVOL0RVSlNpNXNCUmVnZUZTYjUzWEVDdlpVRytnYWFsSWZJMVlRMmtYTnFscUpxRVNzSWE5U0pCeWdGQ1BXc0s4eVpRK0RjaFd4aGl3b2Zjb0hPNmxneENMdWxKTkVBRFhwaUZVVVVETkhYdkFDYXA1Q1ZuRUFpb004ODROU0RrVXNzazVBOFNocTVVUElLajZsNU5WeUNqWGJYelRmcVY0dDV1M3NOZmwvWjZSRDFsRkF6VHg1NWtWTkxxVDVUdlVzSXk1UTQrUUo0VG5VSElTczR4UVV2NnhwSEdtK1ViMWJXVkJXWkc5ZkowUFdzYm1EbWpIMjZlL09ac2hDZnBOM3IwOU5BMEVBd0s5RlJSQkJFTUVIeWtORVpiZk1UVzg2bVdTbU03U2xMNkE4ckNBRnRJam8vLzhuNkxmc2JwSlNTbTJiM08rKzhJbkNabTl6VGU3UjVPK0MzNEt2dVdXVGEvQXQ4cWN5MTFzMnFZSnZnMy9sMnQyeVNRdDh5M3dZY2J4bGsyOTBJS0hVRS9EOTJMTEpFUkI4UFBVOVo1TjlJTlFrRUpjNW0yd0RvZGFCcU9kc2drRHdlYVp1emlvbDhQSFZTOW1jVmRyZ1l6TUN5am03WElHUFBhamJ5ZG1sU0FQeGlTMVdzUXNMeEF2dy9jeGtjaGExekNuNDJKU0Fkc1l1MXpRUW0rQzdzaXdqenFNRFlaZnp5SzVoV1VaY1J4ZEx1MXhFM2o0dHk0aGk1SUFxWTVkaTVCQTdZNWZEeUM5ZG1MRktPL3ByZU1ZcXBlZ0hNeG1iNkE2UDZqSTIyZTd3OERaamszMGcrT1A4bTZ4TmpvRGdMM2hhV1pzMHdKZFNhZ044MWF4TnhDdS9SZkJkWjIwaVhnSy9CMTh6YXhNeExXQUtmR1hNV3FUSjE2N01BRkhKMmdQTGZLWGZPaEJIYUk5ZllnN3lHSnRlaUZscjJuY2cxc1ZDcGwyMHh6SDRVbU55Q2pJTy9VSU5xdUVlK09hVjR0UHFTbWlQUXprcGZSYUkrdEN2MUtDYUVjc1V4RzJqZ2JZUUMxZmtVcWJxMEsvVW9OcFpZQ21UV21IVjBoYTBWajRKV2U3b29pVnFZcm1qckpZbmFJYzZFT05oUzZMUkRqK0ErQkMyU0I3dEVMSkluaitiS1NlM1NHajZNOXMySVh3akRiVEJWeURlaDIrdG9tMGd0MVlKS1JKdGpZUk9EcVF1WklrSWJ2TmEyTGNnRUc0SmZFdFJHM0xwUkRLYWFBQ3hTVGE4ZlF5K29rNitQZjUweXJlYS9MNkJ4SFlwYWtQTGNTQmFPb0ZRRXcwZzVpSTM5anhNWWtZZ3RjZTNIS0kyb3Z1R1NZVEluckdjVnRRbUVIODBZUkxSbUFNZ0pqcHNCMTF6dFE5TkVxRDJtU0x2R2R4cklCcWFNR2JvMS9QK2pib0U0bUhIMHpXdU5aR0VJcUdwYXNjVE5pYnBtS3BjUjJMb2wvUCtEUWwzaDQrbXBEVWdmaWNySmFKTDVlb3RCNDNzVkpJVUNFM2xtMEI4VWtIelFKd2xLUkFzRXQ4Nkh6MGpoeEx0dkVtbzA3QkJoQ3lYeERmajN6WmpueExrSDdrc0FQRlNoWmtEb3VpaEw5YURLbzJFUGdkaVNZVmFUd0hSU015TlF4TkhCZjQrSTl3MEVJZE9NZ0toS2NNU1lxV3JZeTVsU25neHBhTVQ0cE9Lc2dIRWxXc294NHNsUTNrWDR1RFRLTE5BM2JCNkc5T1VvRGNOYzhJU1lyemJ3NUZyRlNSaTJUbjRMY001Rk9kbGQzMDZzbWE4K0pIZk1xaXA3ZzlRTCszSHZGN3lPRlIrM3VGTS9ROUE3YkhmaEY3TUdNMzhrWWRsZDU4U2haTllwd1FQeE5lU3FCQ2RMYVNBYUZZTTQ4U0pZZktuNHFqczIzenNXQytkR0xWT2xYSlYzZXJSQXlES2w2SnpPSEhoYWFhK0EwVHFwYnJkRzZCT0hSNkpvVi9uM3ZMQjdBRzFwcm93OWhDb2xtYmlVaWFNWmhwQWZaNVUzWmdGcW5RWnh6SmhSTWVvQVI5Y2QyY2FxS3R0emNTaFRIaWF5VjhBdFpKVzNYbjBHYWlxaVYzbk1KcHBBWlZhVU4yYUFqR3M0cHhSWjdRY1NsRVRxbnVyUU8zVTQxVXdSUndxYmFDZWphbnV2WHdNVk5HTlVTVHlSdVR2T1RBejZpNm1nTmsxc1ltRWpJTStCbVpPM2MwME1BYzZMcEdRY1RncEFEVlBPa1l2ZDQ3U0pYS2pHZ21EWEwzV3d4MkRtUUZtWjE5ekpqK0tqT1orTllIWlZIYzNCMHl6Z3B4MjhxTW1rQS91S1RCTHFnZlA1NEU1ZDBjK0o0em12Q293eTQ5VUw5WWZBRlAxUmpzU2dUcHBXc0NrbnFyZXpLU0ErZTFvYnFSNmg2TUZjd2JjQzlXck44RDlNU2lNVGlROGpadytBRzVOOVN3OURWekxvREFxM2NORHFWRUFabVZNOVc3eUdYQUhlalFqWVZEUUoyVmducnhTOS9Gb0diaXo0RWM2N3JDRnhLRWg0dkJnUWQzUHdnUGdXcUdSeUErek9mcldPS1RlcWZ0Nmw1SVYwOU9TY1ljcDVPODVBR0ZLM2Q4bUNGODhIS0drY0F4SzVxWUEzSnpxaDNFUWR2TVlNS3lrOEREQSt3TENXbHIxeFZzUVRpczRHa25oYUF4dzkwQllUS3MrbVFDaFhjY2drM2NIek1PZ1NoR0U2YlRxbC9SSEVHcGZFWU03R2pudUlEbjRqL3dUNmswUU5wNHJvdStSS053WUROS0RTNHA4Nk9kL0w0R3c4bHoxVTNvQ3BLcUxPTHlpNldFSTd4aWtwVEhWWjI5QU92eVZEVE9JVUpoc0dQY2NwT2t4MVhmdlFhb2RJUTRqS3d5RzJtK0N0RWppME8rY2tHT3JiRmdUTjVEK2h5SDRtZWFnRFA5ci9DRE4vdTN1VG5zU0I4STRnRTh0NVVhNXBFVXVZWmYxZUtZSmFWOFFTSnF3QlZ4d1ZYRGw4bHdWL1A1ZllTWGJ4TWhNVzY2VzRpKzg0QTFEK09jL0Q5T2tTYjB3NitZQ0U2d2NtNG9XQTJHc0FzR0RyRkk4Z1ZuTmlVeXJoRFZYcFdVdEJ1TGJTbzhObU1VY0krdDhEd09oUXkyRnRQNGpscXd0VERaaS9BcUVYQUpaeVgwSWhPWnRHVk1hSVdrSDcxcGw1WmRXaG8rRlAwK0hwem9RT0FGWml6MENVcWVISlYyNHV2cVdLQmtzM3g0QUtlMUhsdHYzQXVudVRES0E1ZklxVlpBTTFNNkJ4SGgya0EwU0hKRHExMlhKTEl1RktTWXBTTlZKQTBpQklyS0grd0FvWHZvbHlZUmNuYThadFdrSTFaa1FTUGpoR1NqaUFyTExqb2NCaWhzaUNocjhIb2RpT0JISUNPZ3hxRURCWkZoa294QUhOSjB1bHVhRVM5TmJ1NVVQNWVsTm92Ti8vT0llYUFKWlpDL1dCMVJxWHhhdGh4L3VnWXIzSTl0RkFrRFZ1cXFLMXBLSGY0SEtGVVNiNE9lQnJuRmJrNnlqVEZwQWwwNmlEU21HUVlmNmFNME93ZDFYMEpITG9zMkpSVUZQNjdvbWlXdFd1WG9CUFFVLzJpZ2hEYnFlUjdWMXB2Q2tncTY4Z0RZdXdvRyt6dE42c2xDR0E5Q1gyOTlCRHNBR0EyQ2djZDR0aWVMeVQrVVVjZSt0QlFaY0hoWTVoTnZuQlNQTnUwa2JpOHVReHBlLzYyQ0VPVW9pQjNGSEdURDJVNzErcUlqaW5OMllVbnFqUVJOTThBNFlEcDhsQ3d5WWFxcHZ3N1ppV29OeXUvOUhyWU81M1FSeW9HVFVDL05wcWVlankzNXZYSkV4MW40N3huTGw3S0k3SFAwYXZNQjhHTjZSTVV6RlBEbXdTeURsUmc3R0J1TmdCODRUUTA0bitFN0FXdDVDQ0cwRjlqak5nR1VPOXAxZmhnOUNLZzVXNEw0NWRrRHFFakxoZGFmZzI1SXRRUkE4ZVFiV2cvbVIydFlVL290RkNoeXNLc0FmKzlFWDROL0xISGlYYmNLaEwrTG9BOE9pWW5zcFBzekFRcmpkVFBaTE5JSEFob0xSZE53RlpyemhkT0cwdUUzL2tzdUpKYkxCVkpUUHgzTXVsMHRyeWZ1N1hEelBSek9ua2RBbVd2QVBETVAvMkNxS05RRUFBQUFBU1VWT1JLNUNZSUk9XCI7XG4gIGV4cG9ydCBkZWZhdWx0IGltZzsiLCJ2YXIgaW1nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFnQUFBRUlDQU1BQUFDVUtKck5BQUFBNTFCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFpSWlJbEpTVWZIeDhjSEJ3WEZ4Y3NMQ3dVRkJRdkx5OHlNaklRRUJBWkdSa25KeWNwS1NrMU5UVU5EUTAzTnpkaVltSmZYMTllWGw1WldWbGJXMXROVFUxWFYxYy9QejlJU0VnRkJRVkVSRVJUVTFNNk9qcFJVVkZWVlZVSkNRbFBUMDlHUmtZOFBEeEtTa3BCUVVHTTFBTkNBQUFBSjNSU1RsTUFCZnZ3RGhYMnpUa0oxR2VoVTl4SzZ5OS9iMEc2dEloZktCdm14cHVQZUsrb1dTSEE0WmI5WXlhckFBQU5Sa2xFUVZSNDJ1ellhM09hUUJTQTRVV01seGh2amRFMlVXT2k1dVNpaWVrVVYwVkFZRUZBL3YvdjZhVFREMlYzOFJKQk1kUEg3OHE4N2ptZzZMLy9FaUJkTFgrL2JEeDBldGxzcWRRWFJiRmZLbVd6dlU2cmNmbTlYRTJqcnkrZEt6VHVzaFZZVDh4MjJvWGFWKzF4WGZ6V0tjRXUrdlhHZlJkOUpjS1A3NjF6K0p5YittMU9RRjlCdDlBUllUK1pxOHNmNktRSnRmWTVSS1AvVU02ajB5U1VMMFNJVXVhdWVIb3RoSEpMaE9pSko5YmkrcllQY1JGYlZYUWFoR0k5QmJIS0ZrN2dHZU9zVVlINGllMkVQMkQ4YUdkZ1I3cStISTkxWFlmZHBPbzVsRmkxT214RmYzOFpFbU5scWJQSnYyYXFxUmprN2VWOXl5ak5Ja3FrV25PTEJJT2hiODBtbTh4TTQrM25Gam5PRTVnaTE0TU5CcVBWZkxLTHVTSnRySkV0bzBUSlhjRTYrZ3V4SnA5amVzL3JZelJyS0RHdVd5a0lOeDR1cHBPOVdLTlhXT01xSVQ5RThyY1pDUFdPMVVrVVpHOU5pMVFqQ2M4VnhUNkVHWS9zU1hSa2J3QmhLZ1YwWk4wNmhOQi8vVjBMMDBoZWY5aHZPb1JvSG5jK0NpTHd2V3F6YVN6Y2w5RDVFTkN4Vkp2QTkyUk5QMHdpZjMyd2h6cHduZWZRVVFpM0tlRFIzOVJwdk9aa0NUeXBkaDRkWHJjSFBFc3luOFp2cG8zNWg2S0tEcTBvY2pQZytXd3JxcW1zRm9hdmVSNGhCR05DUEUvempjVktzZFRaZHJRbGNHUnUwVUdsTDRCRGwrVFpKbk5UY1RXQzF5R2FxNWliM3lsa1FPcG42SENxSmVBWWJycDRXekU4dkMxaUtPYUc0eVZMT3JCdURyY3o3elBBZXJiV1IxajVCTzlNVzZ5UFlUOEJLM1dnOFJBYXdIcDMxMXl3N0JoTWhGMU9ocnhtUHBSWFlOM2xVZnpPZXNEUVIvSThqS3o0ZUYrYUlzOURlVG93c2wwVXQyNEpHQU5uSHNhaEtzVFJ3bndHUmlYdVJaR3JBRTNIWVpkb0x3aU9EbkhOZVFoakNiVE1QYUxFdlNZSFZzaElPQnFteEhjc2JQWlFwQzVSZkw0QjQwMlZ1UlFQeDRFc1ZKbUxzeWtlQkJTVE50REdDNWxIZFlrVUYremEvUEt2UUx1THFVUUxhRTgyTjhNQ1MzSENyc3I5MkNIUTZua1VQZUVDYUppZmdVaHh3L3dCMFhTZzlOTFJkK2dBWmVuS0hBNlJEZ0d2dU9NeEJrcjJMT29PZGZadUliTXNUVG9VejVGWjVndFFtdWxvTzl3QjVkRldHYll2SFpKdnFxeGZ6SFRrWTkyVFEwNEhKZmFwWUZjRkN3UGxLaC9qZlJPckRGT1REcyt6VkFhek1qc0Npa2dEZ25SZlpheXdkQlNjUStFdUllZ0NSYU5BZHpCc211bEx4NktaTm0xRmwyaWdLSlJUVkFmWHBpbEVPaDZzc0NYR0VGUkErNnVLRUxCYzJEUlhPaTZEL1diZUlTQlZSdnU2dnFFN21EUk5PamJQTWlsMENiR0s5cE0vcCtmQ3BEaEVPajZzTUNXbzZlaWZvYjFjMEh2U3BLeWtaR0MrSUhwak5nVzBoMHY2dm1sUzNGRlNhQ1psUVpWb284K3JwWUlkTkl2aWo1S0R1VGhEaDREN3lCWWx0aWplS0VtSVl3VlJ6NWlaenk1TW9Ra0JReXZJU1ZZSFRna0pBa3JwU1A2aGZIU29EbVNVTkZpaExuRUlBUzMwR2JuZ2doZ29Ub0NTdkE0ZkpaeWdSd2dvb3QybFMvQ3Y4WXJxZ0VkSkpGRWxxTDkwSzlmN1BrSG8vbTl5N1cybmJTQUlBN0FESVZBb05CV1VRcWtBQWUwRXlHWTNaRGUraW55UUpjdU8zLzk1cW9pcTgyK3dRNXplWkpmdkRUejZaL1prQi9KUWw0a2lKL1FRdEhWTUZqV3piRzBkRnBXd1pXUTViZHNZVjRRR3p0UkJxV3htRTRSNjkvOXpOemVhenl6YnRtNnVyTVQ4aGRDM29JMnpwUUV4czBScXU1VXp5OUtZdUdoejVqd2hKR2VXVkcyN2FHWUpDZlgzTnIya2ZKbGJ0cjhPU2xWenkyRERLOHo3SG9FOG5hUFlLQWNVYzFTTUNaMEZhN29sWk9hVzdkeElMVFB4SEpXRTlqZWFsQyt4SlpOdUNHUExZSU41MlRtMFY0d1lSZElWWll6U25FQy8yLzVXU3NZb1ZkSVZLbzJSYWYzUTBlMFRHQlV4TXRJZEpyWThFK2l0Y2ZpNklaVEZxSlF1eVdKVUpRUit0d3pFVTRFcTZaYW9RQk1DTy9ldHJxV1NxRUR1RElpLzBnS2tlWnZMcXU0dUFWMGdWMVpPRmhaSVdaRzRiTEc1bmxZcGNLMHhGcUlValFoOGJoRUltU0tYVmd4ZVE1RlpmMHFjTmdmQ3ZjWllDSnNqY1IwMDY1d1FrSzQzeGtMVUdJbmRidERvanNEWUNrUW8zV1JTVUEwSjNBU045Z25JQ3JoenhsaFdWc0FRdU9vRURRNElUS01LdURncFg2a0tqUWpjcmZXVW9TTlFDbmRsRVpEclBISjBlOFNTTWdKS3VFdEdhRXJnY28yMWN4Q0JUTGpNaW9RbThQMzlVWm1FdmdSaUtSSmxUcXpmZVhkVUR2MEpoQkJoQkFZRWp0OTkzSklsY0RzUVFzZ1NHQUxud1Z1ZFByRnBWakxYQXlGRVdJSXhzWjJheDU0dkJBWStCV0lwRXByQTBlcE5SR0l5NW40Z2hNaEFtS3g4RXU3c0VodGx3QWozcVF3OFc3Mnhzak1tbmdWQ2lCQS9pTURSNnM3d0xCQkNHT3lOZkZWdlhHRm5oRUFLSDhnUVdMM1JEU3hmQ1R5R1FQakI0Q2NST0c1KzFrbFV5TnhmTzEvaE41bTgrYW5uSjdHeEFWTDdRUmd3SlBZclFOMGRZZ01EdEMrVVlaUEdzL2d4QWVGaElMU1doc21rNmMvTGEySzVBVUw3UWhnd0pYYmJkQlV4Vk1DZlFtZ0Zub24xQS9iSkdoR0srZE1aV2t2Rm1vYkVHUUhwWnlDMFVDQWhkbEgvTDBDdWdQYUpBdVA2UHdUT2lZMDg3UXk3TjE2SUhYSWgrc1NlSlBPcE03UVdrajNXSGpkK0VKaElwaWMrMFpJSkFnZDFzeklSSDZJUU1pZDJWSGZpbW1MWkpuNFJrbzJKWGRkZHlvd0U4NjRRWUVqc29XNWYrZXh4SWJSZ1QzVjd5eDZ4SjMvcllFWGlrY0JlemFMeHFQL3hhMVF1YUZDemJCd1FTL1JIS1VSTzdPN3RuMU81ejNYNHc5NmRwallNQTFFQVZwT1c3azBYQXFFTEpXM3AwMklNZHNELzlVdjN2MUZ4Q0l5YVVYd0FQMzFIZUNCcnRJMy9KVEZBZk9xVnhyQmpVVmh0ZkVCMHU0eWJuWjFvOU9IR0dxSjFMSHFJQjdOM0E5RTdGaDVpcVErNXZHTmhrVEY3Q3dqcmFLZ2d6bEdETUtOdlpCeVBDS0VMUzhjakhRZXhxa0hvSUpMak1Sd0hjVitEZ0JsOTFTQmdSaHZTSURvSTFkdDNjRHhVRUM4MWlFSVFsc2ZrMEVpV2h3cGlVNE00VEora1FlaUNxZ1p4S0xGckVEcUlhSGtrdFF5dlFSUTJaaXlQT0xsVjV5Mk42YzNiWUdrZ283ZnplOHZDSTZNUGVCckxJdWdEbmgrSTFySm85SkhmSFVSbldiUVE2OElGWk05aTBOY0NOaERSczBnUXo0VzcrWjVGMUZlSFhwRUpua1RoTXRuWkFxTHhIQUl5cjBZWEVwM24wRUlzemNFV1l2QWN1dElWNUUvQ2FhUDRHSGhGT0cxRWlOdml3NVhlTXdoNjBoZzkwbjB0VzJTa2M4S2Fyc2dlOUpKcjlFejN0WXpsN3JjcnR0b3lJSE43b210QzYrZXYwVStpZFcyWnd2d05FRXVUK1lXSVlmN2lxWDUxWDhnMFlmWk85Z0MrV0VCMFllNWFaSjVNN3BKcWJDU0l0NG1mS1BSaDVpWjY2RitCYUd4TTlZUStleVFhRzJtcWZlR1dhR3dnODI2TzNQT01qWGJ5LzUvWFM1cXhrZlMrYlc3TFVsUDlrWGN2eTRuRFFCUkEyMkE3WTRkSGdFQjREWUZKd2wyTXkxVmlvYjFXL3Y4L3lyWWxGeUNNcWJLYTR6KzQxUTk1MVNlbk15NzJodjR2bDNJNm85NGJUekl1RGQ4WmE2b2JQTWU0TE1GOFh6M3FhRTVTVmRmUFBJN0FGQ2VaQ2pEOTdQb1Z2K29ray9hNDZKZjBucUFrREppSnp3bGNmWkpJZVozRUhVTjhTUmd3cjNST0xyMGtGSmkzak01NWxWNFNCc3lVem9vMnNrdENnVWtUT204cXV5U005K25USkFXakMxa1V1QlZkc2dOWHlHTEE3T21pZFFxbUtpVFJjQjlUL2lWUkZvS0FPOUFWU1IrTUtlU293UFFtZE0wSE9GVklVWUliRUQxclNSaXZZOW5jSnlUT1N3M3VTQjZpa2NEbUtNSDFFL0l4aEx6bU1PQm01R2NPYWU5TEJTNlB5TStrSjZ3NVNsakc1T3NJemdUL3JETGdGdVF0L2hHMU9UUzQ5SXY4alNHb09SUXNNN3JGSG1MK09Vb0Ria3MzU2ZyT21BaFhCZWNuNHpaTFdLb3lWQnFXS1RGTm1rT1hZVkt3dkVSMHEyUURpeXFEQkV1Nm90dU5JV0JNR0ZpVzFNUXUvQ1FNTEh0cUpNdERUNktDWlpOUU02dCsyS3REdzlMN1EwME5FZkxxMExETnFMbVBnSk5Rc0Izb0hvdGdrMUN3NVJuZEkva0pOQWtGMjlzWDNXZlZEeklKQlZ2NlR2ZDZUd05NUXNHeHBQdjlRM0JKYURpbTFJWXBISlhxTmczSFgyckhBUFVreXU1K0ZSenppTm9SSGVBd0hVNmlnbU1iVTF1aVJUMkpyakp3dk1UVW5tZ2VTazBZT1BLRTJoUnY0ZEtxZTdTQlk1UlF1K0k1dXI4OE5GejVtdHFXemRIMVFWSEI5WkpRKzZKOXg1TXdlT0MrNEtJQk90d2VHalhmTVQxR2RFUm5pOEtnWnAvUnczejIwTW50b1ExcWR2Ukl3OTkyNjI0bllTQUl3L0IwKy84TExhVzBGc0dxK04wQjUzTzA5MzlIeG1CTURHMUJZYmRiNDNNSmIyWm0xek54S0NUT2lCV3BGU3hoMnFYb0d3ZHZRYXE5UkRqSEUrNEg0OXdoSi9YQ0JEQm5QeVI2dkxxa1JTeGd5SDVJUm8rTlJacVVMVXpZajJOdkJqc2xmUjdXbUR4RmZ3YjREV20xOGlaS01aNEJPNHMweXlNTXBOQmdLTU9oSlAzQ04vUmplVlJMTXZwMURrMml6RFNuR00vUXBqU1ZzQkRRM0lJeEpIRnBRcmtQalNua2NJYXNwR2xaS3hzakxmUlVnRmVFTkRuM1RVQjVDOGtZMFQyUUVab0tZL2pHR0hLOEF2eUFqTEdJTUk2bFZCSUJ5R295eXZNcHhUMG5Rekxqa2tOc2tXR3NPc01WbUZuS3kyUEFqQ3UwNW1VNHBZaHdMZjRnUHgzbEovNkFhMld4QVUvRmdLQ0NMbjV0NURSOHlSTVA2b2tuZzE2S0lVNGNRYTEyODBMemtEOTZVRVdzVTdOMzRqdW5YZ3ZjbjNpTlhab2JwNjd1M0NMYUcvS1YvakczN216Y2gvMFV6N1hDaVJVVXZzQ05vazA1cDdzd3lDbUx0WWZmRWY0dW5kOVpHSjJNMWFQdi9iQkJzZy9NL1R6ZXdtclNvdHUydUdTNTdUYlArWi9ZaGxGaHM0ajN1NlRhWnExdDQ4UzJsOW0yU25aRnZHais1aFQ4bTVkM256bzNBNnhzNVljQUFBQUFTVVZPUks1Q1lJST1cIjtcbiAgZXhwb3J0IGRlZmF1bHQgaW1nOyIsImltcG9ydCB7QTFfTEVUVEVSUywgQTFfTlVNQkVSU30gZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQge1RoZW1lLCBLaX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3plcm9zLCBpbml0TWFya3N9IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgU3ViZHVlZEJvYXJkIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zdWJkdWVkL2JvYXJkLnBuZyc7XG5pbXBvcnQgU3ViZHVlZFdoaXRlIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zdWJkdWVkL3doaXRlLnBuZyc7XG5pbXBvcnQgU3ViZHVlZEJsYWNrIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zdWJkdWVkL2JsYWNrLnBuZyc7XG5cbi8vIGltcG9ydCBTaGVsbEJvYXJkIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zaGVsbC1zdG9uZS9ib2FyZC5wbmcnO1xuLy8gaW1wb3J0IFNoZWxsQmxhY2sgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3NoZWxsLXN0b25lL2JsYWNrLnBuZyc7XG4vLyBpbXBvcnQgU2hlbGxXaGl0ZTAgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3NoZWxsLXN0b25lL3doaXRlMC5wbmcnO1xuLy8gaW1wb3J0IFNoZWxsV2hpdGUxIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zaGVsbC1zdG9uZS93aGl0ZTEucG5nJztcbi8vIGltcG9ydCBTaGVsbFdoaXRlMiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2hlbGwtc3RvbmUvd2hpdGUyLnBuZyc7XG4vLyBpbXBvcnQgU2hlbGxXaGl0ZTMgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3NoZWxsLXN0b25lL3doaXRlMy5wbmcnO1xuLy8gaW1wb3J0IFNoZWxsV2hpdGU0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zaGVsbC1zdG9uZS93aGl0ZTQucG5nJztcblxuLy8gaW1wb3J0IFNsYXRlQW5kU2hlbGxCb2FyZCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL2JvYXJkLnBuZyc7XG5cbi8vIGltcG9ydCBTbGF0ZUFuZFNoZWxsQmxhY2swIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zbGF0ZS1hbmQtc2hlbGwvc2xhdGUxLnBuZyc7XG4vLyBpbXBvcnQgU2xhdGVBbmRTaGVsbEJsYWNrMSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NsYXRlMi5wbmcnO1xuLy8gaW1wb3J0IFNsYXRlQW5kU2hlbGxCbGFjazIgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9zbGF0ZTMucG5nJztcbi8vIGltcG9ydCBTbGF0ZUFuZFNoZWxsQmxhY2szIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zbGF0ZS1hbmQtc2hlbGwvc2xhdGU0LnBuZyc7XG4vLyBpbXBvcnQgU2xhdGVBbmRTaGVsbEJsYWNrNCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NsYXRlNS5wbmcnO1xuLy8gaW1wb3J0IFNsYXRlQW5kU2hlbGxXaGl0ZTAgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9zaGVsbDEucG5nJztcbi8vIGltcG9ydCBTbGF0ZUFuZFNoZWxsV2hpdGUxIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zbGF0ZS1hbmQtc2hlbGwvc2hlbGwyLnBuZyc7XG4vLyBpbXBvcnQgU2xhdGVBbmRTaGVsbFdoaXRlMiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NoZWxsMy5wbmcnO1xuLy8gaW1wb3J0IFNsYXRlQW5kU2hlbGxXaGl0ZTMgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9zaGVsbDQucG5nJztcbi8vIGltcG9ydCBTbGF0ZUFuZFNoZWxsV2hpdGU0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zbGF0ZS1hbmQtc2hlbGwvc2hlbGw1LnBuZyc7XG5cbi8vIGltcG9ydCBXYWxudXRCb2FyZCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvd2FsbnV0L2JvYXJkLmpwZyc7XG4vLyBpbXBvcnQgV2FsbnV0QmxhY2sgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3dhbG51dC9ibGFjay5wbmcnO1xuLy8gaW1wb3J0IFdhbG51dFdoaXRlIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS93YWxudXQvd2hpdGUucG5nJztcblxuLy8gaW1wb3J0IFBob3RvcmVhbGlzdGljQm9hcmQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3Bob3RvcmVhbGlzdGljL2JvYXJkLnBuZyc7XG4vLyBpbXBvcnQgUGhvdG9yZWFsaXN0aWNCbGFjayBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvcGhvdG9yZWFsaXN0aWMvYmxhY2sucG5nJztcbi8vIGltcG9ydCBQaG90b3JlYWxpc3RpY1doaXRlIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9waG90b3JlYWxpc3RpYy93aGl0ZS5wbmcnO1xuaW1wb3J0IHtDZW50ZXIsIE1hcmt9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtjYWxjVmlzaWJsZUFyZWF9IGZyb20gJy4vdXRpbHMnO1xuXG4vLyBjb25zdCBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5sZXQgZGV2aWNlUGl4ZWxSYXRpbyA9IDEuMDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gIC8vIGJyb3dzZXIgY29kZVxufVxuXG5jb25zdCBSZXNvdXJjZXMgPSB7XG4gIFtUaGVtZS5TdWJkdWVkXToge1xuICAgIGJvYXJkOiBTdWJkdWVkQm9hcmQsXG4gICAgYmxhY2s6IFtTdWJkdWVkQmxhY2tdLFxuICAgIHdoaXRlOiBbU3ViZHVlZFdoaXRlXSxcbiAgfSxcbiAgLy8gW1RoZW1lLlNoZWxsU3RvbmVdOiB7XG4gIC8vICAgYm9hcmQ6IFNoZWxsQm9hcmQsXG4gIC8vICAgYmxhY2s6IFtTaGVsbEJsYWNrXSxcbiAgLy8gICB3aGl0ZTogW1NoZWxsV2hpdGUwLCBTaGVsbFdoaXRlMSwgU2hlbGxXaGl0ZTIsIFNoZWxsV2hpdGUzLCBTaGVsbFdoaXRlNF0sXG4gIC8vIH0sXG4gIC8vIFtUaGVtZS5TbGF0ZUFuZFNoZWxsXToge1xuICAvLyAgIGJvYXJkOiBTbGF0ZUFuZFNoZWxsQm9hcmQsXG4gIC8vICAgYmxhY2s6IFtcbiAgLy8gICAgIFNsYXRlQW5kU2hlbGxCbGFjazAsXG4gIC8vICAgICBTbGF0ZUFuZFNoZWxsQmxhY2sxLFxuICAvLyAgICAgU2xhdGVBbmRTaGVsbEJsYWNrMixcbiAgLy8gICAgIFNsYXRlQW5kU2hlbGxCbGFjazMsXG4gIC8vICAgICBTbGF0ZUFuZFNoZWxsQmxhY2s0LFxuICAvLyAgIF0sXG4gIC8vICAgd2hpdGU6IFtcbiAgLy8gICAgIFNsYXRlQW5kU2hlbGxXaGl0ZTAsXG4gIC8vICAgICBTbGF0ZUFuZFNoZWxsV2hpdGUxLFxuICAvLyAgICAgU2xhdGVBbmRTaGVsbFdoaXRlMixcbiAgLy8gICAgIFNsYXRlQW5kU2hlbGxXaGl0ZTMsXG4gIC8vICAgICBTbGF0ZUFuZFNoZWxsV2hpdGU0LFxuICAvLyAgIF0sXG4gIC8vIH0sXG4gIC8vIFtUaGVtZS5XYWxudXRdOiB7XG4gIC8vICAgYm9hcmQ6IFdhbG51dEJvYXJkLFxuICAvLyAgIGJsYWNrOiBbV2FsbnV0QmxhY2tdLFxuICAvLyAgIHdoaXRlOiBbV2FsbnV0V2hpdGVdLFxuICAvLyB9LFxuICAvLyBbVGhlbWUuUGhvdG9yZWFsaXN0aWNdOiB7XG4gIC8vICAgYm9hcmQ6IFBob3RvcmVhbGlzdGljQm9hcmQsXG4gIC8vICAgYmxhY2s6IFtQaG90b3JlYWxpc3RpY0JsYWNrXSxcbiAgLy8gICB3aGl0ZTogW1Bob3RvcmVhbGlzdGljV2hpdGVdLFxuICAvLyB9LFxufTtcblxuZXhwb3J0IHR5cGUgR2hvc3RCYW5PcHRpb25zID0ge1xuICBib2FyZFNpemU6IG51bWJlcjtcbiAgc2l6ZT86IG51bWJlcjtcbiAgLy8gdGhlbWU6IFN0b25lO1xuICBwYWRkaW5nOiBudW1iZXI7XG4gIHpvb20/OiBib29sZWFuO1xuICBleHRlbmQ6IG51bWJlcjtcbiAgdGhlbWU/OiBUaGVtZTtcbiAgY29vcmRpbmF0ZTogYm9vbGVhbjtcbiAgaW50ZXJhY3RpdmU6IGJvb2xlYW47XG59O1xuXG50eXBlIEdob3N0QmFuT3B0aW9uc1BhcmFtcyA9IHtcbiAgYm9hcmRTaXplPzogbnVtYmVyO1xuICBzaXplPzogbnVtYmVyO1xuICBwYWRkaW5nPzogbnVtYmVyO1xuICB6b29tPzogYm9vbGVhbjtcbiAgZXh0ZW5kPzogbnVtYmVyO1xuICB0aGVtZT86IFRoZW1lO1xuICBpbnRlcmFjdGl2ZT86IGJvb2xlYW47XG4gIGNvb3JkaW5hdGU/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIEdob3N0QmFuIHtcbiAgb3B0aW9uczogR2hvc3RCYW5PcHRpb25zID0ge1xuICAgIGJvYXJkU2l6ZTogMTksXG4gICAgcGFkZGluZzogMTAsXG4gICAgZXh0ZW5kOiAyLFxuICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICBjb29yZGluYXRlOiB0cnVlLFxuICB9O1xuICBkb206IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xuICBjYW52YXM/OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVzb3VyY2VzOiB7XG4gICAgYm9hcmQ6IEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsO1xuICAgIHdoaXRlOiBIVE1MSW1hZ2VFbGVtZW50W107XG4gICAgYmxhY2s6IEhUTUxJbWFnZUVsZW1lbnRbXTtcbiAgfTtcbiAgcHJpdmF0ZSBfdHVybjogS2k7XG4gIGN1cnNvcjogW251bWJlciwgbnVtYmVyXTtcbiAgY3Vyc29yUG9zOiBET01Qb2ludDtcbiAgbWF0OiBudW1iZXJbXVtdO1xuICBtYXJrczogc3RyaW5nW11bXTtcbiAgbWF4aHY6IG51bWJlcjtcbiAgdHJhbnNNYXQ6IERPTU1hdHJpeDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zPzogR2hvc3RCYW5PcHRpb25zUGFyYW1zKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgdGhpcy5yZXNvdXJjZXMgPSB7XG4gICAgICBib2FyZDogbnVsbCxcbiAgICAgIHdoaXRlOiBbXSxcbiAgICAgIGJsYWNrOiBbXSxcbiAgICB9O1xuICAgIHRoaXMubWF0ID0gemVyb3MoWzE5LCAxOV0pO1xuICAgIHRoaXMubWFya3MgPSBpbml0TWFya3MoWzE5LCAxOV0pO1xuICAgIHRoaXMuX3R1cm4gPSBLaS5CbGFjaztcbiAgICB0aGlzLmN1cnNvciA9IFsxOCwgMF07XG4gICAgdGhpcy5jdXJzb3JQb3MgPSBuZXcgRE9NUG9pbnQoKTtcbiAgICB0aGlzLm1heGh2ID0gdGhpcy5vcHRpb25zLmJvYXJkU2l6ZTtcbiAgICB0aGlzLnRyYW5zTWF0ID0gbmV3IERPTU1hdHJpeCgpO1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHNldFR1cm4odHVybjogS2kpIHtcbiAgICB0aGlzLl90dXJuID0gdHVybjtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuY2FudmFzIHx8ICF0aGlzLmRvbSkgcmV0dXJuO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGNvbnN0IHtzaXplfSA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAoc2l6ZSkge1xuICAgICAgY2FudmFzLndpZHRoID0gc2l6ZTtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7Y2xpZW50V2lkdGh9ID0gdGhpcy5kb207XG4gICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBjbGllbnRXaWR0aCArICdweCc7XG4gICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gY2xpZW50V2lkdGggKyAncHgnO1xuICAgICAgY2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihjbGllbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3IoY2xpZW50V2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvKTtcbiAgICB9XG4gIH1cblxuICBpbml0KGRvbTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm1hdCA9IHplcm9zKFsxOSwgMTldKTtcbiAgICB0aGlzLm1hcmtzID0gaW5pdE1hcmtzKFsxOSwgMTldKTtcbiAgICB0aGlzLnRyYW5zTWF0ID0gbmV3IERPTU1hdHJpeCgpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5kb20gPSBkb207XG4gICAgdGhpcy5yZXNpemUoKTtcbiAgICBkb20uZmlyc3RDaGlsZD8ucmVtb3ZlKCk7XG4gICAgZG9tLmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgdGhpcy5yZW5kZXJJbnRlcmFjdGl2ZSgpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBHaG9zdEJhbk9wdGlvbnNQYXJhbXMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7Li4udGhpcy5vcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgfVxuXG4gIHJlbmRlckludGVyYWN0aXZlKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGlmICghY2FudmFzKSByZXR1cm47XG4gICAgY29uc3Qge3BhZGRpbmd9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHtzcGFjZX0gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcblxuICAgIGNvbnN0IHNldEN1cnNvcldpdGhSZW5kZXIgPSAoZG9tUG9pbnQ6IERPTVBvaW50KSA9PiB7XG4gICAgICBjb25zdCBwb2ludCA9IHRoaXMudHJhbnNNYXQuaW52ZXJzZSgpLnRyYW5zZm9ybVBvaW50KGRvbVBvaW50KTtcbiAgICAgIGNvbnN0IGlkeCA9IE1hdGgucm91bmQoKHBvaW50LnggLSBwYWRkaW5nICsgc3BhY2UgLyAyKSAvIHNwYWNlKTtcbiAgICAgIGNvbnN0IGlkeSA9IE1hdGgucm91bmQoKHBvaW50LnkgLSBwYWRkaW5nICsgc3BhY2UgLyAyKSAvIHNwYWNlKTtcbiAgICAgIGNvbnN0IHh4ID0gaWR4ICogc3BhY2U7XG4gICAgICBjb25zdCB5eSA9IGlkeSAqIHNwYWNlO1xuICAgICAgY29uc3QgcCA9IHRoaXMudHJhbnNNYXQudHJhbnNmb3JtUG9pbnQobmV3IERPTVBvaW50KHh4LCB5eSkpO1xuICAgICAgdGhpcy5jdXJzb3JQb3MgPSBwO1xuICAgICAgdGhpcy5jdXJzb3IgPSBbaWR4IC0gMSwgaWR5IC0gMV07XG4gICAgICB0aGlzLnJlbmRlcih0aGlzLm1hdCwgdGhpcy5tYXJrcyk7XG4gICAgfTtcbiAgICBjb25zdCBvblRvdWNoTW92ZSA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXM7XG4gICAgICBjb25zdCBwb2ludCA9IG5ldyBET01Qb2ludChcbiAgICAgICAgKHRvdWNoZXNbMF0uY2xpZW50WCAtIHJlY3QubGVmdCkgKiBkZXZpY2VQaXhlbFJhdGlvLFxuICAgICAgICAodG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC50b3ApICogZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgKTtcbiAgICAgIHNldEN1cnNvcldpdGhSZW5kZXIocG9pbnQpO1xuICAgIH07XG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgcG9pbnQgPSBuZXcgRE9NUG9pbnQoXG4gICAgICAgIGUub2Zmc2V0WCAqIGRldmljZVBpeGVsUmF0aW8sXG4gICAgICAgIGUub2Zmc2V0WSAqIGRldmljZVBpeGVsUmF0aW9cbiAgICAgICk7XG4gICAgICBzZXRDdXJzb3JXaXRoUmVuZGVyKHBvaW50KTtcbiAgICB9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmUpIHtcbiAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICB9XG4gIH1cblxuICBzZXRUaGVtZSh0aGVtZTogVGhlbWUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRoZW1lID09PSB0aGVtZSkgcmV0dXJuO1xuICAgIGNvbnN0IHNoYWRvd1N0eWxlID0gJzNweCAzcHggM3B4ICNhYWFhYWEnO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy50aGVtZSA9IHRoZW1lO1xuICAgICAgaWYgKHRoZW1lID09PSBUaGVtZS5CbGFja0FuZFdoaXRlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCAwcHggIzAwMDAwMCc7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGVtZSA9PT0gVGhlbWUuU3ViZHVlZFxuICAgICAgICAvLyB8fFxuICAgICAgICAvLyB0aGVtZSA9PT0gVGhlbWUuUGhvdG9yZWFsaXN0aWMgfHxcbiAgICAgICAgLy8gdGhlbWUgPT09IFRoZW1lLlNoZWxsU3RvbmUgfHxcbiAgICAgICAgLy8gdGhlbWUgPT09IFRoZW1lLlNsYXRlQW5kU2hlbGwgfHxcbiAgICAgICAgLy8gdGhlbWUgPT09IFRoZW1lLldhbG51dFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkVGhlbWUgPSBSZXNvdXJjZXNbdGhlbWVdO1xuICAgICAgICBib2FyZC5zcmMgPSBib2FyZFRoZW1lLmJvYXJkOyAvLyBTZXQgc291cmNlIHBhdGhcblxuICAgICAgICBjb25zdCBibGFja3MgPSBSZXNvdXJjZXNbdGhlbWVdLmJsYWNrLm1hcChpID0+IHtcbiAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpbWcuc3JjID0gaTtcbiAgICAgICAgICByZXR1cm4gaW1nO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd2hpdGVzID0gUmVzb3VyY2VzW3RoZW1lXS53aGl0ZS5tYXAoaSA9PiB7XG4gICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW1nLnNyYyA9IGk7XG4gICAgICAgICAgcmV0dXJuIGltZztcbiAgICAgICAgfSk7XG4gICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgIEFycmF5LmZyb20oW2JvYXJkLCAuLi5ibGFja3MsIC4uLndoaXRlc10pXG4gICAgICAgICAgICAuZmlsdGVyKGltZyA9PiAhaW1nLmNvbXBsZXRlKVxuICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgaW1nID0+XG4gICAgICAgICAgICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNvdXJjZXMuYmxhY2sgPSBibGFja3M7XG4gICAgICAgICAgdGhpcy5yZXNvdXJjZXMud2hpdGUgPSB3aGl0ZXM7XG4gICAgICAgICAgdGhpcy5yZXNvdXJjZXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgICB0aGlzLnJlbmRlcih0aGlzLm1hdCwgdGhpcy5tYXJrcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnRoZW1lID0gVGhlbWUuRmxhdDtcbiAgICAgICAgY2FudmFzLnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd1N0eWxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihtYXQ/OiBudW1iZXJbXVtdLCBtYXJrcz86IHN0cmluZ1tdW10pIHtcbiAgICBpZiAobWF0KSB0aGlzLm1hdCA9IG1hdDtcbiAgICBpZiAobWFya3MpIHRoaXMubWFya3MgPSBtYXJrcztcbiAgICBjb25zdCB7Ym9hcmRTaXplLCB6b29tLCBleHRlbmQsIGludGVyYWN0aXZlLCBjb29yZGluYXRlfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgIGNvbnN0IHt2aXNpYmxlQXJlYTogem9vbWVkVmlzaWJsZUFyZWEsIGNlbnRlcn0gPSBjYWxjVmlzaWJsZUFyZWEoXG4gICAgICAgIHRoaXMubWF0LFxuICAgICAgICBib2FyZFNpemUsXG4gICAgICAgIGV4dGVuZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHZpc2libGVBcmVhID0gem9vbVxuICAgICAgICA/IHpvb21lZFZpc2libGVBcmVhXG4gICAgICAgIDogW1xuICAgICAgICAgICAgWzAsIDE4XSxcbiAgICAgICAgICAgIFswLCAxOF0sXG4gICAgICAgICAgXTtcblxuICAgICAgaWYgKHpvb20gJiYgY3R4KSB7XG4gICAgICAgIGNvbnN0IHtzcGFjZX0gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcbiAgICAgICAgY29uc3Qgem9vbWVkQm9hcmRTaXplID0gdmlzaWJsZUFyZWFbMF1bMV0gLSB2aXNpYmxlQXJlYVswXVswXSArIDE7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gMSAvICh6b29tZWRCb2FyZFNpemUgLyBib2FyZFNpemUpO1xuXG4gICAgICAgIGxldCBvZmZzZXRYID0gMDtcbiAgICAgICAgbGV0IG9mZnNldFkgPSAwO1xuICAgICAgICBzd2l0Y2ggKGNlbnRlcikge1xuICAgICAgICAgIGNhc2UgQ2VudGVyLlRvcExlZnQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIENlbnRlci5Ub3BSaWdodDpcbiAgICAgICAgICAgIG9mZnNldFggPVxuICAgICAgICAgICAgICB2aXNpYmxlQXJlYVswXVswXSAqIHNwYWNlICogc2NhbGUgK1xuICAgICAgICAgICAgICAodGhpcy5vcHRpb25zLnBhZGRpbmcgLyAyKSAqIHNjYWxlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBDZW50ZXIuQm90dG9tTGVmdDpcbiAgICAgICAgICAgIG9mZnNldFkgPVxuICAgICAgICAgICAgICB2aXNpYmxlQXJlYVsxXVswXSAqIHNwYWNlICogc2NhbGUgK1xuICAgICAgICAgICAgICAodGhpcy5vcHRpb25zLnBhZGRpbmcgLyAyKSAqIHNjYWxlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBDZW50ZXIuQm90dG9tUmlnaHQ6XG4gICAgICAgICAgICBvZmZzZXRYID1cbiAgICAgICAgICAgICAgdmlzaWJsZUFyZWFbMF1bMF0gKiBzcGFjZSAqIHNjYWxlICtcbiAgICAgICAgICAgICAgKHRoaXMub3B0aW9ucy5wYWRkaW5nIC8gMikgKiBzY2FsZTtcbiAgICAgICAgICAgIG9mZnNldFkgPVxuICAgICAgICAgICAgICB2aXNpYmxlQXJlYVsxXVswXSAqIHNwYWNlICogc2NhbGUgK1xuICAgICAgICAgICAgICAodGhpcy5vcHRpb25zLnBhZGRpbmcgLyAyKSAqIHNjYWxlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc01hdCA9IG5ldyBET01NYXRyaXgoKTtcbiAgICAgICAgdGhpcy50cmFuc01hdC50cmFuc2xhdGVTZWxmKC1vZmZzZXRYLCAtb2Zmc2V0WSk7XG4gICAgICAgIHRoaXMudHJhbnNNYXQuc2NhbGVTZWxmKHNjYWxlLCBzY2FsZSk7XG4gICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0odGhpcy50cmFuc01hdCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZHJhd0JhbigpO1xuICAgICAgdGhpcy5kcmF3Qm9hcmRMaW5lKHZpc2libGVBcmVhKTtcbiAgICAgIHRoaXMuZHJhd1N0YXJzKHZpc2libGVBcmVhKTtcbiAgICAgIGlmIChpbnRlcmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmRyYXdDdXJzb3IodmlzaWJsZUFyZWEpO1xuICAgICAgfVxuICAgICAgaWYgKGNvb3JkaW5hdGUpIHtcbiAgICAgICAgdGhpcy5kcmF3Q29vcmRpbmF0ZSh2aXNpYmxlQXJlYSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRyYXdTdG9uZXMobWF0ID8/IHRoaXMubWF0KTtcbiAgICAgIHRoaXMuZHJhd01hcmtzKG1hdCA/PyB0aGlzLm1hdCwgbWFya3MgPz8gdGhpcy5tYXJrcyk7XG4gICAgICAvLyBjdHg/LnJlc3RvcmUoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhckNhbnZhcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpZiAoY3R4KSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRyYXdNYXJrcyA9IChtYXQ6IG51bWJlcltdW10sIG1hcmtzOiBzdHJpbmdbXVtdKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ21hcmtzJywgbWFya3MpO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFya3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXJrc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWFya3NbaV1bal07XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3Qge3NwYWNlLCBzY2FsZWRQYWRkaW5nfSA9IHRoaXMuY2FsY1NwYWNlQW5kUGFkZGluZygpO1xuICAgICAgICAgICAgY29uc3QgeCA9IHNjYWxlZFBhZGRpbmcgKyBpICogc3BhY2U7XG4gICAgICAgICAgICBjb25zdCB5ID0gc2NhbGVkUGFkZGluZyArIGogKiBzcGFjZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gTWFyay5DdXJyZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmMoeCwgeSwgc3BhY2UgKiAwLjMsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICBpZiAobWF0W2ldW2pdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2ZmZic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkcmF3QmFuID0gKCkgPT4ge1xuICAgIGNvbnN0IHtjYW52YXN9ID0gdGhpcztcbiAgICBjb25zdCB7dGhlbWV9ID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGNhbnZhcy5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMnB4JztcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgaWYgKGN0eCkge1xuICAgICAgICBpZiAodGhlbWUgPT09IFRoZW1lLkJsYWNrQW5kV2hpdGUpIHtcbiAgICAgICAgICBjYW52YXMuc3R5bGUuYm94U2hhZG93ID0gJzBweCAwcHggMHB4ICMwMDAwMDAnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoZW1lID09PSBUaGVtZS5GbGF0KSB7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjRUNCNTVBJztcbiAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGVtZSA9PT0gVGhlbWUuV2FsbnV0KSB7XG4gICAgICAgICAgaWYgKHRoaXMucmVzb3VyY2VzLmJvYXJkKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICB0aGlzLnJlc291cmNlcy5ib2FyZCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5yZXNvdXJjZXMuYm9hcmQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjdHguY3JlYXRlUGF0dGVybih0aGlzLnJlc291cmNlcy5ib2FyZCwgJ3JlcGVhdCcpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBhdHRlcm47XG4gICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkcmF3Qm9hcmRMaW5lID0gKFxuICAgIHZpc2libGVBcmVhID0gW1xuICAgICAgWzAsIDE4XSxcbiAgICAgIFswLCAxOF0sXG4gICAgXVxuICApID0+IHtcbiAgICBpZiAoIXRoaXMuY2FudmFzKSByZXR1cm47XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoY3R4KSB7XG4gICAgICBjb25zdCB7c3BhY2UsIHNjYWxlZFBhZGRpbmd9ID0gdGhpcy5jYWxjU3BhY2VBbmRQYWRkaW5nKCk7XG5cbiAgICAgIGN0eC5saW5lV2lkdGggPSAxICogZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBmb3IgKGxldCBpID0gdmlzaWJsZUFyZWFbMF1bMF07IGkgPD0gdmlzaWJsZUFyZWFbMF1bMV07IGkrKykge1xuICAgICAgICBjdHgubW92ZVRvKFxuICAgICAgICAgIGkgKiBzcGFjZSArIHNjYWxlZFBhZGRpbmcsXG4gICAgICAgICAgc2NhbGVkUGFkZGluZyArIHZpc2libGVBcmVhWzFdWzBdICogc3BhY2VcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICBpICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nLFxuICAgICAgICAgIHNwYWNlICogdmlzaWJsZUFyZWFbMV1bMV0gKyBzY2FsZWRQYWRkaW5nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gdmlzaWJsZUFyZWFbMV1bMF07IGkgPD0gdmlzaWJsZUFyZWFbMV1bMV07IGkrKykge1xuICAgICAgICBjdHgubW92ZVRvKFxuICAgICAgICAgIHZpc2libGVBcmVhWzBdWzBdICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nLFxuICAgICAgICAgIGkgKiBzcGFjZSArIHNjYWxlZFBhZGRpbmdcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICB2aXNpYmxlQXJlYVswXVsxXSAqIHNwYWNlICsgc2NhbGVkUGFkZGluZyxcbiAgICAgICAgICBpICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICB9O1xuXG4gIGRyYXdTdGFycyA9IChcbiAgICB2aXNpYmxlQXJlYSA9IFtcbiAgICAgIFswLCAxOF0sXG4gICAgICBbMCwgMThdLFxuICAgIF1cbiAgKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbnZhcykgcmV0dXJuO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY29uc3Qge3NwYWNlLCBzY2FsZWRQYWRkaW5nfSA9IHRoaXMuY2FsY1NwYWNlQW5kUGFkZGluZygpO1xuICAgICAgLy8gRHJhd2luZyBzdGFyXG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBbMywgOSwgMTVdLmZvckVhY2goaSA9PiB7XG4gICAgICAgIFszLCA5LCAxNV0uZm9yRWFjaChqID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBpID4gdmlzaWJsZUFyZWFbMF1bMF0gJiZcbiAgICAgICAgICAgIGkgPCB2aXNpYmxlQXJlYVswXVsxXSAmJlxuICAgICAgICAgICAgaiA+IHZpc2libGVBcmVhWzFdWzBdICYmXG4gICAgICAgICAgICBqIDwgdmlzaWJsZUFyZWFbMV1bMV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICAgIGkgKiBzcGFjZSArIHNjYWxlZFBhZGRpbmcsXG4gICAgICAgICAgICAgIGogKiBzcGFjZSArIHNjYWxlZFBhZGRpbmcsXG4gICAgICAgICAgICAgIDMgKiBkZXZpY2VQaXhlbFJhdGlvLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAyICogTWF0aC5QSSxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRyYXdDb29yZGluYXRlID0gKFxuICAgIHZpc2libGVBcmVhID0gW1xuICAgICAgWzAsIDE4XSxcbiAgICAgIFswLCAxOF0sXG4gICAgXVxuICApID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IHtzcGFjZSwgc2NhbGVkUGFkZGluZ30gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcbiAgICBpZiAoY3R4KSB7XG4gICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAwMDAnO1xuICAgICAgY3R4LmZvbnQgPSBgYm9sZCAke3NwYWNlIC8gMi44fXB4IEhlbHZldGljYWA7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IHNwYWNlIC8gMztcbiAgICAgIEExX0xFVFRFUlMuZm9yRWFjaCgobCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IHNwYWNlICogaW5kZXggKyBzY2FsZWRQYWRkaW5nO1xuICAgICAgICBpZiAoaW5kZXggPj0gdmlzaWJsZUFyZWFbMF1bMF0gJiYgaW5kZXggPD0gdmlzaWJsZUFyZWFbMF1bMV0pIHtcbiAgICAgICAgICBjdHguZmlsbFRleHQobCwgeCwgMCArIG9mZnNldCk7XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KGwsIHgsIGNhbnZhcy5oZWlnaHQgLSBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIEExX05VTUJFUlMuZm9yRWFjaCgobDogbnVtYmVyLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB5ID0gc3BhY2UgKiBpbmRleCArIHNjYWxlZFBhZGRpbmc7XG4gICAgICAgIGlmIChpbmRleCA+PSB2aXNpYmxlQXJlYVsxXVswXSAmJiBpbmRleCA8PSB2aXNpYmxlQXJlYVsxXVsxXSkge1xuICAgICAgICAgIGN0eC5maWxsVGV4dChsLnRvU3RyaW5nKCksIG9mZnNldCwgeSk7XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KGwudG9TdHJpbmcoKSwgY2FudmFzLndpZHRoIC0gb2Zmc2V0LCB5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNhbGNTcGFjZUFuZFBhZGRpbmcgPSAoKSA9PiB7XG4gICAgbGV0IHNwYWNlID0gMDtcbiAgICBsZXQgc2NhbGVkUGFkZGluZyA9IDA7XG4gICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICBjb25zdCB7cGFkZGluZywgYm9hcmRTaXplfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIC8vIHNjYWxlZFBhZGRpbmcgPSBwYWRkaW5nICogZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgIHNjYWxlZFBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgc3BhY2UgPSAodGhpcy5jYW52YXMud2lkdGggLSBwYWRkaW5nICogMikgLyBib2FyZFNpemU7XG4gICAgICBzY2FsZWRQYWRkaW5nID0gc2NhbGVkUGFkZGluZyArIHNwYWNlIC8gMjtcbiAgICB9XG4gICAgcmV0dXJuIHtzcGFjZSwgc2NhbGVkUGFkZGluZ307XG4gIH07XG5cbiAgZHJhd0N1cnNvciA9ICh2aXNpYmxlQXJlYTogbnVtYmVyW11bXSkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGNvbnN0IHtwYWRkaW5nfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY29uc3Qge3NwYWNlfSA9IHRoaXMuY2FsY1NwYWNlQW5kUGFkZGluZygpO1xuXG4gICAgICBjb25zdCBbaWR4LCBpZHldID0gdGhpcy5jdXJzb3I7XG4gICAgICBpZiAoaWR4IDwgdmlzaWJsZUFyZWFbMF1bMF0gfHwgaWR4ID4gdmlzaWJsZUFyZWFbMF1bMV0pIHJldHVybjtcbiAgICAgIGlmIChpZHkgPCB2aXNpYmxlQXJlYVsxXVswXSB8fCBpZHkgPiB2aXNpYmxlQXJlYVsxXVsxXSkgcmV0dXJuO1xuICAgICAgY29uc3QgeCA9IGlkeCAqIHNwYWNlICsgc3BhY2UgLyAyICsgcGFkZGluZztcbiAgICAgIGNvbnN0IHkgPSBpZHkgKiBzcGFjZSArIHNwYWNlIC8gMiArIHBhZGRpbmc7XG5cbiAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHNwYWNlICogMC40O1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoeCwgeSwgc2l6ZSwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC42O1xuICAgICAgICBpZiAodGhpcy5fdHVybiA9PT0gS2kuQmxhY2spIHtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl90dXJuID09PSBLaS5XaGl0ZSkge1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjRkZGJztcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkYnO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZHJhd1N0b25lcyA9IChtYXRyaXg6IG51bWJlcltdW10pID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBjb25zdCB7dGhlbWV9ID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4W2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBtYXRyaXhbaV1bal07XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgY29uc3Qge3NwYWNlLCBzY2FsZWRQYWRkaW5nfSA9IHRoaXMuY2FsY1NwYWNlQW5kUGFkZGluZygpO1xuICAgICAgICAgICAgICBjb25zdCB4ID0gc2NhbGVkUGFkZGluZyArIGkgKiBzcGFjZTtcbiAgICAgICAgICAgICAgY29uc3QgeSA9IHNjYWxlZFBhZGRpbmcgKyBqICogc3BhY2U7XG5cbiAgICAgICAgICAgICAgY29uc3QgcmF0aW8gPSAwLjQ2O1xuICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhlbWUgIT09IFRoZW1lLlN1YmR1ZWQgJiZcbiAgICAgICAgICAgICAgICB0aGVtZSAhPT0gVGhlbWUuQmxhY2tBbmRXaGl0ZSAmJlxuICAgICAgICAgICAgICAgIHRoZW1lICE9PSBUaGVtZS5GbGF0XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gMztcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDM7XG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gJyM1NTUnO1xuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gODtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhlbWUgPT09IFRoZW1lLkJsYWNrQW5kV2hpdGUgfHwgdGhlbWUgPT09IFRoZW1lLkZsYXQpIHtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYyh4LCB5LCBzcGFjZSAqIHJhdGlvLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kID0gaSArIDEwICsgajtcbiAgICAgICAgICAgICAgICBsZXQgaW1nO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgaW1nID0gdGhpcy5yZXNvdXJjZXMuYmxhY2tbbW9kICUgdGhpcy5yZXNvdXJjZXMuYmxhY2subGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaW1nID0gdGhpcy5yZXNvdXJjZXMud2hpdGVbbW9kICUgdGhpcy5yZXNvdXJjZXMud2hpdGUubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGltZykge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHNwYWNlICogcmF0aW8gKiAyO1xuICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHggLSBzaXplIC8gMiwgeSAtIHNpemUgLyAyLCBzaXplLCBzaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsiYmFzZVNsaWNlIiwiYXJyYXkiLCJzdGFydCIsImVuZCIsImluZGV4IiwibGVuZ3RoIiwicmVzdWx0IiwiQXJyYXkiLCJfYmFzZVNsaWNlIiwiZXEiLCJ2YWx1ZSIsIm90aGVyIiwiZXFfMSIsImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJPYmplY3QiLCJfZnJlZUdsb2JhbCIsInJlcXVpcmUkJDAiLCJmcmVlU2VsZiIsInNlbGYiLCJyb290IiwiRnVuY3Rpb24iLCJfcm9vdCIsIlN5bWJvbCIsIl9TeW1ib2wiLCJvYmplY3RQcm90byIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJ1bmRlZmluZWQiLCJnZXRSYXdUYWciLCJpc093biIsImNhbGwiLCJ0YWciLCJ1bm1hc2tlZCIsImUiLCJfZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJfb2JqZWN0VG9TdHJpbmciLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJiYXNlR2V0VGFnIiwiX2Jhc2VHZXRUYWciLCJpc09iamVjdCIsInR5cGUiLCJpc09iamVjdF8xIiwiYXN5bmNUYWciLCJmdW5jVGFnIiwiZ2VuVGFnIiwicHJveHlUYWciLCJpc0Z1bmN0aW9uIiwiaXNGdW5jdGlvbl8xIiwiTUFYX1NBRkVfSU5URUdFUiIsImlzTGVuZ3RoIiwiaXNMZW5ndGhfMSIsImlzQXJyYXlMaWtlIiwiaXNBcnJheUxpa2VfMSIsInJlSXNVaW50IiwiaXNJbmRleCIsInRlc3QiLCJfaXNJbmRleCIsInJlcXVpcmUkJDMiLCJpc0l0ZXJhdGVlQ2FsbCIsIm9iamVjdCIsIl9pc0l0ZXJhdGVlQ2FsbCIsInJlV2hpdGVzcGFjZSIsInRyaW1tZWRFbmRJbmRleCIsInN0cmluZyIsImNoYXJBdCIsIl90cmltbWVkRW5kSW5kZXgiLCJyZVRyaW1TdGFydCIsImJhc2VUcmltIiwic2xpY2UiLCJyZXBsYWNlIiwiX2Jhc2VUcmltIiwiaXNPYmplY3RMaWtlIiwiaXNPYmplY3RMaWtlXzEiLCJzeW1ib2xUYWciLCJpc1N5bWJvbCIsImlzU3ltYm9sXzEiLCJOQU4iLCJyZUlzQmFkSGV4IiwicmVJc0JpbmFyeSIsInJlSXNPY3RhbCIsImZyZWVQYXJzZUludCIsInBhcnNlSW50IiwidG9OdW1iZXIiLCJ2YWx1ZU9mIiwiaXNCaW5hcnkiLCJ0b051bWJlcl8xIiwiSU5GSU5JVFkiLCJNQVhfSU5URUdFUiIsInRvRmluaXRlIiwic2lnbiIsInRvRmluaXRlXzEiLCJ0b0ludGVnZXIiLCJyZW1haW5kZXIiLCJ0b0ludGVnZXJfMSIsIm5hdGl2ZUNlaWwiLCJNYXRoIiwiY2VpbCIsIm5hdGl2ZU1heCIsIm1heCIsImNodW5rIiwic2l6ZSIsImd1YXJkIiwicmVzSW5kZXgiLCJjaHVua18xIiwiS2kiLCJUaGVtZSIsIkNlbnRlciIsIk1hcmsiLCJsaXN0Q2FjaGVDbGVhciIsIl9fZGF0YV9fIiwiX2xpc3RDYWNoZUNsZWFyIiwiYXNzb2NJbmRleE9mIiwia2V5IiwiX2Fzc29jSW5kZXhPZiIsImFycmF5UHJvdG8iLCJzcGxpY2UiLCJsaXN0Q2FjaGVEZWxldGUiLCJkYXRhIiwibGFzdEluZGV4IiwicG9wIiwiX2xpc3RDYWNoZURlbGV0ZSIsImxpc3RDYWNoZUdldCIsIl9saXN0Q2FjaGVHZXQiLCJsaXN0Q2FjaGVIYXMiLCJfbGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwicHVzaCIsIl9saXN0Q2FjaGVTZXQiLCJyZXF1aXJlJCQ0IiwiTGlzdENhY2hlIiwiZW50cmllcyIsImNsZWFyIiwiZW50cnkiLCJzZXQiLCJnZXQiLCJoYXMiLCJfTGlzdENhY2hlIiwic3RhY2tDbGVhciIsIl9zdGFja0NsZWFyIiwic3RhY2tEZWxldGUiLCJfc3RhY2tEZWxldGUiLCJzdGFja0dldCIsIl9zdGFja0dldCIsInN0YWNrSGFzIiwiX3N0YWNrSGFzIiwiY29yZUpzRGF0YSIsIl9jb3JlSnNEYXRhIiwibWFza1NyY0tleSIsInVpZCIsImV4ZWMiLCJrZXlzIiwiSUVfUFJPVE8iLCJpc01hc2tlZCIsImZ1bmMiLCJfaXNNYXNrZWQiLCJmdW5jUHJvdG8iLCJmdW5jVG9TdHJpbmciLCJ0b1NvdXJjZSIsIl90b1NvdXJjZSIsInJlUmVnRXhwQ2hhciIsInJlSXNIb3N0Q3RvciIsInJlSXNOYXRpdmUiLCJSZWdFeHAiLCJiYXNlSXNOYXRpdmUiLCJwYXR0ZXJuIiwiX2Jhc2VJc05hdGl2ZSIsImdldFZhbHVlIiwiX2dldFZhbHVlIiwiZ2V0TmF0aXZlIiwiX2dldE5hdGl2ZSIsIk1hcCIsIl9NYXAiLCJuYXRpdmVDcmVhdGUiLCJfbmF0aXZlQ3JlYXRlIiwiaGFzaENsZWFyIiwiX2hhc2hDbGVhciIsImhhc2hEZWxldGUiLCJfaGFzaERlbGV0ZSIsIkhBU0hfVU5ERUZJTkVEIiwiaGFzaEdldCIsIl9oYXNoR2V0IiwiaGFzaEhhcyIsIl9oYXNoSGFzIiwiaGFzaFNldCIsIl9oYXNoU2V0IiwiSGFzaCIsIl9IYXNoIiwibWFwQ2FjaGVDbGVhciIsIl9tYXBDYWNoZUNsZWFyIiwiaXNLZXlhYmxlIiwiX2lzS2V5YWJsZSIsImdldE1hcERhdGEiLCJtYXAiLCJfZ2V0TWFwRGF0YSIsIm1hcENhY2hlRGVsZXRlIiwiX21hcENhY2hlRGVsZXRlIiwibWFwQ2FjaGVHZXQiLCJfbWFwQ2FjaGVHZXQiLCJtYXBDYWNoZUhhcyIsIl9tYXBDYWNoZUhhcyIsIm1hcENhY2hlU2V0IiwiX21hcENhY2hlU2V0IiwiTWFwQ2FjaGUiLCJfTWFwQ2FjaGUiLCJMQVJHRV9BUlJBWV9TSVpFIiwic3RhY2tTZXQiLCJwYWlycyIsIl9zdGFja1NldCIsInJlcXVpcmUkJDUiLCJTdGFjayIsIl9TdGFjayIsImFycmF5RWFjaCIsIml0ZXJhdGVlIiwiX2FycmF5RWFjaCIsImRlZmluZVByb3BlcnR5IiwiX2RlZmluZVByb3BlcnR5IiwiYmFzZUFzc2lnblZhbHVlIiwiX2Jhc2VBc3NpZ25WYWx1ZSIsImFzc2lnblZhbHVlIiwib2JqVmFsdWUiLCJfYXNzaWduVmFsdWUiLCJjb3B5T2JqZWN0Iiwic291cmNlIiwicHJvcHMiLCJjdXN0b21pemVyIiwiaXNOZXciLCJuZXdWYWx1ZSIsIl9jb3B5T2JqZWN0IiwiYmFzZVRpbWVzIiwibiIsIl9iYXNlVGltZXMiLCJhcmdzVGFnIiwiYmFzZUlzQXJndW1lbnRzIiwiX2Jhc2VJc0FyZ3VtZW50cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiaXNBcmd1bWVudHMiLCJhcmd1bWVudHMiLCJpc0FyZ3VtZW50c18xIiwiaXNBcnJheSIsImlzQXJyYXlfMSIsInN0dWJGYWxzZSIsInN0dWJGYWxzZV8xIiwiZnJlZUV4cG9ydHMiLCJleHBvcnRzIiwibm9kZVR5cGUiLCJmcmVlTW9kdWxlIiwibW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsIkJ1ZmZlciIsIm5hdGl2ZUlzQnVmZmVyIiwiaXNCdWZmZXIiLCJhcnJheVRhZyIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJtYXBUYWciLCJudW1iZXJUYWciLCJvYmplY3RUYWciLCJyZWdleHBUYWciLCJzZXRUYWciLCJzdHJpbmdUYWciLCJ3ZWFrTWFwVGFnIiwiYXJyYXlCdWZmZXJUYWciLCJkYXRhVmlld1RhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsInR5cGVkQXJyYXlUYWdzIiwiYmFzZUlzVHlwZWRBcnJheSIsIl9iYXNlSXNUeXBlZEFycmF5IiwiYmFzZVVuYXJ5IiwiX2Jhc2VVbmFyeSIsImZyZWVQcm9jZXNzIiwicHJvY2VzcyIsIm5vZGVVdGlsIiwidHlwZXMiLCJyZXF1aXJlIiwiYmluZGluZyIsIm5vZGVJc1R5cGVkQXJyYXkiLCJpc1R5cGVkQXJyYXkiLCJpc1R5cGVkQXJyYXlfMSIsImFycmF5TGlrZUtleXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJTdHJpbmciLCJfYXJyYXlMaWtlS2V5cyIsImlzUHJvdG90eXBlIiwiQ3RvciIsImNvbnN0cnVjdG9yIiwicHJvdG8iLCJfaXNQcm90b3R5cGUiLCJvdmVyQXJnIiwidHJhbnNmb3JtIiwiYXJnIiwiX292ZXJBcmciLCJuYXRpdmVLZXlzIiwiX25hdGl2ZUtleXMiLCJiYXNlS2V5cyIsIl9iYXNlS2V5cyIsImtleXNfMSIsImJhc2VBc3NpZ24iLCJfYmFzZUFzc2lnbiIsIm5hdGl2ZUtleXNJbiIsIl9uYXRpdmVLZXlzSW4iLCJiYXNlS2V5c0luIiwiaXNQcm90byIsIl9iYXNlS2V5c0luIiwia2V5c0luIiwia2V5c0luXzEiLCJiYXNlQXNzaWduSW4iLCJfYmFzZUFzc2lnbkluIiwiYWxsb2NVbnNhZmUiLCJjbG9uZUJ1ZmZlciIsImJ1ZmZlciIsImlzRGVlcCIsImNvcHkiLCJjb3B5QXJyYXkiLCJfY29weUFycmF5IiwiYXJyYXlGaWx0ZXIiLCJwcmVkaWNhdGUiLCJfYXJyYXlGaWx0ZXIiLCJzdHViQXJyYXkiLCJzdHViQXJyYXlfMSIsIm5hdGl2ZUdldFN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRTeW1ib2xzIiwic3ltYm9sIiwiX2dldFN5bWJvbHMiLCJjb3B5U3ltYm9scyIsIl9jb3B5U3ltYm9scyIsImFycmF5UHVzaCIsInZhbHVlcyIsIm9mZnNldCIsIl9hcnJheVB1c2giLCJnZXRQcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsIl9nZXRQcm90b3R5cGUiLCJnZXRTeW1ib2xzSW4iLCJfZ2V0U3ltYm9sc0luIiwiY29weVN5bWJvbHNJbiIsIl9jb3B5U3ltYm9sc0luIiwiYmFzZUdldEFsbEtleXMiLCJrZXlzRnVuYyIsInN5bWJvbHNGdW5jIiwiX2Jhc2VHZXRBbGxLZXlzIiwiZ2V0QWxsS2V5cyIsIl9nZXRBbGxLZXlzIiwiZ2V0QWxsS2V5c0luIiwiX2dldEFsbEtleXNJbiIsIkRhdGFWaWV3IiwiX0RhdGFWaWV3IiwiUHJvbWlzZSIsIl9Qcm9taXNlIiwiU2V0IiwiX1NldCIsIldlYWtNYXAiLCJfV2Vha01hcCIsInJlcXVpcmUkJDYiLCJwcm9taXNlVGFnIiwiZGF0YVZpZXdDdG9yU3RyaW5nIiwibWFwQ3RvclN0cmluZyIsInByb21pc2VDdG9yU3RyaW5nIiwic2V0Q3RvclN0cmluZyIsIndlYWtNYXBDdG9yU3RyaW5nIiwiZ2V0VGFnIiwiQXJyYXlCdWZmZXIiLCJyZXNvbHZlIiwiY3RvclN0cmluZyIsIl9nZXRUYWciLCJpbml0Q2xvbmVBcnJheSIsImlucHV0IiwiX2luaXRDbG9uZUFycmF5IiwiVWludDhBcnJheSIsIl9VaW50OEFycmF5IiwiY2xvbmVBcnJheUJ1ZmZlciIsImFycmF5QnVmZmVyIiwiYnl0ZUxlbmd0aCIsIl9jbG9uZUFycmF5QnVmZmVyIiwiY2xvbmVEYXRhVmlldyIsImRhdGFWaWV3IiwiYnl0ZU9mZnNldCIsIl9jbG9uZURhdGFWaWV3IiwicmVGbGFncyIsImNsb25lUmVnRXhwIiwicmVnZXhwIiwiX2Nsb25lUmVnRXhwIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xWYWx1ZU9mIiwiY2xvbmVTeW1ib2wiLCJfY2xvbmVTeW1ib2wiLCJjbG9uZVR5cGVkQXJyYXkiLCJ0eXBlZEFycmF5IiwiX2Nsb25lVHlwZWRBcnJheSIsImluaXRDbG9uZUJ5VGFnIiwiX2luaXRDbG9uZUJ5VGFnIiwib2JqZWN0Q3JlYXRlIiwiY3JlYXRlIiwiYmFzZUNyZWF0ZSIsIl9iYXNlQ3JlYXRlIiwiaW5pdENsb25lT2JqZWN0IiwiX2luaXRDbG9uZU9iamVjdCIsImJhc2VJc01hcCIsIl9iYXNlSXNNYXAiLCJub2RlSXNNYXAiLCJpc01hcCIsImlzTWFwXzEiLCJiYXNlSXNTZXQiLCJfYmFzZUlzU2V0Iiwibm9kZUlzU2V0IiwiaXNTZXQiLCJpc1NldF8xIiwicmVxdWlyZSQkNyIsInJlcXVpcmUkJDgiLCJyZXF1aXJlJCQ5IiwicmVxdWlyZSQkMTAiLCJyZXF1aXJlJCQxMSIsInJlcXVpcmUkJDEyIiwicmVxdWlyZSQkMTMiLCJyZXF1aXJlJCQxNCIsInJlcXVpcmUkJDE1IiwicmVxdWlyZSQkMTYiLCJyZXF1aXJlJCQxNyIsInJlcXVpcmUkJDE4IiwicmVxdWlyZSQkMTkiLCJyZXF1aXJlJCQyMCIsInJlcXVpcmUkJDIxIiwiQ0xPTkVfREVFUF9GTEFHIiwiQ0xPTkVfRkxBVF9GTEFHIiwiQ0xPTkVfU1lNQk9MU19GTEFHIiwiY2xvbmVhYmxlVGFncyIsImJhc2VDbG9uZSIsImJpdG1hc2siLCJzdGFjayIsImlzRmxhdCIsImlzRnVsbCIsImlzRnVuYyIsInN0YWNrZWQiLCJmb3JFYWNoIiwic3ViVmFsdWUiLCJhZGQiLCJfYmFzZUNsb25lIiwiY2xvbmVEZWVwIiwiY2xvbmVEZWVwXzEiLCJjbG9uZSIsImNsb25lXzEiLCJDb25zdC5TR0ZfTEVUVEVSUyIsIkNvbnN0LkExX0xFVFRFUlMiLCJDb25zdC5BMV9OVU1CRVJTIiwiaW1nIiwiU3ViZHVlZEJvYXJkIiwiU3ViZHVlZEJsYWNrIiwiU3ViZHVlZFdoaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLFNBQVNBLFdBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDcEMsTUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBYjtBQUFBLE1BQ0lDLE1BQU0sR0FBR0osS0FBSyxDQUFDSSxNQURuQjs7QUFHQSxNQUFJSCxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ2JBLElBQUFBLEtBQUssR0FBRyxDQUFDQSxLQUFELEdBQVNHLE1BQVQsR0FBa0IsQ0FBbEIsR0FBdUJBLE1BQU0sR0FBR0gsS0FBeEM7QUFDRDs7QUFDREMsRUFBQUEsR0FBRyxHQUFHQSxHQUFHLEdBQUdFLE1BQU4sR0FBZUEsTUFBZixHQUF3QkYsR0FBOUI7O0FBQ0EsTUFBSUEsR0FBRyxHQUFHLENBQVYsRUFBYTtBQUNYQSxJQUFBQSxHQUFHLElBQUlFLE1BQVA7QUFDRDs7QUFDREEsRUFBQUEsTUFBTSxHQUFHSCxLQUFLLEdBQUdDLEdBQVIsR0FBYyxDQUFkLEdBQW9CQSxHQUFHLEdBQUdELEtBQVAsS0FBa0IsQ0FBOUM7QUFDQUEsRUFBQUEsS0FBSyxNQUFNLENBQVg7QUFFQSxNQUFJSSxNQUFNLEdBQUdDLEtBQUssQ0FBQ0YsTUFBRCxDQUFsQjs7QUFDQSxTQUFPLEVBQUVELEtBQUYsR0FBVUMsTUFBakIsRUFBeUI7QUFDdkJDLElBQUFBLE1BQU0sQ0FBQ0YsS0FB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
