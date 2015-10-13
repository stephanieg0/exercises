/*Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

A score between 50-60 is an F
A score between 61-70 is a D
A score between 71-80 is a C
A score between 81-90 is a B
A score between 91-100 is an A
Start with array of random scores in your JavaScript
*/

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var f = [];
var d = [];
var c = [];
var b = [];
var a = [];
var lowestGrade = 100;
var highestGrade = 0;

// my loop

for (var i = 0;  i < scores.length; i++) {
	var score = scores[i];
		
// getting one lowest and one highest
	if (score < lowestGrade) {
		lowestGrade = score;
	} else if (score > highestGrade) {
		highestGrade = score;

	}

// getting the arrays
	if (score < 60) {
		f.push(score);

	} else if (score < 70 && score > 60) {
		d.push(score);

	} else if (score < 80 && score > 70) {
		c.push(score);

	} else if (score < 90 && score > 80) {
		b.push(score);

	} else if (score< 100 && score> 90) {
		a.push(score);

	}
	

}

//printing my arrays

console.log("lowest grades", f.length);
console.log("highest grades", a.length);
console.log("lowest grade", lowestGrade);
console.log("highest grade", highestGrade);

