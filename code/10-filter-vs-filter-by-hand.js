// https://jsperf.com/filter-vs-filter-by-hand

'use strict';

function filterByHand() {
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

  let weAreOld = [];
  for (let i = 0; i < games.length; i++) {
    if (games[i].year <= 1984) {
      weAreOld.push(games[i]);
    }
  }

  return weAreOld;
}

function newFilter() {
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

  var weAreOld = games.filter(g => g.year <= 1984);

  return weAreOld;
}

function newFilterWithPolyfill() {
  'use strict';

  Array.prototype.filter = function(fn) {
    var rv = [];

    for (var i = 0, l = this.length; i < l; i++)
      if (fn(this[i])) rv.push(this[i]);

    return rv;
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

  var weAreOld = games.filter(function(g) {
    return g.year <= 1984;
  });

  return weAreOld;
}

exports.compare = {
  filterByHand: filterByHand,
  newFilter: newFilter,
  newFilterWithPolyfill: newFilterWithPolyfill,
};

require('bench').runMain();
