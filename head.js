const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("The same");
  } else {
    console.log("Does not match");
  }
};


assertEqual("Bootcamp", "Bootcamp");
assertEqual(1,2);


function head() {
  console.log(assertEqual[0]);
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");