// https://jsperf.com/reduce-vs-by-hand

'use strict';

function reduce() {
  const player = [{
      score: 10
    },
    {
      score: 20
    },
    {
      score: 30
    },
    {
      score: 40
    },
    {
      score: 50
    }
  ];

  let scores = player.reduce((sum, p) => sum + p.score, 0);
}

function reduceByHand() {
  const player = [{
      score: 10
    },
    {
      score: 20
    },
    {
      score: 30
    },
    {
      score: 40
    },
    {
      score: 50
    }
  ];
  let scores = 0;
  for (let i = 0; i < player.length; i++) {
    scores += player[i].score;
  }
}

exports.compare = {
  reduce: reduce,
  reduceByHand: reduceByHand,
};

require('bench').runMain();
