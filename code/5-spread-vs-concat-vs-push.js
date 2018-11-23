// https://jsperf.com/spread-vs-concat-vs-push

'use strict';

// ES5 Option 1
function concatMethod() {
  var a, b, c, d;
  a = [1, 2, 3];
  b = "dog";
  c = [42, "cat"];

  // Using the concat method.
  d = a.concat(b, c);
}

// ES5 Option 2
function usingPush() {
  var a, b, c, d;
  a = [1, 2, 3];
  b = "dog";
  c = [42, "cat"];

  d = a.push(b, c[0], c[1]);
}

// ES6
function spreadOperator() {
  var a, b, c, d;
  a = [1, 2, 3];
  b = "dog";
  c = [42, "cat"];

  // Using the spread operator.
  d = [...a, b, ...c];
}

// ES6 with polyfill
function spreadWithPolyfill() {
  "use strict";

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var a, b, c, d;
  a = [1, 2, 3];
  b = "dog";
  c = [42, "cat"];

  // Using the spread operator.
  d = [].concat(_toConsumableArray(a), [b], _toConsumableArray(c));
}

exports.compare = {
  concatMethod: concatMethod,
  spreadOperator: spreadOperator,
  usingPush: usingPush,
  spreadWithPolyfill: spreadWithPolyfill,
};

require('bench').runMain();
