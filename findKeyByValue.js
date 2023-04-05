const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("The same");
  } else {
    console.log("Does not match");
  }
};



const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);

  for (let item of keys) {
    if (object[item] === value) {
      return item;
    }
  }

  return undefined;
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);