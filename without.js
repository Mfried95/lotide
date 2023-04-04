const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("The same");
  } else {
    console.log("Does not match");
  }
};

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

const without = function(array1, array2) {
  let filteredArray = [];
  
  for (const element of array1) {
    if (!array2.includes(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

console.log(without([1, 2, 3], [1]))