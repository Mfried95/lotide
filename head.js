const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("The same");
  } else {
    console.log("Does not match");
  }
};


assertEqual("Bootcamp", "Bootcamp");
assertEqual(1,2);


const headTest = function() {
  console.log(assertEqual[0]);
};

assertEqual(headTest([5,6,7]), 5);
assertEqual(headTest(["Hello", "Lighthouse", "Labs"]), "Hello");