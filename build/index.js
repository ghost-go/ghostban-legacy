
  /**
   * @license
   * author: Byron Bai
   * ghostban.js v2.0.0-alpha.15
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
        this.marks = empty([19, 19]);
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
        this.marks = empty([19, 19]);
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
exports.empty = empty;
exports.move = move;
exports.posToSgf = posToSgf;
exports.sgfOffset = sgfOffset;
exports.sgfToPos = sgfToPos;
exports.showKi = showKi;
exports.zeros = zeros;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTbGljZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9GaW5pdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvSW50ZWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2h1bmsuanMiLCIuLi9zcmMvY29uc3QudHMiLCIuLi9zcmMvdHlwZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwQ2FjaGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VBc3NpZ25Jbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weUFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19EYXRhVmlldy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc01hcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ2xvbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2Nsb25lRGVlcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2xvbmUuanMiLCIuLi9zcmMvaGVscGVyLnRzIiwiLi4vc3JjL3V0aWxzLnRzIiwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc3ViZHVlZC9ib2FyZC5wbmciLCIuLi9zcmMvYXNzZXRzL2ltYWdlcy90aGVtZS9zdWJkdWVkL3doaXRlLnBuZyIsIi4uL3NyYy9hc3NldHMvaW1hZ2VzL3RoZW1lL3N1YmR1ZWQvYmxhY2sucG5nIiwiLi4vc3JjL2dob3N0YmFuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSBlbmQgPiBsZW5ndGggPyBsZW5ndGggOiBlbmQ7XG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlbmd0aDtcbiAgfVxuICBsZW5ndGggPSBzdGFydCA+IGVuZCA/IDAgOiAoKGVuZCAtIHN0YXJ0KSA+Pj4gMCk7XG4gIHN0YXJ0ID4+Pj0gMDtcblxuICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gYXJyYXlbaW5kZXggKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2xpY2U7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpXG4gICAgICApIHtcbiAgICByZXR1cm4gZXEob2JqZWN0W2luZGV4XSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0l0ZXJhdGVlQ2FsbDtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGEgc2luZ2xlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMvO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1FbmRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2VcbiAqIGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpIHtcbiAgdmFyIGluZGV4ID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgtLSAmJiByZVdoaXRlc3BhY2UudGVzdChzdHJpbmcuY2hhckF0KGluZGV4KSkpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmltbWVkRW5kSW5kZXg7XG4iLCJ2YXIgdHJpbW1lZEVuZEluZGV4ID0gcmVxdWlyZSgnLi9fdHJpbW1lZEVuZEluZGV4Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW1TdGFydCA9IC9eXFxzKy87XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udHJpbWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byB0cmltLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUcmltKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nXG4gICAgPyBzdHJpbmcuc2xpY2UoMCwgdHJpbW1lZEVuZEluZGV4KHN0cmluZykgKyAxKS5yZXBsYWNlKHJlVHJpbVN0YXJ0LCAnJylcbiAgICA6IHN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVHJpbTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciBiYXNlVHJpbSA9IHJlcXVpcmUoJy4vX2Jhc2VUcmltJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSBiYXNlVHJpbSh2YWx1ZSk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwidmFyIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwLFxuICAgIE1BWF9JTlRFR0VSID0gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDg7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIGZpbml0ZSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEyLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0Zpbml0ZSgzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b0Zpbml0ZShOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9GaW5pdGUoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvRmluaXRlKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b0Zpbml0ZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiAwO1xuICB9XG4gIHZhbHVlID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAodmFsdWUgPT09IElORklOSVRZIHx8IHZhbHVlID09PSAtSU5GSU5JVFkpIHtcbiAgICB2YXIgc2lnbiA9ICh2YWx1ZSA8IDAgPyAtMSA6IDEpO1xuICAgIHJldHVybiBzaWduICogTUFYX0lOVEVHRVI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHZhbHVlIDogMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0Zpbml0ZTtcbiIsInZhciB0b0Zpbml0ZSA9IHJlcXVpcmUoJy4vdG9GaW5pdGUnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGludGVnZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgaW50ZWdlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0ludGVnZXIoMy4yKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnRvSW50ZWdlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDBcbiAqXG4gKiBfLnRvSW50ZWdlcihJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9JbnRlZ2VyKCczLjInKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0b0Zpbml0ZSh2YWx1ZSksXG4gICAgICByZW1haW5kZXIgPSByZXN1bHQgJSAxO1xuXG4gIHJldHVybiByZXN1bHQgPT09IHJlc3VsdCA/IChyZW1haW5kZXIgPyByZXN1bHQgLSByZW1haW5kZXIgOiByZXN1bHQpIDogMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0ludGVnZXI7XG4iLCJ2YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9fYmFzZVNsaWNlJyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVDZWlsID0gTWF0aC5jZWlsLFxuICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgZWxlbWVudHMgc3BsaXQgaW50byBncm91cHMgdGhlIGxlbmd0aCBvZiBgc2l6ZWAuXG4gKiBJZiBgYXJyYXlgIGNhbid0IGJlIHNwbGl0IGV2ZW5seSwgdGhlIGZpbmFsIGNodW5rIHdpbGwgYmUgdGhlIHJlbWFpbmluZ1xuICogZWxlbWVudHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZT0xXSBUaGUgbGVuZ3RoIG9mIGVhY2ggY2h1bmtcbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBjaHVua3MuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2h1bmsoWydhJywgJ2InLCAnYycsICdkJ10sIDIpO1xuICogLy8gPT4gW1snYScsICdiJ10sIFsnYycsICdkJ11dXG4gKlxuICogXy5jaHVuayhbJ2EnLCAnYicsICdjJywgJ2QnXSwgMyk7XG4gKiAvLyA9PiBbWydhJywgJ2InLCAnYyddLCBbJ2QnXV1cbiAqL1xuZnVuY3Rpb24gY2h1bmsoYXJyYXksIHNpemUsIGd1YXJkKSB7XG4gIGlmICgoZ3VhcmQgPyBpc0l0ZXJhdGVlQ2FsbChhcnJheSwgc2l6ZSwgZ3VhcmQpIDogc2l6ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHNpemUgPSAxO1xuICB9IGVsc2Uge1xuICAgIHNpemUgPSBuYXRpdmVNYXgodG9JbnRlZ2VyKHNpemUpLCAwKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIGlmICghbGVuZ3RoIHx8IHNpemUgPCAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBpbmRleCA9IDAsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShuYXRpdmVDZWlsKGxlbmd0aCAvIHNpemUpKTtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbcmVzSW5kZXgrK10gPSBiYXNlU2xpY2UoYXJyYXksIGluZGV4LCAoaW5kZXggKz0gc2l6ZSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2h1bms7XG4iLCJpbXBvcnQgY2h1bmsgZnJvbSAnbG9kYXNoL2NodW5rJztcblxuZXhwb3J0IGNvbnN0IEExX0xFVFRFUlMgPSBbXG4gICdBJyxcbiAgJ0InLFxuICAnQycsXG4gICdEJyxcbiAgJ0UnLFxuICAnRicsXG4gICdHJyxcbiAgJ0gnLFxuICAnSicsXG4gICdLJyxcbiAgJ0wnLFxuICAnTScsXG4gICdOJyxcbiAgJ08nLFxuICAnUCcsXG4gICdRJyxcbiAgJ1InLFxuICAnUycsXG4gICdUJyxcbl07XG5leHBvcnQgY29uc3QgQTFfTlVNQkVSUyA9IFtcbiAgMTksIDE4LCAxNywgMTYsIDE1LCAxNCwgMTMsIDEyLCAxMSwgMTAsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDEsXG5dO1xuZXhwb3J0IGNvbnN0IFNHRl9MRVRURVJTID0gW1xuICAnYScsXG4gICdiJyxcbiAgJ2MnLFxuICAnZCcsXG4gICdlJyxcbiAgJ2YnLFxuICAnZycsXG4gICdoJyxcbiAgJ2knLFxuICAnaicsXG4gICdrJyxcbiAgJ2wnLFxuICAnbScsXG4gICduJyxcbiAgJ28nLFxuICAncCcsXG4gICdxJyxcbiAgJ3InLFxuICAncycsXG5dO1xuZXhwb3J0IGNvbnN0IEJMQU5LX0FSUkFZID0gY2h1bmsobmV3IEFycmF5KDM2MSkuZmlsbCgwKSwgMTkpO1xuZXhwb3J0IGNvbnN0IEdSSUQgPSAxOTtcbmV4cG9ydCBjb25zdCBET1RfU0laRSA9IDM7XG5leHBvcnQgY29uc3QgRVhQQU5EX0ggPSA1O1xuZXhwb3J0IGNvbnN0IEVYUEFORF9WID0gNTtcbmV4cG9ydCBjb25zdCBSRVNQT05TRV9USU1FID0gMTAwO1xuIiwiZXhwb3J0IGVudW0gS2kge1xuICBCbGFjayA9IDEsXG4gIFdoaXRlID0gLTEsXG4gIEVtcHR5ID0gMCxcbn1cblxuZXhwb3J0IGVudW0gVGhlbWUge1xuICBCbGFja0FuZFdoaXRlID0gJ0JsYWNrJldoaXRlJyxcbiAgRmxhdCA9ICdGbGF0JyxcbiAgU3ViZHVlZCA9ICdTdWJkdWVkJyxcbiAgU2hlbGxTdG9uZSA9ICdTaGVsbCcsXG4gIFNsYXRlQW5kU2hlbGwgPSAnU2xhdGVBbmRTaGVsbCcsXG4gIFdhbG51dCA9ICdXYWxuZXQnLFxuICBQaG90b3JlYWxpc3RpYyA9ICdQaG90b3JlYWxpc3RpYycsXG59XG5cbmV4cG9ydCBlbnVtIENlbnRlciB7XG4gIFRvcFJpZ2h0ID0gJ3RyJyxcbiAgVG9wTGVmdCA9ICd0bCcsXG4gIEJvdHRvbUxlZnQgPSAnYmwnLFxuICBCb3R0b21SaWdodCA9ICdicicsXG4gIENlbnRlciA9ICdjJyxcbn1cblxuZXhwb3J0IGVudW0gTWFyayB7XG4gIEN1cnJlbnQgPSAnY3UnLFxuICBDaXJjbGUgPSAnY2knLFxuICBTcXVhcmUgPSAnc3EnLFxuICBUcmlhbmdsZSA9ICd0cmknLFxufVxuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHNJbjtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNJbiwgZ2V0U3ltYm9sc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzSW47XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVBcnJheTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG4iLCJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlZ0V4cDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU3ltYm9sO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyksXG4gICAgY2xvbmVEYXRhVmlldyA9IHJlcXVpcmUoJy4vX2Nsb25lRGF0YVZpZXcnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTWFwYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBgU2V0YCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcjtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuIiwidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hcGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWFwKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gbWFwVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hcDtcbiIsInZhciBiYXNlSXNNYXAgPSByZXF1aXJlKCcuL19iYXNlSXNNYXAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzTWFwID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNNYXA7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBNYXBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTWFwKG5ldyBNYXApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNNYXAobmV3IFdlYWtNYXApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzTWFwID0gbm9kZUlzTWFwID8gYmFzZVVuYXJ5KG5vZGVJc01hcCkgOiBiYXNlSXNNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXA7XG4iLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzU2V0YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNTZXQodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBzZXRUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzU2V0O1xuIiwidmFyIGJhc2VJc1NldCA9IHJlcXVpcmUoJy4vX2Jhc2VJc1NldCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNTZXQgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1NldDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFNldGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTZXQobmV3IFNldCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1NldChuZXcgV2Vha1NldCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNTZXQgPSBub2RlSXNTZXQgPyBiYXNlVW5hcnkobm9kZUlzU2V0KSA6IGJhc2VJc1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1NldDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNNYXAgPSByZXF1aXJlKCcuL2lzTWFwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTZXQgPSByZXF1aXJlKCcuL2lzU2V0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSkge1xuICAgICAgcmVzdWx0LmFkZChiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN1YlZhbHVlLCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc01hcCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcbiIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcbiIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzaGFsbG93IGNsb25lIG9mIGB2YWx1ZWAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb24gdGhlXG4gKiBbc3RydWN0dXJlZCBjbG9uZSBhbGdvcml0aG1dKGh0dHBzOi8vbWRuLmlvL1N0cnVjdHVyZWRfY2xvbmVfYWxnb3JpdGhtKVxuICogYW5kIHN1cHBvcnRzIGNsb25pbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucywgZGF0ZSBvYmplY3RzLCBtYXBzLFxuICogbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcywgc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkXG4gKiBhcnJheXMuIFRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIGBhcmd1bWVudHNgIG9iamVjdHMgYXJlIGNsb25lZFxuICogYXMgcGxhaW4gb2JqZWN0cy4gQW4gZW1wdHkgb2JqZWN0IGlzIHJldHVybmVkIGZvciB1bmNsb25lYWJsZSB2YWx1ZXMgc3VjaFxuICogYXMgZXJyb3Igb2JqZWN0cywgZnVuY3Rpb25zLCBET00gbm9kZXMsIGFuZCBXZWFrTWFwcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lRGVlcFxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgc2hhbGxvdyA9IF8uY2xvbmUob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhzaGFsbG93WzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY2xvbmUodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgQ0xPTkVfU1lNQk9MU19GTEFHKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcbiIsImltcG9ydCBjbG9uZSBmcm9tICdsb2Rhc2gvY2xvbmUnO1xuLy8gaW1wb3J0IEpzRmVhdCBmcm9tICdqc2ZlYXQnO1xuaW1wb3J0ICogYXMgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmV4cG9ydCBjb25zdCBzZ2ZUb1BvcyA9IChzdHI6IGFueSkgPT4ge1xuICBjb25zdCBraSA9IHN0clswXSA9PT0gJ0InID8gMSA6IC0xO1xuICBjb25zdCB0ZW1wU3RyID0gL1xcWyguKilcXF0vLmV4ZWMoc3RyKTtcbiAgaWYgKHRlbXBTdHIpIHtcbiAgICBjb25zdCBwb3MgPSB0ZW1wU3RyWzFdO1xuICAgIGNvbnN0IHggPSBDb25zdC5TR0ZfTEVUVEVSUy5pbmRleE9mKHBvc1swXSk7XG4gICAgY29uc3QgeSA9IENvbnN0LlNHRl9MRVRURVJTLmluZGV4T2YocG9zWzFdKTtcbiAgICByZXR1cm4ge3gsIHksIGtpfTtcbiAgfVxuICByZXR1cm4ge3g6IC0xLCB5OiAtMSwga2k6IDB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNnZk9mZnNldCA9IChzZ2Y6IGFueSwgb2Zmc2V0ID0gMCkgPT4ge1xuICBpZiAob2Zmc2V0ID09PSAwKSByZXR1cm4gc2dmO1xuICBjb25zdCByZXMgPSBjbG9uZShzZ2YpO1xuICBjb25zdCBjaGFySW5kZXggPSBDb25zdC5TR0ZfTEVUVEVSUy5pbmRleE9mKHNnZlsyXSkgLSBvZmZzZXQ7XG4gIHJldHVybiByZXMuc3Vic3RyKDAsIDIpICsgQ29uc3QuU0dGX0xFVFRFUlNbY2hhckluZGV4XSArIHJlcy5zdWJzdHIoMiArIDEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGExVG9TR0YgPSAoc3RyOiBhbnksIHR5cGUgPSAnQicsIG9mZnNldCA9IDApID0+IHtcbiAgY29uc3QgaW54ID0gQ29uc3QuQTFfTEVUVEVSUy5pbmRleE9mKHN0clswXSkgKyBvZmZzZXQ7XG4gIGNvbnN0IGlueSA9IENvbnN0LkExX05VTUJFUlMuaW5kZXhPZihwYXJzZUludChzdHIuc3Vic3RyKDEpLCAwKSkgLSBvZmZzZXQ7XG4gIGNvbnN0IHNnZiA9IGAke3R5cGV9WyR7Q29uc3QuU0dGX0xFVFRFUlNbaW54XX0ke0NvbnN0LlNHRl9MRVRURVJTW2lueV19XWA7XG4gIHJldHVybiBzZ2Y7XG59O1xuXG5leHBvcnQgY29uc3QgcG9zVG9TZ2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGtpOiBudW1iZXIpID0+IHtcbiAgY29uc3QgYXggPSBDb25zdC5TR0ZfTEVUVEVSU1t4XTtcbiAgY29uc3QgYXkgPSBDb25zdC5TR0ZfTEVUVEVSU1t5XTtcbiAgaWYgKGtpID09PSAwKSByZXR1cm4gJyc7XG4gIGlmIChraSA9PT0gMSkgcmV0dXJuIGBCWyR7YXh9JHtheX1dYDtcbiAgaWYgKGtpID09PSAtMSkgcmV0dXJuIGBXWyR7YXh9JHtheX1dYDtcbiAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRTdG9uZVR5cGVUb1N0cmluZyA9ICh0eXBlOiBhbnkpID0+ICh0eXBlID09PSAxID8gJ0InIDogJ1cnKTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRTdGVwc0ZvckFJID0gKHN0ZXBzOiBhbnksIG9mZnNldCA9IDApID0+IHtcbiAgbGV0IHJlcyA9IGNsb25lKHN0ZXBzKTtcbiAgcmVzID0gcmVzLm1hcCgoczogYW55KSA9PiBzZ2ZPZmZzZXQocywgb2Zmc2V0KSk7XG4gIGNvbnN0IGhlYWRlciA9IGAoO0ZGWzRdR01bMV1TWlske1xuICAgIDE5IC0gb2Zmc2V0XG4gIH1dR05bMjI2XVBCW0JsYWNrXUhBWzBdUFdbV2hpdGVdS01bNy41XURUWzIwMTctMDgtMDFdVE1bMTgwMF1SVVtDaGluZXNlXUNQW0NvcHlyaWdodCBnaG9zdC1nby5jb21dQVBbZ2hvc3QtZ28uY29tXVBMW0JsYWNrXTtgO1xuICBsZXQgY291bnQgPSAwO1xuICBsZXQgcHJldiA9ICcnO1xuICBzdGVwcy5mb3JFYWNoKChzdGVwOiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICBpZiAoc3RlcFswXSA9PT0gcHJldlswXSkge1xuICAgICAgaWYgKHN0ZXBbMF0gPT09ICdCJykge1xuICAgICAgICByZXMuc3BsaWNlKGluZGV4ICsgY291bnQsIDAsICdXW3R0XScpO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnNwbGljZShpbmRleCArIGNvdW50LCAwLCAnQlt0dF0nKTtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJldiA9IHN0ZXA7XG4gIH0pO1xuICByZXR1cm4gYCR7aGVhZGVyfSR7cmVzLmpvaW4oJzsnKX0pYDtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBHb0JhbkRldGVjdGlvbiA9IChwaXhlbERhdGEsIGNhbnZhcykgPT4ge1xuLy8gY29uc3QgY29sdW1ucyA9IGNhbnZhcy53aWR0aDtcbi8vIGNvbnN0IHJvd3MgPSBjYW52YXMuaGVpZ2h0O1xuLy8gY29uc3QgZGF0YVR5cGUgPSBKc0ZlYXQuVThDMV90O1xuLy8gY29uc3QgZGlzdE1hdHJpeFQgPSBuZXcgSnNGZWF0Lm1hdHJpeF90KGNvbHVtbnMsIHJvd3MsIGRhdGFUeXBlKTtcbi8vIEpzRmVhdC5pbWdwcm9jLmdyYXlzY2FsZShwaXhlbERhdGEsIGNvbHVtbnMsIHJvd3MsIGRpc3RNYXRyaXhUKTtcbi8vIEpzRmVhdC5pbWdwcm9jLmdhdXNzaWFuX2JsdXIoZGlzdE1hdHJpeFQsIGRpc3RNYXRyaXhULCAyLCAwKTtcbi8vIEpzRmVhdC5pbWdwcm9jLmNhbm55KGRpc3RNYXRyaXhULCBkaXN0TWF0cml4VCwgNTAsIDUwKTtcblxuLy8gY29uc3QgbmV3UGl4ZWxEYXRhID0gbmV3IFVpbnQzMkFycmF5KHBpeGVsRGF0YS5idWZmZXIpO1xuLy8gY29uc3QgYWxwaGEgPSAoMHhmZiA8PCAyNCk7XG4vLyBsZXQgaSA9IGRpc3RNYXRyaXhULmNvbHMgKiBkaXN0TWF0cml4VC5yb3dzO1xuLy8gbGV0IHBpeCA9IDA7XG4vLyB3aGlsZSAoaSA+PSAwKSB7XG4vLyAgIHBpeCA9IGRpc3RNYXRyaXhULmRhdGFbaV07XG4vLyAgIG5ld1BpeGVsRGF0YVtpXSA9IGFscGhhIHwgKHBpeCA8PCAxNikgfCAocGl4IDw8IDgpIHwgcGl4O1xuLy8gICBpIC09IDE7XG4vLyB9XG4vLyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnO1xuaW1wb3J0IHtzZ2ZUb1Bvc30gZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHtDZW50ZXJ9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgemVyb3MgPSAoc2l6ZTogW251bWJlciwgbnVtYmVyXSkgPT5cbiAgbmV3IEFycmF5KHNpemVbMF0pLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheShzaXplWzFdKS5maWxsKDApKTtcblxuZXhwb3J0IGNvbnN0IGVtcHR5ID0gKHNpemU6IFtudW1iZXIsIG51bWJlcl0pOiBzdHJpbmdbXVtdID0+XG4gIG5ldyBBcnJheShzaXplWzBdKS5maWxsKCcnKS5tYXAoKCkgPT4gbmV3IEFycmF5KHNpemVbMV0pLmZpbGwoJycpKTtcblxuY29uc3QgR1JJRCA9IDE5O1xubGV0IGxpYmVydGllcyA9IDA7XG5sZXQgcmVjdXJzaW9uUGF0aDogc3RyaW5nW10gPSBbXTtcblxuZXhwb3J0IGNvbnN0IGNhbGNNb3N0ID0gKG1hdDogbnVtYmVyW11bXSwgYm9hcmRTaXplID0gMTkpID0+IHtcbiAgbGV0IGxlZnRNb3N0OiBudW1iZXIgPSBib2FyZFNpemUgLSAxO1xuICBsZXQgcmlnaHRNb3N0ID0gMDtcbiAgbGV0IHRvcE1vc3Q6IG51bWJlciA9IGJvYXJkU2l6ZSAtIDE7XG4gIGxldCBib3R0b21Nb3N0ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgdmFsdWUgPSBtYXRbaV1bal07XG4gICAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgICAgaWYgKGxlZnRNb3N0ID4gaSkgbGVmdE1vc3QgPSBpO1xuICAgICAgICBpZiAocmlnaHRNb3N0IDwgaSkgcmlnaHRNb3N0ID0gaTtcbiAgICAgICAgaWYgKHRvcE1vc3QgPiBqKSB0b3BNb3N0ID0gajtcbiAgICAgICAgaWYgKGJvdHRvbU1vc3QgPCBqKSBib3R0b21Nb3N0ID0gajtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtsZWZ0TW9zdCwgcmlnaHRNb3N0LCB0b3BNb3N0LCBib3R0b21Nb3N0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjQ2VudGVyID0gKG1hdDogbnVtYmVyW11bXSwgYm9hcmRTaXplID0gMTkpID0+IHtcbiAgY29uc3Qge2xlZnRNb3N0LCByaWdodE1vc3QsIHRvcE1vc3QsIGJvdHRvbU1vc3R9ID0gY2FsY01vc3QobWF0LCBib2FyZFNpemUpO1xuICBjb25zdCB0b3AgPSB0b3BNb3N0IDwgYm9hcmRTaXplIC0gMSAtIGJvdHRvbU1vc3Q7XG4gIGNvbnN0IGxlZnQgPSBsZWZ0TW9zdCA8IGJvYXJkU2l6ZSAtIDEgLSByaWdodE1vc3Q7XG4gIGlmICh0b3AgJiYgbGVmdCkgcmV0dXJuIENlbnRlci5Ub3BMZWZ0O1xuICBpZiAoIXRvcCAmJiBsZWZ0KSByZXR1cm4gQ2VudGVyLkJvdHRvbUxlZnQ7XG4gIGlmICh0b3AgJiYgIWxlZnQpIHJldHVybiBDZW50ZXIuVG9wUmlnaHQ7XG4gIGlmICghdG9wICYmICFsZWZ0KSByZXR1cm4gQ2VudGVyLkJvdHRvbVJpZ2h0O1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGNWaXNpYmxlQXJlYSA9IChcbiAgbWF0OiBudW1iZXJbXVtdLFxuICBib2FyZFNpemUgPSAxOSxcbiAgZXh0ZW5kID0gMlxuKSA9PiB7XG4gIGNvbnN0IGNlbnRlciA9IGNhbGNDZW50ZXIobWF0KTtcbiAgY29uc3Qge2xlZnRNb3N0LCByaWdodE1vc3QsIHRvcE1vc3QsIGJvdHRvbU1vc3R9ID0gY2FsY01vc3QobWF0LCBib2FyZFNpemUpO1xuICBsZXQgdmlzaWJsZUFyZWEgPSBbXG4gICAgWzAsIDE4XSxcbiAgICBbMCwgMThdLFxuICBdO1xuICBsZXQgdmlzaWJsZVNpemUgPSBib2FyZFNpemUgLSAxO1xuICBpZiAoY2VudGVyID09IENlbnRlci5Ub3BMZWZ0KSB7XG4gICAgdmlzaWJsZVNpemUgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KHJpZ2h0TW9zdCwgYm90dG9tTW9zdCkgKyBleHRlbmQsXG4gICAgICBib2FyZFNpemUgLSAxXG4gICAgKTtcbiAgICB2aXNpYmxlQXJlYSA9IFtcbiAgICAgIFswLCB2aXNpYmxlU2l6ZV0sXG4gICAgICBbMCwgdmlzaWJsZVNpemVdLFxuICAgIF07XG4gIH0gZWxzZSBpZiAoY2VudGVyID09IENlbnRlci5Ub3BSaWdodCkge1xuICAgIHZpc2libGVTaXplID0gTWF0aC5taW4oXG4gICAgICBNYXRoLm1heChib3R0b21Nb3N0ICsgZXh0ZW5kLCBib2FyZFNpemUgLSAxIC0gKGxlZnRNb3N0IC0gZXh0ZW5kKSksXG4gICAgICBib2FyZFNpemUgLSAxXG4gICAgKTtcbiAgICB2aXNpYmxlQXJlYSA9IFtcbiAgICAgIFtib2FyZFNpemUgLSAxIC0gdmlzaWJsZVNpemUsIDE4XSxcbiAgICAgIFswLCB2aXNpYmxlU2l6ZV0sXG4gICAgXTtcbiAgfSBlbHNlIGlmIChjZW50ZXIgPT0gQ2VudGVyLkJvdHRvbUxlZnQpIHtcbiAgICB2aXNpYmxlU2l6ZSA9IE1hdGgubWluKFxuICAgICAgTWF0aC5tYXgoYm9hcmRTaXplIC0gMSAtICh0b3BNb3N0IC0gZXh0ZW5kKSwgcmlnaHRNb3N0ICsgZXh0ZW5kKSxcbiAgICAgIGJvYXJkU2l6ZSAtIDFcbiAgICApO1xuICAgIHZpc2libGVBcmVhID0gW1xuICAgICAgWzAsIHZpc2libGVTaXplXSxcbiAgICAgIFtib2FyZFNpemUgLSAxIC0gdmlzaWJsZVNpemUsIDE4XSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGNlbnRlciA9PSBDZW50ZXIuQm90dG9tUmlnaHQpIHtcbiAgICB2aXNpYmxlU2l6ZSA9IE1hdGgubWluKFxuICAgICAgTWF0aC5tYXgoXG4gICAgICAgIGJvYXJkU2l6ZSAtIDEgLSAodG9wTW9zdCAtIGV4dGVuZCksXG4gICAgICAgIGJvYXJkU2l6ZSAtIDEgLSAobGVmdE1vc3QgLSBleHRlbmQpXG4gICAgICApLFxuICAgICAgYm9hcmRTaXplIC0gMVxuICAgICk7XG4gICAgY29uc29sZS5sb2coJ3ZzJywgdmlzaWJsZVNpemUpO1xuICAgIHZpc2libGVBcmVhID0gW1xuICAgICAgW2JvYXJkU2l6ZSAtIDEgLSB2aXNpYmxlU2l6ZSwgMThdLFxuICAgICAgW2JvYXJkU2l6ZSAtIDEgLSB2aXNpYmxlU2l6ZSwgMThdLFxuICAgIF07XG4gIH1cbiAgcmV0dXJuIHt2aXNpYmxlQXJlYSwgY2VudGVyfTtcbn07XG5cbmZ1bmN0aW9uIGNhbGNMaWJlcnR5Q29yZShtYXQ6IG51bWJlcltdW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGlmICh4ID49IDAgJiYgeCA8IEdSSUQgJiYgeSA+PSAwICYmIHkgPCBHUklEKSB7XG4gICAgaWYgKG1hdFt4XVt5XSA9PT0ga2kgJiYgIXJlY3Vyc2lvblBhdGguaW5jbHVkZXMoYCR7eH0sJHt5fWApKSB7XG4gICAgICByZWN1cnNpb25QYXRoLnB1c2goYCR7eH0sJHt5fWApO1xuICAgICAgY2FsY0xpYmVydHlDb3JlKG1hdCwgeCAtIDEsIHksIGtpKTtcbiAgICAgIGNhbGNMaWJlcnR5Q29yZShtYXQsIHggKyAxLCB5LCBraSk7XG4gICAgICBjYWxjTGliZXJ0eUNvcmUobWF0LCB4LCB5IC0gMSwga2kpO1xuICAgICAgY2FsY0xpYmVydHlDb3JlKG1hdCwgeCwgeSArIDEsIGtpKTtcbiAgICB9IGVsc2UgaWYgKG1hdFt4XVt5XSA9PT0gMCkge1xuICAgICAgbGliZXJ0aWVzICs9IDE7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGNMaWJlcnR5KG1hdDogbnVtYmVyW11bXSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGtpOiBudW1iZXIpIHtcbiAgbGliZXJ0aWVzID0gMDtcbiAgcmVjdXJzaW9uUGF0aCA9IFtdO1xuXG4gIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID4gR1JJRCAtIDEgfHwgeSA+IEdSSUQgLSAxKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpYmVydHk6IDQsXG4gICAgICByZWN1cnNpb25QYXRoOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgaWYgKG1hdFt4XVt5XSA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaWJlcnR5OiA0LFxuICAgICAgcmVjdXJzaW9uUGF0aDogW10sXG4gICAgfTtcbiAgfVxuICBjYWxjTGliZXJ0eUNvcmUobWF0LCB4LCB5LCBraSk7XG4gIHJldHVybiB7XG4gICAgbGliZXJ0eTogbGliZXJ0aWVzLFxuICAgIHJlY3Vyc2lvblBhdGgsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4ZWNQb25udWtpKG1hdDogbnVtYmVyW11bXSwgaTogbnVtYmVyLCBqOiBudW1iZXIsIGtpOiBudW1iZXIpIHtcbiAgY29uc3QgbmV3TWF0ID0gY2xvbmVEZWVwKG1hdCk7XG4gIGNvbnN0IHtsaWJlcnR5OiBsaWJlcnR5VXAsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhVcH0gPSBjYWxjTGliZXJ0eShcbiAgICBtYXQsXG4gICAgaSxcbiAgICBqIC0gMSxcbiAgICBraVxuICApO1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eURvd24sIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhEb3dufSA9IGNhbGNMaWJlcnR5KFxuICAgIG1hdCxcbiAgICBpLFxuICAgIGogKyAxLFxuICAgIGtpXG4gICk7XG4gIGNvbnN0IHtsaWJlcnR5OiBsaWJlcnR5TGVmdCwgcmVjdXJzaW9uUGF0aDogcmVjdXJzaW9uUGF0aExlZnR9ID0gY2FsY0xpYmVydHkoXG4gICAgbWF0LFxuICAgIGkgLSAxLFxuICAgIGosXG4gICAga2lcbiAgKTtcbiAgY29uc3Qge2xpYmVydHk6IGxpYmVydHlSaWdodCwgcmVjdXJzaW9uUGF0aDogcmVjdXJzaW9uUGF0aFJpZ2h0fSA9XG4gICAgY2FsY0xpYmVydHkobWF0LCBpICsgMSwgaiwga2kpO1xuICBpZiAobGliZXJ0eVVwID09PSAwKSB7XG4gICAgcmVjdXJzaW9uUGF0aFVwLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBjb29yZCA9IGl0ZW0uc3BsaXQoJywnKTtcbiAgICAgIG5ld01hdFtwYXJzZUludChjb29yZFswXSldW3BhcnNlSW50KGNvb3JkWzFdKV0gPSAwO1xuICAgIH0pO1xuICB9XG4gIGlmIChsaWJlcnR5RG93biA9PT0gMCkge1xuICAgIHJlY3Vyc2lvblBhdGhEb3duLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBjb29yZCA9IGl0ZW0uc3BsaXQoJywnKTtcbiAgICAgIG5ld01hdFtwYXJzZUludChjb29yZFswXSldW3BhcnNlSW50KGNvb3JkWzFdKV0gPSAwO1xuICAgIH0pO1xuICB9XG4gIGlmIChsaWJlcnR5TGVmdCA9PT0gMCkge1xuICAgIHJlY3Vyc2lvblBhdGhMZWZ0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBjb29yZCA9IGl0ZW0uc3BsaXQoJywnKTtcbiAgICAgIG5ld01hdFtwYXJzZUludChjb29yZFswXSldW3BhcnNlSW50KGNvb3JkWzFdKV0gPSAwO1xuICAgIH0pO1xuICB9XG4gIGlmIChsaWJlcnR5UmlnaHQgPT09IDApIHtcbiAgICByZWN1cnNpb25QYXRoUmlnaHQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkID0gaXRlbS5zcGxpdCgnLCcpO1xuICAgICAgbmV3TWF0W3BhcnNlSW50KGNvb3JkWzBdKV1bcGFyc2VJbnQoY29vcmRbMV0pXSA9IDA7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG5ld01hdDtcbn1cblxuZnVuY3Rpb24gY2FuUG9ubnVraShtYXQ6IG51bWJlcltdW10sIGk6IG51bWJlciwgajogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGNvbnN0IHtsaWJlcnR5OiBsaWJlcnR5VXAsIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhVcH0gPSBjYWxjTGliZXJ0eShcbiAgICBtYXQsXG4gICAgaSxcbiAgICBqIC0gMSxcbiAgICBraVxuICApO1xuICBjb25zdCB7bGliZXJ0eTogbGliZXJ0eURvd24sIHJlY3Vyc2lvblBhdGg6IHJlY3Vyc2lvblBhdGhEb3dufSA9IGNhbGNMaWJlcnR5KFxuICAgIG1hdCxcbiAgICBpLFxuICAgIGogKyAxLFxuICAgIGtpXG4gICk7XG4gIGNvbnN0IHtsaWJlcnR5OiBsaWJlcnR5TGVmdCwgcmVjdXJzaW9uUGF0aDogcmVjdXJzaW9uUGF0aExlZnR9ID0gY2FsY0xpYmVydHkoXG4gICAgbWF0LFxuICAgIGkgLSAxLFxuICAgIGosXG4gICAga2lcbiAgKTtcbiAgY29uc3Qge2xpYmVydHk6IGxpYmVydHlSaWdodCwgcmVjdXJzaW9uUGF0aDogcmVjdXJzaW9uUGF0aFJpZ2h0fSA9XG4gICAgY2FsY0xpYmVydHkobWF0LCBpICsgMSwgaiwga2kpO1xuICBpZiAobGliZXJ0eVVwID09PSAwICYmIHJlY3Vyc2lvblBhdGhVcC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGxpYmVydHlEb3duID09PSAwICYmIHJlY3Vyc2lvblBhdGhEb3duLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAobGliZXJ0eUxlZnQgPT09IDAgJiYgcmVjdXJzaW9uUGF0aExlZnQubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChsaWJlcnR5UmlnaHQgPT09IDAgJiYgcmVjdXJzaW9uUGF0aFJpZ2h0Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5Nb3ZlKG1hdDogbnVtYmVyW11bXSwgaTogbnVtYmVyLCBqOiBudW1iZXIsIGtpOiBudW1iZXIpIHtcbiAgY29uc3QgbmV3TWF0ID0gY2xvbmVEZWVwKG1hdCk7XG4gIGlmIChuZXdNYXRbaV1bal0gIT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBuZXdNYXRbaV1bal0gPSBraTtcbiAgY29uc3Qge2xpYmVydHl9ID0gY2FsY0xpYmVydHkobmV3TWF0LCBpLCBqLCBraSk7XG4gIGlmIChjYW5Qb25udWtpKG5ld01hdCwgaSwgaiwgLWtpKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChjYW5Qb25udWtpKG5ld01hdCwgaSwgaiwga2kpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChsaWJlcnR5ID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZShtYXQ6IG51bWJlcltdW10sIGk6IG51bWJlciwgajogbnVtYmVyLCBraTogbnVtYmVyKSB7XG4gIGNvbnN0IG5ld01hdCA9IGNsb25lRGVlcChtYXQpO1xuICBuZXdNYXRbaV1bal0gPSBraTtcbiAgcmV0dXJuIGV4ZWNQb25udWtpKG5ld01hdCwgaSwgaiwgLWtpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dLaShtYXQ6IG51bWJlcltdW10sIHN0ZXBzOiBzdHJpbmdbXSwgaXNQb25udWtpID0gdHJ1ZSkge1xuICBsZXQgbmV3TWF0ID0gY2xvbmVEZWVwKG1hdCk7XG4gIGxldCBoYXNNb3ZlZCA9IGZhbHNlO1xuICBzdGVwcy5mb3JFYWNoKHN0ciA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBraSxcbiAgICB9OiB7XG4gICAgICB4OiBudW1iZXI7XG4gICAgICB5OiBudW1iZXI7XG4gICAgICBraTogbnVtYmVyO1xuICAgIH0gPSBzZ2ZUb1BvcyhzdHIpO1xuICAgIGlmIChpc1Bvbm51a2kpIHtcbiAgICAgIGlmIChjYW5Nb3ZlKG5ld01hdCwgeCwgeSwga2kpKSB7XG4gICAgICAgIG5ld01hdFt4XVt5XSA9IGtpO1xuICAgICAgICBuZXdNYXQgPSBleGVjUG9ubnVraShuZXdNYXQsIHgsIHksIC1raSk7XG4gICAgICAgIGhhc01vdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TWF0W3hdW3ldID0ga2k7XG4gICAgICBoYXNNb3ZlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGFycmFuZ2VtZW50OiBuZXdNYXQsXG4gICAgaGFzTW92ZWQsXG4gIH07XG59XG4iLCJ2YXIgaW1nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdRQUFBQzFDQVlBQUFDcGdGcmVBQUFFRG1sRFExQnJRMGREYjJ4dmNsTndZV05sUjJWdVpYSnBZMUpIUWdBQU9JMk5WVjFvSEZVVVBwdTVzeXNrem9QVXBxYVNEdjQxbExSc1V0R0UydWorWmJOdDNDeVRiTFJCa01uczNaMXBKalBqL0tScEtUNFVRUkRCcU9DVDRQOWJ3U2NoYXF2dGl5Mml0RkNpQklNbytORDZSNkhTRnducnVUT3p1NU80YTczTDNQbm1uTzkrNTk1ejd0NExrTGdzVzViZUpRSXNHcTR0NWRQaXM4Zm14TVE2ZE1GOTBBMTkwQzByanBVcWxTWUJHK1BDdjlydDd5REczdGYydC9mL1ordXVVRWNCaU4yRjJLdzR5aUxpWlFEK0ZjV3lYWUFFUWZ2SUNkZGkrQW5FTzJ5Y0lPSVN3N1VBVnhpZUQvQ3l6NW1STW9oZlJTd29xb3oreE51SUIrY2o5bG9FQjNQdzI0NDhOYWl0S1NMTFJjazJxNXBPSTlPOWcvdC90a1hkYThUYmcwK1BzekI5Rk44RHVQYVhLbktXNFljUW4xWGszSFNJcnk1cHM4VVEvMlc1YVFueEl3QmR1N3lGY2dyeFBzUmpWWHU4SE9oMHFhbzMwY0FycDlTWlp4RGZnM2gxd1R6S3h1NUUvTFV4WDV3S2RYNVNuQXptRHg0QTRPSXFMYkI2OXlNZXNFMXBLb2pMalZkb05zZnlpUGk0NWhabUFuM3VMV2RwT3RmUU9hVm1pa0VzN292ajhoRldwejdFVjZtZWwwTDlYeTIzRk1ZbFBZWmVuQXgweURCMS9QWDZkbGVkbVFqaWtqa1hDeHFNSlM5V3RmRkN5SDlYdFNla0VGKzJkSCtQNHR6SVRkdVR5Z0dmdjU4YTVWQ1RINVB0WEQ3RUZaaU55VURCaEhuc0ZUQmdFMFNRSUE5cGZGdGdvNmNLR3Vob29laWxhS0g0MWVEczM4SXArZjRBdDFScS9zanI2TkV3UXFiL0kvRFFxc0x2YUZVanZBeCtlV2lyZGRBSlpuQWoxREZKTDBtU2cvZ2NJcFBrTUJraG95Q1NKOGxUWkl4azBUcEtEalhIbGlKelpQTzUwZFI1QVNOU256ZUx2SXZvZDBIRy9tZGttT0MwejhWS256Y1EyTS9ZejJ2S2xkZHVYanA5YmxlTHUwWlduN3ZXYytsMEpHY2FhaTEweU5yVW5YTFAvOEpmNTlld1grYzNXZ3orQjM0RGYrdmJWcmMxNnpUTVZncDl1bTlieEVmelBVNWtQcVV0Vld4aHM2T2lXVFZXK2dJZnl3Qjl1WGk3Q0djR1cvems5OGsva212Sjk1SWZKbi9qM3VRKzRjNXpuM0tmY2QrQXlGM2dMbkpmY2w5eEgzT2ZSMnJVZWU4MGErNnZvN0VLNW1tWFVkeWZRbHJZTFR3b1pJVTl3c1BDWkV0UDZCV0doQWxoTDNwMk42c1RqUmRkdXdiSHNHOWtxMzJzZ0JlcGMreHVyTFBXNFQ5VVJwWUdKM3ltNCs4ekEwNXU0NFFqU1Q4WklvVnR1M3FFN2ZXbWRuNUxQZHF2Z2NaejhXdzhCV0o4WDN3MFBoUS93bkNER2QrTHZsSHM4ZFJ5NmJMTER1S01hWjIwdFpycWlzUEo1T05pQ3E4eUtoWU01Y0NnS091NjZMc2MwYVlPdFpkbzVRQ3dlekk0d205Si92MFgyM21sWlhPZkJqajhKenYzV3JZNUQrQ3NBOUQ3YU1zMmdHZmp2ZThBckQ2bWVQWlNlQ2ZFWXQ4Q09OV0R3OEZYVHhyUHF4L3I5VnQ0YmlYZUFOaDh2VjcvKy8xNmZmTUQxTjhBdUtEL0EvOGxlQXZGWTliTEFBQUFlR1ZZU1daTlRRQXFBQUFBQ0FBRkFSSUFBd0FBQUFFQUFRQUFBUm9BQlFBQUFBRUFBQUJLQVJzQUJRQUFBQUVBQUFCU0FTZ0FBd0FBQUFFQUFnQUFoMmtBQkFBQUFBRUFBQUJhQUFBQUFBQUFBRWdBQUFBQkFBQUFTQUFBQUFFQUFxQUNBQVFBQUFBQkFBQUFaS0FEQUFRQUFBQUJBQUFBdFFBQUFBQW4zRzBaQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUJXV2xVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlXRTFRSUVOdmNtVWdOaTR3TGpBaVBnb2dJQ0E4Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pUGdvZ0lDQWdJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwMGFXWm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNScFptWXZNUzR3THlJK0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2s5eWFXVnVkR0YwYVc5dVBqRThMM1JwWm1ZNlQzSnBaVzUwWVhScGIyNCtDaUFnSUNBZ0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb2dJQ0E4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnb1pYdUVIQUFCQUFFbEVRVlI0QVZ6ZGFaYmNTck9sWng2U1g1WFcwalExTU0xR0E5S2Z1dmV3MGZ0c0E0SXNlU1FDM2xpenJYR0hBeEdaK2MvLzgzLy9YNzkvL1B2dmx5Ly8vUFBsKzdkdlg1Ui92djd6NWNlUEgxLytxZjcxNjdjdlAzLytYQithcjErL2Z2blYyUC80bi8vbmwvLzFYLy92bDIvLytSOWZmdGYrOXUwLzQva2E3NS95dGVydk5iM0hQbm0vYTN6OSt2M0xqMy8vMTVldjM3N1dIMTE5eG52di9NK1huNzkrSE9leDEvNzN5MysrL1k4dnYzNkg1Ujg0Ly9ueTYrZVB6citQL3Zldkwwa0t3MzkvK2Y3OSs1ZmZ2K3F2NThzM1FqdCsvZnp5Qy9XdjZKTC9LL2t3ZlBzZWZyUXYyZTkvdnZ4T0xoOG9zUERCcjN5QVNQdFhzcjdscTEveDBmODEvTCtTRytId1VmZVBaaFVVLzJRam03MlIrdVBIditQNTlwOTg4Ti8vbmE3c0dRQThDa1YzaW1jaUF2cDlvTFJIVzdmNlJ1TmkwUGdHOEZkQWZuLzVGaUNDMUZlKy9oNTRYSytCakFIek40ZS9kQ1AvL2VWbnp1Wnd4aG5qT0xxaCsvYnRlL1pXNHh6T3I1OVRCSE55Y280eldyNDVSaTNWdmRNNm1kK1M4VFY1LzRSWGdING56OWgwSmxpUzFKd01yUFNkSUQ2NCttUGhuTXplMGNBbERBVVYvMi9NMDRHYUQ4NDM3UHJvTXdtaWtlaExGb1RmV0pkUTV1d0h3MDhTZ1lwK002ZlIraW1FQ1REMW84bHdJaWFodXZISFFSVDlreHdndlJZMGxQakpLMHQvajRDTUhKek16WmhCT3AwVDhPRDc5VFBuNWNRNW9aeUgyWXVzR3YzOHFuWEF2U3VqTU02WG5mSHFnN0dUbjVWUGNJMk9IczdzejVQREZKWFo4dG95SmtySWt5dzYxTmVPaCsxMWlvK3gzL09Cb09qRGFDVzRKQmtteWNDSmgzL2l4cmtNNVZXbDRUZGpLZnR0eVJpTE9xRUgyQmc2aGxCMlkrY2E5VCt2QXdUaGF3VE5CemlxTlU0dWtNdklZVlIvREU4SHNvZHJjcmg0NWJIK2duMEpBOWRzM0Z1OHNwRnpYa2ZEL0NSUUF6ZWVPRmxQTHV4YnNwNUUwRjVmYlVnbG5jb0Z1cXArMkR0RFpXYWpSNlFtU0svdXpaYjBvTVB6dGZvNWhwRW9ueWpLZmdvVWhDdTRKdkoxUlpuYUVqUkZNMjVVbDNrb2lZdVYzSUh1UEVjRVVLYlBVYUJHUkFNNktySkQ2NWxONmxkZU9jN2ptUERETjR3eWtuUGkvNWw4QllsRG1XUENLOGlqcTQrK3hJM290ekhLNXlEQU1hTzNKTG1tY2VqSjQwaDF5aGEyR3VTc0RrZDE5Rk5ObFBVS1J3T2I0YnNtNlRKam5maW1nQUFKT2thSE5idzVlbE9LSldSWW1sUWlwR2hDUkY4UVVpNm9WNnBIcCs5MURNN0pScCs4WlR5eERYeHRGbEl4NEo4eG9KSlIvL2ttaFNVSm1yMkhmcG5MaWdjWlErQUNiVmxaNDV2cndMQTZVZWpIeklEYlFPM09jM2FLZmxGWXQzR1NKZU0zRi8wdG80aU5rWjkvVk9wNCtldW8vdTNHR3pIOFhuZCtNbUxNdldjMDZYcVc4QktnbHVCS1R0ZkVyN2ZNTkp3VFR2QVpYMlB0RTV5R3N5Rmx3Rnh6VGtxWWkrQmxPNlhZR0kzcStFNzJDVGpubURIL21kSFRtWEJTVWVDN29EM0J5Njh3ekppSWZuSUl1bVVoaDlZUVFJbFJBOTB1cG1UR2R3UmtDYkJreTNHeFdIcGZ1ZHFONm8wL1dkWE9ZVzAwT0xTT1Fqd1pvMzB4cFJQbHU5elJBY1A4RXNkMldvUXBrM3VhNW85ejBHZU1ialNOY2NabGhmcXJkWTQzeHNqWVhOZ3dTTzFSYzRCMTEwVTJtcnZ3UCt6NEdwdHBzcHV1c2RORkdqa09XMGZiMklEZ21VR1BVUTNyTy9mQVhRY3M2K2VJZE1KUzM3Q21SOSt2dHNkMmNFc2szTkdRY2M1WG80UzhLOXRHcjhOWU1uYjllNEx6QkgzTGVITGdvZFBMaEZMZ2dSODJzM0pTNk5TWDNQUHBxdE5pQm0ranMyQ1dCajl1NVZnaTViUGtaeHhEeTdJWmx5RG45VmZ2cXIvQzNrMnY2S2JZR01CblJqUUFITGoxa1J1TkMveWNNemtIWERadXJSNUhyV2ZuUkFNZE15YmVFL2tZZGVKenhGeTZJR3o1SVdOQmYzWnRCUm5qbHE3T01ISXYyY1BETmpEVzE0eXpSTmZtWkpXYmdRK0JHYWJFOElGVFpRbHdJeWZuOVpFa2pOVnhOSERnbHlnL2g4VXVjd0Y5K0oxZUxPb3RXUW5KSUJHL3JBTHJ5b1J5YkQzcUhPMjhlbHFYTGEyekVOdzQ0VUNodlBMdHlheTF4bHVOUGgxdHJVZTc0QVdtODJVMG1ndkUzWHdoUHVDV1JqZXcrT2cwOVphRnhtdWVqT1J2L0ptOWpYRUVHK0ZUakd2dEd2SDdhNXNBTjRQZmR0M1FmK05ITThGVDllQm1SME9qV1FYSEhYeXlsVU03T25nbEhCbUNvcTEvZnNvTHUrZUo5blJrTXdQY0pDRVVtSzhSVS9SUGdkclV0KzdXbnRHYlJUR0xPb0RSYjJmeThQeHdSMDhaRUk2OWt0ZExOaTlaTWlReFZ6cW41by94T1NaTkQxakwwWmVjMzMwS2FqcWN3L0tyUURMOFp0NDcyd2lLaktNYmV3UDd6dlRUYnhaMVE3anJRVGliSGVoK2ZTbDdXMjdRMkFVdXE1Y2NvU2xJSzhsbEZ4cDZQdnJqWGpLT2ZraVhGSGkyNGh5M1RCa2Q5bmtpZStCL2t5a3B5YTI5TEp1cmp2TXhldzQzTjFRUWUzSHlCaGdkS24zRUN5RGx4dTRpK0N4L0Q4LzZObnpCNGRTVitpYVhocHhqK2Zobk15N3cwWGhrSThqTHVFVXVyZlZEOUdPUFRSNytESnZ4ZEZTR0MxM3RlN3lpOXhhS3JRaVBmcnB1S1dsbTlPaUg3RG5vaFpkTzJKZWdSSWdFdXpzOW50alkrNFJpdnVSb2dXdFdTRVFKS2dFRlV2dWRFVk14Zk9RM1RpWmFObXgyZEJZQWdMNWFoMGx4VjFvR2hZcVZkY2xnM0prczFDc001K2lFMmJabEpBV2JCV21wZWdwM1B0cmpTeUE2bkJrT0I5b3RPYXNuTHlIa2tNY3BJUjdyVWNOZFpxTjl4MG1aMkRxcXVDNTY1QUxyTmgxUDF2OVptaDg2c3lRYmxsUjBSa2ZYdCs5bUduUHBwZlUwTDdTTld3TFJEcFk2WDlIUmNZOTFpTUhiYzBLN3UrcG1vS1JZMExSSjdpd1FDOWdzT3ZqYml5TUFXTVNXcmNTRmFrNFRaVW9ySi95TUpxcU9DZHhnU0pkdCtwVjVETlcwSGhqMWVidCtTa2QyRHhWM0wzUmREeFp6NGkvNjVFa2NTNlorUnM5cEJFbWF3Ym1aeGZpZjdIR1F5WGdFV2pBbncyTWlQUnhLamxueE93K1pvZXhtQzZmakh5djVhWjZVZFRadzBqOTQ1MnE2Q2s0cjhXWThmVFpFa3ZESVk2NTZpUTVEOUFZK2lrcjZSUW1BZi8rNzZkNFdjcnIyM2dYUGVub0FGeVN0aHRSWE5DcTM3bDdmT2V2a0duMXBaZEdDSHE4K0lCbnhPeWVnM25YdFdaYldsZ2dFcE9PV3pwR3RqMU5wbzU3akJjSE1FSnpTcXd0M2N1dGIwT2l0ZDltc3R1U3Bvekl6NmpxblNMN0R0c0dFSDgvcG1aREd5YUlkN2E5QXdMRzhrQmp2ckNqQUhyMUlkUDVBeS9ZeGR6cDc2aXR5Uy9lN1dFVlk5S0RhNDJETFZhL0ZNeU1VQnV0REE4aWZUSk9CT2dwWUZSZGRUU1hTQUJxWGVXWGNoTVJ2eGJNU1JyaXhLbkJzeWNvWWEvOHRmeUhZWGJDY3ZHWFN6ZzBqK3VGTng1eWw3VHFVYUFHZzVPY1BtNUpuQ2JaQmNRR2ZQV3hBZWN1VlFQNkluNWJOTWhkK01sakNCck01bmZjQUZLOSsvRTY4UWxwdGRCMjIrN085dWxYRnRjT3l5ZDdKZS9odTV0THJ5dUN4L09tWlh0bHBYZjczeDM4MVRNQi9PcDl6ejFFSFpFS1RJTW9uaUtzWXpoZy92VlUrRjFCRWk3VVJZNjl6bitVakVOK0cvc3phZUE2Q1pZQ3IzOTIrR0taREdYMW5ZS29MNnJJdlozUFFTbjNMUm8zcVpGMFNyZU9oWXg4Wis2RjZnUUI1Y2dTL3NpRG0zRnZPUTVHc0Z5MmNINnlDK0J3U2NBOVF3N1BkSEt3dnB2am5CUjlqOEVvMDhEYzdleXR5VjBLVmw3LzNRUkJsVTRUUmc3WE8ybk1wOEROZ3JZR2REMWd4NDJSTERYTTMrVjViVm1RK2VRSGV1cG56UG85Q0dqdm5GNFJuRXdIa3NtdE9xWjY0MG1SUUJYdWxHWEd6N3B4bVRyOXRJQVZ3K2hhb1pjWEdYLzV0aTRucTJFMWJtWHg2MHhmUG13ajZ6TWpNbmsyYmtmSGNzeTNKUjM4Ym1rY1dQM3E5c3h2YnNNTVU5c25qKyszMExzRC8rYy8vc2R1T0NlWHNSdWRFeEFyRDdyb1JtT28rbExJZG5jRmNEc1hjalkzRFBtanE2TWYwcmNnRnpvYjZ6Wmp4amo2K3JGalFFTmNubkJ3eG5vM1VOMTBUMjF6OEkwZVBFQzN6d1hud25XaDRvcDBUQklaOERyRTdvL2QyWVhnM3BnK0pwSm1BR2hYTzE0UnJiY3RRbFZuYjJQbExrajE5S0FlS0xEUDNraGtUbXRUTktnOHZYVzlmMjF5enZ4dWNaSUpIUnFWT2lwb1JFYmdtVENrdEg3RFhKNE8vZlowbnRqdHhZemxiSmpqeVJBbnF6YTVBdHphZlRCOFI1NUR2UGlLdUh0MnlsV2JHYkRRS2pxQlRWaTFJblJzbDkzQmlSRFAzak11SVF2NTBiQVhJdW04WFNHUHY1enAwTHdXbXlEcStxQzI1bGhBQnkzd013OGhYS0VCa0IyY2FWdERUOXdiVHVPUDcxejRtbnQ5d3lrczdPUElFSHFZTEt2OVhjNjBvQTh5UWhHbXZQdUxmdXpIYjh0TFlvam1sbDhVaVA3UGorV0U1QytXMmthTnBLS1JyVjNFeHZDUVhzR3RUeDVnd1g2bGgrUVQ0L1F4N001ZXpaYVZOQjFkZ21rendiNGs2dDV3ejNtVnhaRFlFRkNmajNWU2MwOGhnYjU5eC8ycEgyZmcrWjJkblBEQnhEd0wrY05NcXU4dW5lamdhampSRWFGdHRwL1N6QjRVeVNCQytsbWlIRXdrOW1OK3VhQmFFMnVlVWhnV2wremdHK3FEZk5qTTlnN0NseVoybW5WYUVETnhTQXh6ZzJpa3d4c2kxWVNQZ1VUNm5hd1BoWk9qSjhQV0ZGbzJOaFBCZUlaL2NrM01PdmZxNkp1UlJNUVpZT3VLbis1VkQ3dTZlNjdrNzQyWjVtUCszSFV3Q0wydm5nZUhiNS9rNS9nOFdhenZuZmR1TjNlTDZYTi9vT2h1TGtldk9vblVJNk5wV2RqRzc1Y3JDS3FHSElkM3pWWXJjUUZKdVhDSzJ3dlNvMm40L3hlbVlVWVF0WWdnVFNpR20xK0FKNENHOW5VU1pFNGxZV2VYb0Iwemk5Q0pmTWZMLzF6Y0Q2emRHOGtHVXJTNkZYdWZVNmZQV2NUUW44ZDBGT244dndlQmVFZUNjdFR2bk9PaVprL0UvUk1SOWIwZjVyYzNNM2NXRllmSlRreTFrY3ZKN1Bkb3NxSVZtY1hpUjFGNlNQV015OGRWaGlWd0NwUDgyRCtjT0xwbXVNTGh1ZnIvcFBCZU5vZUVSeUR2M0Q3LzJ3SStMWW9VOGdKWmIwU3dTQTdBQW1vSzViUXFLK3BZcVRuRzN0TTVwN3EydStJQ3dYa2U1dm50THE0MURmZmJ4bG9MUVhGWWhHRTlMb3luM09seVY0UTF2cG9UUDE0Q3U1SDdKNGJCMFBmaS9KcHNJc055MzdLU0RadjMwc0ExZFJIZGRmR2NpYXZqb2xDVDhRWWYreDBVMUxqRDhwKytVTGFnUGJlSVhBR0dtMlJnUjV0b1lGaVdPTEVvN3VvYVl3bUNjdGd2RWRoejFySThpd09MWjlOMjZxSDZCQWxoMkxYc0hQNjZDUUxIM2YzbzhNZmwvR1pOV1JKTW4rMHh4V1RiNThXM0dKSE1lQmVNcGRBNGJCOGV6TmdIVmx6dzU5ODhXRnY4eFdrYm1zSnB4clRPVzdvdlFzUDJ3Y05YM1B1VmtrNThVRE5QOEc5M2JQeitPWUNTak5aYTF3MGNGK1VpRzhhbzE3OVhIMmloazl3bllOY0c2SHBaZFpCYXdCdDlTMndYclZKQnF3Tng0TmdOMWZOMnNBa0YvbERuamcrS1pTYS94bkxocERVZTBEbUZ5ZWJ0TlJDb0VzV0VHa1BtV3FmN0xNVDR0dEFuNDJmYngzMy8vcTR0c2Q3NlRlRHp2OHBIZ1M3Wm80U2ZiVEhIZVRtK1ZOQTBiRzdOcElrWjRzNzgraVNnM0RqZEI1RGhmZlV0VENDVGZwV0JKWXdPbEtTcnhlODRGODNhUjZ5THhVV1kzd1JHaXpDbHVXaTdEUGNHOWRaUXMyYnFMYWVjSm4veUVVS0pqL09WNjh0RHAya3g0NU9LZnM4SGtGT1hoM2NwUmsvUHh3cmErWWRRUGdYTFpPNnhUbTRQc1V1QXNvZllzSzBaMWp2dlp0eXNKbTVPeEo0ZWtaWFErdVBvbHBtemM0L1BrbFF1RE5qM3hXSjRkY0F3TGlJNTBNR0U3d2VTWjJWdUdvcU9UL0EvUGpCcUlqWTF4SzRONUdDbUJlKzQvd0NkSU1JejkvR2xMeUhpbFFIRWdBRm9wZmM4cTIwRWdlOERPdklSYlk1KzVraDhmUjJBWXl1U1FwMTQ1aVNva0ExZ1AvcHo3UHBYRldCZS9MYlBRQ0o1WktpaGtjQUladE5tVTdLTEt1dy92UHkzUHNwVnpaenQ5c2F6ZU1wWUlDZnpsUDMzZDA2elJUNmR5ejZTMFJhdU9CenlhTjN1V3NHMkRMMmhtTnRQcHIvQkorbTVWYVF4T3NnWHlIaXVjdThJNncxNm55RjRHRXJTcEhJSHJDcUQ0S1ZFVytmVmMvK0htbkN5c3NQVUFOWkxtQWREUHlZMXcycjNxaEF4QURCMmJKWnYwNzZ5S2NnbzRIZDFqSEZCenpNTS81N3NHeW1xNDlaTlBSVXRIcjkvUGhnTytEVkE1c0tlZm1uMkMrTEFpdXlVMmY4MDIyTE9UbWZHZFl3dENzL0o4ZGdyNUJ6U2ZpWHhvNm1QNzlBR0ZOQmxmQVozaTU5MEFvaU5NNGNadnFzYXlqMVF4N2d2Sk9pcC82Qm1RbXB4ai9ZeXJzZHRuMC9KNXZabUNkM3FoVVQrM3BIM3RkOGJCZUw1T2dxUUVmQmhIZGhpandZM3pab2NaY2hoa0VQclhGc3NsYmV0YnJURXo5L0dMK21BUldXRG5pL2lyTkZOY2F3cEQ5MjE3OURHNTdDYklURHo3MzQyTWJzZDQzY05BNkZRbjI4MVEyZWZsV3RrTU1XWHZrZlNFWWNaVTRVQ0V0cFh1VlFDYmdpRzNOWHlNcU45cmpoT0k1RTFSZlo5cEhlUG5VN0dsRkRWeG1hYVdGUHFTOXo1YUZ3QitHWEw2aDVOellqdmk2ZnpIQm1KeTZDSlQrd25NTnRXdWZaekk4RnQyMkV6dUcxaXpZSUtqbThNYlB3L1EvM2ZCQSt2Tk9Qem4wR3lBb1dPQjZEem94UFlLMGNaYzEvQ3orUTl2TWtzWU1wVm0zZ2w1MmhNQTdHeDdzTngwVC9vc1p1ekJqVFhCanNjWk1YSFdaZWdwUVRsVngvSklqRWIvSTQ5Y29CV080NTliVFhKY2Rjc1NnM3NiemZwbUJObEp2MGhNenpZSm0wYTBsbkhSZVNIUk04ZmxFTURwNTFDaUp5bkZiRGtINmF2M29jT1Bia2Y5enA4RVROOGxvRUFKZkhyR1BRbnJrd1NqeVphampjWVNGajV0Mk1hM3RiRFdoS2ZsY3NjdzRTbXVobW0zK0kzdmQwWDBRY1RRM204YTM5UWU1eHhrTkJvZFQzbTY2eU9ZOFZmZGZVSTBNdWN2OG5HUnNidHNUbnhISTlvUzg3VHhDT2lDbHREcElaODhneG15ekgwdTFwc2hEVnhDVVBQTWx1aVhUUEhNdm1SY3h0OE1lQVRQa1h2azg4eThmL1k3S0VDZEhuTGZSTmxacTc3Wis4eStsMlkrQ2dGUFdpbXk0VEpseEwzWjBURFdtWUZpOXdhTmtEMi9yNDhJdkhNQ0EzcGRvZmlQWXd0ckRyRUU5SG9OSHVIZGlSdXpsSEFLZ3lhRm5wcVdTbjBicnJveFhhdWNrVVN0U1g1NlBWbWVGRmtYcjQwKzI3eDVEWHB2WGx2YXpEUjBqVDNxdG5YZEVqZGlZN2JnanFwRVZyblA2Y25RUHRzV2FLWW8wVW0wWE53eTNEV0xIYzhod2U5QmFlTUZZVEdZQzlBbjhkRXpwbk95TDQ3bHhCRS9XWk9PemFLQWI0TGhneEF6UXlmbkFMS2ZGd1dEUEFEUTNCbnBLTEFzU0VWNVM4UFlDSnlzMC9jNlAzZDgrRGlUU3NxZDROclhpTHJPL2R5bm5jWXE4QlZaem55MzhXUkxERE1kbitMM1k3dzRiTTRoejZ1emo0QXRLWGVYejFkM1BacGRybFh6UWJRU2l3eUFObVBZVnFPRGxuK2VoN2NYZkRPWERUWUpSZ3RFOWVrWmlMcjJiVUJBbDQ0UHNKUU00RUlRMHpLOEphUk1YRWtmNEhzWGdHVmxUVVozYkVqTTZVYVY4dlhqWWp4UzcwUjh5dU9ZMm50aTYyS1NyWGhQVXdOVnpGckg1TkUxYVpLQWJCdVYrMzZ2R1VNSGc3MXV1ZnBiTDMySlpEZE02R3JMNnNtYWNqS2ZzWFJlb3RuQzNrcndTYmlIVnlLa3NleS9HMVZ5dGcwMkR1cWppOTYzdVlFR2U4NDJOSnRla0F3MlE0dXNpQzJUWkpQZ1lPL243bUpsZGFyd0pPaXlNSkNKdSsvTGtpRVRaTTRaOFM0RGVBYVFNTEhGQk5sZlJXS2dNZjZQUnpWaFdoQWt4WWM0dlNBNXZJejF2T2svUGUzOTV2eWZ2bUdmYzRKZU9lZmRsZWowc1hIT3BCOS9wejFkeUlGVUxJc1hsdk1oS1pkUTB6Ylp6Y25wTmtiS3JSNEl0WVd1MlRYc2RkU0p4b3F3OFQzS2Z4SmRYN0dBNzFOMmNUWE5LbGpIWE0yTDBNMkFnbk1qdmN1YVhwOFBrM0FzeXZVK1FVS3p4WXV5WkJpditwUWJXK05QNTNobHRrL3pFSE9VREorQmVkZnJEUzYwYzl3cTNKN3VqTnNIWFk4ZTdicUhVNWNrZ3dYR0xic0FDRTV0aDkyUEJMUjl0eVYyenpGYUdGK1o1NmJwZXp2UktFdGVma1MrbWYwd05UYUt5Y211YU40TkRXS3ZrTC9pbXFhUnkzNlpLYXNHN2xGU1k5Y1V6dFgvTGdVeWQ5bEwxV1pEcHd6ZXB1QzVTbTRDQ0NqZVhuTkcyaXk0WG43STUveVAzRHA5UnJIeCtJdzV2Y0haYk1ENDJpclkyc25oRU5jSHk5Yk5yT3NmK2FxOVRlVUYrWENzYTNwdU5jZzFCZVpkNmpaYjRZZnpBWExvcyt2RlFHWXZOdWhjQWs1c1BKSmk1WklqTDR3V3B0bXVrcHg2MndXMDFuR1dnZkUxeGlCZ3FDakl4NFFoQXRscDNEQWFBTjRzdlRqZk02RmROTkhuUlR5TXVlYzlDYXE5TzJaVjhwVXB2d0NuQWFMcDNiMEFaUjBjUEYwTithMm4xUlBnREMzOVAzclM2MkxMNkZsWm44OVpUaEVacW1td2NabE80N2NzLzZpUERKdUI0YUt2QU4rdmpCZEF1cEw2MnJHZ2tCZmVFSjJPQ05qdUJaTUNpd0ROcDhabHZOSEF2UFk0TjM0UDJFNzd5Yk1qZWZ2dFhwUVpIQzBoeTVLWWZmbmhBdlAyWlFlS2xDeHdNNXoyT2dOZ3FiaEhLb0F3SWdETFFsenJJdjEweVFMNy9CeVY5UUVWZk1FWTZSbFUzYlMvaVpnanRlSEsrZTZOR0x1UFpRV0g0WjNQS2JKVC9Ha2pYakRROXpDeDcvTnVOTXp2RE5rR0lmeUxYWEo4aCt4N2pma2gvcTBvQlhqQ2tyRnJFMzBEZTc0UnNDVm85UHB2N0xCZXZZRktINGI1L09BZVRjOGluWHZzbmtBUlR2QThTbUdDTHFQMFhYM1RNNXFCeURONCtJd1NMUm1CWjJ0K2ZwZnRDMHBFNGtUT0M0akRmSHR2WlUrYkMyeXpWelMyRm5QYXd6WHJrOEhtK3ozQWVTSnBrcUV2K01WRHQrVlRFZkxkZUZXNTdMMnpSSEdOZUJOajgvSngyR3dnTmptY1BidWNINzBaTmpRc3ZqQXlNRVhHTndNNlI2L01EdzNjekVoY1FtNXBOS3J1OFZXWUtYMlBORGRHNG9GdGZHQ1dSL1gvN1BOMzhzMGVoY1BmMzZaMWNmTHlNd3pKZWpQb3dJRU1NSUp4SnVISmFyUzRkcDVnMWVHYW5xVm10YkdTS3dndzBIZUpnazdkbVA1TXEzbFpEOGNiOUFVak5nSFE3d3NNMitJdU94cUljMEdCQ0Y4OW5rSHROd0pzNlNyNlppL2R0ZTRwYmpNbVdTdnpLZHVpOVBPc0R0cFdEbjcxZG5XLy95SUd6ZEpvQzF3Wld4YStvSmt5STBuS0tHdTVMbGRUVHB1U2VCU0JXVFZGSExTTEdGQjF5Z0I0eUlWS2RvWUExekxETCtMc1E2VGt2elNtL203Z3pCUWJnM2pKc0lTY0xnaklNK01hNEpCdy9jRkkxUVdEV2hhZ2FRMm9udDd0MmpqWUxzck1PV3o3UmFNY3RPRE1ZV2NYL2ZUZTlZKzhlV2RMbE0vbEZYaFcyL1ZzVVYzL1JocVE5UUs4SkU2ZVFOclNlOXhDM2xDeUpUbFdtMm5lMUltUmFRZ1lPQ2RaZ255aEt6Sy9lYlRsZzVoSEFFV085MW5XT3owNTR6WDJIRGkxeWRRLytBTjRVM2FkcDRPanEyMzVpOUtzUnczVkx1QnovdkViMmRpVWhuT1lIdG1jSzFuc0c4TzlrcG9QcnNZbU9aNUxzSE0wdXYyK0l4VFJHOXUxQ1BXcmRpNmk3eXk3cE9FN0JDZlBzcXpvTXpzdW1RU1dIRW5uQ2ZRSjlJdEg3dzNrdi8yZGxpMVpEL2Vtcml4L25laFp6MDF0empFRk02b29uanBjVWVvTHdQVWJLVWdGY1ZrMUI3T0F4TWRwU0tJSGxzQzVvclpIK2ZPQ250clBnN2E0Y0hjc0tsVWlnOUJoZ1I3ZTZFOW1HZmdZYWdtUW0zalJ2RFBpY0pteFQ2Q2lKNDN6MmFnc0dldTE1RUg2enNpcEtkaTdOZzN2aUlmMWRwcFJldHhVdkE4U0djazBJMllYNmNZczNua2tvdG1HWWUxd1RTNGxpMXJNbzRnQXdCM05GNHRiQWlNck1uOGNaeGVFSGk4RWpLTGlsa0JLbnUwaGRCVmpWNHN1TWFSNjM1My9SNWN2ZGhOWDRGTzRMUzlLeWgzOXRObytGMHNTTHZnTXR6d0lNZWN6OW5kdE1naHNjeitaazVHRFJsZi9NcGJRQitNVUpOWE1rTGtRbzcxZnJaT1VwM3ZZNWhjYzlOdzl5K3VEOVM0Und0aVBuZDhIbDEzak84UDRMaHhpNHI0cnVMSWpwVHJuSDl5M3Z0Nk82by9EYjVZd0l0b1pjSVlBL0xpQ2hBRjREWHpKQkpkOHZEdmlzZHRpakNLejdyZHJnWGVIWENMZ1VYZHY4T2hjVmlWMFdjWmhIRDd0VHRiaFcxcnZOMThsMkMwVm0ySVpQUnZRNTh6anZNUWhBLzhjL2VoQ0t4bGhOQ3MrTmsyVmRwVm9Sd2ZqTThQcVdybjdIRmo1Ri9zbHZ1RWRtemtuKzdWWlVpM0RPZlUwT0RXbFRMMzFuWVBvdmd5dEZ1bW1mblF5WGJxT20wSDEvZGlPUVZBWjh4aThtV1hwb0tVK01wNE0wNUNSYnJhK2ZmMmZ1N2k1d084aTUyNDltYU4vTFIzdkV5UzRnclFFQ1llL1NhS2phbjFscmUxejlIU3l3WG5CSFIrNk1MS1ZXWTk4K2had2V0Zi9YRlB4MU9GRjVscUVucmZYcHVXMnVNbVdWSDVocUhHckNMNGxSSGJ5OTN1dG1Sdm9qR1pvZ1ptek84bktJQThjUFF2VXJEdkY1WVBLTUhpakFQc3lzV241NDh0ekg0SDVEKzR0SnlNVHRMSWdyQU02K2NCb3ZzZlQ5dlY4RVk5NkRzTlBxQ1RhVHFYS0hOZjRNam5ITXU1TkZnSjlOK3NWZm83RTgwb2kreTJXNUZyNDcyMER4clUzOUNUZTVEYzd6d21KejVIblhJN205SUdJSis0T1o3dkdTV3FJQWJNWVg3UWJOMXM2bWlGMlVBbHB5aW43bWladlVaNVRFVlBJbUNsZ1FuMDcwTWMvd0wzdk14UmpsRDdneWY1Y2VOSHpadVBJZXUvY2VQTFZOelRkR2JadGIxOXkzc1VYRmp6bzVxNWRwL0FzNDRhSkNIaFAxaW5KeVp2cDk3RUNXalJra2JMSEgvRHJKejhSYUpiVjZyTS8yOE40SDJaTjQyaHQ4L2xrczJvQ0U3RFp4NDc2eDJNSmxTU1NObWRiWXBkZ3laRk12UzRKUXJQQUZBc1hLODl2ZkUvSlJOaGZ4U0g3S2NkV0l3VkFyd0EvcFFUZmN6RHQvUnJ4bkt2L0hMTXpTeHZmWnkyQmwyR1BoMW05dW4wOXNwLzlhZ0JGREJVbzIwSUdHZVM0Ri9qaFFIZTZscVdSa1FmTEpkanJ6S21mZlNjN2U3ZHBrRXdYYkJsTUZwMGNOLzNKb1pkK01adjk5TUZuUU1uTXVuYWRNeUlmRm5nMENid3ZnaHk5bWNPR0pURmRtTWxKajV0TDlZbmJrOWtiT21NNFlHcGlpcGpndmVvSFk4R0FZdVVVRUc5MlhkUnYxckVIQUFEVmx3M3hIUDhKR09qR1oxUkU4bzVqZ05zN1BsbWVveHkyNFZ1Yk0rN2R1cEkzNnQ2TXplZ2hvUi95U2tMUmZjNlRmZzc2YlU5dHFMNzcvVXBrN2F4YzF3clU5ejNHR1FQd0c5UDZ5SzArMGZWc2xiaXBIdDV3SlhlM0RpbndaeFBWQjdhQjdSYXpIU2FFVzYwK0RsOWZHZE05eEpTbXhKaHB2YXlwN2dYb0hKeHkrM1RqNlp3VGpDbjNRRTkvOUxYL25EZTh0OTIzSkRNbEIxckdSbndTNHFsL2Y5bUJEUDE3UzdiWEVnTmYrWlFJTzVTWGtXNWE1L3cwNFJPVWQ3ZWtmek11T2FkUEFNR1FteDUrUGc2TGw5MWJjaml0OFpuWDI5MXpIZGo3Q2xIRWozK09LT2RLb1BydVNicng1RXNPQnM3SW0yTjN3d3ZuSmU2K0tHZVhNZUJSMjNadG5ZOXJUdUR0d0hPK05aVkFCaHZqaU1pdmJuY3pXdGlxTkJEVmFYLzdhM0hpeDFuTGpuTUdXdkpHR3I4MjJlc1FnTHczYVl6S1AwYzRNSTFOOEF5ZFl4dWN2R0ZFektHWFhEVm13N2I2MGIyUGIwNjZsVDVlUnFKN0hEaGJteW5yMHgrV3p6SWFMVHBDaHk4c0VuYkwvN05keDhlbktIYXZsQUZvSmFyQVhhbFZITll5eFZmSVRiak1tY1Vac1l1cTdJaDVVdFF1Q2x0cmRTdjIveXNCb3dpdG9WM1F5YTFmUUJYQTNDaHhwT0FZMjNVbER0eGc0VDN5cEtWZmhwdXgyNmMzaHRmNGxzSEpGelRtZElUdkRMMnorcFlEY25Jc0xkcWJEVXdueUpIaDlPNjZSMUpLNEZzQ3dZcEdrRnBGVG0vMDlhOWVoUjJqSnpLZmVsNjFYZXVjL3NoaHV4dHFRU3Y4cCtPU0ZFKy9ybmxDa25HS240aFJ0TUQzZG81OHdNcU8rZ1p5cGgxaFVDOExSQi9vd0MxTEtGWmZrZ2JLQno4UEdOWnpZajI0RzNzL0t1WGN4Nm1NTk1wZjZIYzlZZkFadGlXamNTVlM3em1zMmN6eDBVODMyWk5IeDJVd29VdUN6dnU5RHpoZ05OQ1BZNWxPS0p2M0NvdlZwTEdwcWcvaFBlOXkzeFQzN01SQ3lORnR3N0JsbFM4SzByQkxTTitiUG4vQUJ5c1JWV0xNU2NvY3JXM1FUR2ljWVo4QzN3Qng0OEZhZTQ0L1I2NlgwTC9LcHVyYXI3QW5teWVmRHYzSDQvMXZHV3RQNXhrS00vcEphdkF3SXdnUnZjYWV4TUpyUnVqZjlkRGpDWS9UaCtYaGpYWHlubG56eWtjQzFwSldQWm5FY3d0NWw1aTEyNVdSclk4Y05NT1VTMzJRWllicU0rNndvL0pIR1c1R0oyejRhSm5QSi8yTUVaU09rVlRkY2xOamp6aWtWdlVaK2hoclhDRkthVVUrb1krejFndDlQNEJjNWVwMW5aNDRtZ3VyazZSL3l3M3cxYS9NUlpPeFgyUGVHdnpvNUxHS2t6emVRMFg2TzdZRXFOdVpQZExNdElnZTJzNGNPYTNvNG9uK3Rzd0p6RHlKL3EwbnhyN0ZzbVV2bW52QmVWdFZzL1ZkSWlkcXRvYUpuK2pqVTY0YXJteGRQOTErdjlOTU5qdDloRkdnYnZvMUdERmhNeE9JUHNwVU9ISUFEUUFjSTZJM1cwNUovWVpsd3ZOaVhHTEdmOW4zeXMvODZEWmRPY042K3REaHZUMi9uVlF0cXJETnFhU2REanJQT1RBaW92MnlrK1crZkxhTDd2cm5oN0NnU1VZc0pOMHlYRVdMcnAwZ09QcDkwdmdrM0NkSmozUUp5QTM0eUIxdkhWdzRiTThtU1hPeklqdmhVOTQrVFdOTDl2emh0OUtreHA3Mkd0Z1VPNTZ4enZFRXBlWGRVWEF4eUx0dmFiM2ZHanhRWjRRMUZ6TWxWeTZYSW9GOVlQU1RZVHY0V0hDNlgrTTV2MlBQc1I1L1k3NkxNUm1DQWJ6RU84SGNjdEpkZHp4MWpmRXZoZWlpckhTdXpwNHRNWG9mZlZSVmpTMmE4ZDY4dGNIQU93a25aTmVIV1RnN2I4TXcvejBXQ3RCVFBUNkM2M2l2V2FTWkZadTV5V1NicE5mWDBuNU9pMk9Lc2FvdFExYzNucmhsTmVVSnJnTm1DODM3eVNEbUdUUGp6ekhqUlBmWGhYQkFjdWlTQUJOWnQ0NEV5RVhkRTF4LysvQ21NU3c3MnRuY1JkYXNxdDZ2cUwxUFNJMExFSno3RE1OU01zYzIrK2FNTlVlQmh3TWlITDJ6VDJacFlmTjJVaWhoTHNGY2tGOW5OK2xYWDNBME9LRXlXd1RIQ3BLOEJQSE0raW5aZGhZbStkbzQrdDRPZjVySkp6UFNaa2pNTHJnYWxETjZmOG1nSHM1akFPYXR0UStBQmlaMGZsejlsTnoyNzVUT1dXYk1VMTVad05naXo4Mjl5V1ppQVFJV2pyZWdlWFhQMk5Ib3lrblp6OWNMY0Z4elh2MXp6bDlDNXN6UkpRdERaYk9vUDNkQnlKd3huSTlOK1dJelRGLzA5TmhoS2NQYysyU3VNWVREL1RwNjE0ZjU1SHkyMlVuV0FtRlJlZ3M1cDk5U2Y4czliRFV3eVk3OXRUT1orVHIrQStHRXpKeUVUSGxqejJmK1p5amtNOFlEdEl6Z0JGbFRJVTRPN0p2b3RyYjFUVlpuQ1NBZExCQ2JmUkhmSDk5OGc4bFI3Q2x4SG9laVpSajVMOWI5Y1lNSU9WdmZ6bUdTR0JKbjhxTy9jVE9IZ0piam5UaW1wWFlQTWcrelNFdzJSZVB2WEJFTXNuWnUyWVZoMTdPV2pXZWlEK3REek1FeGtYazNvYnNVVkI5K1JHSDFDNmsrODFGLy9yTDFaY2NtVFU2RkFKZ0J5aEc0ci8wNHFmYVdqeWlYVFNuODlyMnYzdENDZDhiTzNyQ2NQTjl0dXYvQzRBRWlPZEVoWnlDU3A0Q3FhWjJua3kxYjBwSWpFVFpqMFQ0WTVvWEhoN0NRaForanVPNTEzRDdGdkpIMUdVMzhkT0NicmhndGZ2UVl2QVFCTVZwTFhiam5COStvUC9Tald4OGFpZ21sWDN0MWZuVE5pci8yT3l0R2RKU2pQUjJ0VG1OTytMNlpSOENjVlE3d1JDSGZWcENnYUtZd0JsR2YwWFJ6UXVNK2Q2QjRUbmplTjEyam9lek5YQ2FUUzlYa05QWXA5ZlV6UTE0NVV5cCtUMklNWnp4a0RzTnp2c3lqeSt3NStWZVBLbVY3UFE1ZGxPTis5ZTk2T2NXSEJiWTVLSzR0NXpDV0VFNmJiZUZwYmd6MmtvVGRCbzl4eWZEYXBHdC9uSzJ6QU85NlNsZGxnVS9IQ1Q1NTg3dHRJcG9wejlsckdSOWpsUVN0NnNIamdOdzAzWktCYkdCNExkRHhiL2xUOThMN09QTXlya3pwVTdRVG56ek95bEhvYnIxdG5OWHZURTJ6M0ZDMks0bU91dTIwSmhlMnBjdHczSjN3bjVsRWo0djQ1L2M4WXI2bnhIUmZBc2wrR0piQlEvYVkvdFEzTS9hNEpOOGswT3hGeTNsdUN2bU5qQVdrL2dzbWYwcFc5UDdjUnplQ3RhME9TL0xtbVA3TklvbXlseGtTZzNMVDY1am5tT3MwY2dvb29vQTNKb2d4SFBNOEV5THdWZUE4VHE1U3RBSG9zRlpXMU4vbEROL1craHkvSFUrT3ZnMkdIYzdVblY2TVpBdEVsaTZJVDF0OTJOQlU4SzJNSCsyaDBIZER4Ny9HZVBXZkRTK3pRQ2ErL3J2V2NLYmdjRFFhTmw0U1ZZTkRSOElYV09QclFIcjBlR09vM3hjNXNuOTYzVlljUCtiOXFmRXhFcGlobE84K1FwdDBSei83aEF5UUJNa1NZN2ZPVXlCYi9ESGl1N2N3RXdDbGNLQnRIUWtoclpQbFN5dFJCMFluVUFWdFg3Z3JUL3hqazZNN3puZDUwVUt1ekNEbmFTR0RtREsxTW5FalJOL1ltempWV1lZTFJvRy80STVOOTJUZ3VlVUY3VjFQRExvL3NrVGZ2Y01meDA3Zkk0SmhVNDBUMXR6Mm96L0FzQUtLQVAyMitTRDVadExPOWFmenlmb2poeWZDZVdwQ2dkKzNQb3dUWUl4Q3dha0QvZDVxN2hQQmtFaUV6N0tBYWtMclN5SEY2R2Z3Yzg1MFZFWjJtdXpKeC9nRTlabmlRSm5neTdZczh2cmM1S0hteUE0N0p0d2NwKzlka2tZYmZrazAyaVZaVXZSRlQ3NStUMlNQNXZyV2I3elNIUkFFa3krSjN4VmxmR1lBOTNWT3pJNVhGMTZ6NFVmTDN5dzc4NmJ2N09odnN3RGhRQ2dMTVIrdytsZDVJcWovR1NQbnBpMEg5Mm9ac2hUZC9VdExtSFUxR3BFWWJlL09tMWt6NEtiK3hQYzI0MlJOVkFOZmpTenRUNGw1WVdPb0YydlJpMzRTanJ0YThxYkxhQlhoSlA5cmo4S3Q5Vms2WncxM1dMWXFQTG94bDZPYkJaNHJ4ZGhQUEFOS051ZW5udzdKVlYwZzc1NHZ1VDRUMmhqODZPay8vbDJzcStwL3ZzeFFQZFRSbk0wU3FZZWVuQ1NqdkhiQnFXNnBtTU1mbzJxcy9YNmZsZlBkS3pTM3ppRzhVWDE4OFdmblBndS9pNzB4YnFnTUxMcTc4SFBxamdiZU9tdHRrWTgzQjdBcStaRldsNWxuZ015ZnhiWE5xSHNXRjVGeEdGeGtLM2VkZ25RZ0RjNlpBalRiRjZSUkpodkFTR3JTZTNmWWg1Y3VlamlSblF2b0tIbE9HTzhNcDJMV2JPazJYY2prbElwRXMzcXdaUHJRc3JIRDl0NmQwd2pqdUxYeGlUcWpaTHFNMkYrNGZwaDQ1a1RmNXdBTTMxS1VVcjlLb0wzcHo0QmVVem9qZ3B4QkVRK2NBR3pHUlhmZ2h1bkFKZXZzRWlqWEd5OUczakxnVG44T2hvbWNaWHBTdEN0SGplTjBYRkJ1NUpMdm9hRmJjajB2dmNxZnR2cmhnbGV4bEMxeEg5cnRzSkt6TEdkZmROTXNTYUwvSkJwZXZneXI4ZlBwQldpU0h6NzRWbllCdTJwQ3hQdkFMSTJrVXRKbkxvR1l0c2JLUWthZktYdXVGWlVQb1c1NUdLUm94em5hcUUrTHpLbDZTODVsdEJud2ZzV1NVMDRQdW5QNnB2aHd4Ymk1LzdxK2M1aE81eG1FZjUvTWNicGZiWDd3YmlZTmlUdHp5MktVcVNCN25CcmIzZ01uWXlGK01FZTkzU0ZDRHN6cHc4Z2YycytCL3VWd1hzS2dxWEhKSWRuOWtXcEpKTWthTTRPeXM2ZTlaNVM0dlFyMHZOa2IxNVJ0bVNFQ1lMd2R1MlpZUUN1TExJWGp2V1hyamZZcnkva011ckFjY0ZNN0dZSGFvdEk1TVpXamRSNy91dXJUdjE4dnFIWTJqbmZMRk1iNnlGTG9tcXphWGxkTy9uWllMWTNraSsxaHMxdzJ3K3RkNWxkN3NUQ1lQWHNPeDNuR09vMitZRy9idnU3ZTJHRFFtUVEvdVEwQ01tcXFOUnlxNlhiOU5ab08wd2psSG11c0MzRmk2bmRnUXJ4dnArY0JuM1l0S1BpWk9VRlg5elVYZlZ0bnk3Z2szL2lVdmdiZCtpdkE3NEdiM0FNSzlHMEo5U3YwMDdOMVBhSjlUT3BQc2FsUFgwU2NueE5tVmc2NjMxZHBhVXN1UFgva3dKUXo5TTJ4T0diTVpPMWlmdUpHeCt0MEpPVHcxZlk5Zzgyb01QMTlqbUd5WUwybjFma1BiNXkrcERIQUtFWTN5QXNxRGJNOUcwTEcrV1ZkeDZJcXNzVHNZbmVFNi9JV2c5ZjlsZEs3Wmp3NXNDRHQ0blMyRGR1dUo3T2w2MEFnQm9rVC9FeG9xaDdBQWc0OEdhWXhYWnlHN3RiZVM0N1JMSW5RWDFsemVZVzNQbE1uSlhzcWpDVGQrL2I2dXhwMDNWQ1dsWEJoNm14V1RHZnMrdmd3S1JwUmsrZXNYTi9hejdBUk51Nm92bXRUOURrWXd5VlZkVHpia05SMzhzNk85MWxYbDQ1YmNqQzlrZU1VQVZMa0ZxQ3liRm4xQVBBbFpuOVdGWlZEcG55MmdRRjdIZnZlcUVVeUFFQUl0cDNLQXZZc0VaT1NqRnZYMDdVWmRvN0R1d3pMdGkwTnpzbXAwOURrUFRIUUdKNHFmOGFqKzQvLzdRdlhvdWNjdjRBVHNkOW11Z2t6dVdSWEJNUHdXbi9lMW90dlk4bGt1eGs1bXh0ZHprVS9mWk9GOGhKeUFhdTV6MWttV1JLWXhaZTBMSzhqdHp0VHNwa0JpS0Q0YmRaMlRnbGYxa0w1Q0paZG5Pc2FOQmJNRlhTMnJjdnd4aG9kM1NEMXR1VmpmQ3g4UU5iZWpKNEVJRGloY1g4aTd3bVkzWmJDYURLM1ZOUkc5MllhUGh1S3FMYTJreW1BSG53Nlg5RjV6OUtvbUY3ZVRhN2syM2VLYWZnN1VSOU9OSzhmV0ViM3ZxdWJBdzZIbVUxSXNuWlpUSzVsdjY0bFgvMEl0UGM5TTBHVUlQVXRJQUp6V1VOd1dXTnZqM2hNK3A1V2drN2daV3l0MFpHOGVrR1lVMnJmK3B5RThVNFlnWmM5S2I5ZDFRUHNTUVNnWnVqb0RpQ2p5RXJCMXVNdEpRTmVEdlZwSG95dVpic1RuNkZQOW1NWThNY21nWUF2ek1NNDJoZC9Vc28yVUFlWGZnN3FmTmRRT0FkaHZCSnpKWG5VaUNhL1RlVFVxdXREMVhVM2YycS9mUzh0VzVGbzMzbmt5U3dSTm5VVDdBWDJRSk1YcVl1cnp6bDgwd1B6bGkzbnhuWmhCMnBBNUphNmpuUCtNbysydW1UelpzWWhyUXVRQnFQL2U0eVQzK2svTGFheFpTVXhSRzFYVjQyYXlSaW12ellETXJXeE14TGZ0WmV1WnVyN2ltK095dmx6a2lDTTlqNmt5N3BSRHZPazNjeWUzQWNQKzJHRVRjQ0hNK1dYV0ZtWHpXemNJeHo2cHVOWkliQmdkUENKbzQ2b3NuSHlEdGo3NVM2RWxpTFBwb1NwaEp5aktMaUluOFJGV0JhdjNMUTdUWFFRZndBSGVuU0JySDl5aU9pMXBhLzZCWG1VbTAySDFpeW9sakh2TmNOTUhmN08rc2xMNEFyYVF3TW5KMG1pMnhHOUl6UUk3SGQvTEovK0hQejMvVXVObWJBTC9vdS83TnFTbDB4bHN5ZWxOMlBhTU16WkhCb1VTV0ZXNWpjbUwzRnJTVFNDUHpQUStPU3o0KzBQRCtHSU9XbVdNVkF0L2dtcGZyRmpaTFdHQ1hvdlF1ZDBqajgra0UvNUdNOWgwc0ZSdWFBK2h0WG5aZXdjMWVqMDMvSnp2WTA4bUNhaittWTFua2VtOFZudzhOTC94NEhrVDNVcnpHM2IvK2E3NVRMczU2L3dxWnd0OU4wc09SRitaM0VKdWVtZlF4dFh2ZXZwclF6dTRoVUpaRWNxTWFoL0lGeGkwUkxXUzZiMFBYVytDVHNQZHpBT2pzNjN4aDBvKzNLRUU0a3VZd1ZvR1Z0djRqYTBxZnFJV0ZZazEzUTk0MG53R3NRWXFpZm52ZDk0UDNqUy95Y3pjMFkwOXZPYzhzNkV1OWhTZERJbVB4OEkzcHlWZEV2c3U3eUJ0KzhSMDhxaDZWQnNNMmRybUR6WDhvb3l1OXdZbnZ0OFVEWTdyemthWTNCdDd6QkpEYzVucDM5ajhOYjkzY05DeSs3ajhHRW1YZERxOCtzTzU3d0w2bWI0bzJzZ3hwamFKUWlRTVlrVG10Y2g2OURHQWNnN3BoMzlJbC9uUXRqNGU4RytSeGQyUDhDUUtaTzRnUXpUVjU5SDB3ZVdZY3FiWHg2ODNldmxKNFQyVGxYeEw1aVdGZTM0T2QwOTAzYVI2STQ4T1pmQkNBWDdYVllJbXAwUm9DWGpiTHlWQWVQNTVNTHEvYjNHTlJCVFAzbDFYOVRiT2ZTQWRXeXBlZ0VNeThtWXZDVUNIZUZaaGtWQUlONlZCQSsxODkvOVFoZ1J1Zy9mbE1pYVhKdXozeWZHdXQyRGVFWkdCdm9wbEQzRTdzakYwelZGR0pweFQ5K3lPU0tVRFplVHZjTElhZlV1OE9TaUdFbUJxSEgzVC9wcjMrZ3p3NGkzNnluNDBWc1lCSUorOG5UYXdPU1MxUmNJZ3gyY2ZNVTUvUVJNcVlTRDkremZyNndsbUx6TjZtdzlheE9EcGZiMDZXL2x1ZGtqOGM0L2RQeTVNWnl1aE0wUnArU0ZJVm0zYjE0bW54TVc4UmtjcU1mSVREdzZXamZtaHNtU2Q5T2NZZ2EvbzF0ZkxRc01sdGxLaHA2ejd4RUx1MWNLTnNPMzFQQjk5WDNWQ0F2MkpNK1hpS2ZBcDQ5OUNkbzlTRzFMenl2S09JaVhSTldmMkxudS9IaHc3R0VyT1VQTW0vUWtReC9tZ04wa3ZrUUxUUU1uNkoxeEN4ekc2VHE3di92dm9VVHMvV1J0V1c1RnduY2hXejhsNHozbEthVDNNc1dhKzJUdWhMMXZRSWxXN2Q0OG5samtRM3ByNlQyaTN4YXdtYkwxT0ZwQTN5d1RJazVQK2w0emh1Rm9TRFZZTWFvY3I0b2Z2Q3BoRFovMlppVHFaT0F3YnViZTBuSTJ6ckNIVndLT0ptZnNxY0ptMFI5ZGRKSlBtRjRIT3lZekdTdUdqWXY4VTY3ZE5lbXZ6MjBnY2t0cUhkaGpHbktWblM0Ujg5OS9CbjdySmFNY2oyYjBHQmszWTEyZ0huN0N2ZHhCMjJFQjhENkd5YlM5cGduUVZ5c2lJek02U1JKS1lVZy9aTW1XNDNpNEN1N2haUWdpZFBWZDlkb1RFbGQ5UkhHWWhQaWdJS0MrbTlYSno2WitTckovSnp1V2xmM3Jwem5ySG01dUJnM3pvNVBlbkJKMzlQQlV5TzNRc2pucHJyV0hqMy8rLytNVVBKaVJtMlhzRTd4YldVcGFIdzkwOEhNNlpUaUhjdTQ0YTU5VFpsRDh5eURTS2dmaWFyZXphbGFrZGRsdmZPQ09CeFhaTzBHV1hQY0ZyZGJySTUvK3krckdlNExybW43bW5Tenk3aHVTcUpHRU5kSTM2TGN0VGVLU0JhZU1QNGVsOExBVFBWMVQyeHU4Nm0vUWJDcWlzT0hnbEdZenVYUnZVeEFsQis0NmdLMXkvcHB6b2kyQTAzSFhKNEhmRERqQ2gvWmtSSmI2eDljYnY2V1RuMUluMUFGWVZtYmlwblpHRE94TW15RVV5cmdMektBUEJCUjdicFd3eFpJUnZXWm9ZMjl3T09DZWJ6VnFuVnlHa3Q4SVJpeWQ5Z0FSeU1xQU96Y3U0TUFxbXhuNjRORnZsazNRaGtjUG9ZQXAweEx6U1BDbCsvNWcyOW05MmRhb0FHMUR3b2F1SmU5anBPMzZ5SUh2d2VBQjZBZTN2Z2ZjMlg3dmdyS0VIWUx6aFJsM2lmQllONkVoVE9jMkFSSmhIeVhLak14R3ZQV1JRZFpVYTRxUE9BMThqRlkvY3luZ3J0ZnhvTXhBdlBiWUQ5RHBGZnM1aVVPT244eGRTS2UvNGZHVFB6ZldQRU5RRC9CSUJFRmdMOHUyN3V1bnBQSml1Umx6ZlJ5NSt4TExhN29zVjg3dk1YejE3UlBQWVQ2OXZVZm8wMFlJK09SeHRpVjNMeFJueXhKblM2Nm55ZytlSlhFaVVQRUhIWTc1MnF5RTkyU3J1N2VSOXFNNmdVV1FjK3E2V1dQc1ZNUDV1SW1VMkc0MkVLVHNEUDgxNzF3bnZwUHc1enRNZEM3SVpGWmZZS01kNkNScGMrdzRPNnZmMFhYS04xcTY0Unp1S0xaY05EN2MwL1VtMWVsOTRDejc3ZEFFZ1dPMzVkektrRlZzcVc5WnozazVmUGJYVDQ4WDNvMm53ME5ER0dQNnd6Zk1iRGdRZUViVFdSbnZWVmVmL0VoUFo2THdWYVF0S1EyY2pYajJKWUk2TEF2V2ZhVDZaVFlRbXdWMUdGOStGRFFYTk1LM3ZBQmorbW1Yam5wOXhZV1N5M1F5RXNnaDhIZThEZzFaN2J1anR3T1M2ZTltNFI3VTRUbm5DYlR5TGcxQWZqNzVUQVlWTUYxd2pUMzVwOS9uNlJFc1EzTUdsSi9BSi9kc05KdTc4R2ZmZUUydHhsNGNaTTltM1Z0SjdqNm4xc2xlaFpQL3lPYXoyZmZNVUFHYzdjbW1mOTVlUjh3K0ZhVkFlUy9TTjlVUHlMMi9UcEFkTjEwRjEvY0NybDBsd2hrM1NaZU41eFJFOTdqZzArWWtCeWdCSXBHOHllcTg1VUxFbm5KeVJ6QTkyNmswRnZRTXM1UVV6SDFXenNVVlNaUEF5L2hvY3R3NXNuNzFTS1ozUWNaQUxPZFl4aThRaU13S2ZnSkZOcjgzd085c0p1TmM5eVlMUEdSVURQZ1psdXQ3VGFMZklSSDNRZFcxZ0NxRFpsWmdlajFrY3doZ2I5bTYrelN0MytYK1BpM2JiRWlod3VBQnZOWVpCN0RYbnUvSVZCYzRUNUtiV1F2S1lFMFZXY0RETm1mbGpIUFNHWDNqQmd0amRHaThUcSsrc3YreG1HTTkyVVV6Z2JMOE5VZmZuRVhma0kvMzFVWCtmVENXbFV1YXlPT25aNU1sRmlMSXZyK1BJb0VPb3o0aXFkcTE1d2pIcTNOam96M2RocmVxdVBndWU2SzZpTjdkTUlDRS9UM2RTQUYyenNyUXFYVEZuRkpPTzRCMktLK1Q1cW9DSjJ2Zko4SzdLS2QzZDlJK2EzbjQ1SU8xWFE2Wk1iZHNPSzlqN2JQcmRDNEFqUzJiNjNwNmE1dUZ0OFRlTllOY3VGMS83amlYNERrSGpqbmh2OXF3M0x5bk00bWNYekNNby9WdUNkdTFZcTNEdXVEUkVhMFpEcjh5MjF4L0NtNkR5QktSRExRU1JSTkRoZi9IdGM2SURwem8yNDNFeFBvWmNzNFpwQVR1bVEzajBPRXpOVHUvMC9oanhKUWMrTlRYM2F5WUZpQnU2UUI1R1pjaDczVUdacnFtZjdpQVhlZU5TSVpINXpvNGJCbDBzaWJ2ZFh6OUMxejJYSkxRbmV6dW1YbUxBN1FGYkRKcUU2V2tobGtWUVhudW5lcTAxT0hkMEFpeXNUTTlNRnRqM0w4c2tHR1RXSnRoYkh5eFJrVU5IZ3JmQkY3NlRWQ0RIRTBUUXNHQlJ2YXRUZkVRRE12R0p6eGFCSGV0NFZRQmxTWG8xVS9pRW1TQ2J0dDVVL3dSU0VaQ3lPTWdNajRCcTI1bjljMFhFUjQ4NzlxTW16UHZBNkhEN3l1dVZBOXIrbzdtQ1Q3K1JiYmsyYlVrOCtjd0lOUGNlRDA1RmY1eituMTU0YklCZk00YkxUcHRadzdYM2ZsVi9YN0tLamh6T0ZMWHVQU2ZiTnpvQmJDWFFFWDZ6S0d1SHhuTkVHU2ZySCtpdWVnU1dPR3NaVVAxRXpaSUd4dnpBT2ZjZWk3UWxBMXRjaGttbTQ1OHdBYUlKSHFOM3BxN3pFa2dIbzhXYnJDWlFRWWlDcXJBTXpNNHVzTTFTYll6ZkRPaGNUd0xvdjZ4MGZmaXdNOVg3ekw3NEJhZ0NsOWNRZGZ4TkRsdzN4eXBhMWpmZm5pcTAvZnZ2LzhlZG5LMjJRaGpjdWVYNkRZcjhjM3dLTXpVMG1INlh1ZG9MVlBiNjUraWMxWU5tZ2RRUkUrTzk2ZXY0UmZzRkl6ZWJsQVFnRFNsZ2JsdDdMTGk2Yjh2QThoaTJVS045d3ZNaE5aOGsyQnc0U0Qyd0c1VGdZY3VYYnRueVBtdndleVpZMkdnb1IreldKNDgxcVV6eHQ2OHRwYXZneHVUR0o4K2ZsdVpuR1JZVWRoRW9KL3gxMDdmN3VhZmhCNVBlQTh1SDNROE12RHRxZldXT0ttbEpNaTZlSTJMN3B3Q1pPWCtiU21IRWhvVll4UDZJbVRzM1RnZC9SVC9CZlFNdk9ucDRtNTdlcjlMUWw1eUEwNGZPb2V5V1RyUU0zZTYwRnI2eGdQYkhQRFFWaGNBT0RncDFuTWk2aHBlZnI2WEVENERoM0dUN2RHM1VKQWQ3U2VBYUFySmhEWEdmbS9qZmVodUxPNW01bjZUMWloYXI4ZXV0YnVBYjBsckZpeDVVbjdMcHdCNnZrZFp1bi85Nnp0VVhZVDZJcG1sNUFJaEEyK1pJT1F5cmNIVEJkTXkxcXlLZFIvc01BTEJyaDJyY1FSak9QajZPVVV3Tmh2ait4VDFqamx0Vmh1UnpiM1BnQXZZaHdWdGlpZXZwV1lHbjRnbjgyL2JpLzRTaDEzaGc1dmNCZXl3d0UvV1prQUU3UDlBcU8ycWh1YlRpYjZYOXAwbDBaL2xibGpJV05MaTYxQVNzbXZqZk9iKzVqWkVXNDNnZXBLa2F6Rkg2a2o4QTJ4QkFhTENxZXV2bm1vOWczbGcwcmVKOHF6eGpVei9nbkJJN0U0b1BVUFZaY29rbjdQTU9PME8zS3J2UlJvVjRodnU0aTQ1SHNmT0p4czM4OGFGT1BKMGVhWFRuK2JiTlNZVlN5cE9ETnZzaSthV2xmcm96b0V2TG9uSjV0TkJOc2szYzlUZnB3R1dUMHZ3U0hNb3VidDJ0ZHJZTk16MkZ3OFpad2hoSmFWRWd1Y3U5SHQwbitKOGxZTm82ZTNqdUpxM1B0YTVSZnV5NmpMckFtUlgxVW81MEM2SWNzbnNXQnk5VVVidVNkOTV6bG1uckJQZUdsRHVCTVh0NFhGeGlCZi9vN1BFM1dmVmowTWozNzBBUi9KSWNwd3ZlZDRrdXFWVUh6WHY3S1ZwMmhKdXRycDJTWUp0WnkxaFQ5QU93OUFNTCtqOGRZOXlidGEvOWsxdmZHd0JaN3VwWkwxTE1Eclh5dUVNakZrMXlSR3piNEVrLzVRZTRGdGlBR2ZzR1dWU0NNUXI0QldJN3dJbyt4dnZsVXVXd1p0MTBFY3orYU9WRFlUaGUyYktPQmlKczNOdkhQZVdaVnlOL1NjQi9jWkhpZTVxd3I1WE9wUkg3ZkRlR24zOXQ0TkJnYy8xeHN6U01zWHJrV0IybXZYb2ZRUDFwdFhMNlJyNFBtaGtHeHR2ZHJHdk5sdDJKSmVrdnd3YTV2SFVmeGZEeG05R1YwbC9LOEJBMWJuZ2tyOXN5WEVWdkJnQTFEQXJsTTBFd09xN2g0cnIzdHZNd1RQRnhzMEdncXNEd1FYUEVxYk9tWi9NWlVqNjkxa0VIbVVQeVN3VHoxSkhSQVhQWm5Ga01teEwyZmlUOFdUNGNFdVY1MytwZnhMSTE1TjYrWXptbmJWN2p2UnMvVGxuT21EckdNNjJRcEwwa29TL0pHRGxkVThOOGdNMnVwT2J6Wkc4U2JrTGY3Z3ZNZXNuV1NBNlJ0Zjd2aWczaHpXTWNNekJBT0x1VGZTN1Q2Rlo3ekVUOHVmajFrRnI1TGFjMXNYSHBnWENYekxZaFp6aTFuVlBVQWVLd0FFODBGdVMwZ1hvT1p2YnZLNGNUdldBT3dHVzBtVWhPUUIwdkxMSGExSUtaczY2NWFOZWR1WlFHUWtvT3Ird3VmK0FYVkN0Ny9mRSsvbDlsK2ltZzg2SytxZk50cTRYQW5Gak82V2pZRFIyMi83cjJ5cno5Ri9QMmYzYUJYNStCVWdBYmlrNW16aE8xMTlLMEpsR2xhcFJIN0F0YmJXRWlXR3lSTGFpNFFSVHovZTFObTQzVWxZU3U3SEpjQjA2L1M2V3BPd0NYSTBXK0V6cThSQzZ3b0Z6OTREWUNkMnNMV3VUYlFUZlBUS1B1NEM4dGhqYm43cllOZVA5aTI1VFZjQXcyLzZmbnVCc1pzWVNZS0RSUGNHakJZWjRicVBSWUNUcWt6OVNZMmJBMG1mczdONHl4VWNUSENGRjVKbXhxSUNrN2FKYVZ3VHE3MUlDNUpTYi9uT2VoSENSdFlWOXVQRk16akJQZ2FnSUJ0N2Rkenpqcnk2TGpiSS9MdU9jY1I1QW1rV2pDUk1zTUhKd3lEY0xHR2cyaEdyOVorVEk0bzhNUStXOSt6N2VSOGJFWkdQTGxzLzNaeGVuU3A3cGtCUVJaWisvcXIwa3JQL2pDODVGRi9RbEgzMHA1ZmlWem15K3doNG9JM3I4cEovT25WZHYvRm4rTHZrYUc1aUl6b0EwVFVHZ0oxZGdPQzZZaStwa0xmczQ1bFZOcC9wclBPZHBMemVxb0gyMzFpUXNHenNEYkE3QStENy9tY01iTzFrQ09zSndQczZxT2QzSk5LUzh0QWVDSXg0blA3d25KTUxhUDNxa3diYlpzMnRUalNseG12c016c212UGFmNTZFeVdCcWY3MXdSQk1KWmRWeDlIVENUZlRtWnl4L2ZvZVMyWi9OZUkvSEJ6eVZSTnZEVlZ0dUU1SVNuWituc1hjNDZyaCs3bDl2NHFzMjhheFNCb2NvR2paZE92TGVqSkNmQUw1SjBKcnczdmhzR3VpNzVyay83Q1BYbjBDZ1lhT0tQY2F4aVJLL2c3T2N5MGEwVDNYUHZRd3ZaKzhuZkpJUmxPSHU0dEwxdFNUdGRabXEzeExrbllFbzc5NGllZEVTeWhHUFJCZGVpSDU1MTE4VVArekpWaEhYdHNMRkh1OFZGNnROL3NpdThaam1JZ0lnZWlZdzQzL1RaYjBHSEdMb2gyUVBibm5uOEpXb1lXaFRrd21jQk1kV09ialk4Vytvd3llTXVPWjBPVjNUVFJBME1PWGNEd2tJVko5Wm5tZmxsMFMyeDgvR0tja1Y2cm4vSU5vblA5L2ZPNWpQc0NQeTlSdXBQTDFqY3gzOERwWjlsa1pvZWJWT1h6TmFGSkVYUSt1Z0JVaVNJRmtXNTJkNTQ4aklHRjlPU2RqNU0rSFozdWRldGdBbW9ud1hzTUFXUjhHZSszVHptY0F6OUdmV3l4ck9sbjhXcTFCeWNlTXE4L2dtRDBTdjRGWjdOL2ZjWjJGNXdNczhuZnR1VjR1NU5KY0hkN2xFUmYxbXFIYVRBNnowdytrSjNLczFWZlBmbWpoSUZEdzdYWDhJVlp1LzdOQm5ab0oyYzNnbWc2NlBIUHUvaEVZLzl2aTVwa2N2WVNLeGwycU1NQWYyUDR2dlpZLzROTDB1Sjc1R3JzL296QjBZL1E0SVVHNEx1UUFTaXpITXZrK3VjQVJ2V2Fnb1FCT0pCSnVIRUdDZEE5R3BBSmFHVmYwSU9TUFl3ZTFOT3I3K2VXdW10UE4zRFI0OGNia0YxcjRKeWhyS3IrUG5zekRobTJzVGI2TVJxbHpuaGduNzFybytkUThrZTBOczJ2M3N6ZmtKQlAzN1NRY3JJaXJQWkhQbXcyTXA3a0ZvYVBUK0QydllMRDBXQjBZb0tkNmZsSTV0OVNNWW05VVlPQjhrOG1MSERuM0ZoSEtoc21EYXpvdi8xenc1U2lvQUFBSStsSlJFRlVmNjM1bE9vekRJejErVEtXWWhxbVpYM0hTeWVhTzg1UUFzNjVqNzVIaHBsOHJ5aWFQVE5Ld2lUMUwvSFRlejJrd01JZWRhMG9UK3pPcmpWYmZvNXdPQmJJQVY3bmZJTGxkTFBuQlBEVkt3cWxZc2FvNzNsWk0xMGR6V1pCSzQzeTl0MDFyMnZUN00vdHNzb3d3UWZpaUw5K2o2VytSVGh4VzlKME1WMzAzVlBra0lNVHpHYkVyLzNXTHRjUTZWRkVweHp4WHRESjIxQjk3L25jYm1yN095TDNMNU04RmJqUDRXK1pTa2dJS1Uvbk1SNUlzK1k2bWtqdzV3UzhYU3dlRlEzVFpUYVhlRXYxQXJNUHBKSllVczNtUXpPNnE5SjEvckFSMk5JdHN4dTg3NFU5UWFDazQ2NFJuZDN0Uzk1OFFlMW1kWDZ5UUVud2ZZT1REQnVaK0t3OCtJZWhNRUNUNGFhUXBhUkNUbjNVN1h0WTEyWGt5dmg3bzZCQWZvekJvOXVJK29RUnh4M1BRR1B2R3JvcG04N3RudXBIYnphUmlYWG1ybkpPYVRBQ3kxNFg4WTNmR296WUxONnNtWnJzZWZoZ3ZCbWVETE1aRW5MVWNzVGhQTWZDczBjMkcwWFo4Y0d5aGc0U0p0Tk1lOHVwMi90ang5a3poK3p2cHB3OC9Pd1RKTGptZDZJN3BqOE1VRDZPRmIrTEtNZWU2ZzBHM3ZseFZFQ09zajdkRDBnenh0U1RCNENZTGNyYUJFODZSNy9sWmhIRHlMUG1wbjFVa29NemZDRk5ObktjZjV0S0Z1QW90L1ZNeEJ5Y2ZQN2g5QmZidHJ0aGlQVUpiZzdIUzg5MHdjaXN6bzY2MlVMNmdqakcrQjk2Sm5EbUxLanZFa0RpcWMrTkRiWHM3R0xlanJNK1BPU2RQOGZaRy9SR1R0N1JzSnQxdll4ZnBxQTk0ZHBqSVVudDdTZXJ3dTNqeVlGM1liNStGbW9EaTRkNTJPOUMvakRqcHpUWnpuUG9oTjYxNEp5R3g4TS9UcnhaOUJvOWJMS2RFOTFqd0VvZlhYc25zMkUwMUR6QnRjK1BaZGRMNDYrZWNZVkZNSWNMWU9ObHNFRGR1RUMrS3RhelFCNTkvUVRhbnNOVHVhV1hiOEpTSHd3WFpLUDh3bloxcXU1RkJ2cDg5MHhyZ3pxOXBCdURLWXBvN1Jpbk9MbzV2Q2EwYU5aKytIY1JmM25yUTBONVB4OTVJRnpQOWIwM255K05VYWJaQXQ4VUQ2ajFINWJoZVRZWGs0dExBR3hNY01MZGFZR29NcDRMNm9mL1dCQk5QcHZmQUl5WGxDcDBtY0V2cmptNE1jRnVxT05tdE1iK3M5dlRaeXZNa3l1ZDVzY2E3d3F5cEJWc1FwUm5OdEhkREJGSnZhZjRROVNlZVJsaThFSDVHU09qYnUwMzA5Nkw0eDk1NXh3KzR0eDc5RTQzdVUvMmZPVGVsSDF5NVZVM2t6YTdKTWljM2FseVR3RVMvUEF6NE1QTGptMG0yUE9Fdm5GbUtERFA4Qnlpa0wvYWRhNFBNVHNROHNGS0JtOER3eDNYdzJXVE45cDZ5VDRmL2U5RWw5RFgxM3ZGSkxqYW8veVQxRk8zNlUxNW1tVDdSUlFBNE1VNlpzQ3J5OW9waGdvdGlhTHp1VWh4dzdEU1hCbjM2RFp0dFIvdkNHYU5vMmtIYzlRNzBiZ2hzaXdGdTUrcC9tSkk5VWNPRHJMSm5Vd2RCY1ZzTFoyWDBVQzlOMzVIZjdnaW5LN1pFZi9adkJRYTVvbDZNTytwY1Iyd3dmRWVkOTNRbG15ZUhMd3o2TkVSclptT1BxVGgwSDlqdDZFNjIyRkljMFQzTXc5UXBselVhelZHR0RjeitOYjErdnRKeGRHK08wL2swZDZqancyOTZPdS9NVnl0NUJxcjNReUxVYWx2bUIvd001aU9ocGZKTS9Sb2daOHJueVhsQkp5TTNadnMvc1FmS0VQWDhtZDlYOEF1Y0JMdkxyeVhRSlEwdk1KT3V0OXpIajRwQk5VL3pORy9pYnhrYUlqZHJPT3ZPOUpOWnZKY2p1OG0vSUl6L3lWclNmUFlaOUswZVBUMGMzOENUKzBSVUUyNTVlZTgvVzRKR2JKcDlVNXBRdGZoTEhEdXR1T0JaQW9CaE1ZSW8rOE1pSXpkakp5NWFCNnkya2YyZDlaSDcwSTdYTGJrZC85RDlQOVdxQjBOQjVHWExCVTZIc2RlcGs3ZHZWSDJIRTRuVWdhL2VJL3NzSjQyUzg0N0s1ZThwNnlFdlZ1SUNja2ZiSG9mdmRCdjF6ZzdVbklyeHMyY0M2b05VUnh1ZkVSNzB6MExqNUEvMzh4Z2tQWmxoMThkM293WjRIUGFVWnd4bXpuUExrb0FMZ2lURUVBQnZnd2NkY0RPOUNtNExuMDUzS3g0MS9obFl5VERpTjlSbTk1Y0hUWjZKTlVoZWZHODIxbzNpdE1USDQ0M01WNTZ5WlNRL0pCVTlaWHRlcDZhQUlTcHBQZ0VKdnJOWXVmNDNzUmJiUFpHSkE5WHB2ZGs4T3RRTi9icXY5bVdhclNBbUZQV3dpdWcxeWNnSFVDUXdRZ0s1dkROeFFJVUErbzVlbzU1ZzBpbC91TWp6cFFlT0NBZldmY2RXd1k5anhOR0gyOUx6RExxMFMrckp1eWtibmE5NjczbGdMdWxWOVVGa1lGYTV4Qzl5WlJJQ3hwczBlVTBmdnFUZ0kvemhoTHZqQjdXT1J0WDJIM2Mrd2JpdFpzOXp5UzVNZmg1VjRBVlBqNzJWVTJDUFZhSkQ2L0QvN3JxTTNXUFArNlBRYzdvQnNiZjJ6dTFSSC9nMG5BZ0tYSFI3SWxtUXZSUnNQL3VQRzZ1SStjY1FDU0ZieFk4SlBXOXRRZHB6ZXRpbk0vbHIzL09vTEsycnVPcm5rNHl0K1hsM0dJbWJCOHBFWnBSV1BXcGt5WFRKNmplaldlZkpYazNuK2hIUTFqSElLUkw3bVluZlpGMDNDWm5CTWxaNE91M1hQTUhlL2ZWMXM1N3BmTndvT2s3di9QNzB1aDR3Kys3QmpTTStUS1FvcVFtOEl4aUJLY093WXc1UnplY0drSVpaL21RcFE2OFR0c0l6RHNjeDVFQzVzc0RGMGdTWnV6MG56UFM4Z0hOQlZOYjMzUnE2T3Y5YzAraVI0UldtREt1eVZEejg5a1ZpbFlkZ25qWFBFeXkwdnZWNzczV2RGMy96WXdRMURlblF6TUdXSWJzM2pkKytuRGk0NE5oM3V6V2UxaDl1OTV1N1BVdEtTOG1ZWitUUHBBU2hHM0xRUVpPZVFCa2tyL1VvQU1VZmpoZm5EbjNkNms0dTJ3elJpQlpjL2c1NCtCUCt1UklBbnJjVjJ3TnA5ZXhOK2NxVXdUbUh3T1BObW1ONC9kQ2hua3N6czBWWGZjOER1WmEvUkM5YVRRR0dkb3JwamRReHMvNUNHWHpuYmVzRWQ2eHYwcTZYWnVsbkk4UVdjcnVHNHVTMU96UW5zYXBQbDl1MVlrVzdnRkNFZjk4MFhXdTZXRm14Z2g5aloxVWdXL3NsZ1JMVlNhOWc0RlFKaWpyQUZqZHZVUk1sMG5IYXdacWs3MVpNL0JhOTFLVHhmZkNqdjhQRDk0MzA5N2xoN1RKRE4rK1poUCswMEFtSjk2amlzMzY2VHVuN1FrdzN1R241NjZaQzFhY3d3RHI4RHJEZk1tNHBlclIreTViRVFCYzc5a1Q2dUZhd3VUd2JUVHg5RHBrdllmdFBueXozRC8wYUtxenZUNFpIZUV5OWNtWXZ3Z1lzVWNCajVNSVhwUUgrZ1FGQzhmQU1jQW5ZeUFLOUFDa2FCbFEzSGVEdDh5SmJsTzZNZU9jdUFlSUhIWHkwRFpRbHQ4WHdzbEdTN1pBbjJOa0lSeHlpMU12RVhhMlNmbHNKT2g3QStQYkpPZkl1K3V2M2l4ZDF6TDM5UHhqcWlkeGV2eXhZQm9pL2JkL1BYRjM3YlVsUTMwWHpOUFIxQUFJeXZIUHZ2eW93OGNLdHVLVzcvdW1QbDNvdGxqbHU0ZHRWL3pFR3JNV3J6OUt0WFBRellSVHpPR1BvSnhQNGF0K0grMDJ6Tm5MN2wxWUlzNDJjcGJaMXd6MzNialo3ZWkzMHhxNGU1c0JSMy9YTWpyZnRkWkYzNUl3Skl6SE16a1JNU0w5QXJrcXZRQW9lRHhCRmxDL2xkV0xuTm1Zak1ucGZNR3ViZldvTFZrbUxCSERPbUV3bTJWcGdXRkdJbDl0WjBucG1yY3YvdUdKTHMySGhqN3lnM2JmSFdnRWN6K0JPaEFqWmNWcnlaUXNES1I5Rk9QWnZVQUszalhkZU5ESGEzekdqVXR3M2kwMXg3eTZMc3YzcUg3NnliY00yZmtsSjdxdHRWZ3FlLzR6Ykphb1h2VnJmdTR4YUUrT1BrYWg0VmdkK3RmZDIyWlRHZnFqcjVqS2JnNjZMZkRSekk2cTIzckh6NDczTzF5VFlUWWxlNDZiM0tkT0ViNmFncllsYVF3WDFQWEJNMGhKMkFyQmptWk15NzZnTnhuaVhwRUZsM1ZNMHNzWVp6cjdxWDVLdEdTbThYY1plSEVodmtCWXJvVG5NbUJ1U3BmQTZEMzZBeUtieWQrMUxCMHZMZVJhSysrQ2pJNE9uUlBpUkFmbm4zR0d0bHhPRXRxNytSMWRFdkhQcFhnNjRKd1g0RXZHTzg3aXJUNmRMVFVjeC9ZOUtNVlgwL1hnWjdQMWgrV1ZwaExKUWY4dStIb1RRZ2Y5dStiRmM2OXBqVGFpZEpodDNZY2MySnBUU0tuWGEvQmxWcTNIK0MwdkczOTJYZFVuRGxoTW5jamdvN2NmUUZUM2lMeXp6RUJPSmtON3ZjRkY1M2g1T0VTSllyOUhEKzhoN0gwWmRuS3ViNmszUGNNUUpYcjNSMXZlR0J6UGJHelpJcFZqUVBjMmZKMjE5VE5pOTJpMXQveUY5NzN1alNXMnlRdmJyZzNKTzMrZFBVUk1sOFRleklCU3NweFI5QmkvUkVxZHVvNnRNb0JpZ3FPWENKdEdtL0sxOTR5bTg3dUdjNHVMTEdwcWJoM1djZG51enloTnRqUktOam1ibHY1R2xWbVNzUU1ieHozMmVQUW1qd3hsck5qSmhNZVg4bXBmQmplK2dPTFh4M2toWHliazZNYjBUMGY2NStEYUs0MUJUZkxRTTJTMGRlRnpTdCtRUExqcm1lT1c0ZSs0MjRCMDdvT3BzaDZmZ20vSEkydllxdTloWnJyOHlzSGZ0SFRxWWJWMEdmT2dMU2djMlVlUXowZW4wYXk4SDBseUJxTy85dStzTWU3N3ZXWUFveWU0enM2WE1SU2xKS1A4Nm9JTXBOYURRU0FkaE15UjFSSXoza1NGNzNIcVJUMnFjemhMWmd4ZDAzUExwcVJZTUJhRitHdlRkWm1aM25UZnZjR3pSVThpaXVuM25uSmZNV1VUMGErRHBrWXJMOEo3QWVZamZmZEhEaTRSa2xlZmJKL01FNUlzZHQvSDBSZE1kQ1huWnp5N3NIU1lCSmVLUkVTd0xQdzQ5eHgyVGo2RzNtY0N6YmFrOTNqak90SGRqQUQ4bm5qZWRENm5zNUpCbTU2bTVMSlpwdmJLQVpjUWxrOWIxWFBWVEh1eWZzNWw4U0VZWHZyb1hTQTVXRUxWaDNhN3h1cmI0ZUNpQTN0bGdadmpPUUQ5RGR4cThEaVY3R2p4SEVWQjFiRmVBeGZzY2M3MlhDbVRZSGRHc3VkWit2eGNZSXdUYzhrWkRUbVAva3gxRFRFMUwzc0plWjI0aXhMaUVHR3l2bVU2TlZPYVIrL2lsaFJmT0ZqL0pGRUM1am5hek5ndWFGNzczUjYrUUs0K1UrYWNYZnpRbVRYanBOUDQ0NVJxWjlMUjNFd1EwOXBrb1ozUk9LcHIxajk1MGR4Z2VBMTB4SVZnNDJ5L1pMS3NiZGg3NC9WSHZrem1xTEljcGt1QVc4NU9UOHRXL2J1MnhNTVdkQXZ1Situb2M5RW4xa3czMHl6Ymw4VE9acGtOUm5LZUNLVjBmN0lvSmt2S20yR25GRlNLMEpMcTJuSWZNZ0V6Qjgwd2c2TjRsTDJ0enVsUnpPZ0RYQVdnY2F4emdMUkhBNWRLTktaNnAvRmRwdi9Cc3NBeEtCem5zR2FuYlhOeTd1Wk5pSFBzWkp6UmpGY2dtbVVmRzlaTlVmWjExSVFIMVMyejhPcUo2MFIwT3VlamgxRnhYdUNlanVONWxxbkcrR0kzdmFOZUVLaWNzdlB3QUQzYnRnWUU0eUpKTWdFbnNuUjU0SWdvUXp2aTNkbzY0ZDRFeTdVaW1reUM2ZVZuNHA1NUdTOURGSmxraWFNSG9ndnVZOXlITjcyUEgwYTF4bFRYZnc2aER3NHk5b2prNlovY3pmUjBHK3RnbjJ5VWdNdmtRTDdKeHRLN3J5RVJMQ0FvTjRQMFhmc1M0ZkNqYzh0d1g2QTcyeG0rd0Q4ellqZVcrV3dmVUNWbit0aSt4MDVtREhTQzA5dVdKMUY3cDlpRTNWSUd6TDZOQjhxOEcvMkxNVjZLcmZzRHlvREdCbEE5WlFOZVhUbitNMHlibWNxbSs3Z0NGVEFTRnNUUUhkV2QzNzR0STFTalRLRkFxTS9KTmlUKzlWTDlzTnlzc2ZTWVpaemtmUFRrM0xnRWVPMDduc1BtUFR3Q3NxQlEyQUZmN1QzU3FVN3ZjSmlaa212WTZIS2RKU0xIWTFPYTRtanU0djlncnZ0d0pZc2dBdCsxZU02ZFV0eFdXMDh3UGN1WDdRZDZMc3V3VGIxb3ZBUVdramtVdjlsVTE4QnVOaGxGQjFvRXlicUM1MCtXR3h0N091bWJ6QUwrV1JMcTJyVHViUGkyMG1jdTNmdXFaZ08zUkFvV0hHYUY2NXo2eVNUN2dzRmZweDhlTXVYRWtyUzJYMDhiUGhqajdSUUJmOTFIQ2VTWUhTdGs4a3NOY3I3dXJ6ZlVxbjRmT3hRWW4xd3VLUjQ3Vjc4a01Wc1hFQnd6bnBTT1JhOUJnaGd2VVlHaVNYYk5rUEVjam1jaWd6RUh6SmdqSDdCVDNYQXlna3pzQW4welE0ZzYwcnZuVS9rV2paSXFMTk81RzFMVDJteWNITTQ1SlpzWjVDWmo5elRUOEdDdS9pNUxrenZSK0NiNHN2aE5tUG9XRERZT0FOMlBudVRjTEl0MUs4bk5zbnIzZWhrdU5XN1o1enV6bXYyRE9rZm0wMWYzUi9hMFJiVXhoaHpSb2wzM25rSSsyemVrbkxWQTBKcXd6YWJxc2lTVmpWUDZaRFRhSUpKNUtDNzc4SENxKzVNcUpIM0tPWlNPSnhrNmN6YmNRMGxXQlowZzdqc0FuZFhyaWM2Qk5Ma0NCb05va2tmVEhENGpSL3Z5STNubDRrSHF0QWVrQ2FUV0FjYXVjMG1qYUFGKytvOUo5OUViT3hrQ3VCU0kzNWVzK2VWNUpkVFlTYit6ZDdMQ2UwdVJSdFZOcDh0YzVBbGx6R2tZaS9xTURjQWd4QVJFaXdLUGpXYjhvN3ZNbU96b1QySjk2UHZvdHhYV1VEcWVLUjlvMzNnZjZReUU0TWIwdlU4TE1NM3BqUXJTY0I2Nk5vQmRPTGRoeU1SNFhuTVhOUHJDNWRrVEpXU2VGWTlONlZmMG85dTUrbVk4WWR2aWpXSjh5S1lCTGRZRm1IMlh0SmNZdFY4NkNjbGtIUkxVUnh2VHlmZjVzZnVXclV2Ym5kQzMxN2cxbG9HNHhlMUZ0OGNFbVhsS2t1c1Jlb0F3QUxCWmlVZW0xTHUrc3ZhK3hKRGhPZjhDQ2xPT09SL01hRG8yR3dNNzV5K0ZUeFpVRE9GOHhYa3Z6b0NHWVc0Y0FqRDV3NE9IYzQ2TE9MdWQyMFdkdk9uRC94UzhhejFMNDkza1dqVzZpeWNuZlR0Z1NQYWJ2UGRaZW4xZ2RMeCtXaU9KVzE3ajJjd3dDYXEvV2ljUC9vNHVGNVlBbisrbXFBN25MUmNVNnFNQTg0Um9FOU94bVdFMzA4L1NRekJ1TjNGYjRsUElYWk01OXgwd01wWHZQWDY1aDNia2szbEpJSmlXRmVWOWhET240cU52R0p0bHNCQ0d0L0l1YVdzL3pqSnlSKy8xYmFiSW1vSk96L0d5K2FrbkRsN1hVWHo3WXdKak5hdHRhVzlHR2xQNDBZeUFTLzJjZTdQNmRxZDBSbU1NdzE5WTUrZkdUcDh0c0M4NTFDR2FuWTYyQ3FGSzdpK2I3dHFnYjBzVGdidHZjRkY3Z2pCNndUbytvTzhDNk5FRVFjbG9Qbk5ZV3ZxeFRNcmN0bi9xbklPdU1vZlZOM2N3d216WkV0Tmc4aWVCbkt6M0FucVFxak53U3dEblJnc05USm8vL051Sy9RMWVNdG4wTElXbjFIdUZMSTVQUG41VEN2T1dtZXZmaGdlcEZTQnNFZTYxNjBwODc0eVozc2VxZlhGUWdCTzdyWHVWdTlnVHhQOTNUNWJLbHJTRXZ0bTNhQWVBQTRENU93aWMrVHJqZHpTWTEwNmdNOXB6QVJVVjNtamtjYUhHaWlYamQ4dmNraFBuQ1gzSTZTakkxMXFXRHNOazVaY2MrVDZnRzJ1WVlDZUNRMlFhWUg0emQ5WS9PckYvM3orV3RCTGNyUHZ6VVBRY0JmQ1c3bWhmZTdEZnIwQUxqbVhMWXg5MVdNNC9hRTZ0NU9Sb2daT0draEsyRGdCV1QzSm5zcFk0alE3N0ZJTHNPdEwrbkhPa1FYUWpub0NYZUFvYWZRS0V4bHI5cnRPRjg2RWs0OG83Qlc5N3FtOXFPMTBndjNsU1hOOENtTHpzR0ZDL2lrYituRDRIRzh0QUdIcDVBbkE0TVIybThhTFJzY2JEbnlCUWRXMDJ1alpVbDQxN05GVGpYUlpUK0RqdjZDMU5iSUJsUVM2N0JVYjJ6Mm1DTzlsRDFVeUpkaFBKTm1YVGFiUEhESUpoeEwyTmJnRTFzK0lkdGdJMnVRakR0NS9udWpEQWRWTGpkWUNPK1daQWd3TTZOVlVGNDNHR3JoMDNScHZYT1pDaDE5Si9yanBaVzMrUHNRNGk4RVNmR0RxVjZaWVFSbk9PNVcrWld1Mks4eGdvV3FiK2JCWmFsb2k0bTBGY0ozMTM4b0lmTFhXVEFwOTZETTZXSmhuL0g4dkpFdkEwR2N1engvZmdrekNUTVFndHNYMDBISHR5Q056UG1JZS9QaWpNNkZjdm5RSnYxaTJ1cHZIV1FMb2FlQy9Ta0huZHR2UWNXakEvdEJ1M0c0a1B2K015K21qSllneGNqa04zaWhmTWhKR043RVpOKzJUVmZ6S2Y0TlVna1lqZisyV1lkTlczYjdkTXg4bWNqcHhsTnQvbk4vRlgzNU5WL1BFczQ2dVQvN25EbnM2Y3RMVzhoc0dFRWMwMzY5RDk2SkxwVzBVb2ZQcHl5NlZtOXQ1VGdjYjZjZHhTeGc4NmRPVmp1TlRyTzB4SC92VjlIck8xR0lpb1JCTDFmcit1UG5JSUVVRUZ4Z1d1M2duZk5EWHVRdm53UG56b0R3QVFCMlNCaTg2WkxNQms3NzRKV1dadjJvL3JscG5QY2hsTld1YncrN01ldHlTNHBtMzlmN0VTU0NyZ0ZYcHZocVpQd0dSaVErOEYrRnpwc2N2aHYvTmhPanVKdW1UUi9wUlhibU9mNVNnWjc4ZTlMNm16cmZhTDV3M001TUJjWmZna3RjNXo2ck5WMnpvZFNVSk02U08yZHFzeDdtb1RtbkVNSE9pbEVxWUwzTnYvS20va2xDYnpzN2JxSTNOblM0U25zTGFXWUYydmt3eGJrUzF5WWxPN2VtTnowQnpNMlUvN3dYcDJYVEJHdDdRbXFaR0kwZDlGK25VV1BYL0cwTUJ2VVo3c1kvVStkR3NPbTZTTkxvZSsvSk5VbjM0azgwUDYxRi83OVFuazVHeU55OVo3Sk1BWkRBcGtrZHl6bXJOMkN0Qk1JR2xQLzYyeE1oemc0LzNXTDhpYmZxK2lUY3VjY01zU0dhK2pPZU15L1hYTTdnbUd6QlRPUVIyK3lMM2RTSHA5K3JZdFo4RHZJbmlHSm1tMFdEbnQzZjAwdXRsK0FjN1FqVDF6WVVsM3pva3NlZU91cXZLOHcxQWgvN1YvV092Ykh4Z0l4NDNkakpNbzhrWFpOekhKclQ2L2RiWTg0dGlEV3Zib3MxejNVbVpuMVI1Z2JwTFU5VWhUMjdWQXhFOHBJQnNXTU55emdFYUNUemlTRzdxMk1YeTdLelpXSml3SVpmUGtFWWltb1Yyb3lhN3J0clhQdC9vV3RKdTVaSStXYm5TTmpiYjZjRGhINFZuV3UxR1FmV2JYNjhoTHFrc0tnWk04Nyt3am0zVm9IQndrYVpYZmx0WVplSGkzZE5lV0dLNDdMQjcvayswQnVEYWI4Q2NIbHVHdFkzNTUvREM1WkR2U096eXIwejRCdCtSc3pSdWFnUEZBWXdOYjN4bDJobHJGL2Myb1MvNmpXWVpIWjhaWTM4ZkhVWW01UTdacjMvK20zVVFQdFR2dmJZazc3NmFyOFQyMnB0K3FBdk9ESFNZWGJ0YldGVHpDL1FqOHVzZTdQNXJNcmdmL21mUTRNL2x2Ly9HOTkxL056bWY1a1p4bmY1ejVhQnVCOUtRaG15K1pkMDE4Wk1HZysvVVJNQUwyclVmeHUyYU56Z1hkaTVSMDFqZjZhUGRidUxXTkRCeXFldzV6YlZrOUw3SmFrUVVZWDZZOHBDcGI1SU9zZXo5N1lLenBPK0djMS9WaHhDbVJMYVl2bWp2TUJMb29JWkNhV3c2V2taTitRK1M5Zk9lU3B6OW9ET09nUFdHWUhQakltK0RKeEx1LzcxTGYxbkRCckhEWUxZZnVoOHprOTljbkJDNkMyZlBhV2JQbG5SM25tdE16SC9DRC91ZVFSUFMvbUEvTExlSDBrVXZmYlJ6cTRFVEFNRnc1Z0x2Z1RSbzFoTjdVMVJydGRaNFBlMysvU2JIZFZySUdTa0JYeGtYM0hFWURIeTNncTNPdGpoc242elZvemhtTkRKVmRrUjNwNFhvUkdDaWZKeWZoQXJGbHBhVFkwdFdJZkZwOTJNMWl6dGZBZkxNNHhlTjc3VzNnd2ZvRXR5OWgzd3g2Wkwwb0VrSEs1N2ZDQktFZS9pVmdXanB6d3JzcnZOL2RNTWFua3djMGpYaEVVZlVJdkRmWnlnS1pmRnZDcmMvUmJhSkF1dXdpSUNDN0licTZNSmdjeXdEQ0UyemtYWEpXMTVNc1UvKzllTjhYc0VtTHYvNWJGczZ4eS9UNnFlVFV1MWFRcEREWFFjY3RPWkpzU1ZHL1BJN2x3aVVwNjNuSFByeEVDVVo2T2NoaUpTbGc1aE16YUhvVHhFK0U1UWxXek00dFBZSGJVa3BaUko0R3pLK3RCbmh2ZVNQSHpqVytuSVRmVXdwRk9zVTNqYXBqb2daSXM4bm5FNWlSM0VNNVNORDE1Z0I5d2RJV1F0MjlBS3BvTTQ3eGhOemQ4d1YzOVBXOTl5L0hnZXhtMVdadC9PZWd2c2pteTlFZWhJWkhvQmRpRGtUakRVWkFyMmVudWZiQXI3ZkJKUlBUOTBXM2dqWlp5N0MrSHR0dkpQKzUrQXJPWTBjbmRoaWJFM08wc3I5ZFRIbHFuZGk5MlFOTHIrMms4QXdnZkd5RGtTOUllTW96dmhqZjhuRFhoU05GZEZQdEFuSlJEc21Fek8wSjRMQkdSdXRkQnR3eU5WOFEwdWlCdlVZdGhxekxHMUJwVEM3bndIa3I1S0VnaTY1YnVqaU9sc3BqQ1YvWkpLSytMMERQL2JkRTFEbmpDOTVtMzFHUkpzdUc0WUoxZFZKSW4wUFQ0MHp1dlkyODhWSG9yVXhCUFR6dzNKanE0b1BabEx3bmFKUHo5QnZTUG0xM25iRjhuVWx0Y2dDa0J2aHRHU2VNUXFBNDc4QWRHTjNITVFIejN0R1NBb2pzMlArV2FwbVRkTEh2T0tvRGNvYm5sMEU3SStlbzlQbFNnU0I1U3VCTEJYRW5SMVk1cWpkTGZHL1lCc0h3aSt2d2FDTnIyUWdIK2UreTUzT055WjA5NFhBdGl2aXpnWWtXdlJuNCsvbS90R2QveU1CNEMyekRLRm5DVTNCL2Q1TXpWOUVlcVAzWlA4SXJXNXFxemhlMTMydVd1L203UnZNOTYrK0R2dTkySTZiVmJycGlNR2cxbS9teUM3RUkwaGl3NVVOMWRHbCtQSUNQZ2RaRzF3TkwwaHRJMWJoMlhOK1lPSG5PS2I5bUlPVysxai9PVkRFeW5jbjU2bStqVU42UEI0TXpOWGxtNlB0NGg2d1pCdi9qREE3em9tcExEWDFaTU5rSmVXVXVFUEI1a1lNL09hdGZIb1FqMjVjSWJCY015Y3FFdmMyNS95bVkvT1VhY3JzOE1vZ3FNUVNheXdxZ0JMdGRIdjdiU0d3amdDNktlZ1BqbTRpY2NWZytsWnBYK09OWm9tNWRGQXpHWWJ2M0F3ZlU5UzA3b1M3b2ludUZQWGx0SEtoZEpNK3EramswTEZDUDlwV3EvVHFTWEx6ZWpYZFdmM2dFWXNHOWtjazhaMGRPRDFLYzBlL2FzRWFPNVlJYjJIbjRMLytpNHh0ZWdHL012V21kOHk4SjNJV1RINkptM2dJMm5ycXdvai8xTys4YW82T3k1ZGdEVXpFWS9yWjlDQWdtY3dVejVVOTdtWWlZRXYwRytqSDlDQUZ1anRqTWlDREhIaWh6clNtc3ZiTkhCNncvcDlyQ2JoL1BrUEc4c3Avc0JDbGFaZkNvMVJFT1FaRnRDRWJUVzYzQmcwaHN5VDdkL2s2V3p6Tk9tRVJnMDBxL083aGZuYjdXWkc2cGpCVG1KUW5BNlp0dU91Qk4yMGxEWTVteWE3dDZ6ZUhhYWdGSWhNYm5ZMlBvbzNYdGZqK2lYcEFpTkU4SGJzUkhPNGI3ZzVDV2pNb01DVkRWYlRsemlOZVV0QlptL2h3RTVyc1RFL0V6Sm5aWnRsUjVNZ0Yzb0Y0RDU4cW5mY3ZYcy9iUFlyTXdLODdLUWRtMUkvbXZnMi9HZ01tWUlUNGUwRFA4bG1WSlVkdjc1S0svckJTYmRmV21UNWxyWUZyOTN2RHZTdytURHIvK2JISDArNHB2ZTlrUTcvVHRyVEUraUVEdjZhMFd2MXNLMTI3bUdkK2RPaXMyZFdiMFdzdXMxRldJY0gyZ3ZlSjgzQm9RanVJZEc3aVVqeTg2RUtZb3dLOERBWDZkUWR4QVZVRW5vK25ncEZoWHQyVHN1VnJ5dkhZRGlyRXlOOWVQNzlXMWdlajJtVWgwKzg2QTdYS0d6NDVZbmFmaWlRYTV6TGtseWd5NkFCNkU3SG4wa1MzelEzczNnS3ZWT1F4L3lHWWZyQk02aFpHa1pUYmNVd3FKZEdLenVlc25QK2NqbVR3NHNaN3pnUFVDU3NLOFdRdk1hOGhiYjNEODJ2dVk4OXYvSEtxYmNTZlg4bkFCVDdGQy92bXpzMitZM0cvRjZsbzMzNHlBTzhLNjZEd0JMYTMybVgrWnRXVnhtRjk2aG8valRsVTUrQnhJVG81NGJJMTUvTU0vSGo2bDcvWEJaZlI4MFRoZVpiY0lxQTdhMDQvZy9MQnJTT05MTEQ1c2lIaFl0OE9xdGVVcSs1YWd5YUVYVGFvbFQrdjhtSEtTRE9MZ09mQUE3ODlBRk9jNm9jRTJKeTVreTdqYjV5K28wZXdQczBUakllSHRnTVl5cFZ2Q1prZzZVaXBjbHhCbEk0TVhCRUF2QTdYZm04NTlpaGsyb0MxWnk3endURnl5dEdFNFJ3QjVZMng1bjVuZHhUbU82TTRKYUk2UG5OazBETW1uKy9IRHpXQStpR29RSUw4QXZaK3VDdHcyT3p4TEdON1JjKzdRZGphSUw2MzhIdDB0dDJpTVpjZTJxQVEwT2dIVk9XN09vOFFJd1pBb3FqbnZXTHkzTk5nWXBQVGY3ZlVMU21ma2YyYlRxSFdjbU02M0F6dHhtdzEwWmNSYjdwY3RMemo2cHFrM0dVL081M2NZRzJPVWNhaWcvQlBjRzZQV1pvS0Q1L1RIRmhnVyt2aFpPaG1iZWVUVkY5OGtHMUFmSFdHTjFiZEg3d0p2ZGtUQ0IyY2dpR2tpWUJJYVhmMkN2NHQvV0FSOXlRZC9KRnV5bGdWVnJkR3l5OEQzNzJXM0NPb25rN0NPVTVKU21VbElyOTJnR1l0d1g3OVpmNXd6elBtVUVUUGh6aGsvcUVDWWVYak1rTTVVdlczT095ZmNXbngvZ3NQNEhaemlKdFJPQlJiMHhqYWNmbklraXpLeGFCNm5uUWpZOUxGTmNDcTFkN01YZ1g1T2MyWkhsYU9URkxRbHRIZE1EeDA4a3EzZU9XNURXeW0ySTV3dWVOc3l4L04rMnpHcTRTQXRmVVF5bkRDT3ZxM295YnNBRFZEOWRsWEwwRTIzeDVBSUdXVW53eFBrTE9wa3BXanlvOW5VMU1FQTlBek1yalBudXZrS1habzJBL2Jyek9wWVlJenNYWkxvSFBPeHpqbFY2eXZucDZJQUU0NHZYWE1lQWRteFRIN3F3MGN4dXZyb2Vjczdxd1JiT2Q4MCsrRm1kN1N2LzQ3dE1MNHlOblBaV2NuVjBhdnp0dmV0UFcxb3ptYWRNQTc5T1kyVzJQeEw2YTc0Y3lETmM1NTRBdHk1VEJZc1BMSm5oU1ZSV1A2TUtYY2E1R2pMUHJ1Y09tKzNkTXFITDhySmNqMmlUMG5jbThtdmp1bE96NWx6OHBjZ0h3eGptMTdCUHYwUG1FUXlmQ2k5VldaRG1lNVJ5WTl3Qy9UOGtMenBaZ3VpeHlBSjRPN2EyTThmWm5pUFo1cVpDMHhrZnpUTlUwdmUzVnMwQUk5cjlTMXBaaVg3U0VqL0FvTmYwajdxMklSZ1MxYkk5eWtkQmtzVE16Z2lHaGN3b2NGTzdhWjJVb0RWVzFlR04rSnZpR1NnWW15ZzBaVHFlMlVrZlJ1akp5TWJuZ3k3R0lKQXZhVlJpM0k2SXJvcitzellzdEFRenVtbmMrdllPZTZHU3FEczhOK21HY0dPUFVlaUQxUEhkTkZhY041eVcyUUppZVpzZURQK0Rkd3U0bzNENTlmaitNU3huaFJKR0FyRjlHZi80a0x4akczTDRPelUwL2piaDVZcEJHNk5hNWpUNTJBT0VESXNyQmpqWFZmc1d1WWdNK2FaZXA5dkk1cGRaZGUyZTFzS1JoclZoZExWZ0t5ejA5cjdUbVhaUWMvcHU2VnAxaDc5eG03SHRObkw4ZVRNcTJwM2FKTER5SGRNL1RZRER4R2I2MVBZdmZ1YXgwSHNJWXYwVDBuZStwN0FTSVQ1NjhHN2RNaFhMLzZYYjc2TjBaay8zdVYyYm4xa29UMWQ2ZGdIWDNNSXAzRlZuVGlkZ1hnYytrRVlaNzJObTk3eENONGNiY0Mwdk9pWGowaldSeDJPOTZtbmJNbGRGK1RZQnZJbTA1RE5vZTVMMHMyUjVPRG4vK09MRjhiYXk3VDFqMkpHbjBNRnFoUW9PWlFsV0k1LzdkbEtZRFoxWEdwY0VNaWs0NHg3K0FEaXZBV0Y5WTl1UVg1czJ3eC9nbU44K3ZqejVRbnZlOTBTeU5ONWNoNkFWRzlsK2VwNWp5SmZaTDdzZTVjcVJBNWxHYmNXY0J5SzQ1VHp4TzMxbXdYeG44RUZTMzBCSThFVWZ2NGtvS2pVOW40aHhaZnVYcHVOYnpEaUh3WHNSL3c0NWh5MHZpaisxdmZlY3pEYzlZNHRNbkpMcUNBMWUvZUVsWDU2Mk1IbW5MZWRYdkttTXl3QW5wL05pSHpRa2didmpmdGV3SzBHNDMvNDVraExIOHlQTHd6ZGpFelB3NzB2WmVpZmpyQmdrZENQeHFuWlZFY0JZQzhYdFZ2VEkydEtEOXdEWG9Qd3ZSTTZSZmQydkFLbS9SamIrWE9YeTFreWxJeVFPTXhQYVhHWk9NN0grTXV1bXlIaythRk5FZkFyM1BRMzd5Z2VzcGY2blRHNU53ZjN6eTMzKyt4aEllTC9hN0dPa2dDQVlCaUkzdi9XOHJiOEdDMnhNblNNajRINkFyaUU1WEJXcHB3QjV6SzlzSkxOOGMydmJUMVdNdkZrbXZIWDd6SW1lZnZSbW1aMnJMSThXMDZqZzJ4anE3TUFBQUFBU1VWT1JLNUNZSUk9XCI7XG4gIGV4cG9ydCBkZWZhdWx0IGltZzsiLCJ2YXIgaW1nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFnQUFBRUlDQU1BQUFDVUtKck5BQUFCTlZCTVZFVUFBQUJRVUZCcGFXbFNVbEpRVUZCUVVGQlNVbEpRVUZCUVVGQlFVRkJSVVZGUVVGQlFVRkJRVUZCUVVGQlBUMDlRVUZCUVVGQlFVRkJQVDA5UVVGQlFVRkJQVDA5UVVGQlFVRkJQVDA5UVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUFQwOVFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZEcTZ1cnQ3ZTN3OFBEejgvUHA2ZW4yOXZiczdPem41K2Y1K2ZudjcrL3k4dkxrNU9UMTlmWGg0ZUhtNXViNCtQajgvUHpqNCtQNysvdisvdjdkM2QxU1VsSndjSEJYVjFkYVdscFVWRlRiMjl1UGo0OWVYbDdVMU5TTGk0dUVoSVRRME5DMXRiV3FxcXByYTJ2RnhjV2dvS0NibTV0bVptYk16TXkvdjc5MWRYVzR1TGltcHFham82Ti9mMzk0ZUhqSXlNaTh2THl5c3JKa1pHUm9hR2hoWVdGNmVuclkyTml1cnE2VmxaV1ltSmdQNktoZUFBQUFLM1JTVGxNQStnSUY4TnNXY1BXSkVPZGxNNnREMVZDUUM4NWRMYU1tSGIxNHNuOUs0c2E0bDRNaFBNR2RWK3RyRHpHeHdBQUFEd2RKUkVGVWVOcmsyMmxiMmtBUUIvQk5DQWlpZ29vSGVOL2FQMExUcHBRV2lvQUlGcnpBQXhYRnU5Ly9JMVR0d1c0U0VPVEk5ZHZIdkVTZjJkbVpJWWxFRTZQam52VVBTNHREQVovUGJuY0xnckJodC90OHEwT0xTMzFqcytQOXhQejZQUjlHaG53YmFFendUWS8welRxSU9TMnZMMDNQb1JYdUJkZllKRTlNWk5RekV4RHdQczU1MTdBcHpnby9PQlZ3b2ozYy9OS0tqUmlaWTJ6Q2pjNFFoZ2I4eEpnY0gxYlJXYjZwWldJMHl6TmVkSU4zWnBJWUJ6ODd6YUZyQXVzR3FSZkxMamU2UzFnY0o3cm5tZWJRQTRGaFhROFlvMzEyOUlwN1JyZmpoV1BLamFadDM1eGQ1a3JuQjlYeTlkSFIwV2w1LytDZ2xDdWNIV2ZRTk1HbHk0YnFjRG5SaE5SaHZsaTlTa2EyNmhHL1hlMFg4K2tVbXNBdDZpNFUvVFBDMjBsd1h5cG54YTNtU01ucjRtVUdiK0ZHZFBYZGJIUnFBNDNkNWFzUGlhMVd4WlA3dVdNMDVuVHBKaFQ4bUx0eEpoVDJ2MjY5WC9BNm4wRWpRcDgrQm91VmVUUndXOXlUdHRvVi8zbWVSZ1BlV2FLNTVXblVWNmwrajNkS3NGcEJmUUdOUnl5K3o0bDY3b3JaK0l1dGpxd1gzODV2VVEvbkdpWGFHZlNoanUzYzN2OG90SXYrb096VE51cHdEeE9OMkdZNHFMczVELzc1Nnp1YkVxK1hVUFVRZGF4cE0yc09lcUV1ZlNyOTM4UE9aQVQxY1MrdTdxSE92VTU2enViaW9DYVZ5OUxKOFBMVHFaU2dBdnUxdEFOVlE3MU9DdjhxVkJXU2JESjBKaUdvb1A2N2ZNK2xvTVkrU0hxcFRyUElKK085OC9sSk5SVGNERTk2WlhRQ2FpcDc4ZDVLRnFCbXdVRjZZOXdPRlljbjhkNTdxRUNGMjBONllkMEpwZDJ5Rk5kQzR1Z0dTdHdVVDdxTmQwRkZMaGpYU3FpVWd0SkV0K2ZNL2dVb0haL0V0WlJOUThubko5MjA3SVhDenJrWTExYWluSUdDdTV0OWRId09Db2NQY2UxOXEwQkI2RjdKbkhWQ0xuVWVTK2lCVk42R0hEZEF1bU9kZzl6ZFNVSXZIZzZoTUVXNm9ROEt1VkJDUDhRaUZFYjRYc1FoVlUzb3krbDI5eVBCajBEdU9KdlFteDlweUEzWnVoMkhTakNoUDVGOGx5UGhndHd2ZlhRTE9la3hwWWdFVHpwbUNUS3BzcVJYSnhuSVRIUXNFbE9ReVp4SVVrS25TOHJlUVdhTjcxSy91TWxLK3BXUVBxY2hNMEk2WVpnRDYvYXJmdk1oSVQzN2RBYVpQdEkrRHdkV09panAyR3Nzd3BlUUdTUHRtdHdBcS9KRjBubENQRi9FUEZqY0NtbVB3dzdXWmVUbE4rblduMWdrcEZnT3JJMUowZzdiS2xqM0Vja1l4QnhZM243U2hqV3d6a0tTVVlnRnNCYjR6alhPc3krU2NTZ2k0U0x2dGNLQmNhanJmcUVRdlFSci9iMkYwZzNHelhmSldEYlRZQWp2SzVpMmVUQXlTY2xvZ3JkZzJQczc4STB6ZFNJWlR6WUR4aHBwM1N4WXA1SVI3ZTIwTzJIMno0RnhFVE9tTWhpQ243Um9Hb3k4R0RPb0VoZytHMm5KQUJpSG9aaFJpWmRnTEpGVytBWFF0ck14NC9xOEN4bzNTSnJIQjhBNGloblp6eDNRdkMwY2pqRXdTakZqZTN6djh5L0hCbWhuMFpqQkZVRGp4a21UaGtETGZCT05MbmdIMmp6L3JsR3FLb294Z3kveENJd0IwZ3liWFRaQkdGOU1MSUVtT0ZxL0NaSDVyUGwrdHI5RU1YVGI4djE5aHdEYXRXaDhMN0g0MlhLOVhBT3RZUHdDRVJOZlBZRVdJRzhaQkMzelF6U0IxMkJzM29FMlRONndBTnFCYUI2bm9IbDUwdEFLYU9tb2FDS1hyZHlaQ0lDMko1cEpjZ2NVdTQwMDRKRlZTbk1wTlo4Uzg2RHNHSCsyWm0zdWdqSm5helloU3FMWlZKdE5pUUFvbVUraTJZUVBRYkh6emMwUTU2TDVYRGMzUzB5QXNyc1pOUjgySlZhSk9qOEh5a0hVak5pVVdDR3FYS1pQaU9lVVNJTXlSTlNNYm9CeUhqVW5KaVU0UDFFeHdMYU1xRG1GajBGWmVuT1lLa1hONmhFVXQrMk4zcG42RVRXcnpkMDNPdWdpS1Btd2VSVkJXVkNXU2dHVXZYRFV0T3RIcW1HNUhBTWxIVGF6QWlnekRlOU1WVFhmdG02dUkxRHNoT1hnVUxNZERKdmFEU2pqRFlhSWZGanpYZXZtQ2wrQXN0VGdaSnlFelMwSmlyZit5VGcyZDBJOHAwUUZsTUc2SjZNVU5ydkh1bWRqR3BTZlliUDducXB6Tm14TzFOeUd6ZThlRkgrZE55S0tZZlBici9PMnhJaTFUZ1o5TnRqYk0zYlUzRVhDRm5DR0dxZU4vRFVKU2k1c0JSZWdlRlNiNTNYRUN2WlVHK2dhYWxJZkkxWVEya1hOcWxxSnFFU3NJYTlTSkJ5Z0ZDUFdzSzh5WlErRGNoV3hoaXdvZmNvSE82bGd4Q0x1bEpORUFEWHBpRlVVVUROSFh2QUNhcDVDVm5FQWlvTTg4NE5TRGtVc3NrNUE4U2hxNVVQSUtqNmw1TlZ5Q2pYYlh6VGZxVjR0NXUzc05mbC9aNlJEMWxGQXpUeDU1a1ZOTHFUNVR2VXNJeTVRNCtRSjRUblVISVNzNHhRVXY2eHBIR20rVWIxYldWQldaRzlmSjBQV3NibURtakgyNmUvT1pzaENmcE4zcjA5TkEwRUF3SzlGUlJCQkVNRUh5a05FWmJmTVRXODZtV1NtTTdTbEw2QThyQ0FGdElqby8vOG42TGZzYnBKU1NtMmIzTysrOEluQ1ptOXpUZTdSNU8rQzM0S3Z1V1dUYS9BdDhxY3kxMXMycVlKdmczL2wydDJ5U1F0OHkzd1ljYnhsazI5MElLSFVFL0Q5MkxMSkVSQjhQUFU5WjVOOUlOUWtFSmM1bTJ3RG9kYUJxT2RzZ2tEd2VhWnV6aW9sOFBIVlM5bWNWZHJnWXpNQ3lqbTdYSUdQUGFqYnlkbWxTQVB4aVMxV3NRc0x4QXZ3L2N4a2NoYTF6Q240MkpTQWRzWXUxelFRbStDN3Npd2p6cU1EWVpmenlLNWhXVVpjUnhkTHUxeEUzajR0eTRoaTVJQXFZNWRpNUJBN1k1ZkR5QzlkbUxGS08vcHJlTVlxcGVnSE14bWI2QTZQNmpJMjJlN3c4RFpqazMwZytPUDhtNnhOam9EZ0wzaGFXWnMwd0pkU2FnTjgxYXhOeEN1L1JmQmRaMjBpWGdLL0IxOHpheE14TFdBS2ZHWE1XcVRKMTY3TUFGSEoyZ1BMZktYZk9oQkhhSTlmWWc3eUdKdGVpRmxyMm5jZzFzVkNwbDIweHpINFVtTnlDaklPL1VJTnF1RWUrT2FWNHRQcVNtaVBRemtwZlJhSSt0Q3YxS0NhRWNzVXhHMmpnYllRQzFma1VxYnEwSy9Vb05wWllDbVRXbUhWMGhhMFZqNEpXZTdvb2lWcVlybWpySlluYUljNkVPTmhTNkxSRGorQStCQzJTQjd0RUxKSW5qK2JLU2UzU0dqNk05czJJWHdqRGJUQlZ5RGVoMit0b20wZ3QxWUpLUkp0allST0RxUXVaSWtJYnZOYTJMY2dFRzRKZkV0UkczTHBSREthYUFDeFNUYThmUXkrb2s2K1BmNTB5cmVhL0w2QnhIWXBha1BMY1NCYU9vRlFFdzBnNWlJMzlqeE1Za1lndGNlM0hLSTJvdnVHU1lUSW5yR2NWdFFtRUg4MFlSTFJtQU1nSmpwc0IxMXp0UTlORXFEMm1TTHZHZHhySUJxYU1HYm8xL1AramJvRTRtSEgweld1TlpHRUlxR3Bhc2NUTmlicG1LcGNSMkxvbC9QK0RRbDNoNCttcERVZ2ZpY3JKYUpMNWVvdEI0M3NWSklVQ0UzbG0wQjhVa0h6UUp3bEtSQXNFdDg2SHowamh4THR2RW1vMDdCQmhDeVh4RGZqM3paam54TGtIN2tzQVBGU2haa0RvdWloTDlhREtvMkVQZ2RpU1lWYVR3SFJTTXlOUXhOSEJmNCtJOXcwRUlkT01nS2hLY01TWXFXcll5NWxTbmd4cGFNVDRwT0tzZ0hFbFdzb3g0c2xRM2tYNHVEVEtMTkEzYkI2RzlPVW9EY05jOElTWXJ6Ync1RnJGU1JpMlRuNExjTTVGT2RsZDMwNnNtYTgrSkhmTXFpcDdnOVFMKzNIdkY3eU9GUiszdUZNL1E5QTdiSGZoRjdNR00zOGtZZGxkNThTaFpOWXB3UVB4TmVTcUJDZExhU0FhRllNNDhTSllmS240cWpzMjN6c1dDK2RHTFZPbFhKVjNlclJBeURLbDZKek9ISGhhYWErQTBUcXBicmRHNkJPSFI2Sm9WL24zdkxCN0FHMXByb3c5aENvbG1iaVVpYU1aaHBBZlo1VTNaZ0ZxblFaeHpKaFJNZW9BUjljZDJjYXFLdHR6Y1NoVEhpYXlWOEF0WkpXM1huMEdhaXFpVjNuTUpwcEFaVmFVTjJhQWpHczRweFJaN1FjU2xFVHFudXJRTzNVNDFVd1JSd3FiYUNlamFudXZYd01WTkdOVVNUeVJ1VHZPVEF6Nmk2bWdOazFzWW1FaklNK0JtWk8zYzAwTUFjNkxwR1FjVGdwQURWUE9rWXZkNDdTSlhLakdnbURYTDNXd3gyRG1RRm1aMTl6SmorS2pPWitOWUhaVkhjM0IweXpncHgyOHFNbWtBL3VLVEJMcWdmUDU0RTVkMGMrSjR6bXZDb3d5NDlVTDlZZkFGUDFSanNTZ1RwcFdzQ2tucXJlektTQStlMW9icVI2aDZNRmN3YmNDOVdyTjhEOU1TaU1UaVE4alp3K0FHNU45U3c5RFZ6TG9EQXEzY05EcVZFQVptVk05Vzd5R1hBSGVqUWpZVkRRSjJWZ25yeFM5L0ZvR2JpejRFYzY3ckNGeEtFaDR2QmdRZDNQd2dQZ1dxR1J5QSt6T2ZyV09LVGVxZnQ2bDVJVjA5T1NjWWNwNU84NUFHRkszZDhtQ0Y4OEhLR2tjQXhLNXFZQTNKenFoM0VRZHZNWU1LeWs4RERBK3dMQ1dscjF4VnNRVGlzNEdrbmhhQXh3OTBCWVRLcyttUUNoWGNjZ2szY0h6TU9nU2hHRTZiVHFsL1JIRUdwZkVZTTdHam51SURuNGovd1Q2azBRTnA0cm91K1JLTndZRE5LRFM0cDg2T2QvTDRHdzhsejFVM29DcEtxTE9MeWk2V0VJN3hpa3BUSFZaMjlBT3Z5VkRUT0lVSmhzR1BjY3BPa3gxWGZ2UWFvZElRNGpLd3lHMm0rQ3RFamkwTytja0dPcmJGZ1RONUQraHlING1lYWdEUDlyL0NETi91M3VUbnNTQjhJNGdFOHQ1VWE1cEVVdVlaZjFlS1lKYVY4UVNKcXdCVnh3VlhEbDhsd1YvUDVmWVNYYnhNaE1XNjZXNGkrODRBMUQrT2MvRDlPa1NiMHc2K1lDRTZ3Y200b1dBMkdzQXNHRHJGSThnVm5OaVV5cmhEVlhwV1V0QnVMYlNvOE5tTVVjSSt0OER3T2hReTJGdFA0amxxd3RURFppL0FxRVhBSlp5WDBJaE9adEdWTWFJV2tINzFwbDVaZFdobytGUDArSHB6b1FPQUZaaXowQ1VxZUhKVjI0dXZxV0tCa3MzeDRBS2UxSGx0djNBdW51VERLQTVmSXFWWkFNMU02QnhIaDJrQTBTSEpEcTEyWEpMSXVGS1NZcFNOVkpBMGlCSXJLSCt3QW9Ydm9seVlSY25hOFp0V2tJMVprUVNQamhHU2ppQXJMTGpvY0JpaHNpQ2hyOEhvZGlPQkhJQ09neHFFREJaRmhrb3hBSE5KMHVsdWFFUzlOYnU1VVA1ZWxOb3ZOLy9PSWVhQUpaWkMvV0IxUnFYeGF0aHgvdWdZcjNJOXRGQWtEVnVxcUsxcEtIZjRIS0ZVU2I0T2VCcm5GYms2eWpURnBBbDA2aURTbUdRWWY2YU0wT3dkMVgwSkhMb3MySlJVRlA2N29taVd0V3VYb0JQUVUvMmlnaERicWVSN1YxcHZDa2dxNjhnRFl1d29HK3p0TjZzbENHQTlDWDI5OUJEc0FHQTJDZ2NkNHRpZUx5VCtVVWNlK3RCUVpjSGhZNWhOdm5CU1BOdTBrYmk4dVF4cGUvNjJDRU9Vb2lCM0ZIR1REMlU3MStxSWppbk4yWVVucWpRUk5NOEE0WURwOGxDd3lZYXFwdnc3WmlXb055dS85SHJZTzUzUVJ5b0dUVUMvTnBxZWVqeTM1dlhKRXgxbjQ3eG5MbDdLSTdIUDBhdk1COEdONlJNVXpGUERtd1N5RGxSZzdHQnVOZ0I4NFRRMDRuK0U3QVd0NUNDRzBGOWpqTmdHVU85cDFmaGc5Q0tnNVc0TDQ1ZGtEcUVqTGhkYWZnMjVJdFFSQThlUWJXZy9tUjJ0WVUvb3RGQ2h5c0tzQWYrOUVYNE4vTEhIaVhiY0toTCtMb0E4T2lZbnNwUHN6QVFyamRUUFpMTklIQWhvTFJkTndGWnJ6aGRPRzB1RTMva3N1SkpiTEJWSlRQeDNNdWwwdHJ5ZnU3WER6UFJ6T25rZEFtV3ZBUERNUC8yQ3FLTlFFQUFBQUFTVVZPUks1Q1lJST1cIjtcbiAgZXhwb3J0IGRlZmF1bHQgaW1nOyIsInZhciBpbWcgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUWdBQUFFSUNBTUFBQUNVS0pyTkFBQUE1MUJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWlJaUlsSlNVZkh4OGNIQndYRnhjc0xDd1VGQlF2THk4eU1qSVFFQkFaR1Jrbkp5Y3BLU2sxTlRVTkRRMDNOemRpWW1KZlgxOWVYbDVaV1ZsYlcxdE5UVTFYVjFjL1B6OUlTRWdGQlFWRVJFUlRVMU02T2pwUlVWRlZWVlVKQ1FsUFQwOUdSa1k4UER4S1NrcEJRVUdNMUFOQ0FBQUFKM1JTVGxNQUJmdndEaFgyelRrSjFHZWhVOXhLNnk5L2IwRzZ0SWhmS0J2bXhwdVBlSytvV1NIQTRaYjlZeWFyQUFBTlJrbEVRVlI0MnV6WWEzT2FRQlNBNFVXTWx4aHZqZEUyVVdPaTV1U2lpZWtVVjBWQVlFRkEvdi92NmFUVEQyVjM4UkpCTWRQSDc4cTg3am1nNkwvL0VpQmRMWCsvYkR4MGV0bHNxZFFYUmJGZkttV3p2VTZyY2ZtOVhFMmpyeStkS3pUdXNoVllUOHgyMm9YYVYrMXhYZnpXS2NFdSt2WEdmUmQ5SmNLUDc2MXorSnliK20xT1FGOUJ0OUFSWVQrWnE4c2Y2S1FKdGZZNVJLUC9VTTZqMHlTVUwwU0lVdWF1ZUhvdGhISkxoT2lKSjliaStyWVBjUkZiVlhRYWhHSTlCYkhLRms3Z0dlT3NVWUg0aWUyRVAyRDhhR2RnUjdxK0hJOTFYWWZkcE9vNWxGaTFPbXhGZjM4WkVtTmxxYlBKdjJhcXFSams3ZVY5eXlqTklrcWtXbk9MQklPaGI4MG1tOHhNNCszbkZqbk9FNWdpMTRNTkJxUFZmTEtMdVNKdHJKRXRvMFRKWGNFNitndXhKcDlqZXMvcll6UnJLREd1V3lrSU54NHVwcE85V0tOWFdPTXFJVDlFOHJjWkNQV08xVWtVWkc5TmkxUWpDYzhWeFQ2RUdZL3NTWFJrYndCaEtnVjBaTjA2aE5CLy9WMEwwMGhlZjlodk9vUm9IbmMrQ2lMd3ZXcXphU3pjbDlENUVOQ3hWSnZBOTJSTlAwd2lmMzJ3aHpwd25lZlFVUWkzS2VEUjM5UnB2T1prQ1R5cGRoNGRYcmNIUEVzeW44WnZwbzM1aDZLS0RxMG9jalBnK1d3cnFxbXNGb2F2ZVI0aEJHTkNQRS96amNWS3NkVFpkclFsY0dSdTBVR2xMNEJEbCtUWkpuTlRjVFdDMXlHYXE1aWIzeWxrUU9wbjZIQ3FKZUFZYnJwNFd6RTh2QzFpS09hRzR5VkxPckJ1RHJjejd6UEFlcmJXUjFqNUJPOU1XNnlQWVQ4QkszV2c4UkFhd0hwMzExeXc3QmhNaEYxT2hyeG1QcFJYWU4zbFVmek9lc0RRUi9JOGpLejRlRithSXM5RGVUb3dzbDBVdDI0SkdBTm5Ic2FoS3NUUndud0dSaVh1UlpHckFFM0hZWmRvTHdpT0RuSE5lUWhqQ2JUTVBhTEV2U1lIVnNoSU9CcW14SGNzYlBaUXBDNVJmTDRCNDAyVnVSUVB4NEVzVkptTHN5a2VCQlNUTnRER0M1bEhkWWtVRit6YS9QS3ZRTHVMcVVRTGFFODJOOE1DUzNIQ3JzcjkyQ0hRNm5rVVBlRUNhSmlmZ1VoeHcvd0IwWFNnOU5MUmQrZ0FaZW5LSEE2UkRnR3Z1T014QmtyMkxPb09kZlp1SWJNc1RUb1V6NUZaNWd0UW11bG9POXdCNWRGV0diWXZIWkp2cXF4ZnpIVGtZOTJUUTA0SEpmYXBZRmNGQ3dQbEtoL2pmUk9yREZPVERzK3pWQWF6TWpzQ2lrZ0RnblJmWmF5d2RCU2NRK0V1SWVnQ1JhTkFkekJzbXVsTHg2S1pObTFGbDJpZ0tKUlRWQWZYcGlsRU9oNnNzQ1hHRUZSQSs2dUtFTEJjMkRSWE9pNkQvV2JlSVNCVlJ2dTZ2cUU3bURSTk9qYlBNaWwwQ2JHSzlwTS9wK2ZDcERoRU9qNnNNQ1dvNmVpZm9iMWMwSHZTcEt5a1pHQytJSHBqTmdXMGgwdjZ2bWxTM0ZGU2FDWmxRWlZvbzgrcnBZSWROSXZpajVLRHVUaERoNEQ3eUJZbHRpamVLRW1JWXdWUno1aVp6eTVNb1FrQlF5dklTVllIVGdrSkFrcnBTUDZoZkhTb0RtU1VORmloTG5FSUFTMzBHYm5nZ2hnb1RvQ1N2QTRmSlp5Z1J3Z29vdDJsUy9DdjhZcnFnRWRKSkZFbHFMOTBLOWY3UGtIby9tOXk3VzJuYlNBSUE3QURJVkFvTkJXVVFxa0FBZTBFeUdZM1pEZStpbnlRSmN1TzMvOTVxb2lxODIrd1E1emVaSmZ2RFR6NlovWmtCL0pRbDRraUovUVF0SFZNRmpXemJHMGRGcFd3WldRNWJkc1lWNFFHenRSQnFXeG1FNFI2OS85ek56ZWF6eXpidG02dXJNVDhoZEMzb0kyenBRRXhzMFJxdTVVenk5S1l1R2h6NWp3aEpHZVdWRzI3YUdZSkNmWDNOcjJrZkpsYnRyOE9TbFZ6eTJEREs4ejdIb0U4bmFQWUtBY1VjMVNNQ1owRmE3b2xaT2FXN2R4SUxUUHhISldFOWplYWxDK3hKWk51Q0dQTFlJTjUyVG0wVjR3WVJkSVZaWXpTbkVDLzIvNVdTc1lvVmRJVktvMlJhZjNRMGUwVEdCVXhNdElkSnJZOEUraXRjZmk2SVpURnFKUXV5V0pVSlFSK3R3ekVVNEVxNlphb1FCTUNPL2V0cnFXU3FFRHVESWkvMGdLa2VadkxxdTR1QVYwZ1YxWk9GaFpJV1pHNGJMRzVubFlwY0sweEZxSVVqUWg4YmhFSW1TS1hWZ3hlUTVGWmYwcWNOZ2ZDdmNaWUNKc2pjUjAwNjV3UWtLNDN4a0xVR0luZGJ0RG9qc0RZQ2tRbzNXUlNVQTBKM0FTTjlnbklDcmh6eGxoV1ZzQVF1T29FRFE0SVRLTUt1RGdwWDZrS2pRamNyZldVb1NOUUNuZGxFWkRyUEhKMGU4U1NNZ0pLdUV0R2FFcmdjbzIxY3hDQlRMak1pb1FtOFAzOVVabUV2Z1JpS1JKbFRxemZlWGRVRHYwSmhCQmhCQVlFanQ5OTNKSWxjRHNRUXNnU0dBTG53VnVkUHJGcFZqTFhBeUZFV0lJeHNaMmF4NTR2QkFZK0JXSXBFcHJBMGVwTlJHSXk1bjRnaE1oQW1LeDhFdTdzRWh0bHdBajNxUXc4VzcyeHNqTW1uZ1ZDaUJBL2lNRFI2czd3TEJCQ0dPeU5mRlZ2WEdGbmhFQUtIOGdRV0wzUkRTeGZDVHlHUVBqQjRDY1JPRzUrMWtsVXlOeGZPMS9oTjVtOCthbm5KN0d4QVZMN1FSZ3dKUFlyUU4wZFlnTUR0QytVWVpQR3MvZ3hBZUZoSUxTV2hzbWs2Yy9MYTJLNUFVTDdRaGd3SlhiYmRCVXhWTUNmUW1nRm5vbjFBL2JKR2hHSytkTVpXa3ZGbW9iRUdRSHBaeUMwVUNBaGRsSC9MMEN1Z1BhSkF1UDZQd1RPaVkwODdReTdOMTZJSFhJaCtzU2VKUE9wTTdRV2tqM1dIamQrRUpoSXBpYyswWklKQWdkMXN6SVJINklRTWlkMlZIZmltbUxaSm40UmtvMkpYZGRkeW93RTg2NFFZRWpzb1c1ZitleHhJYlJnVDNWN3l4NnhKMy9yWUVYaWtjQmV6YUx4cVAveGExUXVhRkN6YkJ3UVMvUkhLVVJPN083dG4xTzV6M1g0dzk2ZHBqWU1BMUVBVnBPVzdrMFhBcUVMSlczcDAySU1kc0QvOVV2M3YxRnhDSXlhVVh3QVAzMUhlQ0JydEkzL0pURkFmT3FWeHJCalVWaHRmRUIwdTR5Ym5aMW85T0hHR3FKMUxIcUlCN04zQTlFN0ZoNWlxUSs1dkdOaGtURjdDd2pyYUtnZ3psR0RNS052WkJ5UENLRUxTOGNqSFFleHFrSG9JSkxqTVJ3SGNWK0RnQmw5MVNCZ1JodlNJRG9JMWR0M2NEeFVFQzgxaUVJUWxzZmswRWlXaHdwaVU0TTRUSitrUWVpQ3FnWnhLTEZyRURxSWFIa2t0UXl2UVJRMlppeVBPTGxWNXkyTjZjM2JZR2tnbzdmemU4dkNJNk1QZUJyTEl1Z0RuaCtJMXJKbzlKSGZIVVJuV2JRUTY4SUZaTTlpME5jQ05oRFJzMGdRejRXNytaNUYxRmVIWHBFSm5rVGhNdG5aQXFMeEhBSXlyMFlYRXAzbjBFSXN6Y0VXWXZBY3V0SVY1RS9DYWFQNEdIaEZPRzFFaU52aXc1WGVNd2g2MGhnOTBuMHRXMlNrYzhLYXJzZ2U5SkpyOUV6M3RZemw3cmNydHRveUlITjdvbXRDNitldjBVK2lkVzJad3Z3TkVFdVQrWVdJWWY3aXFYNTFYOGcwWWZaTzlnQytXRUIwWWU1YVpKNU03cEpxYkNTSXQ0bWZLUFJoNWlaNjZGK0JhR3hNOVlRK2V5UWFHMm1xZmVHV2FHd2c4MjZPM1BPTWpYYnkvNS9YUzVxeGtmUytiVzdMVWxQOWtYY3Z5NG5EUUJSQTIyQTdZNGRIZ0VCNERZRkp3bDJNeTFWaW9iMVcvdjgveXJZbEZ5Q01xYkthNHorNDFROTUxU2VuTXk3Mmh2NHZsM0k2bzk0YlR6SXVEZDhaYTZvYlBNZTRMTUY4WHozcWFFNVNWZGZQUEk3QUZDZVpDakQ5N1BvVnYrb2trL2E0NkpmMG5xQWtESmlKendsY2ZaSkllWjNFSFVOOFNSZ3dyM1JPTHIwa0ZKaTNqTTU1bFY0U0JzeVV6b28yc2t0Q2dVa1RPbThxdXlTTTkrblRKQVdqQzFrVXVCVmRzZ05YeUdMQTdPbWlkUXFtS2lUUmNCOVQvaVZSRm9LQU85QVZTUitNS2VTb3dQUW1kTTBIT0ZWSVVZSWJFRDFyU1Jpdlk5bmNKeVRPU3czdVNCNmlrY0RtS01IMUUvSXhoTHptTU9CbTVHY09hZTlMQlM2UHlNK2tKNnc1U2xqRzVPc0l6Z1QvckRMZ0Z1UXQvaEcxT1RTNDlJdjhqU0dvT1JRc003ckZIbUwrT1VvRGJrczNTZnJPbUFoWEJlY240elpMV0tveVZCcVdLVEZObWtPWFlWS3d2RVIwcTJRRGl5cURCRXU2b3R1TklXQk1HRmlXMU1RdS9DUU1MSHRxSk10RFQ2S0NaWk5RTTZ0KzJLdER3OUw3UTAwTkVmTHEwTEROcUxtUGdKTlFzQjNvSG90Z2sxQ3c1Um5kSS9rSk5Ba0YyOXNYM1dmVkR6SUpCVnY2VHZkNlR3Tk1Rc0d4cFB2OVEzQkphRGltMUlZcEhKWHFOZzNIWDJySEFQVWt5dTUrRlJ6emlOb1JIZUF3SFU2aWdtTWJVMXVpUlQySnJqSnd2TVRVbm1nZVNrMFlPUEtFMmhSdjRkS3FlN1NCWTVSUXUrSTV1cjg4TkZ6NW10cVd6ZEgxUVZIQjlaSlErNko5eDVNd2VPQys0S0lCT3R3ZUdqWGZNVDFHZEVSbmk4S2dacC9SdzN6MjBNbnRvUTFxZHZSSXc5OTI2MjRuWVNBSXcvQjArLzhMTGFXMEZzR3ErTjBCNTNPMDkzOUh4bUJNREcxQlliZGI0M01KYjJabTF6TnhLQ1RPaUJXcEZTeGgycVhvR3dkdlFhcTlSRGpIRSs0SDQ5d2hKL1hDQkRCblB5UjZ2THFrUlN4Z3lINUlSbytOUlpxVUxVellqMk52QmpzbGZSN1dtRHhGZndiNERXbTE4aVpLTVo0Qk80czB5eU1NcE5CZ0tNT2hKUDNDTi9SamVWUkxNdnAxRGsyaXpEU25HTS9RcGpTVnNCRFEzSUl4SkhGcFFya1BqU25rY0lhc3BHbFpLeHNqTGZSVWdGZUVORG4zVFVCNUM4a1kwVDJRRVpvS1kvakdHSEs4QXZ5QWpMR0lNSTZsVkJJQnlHb3l5dk1weFQwblF6TGpra05za1dHc09zTVZtRm5LeTJQQWpDdTA1bVU0cFlod0xmNGdQeDNsSi82QWEyV3hBVS9GZ0tDQ0xuNXQ1RFI4eVJNUDZva25nMTZLSVU0Y1FhMTI4MEx6a0Q5NlVFV3NVN04zNGp1blhndmNuM2lOWFpvYnA2N3UzQ0xhRy9LVi9qRzM3bXpjaC8wVXo3WENpUlVVdnNDTm9rMDVwN3N3eUNtTHRZZmZFZjR1bmQ5WkdKMk0xYVB2L2JCQnNnL00vVHpld21yU290dTJ1R1M1N1RiUCtaL1lobEZoczRqM3U2VGFacTF0NDhTMmw5bTJTblpGdkdqKzVoVDhtNWQzbnpvM0E2eHM1WWNBQUFBQVNVVk9SSzVDWUlJPVwiO1xuICBleHBvcnQgZGVmYXVsdCBpbWc7IiwiaW1wb3J0IHtBMV9MRVRURVJTLCBBMV9OVU1CRVJTfSBmcm9tICcuL2NvbnN0JztcbmltcG9ydCB7VGhlbWUsIEtpfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7emVyb3MsIGVtcHR5fSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IFN1YmR1ZWRCb2FyZCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc3ViZHVlZC9ib2FyZC5wbmcnO1xuaW1wb3J0IFN1YmR1ZWRXaGl0ZSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc3ViZHVlZC93aGl0ZS5wbmcnO1xuaW1wb3J0IFN1YmR1ZWRCbGFjayBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc3ViZHVlZC9ibGFjay5wbmcnO1xuXG4vLyBpbXBvcnQgU2hlbGxCb2FyZCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2hlbGwtc3RvbmUvYm9hcmQucG5nJztcbi8vIGltcG9ydCBTaGVsbEJsYWNrIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zaGVsbC1zdG9uZS9ibGFjay5wbmcnO1xuLy8gaW1wb3J0IFNoZWxsV2hpdGUwIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zaGVsbC1zdG9uZS93aGl0ZTAucG5nJztcbi8vIGltcG9ydCBTaGVsbFdoaXRlMSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2hlbGwtc3RvbmUvd2hpdGUxLnBuZyc7XG4vLyBpbXBvcnQgU2hlbGxXaGl0ZTIgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3NoZWxsLXN0b25lL3doaXRlMi5wbmcnO1xuLy8gaW1wb3J0IFNoZWxsV2hpdGUzIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zaGVsbC1zdG9uZS93aGl0ZTMucG5nJztcbi8vIGltcG9ydCBTaGVsbFdoaXRlNCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2hlbGwtc3RvbmUvd2hpdGU0LnBuZyc7XG5cbi8vIGltcG9ydCBTbGF0ZUFuZFNoZWxsQm9hcmQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9ib2FyZC5wbmcnO1xuXG4vLyBpbXBvcnQgU2xhdGVBbmRTaGVsbEJsYWNrMCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NsYXRlMS5wbmcnO1xuLy8gaW1wb3J0IFNsYXRlQW5kU2hlbGxCbGFjazEgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9zbGF0ZTIucG5nJztcbi8vIGltcG9ydCBTbGF0ZUFuZFNoZWxsQmxhY2syIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zbGF0ZS1hbmQtc2hlbGwvc2xhdGUzLnBuZyc7XG4vLyBpbXBvcnQgU2xhdGVBbmRTaGVsbEJsYWNrMyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NsYXRlNC5wbmcnO1xuLy8gaW1wb3J0IFNsYXRlQW5kU2hlbGxCbGFjazQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9zbGF0ZTUucG5nJztcbi8vIGltcG9ydCBTbGF0ZUFuZFNoZWxsV2hpdGUwIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zbGF0ZS1hbmQtc2hlbGwvc2hlbGwxLnBuZyc7XG4vLyBpbXBvcnQgU2xhdGVBbmRTaGVsbFdoaXRlMSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NoZWxsMi5wbmcnO1xuLy8gaW1wb3J0IFNsYXRlQW5kU2hlbGxXaGl0ZTIgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3NsYXRlLWFuZC1zaGVsbC9zaGVsbDMucG5nJztcbi8vIGltcG9ydCBTbGF0ZUFuZFNoZWxsV2hpdGUzIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9zbGF0ZS1hbmQtc2hlbGwvc2hlbGw0LnBuZyc7XG4vLyBpbXBvcnQgU2xhdGVBbmRTaGVsbFdoaXRlNCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvc2xhdGUtYW5kLXNoZWxsL3NoZWxsNS5wbmcnO1xuXG4vLyBpbXBvcnQgV2FsbnV0Qm9hcmQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3dhbG51dC9ib2FyZC5qcGcnO1xuLy8gaW1wb3J0IFdhbG51dEJsYWNrIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS93YWxudXQvYmxhY2sucG5nJztcbi8vIGltcG9ydCBXYWxudXRXaGl0ZSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvd2FsbnV0L3doaXRlLnBuZyc7XG5cbi8vIGltcG9ydCBQaG90b3JlYWxpc3RpY0JvYXJkIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90aGVtZS9waG90b3JlYWxpc3RpYy9ib2FyZC5wbmcnO1xuLy8gaW1wb3J0IFBob3RvcmVhbGlzdGljQmxhY2sgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RoZW1lL3Bob3RvcmVhbGlzdGljL2JsYWNrLnBuZyc7XG4vLyBpbXBvcnQgUGhvdG9yZWFsaXN0aWNXaGl0ZSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGhlbWUvcGhvdG9yZWFsaXN0aWMvd2hpdGUucG5nJztcbmltcG9ydCB7Q2VudGVyLCBNYXJrfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Y2FsY1Zpc2libGVBcmVhfSBmcm9tICcuL3V0aWxzJztcblxuLy8gY29uc3QgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xubGV0IGRldmljZVBpeGVsUmF0aW8gPSAxLjA7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAvLyBicm93c2VyIGNvZGVcbn1cblxuY29uc3QgUmVzb3VyY2VzID0ge1xuICBbVGhlbWUuU3ViZHVlZF06IHtcbiAgICBib2FyZDogU3ViZHVlZEJvYXJkLFxuICAgIGJsYWNrOiBbU3ViZHVlZEJsYWNrXSxcbiAgICB3aGl0ZTogW1N1YmR1ZWRXaGl0ZV0sXG4gIH0sXG4gIC8vIFtUaGVtZS5TaGVsbFN0b25lXToge1xuICAvLyAgIGJvYXJkOiBTaGVsbEJvYXJkLFxuICAvLyAgIGJsYWNrOiBbU2hlbGxCbGFja10sXG4gIC8vICAgd2hpdGU6IFtTaGVsbFdoaXRlMCwgU2hlbGxXaGl0ZTEsIFNoZWxsV2hpdGUyLCBTaGVsbFdoaXRlMywgU2hlbGxXaGl0ZTRdLFxuICAvLyB9LFxuICAvLyBbVGhlbWUuU2xhdGVBbmRTaGVsbF06IHtcbiAgLy8gICBib2FyZDogU2xhdGVBbmRTaGVsbEJvYXJkLFxuICAvLyAgIGJsYWNrOiBbXG4gIC8vICAgICBTbGF0ZUFuZFNoZWxsQmxhY2swLFxuICAvLyAgICAgU2xhdGVBbmRTaGVsbEJsYWNrMSxcbiAgLy8gICAgIFNsYXRlQW5kU2hlbGxCbGFjazIsXG4gIC8vICAgICBTbGF0ZUFuZFNoZWxsQmxhY2szLFxuICAvLyAgICAgU2xhdGVBbmRTaGVsbEJsYWNrNCxcbiAgLy8gICBdLFxuICAvLyAgIHdoaXRlOiBbXG4gIC8vICAgICBTbGF0ZUFuZFNoZWxsV2hpdGUwLFxuICAvLyAgICAgU2xhdGVBbmRTaGVsbFdoaXRlMSxcbiAgLy8gICAgIFNsYXRlQW5kU2hlbGxXaGl0ZTIsXG4gIC8vICAgICBTbGF0ZUFuZFNoZWxsV2hpdGUzLFxuICAvLyAgICAgU2xhdGVBbmRTaGVsbFdoaXRlNCxcbiAgLy8gICBdLFxuICAvLyB9LFxuICAvLyBbVGhlbWUuV2FsbnV0XToge1xuICAvLyAgIGJvYXJkOiBXYWxudXRCb2FyZCxcbiAgLy8gICBibGFjazogW1dhbG51dEJsYWNrXSxcbiAgLy8gICB3aGl0ZTogW1dhbG51dFdoaXRlXSxcbiAgLy8gfSxcbiAgLy8gW1RoZW1lLlBob3RvcmVhbGlzdGljXToge1xuICAvLyAgIGJvYXJkOiBQaG90b3JlYWxpc3RpY0JvYXJkLFxuICAvLyAgIGJsYWNrOiBbUGhvdG9yZWFsaXN0aWNCbGFja10sXG4gIC8vICAgd2hpdGU6IFtQaG90b3JlYWxpc3RpY1doaXRlXSxcbiAgLy8gfSxcbn07XG5cbmV4cG9ydCB0eXBlIEdob3N0QmFuT3B0aW9ucyA9IHtcbiAgYm9hcmRTaXplOiBudW1iZXI7XG4gIHNpemU/OiBudW1iZXI7XG4gIC8vIHRoZW1lOiBTdG9uZTtcbiAgcGFkZGluZzogbnVtYmVyO1xuICB6b29tPzogYm9vbGVhbjtcbiAgZXh0ZW5kOiBudW1iZXI7XG4gIHRoZW1lPzogVGhlbWU7XG4gIGNvb3JkaW5hdGU6IGJvb2xlYW47XG4gIGludGVyYWN0aXZlOiBib29sZWFuO1xufTtcblxudHlwZSBHaG9zdEJhbk9wdGlvbnNQYXJhbXMgPSB7XG4gIGJvYXJkU2l6ZT86IG51bWJlcjtcbiAgc2l6ZT86IG51bWJlcjtcbiAgcGFkZGluZz86IG51bWJlcjtcbiAgem9vbT86IGJvb2xlYW47XG4gIGV4dGVuZD86IG51bWJlcjtcbiAgdGhlbWU/OiBUaGVtZTtcbiAgaW50ZXJhY3RpdmU/OiBib29sZWFuO1xuICBjb29yZGluYXRlPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjbGFzcyBHaG9zdEJhbiB7XG4gIG9wdGlvbnM6IEdob3N0QmFuT3B0aW9ucyA9IHtcbiAgICBib2FyZFNpemU6IDE5LFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIGV4dGVuZDogMixcbiAgICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gICAgY29vcmRpbmF0ZTogdHJ1ZSxcbiAgfTtcbiAgZG9tOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgY2FudmFzPzogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlc291cmNlczoge1xuICAgIGJvYXJkOiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbDtcbiAgICB3aGl0ZTogSFRNTEltYWdlRWxlbWVudFtdO1xuICAgIGJsYWNrOiBIVE1MSW1hZ2VFbGVtZW50W107XG4gIH07XG4gIHByaXZhdGUgX3R1cm46IEtpO1xuICBjdXJzb3I6IFtudW1iZXIsIG51bWJlcl07XG4gIGN1cnNvclBvczogRE9NUG9pbnQ7XG4gIG1hdDogbnVtYmVyW11bXTtcbiAgbWFya3M6IHN0cmluZ1tdW107XG4gIG1heGh2OiBudW1iZXI7XG4gIHRyYW5zTWF0OiBET01NYXRyaXg7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IEdob3N0QmFuT3B0aW9uc1BhcmFtcykge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIHRoaXMucmVzb3VyY2VzID0ge1xuICAgICAgYm9hcmQ6IG51bGwsXG4gICAgICB3aGl0ZTogW10sXG4gICAgICBibGFjazogW10sXG4gICAgfTtcbiAgICB0aGlzLm1hdCA9IHplcm9zKFsxOSwgMTldKTtcbiAgICB0aGlzLm1hcmtzID0gZW1wdHkoWzE5LCAxOV0pO1xuICAgIHRoaXMuX3R1cm4gPSBLaS5CbGFjaztcbiAgICB0aGlzLmN1cnNvciA9IFsxOCwgMF07XG4gICAgdGhpcy5jdXJzb3JQb3MgPSBuZXcgRE9NUG9pbnQoKTtcbiAgICB0aGlzLm1heGh2ID0gdGhpcy5vcHRpb25zLmJvYXJkU2l6ZTtcbiAgICB0aGlzLnRyYW5zTWF0ID0gbmV3IERPTU1hdHJpeCgpO1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHNldFR1cm4odHVybjogS2kpIHtcbiAgICB0aGlzLl90dXJuID0gdHVybjtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuY2FudmFzIHx8ICF0aGlzLmRvbSkgcmV0dXJuO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGNvbnN0IHtzaXplfSA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAoc2l6ZSkge1xuICAgICAgY2FudmFzLndpZHRoID0gc2l6ZTtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7Y2xpZW50V2lkdGh9ID0gdGhpcy5kb207XG4gICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBjbGllbnRXaWR0aCArICdweCc7XG4gICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gY2xpZW50V2lkdGggKyAncHgnO1xuICAgICAgY2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihjbGllbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3IoY2xpZW50V2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvKTtcbiAgICB9XG4gIH1cblxuICBpbml0KGRvbTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm1hdCA9IHplcm9zKFsxOSwgMTldKTtcbiAgICB0aGlzLm1hcmtzID0gZW1wdHkoWzE5LCAxOV0pO1xuICAgIHRoaXMudHJhbnNNYXQgPSBuZXcgRE9NTWF0cml4KCk7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmRvbSA9IGRvbTtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuICAgIGRvbS5maXJzdENoaWxkPy5yZW1vdmUoKTtcbiAgICBkb20uYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICB0aGlzLnJlbmRlckludGVyYWN0aXZlKCk7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnM6IEdob3N0QmFuT3B0aW9uc1BhcmFtcykge1xuICAgIHRoaXMub3B0aW9ucyA9IHsuLi50aGlzLm9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICB9XG5cbiAgcmVuZGVySW50ZXJhY3RpdmUoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgaWYgKCFjYW52YXMpIHJldHVybjtcbiAgICBjb25zdCB7cGFkZGluZ30gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3Qge3NwYWNlfSA9IHRoaXMuY2FsY1NwYWNlQW5kUGFkZGluZygpO1xuXG4gICAgY29uc3Qgc2V0Q3Vyc29yV2l0aFJlbmRlciA9IChkb21Qb2ludDogRE9NUG9pbnQpID0+IHtcbiAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy50cmFuc01hdC5pbnZlcnNlKCkudHJhbnNmb3JtUG9pbnQoZG9tUG9pbnQpO1xuICAgICAgY29uc3QgaWR4ID0gTWF0aC5yb3VuZCgocG9pbnQueCAtIHBhZGRpbmcgKyBzcGFjZSAvIDIpIC8gc3BhY2UpO1xuICAgICAgY29uc3QgaWR5ID0gTWF0aC5yb3VuZCgocG9pbnQueSAtIHBhZGRpbmcgKyBzcGFjZSAvIDIpIC8gc3BhY2UpO1xuICAgICAgY29uc3QgeHggPSBpZHggKiBzcGFjZTtcbiAgICAgIGNvbnN0IHl5ID0gaWR5ICogc3BhY2U7XG4gICAgICBjb25zdCBwID0gdGhpcy50cmFuc01hdC50cmFuc2Zvcm1Qb2ludChuZXcgRE9NUG9pbnQoeHgsIHl5KSk7XG4gICAgICB0aGlzLmN1cnNvclBvcyA9IHA7XG4gICAgICB0aGlzLmN1cnNvciA9IFtpZHggLSAxLCBpZHkgLSAxXTtcbiAgICAgIHRoaXMucmVuZGVyKHRoaXMubWF0LCB0aGlzLm1hcmtzKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uVG91Y2hNb3ZlID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB0b3VjaGVzID0gZS5jaGFuZ2VkVG91Y2hlcztcbiAgICAgIGNvbnN0IHBvaW50ID0gbmV3IERPTVBvaW50KFxuICAgICAgICAodG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIGRldmljZVBpeGVsUmF0aW8sXG4gICAgICAgICh0b3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnRvcCkgKiBkZXZpY2VQaXhlbFJhdGlvXG4gICAgICApO1xuICAgICAgc2V0Q3Vyc29yV2l0aFJlbmRlcihwb2ludCk7XG4gICAgfTtcbiAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBwb2ludCA9IG5ldyBET01Qb2ludChcbiAgICAgICAgZS5vZmZzZXRYICogZGV2aWNlUGl4ZWxSYXRpbyxcbiAgICAgICAgZS5vZmZzZXRZICogZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgKTtcbiAgICAgIHNldEN1cnNvcldpdGhSZW5kZXIocG9pbnQpO1xuICAgIH07XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZSkge1xuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRoZW1lKHRoZW1lOiBUaGVtZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGhlbWUgPT09IHRoZW1lKSByZXR1cm47XG4gICAgY29uc3Qgc2hhZG93U3R5bGUgPSAnM3B4IDNweCAzcHggI2FhYWFhYSc7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgdGhpcy5vcHRpb25zLnRoZW1lID0gdGhlbWU7XG4gICAgICBpZiAodGhlbWUgPT09IFRoZW1lLkJsYWNrQW5kV2hpdGUpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLmJveFNoYWRvdyA9ICcwcHggMHB4IDBweCAjMDAwMDAwJztcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoZW1lID09PSBUaGVtZS5TdWJkdWVkXG4gICAgICAgIC8vIHx8XG4gICAgICAgIC8vIHRoZW1lID09PSBUaGVtZS5QaG90b3JlYWxpc3RpYyB8fFxuICAgICAgICAvLyB0aGVtZSA9PT0gVGhlbWUuU2hlbGxTdG9uZSB8fFxuICAgICAgICAvLyB0aGVtZSA9PT0gVGhlbWUuU2xhdGVBbmRTaGVsbCB8fFxuICAgICAgICAvLyB0aGVtZSA9PT0gVGhlbWUuV2FsbnV0XG4gICAgICApIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY29uc3QgYm9hcmRUaGVtZSA9IFJlc291cmNlc1t0aGVtZV07XG4gICAgICAgIGJvYXJkLnNyYyA9IGJvYXJkVGhlbWUuYm9hcmQ7IC8vIFNldCBzb3VyY2UgcGF0aFxuXG4gICAgICAgIGNvbnN0IGJsYWNrcyA9IFJlc291cmNlc1t0aGVtZV0uYmxhY2subWFwKGkgPT4ge1xuICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGltZy5zcmMgPSBpO1xuICAgICAgICAgIHJldHVybiBpbWc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3aGl0ZXMgPSBSZXNvdXJjZXNbdGhlbWVdLndoaXRlLm1hcChpID0+IHtcbiAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpbWcuc3JjID0gaTtcbiAgICAgICAgICByZXR1cm4gaW1nO1xuICAgICAgICB9KTtcbiAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgQXJyYXkuZnJvbShbYm9hcmQsIC4uLmJsYWNrcywgLi4ud2hpdGVzXSlcbiAgICAgICAgICAgIC5maWx0ZXIoaW1nID0+ICFpbWcuY29tcGxldGUpXG4gICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICBpbWcgPT5cbiAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc291cmNlcy5ibGFjayA9IGJsYWNrcztcbiAgICAgICAgICB0aGlzLnJlc291cmNlcy53aGl0ZSA9IHdoaXRlcztcbiAgICAgICAgICB0aGlzLnJlc291cmNlcy5ib2FyZCA9IGJvYXJkO1xuICAgICAgICAgIHRoaXMucmVuZGVyKHRoaXMubWF0LCB0aGlzLm1hcmtzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSBUaGVtZS5GbGF0O1xuICAgICAgICBjYW52YXMuc3R5bGUuYm94U2hhZG93ID0gc2hhZG93U3R5bGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKG1hdD86IG51bWJlcltdW10sIG1hcmtzPzogc3RyaW5nW11bXSkge1xuICAgIGlmIChtYXQpIHRoaXMubWF0ID0gbWF0O1xuICAgIGlmIChtYXJrcykgdGhpcy5tYXJrcyA9IG1hcmtzO1xuICAgIGNvbnN0IHtib2FyZFNpemUsIHpvb20sIGV4dGVuZCwgaW50ZXJhY3RpdmUsIGNvb3JkaW5hdGV9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICB0aGlzLmNsZWFyQ2FudmFzKCk7XG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgY29uc3Qge3Zpc2libGVBcmVhOiB6b29tZWRWaXNpYmxlQXJlYSwgY2VudGVyfSA9IGNhbGNWaXNpYmxlQXJlYShcbiAgICAgICAgdGhpcy5tYXQsXG4gICAgICAgIGJvYXJkU2l6ZSxcbiAgICAgICAgZXh0ZW5kXG4gICAgICApO1xuICAgICAgY29uc3QgdmlzaWJsZUFyZWEgPSB6b29tXG4gICAgICAgID8gem9vbWVkVmlzaWJsZUFyZWFcbiAgICAgICAgOiBbXG4gICAgICAgICAgICBbMCwgMThdLFxuICAgICAgICAgICAgWzAsIDE4XSxcbiAgICAgICAgICBdO1xuXG4gICAgICBpZiAoem9vbSAmJiBjdHgpIHtcbiAgICAgICAgY29uc3Qge3NwYWNlfSA9IHRoaXMuY2FsY1NwYWNlQW5kUGFkZGluZygpO1xuICAgICAgICBjb25zdCB6b29tZWRCb2FyZFNpemUgPSB2aXNpYmxlQXJlYVswXVsxXSAtIHZpc2libGVBcmVhWzBdWzBdICsgMTtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAxIC8gKHpvb21lZEJvYXJkU2l6ZSAvIGJvYXJkU2l6ZSk7XG5cbiAgICAgICAgbGV0IG9mZnNldFggPSAwO1xuICAgICAgICBsZXQgb2Zmc2V0WSA9IDA7XG4gICAgICAgIHN3aXRjaCAoY2VudGVyKSB7XG4gICAgICAgICAgY2FzZSBDZW50ZXIuVG9wTGVmdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQ2VudGVyLlRvcFJpZ2h0OlxuICAgICAgICAgICAgb2Zmc2V0WCA9XG4gICAgICAgICAgICAgIHZpc2libGVBcmVhWzBdWzBdICogc3BhY2UgKiBzY2FsZSArXG4gICAgICAgICAgICAgICh0aGlzLm9wdGlvbnMucGFkZGluZyAvIDIpICogc2NhbGU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIENlbnRlci5Cb3R0b21MZWZ0OlxuICAgICAgICAgICAgb2Zmc2V0WSA9XG4gICAgICAgICAgICAgIHZpc2libGVBcmVhWzFdWzBdICogc3BhY2UgKiBzY2FsZSArXG4gICAgICAgICAgICAgICh0aGlzLm9wdGlvbnMucGFkZGluZyAvIDIpICogc2NhbGU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIENlbnRlci5Cb3R0b21SaWdodDpcbiAgICAgICAgICAgIG9mZnNldFggPVxuICAgICAgICAgICAgICB2aXNpYmxlQXJlYVswXVswXSAqIHNwYWNlICogc2NhbGUgK1xuICAgICAgICAgICAgICAodGhpcy5vcHRpb25zLnBhZGRpbmcgLyAyKSAqIHNjYWxlO1xuICAgICAgICAgICAgb2Zmc2V0WSA9XG4gICAgICAgICAgICAgIHZpc2libGVBcmVhWzFdWzBdICogc3BhY2UgKiBzY2FsZSArXG4gICAgICAgICAgICAgICh0aGlzLm9wdGlvbnMucGFkZGluZyAvIDIpICogc2NhbGU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYW5zTWF0ID0gbmV3IERPTU1hdHJpeCgpO1xuICAgICAgICB0aGlzLnRyYW5zTWF0LnRyYW5zbGF0ZVNlbGYoLW9mZnNldFgsIC1vZmZzZXRZKTtcbiAgICAgICAgdGhpcy50cmFuc01hdC5zY2FsZVNlbGYoc2NhbGUsIHNjYWxlKTtcbiAgICAgICAgY3R4LnNldFRyYW5zZm9ybSh0aGlzLnRyYW5zTWF0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmF3QmFuKCk7XG4gICAgICB0aGlzLmRyYXdCb2FyZExpbmUodmlzaWJsZUFyZWEpO1xuICAgICAgdGhpcy5kcmF3U3RhcnModmlzaWJsZUFyZWEpO1xuICAgICAgaWYgKGludGVyYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuZHJhd0N1cnNvcih2aXNpYmxlQXJlYSk7XG4gICAgICB9XG4gICAgICBpZiAoY29vcmRpbmF0ZSkge1xuICAgICAgICB0aGlzLmRyYXdDb29yZGluYXRlKHZpc2libGVBcmVhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhd1N0b25lcyhtYXQgPz8gdGhpcy5tYXQpO1xuICAgICAgdGhpcy5kcmF3TWFya3MobWF0ID8/IHRoaXMubWF0LCBtYXJrcyA/PyB0aGlzLm1hcmtzKTtcbiAgICAgIC8vIGN0eD8ucmVzdG9yZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyQ2FudmFzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZHJhd01hcmtzID0gKG1hdDogbnVtYmVyW11bXSwgbWFya3M6IHN0cmluZ1tdW10pID0+IHtcbiAgICBjb25zb2xlLmxvZygnbWFya3MnLCBtYXJrcyk7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hcmtzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBtYXJrc1tpXVtqXTtcbiAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCB7c3BhY2UsIHNjYWxlZFBhZGRpbmd9ID0gdGhpcy5jYWxjU3BhY2VBbmRQYWRkaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gc2NhbGVkUGFkZGluZyArIGkgKiBzcGFjZTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBzY2FsZWRQYWRkaW5nICsgaiAqIHNwYWNlO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBNYXJrLkN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYyh4LCB5LCBzcGFjZSAqIDAuMywgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgICAgIGlmIChtYXRbaV1bal0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRyYXdCYW4gPSAoKSA9PiB7XG4gICAgY29uc3Qge2NhbnZhc30gPSB0aGlzO1xuICAgIGNvbnN0IHt0aGVtZX0gPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY2FudmFzLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcycHgnO1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpZiAoY3R4KSB7XG4gICAgICAgIGlmICh0aGVtZSA9PT0gVGhlbWUuQmxhY2tBbmRXaGl0ZSkge1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCAwcHggIzAwMDAwMCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhlbWUgPT09IFRoZW1lLkZsYXQpIHtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNFQ0I1NUEnO1xuICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoZW1lID09PSBUaGVtZS5XYWxudXQpIHtcbiAgICAgICAgICBpZiAodGhpcy5yZXNvdXJjZXMuYm9hcmQpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzLmJvYXJkLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICBjYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlcy5ib2FyZCkge1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IGN0eC5jcmVhdGVQYXR0ZXJuKHRoaXMucmVzb3VyY2VzLmJvYXJkLCAncmVwZWF0Jyk7XG4gICAgICAgICAgICBpZiAocGF0dGVybikge1xuICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gcGF0dGVybjtcbiAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRyYXdCb2FyZExpbmUgPSAoXG4gICAgdmlzaWJsZUFyZWEgPSBbXG4gICAgICBbMCwgMThdLFxuICAgICAgWzAsIDE4XSxcbiAgICBdXG4gICkgPT4ge1xuICAgIGlmICghdGhpcy5jYW52YXMpIHJldHVybjtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChjdHgpIHtcbiAgICAgIGNvbnN0IHtzcGFjZSwgc2NhbGVkUGFkZGluZ30gPSB0aGlzLmNhbGNTcGFjZUFuZFBhZGRpbmcoKTtcblxuICAgICAgY3R4LmxpbmVXaWR0aCA9IDEgKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGZvciAobGV0IGkgPSB2aXNpYmxlQXJlYVswXVswXTsgaSA8PSB2aXNpYmxlQXJlYVswXVsxXTsgaSsrKSB7XG4gICAgICAgIGN0eC5tb3ZlVG8oXG4gICAgICAgICAgaSAqIHNwYWNlICsgc2NhbGVkUGFkZGluZyxcbiAgICAgICAgICBzY2FsZWRQYWRkaW5nICsgdmlzaWJsZUFyZWFbMV1bMF0gKiBzcGFjZVxuICAgICAgICApO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgIGkgKiBzcGFjZSArIHNjYWxlZFBhZGRpbmcsXG4gICAgICAgICAgc3BhY2UgKiB2aXNpYmxlQXJlYVsxXVsxXSArIHNjYWxlZFBhZGRpbmdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSB2aXNpYmxlQXJlYVsxXVswXTsgaSA8PSB2aXNpYmxlQXJlYVsxXVsxXTsgaSsrKSB7XG4gICAgICAgIGN0eC5tb3ZlVG8oXG4gICAgICAgICAgdmlzaWJsZUFyZWFbMF1bMF0gKiBzcGFjZSArIHNjYWxlZFBhZGRpbmcsXG4gICAgICAgICAgaSAqIHNwYWNlICsgc2NhbGVkUGFkZGluZ1xuICAgICAgICApO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgIHZpc2libGVBcmVhWzBdWzFdICogc3BhY2UgKyBzY2FsZWRQYWRkaW5nLFxuICAgICAgICAgIGkgKiBzcGFjZSArIHNjYWxlZFBhZGRpbmdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH07XG5cbiAgZHJhd1N0YXJzID0gKFxuICAgIHZpc2libGVBcmVhID0gW1xuICAgICAgWzAsIDE4XSxcbiAgICAgIFswLCAxOF0sXG4gICAgXVxuICApID0+IHtcbiAgICBpZiAoIXRoaXMuY2FudmFzKSByZXR1cm47XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoY3R4KSB7XG4gICAgICBjb25zdCB7c3BhY2UsIHNjYWxlZFBhZGRpbmd9ID0gdGhpcy5jYWxjU3BhY2VBbmRQYWRkaW5nKCk7XG4gICAgICAvLyBEcmF3aW5nIHN0YXJcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIFszLCA5LCAxNV0uZm9yRWFjaChpID0+IHtcbiAgICAgICAgWzMsIDksIDE1XS5mb3JFYWNoKGogPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGkgPiB2aXNpYmxlQXJlYVswXVswXSAmJlxuICAgICAgICAgICAgaSA8IHZpc2libGVBcmVhWzBdWzFdICYmXG4gICAgICAgICAgICBqID4gdmlzaWJsZUFyZWFbMV1bMF0gJiZcbiAgICAgICAgICAgIGogPCB2aXNpYmxlQXJlYVsxXVsxXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgICAgaSAqIHNwYWNlICsgc2NhbGVkUGFkZGluZyxcbiAgICAgICAgICAgICAgaiAqIHNwYWNlICsgc2NhbGVkUGFkZGluZyxcbiAgICAgICAgICAgICAgMyAqIGRldmljZVBpeGVsUmF0aW8sXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDIgKiBNYXRoLlBJLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZHJhd0Nvb3JkaW5hdGUgPSAoXG4gICAgdmlzaWJsZUFyZWEgPSBbXG4gICAgICBbMCwgMThdLFxuICAgICAgWzAsIDE4XSxcbiAgICBdXG4gICkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGlmICghY2FudmFzKSByZXR1cm47XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3Qge3NwYWNlLCBzY2FsZWRQYWRkaW5nfSA9IHRoaXMuY2FsY1NwYWNlQW5kUGFkZGluZygpO1xuICAgIGlmIChjdHgpIHtcbiAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XG4gICAgICBjdHguZm9udCA9IGBib2xkICR7c3BhY2UgLyAyLjh9cHggSGVsdmV0aWNhYDtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc3BhY2UgLyAzO1xuICAgICAgQTFfTEVUVEVSUy5mb3JFYWNoKChsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gc3BhY2UgKiBpbmRleCArIHNjYWxlZFBhZGRpbmc7XG4gICAgICAgIGlmIChpbmRleCA+PSB2aXNpYmxlQXJlYVswXVswXSAmJiBpbmRleCA8PSB2aXNpYmxlQXJlYVswXVsxXSkge1xuICAgICAgICAgIGN0eC5maWxsVGV4dChsLCB4LCAwICsgb2Zmc2V0KTtcbiAgICAgICAgICBjdHguZmlsbFRleHQobCwgeCwgY2FudmFzLmhlaWdodCAtIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgQTFfTlVNQkVSUy5mb3JFYWNoKChsOiBudW1iZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHkgPSBzcGFjZSAqIGluZGV4ICsgc2NhbGVkUGFkZGluZztcbiAgICAgICAgaWYgKGluZGV4ID49IHZpc2libGVBcmVhWzFdWzBdICYmIGluZGV4IDw9IHZpc2libGVBcmVhWzFdWzFdKSB7XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KGwudG9TdHJpbmcoKSwgb2Zmc2V0LCB5KTtcbiAgICAgICAgICBjdHguZmlsbFRleHQobC50b1N0cmluZygpLCBjYW52YXMud2lkdGggLSBvZmZzZXQsIHkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY2FsY1NwYWNlQW5kUGFkZGluZyA9ICgpID0+IHtcbiAgICBsZXQgc3BhY2UgPSAwO1xuICAgIGxldCBzY2FsZWRQYWRkaW5nID0gMDtcbiAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgIGNvbnN0IHtwYWRkaW5nLCBib2FyZFNpemV9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgLy8gc2NhbGVkUGFkZGluZyA9IHBhZGRpbmcgKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgc2NhbGVkUGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICBzcGFjZSA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIHBhZGRpbmcgKiAyKSAvIGJvYXJkU2l6ZTtcbiAgICAgIHNjYWxlZFBhZGRpbmcgPSBzY2FsZWRQYWRkaW5nICsgc3BhY2UgLyAyO1xuICAgIH1cbiAgICByZXR1cm4ge3NwYWNlLCBzY2FsZWRQYWRkaW5nfTtcbiAgfTtcblxuICBkcmF3Q3Vyc29yID0gKHZpc2libGVBcmVhOiBudW1iZXJbXVtdKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc3Qge3BhZGRpbmd9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjb25zdCB7c3BhY2V9ID0gdGhpcy5jYWxjU3BhY2VBbmRQYWRkaW5nKCk7XG5cbiAgICAgIGNvbnN0IFtpZHgsIGlkeV0gPSB0aGlzLmN1cnNvcjtcbiAgICAgIGlmIChpZHggPCB2aXNpYmxlQXJlYVswXVswXSB8fCBpZHggPiB2aXNpYmxlQXJlYVswXVsxXSkgcmV0dXJuO1xuICAgICAgaWYgKGlkeSA8IHZpc2libGVBcmVhWzFdWzBdIHx8IGlkeSA+IHZpc2libGVBcmVhWzFdWzFdKSByZXR1cm47XG4gICAgICBjb25zdCB4ID0gaWR4ICogc3BhY2UgKyBzcGFjZSAvIDIgKyBwYWRkaW5nO1xuICAgICAgY29uc3QgeSA9IGlkeSAqIHNwYWNlICsgc3BhY2UgLyAyICsgcGFkZGluZztcblxuICAgICAgaWYgKGN0eCkge1xuICAgICAgICBjb25zdCBzaXplID0gc3BhY2UgKiAwLjQ7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh4LCB5LCBzaXplLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjY7XG4gICAgICAgIGlmICh0aGlzLl90dXJuID09PSBLaS5CbGFjaykge1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3R1cm4gPT09IEtpLldoaXRlKSB7XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRkYnO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGRic7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkcmF3U3RvbmVzID0gKG1hdHJpeDogbnVtYmVyW11bXSkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGNvbnN0IHt0aGVtZX0gPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXhbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1hdHJpeFtpXVtqXTtcbiAgICAgICAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICBjb25zdCB7c3BhY2UsIHNjYWxlZFBhZGRpbmd9ID0gdGhpcy5jYWxjU3BhY2VBbmRQYWRkaW5nKCk7XG4gICAgICAgICAgICAgIGNvbnN0IHggPSBzY2FsZWRQYWRkaW5nICsgaSAqIHNwYWNlO1xuICAgICAgICAgICAgICBjb25zdCB5ID0gc2NhbGVkUGFkZGluZyArIGogKiBzcGFjZTtcblxuICAgICAgICAgICAgICBjb25zdCByYXRpbyA9IDAuNDY7XG4gICAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGVtZSAhPT0gVGhlbWUuU3ViZHVlZCAmJlxuICAgICAgICAgICAgICAgIHRoZW1lICE9PSBUaGVtZS5CbGFja0FuZFdoaXRlICYmXG4gICAgICAgICAgICAgICAgdGhlbWUgIT09IFRoZW1lLkZsYXRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSAzO1xuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gMztcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSAnIzU1NSc7XG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGVtZSA9PT0gVGhlbWUuQmxhY2tBbmRXaGl0ZSB8fCB0aGVtZSA9PT0gVGhlbWUuRmxhdCkge1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKHgsIHksIHNwYWNlICogcmF0aW8sIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSBpICsgMTAgKyBqO1xuICAgICAgICAgICAgICAgIGxldCBpbWc7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICBpbWcgPSB0aGlzLnJlc291cmNlcy5ibGFja1ttb2QgJSB0aGlzLnJlc291cmNlcy5ibGFjay5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpbWcgPSB0aGlzLnJlc291cmNlcy53aGl0ZVttb2QgJSB0aGlzLnJlc291cmNlcy53aGl0ZS5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW1nKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gc3BhY2UgKiByYXRpbyAqIDI7XG4gICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgeCAtIHNpemUgLyAyLCB5IC0gc2l6ZSAvIDIsIHNpemUsIHNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJiYXNlU2xpY2UiLCJhcnJheSIsInN0YXJ0IiwiZW5kIiwiaW5kZXgiLCJsZW5ndGgiLCJyZXN1bHQiLCJBcnJheSIsIl9iYXNlU2xpY2UiLCJlcSIsInZhbHVlIiwib3RoZXIiLCJlcV8xIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsIk9iamVjdCIsIl9mcmVlR2xvYmFsIiwicmVxdWlyZSQkMCIsImZyZWVTZWxmIiwic2VsZiIsInJvb3QiLCJGdW5jdGlvbiIsIl9yb290IiwiU3ltYm9sIiwiX1N5bWJvbCIsIm9iamVjdFByb3RvIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInRvU3RyaW5nIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsInVuZGVmaW5lZCIsImdldFJhd1RhZyIsImlzT3duIiwiY2FsbCIsInRhZyIsInVubWFza2VkIiwiZSIsIl9nZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsIl9vYmplY3RUb1N0cmluZyIsInJlcXVpcmUkJDEiLCJyZXF1aXJlJCQyIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsImJhc2VHZXRUYWciLCJfYmFzZUdldFRhZyIsImlzT2JqZWN0IiwidHlwZSIsImlzT2JqZWN0XzEiLCJhc3luY1RhZyIsImZ1bmNUYWciLCJnZW5UYWciLCJwcm94eVRhZyIsImlzRnVuY3Rpb24iLCJpc0Z1bmN0aW9uXzEiLCJNQVhfU0FGRV9JTlRFR0VSIiwiaXNMZW5ndGgiLCJpc0xlbmd0aF8xIiwiaXNBcnJheUxpa2UiLCJpc0FycmF5TGlrZV8xIiwicmVJc1VpbnQiLCJpc0luZGV4IiwidGVzdCIsIl9pc0luZGV4IiwicmVxdWlyZSQkMyIsImlzSXRlcmF0ZWVDYWxsIiwib2JqZWN0IiwiX2lzSXRlcmF0ZWVDYWxsIiwicmVXaGl0ZXNwYWNlIiwidHJpbW1lZEVuZEluZGV4Iiwic3RyaW5nIiwiY2hhckF0IiwiX3RyaW1tZWRFbmRJbmRleCIsInJlVHJpbVN0YXJ0IiwiYmFzZVRyaW0iLCJzbGljZSIsInJlcGxhY2UiLCJfYmFzZVRyaW0iLCJpc09iamVjdExpa2UiLCJpc09iamVjdExpa2VfMSIsInN5bWJvbFRhZyIsImlzU3ltYm9sIiwiaXNTeW1ib2xfMSIsIk5BTiIsInJlSXNCYWRIZXgiLCJyZUlzQmluYXJ5IiwicmVJc09jdGFsIiwiZnJlZVBhcnNlSW50IiwicGFyc2VJbnQiLCJ0b051bWJlciIsInZhbHVlT2YiLCJpc0JpbmFyeSIsInRvTnVtYmVyXzEiLCJJTkZJTklUWSIsIk1BWF9JTlRFR0VSIiwidG9GaW5pdGUiLCJzaWduIiwidG9GaW5pdGVfMSIsInRvSW50ZWdlciIsInJlbWFpbmRlciIsInRvSW50ZWdlcl8xIiwibmF0aXZlQ2VpbCIsIk1hdGgiLCJjZWlsIiwibmF0aXZlTWF4IiwibWF4IiwiY2h1bmsiLCJzaXplIiwiZ3VhcmQiLCJyZXNJbmRleCIsImNodW5rXzEiLCJLaSIsIlRoZW1lIiwiQ2VudGVyIiwiTWFyayIsImxpc3RDYWNoZUNsZWFyIiwiX19kYXRhX18iLCJfbGlzdENhY2hlQ2xlYXIiLCJhc3NvY0luZGV4T2YiLCJrZXkiLCJfYXNzb2NJbmRleE9mIiwiYXJyYXlQcm90byIsInNwbGljZSIsImxpc3RDYWNoZURlbGV0ZSIsImRhdGEiLCJsYXN0SW5kZXgiLCJwb3AiLCJfbGlzdENhY2hlRGVsZXRlIiwibGlzdENhY2hlR2V0IiwiX2xpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsIl9saXN0Q2FjaGVIYXMiLCJsaXN0Q2FjaGVTZXQiLCJwdXNoIiwiX2xpc3RDYWNoZVNldCIsInJlcXVpcmUkJDQiLCJMaXN0Q2FjaGUiLCJlbnRyaWVzIiwiY2xlYXIiLCJlbnRyeSIsInNldCIsImdldCIsImhhcyIsIl9MaXN0Q2FjaGUiLCJzdGFja0NsZWFyIiwiX3N0YWNrQ2xlYXIiLCJzdGFja0RlbGV0ZSIsIl9zdGFja0RlbGV0ZSIsInN0YWNrR2V0IiwiX3N0YWNrR2V0Iiwic3RhY2tIYXMiLCJfc3RhY2tIYXMiLCJjb3JlSnNEYXRhIiwiX2NvcmVKc0RhdGEiLCJtYXNrU3JjS2V5IiwidWlkIiwiZXhlYyIsImtleXMiLCJJRV9QUk9UTyIsImlzTWFza2VkIiwiZnVuYyIsIl9pc01hc2tlZCIsImZ1bmNQcm90byIsImZ1bmNUb1N0cmluZyIsInRvU291cmNlIiwiX3RvU291cmNlIiwicmVSZWdFeHBDaGFyIiwicmVJc0hvc3RDdG9yIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsImJhc2VJc05hdGl2ZSIsInBhdHRlcm4iLCJfYmFzZUlzTmF0aXZlIiwiZ2V0VmFsdWUiLCJfZ2V0VmFsdWUiLCJnZXROYXRpdmUiLCJfZ2V0TmF0aXZlIiwiTWFwIiwiX01hcCIsIm5hdGl2ZUNyZWF0ZSIsIl9uYXRpdmVDcmVhdGUiLCJoYXNoQ2xlYXIiLCJfaGFzaENsZWFyIiwiaGFzaERlbGV0ZSIsIl9oYXNoRGVsZXRlIiwiSEFTSF9VTkRFRklORUQiLCJoYXNoR2V0IiwiX2hhc2hHZXQiLCJoYXNoSGFzIiwiX2hhc2hIYXMiLCJoYXNoU2V0IiwiX2hhc2hTZXQiLCJIYXNoIiwiX0hhc2giLCJtYXBDYWNoZUNsZWFyIiwiX21hcENhY2hlQ2xlYXIiLCJpc0tleWFibGUiLCJfaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsIm1hcCIsIl9nZXRNYXBEYXRhIiwibWFwQ2FjaGVEZWxldGUiLCJfbWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIl9tYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwiX21hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJfbWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsIl9NYXBDYWNoZSIsIkxBUkdFX0FSUkFZX1NJWkUiLCJzdGFja1NldCIsInBhaXJzIiwiX3N0YWNrU2V0IiwicmVxdWlyZSQkNSIsIlN0YWNrIiwiX1N0YWNrIiwiYXJyYXlFYWNoIiwiaXRlcmF0ZWUiLCJfYXJyYXlFYWNoIiwiZGVmaW5lUHJvcGVydHkiLCJfZGVmaW5lUHJvcGVydHkiLCJiYXNlQXNzaWduVmFsdWUiLCJfYmFzZUFzc2lnblZhbHVlIiwiYXNzaWduVmFsdWUiLCJvYmpWYWx1ZSIsIl9hc3NpZ25WYWx1ZSIsImNvcHlPYmplY3QiLCJzb3VyY2UiLCJwcm9wcyIsImN1c3RvbWl6ZXIiLCJpc05ldyIsIm5ld1ZhbHVlIiwiX2NvcHlPYmplY3QiLCJiYXNlVGltZXMiLCJuIiwiX2Jhc2VUaW1lcyIsImFyZ3NUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJfYmFzZUlzQXJndW1lbnRzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpc0FyZ3VtZW50cyIsImFyZ3VtZW50cyIsImlzQXJndW1lbnRzXzEiLCJpc0FycmF5IiwiaXNBcnJheV8xIiwic3R1YkZhbHNlIiwic3R1YkZhbHNlXzEiLCJmcmVlRXhwb3J0cyIsImV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0J1ZmZlciIsImFycmF5VGFnIiwiYm9vbFRhZyIsImRhdGVUYWciLCJlcnJvclRhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsIm9iamVjdFRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsIndlYWtNYXBUYWciLCJhcnJheUJ1ZmZlclRhZyIsImRhdGFWaWV3VGFnIiwiZmxvYXQzMlRhZyIsImZsb2F0NjRUYWciLCJpbnQ4VGFnIiwiaW50MTZUYWciLCJpbnQzMlRhZyIsInVpbnQ4VGFnIiwidWludDhDbGFtcGVkVGFnIiwidWludDE2VGFnIiwidWludDMyVGFnIiwidHlwZWRBcnJheVRhZ3MiLCJiYXNlSXNUeXBlZEFycmF5IiwiX2Jhc2VJc1R5cGVkQXJyYXkiLCJiYXNlVW5hcnkiLCJfYmFzZVVuYXJ5IiwiZnJlZVByb2Nlc3MiLCJwcm9jZXNzIiwibm9kZVV0aWwiLCJ0eXBlcyIsInJlcXVpcmUiLCJiaW5kaW5nIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheV8xIiwiYXJyYXlMaWtlS2V5cyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsIlN0cmluZyIsIl9hcnJheUxpa2VLZXlzIiwiaXNQcm90b3R5cGUiLCJDdG9yIiwiY29uc3RydWN0b3IiLCJwcm90byIsIl9pc1Byb3RvdHlwZSIsIm92ZXJBcmciLCJ0cmFuc2Zvcm0iLCJhcmciLCJfb3ZlckFyZyIsIm5hdGl2ZUtleXMiLCJfbmF0aXZlS2V5cyIsImJhc2VLZXlzIiwiX2Jhc2VLZXlzIiwia2V5c18xIiwiYmFzZUFzc2lnbiIsIl9iYXNlQXNzaWduIiwibmF0aXZlS2V5c0luIiwiX25hdGl2ZUtleXNJbiIsImJhc2VLZXlzSW4iLCJpc1Byb3RvIiwiX2Jhc2VLZXlzSW4iLCJrZXlzSW4iLCJrZXlzSW5fMSIsImJhc2VBc3NpZ25JbiIsIl9iYXNlQXNzaWduSW4iLCJhbGxvY1Vuc2FmZSIsImNsb25lQnVmZmVyIiwiYnVmZmVyIiwiaXNEZWVwIiwiY29weSIsImNvcHlBcnJheSIsIl9jb3B5QXJyYXkiLCJhcnJheUZpbHRlciIsInByZWRpY2F0ZSIsIl9hcnJheUZpbHRlciIsInN0dWJBcnJheSIsInN0dWJBcnJheV8xIiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldFN5bWJvbHMiLCJzeW1ib2wiLCJfZ2V0U3ltYm9scyIsImNvcHlTeW1ib2xzIiwiX2NvcHlTeW1ib2xzIiwiYXJyYXlQdXNoIiwidmFsdWVzIiwib2Zmc2V0IiwiX2FycmF5UHVzaCIsImdldFByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwiX2dldFByb3RvdHlwZSIsImdldFN5bWJvbHNJbiIsIl9nZXRTeW1ib2xzSW4iLCJjb3B5U3ltYm9sc0luIiwiX2NvcHlTeW1ib2xzSW4iLCJiYXNlR2V0QWxsS2V5cyIsImtleXNGdW5jIiwic3ltYm9sc0Z1bmMiLCJfYmFzZUdldEFsbEtleXMiLCJnZXRBbGxLZXlzIiwiX2dldEFsbEtleXMiLCJnZXRBbGxLZXlzSW4iLCJfZ2V0QWxsS2V5c0luIiwiRGF0YVZpZXciLCJfRGF0YVZpZXciLCJQcm9taXNlIiwiX1Byb21pc2UiLCJTZXQiLCJfU2V0IiwiV2Vha01hcCIsIl9XZWFrTWFwIiwicmVxdWlyZSQkNiIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJnZXRUYWciLCJBcnJheUJ1ZmZlciIsInJlc29sdmUiLCJjdG9yU3RyaW5nIiwiX2dldFRhZyIsImluaXRDbG9uZUFycmF5IiwiaW5wdXQiLCJfaW5pdENsb25lQXJyYXkiLCJVaW50OEFycmF5IiwiX1VpbnQ4QXJyYXkiLCJjbG9uZUFycmF5QnVmZmVyIiwiYXJyYXlCdWZmZXIiLCJieXRlTGVuZ3RoIiwiX2Nsb25lQXJyYXlCdWZmZXIiLCJjbG9uZURhdGFWaWV3IiwiZGF0YVZpZXciLCJieXRlT2Zmc2V0IiwiX2Nsb25lRGF0YVZpZXciLCJyZUZsYWdzIiwiY2xvbmVSZWdFeHAiLCJyZWdleHAiLCJfY2xvbmVSZWdFeHAiLCJzeW1ib2xQcm90byIsInN5bWJvbFZhbHVlT2YiLCJjbG9uZVN5bWJvbCIsIl9jbG9uZVN5bWJvbCIsImNsb25lVHlwZWRBcnJheSIsInR5cGVkQXJyYXkiLCJfY2xvbmVUeXBlZEFycmF5IiwiaW5pdENsb25lQnlUYWciLCJfaW5pdENsb25lQnlUYWciLCJvYmplY3RDcmVhdGUiLCJjcmVhdGUiLCJiYXNlQ3JlYXRlIiwiX2Jhc2VDcmVhdGUiLCJpbml0Q2xvbmVPYmplY3QiLCJfaW5pdENsb25lT2JqZWN0IiwiYmFzZUlzTWFwIiwiX2Jhc2VJc01hcCIsIm5vZGVJc01hcCIsImlzTWFwIiwiaXNNYXBfMSIsImJhc2VJc1NldCIsIl9iYXNlSXNTZXQiLCJub2RlSXNTZXQiLCJpc1NldCIsImlzU2V0XzEiLCJyZXF1aXJlJCQ3IiwicmVxdWlyZSQkOCIsInJlcXVpcmUkJDkiLCJyZXF1aXJlJCQxMCIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTIiLCJyZXF1aXJlJCQxMyIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTUiLCJyZXF1aXJlJCQxNiIsInJlcXVpcmUkJDE3IiwicmVxdWlyZSQkMTgiLCJyZXF1aXJlJCQxOSIsInJlcXVpcmUkJDIwIiwicmVxdWlyZSQkMjEiLCJDTE9ORV9ERUVQX0ZMQUciLCJDTE9ORV9GTEFUX0ZMQUciLCJDTE9ORV9TWU1CT0xTX0ZMQUciLCJjbG9uZWFibGVUYWdzIiwiYmFzZUNsb25lIiwiYml0bWFzayIsInN0YWNrIiwiaXNGbGF0IiwiaXNGdWxsIiwiaXNGdW5jIiwic3RhY2tlZCIsImZvckVhY2giLCJzdWJWYWx1ZSIsImFkZCIsIl9iYXNlQ2xvbmUiLCJjbG9uZURlZXAiLCJjbG9uZURlZXBfMSIsImNsb25lIiwiY2xvbmVfMSIsIkNvbnN0LlNHRl9MRVRURVJTIiwiQ29uc3QuQTFfTEVUVEVSUyIsIkNvbnN0LkExX05VTUJFUlMiLCJpbWciLCJTdWJkdWVkQm9hcmQiLCJTdWJkdWVkQmxhY2siLCJTdWJkdWVkV2hpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsU0FBU0EsV0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUNwQyxNQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFiO0FBQUEsTUFDSUMsTUFBTSxHQUFHSixLQUFLLENBQUNJLE1BRG5COztBQUdBLE1BQUlILEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDYkEsSUFBQUEsS0FBSyxHQUFHLENBQUNBLEtBQUQsR0FBU0csTUFBVCxHQUFrQixDQUFsQixHQUF1QkEsTUFBTSxHQUFHSCxLQUF4QztBQUNEOztBQUNEQyxFQUFBQSxHQUFHLEdBQUdBLEdBQUcsR0FBR0UsTUFBTixHQUFlQSxNQUFmLEdBQXdCRixHQUE5Qjs7QUFDQSxNQUFJQSxHQUFHLEdBQUcsQ0FBVixFQUFhO0FBQ1hBLElBQUFBLEdBQUcsSUFBSUUsTUFBUDtBQUNEOztBQUNEQSxFQUFBQSxNQUFNLEdBQUdILEtBQUssR0FBR0MsR0FBUixHQUFjLENBQWQsR0FBb0JBLEdBQUcsR0FBR0QsS0FBUCxLQUFrQixDQUE5QztBQUNBQSxFQUFBQSxLQUFLLE1BQU0sQ0FBWDtBQUVBLE1BQUlJLE1BQU0sR0FBR0MsS0FBSyxDQUFDRixNQUFELENBQWxCOztBQUNBLFNBQU8sRUFBRUQsS0FBRixHQUFVQyxNQUFqQixFQUF5QjtBQUN2QkMsSUFBQUEsTUFBTSxDQUFDRixLQUFELENBQU4sR0FBZ0JILEtBQUssQ0FBQ0csS0FBSyxHQUFHRixLQUFULENBQXJCO0FBQ0Q7O0FBQ0QsU0FBT0ksTUFBUDtBQUNEOztJQUVERSxVQUFjLEdBQUdSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFakIsU0FBU1MsSUFBVCxDQUFZQyxLQUFaLEVBQW1CQyxLQUFuQixFQUEwQjtBQUN4QixTQUFPRCxLQUFLLEtBQUtDLEtBQVYsSUFBb0JELEtBQUssS0FBS0EsS0FBVixJQUFtQkMsS0FBSyxLQUFLQSxLQUF4RDtBQUNEOztJQUVEQyxJQUFjLEdBQUdIOztBQ25DakIsSUFBSUksWUFBVSxHQUFHLFFBQU9DLGNBQVAsS0FBaUIsUUFBakIsSUFBNkJBLGNBQTdCLElBQXVDQSxjQUFBQSxDQUFPQyxNQUFQRCxLQUFrQkMsTUFBekQsSUFBbUVELGNBQXBGO0lBRUFFLFdBQWMsR0FBR0g7O0FDSGpCLElBQUlBLFVBQVUsR0FBR0ksV0FBakI7QUFFQTs7QUFDQSxJQUFJQyxRQUFRLEdBQUcsUUFBT0MsSUFBUCx5Q0FBT0EsSUFBUCxNQUFlLFFBQWYsSUFBMkJBLElBQTNCLElBQW1DQSxJQUFJLENBQUNKLE1BQUwsS0FBZ0JBLE1BQW5ELElBQTZESSxJQUE1RTtBQUVBOztBQUNBLElBQUlDLE1BQUksR0FBR1AsVUFBVSxJQUFJSyxRQUFkLElBQTBCRyxRQUFRLENBQUMsYUFBRCxDQUFSLEVBQXJDO0lBRUFDLEtBQWMsR0FBR0Y7O0FDUmpCLElBQUlBLE1BQUksR0FBR0gsS0FBWDtBQUVBOztBQUNBLElBQUlNLFFBQU0sR0FBR0gsTUFBSSxDQUFDRyxNQUFsQjtJQUVBQyxTQUFjLEdBQUdEOztBQ0xqQixJQUFJQSxTQUFNLEdBQUdOLFNBQWI7QUFFQTs7QUFDQSxJQUFJUSxhQUFXLEdBQUdWLE1BQU0sQ0FBQ1csU0FBekI7QUFFQTs7QUFDQSxJQUFJQyxnQkFBYyxHQUFHRixhQUFXLENBQUNFLGNBQWpDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQyxzQkFBb0IsR0FBR0gsYUFBVyxDQUFDSSxRQUF2QztBQUVBOztBQUNBLElBQUlDLGdCQUFjLEdBQUdQLFNBQU0sR0FBR0EsU0FBTSxDQUFDUSxXQUFWLEdBQXdCQyxTQUFuRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLFdBQVQsQ0FBbUJ2QixLQUFuQixFQUEwQjtBQUN4QixNQUFJd0IsS0FBSyxHQUFHUCxnQkFBYyxDQUFDUSxJQUFmLENBQW9CekIsS0FBcEIsRUFBMkJvQixnQkFBM0IsQ0FBWjtBQUFBLE1BQ0lNLEdBQUcsR0FBRzFCLEtBQUssQ0FBQ29CLGdCQUFELENBRGY7O0FBR0EsTUFBSTtBQUNGcEIsSUFBQUEsS0FBSyxDQUFDb0IsZ0JBQUQsQ0FBTCxHQUF3QkUsU0FBeEI7QUFDQSxRQUFJSyxRQUFRLEdBQUcsSUFBZjtBQUNELEdBSEQsQ0FHRSxPQUFPQyxDQUFQLEVBQVU7O0FBRVosTUFBSWhDLE1BQU0sR0FBR3NCLHNCQUFvQixDQUFDTyxJQUFyQixDQUEwQnpCLEtBQTFCLENBQWI7O0FBQ0EsTUFBSTJCLFFBQUosRUFBYztBQUNaLFFBQUlILEtBQUosRUFBVztBQUNUeEIsTUFBQUEsS0FBSyxDQUFDb0IsZ0JBQUQsQ0FBTCxHQUF3Qk0sR0FBeEI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPMUIsS0FBSyxDQUFDb0IsZ0JBQUQsQ0FBWjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT3hCLE1BQVA7QUFDRDs7SUFFRGlDLFVBQWMsR0FBR047OztBQzVDakIsSUFBSVIsYUFBVyxHQUFHVixNQUFNLENBQUNXLFNBQXpCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJRSxvQkFBb0IsR0FBR0gsYUFBVyxDQUFDSSxRQUF2QztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNXLGdCQUFULENBQXdCOUIsS0FBeEIsRUFBK0I7QUFDN0IsU0FBT2tCLG9CQUFvQixDQUFDTyxJQUFyQixDQUEwQnpCLEtBQTFCLENBQVA7QUFDRDs7SUFFRCtCLGVBQWMsR0FBR0Q7O0FDckJqQixJQUFJakIsU0FBTSxHQUFHTixTQUFiO0FBQUEsSUFDSWdCLFNBQVMsR0FBR1MsVUFEaEI7QUFBQSxJQUVJRixjQUFjLEdBQUdHLGVBRnJCO0FBSUE7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHLGVBQWQ7QUFBQSxJQUNJQyxZQUFZLEdBQUcsb0JBRG5CO0FBR0E7O0FBQ0EsSUFBSWYsY0FBYyxHQUFHUCxTQUFNLEdBQUdBLFNBQU0sQ0FBQ1EsV0FBVixHQUF3QkMsU0FBbkQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTYyxZQUFULENBQW9CcEMsS0FBcEIsRUFBMkI7QUFDekIsTUFBSUEsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDakIsV0FBT0EsS0FBSyxLQUFLc0IsU0FBVixHQUFzQmEsWUFBdEIsR0FBcUNELE9BQTVDO0FBQ0Q7O0FBQ0QsU0FBUWQsY0FBYyxJQUFJQSxjQUFjLElBQUlmLE1BQU0sQ0FBQ0wsS0FBRCxDQUEzQyxHQUNIdUIsU0FBUyxDQUFDdkIsS0FBRCxDQUROLEdBRUg4QixjQUFjLENBQUM5QixLQUFELENBRmxCO0FBR0Q7O0lBRURxQyxXQUFjLEdBQUdEOztBQ0ZqQixTQUFTRSxVQUFULENBQWtCdEMsS0FBbEIsRUFBeUI7QUFDdkIsTUFBSXVDLElBQUksV0FBVXZDLEtBQVYsQ0FBUjs7QUFDQSxTQUFPQSxLQUFLLElBQUksSUFBVCxLQUFrQnVDLElBQUksSUFBSSxRQUFSLElBQW9CQSxJQUFJLElBQUksVUFBOUMsQ0FBUDtBQUNEOztJQUVEQyxVQUFjLEdBQUdGOztBQzlCakIsSUFBSUYsWUFBVSxHQUFHN0IsV0FBakI7QUFBQSxJQUNJK0IsVUFBUSxHQUFHTixVQURmO0FBR0E7O0FBQ0EsSUFBSVMsUUFBUSxHQUFHLHdCQUFmO0FBQUEsSUFDSUMsU0FBTyxHQUFHLG1CQURkO0FBQUEsSUFFSUMsUUFBTSxHQUFHLDRCQUZiO0FBQUEsSUFHSUMsUUFBUSxHQUFHLGdCQUhmO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxZQUFULENBQW9CN0MsS0FBcEIsRUFBMkI7QUFDekIsTUFBSSxDQUFDc0MsVUFBUSxDQUFDdEMsS0FBRCxDQUFiLEVBQXNCO0FBQ3BCLFdBQU8sS0FBUDtBQUNELEdBSHdCOzs7O0FBTXpCLE1BQUkwQixHQUFHLEdBQUdVLFlBQVUsQ0FBQ3BDLEtBQUQsQ0FBcEI7QUFDQSxTQUFPMEIsR0FBRyxJQUFJZ0IsU0FBUCxJQUFrQmhCLEdBQUcsSUFBSWlCLFFBQXpCLElBQW1DakIsR0FBRyxJQUFJZSxRQUExQyxJQUFzRGYsR0FBRyxJQUFJa0IsUUFBcEU7QUFDRDs7SUFFREUsWUFBYyxHQUFHRDs7O0FDbkNqQixJQUFJRSxrQkFBZ0IsR0FBRyxnQkFBdkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLFVBQVQsQ0FBa0JoRCxLQUFsQixFQUF5QjtBQUN2QixTQUFPLE9BQU9BLEtBQVAsSUFBZ0IsUUFBaEIsSUFDTEEsS0FBSyxHQUFHLENBQUMsQ0FESixJQUNTQSxLQUFLLEdBQUcsQ0FBUixJQUFhLENBRHRCLElBQzJCQSxLQUFLLElBQUkrQyxrQkFEM0M7QUFFRDs7SUFFREUsVUFBYyxHQUFHRDs7QUNsQ2pCLElBQUlILFlBQVUsR0FBR3RDLFlBQWpCO0FBQUEsSUFDSXlDLFVBQVEsR0FBR2hCLFVBRGY7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTa0IsYUFBVCxDQUFxQmxELEtBQXJCLEVBQTRCO0FBQzFCLFNBQU9BLEtBQUssSUFBSSxJQUFULElBQWlCZ0QsVUFBUSxDQUFDaEQsS0FBSyxDQUFDTCxNQUFQLENBQXpCLElBQTJDLENBQUNrRCxZQUFVLENBQUM3QyxLQUFELENBQTdEO0FBQ0Q7O0lBRURtRCxhQUFjLEdBQUdEOztBQy9CakIsSUFBSUgsZ0JBQWdCLEdBQUcsZ0JBQXZCO0FBRUE7O0FBQ0EsSUFBSUssUUFBUSxHQUFHLGtCQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxTQUFULENBQWlCckQsS0FBakIsRUFBd0JMLE1BQXhCLEVBQWdDO0FBQzlCLE1BQUk0QyxJQUFJLFdBQVV2QyxLQUFWLENBQVI7O0FBQ0FMLEVBQUFBLE1BQU0sR0FBR0EsTUFBTSxJQUFJLElBQVYsR0FBaUJvRCxnQkFBakIsR0FBb0NwRCxNQUE3QztBQUVBLFNBQU8sQ0FBQyxDQUFDQSxNQUFGLEtBQ0o0QyxJQUFJLElBQUksUUFBUixJQUNFQSxJQUFJLElBQUksUUFBUixJQUFvQmEsUUFBUSxDQUFDRSxJQUFULENBQWN0RCxLQUFkLENBRmxCLEtBR0FBLEtBQUssR0FBRyxDQUFDLENBQVQsSUFBY0EsS0FBSyxHQUFHLENBQVIsSUFBYSxDQUEzQixJQUFnQ0EsS0FBSyxHQUFHTCxNQUgvQztBQUlEOztJQUVENEQsUUFBYyxHQUFHRjs7QUN4QmpCLElBQUl0RCxJQUFFLEdBQUdRLElBQVQ7QUFBQSxJQUNJMkMsYUFBVyxHQUFHbEIsYUFEbEI7QUFBQSxJQUVJcUIsU0FBTyxHQUFHcEIsUUFGZDtBQUFBLElBR0lLLFVBQVEsR0FBR2tCLFVBSGY7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxnQkFBVCxDQUF3QnpELEtBQXhCLEVBQStCTixLQUEvQixFQUFzQ2dFLE1BQXRDLEVBQThDO0FBQzVDLE1BQUksQ0FBQ3BCLFVBQVEsQ0FBQ29CLE1BQUQsQ0FBYixFQUF1QjtBQUNyQixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFJbkIsSUFBSSxXQUFVN0MsS0FBVixDQUFSOztBQUNBLE1BQUk2QyxJQUFJLElBQUksUUFBUixHQUNLVyxhQUFXLENBQUNRLE1BQUQsQ0FBWCxJQUF1QkwsU0FBTyxDQUFDM0QsS0FBRCxFQUFRZ0UsTUFBTSxDQUFDL0QsTUFBZixDQURuQyxHQUVLNEMsSUFBSSxJQUFJLFFBQVIsSUFBb0I3QyxLQUFLLElBQUlnRSxNQUZ0QyxFQUdNO0FBQ0osV0FBTzNELElBQUUsQ0FBQzJELE1BQU0sQ0FBQ2hFLEtBQUQsQ0FBUCxFQUFnQk0sS0FBaEIsQ0FBVDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNEOztJQUVEMkQsZUFBYyxHQUFHRjs7O0FDNUJqQixJQUFJRyxZQUFZLEdBQUcsSUFBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLGlCQUFULENBQXlCQyxNQUF6QixFQUFpQztBQUMvQixNQUFJcEUsS0FBSyxHQUFHb0UsTUFBTSxDQUFDbkUsTUFBbkI7O0FBRUEsU0FBT0QsS0FBSyxNQUFNa0UsWUFBWSxDQUFDTixJQUFiLENBQWtCUSxNQUFNLENBQUNDLE1BQVAsQ0FBY3JFLEtBQWQsQ0FBbEIsQ0FBbEIsRUFBMkQ7O0FBQzNELFNBQU9BLEtBQVA7QUFDRDs7SUFFRHNFLGdCQUFjLEdBQUdIOztBQ2xCakIsSUFBSUEsZUFBZSxHQUFHdEQsZ0JBQXRCO0FBRUE7O0FBQ0EsSUFBSTBELFdBQVcsR0FBRyxNQUFsQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLFVBQVQsQ0FBa0JKLE1BQWxCLEVBQTBCO0FBQ3hCLFNBQU9BLE1BQU0sR0FDVEEsTUFBTSxDQUFDSyxLQUFQLENBQWEsQ0FBYixFQUFnQk4sZUFBZSxDQUFDQyxNQUFELENBQWYsR0FBMEIsQ0FBMUMsRUFBNkNNLE9BQTdDLENBQXFESCxXQUFyRCxFQUFrRSxFQUFsRSxDQURTLEdBRVRILE1BRko7QUFHRDs7SUFFRE8sU0FBYyxHQUFHSDs7QUNNakIsU0FBU0ksY0FBVCxDQUFzQnRFLEtBQXRCLEVBQTZCO0FBQzNCLFNBQU9BLEtBQUssSUFBSSxJQUFULElBQWlCLFFBQU9BLEtBQVAsS0FBZ0IsUUFBeEM7QUFDRDs7SUFFRHVFLGNBQWMsR0FBR0Q7O0FDNUJqQixJQUFJbEMsWUFBVSxHQUFHN0IsV0FBakI7QUFBQSxJQUNJK0QsY0FBWSxHQUFHdEMsY0FEbkI7QUFHQTs7QUFDQSxJQUFJd0MsV0FBUyxHQUFHLGlCQUFoQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsVUFBVCxDQUFrQnpFLEtBQWxCLEVBQXlCO0FBQ3ZCLFNBQU8sUUFBT0EsS0FBUCxLQUFnQixRQUFoQixJQUNKc0UsY0FBWSxDQUFDdEUsS0FBRCxDQUFaLElBQXVCb0MsWUFBVSxDQUFDcEMsS0FBRCxDQUFWLElBQXFCd0UsV0FEL0M7QUFFRDs7SUFFREUsVUFBYyxHQUFHRDs7QUM1QmpCLElBQUlQLFFBQVEsR0FBRzNELFNBQWY7QUFBQSxJQUNJK0IsVUFBUSxHQUFHTixVQURmO0FBQUEsSUFFSXlDLFFBQVEsR0FBR3hDLFVBRmY7QUFJQTs7QUFDQSxJQUFJMEMsR0FBRyxHQUFHLElBQUksQ0FBZDtBQUVBOztBQUNBLElBQUlDLFVBQVUsR0FBRyxvQkFBakI7QUFFQTs7QUFDQSxJQUFJQyxVQUFVLEdBQUcsWUFBakI7QUFFQTs7QUFDQSxJQUFJQyxTQUFTLEdBQUcsYUFBaEI7QUFFQTs7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFFBQW5CO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxVQUFULENBQWtCakYsS0FBbEIsRUFBeUI7QUFDdkIsTUFBSSxPQUFPQSxLQUFQLElBQWdCLFFBQXBCLEVBQThCO0FBQzVCLFdBQU9BLEtBQVA7QUFDRDs7QUFDRCxNQUFJeUUsUUFBUSxDQUFDekUsS0FBRCxDQUFaLEVBQXFCO0FBQ25CLFdBQU8yRSxHQUFQO0FBQ0Q7O0FBQ0QsTUFBSXJDLFVBQVEsQ0FBQ3RDLEtBQUQsQ0FBWixFQUFxQjtBQUNuQixRQUFJQyxLQUFLLEdBQUcsT0FBT0QsS0FBSyxDQUFDa0YsT0FBYixJQUF3QixVQUF4QixHQUFxQ2xGLEtBQUssQ0FBQ2tGLE9BQU4sRUFBckMsR0FBdURsRixLQUFuRTtBQUNBQSxJQUFBQSxLQUFLLEdBQUdzQyxVQUFRLENBQUNyQyxLQUFELENBQVIsR0FBbUJBLEtBQUssR0FBRyxFQUEzQixHQUFpQ0EsS0FBekM7QUFDRDs7QUFDRCxNQUFJLE9BQU9ELEtBQVAsSUFBZ0IsUUFBcEIsRUFBOEI7QUFDNUIsV0FBT0EsS0FBSyxLQUFLLENBQVYsR0FBY0EsS0FBZCxHQUFzQixDQUFDQSxLQUE5QjtBQUNEOztBQUNEQSxFQUFBQSxLQUFLLEdBQUdrRSxRQUFRLENBQUNsRSxLQUFELENBQWhCO0FBQ0EsTUFBSW1GLFFBQVEsR0FBR04sVUFBVSxDQUFDdkIsSUFBWCxDQUFnQnRELEtBQWhCLENBQWY7QUFDQSxTQUFRbUYsUUFBUSxJQUFJTCxTQUFTLENBQUN4QixJQUFWLENBQWV0RCxLQUFmLENBQWIsR0FDSCtFLFlBQVksQ0FBQy9FLEtBQUssQ0FBQ21FLEtBQU4sQ0FBWSxDQUFaLENBQUQsRUFBaUJnQixRQUFRLEdBQUcsQ0FBSCxHQUFPLENBQWhDLENBRFQsR0FFRlAsVUFBVSxDQUFDdEIsSUFBWCxDQUFnQnRELEtBQWhCLElBQXlCMkUsR0FBekIsR0FBK0IsQ0FBQzNFLEtBRnJDO0FBR0Q7O0lBRURvRixVQUFjLEdBQUdIOztBQy9EakIsSUFBSUEsUUFBUSxHQUFHMUUsVUFBZjtBQUVBOztBQUNBLElBQUk4RSxRQUFRLEdBQUcsSUFBSSxDQUFuQjtBQUFBLElBQ0lDLFdBQVcsR0FBRyx1QkFEbEI7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLFVBQVQsQ0FBa0J2RixLQUFsQixFQUF5QjtBQUN2QixNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLFdBQU9BLEtBQUssS0FBSyxDQUFWLEdBQWNBLEtBQWQsR0FBc0IsQ0FBN0I7QUFDRDs7QUFDREEsRUFBQUEsS0FBSyxHQUFHaUYsUUFBUSxDQUFDakYsS0FBRCxDQUFoQjs7QUFDQSxNQUFJQSxLQUFLLEtBQUtxRixRQUFWLElBQXNCckYsS0FBSyxLQUFLLENBQUNxRixRQUFyQyxFQUErQztBQUM3QyxRQUFJRyxJQUFJLEdBQUl4RixLQUFLLEdBQUcsQ0FBUixHQUFZLENBQUMsQ0FBYixHQUFpQixDQUE3QjtBQUNBLFdBQU93RixJQUFJLEdBQUdGLFdBQWQ7QUFDRDs7QUFDRCxTQUFPdEYsS0FBSyxLQUFLQSxLQUFWLEdBQWtCQSxLQUFsQixHQUEwQixDQUFqQztBQUNEOztJQUVEeUYsVUFBYyxHQUFHRjs7QUN6Q2pCLElBQUlBLFFBQVEsR0FBR2hGLFVBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNtRixXQUFULENBQW1CMUYsS0FBbkIsRUFBMEI7QUFDeEIsTUFBSUosTUFBTSxHQUFHMkYsUUFBUSxDQUFDdkYsS0FBRCxDQUFyQjtBQUFBLE1BQ0kyRixTQUFTLEdBQUcvRixNQUFNLEdBQUcsQ0FEekI7QUFHQSxTQUFPQSxNQUFNLEtBQUtBLE1BQVgsR0FBcUIrRixTQUFTLEdBQUcvRixNQUFNLEdBQUcrRixTQUFaLEdBQXdCL0YsTUFBdEQsR0FBZ0UsQ0FBdkU7QUFDRDs7SUFFRGdHLFdBQWMsR0FBR0Y7O0FDbkNqQixJQUFJcEcsU0FBUyxHQUFHaUIsVUFBaEI7QUFBQSxJQUNJa0QsY0FBYyxHQUFHekIsZUFEckI7QUFBQSxJQUVJMEQsU0FBUyxHQUFHekQsV0FGaEI7QUFJQTs7QUFDQSxJQUFJNEQsVUFBVSxHQUFHQyxJQUFJLENBQUNDLElBQXRCO0FBQUEsSUFDSUMsU0FBUyxHQUFHRixJQUFJLENBQUNHLEdBRHJCO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLEtBQVQsQ0FBZTNHLEtBQWYsRUFBc0I0RyxJQUF0QixFQUE0QkMsS0FBNUIsRUFBbUM7QUFDakMsTUFBS0EsS0FBSyxHQUFHM0MsY0FBYyxDQUFDbEUsS0FBRCxFQUFRNEcsSUFBUixFQUFjQyxLQUFkLENBQWpCLEdBQXdDRCxJQUFJLEtBQUs3RSxTQUEzRCxFQUF1RTtBQUNyRTZFLElBQUFBLElBQUksR0FBRyxDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLElBQUFBLElBQUksR0FBR0gsU0FBUyxDQUFDTixTQUFTLENBQUNTLElBQUQsQ0FBVixFQUFrQixDQUFsQixDQUFoQjtBQUNEOztBQUNELE1BQUl4RyxNQUFNLEdBQUdKLEtBQUssSUFBSSxJQUFULEdBQWdCLENBQWhCLEdBQW9CQSxLQUFLLENBQUNJLE1BQXZDOztBQUNBLE1BQUksQ0FBQ0EsTUFBRCxJQUFXd0csSUFBSSxHQUFHLENBQXRCLEVBQXlCO0FBQ3ZCLFdBQU8sRUFBUDtBQUNEOztBQUNELE1BQUl6RyxLQUFLLEdBQUcsQ0FBWjtBQUFBLE1BQ0kyRyxRQUFRLEdBQUcsQ0FEZjtBQUFBLE1BRUl6RyxNQUFNLEdBQUdDLEtBQUssQ0FBQ2dHLFVBQVUsQ0FBQ2xHLE1BQU0sR0FBR3dHLElBQVYsQ0FBWCxDQUZsQjs7QUFJQSxTQUFPekcsS0FBSyxHQUFHQyxNQUFmLEVBQXVCO0FBQ3JCQyxJQUFBQSxNQUFNLENBQUN5RyxRQUFRLEVBQVQsQ0FBTixHQUFxQi9HLFNBQVMsQ0FBQ0MsS0FBRCxFQUFRRyxLQUFSLEVBQWdCQSxLQUFLLElBQUl5RyxJQUF6QixDQUE5QjtBQUNEOztBQUNELFNBQU92RyxNQUFQO0FBQ0Q7O0lBRUQwRyxPQUFjLEdBQUdKOztBQy9DVixJQUFNLFVBQVUsR0FBRztJQUN4QixHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0NBQ0osQ0FBQztBQUNLLElBQU0sVUFBVSxHQUFHO0lBQ3hCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDbEUsQ0FBQztBQUNLLElBQU0sV0FBVyxHQUFHO0lBQ3pCLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7Q0FDSixDQUFDO0FBQ3lCQSxPQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7O0FDL0MvQ0s7QUFBWixXQUFZLEVBQUU7SUFDWiw2QkFBUyxDQUFBO0lBQ1QsOEJBQVUsQ0FBQTtJQUNWLDZCQUFTLENBQUE7QUFDWCxDQUFDLEVBSldBLFVBQUUsS0FBRkEsVUFBRSxRQUliO0FBRVdDO0FBQVosV0FBWSxLQUFLO0lBQ2Ysc0NBQTZCLENBQUE7SUFDN0Isc0JBQWEsQ0FBQTtJQUNiLDRCQUFtQixDQUFBO0lBQ25CLDZCQUFvQixDQUFBO0lBQ3BCLHdDQUErQixDQUFBO0lBQy9CLDBCQUFpQixDQUFBO0lBQ2pCLDBDQUFpQyxDQUFBO0FBQ25DLENBQUMsRUFSV0EsYUFBSyxLQUFMQSxhQUFLLFFBUWhCO0FBRVdDO0FBQVosV0FBWSxNQUFNO0lBQ2hCLHlCQUFlLENBQUE7SUFDZix3QkFBYyxDQUFBO0lBQ2QsMkJBQWlCLENBQUE7SUFDakIsNEJBQWtCLENBQUE7SUFDbEIsc0JBQVksQ0FBQTtBQUNkLENBQUMsRUFOV0EsY0FBTSxLQUFOQSxjQUFNLFFBTWpCO0FBRVdDO0FBQVosV0FBWSxJQUFJO0lBQ2Qsc0JBQWMsQ0FBQTtJQUNkLHFCQUFhLENBQUE7SUFDYixxQkFBYSxDQUFBO0lBQ2Isd0JBQWdCLENBQUE7QUFDbEIsQ0FBQyxFQUxXQSxZQUFJLEtBQUpBLFlBQUk7Ozs7Ozs7Ozs7QUNqQmhCLFNBQVNDLGdCQUFULEdBQTBCO0FBQ3hCLE9BQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxPQUFLVCxJQUFMLEdBQVksQ0FBWjtBQUNEOztJQUVEVSxlQUFjLEdBQUdGOztBQ1pqQixJQUFJNUcsSUFBRSxHQUFHUSxJQUFUO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTdUcsY0FBVCxDQUFzQnZILEtBQXRCLEVBQTZCd0gsR0FBN0IsRUFBa0M7QUFDaEMsTUFBSXBILE1BQU0sR0FBR0osS0FBSyxDQUFDSSxNQUFuQjs7QUFDQSxTQUFPQSxNQUFNLEVBQWIsRUFBaUI7QUFDZixRQUFJSSxJQUFFLENBQUNSLEtBQUssQ0FBQ0ksTUFBRCxDQUFMLENBQWMsQ0FBZCxDQUFELEVBQW1Cb0gsR0FBbkIsQ0FBTixFQUErQjtBQUM3QixhQUFPcEgsTUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxDQUFDLENBQVI7QUFDRDs7SUFFRHFILGFBQWMsR0FBR0Y7O0FDcEJqQixJQUFJQSxjQUFZLEdBQUd2RyxhQUFuQjtBQUVBOztBQUNBLElBQUkwRyxVQUFVLEdBQUdwSCxLQUFLLENBQUNtQixTQUF2QjtBQUVBOztBQUNBLElBQUlrRyxNQUFNLEdBQUdELFVBQVUsQ0FBQ0MsTUFBeEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsaUJBQVQsQ0FBeUJKLEdBQXpCLEVBQThCO0FBQzVCLE1BQUlLLElBQUksR0FBRyxLQUFLUixRQUFoQjtBQUFBLE1BQ0lsSCxLQUFLLEdBQUdvSCxjQUFZLENBQUNNLElBQUQsRUFBT0wsR0FBUCxDQUR4Qjs7QUFHQSxNQUFJckgsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUkySCxTQUFTLEdBQUdELElBQUksQ0FBQ3pILE1BQUwsR0FBYyxDQUE5Qjs7QUFDQSxNQUFJRCxLQUFLLElBQUkySCxTQUFiLEVBQXdCO0FBQ3RCRCxJQUFBQSxJQUFJLENBQUNFLEdBQUw7QUFDRCxHQUZELE1BRU87QUFDTEosSUFBQUEsTUFBTSxDQUFDekYsSUFBUCxDQUFZMkYsSUFBWixFQUFrQjFILEtBQWxCLEVBQXlCLENBQXpCO0FBQ0Q7O0FBQ0QsSUFBRSxLQUFLeUcsSUFBUDtBQUNBLFNBQU8sSUFBUDtBQUNEOztJQUVEb0IsZ0JBQWMsR0FBR0o7O0FDbENqQixJQUFJTCxjQUFZLEdBQUd2RyxhQUFuQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTaUgsY0FBVCxDQUFzQlQsR0FBdEIsRUFBMkI7QUFDekIsTUFBSUssSUFBSSxHQUFHLEtBQUtSLFFBQWhCO0FBQUEsTUFDSWxILEtBQUssR0FBR29ILGNBQVksQ0FBQ00sSUFBRCxFQUFPTCxHQUFQLENBRHhCO0FBR0EsU0FBT3JILEtBQUssR0FBRyxDQUFSLEdBQVk0QixTQUFaLEdBQXdCOEYsSUFBSSxDQUFDMUgsS0FBRCxDQUFKLENBQVksQ0FBWixDQUEvQjtBQUNEOztJQUVEK0gsYUFBYyxHQUFHRDs7QUNsQmpCLElBQUlWLGNBQVksR0FBR3ZHLGFBQW5CO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNtSCxjQUFULENBQXNCWCxHQUF0QixFQUEyQjtBQUN6QixTQUFPRCxjQUFZLENBQUMsS0FBS0YsUUFBTixFQUFnQkcsR0FBaEIsQ0FBWixHQUFtQyxDQUFDLENBQTNDO0FBQ0Q7O0lBRURZLGFBQWMsR0FBR0Q7O0FDZmpCLElBQUlaLFlBQVksR0FBR3ZHLGFBQW5CO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU3FILGNBQVQsQ0FBc0JiLEdBQXRCLEVBQTJCL0csS0FBM0IsRUFBa0M7QUFDaEMsTUFBSW9ILElBQUksR0FBRyxLQUFLUixRQUFoQjtBQUFBLE1BQ0lsSCxLQUFLLEdBQUdvSCxZQUFZLENBQUNNLElBQUQsRUFBT0wsR0FBUCxDQUR4Qjs7QUFHQSxNQUFJckgsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiLE1BQUUsS0FBS3lHLElBQVA7QUFDQWlCLElBQUFBLElBQUksQ0FBQ1MsSUFBTCxDQUFVLENBQUNkLEdBQUQsRUFBTS9HLEtBQU4sQ0FBVjtBQUNELEdBSEQsTUFHTztBQUNMb0gsSUFBQUEsSUFBSSxDQUFDMUgsS0FBRCxDQUFKLENBQVksQ0FBWixJQUFpQk0sS0FBakI7QUFDRDs7QUFDRCxTQUFPLElBQVA7QUFDRDs7SUFFRDhILGFBQWMsR0FBR0Y7O0FDekJqQixJQUFJakIsY0FBYyxHQUFHcEcsZUFBckI7QUFBQSxJQUNJNEcsZUFBZSxHQUFHbkYsZ0JBRHRCO0FBQUEsSUFFSXdGLFlBQVksR0FBR3ZGLGFBRm5CO0FBQUEsSUFHSXlGLFlBQVksR0FBR2xFLGFBSG5CO0FBQUEsSUFJSW9FLFlBQVksR0FBR0csYUFKbkI7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxXQUFULENBQW1CQyxPQUFuQixFQUE0QjtBQUMxQixNQUFJdkksS0FBSyxHQUFHLENBQUMsQ0FBYjtBQUFBLE1BQ0lDLE1BQU0sR0FBR3NJLE9BQU8sSUFBSSxJQUFYLEdBQWtCLENBQWxCLEdBQXNCQSxPQUFPLENBQUN0SSxNQUQzQztBQUdBLE9BQUt1SSxLQUFMOztBQUNBLFNBQU8sRUFBRXhJLEtBQUYsR0FBVUMsTUFBakIsRUFBeUI7QUFDdkIsUUFBSXdJLEtBQUssR0FBR0YsT0FBTyxDQUFDdkksS0FBRCxDQUFuQjtBQUNBLFNBQUswSSxHQUFMLENBQVNELEtBQUssQ0FBQyxDQUFELENBQWQsRUFBbUJBLEtBQUssQ0FBQyxDQUFELENBQXhCO0FBQ0Q7QUFDRjs7O0FBR0RILFdBQVMsQ0FBQ2hILFNBQVYsQ0FBb0JrSCxLQUFwQixHQUE0QnZCLGNBQTVCO0FBQ0FxQixXQUFTLENBQUNoSCxTQUFWLENBQW9CLFFBQXBCLElBQWdDbUcsZUFBaEM7QUFDQWEsV0FBUyxDQUFDaEgsU0FBVixDQUFvQnFILEdBQXBCLEdBQTBCYixZQUExQjtBQUNBUSxXQUFTLENBQUNoSCxTQUFWLENBQW9Cc0gsR0FBcEIsR0FBMEJaLFlBQTFCO0FBQ0FNLFdBQVMsQ0FBQ2hILFNBQVYsQ0FBb0JvSCxHQUFwQixHQUEwQlIsWUFBMUI7SUFFQVcsVUFBYyxHQUFHUDs7QUMvQmpCLElBQUlBLFdBQVMsR0FBR3pILFVBQWhCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU2lJLFlBQVQsR0FBc0I7QUFDcEIsT0FBSzVCLFFBQUwsR0FBZ0IsSUFBSW9CLFdBQUosRUFBaEI7QUFDQSxPQUFLN0IsSUFBTCxHQUFZLENBQVo7QUFDRDs7SUFFRHNDLFdBQWMsR0FBR0Q7Ozs7Ozs7Ozs7OztBQ0xqQixTQUFTRSxhQUFULENBQXFCM0IsR0FBckIsRUFBMEI7QUFDeEIsTUFBSUssSUFBSSxHQUFHLEtBQUtSLFFBQWhCO0FBQUEsTUFDSWhILE1BQU0sR0FBR3dILElBQUksQ0FBQyxRQUFELENBQUosQ0FBZUwsR0FBZixDQURiO0FBR0EsT0FBS1osSUFBTCxHQUFZaUIsSUFBSSxDQUFDakIsSUFBakI7QUFDQSxTQUFPdkcsTUFBUDtBQUNEOztJQUVEK0ksWUFBYyxHQUFHRDs7Ozs7Ozs7Ozs7O0FDUmpCLFNBQVNFLFVBQVQsQ0FBa0I3QixHQUFsQixFQUF1QjtBQUNyQixTQUFPLEtBQUtILFFBQUwsQ0FBY3lCLEdBQWQsQ0FBa0J0QixHQUFsQixDQUFQO0FBQ0Q7O0lBRUQ4QixTQUFjLEdBQUdEOzs7Ozs7Ozs7Ozs7QUNKakIsU0FBU0UsVUFBVCxDQUFrQi9CLEdBQWxCLEVBQXVCO0FBQ3JCLFNBQU8sS0FBS0gsUUFBTCxDQUFjMEIsR0FBZCxDQUFrQnZCLEdBQWxCLENBQVA7QUFDRDs7SUFFRGdDLFNBQWMsR0FBR0Q7O0FDYmpCLElBQUlwSSxNQUFJLEdBQUdILEtBQVg7QUFFQTs7QUFDQSxJQUFJeUksWUFBVSxHQUFHdEksTUFBSSxDQUFDLG9CQUFELENBQXJCO0lBRUF1SSxXQUFjLEdBQUdEOztBQ0xqQixJQUFJQSxVQUFVLEdBQUd6SSxXQUFqQjtBQUVBOztBQUNBLElBQUkySSxVQUFVLEdBQUksWUFBVztBQUMzQixNQUFJQyxHQUFHLEdBQUcsU0FBU0MsSUFBVCxDQUFjSixVQUFVLElBQUlBLFVBQVUsQ0FBQ0ssSUFBekIsSUFBaUNMLFVBQVUsQ0FBQ0ssSUFBWCxDQUFnQkMsUUFBakQsSUFBNkQsRUFBM0UsQ0FBVjtBQUNBLFNBQU9ILEdBQUcsR0FBSSxtQkFBbUJBLEdBQXZCLEdBQThCLEVBQXhDO0FBQ0QsQ0FIaUIsRUFBbEI7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0ksVUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEIsU0FBTyxDQUFDLENBQUNOLFVBQUYsSUFBaUJBLFVBQVUsSUFBSU0sSUFBdEM7QUFDRDs7SUFFREMsU0FBYyxHQUFHRjs7O0FDbEJqQixJQUFJRyxXQUFTLEdBQUcvSSxRQUFRLENBQUNLLFNBQXpCO0FBRUE7O0FBQ0EsSUFBSTJJLGNBQVksR0FBR0QsV0FBUyxDQUFDdkksUUFBN0I7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTeUksVUFBVCxDQUFrQkosSUFBbEIsRUFBd0I7QUFDdEIsTUFBSUEsSUFBSSxJQUFJLElBQVosRUFBa0I7QUFDaEIsUUFBSTtBQUNGLGFBQU9HLGNBQVksQ0FBQ2xJLElBQWIsQ0FBa0IrSCxJQUFsQixDQUFQO0FBQ0QsS0FGRCxDQUVFLE9BQU81SCxDQUFQLEVBQVU7O0FBQ1osUUFBSTtBQUNGLGFBQVE0SCxJQUFJLEdBQUcsRUFBZjtBQUNELEtBRkQsQ0FFRSxPQUFPNUgsQ0FBUCxFQUFVO0FBQ2I7O0FBQ0QsU0FBTyxFQUFQO0FBQ0Q7O0lBRURpSSxTQUFjLEdBQUdEOztBQ3pCakIsSUFBSS9HLFVBQVUsR0FBR3RDLFlBQWpCO0FBQUEsSUFDSWdKLFFBQVEsR0FBR3ZILFNBRGY7QUFBQSxJQUVJTSxVQUFRLEdBQUdMLFVBRmY7QUFBQSxJQUdJMkgsVUFBUSxHQUFHcEcsU0FIZjtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUlzRyxZQUFZLEdBQUcscUJBQW5CO0FBRUE7O0FBQ0EsSUFBSUMsWUFBWSxHQUFHLDZCQUFuQjtBQUVBOztBQUNBLElBQUlMLFNBQVMsR0FBRy9JLFFBQVEsQ0FBQ0ssU0FBekI7QUFBQSxJQUNJRCxhQUFXLEdBQUdWLE1BQU0sQ0FBQ1csU0FEekI7QUFHQTs7QUFDQSxJQUFJMkksWUFBWSxHQUFHRCxTQUFTLENBQUN2SSxRQUE3QjtBQUVBOztBQUNBLElBQUlGLGdCQUFjLEdBQUdGLGFBQVcsQ0FBQ0UsY0FBakM7QUFFQTs7QUFDQSxJQUFJK0ksVUFBVSxHQUFHQyxNQUFNLENBQUMsTUFDdEJOLFlBQVksQ0FBQ2xJLElBQWIsQ0FBa0JSLGdCQUFsQixFQUFrQ21ELE9BQWxDLENBQTBDMEYsWUFBMUMsRUFBd0QsTUFBeEQsRUFDQzFGLE9BREQsQ0FDUyx3REFEVCxFQUNtRSxPQURuRSxDQURzQixHQUV3RCxHQUZ6RCxDQUF2QjtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBUzhGLGNBQVQsQ0FBc0JsSyxLQUF0QixFQUE2QjtBQUMzQixNQUFJLENBQUNzQyxVQUFRLENBQUN0QyxLQUFELENBQVQsSUFBb0J1SixRQUFRLENBQUN2SixLQUFELENBQWhDLEVBQXlDO0FBQ3ZDLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUltSyxPQUFPLEdBQUd0SCxVQUFVLENBQUM3QyxLQUFELENBQVYsR0FBb0JnSyxVQUFwQixHQUFpQ0QsWUFBL0M7QUFDQSxTQUFPSSxPQUFPLENBQUM3RyxJQUFSLENBQWFzRyxVQUFRLENBQUM1SixLQUFELENBQXJCLENBQVA7QUFDRDs7SUFFRG9LLGFBQWMsR0FBR0Y7Ozs7Ozs7Ozs7O0FDdENqQixTQUFTRyxVQUFULENBQWtCM0csTUFBbEIsRUFBMEJxRCxHQUExQixFQUErQjtBQUM3QixTQUFPckQsTUFBTSxJQUFJLElBQVYsR0FBaUJwQyxTQUFqQixHQUE2Qm9DLE1BQU0sQ0FBQ3FELEdBQUQsQ0FBMUM7QUFDRDs7SUFFRHVELFNBQWMsR0FBR0Q7O0FDWmpCLElBQUlILFlBQVksR0FBRzNKLGFBQW5CO0FBQUEsSUFDSThKLFFBQVEsR0FBR3JJLFNBRGY7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVN1SSxXQUFULENBQW1CN0csTUFBbkIsRUFBMkJxRCxHQUEzQixFQUFnQztBQUM5QixNQUFJL0csS0FBSyxHQUFHcUssUUFBUSxDQUFDM0csTUFBRCxFQUFTcUQsR0FBVCxDQUFwQjtBQUNBLFNBQU9tRCxZQUFZLENBQUNsSyxLQUFELENBQVosR0FBc0JBLEtBQXRCLEdBQThCc0IsU0FBckM7QUFDRDs7SUFFRGtKLFVBQWMsR0FBR0Q7O0FDaEJqQixJQUFJQSxXQUFTLEdBQUdoSyxVQUFoQjtBQUFBLElBQ0lHLE1BQUksR0FBR3NCLEtBRFg7QUFHQTs7QUFDQSxJQUFJeUksS0FBRyxHQUFHRixXQUFTLENBQUM3SixNQUFELEVBQU8sS0FBUCxDQUFuQjtJQUVBZ0ssSUFBYyxHQUFHRDs7QUNOakIsSUFBSUYsV0FBUyxHQUFHaEssVUFBaEI7QUFFQTs7QUFDQSxJQUFJb0ssY0FBWSxHQUFHSixXQUFTLENBQUNsSyxNQUFELEVBQVMsUUFBVCxDQUE1QjtJQUVBdUssYUFBYyxHQUFHRDs7QUNMakIsSUFBSUEsY0FBWSxHQUFHcEssYUFBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTc0ssV0FBVCxHQUFxQjtBQUNuQixPQUFLakUsUUFBTCxHQUFnQitELGNBQVksR0FBR0EsY0FBWSxDQUFDLElBQUQsQ0FBZixHQUF3QixFQUFwRDtBQUNBLE9BQUt4RSxJQUFMLEdBQVksQ0FBWjtBQUNEOztJQUVEMkUsVUFBYyxHQUFHRDs7Ozs7Ozs7Ozs7OztBQ0pqQixTQUFTRSxZQUFULENBQW9CaEUsR0FBcEIsRUFBeUI7QUFDdkIsTUFBSW5ILE1BQU0sR0FBRyxLQUFLMEksR0FBTCxDQUFTdkIsR0FBVCxLQUFpQixPQUFPLEtBQUtILFFBQUwsQ0FBY0csR0FBZCxDQUFyQztBQUNBLE9BQUtaLElBQUwsSUFBYXZHLE1BQU0sR0FBRyxDQUFILEdBQU8sQ0FBMUI7QUFDQSxTQUFPQSxNQUFQO0FBQ0Q7O0lBRURvTCxXQUFjLEdBQUdEOztBQ2hCakIsSUFBSUosY0FBWSxHQUFHcEssYUFBbkI7QUFFQTs7QUFDQSxJQUFJMEssZ0JBQWMsR0FBRywyQkFBckI7QUFFQTs7QUFDQSxJQUFJbEssYUFBVyxHQUFHVixNQUFNLENBQUNXLFNBQXpCO0FBRUE7O0FBQ0EsSUFBSUMsZ0JBQWMsR0FBR0YsYUFBVyxDQUFDRSxjQUFqQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTaUssU0FBVCxDQUFpQm5FLEdBQWpCLEVBQXNCO0FBQ3BCLE1BQUlLLElBQUksR0FBRyxLQUFLUixRQUFoQjs7QUFDQSxNQUFJK0QsY0FBSixFQUFrQjtBQUNoQixRQUFJL0ssTUFBTSxHQUFHd0gsSUFBSSxDQUFDTCxHQUFELENBQWpCO0FBQ0EsV0FBT25ILE1BQU0sS0FBS3FMLGdCQUFYLEdBQTRCM0osU0FBNUIsR0FBd0MxQixNQUEvQztBQUNEOztBQUNELFNBQU9xQixnQkFBYyxDQUFDUSxJQUFmLENBQW9CMkYsSUFBcEIsRUFBMEJMLEdBQTFCLElBQWlDSyxJQUFJLENBQUNMLEdBQUQsQ0FBckMsR0FBNkN6RixTQUFwRDtBQUNEOztJQUVENkosUUFBYyxHQUFHRDs7QUM3QmpCLElBQUlQLGNBQVksR0FBR3BLLGFBQW5CO0FBRUE7O0FBQ0EsSUFBSVEsYUFBVyxHQUFHVixNQUFNLENBQUNXLFNBQXpCO0FBRUE7O0FBQ0EsSUFBSUMsZ0JBQWMsR0FBR0YsYUFBVyxDQUFDRSxjQUFqQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTbUssU0FBVCxDQUFpQnJFLEdBQWpCLEVBQXNCO0FBQ3BCLE1BQUlLLElBQUksR0FBRyxLQUFLUixRQUFoQjtBQUNBLFNBQU8rRCxjQUFZLEdBQUl2RCxJQUFJLENBQUNMLEdBQUQsQ0FBSixLQUFjekYsU0FBbEIsR0FBK0JMLGdCQUFjLENBQUNRLElBQWYsQ0FBb0IyRixJQUFwQixFQUEwQkwsR0FBMUIsQ0FBbEQ7QUFDRDs7SUFFRHNFLFFBQWMsR0FBR0Q7O0FDdEJqQixJQUFJVCxZQUFZLEdBQUdwSyxhQUFuQjtBQUVBOztBQUNBLElBQUkwSyxjQUFjLEdBQUcsMkJBQXJCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0ssU0FBVCxDQUFpQnZFLEdBQWpCLEVBQXNCL0csS0FBdEIsRUFBNkI7QUFDM0IsTUFBSW9ILElBQUksR0FBRyxLQUFLUixRQUFoQjtBQUNBLE9BQUtULElBQUwsSUFBYSxLQUFLbUMsR0FBTCxDQUFTdkIsR0FBVCxJQUFnQixDQUFoQixHQUFvQixDQUFqQztBQUNBSyxFQUFBQSxJQUFJLENBQUNMLEdBQUQsQ0FBSixHQUFhNEQsWUFBWSxJQUFJM0ssS0FBSyxLQUFLc0IsU0FBM0IsR0FBd0MySixjQUF4QyxHQUF5RGpMLEtBQXJFO0FBQ0EsU0FBTyxJQUFQO0FBQ0Q7O0lBRUR1TCxRQUFjLEdBQUdEOztBQ3RCakIsSUFBSVQsU0FBUyxHQUFHdEssVUFBaEI7QUFBQSxJQUNJd0ssVUFBVSxHQUFHL0ksV0FEakI7QUFBQSxJQUVJa0osT0FBTyxHQUFHakosUUFGZDtBQUFBLElBR0ltSixPQUFPLEdBQUc1SCxRQUhkO0FBQUEsSUFJSThILE9BQU8sR0FBR3ZELFFBSmQ7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTeUQsTUFBVCxDQUFjdkQsT0FBZCxFQUF1QjtBQUNyQixNQUFJdkksS0FBSyxHQUFHLENBQUMsQ0FBYjtBQUFBLE1BQ0lDLE1BQU0sR0FBR3NJLE9BQU8sSUFBSSxJQUFYLEdBQWtCLENBQWxCLEdBQXNCQSxPQUFPLENBQUN0SSxNQUQzQztBQUdBLE9BQUt1SSxLQUFMOztBQUNBLFNBQU8sRUFBRXhJLEtBQUYsR0FBVUMsTUFBakIsRUFBeUI7QUFDdkIsUUFBSXdJLEtBQUssR0FBR0YsT0FBTyxDQUFDdkksS0FBRCxDQUFuQjtBQUNBLFNBQUswSSxHQUFMLENBQVNELEtBQUssQ0FBQyxDQUFELENBQWQsRUFBbUJBLEtBQUssQ0FBQyxDQUFELENBQXhCO0FBQ0Q7QUFDRjs7O0FBR0RxRCxNQUFJLENBQUN4SyxTQUFMLENBQWVrSCxLQUFmLEdBQXVCMkMsU0FBdkI7QUFDQVcsTUFBSSxDQUFDeEssU0FBTCxDQUFlLFFBQWYsSUFBMkIrSixVQUEzQjtBQUNBUyxNQUFJLENBQUN4SyxTQUFMLENBQWVxSCxHQUFmLEdBQXFCNkMsT0FBckI7QUFDQU0sTUFBSSxDQUFDeEssU0FBTCxDQUFlc0gsR0FBZixHQUFxQjhDLE9BQXJCO0FBQ0FJLE1BQUksQ0FBQ3hLLFNBQUwsQ0FBZW9ILEdBQWYsR0FBcUJrRCxPQUFyQjtJQUVBRyxLQUFjLEdBQUdEOztBQy9CakIsSUFBSUEsSUFBSSxHQUFHakwsS0FBWDtBQUFBLElBQ0l5SCxXQUFTLEdBQUdoRyxVQURoQjtBQUFBLElBRUl5SSxLQUFHLEdBQUd4SSxJQUZWO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU3lKLGVBQVQsR0FBeUI7QUFDdkIsT0FBS3ZGLElBQUwsR0FBWSxDQUFaO0FBQ0EsT0FBS1MsUUFBTCxHQUFnQjtBQUNkLFlBQVEsSUFBSTRFLElBQUosRUFETTtBQUVkLFdBQU8sS0FBS2YsS0FBRyxJQUFJekMsV0FBWixHQUZPO0FBR2QsY0FBVSxJQUFJd0QsSUFBSjtBQUhJLEdBQWhCO0FBS0Q7O0lBRURHLGNBQWMsR0FBR0Q7O0FDYmpCLFNBQVNFLFdBQVQsQ0FBbUI1TCxLQUFuQixFQUEwQjtBQUN4QixNQUFJdUMsSUFBSSxXQUFVdkMsS0FBVixDQUFSOztBQUNBLFNBQVF1QyxJQUFJLElBQUksUUFBUixJQUFvQkEsSUFBSSxJQUFJLFFBQTVCLElBQXdDQSxJQUFJLElBQUksUUFBaEQsSUFBNERBLElBQUksSUFBSSxTQUFyRSxHQUNGdkMsS0FBSyxLQUFLLFdBRFIsR0FFRkEsS0FBSyxLQUFLLElBRmY7QUFHRDs7SUFFRDZMLFVBQWMsR0FBR0Q7O0FDZGpCLElBQUlBLFNBQVMsR0FBR3JMLFVBQWhCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTdUwsWUFBVCxDQUFvQkMsR0FBcEIsRUFBeUJoRixHQUF6QixFQUE4QjtBQUM1QixNQUFJSyxJQUFJLEdBQUcyRSxHQUFHLENBQUNuRixRQUFmO0FBQ0EsU0FBT2dGLFNBQVMsQ0FBQzdFLEdBQUQsQ0FBVCxHQUNISyxJQUFJLENBQUMsT0FBT0wsR0FBUCxJQUFjLFFBQWQsR0FBeUIsUUFBekIsR0FBb0MsTUFBckMsQ0FERCxHQUVISyxJQUFJLENBQUMyRSxHQUZUO0FBR0Q7O0lBRURDLFdBQWMsR0FBR0Y7O0FDakJqQixJQUFJQSxZQUFVLEdBQUd2TCxXQUFqQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTMEwsZ0JBQVQsQ0FBd0JsRixHQUF4QixFQUE2QjtBQUMzQixNQUFJbkgsTUFBTSxHQUFHa00sWUFBVSxDQUFDLElBQUQsRUFBTy9FLEdBQVAsQ0FBVixDQUFzQixRQUF0QixFQUFnQ0EsR0FBaEMsQ0FBYjtBQUNBLE9BQUtaLElBQUwsSUFBYXZHLE1BQU0sR0FBRyxDQUFILEdBQU8sQ0FBMUI7QUFDQSxTQUFPQSxNQUFQO0FBQ0Q7O0lBRURzTSxlQUFjLEdBQUdEOztBQ2pCakIsSUFBSUgsWUFBVSxHQUFHdkwsV0FBakI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBUzRMLGFBQVQsQ0FBcUJwRixHQUFyQixFQUEwQjtBQUN4QixTQUFPK0UsWUFBVSxDQUFDLElBQUQsRUFBTy9FLEdBQVAsQ0FBVixDQUFzQnNCLEdBQXRCLENBQTBCdEIsR0FBMUIsQ0FBUDtBQUNEOztJQUVEcUYsWUFBYyxHQUFHRDs7QUNmakIsSUFBSUwsWUFBVSxHQUFHdkwsV0FBakI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBUzhMLGFBQVQsQ0FBcUJ0RixHQUFyQixFQUEwQjtBQUN4QixTQUFPK0UsWUFBVSxDQUFDLElBQUQsRUFBTy9FLEdBQVAsQ0FBVixDQUFzQnVCLEdBQXRCLENBQTBCdkIsR0FBMUIsQ0FBUDtBQUNEOztJQUVEdUYsWUFBYyxHQUFHRDs7QUNmakIsSUFBSVAsVUFBVSxHQUFHdkwsV0FBakI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTZ00sYUFBVCxDQUFxQnhGLEdBQXJCLEVBQTBCL0csS0FBMUIsRUFBaUM7QUFDL0IsTUFBSW9ILElBQUksR0FBRzBFLFVBQVUsQ0FBQyxJQUFELEVBQU8vRSxHQUFQLENBQXJCO0FBQUEsTUFDSVosSUFBSSxHQUFHaUIsSUFBSSxDQUFDakIsSUFEaEI7QUFHQWlCLEVBQUFBLElBQUksQ0FBQ2dCLEdBQUwsQ0FBU3JCLEdBQVQsRUFBYy9HLEtBQWQ7QUFDQSxPQUFLbUcsSUFBTCxJQUFhaUIsSUFBSSxDQUFDakIsSUFBTCxJQUFhQSxJQUFiLEdBQW9CLENBQXBCLEdBQXdCLENBQXJDO0FBQ0EsU0FBTyxJQUFQO0FBQ0Q7O0lBRURxRyxZQUFjLEdBQUdEOztBQ3JCakIsSUFBSWIsYUFBYSxHQUFHbkwsY0FBcEI7QUFBQSxJQUNJMEwsY0FBYyxHQUFHakssZUFEckI7QUFBQSxJQUVJbUssV0FBVyxHQUFHbEssWUFGbEI7QUFBQSxJQUdJb0ssV0FBVyxHQUFHN0ksWUFIbEI7QUFBQSxJQUlJK0ksV0FBVyxHQUFHeEUsWUFKbEI7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTMEUsVUFBVCxDQUFrQnhFLE9BQWxCLEVBQTJCO0FBQ3pCLE1BQUl2SSxLQUFLLEdBQUcsQ0FBQyxDQUFiO0FBQUEsTUFDSUMsTUFBTSxHQUFHc0ksT0FBTyxJQUFJLElBQVgsR0FBa0IsQ0FBbEIsR0FBc0JBLE9BQU8sQ0FBQ3RJLE1BRDNDO0FBR0EsT0FBS3VJLEtBQUw7O0FBQ0EsU0FBTyxFQUFFeEksS0FBRixHQUFVQyxNQUFqQixFQUF5QjtBQUN2QixRQUFJd0ksS0FBSyxHQUFHRixPQUFPLENBQUN2SSxLQUFELENBQW5CO0FBQ0EsU0FBSzBJLEdBQUwsQ0FBU0QsS0FBSyxDQUFDLENBQUQsQ0FBZCxFQUFtQkEsS0FBSyxDQUFDLENBQUQsQ0FBeEI7QUFDRDtBQUNGOzs7QUFHRHNFLFVBQVEsQ0FBQ3pMLFNBQVQsQ0FBbUJrSCxLQUFuQixHQUEyQndELGFBQTNCO0FBQ0FlLFVBQVEsQ0FBQ3pMLFNBQVQsQ0FBbUIsUUFBbkIsSUFBK0JpTCxjQUEvQjtBQUNBUSxVQUFRLENBQUN6TCxTQUFULENBQW1CcUgsR0FBbkIsR0FBeUI4RCxXQUF6QjtBQUNBTSxVQUFRLENBQUN6TCxTQUFULENBQW1Cc0gsR0FBbkIsR0FBeUIrRCxXQUF6QjtBQUNBSSxVQUFRLENBQUN6TCxTQUFULENBQW1Cb0gsR0FBbkIsR0FBeUJtRSxXQUF6QjtJQUVBRyxTQUFjLEdBQUdEOztBQy9CakIsSUFBSXpFLFdBQVMsR0FBR3pILFVBQWhCO0FBQUEsSUFDSWtLLEtBQUcsR0FBR3pJLElBRFY7QUFBQSxJQUVJeUssUUFBUSxHQUFHeEssU0FGZjtBQUlBOztBQUNBLElBQUkwSyxnQkFBZ0IsR0FBRyxHQUF2QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLFVBQVQsQ0FBa0I3RixHQUFsQixFQUF1Qi9HLEtBQXZCLEVBQThCO0FBQzVCLE1BQUlvSCxJQUFJLEdBQUcsS0FBS1IsUUFBaEI7O0FBQ0EsTUFBSVEsSUFBSSxZQUFZWSxXQUFwQixFQUErQjtBQUM3QixRQUFJNkUsS0FBSyxHQUFHekYsSUFBSSxDQUFDUixRQUFqQjs7QUFDQSxRQUFJLENBQUM2RCxLQUFELElBQVNvQyxLQUFLLENBQUNsTixNQUFOLEdBQWVnTixnQkFBZ0IsR0FBRyxDQUEvQyxFQUFtRDtBQUNqREUsTUFBQUEsS0FBSyxDQUFDaEYsSUFBTixDQUFXLENBQUNkLEdBQUQsRUFBTS9HLEtBQU4sQ0FBWDtBQUNBLFdBQUttRyxJQUFMLEdBQVksRUFBRWlCLElBQUksQ0FBQ2pCLElBQW5CO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0RpQixJQUFBQSxJQUFJLEdBQUcsS0FBS1IsUUFBTCxHQUFnQixJQUFJNkYsUUFBSixDQUFhSSxLQUFiLENBQXZCO0FBQ0Q7O0FBQ0R6RixFQUFBQSxJQUFJLENBQUNnQixHQUFMLENBQVNyQixHQUFULEVBQWMvRyxLQUFkO0FBQ0EsT0FBS21HLElBQUwsR0FBWWlCLElBQUksQ0FBQ2pCLElBQWpCO0FBQ0EsU0FBTyxJQUFQO0FBQ0Q7O0lBRUQyRyxTQUFjLEdBQUdGOztBQ2pDakIsSUFBSTVFLFNBQVMsR0FBR3pILFVBQWhCO0FBQUEsSUFDSWlJLFVBQVUsR0FBR3hHLFdBRGpCO0FBQUEsSUFFSTBHLFdBQVcsR0FBR3pHLFlBRmxCO0FBQUEsSUFHSTJHLFFBQVEsR0FBR3BGLFNBSGY7QUFBQSxJQUlJc0YsUUFBUSxHQUFHZixTQUpmO0FBQUEsSUFLSTZFLFFBQVEsR0FBR0csU0FMZjtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLE9BQVQsQ0FBZS9FLE9BQWYsRUFBd0I7QUFDdEIsTUFBSWIsSUFBSSxHQUFHLEtBQUtSLFFBQUwsR0FBZ0IsSUFBSW9CLFNBQUosQ0FBY0MsT0FBZCxDQUEzQjtBQUNBLE9BQUs5QixJQUFMLEdBQVlpQixJQUFJLENBQUNqQixJQUFqQjtBQUNEOzs7QUFHRDZHLE9BQUssQ0FBQ2hNLFNBQU4sQ0FBZ0JrSCxLQUFoQixHQUF3Qk0sVUFBeEI7QUFDQXdFLE9BQUssQ0FBQ2hNLFNBQU4sQ0FBZ0IsUUFBaEIsSUFBNEIwSCxXQUE1QjtBQUNBc0UsT0FBSyxDQUFDaE0sU0FBTixDQUFnQnFILEdBQWhCLEdBQXNCTyxRQUF0QjtBQUNBb0UsT0FBSyxDQUFDaE0sU0FBTixDQUFnQnNILEdBQWhCLEdBQXNCUSxRQUF0QjtBQUNBa0UsT0FBSyxDQUFDaE0sU0FBTixDQUFnQm9ILEdBQWhCLEdBQXNCd0UsUUFBdEI7SUFFQUssTUFBYyxHQUFHRDs7Ozs7Ozs7Ozs7O0FDakJqQixTQUFTRSxXQUFULENBQW1CM04sS0FBbkIsRUFBMEI0TixRQUExQixFQUFvQztBQUNsQyxNQUFJek4sS0FBSyxHQUFHLENBQUMsQ0FBYjtBQUFBLE1BQ0lDLE1BQU0sR0FBR0osS0FBSyxJQUFJLElBQVQsR0FBZ0IsQ0FBaEIsR0FBb0JBLEtBQUssQ0FBQ0ksTUFEdkM7O0FBR0EsU0FBTyxFQUFFRCxLQUFGLEdBQVVDLE1BQWpCLEVBQXlCO0FBQ3ZCLFFBQUl3TixRQUFRLENBQUM1TixLQUFLLENBQUNHLEtBQUQsQ0FBTixFQUFlQSxLQUFmLEVBQXNCSCxLQUF0QixDQUFSLEtBQXlDLEtBQTdDLEVBQW9EO0FBQ2xEO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPQSxLQUFQO0FBQ0Q7O0lBRUQ2TixVQUFjLEdBQUdGOztBQ3JCakIsSUFBSTNDLFdBQVMsR0FBR2hLLFVBQWhCOztBQUVBLElBQUk4TSxnQkFBYyxHQUFJLFlBQVc7QUFDL0IsTUFBSTtBQUNGLFFBQUk3RCxJQUFJLEdBQUdlLFdBQVMsQ0FBQ2xLLE1BQUQsRUFBUyxnQkFBVCxDQUFwQjtBQUNBbUosSUFBQUEsSUFBSSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxDQUFKO0FBQ0EsV0FBT0EsSUFBUDtBQUNELEdBSkQsQ0FJRSxPQUFPNUgsQ0FBUCxFQUFVO0FBQ2IsQ0FOcUIsRUFBdEI7O0lBUUEwTCxlQUFjLEdBQUdEOztBQ1ZqQixJQUFJQSxjQUFjLEdBQUc5TSxlQUFyQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTZ04saUJBQVQsQ0FBeUI3SixNQUF6QixFQUFpQ3FELEdBQWpDLEVBQXNDL0csS0FBdEMsRUFBNkM7QUFDM0MsTUFBSStHLEdBQUcsSUFBSSxXQUFQLElBQXNCc0csY0FBMUIsRUFBMEM7QUFDeENBLElBQUFBLGNBQWMsQ0FBQzNKLE1BQUQsRUFBU3FELEdBQVQsRUFBYztBQUMxQixzQkFBZ0IsSUFEVTtBQUUxQixvQkFBYyxJQUZZO0FBRzFCLGVBQVMvRyxLQUhpQjtBQUkxQixrQkFBWTtBQUpjLEtBQWQsQ0FBZDtBQU1ELEdBUEQsTUFPTztBQUNMMEQsSUFBQUEsTUFBTSxDQUFDcUQsR0FBRCxDQUFOLEdBQWMvRyxLQUFkO0FBQ0Q7QUFDRjs7SUFFRHdOLGdCQUFjLEdBQUdEOztBQ3hCakIsSUFBSUEsaUJBQWUsR0FBR2hOLGdCQUF0QjtBQUFBLElBQ0lSLEVBQUUsR0FBR2lDLElBRFQ7QUFHQTs7QUFDQSxJQUFJakIsYUFBVyxHQUFHVixNQUFNLENBQUNXLFNBQXpCO0FBRUE7O0FBQ0EsSUFBSUMsZ0JBQWMsR0FBR0YsYUFBVyxDQUFDRSxjQUFqQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVN3TSxhQUFULENBQXFCL0osTUFBckIsRUFBNkJxRCxHQUE3QixFQUFrQy9HLEtBQWxDLEVBQXlDO0FBQ3ZDLE1BQUkwTixRQUFRLEdBQUdoSyxNQUFNLENBQUNxRCxHQUFELENBQXJCOztBQUNBLE1BQUksRUFBRTlGLGdCQUFjLENBQUNRLElBQWYsQ0FBb0JpQyxNQUFwQixFQUE0QnFELEdBQTVCLEtBQW9DaEgsRUFBRSxDQUFDMk4sUUFBRCxFQUFXMU4sS0FBWCxDQUF4QyxLQUNDQSxLQUFLLEtBQUtzQixTQUFWLElBQXVCLEVBQUV5RixHQUFHLElBQUlyRCxNQUFULENBRDVCLEVBQytDO0FBQzdDNkosSUFBQUEsaUJBQWUsQ0FBQzdKLE1BQUQsRUFBU3FELEdBQVQsRUFBYy9HLEtBQWQsQ0FBZjtBQUNEO0FBQ0Y7O0lBRUQyTixZQUFjLEdBQUdGOztBQzNCakIsSUFBSUEsYUFBVyxHQUFHbE4sWUFBbEI7QUFBQSxJQUNJZ04sZUFBZSxHQUFHdkwsZ0JBRHRCO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBUzRMLFlBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCQyxLQUE1QixFQUFtQ3BLLE1BQW5DLEVBQTJDcUssVUFBM0MsRUFBdUQ7QUFDckQsTUFBSUMsS0FBSyxHQUFHLENBQUN0SyxNQUFiO0FBQ0FBLEVBQUFBLE1BQU0sS0FBS0EsTUFBTSxHQUFHLEVBQWQsQ0FBTjtBQUVBLE1BQUloRSxLQUFLLEdBQUcsQ0FBQyxDQUFiO0FBQUEsTUFDSUMsTUFBTSxHQUFHbU8sS0FBSyxDQUFDbk8sTUFEbkI7O0FBR0EsU0FBTyxFQUFFRCxLQUFGLEdBQVVDLE1BQWpCLEVBQXlCO0FBQ3ZCLFFBQUlvSCxHQUFHLEdBQUcrRyxLQUFLLENBQUNwTyxLQUFELENBQWY7QUFFQSxRQUFJdU8sUUFBUSxHQUFHRixVQUFVLEdBQ3JCQSxVQUFVLENBQUNySyxNQUFNLENBQUNxRCxHQUFELENBQVAsRUFBYzhHLE1BQU0sQ0FBQzlHLEdBQUQsQ0FBcEIsRUFBMkJBLEdBQTNCLEVBQWdDckQsTUFBaEMsRUFBd0NtSyxNQUF4QyxDQURXLEdBRXJCdk0sU0FGSjs7QUFJQSxRQUFJMk0sUUFBUSxLQUFLM00sU0FBakIsRUFBNEI7QUFDMUIyTSxNQUFBQSxRQUFRLEdBQUdKLE1BQU0sQ0FBQzlHLEdBQUQsQ0FBakI7QUFDRDs7QUFDRCxRQUFJaUgsS0FBSixFQUFXO0FBQ1RULE1BQUFBLGVBQWUsQ0FBQzdKLE1BQUQsRUFBU3FELEdBQVQsRUFBY2tILFFBQWQsQ0FBZjtBQUNELEtBRkQsTUFFTztBQUNMUixNQUFBQSxhQUFXLENBQUMvSixNQUFELEVBQVNxRCxHQUFULEVBQWNrSCxRQUFkLENBQVg7QUFDRDtBQUNGOztBQUNELFNBQU92SyxNQUFQO0FBQ0Q7O0lBRUR3SyxXQUFjLEdBQUdOOzs7Ozs7Ozs7Ozs7QUM5QmpCLFNBQVNPLFdBQVQsQ0FBbUJDLENBQW5CLEVBQXNCakIsUUFBdEIsRUFBZ0M7QUFDOUIsTUFBSXpOLEtBQUssR0FBRyxDQUFDLENBQWI7QUFBQSxNQUNJRSxNQUFNLEdBQUdDLEtBQUssQ0FBQ3VPLENBQUQsQ0FEbEI7O0FBR0EsU0FBTyxFQUFFMU8sS0FBRixHQUFVME8sQ0FBakIsRUFBb0I7QUFDbEJ4TyxJQUFBQSxNQUFNLENBQUNGLEtBQUQsQ0FBTixHQUFnQnlOLFFBQVEsQ0FBQ3pOLEtBQUQsQ0FBeEI7QUFDRDs7QUFDRCxTQUFPRSxNQUFQO0FBQ0Q7O0lBRUR5TyxVQUFjLEdBQUdGOztBQ25CakIsSUFBSS9MLFlBQVUsR0FBRzdCLFdBQWpCO0FBQUEsSUFDSStELGNBQVksR0FBR3RDLGNBRG5CO0FBR0E7O0FBQ0EsSUFBSXNNLFNBQU8sR0FBRyxvQkFBZDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLGlCQUFULENBQXlCdk8sS0FBekIsRUFBZ0M7QUFDOUIsU0FBT3NFLGNBQVksQ0FBQ3RFLEtBQUQsQ0FBWixJQUF1Qm9DLFlBQVUsQ0FBQ3BDLEtBQUQsQ0FBVixJQUFxQnNPLFNBQW5EO0FBQ0Q7O0lBRURFLGdCQUFjLEdBQUdEOztBQ2pCakIsSUFBSUEsZUFBZSxHQUFHaE8sZ0JBQXRCO0FBQUEsSUFDSStELGNBQVksR0FBR3RDLGNBRG5CO0FBR0E7O0FBQ0EsSUFBSWpCLGFBQVcsR0FBR1YsTUFBTSxDQUFDVyxTQUF6QjtBQUVBOztBQUNBLElBQUlDLGdCQUFjLEdBQUdGLGFBQVcsQ0FBQ0UsY0FBakM7QUFFQTs7QUFDQSxJQUFJd04sc0JBQW9CLEdBQUcxTixhQUFXLENBQUMwTixvQkFBdkM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUMsYUFBVyxHQUFHSCxlQUFlLENBQUMsWUFBVztBQUFFLFNBQU9JLFNBQVA7QUFBbUIsQ0FBaEMsRUFBRCxDQUFmLEdBQXNESixlQUF0RCxHQUF3RSxVQUFTdk8sS0FBVCxFQUFnQjtBQUN4RyxTQUFPc0UsY0FBWSxDQUFDdEUsS0FBRCxDQUFaLElBQXVCaUIsZ0JBQWMsQ0FBQ1EsSUFBZixDQUFvQnpCLEtBQXBCLEVBQTJCLFFBQTNCLENBQXZCLElBQ0wsQ0FBQ3lPLHNCQUFvQixDQUFDaE4sSUFBckIsQ0FBMEJ6QixLQUExQixFQUFpQyxRQUFqQyxDQURIO0FBRUQsQ0FIRDtJQUtBNE8sYUFBYyxHQUFHRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pqQixJQUFJRyxTQUFPLEdBQUdoUCxLQUFLLENBQUNnUCxPQUFwQjtJQUVBQyxTQUFjLEdBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaakIsU0FBU0UsU0FBVCxHQUFxQjtBQUNuQixTQUFPLEtBQVA7QUFDRDs7SUFFREMsV0FBYyxHQUFHRDs7O0FDakJqQixNQUFJck8sSUFBSSxHQUFHSCxLQUFYO0FBQUEsTUFDSXdPLFNBQVMsR0FBRy9NLFdBRGhCO0FBR0E7O0FBQ0EsTUFBSWlOLFdBQVcsR0FBaUNDLE9BQTlCLElBQXlDLENBQUNBLE9BQU8sQ0FBQ0MsUUFBbEQsSUFBOERELE9BQWhGO0FBRUE7O0FBQ0EsTUFBSUUsVUFBVSxHQUFHSCxXQUFXLElBQUksWUFBaUIsUUFBaEMsSUFBNENJLE1BQTVDLElBQXNELENBQUNBLE1BQU0sQ0FBQ0YsUUFBOUQsSUFBMEVFLE1BQTNGO0FBRUE7O0FBQ0EsTUFBSUMsYUFBYSxHQUFHRixVQUFVLElBQUlBLFVBQVUsQ0FBQ0YsT0FBWCxLQUF1QkQsV0FBekQ7QUFFQTs7QUFDQSxNQUFJTSxNQUFNLEdBQUdELGFBQWEsR0FBRzVPLElBQUksQ0FBQzZPLE1BQVIsR0FBaUJqTyxTQUEzQztBQUVBOztBQUNBLE1BQUlrTyxjQUFjLEdBQUdELE1BQU0sR0FBR0EsTUFBTSxDQUFDRSxRQUFWLEdBQXFCbk8sU0FBaEQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUltTyxRQUFRLEdBQUdELGNBQWMsSUFBSVQsU0FBakM7QUFFQU0sRUFBQUEsY0FBQSxHQUFpQkksUUFBakI7OztBQ3JDQSxJQUFJck4sWUFBVSxHQUFHN0IsV0FBakI7QUFBQSxJQUNJeUMsUUFBUSxHQUFHaEIsVUFEZjtBQUFBLElBRUlzQyxjQUFZLEdBQUdyQyxjQUZuQjtBQUlBOztBQUNBLElBQUlxTSxTQUFPLEdBQUcsb0JBQWQ7QUFBQSxJQUNJb0IsVUFBUSxHQUFHLGdCQURmO0FBQUEsSUFFSUMsU0FBTyxHQUFHLGtCQUZkO0FBQUEsSUFHSUMsU0FBTyxHQUFHLGVBSGQ7QUFBQSxJQUlJQyxVQUFRLEdBQUcsZ0JBSmY7QUFBQSxJQUtJbk4sU0FBTyxHQUFHLG1CQUxkO0FBQUEsSUFNSW9OLFFBQU0sR0FBRyxjQU5iO0FBQUEsSUFPSUMsV0FBUyxHQUFHLGlCQVBoQjtBQUFBLElBUUlDLFdBQVMsR0FBRyxpQkFSaEI7QUFBQSxJQVNJQyxXQUFTLEdBQUcsaUJBVGhCO0FBQUEsSUFVSUMsUUFBTSxHQUFHLGNBVmI7QUFBQSxJQVdJQyxXQUFTLEdBQUcsaUJBWGhCO0FBQUEsSUFZSUMsWUFBVSxHQUFHLGtCQVpqQjtBQWNBLElBQUlDLGdCQUFjLEdBQUcsc0JBQXJCO0FBQUEsSUFDSUMsYUFBVyxHQUFHLG1CQURsQjtBQUFBLElBRUlDLFlBQVUsR0FBRyx1QkFGakI7QUFBQSxJQUdJQyxZQUFVLEdBQUcsdUJBSGpCO0FBQUEsSUFJSUMsU0FBTyxHQUFHLG9CQUpkO0FBQUEsSUFLSUMsVUFBUSxHQUFHLHFCQUxmO0FBQUEsSUFNSUMsVUFBUSxHQUFHLHFCQU5mO0FBQUEsSUFPSUMsVUFBUSxHQUFHLHFCQVBmO0FBQUEsSUFRSUMsaUJBQWUsR0FBRyw0QkFSdEI7QUFBQSxJQVNJQyxXQUFTLEdBQUcsc0JBVGhCO0FBQUEsSUFVSUMsV0FBUyxHQUFHLHNCQVZoQjtBQVlBOztBQUNBLElBQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBQSxjQUFjLENBQUNULFlBQUQsQ0FBZCxHQUE2QlMsY0FBYyxDQUFDUixZQUFELENBQWQsR0FDN0JRLGNBQWMsQ0FBQ1AsU0FBRCxDQUFkLEdBQTBCTyxjQUFjLENBQUNOLFVBQUQsQ0FBZCxHQUMxQk0sY0FBYyxDQUFDTCxVQUFELENBQWQsR0FBMkJLLGNBQWMsQ0FBQ0osVUFBRCxDQUFkLEdBQzNCSSxjQUFjLENBQUNILGlCQUFELENBQWQsR0FBa0NHLGNBQWMsQ0FBQ0YsV0FBRCxDQUFkLEdBQ2xDRSxjQUFjLENBQUNELFdBQUQsQ0FBZCxHQUE0QixJQUo1QjtBQUtBQyxjQUFjLENBQUMxQyxTQUFELENBQWQsR0FBMEIwQyxjQUFjLENBQUN0QixVQUFELENBQWQsR0FDMUJzQixjQUFjLENBQUNYLGdCQUFELENBQWQsR0FBaUNXLGNBQWMsQ0FBQ3JCLFNBQUQsQ0FBZCxHQUNqQ3FCLGNBQWMsQ0FBQ1YsYUFBRCxDQUFkLEdBQThCVSxjQUFjLENBQUNwQixTQUFELENBQWQsR0FDOUJvQixjQUFjLENBQUNuQixVQUFELENBQWQsR0FBMkJtQixjQUFjLENBQUN0TyxTQUFELENBQWQsR0FDM0JzTyxjQUFjLENBQUNsQixRQUFELENBQWQsR0FBeUJrQixjQUFjLENBQUNqQixXQUFELENBQWQsR0FDekJpQixjQUFjLENBQUNoQixXQUFELENBQWQsR0FBNEJnQixjQUFjLENBQUNmLFdBQUQsQ0FBZCxHQUM1QmUsY0FBYyxDQUFDZCxRQUFELENBQWQsR0FBeUJjLGNBQWMsQ0FBQ2IsV0FBRCxDQUFkLEdBQ3pCYSxjQUFjLENBQUNaLFlBQUQsQ0FBZCxHQUE2QixLQVA3QjtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNhLGtCQUFULENBQTBCalIsS0FBMUIsRUFBaUM7QUFDL0IsU0FBT3NFLGNBQVksQ0FBQ3RFLEtBQUQsQ0FBWixJQUNMZ0QsUUFBUSxDQUFDaEQsS0FBSyxDQUFDTCxNQUFQLENBREgsSUFDcUIsQ0FBQyxDQUFDcVIsY0FBYyxDQUFDNU8sWUFBVSxDQUFDcEMsS0FBRCxDQUFYLENBRDVDO0FBRUQ7O0lBRURrUixpQkFBYyxHQUFHRDs7Ozs7Ozs7OztBQ3BEakIsU0FBU0UsV0FBVCxDQUFtQjNILElBQW5CLEVBQXlCO0FBQ3ZCLFNBQU8sVUFBU3hKLEtBQVQsRUFBZ0I7QUFDckIsV0FBT3dKLElBQUksQ0FBQ3hKLEtBQUQsQ0FBWDtBQUNELEdBRkQ7QUFHRDs7SUFFRG9SLFVBQWMsR0FBR0Q7Ozs7O0FDYmpCLE1BQUloUixVQUFVLEdBQUdJLFdBQWpCO0FBRUE7O0FBQ0EsTUFBSTBPLFdBQVcsR0FBaUNDLE9BQTlCLElBQXlDLENBQUNBLE9BQU8sQ0FBQ0MsUUFBbEQsSUFBOERELE9BQWhGO0FBRUE7O0FBQ0EsTUFBSUUsVUFBVSxHQUFHSCxXQUFXLElBQUksWUFBaUIsUUFBaEMsSUFBNENJLE1BQTVDLElBQXNELENBQUNBLE1BQU0sQ0FBQ0YsUUFBOUQsSUFBMEVFLE1BQTNGO0FBRUE7O0FBQ0EsTUFBSUMsYUFBYSxHQUFHRixVQUFVLElBQUlBLFVBQVUsQ0FBQ0YsT0FBWCxLQUF1QkQsV0FBekQ7QUFFQTs7QUFDQSxNQUFJb0MsV0FBVyxHQUFHL0IsYUFBYSxJQUFJblAsVUFBVSxDQUFDbVIsT0FBOUM7QUFFQTs7QUFDQSxNQUFJQyxRQUFRLEdBQUksWUFBVztBQUN6QixRQUFJOztBQUVGLFVBQUlDLEtBQUssR0FBR3BDLFVBQVUsSUFBSUEsVUFBVSxDQUFDcUMsT0FBekIsSUFBb0NyQyxVQUFVLENBQUNxQyxPQUFYLENBQW1CLE1BQW5CLEVBQTJCRCxLQUEzRTs7QUFFQSxVQUFJQSxLQUFKLEVBQVc7QUFDVCxlQUFPQSxLQUFQO0FBQ0QsT0FOQzs7O0FBU0YsYUFBT0gsV0FBVyxJQUFJQSxXQUFXLENBQUNLLE9BQTNCLElBQXNDTCxXQUFXLENBQUNLLE9BQVosQ0FBb0IsTUFBcEIsQ0FBN0M7QUFDRCxLQVZELENBVUUsT0FBTzlQLENBQVAsRUFBVTtBQUNiLEdBWmUsRUFBaEI7O0FBY0F5TixFQUFBQSxjQUFBLEdBQWlCa0MsUUFBakI7OztBQzdCQSxJQUFJTixnQkFBZ0IsR0FBRzFRLGlCQUF2QjtBQUFBLElBQ0k0USxXQUFTLEdBQUduUCxVQURoQjtBQUFBLElBRUl1UCxVQUFRLEdBQUd0UCxpQkFGZjtBQUlBOztBQUNBLElBQUkwUCxnQkFBZ0IsR0FBR0osVUFBUSxJQUFJQSxVQUFRLENBQUNLLFlBQTVDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQSxjQUFZLEdBQUdELGdCQUFnQixHQUFHUixXQUFTLENBQUNRLGdCQUFELENBQVosR0FBaUNWLGdCQUFwRTtJQUVBWSxjQUFjLEdBQUdEOztBQzFCakIsSUFBSXpELFNBQVMsR0FBRzVOLFVBQWhCO0FBQUEsSUFDSW1PLFdBQVcsR0FBRzFNLGFBRGxCO0FBQUEsSUFFSTZNLFNBQU8sR0FBRzVNLFNBRmQ7QUFBQSxJQUdJd04sVUFBUSxHQUFHak0sa0JBSGY7QUFBQSxJQUlJSCxPQUFPLEdBQUcwRSxRQUpkO0FBQUEsSUFLSTZKLFlBQVksR0FBRzdFLGNBTG5CO0FBT0E7O0FBQ0EsSUFBSWhNLGFBQVcsR0FBR1YsTUFBTSxDQUFDVyxTQUF6QjtBQUVBOztBQUNBLElBQUlDLGdCQUFjLEdBQUdGLGFBQVcsQ0FBQ0UsY0FBakM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVM2USxlQUFULENBQXVCOVIsS0FBdkIsRUFBOEIrUixTQUE5QixFQUF5QztBQUN2QyxNQUFJQyxLQUFLLEdBQUduRCxTQUFPLENBQUM3TyxLQUFELENBQW5CO0FBQUEsTUFDSWlTLEtBQUssR0FBRyxDQUFDRCxLQUFELElBQVV0RCxXQUFXLENBQUMxTyxLQUFELENBRGpDO0FBQUEsTUFFSWtTLE1BQU0sR0FBRyxDQUFDRixLQUFELElBQVUsQ0FBQ0MsS0FBWCxJQUFvQnhDLFVBQVEsQ0FBQ3pQLEtBQUQsQ0FGekM7QUFBQSxNQUdJbVMsTUFBTSxHQUFHLENBQUNILEtBQUQsSUFBVSxDQUFDQyxLQUFYLElBQW9CLENBQUNDLE1BQXJCLElBQStCTixZQUFZLENBQUM1UixLQUFELENBSHhEO0FBQUEsTUFJSW9TLFdBQVcsR0FBR0osS0FBSyxJQUFJQyxLQUFULElBQWtCQyxNQUFsQixJQUE0QkMsTUFKOUM7QUFBQSxNQUtJdlMsTUFBTSxHQUFHd1MsV0FBVyxHQUFHakUsU0FBUyxDQUFDbk8sS0FBSyxDQUFDTCxNQUFQLEVBQWUwUyxNQUFmLENBQVosR0FBcUMsRUFMN0Q7QUFBQSxNQU1JMVMsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BTnBCOztBQVFBLE9BQUssSUFBSW9ILEdBQVQsSUFBZ0IvRyxLQUFoQixFQUF1QjtBQUNyQixRQUFJLENBQUMrUixTQUFTLElBQUk5USxnQkFBYyxDQUFDUSxJQUFmLENBQW9CekIsS0FBcEIsRUFBMkIrRyxHQUEzQixDQUFkLEtBQ0EsRUFBRXFMLFdBQVc7QUFFVnJMLElBQUFBLEdBQUcsSUFBSSxRQUFQO0FBRUNtTCxJQUFBQSxNQUFNLEtBQUtuTCxHQUFHLElBQUksUUFBUCxJQUFtQkEsR0FBRyxJQUFJLFFBQS9CLENBRlA7QUFJQ29MLElBQUFBLE1BQU0sS0FBS3BMLEdBQUcsSUFBSSxRQUFQLElBQW1CQSxHQUFHLElBQUksWUFBMUIsSUFBMENBLEdBQUcsSUFBSSxZQUF0RCxDQUpQO0FBTUExRCxJQUFBQSxPQUFPLENBQUMwRCxHQUFELEVBQU1wSCxNQUFOLENBUkcsQ0FBYixDQURKLEVBVVE7QUFDTkMsTUFBQUEsTUFBTSxDQUFDaUksSUFBUCxDQUFZZCxHQUFaO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPbkgsTUFBUDtBQUNEOztJQUVEMFMsY0FBYyxHQUFHUjs7O0FDL0NqQixJQUFJL1EsYUFBVyxHQUFHVixNQUFNLENBQUNXLFNBQXpCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU3VSLGFBQVQsQ0FBcUJ2UyxLQUFyQixFQUE0QjtBQUMxQixNQUFJd1MsSUFBSSxHQUFHeFMsS0FBSyxJQUFJQSxLQUFLLENBQUN5UyxXQUExQjtBQUFBLE1BQ0lDLEtBQUssR0FBSSxPQUFPRixJQUFQLElBQWUsVUFBZixJQUE2QkEsSUFBSSxDQUFDeFIsU0FBbkMsSUFBaURELGFBRDdEO0FBR0EsU0FBT2YsS0FBSyxLQUFLMFMsS0FBakI7QUFDRDs7SUFFREMsWUFBYyxHQUFHSjs7Ozs7Ozs7Ozs7QUNUakIsU0FBU0ssU0FBVCxDQUFpQnBKLElBQWpCLEVBQXVCcUosU0FBdkIsRUFBa0M7QUFDaEMsU0FBTyxVQUFTQyxHQUFULEVBQWM7QUFDbkIsV0FBT3RKLElBQUksQ0FBQ3FKLFNBQVMsQ0FBQ0MsR0FBRCxDQUFWLENBQVg7QUFDRCxHQUZEO0FBR0Q7O0lBRURDLFFBQWMsR0FBR0g7O0FDZGpCLElBQUlBLFNBQU8sR0FBR3JTLFFBQWQ7QUFFQTs7QUFDQSxJQUFJeVMsWUFBVSxHQUFHSixTQUFPLENBQUN2UyxNQUFNLENBQUNnSixJQUFSLEVBQWNoSixNQUFkLENBQXhCO0lBRUE0UyxXQUFjLEdBQUdEOztBQ0xqQixJQUFJVCxhQUFXLEdBQUdoUyxZQUFsQjtBQUFBLElBQ0l5UyxVQUFVLEdBQUdoUixXQURqQjtBQUdBOztBQUNBLElBQUlqQixhQUFXLEdBQUdWLE1BQU0sQ0FBQ1csU0FBekI7QUFFQTs7QUFDQSxJQUFJQyxnQkFBYyxHQUFHRixhQUFXLENBQUNFLGNBQWpDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU2lTLFVBQVQsQ0FBa0J4UCxNQUFsQixFQUEwQjtBQUN4QixNQUFJLENBQUM2TyxhQUFXLENBQUM3TyxNQUFELENBQWhCLEVBQTBCO0FBQ3hCLFdBQU9zUCxVQUFVLENBQUN0UCxNQUFELENBQWpCO0FBQ0Q7O0FBQ0QsTUFBSTlELE1BQU0sR0FBRyxFQUFiOztBQUNBLE9BQUssSUFBSW1ILEdBQVQsSUFBZ0IxRyxNQUFNLENBQUNxRCxNQUFELENBQXRCLEVBQWdDO0FBQzlCLFFBQUl6QyxnQkFBYyxDQUFDUSxJQUFmLENBQW9CaUMsTUFBcEIsRUFBNEJxRCxHQUE1QixLQUFvQ0EsR0FBRyxJQUFJLGFBQS9DLEVBQThEO0FBQzVEbkgsTUFBQUEsTUFBTSxDQUFDaUksSUFBUCxDQUFZZCxHQUFaO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPbkgsTUFBUDtBQUNEOztJQUVEdVQsU0FBYyxHQUFHRDs7QUM3QmpCLElBQUlwQixlQUFhLEdBQUd2UixjQUFwQjtBQUFBLElBQ0kyUyxRQUFRLEdBQUdsUixTQURmO0FBQUEsSUFFSWtCLGFBQVcsR0FBR2pCLGFBRmxCO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU29ILE1BQVQsQ0FBYzNGLE1BQWQsRUFBc0I7QUFDcEIsU0FBT1IsYUFBVyxDQUFDUSxNQUFELENBQVgsR0FBc0JvTyxlQUFhLENBQUNwTyxNQUFELENBQW5DLEdBQThDd1AsUUFBUSxDQUFDeFAsTUFBRCxDQUE3RDtBQUNEOztJQUVEMFAsTUFBYyxHQUFHL0o7O0FDcENqQixJQUFJdUUsWUFBVSxHQUFHck4sV0FBakI7QUFBQSxJQUNJOEksTUFBSSxHQUFHckgsTUFEWDtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTcVIsWUFBVCxDQUFvQjNQLE1BQXBCLEVBQTRCbUssTUFBNUIsRUFBb0M7QUFDbEMsU0FBT25LLE1BQU0sSUFBSWtLLFlBQVUsQ0FBQ0MsTUFBRCxFQUFTeEUsTUFBSSxDQUFDd0UsTUFBRCxDQUFiLEVBQXVCbkssTUFBdkIsQ0FBM0I7QUFDRDs7SUFFRDRQLFdBQWMsR0FBR0Q7Ozs7Ozs7Ozs7OztBQ1BqQixTQUFTRSxjQUFULENBQXNCN1AsTUFBdEIsRUFBOEI7QUFDNUIsTUFBSTlELE1BQU0sR0FBRyxFQUFiOztBQUNBLE1BQUk4RCxNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNsQixTQUFLLElBQUlxRCxHQUFULElBQWdCMUcsTUFBTSxDQUFDcUQsTUFBRCxDQUF0QixFQUFnQztBQUM5QjlELE1BQUFBLE1BQU0sQ0FBQ2lJLElBQVAsQ0FBWWQsR0FBWjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT25ILE1BQVA7QUFDRDs7SUFFRDRULGFBQWMsR0FBR0Q7O0FDbkJqQixJQUFJalIsVUFBUSxHQUFHL0IsVUFBZjtBQUFBLElBQ0lnUyxhQUFXLEdBQUd2USxZQURsQjtBQUFBLElBRUl1UixZQUFZLEdBQUd0UixhQUZuQjtBQUlBOztBQUNBLElBQUlsQixhQUFXLEdBQUdWLE1BQU0sQ0FBQ1csU0FBekI7QUFFQTs7QUFDQSxJQUFJQyxnQkFBYyxHQUFHRixhQUFXLENBQUNFLGNBQWpDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU3dTLFlBQVQsQ0FBb0IvUCxNQUFwQixFQUE0QjtBQUMxQixNQUFJLENBQUNwQixVQUFRLENBQUNvQixNQUFELENBQWIsRUFBdUI7QUFDckIsV0FBTzZQLFlBQVksQ0FBQzdQLE1BQUQsQ0FBbkI7QUFDRDs7QUFDRCxNQUFJZ1EsT0FBTyxHQUFHbkIsYUFBVyxDQUFDN08sTUFBRCxDQUF6QjtBQUFBLE1BQ0k5RCxNQUFNLEdBQUcsRUFEYjs7QUFHQSxPQUFLLElBQUltSCxHQUFULElBQWdCckQsTUFBaEIsRUFBd0I7QUFDdEIsUUFBSSxFQUFFcUQsR0FBRyxJQUFJLGFBQVAsS0FBeUIyTSxPQUFPLElBQUksQ0FBQ3pTLGdCQUFjLENBQUNRLElBQWYsQ0FBb0JpQyxNQUFwQixFQUE0QnFELEdBQTVCLENBQXJDLENBQUYsQ0FBSixFQUErRTtBQUM3RW5ILE1BQUFBLE1BQU0sQ0FBQ2lJLElBQVAsQ0FBWWQsR0FBWjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT25ILE1BQVA7QUFDRDs7SUFFRCtULFdBQWMsR0FBR0Y7O0FDaENqQixJQUFJM0IsYUFBYSxHQUFHdlIsY0FBcEI7QUFBQSxJQUNJa1QsVUFBVSxHQUFHelIsV0FEakI7QUFBQSxJQUVJa0IsV0FBVyxHQUFHakIsYUFGbEI7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVMyUixRQUFULENBQWdCbFEsTUFBaEIsRUFBd0I7QUFDdEIsU0FBT1IsV0FBVyxDQUFDUSxNQUFELENBQVgsR0FBc0JvTyxhQUFhLENBQUNwTyxNQUFELEVBQVMsSUFBVCxDQUFuQyxHQUFvRCtQLFVBQVUsQ0FBQy9QLE1BQUQsQ0FBckU7QUFDRDs7SUFFRG1RLFFBQWMsR0FBR0Q7O0FDL0JqQixJQUFJaEcsWUFBVSxHQUFHck4sV0FBakI7QUFBQSxJQUNJcVQsUUFBTSxHQUFHNVIsUUFEYjtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTOFIsY0FBVCxDQUFzQnBRLE1BQXRCLEVBQThCbUssTUFBOUIsRUFBc0M7QUFDcEMsU0FBT25LLE1BQU0sSUFBSWtLLFlBQVUsQ0FBQ0MsTUFBRCxFQUFTK0YsUUFBTSxDQUFDL0YsTUFBRCxDQUFmLEVBQXlCbkssTUFBekIsQ0FBM0I7QUFDRDs7SUFFRHFRLGFBQWMsR0FBR0Q7Ozs7O0FDaEJqQixNQUFJcFQsSUFBSSxHQUFHSCxLQUFYO0FBRUE7O0FBQ0EsTUFBSTBPLFdBQVcsR0FBaUNDLE9BQTlCLElBQXlDLENBQUNBLE9BQU8sQ0FBQ0MsUUFBbEQsSUFBOERELE9BQWhGO0FBRUE7O0FBQ0EsTUFBSUUsVUFBVSxHQUFHSCxXQUFXLElBQUksWUFBaUIsUUFBaEMsSUFBNENJLE1BQTVDLElBQXNELENBQUNBLE1BQU0sQ0FBQ0YsUUFBOUQsSUFBMEVFLE1BQTNGO0FBRUE7O0FBQ0EsTUFBSUMsYUFBYSxHQUFHRixVQUFVLElBQUlBLFVBQVUsQ0FBQ0YsT0FBWCxLQUF1QkQsV0FBekQ7QUFFQTs7QUFDQSxNQUFJTSxNQUFNLEdBQUdELGFBQWEsR0FBRzVPLElBQUksQ0FBQzZPLE1BQVIsR0FBaUJqTyxTQUEzQztBQUFBLE1BQ0kwUyxXQUFXLEdBQUd6RSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ3lFLFdBQVYsR0FBd0IxUyxTQURoRDtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBUzJTLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCQyxNQUE3QixFQUFxQztBQUNuQyxRQUFJQSxNQUFKLEVBQVk7QUFDVixhQUFPRCxNQUFNLENBQUMvUCxLQUFQLEVBQVA7QUFDRDs7QUFDRCxRQUFJeEUsTUFBTSxHQUFHdVUsTUFBTSxDQUFDdlUsTUFBcEI7QUFBQSxRQUNJQyxNQUFNLEdBQUdvVSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ3JVLE1BQUQsQ0FBZCxHQUF5QixJQUFJdVUsTUFBTSxDQUFDekIsV0FBWCxDQUF1QjlTLE1BQXZCLENBRGpEO0FBR0F1VSxJQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWXhVLE1BQVo7QUFDQSxXQUFPQSxNQUFQO0FBQ0Q7O0FBRUR5UCxFQUFBQSxjQUFBLEdBQWlCNEUsV0FBakI7Ozs7Ozs7Ozs7OztBQzFCQSxTQUFTSSxXQUFULENBQW1CeEcsTUFBbkIsRUFBMkJ0TyxLQUEzQixFQUFrQztBQUNoQyxNQUFJRyxLQUFLLEdBQUcsQ0FBQyxDQUFiO0FBQUEsTUFDSUMsTUFBTSxHQUFHa08sTUFBTSxDQUFDbE8sTUFEcEI7QUFHQUosRUFBQUEsS0FBSyxLQUFLQSxLQUFLLEdBQUdNLEtBQUssQ0FBQ0YsTUFBRCxDQUFsQixDQUFMOztBQUNBLFNBQU8sRUFBRUQsS0FBRixHQUFVQyxNQUFqQixFQUF5QjtBQUN2QkosSUFBQUEsS0FBSyxDQUFDRyxLQUFELENBQUwsR0FBZW1PLE1BQU0sQ0FBQ25PLEtBQUQsQ0FBckI7QUFDRDs7QUFDRCxTQUFPSCxLQUFQO0FBQ0Q7O0lBRUQrVSxVQUFjLEdBQUdEOzs7Ozs7Ozs7Ozs7QUNWakIsU0FBU0UsYUFBVCxDQUFxQmhWLEtBQXJCLEVBQTRCaVYsU0FBNUIsRUFBdUM7QUFDckMsTUFBSTlVLEtBQUssR0FBRyxDQUFDLENBQWI7QUFBQSxNQUNJQyxNQUFNLEdBQUdKLEtBQUssSUFBSSxJQUFULEdBQWdCLENBQWhCLEdBQW9CQSxLQUFLLENBQUNJLE1BRHZDO0FBQUEsTUFFSTBHLFFBQVEsR0FBRyxDQUZmO0FBQUEsTUFHSXpHLE1BQU0sR0FBRyxFQUhiOztBQUtBLFNBQU8sRUFBRUYsS0FBRixHQUFVQyxNQUFqQixFQUF5QjtBQUN2QixRQUFJSyxLQUFLLEdBQUdULEtBQUssQ0FBQ0csS0FBRCxDQUFqQjs7QUFDQSxRQUFJOFUsU0FBUyxDQUFDeFUsS0FBRCxFQUFRTixLQUFSLEVBQWVILEtBQWYsQ0FBYixFQUFvQztBQUNsQ0ssTUFBQUEsTUFBTSxDQUFDeUcsUUFBUSxFQUFULENBQU4sR0FBcUJyRyxLQUFyQjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0osTUFBUDtBQUNEOztJQUVENlUsWUFBYyxHQUFHRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmpCLFNBQVNHLFdBQVQsR0FBcUI7QUFDbkIsU0FBTyxFQUFQO0FBQ0Q7O0lBRURDLFdBQWMsR0FBR0Q7O0FDdEJqQixJQUFJSCxXQUFXLEdBQUdoVSxZQUFsQjtBQUFBLElBQ0ltVSxXQUFTLEdBQUcxUyxXQURoQjtBQUdBOztBQUNBLElBQUlqQixhQUFXLEdBQUdWLE1BQU0sQ0FBQ1csU0FBekI7QUFFQTs7QUFDQSxJQUFJeU4sb0JBQW9CLEdBQUcxTixhQUFXLENBQUMwTixvQkFBdkM7QUFFQTs7QUFDQSxJQUFJbUcsa0JBQWdCLEdBQUd2VSxNQUFNLENBQUN3VSxxQkFBOUI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQyxZQUFVLEdBQUcsQ0FBQ0Ysa0JBQUQsR0FBb0JGLFdBQXBCLEdBQWdDLFVBQVNoUixNQUFULEVBQWlCO0FBQ2hFLE1BQUlBLE1BQU0sSUFBSSxJQUFkLEVBQW9CO0FBQ2xCLFdBQU8sRUFBUDtBQUNEOztBQUNEQSxFQUFBQSxNQUFNLEdBQUdyRCxNQUFNLENBQUNxRCxNQUFELENBQWY7QUFDQSxTQUFPNlEsV0FBVyxDQUFDSyxrQkFBZ0IsQ0FBQ2xSLE1BQUQsQ0FBakIsRUFBMkIsVUFBU3FSLE1BQVQsRUFBaUI7QUFDNUQsV0FBT3RHLG9CQUFvQixDQUFDaE4sSUFBckIsQ0FBMEJpQyxNQUExQixFQUFrQ3FSLE1BQWxDLENBQVA7QUFDRCxHQUZpQixDQUFsQjtBQUdELENBUkQ7SUFVQUMsV0FBYyxHQUFHRjs7QUM3QmpCLElBQUlsSCxZQUFVLEdBQUdyTixXQUFqQjtBQUFBLElBQ0l1VSxZQUFVLEdBQUc5UyxXQURqQjtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU2lULGFBQVQsQ0FBcUJwSCxNQUFyQixFQUE2Qm5LLE1BQTdCLEVBQXFDO0FBQ25DLFNBQU9rSyxZQUFVLENBQUNDLE1BQUQsRUFBU2lILFlBQVUsQ0FBQ2pILE1BQUQsQ0FBbkIsRUFBNkJuSyxNQUE3QixDQUFqQjtBQUNEOztJQUVEd1IsWUFBYyxHQUFHRDs7Ozs7Ozs7Ozs7QUNQakIsU0FBU0UsV0FBVCxDQUFtQjVWLEtBQW5CLEVBQTBCNlYsTUFBMUIsRUFBa0M7QUFDaEMsTUFBSTFWLEtBQUssR0FBRyxDQUFDLENBQWI7QUFBQSxNQUNJQyxNQUFNLEdBQUd5VixNQUFNLENBQUN6VixNQURwQjtBQUFBLE1BRUkwVixNQUFNLEdBQUc5VixLQUFLLENBQUNJLE1BRm5COztBQUlBLFNBQU8sRUFBRUQsS0FBRixHQUFVQyxNQUFqQixFQUF5QjtBQUN2QkosSUFBQUEsS0FBSyxDQUFDOFYsTUFBTSxHQUFHM1YsS0FBVixDQUFMLEdBQXdCMFYsTUFBTSxDQUFDMVYsS0FBRCxDQUE5QjtBQUNEOztBQUNELFNBQU9ILEtBQVA7QUFDRDs7SUFFRCtWLFVBQWMsR0FBR0g7O0FDbkJqQixJQUFJdkMsT0FBTyxHQUFHclMsUUFBZDtBQUVBOztBQUNBLElBQUlnVixjQUFZLEdBQUczQyxPQUFPLENBQUN2UyxNQUFNLENBQUNtVixjQUFSLEVBQXdCblYsTUFBeEIsQ0FBMUI7SUFFQW9WLGFBQWMsR0FBR0Y7O0FDTGpCLElBQUlKLFdBQVMsR0FBRzVVLFVBQWhCO0FBQUEsSUFDSWdWLGNBQVksR0FBR3ZULGFBRG5CO0FBQUEsSUFFSThTLFlBQVUsR0FBRzdTLFdBRmpCO0FBQUEsSUFHSXlTLFNBQVMsR0FBR2xSLFdBSGhCO0FBS0E7O0FBQ0EsSUFBSW9SLGdCQUFnQixHQUFHdlUsTUFBTSxDQUFDd1UscUJBQTlCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSWEsY0FBWSxHQUFHLENBQUNkLGdCQUFELEdBQW9CRixTQUFwQixHQUFnQyxVQUFTaFIsTUFBVCxFQUFpQjtBQUNsRSxNQUFJOUQsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsU0FBTzhELE1BQVAsRUFBZTtBQUNieVIsSUFBQUEsV0FBUyxDQUFDdlYsTUFBRCxFQUFTa1YsWUFBVSxDQUFDcFIsTUFBRCxDQUFuQixDQUFUO0FBQ0FBLElBQUFBLE1BQU0sR0FBRzZSLGNBQVksQ0FBQzdSLE1BQUQsQ0FBckI7QUFDRDs7QUFDRCxTQUFPOUQsTUFBUDtBQUNELENBUEQ7SUFTQStWLGFBQWMsR0FBR0Q7O0FDeEJqQixJQUFJOUgsVUFBVSxHQUFHck4sV0FBakI7QUFBQSxJQUNJbVYsY0FBWSxHQUFHMVQsYUFEbkI7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVM0VCxlQUFULENBQXVCL0gsTUFBdkIsRUFBK0JuSyxNQUEvQixFQUF1QztBQUNyQyxTQUFPa0ssVUFBVSxDQUFDQyxNQUFELEVBQVM2SCxjQUFZLENBQUM3SCxNQUFELENBQXJCLEVBQStCbkssTUFBL0IsQ0FBakI7QUFDRDs7SUFFRG1TLGNBQWMsR0FBR0Q7O0FDZmpCLElBQUlULFNBQVMsR0FBRzVVLFVBQWhCO0FBQUEsSUFDSXNPLFNBQU8sR0FBRzdNLFNBRGQ7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVM4VCxnQkFBVCxDQUF3QnBTLE1BQXhCLEVBQWdDcVMsUUFBaEMsRUFBMENDLFdBQTFDLEVBQXVEO0FBQ3JELE1BQUlwVyxNQUFNLEdBQUdtVyxRQUFRLENBQUNyUyxNQUFELENBQXJCO0FBQ0EsU0FBT21MLFNBQU8sQ0FBQ25MLE1BQUQsQ0FBUCxHQUFrQjlELE1BQWxCLEdBQTJCdVYsU0FBUyxDQUFDdlYsTUFBRCxFQUFTb1csV0FBVyxDQUFDdFMsTUFBRCxDQUFwQixDQUEzQztBQUNEOztJQUVEdVMsZUFBYyxHQUFHSDs7QUNuQmpCLElBQUlBLGdCQUFjLEdBQUd2VixlQUFyQjtBQUFBLElBQ0l1VSxVQUFVLEdBQUc5UyxXQURqQjtBQUFBLElBRUlxSCxNQUFJLEdBQUdwSCxNQUZYO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU2lVLFlBQVQsQ0FBb0J4UyxNQUFwQixFQUE0QjtBQUMxQixTQUFPb1MsZ0JBQWMsQ0FBQ3BTLE1BQUQsRUFBUzJGLE1BQVQsRUFBZXlMLFVBQWYsQ0FBckI7QUFDRDs7SUFFRHFCLFdBQWMsR0FBR0Q7O0FDZmpCLElBQUlKLGNBQWMsR0FBR3ZWLGVBQXJCO0FBQUEsSUFDSW1WLFlBQVksR0FBRzFULGFBRG5CO0FBQUEsSUFFSTRSLFFBQU0sR0FBRzNSLFFBRmI7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNtVSxjQUFULENBQXNCMVMsTUFBdEIsRUFBOEI7QUFDNUIsU0FBT29TLGNBQWMsQ0FBQ3BTLE1BQUQsRUFBU2tRLFFBQVQsRUFBaUI4QixZQUFqQixDQUFyQjtBQUNEOztJQUVEVyxhQUFjLEdBQUdEOztBQ2hCakIsSUFBSTdMLFdBQVMsR0FBR2hLLFVBQWhCO0FBQUEsSUFDSUcsTUFBSSxHQUFHc0IsS0FEWDtBQUdBOztBQUNBLElBQUlzVSxVQUFRLEdBQUcvTCxXQUFTLENBQUM3SixNQUFELEVBQU8sVUFBUCxDQUF4QjtJQUVBNlYsU0FBYyxHQUFHRDs7QUNOakIsSUFBSS9MLFdBQVMsR0FBR2hLLFVBQWhCO0FBQUEsSUFDSUcsTUFBSSxHQUFHc0IsS0FEWDtBQUdBOztBQUNBLElBQUl3VSxTQUFPLEdBQUdqTSxXQUFTLENBQUM3SixNQUFELEVBQU8sU0FBUCxDQUF2QjtJQUVBK1YsUUFBYyxHQUFHRDs7QUNOakIsSUFBSWpNLFdBQVMsR0FBR2hLLFVBQWhCO0FBQUEsSUFDSUcsTUFBSSxHQUFHc0IsS0FEWDtBQUdBOztBQUNBLElBQUkwVSxLQUFHLEdBQUduTSxXQUFTLENBQUM3SixNQUFELEVBQU8sS0FBUCxDQUFuQjtJQUVBaVcsSUFBYyxHQUFHRDs7QUNOakIsSUFBSW5NLFNBQVMsR0FBR2hLLFVBQWhCO0FBQUEsSUFDSUcsTUFBSSxHQUFHc0IsS0FEWDtBQUdBOztBQUNBLElBQUk0VSxTQUFPLEdBQUdyTSxTQUFTLENBQUM3SixNQUFELEVBQU8sU0FBUCxDQUF2QjtJQUVBbVcsUUFBYyxHQUFHRDs7QUNOakIsSUFBSU4sUUFBUSxHQUFHL1YsU0FBZjtBQUFBLElBQ0lrSyxHQUFHLEdBQUd6SSxJQURWO0FBQUEsSUFFSXdVLFNBQU8sR0FBR3ZVLFFBRmQ7QUFBQSxJQUdJeVUsR0FBRyxHQUFHbFQsSUFIVjtBQUFBLElBSUlvVCxPQUFPLEdBQUc3TyxRQUpkO0FBQUEsSUFLSTNGLFVBQVUsR0FBRzJLLFdBTGpCO0FBQUEsSUFNSW5ELFFBQVEsR0FBR2tOLFNBTmY7QUFRQTs7QUFDQSxJQUFJaEgsUUFBTSxHQUFHLGNBQWI7QUFBQSxJQUNJRSxXQUFTLEdBQUcsaUJBRGhCO0FBQUEsSUFFSStHLFVBQVUsR0FBRyxrQkFGakI7QUFBQSxJQUdJN0csUUFBTSxHQUFHLGNBSGI7QUFBQSxJQUlJRSxZQUFVLEdBQUcsa0JBSmpCO0FBTUEsSUFBSUUsYUFBVyxHQUFHLG1CQUFsQjtBQUVBOztBQUNBLElBQUkwRyxrQkFBa0IsR0FBR3BOLFFBQVEsQ0FBQzBNLFFBQUQsQ0FBakM7QUFBQSxJQUNJVyxhQUFhLEdBQUdyTixRQUFRLENBQUNhLEdBQUQsQ0FENUI7QUFBQSxJQUVJeU0saUJBQWlCLEdBQUd0TixRQUFRLENBQUM0TSxTQUFELENBRmhDO0FBQUEsSUFHSVcsYUFBYSxHQUFHdk4sUUFBUSxDQUFDOE0sR0FBRCxDQUg1QjtBQUFBLElBSUlVLGlCQUFpQixHQUFHeE4sUUFBUSxDQUFDZ04sT0FBRCxDQUpoQztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUlTLFFBQU0sR0FBR2pWLFVBQWI7O0FBR0EsSUFBS2tVLFFBQVEsSUFBSWUsUUFBTSxDQUFDLElBQUlmLFFBQUosQ0FBYSxJQUFJZ0IsV0FBSixDQUFnQixDQUFoQixDQUFiLENBQUQsQ0FBTixJQUE0Q2hILGFBQXpELElBQ0M3RixHQUFHLElBQUk0TSxRQUFNLENBQUMsSUFBSTVNLEdBQUosRUFBRCxDQUFOLElBQW1CcUYsUUFEM0IsSUFFQzBHLFNBQU8sSUFBSWEsUUFBTSxDQUFDYixTQUFPLENBQUNlLE9BQVIsRUFBRCxDQUFOLElBQTZCUixVQUZ6QyxJQUdDTCxHQUFHLElBQUlXLFFBQU0sQ0FBQyxJQUFJWCxHQUFKLEVBQUQsQ0FBTixJQUFtQnhHLFFBSDNCLElBSUMwRyxPQUFPLElBQUlTLFFBQU0sQ0FBQyxJQUFJVCxPQUFKLEVBQUQsQ0FBTixJQUF1QnhHLFlBSnZDLEVBSW9EO0FBQ2xEaUgsRUFBQUEsUUFBTSxHQUFHLGdCQUFTclgsS0FBVCxFQUFnQjtBQUN2QixRQUFJSixNQUFNLEdBQUd3QyxVQUFVLENBQUNwQyxLQUFELENBQXZCO0FBQUEsUUFDSXdTLElBQUksR0FBRzVTLE1BQU0sSUFBSW9RLFdBQVYsR0FBc0JoUSxLQUFLLENBQUN5UyxXQUE1QixHQUEwQ25SLFNBRHJEO0FBQUEsUUFFSWtXLFVBQVUsR0FBR2hGLElBQUksR0FBRzVJLFFBQVEsQ0FBQzRJLElBQUQsQ0FBWCxHQUFvQixFQUZ6Qzs7QUFJQSxRQUFJZ0YsVUFBSixFQUFnQjtBQUNkLGNBQVFBLFVBQVI7QUFDRSxhQUFLUixrQkFBTDtBQUF5QixpQkFBTzFHLGFBQVA7O0FBQ3pCLGFBQUsyRyxhQUFMO0FBQW9CLGlCQUFPbkgsUUFBUDs7QUFDcEIsYUFBS29ILGlCQUFMO0FBQXdCLGlCQUFPSCxVQUFQOztBQUN4QixhQUFLSSxhQUFMO0FBQW9CLGlCQUFPakgsUUFBUDs7QUFDcEIsYUFBS2tILGlCQUFMO0FBQXdCLGlCQUFPaEgsWUFBUDtBQUwxQjtBQU9EOztBQUNELFdBQU94USxNQUFQO0FBQ0QsR0FmRDtBQWdCRDs7SUFFRDZYLE9BQWMsR0FBR0o7OztBQ3hEakIsSUFBSXRXLFdBQVcsR0FBR1YsTUFBTSxDQUFDVyxTQUF6QjtBQUVBOztBQUNBLElBQUlDLGNBQWMsR0FBR0YsV0FBVyxDQUFDRSxjQUFqQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVN5VyxnQkFBVCxDQUF3Qm5ZLEtBQXhCLEVBQStCO0FBQzdCLE1BQUlJLE1BQU0sR0FBR0osS0FBSyxDQUFDSSxNQUFuQjtBQUFBLE1BQ0lDLE1BQU0sR0FBRyxJQUFJTCxLQUFLLENBQUNrVCxXQUFWLENBQXNCOVMsTUFBdEIsQ0FEYixDQUQ2Qjs7QUFLN0IsTUFBSUEsTUFBTSxJQUFJLE9BQU9KLEtBQUssQ0FBQyxDQUFELENBQVosSUFBbUIsUUFBN0IsSUFBeUMwQixjQUFjLENBQUNRLElBQWYsQ0FBb0JsQyxLQUFwQixFQUEyQixPQUEzQixDQUE3QyxFQUFrRjtBQUNoRkssSUFBQUEsTUFBTSxDQUFDRixLQUFQLEdBQWVILEtBQUssQ0FBQ0csS0FBckI7QUFDQUUsSUFBQUEsTUFBTSxDQUFDK1gsS0FBUCxHQUFlcFksS0FBSyxDQUFDb1ksS0FBckI7QUFDRDs7QUFDRCxTQUFPL1gsTUFBUDtBQUNEOztJQUVEZ1ksZUFBYyxHQUFHRjs7QUN6QmpCLElBQUloWCxJQUFJLEdBQUdILEtBQVg7QUFFQTs7QUFDQSxJQUFJc1gsWUFBVSxHQUFHblgsSUFBSSxDQUFDbVgsVUFBdEI7SUFFQUMsV0FBYyxHQUFHRDs7QUNMakIsSUFBSUEsVUFBVSxHQUFHdFgsV0FBakI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTd1gsa0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDO0FBQ3JDLE1BQUlwWSxNQUFNLEdBQUcsSUFBSW9ZLFdBQVcsQ0FBQ3ZGLFdBQWhCLENBQTRCdUYsV0FBVyxDQUFDQyxVQUF4QyxDQUFiO0FBQ0EsTUFBSUosVUFBSixDQUFlalksTUFBZixFQUF1QndJLEdBQXZCLENBQTJCLElBQUl5UCxVQUFKLENBQWVHLFdBQWYsQ0FBM0I7QUFDQSxTQUFPcFksTUFBUDtBQUNEOztJQUVEc1ksaUJBQWMsR0FBR0g7O0FDZmpCLElBQUlBLGtCQUFnQixHQUFHeFgsaUJBQXZCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTNFgsZUFBVCxDQUF1QkMsUUFBdkIsRUFBaUNqRSxNQUFqQyxFQUF5QztBQUN2QyxNQUFJRCxNQUFNLEdBQUdDLE1BQU0sR0FBRzRELGtCQUFnQixDQUFDSyxRQUFRLENBQUNsRSxNQUFWLENBQW5CLEdBQXVDa0UsUUFBUSxDQUFDbEUsTUFBbkU7QUFDQSxTQUFPLElBQUlrRSxRQUFRLENBQUMzRixXQUFiLENBQXlCeUIsTUFBekIsRUFBaUNrRSxRQUFRLENBQUNDLFVBQTFDLEVBQXNERCxRQUFRLENBQUNILFVBQS9ELENBQVA7QUFDRDs7SUFFREssY0FBYyxHQUFHSDs7O0FDZGpCLElBQUlJLE9BQU8sR0FBRyxNQUFkO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsYUFBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDM0IsTUFBSTdZLE1BQU0sR0FBRyxJQUFJNlksTUFBTSxDQUFDaEcsV0FBWCxDQUF1QmdHLE1BQU0sQ0FBQzVLLE1BQTlCLEVBQXNDMEssT0FBTyxDQUFDblAsSUFBUixDQUFhcVAsTUFBYixDQUF0QyxDQUFiO0FBQ0E3WSxFQUFBQSxNQUFNLENBQUN5SCxTQUFQLEdBQW1Cb1IsTUFBTSxDQUFDcFIsU0FBMUI7QUFDQSxTQUFPekgsTUFBUDtBQUNEOztJQUVEOFksWUFBYyxHQUFHRjs7QUNoQmpCLElBQUkzWCxPQUFNLEdBQUdOLFNBQWI7QUFFQTs7QUFDQSxJQUFJb1ksV0FBVyxHQUFHOVgsT0FBTSxHQUFHQSxPQUFNLENBQUNHLFNBQVYsR0FBc0JNLFNBQTlDO0FBQUEsSUFDSXNYLGFBQWEsR0FBR0QsV0FBVyxHQUFHQSxXQUFXLENBQUN6VCxPQUFmLEdBQXlCNUQsU0FEeEQ7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTdVgsYUFBVCxDQUFxQjlELE1BQXJCLEVBQTZCO0FBQzNCLFNBQU82RCxhQUFhLEdBQUd2WSxNQUFNLENBQUN1WSxhQUFhLENBQUNuWCxJQUFkLENBQW1Cc1QsTUFBbkIsQ0FBRCxDQUFULEdBQXdDLEVBQTVEO0FBQ0Q7O0lBRUQrRCxZQUFjLEdBQUdEOztBQ2pCakIsSUFBSWQsa0JBQWdCLEdBQUd4WCxpQkFBdkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVN3WSxpQkFBVCxDQUF5QkMsVUFBekIsRUFBcUM3RSxNQUFyQyxFQUE2QztBQUMzQyxNQUFJRCxNQUFNLEdBQUdDLE1BQU0sR0FBRzRELGtCQUFnQixDQUFDaUIsVUFBVSxDQUFDOUUsTUFBWixDQUFuQixHQUF5QzhFLFVBQVUsQ0FBQzlFLE1BQXZFO0FBQ0EsU0FBTyxJQUFJOEUsVUFBVSxDQUFDdkcsV0FBZixDQUEyQnlCLE1BQTNCLEVBQW1DOEUsVUFBVSxDQUFDWCxVQUE5QyxFQUEwRFcsVUFBVSxDQUFDclosTUFBckUsQ0FBUDtBQUNEOztJQUVEc1osZ0JBQWMsR0FBR0Y7O0FDZmpCLElBQUloQixnQkFBZ0IsR0FBR3hYLGlCQUF2QjtBQUFBLElBQ0k0WCxhQUFhLEdBQUduVyxjQURwQjtBQUFBLElBRUl3VyxXQUFXLEdBQUd2VyxZQUZsQjtBQUFBLElBR0k0VyxXQUFXLEdBQUdyVixZQUhsQjtBQUFBLElBSUl1VixlQUFlLEdBQUdoUixnQkFKdEI7QUFNQTs7QUFDQSxJQUFJNEgsU0FBTyxHQUFHLGtCQUFkO0FBQUEsSUFDSUMsU0FBTyxHQUFHLGVBRGQ7QUFBQSxJQUVJRSxRQUFNLEdBQUcsY0FGYjtBQUFBLElBR0lDLFdBQVMsR0FBRyxpQkFIaEI7QUFBQSxJQUlJRSxXQUFTLEdBQUcsaUJBSmhCO0FBQUEsSUFLSUMsUUFBTSxHQUFHLGNBTGI7QUFBQSxJQU1JQyxXQUFTLEdBQUcsaUJBTmhCO0FBQUEsSUFPSTNMLFdBQVMsR0FBRyxpQkFQaEI7QUFTQSxJQUFJNkwsZ0JBQWMsR0FBRyxzQkFBckI7QUFBQSxJQUNJQyxhQUFXLEdBQUcsbUJBRGxCO0FBQUEsSUFFSUMsWUFBVSxHQUFHLHVCQUZqQjtBQUFBLElBR0lDLFlBQVUsR0FBRyx1QkFIakI7QUFBQSxJQUlJQyxTQUFPLEdBQUcsb0JBSmQ7QUFBQSxJQUtJQyxVQUFRLEdBQUcscUJBTGY7QUFBQSxJQU1JQyxVQUFRLEdBQUcscUJBTmY7QUFBQSxJQU9JQyxVQUFRLEdBQUcscUJBUGY7QUFBQSxJQVFJQyxpQkFBZSxHQUFHLDRCQVJ0QjtBQUFBLElBU0lDLFdBQVMsR0FBRyxzQkFUaEI7QUFBQSxJQVVJQyxXQUFTLEdBQUcsc0JBVmhCO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNtSSxnQkFBVCxDQUF3QnhWLE1BQXhCLEVBQWdDaEMsR0FBaEMsRUFBcUN5UyxNQUFyQyxFQUE2QztBQUMzQyxNQUFJM0IsSUFBSSxHQUFHOU8sTUFBTSxDQUFDK08sV0FBbEI7O0FBQ0EsVUFBUS9RLEdBQVI7QUFDRSxTQUFLMk8sZ0JBQUw7QUFDRSxhQUFPMEgsZ0JBQWdCLENBQUNyVSxNQUFELENBQXZCOztBQUVGLFNBQUtpTSxTQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUNFLGFBQU8sSUFBSTRDLElBQUosQ0FBUyxDQUFDOU8sTUFBVixDQUFQOztBQUVGLFNBQUs0TSxhQUFMO0FBQ0UsYUFBTzZILGFBQWEsQ0FBQ3pVLE1BQUQsRUFBU3lRLE1BQVQsQ0FBcEI7O0FBRUYsU0FBSzVELFlBQUw7QUFBaUIsU0FBS0MsWUFBTDtBQUNqQixTQUFLQyxTQUFMO0FBQWMsU0FBS0MsVUFBTDtBQUFlLFNBQUtDLFVBQUw7QUFDN0IsU0FBS0MsVUFBTDtBQUFlLFNBQUtDLGlCQUFMO0FBQXNCLFNBQUtDLFdBQUw7QUFBZ0IsU0FBS0MsV0FBTDtBQUNuRCxhQUFPZ0ksZUFBZSxDQUFDclYsTUFBRCxFQUFTeVEsTUFBVCxDQUF0Qjs7QUFFRixTQUFLckUsUUFBTDtBQUNFLGFBQU8sSUFBSTBDLElBQUosRUFBUDs7QUFFRixTQUFLekMsV0FBTDtBQUNBLFNBQUtJLFdBQUw7QUFDRSxhQUFPLElBQUlxQyxJQUFKLENBQVM5TyxNQUFULENBQVA7O0FBRUYsU0FBS3VNLFdBQUw7QUFDRSxhQUFPdUksV0FBVyxDQUFDOVUsTUFBRCxDQUFsQjs7QUFFRixTQUFLd00sUUFBTDtBQUNFLGFBQU8sSUFBSXNDLElBQUosRUFBUDs7QUFFRixTQUFLaE8sV0FBTDtBQUNFLGFBQU9xVSxXQUFXLENBQUNuVixNQUFELENBQWxCO0FBOUJKO0FBZ0NEOztJQUVEeVYsZUFBYyxHQUFHRDs7QUM1RWpCLElBQUk1VyxVQUFRLEdBQUcvQixVQUFmO0FBRUE7O0FBQ0EsSUFBSTZZLFlBQVksR0FBRy9ZLE1BQU0sQ0FBQ2daLE1BQTFCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQyxZQUFVLEdBQUksWUFBVztBQUMzQixXQUFTNVYsTUFBVCxHQUFrQjs7QUFDbEIsU0FBTyxVQUFTZ1AsS0FBVCxFQUFnQjtBQUNyQixRQUFJLENBQUNwUSxVQUFRLENBQUNvUSxLQUFELENBQWIsRUFBc0I7QUFDcEIsYUFBTyxFQUFQO0FBQ0Q7O0FBQ0QsUUFBSTBHLFlBQUosRUFBa0I7QUFDaEIsYUFBT0EsWUFBWSxDQUFDMUcsS0FBRCxDQUFuQjtBQUNEOztBQUNEaFAsSUFBQUEsTUFBTSxDQUFDMUMsU0FBUCxHQUFtQjBSLEtBQW5CO0FBQ0EsUUFBSTlTLE1BQU0sR0FBRyxJQUFJOEQsTUFBSixFQUFiO0FBQ0FBLElBQUFBLE1BQU0sQ0FBQzFDLFNBQVAsR0FBbUJNLFNBQW5CO0FBQ0EsV0FBTzFCLE1BQVA7QUFDRCxHQVhEO0FBWUQsQ0FkaUIsRUFBbEI7O0lBZ0JBMlosV0FBYyxHQUFHRDs7QUM3QmpCLElBQUlBLFVBQVUsR0FBRy9ZLFdBQWpCO0FBQUEsSUFDSWdWLFlBQVksR0FBR3ZULGFBRG5CO0FBQUEsSUFFSXVRLFdBQVcsR0FBR3RRLFlBRmxCO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU3VYLGlCQUFULENBQXlCOVYsTUFBekIsRUFBaUM7QUFDL0IsU0FBUSxPQUFPQSxNQUFNLENBQUMrTyxXQUFkLElBQTZCLFVBQTdCLElBQTJDLENBQUNGLFdBQVcsQ0FBQzdPLE1BQUQsQ0FBeEQsR0FDSDRWLFVBQVUsQ0FBQy9ELFlBQVksQ0FBQzdSLE1BQUQsQ0FBYixDQURQLEdBRUgsRUFGSjtBQUdEOztJQUVEK1YsZ0JBQWMsR0FBR0Q7O0FDakJqQixJQUFJbkMsUUFBTSxHQUFHOVcsT0FBYjtBQUFBLElBQ0krRCxjQUFZLEdBQUd0QyxjQURuQjtBQUdBOztBQUNBLElBQUk4TixRQUFNLEdBQUcsY0FBYjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVM0SixXQUFULENBQW1CMVosS0FBbkIsRUFBMEI7QUFDeEIsU0FBT3NFLGNBQVksQ0FBQ3RFLEtBQUQsQ0FBWixJQUF1QnFYLFFBQU0sQ0FBQ3JYLEtBQUQsQ0FBTixJQUFpQjhQLFFBQS9DO0FBQ0Q7O0lBRUQ2SixVQUFjLEdBQUdEOztBQ2pCakIsSUFBSUEsU0FBUyxHQUFHblosVUFBaEI7QUFBQSxJQUNJNFEsV0FBUyxHQUFHblAsVUFEaEI7QUFBQSxJQUVJdVAsVUFBUSxHQUFHdFAsaUJBRmY7QUFJQTs7QUFDQSxJQUFJMlgsU0FBUyxHQUFHckksVUFBUSxJQUFJQSxVQUFRLENBQUNzSSxLQUFyQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsT0FBSyxHQUFHRCxTQUFTLEdBQUd6SSxXQUFTLENBQUN5SSxTQUFELENBQVosR0FBMEJGLFNBQS9DO0lBRUFJLE9BQWMsR0FBR0Q7O0FDMUJqQixJQUFJeEMsUUFBTSxHQUFHOVcsT0FBYjtBQUFBLElBQ0krRCxZQUFZLEdBQUd0QyxjQURuQjtBQUdBOztBQUNBLElBQUlrTyxRQUFNLEdBQUcsY0FBYjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVM2SixXQUFULENBQW1CL1osS0FBbkIsRUFBMEI7QUFDeEIsU0FBT3NFLFlBQVksQ0FBQ3RFLEtBQUQsQ0FBWixJQUF1QnFYLFFBQU0sQ0FBQ3JYLEtBQUQsQ0FBTixJQUFpQmtRLFFBQS9DO0FBQ0Q7O0lBRUQ4SixVQUFjLEdBQUdEOztBQ2pCakIsSUFBSUEsU0FBUyxHQUFHeFosVUFBaEI7QUFBQSxJQUNJNFEsU0FBUyxHQUFHblAsVUFEaEI7QUFBQSxJQUVJdVAsUUFBUSxHQUFHdFAsaUJBRmY7QUFJQTs7QUFDQSxJQUFJZ1ksU0FBUyxHQUFHMUksUUFBUSxJQUFJQSxRQUFRLENBQUMySSxLQUFyQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsT0FBSyxHQUFHRCxTQUFTLEdBQUc5SSxTQUFTLENBQUM4SSxTQUFELENBQVosR0FBMEJGLFNBQS9DO0lBRUFJLE9BQWMsR0FBR0Q7O0FDMUJqQixJQUFJbE4sS0FBSyxHQUFHek0sTUFBWjtBQUFBLElBQ0kyTSxTQUFTLEdBQUdsTCxVQURoQjtBQUFBLElBRUl5TCxXQUFXLEdBQUd4TCxZQUZsQjtBQUFBLElBR0lvUixVQUFVLEdBQUc3UCxXQUhqQjtBQUFBLElBSUlzUSxZQUFZLEdBQUcvTCxhQUpuQjtBQUFBLElBS0lrTSxXQUFXLEdBQUdsSCxvQkFMbEI7QUFBQSxJQU1Jc0gsU0FBUyxHQUFHeUMsVUFOaEI7QUFBQSxJQU9JN0IsV0FBVyxHQUFHbUYsWUFQbEI7QUFBQSxJQVFJeEUsYUFBYSxHQUFHeUUsY0FScEI7QUFBQSxJQVNJbkUsVUFBVSxHQUFHb0UsV0FUakI7QUFBQSxJQVVJbEUsWUFBWSxHQUFHbUUsYUFWbkI7QUFBQSxJQVdJbEQsTUFBTSxHQUFHbUQsT0FYYjtBQUFBLElBWUk5QyxjQUFjLEdBQUcrQyxlQVpyQjtBQUFBLElBYUl2QixjQUFjLEdBQUd3QixlQWJyQjtBQUFBLElBY0lsQixlQUFlLEdBQUdtQixnQkFkdEI7QUFBQSxJQWVJOUwsT0FBTyxHQUFHK0wsU0FmZDtBQUFBLElBZ0JJbkwsUUFBUSxHQUFHb0wsa0JBaEJmO0FBQUEsSUFpQkloQixLQUFLLEdBQUdpQixPQWpCWjtBQUFBLElBa0JJeFksUUFBUSxHQUFHeVksVUFsQmY7QUFBQSxJQW1CSWIsS0FBSyxHQUFHYyxPQW5CWjtBQUFBLElBb0JJM1IsSUFBSSxHQUFHNFIsTUFwQlg7QUFBQSxJQXFCSXJILE1BQU0sR0FBR3NILFFBckJiO0FBdUJBOztBQUNBLElBQUlDLGlCQUFlLEdBQUcsQ0FBdEI7QUFBQSxJQUNJQyxlQUFlLEdBQUcsQ0FEdEI7QUFBQSxJQUVJQyxvQkFBa0IsR0FBRyxDQUZ6QjtBQUlBOztBQUNBLElBQUkvTSxPQUFPLEdBQUcsb0JBQWQ7QUFBQSxJQUNJb0IsUUFBUSxHQUFHLGdCQURmO0FBQUEsSUFFSUMsT0FBTyxHQUFHLGtCQUZkO0FBQUEsSUFHSUMsT0FBTyxHQUFHLGVBSGQ7QUFBQSxJQUlJQyxRQUFRLEdBQUcsZ0JBSmY7QUFBQSxJQUtJbk4sT0FBTyxHQUFHLG1CQUxkO0FBQUEsSUFNSUMsTUFBTSxHQUFHLDRCQU5iO0FBQUEsSUFPSW1OLE1BQU0sR0FBRyxjQVBiO0FBQUEsSUFRSUMsU0FBUyxHQUFHLGlCQVJoQjtBQUFBLElBU0lDLFNBQVMsR0FBRyxpQkFUaEI7QUFBQSxJQVVJQyxTQUFTLEdBQUcsaUJBVmhCO0FBQUEsSUFXSUMsTUFBTSxHQUFHLGNBWGI7QUFBQSxJQVlJQyxTQUFTLEdBQUcsaUJBWmhCO0FBQUEsSUFhSTNMLFNBQVMsR0FBRyxpQkFiaEI7QUFBQSxJQWNJNEwsVUFBVSxHQUFHLGtCQWRqQjtBQWdCQSxJQUFJQyxjQUFjLEdBQUcsc0JBQXJCO0FBQUEsSUFDSUMsV0FBVyxHQUFHLG1CQURsQjtBQUFBLElBRUlDLFVBQVUsR0FBRyx1QkFGakI7QUFBQSxJQUdJQyxVQUFVLEdBQUcsdUJBSGpCO0FBQUEsSUFJSUMsT0FBTyxHQUFHLG9CQUpkO0FBQUEsSUFLSUMsUUFBUSxHQUFHLHFCQUxmO0FBQUEsSUFNSUMsUUFBUSxHQUFHLHFCQU5mO0FBQUEsSUFPSUMsUUFBUSxHQUFHLHFCQVBmO0FBQUEsSUFRSUMsZUFBZSxHQUFHLDRCQVJ0QjtBQUFBLElBU0lDLFNBQVMsR0FBRyxzQkFUaEI7QUFBQSxJQVVJQyxTQUFTLEdBQUcsc0JBVmhCO0FBWUE7O0FBQ0EsSUFBSXVLLGFBQWEsR0FBRyxFQUFwQjtBQUNBQSxhQUFhLENBQUNoTixPQUFELENBQWIsR0FBeUJnTixhQUFhLENBQUM1TCxRQUFELENBQWIsR0FDekI0TCxhQUFhLENBQUNqTCxjQUFELENBQWIsR0FBZ0NpTCxhQUFhLENBQUNoTCxXQUFELENBQWIsR0FDaENnTCxhQUFhLENBQUMzTCxPQUFELENBQWIsR0FBeUIyTCxhQUFhLENBQUMxTCxPQUFELENBQWIsR0FDekIwTCxhQUFhLENBQUMvSyxVQUFELENBQWIsR0FBNEIrSyxhQUFhLENBQUM5SyxVQUFELENBQWIsR0FDNUI4SyxhQUFhLENBQUM3SyxPQUFELENBQWIsR0FBeUI2SyxhQUFhLENBQUM1SyxRQUFELENBQWIsR0FDekI0SyxhQUFhLENBQUMzSyxRQUFELENBQWIsR0FBMEIySyxhQUFhLENBQUN4TCxNQUFELENBQWIsR0FDMUJ3TCxhQUFhLENBQUN2TCxTQUFELENBQWIsR0FBMkJ1TCxhQUFhLENBQUN0TCxTQUFELENBQWIsR0FDM0JzTCxhQUFhLENBQUNyTCxTQUFELENBQWIsR0FBMkJxTCxhQUFhLENBQUNwTCxNQUFELENBQWIsR0FDM0JvTCxhQUFhLENBQUNuTCxTQUFELENBQWIsR0FBMkJtTCxhQUFhLENBQUM5VyxTQUFELENBQWIsR0FDM0I4VyxhQUFhLENBQUMxSyxRQUFELENBQWIsR0FBMEIwSyxhQUFhLENBQUN6SyxlQUFELENBQWIsR0FDMUJ5SyxhQUFhLENBQUN4SyxTQUFELENBQWIsR0FBMkJ3SyxhQUFhLENBQUN2SyxTQUFELENBQWIsR0FBMkIsSUFWdEQ7QUFXQXVLLGFBQWEsQ0FBQ3pMLFFBQUQsQ0FBYixHQUEwQnlMLGFBQWEsQ0FBQzVZLE9BQUQsQ0FBYixHQUMxQjRZLGFBQWEsQ0FBQ2xMLFVBQUQsQ0FBYixHQUE0QixLQUQ1QjtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNtTCxXQUFULENBQW1CdmIsS0FBbkIsRUFBMEJ3YixPQUExQixFQUFtQ3pOLFVBQW5DLEVBQStDaEgsR0FBL0MsRUFBb0RyRCxNQUFwRCxFQUE0RCtYLEtBQTVELEVBQW1FO0FBQ2pFLE1BQUk3YixNQUFKO0FBQUEsTUFDSXVVLE1BQU0sR0FBR3FILE9BQU8sR0FBR0wsaUJBRHZCO0FBQUEsTUFFSU8sTUFBTSxHQUFHRixPQUFPLEdBQUdKLGVBRnZCO0FBQUEsTUFHSU8sTUFBTSxHQUFHSCxPQUFPLEdBQUdILG9CQUh2Qjs7QUFLQSxNQUFJdE4sVUFBSixFQUFnQjtBQUNkbk8sSUFBQUEsTUFBTSxHQUFHOEQsTUFBTSxHQUFHcUssVUFBVSxDQUFDL04sS0FBRCxFQUFRK0csR0FBUixFQUFhckQsTUFBYixFQUFxQitYLEtBQXJCLENBQWIsR0FBMkMxTixVQUFVLENBQUMvTixLQUFELENBQXBFO0FBQ0Q7O0FBQ0QsTUFBSUosTUFBTSxLQUFLMEIsU0FBZixFQUEwQjtBQUN4QixXQUFPMUIsTUFBUDtBQUNEOztBQUNELE1BQUksQ0FBQzBDLFFBQVEsQ0FBQ3RDLEtBQUQsQ0FBYixFQUFzQjtBQUNwQixXQUFPQSxLQUFQO0FBQ0Q7O0FBQ0QsTUFBSWdTLEtBQUssR0FBR25ELE9BQU8sQ0FBQzdPLEtBQUQsQ0FBbkI7O0FBQ0EsTUFBSWdTLEtBQUosRUFBVztBQUNUcFMsSUFBQUEsTUFBTSxHQUFHOFgsY0FBYyxDQUFDMVgsS0FBRCxDQUF2Qjs7QUFDQSxRQUFJLENBQUNtVSxNQUFMLEVBQWE7QUFDWCxhQUFPRSxTQUFTLENBQUNyVSxLQUFELEVBQVFKLE1BQVIsQ0FBaEI7QUFDRDtBQUNGLEdBTEQsTUFLTztBQUNMLFFBQUk4QixHQUFHLEdBQUcyVixNQUFNLENBQUNyWCxLQUFELENBQWhCO0FBQUEsUUFDSTRiLE1BQU0sR0FBR2xhLEdBQUcsSUFBSWdCLE9BQVAsSUFBa0JoQixHQUFHLElBQUlpQixNQUR0Qzs7QUFHQSxRQUFJOE0sUUFBUSxDQUFDelAsS0FBRCxDQUFaLEVBQXFCO0FBQ25CLGFBQU9pVSxXQUFXLENBQUNqVSxLQUFELEVBQVFtVSxNQUFSLENBQWxCO0FBQ0Q7O0FBQ0QsUUFBSXpTLEdBQUcsSUFBSXNPLFNBQVAsSUFBb0J0TyxHQUFHLElBQUk0TSxPQUEzQixJQUF1Q3NOLE1BQU0sSUFBSSxDQUFDbFksTUFBdEQsRUFBK0Q7QUFDN0Q5RCxNQUFBQSxNQUFNLEdBQUk4YixNQUFNLElBQUlFLE1BQVgsR0FBcUIsRUFBckIsR0FBMEJwQyxlQUFlLENBQUN4WixLQUFELENBQWxEOztBQUNBLFVBQUksQ0FBQ21VLE1BQUwsRUFBYTtBQUNYLGVBQU91SCxNQUFNLEdBQ1Q5RixhQUFhLENBQUM1VixLQUFELEVBQVE4VCxZQUFZLENBQUNsVSxNQUFELEVBQVNJLEtBQVQsQ0FBcEIsQ0FESixHQUVUaVYsV0FBVyxDQUFDalYsS0FBRCxFQUFRcVQsVUFBVSxDQUFDelQsTUFBRCxFQUFTSSxLQUFULENBQWxCLENBRmY7QUFHRDtBQUNGLEtBUEQsTUFPTztBQUNMLFVBQUksQ0FBQ3NiLGFBQWEsQ0FBQzVaLEdBQUQsQ0FBbEIsRUFBeUI7QUFDdkIsZUFBT2dDLE1BQU0sR0FBRzFELEtBQUgsR0FBVyxFQUF4QjtBQUNEOztBQUNESixNQUFBQSxNQUFNLEdBQUdzWixjQUFjLENBQUNsWixLQUFELEVBQVEwQixHQUFSLEVBQWF5UyxNQUFiLENBQXZCO0FBQ0Q7QUFDRixHQXpDZ0U7OztBQTJDakVzSCxFQUFBQSxLQUFLLEtBQUtBLEtBQUssR0FBRyxJQUFJek8sS0FBSixFQUFiLENBQUw7QUFDQSxNQUFJNk8sT0FBTyxHQUFHSixLQUFLLENBQUNwVCxHQUFOLENBQVVySSxLQUFWLENBQWQ7O0FBQ0EsTUFBSTZiLE9BQUosRUFBYTtBQUNYLFdBQU9BLE9BQVA7QUFDRDs7QUFDREosRUFBQUEsS0FBSyxDQUFDclQsR0FBTixDQUFVcEksS0FBVixFQUFpQkosTUFBakI7O0FBRUEsTUFBSXNhLEtBQUssQ0FBQ2xhLEtBQUQsQ0FBVCxFQUFrQjtBQUNoQkEsSUFBQUEsS0FBSyxDQUFDOGIsT0FBTixDQUFjLFVBQVNDLFFBQVQsRUFBbUI7QUFDL0JuYyxNQUFBQSxNQUFNLENBQUNvYyxHQUFQLENBQVdULFdBQVMsQ0FBQ1EsUUFBRCxFQUFXUCxPQUFYLEVBQW9Cek4sVUFBcEIsRUFBZ0NnTyxRQUFoQyxFQUEwQy9iLEtBQTFDLEVBQWlEeWIsS0FBakQsQ0FBcEI7QUFDRCxLQUZEO0FBR0QsR0FKRCxNQUlPLElBQUk1QixLQUFLLENBQUM3WixLQUFELENBQVQsRUFBa0I7QUFDdkJBLElBQUFBLEtBQUssQ0FBQzhiLE9BQU4sQ0FBYyxVQUFTQyxRQUFULEVBQW1CaFYsR0FBbkIsRUFBd0I7QUFDcENuSCxNQUFBQSxNQUFNLENBQUN3SSxHQUFQLENBQVdyQixHQUFYLEVBQWdCd1UsV0FBUyxDQUFDUSxRQUFELEVBQVdQLE9BQVgsRUFBb0J6TixVQUFwQixFQUFnQ2hILEdBQWhDLEVBQXFDL0csS0FBckMsRUFBNEN5YixLQUE1QyxDQUF6QjtBQUNELEtBRkQ7QUFHRDs7QUFFRCxNQUFJMUYsUUFBUSxHQUFHNEYsTUFBTSxHQUNoQkQsTUFBTSxHQUFHdEYsWUFBSCxHQUFrQkYsVUFEUixHQUVoQndGLE1BQU0sR0FBRzlILE1BQUgsR0FBWXZLLElBRnZCO0FBSUEsTUFBSXlFLEtBQUssR0FBR2tFLEtBQUssR0FBRzFRLFNBQUgsR0FBZXlVLFFBQVEsQ0FBQy9WLEtBQUQsQ0FBeEM7QUFDQWtOLEVBQUFBLFNBQVMsQ0FBQ1ksS0FBSyxJQUFJOU4sS0FBVixFQUFpQixVQUFTK2IsUUFBVCxFQUFtQmhWLEdBQW5CLEVBQXdCO0FBQ2hELFFBQUkrRyxLQUFKLEVBQVc7QUFDVC9HLE1BQUFBLEdBQUcsR0FBR2dWLFFBQU47QUFDQUEsTUFBQUEsUUFBUSxHQUFHL2IsS0FBSyxDQUFDK0csR0FBRCxDQUFoQjtBQUNELEtBSitDOzs7QUFNaEQwRyxJQUFBQSxXQUFXLENBQUM3TixNQUFELEVBQVNtSCxHQUFULEVBQWN3VSxXQUFTLENBQUNRLFFBQUQsRUFBV1AsT0FBWCxFQUFvQnpOLFVBQXBCLEVBQWdDaEgsR0FBaEMsRUFBcUMvRyxLQUFyQyxFQUE0Q3liLEtBQTVDLENBQXZCLENBQVg7QUFDRCxHQVBRLENBQVQ7QUFRQSxTQUFPN2IsTUFBUDtBQUNEOztJQUVEcWMsVUFBYyxHQUFHVjs7QUNyS2pCLElBQUlBLFdBQVMsR0FBR2hiLFVBQWhCO0FBRUE7O0FBQ0EsSUFBSTRhLGVBQWUsR0FBRyxDQUF0QjtBQUFBLElBQ0lFLG9CQUFrQixHQUFHLENBRHpCO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNhLFNBQVQsQ0FBbUJsYyxLQUFuQixFQUEwQjtBQUN4QixTQUFPdWIsV0FBUyxDQUFDdmIsS0FBRCxFQUFRbWIsZUFBZSxHQUFHRSxvQkFBMUIsQ0FBaEI7QUFDRDs7SUFFRGMsV0FBYyxHQUFHRDs7QUM1QmpCLElBQUlYLFNBQVMsR0FBR2hiLFVBQWhCO0FBRUE7O0FBQ0EsSUFBSThhLGtCQUFrQixHQUFHLENBQXpCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTZSxLQUFULENBQWVwYyxLQUFmLEVBQXNCO0FBQ3BCLFNBQU91YixTQUFTLENBQUN2YixLQUFELEVBQVFxYixrQkFBUixDQUFoQjtBQUNEOztJQUVEZ0IsT0FBYyxHQUFHRDs7SUMvQkosUUFBUSxHQUFHLFVBQUMsR0FBUTtJQUMvQixJQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLElBQUksT0FBTyxFQUFFO1FBQ1gsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQU0sQ0FBQyxHQUFHRSxXQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFNLENBQUMsR0FBR0EsV0FBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsT0FBTyxFQUFDLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLEVBQUUsSUFBQSxFQUFDLENBQUM7S0FDbkI7SUFDRCxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUM7QUFDL0IsRUFBRTtJQUVXLFNBQVMsR0FBRyxVQUFDLEdBQVEsRUFBRSxNQUFVO0lBQVYsdUJBQUEsRUFBQSxVQUFVO0lBQzVDLElBQUksTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUM3QixJQUFNLEdBQUcsR0FBR0YsT0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLElBQU0sU0FBUyxHQUFHRSxXQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDN0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBR0EsV0FBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3RSxFQUFFO0lBRVcsT0FBTyxHQUFHLFVBQUMsR0FBUSxFQUFFLElBQVUsRUFBRSxNQUFVO0lBQXRCLHFCQUFBLEVBQUEsVUFBVTtJQUFFLHVCQUFBLEVBQUEsVUFBVTtJQUN0RCxJQUFNLEdBQUcsR0FBR0MsVUFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ3RELElBQU0sR0FBRyxHQUFHQyxVQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUMxRSxJQUFNLEdBQUcsR0FBTSxJQUFJLFNBQUlGLFdBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUdBLFdBQWlCLENBQUMsR0FBRyxDQUFDLE1BQUcsQ0FBQztJQUMxRSxPQUFPLEdBQUcsQ0FBQztBQUNiLEVBQUU7SUFFVyxRQUFRLEdBQUcsVUFBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQVU7SUFDdkQsSUFBTSxFQUFFLEdBQUdBLFdBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsSUFBTSxFQUFFLEdBQUdBLFdBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsSUFBSSxFQUFFLEtBQUssQ0FBQztRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLElBQUksRUFBRSxLQUFLLENBQUM7UUFBRSxPQUFPLE9BQUssRUFBRSxHQUFHLEVBQUUsTUFBRyxDQUFDO0lBQ3JDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUFFLE9BQU8sT0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFHLENBQUM7SUFDdEMsT0FBTyxFQUFFLENBQUM7QUFDWixFQUFFO0lBRVcsd0JBQXdCLEdBQUcsVUFBQyxJQUFTLElBQUssUUFBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUU7SUFFbkUsaUJBQWlCLEdBQUcsVUFBQyxLQUFVLEVBQUUsTUFBVTtJQUFWLHVCQUFBLEVBQUEsVUFBVTtJQUN0RCxJQUFJLEdBQUcsR0FBR0YsT0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBQSxDQUFDLENBQUM7SUFDaEQsSUFBTSxNQUFNLEdBQUcscUJBQ2IsRUFBRSxHQUFHLE1BQU0saUlBQ2dILENBQUM7SUFDOUgsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVMsRUFBRSxLQUFVO1FBQ2xDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUssSUFBSSxDQUFDLENBQUM7YUFDWjtpQkFBTTtnQkFDTCxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN0QyxLQUFLLElBQUksQ0FBQyxDQUFDO2FBQ1o7U0FDRjtRQUNELElBQUksR0FBRyxJQUFJLENBQUM7S0FDYixDQUFDLENBQUM7SUFDSCxPQUFPLEtBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsQ0FBQztBQUN0QyxFQUFFO0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtJQU1hLEtBQUssR0FBRyxVQUFDLElBQXNCO0lBQzFDLE9BQUEsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUM7QUFBaEUsRUFBaUU7SUFFdEQsS0FBSyxHQUFHLFVBQUMsSUFBc0I7SUFDMUMsT0FBQSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUEsQ0FBQztBQUFsRSxFQUFtRTtBQUVyRSxJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7QUFDaEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLElBQUksYUFBYSxHQUFhLEVBQUUsQ0FBQztJQUVwQixRQUFRLEdBQUcsVUFBQyxHQUFlLEVBQUUsU0FBYztJQUFkLDBCQUFBLEVBQUEsY0FBYztJQUN0RCxJQUFJLFFBQVEsR0FBVyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLE9BQU8sR0FBVyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNmLElBQUksUUFBUSxHQUFHLENBQUM7b0JBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxTQUFTLEdBQUcsQ0FBQztvQkFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLE9BQU8sR0FBRyxDQUFDO29CQUFFLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQzdCLElBQUksVUFBVSxHQUFHLENBQUM7b0JBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQzthQUNwQztTQUNGO0tBQ0Y7SUFDRCxPQUFPLEVBQUMsUUFBUSxVQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUMsQ0FBQztBQUNwRCxFQUFFO0lBRVcsVUFBVSxHQUFHLFVBQUMsR0FBZSxFQUFFLFNBQWM7SUFBZCwwQkFBQSxFQUFBLGNBQWM7SUFDbEQsSUFBQSxLQUE2QyxRQUFRLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFwRSxRQUFRLGNBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxVQUFVLGdCQUE0QixDQUFDO0lBQzVFLElBQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQztJQUNqRCxJQUFNLElBQUksR0FBRyxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDbEQsSUFBSSxHQUFHLElBQUksSUFBSTtRQUFFLE9BQU8zVixjQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSTtRQUFFLE9BQU9BLGNBQU0sQ0FBQyxVQUFVLENBQUM7SUFDM0MsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBT0EsY0FBTSxDQUFDLFFBQVEsQ0FBQztJQUN6QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU9BLGNBQU0sQ0FBQyxXQUFXLENBQUM7QUFDL0MsRUFBRTtJQUVXLGVBQWUsR0FBRyxVQUM3QixHQUFlLEVBQ2YsU0FBYyxFQUNkLE1BQVU7SUFEViwwQkFBQSxFQUFBLGNBQWM7SUFDZCx1QkFBQSxFQUFBLFVBQVU7SUFFVixJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsSUFBQSxLQUE2QyxRQUFRLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFwRSxRQUFRLGNBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxVQUFVLGdCQUE0QixDQUFDO0lBQzVFLElBQUksV0FBVyxHQUFHO1FBQ2hCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNQLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztLQUNSLENBQUM7SUFDRixJQUFJLFdBQVcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUksTUFBTSxJQUFJQSxjQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVCLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsR0FBRyxNQUFNLEVBQ3hDLFNBQVMsR0FBRyxDQUFDLENBQ2QsQ0FBQztRQUNGLFdBQVcsR0FBRztZQUNaLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQztZQUNoQixDQUFDLENBQUMsRUFBRSxXQUFXLENBQUM7U0FDakIsQ0FBQztLQUNIO1NBQU0sSUFBSSxNQUFNLElBQUlBLGNBQU0sQ0FBQyxRQUFRLEVBQUU7UUFDcEMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sRUFBRSxTQUFTLEdBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUNsRSxTQUFTLEdBQUcsQ0FBQyxDQUNkLENBQUM7UUFDRixXQUFXLEdBQUc7WUFDWixDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsV0FBVyxFQUFFLEVBQUUsQ0FBQztZQUNqQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUM7U0FDakIsQ0FBQztLQUNIO1NBQU0sSUFBSSxNQUFNLElBQUlBLGNBQU0sQ0FBQyxVQUFVLEVBQUU7UUFDdEMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLEVBQUUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxFQUNoRSxTQUFTLEdBQUcsQ0FBQyxDQUNkLENBQUM7UUFDRixXQUFXLEdBQUc7WUFDWixDQUFDLENBQUMsRUFBRSxXQUFXLENBQUM7WUFDaEIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxFQUFFLENBQUM7U0FDbEMsQ0FBQztLQUNIO1NBQU0sSUFBSSxNQUFNLElBQUlBLGNBQU0sQ0FBQyxXQUFXLEVBQUU7UUFDdkMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxHQUFHLENBQ04sU0FBUyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLEVBQ2xDLFNBQVMsR0FBRyxDQUFDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUNwQyxFQUNELFNBQVMsR0FBRyxDQUFDLENBQ2QsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQy9CLFdBQVcsR0FBRztZQUNaLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxXQUFXLEVBQUUsRUFBRSxDQUFDO1lBQ2pDLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxXQUFXLEVBQUUsRUFBRSxDQUFDO1NBQ2xDLENBQUM7S0FDSDtJQUNELE9BQU8sRUFBQyxXQUFXLGFBQUEsRUFBRSxNQUFNLFFBQUEsRUFBQyxDQUFDO0FBQy9CLEVBQUU7QUFFRixTQUFTLGVBQWUsQ0FBQyxHQUFlLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFVO0lBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRTtRQUM1QyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFJLENBQUMsU0FBSSxDQUFHLENBQUMsRUFBRTtZQUM1RCxhQUFhLENBQUMsSUFBSSxDQUFJLENBQUMsU0FBSSxDQUFHLENBQUMsQ0FBQztZQUNoQyxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuQyxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLFNBQVMsSUFBSSxDQUFDLENBQUM7U0FDaEI7S0FDRjtBQUNILENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxHQUFlLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFVO0lBQ3BFLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDZCxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBRW5CLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ2xELE9BQU87WUFDTCxPQUFPLEVBQUUsQ0FBQztZQUNWLGFBQWEsRUFBRSxFQUFFO1NBQ2xCLENBQUM7S0FDSDtJQUVELElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNuQixPQUFPO1lBQ0wsT0FBTyxFQUFFLENBQUM7WUFDVixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFDO0tBQ0g7SUFDRCxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0IsT0FBTztRQUNMLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLGFBQWEsZUFBQTtLQUNkLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsR0FBZSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBVTtJQUNwRSxJQUFNLE1BQU0sR0FBR3lWLFdBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixJQUFBLEtBQXVELFdBQVcsQ0FDdEUsR0FBRyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxFQUNMLEVBQUUsQ0FDSCxFQUxlLFNBQVMsYUFBQSxFQUFpQixlQUFlLG1CQUt4RCxDQUFDO0lBQ0ksSUFBQSxLQUEyRCxXQUFXLENBQzFFLEdBQUcsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsRUFDTCxFQUFFLENBQ0gsRUFMZSxXQUFXLGFBQUEsRUFBaUIsaUJBQWlCLG1CQUs1RCxDQUFDO0lBQ0ksSUFBQSxLQUEyRCxXQUFXLENBQzFFLEdBQUcsRUFDSCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsRUFDRCxFQUFFLENBQ0gsRUFMZSxXQUFXLGFBQUEsRUFBaUIsaUJBQWlCLG1CQUs1RCxDQUFDO0lBQ0ksSUFBQSxLQUNKLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBRGhCLFlBQVksYUFBQSxFQUFpQixrQkFBa0IsbUJBQy9CLENBQUM7SUFDakMsSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO1FBQ25CLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQzFCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwRCxDQUFDLENBQUM7S0FDSjtJQUNELElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtRQUNyQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQzVCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwRCxDQUFDLENBQUM7S0FDSjtJQUNELElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtRQUNyQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQzVCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwRCxDQUFDLENBQUM7S0FDSjtJQUNELElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtRQUN0QixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQzdCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwRCxDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxHQUFlLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFVO0lBQzdELElBQUEsS0FBdUQsV0FBVyxDQUN0RSxHQUFHLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLEVBQ0wsRUFBRSxDQUNILEVBTGUsU0FBUyxhQUFBLEVBQWlCLGVBQWUsbUJBS3hELENBQUM7SUFDSSxJQUFBLEtBQTJELFdBQVcsQ0FDMUUsR0FBRyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxFQUNMLEVBQUUsQ0FDSCxFQUxlLFdBQVcsYUFBQSxFQUFpQixpQkFBaUIsbUJBSzVELENBQUM7SUFDSSxJQUFBLEtBQTJELFdBQVcsQ0FDMUUsR0FBRyxFQUNILENBQUMsR0FBRyxDQUFDLEVBQ0wsQ0FBQyxFQUNELEVBQUUsQ0FDSCxFQUxlLFdBQVcsYUFBQSxFQUFpQixpQkFBaUIsbUJBSzVELENBQUM7SUFDSSxJQUFBLEtBQ0osV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFEaEIsWUFBWSxhQUFBLEVBQWlCLGtCQUFrQixtQkFDL0IsQ0FBQztJQUNqQyxJQUFJLFNBQVMsS0FBSyxDQUFDLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDakQsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELElBQUksV0FBVyxLQUFLLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3JELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLFdBQVcsS0FBSyxDQUFDLElBQUksaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNyRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxZQUFZLEtBQUssQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDdkQsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztTQUVlLE9BQU8sQ0FBQyxHQUFlLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFVO0lBQ3ZFLElBQU0sTUFBTSxHQUFHQSxXQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1gsSUFBQSxPQUFPLEdBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFqQyxDQUFrQztJQUNoRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNoQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7U0FFZSxJQUFJLENBQUMsR0FBZSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBVTtJQUNwRSxJQUFNLE1BQU0sR0FBR0EsV0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbEIsT0FBTyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4QyxDQUFDO1NBRWUsTUFBTSxDQUFDLEdBQWUsRUFBRSxLQUFlLEVBQUUsU0FBZ0I7SUFBaEIsMEJBQUEsRUFBQSxnQkFBZ0I7SUFDdkUsSUFBSSxNQUFNLEdBQUdBLFdBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDckIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7UUFDVCxJQUFBLEtBUUYsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQVBmLENBQUMsT0FBQSxFQUNELENBQUMsT0FBQSxFQUNELEVBQUUsUUFLYSxDQUFDO1FBQ2xCLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNqQjtTQUNGO2FBQU07WUFDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDakI7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPO1FBQ0wsV0FBVyxFQUFFLE1BQU07UUFDbkIsUUFBUSxVQUFBO0tBQ1QsQ0FBQztBQUNKOztBQ3ZSQSxJQUFJTyxLQUFHLEdBQUcsNDhtQ0FBNDhtQzs7QUNBdDltQyxJQUFJQSxLQUFHLEdBQUcsb21MQUFvbUw7O0FDQTltTCxJQUFJLEdBQUcsR0FBRyxnNkpBQWc2Sjs7O0FDdUMxNko7QUFDQSxJQUFJLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztBQUMzQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtJQUNqQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7O0NBRTVDO0FBRUQsSUFBTSxTQUFTO0lBQ2IsR0FBQ2pXLGFBQUssQ0FBQyxPQUFPLElBQUc7UUFDZixLQUFLLEVBQUVrVyxLQUFZO1FBQ25CLEtBQUssRUFBRSxDQUFDQyxHQUFZLENBQUM7UUFDckIsS0FBSyxFQUFFLENBQUNDLEtBQVksQ0FBQztLQUN0QjtPQWlDRixDQUFDOztJQWdEQSxrQkFBWSxPQUErQjtRQUEzQyxpQkFxQkM7UUEzQ0QsWUFBTyxHQUFvQjtZQUN6QixTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLENBQUM7WUFDVCxXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDO1FBcVBGLGdCQUFXLEdBQUc7WUFDWixJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBTSxHQUFHLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLElBQUksR0FBRyxFQUFFO29CQUNQLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1RDthQUNGO1NBQ0YsQ0FBQztRQUVGLGNBQVMsR0FBRyxVQUFDLEdBQWUsRUFBRSxLQUFpQjtZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksTUFBTSxFQUFFO2dCQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDeEMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTs0QkFDNUIsSUFBQSxLQUF5QixLQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBbEQsS0FBSyxXQUFBLEVBQUUsYUFBYSxtQkFBOEIsQ0FBQzs0QkFDMUQsSUFBTSxDQUFDLEdBQUcsYUFBYSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7NEJBQ3BDLElBQU0sQ0FBQyxHQUFHLGFBQWEsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDOzRCQUNwQyxJQUFJLEtBQUssS0FBS2xXLFlBQUksQ0FBQyxPQUFPLEVBQUU7Z0NBQzFCLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ3BDLElBQUksR0FBRyxFQUFFO29DQUNQLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQ0FDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO29DQUNqRCxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztvQ0FDbEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dDQUNuQixHQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztxQ0FDMUI7eUNBQU07d0NBQ0wsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7cUNBQzFCO29DQUNELEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQ0FDYixHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztvQ0FDbEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7aUNBQzFCOzZCQUNGO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO1FBRUYsWUFBTyxHQUFHO1lBQ0QsSUFBQSxNQUFNLEdBQUksS0FBSSxPQUFSLENBQVM7WUFDZixJQUFBLEtBQUssR0FBSSxLQUFJLENBQUMsT0FBTyxNQUFoQixDQUFpQjtZQUM3QixJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQ2xDLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLElBQUksR0FBRyxFQUFFO29CQUNQLElBQUksS0FBSyxLQUFLRixhQUFLLENBQUMsYUFBYSxFQUFFO3dCQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztxQkFDaEQ7eUJBQU0sSUFBSSxLQUFLLEtBQUtBLGFBQUssQ0FBQyxJQUFJLEVBQUU7d0JBQy9CLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO3dCQUMxQixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ2pEO3lCQUFNLElBQUksS0FBSyxLQUFLQSxhQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNqQyxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFOzRCQUN4QixHQUFHLENBQUMsU0FBUyxDQUNYLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUNwQixDQUFDLEVBQ0QsQ0FBQyxFQUNELE1BQU0sQ0FBQyxLQUFLLEVBQ1osTUFBTSxDQUFDLE1BQU0sQ0FDZCxDQUFDO3lCQUNIO3FCQUNGO3lCQUFNO3dCQUNMLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7NEJBQ3hCLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7NEJBQ2xFLElBQUksT0FBTyxFQUFFO2dDQUNYLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2dDQUN4QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7NkJBQ2pEO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO1FBRUYsa0JBQWEsR0FBRyxVQUNkLFdBR0M7WUFIRCw0QkFBQSxFQUFBO2dCQUNFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDUCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDUjtZQUVELElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBQ3pCLElBQU0sR0FBRyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksR0FBRyxFQUFFO2dCQUNELElBQUEsS0FBeUIsS0FBSSxDQUFDLG1CQUFtQixFQUFFLEVBQWxELEtBQUssV0FBQSxFQUFFLGFBQWEsbUJBQThCLENBQUM7Z0JBRTFELEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUNyQyxHQUFHLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDMUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMzRCxHQUFHLENBQUMsTUFBTSxDQUNSLENBQUMsR0FBRyxLQUFLLEdBQUcsYUFBYSxFQUN6QixhQUFhLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FDMUMsQ0FBQztvQkFDRixHQUFHLENBQUMsTUFBTSxDQUNSLENBQUMsR0FBRyxLQUFLLEdBQUcsYUFBYSxFQUN6QixLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FDMUMsQ0FBQztpQkFDSDtnQkFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMzRCxHQUFHLENBQUMsTUFBTSxDQUNSLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsYUFBYSxFQUN6QyxDQUFDLEdBQUcsS0FBSyxHQUFHLGFBQWEsQ0FDMUIsQ0FBQztvQkFDRixHQUFHLENBQUMsTUFBTSxDQUNSLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsYUFBYSxFQUN6QyxDQUFDLEdBQUcsS0FBSyxHQUFHLGFBQWEsQ0FDMUIsQ0FBQztpQkFDSDtnQkFDRCxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZDtTQUNGLENBQUM7UUFFRixjQUFTLEdBQUcsVUFDVixXQUdDO1lBSEQsNEJBQUEsRUFBQTtnQkFDRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ1I7WUFFRCxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTztZQUN6QixJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLEdBQUcsRUFBRTtnQkFDRCxJQUFBLEtBQXlCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFsRCxPQUFLLFdBQUEsRUFBRSxlQUFhLG1CQUE4QixDQUFDOztnQkFFMUQsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO29CQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzt3QkFDbEIsSUFDRSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDckIsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3JCLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNyQixDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNyQjs0QkFDQSxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7NEJBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsQ0FBQyxHQUFHLE9BQUssR0FBRyxlQUFhLEVBQ3pCLENBQUMsR0FBRyxPQUFLLEdBQUcsZUFBYSxFQUN6QixDQUFDLEdBQUcsZ0JBQWdCLEVBQ3BCLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFDWCxJQUFJLENBQ0wsQ0FBQzs0QkFDRixHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQzs0QkFDeEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUNaO3FCQUNGLENBQUMsQ0FBQztpQkFDSixDQUFDLENBQUM7YUFDSjtTQUNGLENBQUM7UUFFRixtQkFBYyxHQUFHLFVBQ2YsV0FHQztZQUhELDRCQUFBLEVBQUE7Z0JBQ0UsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNQLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNSO1lBRUQsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBQ3BCLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBQSxLQUF5QixLQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBbEQsS0FBSyxXQUFBLEVBQUUsYUFBYSxtQkFBOEIsQ0FBQztZQUMxRCxJQUFJLEdBQUcsRUFBRTtnQkFDUCxHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztnQkFDNUIsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUMxQixHQUFHLENBQUMsSUFBSSxHQUFHLFVBQVEsS0FBSyxHQUFHLEdBQUcsaUJBQWMsQ0FBQztnQkFFN0MsSUFBTSxRQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDekIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxLQUFLO29CQUMxQixJQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLGFBQWEsQ0FBQztvQkFDeEMsSUFBSSxLQUFLLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzVELEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBTSxDQUFDLENBQUM7d0JBQy9CLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQU0sQ0FBQyxDQUFDO3FCQUM1QztpQkFDRixDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQVMsRUFBRSxLQUFLO29CQUNsQyxJQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLGFBQWEsQ0FBQztvQkFDeEMsSUFBSSxLQUFLLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzVELEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3REO2lCQUNGLENBQUMsQ0FBQzthQUNKO1NBQ0YsQ0FBQztRQUVGLHdCQUFtQixHQUFHO1lBQ3BCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1QsSUFBQSxLQUF1QixLQUFJLENBQUMsT0FBTyxFQUFsQyxPQUFPLGFBQUEsRUFBRSxTQUFTLGVBQWdCLENBQUM7O2dCQUUxQyxhQUFhLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixLQUFLLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQztnQkFDdEQsYUFBYSxHQUFHLGFBQWEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxFQUFDLEtBQUssT0FBQSxFQUFFLGFBQWEsZUFBQSxFQUFDLENBQUM7U0FDL0IsQ0FBQztRQUVGLGVBQVUsR0FBRyxVQUFDLFdBQXVCO1lBQ25DLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxNQUFNLEVBQUU7Z0JBQ0gsSUFBQSxPQUFPLEdBQUksS0FBSSxDQUFDLE9BQU8sUUFBaEIsQ0FBaUI7Z0JBQy9CLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLElBQUEsS0FBSyxHQUFJLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxNQUE5QixDQUErQjtnQkFFckMsSUFBQSxLQUFhLEtBQUksQ0FBQyxNQUFNLEVBQXZCLEdBQUcsUUFBQSxFQUFFLEdBQUcsUUFBZSxDQUFDO2dCQUMvQixJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsT0FBTztnQkFDL0QsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFFLE9BQU87Z0JBQy9ELElBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzVDLElBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBRTVDLElBQUksR0FBRyxFQUFFO29CQUNQLElBQU0sSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDWCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMxQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztvQkFDbEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ3RCLElBQUksS0FBSSxDQUFDLEtBQUssS0FBS0QsVUFBRSxDQUFDLEtBQUssRUFBRTt3QkFDM0IsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7d0JBQ3pCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO3FCQUN4Qjt5QkFBTSxJQUFJLEtBQUksQ0FBQyxLQUFLLEtBQUtBLFVBQUUsQ0FBQyxLQUFLLEVBQUU7d0JBQ2xDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO3dCQUN6QixHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztxQkFDeEI7b0JBQ0QsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNYLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDYixHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDcEIsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNmO2FBQ0Y7U0FDRixDQUFDO1FBRUYsZUFBVSxHQUFHLFVBQUMsTUFBa0I7WUFDOUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQztZQUNwQixJQUFBLEtBQUssR0FBSSxLQUFJLENBQUMsT0FBTyxNQUFoQixDQUFpQjtZQUM3QixJQUFJLE1BQU0sRUFBRTtnQkFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ3pDLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFOzRCQUNmLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3BDLElBQUksR0FBRyxFQUFFO2dDQUNELElBQUEsS0FBeUIsS0FBSSxDQUFDLG1CQUFtQixFQUFFLEVBQWxELEtBQUssV0FBQSxFQUFFLGFBQWEsbUJBQThCLENBQUM7Z0NBQzFELElBQU0sQ0FBQyxHQUFHLGFBQWEsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dDQUNwQyxJQUFNLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQ0FFcEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO2dDQUNuQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0NBQ1gsSUFDRSxLQUFLLEtBQUtDLGFBQUssQ0FBQyxPQUFPO29DQUN2QixLQUFLLEtBQUtBLGFBQUssQ0FBQyxhQUFhO29DQUM3QixLQUFLLEtBQUtBLGFBQUssQ0FBQyxJQUFJLEVBQ3BCO29DQUNBLEdBQUcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO29DQUN0QixHQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztvQ0FDdEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7b0NBQ3pCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2lDQUNwQjtnQ0FDRCxJQUFJLEtBQUssS0FBS0EsYUFBSyxDQUFDLGFBQWEsSUFBSSxLQUFLLEtBQUtBLGFBQUssQ0FBQyxJQUFJLEVBQUU7b0NBQ3pELEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQ0FDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO29DQUNuRCxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztvQ0FDbEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7b0NBQ3pCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTt3Q0FDZixHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztxQ0FDeEI7eUNBQU0sSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0NBQ3ZCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO3FDQUN4QjtvQ0FDRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7b0NBQ1gsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lDQUNkO3FDQUFNO29DQUNMLElBQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29DQUN2QixJQUFJLEdBQUcsU0FBQSxDQUFDO29DQUNSLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTt3Q0FDZixHQUFHLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FDQUMvRDt5Q0FBTTt3Q0FDTCxHQUFHLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FDQUMvRDtvQ0FDRCxJQUFJLEdBQUcsRUFBRTt3Q0FDUCxJQUFNLElBQUksR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQzt3Q0FDL0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3FDQUM1RDtpQ0FDRjtnQ0FDRCxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7NkJBQ2Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7UUF2Z0JBLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBR0QsVUFBRSxDQUFDLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUVoQyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxPQUFPLHFDQUNQLGNBQWMsR0FDZCxPQUFPLENBQ1gsQ0FBQztTQUNIO0tBQ0Y7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBUTtRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ25CO0lBRUQseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBQ3RDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEIsSUFBQSxJQUFJLEdBQUksSUFBSSxDQUFDLE9BQU8sS0FBaEIsQ0FBaUI7UUFDNUIsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN0QjthQUFNO1lBQ0UsSUFBQSxXQUFXLEdBQUksSUFBSSxDQUFDLEdBQUcsWUFBWixDQUFhO1lBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN6QyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLENBQUM7WUFDMUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVEO0tBQ0Y7SUFFRCx1QkFBSSxHQUFKLFVBQUssR0FBZ0I7O1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDaEMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxNQUFBLEdBQUcsQ0FBQyxVQUFVLDBDQUFFLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDMUI7SUFFRCw2QkFBVSxHQUFWLFVBQVcsT0FBOEI7UUFDdkMsSUFBSSxDQUFDLE9BQU8scUNBQU8sSUFBSSxDQUFDLE9BQU8sR0FBSyxPQUFPLENBQUMsQ0FBQztLQUM5QztJQUVELG9DQUFpQixHQUFqQjtRQUFBLGlCQTBDQztRQXpDQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUNiLElBQUEsT0FBTyxHQUFJLElBQUksQ0FBQyxPQUFPLFFBQWhCLENBQWlCO1FBQ3hCLElBQUEsS0FBSyxHQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxNQUE5QixDQUErQjtRQUUzQyxJQUFNLG1CQUFtQixHQUFHLFVBQUMsUUFBa0I7WUFDN0MsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7WUFDaEUsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7WUFDaEUsSUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQU0sQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdELEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DLENBQUM7UUFDRixJQUFNLFdBQVcsR0FBRyxVQUFDLENBQWE7WUFDaEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzVDLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQ3hCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGdCQUFnQixFQUNuRCxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxnQkFBZ0IsQ0FDbkQsQ0FBQztZQUNGLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCLENBQUM7UUFDRixJQUFNLFdBQVcsR0FBRyxVQUFDLENBQWE7WUFDaEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLElBQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUN4QixDQUFDLENBQUMsT0FBTyxHQUFHLGdCQUFnQixFQUM1QixDQUFDLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUM3QixDQUFDO1lBQ0YsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUIsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDNUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDdEQ7S0FDRjtJQUVELDJCQUFRLEdBQVIsVUFBUyxLQUFZO1FBQXJCLGlCQWtEQztRQWpEQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7WUFBRSxPQUFPO1FBQ3pDLElBQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDO1FBQzFDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxLQUFLLEtBQUtDLGFBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO2FBQ2hEO2lCQUFNLElBQ0wsS0FBSyxLQUFLQSxhQUFLLENBQUMsT0FBTzs7Ozs7O2NBTXZCO2dCQUNBLElBQU0sT0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQzFCLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEMsT0FBSyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUU3QixJQUFNLFFBQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7b0JBQ3pDLElBQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7b0JBQ3hCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNaLE9BQU8sR0FBRyxDQUFDO2lCQUNaLENBQUMsQ0FBQztnQkFDSCxJQUFNLFFBQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7b0JBQ3pDLElBQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7b0JBQ3hCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNaLE9BQU8sR0FBRyxDQUFDO2lCQUNaLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUNULEtBQUssQ0FBQyxJQUFJLDBDQUFFLE9BQUssR0FBSyxRQUFNLFNBQUssUUFBTSxRQUFFO3FCQUN0QyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUEsQ0FBQztxQkFDNUIsR0FBRyxDQUNGLFVBQUEsR0FBRztvQkFDRCxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTzt3QkFDakIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztxQkFDcEMsQ0FBQztpQkFBQSxDQUNMLENBQ0osQ0FBQyxJQUFJLENBQUM7b0JBQ0wsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsUUFBTSxDQUFDO29CQUM5QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxRQUFNLENBQUM7b0JBQzlCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLE9BQUssQ0FBQztvQkFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUdBLGFBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQzthQUN0QztTQUNGO0tBQ0Y7SUFFRCx5QkFBTSxHQUFOLFVBQU8sR0FBZ0IsRUFBRSxLQUFrQjtRQUN6QyxJQUFJLEdBQUc7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLEtBQUs7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFBLEtBQXFELElBQUksQ0FBQyxPQUFPLEVBQWhFLFNBQVMsZUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLFdBQVcsaUJBQUEsRUFBRSxVQUFVLGdCQUFnQixDQUFDO1FBQ3hFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5QixJQUFBLEtBQTJDLGVBQWUsQ0FDOUQsSUFBSSxDQUFDLEdBQUcsRUFDUixTQUFTLEVBQ1QsTUFBTSxDQUNQLEVBSm1CLGlCQUFpQixpQkFBQSxFQUFFLE1BQU0sWUFJNUMsQ0FBQztZQUNGLElBQU0sV0FBVyxHQUFHLElBQUk7a0JBQ3BCLGlCQUFpQjtrQkFDakI7b0JBQ0UsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNQLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztpQkFDUixDQUFDO1lBRU4sSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUNSLElBQUEsS0FBSyxHQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxNQUE5QixDQUErQjtnQkFDM0MsSUFBTSxlQUFlLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xFLElBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0JBRWhELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixRQUFRLE1BQU07b0JBQ1osS0FBS0MsY0FBTSxDQUFDLE9BQU87d0JBQ2pCLE1BQU07b0JBQ1IsS0FBS0EsY0FBTSxDQUFDLFFBQVE7d0JBQ2xCLE9BQU87NEJBQ0wsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLO2dDQUNqQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7d0JBQ3JDLE1BQU07b0JBQ1IsS0FBS0EsY0FBTSxDQUFDLFVBQVU7d0JBQ3BCLE9BQU87NEJBQ0wsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLO2dDQUNqQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7d0JBQ3JDLE1BQU07b0JBQ1IsS0FBS0EsY0FBTSxDQUFDLFdBQVc7d0JBQ3JCLE9BQU87NEJBQ0wsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLO2dDQUNqQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7d0JBQ3JDLE9BQU87NEJBQ0wsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLO2dDQUNqQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7d0JBQ3JDLE1BQU07aUJBQ1Q7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3RDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2pDO1lBRUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVCLElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDOUI7WUFDRCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLGFBQUgsR0FBRyxjQUFILEdBQUcsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGFBQUgsR0FBRyxjQUFILEdBQUcsR0FBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7U0FFdEQ7S0FDRjtJQXNTSCxlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
