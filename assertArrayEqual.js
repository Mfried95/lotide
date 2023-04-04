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

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [3, 2, 1]);
