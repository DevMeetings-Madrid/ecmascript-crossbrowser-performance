// https://jsperf.com/template-strings-vs-string-concat

'use strict';

// ES6
function templateStrings() {
  var customer = {
    name: "Foo"
  }
  var card = {
    amount: 7,
    product: "Bar",
    unitprice: 42
  }
  var message = `Hello ${customer.name},
    want to buy ${card.amount} ${card.product}
    for a total of ${card.amount * card.unitprice} bucks?`;

    return message;
}

// ES5
function oldStringConcat() {
  var customer = {
    name: "Foo"
  };
  var card = {
    amount: 7,
    product: "Bar",
    unitprice: 42
  };
  var message = "Hello " + customer.name +
    ",\n want to buy " + card.amount + " " + card.product +
    "\n for a total of " + (card.amount * card.unitprice) + " bucks?";

    return message;
}

// ES6 with polyfills
// QUEDA IGUAL QUE ES5

exports.compare = {
  oldStringConcat: oldStringConcat,
  templateStrings: templateStrings,
};

require('bench').runMain();
