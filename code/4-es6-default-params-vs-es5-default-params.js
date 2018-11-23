// https://jsperf.com/default-params-vs-if

'use strict';

// ES5
function ifStatements(x, y, z) {
  if (!y) {
    y = 7;
  }
  if (!z) {
    z = 42;
  }
  return x + y + z;
};

// ES6
function defaultParams(x, y = 7, z = 42) {
  return x + y + z
}

exports.compare = {
  ifStatements: () => ifStatements(99),
  defaultParams: () => defaultParams(99),
};

require('bench').runMain();
