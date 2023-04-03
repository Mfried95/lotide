const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("The same");
  } else {
    console.log("Does not match");
  }
};


assertEqual("Bootcamp", "Bootcamp");
assertEqual(1,2);