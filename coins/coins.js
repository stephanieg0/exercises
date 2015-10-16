  /*...........YOUR MISSION...........

  Write a program that will convert a dollar amount to the
  number of coins that make up the amount. Use the common
  American coins of quarters, dimes, nickels, and pennies.

  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
*/
// Funtion has a name and a placeholder for a variable called dollar amount
function coinCounter (dollarAmount) {
  var coinPurse = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
  }
// divides by 100 and Math.round to keep whole numbers (if $1.25, will be 125) 
  dollarAmount = Math.round(dollarAmount * 100);

//dollar amount is being divided by the value of a quearter and Math.round will round to the lowest number (5.45 will be 5)
//the result will be stored in coinPurse (my object above inside the function)
  coinPurse.quarters = Math.floor(dollarAmount/25);
  dollarAmount = dollarAmount - coinPurse.quarters * 25;

//the dollar amount gets divided by dimes and gets stored in the coinPurse.dimes var.
  coinPurse.dimes = Math.floor(dollarAmount/10);
  dollarAmount = dollarAmount - coinPurse.dimes * 10;

//dollar amount gets divided by nickles and stored
  coinPurse.nickels = Math.floor(dollarAmount/5);
  dollarAmount = dollarAmount - coinPurse.nickels *5;

//dollar amount gets divided by pennies
  coinPurse.pennies = Math.floor(dollarAmount/1);

//I want to see what is in my coinPurse
  return coinPurse;
  
}
//variable dollarAmount has to be defined outside the function to have a value. 
var dollarAmount = (1.37);
//function has to be called with the variable dollarAmount inside to be able to be defined later
console.log(coinCounter(dollarAmount));
