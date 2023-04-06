const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`passed: ${array1} ==== ${array2}`);
  } else {
    console.log(`failed: ${array1} !=== ${array2}`);
  }
};

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log(results2);