// https://jsperf.com/arrow-function-vs-function-vs-function-binded

'use strict';

function oldFunction() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  var fun1 = function(a) {
    return a + 2;
  };


  var fun2 = function(a) {
    return a > 10;
  }

  array.forEach(fun1);
  array.filter(fun2);
}

function arrowFunction() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  array.forEach((a) => a + 2);
  array.filter((a) => a > 10);
}

function oldBinded() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  var fun1 = function(a) {
    return a + 2;
  };

  var fun2 = function(a) {
    return a > 10;
  }

  array.forEach(fun1.bind(this));
  array.filter(fun2.bind(this));
}

exports.compare = {
  oldFunction: oldFunction,
  arrowFunction: arrowFunction,
  oldBinded: oldBinded,
};

require('bench').runMain();
