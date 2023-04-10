const assertEqual = require('./assertEqual');


const head = function() {
  console.log(assertEqual[0]);
};

head();

module.export = head();