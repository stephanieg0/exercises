var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";


// Keep track of which veggie we're on in the loop
var currentVeggie = "";


// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
/*for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  currentBand = ???;


  // Add the veggie names into the correct <div>
  currentVeggie = ???;

} */

for (var i = 0; i < bands.length; i++) {
	currentBand = bands[i];
	currentVeggie = vegetables[i];
	console.log("current Band", currentBand);
	console.log("current Veggie", currentVeggie);

	var bandOutput = "<div>" + currentBand + "</div>";

	bandElement.innerHTML = bandElement.innerHTML + bandOutput;
	console.log(bandOutput);

	var veggieOutput = "<div>" + currentVeggie + "</div>";

	veggieElement.innerHTML = veggieElement.innerHTML + veggieOutput;
	console.log(veggieOutput); 
}


/*Loop through the two arrays provided and output each element in the arrays into their corresponding HTML 
<div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...) */