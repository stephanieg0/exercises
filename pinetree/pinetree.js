/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.

function tree(height) {
  var out = [];
  for (var i = 0; i < height; i++) {
    out = out + "*";
    console.log(out);   
  }

  return out;
}
var height = 5;
tree(height);



// for (var i = Things.length - 1; i >= 0; i--) {
//   Things[i]
// };