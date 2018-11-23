// https://jsperf.com/destructuring-vs-classic-assignment

'use strict';

// ES5
function noDestructuring() {
  var foo = ["uno", "dos", "tres"];

  var uno = foo[0];
  var dos = foo[1];
  var tres = foo[2];
}

// ES6
function es6Destructuring() {
  var foo = ["uno", "dos", "tres"];
  var [uno, dos, tres] = foo;
}

// ES6 with polyfills
// QUEDA IGUAL QUE ES5

exports.compare = {
  noDestructuring: noDestructuring,
  es6Destructuring: es6Destructuring,
};

require('bench').runMain();
