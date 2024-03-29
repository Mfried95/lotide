const eqArrays = require('./eqArrays');


const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`passed: ${array1} ==== ${array2}`);
  } else {
    console.log(`failed: ${array1} !=== ${array2}`);
  }
};

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [3, 2, 1]);


module.exports = assertArrayEqual;