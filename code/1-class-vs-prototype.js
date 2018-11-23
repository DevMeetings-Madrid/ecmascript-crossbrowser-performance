// https://jsperf.com/class-prototype-flb

'use strict';

// ES6
function buildWithClass() {
  class Shape {
    constructor(id, x, y) {
      this.id = id
      this.move(x, y)
    }
    move(x, y) {
      this.x = x
      this.y = y
    }
  }

  var rect = new Shape('test', 1, 2);
  return rect;
}

// ES5
function buildWithPrototype() {
  var Rectangle = function(id, x, y) {
    this.id = id;
    this.move(x, y);
  };

  Rectangle.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
  };

  var rect = new Rectangle('test', 1, 2);
  return rect;
}

// ES6 with polyfills
function buildWithClassAndPolyfill() {
  'use strict';

  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Shape = function() {
    function Shape(id, x, y) {
      _classCallCheck(this, Shape);

      this.id = id;
      this.move(x, y);
    }

    _createClass(Shape, [{
      key: 'move',
      value: function move(x, y) {
        this.x = x;
        this.y = y;
      }
    }]);

    return Shape;
  }();

  var rect = new Shape('test', 1, 2);
  return rect;
}

exports.compare = {
  buildWithPrototype: buildWithPrototype,
  buildWithClass: buildWithClass,
  buildWithClassAndPolyfill: buildWithClassAndPolyfill,
};

require('bench').runMain();
