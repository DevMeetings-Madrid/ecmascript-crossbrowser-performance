// https://jsperf.com/for-vs-for-cached-vs-for-each

'use strict';

function forLoop() {
  var sarray = [1, 2, 3];
  var marray = Array.from({
    length: 50
  }, () => Math.floor(Math.random() * 9));
  var larray = Array.from({
    length: 100
  }, () => Math.floor(Math.random() * 9));

  for (let i = 0; i < sarray.length; i++) {
    sarray[i] + 1;
  }
  for (let i = 0; i < marray.length; i++) {
    marray[i] + 1;
  }
  for (let i = 0; i < larray.length; i++) {
    larray[i] + 1;
  }
}

function forrLoopLengthCached() {
  var sarray = [1, 2, 3];
  var marray = Array.from({
    length: 50
  }, () => Math.floor(Math.random() * 9));
  var larray = Array.from({
    length: 100
  }, () => Math.floor(Math.random() * 9));

  var sLength = sarray.length;
  for (let i = 0; i < sLength; i++) {
    sarray[i] + 1;
  }
  var mLength = marray.length;
  for (let i = 0; i < mLength; i++) {
    marray[i] + 1;
  }
  var lLength = larray.length;
  for (let i = 0; i < lLength; i++) {
    larray[i] + 1;
  }
}


function eachLoop() {
  var sarray = [1, 2, 3];
  var marray = Array.from({
    length: 50
  }, () => Math.floor(Math.random() * 9));
  var larray = Array.from({
    length: 100
  }, () => Math.floor(Math.random() * 9));

  sarray.forEach(e => {
    e + 1;
  });
  marray.forEach(e => {
    e + 1;
  });
  larray.forEach(e => {
    e + 1;
  });
}


exports.compare = {
  eachLoop: eachLoop,
  forLoop: forLoop,
  forrLoopLengthCached: forrLoopLengthCached,
};

require('bench').runMain();
