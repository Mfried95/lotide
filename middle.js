const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArrayEqual');




const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    const oddIndex = Math.floor(array.length / 2);
    return [array[oddIndex]];
  } else if (array.length % 2 === 0) {
    const evenIndex = array.length / 2;
    return [array[evenIndex - 1], array[evenIndex]];
  }
};


assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2]), []);
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));


module.exports = middle;