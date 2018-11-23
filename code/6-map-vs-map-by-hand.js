// https://jsperf.com/map-vs-manual-mapping

'use strict';

function mapByHand() {
  var games = [{
      name: 'Doom',
      year: 1993
    },
    {
      name: 'Golden Axe',
      year: 1989
    },
    {
      name: 'Gauntlet',
      year: 1985
    },
    {
      name: 'Frostbite',
      year: 1983
    },
    {
      name: 'Tiger Heli',
      year: 1985
    }
  ];
  let names = [];
  for (let i = 0; i < games.length; i++) {
    names.push(games[i].name);
  }

  return names;
}

function newMap() {
  var games = [{
      name: 'Doom',
      year: 1993
    },
    {
      name: 'Golden Axe',
      year: 1989
    },
    {
      name: 'Gauntlet',
      year: 1985
    },
    {
      name: 'Frostbite',
      year: 1983
    },
    {
      name: 'Tiger Heli',
      year: 1985
    }
  ];

  let names = games.map(g => g.name);

  return names;
}

function newMapWithPolyfill() {
  Array.prototype.map = function(callback, thisArg) {
    var T, A, k;
    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    A = new Array(len);
    k = 0;
    while (k < len) {
      var kValue, mappedValue;
      if (k in O) {
        kValue = O[k];
        mappedValue = callback.call(T, kValue, k, O);
        A[k] = mappedValue;
      }
      k++;
    }

    return A;
  };

  var games = [{
    name: 'Doom',
    year: 1993
  }, {
    name: 'Golden Axe',
    year: 1989
  }, {
    name: 'Gauntlet',
    year: 1985
  }, {
    name: 'Frostbite',
    year: 1983
  }, {
    name: 'Tiger Heli',
    year: 1985
  }];

  var names = games.map(function(g) {
    return g.name;
  });

  return names;
}

exports.compare = {
  mapByHand: mapByHand,
  newMap: newMap,
  newMapWithPolyfill: newMapWithPolyfill,
};

require('bench').runMain();
