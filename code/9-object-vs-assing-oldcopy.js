// https://jsperf.com/object-assign-vs-classic-vs-polyfill

'use strict';

function oldCopy() {
  const obj = {
    a: 'a',
    b: 'b',
    c: 'c'
  };

  const copy = JSON.parse(JSON.stringify(obj));
}

function objectAssing() {
  const obj = {
    a: 'a',
    b: 'b',
    c: 'c'
  };

  const copy = Object.assign({}, obj);
}

function objectAssingWithPolyfill() {
  Object.assign = function(target, varArgs) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };

  const obj = {
    a: 'a',
    b: 'b',
    c: 'c'
  };

  const copy = Object.assign({}, obj);
}

exports.compare = {
  oldCopy: oldCopy,
  objectAssing: objectAssing,
  objectAssingWithPolyfill: objectAssingWithPolyfill,
};

require('bench').runMain();
