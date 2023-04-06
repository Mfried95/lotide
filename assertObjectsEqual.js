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


const eqObjects = function(object1, object2) {
  let output = true;
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) output = output && false;
  else for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      output = output && (eqArrays(object1[key], object2[key]));
    } else if (typeof(object1[key]) === "object" || typeof(object2[key]) === "object") {
      output = output && eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) output = output && false;
  }
  return output;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) return (console.log(` Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  return (console.log(` Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
};


console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }));
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2" }));
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2", c: "1" }));