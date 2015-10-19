/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/

//To Celsius function
function toCelsius (tempFahr) {
  tempFahr = (tempFahr - 32) * 5 / 9;
  console.log(tempFahr + " celsius");
  return tempFahr;
 }


//To Fahrenheit fuction
function toFahrenheit(tempCelsius) {
  tempCelsius = (tempCelsius * 1.8) + 32;
  console.log(tempCelsius + " fahrenheit");
  return tempCelsius;
  }


// Refence ids from html
var button = document.getElementById("converter");
var clearButton = document.getElementById("clear");
var tempOutPut = document.getElementById("tempOutput");
var temperature = document.getElementById("value");


//Main converter Function
function determineConverter() {
  //Linking ids to the radio buttons and the input box
  var temperature = document.getElementById("value").value;
  var radioButtonF = document.getElementById("F");
  var radioButtonC = document.getElementById("C");
  //conditional statement for fahrenheit or celsius buttons
  if (radioButtonF.checked) {
    var resultFahrenheit = toFahrenheit(temperature);
     tempOutPut.innerHTML = Math.round(resultFahrenheit);
  } else if (radioButtonC.checked) {
      var resultCelsius = toCelsius(temperature);
      tempOutput.innerHTML = Math.round(resultCelsius);
  }
  //Fahrenheit conditional statement for temperature link to color ids
  if(resultFahrenheit >= 90) {
    tempOutput.classlist.add("hot");

  } else if (resultFahrenheit <= 32) {
    tempOutput.classlist.add("cold");

  } else {
    tempOutput.classlist.add("normal");
  }

  //Celsius conditional statement for temperature link to color ids
  if(resultCelsius >= 32) {
    tempOutput.classlist.add("hot");

  } else if (resultCelsius <= 0) {
    tempOutput.classlist.add("cold");

  } else {
    tempOutput.classlist.add("normal");
  }

  return determineConverter();
}



//Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

clearButton.addEventListener("click", function() {
  temperature.value = "";
  tempOutput.innerHTML = "";
});










