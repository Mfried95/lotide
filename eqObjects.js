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


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false