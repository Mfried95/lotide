const eqArrays = function (arr1, arr2) {
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

const assertArrayEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`passed: ${array1} ==== ${array2}`);
  } else {
    console.log(`failed: ${array1} !=== ${array2}`);
  }
};



const middle = function (array) {
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


