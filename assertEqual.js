const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("The same");
  } else {
    console.log("Does not match");
  }
};


module.exports = assertEqual;